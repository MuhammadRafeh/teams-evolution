import './App.css';
import ApplyNow from './components/ApplyNow';
import Contact from './components/Contact';

import Front from './components/Front';

function App() {
  return (
    <div>


      <Front />
      <Contact/>

      {/* <div className={'mt-20 h-screen grid grid-cols-1 sm:grid-cols-2 py-10'}>

        <div className={'max-w-xs mx-auto my-auto'}>
          <ApplyNow />
        </div>
        <div className={'hidden sm:inline'}>
          <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={'https://images.unsplash.com/photo-1607000975574-0b425df6975a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbHklMjBub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'} />
        </div>
      </div> */}
    </div>
  );
}

export default App;
