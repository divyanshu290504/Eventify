const router = require('express').Router();
let Event1 = require('./Models/Event1');

// router.get((req,res) =>{
//     Event1.find()
//         .then(events => res.json(events))
//         .catch(err => res.status(400).json('Error: ' + err));         
// });

router.get("/",(req,res) => {
    Event1.find()
        .then(events => {
            console.log(events)
            res.json(events)
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router