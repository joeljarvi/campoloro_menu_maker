"use client";
import MenuSectionHeader from "./MenuSectionHeader";

export default function DessertSection({ menuData, title }) {
  return (
    <div className="w-full pb-4 ">
      <div className="grid grid-cols-7 gap-x-8 w-full leading-tight items-center justify-center border-b pb-1.5 mb-2 pt-1">
        <div className="col-span-">
          <MenuSectionHeader title={title} />
        </div>

        <p
          className=" text-xs
       col-start-7 col-span-1"
        >
          (A)
        </p>
      </div>
      {menuData.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-7 gap-x-8 w-full text-xs leading-snug"
        >
          <h3 className="col-start-1 col-span-2">{item.title}</h3>
          <p className="col-start-3 col-span-4">{item.description}</p>
          <h4 className="col-start-7 col-span-1 text-right">{item.price}</h4>
        </div>
      ))}
    </div>
  );
}
