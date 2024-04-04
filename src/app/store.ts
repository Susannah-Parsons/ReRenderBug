"use client"
import { useEffect, useState } from 'react';
import { create } from 'zustand'
import { useShallow } from "zustand/react/shallow";

interface ApiStoreState {
    results: string[]
  }

const useApiStore = create<ApiStoreState>(() => ({
  results: [],
}))

export const useStore = <F>(
    callback: (state: ApiStoreState) => F,
  ) => {
    const result = useApiStore<F>(useShallow(callback));
    const [data, setData] = useState(result);
  
    useEffect(() => {
      setData(result);
    }, [result]);
  
    return data;
  };

  export const addResults = (newRes: string[]) =>
    useApiStore.setState({
        results : newRes
    });
