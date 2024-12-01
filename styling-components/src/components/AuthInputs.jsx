import { useState } from 'react';
import { MyButton } from './Button';
import { Input } from './Input';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
    console.log(submitted);
    
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
      <div className="flex flex-col">
        {/* <p>
          <label>Email</label>
          <input
            type="email"
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>  */}
        <Input
          label={"Email"}
          type={"email"}
          onChange={(event) => handleInputChange('email', event.target.value)} 
          invalid={emailNotValid}
        />

        <Input
          label={"Password"}
          type={"password"}
          onChange={(event) => handleInputChange('password', event.target.value)}
          invalid={passwordNotValid}
        />

        {/* <p>
          <label>Password</label>
          <input
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p> */}
      </div>

      <div className="flex flex-col gap-3 mt-3">
        {/* <button  className="text-button">
          
        </button> */}
        <MyButton type="button">Create a new account</MyButton>
        <MyButton onClick={handleLogin}>Sign In</MyButton>
        {/* <button className='button' onClick={handleLogin}></button> */}
      </div>
    </div>
  );
}
