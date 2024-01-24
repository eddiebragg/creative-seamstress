"use client";

import {
  Tab,
  Tabs,
  TabsHeader,
  Typography
} from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";


const EVENT_CONTENT = [
  {
    title: "Dress Alterations",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque arcu, scelerisque ac velit in, dapibus tincidunt lorem. ",
    img: "/image/dress.jpg",
  },
  {
    title: "Clothing Repairs",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque arcu, scelerisque ac velit in, dapibus tincidunt lorem. ",
    img: "/image/repair.jpg",
  },
  {
    title: "General Alterations",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque arcu, scelerisque ac velit in, dapibus tincidunt lorem. ",
    name: "Marcell Glock",
    position: "Chief Executive, Spotify",
    panel: "",
    img: "/image/zip.jpg",
  },
  {
    title: "Seaonsal Workshops",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque arcu, scelerisque ac velit in, dapibus tincidunt lorem. ",
    img: "/image/workshop.jpg",
  },
];

export function EventContent() {
  return (
    <section id="services" className="py-8 px-8 lg:py-20 bg-gray-100">
      <div className="mx-auto container">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
