import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CoinPage() {
  const [coin, setCoin] = useState({});

  const url = "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true";

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoin(res.data);
      console.log(res.data);
    });
  }, [url]);

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-5 2xl:px-0">
      <div className="mt-5 flex h-full w-full flex-col items-center justify-center gap-4 ">
        <div className="flex w-full flex-col items-center gap-2 border-b border-white border-opacity-10 pb-5">
          <img src={coin.image?.large} alt={coin.name} className="h-24 w-24 md:h-32 md:w-32" />
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-xl font-bold dark:text-white md:text-2xl">{coin.name}</h1>
            <p className="text-base font-semibold uppercase text-gray-500 md:text-base">
              ({coin.symbol})
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center md:flex-row md:gap-4">
          <div className="flex flex-col items-center justify-center gap-2 px-4 py-2">
            <p className="rounded-full px-2 py-0.5 text-base font-medium text-blue-500 dark:bg-blue-100 dark:text-slate-900 md:text-base">
              Current Price
            </p>
            <p className="text-xl font-semibold dark:text-white md:text-xl">
              ${coin.market_data?.current_price.usd}
            </p>
          </div>
          {/* --- */}
          <div className="flex flex-col items-center justify-center gap-2 px-4 py-2">
            <p className="rounded-full px-2 py-0.5  text-base font-medium text-blue-500 dark:bg-blue-100 dark:text-slate-900 md:text-base">
              Market Cap
            </p>
            <p className="text-xl font-semibold dark:text-white md:text-xl">
              ${coin.market_data?.market_cap.usd}
            </p>
          </div>

          {/* --- */}
          <div className="flex flex-col items-center justify-center gap-2 px-4 py-2">
            <p className="rounded-full px-2 py-0.5 text-base font-medium text-blue-500 dark:bg-blue-100 dark:text-slate-900 md:text-base">
              Total Volume
            </p>
            <p className="text-xl font-semibold dark:text-white md:text-xl">
              ${coin.market_data?.total_volume.usd}
            </p>
          </div>
          {/* --- */}
          <div className="flex flex-col items-center justify-center gap-2 px-4 py-2">
            <p className="rounded-full px-2 py-0.5  text-base font-medium text-blue-500 dark:bg-blue-100 dark:text-slate-900 md:text-base">
              24h High
            </p>
            <p className="text-xl font-semibold dark:text-white md:text-xl">
              ${coin.market_data?.high_24h.usd}
            </p>
            {/* --- */}
          </div>
        </div>
      </div>
    </div>
  );
}
