describe ("plane", function() { 
  const plane = new Plane ();
  it ("should know its status", function() { 
    expect(plane.isLanded).toEqual(false)
  });
});