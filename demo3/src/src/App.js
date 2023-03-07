import './static/styles.css'
import Header from "./components/Header";
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import Thead from './components/Thead';
import Tbody from './components/Tbody';
import AddUserBtn from './components/AddUserBtn';


function App() {
  
  return (
    <>
    <Header/>

    <main className='main'>
      {/* <!-- Section component  --> */}
        <section className='card users-container'>
          <SearchForm/> 

          {/* <!-- Table component --> */}
          <div className='table-wrapper'>
            <table className='table'>
              <Thead/>
              <Tbody/>
            </table>
          </div>

          {/* <!-- New user button  --> */} 
          <AddUserBtn/>
        </section>
      {/* <!-- User details component  --> */} 

      {/* <!-- Create/Edit Form component  --> */}

      {/* <!-- Delete user component  --> */}

    </main>

    <Footer/>
    </>
  );
}

export default App;
