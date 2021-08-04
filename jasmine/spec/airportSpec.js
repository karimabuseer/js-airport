describe ("airport", function() { 
const airport = new Airport(); 

  it ('should init with capacity of 20 and empty planes array', function(){
    expect(airport.planes).toEqual([])
    expect(airport.capacity).toEqual(20)
  });

})