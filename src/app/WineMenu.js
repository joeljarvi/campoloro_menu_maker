"use client";
import { useState } from "react";
import WineSection from "./WineSection";
import BubbleSection from "./BubbleSection";
import HouseWineSection from "./HouseWineSection";

import SpiritsSection from "./SpiritsSection";

export default function WineMenu() {
  const [menuData, setMenuData] = useState({
    aperitifMenu: [
      { title: "Cap Corse", description: "Korsikansk vermouth", price: 120 },
      { title: "Pastis Ricard", description: "3 cl", price: 100 },
      {
        title: "Corsicano",
        description: "Cap Corse, Clementinelikör, Gin Mattei",
        price: 155,
      },
      {
        title: "Negroni Corsu",
        description: "Campari, Gin Mattei, Cap Corse Rouge",
        price: 150,
      },
      {
        title: "Negroni Sbagliato",
        description: "Cap Corse Rouge, Campari, Crémant de Bordeaux",
        price: 145,
      },
      {
        title: "Hugo",
        description: "Crémant de Bordeaux, St Germain",
        price: 145,
      },
      {
        title: "Padrinu",
        description: "PM, Kastanjelikör",
        price: 145,
      },
    ],
    appetizerMenu: [
      {
        title: "La Petite Salade",
        description: "Mixsallad med Campoloros dressing",
        price: 65,
      },
      {
        title: "Crustinu a la Bastiaise",
        description:
          "Grillat bröd med tomat, sardeller, vitlök, persilja och olivolja",
        price: 175,
      },
      {
        title: "Crustinu Alesani",
        description:
          "Grillat bröd med tomat, sardeller, vitlök, persilja och olivolja",
        price: 175,
      },
      {
        title: "Rolandu",
        description: "Oliver och tome corse (korsikansk lagrad fårost)",
        price: 85,
      },
      {
        title: "Charcuteries",
        description: "Prizuttu, Coppa, Salami",
        price: 145,
      },
      {
        title: "A Fileta",
        description: "Fårost från Korsika med fikonmarmelad",
        price: 95,
      },
    ],
    mainsMenu: [
      {
        title: "A La Puttanesca Deluxe",
        description:
          "Mezze Manica (pasta) med scampi, havsaborre, oliver, kapris, sardeller, tomatsås, chili, persilja",
        price: 265,
      },
      {
        title: "Augusta",
        description:
          "Spaghetti med kronärtskockor, fårostsås, konfiterade tomater, babyspenat, tryffelolja, parmigiano",
        price: 265,
      },
      {
        title: "Gambas Campoloro",
        description:
          "Viltfångade räkor flamberade med Pernod, vitlök, persilja, tomat och smör",
        price: 285,
      },
      {
        title: "Magret De Canard Aux Figues",
        description:
          "Ankbröst med fikonsås (franskt kött). Serveras med potatisgratäng (utan grädde) och grönsallad",
        price: 320,
      },
    ],
    dessertsMenu: [
      {
        title: "Profiterole Au Chocolat",
        description: "Petit chou fylld med vaniljglass och hemlagad chokladsås",
        price: 135,
      },
      {
        title: "Delice De La Castaniccia",
        description:
          "Kastanjekaka med choklad, mandelmjöl, kastanjelikör, mascarpone créme",
        price: 109,
      },
      { title: "Chez Marie", description: "Korsikansk citronkaka", price: 109 },
      {
        title: "Coupe Mavela",
        description: "Citronsorbet, Korsikansk Limoncello",
        price: 95,
      },
      {
        title: "Praline Du Campoloro",
        description: "Hemlagad chokladpralin",
        price: 45,
      },
      {
        title: "Affogatto Al Caffé",
        description: "Vaniljglass med chokladsås, espresso",
        price: 78,
      },
      {
        title: "Café Coretto",
        description:
          "Chokladpralin, enkel espresso och 2cl Grappa, Calvados, eller Cognac",
        price: 100,
      },
    ],
    hotDrinksMenu: [
      {
        title: "Korsikansk Coffee",
        description: "PM, Espresso, Lättvispad grädde",
        price: 130,
      },
      { title: "Espresso", description: "", price: 35 },
      {
        title: "Dubbel Espresso",
        description: "",
        price: 45,
      },
      {
        title: "Americano",
        description: "",
        price: 35,
      },
      {
        title: "Verbena",
        description: "Korsikanskt Verbena Örtte EKO",
        price: 59,
      },
      {
        title: "Te",
        description: "Earl Grey",
        price: 45,
      },
    ],
    drinksMenu: [
      {
        title: "Pietra",
        description: "Korsikansk Kastanjeöl 33cl 6%",
        price: 99,
      },
      {
        title: "Pietra IPA",
        description: "Korsikansk IPA 33cl 6%",
        price: 99,
      },
      {
        title: "Spaten",
        description: "Lageröl från München 50cl 5,1%",
        price: 89,
      },
      {
        title: "Warsteiner",
        description: "Pils, Tyskland 33cl",
        price: 75,
      },
      {
        title: "Galipette",
        description: "Cider från Frankrike 33cl 4,5%",
        price: 89,
      },
      {
        title: "Galipette Alkoholfri",
        description: "Alkoholfri Cider från Frankrike 33cl",
        price: 69,
      },
      {
        title: "Relinda Äppelmust",
        description: "Äppelmust från Köping SE-EKO",
        price: 69,
      },
      {
        title: "Rålund",
        description: "Alkoholfri kallpressad 100% blåbär 37,5cl",
        price: 179,
      },
      {
        title: "Läsk",
        description: "Cola, Cola Zero, Mineralvatten",
        price: 49,
      },
    ],
  });
  const [wineData, setWineData] = useState({
    bubbleMenu: [
      {
        year: "",
        origin: "Frankrike",
        title: "Albert Doulet Grande Reserve",
        description: "Crémant de Limoux",
        priceG: 120,
        priceB: 695,
      },
      {
        year: "",
        origin: "Frankrike",
        title: "Bulle Ton Body",
        description: "Jura, EKO",
        priceG: "",
        priceB: 785,
      },
      {
        year: "",
        origin: "Frankrike",
        title: "Champagne Delahaie",
        description: "Frankrike",
        priceG: "",
        priceB: 985,
      },
    ],
    whiteMenu: [
      {
        year: "2022",
        origin: "Korsika",
        title: "Chiosu Fornelli",
        description: "Biancu Gentile",
        priceG: 150,
        priceB: 675,
      },
      {
        year: "2022",
        origin: "Frankrike, Loire",
        title: "Sancerre Terre de Maimbray",
        description: "Sauvignon Blanc",
        priceG: 160,
        priceB: 750,
      },
      {
        year: "2023",
        origin: "Korsika",
        title: "Clos Columbo Calvi",
        description: "Vermentinu",
        priceG: 160,
        priceB: 750,
      },
      {
        year: "2022",
        origin: "Spanien, Galicia",
        title: "Fefinanes",
        description: "Albarinho",
        priceG: "",
        priceB: 765,
      },
      {
        year: "2023",
        origin: "Frankrike, Bourgogne",
        title: "Domaine Guyot Pouilly Fussé",
        description: "Chardonnay",
        priceG: "",
        priceB: 775,
      },
    ],
    redMenu: [
      {
        year: "2023",
        origin: "Korsika",
        title: "Clos Fornelli",
        description: "Niellucciu, Sciacarellu",
        priceG: 140,
        priceB: 625,
      },
      {
        year: "2022",
        origin: "Korsika",
        title: "Robe D' Ange",
        description: "Sciacarellu",
        priceG: 150,
        priceB: 675,
      },
      {
        year: "2023",
        origin: "Korsika",
        title: "Domaine Fiumicicoli EKO",
        description: "Niellucciu, Sciacarellu, Carcaghjolu, Minestellu",
        priceG: 165,
        priceB: 795,
      },
      {
        year: "2022",
        origin: "Frankrike",
        title: "Sablet Cotes du Rhone EKO",
        description: "Grenache, Syrah",
        priceG: "",
        priceB: 625,
      },
      {
        year: "2023",
        origin: "Korsika",
        title: "Clos Columbo Calvi EKO",
        description: "Niellucciu, Syrah",
        priceG: 165,
        priceB: 795,
      },
      {
        year: "2022",
        origin: "Korsika",
        title: "Tranoi Patrimonio EKO",
        description: "Niellucciu, Grenache",
        priceG: "",
        priceB: 795,
      },
      {
        year: "2023",
        origin: "Frankrike",
        title: "Sancerre Terre De Maimbray Loire",
        description: "Pinot Noir",
        priceG: "",
        priceB: 795,
      },
      {
        year: "2021",
        origin: "Korsika",
        title: "Oriu, Porto-Vecchio",
        description: "Niellucciu, Sciacarellu",
        priceG: "",
        priceB: 795,
      },
      {
        year: "2020",
        origin: "Korsika",
        title: "Comte Peraldi Ajaccio",
        description: "Niellucciu, Sciacarellu, Carignan",
        priceG: "",
        priceB: 865,
      },
      {
        year: "2020",
        origin: "Korsika",
        title: "Ribbe Rosse Calvi EKO",
        description: "Niellucciu, Sciacarellu",
        priceG: "",
        priceB: 865,
      },
      {
        year: "2013",
        origin: "Italien",
        title: "Aurelio Settimo Barolo Piemonte",
        description: "Nebbiolo",
        priceG: "",
        priceB: 1125,
      },
      {
        year: "2021",
        origin: "Frankrike",
        title: "Clos Des Grives Crozez-Hermitage",
        description: "Syrah",
        priceG: "",
        priceB: 1250,
      },
    ],
  });

  const [spiritsData, setSpiritsData] = useState([
    {
      title: "Mirto",
      description: "Korsikansk Myrtenbär likör",
      price: 35,
    },
    {
      title: "Staibano",
      description: "Limoncello",
      price: 30,
    },
    {
      title: "Braastad",
      description: "Cognac",
      price: 30,
    },
    {
      title: "Remy Martin VSOP",
      description: "Cognac",
      price: 45,
    },
    {
      title: "Chateau Du Breuil",
      description: "Calvados",
      price: 30,
    },
    {
      title: "La Ribaude",
      description: "Calvados 8 Ans D Age",
      price: 40,
    },
    {
      title: "Grappa Gubben",
      description: "Calvados 8 Ans D Age",
      price: 30,
    },
    {
      title: "Grappa Di Barbaresco Superiore",
      description: "Calvados 8 Ans D Age",
      price: 45,
    },
    {
      title: "Diplomatico",
      description: "Rom",
      price: 45,
    },
    {
      title: "Poire Williams",
      description: "Eau De Vie",
      price: 40,
    },
    {
      title: "Arette",
      description: "Tequila",
      price: 40,
    },
    {
      title: "Jameson",
      description: "Whiskey",
      price: 35,
    },
    {
      title: "Oban 14",
      description: "Whisky",
      price: 45,
    },
    {
      title: "Macallan 12",
      description: "Whisky",
      price: 40,
    },
    {
      title: "Jura 12",
      description: "Whisky",
      price: 40,
    },
    {
      title: "PM",
      description: "Korsikansk Single Malt Whisky",
      price: 40,
    },
  ]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div id="a41" className="w-[744.375px] h-[1052.8125px] bg-white">
        <div className="grid grid-cols-12 gap-x-8 p-8  ">
          <div className="col-start-1 col-span-12 border-t">
            <BubbleSection title="BUBBLES" wineData={wineData.bubbleMenu} />
            <WineSection title="White Wines" wineData={wineData.whiteMenu} />

            <WineSection title="Red Wines" wineData={wineData.redMenu} />
          </div>
          <div className="col-start-1 col-span-12 border-b">
            <SpiritsSection title="sprit" spiritsData={spiritsData} />
          </div>
          <h3 className="col-start-1 col-span-12 mt-4 text-center">3 / 3</h3>
        </div>
      </div>
      {/* <div id="a41" className="w-[744.375px] h-[1052.8125px] bg-white">
        <div className="grid grid-cols-12 gap-x-8 p-8  ">
          <div className="col-start-1 col-span-12 border-t">
            <HouseWineSection wineData={wineData} />
          </div>
          <div className="col-start-1 col-span-12 border-b"></div>
          <h3 className="col-start-1 col-span-12 mt-4 text-center">3 / 3</h3>
        </div>
      </div> */}
    </div>
  );
}
