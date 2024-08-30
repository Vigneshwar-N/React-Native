import React, {useEffect, useState} from 'react';

import {data} from '../constants/data';
export default function UseEffect() {
  const [storage, setStorage] = useState([]);
  useEffect(() => {
    setStorage(data);
  }, []);
  return storage;
}
