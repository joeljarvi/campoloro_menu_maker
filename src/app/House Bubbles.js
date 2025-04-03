"use client";
import { useState } from "react";
import MenuSectionHeader from "./MenuSectionHeader";

const WineDropdown = ({ wineData, selectedWine, setSelectedWine }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    setSelectedWine(item);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left">
        <div className="grid grid-cols-12 gap-x-4 text-xs pb-1.5">
          <strong className="col-start-1">{selectedWine.year}</strong>
          <strong className="col-span-4">{selectedWine.title}</strong>
          <strong className="col-start-6 col-span-2">
            {selectedWine.origin}
          </strong>
          <span className="col-start-8 col-span-3">
            {selectedWine.description}
          </span>
          <strong className="col-start-11 text-right">
            {selectedWine.priceG}
          </strong>
          <span className="col-start-12 text-right">{selectedWine.priceB}</span>
        </div>
      </button>

      {isOpen && (
        <ul className="absolute w-full bg-base-200 border-b max-h-40 overflow-y-auto z-10">
          {wineData.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className="py-2 cursor-pointer hover:bg-base-300"
            >
              <div className="grid grid-cols-12 gap-x-4 text-xs">
                <strong className="col-start-1">{item.year}</strong>
                <strong className="col-start-2 col-span-4">{item.title}</strong>
                <strong className="col-start-6 col-span-2">
                  {item.origin}
                </strong>
                <span className="col-start-8 col-span-3">
                  {item.description}
                </span>
                <strong className="col-start-11 col-span-1 text-right">
                  {item.priceG}
                </strong>
                <span className="col-start-12 col-span-1 text-right">
                  {item.priceB}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function HouseWineSection({ wineData, title }) {
  const [selectedWine1, setSelectedWine1] = useState;

  // Create an array of selected wines
  const selectedWines = [selectedWine1, selectedWine2, selectedWine3];

  // Filter the wineData to exclude selected wines
  const availableWines = wineData.filter(
    (wine) => !selectedWines.some((selectedWine) => selectedWine === wine)
  );

  return (
    <div>
      <div className="grid grid-cols-12 gap-x-4 w-full leading-tight items-center justify-center border-b pb-1.5 mb-2 pt-1">
        <div className="col-start-4 col-span-7">
          <MenuSectionHeader title={title} />
        </div>
        <p className="col-start-11 col-span-1 uppercase text-xs text-right">
          (G)
        </p>
        <p className="col-start-12 col-span-1 uppercase text-xs text-right">
          (B)
        </p>
      </div>

      {/* Use WineDropdown for each selection */}
      <WineDropdown
        wineData={wineData}
        selectedWine={selectedWine1}
        setSelectedWine={setSelectedWine1}
      />

      <div className="pb-2 border-b">
        {availableWines.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-12 gap-x-4 w-full text-xs leading-snug"
          >
            <h3 className="col-start-1 col-span-1">{item.year}</h3>
            <h3 className="col-start-2 col-span-4">{item.title}</h3>
            <h3 className="col-start-6 col-span-2">{item.origin}</h3>

            <p className="col-start-8 col-span-4">{item.description}</p>

            <p className="col-start-12 col-span-1 text-right">{item.priceB}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
