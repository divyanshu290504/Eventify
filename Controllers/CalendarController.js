const router = require('express').Router();
const bodyParser = require('body-parser');
const Event = require("./Models/Event");
const moment = require("moment");

router.post("/create-event",async(req,res)=>{
    const event =new Event(req.body);
    console.log(req.body.end);
    await event.save();
    res.sendStatus(201);
})

router.get("/get-events",async(req,res) => {
    const events = await Event.find({start: {$gte: moment(req.query.start).toDate()}})
    console.log(req.query.start);
res.send(events);
});

router.get("/get-myevents",async(req,res) => {
    const events = await Event.find({start: {$lte: req.query.start.toLocaleString()}})
    console.log(req.query.start);
    //console.log(events)
res.send(events);
});



module.exports = router;
