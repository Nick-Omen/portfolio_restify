"use strict";

var slug = require('slug');

var getSlug = require('../../utils').getSlug;
var should = require('chai').should();
var config = require('../../config');

describe('Get slugify string', function() {
    it('should return slugify string', function () {
        var result = getSlug('Test string');
        result.should.be.a('string');
        result.should.have.lengthOf(11);
        result.should.equal('test-string');
    });
    it('should return slugify string from Cyrillic chars', function () {
        var result = getSlug('Тестовая строка');
        result.should.be.a('string');
        result.should.have.lengthOf(16);
        result.should.equal('testovaya-stroka');
    });
    it('should return slugify string with different symbols', function () {
        var result = getSlug('`T!e@s#t %s^tr*i(n){g}');
        result.should.be.a('string');
        result.should.have.lengthOf(11);
        result.should.equal('test-string');
    });
    it('should return slugify string with different symbols and Cyrillic chars', function () {
        var result = getSlug('!Т@e#ст%о^ва*я( )с+т{ро}к[а]');
        result.should.be.a('string');
        result.should.have.lengthOf(16);
        result.should.equal('testovaya-stroka');
    });
});
