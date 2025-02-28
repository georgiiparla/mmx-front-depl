import React from 'react'

import { interBold } from '@/app/ui/fonts'

import { coloursConfig } from '@/app/lib/utils'

interface VideoDescriptionCardProps {
  cardVideoPath: string
  cardTitle: string
  cardDescription: string
  color: keyof typeof coloursConfig
  className?: string
  sectionRef?: any
}

const VideoDescriptionCard: React.FC<VideoDescriptionCardProps> = ({
  cardVideoPath,
  cardTitle,
  cardDescription,
  className,
  sectionRef,
  color,
}) => {
  return (
    <div
      className={`${className} hero relative aspect-[9/16] items-end rounded-3xl sm:aspect-[4/3]`}
      style={{
        backgroundImage: `url(${cardVideoPath})`,
      }}
      ref={sectionRef}
    >
      <video
        className='absolute left-0 top-0 z-10 h-full w-full rounded-3xl object-cover'
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source src={cardVideoPath} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      {/* <div className='absolute left-10 top-10 z-30 mb-10 text-8xl text-gray-300'>
      {cardTitle}
    </div> */}
      <div
        className={`hero-overlay z-20 rounded-3xl ${coloursConfig[color]} bg-opacity-70`}
      ></div>
      <div className='hero-content z-30 h-[100%] flex-col items-start justify-end p-[15%] text-left text-gray-100'>
        <div className={`${interBold.className} text-5xl`}>{cardTitle}</div>
        <div className='text-justify text-sm md:text-base'>
          {cardDescription}
        </div>
      </div>
    </div>
  )
}

export default VideoDescriptionCard
