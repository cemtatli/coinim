import React from "react";
import SearchBar from "../components/SearchBar";
import TrendCoins from "../components/TrendCoins";

export default function Home({ coins }) {
  return (
    <>
      <SearchBar coins={coins} />
      <TrendCoins coins={coins} />
    </>
  );
}
