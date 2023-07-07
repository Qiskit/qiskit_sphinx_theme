# This code is part of Qiskit.
#
# (C) Copyright IBM 2023.
#
# This code is licensed under the Apache License, Version 2.0. You may
# obtain a copy of this license in the LICENSE.txt file in the root directory
# of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this
# copyright notice, and modified files need to carry a notice indicating
# that they have been altered from the originals.

from __future__ import annotations

import re
from pathlib import Path
from typing import TYPE_CHECKING

import sphinx.addnodes

if TYPE_CHECKING:
    import sphinx.application
    import sphinx.environment


def setup(app: sphinx.application.Sphinx) -> None:
    app.add_config_value("remove_methods_from_toc", default=False, rebuild="html", types=[bool])
    app.connect("env-updated", trim_toctree)


def is_method_stub(stub_path: str) -> bool:
    regex = re.compile(r"stubs/.*\.[A-Z][a-zA-Z0-9]*\.[a-z_0-9]+$")
    return bool(re.match(regex, stub_path))


def trim_toctree(app: sphinx.application.Sphinx, env: sphinx.environment.BuildEnvironment) -> None:
    """
    Remove method pages from the left table of contents because they dramatically slow down docs
    builds and bloat HTML page size.

    See https://github.com/Qiskit/qiskit_sphinx_theme/issues/328 and
    https://github.com/pradyunsg/furo/pull/674.

    Note that more robust is for repositories to reorganize their code to not have dedicated pages.
    But this provides an escape hatch while migrating.

    Code inspired by sphinx-remove-toctrees (created by Chris Holdgraf) and used under the MIT
    license.
    """
    if not app.config.remove_methods_from_toc:
        return

    to_remove = []
    srcdir = Path(env.srcdir)
    for stub in srcdir.glob("stubs/*"):
        rel_path = str(stub.relative_to(srcdir).with_suffix(""))
        if is_method_stub(rel_path):
            to_remove.append(rel_path)

    for _, tocs in env.tocs.items():
        for toctree in tocs.traverse(sphinx.addnodes.toctree):
            new_entries = []
            for entry in toctree.attributes.get("entries", []):
                if entry[1] not in to_remove:
                    new_entries.append(entry)
            # If there are no more entries, just remove the toctree.
            if len(new_entries) == 0:
                toctree.parent.remove(toctree)
            else:
                toctree.attributes["entries"] = new_entries
