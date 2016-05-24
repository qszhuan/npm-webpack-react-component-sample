var HelloMessage = require('./test/dist/hello-2');
require('./loader.less');

 ReactDOM.render(
        <HelloMessage />,
        document.getElementById('content')
      );