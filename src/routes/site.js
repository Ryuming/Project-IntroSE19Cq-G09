const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// newsController.index
router.get('/search_category/:category', siteController.search_category_2);
router.get('/sort_Like/:category', siteController.sort_Like)
router.post('/checklogin', siteController.checklogin);
router.get('/login', siteController.login);
router.get('/search', siteController.search)
router.get('/', siteController.index);
router.get('/search_category', siteController.search_category);


module.exports = router;
