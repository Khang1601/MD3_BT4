//Đây là một module Express Router dành cho các tuyến đường liên quan đến phiên bản 1 của API của ứng dụng.


var express = require('express');

var router = express.Router();


var userApi = require('./apis/user.api');

router.use("/users", userApi)


module.exports = router;