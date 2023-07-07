# Contributing

First read the overall Qiskit project contributing guidelines. These are all
included in the qiskit documentation:

https://qiskit.org/documentation/contributing_to_qiskit.html

## Contributing to qiskit_sphinx_theme

In addition to the general guidelines, there are specific details for
contributing to qiskit_sphinx_theme, these are documented below.

------
## Folder Structure

There are a few important subfolders to be aware of:

### `/src`
This subfolder contains the HTML, CSS, and Python files that are used for the Qiskit themes. It has these folders:

* `assets`: CSS and JavaScript for our Furo theme, which is the future of the Sphinx theme.
* `furo_py`: Python initialization code vendored from the Furo theme.
* `pytorch`: all the code for the legacy Pytorch theme.
* `theme`: static files, like HTML templates, for our Furo theme.

The top-level Python files are used for logic used by the theme, such as `translations.py` determining what URLs the HTML should use for translations support.

### `/example_docs`
This subfolder contains a scaled down version of the Sphinx build that builds the documentation for the Qiskit repos. 

It pulls styles from the `/src` subfolder. You can check any changes you are making to theme by building the documentation (see running locally section) and opening the HTML files generated in `example_docs/docs/_qiskit_build` and `example_docs/docs/_pytorch_build`.

### `/docs_guide`
This subfolder contains guidance on how to write documentation and build sphinx projects for Qiskit and Qiskit Ecosystem projects. You can view the fully rendered docs guide at https://qisk.it/docs-guide

------
## Run locally

We use [Tox](https://tox.wiki/en/latest/), which you will need to install globally (e.g. using [`pipx`](https://pypa.github.io/pipx/)).

* Run Python tests: `tox -e py`
* Build `example_docs/` with the new Furo "Qiskit" theme:
  1. `tox -e qiskit`
  2. Open up `example_docs/docs/_qiskit_build/index.html` in your browser
* Build `example_docs/` with the legacy Pytorch theme:
  1. `tox -e pytorch`
  2. Open up `example_docs/docs/_pytorch_build/index.html` in your browser
* Build `docs_guide`:
  1. `tox -e docs-guide`
  2. Open up `docs_guide/_build/html/index.html` in your browser.
* Run doctests for the docs guide: `tox -e doctest`

Sometimes Sphinx's caching can get in a bad state. First, try running `tox -e clean`, which will remove Sphinx's cache. If you are still having issues, try adding `-r` your command, e.g. `tox -e qiskit -r`. `-r` tells Tox to reinstall the dependencies.

------
## Visual regression testing

We use visual regression testing via [Playwright](https://playwright.dev/docs/test-snapshots) to take screenshots of the site and check that every change we make is intentional. If a screenshot has changed, the test will fail. 

If the change was intentional, we need to update the screenshot. Otherwise, it means your change unintentionally impacted something, so you need to tweak your change.

The test runner creates a folder called `snapshot_results`, which is useful to determine what the difference is. For each failed test, there will be three files:

* `<my-test-name>-actual.png`, what your change resulted in.
* `<my-test-name>-expected.png`, what we expected.
* `<my-test-name>-diff.png`, a heat map showing where the differences are.

### How to check snapshot results in CI

We upload `snapshot_results` in CI. So, you can get the changed snapshot from GitHub Actions:

1. Navigate to the GitHub Actions page for the "Tests" action.
2. Open the "Summary" page with the house icon.
3. Under the "Artifacts" section, there should be a "snapshot_results" entry. Download it.

### How to check snapshot results locally

You can also run the tests locally for faster iteration, although it requires a little setup. If you don't want to install the below tools, it is okay to use CI for snapshot testing.

First, you need to install:

1. [Node.js](https://nodejs.org/en). If you expect to use JavaScript in other projects, consider using [NVM](https://github.com/nvm-sh/nvm). Otherwise, consider using [Homebrew](https://formulae.brew.sh/formula/node) or installing [Node.js directly](https://nodejs.org/en).
2. [Docker](https://www.docker.com). You must also ensure that it is running.
   * If you cannot install Docker Desktop (such as IBM contributors), you can use [Rancher Desktop](https://rancherdesktop.io). When installing, choose Moby/Dockerd as the engine, rather than nerdctl. To ensure it's running, open up the app "Rancher Desktop". 

Then, to run the tests locally:

1. `npm install`
2. `npm run test-qiskit`

The docs will rebuild every time you run `npm run test-qiskit`.

### How to update the expected snapshot for intentional changes

First, get the `snapshot_results` folder, either by downloading it from CI or by running the tests locally. Then:

1. Find the "actual" snapshot for the failing test, such as `footer-includes-page-analytics-1-actual.png`.
2. Copy that snapshot into the folder `tests/js/qiskit.test.js-snapshots`. Rename the `-actual.png` file ending to be `-linux.png` and overwrite the prior file.

------
## Updating bundled web components

We use web components from https://github.com/Qiskit/web-components to include common design elements from qiskit.org in our documentation.

To update the top nav bar web component:

1. In https://github.com/Qiskit/web-components, run `npm install` then `npm run build`.
2. There should be a file created at the root of the web components repository called `experimental-bundled-ui-shell.js`. Copy its contents into these files in this theme repository:
   1. `src/qiskit_sphinx_theme/pytorch/static/js/web-components/top-nav-bar.js`
   2. `src/qiskit_sphinx_theme/theme/qiskit-sphinx-theme/static/js/web-components/top-nav-bar.js`
3. Build the example docs with `tox -e qiskit` and `tox -e pytorch` to ensure everything works.

If you want to add a new web component:

1. Work with the web components repository's team to set up `npm run build` to generate a single JavaScript file.
2. Add the file contents to the `src/qiskit_sphinx_theme/theme/qiskit-sphinx-theme/static/js/web-components/` folder in this theme repository. (We shouldn't add web components to Pytorch.)
3. Load the web component in `extra_head.html` with a line like `<script src="{{ pathto('_static/js/web-components/my-component.js', 1) }}"></script>`.
4. Use the web component element in the relevant HTML, e.g. `<my-component>` in `layout.html`. Remember to surround the change with a `QISKIT CHANGE:` comment.
5. Build the example docs with `tox -e qiskit` to ensure everything works.
6. Update this guide with specific instructions for the web component.

------
## How to preview docs in PRs

We upload the docs builds to CI. So, you can download what the site will look like from GitHub Actions:

1. Navigate to the GitHub Actions page for the "Tests" action.
2. Open the "Summary" page with the house icon.
3. Under the "Artifacts" section, there should be a "html_docs" entry. Download it.
4. Choose the theme you want, such as `qiskit_html_docs.tar.gz`, and un-tar it. Then, open the `index.html` page in a browser.

Contributors with write access can also use live previews of the docs: GitHub will deploy a website using your changes. To use live previews, push your branch to `upstream` rather than your fork. GitHub will leave a comment with the link to the site. Please prefix your branch name with your initials, e.g. `EA/add-translations`, for good Git hygiene.

------
## FYI: Vendoring Furo

We vendor [Furo](https://github.com/pradyunsg/furo), meaning that we copy its code into this project. This allows us to make some changes that we could not easily do via Sphinx's alternative of using "theme inheritance".

To keep it clear what is base Furo vs. our code, every vendored file has either one of these two styles of comments:

```
{#-
  This file is vendored from Furo (created by Pradyun Gedam) and used under the MIT license.
  It should have no changes.
-#}
```

```
{#-
  This file is vendored from Furo (created by Pradyun Gedam) and used under the MIT license.

  When adding custom Qiskit code, surround it with `QISKIT CHANGE: start` and
  `QISKIT CHANGE: end` Jinja-style comments.
-#}
```

We are careful to not change certain files like Furo's styling files to make it easier to sync our code with theirs.

In general, we try to keep changes to a minimum because every divergence we make from base Furo increases our maintenance burden. Hence we prioritise only making changes that are important to the Qiskit brand. If the change would be generally useful to other users of Furo, we try to contribute upstream to the Furo project itself.

### How to change HTML

When making changes, use those comments to make clear where and what we changed. For example:

```
{#- QISKIT CHANGE: start. -#}
{% include "custom_templates/extra_head.html" %}
{#- QISKIT CHANGE: end. -#}
```

If the change is greater than 1-3 lines, write the code in a new file in `theme/qiskit-sphinx-theme/custom_templates`, then use Jinja's `include` directive, as shown in the example right above.

### How to change styling (CSS/Sass)

Make SCSS changes in the files at `assets/styles`. 

Do not put any changes in `assets/styles/furo`. We keep that folder in sync with upstream Furo and must never customize its code. Instead, all changes must be in our own custom files, including overrides of the base Furo styling.

When adding changes, document the rationale unless the code is already self-documenting and obvious. Group similar changes into sections.

You can change [Furo's CSS variable values](https://github.com/pradyunsg/furo/tree/main/src/furo/assets/styles/variables) by setting them in the `body` rule at the top. When introducing our own variables, either use a Sass variable or prefix the CSS variable with `--qiskit` for clarity, e.g. `--qiskit-top-nav-bar-height`.

### How to change Furo's Python setup

Edit `furo_py/__init__.py`, but use comments like this to make the change clear:

```python
# QISKIT CHANGE: start. change the theme path.
THEME_PATH = (Path(__file__).parent / "theme" / "qiskit-sphinx-theme").resolve()
# QISKIT CHANGE: end.
```

### How to sync with upstream Furo

Check this repository's file `furo-sync.txt` to get the commit of Furo from the last time we synced; we need to closely analyze all changes made to Furo's `main` branch since that commit.

Find the specific commits that have changed since the commit from `furo-sync.txt` and the lastest commit on `main`. You can do this in GitHub's web UI at https://github.com/pradyunsg/furo/commits/main, or by running `git log --oneline <commit-id>..main`, e.g. `git log --online 490527b..main`.

Then, for each commit, look closely at which files have changed. Update our vendored code to match Furo. It can often be easiest to copy-and-paste the Furo file exactly, and then look at the Git diff to add back any changes we've made, such as the comments we add at the top of files explaining how vendoring works. If you need to add any new files, add a comment attributing the code to Furo (look at sibling files).

Finally, update `furo-sync.txt` with the commit ID from `main`.

### How to add an icon

Edit the file `theme/qiskit-sphinx-theme/partials/icons.html`. Copy the HTML code of the `<svg></svg>` tags and add them as the first element within the `<symbol>` tag. Don't forget to include the `id` attribute, which will serve as the name associated with the icon. 

To use the icon, reference it with `#`.

 For example:
https://github.com/Qiskit/qiskit_sphinx_theme/blob/1a1c1341a39d196d78fb79d6264b762ab5398c93/qiskit_sphinx_theme/furo/base/page.html#L57


------
## Releases

We use [semantic versioning](https://semver.org/). Every release is part of one specific "minor version release series"; for example, 1.11.0rc1 and 1.11.3 are both part of the 1.11 release series.

When starting a new minor release series like `1.11`, we create a new Git branch `1.11`. That allows us to keep making breaking changes to `main` without impacting prior releases. We can then cherry-pick relevant bug fixes from `main` to the release branch like `1.11`.

The release process changes whether you are releasing the very first `rc1` for that release series, e.g. `1.11.0rc1` or `1.12.0rc1`. Otherwise, all other releases follow the same process.

### Process for `rc1` releases

1. Bump the version:
   1. `git checkout main`
   2. `git pull upstream main`
   3. `git checkout -b release-<version-number>`, e.g. `release-1.11.0rc1`
   4. Bump `src/qiskit_sphinx_theme/__init__.py` to use the new version, e.g. https://github.com/Qiskit/qiskit_sphinx_theme/pull/207
   5. PR the change and land it
2. Push the Git tag:
   1. `git checkout main`
   2. `git pull upstream main` to pull the version bump. If other commits have landed since the version bump, use `git revert --hard <sha>` to change to the version bump's commit (you can find the SHA with `git log --oneline`).
   3. `git tag <full-version>`, e.g. 1.11.0rc1
   4. `git push upstream <full-version>`
3. Create the new Git branch:
   1. Make sure that you are still on `main` and on the commit of the version bump.
   2. `git checkout -b <minor-release-version>`, e.g. `1.11`. This should not include the patch version.
   3. `git push upstream <minor-release-version>`
4. Follow the instructions in the section "Final steps shared by both processes".

### Process for all other releases

Use this process for:

* All release candidates other than `rc1`
* All stable releases, like `1.11.1`

1. Cherry-pick all relevant changes to the release branch, e.g. `1.11`:
   1. Look for PRs that have the label `needs cherrypick`: https://github.com/Qiskit/qiskit_sphinx_theme/issues?q=label%3A%22needs+cherrypick%22+
   2. `git fetch --all`
   3. `git checkout <release-branch>`, e.g. `1.11`.
   4. For each PR:
      1. `git checkout -b cp-<short-description>`, e.g. `cp-scrolling-fix`
      2. Find the commit SHA at the bottom of the PR. There will be a message like `merged commit 9e02144 into ...`
      3. `git cherry-pick <commit SHA>`
      4. `git push origin <branch-name-from-step-1>`, e.g. `cp-scrolling-fix`. Open a pull request. Change the PR's merge base in the top to the release branch; it defaults to `main`.
      5. Remove the `needs cherrypick` label from the original PR.
2. Bump the version:
   1. `git checkout <release-branch>`, e.g. `1.11`.
   2. `git pull upstream <release-branch>`, e.g. `1.11`.
   3. `git checkout -b release-<full-version>`, e.g. `release-1.11.0rc3`
   4. Bump `src/qiskit_sphinx_theme/__init__.py` to use the new version, e.g. https://github.com/Qiskit/qiskit_sphinx_theme/pull/207
   5. PR the change and land it. Change the PR's merge base in the top to the release branch; it defaults to `main`.
3. Push the Git tag:
   1. `git checkout <release-branch>`, e.g. `1.11`.
   2. `git pull upstream <release-branch>` to pull the version bump. If other commits have landed since the version bump, use `git revert --hard <sha>` to change to the version bump's commit (you can find the SHA with `git log --oneline`).
   3. `git tag <full-version>`, e.g. 1.11.0
   4. `git push upstream <full-version>`
4. Follow the instructions in the section "Final steps shared by both processes".

### Final steps shared by both processes

1. Check that the release worked:
   1. Check that the tag shows up in https://github.com/Qiskit/qiskit_sphinx_theme/tags
   2. The pip release is automated with [GitHub Actions](https://github.com/Qiskit/qiskit_sphinx_theme/actions/workflows/release.yml). After a few minutes, check that https://pypi.org/project/qiskit-sphinx-theme/#history has the release. (You can skip to the next step while waiting)
2. Announce the release on GitHub:
   1. On https://github.com/Qiskit/qiskit_sphinx_theme/tags, click the `...` to the right of the released tag's row. Click "Create release"
   2. Add release notes, e.g. https://github.com/Qiskit/qiskit_sphinx_theme/releases/tag/1.11.0rc1
      1. Add the sections `**Features / API Changes:**` and `**Bug Fixes:**`. 
      2. Use `git log --oneline` to see what changes have been made. Copy and paste those entries as bullets into the relevant sections. Ignore any "internal only" changes like CI changes or updates to the README.
      3. Preview the release notes with the "Preview" tab.
   3. Click "Publish release"
