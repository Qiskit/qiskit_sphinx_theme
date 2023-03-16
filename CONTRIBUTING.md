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

1. Bump the version:
   1. `git pull main`
   2. Create a new branch
   3. Bump `setup.py` and `qiskit_sphinx_theme/__init__.py` to use the new version, e.g. https://github.com/Qiskit/qiskit_sphinx_theme/pull/207
   4. PR the change and land it
2. Push the Git tag:
   1. `git pull main` to pull the version bump. If other commits have landed since the version bump, use `git revert --hard <sha>` to change to the version bump's commit (you can find the SHA with `git log`).
   2. `git tag <version>`, e.g. 1.11.0
   3. `git push upstream <version>`
3. Check that the release worked:
   1. Check that the tag shows up in https://github.com/Qiskit/qiskit_sphinx_theme/tags
   2. The pip release is automated with [GitHub Actions](https://github.com/Qiskit/qiskit_sphinx_theme/actions/workflows/release.yml). After a few minutes, check that https://pypi.org/project/qiskit-sphinx-theme/#history has the release. (You can skip to the next step while waiting)
4. Announce the release on GitHub:
   1. On https://github.com/Qiskit/qiskit_sphinx_theme/tags, click the `...` to the right of the released tag's row. Click "Create release"
   2. Add release notes, e.g. https://github.com/Qiskit/qiskit_sphinx_theme/releases/tag/1.11.0rc1
      1. Add the sections `**Features / API Changes:**` and `**Bug Fixes:**`. 
      2. Use `git log --oneline` to see what changes have been made. Copy and paste those entries as bullets into the relevant sections. Ignore any "internal only" changes like CI changes or updates to the README.
      3. Preview the release notes with the "Preview" tab.
   3. Click "Publish release"
