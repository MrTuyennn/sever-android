const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// khai báo từ admin
const adminRoute = require('./routes/admin');
const port = 3000;

//lấy các tài nguyên từ public
app.use("/public", express.static("public"));
app.use(adminRoute);

// kết nối với MongoDB
const connectDB = require("./config/database");
connectDB();


// cấu hình express-handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// localhost 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))