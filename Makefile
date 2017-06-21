NODE_MODULES=../../node_modules
NODE_BINARIES=${NODE_MODULES}/.bin

BABEL_PRESETS=--presets [ es2017 react ]
BABEL_PLUGINS=--plugins [ transform-object-rest-spread ]

FLAGS= \
  --transform [ babelify ${BABEL_PLUGINS} ${BABEL_PRESETS} ] \
  --transform brfs \
  --outfile ../../public/bundle.js \
  entrypoint.js

.PHONY: build watch

build:
  ${NODE_BINARIES}/browserify ${FLAGS}

watch:
  ${NODE_BINARIES}/watchify --debug --verbose ${FLAGS}
