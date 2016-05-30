var HelloMessage = require('./hello/hello.jsx');

 ReactDOM.render(
        <HelloMessage >
        <div>this is from loader</div>
        </HelloMessage>,
        document.getElementById('content')
      );