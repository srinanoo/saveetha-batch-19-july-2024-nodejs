const traineeModel = require('../models/traineeModel');

async function getAllTrainees(req, res) {
    try {
        let trainees = await traineeModel.find();
        if (trainees.length>0) {
            res.status(200).json({
                "data": trainees,
                "msg": "",
                "error": ""
            });
        } else {
            res.status(200).json({
                "data": "",
                "msg": "No Trainees found!",
                "error": ""
            });
        }
    } catch (err) {
        res.status(500).json({
            "data": "",
            "msg": "",
            "error": err.message
        });
    }
}

async function getSpecificTrainee(req, res) {
    try {
        let trainees = await traineeModel.find({"name": req.query.name});
        if (trainees.length>0) {
            res.status(200).json({
                "data": trainees,
                "msg": "",
                "error": ""
            });
        } else {
            res.status(200).json({
                "data": "",
                "msg": "No Trainees found!",
                "error": ""
            });
        }
    } catch (err) {
        res.status(500).json({
            "data": "",
            "msg": "",
            "error": err.message
        });
    }
}

async function createTrainee(req, res)  {
    try {
        const trainee = new traineeModel(req.body);
        await trainee.save();
        res.status(201).json({
            "data": "",
            "msg": "Trainee Created Successfully!",
            "error": ""
        })
    } catch (err) {
        res.status(500).json({
            "data": "",
            "msg": "",
            "error": err.message
        });
    }
    
}

async function updateTrainee(req, res) {
    try {
        let trainee = await traineeModel.updateOne({"_id": req.body._id}, req.body);
        if(trainee.modifiedCount > 0) {
            res.status(500).json({
                "data": "",
                "msg": "Trainee updated Successfully!",
                "error": ""
            });
        } else {
            res.status(500).json({
                "data": "",
                "msg": "No Trainee Data Found to update!",
                "error": ""
            });
        }
    } catch (err) {
        res.status(500).json({
            "data": "",
            "msg": "",
            "error": err.message
        });
    }
}

async function deleteTrainee(req, res) {
    try {
        let trainee = await traineeModel.deleteOne({"_id": req.params.id});
        if(trainee.deletedCount > 0) {
            res.status(500).json({
                "data": "",
                "msg": "Trainee deleted Successfully!",
                "error": ""
            });
        } else {
            res.status(500).json({
                "data": "",
                "msg": "No Trainee Data Found to delete!",
                "error": ""
            });
        }
    } catch (err) {
        res.status(500).json({
            "data": "",
            "msg": "",
            "error": err.message
        });
    }
}

module.exports = {
    getAllTrainees,
    getSpecificTrainee,
    createTrainee,
    updateTrainee,
    deleteTrainee
}