"use client";
import HouseWineSection from "./HouseWineSection";
import MenuSectionHeader from "./MenuSectionHeader";

export default function WineSection({ wineData, title }) {
  return (
    <>
      <div className="pb-4 border-b">
        <div className="grid grid-cols-12 gap-x-4 w-full leading-tight items-center justify-center border-b pb-1.5 mb-2 pt-1 px-4">
          <p className="col-span-1 uppercase text-xs">(Y)</p>
          <div className="col-span-7">
            <MenuSectionHeader title={title} />
          </div>

          <p className="col-start-11 col-span-1 uppercase text-xs ">(glass)</p>
          <p className="col-start-12 col-span-1 uppercase text-xs ">(bottle)</p>
        </div>

        {wineData.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-12 gap-x-4 w-full text-xs leading-snug"
          >
            <h3 className="col-start-1 col-span-1">{item.year}</h3>
            <h3 className="col-start-2 col-span-4">{item.title}</h3>
            <h3 className="col-start-6 col-span-2">{item.origin}</h3>

            <p className="col-start-8 col-span-3">{item.description}</p>

            <h4 className="col-start-11 col-span-1 ">{item.priceG}</h4>
            <h4 className="col-start-12 col-span-1">{item.priceB}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
