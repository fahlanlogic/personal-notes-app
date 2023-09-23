import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';
import NoteAppBody from './components/NoteAppBody';
import NoteAppHeader from './components/NoteAppHeader';

const root = createRoot(document.getElementById('root'));
root.render(
<>
<NoteAppHeader />
<NoteAppBody />
</>);