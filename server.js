import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + "/"));
app.set('view engine', 'html');

app.get('*', function(req, res) {
    res.render('index.html')
});

app.post('/register', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400)
        console.log(req.body)
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(req.body));
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});