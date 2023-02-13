import React, { useEffect, useState } from 'react';
import "./index.css";

function Comprar() {
    const [itens, setItens] = useState([]);

    const [total, setTotal] = useState(0);

    const handleAddToCart = (itenIndex) => {
        const newItens = [...itens];
        newItens[itenIndex].quantity++;
        setItens(newItens);
    }

    const handleRemoveFromCart = (itenIndex) => {
        const newItens = [...itens];
        newItens[itenIndex].quantity--;
        setItens(newItens);
    }

    useEffect(() => {
        const newTotal = itens.reduce((acc, itens) => acc + itens.price * itens.quantity, 0);
        setTotal(newTotal);
    }, [itens]);


  return (
    <div className='compra'>
        <h1 className='title'>Hamburgers</h1>
        <table className='itens-table'>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Preco</th>
                    <th>Quantidade</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {itens.map((iten, index) => (
                    <tr key={iten.nome} className="iten-row">
                        <td className='iten-name'>{iten.nome}</td>
                        <th className='iten-price'>{iten.preco}</th>
                        <th className='iten-quantity'>{iten.quantidade}</th>
                        <th className='iten-actions'>
                            <button onClick={() => handleAddToCart} className="add-button">+</button>
                            <button onClick={() => handleRemoveFromCart} className="remove-button">-</button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
        <h2 className='total'>Total: {total}</h2>
    </div>
  );
};

export default Comprar