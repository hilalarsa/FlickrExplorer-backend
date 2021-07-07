var express = require('express');
var axios = require('axios')
var router = express.Router();

FLICKR_API_KEY="758f0d0cdba6ce905341bcd6372e2fd0"
FLICKR_SECRET="a68f13ffaeecbea1"

/* GET home page. */
router.get('/', async (req, res, next) => {
  let result = await axios.get("https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1")
  res.json(result.data);
});

router.get('/tags/:tag', async (req, res, next) => {
  let {tag} = req.params
  let result = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&tags=${tag}&format=json&nojsoncallback=1`)
  if(!tag){
    res.status(500).json({status: "500"})
  }
  res.json(result.data);
});

module.exports = router;
