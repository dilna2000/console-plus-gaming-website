const Feedback = require("../models/feedback.model");
const router = require('express').Router();

router.route('/addfeedback').post((req, res) => {
    //console.log(req);
   
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const desc = req.body.desc;
   
   

    const newFeed = new Feedback({
        name,
        email,
        number,
        desc
    });

    newFeed.save()
        .then(() => res.json('Feedback added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
