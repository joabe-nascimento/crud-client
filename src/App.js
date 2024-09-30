// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get("http://localhost:3001/api/items");
    setItems(res.data);
  };

  const handleSubmit = async () => {
    if (currentId) {
      const res = await axios.put(
        `http://localhost:3001/api/items/${currentId}`,
        { name, description }
      );
      setItems(items.map((item) => (item._id === currentId ? res.data : item)));
      setCurrentId(null);
    } else {
      const res = await axios.post("http://localhost:3001/api/items", {
        name,
        description,
      });
      setItems([...items, res.data]);
    }
    setName("");
    setDescription("");
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3001/api/items/${id}`);
    setItems(items.filter((item) => item._id !== id));
  };

  return (
    <div className="app-container">
      <h1>CRUD com React e MongoDB</h1>
      <Form
        name={name}
        description={description}
        setName={setName}
        setDescription={setDescription}
        currentId={currentId}
        handleSubmit={handleSubmit}
      />
      <ItemList
        items={items}
        deleteItem={deleteItem}
        setCurrentId={setCurrentId}
        setName={setName}
        setDescription={setDescription}
      />
    </div>
  );
};

export default App;
