"use client";


import ContentCard from "@/components/content-card";


const SERVICE_CONTENT = [
  {
    title: "Dress Alterations",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque arcu, scelerisque ac velit in, dapibus tincidunt lorem. ",
    img: "/image/dress.jpg",
    alt: "Dress Alterations",
  },
  {
    title: "Clothing Repairs",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque arcu, scelerisque ac velit in, dapibus tincidunt lorem. ",
    img: "/image/repair.jpg",
    alt: "Clothing Repairs",
  },
  {
    title: "General Alterations",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque arcu, scelerisque ac velit in, dapibus tincidunt lorem. ",
    img: "/image/zip.jpg",
    alt: "General Alterations",
  },
  {
    title: "Seaonsal Workshops",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque arcu, scelerisque ac velit in, dapibus tincidunt lorem. ",
    img: "/image/workshop.jpg",
    alt: "Workshops",
  },
];

export function Services() {
  return (
    <section id="services" className="py-8 px-8 lg:py-20 bg-gray-100">
      <div className="mx-auto container">
        {SERVICE_CONTENT.map((props, idx) => (
          <ContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Services;
