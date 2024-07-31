// "use client";
import React from "react";

import "./style.css";
import { Metadata } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";

// export function generateMetadata() {
//   return {
//     title: "design",
//   };
// }

interface Image {
  src: string;
  link: string;
  text: string;
  image_scale?: number;
  image_width?: number;
  image_height?: number;
}

function Rect({ image }: { image: Image }): React.ReactNode {
  // const router = useRouter();
  image.image_scale = image.image_scale ? image.image_scale : 0.5;
  image.image_width = image.image_width ? image.image_width : 270;
  image.image_height = image.image_height ? image.image_height : 187;

  return (
    <>
      <div
        className="rect"
        // onClick={() => {
        //   // router.push(image.link);
        // }}
      >
        <Image src={image.src} alt={image.text} width={image.image_scale * image.image_width} height={image.image_scale * image.image_height} />
        <span>{image.text}</span>
      </div>
    </>
  );
}

const Design = () => {
  return (
    <>
      <div className="container">
        <Rect
          image={{
            src: "/youtube.svg",
            link: "https://youtube.com",
            text: "Youtube",
          }}
        />
        <Rect
          image={{
            src: "/twitter.svg",
            link: "https://x.com",
            text: "Twitter",
          }}
        />
      </div>
      <div className="flag">
        <div className="blue"></div>
        <div className="yellow"></div>
        <div className="red"></div>
      </div>
    </>
  );
};

export default Design;
