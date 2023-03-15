import React from "react";

import CoinItems from "./CoinItems";

export default function SearchBar({ coins }) {
  const [SearchValue, setSearchValue] = React.useState("");
  return (
    <div>
      {/* Search  */}
      <div className="flex w-full items-center justify-center">
        <form className="flex w-full items-center justify-center px-4 py-2">
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            className="mx-auto h-10 w-full max-w-7xl rounded-lg border border-blue-500 px-4 py-2 text-sm outline-none  focus:ring-2 dark:bg-transparent dark:text-white"
            placeholder="Ara"
          />
        </form>
      </div>
      {/* Table */}
      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th>Fiyat</th>
            <th>24h</th>
            <th>24h volume</th>
            <th>mkt</th>
            <th>last7d</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (SearchValue === "") {
                return value;
              } else if (value.name.toLowerCase().includes(SearchValue.toLowerCase())) {
                return value;
              }
            })
            .map((coin) => {
              return <CoinItems coin={coin} key={coin.id} />;
            })}
        </tbody>
      </table>
    </div>
  );
}
