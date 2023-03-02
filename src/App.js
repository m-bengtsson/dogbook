import './App.css';

function Header() {
   return (
      <div>
         <header className='header'>
            <h2>Dogbook</h2>
         </header>
      </div>
   )
}

function Home() {
   return (
      <div>
         <section className='main-content'>


            <h1>Users</h1>
            <ul>
               <li>
                  <a href='#'>@ Dog 1</a>
               </li>
               <li>
                  <a href='#'>@ Dog 2</a>
               </li>
               <li>
                  <a href='#'>@ Dog 3</a>
               </li>
            </ul>

            <button>Create new dog</button>
         </section>
      </div>
   )
}



function App() {
   return (
      <div>
         <Header />
         <Home />

      </div>
   );
}

export default App;
