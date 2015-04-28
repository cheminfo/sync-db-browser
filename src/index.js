'use strict';

var SyncDB = exports.SyncDB = require('sync-db');
var IDBDriver = exports.IDBDriver = require('sync-db-idb');

exports.createSync = function (name, url, driver) {
    if (typeof name !== 'string')
        throw new TypeError('name argument must be a string');
    if (driver === undefined)
        driver = 'idb';
    if (driver !== 'idb')
        throw new RangeError('only "idb" is supported as a driver');
    return new SyncDB({
        driver: new IDBDriver(name),
        url: url
    });
};
