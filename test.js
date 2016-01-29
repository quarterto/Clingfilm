var cling = require('./');

cling.getIdealTree()
  .then(cling.hashDependencies)
  .then(cling.dependencyEdges)
  .then(d => JSON.stringify(d, null, 2))
  .then(console.log, e => console.error(e.stack));
