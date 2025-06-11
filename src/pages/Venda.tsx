import React from 'react';
import type { IVenda } from '@/context/DataContext';
import useFetch from '@/hooks/useFetch';
import { useParams } from 'react-router-dom';
import Loading from '@/components/Header/Loading';

type VendaSemData = Omit<IVenda, 'data'>;

export default function Venda() {
  const { id } = useParams();
  const { data, loading } = useFetch<VendaSemData>(`https://data.origamid.dev/vendas/${id}`);

  if (loading) return <Loading />;
  if (data === null) return null;
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço: {data.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  );
}
