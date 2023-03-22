import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import { ThemeProvider } from "./context/ThemeContext";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./routes/Home";
import SignIn from "./routes/SignInPage";
import SignUp from "./routes/SignUpPage";
import Account from "./routes/Account";
import CoinPage from "./routes/CoinPage";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true";

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data);
    });
  }, [url]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home coins={coins} />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Account" element={<Account />} />
          <Route
            path="*"
            element={
              <div className="my-15 flex flex-col items-center justify-center px-10 font-semibold text-black  dark:text-white">
                <div className="flex flex-col items-center text-xl">
                  {" "}
                  Böyle bir sayfa bulunamadı. <br />
                  <span className="text-base"> Ana sayfaya dönebilirsiniz.</span>
                </div>
              </div>
            }
          />
          <Route path="/coin/:coinId" element={<CoinPage />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
