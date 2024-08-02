import React, { useState } from 'react';
import Cards from './Cards';

function Forground() {
  const data = [
    {
      title: "Drag and Drop",
      description: "Drag and drop is a method of moving computer files.",
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
      description: "Drag and drop is a method of moving computer files.",
      filesize: "0.4MB",
      closedownload: false,
      tag: {
        isOpen: true,
        tagtitle: "Download Now",
        tagColor: "green"
      }
    },
    {
      title: "Vite.js",
      description: "Drag and drop is a method of moving computer files.",
      filesize: "0.3MB",
      closedownload: false,
      tag: {
        isOpen: true,
        tagtitle: "Download Now",
        tagColor: "green"
      }
    },
  ];

  useState();
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-screen p-5 flex flex-wrap gap-5">
      {/* <Cards/> */}
      {data.map((item, index) => (
        <Cards key={index} data={item} />
      ))}
    </div>
  );
}

export default Forground;
