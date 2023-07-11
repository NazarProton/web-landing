import React from "react";
import { CardBorder, CardHeader, cardClass } from ".";
import gradient3 from "../../../../../public/border-gradient-3.png";
import Yield from "../icons/yield";
import Pool from "../icons/pool";

export default function PoolCreation() {
  return (
    <div>
      <div className={`${cardClass}  relative `}>
        <div className=" px-5 md:px-[33px] py-[31px] overflow-hidden">
          <CardBorder img={gradient3} />

          <div className="mb-4">
            <CardHeader
              title="Permissionless pool creation"
              summary="Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum "
            />
          </div>
          <div className="-mb-[197px] flex justify-center relative overflow-hidden md:mt-0 mt-10">
            <Pool />
          </div>
        </div>
      </div>
    </div>
  );
}
