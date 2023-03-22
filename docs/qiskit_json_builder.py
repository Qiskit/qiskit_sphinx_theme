import pickle
import types
import json

from os import path
from typing import Any, Dict

from sphinx.application import ENV_PICKLE_FILENAME, Sphinx
from sphinx.builders.html import BuildInfo, StandaloneHTMLBuilder, Builder
from sphinx.locale import get_translation
from sphinx.util.osutil import SEP, copyfile, ensuredir, os_path

from sphinxcontrib.serializinghtml import jsonimpl, SerializingHTMLBuilder
from sphinxcontrib.serializinghtml.version import __version__

from collections import UserString

import qiskit_json_impl

if False:
    # For type annotation
    from typing import Any, Dict, Tuple  # NOQA

package_dir = path.abspath(path.dirname(__file__))

__ = get_translation(__name__, 'console')


#: the filename for the "last build" file (for serializing builders)
LAST_BUILD_FILENAME = 'last_build'

class QiskitJsonBuilder(SerializingHTMLBuilder):
    """
    A builder that dumps the generated HTML into JSON files.
    """
    name = 'QiskitJsonBuilder'
    epilog = __('You can now process the JSON files in %(outdir)s.')

    implementation = qiskit_json_impl
    implementation_dumps_unicode = True
    indexer_format = qiskit_json_impl
    indexer_dumps_unicode = True
    out_suffix = '.json'
    globalcontext_filename = 'globalcontext.json'
    searchindex_filename = 'searchindex.json'

def setup(app: Sphinx) -> Dict[str, Any]:
    app.setup_extension('sphinx.builders.html')
    app.add_builder(QiskitJsonBuilder)
    app.add_message_catalog(__name__, path.join(package_dir, 'locales'))

    return {
        'version': __version__,
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
