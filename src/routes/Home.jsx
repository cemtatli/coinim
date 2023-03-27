import React from "react";

import CoinList from "@/components/CoinList";
import TrendCoins from "@/components/TrendCoins";
import Exchanges from "@/components/Exchanges";

export default function Home({ coins }) {
  return (
    <>
      <CoinList coins={coins} />
      <TrendCoins />
      <Exchanges />
    </>
  );
}
