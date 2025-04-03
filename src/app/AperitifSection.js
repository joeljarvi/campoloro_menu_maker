"use client";
import MenuSectionHeader from "./MenuSectionHeader";

export default function AperitifSection({ menuData, title }) {
  return (
    <div className="w-full pb-4 border-b">
      <div className="grid grid-cols-12 gap-x-4 w-full leading-tight items-center justify-center border-b pb-1.5 mb-2 pt-1">
        <div className="-ml-8 col-start-4">
          <MenuSectionHeader title={title} />
        </div>
      </div>

      {menuData.map((item, i) => (
        <div key={i} className="col-start-1 col-span-12">
          <div className="grid grid-cols-12 text-xs gap-x-8">
            {/* Title */}
            <h3 className="col-start-1 col-span-3">{item.title}</h3>
            {/* Description */}
            <p className="col-start-4 col-span-6">{item.description}</p>
            {/* Price */}
            <h4 className="col-start-12">{item.price}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
