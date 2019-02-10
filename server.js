const express = require('express');
const app = express();
const cors = require('cors')
const Request = require("request");

var jobResults = [];

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

Request.get("http://api.indeed.com/ads/apisearch?publisher=6992485343911252&q=nurse&l=denver%2C+co&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=96.37.86.16&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    //console.dir(JSON.parse(body));
    jobResults = JSON.parse(body).results;
    console.dir(jobResults);
});

 //var jobResults =  [
//     { "jobtitle": "Application Engineer", "company": "Google", "city": "Austin", "state": "TX", "country": "US", "language": "en", "formattedLocation": "Austin, TX", "source": "Google", "date": "Sat, 22 Dec 2018 08:20:40 GMT", "snippet": "Programming experience in <b>Java</b>, Spring, Hibernate, Web Services (RESTful, SOAP), JavaScript. When the situation calls for it, you’ll be part of a team that...", "url": "http://www.indeed.com/viewjob?jk=b54c8d06449a5172&qd=NBU7C8GDPZyyJmU4ju9U4nmdfvhTiA75-VMcfpambXwRdIPXjia8Il1dvSZwyXqe5A1XvWCf6fnvV3GS9l2nTNzPssHu4MNMrPYgYPGl9-A&indpubnum=6992485343911252&atk=1d2isdvvlg0p5802", "onmousedown": "indeed_clk(this,'8853');", "latitude": 30.336811, "longitude": -97.75601, "jobkey": "b54c8d06449a5172", "sponsored": false, "expired": false, "indeedApply": false, "formattedLocationFull": "Austin, TX 78731", "formattedRelativeTime": "30+ days ago", "stations": "" }, 
//     { "jobtitle": "Java/J2EE Developer", "company": "maxohire", "city": "Austin", "state": "TX", "country": "US", "language": "en", "formattedLocation": "Austin, TX", "source": "Indeed", "date": "Thu, 24 Jan 2019 16:29:45 GMT", "snippet": "Hands-on expertise in <b>Java</b> 8 and <b>Java</b> Enterprise technology applications. <b>Java</b>/J2EE, <b>Java</b> 8, NoSQL, Spring/Hibernate, JSPs....", "url": "http://www.indeed.com/viewjob?jk=35bc73d1c60c078f&qd=NBU7C8GDPZyyJmU4ju9U4nmdfvhTiA75-VMcfpambXwRdIPXjia8Il1dvSZwyXqe5A1XvWCf6fnvV3GS9l2nTNzPssHu4MNMrPYgYPGl9-A&indpubnum=6992485343911252&atk=1d2isdvvlg0p5802", "onmousedown": "indeed_clk(this,'8853');", "latitude": 30.26715, "longitude": -97.74306, "jobkey": "35bc73d1c60c078f", "sponsored": false, "expired": false, "indeedApply": true, "formattedLocationFull": "Austin, TX", "formattedRelativeTime": "7 days ago", "stations": "" }, 
//     { "jobtitle": "Software Engineer", "company": "Google", "city": "Austin", "state": "TX", "country": "US", "language": "en", "formattedLocation": "Austin, TX", "source": "Google", "date": "Mon, 17 Dec 2018 20:17:22 GMT", "snippet": "<b>Java</b>, C/C++, C#, Objective C, Python, JavaScript or Go. Bachelor's degree in Computer Science, similar technical field or equivalent practical experience....", "url": "http://www.indeed.com/viewjob?jk=1272a7f00dd32931&qd=NBU7C8GDPZyyJmU4ju9U4nmdfvhTiA75-VMcfpambXwRdIPXjia8Il1dvSZwyXqe5A1XvWCf6fnvV3GS9l2nTNzPssHu4MNMrPYgYPGl9-A&indpubnum=6992485343911252&atk=1d2isdvvlg0p5802", "onmousedown": "indeed_clk(this,'8853');", "latitude": 30.336811, "longitude": -97.75601, "jobkey": "1272a7f00dd32931", "sponsored": false, "expired": false, "indeedApply": false, "formattedLocationFull": "Austin, TX 78731", "formattedRelativeTime": "30+ days ago", "stations": "" }, 
//     { "jobtitle": "Test Engineer", "company": "Google", "city": "Austin", "state": "TX", "country": "US", "language": "en", "formattedLocation": "Austin, TX", "source": "Google", "date": "Tue, 08 Jan 2019 02:17:38 GMT", "snippet": "3 years of experience developing test automation in C++, <b>Java</b> or Python. Bachelor’s degree in computer science or equivalent practical experience....", "url": "http://www.indeed.com/viewjob?jk=fd296477814e3adf&qd=NBU7C8GDPZyyJmU4ju9U4nmdfvhTiA75-VMcfpambXwRdIPXjia8Il1dvSZwyXqe5A1XvWCf6fnvV3GS9l2nTNzPssHu4MNMrPYgYPGl9-A&indpubnum=6992485343911252&atk=1d2isdvvlg0p5802", "onmousedown": "indeed_clk(this,'8853');", "latitude": 30.336811, "longitude": -97.75601, "jobkey": "fd296477814e3adf", "sponsored": false, "expired": false, "indeedApply": false, "formattedLocationFull": "Austin, TX 78731", "formattedRelativeTime": "23 days ago", "stations": "" }, 
//     { "jobtitle": "Senior Staff Software Engineer", "company": "Visa", "city": "Austin", "state": "TX", "country": "US", "language": "en", "formattedLocation": "Austin, TX", "source": "Visa", "date": "Mon, 28 Jan 2019 04:10:48 GMT", "snippet": "<b>Java</b> expert with experience in REST APIs, JSON and exposure to container based technologies. As a Senior Staff Software Engineer, you will be part of our...", "url": "http://www.indeed.com/viewjob?jk=2419f6b06c94e3fb&qd=NBU7C8GDPZyyJmU4ju9U4nmdfvhTiA75-VMcfpambXwRdIPXjia8Il1dvSZwyXqe5A1XvWCf6fnvV3GS9l2nTNzPssHu4MNMrPYgYPGl9-A&indpubnum=6992485343911252&atk=1d2isdvvlg0p5802", "onmousedown": "indeed_clk(this,'8853');", "latitude": 30.26715, "longitude": -97.74306, "jobkey": "2419f6b06c94e3fb", "sponsored": false, "expired": false, "indeedApply": false, "formattedLocationFull": "Austin, TX", "formattedRelativeTime": "3 days ago", "stations": "" }, 
//     { "jobtitle": "Senior Java Developer", "company": "Intiva Health", "city": "Austin", "state": "TX", "country": "US", "language": "en", "formattedLocation": "Austin, TX", "source": "Indeed", "date": "Fri, 11 Jan 2019 14:47:23 GMT", "snippet": "5+ years <b>Java</b> and <b>Java</b> IDE (Eclipse). <b>Java</b> IDE (Eclipse):. Intiva Health is an exciting tech startup that engages licensed medical professionals in the...", "url": "http://www.indeed.com/viewjob?jk=99e4099f1068c406&qd=NBU7C8GDPZyyJmU4ju9U4nmdfvhTiA75-VMcfpambXwRdIPXjia8Il1dvSZwyXqe5A1XvWCf6fnvV3GS9l2nTNzPssHu4MNMrPYgYPGl9-A&indpubnum=6992485343911252&atk=1d2isdvvlg0p5802", "onmousedown": "indeed_clk(this,'8853');", "latitude": 30.26715, "longitude": -97.74306, "jobkey": "99e4099f1068c406", "sponsored": false, "expired": false, "indeedApply": true, "formattedLocationFull": "Austin, TX", "formattedRelativeTime": "20 days ago", "stations": "" }, 
//     { "jobtitle": "Java Programmer/Developer - Austin", "company": "3degrees", "city": "Austin", "state": "TX", "country": "US", "language": "en", "formattedLocation": "Austin, TX", "source": "3Degrees", "date": "Mon, 24 Dec 2018 20:27:46 GMT", "snippet": "<b>Java</b> Server Faces. <b>Java</b> (7 years minimum). Role is in Austin, TX....", "url": "http://www.indeed.com/viewjob?jk=40af35c4b8828f19&qd=NBU7C8GDPZyyJmU4ju9U4nmdfvhTiA75-VMcfpambXwRdIPXjia8Il1dvSZwyXqe5A1XvWCf6fnvV3GS9l2nTNzPssHu4MNMrPYgYPGl9-A&indpubnum=6992485343911252&atk=1d2isdvvlg0p5802", "onmousedown": "indeed_clk(this,'8853');", "latitude": 30.244144, "longitude": -97.76286, "jobkey": "40af35c4b8828f19", "sponsored": false, "expired": false, "indeedApply": true, "formattedLocationFull": "Austin, TX 78704", "formattedRelativeTime": "30+ days ago", "stations": "" }, 
//     { "jobtitle": "Java Developer", "company": "Brilliant Infotech Inc.", "city": "Austin", "state": "TX", "country": "US", "language": "en", "formattedLocation": "Austin, TX", "source": "Indeed", "date": "Wed, 30 Jan 2019 20:08:15 GMT", "snippet": "<b>Java</b> Messaging Services/Apache ActiveMQ. Support and monitoring experience on any of the java/Spring based messaging services like JMS/ActiveMq....", "url": "http://www.indeed.com/viewjob?jk=2df4921800e72ca8&qd=NBU7C8GDPZyyJmU4ju9U4nmdfvhTiA75-VMcfpambXwRdIPXjia8Il1dvSZwyXqe5A1XvWCf6fnvV3GS9l2nTNzPssHu4MNMrPYgYPGl9-A&indpubnum=6992485343911252&atk=1d2isdvvlg0p5802", "onmousedown": "indeed_clk(this,'8853');", "latitude": 30.26715, "longitude": -97.74306, "jobkey": "2df4921800e72ca8", "sponsored": false, "expired": false, "indeedApply": true, "formattedLocationFull": "Austin, TX", "formattedRelativeTime": "1 day ago", "stations": "" }, 
//     { "jobtitle": "Java Developer", "company": "Railcarrx", "city": "Austin", "state": "TX", "country": "US", "language": "en", "formattedLocation": "Austin, TX", "source": "Indeed", "date": "Fri, 25 Jan 2019 15:21:02 GMT", "snippet": "<b>Java</b> Developer (No OPT H1B) Remaining visa will work*. At least 8+ years of experience with sound technology understanding of <b>Java</b> (SE 8)/J2EE ....", "url": "http://www.indeed.com/viewjob?jk=413c68aefb43ec2b&qd=NBU7C8GDPZyyJmU4ju9U4nmdfvhTiA75-VMcfpambXwRdIPXjia8Il1dvSZwyXqe5A1XvWCf6fnvV3GS9l2nTNzPssHu4MNMrPYgYPGl9-A&indpubnum=6992485343911252&atk=1d2isdvvlg0p5802", "onmousedown": "indeed_clk(this,'8853');", "latitude": 30.26715, "longitude": -97.74306, "jobkey": "413c68aefb43ec2b", "sponsored": false, "expired": false, "indeedApply": true, "formattedLocationFull": "Austin, TX", "formattedRelativeTime": "6 days ago", "stations": "" }, 
//     { "jobtitle": "Java Developer", "company": "Numentica LLC", "city": "Austin", "state": "TX", "country": "US", "language": "en", "formattedLocation": "Austin, TX", "source": "Indeed", "date": "Fri, 25 Jan 2019 00:19:03 GMT", "snippet": "Experience with shared <b>Java</b> development on/offshore, Eclipse IDE, GlassFish/Tomcat/weblogic Application Servers....", "url": "http://www.indeed.com/viewjob?jk=d6ba0a8fd816fc7e&qd=NBU7C8GDPZyyJmU4ju9U4nmdfvhTiA75-VMcfpambXwRdIPXjia8Il1dvSZwyXqe5A1XvWCf6fnvV3GS9l2nTNzPssHu4MNMrPYgYPGl9-A&indpubnum=6992485343911252&atk=1d2isdvvlg0p5802", "onmousedown": "indeed_clk(this,'8853');", "latitude": 30.26715, "longitude": -97.74306, "jobkey": "d6ba0a8fd816fc7e", "sponsored": false, "expired": false, "indeedApply": true, "formattedLocationFull": "Austin, TX", "formattedRelativeTime": "6 days ago", "stations": "" }
// ]

app.use(cors(corsOptions))

app.listen(8000, () => {
    console.log('server started');
})

app.route('/api/jobResults').get((req, res) => {
    res.send({ jobResults })
});

app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name'];
    res.send({ name: requestedCatName });
})

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.route('/api/cats').post((req, res) => {
  res.send(201, req.body);
});

app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body);
  });

  app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204);
  });