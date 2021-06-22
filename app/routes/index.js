const twinLeakRoutes = require("./note_routes");

module.exports = function (app, db) {
    twinLeakRoutes(app, db);
}