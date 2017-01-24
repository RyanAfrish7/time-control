const timeControl = require('../');

const assert = require('assert');

describe('timeControl', function() {
  describe('#setTime()', function() {

    var currentDateTime = null;
    var mTime = null;

    before(function(done) {
      currentDateTime = new Date(Date.now());
      mTime = process.hrtime();
      done();
    });

    after(function(done) {
      this.timeout(0);
      timeControl.setTime(currentDateTime);
      mTime = process.hrtime(mTime);
      timeControl.setTime(new Date(currentDateTime.getTime() + mTime[0] * 1000 + mTime[1] / 1e6 )).then(function() {
        done();
      }).catch(function() {
        done();
      });
    });

    it('should set time', function(done) {
      timeControl.setTime(new Date(848310971000)).then(function() {
        assert.equal(Date.now() - new Date(848310971000) < 1000, true, "Time synced with accuracy of 1000 ms");
        done();
      }).catch(done);
    });

  });
});