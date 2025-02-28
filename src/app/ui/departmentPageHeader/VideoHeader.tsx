import React from 'react'
import { ChevronDoubleDownIcon } from '@heroicons/react/16/solid'
import { inter, fjala } from '@/app/ui/fonts'

import { coloursConfig } from '@/app/lib/utils'

interface VideoHeaderProps {
  headerVideoPath: string
  headerTitle: string
  headerSubtitle: string
  overlayColor: keyof typeof coloursConfig
}

const VideoHeader: React.FC<VideoHeaderProps> = ({
  headerVideoPath,
  headerTitle,
  headerSubtitle,
  overlayColor,
}) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-20 h-full ${coloursConfig[overlayColor]} opacity-60`}
      ></div>
      <video
        className='z-1 absolute left-0 top-0 h-full w-full object-cover'
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source src={headerVideoPath} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='absolute left-0 top-0 z-40 flex h-full w-full flex-col items-center justify-center'>
        <h2
          className={`animate-fadeInSlideUp text-wrap text-center text-7xl text-white md:text-8xl`}
        >
          <div className={`${fjala.className}`}>{headerTitle}</div>
        </h2>
        <h3
          className={`typewriter animate-fadeInSlideUp text-center text-2xl text-white sm:text-3xl md:text-4xl`}
        >
          <div className={`${inter.className} text`}>{headerSubtitle}</div>
        </h3>
      </div>
      <div className='relative z-20 flex h-[100vh] w-full flex-col items-center justify-center'></div>
    </>
  )
}

export default VideoHeader
