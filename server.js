const path = require('path');
const express = require('express');
const expSession = require('express-session');
const expHandle = require('express-handlebars');
const handlebars = expHandle.create({helpers});

const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers')
const helpers = require('./utils/helpers');

const PORT = process.env.PORT || 3001;
const exp = express();

const session = {
    secret: 'secret',
    cookie:{ expires: 3600000 },
    resave: true,
    rolling: true,
    saveUninitialized: true,
    store: new sequelizeStore({db:sequelize})
};

exp.use(expSession(session));

exp.engine('handlebars', handlebars.engine);
exp.set('view engine', 'handlebars');

exp.use(routes);
exp.use(express.json());
exp.use(express.urlencoded({ extended: false }));
exp.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
  exp.listen(PORT, () => console.log('Now listening'));
});