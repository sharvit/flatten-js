var should 		= require('chai').should(),
	flatten 	= require('../index');

describe('flatten', function() {
	it('should work in case of 3 steps deep', function() {
		flatten(
			[[1,2,[3]],4]
		).should.eql(
			[1, 2, 3, 4]
		);
	});
	it('should work in case of multiple 4 steps deep', function() {
		flatten(
			[[1,2,[3, 4, [5, 6]]],7,[8,[[[9, 10, 11]]]]]
		).should.eql(
			[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
		);
	});
	it('should work in case of flat input', function() {
		flatten(
			[1, 2, 3, 4]
		).should.eql(
			[1, 2, 3, 4]
		);
	});
	it('should work in case of empty array', function() {
		flatten(
			[]
		).should.eql(
			[]
		);
	});
	it('should work when not suplling array', function() {
		flatten(
			1
		).should.eql(
			[1]
		);
	});
});