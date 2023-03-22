import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export default function WatchList() {
  const [coins, setCoins] = React.useState([]);
  return (
    <div className="mx-auto my-5 flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden  2xl:px-0">
      {coins.length === 0 ? (
        <div className=" flex w-full flex-col items-center justify-center gap-4 text-center">
          <p className=" w-full text-start text-sm md:text-base">
            Merhaba, favori kripto paralarınızı burada görebilirsiniz. Ancak görüyorum ki takip
            listende hiçbir kripto para yok. Takip listesine eklemek için kripto paralar sayfasına
            gidebilirsiniz.
          </p>
          <Link to={"/"} className="flex w-full items-start">
            <button
              type="button"
              className="mx-auto  rounded-lg border border-blue-700 px-4 py-1.5 text-center text-xs font-semibold text-blue-700  transition-colors duration-200 ease-in-out  focus:outline-none focus:ring-2 focus:ring-blue-50 dark:text-white dark:hover:bg-blue-600/10 dark:focus:ring-blue-700"
            >
              Kripto Paraları Görüntüle 
            </button>
          </Link>
        </div>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th className="px-4">Sıralama #</th>
              <th className="text-left">Coin</th>
              <th className="text-left">Favorilerden Kaldır</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin) => (
              <tr key={coin.id} className="h-[60px] overflow-hidden">
                <td>{coin?.rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div className="flex items-center">
                      <img src={coin?.image} className="mr-4 w-8" alt="/" />
                      <div>
                        <p className="hidden sm:table-cell">{coin?.name}</p>
                        <p className="text-left text-sm text-gray-500">
                          {coin?.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="pl-8">
                  <AiOutlineClose onClick={() => deleteCoin(coin.id)} className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
