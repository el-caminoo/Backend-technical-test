const Attribute = require('../model/object.model');

exports.create = function(req, res) {
    let testObject = new Attribute(
        {
            type: req.body.type,
            crux: req.body.crux,
            color: req.body.color,
            title: req.body.title
        }
    );
    testObject.save(function(err){
        if (err){
            return next(err);
        }
        res.send('valid');
    });
};

exports.update = function(res, req) {
    Attribute.findByIdAndUpdate(req.params.id, {$set: req.body},
        function(err, testObject) {
            if (err){
                res.send('Attribute not found');
                return next(err);
            }
            res.send('updated successfully');
        });

};
