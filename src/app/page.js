"use client";

import MainMenu from "./MainMenu";
import WineMenu from "./WineMenu";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start p-4 gap-4 bg-blue-700">
      <MainMenu />
      <WineMenu />
    </div>
  );
}
