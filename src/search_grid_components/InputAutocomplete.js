var React = require('react');

var InputAutocomplete = React.createClass({

  contextTypes: {
    translations: React.PropTypes.object
  },

  componentDidMount: function () {
    $('body').on('click', this.resetAutoComplete);
  },

  getInitialState: function () {
    return {
      opened: false,
      search: null
    }
  },

  resetAutoComplete: function (e) {
    var autocompleteNotClicked = !$(e.target).hasClass('autocomplete') && !$(e.target).parent(".autocomplete").length;

    if (autocompleteNotClicked) {
      this.setState({opened: false});
    }
  },

  handleSelect: function(option){
    this.refs.filterInput.value = option;
    this.handleChange(false);
  },

  handleChange: function (toOpen) {
    var value = this.refs.filterInput.value;
    this.setState({search: value});

    this.props.onFilterChange(this.props.field, value);

    toOpen = toOpen || false;
    if(toOpen && value){
      this.setState({opened: true});
    }else{
      this.setState({opened: false});
    }
  },

  mouseOver: function (e) {
    if($(e.target).data('index') !== undefined){
      this.setState({active: $(e.target).data('index')});
    }
  },

  inputOnKeyUp: function(options, e){
    e.preventDefault();

    if(this.state.opened && options.length){
      if(!Number(this.state.active)){
        this.setState({active: 0});
      }

      //up
      if(e.keyCode == 38){
        var nextIdx = this.state.active - 1 >= 0 ? this.state.active - 1 : options.length - 1;
        this.setState({active: nextIdx});
      //down
      }else if(e.keyCode == 40){
        var nextIdx = this.state.active + 1 >= options.length ? 0 : this.state.active + 1;

        this.setState({active: nextIdx});
      //enter
      }else if(e.keyCode == 13){
        this.handleSelect(options[this.state.active]);
      }
    }
  },

  filterList: function(options){
    var limit = 0;
    return options.filter(function (option) {
      if(limit > 10){
        return false;
      }

      var found = true;
      if(typeof option == 'string'){
        option = option.toLowerCase();
      }

      var search = this.state.search;
      if(this.state.search){
        search = this.state.search.toLowerCase();
      }

      if(option.indexOf(this.state.search) === -1){
        found = false;
      }

      if(found) {
        limit++
      }
      return found;
    }.bind(this));
  },

  // highlight: function(option){
  //   if(!this.state.search){
  //     return "";
  //   }
  //
  //   var modified = option.replace('<', '&lt;');
  //   modified = option.replace('>', '&gt;');
  //
  //   modified = option.replace(this.state.search,'<strong>' + this.state.search + '</strong>');
  //   return modified;
  // },

  render: function () {

    //filter
    var optionsFiltered = [];
    var list = optionsFiltered = this.filterList(this.props.options);

    list = list.map(function(option, idx){
      return (
        <li key={option+ "_"+idx}
            data-index={idx}
            onClick={this.handleSelect.bind(null, option)}
            className={ this.state.active == idx ? 'active' : ''}
        >
          {option}
        </li>
      )
    }.bind(this));

    if(list.length){
      var autocompleteList = (
        <div className={'autocomplete ' + ( this.state.opened ? ' opened' : ' closed' )}>
          <ul onMouseOver={this.mouseOver}
          >{list}</ul>
        </div>
      );
    }else{
      var autocompleteList= "";
    }

    return (
        <div className="filter-item">
          <input ref="filterInput"
                 onChange={ this.handleChange.bind(null, true) }
                 type="text" className="form-control filter-input"
                 placeholder={this.context.translations.all}
                 onKeyUp={ this.inputOnKeyUp.bind(null, optionsFiltered) }
          />
          {autocompleteList}
        </div>
    );
  }
});

module.exports = InputAutocomplete;
