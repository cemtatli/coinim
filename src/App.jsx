import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Account from "./routes/Account";
import CoinPage from "./routes/CoinPage";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true";

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data); // datayi set ediyoruz coins state'ine
    });
  }, [url]);

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
