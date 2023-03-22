import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Sparklines, SparklinesLine } from "react-sparklines";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CoinItem({ coin }) {
  const [savedCoin, setSavedCoin] = useState(false);
  const { user } = UserAuth();

  const coinPath = doc(db, "users", `${user?.email}`);
  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
        }),
      });
    } else {
      alert("Eğer takip listesine coin eklemek istiyorsanız lütfen giriş yapın.");
    }
  };

  return (
    <tr
      key={coin.id}
      className="h-20 overflow-hidden border-b text-center dark:border-white dark:border-opacity-10"
    >
      <td className="cursor-pointer" onClick={saveCoin}>
        {savedCoin ? (
          <AiFillStar
            className={"h-3.5 w-3.5 cursor-pointer text-blue-500 md:h-[18px] md:w-[18px]"}
          />
        ) : (
          <AiOutlineStar className={"h-3.5 w-3.5 cursor-pointer md:h-[18px] md:w-[18px]"} />
        )}
      </td>
      <td className="text-xs font-medium xs:text-sm sm:text-base">{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className="mx-auto flex w-full max-w-[125px] flex-col items-center justify-center gap-2 md:max-w-[200px] md:flex-row md:gap-5 lg:justify-start lg:gap-2.5 ">
            <img
              src={coin.image}
              className={"h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10"}
              alt={coin.id}
            />
            <span className="hidden overflow-hidden text-xs font-medium xs:block sm:text-sm md:w-full md:text-base">
              {coin.name}
              <span className="ml-1 text-xs uppercase text-black dark:text-white">
                ({coin.symbol})
              </span>
            </span>
          </div>
        </Link>
      </td>
      <td className="text-xs font-medium xs:text-sm">${coin.current_price.toFixed(2)}</td>
      <td className="hidden text-xs font-medium xxs:table-cell xs:text-sm ">
        {coin.price_change_percentage_24h > 0 ? (
          <p className="  text-green-500 dark:text-green-400">
            {coin.price_change_24h.toFixed(2).toLocaleString("tr-TR")}$
          </p>
        ) : (
          <p className="text-red-500 dark:text-red-500">{coin.price_change_24h.toFixed(2)}$</p>
        )}
      </td>
      <td className="text-xs font-medium  xs:text-sm ">
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
        {coin.total_supply ? coin.total_supply : "-"}
      </td>
      <td className="hidden text-sm font-medium xl:table-cell">
        ${coin.market_cap.toLocaleString("tr-TR")}
      </td>
      <td className="hidden text-sm font-medium 2xl:table-cell">${coin.atl.toFixed(2)}</td>
      <td className="hidden text-sm font-medium 2xl:table-cell">${coin.ath.toFixed(2)}</td>
      <td className="hidden pl-2 text-sm font-medium lg:table-cell lg:w-[200px]">
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="#3B82F5" />
        </Sparklines>
      </td>
    </tr>
  );
}
