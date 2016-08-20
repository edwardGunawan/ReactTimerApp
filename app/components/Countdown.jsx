var React = require('react');
var PropTypes = React.PropTypes;
var Clock = require('Clock');
var CountdownForm = require('CountdownForm')
var Controls = require('Controls');
var Countdown = React.createClass({
  getInitialState: function(){
    return {
      count : 0,
      countdownStatus:'stopped'
    };
  },
  /* gets called if props or state gets updated and it gets pass prevProps, and
  prevStates
  So when I said countDownSatus :'start' it will call the componentDidUpdate method
  this.state.countDownSatus after it will become start, and prevState will be stop
  we can check if their equal or if they are not that mean it has been changed

  We don't want to do a lot of development in componentDidUpdate, it is best to check what
  changes you need to make and called separate function that handle that change */
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){ // we care if they are not the same, if they are the same the don't make any changes
      switch(this.state.countdownStatus) {
        case 'start' :
          this.startTimer();
          break;
        case 'stopped' : // since we didn't use break, the code will execute stopped and paused
          this.setState({count:0}); // means you clear the count to 0 and you also clear the interval to not keep minusing
        case 'paused' :
        /* reset the count and start the timer again if stopped, but paused just clear the timer */
          clearInterval(this.timer); // means you stopped the Interval for keep going down, but the value is still the same
          this.timer=undefined;
          break;

      }
    }


  },

  /* when someone leaves the countdown page this interval will gets firing, even
  if they go to timer and do something else  so we need to clear the timer.*/
  componentWillUnmount: function(){
    clearInterval(this.timer);
    this.timer = 'undefined';
  },

  startTimer: function(){
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount>= 0 ? newCount: 0
      });
      /* that means after it finished it will called on stopped, and it will start
      a brand new search automatically */
      if(newCount === 0){
        this.setState({countdownStatus: 'stopped'});
      }
    },1000);
  },
  handleOnSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'start'
    });
  },
  handleStatusChange: function(newStatus){
    this.setState({countdownStatus:newStatus});
  },
  render: function() {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if(countdownStatus !== 'stopped'){
        /* passing down status everytime when change, until it is countdownForm where there is no props */
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      } else {
        return <CountdownForm onSetCountdown={this.handleOnSetCountdown} />
      }
    }
    return (
      <div>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }

});

module.exports = Countdown;
