import express from 'express';

module.exports = app => {

    // Configuraciones
    app.set('port', process.env.PORT || 3003);

    // middleware
    app.use(express.json());
};