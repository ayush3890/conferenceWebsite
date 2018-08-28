var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.get('/rulesandregulation', function (req, res) {
    res.render('rules_regulation.ejs');
});

app.get('/ICITAES', function (req, res) {
    res.render('ICITAES.ejs');
});

// app.get('/ICRRM', function (req, res) {
//     res.render('ICRRM.ejs');
// });

// app.get('/advisorycommittee', function (req, res) {
//     res.render('advisoryCommittee.ejs');
// });


// app.get('/technicalcommittee', function (req, res) {
//     res.render('technicalCommittee.ejs');
// });


app.listen(process.env.PORT || "3000", function () {
    console.log("Server Started at 3000");
});