const express = require('express');
const app = express();

const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const moment = require('moment');

const now = moment().utc().format('YYYY-MM-DD');
const requestLogStream = fs.createWriteStream(path.join(__dirname, '../Logs/Request/request-'+ now +'.log'), {flags: 'a'});
const errorLogStream = fs.createWriteStream(path.join(__dirname, '../Logs/Request/Errors/error-'+ now +'.log'), {flags: 'a'});

app.use(function(req, res, next) {

    morgan.token(
        'log', (req, res) => {

            const request = {
                'date' : moment().utc().format('YYYY-MM-DD HH:mm:ss'),
                'header' : {
                    'hostName': req.headers.host,
                    'path': req.path,
                    'url' : req.originalUrl,
                    'method' : req.method,
                    'ip': req.ip,
                    'ips': req.ips,
                    'protocol': req.protocol
                },
                'request' : {
                    'body': req.body,
                    'params': req.params,
                    'query': req.query
                }
            };

            return JSON.stringify(request);
        }
    );

    next();
});

app.use(morgan(':log', {
    stream: errorLogStream,
    skip : (req, res) => {
        return res.statusCode < 400
    }
}));

app.use(morgan(':log', {
    stream: requestLogStream,
    skip : (req, res) => {
        return res.statusCode > 400
    }
}));

module.exports = app;
