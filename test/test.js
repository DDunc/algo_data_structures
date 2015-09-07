var algos = require('../algos.js'); //runs the code, and then returns its own exports object
var expect = require('chai').expect;

var testArr, testArr2;
var testAdd = "added value";

describe('recreating native array methods', function(){
	describe('myPush', function(){
		it('should return the same result and indexed-values as native Array.prototype.push', function(){
			//Even though it looks like copypasta, if I don't re-define all these locally I'm gonna have a bad time.
			 testArr = [1,2,3]
			 testArr2 = [1,2,3]
			expect(testArr.myPush(testAdd)).to.eql(testArr2.push(testAdd));
			expect(testArr.toString()).to.eql(testArr2.toString());
		})
	})
	describe('myShift', function(){
		it('should return the same result and indexed-values as native Array.prototype.shift', function(){
			testArr = [1,2,3]
			testArr2 = [1,2,3]
			expect(testArr.myShift()).to.eql(testArr2.shift());
			expect(testArr.toString()).to.eql(testArr2.toString());
		})
	})
	describe('myUnshift', function(){
		it('should return the same result and indexed-values as native Array.prototype.unshift', function(){
			 testArr = [1,2,3]
			 testArr2 = [1,2,3]
			expect(testArr.myUnshift(testAdd)).to.eql(testArr2.unshift(testAdd));
			expect(testArr.toString()).to.eql(testArr2.toString());
		})
	})
		describe('myPop', function(){
		it('should return the same result and indexed-values as native Array.prototype.pop', function(){
			 testArr = [1,2,3]
			 testArr2 = [1,2,3]
			expect(testArr.myPop()).to.eql(testArr2.pop());
			expect(testArr.toString()).to.eql(testArr2.toString());
		})
	})
})

describe ('super sick algorithms unique and frequency2', function(){
	describe("unique", function(){
		it("should filter an array for duplicates and return a new array with no duplicates", function(){
			expect(algos.unique([1,1,"hey", "hey", "hey hey hey"])).to.eql([1, "hey", "hey hey hey"]);
		})
	})
	describe("frequency2", function(){
		it("should take an array of english words and return the most frequently appearing letter", function(){
			expect(algos.frequency2(["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"])).to.eql("o");
		})
	})
})

