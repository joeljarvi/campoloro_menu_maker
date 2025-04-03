"use client";
import MenuSectionHeader from "./MenuSectionHeader";

export default function SpiritSection({ menuData, title }) {
  return (
    <div className="w-full pb-4 border-b">
      <div className="grid grid-cols-12 gap-x-8 w-full leading-tight items-center justify-center border-b pb-1.5 mb-2 pt-1">
        <div className="-ml-8 col-start-4 ">
          <MenuSectionHeader title={title} />
        </div>

        <p
          className="uppercase text-xs
       col-start-12 col-span-1"
        >
          (KR/CL)
        </p>
      </div>
      {menuData.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-12 gap-x-8 w-full text-xs leading-snug"
        >
          <h3 className="col-start-1 col-span-3">{item.title}</h3>
          <h3 className="col-start-4 col-span-2">{item.origin}</h3>
          <p className="col-start-6 col-span-6 ">{item.description}</p>
          <h4 className="col-start-12 col-span-1 text-right">{item.price}</h4>
        </div>
      ))}
    </div>
  );
}
