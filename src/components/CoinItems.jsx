import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Star, Star1 } from "iconsax-react";

export default function CoinItems({ coin }) {
  return (
    <tr
      key={coin.id}
      className="h-18 overflow-hidden border-b text-center dark:border-white dark:border-opacity-10"
    >
      <td>
        <Star1 size={14} className={"cursor-pointer"} />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <div className="mx-auto flex max-w-[125px]  flex-col items-center justify-center gap-1 md:max-w-[250] md:flex-row md:gap-2 lg:max-w-[200px] lg:justify-start lg:pl-5">
          <img src={coin.image} className={"h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10"} alt={coin.id} />
          <span className="hidden text-xs font-medium xs:block sm:text-sm md:text-base">
            {coin.name}
            <span className="text-xs uppercase text-black dark:text-white"> ({coin.symbol})</span>
          </span>
        </div>
      </td>

      <td className="text-xs font-medium xs:text-sm sm:text-base">
        ${coin.current_price.toFixed(2)}
      </td>
      <td className="text-xs font-medium xs:text-sm sm:text-base">
        {coin.price_change_24h.toFixed(2)}$
      </td>
      <td className="text-xs font-medium xs:text-sm sm:text-base">
        {" "}
        {coin.price_change_percentage_24h > 0 ? (
          <p className="  text-green-600 dark:text-green-400">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600  dark:text-red-500">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="hidden sm:table-cell">{coin.total_volume.toLocaleString()}$</td>

      <td className="hidden max-w-[70px] lg:table-cell">
        {coin.total_supply ? coin.total_supply : "-"}
      </td>
      <td className="hidden max-w-[70px] lg:table-cell">{coin.market_cap.toLocaleString()}$</td>
      <td className="hidden max-w-[70px] xl:table-cell">{coin.ath}</td>
    </tr>
  );
}
