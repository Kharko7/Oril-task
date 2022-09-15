import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from "../configs/routes";
import CoinTable from "../pages/coin-table";
import StatisticPage from "../pages/statistic/statistic";

const { 
  pathToMain,
  statistic,
 } = routes;

const MainRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={pathToMain} element={<CoinTable/>}></Route>
        <Route path={statistic} element={<StatisticPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;