'use strict';

const path = require('path');

module.exports.webpages = path.join(__dirname, '/static/');
module.exports.localimg = module.exports.webpages + 'content/';
module.exports.webimg = '/img/';
module.exports.uploads = path.join(__dirname, '/uploads/');
