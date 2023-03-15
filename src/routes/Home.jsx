import React from "react";
import SearchBar from "../components/SearchBar";

export default function Home({ coins }) {
  return (
    <>
      <SearchBar coins={coins} />
    </>
  );
}
