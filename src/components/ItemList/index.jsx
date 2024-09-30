// src/components/ItemList.js
import React from 'react';
import './ItemList.css';

const ItemList = ({ items, deleteItem, setCurrentId, setName, setDescription }) => {
    return (
        <ul className="item-list">
            {items.map((item) => (
                <li key={item._id} className="item">
                    <span>{item.name} - {item.description}</span>
                    <div>
                        <button 
                            onClick={() => {
                                setCurrentId(item._id);
                                setName(item.name);
                                setDescription(item.description);
                            }}
                        >
                            Editar
                        </button>
                        <button onClick={() => deleteItem(item._id)}>Deletar</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
