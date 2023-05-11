import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import axios from "axios";
import DOMPurify from "dompurify";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { Helmet } from "react-helmet";

export default function CoinDetails() {
  const [coin, setCoin] = useState({});
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.language;

  const params = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoin(res.data);
    });
  }, [url]);

  return (
    <div className="fluid">
      <Helmet>
        ( <title>Coinim | {`${coin.name} $${coin.market_data?.current_price.usd}`} </title> )
      </Helmet>
      <div className="mt-5 mb-5 flex h-full w-full flex-col items-center justify-center gap-10 lg:gap-5">
        {/* IMG, SYMBOL & NAME */}
        <div className="flex w-full flex-col items-center gap-2 border-b border-blue-500 border-opacity-10 pb-5 dark:border-white dark:border-opacity-10">
          <img src={coin.image?.large} alt={coin.name} className="h-24 w-24 md:h-32 md:w-32" />
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-xl font-bold dark:text-white md:text-2xl">{coin.name}</h2>
            <span className="text-sm font-medium uppercase text-gray-500 md:text-sm">({coin.symbol})</span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-full ">
            <p className="text-lg font-medium dark:text-white">#{coin.market_cap_rank}</p>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="text-xl font-medium dark:text-white">
              {coin.market_data?.current_price.usd > 0 ? (
                <p className="  text-green-500 dark:text-green-400">${coin.market_data?.current_price.usd}</p>
              ) : (
                <p className="text-red-500 dark:text-red-500">${coin.market_data?.current_price.usd}</p>
              )}
            </div>
          </div>
        </div>
        {/* COIN STATS */}
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">{t("CoinDetail.marketCap")}</p>
              <p className="text-sm font-medium dark:text-white">${coin.market_data?.market_cap?.usd.toLocaleString("tr-TR")}</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">{t("CoinDetail.change24h")}</p>
              <p className="text-sm font-medium dark:text-white">{coin.market_data?.total_volume.usd?.toLocaleString("tr-TR")}</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">{t("CoinDetail.circulatingSupply")}</p>
              <p className="text-sm font-medium dark:text-white">{coin.market_data?.circulating_supply?.toLocaleString("tr-TR")}</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">{t("CoinDetail.totalSupply")}</p>
              <p className="text-sm font-medium dark:text-white">{coin.market_data?.total_supply?.toLocaleString("tr-TR")}</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">{t("CoinDetail.maxSupply")}</p>
              {coin.market_data?.max_supply ? (
                <p className="text-sm font-medium dark:text-white">{coin.market_data?.max_supply?.toLocaleString("tr-TR")}</p>
              ) : (
                <p className="text-sm font-medium dark:text-white"> - </p>
              )}
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">{t("CoinDetail.high24h")}</p>
              <p className="text-sm font-medium dark:text-white">${coin.market_data?.high_24h.usd?.toLocaleString("tr-TR")}</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">{t("CoinDetail.low24h")}</p>
              <p className="text-sm font-medium dark:text-white">${coin.market_data?.low_24h.usd?.toLocaleString("tr-TR")}</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">{t("CoinDetail.change24h")}</p>
              <div className="text-sm font-medium dark:text-white">
                {coin.market_data?.price_change_percentage_24h > 0 ? (
                  <div className="flex items-center justify-end">
                    <MdOutlineArrowDropUp className="h-5 w-5 text-green-500" />
                    <p className="  text-green-500 dark:text-green-400">
                      {coin.market_data?.price_change_percentage_24h.toLocaleString("tr-TR")}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-end">
                    <MdOutlineArrowDropDown className="h-5 w-5 text-red-500" />
                    <p className="text-red-500 dark:text-red-500">
                      {coin.market_data?.price_change_percentage_24h.toLocaleString("tr-TR")}%
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">{t("CoinDetail.change7d")}</p>
              <div className="text-sm font-medium dark:text-white">
                {coin.market_data?.price_change_percentage_7d > 0 ? (
                  <div className="flex items-center justify-end">
                    <MdOutlineArrowDropUp className="h-5 w-5 text-green-500" />
                    <p className="  text-green-500 dark:text-green-400">
                      {coin.market_data?.price_change_percentage_7d.toLocaleString("tr-TR")}%
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-end">
                    <MdOutlineArrowDropDown className="h-5 w-5 text-red-500" />
                    <p className="text-red-500 dark:text-red-500">
                      {coin.market_data?.price_change_percentage_7d.toLocaleString("tr-TR")}%
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">{t("CoinDetail.change30d")}</p>
              <div className="text-sm font-medium dark:text-white">
                {coin.market_data?.price_change_percentage_30d > 0 ? (
                  <div className="flex items-center justify-end">
                    <MdOutlineArrowDropUp className="h-5 w-5 text-green-500" />
                    <p className="  text-green-500 dark:text-green-400">
                      {coin.market_data?.price_change_percentage_30d.toLocaleString("tr-TR")}%
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-end">
                    <MdOutlineArrowDropDown className="h-5 w-5 text-red-500" />
                    <p className="text-red-500 dark:text-red-500">
                      {coin.market_data?.price_change_percentage_30d.toLocaleString("tr-TR")}%
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm font-medium dark:text-white">{t("CoinDetail.change1y")}</p>
              <div className="text-sm font-medium dark:text-white">
                {coin.market_data?.price_change_percentage_1y > 0 ? (
                  <div className="flex items-center justify-end">
                    <MdOutlineArrowDropUp className="h-5 w-5 text-green-500" />
                    <p className="  text-green-500 dark:text-green-400">
                      {coin.market_data?.price_change_percentage_1y.toLocaleString("tr-TR")}%
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-end">
                    <MdOutlineArrowDropDown className="h-5 w-5 text-red-500" />
                    <p className="text-red-500 dark:text-red-500">
                      {coin.market_data?.price_change_percentage_1y.toLocaleString("tr-TR")}%
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* COIN CHART */}
        <div className="flex w-full flex-1 shrink-0 items-center justify-center">
          <Sparklines data={coin.market_data?.sparkline_7d?.price}>
            <SparklinesLine color="#3B82F6" />
          </Sparklines>
        </div>
        {/* COIN DESC */}
        {coin.description && (
          <div className="py-4">
            <p className="mb-2 text-xl font-bold dark:text-white">
              {activeLanguage === "tr" ? (
                <>
                  {coin.name} {t("CoinDetail.whatis")}
                </>
              ) : (
                <>
                  {t("CoinDetail.whatis")} {coin.name} ?
                </>
              )}
            </p>
            <p
              className="text-sm  dark:text-white"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(coin.description ? coin.description.en : ""),
              }}
            ></p>
          </div>
        )}
      </div>
    </div>
  );
}
