#!/usr/bin/env node
const chokidar = require('chokidar');
const prog = require('caporal');

chokidar.watch('.')
  .on('add', () => console.log('STARTING USERS PROGRAM'))
  .on('change', () => console.log('FILE CHANGED'))
  .on('unlink', () => console.log('FILE UNLINKED'));