var HelloMessage = require('./test/dist/hello');
require('./loader.less');

 ReactDOM.render(
        <HelloMessage >
        <div>this is from loader</div>
        </HelloMessage>,
        document.getElementById('content')
      );