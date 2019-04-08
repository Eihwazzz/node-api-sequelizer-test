module.exports = app => {

    app.db.sequelize.sync().done(() => {
        app.listen(app.get('port'), () => {
            console.log('Servidor en el puerto ', app.get('port'));
        });
    });

};