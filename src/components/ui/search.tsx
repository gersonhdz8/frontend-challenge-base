"use client";
import { SearchIcon } from "lucide-react";

import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Suspense } from "react";

export default function Search({
  placeholder,
}: {
  placeholder: string;
}): React.JSX.Element {
  const searchParams = useSearchParams();
  //const pathName = usePathname();
  const { replace } = useRouter();
  const WAIT_CHANGE = 500;

  const HandleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    //console.log(params)
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`/movie?${params.toString()}`);
  }, WAIT_CHANGE);

  return (
    <Suspense>
      <div className="w-full relative justify-center items-center">
        <>
          <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5 "></SearchIcon>
        </>
        <input
          onChange={(event) => HandleSearch(event.target.value)}
          placeholder={placeholder}
          defaultValue={searchParams.get("query")?.toString()}
          className="flex pl-3 h-10 w-full rounded-md border border-neutral-800 text-[#F6F6F6] bg-neutral-950 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white  focus-visible:ring-1 focus-visible:ring-[#E6B10B]  disabled:cursor-not-allowed disabled:opacity-50 "
        />
      </div>
    </Suspense>
  );
}
