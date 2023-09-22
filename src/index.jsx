import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';
import ContactApp from './ContactApp';

const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);