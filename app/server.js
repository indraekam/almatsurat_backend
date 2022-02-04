const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');

const app = express();

let whiteList = [
    //Alamat Client (FrontEnd) yg Bisa akses sever RestFull Api ini, dan bisa lebih dari satu
    'http://localhost:8081'
];

let corsOption = {
    origin: function (origin, callback){
        if (whiteList.indexOf(origin) !== -1 || !origin){
            callback(null, true); 
        }else{
            callback(new Error('Invalid origin by Cors'))
        }
    }
}

app.use(cors(corsOption));
app.use(morgan("dev"));
// Parser Request dalam application/json dan x-www-form-urlencode
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('listening on port  ' + PORT);
})

//setting endpoint
app.use('/', routes);
