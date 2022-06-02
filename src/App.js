import React from 'react';
import SwaggerUI from 'swagger-ui-react';

const App = () => {
  return (
    <div>
      <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
    </div>
  );
};

export default App;
