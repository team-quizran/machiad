var express = require('express');
var router = express.Router();
var kanko = require("../kanko.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  var adid = req.query.adid;
  ref.on("value", function(snapshot){
    var ads = [];
    for (ss in snapshot.val()){
      var kankoData = {}
      kankoData = snapshot.val()[ss];
      kankoData.placeUrl = kanko[kankoData.placeId].url;
      kankoData.placeName = kanko[kankoData.placeId].name;
      if (!adid || adid == ss){
          ads.push(kankoData);
      }
    }
    res.render('index', { title: '室蘭の広告', ads: ads });
}, function(errorObject){
    console.log("the read failed:" + errorObject.code);
})

});

module.exports = router;
