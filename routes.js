const { Router } = require('express');

//const admin = require('./api/admin/admin.routes');
// const dynamic = require('./api/dynamic/dynamic.routes');
// const user = require('./api/user/user.routes');
// const superAdmin = require('./api/superAdmin/superAdmin.routes');
const Admin = require('./Admin/admin_routes');
// const socket = require('./api/socket/socket.routes');
// const redis = require('./api/redis/redis.routes');
// const aws = require('./api/aws/routes')

const router = Router();

router.get('/', (req, res) => {
  res.statusCode = 302;
  res.setHeader('Location', 'http://igotaxy.in');
  res.end();
});


router.use('/admin', Admin);


module.exports = router;
