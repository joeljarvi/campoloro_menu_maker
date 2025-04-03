"use client";
import MenuSectionHeader from "./MenuSectionHeader";
import { useState } from "react";

export default function TipsSection({ title, menuData }) {
  const [selectedAperitif, setSelectedAperitif] = useState("");
  const [selectedAppetizer, setSelectedAppetizer] = useState("");
  const [selectedMain, setSelectedMain] = useState("");
  const [selectedDessert, setSelectedDessert] = useState("");

  const getOptions = (section) => {
    return menuData[section] || [];
  };

  const getDescription = (section, selectedItem) => {
    const selected = getOptions(section).find(
      (item) => item.title === selectedItem
    );
    return selected ? selected.description : "Please select an item.";
  };

  return (
    <div className="w-full mb-2">
      <div className="grid grid-cols-12  w-full  leading-snug border-b pb-1.5 pt-1 pl-8 ">
        <div className="col-start-1 col-span-3">
          <MenuSectionHeader title={title} />
        </div>
        <div className=" col-start-4 col-span-3">
          <MenuSectionHeader title={title} />
        </div>
        <div className="col-start-7 col-span-3">
          <MenuSectionHeader title={title} />
        </div>

        <div className="col-start-10 col-span-3">
          <MenuSectionHeader title={title} />
        </div>
      </div>

      <div className="grid grid-cols-12  w-full  leading-snug px- pt-2 pb-6 border-b ">
        <div className="col-start-1 col-span-6 flex items-center justify-center text-xs">
          <select
            value={selectedAperitif}
            onChange={(e) => setSelectedAperitif(e.target.value)}
            className="select select-sm placeholder border-none"
          >
            <option value="">Select Aperitif</option>
            {getOptions("aperitifMenu").map((item, index) => (
              <option key={index} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        {/* Appetizer Section */}
        <div className="col-start-7 col-span-6 flex items-center justify-center text-xs">
          <select
            value={selectedAppetizer}
            onChange={(e) => setSelectedAppetizer(e.target.value)}
            className="placeholder select select-sm border-none"
          >
            <option value="">Select Appetizer</option>
            {getOptions("appetizerMenu").map((item, index) => (
              <option key={index} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-start-1 col-span-6">
          {selectedAperitif && (
            <p className="text-xs pl-8">
              {getDescription("aperitifMenu", selectedAperitif)}
            </p>
          )}
        </div>
        <div className="col-start-7 col-span-6">
          {selectedAppetizer && (
            <p className="text-xs pl-8">
              {getDescription("appetizerMenu", selectedAppetizer)}
            </p>
          )}
        </div>
        <div className="col-start-1 col-span-6 flex items-center justify-center text-xs">
          <select
            value={selectedMain}
            onChange={(e) => setSelectedMain(e.target.value)}
            className="select select-sm placeholder border-none"
          >
            <option value="">Select Main</option>
            {getOptions("mainsMenu").map((item, index) => (
              <option key={index} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-start-7 col-span-6 flex items-center justify-center text-xs">
          <select
            value={selectedDessert}
            onChange={(e) => setSelectedDessert(e.target.value)}
            className="select select-sm placeholder border-none"
          >
            <option value="">Select Dessert</option>
            {getOptions("dessertsMenu").map((item, index) => (
              <option key={index} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-start-1 col-span-6">
          {selectedMain && (
            <p className="text-xs pl-8">
              {getDescription("mainsMenu", selectedMain)}
            </p>
          )}
        </div>
        <div className="col-start-7 col-span-6">
          {selectedDessert && (
            <p className="text-xs pl-8">
              {getDescription("dessertsMenu", selectedDessert)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
