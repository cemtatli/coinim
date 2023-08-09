import React from "react";
import { useTranslation } from "react-i18next";

import SearchBox from "./SearchBox";
import CoinData from "./CoinData";

export default function CoinList({ coins }) {
  const [SearchValue, setSearchValue] = React.useState("");
  const { t } = useTranslation();
  return (
    <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center overflow-hidden px-5 2xl:px-0">
      {/* Search Bar */}
      <SearchBox setSearchValue={setSearchValue} />
      {/* Table List */}
      <table className="w-full border-collapse text-center ">
        <thead className="h-10 text-sm font-normal dark:text-white">
          <tr className="border-b px-4 dark:border-white dark:border-opacity-10">
            <th></th>
            <th> {t("tableHeaders.rank")}</th>
            <th>{t("tableHeaders.name")}</th>
            <th>{t("tableHeaders.price")}</th>
            <th className="hidden xxs:table-cell">{t("tableHeaders.change24h")}</th>
            <th>{t("tableHeaders.percentage24h")}</th>
            <th className="hidden sm:table-cell">{t("tableHeaders.volume24h")}</th>
            <th className="w-50 hidden overflow-hidden px-4 xl:table-cell">{t("tableHeaders.totalSupply")}</th>
            <th className="hidden xl:table-cell">{t("tableHeaders.marketCap")}</th>
            <th className="hidden 2xl:table-cell"> {t("tableHeaders.atl")}</th>
            <th className="hidden 2xl:table-cell">{t("tableHeaders.ath")}</th>
            <th className="hidden lg:table-cell">{t("tableHeaders.chart")}</th>
          </tr>
        </thead>
        <tbody className="dark:text-white">
          {coins
            .filter((value) => {
              if (SearchValue === "") {
                return value;
              } else if (value.name.toLowerCase().includes(SearchValue.trim("").toLowerCase())) {
                return value;
              }
            })
            .map((coin) => {
              return <CoinData coin={coin} key={coin.id} />;
            })}
        </tbody>
      </table>
    </div>
  );
}
