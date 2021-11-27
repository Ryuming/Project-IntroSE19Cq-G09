const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// newsController.index
router.post('/checklogin', siteController.checklogin);
router.get('/login', siteController.login);
router.get('/search', siteController.search);
router.get('/', siteController.index);


module.exports = router;
