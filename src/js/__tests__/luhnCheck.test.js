import luhnCheck from "../luhnCheck";
 
test.each([
    ['valid', 4099858029959041, true],
    ['valid', 378382246310005, false],
])('testing',(name, input,expected) => {
    expect(luhnCheck(input)).toBe(expected);
});