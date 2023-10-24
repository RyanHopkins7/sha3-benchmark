import { sha256 } from '@noble/hashes/sha256';
import { test_data } from './test_data';
import { Suite } from 'benchmark';

const suite = new Suite;

// TODO: add benchmarks for SHA2 and SHA3 with nodeHash & nobleHash on test_data
// Run on various browsers

// add tests
suite.add('RegExp#test', function () {
    /o/.test('Hello World!');
})
.add('String#indexOf', function () {
    'Hello World!'.indexOf('o') > -1;
})
// add listeners
.on('cycle', function (event) {
    console.log(String(event.target));
})
.on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });

