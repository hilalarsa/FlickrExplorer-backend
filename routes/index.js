var express = require('express');
var axios = require('axios')
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  let result = await axios.get("https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1")
  res.json(result.data);
});

module.exports = router;
