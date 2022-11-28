const router = require('express').Router();
const bcrypt = require('bcryptjs')
let User = require('./Models/User');

router.route('/login').get((req, res) => {
    User.findOne({ username: req.query.username })
        .then(user => {
            if (user === null) {
                res.send(null);
            }
            else {
                bcrypt
                    .compare(req.query.password, user.password)
                    .then(result => res.send(result))
                    .catch(err => console.error(err.message));
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
