var React = require('react');


var GridColumn = React.createClass({

  propTypes: {
    id: React.PropTypes.any,
    colSize: React.PropTypes.number.isRequired,
    field: React.PropTypes.string.isRequired,
    link: React.PropTypes.string
  },

  render: function () {

    var colSize = this.props.colSize;
    var mainClassName = 'col-lg-' + colSize + ' col-md-' + colSize + ' col-sm-' + colSize + ' col-xs-' + colSize + ' nopadding';

    var content = this.props.children;
    if (this.props.link) {
      content = <a target="_blank" href={this.props.link}>{this.props.children}</a>;
    }

    return (
      <div data-id={this.props.id} className={mainClassName}>
        <div className={'grid-col-item '+ this.props.field } >
          <div className="grid-staff-name pull-left">{content}</div>
        </div>
      </div>
    );
  }
});


module.exports = GridColumn;
