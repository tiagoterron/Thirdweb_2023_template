import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";

const chain = {
  chain: "GRW",
  chainId: 5665,
  explorers: {},
  faucets: [],
  icon:  {
    url: 'https://ducoinexchange.com/assets/grw.9897d069.png', width: 1800, height: 1800, format: 'png'
  },
  infoURL: "https://greenwoodexchange.com",
  name: "Greenwood",
  nativeCurrency:  {name: 'GRW', symbol: 'GRW', decimals: 18},
  networkId: 100,
  rpc: ['https://node.ducoinexchange.com'],
  shortName: "grw",
  slip44: 700,
  slug: "greenwood",
  testnet: false
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThirdwebProvider activeChain={chain}>
        <App />
      </ThirdwebProvider>
    </Provider>
  </BrowserRouter>
);


