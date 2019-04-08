module.exports = app => {

    const Amenities = app.db.models.Amenities;

    app.get('/amenities/:id', (req, res) => {
        Amenities.findById(req.params.id, {
            attributes: ['description']
        })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    });

    app.post('/amenities', (req, res) => {
        Amenities.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });  
    });

    app.delete('/amenities/:id', (req, res) => {
        //Amenities.destroy({where: {id: req.params.id}})
        Amenities.destroy({where: req.params})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    });

};