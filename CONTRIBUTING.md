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

### `/qiskit_sphinx_theme`
This subfolder contains the raw html and css files that are used to set the framework for Qiskit documentation web pages. The files in this folder will set the styles when a project calls the `qiskit_sphinx_theme` in its `conf.py`, unless the project overrides the style with their own files.

E.g. if a qiskit project (with the `qiskit_sphinx_theme` installed) wants to override any of the themes files (such as the `layout.html`) that the `qiskit_sphinx_theme` provides it needs to have its own version of that file (e.g. `layout.html`) stored in its `docs/_templates` folder.

### `/example_docs`
This subfolder contains a scaled down version of the Sphinx build that builds the documentation for the Qiskit repos. 

It pulls styles from the `/qiskit_sphinx_theme` subfolder. You can check any changes you are making to the `qiskit_sphinx_theme` by building the documentation (see running locally section) and opening the html files generated in `/example_docs/docs/_build/html`.

### `/docs_guide`
This subfolder contains guidance on how to write documentation and build sphinx projects for Qiskit and Qiskit Ecosystem projects. You can view the fully rendered docs guide at https://qisk.it/docs-guide

------
## Run locally

We use [Tox](https://tox.wiki/en/latest/), which you will need to install globally (e.g. using [`pipx`](https://pypa.github.io/pipx/)).

* Run Python tests: `tox -e py`
* Build `example_docs/`:
  1. `tox -e docs`
  2. Open up `example_docs/docs/_build/html/index.html` in your browser
* Build `docs_guide`:
  1. `tox -e docs-guide`
  2. Open up `docs_guide/_build/html/index.html` in your browser.
* Run doctests for the docs guide: `tox -e doctest`

Sometimes Sphinx's caching can get in a bad state. First, try running `tox -e docs-clean`, which will remove Sphinx's cache. If you are still having issues, try adding `-r` your command, e.g. `tox -e docs -r`. `-r` tells Tox to reinstall the dependencies.

We are in the process of migrating our theme from Pytorch to Furo (see https://github.com/Qiskit/qiskit_sphinx_theme/issues/232). To build the local docs using the Furo theme, use `THEME=_qiskit_furo` in front of the command, e.g. `THEME=_qiskit_furo tox -e docs`.

------
## Run JavaScript tests

We write some tests in JavaScript (Node.js) to have automated checks of the theme, e.g. that certain components render properly.

To run these tests, you first need to install Node.js on your machine. If you expect to use JavaScript in other projects, we recommend using [NVM](https://github.com/nvm-sh/nvm). Otherwise, consider using [Homebrew](https://formulae.brew.sh/formula/node) or installing [Node.js directly](https://nodejs.org/en).

Then:

1. `npm install`
2. `npm test`

------
## Updating bundled web components

We use web components from https://github.com/Qiskit/web-components to include common design elements from qiskit.org in our documentation.

To update the top nav bar web component:

1. In https://github.com/Qiskit/web-components, run `npm install` then `npm run build`.
2. There should be a file created at the root of the web components repository called `experimental-bundled-ui-shell.js`. Copy its contents into these files in this theme repository:
   1. `qiskit_sphinx_theme/pytorch_base/static/js/web-components/top-nav-bar.js`
   2. `qiskit_sphinx_theme/furo/base/static/js/web-components/top-nav-bar.js`
3. Build the example docs with `tox -e docs` and `THEME=_qiskit_furo tox -e docs` to ensure everything works.

If you want to add a new web component:

1. Work with the web components repository's team to set up `npm run build` to generate a single JavaScript file.
2. Add the file contents to the `qiskit_sphinx_theme/furo/base/static/js/web-components/` folder in this theme repository. (We shouldn't add web components to Pytorch.)
3. Load the web component in `extra_head.html` with a line like `<script src="{{ pathto('_static/js/web-components/my-component.js', 1) }}"></script>`.
4. Use the web component element in the relevant HTML, e.g. `<my-component>` in `layout.html`. Remember to surround the change with a `QISKIT CHANGE:` comment.
5. Build the example docs with `THEME=_qiskit_furo tox -e docs` to ensure everything works.
6. Update this guide with specific instructions for the web component.

### FYI: How Furo Theme Inheritance Works"

The Furo theme works with three components: the page.html file, which is the main file of this work and will contain all the relevant information; it connects with two folders, "static" and "partials". In the "static" folder, there are three subfolders: "images" which contains the page logo, "js" which controls the page and helps in building the logic of how our page is constructed, and "styles" which contains the CSS part that defines the design, the style of representing our page (UI) on different devices and their proportions, the font style, and the company colors. For adding icons, we have the "partials" folder, following the SVG format.

##### Recommendations:

In the repository, in case of using a new icon, you should access `furo/base/partials/icons.html`, copy the HTML code of the `<svg></svg>` tags, and add them as the first term within the `<symbol>` tag, including the `id` attribute which will be the name associated with the icon. To call it, you must reference it with `#`. Otherwise, the SVG files will not be displayed.


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
   4. Bump `setup.py` and `qiskit_sphinx_theme/__init__.py` to use the new version, e.g. https://github.com/Qiskit/qiskit_sphinx_theme/pull/207
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
   4. Bump `setup.py` and `qiskit_sphinx_theme/__init__.py` to use the new version, e.g. https://github.com/Qiskit/qiskit_sphinx_theme/pull/207
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