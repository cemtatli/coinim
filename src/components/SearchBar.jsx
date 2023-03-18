import React from "react";
import CoinItem from "./CoinItem";

import { SearchNormal1 } from "iconsax-react";

export default function SearchBar({ coins }) {
  const [SearchValue, setSearchValue] = React.useState("");
  return (
    <div className=" mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-5 2xl:px-0">
      {/* Search Bar */}
      <div className="flex w-full">
        <form className="relative my-5 flex w-full items-center justify-center px-4 py-2 2xl:px-0.5">
          <input
            type="search"
            onChange={(e) => setSearchValue(e.target.value)}
            className="relative  mx-auto h-10 w-full max-w-[1440px] rounded-lg border border-blue-500 px-4 py-2 pl-10 text-sm outline-none placeholder:text-xs focus:ring-2 dark:bg-transparent dark:text-white  md:placeholder:text-sm"
            placeholder="Kripto ara..."
          />{" "}
          <SearchNormal1 className="absolute left-4 top-5  h-4 w-4 translate-x-1/2 font-semibold text-blue-500  dark:text-white  2xl:left-2 " />
        </form>
      </div>
      {/* Liste */}
      <table className="w-full border-collapse text-center ">
        <thead className="h-10 text-sm dark:text-white sm:text-base">
          <tr className="border-b px-4 dark:border-white dark:border-opacity-10">
            <th></th> {/* Yildiz icin bosluk */}
            <th>#</th>
            <th>Ad</th>
            <th>Fiyat</th>
            <th className="hidden xxs:table-cell">
              K/K<span className="text-sm">(24sa)</span>
            </th>
            <th>
              24saat <span className="text-sm">(#)</span>
            </th>
            <th className="hidden sm:table-cell">
              Hacim<span className="text-sm">(24sa)</span>
            </th>
            <th className="w-50 hidden overflow-hidden px-4 xl:table-cell">Toplam Arz</th>
            <th className="hidden xl:table-cell">Toplam Market Hacmi</th>
            <th className="hidden 2xl:table-cell"> ATL</th>
            <th className="hidden 2xl:table-cell">ATH</th>
            <th className="hidden lg:table-cell">
              Grafik <span className="text-sm">(7 gün)</span>
            </th>
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
              return <CoinItem coin={coin} key={coin.id} />;
            })}
        </tbody>
      </table>
    </div>
  );
}
