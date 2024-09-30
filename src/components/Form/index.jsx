// src/components/Form.js
import React from 'react';
import './Form.css';

const Form = ({ name, description, setName, setDescription, currentId, handleSubmit }) => {
    return (
        <div className="form-container">
            <input 
                type="text" 
                placeholder="Nome" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Descrição" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            <button onClick={handleSubmit}>
                {currentId ? 'Atualizar' : 'Adicionar'}
            </button>
        </div>
    );
};

export default Form;
