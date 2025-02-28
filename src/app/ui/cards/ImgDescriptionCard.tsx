import React from 'react'

import { interBold } from '@/app/ui/fonts'

import { coloursConfig } from '@/app/lib/utils'

interface ImgDescriptionCardProps {
  cardImgPath: string
  cardTitle: string
  cardDescription: string
  overlayColour: keyof typeof coloursConfig
  className?: string
  sectionRef?: any
}

const ImgDescriptionCard: React.FC<ImgDescriptionCardProps> = ({
  cardImgPath,
  cardTitle,
  cardDescription,
  overlayColour,
  className,
  sectionRef,
}) => {
  return (
    <div
      className={`${className} hero relative aspect-[9/16] items-end rounded-3xl sm:aspect-[4/3]`}
      style={{
        backgroundImage: `url(${cardImgPath})`,
      }}
      ref={sectionRef}
    >
      {/* <div className='absolute left-10 top-10 z-30 mb-10 text-8xl text-gray-300'>
        {cardTitle}
      </div> */}
      <div
        className={`hero-overlay rounded-3xl ${coloursConfig[overlayColour]} bg-opacity-70`}
      ></div>
      <div className='hero-content h-[100%] flex-col items-start justify-end p-[15%] text-left text-gray-100'>
        <div className={`${interBold.className} text-5xl`}>{cardTitle}</div>
        <div className='text-justify text-sm md:text-lg'>{cardDescription}</div>
      </div>
    </div>
  )
}

export default ImgDescriptionCard
