"use client";
import MenuSectionHeader from "./MenuSectionHeader";

export default function SpiritsSection({ spiritsData, title }) {
  return (
    <div className="w-full pb-4">
      <div className="flex flex-row gap-x-4 w-full leading-tight items-center justify-between border-b pb-1.5 mb-2 pt-1">
        <p className="pl-24 uppercase text-xs text-center">(TITLE)</p>
        <div className="">
          <MenuSectionHeader title={title} />
        </div>

        <p className=" pr-24 uppercase text-xs text-center">(KR/CL)</p>
      </div>
      {spiritsData.map((item, i) => (
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
