# This Dockerfile is used to preview the docs in pull requests via GitHub Actions.
#
# To test it out locally:
#
#   1. ❯ docker build -t sphinx-docs-preview .
#   2. ❯ docker run --rm -p 8000:8000 -t sphinx-docs-preview
#   3. Open up localhost:8000

FROM python:3.9

RUN apt-get update && apt-get install -y pandoc graphviz
RUN python -m pip install -U tox

WORKDIR /app

COPY . .

RUN tox run -e docs

EXPOSE 8000
CMD ["python", "-m", "http.server", "-d", "example_docs/docs/_build/html"]
