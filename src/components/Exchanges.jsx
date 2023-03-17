import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Exchanges() {
  const [Exchange, setExchange] = useState([]);

  const url = "https://api.coingecko.com/api/v3/exchanges?per_page=7&page=1";
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
        <div className="my-5 flex w-full flex-wrap items-center  px-4 py-2 2xl:px-0.5">
          <div className="flex w-full flex-auto  shrink-0 flex-col items-center justify-center gap-5  overflow-auto px-2 lg:flex-row ">
            {Exchange.map((exchange) => {
              return (
                <div
                  key={exchange.id}
                  className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-slate-100 p-4 dark:bg-gray-800/30"
                >
                  <img
                    src={exchange.image}
                    alt={exchange.name}
                    className="h-8 w-8 rounded-full md:h-10 md:w-10"
                  />
                  <p className=" text-sm font-semibold text-black dark:text-white ">
                    {exchange.name}
                  </p>
                  <p className=" text-sm text-black dark:text-white ">
                    <span> Kuruluş Yılı: </span>
                    {exchange.year_established}
                  </p>
                  <p className=" text-sm  text-black dark:text-white ">
                    <span>Güven Puanı: </span>
                    {exchange.trust_score}
                  </p>
                  <p className=" text-sm  text-black dark:text-white ">
                    <span>Güven Sıralaması: </span>
                    {exchange.trust_score_rank}
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
