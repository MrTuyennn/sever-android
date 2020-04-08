const adminCOntroller = require('../controllers/admin');
const admin = require('../models/admin');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//import controller
const session = require('express-session');
const Passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//cấu hình Passport
router.use(
    session({
        secret: 'mysecret', //thuôc tính bắt buộc
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 5,
        },
        //cookie sẽ tồn tại trong 5 phút, nếu xóa dòng code sau thì cookie sẽ hết hạn sau khi đóng trinh duyệt
    })
);

//2 hàm khởi tạo passport
router.use(Passport.initialize());
router.use(Passport.session());
Passport.use(
    new LocalStrategy(
        //email, password là name của thẻ input trong form login, nếu k khai báo mặc định sẽ là username, password
        {
            usernameField: 'email',
            passwordField: 'password',
        },
        (email, password, done) => {
            admin.findOne({ email: email, password: password }, function(err, user) {
                console.log(user);
                if (err) {
                    console.log(err);
                }
                if (user) {
                    //thành công sẽ trả về true với giá trị user
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        }
    )
);

//sau khi chứng thức thành công passport sẽ gọi hàm .serializeUser() vói tham số user giá trị đã lưu bên trên
//chọn thuộc tính email của user để ghi vào cookie
Passport.serializeUser((user, done) => {
    done(null, user.email);
});
//biến cookieID chính là giá trị user.email bên trên
Passport.deserializeUser((cookieID, done) => {
    admin.findOne({ email: cookieID }, function(err, user) {
        if (err) {
            console.log(err);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
});

//khai báo phương thức xác thực đăng nhập sau
const isAuthenticated = function(request, response, next) {
    if (request.isAuthenticated()) return next();
    response.redirect('/'); //nếu chưa đăng nhập sẽ quay về trang login
};
router.post('/', Passport.authenticate('local', {
    successRedirect: '/hosoadmin',
    failureRedirect: '/',
}));

// lấy giữ liệu từ form
// màn hình login
router.get('/', function(req, res) {
    res.render('DangNhap');
});



router.post('/dangki', adminCOntroller.register);
//màn hình hồ sơ Admin
router.get('/hosoadmin', isAuthenticated, function(req, res) {
    res.render('HoSoAdmin');
});

// màn hình đăng kí
router.get('/dangki', function(req, res) {
    res.render('DangKi');
});

module.exports = router;