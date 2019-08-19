const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./model/object.model')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/create', (req, res) => {
    if (!req.body.type || !req.body.crux || !req.body.color || !req.body.title) {
        return res.status(400).send({
            success: "false",
            input: req.body
        });
    }

    else {
        return res.status(201).send({
            success: "true",
            message: "valid",
        });
    }
});

app.patch('/remove/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    var attr = req.param('attr')
    let instanceFound;
    let itemIndex;
    db.map((instance, index) => {
        if (instance.id == id) {
            instanceFound = instance;
            itemIndex = index;
        }
    });
    if (!instanceFound[attr]) {
        res.status(400).send({
            success: "false",
            message: "Attribute not found"
        });
    }
    else {
        delete instanceFound[attr];
        const updatedInstance = {
            id: instanceFound.id,
            type: instanceFound.type,
            crux: instanceFound.crux,
            color: instanceFound.color,
            title: instanceFound.title
        };
        db.splice(itemIndex, 1, updatedInstance);
        return res.status(201).send({
            'success': "true",
            message: "successfully updated",
            db: updatedInstance
        });
    }
});
   



const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('server started at 8000');
});