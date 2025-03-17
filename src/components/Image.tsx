"use client";

import React from "react";

import { IKImage } from "imagekitio-next";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type ImageProps = {
  path: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

function Image({ path, width, height, alt, className, tr }: ImageProps) {
  return (
    <div>
      <IKImage
        urlEndpoint={urlEndpoint}
        path={path}
        width={width}
        height={height}
        alt={alt}
        className={className}
        lqip={{active:true, quality: 20}}
        {...(tr ? {transformation: [{width: `${width}`, height: `${height}`}]} : {width: width, height: height})}
      />
    </div>
  );
}

export default Image;
