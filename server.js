const path = require('path');
const express = require('express');
const expSession = require('express-session');
const expHandle = require('express-handlebars');
const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers')
const helpers = require('./utils/helpers');
