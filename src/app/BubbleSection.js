"use client";
import MenuSectionHeader from "./MenuSectionHeader";

export default function BubbleSection({ wineData, title }) {
  return (
    <div className="w-full pb-4">
      <div className="flex flex-row w-full gap-4 leading-tight items-center justify-between border-b pb-1.5 mb-2 pt-1 px-4">
        <p className="uppercase text-xs col-span-1">(T)</p>
        <div className="col-span-7">
          <MenuSectionHeader title={title} />
        </div>
        <div className="flex flex-row gap-8">
          <p className="uppercase text-xs col-start-11 col-span-1">(GLASS)</p>
          <p
            className="uppercase text-xs
       col-start-12 col-span-1 text-left"
          >
            (BOTTTLE)
          </p>
        </div>
      </div>
      {wineData.map((item, i) => (
        <div
          key={i}
          className="text-xs flex flex-row w-full gap-4 items-center justify-evenly"
        >
          <h3 className="">{item.title}</h3>

          <h3 className="">{item.origin}</h3>
          <p className="">{item.description}</p>
          <h4 className="t">{item.priceG}</h4>
          <h4 className="t">{item.priceB}</h4>
        </div>
      ))}
    </div>
  );
}
