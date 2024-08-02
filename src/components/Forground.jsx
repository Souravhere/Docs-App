import React, { useRef, useState } from 'react';
import Cards from './Cards';


function Forground() {
  const ref = useRef(null);

  const data = [
    {
      title: "Drag and Drop",
      description: "Drag and drop functionality allows users to move items within an interface easily using a mouse or touch.",
      filesize: "0.9MB",
      closedownload: false,
      tag: {
        isOpen: true,
        tagtitle: "Download Now",
        tagColor: "green"
      }
    },
    {
      title: "UI and UX",
      description: "User Interface (UI) and User Experience (UX) design focus on creating intuitive and engaging digital interactions.",
      filesize: "0.4MB",
      closedownload: false,
      tag: {
        isOpen: true,
        tagtitle: "Download Now",
        tagColor: "red"
      }
    },
    {
      title: "Vite.js",
      description: " Vite.js is a fast, modern frontend build tool offering quick development and hot module replacement.",
      filesize: "0.3MB",
      closedownload: false,
      tag: {
        isOpen: true,
        tagtitle: "Download Now",
        tagColor: "blue"
      }
    },
  ];

  useState();
  return (
    <div ref={ref} className="fixed top-0 left-0 z-50 w-full h-screen p-5 flex flex-wrap gap-5">
      {/* <Cards/> */}
      {data.map((item, index) => (
        <Cards key={index} data={item} referamce={ref} />
      ))}
    </div>
  );
}

export default Forground;
