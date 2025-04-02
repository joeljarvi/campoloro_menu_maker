"use client";
import MenuSectionHeader from "./MenuSectionHeader";

export default function HotSection({ menuData, title }) {
  return (
    <div className="w-full pb-4 border-b">
      <div className="flex flex-row gap-x-4 w-full leading-tight items-center justify-center border-b pb-1.5 mb-2 pt-1">
        <div className="">
          <MenuSectionHeader title={title} />
        </div>
      </div>
      {menuData.map((item, i) => (
        <div
          key={i}
          className="text-xs flex flex-row w-full gap-8 items-center justify-evenly"
        >
          <h3 className="">{item.title}</h3>
          <p className="">{item.description}</p>
          <h4 className="t">{item.price}</h4>
        </div>
      ))}
    </div>
  );
}
