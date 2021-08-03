describe("Airport", function() { 
  
  it("should return num if num is not divisible by 3 or 5", function() {
    expect(fizzBuzz(2)).toEqual(2) });

  it("should return fizz if num is divisible by 3", function() {
    expect(fizzBuzz(3)).toEqual('fizz') });

  it("should return buzz if num is divisible by 5", function() {
    expect(fizzBuzz(5)).toEqual('buzz') });

  it("should return fizzbuzz if num is divisble by 3 and 5", function() {
    expect(fizzBuzz(15)).toEqual('fizzbuzz') });

});