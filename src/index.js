import ReactDOM from 'react-dom';
import App from './AppAsClass';
import 'swagger-ui/dist/swagger-ui.css';

const app = document.getElementById('swagger-ui');
ReactDOM.render(<App />, app);