const router = require('express').Router();
const bodyParser = require('body-parser');

router.post("/create-event",async(req,res)=>{
    const event =new Event(req.body);
    console.log(req.body.end);
    await event.save();
    res.sendStatus(201);
})

module.exports = router;
