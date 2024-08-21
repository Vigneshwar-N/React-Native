import React, {useEffect, useState} from 'react';
import axios from 'axios';
export default function UseEffect() {
  const [storage, setStorage] = useState([]);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => setStorage(res.data))
      .catch(error => console.log(error));
  }, []);
  return storage;
}
