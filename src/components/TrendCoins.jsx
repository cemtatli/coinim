import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TrendCoins() {
  const [trending, setTrending] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";
  useEffect(() => {
    axios.get(url).then((res) => {
      setTrending(res.data.coins);
    });
  }, []);

  return (
    <div className="mx-auto mt-10 flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-5 2xl:px-0">
      <h2 className="w-full text-start text-lg font-bold text-black dark:text-white md:text-xl">Trend Coinler</h2>
      <div className="my-5 grid w-full grid-cols-1 gap-4 text-center xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {trending.map((coin) => (
          <div
            key={coin.item.id}
            className="flex flex-col items-center justify-center rounded-lg bg-white p-5 font-medium shadow-md dark:bg-gray-800"
          >
            <img src={coin.item?.large} alt={coin.item?.name} className="h-10 w-10 rounded-full" />
            <span className="my-1 text-sm font-medium text-black dark:text-white">
              {coin.item?.name} <span className="text-xs">({coin.item?.symbol})</span>
            </span>

            <div className="mt-1.5 flex items-center gap-1 font-medium">
              <p className="text-xs text-black dark:text-white">{coin.item.price_btc?.toFixed(8).toLocaleString("tr-TR")}</p>
              <img
                aria-hidden="true"
                aria-disabled="true"
                title={coin.name}
                className="h-3 w-3 select-none"
                src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                alt={coin.name}
              />
            </div>
            <div className="mt-1.5 flex flex-col items-center gap-2">
              <div className="text-xs text-black dark:text-white">
                <p className="mr-1 font-medium" title={`Sıralama: ${coin.item?.market_cap_rank}`}>
                  {" "}
                  Sıralama: {coin.item?.market_cap_rank}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
