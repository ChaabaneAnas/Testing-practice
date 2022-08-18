const Calculator = require('./Calculator')
describe('CalculatorTG', () => {
  describe('add', () => {

    it('Def', () => {
      expect(Calculator.add(1, 2)).toBeDefined();
    });

    it('basicAdding', () => {
      expect(Calculator.add(1,2)).toBe(3);
    });

    it('floatsAdding', () => {
      expect(Calculator.add(0.2, 0.3)).toBeCloseTo(0.5);
    });

  })

  describe('sub', () => {

    it('Def', () => {
      expect(Calculator.sub(2, 1)).toBeDefined();
    });

    it('basic', () => {
      expect(Calculator.sub(2, 1)).toBe(1);
    });

    it('floatSub', () => {
      expect(Calculator.sub(0.2, 0.3)).toBeCloseTo(-0.1);
    });
    
  })

  describe('mult', () => {

    it('Def', () => {
      expect(Calculator.mult(2, 3)).toBeDefined();
    });

    it('basic', () => {
      expect(Calculator.mult(2, 3)).toBe(6);
    });

    it('floatSub', () => {
      expect(Calculator.mult(0.2, 3)).toBeCloseTo(0.6);
    });
    
    
  })

  describe('div', () => {
    
    it('Def', () => {
      expect(Calculator.div(6, 2)).toBeDefined();
    });


    it('notDevidable', () => {
      expect(Calculator.div(5, 2)).toBeUndefined();
    });

    it('basic', () => {
      expect(Calculator.div(6, 2)).toBe(3);
    });

    it('floatDiv', () => {
      expect(Calculator.div(3, 0.2)).toBeUndefined();
    });
    
  })
})