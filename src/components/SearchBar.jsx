import React from "react";

import CoinItems from "./CoinItems";

export default function SearchBar({ coins }) {
  const [SearchValue, setSearchValue] = React.useState("");
  return (
    <div className=" mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-5 lg:px-0">
      {/* Search Bar */}
      <div className="flex w-full">
        <form className="my-5 flex w-full items-center justify-center px-4 py-2 lg:px-0">
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            className="mx-auto h-10 w-full max-w-[1440px] rounded-lg border border-blue-500 px-4 py-2 text-sm outline-none   focus:ring-2 dark:bg-transparent dark:text-white"
            placeholder="Kripto ara..."
          />
        </form>
      </div>
      {/* Table */}
      <table className="w-full border-collapse text-center">
        <thead className="h-10 text-sm dark:text-white sm:text-base">
          <tr className="border-b dark:border-white dark:border-opacity-10">
            <th></th> {/* Yildiz icin bosluk */}
            <th>#</th>
            <th>Ad</th>
            <th>Fiyat</th>
            <th>
              K/K<span className="text-sm">(%)</span>
            </th>
            <th>
              24h<span className="text-sm">($)</span>
            </th>
            <th className="hidden sm:table-cell">
              Hacim<span className="text-sm">(24sa)</span>
            </th>
            <th className="hidden  lg:table-cell">Toplam Arz</th>
            <th className="hidden  lg:table-cell">Toplam Market Hacmi</th>
            <th className="hidden xl:table-cell">ATH</th>
          </tr>
        </thead>
        <tbody className="dark:text-white">
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
