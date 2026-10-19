// CommonJS, every file is module by default
// Modules - Encapsulated Code (only share minimum)
const Names = require('./names')
const sayHello = require('./Utils')


sayHello('Philips');
sayHello(Names.James);
sayHello(Names.John);
