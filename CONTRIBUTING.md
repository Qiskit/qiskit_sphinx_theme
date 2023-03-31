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
3. Run `pip install .` (must do this every time there is a change to the theme).
4. Run `sphinx-build -b html docs/ docs/_build/html` to build the documentation. This will create the `/docs/_build` subfolder where you can see the html files generated based on the `.rst` files in the `docs` folder and the styles pulled from the `qiskit_sphinx_theme`.

------
## Releases

We use [semantic versioning](https://semver.org/). When starting a new minor release series like `1.11`, we create a new Git branch `1.11` and then selectively cherry-pick any bug fixes from `main` into that release.

So, the release process changes whether you are starting a new minor release series (like `1.11` or `1.12`) vs. releasing later versions of the series. The first release in a new series will be `1.x.0rc1`, e.g. `1.11.0rc1`.

1. (If this is _not_ the first release in the series) Cherry-pick all relevant changes to the release branch, e.g. `1.11`:
   1. Look for PRs that have the label `needs cherrypick`: https://github.com/Qiskit/qiskit_sphinx_theme/issues?q=label%3A%22needs+cherrypick%22+
   2. `git fetch --all`
   3. `git checkout <release-branch>`, e.g. `1.11`.
   4. For each PR:
      1. `git checkout -b cp-<short-description>`, e.g. `cp-scrolling-fix`
      2. Find the commit SHA at the bottom of the PR. There will be a message like `merged commit 9e02144 into ...`
      3. `git cherry-pick <commit SHA>`
      4. `git push --set-upstream origin <branch-name>` and open a pull request. Change the PR's merge base in the top to the appropriate branch; it defaults to `main`.
      5. Remove the `needs cherrypick` label from the original PR.
2. Bump the version:
   1. If this is the first release in the series, `git checkout main`. Otherwise, `git checkout <release-branch>`, e.g. `1.11`.
   2. `git pull <release-branch>`, i.e. `main` or e.g. `1.11`.
   3. `git checkout -b release-<release-name>`, e.g. `release-1.11.0rc1`
   4. Bump `setup.py` and `qiskit_sphinx_theme/__init__.py` to use the new version, e.g. https://github.com/Qiskit/qiskit_sphinx_theme/pull/207
   5. PR the change and land it. If this is _not_ the first release in the series, change the PR's merge base in the top to the appropriate branch; it defaults to `main`.
3. Push the Git tag:
   1. If this is the first release in the series, `git checkout main`. Otherwise, `git checkout <release-branch>`, e.g. `1.11`.
   2. `git pull upstream <release-branch>` to pull the version bump. If other commits have landed since the version bump, use `git revert --hard <sha>` to change to the version bump's commit (you can find the SHA with `git log --oneline`).
   3. `git tag <version>`, e.g. 1.11.0
   4. `git push upstream <version>`
4. (If this is the first release in the series) Create the new Git branch:
   1. Make sure that you are still on `main` and on the commit of the version bump.
   2. `git checkout -b <minor-release-version>`, e.g. `1.11`. This should not include the patch version.
   3. `git push upstream <minor-release-version>`
5. Check that the release worked:
   1. Check that the tag shows up in https://github.com/Qiskit/qiskit_sphinx_theme/tags
   2. The pip release is automated with [GitHub Actions](https://github.com/Qiskit/qiskit_sphinx_theme/actions/workflows/release.yml). After a few minutes, check that https://pypi.org/project/qiskit-sphinx-theme/#history has the release. (You can skip to the next step while waiting)
6. Announce the release on GitHub:
   1. On https://github.com/Qiskit/qiskit_sphinx_theme/tags, click the `...` to the right of the released tag's row. Click "Create release"
   2. Add release notes, e.g. https://github.com/Qiskit/qiskit_sphinx_theme/releases/tag/1.11.0rc1
      1. Add the sections `**Features / API Changes:**` and `**Bug Fixes:**`. 
      2. Use `git log --oneline` to see what changes have been made. Copy and paste those entries as bullets into the relevant sections. Ignore any "internal only" changes like CI changes or updates to the README.
      3. Preview the release notes with the "Preview" tab.
   3. Click "Publish release"
