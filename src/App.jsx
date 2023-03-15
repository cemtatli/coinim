import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import { ThemeProvider as MTProvider } from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Account from "./routes/Account";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true";

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data); // datayi set ediyoruz coins state'ine
    });
  }, [url]);

  return (
    <MTProvider>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home coins={coins} />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </ThemeProvider>
    </MTProvider>
  );
}

export default App;
