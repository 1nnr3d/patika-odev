import './App.css';

import Header from './components/Header';
import Note from './components/NoteInput';
import Content from './components/Content';

function App() {
  return (
    <div className="container mt-5">
      <Header />
      <br />
      <Note />
      <br />
      <Content />
    </div>
  );
}

export default App;
