import "./App.css";
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './components/Products'



function App() {
  return (
    <div className="App">
     
      <Home />
      <Login/>
      <Products />
    </div>
  );
}

export default App;
