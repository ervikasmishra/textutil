//
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <>
    <Navbar Title = "TextUtil" Link1 = "Home" Link2 = "About" />
    <div className="container my-3">
    <Form heading ="Let's manipulate text"/>
    </div>

    </>
  );
}

export default App;
