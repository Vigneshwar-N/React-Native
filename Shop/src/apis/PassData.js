import {createContext, useState} from 'react';

const SelectedItemContext = createContext();

const SelectedItemProvider = ({children}) => {
  const [selectedItem, setSelectedItem] = useState([]);

  return (
    <SelectedItemContext.Provider value={{selectedItem, setSelectedItem}}>
      {children}
    </SelectedItemContext.Provider>
  );
};

export {SelectedItemProvider, SelectedItemContext};
