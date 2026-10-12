import React from "react";

interface PanelBProps {
  msg?: string;
}

const PanelB: React.FC<PanelBProps> = ({ msg = "Default message for Panel B" }) => {
  return (
    <div>
      <h2>Panel B</h2>
      <p>This is Panel B content.</p>
      <p>{msg}</p>
    </div>
  );
}

export default PanelB;