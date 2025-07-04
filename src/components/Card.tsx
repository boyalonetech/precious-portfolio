import React from "react";
import Image from "next/image";

const Card = () => {
  const projects = [
    {
      id: 1,
      title: "Spotify Streaming History Analysis",
      description:
        "This project analyzes Spotify listening history  on how  tracks  and albums are played over time, uncovering trends in listening habits across days, weeks, months, and specific times of day.",
      link: "#",
      subtotal: "Tool Used: Power BI",
      image: "/Frame 17.png",
    },
    {
      id: 2,
      title: "Adidas Sale Analysis",
      description:
        "This Project uncovers key areas for growth and improve overall business performance across product categories, regions and sales channels.",
      link: "#",
      subtotal: "Tool Used: Power BI",
      image: "/Frame 18 (1).png",
    },
    {
      id: 3,
      title: "Ride Sharing Performances and Customer Experience Analysis",
      description:
        "The problem statement outlines a plan to optimize a ride sharing platform's performance and enhance the customer experience through data driven insights",
      link: "#",
      subtotal: "Tool Used: Microsoft Excel",
      image: "/Frame 19 (1).png",
    },
    {
      id: 4,
      title: "Household Food Consumption & price Trend Analysis in Nigeria",
      description:
        "To analyze household food item trends across Nigeria from October 2023 through 2024. The project uncovers seasonal patterns, price changes, consumption behaviors, and regional disparities.",
      link: "#",
      subtotal: "Tool Used: Microsoft Excel",
      image: "/Frame 20.png",
    },
    {
      id: 5,
      title: "Spotify Streaming History Analysis",
      description:
        "This project analyzes Spotify listening history  on how  tracks  and albums are played over time, uncovering trends in listening habits across days, weeks, months, and specific times of day.",
      link: "#",
      subtotal: "Tool Used: Microsoft Excel",
      image: "/Frame 17 (1).png",
    },
    {
      id: 6,
      title: "Adidas Sale Analysis",
      description:
        "This Project uncovers key areas for growth and improve overall business performance across product categories, regions and sales channels",
      link: "#",
      subtotal: "Tool Used: Microsoft Excel",
      image: "/Frame 18 (1).png",
    },
  ];

  return (
    <div className="px-4 py-8 bg-[#004246] min-h-screen" id="projects">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project: any) => (
            <div
              key={project.id}
              className="bg-[#2F3333] rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
              style={{ minHeight: "150px" }}
            >
              {/* Image Section */}
              <div className="relative w-full h-68">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between flex-1 p-5">
                <div>
                  <h2 className="text-xl font-semibold text-[#01DBEA] mb-2">
                    {project.title}
                  </h2>
                  <p className="text-white mb-4 text-sm">
                    {project.description}
                  </p>
                  <p className="text-white text-sm">{project.subtotal}</p>
                </div>

                {/* Button Section */}
                <div className="mt-4">
                  <a
                    href={project.link}
                    className="inline-block text-[#67E9F2] border border-[#67E9F2] p-2 px-4 rounded-2xl hover:bg-[#67E9F2] hover:text-[#004246] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
