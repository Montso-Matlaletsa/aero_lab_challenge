import {FC} from 'react';
import {useState} from 'react';
import {createContext} from 'react';
import {Context, User} from './types';
import useSWR, {useSWRConfig} from 'swr';
import api from './api';
import React, {useEffect} from 'react';
import {Product} from '../../@types/types';
import endpoints from '../../utils/endpoints';

const AppContext = createContext({} as Context);

const AppProvider: FC = ({children}) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const {cache} = useSWRConfig();
  const onGetUser = async (): Promise<void> => {
    try {
      const res = await api.getUser();
      if (res) {
        //@ts-ignore
        setUser(res);
      }
    } catch (error) {}
  };

  const onGetProducts = async (): Promise<void> => {
    try {
      const res = await api.getProducts();
      if (res) {
        //@ts-ignore
        setProducts(res);
      }
    } catch (error) {}
  };

  const onGetCategories = () => {
    if (products.length > 0) {
      const categories = new Set(products.map(product => product.category));
      const newCategories = Array.from(categories);
      newCategories[0] = 'All Products';
      setCategories(newCategories);
      return;
    }
  };

  useEffect(() => {
    onGetProducts();
    onGetUser();
    onGetCategories();
  }, []);

  const state = {
    user,
    products,
    categories,
  };

  const actions = {
    onGetUser,
    onGetProducts,
    onGetCategories,
  };
  return (
    <AppContext.Provider value={{state, actions}}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};
