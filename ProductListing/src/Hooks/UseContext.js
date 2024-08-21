import {createContext, useState} from 'react';

const SelectedItemContext = createContext();

const SelectedItemProvider = ({children}) => {
  const [selectedItem] = useState(null);

  return (
    <SelectedItemContext.Provider value={{selectedItem}}>
      {children}
    </SelectedItemContext.Provider>
  );
};

export {SelectedItemProvider, SelectedItemContext};
