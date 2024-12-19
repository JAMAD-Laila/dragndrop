import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [cloudItems, setCloudItems] = useState(["Alpha", "Beta", "Gamma", "Delta"]);
  const [tableItems, setTableItems] = useState([]);

  const handleDragStart = (event, item) => {
    event.dataTransfer.setData("text/plain", item);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedItem = event.dataTransfer.getData("text/plain");

    if (!tableItems.includes(droppedItem)) {
      setTableItems((prevItems) => [...prevItems, droppedItem]);
      setCloudItems((prevItems) => prevItems.filter((i) => i !== droppedItem));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="app">
      <h1>Drag and Drop Example</h1>
      <div className="cloud">
        <h2>String Cloud</h2>
        <div className="cloud-items">
          {cloudItems.map((item) => (
            <div
              key={item}
              className="draggable-item"
              draggable
              onDragStart={(event) => handleDragStart(event, item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="table-container">
        <h2>Droppable Table</h2>
        <div
          className="droppable-table"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <table>
            <thead>
              <tr>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              {tableItems.map((item, index) => (
                <tr key={index}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
