import { useEffect, useState } from 'react';

import './static/styles.css'
import Header from "./components/Header";
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import Thead from './components/Thead';
import Tbody from './components/Tbody';
import AddUserBtn from './components/AddUserBtn';
import { createUserReq, getAllUsers } from './service/userService';


function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers()
      .then(users => setUsers(users))
      .catch(err => console.log(err));
  }, []);


  async function createNewUser(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phoneNumber = formData.get('phoneNumber');
    const imageUrl = formData.get('imageUrl');
    const country = formData.get('country');
    const city = formData.get('city');
    const street = formData.get('street');
    const streetNumber = formData.get('streetNumber');

    //const inputArray = [firstName, lastName, email, phoneNumber, imageUrl, country, city, street, streetNumber];  
    //const inputData = Object.fromEntries(formData); // можеше и по не толкова дървен начин хдд; данните идват от DOM дървото, не от реакт 
    const payLoad = { firstName, lastName, email, phoneNumber, imageUrl, address: { country, city, street, streetNumber } };
    // TODO add data validation!! 

    const result = await createUserReq(payLoad);
    // chec if result is ok and if it is push it to the userarr
    users.push(result);
  }

  return (
    <>
      <Header />

      <main className='main'>
        {/* <!-- Section component  --> */}
        <section className='card users-container'>
          <SearchForm />

          {/* <!-- Table component --> */}
          <div className='table-wrapper'>
            <table className='table'>
              <Thead />
              <Tbody users={users} />
            </table>
          </div>

          {/* <!-- New user button  --> */}
          <AddUserBtn createNewUser={createNewUser} />
        </section>
        {/* <!-- User details component  --> */}
        {/* мдаа ама аз го набутах в тбодито някъде хдд и дава грешка*/}
        {/* <!-- Create/Edit Form component  --> */}

        {/* <!-- Delete user component  --> */}

      </main>

      <Footer />
    </>
  );
}

export default App;
