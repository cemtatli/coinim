import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Exchanges() {
  const [Exchange, setExchange] = useState([]);

  const url = "https://api.coingecko.com/api/v3/exchanges?per_page=8&page=1";
  useEffect(() => {
    axios.get(url).then((res) => {
      setExchange(res.data);
    });
  }, []);
  return (
    <div className=" mx-auto mb-10 flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-5 2xl:px-0">
      <h2 className="w-full text-start text-lg font-bold text-black dark:text-white md:text-xl">
        Borsalar
      </h2>
      <div className="flex w-full items-center justify-between">
        <div className="my-5 grid w-full grid-cols-2 gap-5 text-center md:grid-cols-3 lg:grid-cols-4">
          {Exchange.map((exchange) => {
            return (
              <div
                key={exchange.id}
                className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-white p-5 font-medium shadow-md transition-colors dark:bg-gray-800 md:gap-1"
              >
                <img
                  src={exchange.image}
                  alt={exchange.name}
                  className="h-8 w-8 rounded-full md:h-10 md:w-10"
                  aria-hidden="true"
                  aria-disabled="true"
                />
                <p className=" my-0.5 text-center text-sm font-semibold  text-black dark:text-white ">
                  {exchange.name.toLocaleUpperCase("tr-TR")}
                </p>
                <p className=" text-xs text-black dark:text-white ">
                  {exchange.year_established}, {exchange.country}
                </p>

                <p className=" text-xs  text-black dark:text-white ">
                  <span>Güven Puanı: </span>
                  {exchange.trust_score}
                </p>
                <p className=" text-xs  text-black dark:text-white ">
                  <span>Güven Sıralaması: </span>
                  {exchange.trust_score_rank}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
