import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {store} from './store/reducer/configStore'
import MovieTicket from "./MovieTicket/MovieTicket";
import {BrowserRouter, Route, Routes} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
<BrowserRouter>
  <Routes>
    <Route index element={<MovieTicket/>}></Route>
  </Routes>
  </BrowserRouter>
</Provider>
);
