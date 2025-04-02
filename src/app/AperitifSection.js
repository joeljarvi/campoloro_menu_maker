"use client";
import MenuSectionHeader from "./MenuSectionHeader";

export default function AperitifSection({ menuData, title }) {
  return (
    <div className="w-full pb-4 border-b">
      <div className="grid grid-cols-12 gap-x-4 w-full leading-tight items-center justify-center border-b pb-1.5 mb-2 pt-1">
        <div className="col-span-12">
          <MenuSectionHeader title={title} />
        </div>
      </div>

      {/* Grid for two-column layout */}
      <div className="grid grid-cols-12 gap-x-8 w-full text-xs leading-snug">
        {/* Loop over the items and display them in a two-column grid */}
        {menuData.map((item, i) => (
          <div key={i} className="col-start-1 col-span-12">
            <div className="flex flex-row text-xs gap-x-8 justify-between items-start">
              {/* Title */}
              <h3 className="">{item.title}</h3>
              {/* Description */}
              <p className="">{item.description}</p>
              {/* Price */}
              <h4 className="">{item.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
