import { useState } from "react";

function App() {

  //const [username, setUsername] = useState('Pesho');
  //const [age, setAge] = useState(0);
  //const [description, setDescription] = useState('');
  const [gender, serGender] = useState('male');
  const [profession, setProfession] = useState('hr');
  const [hobbies, setHobbies] = useState({
    hiking: false,
    skiing: false,
    surfing: false,
    football: false,
  });

  const [inputValues, setInputValues] = useState({
    username: '',
    age: 0,
    description: '',
  })

  function globalFormHandler(e) {
    const value = e.target.value;
    const name = e.target.name;
    
    setInputValues((state) => ({
      ...state,
      [name]:value
    })); // not sure why this works xdd
  }

  /*
  function usernameHandler(e) {
    setUsername(e.target.value);
  }

  function ageHandler(e) {
    setAge(e.target.value);
  }

  function desctioptionHandler(e) {
    setDescription(e.target.value);
  }*/

  function genderHandler(e) {
    serGender(e.target.value);
  }

  function professionHandler(e) {
    setProfession(e.target.value);
  }

  function hobbiesHandler(e) {
    const value = e.target.value;

    setHobbies((state) => {
      state[value] = !state[value];
      return state;
    });
    /* using an object with default values in the state */
  }


  function submitFormHandler(e) {
    e.preventDefault();
    //const inputArray = [username, age, gender];
    console.log(inputValues);
  }

  return (
    <>
      <h1>React Form Demo</h1>
      <form onSubmit={submitFormHandler}>
        <label htmlFor="username">Username:</label>
        <br></br>
        <input type="text" name="username" id="username" value={inputValues.username} onChange={globalFormHandler}></input>
        <br></br>
        <label htmlFor="age">Age:</label>
        <br></br>
        <input type="number" name="age" id="age" value={inputValues.age} onChange={globalFormHandler}></input>
        {Number(inputValues.age) > 18 && <p>You are over 18 years old now!</p>} {/*So this could be some kind of validation i guess */}
        <br></br>
        <label htmlFor="gender">Gender:</label>
        <br></br>
        Male<input type="radio" name="gender" id="male" value="male" checked={gender === 'male'} onChange={genderHandler} />
        Female<input type="radio" name="gender" id="female" value="female" checked={gender === 'female'} onChange={genderHandler} />
        <br></br>
        <label htmlFor="profession">Select Profession:</label>
        <br />
        <select name="profession" id="profession" value={profession} onChange={professionHandler}>
          <option value="projectManager">Project Manager</option>
          <option value="dataAnalyst">Data Analyst</option>
          <option value="hr">Human Resources</option>
        </select>
        <br></br>
        <div className="hobbies">
          <label>Hobbies:</label>
          <br></br>
          <label htmlFor="hiking">Hiking</label>
          <input type="checkbox" name="hobbies" value="hiking" defaultChecked={hobbies.hiking} onChange={hobbiesHandler} />
          <label htmlFor="skiing">Skiing</label>
          <input type="checkbox" name="hobbies" value="skiing" defaultChecked={hobbies.skiing} onChange={hobbiesHandler} />
          <label htmlFor="surfing">Surfing</label>
          <input type="checkbox" name="hobbies" value="surfing" defaultChecked={hobbies.surfing} onChange={hobbiesHandler} />
          <label htmlFor="football">Football</label>
          <input type="checkbox" name="hobbies" value="football" defaultChecked={hobbies.football} onChange={hobbiesHandler} />
        </div>
        <br></br>
        <label htmlFor="description">Description:</label>
        <br></br>
        <textarea name="description" cols="15" rows="5" value={inputValues.description} onChange={globalFormHandler}></textarea>

        <br></br>
        <br />
        <input type="submit" defaultValue="Submit Form" />
      </form>
    </>
  );
}

export default App;
