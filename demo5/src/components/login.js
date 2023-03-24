export function Login() {
    return (
        <section>
            <h1>Login Page</h1>
            <form>
                <label htmlFor="username">
                    <span>Username:</span>
                    <input type={'text'} name='username' id="username" />
                </label>
                <br></br>
                <label htmlFor="password">
                    <span>Password:</span>
                    <input type={'password'} name='password' id="password" />
                </label>
                <br></br>
                <input type={'submit'} value='Login' />
            </form>
        </section>
    )
}