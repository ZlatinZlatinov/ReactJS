import Footer from './components/Footer';
import Header from './components/Header';
import Tbody from './components/Tbody';
import Thead from './components/Thead';
import './items/styles.css';


function App() {
    return (
        <>
            <Header />
            <main className="main">

                {/* <!-- Section container --> */}
                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <div class="add-btn-container">
                        <button className="btn">+ Add new Todo</button>
                    </div>

                    <div className="table-wrapper">
                        <table className="table">
                            <Thead />
                            <Tbody />
                        </table>
                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
