﻿'use strict';

/**
 * Module dependencies.
 */
var Uuid = require('node-uuid');

/**
 * Article Schema
 */
var Comment = {
  identity: 'comment',
  connection: 'simple',
  autoPK: false,
  autoCreatedAt: true,
  attributes: {
    id: {
      type: 'text',
      primaryKey: true,
      unique: true,
      required: true,
      defaultsTo: function () {
        return Uuid.v4();
      }
    },
    who: {
      type: 'string',
      defaultsTo: '匿名'
    },
    title: {
      type: 'string',
      defaultsTo: ''
    },
	desc: {
	  type: 'text',
	  defaultsTo: ''
	},
	when: {
      type: 'string',
      defaultsTo: ''
    },
	 from:{
	  type:'string',
      defaultsTo: ''
	},
	 fromUniqueId:{
	  type: 'string',
	  defaultsTo: ''
  },
   bookUniqueId:{
     type:'string',
     defaultsTo:''
   },
   book:{
    model:'book'
   }
  }
};

module.exports = Comment;
