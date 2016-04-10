module.exports = function (passport) {

    var express = require('express');
    var router = express.Router();
    var debug = require('debug')('EventosApp:server');

    var links = [
        { link: "users", label:"Users"},
        { link: "eventos", label:"Eventos"},
        { link: "participantes", label:"Participantes"},
        { link: "sessoes", label:"Sessoes"},
        { link: "speakers", label:"Speakers"}
        //===== yeoman routejs hook =====//
    ];

    var isAuthenticated = function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    };

    /* GET home page. */
    router.get('/', function (req, res, next) {
        debug(links);
        //res.render('index', {username: req.user.name, env: process.env.NODE_ENV, links:links });
        res.render('index');
    });

    router.get('/login', function (req, res, next) {
        res.render('login', {});
    });

    router.post('/login', passport.authenticate('login',
        {
            successRedirect: '/',
            failureRedirect: '/login'
        }
    ), function (err, docs) {
        debug("Passou login");
    });

    return router;
};
