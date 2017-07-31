"use strict";

var assert = require('assert');
var object_hash = require('byteballcore/object_hash.js');

describe("byteballcore/object_hash.js", function() {
	describe('getBallHash()', function() {
		it('ball is the hash of the unit ', function() {
			assert.equal("CxK1luSnAk5+MaGyaE9wl26JdwAkSPFDqWJdYs9gRng=",object_hash.getBallHash("oj8yEksX9Ubq7lLc+p6F2uyHUuynugeVq4+ikT67X6E=",[],[],false));
		});
	});
});

