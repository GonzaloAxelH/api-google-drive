"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = 5000;
app.get("/", function (req, res) {
  res.send("HOla mundo desde get /");
});
app.listen(PORT, function () {
  console.log("Server is run in http://localhost:".concat(PORT));
});