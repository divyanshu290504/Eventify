const router = require('express').Router();
const bcrypt = require('bcryptjs')
let User = require('./Models/User');
router.route('/register').post(async (req, res) => {
    console.log(req.body)
    const { username, email, contact, password: plainTextPassword } = req.body

    const password = await bcrypt.hash(plainTextPassword, 10)

    try {
        const response = await User.create({
            username,
            email,
            contact,
            password

        })
        console.log('User created successfully', response)

    } catch (error) {
        console.log(error)
        return res.json({ status: 'error' })
    }

    res.json({ status: 'ok' })
})


module.exports = router;
