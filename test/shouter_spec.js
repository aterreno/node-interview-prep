var expect = require("chai").expect;
var app = require('../app/shouter');

describe('Shouter', function() {
  it('should shout everything', function() {
    expect(app.shout("Hello")).to.equal("Hello!");
  });
});
