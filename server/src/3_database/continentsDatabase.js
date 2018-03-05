const mongoDbUtils = require('../utils/mongoDbUtils');
const collectionName = 'continents';

const getAll = () => {
    return new Promise((resolve, reject) => {
        const db = mongoDbUtils.get();
        db.collection(collectionName)
            .find()
            .toArray((err, continents) => {
                if (err) resolve([]);
                resolve(continents);
            })
    });
};

const getById = (id) => {
    return new Promise((resolve, reject) => {
        const db = mongoDbUtils.get();
        let continent = db.collection(collectionName)
            .findOne({ "id": id }, function (err, doc) {
                if (err) resolve({});
                resolve(doc);
            });
    })
};

const create = (newContinent) => {
    return new Promise((resolve, reject) => {
        const db = mongoDbUtils.get();

        db.collection(collectionName)
            .insert(newContinent, { w: 1 }, function (err, records) {
                resolve(records);
            });
    })
};

const update = (id, newContinent) => {
    return new Promise((resolve, reject) => {
        const db = mongoDbUtils.get();
        db.collection(collectionName)
            .updateOne({
                _id: id
            },
            newContinent)
            .then(result => {
                resolve(!!result.modifiedCount && id);
            })
            .catch(err => {
                console.log(err);
                resolve();
            });
    })
};

const remove = (id) => {
    return new Promise((resolve, reject) => {
        const db = mongoDbUtils.get();
        let continent = db.collection(collectionName)
            .remove({ "id": id }, function (err, result) {

                if (err)
                    resolve(false)

                // no borro ningun registro, el n == 0
                if (result && result.result && result.result.n == 0)
                    resolve(false)
                else
                    resolve(true)
            });
    })
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};