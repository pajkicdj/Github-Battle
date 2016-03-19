var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.css');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div> // keys are important whenever you have a list of something. because you give each item in that list a key and by keeping track of each of those keys, react will know the order.
    )// React.cloneElement = allows you to take whatever the component this.props.children is, and it allows you to give that component new props aka a key: the location.pathname = which we're getting from react-router
  }// so because ReactCSSTransitionGroup needs its child element to have a key, so we need to use cloneElement to attach a key property to it.
});

module.exports = Main;