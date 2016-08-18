var React = require('react');
var PropTypes = React.PropTypes;

var Clock = React.createClass({
  getDefaultProps: function(){
    return {
      totalSeconds: 0
    };
  },
  /* write the type of the props */
  PropTypes: {
    totalSeconds: React.PropTypes.number
  },
  /* take the number 61 and then return the 01:01 like the clock */
  formatSeconds: function(totalSeconds){
    var seconds = totalSeconds%60;
    var minutes = Math.floor(totalSeconds / 60);

    if( seconds < 10){
      seconds = '0'+ seconds;
    }

    if( minutes < 10){
      minutes = '0'+ minutes;
    }

    return minutes+":"+seconds;

  },

  render: function() {
    /* pull props off into its own variable */
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }

});

module.exports = Clock;
