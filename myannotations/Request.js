const {Annotation} = require("nodeannotations");

class Request extends Annotation {
    constructor() {
        super("Request");
    }
}

module.exports = Request;