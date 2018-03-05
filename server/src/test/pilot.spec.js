const expect = require('chai').expect
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const mongoDbUtils = require('../utils/mongoDbUtils');
const config = require('../config');
const continents = require('../3_database/continentsDatabase')

describe('The continent database module', function () {
    var mongoDb = null;

    before(function (done) {
        MongoClient.connect(config.database)
            .then(function (db) {
                mongoDb = db;
            })
            .then(function () { })
            .then(done, done);
    });

    after(function (done) {
        mongoDb.close()
            .then(function () { })
            .then(done, done);
    });

    it('get all continents successfully', function* () {

        const getDbStub = this.sandbox.stub(mongoDbUtils, 'get', function () {
            return mongoDb;
        });

        const result = yield continents.getAll()
        expect(result).to.be.an("Array")
        expect(result.length).to.equal(3);
        expect(result[0]).to.be.json
        expect(result[0]).to.be.a('object')
        expect(result[0]).to.have.property('id')
        expect(result[0]).to.have.property('name')
        expect(result[0]).to.have.property('regions')
        expect(result[0].name).to.be.a('string')
        expect(result[0].name).to.equal('América');
        expect(result[0].regions).to.be.a('Array')
        expect(result[0].regions.length).to.equal(4)
        expect(result[0].regions[0]).to.be.json
        expect(result[0].regions[0]).to.have.property('name')
        expect(result[0].regions[0].name).to.equal('Norteamérica')
    });

    it('get all continents catch error', function* () {

        const error = new Error('Cannot connect to database');

        const getDbStub = this.sandbox.stub(mongoDbUtils, 'get', function () {
            return error;
        });

        const result = yield continents.getAll().catch(error => {
            expect(error).to.eql(error)
        });
    });

    it('get continent by id successfully', function* () {

        const getDbStub = this.sandbox.stub(mongoDbUtils, 'get', function () {
            return mongoDb;
        });

        const result = yield continents.getById(2)
        expect(result).to.be.json
        expect(result).to.be.a('object')
        expect(result).to.have.property('id')
        expect(result).to.have.property('name')
        expect(result).to.have.property('regions')
        expect(result.name).to.be.a('string')
        expect(result.name).to.equal('América');
        expect(result.regions).to.be.a('Array')
        expect(result.regions.length).to.equal(4)
        expect(result.regions[0]).to.be.json
        expect(result.regions[0]).to.have.property('name')
        expect(result.regions[0].name).to.equal('Norteamérica')
    });

    it('create new continent successfully', function* () {

        const getDbStub = this.sandbox.stub(mongoDbUtils, 'get', function () {
            return mongoDb;
        });

        let newContinent = {
            "_id": ObjectID('11a789521a974053ee9bc078'),
            "id": 99,
            "name": "Africa",
            "regions": [
                {
                    "id": 99,
                    "name": "Sudeste",
                    "placesCount": 5,
                    "image": "https://mundoexplora.com/wp-content/uploads/2016/06/Skyline-2.jpg"
                }
            ]
        }

        const createCall = yield continents.create(newContinent)

        const result = yield continents.getById(99)

        expect(result).to.be.json
        expect(result).to.be.a('object')
        expect(result).to.have.property('id')
        expect(result).to.have.property('name')
        expect(result).to.have.property('regions')
        expect(result.name).to.be.a('string')
        expect(result.name).to.equal('Africa');
        expect(result.regions).to.be.a('Array')
        expect(result.regions.length).to.equal(1)
        expect(result.regions[0]).to.be.json
        expect(result.regions[0]).to.have.property('name')
        expect(result.regions[0].name).to.equal('Sudeste')

        // deshago el cambio en la base
        const reset = yield continents.remove(99)

    });

    it('update continent successfully', function* () {

        const getDbStub = this.sandbox.stub(mongoDbUtils, 'get', function () {
            return mongoDb;
        });

        const oldContinent = yield continents.getById(2)

        let newContinent = oldContinent;
        newContinent.name = 'America Latina';

        const updateCall = yield continents.update(ObjectID(oldContinent._id), newContinent)

        const result = yield continents.getById(2)

        expect(result).to.be.json
        expect(result).to.be.a('object')
        expect(result).to.have.property('id')
        expect(result).to.have.property('name')
        expect(result).to.have.property('regions')
        expect(result.name).to.be.a('string')
        expect(result.name).to.equal('America Latina');
        expect(result.regions).to.be.a('Array')
        expect(result.regions.length).to.equal(4)
        expect(result.regions[0]).to.be.json
        expect(result.regions[0]).to.have.property('name')
        expect(result.regions[0].name).to.equal('Norteamérica')


        // deshago el cambio en la base
        newContinent.name = 'América';
        const resetChanges = yield continents.update(oldContinent._id, newContinent)

    });


    it('delete continent successfully', function* () {

        const getDbStub = this.sandbox.stub(mongoDbUtils, 'get', function () {
            return mongoDb;
        });

        let newContinent = {
            "_id": ObjectID('11a789521a974053ee9bc078'),
            "id": 99,
            "name": "Africa",
            "regions": [
                {
                    "id": 99,
                    "name": "Sudeste",
                    "placesCount": 5,
                    "image": "https://mundoexplora.com/wp-content/uploads/2016/06/Skyline-2.jpg"
                }
            ]
        }

        // primero lo creo y lo borro luego
        const createCall = yield continents.create(newContinent)

        const result = yield continents.remove(99)
        
        expect(result).to.equal(true);

    });


})
