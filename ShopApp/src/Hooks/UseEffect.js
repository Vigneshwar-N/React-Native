import {useEffect, useState} from 'react';
import axios from 'axios';

export default function UseEffect() {
  const [Storage, setStorage] = useState([]);
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(res => setStorage(res.data.products))
      .catch(error => console.error('Error fetching data:', error));
    // setStorage(data2[0].products);
  }, []);
  return Storage;
}
