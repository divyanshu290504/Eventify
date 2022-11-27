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
res.send(events);
});

module.exports = router;
