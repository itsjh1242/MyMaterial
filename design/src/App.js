/* eslint-disable */

import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { CardSlideV1 } from './page/img_card_slide';

function App() {
  return (
    <div className="window">
      <BrowserRouter>
            <Routes>
            </Routes>
        </BrowserRouter>
      <CardSlideV1 />
    </div>
  );
}

export default App;
