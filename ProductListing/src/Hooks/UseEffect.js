import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {data} from '../constants/data';
export default function UseEffect() {
  const [storage, setStorage] = useState([]);
  useEffect(() => {
    setStorage(data);
    // axios
    //   .get('')
    //   .then(res => setStorage(res.data))
    //   .catch(error => console.log(error));
  }, []);
  return storage;
}
