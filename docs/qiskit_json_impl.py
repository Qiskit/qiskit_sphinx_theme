"""
    # TODO - given how close this is to a piece of sphinx source
    #        does the bsd license need to be included?
    #
    # Heavily lifted from sphinx.util.jsonimpl but handles one
    # specific instance of python's default json dump failing
    # when dealing with partial objects.
"""

import json
from collections import UserString

if False:
    # For type annotation
    from typing import Any, IO  # NOQA


class SphinxJSONEncoder(json.JSONEncoder):
    """JSONEncoder subclass that forces translation proxies."""
    def default(self, obj):
        # type: (Any) -> str
        if isinstance(obj, UserString):
            return str(obj)
        return super().default(obj)


def dump(obj, fp, *args, **kwds):
    # type: (Any, IO, Any, Any) -> None
    kwds['cls'] = SphinxJSONEncoder
    try:
        json.dump(obj, fp, *args, **kwds)
    except TypeError:
        obj["translation_url"] = "placeholder for partial object"
        json.dump(obj, fp, *args, **kwds)


def dumps(obj, *args, **kwds):
    # type: (Any, Any, Any) -> str
    kwds['cls'] = SphinxJSONEncoder
    try:
        return json.dumps(obj, *args, **kwds)
    except TypeError:
        print("Failed to dump " + str(obj))


def load(*args, **kwds):
    # type: (Any, Any) -> Any
    return json.load(*args, **kwds)


def loads(*args, **kwds):
    # type: (Any, Any) -> Any
    return json.loads(*args, **kwds)

