var React = require('react');

/* going to get pass the countdown status, when the countdown status is
started, you want to render the pause button, and when countdown status is paused,
we want to render the start button, so it will get a props pass down,
so it needs to defined the prop types*/
var Controls = React.createClass({
  /* specify what props needs to pass down from the parent component */
  propTypes: {
    coundownStatus: React.PropTypes.string.isRequired // that means the countdownstatus of props is required
  },
  render: function(){
    var {countdownStatus} = this.props; // get the countdownStatus property
    var renderStartStopButton = () => {
      if(countdownStatus === 'start'){
        return (
          <button className="button secondary"> Pause </button>
          );
      } else if( countdownStatus === 'paused'){
        return (
          <button className="button primary"> Start </button>
        );
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>


    );

  }
});

module.exports = Controls;
