import "./App.css";
import { useState } from "react";
import { Drawer } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
      <>
        <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
          <div style={{ width: "400px", textAlign: "center" }}>
            <button onClick={() => setOpen(false)}>close</button>
          </div>
        </Drawer>
      </>
    </div>
  );
}

export default App;
