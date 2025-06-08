import useFetch from '@/hooks/useFetch';
import React from 'react';

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
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

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(getDate(30));
  const [final, setFinal] = React.useState(getDate(0));

  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
  );
  return (
    <dataContext.Provider value={{ data, loading, error, inicio, setInicio, final, setFinal }}>
      {children}
    </dataContext.Provider>
  );
};
