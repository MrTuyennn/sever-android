const admin = require('../models/admin');
exports.login = function(req, res) {
    admin.findOne({ email: req.body.email }).then(data => {
        if (data) {
            if (data.password = req.body.password) {
                res.redirect('/hosoadmin');
            }
        }
    });
};

exports.register = function(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;
    if (username === null || email === null || phone === null || password === null || passwordConfirm === null) {
        alert("Không bỏ trống thông tin !!!");
        console.log('Không được để dữ liệu trống');
    } else if (password !== passwordConfirm) {
        alert("Mật khẩu không khớp với nhau !!!");
        console.log('Password không chính xác');
    } else {
        let newAdmin = new admin({
            username: username,
            phone: phone,
            email: email,
            password: password,
        });
        newAdmin.save(function(err) {
            if (err) {
                console.log(err);
                return
            } else {
                res.redirect('/');
                console.log(username, password, email, phone);
            }
        });
    }
};