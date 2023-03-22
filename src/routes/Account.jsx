import React from "react";
import WatchList from "../components/WatchList";

export default function Account() {
  return (
    <div className="mx-auto my-5 flex w-full max-w-[1440px] flex-col items-center justify-center overflow-hidden px-5 2xl:px-0">
      <div className="flex w-full flex-col items-center justify-center gap-4 text-black dark:text-white ">
        <h2 className="w-full text-start text-2xl font-bold dark:text-white"> İzleme Listesi</h2>
        <WatchList />
      </div>
    </div>
  );
}
