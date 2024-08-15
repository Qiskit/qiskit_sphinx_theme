# Contributing

First read the overall [Qiskit project contributing guidelines](https://github.com/Qiskit/qiskit/blob/main/CONTRIBUTING.md#).

## Contributing to qiskit_sphinx_theme

In addition to the general guidelines, there are specific details for
contributing to qiskit_sphinx_theme, these are documented below.

------
## Folder Structure

There are a few important subfolders to be aware of:

### `/src`
This subfolder contains the HTML, CSS, and Python files that are used for the `qiskit-ecosystem` theme. It has these folders:

* `assets`: CSS
* `theme`: HTML templates and the `theme.conf` config file

The top-level Python files are used for logic used by the theme, such as `translations.py` determining what URLs the HTML should use for translations support.

### `/example_docs`
This subfolder contains a scaled down version of the Sphinx build that builds the documentation for the Qiskit repos. 

It pulls styles from the `/src` subfolder. You can check any changes you are making to theme by building the documentation (see running locally section) and opening the HTML files generated in `example_docs/docs/_build`.

### `/docs_guide`
This subfolder contains guidance on how to write documentation and build sphinx projects for Qiskit and Qiskit Ecosystem projects. You can view the fully rendered docs guide at https://qisk.it/docs-guide

------
## Run locally

We use [Tox](https://tox.wiki/en/latest/), which you will need to install globally (e.g. using [`pipx`](https://pypa.github.io/pipx/)).

* Run Python tests: `tox -e py`
* Build `example_docs/`:
  1. `tox -e docs`
  2. Open up `example_docs/docs/_build/index.html` in your browser
* Build `docs_guide`:
  1. `tox -e docs-guide`
  2. Open up `docs_guide/_build/html/index.html` in your browser.
* Run doctests for the docs guide: `tox -e doctest`

Sometimes Sphinx's caching can get in a bad state. First, try running `tox -e clean`, which will remove Sphinx's cache. If you are still having issues, try adding `-r` your command, e.g. `tox -e docs -r`. `-r` tells Tox to reinstall the dependencies.

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
2. `npm run test`.
   * Warning: the very first time you run the tests, they will fail because the `snapshot-results` folder will not yet exist. Try running again.

The docs will rebuild every time you run `npm run test`.

### How to update the expected snapshot for intentional changes

First, get the `snapshot_results` folder, either by downloading it from CI or by running the tests locally. Then:

1. Find the "actual" snapshot for the failing test, such as `api-docs-class-page-1-actual.png`.
2. Copy that snapshot into the folder `tests/js/tests.js-snapshots`. Rename the `-actual.png` file ending to be `-linux.png` and overwrite the prior file.

### How to add a new snapshot

Copy the tests in `tests.js` for inspiration. Make sure the selector you use in `page.locator()` is accurate. Title the tests with a useful but concise description of what you're testing.

Then, run the tests either locally or in CI to generate the snapshots. When running locally, the files will be added automatically. When using CI, follow the section [How to update the expected snapshot for intentional changes](#how-to-update-the-expected-snapshot-for-intentional-changes).

------
## How to preview docs in PRs

We upload the docs builds to CI. So, you can download what the site will look like from GitHub Actions:

1. Navigate to the GitHub Actions page for the "Tests" action.
2. Open the "Summary" page with the house icon.
3. Under the "Artifacts" section, there should be a "html_docs" entry. Download it. Un-tar it, then open the `index.html` page in a browswer.

------
## FYI: How Furo Theme Inheritance Works

We use Sphinx's inheritance feature because our theme is built on top of [Furo](https://github.com/pradyunsg/furo). The `furo` inheritance is configured in `theme/qiskit-sphinx-theme/theme.conf`. Sphinx will default to using all the files from Furo. But if we have a file with the same name as Furo, then Sphinx will use our copy. That allows us to override only what we care about.

We try to keep changes to a minimum because every divergence we make from base Furo increases our maintenance burden. Hence we prioritise only making changes that are important to the Qiskit Ecosystem brand. If the change would be generally useful to other users of Furo, we try to contribute upstream to the Furo project itself.

### How to change HTML
Copy the HTML template from Furo and save it in the same file path. Then, at the top of the file, add this header:

```
{#-
  This file is vendored from Furo (created by Pradyun Gedam) and used under the MIT license.

  When adding custom Qiskit code, surround it with `QISKIT CHANGE: start` and
  `QISKIT CHANGE: end` Jinja-style comments.
-#}
```

When making changes, use those comments to make clear where and what we changed. For example:

```
{#- QISKIT CHANGE: start. -#}
{% include "custom_templates/extra_head.html" %}
{#- QISKIT CHANGE: end. -#}
```

If the change is greater than 1-3 lines, write the code in a new file in `theme/qiskit-sphinx-theme/custom_templates`, then use Jinja's `include` directive, as shown in the example right above.

### How to change CSS
Make CSS changes by editing the SCSS files in the `assets/styles/` directory. These take precedence over any CSS rules from Furo.

When adding changes, document the rationale unless the code is already self-documenting and obvious. Group similar changes into sections.

You can change [Furo's CSS variable values](https://github.com/pradyunsg/furo/tree/main/src/furo/assets/styles/variables) by setting them in the `body` rule at the top. When introducing our own CSS variables, prefix it with `--qiskit` for clarity, e.g. `--qiskit-my-variable`.

### How to update the Furo version
Update the version in `pyproject.toml`. Always pin to an exact version of Furo.

However, when updating, closely analyze each commit in the release to check for any changes that would break our fork. We want to make sure that our HTML files are always in sync with Furo. If they have made any changes, then add them back to our copy of the file.

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

### Process for first `rc1` release in the release series

`rc1`s for patch releases (e.g. `1.11.1rc1`) should use the other process below. This process is only for the first release in the release series, e.g. `1.11.0rc1`.

1. Bump the version:
   1. `git checkout main`
   2. `git pull upstream main`
   3. `git checkout -b release-<version-number>`, e.g. `release-1.11.0rc1`
   4. Bump `src/qiskit_sphinx_theme/__init__.py` to use the new version, e.g. https://github.com/Qiskit/qiskit_sphinx_theme/pull/596
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
