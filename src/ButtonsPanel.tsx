import React from "react";
import RestClient from "./classes/RestClient";

const ButtonsPanel: React.FC = () => {
  const handleClick = async () => {
    const client = new RestClient();
    const data = await client.getAllEmployees();
    console.log(data);
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
    </div>
  );
};

export default ButtonsPanel;