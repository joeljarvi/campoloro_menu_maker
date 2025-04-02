"use client";
import MenuSectionHeader from "./MenuSectionHeader";
import { useState } from "react";

export default function TipsSection({ title, menuData }) {
  // Separate states for each section
  const [selectedAperitif, setSelectedAperitif] = useState("");
  const [selectedAppetizer, setSelectedAppetizer] = useState("");
  const [selectedMain, setSelectedMain] = useState("");
  const [selectedDessert, setSelectedDessert] = useState("");

  const getOptions = (section) => {
    // Get the correct section from menuData based on the selected section
    return menuData[section] || [];
  };

  // Get description for selected item in the section
  const getDescription = (section, selectedItem) => {
    const selected = getOptions(section).find(
      (item) => item.title === selectedItem
    );
    return selected ? selected.description : "Please select an item.";
  };

  return (
    <div className="w-full pb-4 border-b">
      <div className="grid grid-cols-2  w-full  leading-snug pb-1.5 pt-3 ">
        <div className="flex flex-row items-center justify-start gap-4 border-b pb-1 col-span-2">
          <h1 className="uppercase pl-8 ">Campoloro Classics</h1>
        </div>
        <div className="col-start-1 col-span-1 flex items-center justify-center text-xs">
          <label>#1</label>
          <select
            value={selectedAperitif}
            onChange={(e) => setSelectedAperitif(e.target.value)}
            className="select placeholder border-none"
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
        <div className="col-start-2 col-span-1 flex items-center justify-center text-xs">
          <label>#2</label>
          <select
            value={selectedAppetizer}
            onChange={(e) => setSelectedAppetizer(e.target.value)}
            className="select placeholder border-none"
          >
            <option value="">Select Appetizer</option>
            {getOptions("appetizerMenu").map((item, index) => (
              <option key={index} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-start-1 col-span-1 flex items-center justify-center text-xs">
          <label>#3</label>
          <select
            value={selectedMain}
            onChange={(e) => setSelectedMain(e.target.value)}
            className="select placeholder border-none"
          >
            <option value="">Select Main</option>
            {getOptions("mainsMenu").map((item, index) => (
              <option key={index} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-start-2 col-span-1 flex items-center justify-center text-xs">
          <label>#4</label>
          <select
            value={selectedDessert}
            onChange={(e) => setSelectedDessert(e.target.value)}
            className="select  placeholder border-none"
          >
            <option value="">Select Dessert</option>
            {getOptions("dessertsMenu").map((item, index) => (
              <option key={index} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-start-1 col-span-1">
          {selectedMain && (
            <p className="text-xs pl-8">
              {getDescription("mainsMenu", selectedMain)}
            </p>
          )}
        </div>
        <div className="col-start-2 col-span-1">
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
