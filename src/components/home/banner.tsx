/* eslint-disable @typescript-eslint/naming-convention */

import React from "react";
export default function Banner(): React.JSX.Element {
  return (
    <div className="bg-[#262626] w-full h-full flex justify-center">
      <div className="w-full h-full max-w-[90rem] flex justify-center relative">
        <img
          src="/banner.svg"
          alt="bannerMovie"
          className="w-full flex h-[35rem] object-cover absolute inset-0 "
        />
        <div className="w-full h-[35rem] max-w-[90rem] relative flex text-white custom-gradient items-end ">
          <div className="h-full justify-end p-10 flex-col gap-4 flex w-3/4">
            <p className="text-3xl font-IBM font-semibold">Kung Fu Panda 4</p>
            <p className="font-IBM font-semibold">
              Join Po and the Furious Five on a new epic adventure! Discover the
              power of friendship and the strength within! Get ready to unleash
              your inner warrior! 🥋✨
            </p>
          </div>

          <div className="p-12 w-1/4 flex flex-col "></div>
        </div>
      </div>
    </div>
  );
}
