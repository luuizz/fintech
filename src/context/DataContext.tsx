import useFetch from '@/hooks/useFetch';
import React from 'react';

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
};

type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: 'pago' | 'pendente' | 'falha';
  pagamento: 'boleto' | 'cartao' | 'pix';
  data: string;
  parcelas: number | null;
};

const dataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(dataContext);
  if (!context) throw new Error('useData precisa estar em DataContextProvider');
  return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IVenda[]>('https://data.origamid.dev/vendas');
  return <dataContext.Provider value={{ data, loading, error }}>{children}</dataContext.Provider>;
};
