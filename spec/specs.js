// Main Function specs
describe("pingPong", function(){
  it("return numbers from 1 to the number input, but replace all numbers divisible by three with ping", function() {
    expect(pingPong(3)).to.eql([1, 2, "ping"]);
  });
  it("return numbers from 1 to the number input, but replace all numbers divisible by three with ping, and all numbers divisible by 5 with pong", function() {
    expect(pingPong(5)).to.eql([1, 2, "ping", 4, "pong"]);
  });
  it("return numbers from 1 to the number input, but replace all numbers divisible 3, 5, and 15 with ping, pong, and pingpong", function() {
    expect(pingPong(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong"]);
  });
});
