
import './App.css';

import { Button } from 'react-bootstrap';
import ProductList from './components/productlist.js';
import Table from './components/table';
import NavBar from './components/navbar';
import { useEffect,  useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const searchData = (item) => {
      return Array.isArray(item) && item.filter((i) => i.title.toLowerCase().includes(searchText))
  }
  const onChange = (e) => {
          setSearchText(e.target.value);
  };

  useEffect(() => {
      axios.get("https://fakestoreapi.com/products").then((data) => {
          console.log(data);
          setData(data?.data);
      });
  }, []);


  return (
    <div className="App">
      <div>
        <NavBar onChange={onChange}  />
        <ProductList data={searchData(data)} />
        <Table/>
        <Button variant="primary">Click Me!</Button>
      </div>
    </div>
  );
}

export default App;
