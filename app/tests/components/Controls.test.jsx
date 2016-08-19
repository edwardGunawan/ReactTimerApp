var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });
});

describe('render', () =>{
  it('should render pause when started', () =>{
    var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="start"/>);
     var $el = $(ReactDOM.findDOMNode(controls));

     var $pauseButton = $el.find('button:contains(Pause)'); // :contains lets you check the text value, and we want to find the button component that has the text value of Pause
     // the length of the pauseButton is the number of button that jQuery will find ==> equal to the number of items that found
     // if didn't find any pause button it will be 0, and if it find 2 it will be 2
     expect($pauseButton.length).toBe(1);

  });
  it('should render start when paused', () => {
    var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
    var $el = $(ReactDOM.findDOMNode(controls));

    var $startButton = $el.find("button:contains(Start)");
    expect($startButton.length).toBe(1);
  });
});
