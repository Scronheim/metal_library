const express = require('express')
const Mysqldb = require('./mysqldb')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const cors = require('cors')
// const fileUpload = require('express-fileupload')

const mysqlDB = new Mysqldb()
const app = express()
const router = express.Router()

router.use(bodyParser.json({limit: '50mb'}))
router.use(bodyParser.urlencoded({extended: false, limit: '50mb'}))

app.use(cors())
// app.use(fileUpload({createParentPath: true}))

router.route('/api/band/:id')
    .get((req, res) => {
      mysqlDB.selectBandById(req.params.id).then((response) => {
        jsonResponse(res, response)
      })
    })

router.route('/api/band')
    .post((req, res) => {
      mysqlDB.insertBand(req.body).then((response) => {
        jsonResponse(res, response)
      })
    })









router.route('/api/countries')
    .get((req, res) => {
      mysqlDB.selectCountries().then((response) => {
        jsonResponse(res, response)
      })
    })

router.route('/api/genres')
    .get((req, res) => {
      mysqlDB.selectGenres().then((response) => {
        jsonResponse(res, response)
      })
    })

router.route('/api/band_statuses')
    .get((req, res) => {
      mysqlDB.selectBandStatuses().then((response) => {
        jsonResponse(res, response)
      })
    })

function jsonResponse(res, data, error) {
  if (error) res.status(400)
  return res.json({
    data: data,
    error: error,
  })
}

app.use(router)
const port = 3002
app.listen(port, function() {
  console.log(`Express server listening on port ${port}`)
});
