import React from "react";
import { SearchNormal1 } from "iconsax-react";

export default function SearchBox({ setSearchValue }) {
  return (
    <>
      <div className="flex w-full">
        <form className="relative my-5 flex w-full items-center justify-center px-4 py-2 2xl:px-0.5">
          <input
            type="search"
            onChange={(e) => setSearchValue(e.target.value)}
            className="relative  mx-auto h-10 w-full max-w-[1440px] rounded-lg border border-blue-500 px-4 py-2 pl-10 text-sm outline-none placeholder:text-xs focus:ring-2 dark:bg-transparent dark:text-white  md:placeholder:text-sm"
            placeholder="Kripto ara..."
          />{" "}
          <SearchNormal1 className="absolute left-4 top-5  h-4 w-4 translate-x-1/2 font-semibold text-blue-500  dark:text-white  2xl:left-2 " />
        </form>
      </div>
    </>
  );
}
