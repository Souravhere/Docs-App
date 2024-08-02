import React, { useState } from 'react';
import Cards from './Cards';

function Forground() {
  const data = [
    {
      title: "Drag and Drop 2",
      description: "Drag and drop is a method of moving computer files.",
      filesize: "0.9MB",
      closedownload: false,
      tagdetails: {
        isOpen: true,
        tagtitle: "Download Now",
        tagColor: "green"
      }
    },
  ];

  useState();
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full p-5">
      {/* <Cards/> */}
      {data.map((item, index) => (
        <Cards key={index} data={item} />
      ))}
    </div>
  );
}

export default Forground;
