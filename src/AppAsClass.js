import React from 'react';
import SwaggerUI from 'swagger-ui';

class App extends React.Component{
  componentDidMount() {
    globalThis.ui = SwaggerUI({
      url: 'https://petstore.swagger.io/v2/swagger.json',
      dom_id: '#swagger-ui-root'
    });
  }
  render() {
    return (
      <div>
        <div id="swagger-ui-root"></div>
      </div>
    )
  }
}

export default App;
