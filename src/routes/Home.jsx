import React from "react";
import SearchBar from "../components/SearchBar";
import TrendCoins from "../components/TrendCoins";
import Exchanges from "../components/Exchanges";

export default function Home({ coins }) {
  return (
    <>
      <SearchBar coins={coins} />
      <TrendCoins coins={coins} />
      <Exchanges />
    </>
  );
}
