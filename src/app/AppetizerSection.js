"use client";
import MenuSectionHeader from "./MenuSectionHeader";

export default function MenuSection({ menuData, title }) {
  return (
    <div className="w-full pb-4 border-b">
      <div className="grid grid-cols-12 gap-x-4 w-full leading-tight items-center justify-center border-b pb-1.5 mb-2 pt-1">
        <p className="uppercase text-xs col-start-1">(T)</p>

        <div className="col-start-4">
          <MenuSectionHeader title={title} />
        </div>

        <p
          className=" text-xs
       col-start-9"
        >
          (gluten/mm.)
        </p>
        <p
          className="text-xs
       col-start-11 text-right"
        >
          (dela)
        </p>
        <p
          className="uppercase text-xs
       col-start-12 text-right"
        >
          (KR)
        </p>
      </div>
      {menuData.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-12 gap-x-8 w-full text-xs leading-snug"
        >
          <h3 className="col-start-1 col-span-3">{item.title}</h3>

          <p className="col-start-4 col-span-6">{item.description}</p>
          <p className="col-start-10 col-span-1">{item.allergies}</p>
          <p className="col-start-11 col-span-1">{item.size}</p>
          <h4 className="col-start-12 col-span-1 text-right">{item.price}</h4>
        </div>
      ))}
    </div>
  );
}
