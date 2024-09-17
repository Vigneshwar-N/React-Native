import {createContext, useState} from 'react';

const UserContext = createContext();
const UserContextProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [loginInfo, setLoginInfo] = useState([]);
  return (
    <UserContext.Provider value={{data, setData, loginInfo, setLoginInfo}}>
      {children}
    </UserContext.Provider>
  );
};
export {UserContext, UserContextProvider};
