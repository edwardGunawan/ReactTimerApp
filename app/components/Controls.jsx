var React = require('react');

/* going to get pass the countdown status, when the countdown status is
started, you want to render the pause button, and when countdown status is paused,
we want to render the start button, so it will get a props pass down,
so it needs to defined the prop types*/
// * at control we passed down new countdown status as we move from starting to pausing
var Controls = React.createClass({
  /* specify what props needs to pass down from the parent component */
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired, // that means the countdownstatus of props is required
    onStatusChange: React.PropTypes.func.isRequired
  },
  /* currying pattern, we using a function to generate a different function, the return value,
  will be an arrow function, all this do is called a function that pass down by the parent props */
  onStatusChange: function(newStatus){
    return () => {
      this.props.onStatusChange(newStatus);
    }

  },
  render: function(){
    var {countdownStatus} = this.props; // get the countdownStatus property
    var renderStartStopButton = () => {
      if(countdownStatus === 'start'){
        return (
          <button className="button secondary" onClick = {this.onStatusChange('paused')}> Pause </button>
          );
      } else if( countdownStatus === 'paused'){
        return (
          <button className="button primary" onClick={this.onStatusChange('start')}> Start </button>
        );
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>


    );

  }
});

module.exports = Controls;
