"use strict";

var assert = require('assert');

var constants = require("byteballcore/constants.js");
var object_hash = require('byteballcore/object_hash.js');

describe("byteballcore/object_hash.js", function() {
    describe('getBallHash()', function() {
        var genesis_ball = object_hash.getBallHash(constants.GENESIS_UNIT);
        it('the genesis_unit is '+constants.GENESIS_UNIT,function() {
            assert.equal(constants.GENESIS_UNIT,"oj8yEksX9Ubq7lLc+p6F2uyHUuynugeVq4+ikT67X6E=");
        });
        it('the genesis_ball is '+genesis_ball,function() {
            assert.equal("CxK1luSnAk5+MaGyaE9wl26JdwAkSPFDqWJdYs9gRng=",genesis_ball);
        });
        it('ball is the hash of the unit ', function() {
            assert.equal("CxK1luSnAk5+MaGyaE9wl26JdwAkSPFDqWJdYs9gRng=",object_hash.getBallHash("oj8yEksX9Ubq7lLc+p6F2uyHUuynugeVq4+ikT67X6E=",[],[],false));
        });
    });
});

