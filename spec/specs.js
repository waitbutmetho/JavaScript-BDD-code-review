describe("pingPong", function(){
  it("return numbers from 1 to the number input, but replace all numbers divisible by three with ping", function() {
    expect(pingPong(3)).to.eql([1, 2, "ping"]);
  });
});
