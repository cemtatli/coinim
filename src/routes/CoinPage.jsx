import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default function CoinPage() {
  const [coin, setCoin] = useState({});
  const params = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoin(res.data);
    });
  }, [url]);

  return (
    <div className="mx-auto mb-5 flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-5 2xl:px-0">
      {/* WRAPPER */}
      <div className="mt-5 mb-5 flex h-full w-full flex-col items-center justify-center gap-10 lg:gap-5">
        {/* IMG, SYMBOL & NAME */}
        <div className="flex w-full flex-col items-center gap-2 border-b border-blue-500 border-opacity-10 pb-5 dark:border-white dark:border-opacity-10">
          <img src={coin.image?.large} alt={coin.name} className="h-24 w-24 md:h-32 md:w-32" />
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-xl font-bold dark:text-white md:text-2xl">{coin.name}</h1>
            <p className="text-sm font-medium uppercase text-gray-500 md:text-sm">
              ({coin.symbol})
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-full ">
            <p className="text-lg font-medium dark:text-white">#{coin.market_cap_rank}</p>
          </div>
          <div className="flex w-full items-center justify-center">
            <p className="text-xl font-medium dark:text-white">
              {coin.market_data?.current_price.usd > 0 ? (
                <p className="  text-green-500 dark:text-green-400">
                  {coin.market_data?.current_price.usd}$
                </p>
              ) : (
                <p className="text-red-500 dark:text-red-500">
                  {coin.market_data?.current_price.usd}$
                </p>
              )}
            </p>
          </div>
        </div>
        {/* COIN STATS */}
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">Market Değeri </p>
              <p className="text-sm font-medium dark:text-white">
                {coin.market_data?.market_cap.usd}
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">Hacim(24sa)</p>
              <p className="text-sm font-medium dark:text-white">
                {coin.market_data?.total_volume.usd.toLocaleString("tr-TR")}
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">Dolaşımdaki Arz</p>
              <p className="text-sm font-medium dark:text-white">
                {coin.market_data?.circulating_supply.toLocaleString("tr-TR")}
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">Toplam Arz</p>
              <p className="text-sm font-medium dark:text-white">
                {coin.market_data?.total_supply.toLocaleString("tr-TR")}
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">Maksimum Arz</p>
              <p className="text-sm font-medium dark:text-white">
                {coin.market_data?.max_supply.toLocaleString("tr-TR")}
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">En Yüksek Değer (24h)</p>
              <p className="text-sm font-medium dark:text-white">
                {coin.market_data?.high_24h.usd.toLocaleString("tr-TR")}
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">En Düşük Değer (24h)</p>
              <p className="text-sm font-medium dark:text-white">
                {coin.market_data?.low_24h.usd.toLocaleString("tr-TR")}
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">Değişim (24sa)</p>
              <p className="text-sm font-medium dark:text-white">
                {coin.market_data?.price_change_percentage_24h > 0 ? (
                  <p className="  text-green-500 dark:text-green-400">
                    {coin.market_data?.price_change_percentage_24h.toLocaleString("tr-TR")}%
                  </p>
                ) : (
                  <p className="text-red-500 dark:text-red-500">
                    {coin.market_data?.price_change_percentage_24h.toLocaleString("tr-TR")}$
                  </p>
                )}
              </p>
            </div>
          </div>
        </div>
        {/* COIN CHART */}
        <div className="flex w-full flex-1 items-center justify-center">
          <Sparklines data={coin.market_data?.sparkline_7d.price}>
            <SparklinesLine color="#3B82F6" />
          </Sparklines>
        </div>
        {/* COIN DESC */}
        <div className="py-4">
          <p className="mb-2 text-xl font-bold dark:text-white"> {coin.name} nedir ?</p>
          <p
            className="text-sm  dark:text-white"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(coin.description ? coin.description.en : ""),
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}
