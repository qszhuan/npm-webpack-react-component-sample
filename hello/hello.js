'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'HelloMessage',
    render: function render() {
        return React.createElement(
            'div',
            { className: 'hello' },
            '(Hello React.',
            this.props.children,
            ')'
        );
    }
});
