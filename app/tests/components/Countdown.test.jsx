var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Coundown', () => {
  it('should exist' , () =>{
    expect(Countdown).toExist();
  });
  describe('handleSetCountdown', () =>{
    it('should setState to start and countdown', (done)=>{
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleOnSetCountdown(10);

      /* after called handleSetCountdown, the count should be updated, and the countdownStatus
      should be updated */
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('start');

      /* test after just after a second the count get updated */
      // setTimeout will only get called once, setInterval will get called on and on
      // it is asynchronous function, because there is a call back function, so mocha did
      /*not support that, so what you need to do is to put a para to the it function as 'done'
      and after the anonymous test, you called that done() so that mocha will know
      to run the asynchronous, that means it should wait until done is called to stop the test */
      setTimeout(()=>{
        expect(countdown.state.count).toBe(9);
        done();
      },1001); // after a second later the count should be nine, aka updated
    });
    it('should not set count to negative if it is less than 0', (done) =>{
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleOnSetCountdown(1);

      expect(countdown.state.count).toBe(1);
      expect(countdown.state.countdownStatus).toBe('start');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      },3001);
    });
  });
});
