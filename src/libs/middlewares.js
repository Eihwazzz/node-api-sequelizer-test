import express from 'express';

module.exports = app => {

    // Configuraciones
    app.set('port', process.env.PORT || 3005);

    // middleware
    app.use(express.json());
};