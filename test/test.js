const assert = require('assert');


// const maths = require('../index');
// const add = maths.add;
// const sub = maths.sub;

// declare the add and sub variables
// and assign them .. in ONE STEP!!
const {add, sub, mul, div, squ, roo} = require('../index')
// Object destructuring

describe('Adding numbers', () => {
    describe('simple addition', () => {
        it('should return 2 when the values are 1 and 1', () => {
            assert.equal(add(1,1), 2);
        });
    });
    describe('adding decimal numbers', () => {
        it('should equal ...... to 5 decimal palces', () =>{
            assert.equal(10.0 + 10.0, 20.0);
        });
    });
});

    describe('Subtracting numbers', () => {
        describe('simple subtraction', () =>{
            it('should equal 0 when subtracting 1 and 1', () => {
                assert.equal(sub(1,1), 0);
            });
        });
    });

    describe('Multiply Numbers', () => {
        describe('simple multiplication', () => {
            it('should equal 2 when multiplying 1 and 2', () => {
                assert.equal(mul(1,2), 2);
            });
        });
    });

    describe('Divide Numbers', () => {
        describe('simple division', () => {
            it('should equal 2 when dividing 2 and 1', () => {
                assert.equal(div(2,1), 2);
            });
        });
    });

    describe('Square Numbers', () => {
        describe('simple squaring', () => {
            it('should equal 4 when squaring 2', () => {
                assert.equal(squ(2), 4);
            });
        });
    });
    
    describe('Square Root Numbers', () => {
        describe('simple square rooting', () => {
            it('should equal 2 when squaring rooting 4', () => {
                assert.equal(roo(4), 2);
            });
        });
    });