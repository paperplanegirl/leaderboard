// 1. SETTING UP THE DEPENDENCIES
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()

// 2. INSTANTIATING THE APP

// mounting sub-app: view engine (ejs

var leaderboard = [
  { name: 'Keng Hong', score: 88 },
  { name: 'Yvonne', score: 65 }
]

// GET /entries
// GET /entries/1
// POST /entries
// PUT /entries/1
// DELETE /entries/1

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
  res.json(leaderboard)
})

// app.get('/leaderboard/:name', function(req, res) {
//   var name = req.params.name
//   var results
//   for(var i = 0; i < leaderboard.length; i++) {
//       if (leaderboard[i].name == name) {
//         results = leaderboard[i]
//     }
//   }
//   res.json(results)
// })

app.post('/leaderboard', function (req, res) {
  var newEntry = {
    name: req.body.name,
    score: req.body.score
  }
  leaderboard.push(newEntry)
  res.json(newEntry)
})


app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
