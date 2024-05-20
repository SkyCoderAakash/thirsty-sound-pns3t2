import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import appStore from "./redux/store";
import { Provider } from "react-redux";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </StrictMode>
);
