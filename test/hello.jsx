'use strict'
var React = require('react')
require('./hello.less');

module.exports = React.createClass({
    displayName: 'HelloMessage',
    render: function(){
        return <div className="hello">(Hello React.
        {this.props.children})
        </div>
    }
})