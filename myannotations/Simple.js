const {Annotation} = require("nodeannotations");

class Simple extends Annotation {
    constructor() {
        super("Simple");
    }
}

module.exports = Simple;