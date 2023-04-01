
import './App.css';
import ProductList from './components/productlist.js';
import NavBar from './components/navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './components/pagination';

function App() {

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("");
  const [pageIndex, setPageIndex] = useState(1);
  const searchData = (item) => {
    return Array.isArray(item) && item.filter((i) => i.title.toLowerCase().includes(searchText))
  }
  const onChange = (e) => {
    setSearchText(e.target.value);
  };
  const onFilterChange = (item) => {
    setFilter(item)
  };
  const filterData = (item) => {
    return Array.isArray(item) && item.filter((i) => i.category.toLowerCase().includes(filter))
  }
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setData(data?.data);
    });
  }, []);

  const pagination = (number) => {
    setPageIndex(number)
  }

  return (
    <div className="App">
      <div>
        <NavBar onFilterChange={onFilterChange} onChange={onChange} />
        <ProductList data={searchText ? searchData(data) : filterData(data)} />
        <Pagination pagination={pagination} />
      </div>
    </div>
  );
}

export default App;
