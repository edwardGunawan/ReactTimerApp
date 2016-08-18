var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', ()=>{
  it('should exist', () =>{
    expect(Clock).toExist();
  });
}); // group your test and name that group

describe('render' , () => {
  it('should render clock to output', ()=> {
    var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>); // mentioned the totalSeconds props

    /* use jQuery to check the specific component */
    var $el = $(ReactDOM.findDOMNode(clock)); // ReactDOM.findDOMNode converts our components into the acctual html that is render to our browser and set that to el by passing through jQuery
    var actualText = $el.find('.clock-text').text(); // to pass the text value of the html that gets render in clock

    // assert it
    expect(actualText).toBe('01:02');
  });
});

describe('formatSeconds', () => {
  it('should formate seconds', ()=>{
    /* we want to render the component of clock so that we can access on it for the function */
    var clock = TestUtils.renderIntoDocument(<Clock/>); // render our component and return that component back to variable clock so we can do stuff with it.
    var seconds = 650; // 10 minutes 15 sec on clock
    var expected = '10:50';
    var actual = clock.formatSeconds(650); // get the instance of the clock component from the renderIntoDocument, and call the function

    expect(actual).toBe(expected);
  });
  it('should format seconds when min/sec are less than 10', ()=>{
    var clock = TestUtils.renderIntoDocument(<Clock/>); // render our component and return that component back to variable clock so we can do stuff with it.
    var seconds = 61; // 01:01
    var expected = '01:01';
    var actual = clock.formatSeconds(61); // get the instance of the clock component from the renderIntoDocument, and call the function

    expect(actual).toBe(expected);
  });
});
