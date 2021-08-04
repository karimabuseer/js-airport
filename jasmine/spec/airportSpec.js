describe ("airport", function() { 

  beforeEach(function() {
    airport = new Airport();
  });

  it ('should init with capacity of 20 and empty planes array', function() {
    expect(airport.planes).toEqual([])
    expect(airport.capacity).toEqual(20)
  });

  it ('landing should add a plane to the list of planes', function() { 
    airport.land('plane')
    expect(airport.planes).toEqual(['plane'])
  });

  it ('taking a plane off should remove it from list of planes', function() { 
    airport.land('plane1')
    airport.land('plane2')
    airport.land('plane3')
    airport.take_off('plane2')
    expect(airport.planes).toEqual(['plane1', 'plane3'])
  });

});