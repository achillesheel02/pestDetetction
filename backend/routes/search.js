const express = require('express');

const router = express.Router();

const Search = require('../models/search');

router.post('/add', (req, res, next) => {
      const search = new Search({
        user: req.body.user,
        image: req.body.image,
        result: req.body.result,
        accuracy: req.body.accuracy
      });
      search.save()
        .then(result => {
          res.status(201).json({
            message: "Search successfully stored.",
            result: result
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
});

router.get('/get/:id/all', (req, res, next) => {
  Search.find({_id: req.params.id}).then( results => {
    res.status(200).json({
      message: "User fetched",
      results: results
    });
  })
    .catch(err => {
      console.log(err);
    });
});



module.exports = router;
