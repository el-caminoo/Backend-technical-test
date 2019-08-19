const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./model/object.model')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/create', (req, res) => {
    if (!req.body.type) {
        return res.status(400).send({
            success: "false",
            message: 'type is required'
        });
    }
    else if (!req.body.crux) {
        return res.status(400).send({
            success: 'false',
            message: 'crux is required'
        });
    }
    else if (!req.body.color) {
        return res.status(400).send({
            success: 'false',
            message: 'color is required'
        });
    }
    else if (!req.body.title) {
        return res.status(400).send({
            success: 'false', 
            message: 'title is required'
        });
    }
    else {
        return res.status(201).send({
            success: "true",
            message: "valid",
            object: db
        });
    }
});

app.put('/remove/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    let instanceFound;
    let itemIndex;
    db.map((instance, index) => {
        if (instance.id == id) {
            instanceFound = instance;
            itemIndex = index;
        }
    })
    const updatedInstance = {
        id: instanceFound.id,
        type: req.body.type || instanceFound.type,
        crux: req.body.crux || instanceFound.crux,
        color: req.body.color || instanceFound.color,
        title: req.body.title || instanceFound.title
    };
    db.splice(itemIndex, 1, updatedInstance);
    return res.status(201).send({
        success: "true",
        message: "successfully updated",
        db: updatedInstance
    });
});
   



const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('server started at 8000');
});