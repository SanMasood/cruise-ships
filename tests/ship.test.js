const Ship = require('../src/ship.js');
//const Port = require('../src/ship.js');


let cruise;

beforeEach(() => {

cruise= new Ship();
});

describe ('constructor', () => {

    it('creates instance of object Ship', () => {

        expect(new Ship()).toBeInstanceOf(Object);

    })
    it ('has a name', () => {
        
        cruise.cruisename = "DiamondPrincess";
        expect (cruise.cruisename).toBe("DiamondPrincess");
    })

    it ('has a starting port', () => {

        cruise.startingport = 'Cornwall';
        expect (cruise.startingport).toBe('Cornwall');

    })

})
describe ('setSail', () => {

    it ('sets sail from starting port', () => {
        cruise.cruisename = 'ABC'
        cruise.startingport = 'Florence';
        cruise.setSail();

        expect (cruise.setSail()).toEqual(cruise.sailString);
        expect (cruise.setSail()).toBeFalsy();
        

    })
})
