/**packages */

const mongoose = require("mongoose");
const db = require("../db-connection/mongodb")
/**using schema */

const schema = require("../schemas/person.schema");
db();
schema.statics = {
    create: function (data,cb){
        let doc = new this(data);
        doc.save(cb);
    },
    getAll: function (query,cb){
        this.find(query,cb);
    },
    getByCode: function (query,cb){ //Función debe ser modificada para usar "Idenficacion" en lugar de "code"
        this.find(query,cb);
    },
    update: function(query,data,cb){
        this.findOneAndUpdate(query,{$set: data},{new: true},cb); 
    },
    delete: function(query,cb){
        this.findOneAndDelete(query);
    }
};

const dto = mongoose.model("coll_person",schema);
module.exports = dto;