import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store";
import {
  ChakraProvider,
  // extendBaseTheme,
  // theme as chakraTheme,
} from "@chakra-ui/react";

// const theme = extendBaseTheme({
//   components: {},
// });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
  // </React.StrictMode>
);
