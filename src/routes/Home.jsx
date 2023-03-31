import React, { useEffect, useState } from "react";
import axios from "axios";

import CoinList from "@/components/CoinList";
import TrendCoins from "@/components/TrendCoins";
import Exchanges from "@/components/Exchanges";

export default function Home() {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=tr";

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data);
    });
    /* console.log("render"); */
  }, []);
  return (
    <>
      <CoinList coins={coins} />
      <TrendCoins />
      <Exchanges />
    </>
  );
}
