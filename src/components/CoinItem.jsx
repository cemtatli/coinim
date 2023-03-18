import React from "react";
import { Link } from "react-router-dom";

import { Sparklines, SparklinesLine } from "react-sparklines";
import { Star, Star1 } from "iconsax-react";

export default function CoinItem({ coin }) {
  return (
    <tr
      key={coin.id}
      className="h-20 overflow-hidden border-b text-center dark:border-white dark:border-opacity-10"
    >
      <td>
        <Star1 className={"h-3.5 w-3.5 cursor-pointer md:h-4 md:w-4"} />
      </td>
      <td className="text-xs font-medium xs:text-sm sm:text-base">{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className="mx-auto flex w-full max-w-[125px] flex-col items-center justify-center gap-1 md:max-w-[250px] md:flex-row md:gap-5  lg:justify-start lg:pl-5">
            <img
              src={coin.image}
              className={"h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10"}
              alt={coin.id}
            />
            <span className="hidden overflow-hidden text-xs  font-medium xs:block sm:text-sm md:w-24 md:text-base">
              {coin.name}
              <span className="text-xs uppercase text-black dark:text-white"> ({coin.symbol})</span>
            </span>
          </div>
        </Link>
      </td>

      <td className="text-xs font-medium xs:text-sm ">${coin.current_price.toFixed(2)}</td>
      <td className="hidden text-xs font-medium xxs:table-cell xs:text-sm ">
        {coin.price_change_percentage_24h > 0 ? (
          <p className="  text-green-500 dark:text-green-400">
            ${coin.price_change_24h.toFixed(2).toLocaleString("tr-TR")}
          </p>
        ) : (
          <p className="text-red-500 dark:text-red-500">{coin.price_change_24h.toFixed(2)}$</p>
        )}
      </td>
      <td className="text-xs font-medium font-medium xs:text-sm ">
        {" "}
        {coin.price_change_percentage_24h > 0 ? (
          <p className="  text-green-500 dark:text-green-400">
            {coin.price_change_percentage_24h.toFixed(2).toLocaleString("tr-TR")}%
          </p>
        ) : (
          <p className="text-red-500  dark:text-red-500">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>

      <td className="hidden text-sm font-medium sm:table-cell">
        ${coin.total_volume.toLocaleString("tr-TR")}
      </td>

      <td className="hidden max-w-[80px] text-sm font-medium xl:table-cell">
        {coin.total_supply ? coin.total_supply : "N/A"}
      </td>
      <td className="hidden text-sm font-medium xl:table-cell">
        {coin.market_cap.toLocaleString("tr-TR")}$
      </td>
      <td className="hidden text-sm font-medium 2xl:table-cell">${coin.atl.toFixed(2)}</td>
      <td className="hidden text-sm font-medium 2xl:table-cell">${coin.ath.toFixed(2)}</td>
      <td className="hidden text-sm font-medium lg:table-cell lg:w-44">
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="#3B82F5" />
        </Sparklines>
      </td>
    </tr>
  );
}
