const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const config = require('../config');
const env = process.env.NODE_ENV === 'production'
      ? config.build
      : config.dev;
const port = env.serverPort;

module.exports = function () {
	app.use('/', function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  	next();
	 });

	app.get('/test', function (req, res) {
		res.send('This is API part.')
	})

	// get email list
	app.get('/email/list', function (req, res) {
		const emailList = fs.readFileSync(__dirname + '/email-list.json', 'utf8');

		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.parse(JSON.stringify(emailList)));
	});

	// get email by id
	app.get('/email/:id', function (req, res) {
		const paramId = req.params.id;
		const emailList = fs.readFileSync(__dirname + '/email-list.json', 'utf8');

		const list = JSON.parse(emailList).inbox_list;
		let item;

		for (let i = 0; i < list.length; i++) {

			if (list[i].id == paramId) {
				item = list[i];
			}
		}

		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.parse(JSON.stringify(item || {})));
	});

	app.listen(port, function () {
	  	console.log('Server run on port:' + port)
	})
};
