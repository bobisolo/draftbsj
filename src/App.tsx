import type { Component } from 'solid-js';

import logo from './logo.svg';
import RfqPopup from "./components/rfq-popup";
import {RfqProvider} from "./context/rfq";

const App: Component = () => {
  return (
      <RfqProvider>
        <RfqPopup />
      </RfqProvider>
  );
};

export default App;
