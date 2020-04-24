let calc = require('../src/calculator.js');

 describe('should add two numbers', function(){
    it('return sum',function(){
        expect(calc.add(2,3)).toEqual(5)
    });
 });

 describe('should add two or more numbers', function(){
    it('return sum',function(){
        expect(calc.addMultiple(9,3,1,2)).toEqual(15)
    });
 });

 describe('should multiple two numbers', function(){
    it('return multiple ',function(){
        expect(calc. multiply(9,3)).toEqual(27)
    });
 });
 describe('should multiple two or more numbers', function(){
    it('return multiple',function(){
        expect(calc. multiplyAlot(2,4,3)).toEqual(24)
    });
 });

