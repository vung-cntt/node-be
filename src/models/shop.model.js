'use strict'

const { model, Schema, Types } = require('mongoose')

const DOCUMENT_NAME = 'Shop'
const COLLECTION_NAME = 'Shops'

const ShopSchema = new Schema({
    name:{
        type:String,
        trim:true,
        maxLength: 150
    },
    email:{
        type:String,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        require:true
    },
    status:{
        type:String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    verfify:{
        type:Schema.Types.Boolean,
        default: false
    },
    role:{
        type:Array,
        default: []
    },
},{
    timestamps: true,
    collection: COLLECTION_NAME
})
