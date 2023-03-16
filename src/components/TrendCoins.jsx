import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TrendCoins() {
  const [trending, setTrending] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";
  useEffect(() => {
    axios.get(url).then((res) => {
      setTrending(res.data.coins);
    });
  }, []);

  return (
    <div className=" mx-auto mt-10 flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-5 2xl:px-0">
      <h2 className="w-full text-start text-lg font-bold text-black dark:text-white md:text-xl">
        Trend Olan Coinler
      </h2>
      <div className="flex w-full items-center justify-between ">
        <div className="my-5 flex w-full flex-wrap items-center justify-center px-4 py-2 2xl:px-0.5">
          <div className="flex w-full flex-col  items-center justify-center gap-4 overflow-auto px-2 lg:flex-row">
            {trending.map((coin) => {
              return (
                <div
                  key={coin.item.id}
                  className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-slate-100 p-4 dark:bg-gray-800/30"
                >
                  <img
                    src={coin.item.large}
                    alt={coin.item.name}
                    className="h-6 w-6 rounded-full md:h-10 md:w-10"
                  />
                  <p className="text-sm font-semibold text-black dark:text-white">
                    {coin.item.name}
                  </p>

                  <p className="text-sm font-semibold text-black dark:text-white">
                    {coin.item.symbol.toUpperCase()}
                  </p>
                  {/*                   <div className="flex items-center gap-2">
                    <p className="text-sm text-black dark:text-white">
                      {coin.item.price_btc.toFixed(7).toLocaleString("tr-TR")}
                    </p>
                    <img
                      aria-hidden="true"
                      aria-disabled="true"
                      className="h-3 w-3 select-none"
                      src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                      alt="/"
                    />
                  </div> */}
                  <p className="text-sm text-black dark:text-white">
                    <span className="mr-2"> Sıralama:</span>
                    {coin.item.market_cap_rank}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
