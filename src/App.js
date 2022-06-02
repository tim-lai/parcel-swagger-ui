import React, { useEffect } from 'react';
import SwaggerUI from 'swagger-ui';

const App = () => {
  // onMount
  useEffect(() => {
    globalThis.ui = SwaggerUI({
      url: 'https://petstore.swagger.io/v2/swagger.json',
      dom_id: '#swagger-ui-root'
    });
  });

  return (
    <div>
      <div id="swagger-ui-root"></div>
    </div>
  );
};

export default App;
