describe("triangle", function() {
	it("is not a triangle if the sum of two of its sides is less than or equal to the third side", function() {
		triangle(2, 1, 5).should.equal("noTriangle");
	});

	it("is an equilateral triangle if all three sides are equal to each other", function () {
		triangle(3, 3, 3).should.equal("equilateral");
	});

	it("is an isosceles triangle if two side are equal but their sum is greater than or equal to the third side", function() {
		triangle(4, 4, 6).should.equal("isosceles");
	});

	it("is a scalene triangle if none of the sides are equal to each other", function() {
		triangle(2, 5, 4).should.equal("scalene");
	});
});
