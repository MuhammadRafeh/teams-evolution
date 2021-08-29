import './App.css';
import Contact from './components/Contact';

import Front from './components/Front';

function App() {
  return (
    <div className="App">


      <Front />
      <div className={'mt-20 h-screen grid grid-cols-1 sm:grid-cols-2 py-10'}>
        
        <div className={'max-w-xs mx-auto my-auto'}>
          <Contact />
        </div>
        <div className={'hidden sm:inline'}>
Contact Us
        </div>
      </div>
    </div>
  );
}

export default App;
