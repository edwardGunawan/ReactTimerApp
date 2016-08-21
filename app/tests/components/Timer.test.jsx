var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist',() => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange('start');
    expect(timer.state.timerStatus).toBe('start');
    expect(timer.state.count).toBe(0);

    setTimeout(() =>{
      expect(timer.state.timerStatus).toBe('start');
      expect(timer.state.count).toBe(1);
      done();
    },1001)
  });

  it('should paused timer on pause status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count:10});
    timer.handleStatusChange('start');
    timer.handleStatusChange('paused');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(10);
      done();

    },1001);
  });

  it('should stopped timer on stopped status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.setState({count:10});
    timer.handleStatusChange('start');
    timer.handleStatusChange('stopped');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
      done();
    }, 1001);
  });
});
