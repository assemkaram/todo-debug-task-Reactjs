import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> master
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD
    <App />
  </StrictMode>,
);
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
>>>>>>> master
