var React = require('react');


const ErrorMessage = React.createClass({

  propTypes: {
    errors: React.PropTypes.string
  },

  closeAlert(alertBox) {
    clearTimeout(this.id);
    $(alertBox).fadeTo(500, 0).slideUp(500, () => $(alertBox).remove());
  },

  componentDidMount() {
    this.id = setTimeout(() => {
      this._alert && this.closeAlert(this._alert);
    }, 6000);
  },

  render() {
    return (
      <div ref={(c) => this._alert = c} className="alert alert-danger" role="alert">
        <button type="button" className="close" onClick={(e) => this.closeAlert(this._alert)}>
          <span aria-hidden="true">&times;</span></button>
        <div dangerouslySetInnerHTML={{__html: this.props.errors}}></div>
      </div>
    );
  }
});

module.exports = ErrorMessage;
