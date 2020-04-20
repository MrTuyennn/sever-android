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
    // get all user info
exports.getAllUser = function(req, res) {
    User.find({})
        .lean()
        .exec(function(err, data) {
            res.render('QuanLyNguoiDung', { user: data })
            console.log(data)
            if (err) {
                log(err)
            }
        });
};
// get người dùng theo email 
// exports.getUser = async(req, res) => {
//     try {
//         let user = await User.find({ email: req.params.id }).populate({
//             path: "email",
//         });
//         return res.status(200).json({ status: true, data: user });
//     } catch (err) {
//         console.log(err);
//     }
// };
exports.getalluser = async(req, res) => {
    try {
        let user = await User.find({});
        // res.send(loaisanpham);
        res.status(200).json({ status: true, data: user });
    } catch (error) {
        console.log(error);
    }
}