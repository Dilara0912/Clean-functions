import playerHealth from '../players';

test('should healthy for health > 50', () => {
    expect(playerHealth({name: 'Маг', health: 90})).toBe('healthy');
});

test('should wounded for health >= 15 and <= 50', () => {
    expect(playerHealth({name: 'Bob', health: 35})).toBe('wounded');
});

test('should wounded for health < 15', () => {
    expect(playerHealth({name: 'Ron', health: 10})).toBe('critical');
});

