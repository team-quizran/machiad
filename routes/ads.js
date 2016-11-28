var express = require('express');
var router = express.Router();
var kanko = require("../kanko.json");

/* GET ad banner */
router.get('/', function(req, res) {

  ref.on("value", function(snapshot){
    var ads = [];
    var adids = [];
    for (ss in snapshot.val()){
      var kankoData = {}
      kankoData = snapshot.val()[ss];
      ads.push([kankoData.catchcopy.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;').replace(/　/g, "<br/>"), kanko[kankoData.placeId].name]);
      adids.push(ss);
    }
    var rndId = Math.ceil(Math.random() * 100) % ads.length;
    var ccopy = ads[rndId];
    res.render('ads', { ad: JSON.stringify([ccopy, [3000, 10000]]), adid: adids[rndId] });

}, function(errorObject){
    console.log("the read failed:" + errorObject.code);
})

});

module.exports = router;
