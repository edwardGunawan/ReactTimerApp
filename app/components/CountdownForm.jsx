var React = require('react');
var PropTypes = React.PropTypes;

var CountdownForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    /* pass the value up to the parent to see whether the data is valid
     expects a regular expression*/
    if(strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = "";
      this.props.onSetCountdown(parseInt(strSeconds, 10)); // 10 is the base 2 will be binary
    }
  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds" />
          <button className="button expanded"> Start </button>
        </form>
      </div>
    );
  }

});

module.exports = CountdownForm;
