// tạo tài khoản user
const User = require('../models/user');
exports.creatUser = async(req, res) => {
    try {
        let user = await User({
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
        })
        const query = { email: user.email }
        User.findOne(query, (err, result) => {
            if (result == null) {
                user.save(function(err, result) {
                    if (err) {
                        return res.send(err);
                    }
                    res.status(200).send();
                })
            } else {
                res.status(400).send(err);
            }
        })

    } catch (error) {
        return res.status(400).send(err);
    }
}

exports.loginuser = async(req, res) => {
    console.log(req.body.email)
    console.log(req.body.password)

    const query = {
        email: req.body.email,
        password: req.body.password,
    }
    User.findOne(query, (err, result) => {
        if (result != null) {
            const objTosend = {
                username: result.username,
                email: result.email,
            }
            return res.status(200).send(JSON.stringify(objTosend));
        } else {
            return res.status(400).send();
        }
    })
}