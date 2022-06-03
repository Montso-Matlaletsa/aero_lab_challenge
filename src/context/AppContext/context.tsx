import {FC} from 'react';
import {useState} from 'react';
import {createContext} from 'react';
import {Context, User} from './types';
import {useSWRConfig} from 'swr';
import api from './api';
import {token} from '../../utils/environment';
import React, {useEffect} from 'react';
import {Category, Product} from '../../@types/types';

const AppContext = createContext({} as Context);

const AppProvider: FC = ({children}) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const {cache} = useSWRConfig();

  const onGetUser = async (): Promise<void> => {
    const res = await api.getUser();
    if (res) {
      //@ts-ignore
      setUser(res);
    }
  };

  const onGetProducts = async (): Promise<void> => {
    const res = await api.getProducts();
    if (res) {
      //@ts-ignore
      setProducts(res);
    }
  };

  const onGetCategories = () => {
    const categories = products.filter(product => product.category);
    setCategories(categories);
    console.log(categories);
  };

  useEffect(() => {
    api.getProducts().then(res => {
      if (res) {
        //@ts-ignore
        setProducts(res);
      }
    });

    const categories = products.filter(product => product.category);
    setCategories(categories);
    console.log('categories: ', categories);

    api.getUser().then(res => {
      if (res) {
        //@ts-ignore
        setUser(res);
      }
    });
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
