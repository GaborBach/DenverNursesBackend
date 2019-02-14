const express = require('express');
const app = express();
const cors = require('cors');
const Request = require("request");

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

app.listen(8000, () => {
    console.log('server started');
})

function getJobResults(req, res) {
    var searchterm = req.params['searchterm'];
    var ip = req.ip;
    var userAgent = req.headers['user-agent'];
    var jobResults;
    var url = "http://api.indeed.com/ads/apisearch?publisher=6992485343911252&q="+searchterm+"&l=denver%2C+co&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip="+ip+"&useragent="+userAgent+"&v=2&format=json";

    Request.get(url, (error, response, body) => {
        if (error) {
            return console.dir(error);
        };

        jobResults = JSON.parse(body).results;
        
        // console.dir(jobResults);
        // console.dir(ip);
        // console.dir(req.hostname);
         console.dir(url);
        console.dir(searchterm);
        res.send({ jobResults });
    });
}

app.route('/api/jobResults/:searchterm').get((req, res) => {
    console.dir(req.param['searchterm']);
    getJobResults(req, res);
});

// this works 
// Request.get("http://api.indeed.com/ads/apisearch?publisher=6992485343911252&q=nurse&l=denver%2C+co&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=96.37.86.16&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json", (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }

//     jobResults = JSON.parse(body).results;
//     return jobResults;
//     //console.dir(jobResults);
// });



// app.route('/api/jobResults').get((req, res) => {
//     res.send({ jobResults });
// });
// end

//
// app.route('/api/cats/:name').get((req, res) => {
//     const requestedCatName = req.params['name'];
//     res.send({ name: requestedCatName });
// })

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.route('/api/cats').post((req, res) => {
//   res.send(201, req.body);
// });

// app.route('/api/cats/:name').put((req, res) => {
//     res.send(200, req.body);
//   });

//   app.route('/api/cats/:name').delete((req, res) => {
//     res.sendStatus(204);
//   });