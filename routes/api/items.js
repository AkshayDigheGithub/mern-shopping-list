const express = require('express');
const Item = require('../../models/Item');
const router = express.Router();

router.get('/', (req, res) => {
    Item.find()
      .sort({ date: -1 })
      .then(items => res.json(items));
  });
  
  
  router.post('/', (req, res) => {
    const newItem = new Item({
      name: req.body.name
    });
  
    newItem.save().then(item => res.json(item));
  });
  
  /* router.post('/add', (req, res) => {
    let item = {name: "Trump"}
    Item.create(item, (err, item) => {
        if(err) return res.status(500).json({error: err});
        else return res.json({message: "Item Added", item: item});            
    })
}) */

  router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
      .then(item => item.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });
  
  module.exports = router;