//Khai báo thư viện Express
const express = require('express');

var cors = require('cors');



//Import Mongoose
const mongoose = require('mongoose');


//Import router
const ProductTypeRouter = require('./router/ProductTypeRouter');
const ProductRouter = require('./router/ProductRouter');
const CustomerRouter = require('./router/CustomerRouter');
const OrderRouter = require('./router/OrderRouter');

// Khai báo app Nodejs
const app = new express();

app.use(cors());

//Sử dụng Middleware JSON
app.use(express.json());

//Sự dụng unicode
app.use(express.urlencoded({
    urlencoded: true
}))


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//Khai báo cỏng nodeJs
const port = 8000;

//Sử dụng Mongoose
mongoose.connect("mongodb+srv://hoangle999:sieukhunglong99@cluster0.5cl1k13.mongodb.net/test", (err) => {
    if (err) throw err;
    var dbo = data.db("MyCol");
    dbo.createCollection("Infor_User", function (err, res) {
        if (err) throw err;
        console.log("Collection");
        db.close();
    })


    console.log("Connect MongoDB successfully!");
})




app.get('/', (request, response) => {
    response.status(200).json({
        test: 1111
    })
})


//Sử dụng router
app.use('/', ProductTypeRouter)
app.use('/', ProductRouter)
app.use('/', CustomerRouter)
app.use('/', OrderRouter)

//Chạy cổng nodeJs
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})