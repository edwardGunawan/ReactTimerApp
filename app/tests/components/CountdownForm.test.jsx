var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
/* put it below testable components and after the 3rd party lib so it is clear */
var CountdownForm = require('CountdownForm');

describe('CountdownForm',()=>{
  it('should exist', () => {
    expect(CountdownForm).toExist(); // to check if its exist or not
  });
  it('should call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy(); // to create the spy for testing the function
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>); // referencing the spy variable
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    /* after finding the el, set the value to string 109, then simulate the submit, then assert it with
    spy to what the result is */
    countdownForm.refs.seconds.value = "109"; // manipulate the input field inside of the countdown form
    // simulate(test only) submit for the eventListener in form for simulation for the DOM node, just a single element inside countdownForm
    TestUtils.Simulate.submit($el.find('form')[0]); // it has to be a non-jQuery dom node pass into submit

    /* toHaveBeenCalledWith is taking argument */
    /* spy is to see whether the function that spy(like a function that is passed down) is called
    already or not, or it is called with the argument */
    expect(spy).toHaveBeenCalledWith(109); // it is integer because the only thing that
    // we pass it on to the spy which is the this.props.onSetCountdown is a number integer

  });
  it('should not call onSetCountdown if invalid seconds entered', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value="asdfa";
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled(); // if spy is not called at all(the this.props.onSetCountdown is being called or not)
  });
});
