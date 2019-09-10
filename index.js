if (global) {
    module.exports = require('./dist/guardian.cjs');
} else {
    module.exports = require('./dist/guardian.umd');
}
