import { greet } from './greet';

describe('greet', () => {
  it('should be return full name', () => {
    const result = greet('angular');
    // expect(result).toBe('hello angular');
    expect(result).toContain('angular')
  });
});
