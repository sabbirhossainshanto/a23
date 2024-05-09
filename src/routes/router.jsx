import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import GameDetails from "../pages/GameDetails/GameDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Deposit from "../pages/Deposit/Deposit";
import Account from "../pages/Account/Account";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import EditStake from "../pages/EditStake/EditStake";
import BettingProfitLoss from "../pages/BettingProfitLoss/BettingProfitLoss";
import SingleProfitLoss from "../pages/BettingProfitLoss/SingleProfitLoss";
import Withdraw from "../pages/Withdraw/Withdraw";
import DepositWithdrawReport from "../pages/DepositWithdrawReport/DepositWithdrawReport";
import SingleDWReport from "../pages/DepositWithdrawReport/SingleDWReport";
import IndianCasino from "../pages/IndianCasino/IndianCasino";
import InterNationalCasino from "../pages/InterNationalCasino/InterNationalCasino";
import Slots from "../pages/Slots/Slots";
import Promotion from "../pages/Promotion/Promotion";
import OpenBets from "../pages/OpenBets/OpenBets";
import IFrame from "../pages/IFrame/IFrame";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/game-details/:eventTypeId/:eventId",
        element: <GameDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/deposit",
        element: <Deposit />,
      },
      {
        path: "/withdraw",
        element: <Withdraw />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/edit-stake",
        element: <EditStake />,
      },
      {
        path: "/:route/:name/:gameId",
        element: <IFrame />,
      },
      {
        path: "/betting-profit-loss",
        element: <BettingProfitLoss />,
      },
      {
        path: "betting-profit-loss/:marketId",
        element: <SingleProfitLoss />,
      },
      {
        path: "deposit-withdraw-report",
        element: <DepositWithdrawReport />,
      },
      {
        path: "deposit-withdraw-report/:id",
        element: <SingleDWReport />,
      },
      {
        path: "indian-casino",
        element: <IndianCasino />,
      },
      {
        path: "int-casino",
        element: <InterNationalCasino />,
      },
      {
        path: "slots",
        element: <Slots />,
      },
      {
        path: "promotion",
        element: <Promotion />,
      },
      {
        path: "more-page",
        element: <Promotion />,
      },
      {
        path: "open-bets",
        element: <OpenBets />,
      },
      {
        path: "/notice.json",
        element: "/notice.json",
      },
    ],
  },
]);
