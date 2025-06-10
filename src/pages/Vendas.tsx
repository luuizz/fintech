import React from 'react';
import VendaItem from '@/components/Header/VendaItem';
import { useData } from '@/context/DataContext';

export default function Vendas() {
  const { data } = useData();

  if (data === null) return null;

  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <VendaItem venda={venda} />
        </li>
      ))}
    </ul>
  );
}
