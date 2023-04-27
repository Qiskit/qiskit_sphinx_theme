# Contributing

First read the overall Qiskit project contributing guidelines. These are all
included in the qiskit documentation:

https://qiskit.org/documentation/contributing_to_qiskit.html

## Contributing to qiskit_sphinx_theme

In addition to the general guidelines there are specific details for
contributing to qiskit_sphinx_theme, these are documented below.

------
## Folder Structure

There are a few important subfolders to be aware of:

### `/qiskit_sphinx_theme`
This subfolder contains the raw html and css files that are used to set the framework for Qiskit documentation web pages. The files in this folder will set the styles when a project calls the `qiskit_sphinx_theme` in its `conf.py`, unless the project overrides the style with their own files.

E.g. if a qiskit project (with the `qiskit_sphinx_theme` installed) wants to override any of the themes files (such as the `layout.html`) that the `qiskit_sphinx_theme` provides it needs to have its own version of that file (e.g. `layout.html`) stored in its `docs/_templates` folder.

### `/docs`
This subfolder contains a scaled down version of the Sphinx build that builds the documentation for the Qiskit repos. It pulls styles from the `/qiskit_sphinx_theme` subfolder. You can check any changes you are making to the `qiskit_sphinx_theme` by building the documentation (see running locally section) and opening the html files generated in `/docs/_build/html`.

### `/docs/sphinx_guide`
This subfolder contains some example `.rst` files that show how to implement specific Sphinx features such as class documentation, panel layouts, images etc.

------
## Run locally

1. Set up a Python environment to work in, e.g.:
   1. `python3 -m venv .venv/`
   2. `source .venv/bin/activate`
2. Run `pip install -r requirements-dev.txt`
3. Run `pip install -e .`
4. Run `sphinx-build -b html example_docs/docs/ example_docs/docs/_build/html` to build the documentation. This will create the `example_docs/docs/_build` subfolder where you can see the html files generated based on the `.rst` files in the `docs` folder and the styles pulled from the `qiskit_sphinx_theme`.

------
## Updating bundled web components

We use web components from https://github.com/Qiskit/web-components to include common design elements from qiskit.org in our documentation.

To update the top nav bar web component:

1. In https://github.com/Qiskit/web-components, run `npm install` then `npm run build`.
2. There should be a file created at the root of the web components repository called `experimental-bundled-ui-shell.js`. Copy its contents into these files in this theme repository:
   1. `qiskit_sphinx_theme/pytorch_base/static/js/web-components/top-nav-bar.js`
   2. `qiskit_sphinx_theme/furo/base/static/js/web-components/top-nav-bar.js`
3. Build the example docs with `tox -e py` and `THEME=_qiskit_furo tox -e py` to ensure everything works.

If you want to add a new web component:

1. Work with the web components repository's team to set up `npm run build` to generate a single JavaScript file.
2. Add the file contents to the `js/web-components/` folders in this theme repository.
3. Add to the HTML template (e.g. `layout.html` for Pytorch and `base.html` Furo) a line like `<script src="{{ pathto('_static/js/web-components/my-component.js', 1) }}"></script>` in the `<head>`. Then, use the web component element in the relevant HTML, e.g. `<my-component>`.
4. Build the example docs with `tox -e py` and `THEME=_qiskit_furo tox -e py` to ensure everything works.
5. Update this guide with specific instructions for the web component.

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