"use strict";

var appendServerUrlToImages = require('../../utils').appendServerUrlToImages;
var should = require('chai').should();
var config = require('../../config');

describe('Append server url to object by field name', function() {

    var mockImages = [
        {
            id: 2,
            image: 'image2.png'
        },
        {
            id: 3,
            image: 'image3.png',
            thumbnail: 'thumbnail3.png'
        },
        {
            id: 4,
            thumbnail: 'thumbnail4.png'
        }
    ];
    it('should apply server string url to fields except missing fields', function() {
        var expectedResults = [
            {
                id: 2,
                image: config.serverUrl + 'image2.png'
            },
            {
                id: 3,
                image: config.serverUrl + 'image3.png',
                thumbnail: config.serverUrl + 'thumbnail3.png'
            },
            {
                id: 4,
                thumbnail: config.serverUrl + 'thumbnail4.png'
            }
        ];
        var result = appendServerUrlToImages(mockImages, ['image', 'thumbnail']);
        result.should.be.an('array');
        result.should.have.lengthOf(3);
        result.should.eql(expectedResults);
    });
    it('should apply server string url only to specified fields', function() {
        var expectedResults = [
            {
                id: 2,
                image: config.serverUrl + 'image2.png'
            },
            {
                id: 3,
                image: config.serverUrl + 'image3.png',
                thumbnail: 'thumbnail3.png'
            },
            {
                id: 4,
                thumbnail: 'thumbnail4.png'
            }
        ];
        var result = appendServerUrlToImages(mockImages, ['image']);
        result.should.be.an('array');
        result.should.have.lengthOf(3);
        result.should.eql(expectedResults);
    });
    it('should apply server string url only to specified field passed as string', function() {
        var expectedResults = [
            {
                id: 2,
                image: config.serverUrl + 'image2.png'
            },
            {
                id: 3,
                image: config.serverUrl + 'image3.png',
                thumbnail: 'thumbnail3.png'
            },
            {
                id: 4,
                thumbnail: 'thumbnail4.png'
            }
        ];
        var result = appendServerUrlToImages(mockImages, 'image');
        result.should.be.an('array');
        result.should.have.lengthOf(3);
        result.should.eql(expectedResults);
    });
    it('should apply server string url to single string if key = true', function () {
        var result = appendServerUrlToImages('image.jpg', true);
        result.should.be.a('string');
        result.should.eql(config.serverUrl + 'image.jpg');
    })
});
