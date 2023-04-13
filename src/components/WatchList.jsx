import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { UserAuth } from "@/context/AuthContext";
import { toast } from "react-hot-toast";

export default function WatchList() {
  const [coins, setCoins] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setCoins(doc.data()?.watchList);
    });
  }, [user?.email]);

  const coinPath = doc(db, "users", `${user?.email}`);
  const deleteCoin = async (passedid) => {
    try {
      const result = coins.filter((item) => item.id !== passedid);
      await updateDoc(coinPath, {
        watchList: result,
      });
      toast.success("Başarıyla kaldırıldı.");
    } catch (e) {
      toast.error("Kaldırma işlemi sırasında bir hata oluştu.");
    }
  };

  {
    console.log(coins);
  }
  return (
    <div className="fluid">
      {coins?.length === 0 ? (
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <p className=" w-full text-start text-sm">
            Merhaba, favori kripto paralarınızı burada görebilirsiniz. Ancak görüyorum ki takip listende hiçbir kripto para yok. Takip
            listesine eklemek için kripto paralar sayfasına gidebilirsiniz.
          </p>
          <Link to={"/"} className=" flex w-full items-center justify-center">
            <button
              type="button"
              className="mx-auto mb-2 rounded-lg border border-blue-700 px-4 py-1.5 text-center text-xs font-semibold text-blue-700  transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-50 dark:text-white dark:hover:bg-blue-600/10 dark:focus:ring-blue-700"
            >
              Kripto Paraları Görüntüle
            </button>
          </Link>
        </div>
      ) : (
        <table className="w-full border-collapse  text-center">
          <thead className="h-10 text-sm dark:text-white ">
            <tr className="border-b px-4 dark:border-white dark:border-opacity-10">
              <th className="hidden text-center sm:table-cell">Sıralama (#)</th>
              <th className="text-center">Ad</th>
              <th className="text-center">Fiyat</th>
              <th className="hidden text-center md:table-cell">24saat ($)</th>
              <th className="hidden lg:table-cell">24saat (%)</th>
              <th className="text-center">Kaldır</th>
            </tr>
          </thead>
          <tbody className="h-10 dark:text-white">
            {coins?.map((coin) => (
              <tr key={coin.id} className="h-20 overflow-hidden border-b text-center dark:border-white dark:border-opacity-10">
                <td className="hidden sm:table-cell">{coin?.rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div className="mx-auto flex w-full flex-1 flex-row items-center justify-center  gap-2">
                      <img src={coin.image} title={coin.name} className={"h-6 w-6 xs:h-8 xs:w-8"} alt={coin.id} />
                      <div className="hidden overflow-hidden text-xs  font-medium sm:block sm:text-sm md:text-lg">{coin.name}</div>
                      <div className="ml-1 block text-xs uppercase text-black dark:text-white">({coin.symbol})</div>
                    </div>
                  </Link>
                </td>
                <td className="text-xs font-medium xs:text-sm">${coin.price.toLocaleString("tr-TR")}</td>
                <td className="hidden text-xs font-medium xs:text-sm md:table-cell">
                  {coin.change24 > 0 ? (
                    <p className="  text-green-500 dark:text-green-400">{coin.change24.toFixed(2).toLocaleString("tr-TR")}$</p>
                  ) : (
                    <p className="text-red-500 dark:text-red-500">{coin.change24.toFixed(2)}$</p>
                  )}
                </td>
                <td className="hidden text-xs font-medium xs:text-sm lg:table-cell ">
                  {coin.percentage24 > 0 ? (
                    <p className="text-green-500 dark:text-green-400">{coin.percentage24.toFixed(2).toLocaleString("tr-TR")}%</p>
                  ) : (
                    <p className="text-red-500 dark:text-red-500">{coin.percentage24.toFixed(2)}%</p>
                  )}
                </td>
                <td>
                  <AiOutlineClose
                    onClick={() => deleteCoin(coin.id)}
                    className="mx-auto h-3.5 w-3.5 cursor-pointer rounded-full hover:text-red-500  md:h-4 md:w-4"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
