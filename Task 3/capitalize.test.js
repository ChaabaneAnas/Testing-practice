const capitalize = require('./capitalize')

describe('Capitalize', () => {

  it('FirstCapital', () => {
    expect(capitalize('anas')).toBe('Anas');
  });

  it('FirstCapital', () => {
    expect(capitalize('anAs')).toBe('Anas');
  });

})
