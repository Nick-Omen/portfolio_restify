"use strict";

var should = require('chai').should();
var idArrayToString = require('../../utils').idArrayToString;

describe('Convert number or array of numbers to string for sql query', function () {
    it('should return string from number', function () {
        var result = idArrayToString(1);
        result.should.be.a('string');
        result.should.have.lengthOf(1);
        result.should.equal('1');
    });
    it('should return string from number string', function () {
        var result = idArrayToString('2');
        result.should.be.a('string');
        result.should.have.lengthOf(1);
        result.should.equal('2');
    });
    it('should return numbers separated by coma from array of numbers', function () {
        var result = idArrayToString([1,2,3]);
        result.should.be.a('string');
        result.should.have.lengthOf(5);
        result.should.equal('1,2,3');
    });
    it('should return numbers separated by coma from array of numbers and number strings', function () {
        var result = idArrayToString([1,'2',3]);
        result.should.be.a('string');
        result.should.have.lengthOf(5);
        result.should.equal('1,2,3');
    });
});
