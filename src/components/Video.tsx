"use client"

import React from 'react'
import { IKVideo } from 'imagekitio-next'

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
type VideoTypes = {
    path: string;
    className: string
}

function Video({path, className}: VideoTypes) {
  return (
    <IKVideo
    path={path}
    className={className}
    urlEndpoint={urlEndpoint}
    transformation={[{ width:"1920", height:"1080" ,q:"90"},{ raw: "l-text,i-REACH,fs-100,l-end" }]}
    controls={true}
  />
  )
}

export default Video
