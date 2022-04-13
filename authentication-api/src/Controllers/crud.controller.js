const { default: mongoose } = require("mongoose");

const post = (model) => async (req, res) => {
    try {
        const item = await model.create(req.body);
        return res.status(201).send(item);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
const getOne = () => async (req, res) => {
    try {
        const item = await model.findOne(req.params.id).lean().exec();
        return res.status(201).send(item)
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
const getAll = () => async (req, res) => {
    try {
        const item = await model.find().lean().exec();
        return res.status(201).send(item)
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
const patch = () => async (req, res) => {
    try {
        const item = await model.findOneAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
        return res.status(201).send(item)
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
const Delete = () => async (req, res) => {
    try {
        const item = await model.findOneAndDelete(req.params.id).lean().exec();
        return res.status(201).send(item)
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
module.exports = (model) => {
    return {
        post: post(model),
        getOne: getOne(model),
        getAll: getAll(model),
        patch: patch(model),
        Delete: Delete(model)
    }
}
