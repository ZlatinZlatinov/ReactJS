

function App() {
  return (
    <>
      <header id="header">
        <img src="investment-calculator-logo.png" alt="main-logo-image" />
        <h1>React Investment Calculator</h1>
      </header>

      <main>
        <section id="user-input">
          <div className="input-group">
            <div>
              <label htmlFor="initialInvestment">Initial Investment</label>
              <input type="number" name="initialInvestment" id="initialInvestment" />
            </div>

            <div>
              <label htmlFor="annualInvestment">Annual Investment</label>
              <input type="number" name="annualInvestment" id="annualInvestment" />
            </div>

            <div>
              <label htmlFor="expectedReturn">Expected Return</label>
              <input type="number" name="expectedReturn" id="expectedReturn" />
            </div>

            <div>
              <label htmlFor="duration">Duration</label>
              <input type="number" name="duration" id="duration" />
            </div>
          </div>
        </section> 

        <section>
          <table id="result">
          <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
          </thead>

          <tbody>

          </tbody>
          </table>
        </section>
      </main>
    </>
  )
}

export default App
