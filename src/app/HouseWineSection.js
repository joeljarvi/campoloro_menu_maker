import MenuSectionHeader from "./MenuSectionHeader";
import { useState } from "react";

export default function HouseWineSection({ wineData, title }) {
  const [selectedHouseWine1, setSelectedHouseWine1] = useState("Clos Fornelli");

  const getOptions = (section) => {
    // Get the correct section from wineData based on the selected section
    return wineData[section] || [];
  };

  // Get description for selected item in the section
  const getDescription = (section, selectedItem) => {
    const selected = getOptions(section).find(
      (item) => item.title === selectedItem
    );
    return selected ? selected.description : "Please select an item.";
  };

  const selectedWine = getOptions("redMenu").find(
    (item) => item.title === selectedHouseWine1
  );

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

        <div className="grid grid-cols-12 gap-x-4 w-full text-xs leading-snug">
          <select
            value={selectedHouseWine1}
            onChange={(e) => setSelectedHouseWine1(e.target.value)}
            className=" placeholder border-none col-start-2 col-span-4"
          >
            <option value="">Red Wine</option>
            {getOptions("redMenu").map((item, index) => (
              <option key={index} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        {selectedWine && (
          <div className="grid grid-cols-12 gap-x-4 w-full  leading-snug">
            <p className="col-start-1 col-span-1 text-xs">
              {selectedWine.year}
            </p>
            <p className="col-start-1 col-span-1 text-xs">
              {selectedWine.origin}
            </p>
            <p className="col-start-1 col-span-1 text-xs">
              {selectedWine.origin}
            </p>

            <p className="col-start-11 text-xl">{selectedWine.priceG}</p>
          </div>
        )}

        {/* Render wine data for each item in redMenu */}
        {getOptions("redMenu").map((item, i) => (
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
