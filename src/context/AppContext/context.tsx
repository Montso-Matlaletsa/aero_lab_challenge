import {FC} from 'react';
import {useState} from 'react';
import {createContext} from 'react';
import {Context, User} from './types';
import {useSWRConfig} from 'swr';
import api from './api';
import {token} from '../../utils/environment';
import React, {useEffect} from 'react';

const AppContext = createContext({} as Context);

const AppProvider: FC = ({children}) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const {cache} = useSWRConfig();

  const onGetUser = async (): Promise<void> => {
    const res = await api.getUser(token);
    if (res) {
      //@ts-ignore
      setUser(res);
    }
  };

  useEffect(() => {
    api.getUser(token).then(res => {
      if (res) {
        //@ts-ignore
        setUser(res);
      }
    });
  }, []);
  const state = {
    user,
  };

  const actions = {
    onGetUser,
  };
  return (
    <AppContext.Provider value={{state, actions}}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};
