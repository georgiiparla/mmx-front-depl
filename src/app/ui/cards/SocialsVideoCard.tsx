import React from 'react'
import { inter } from '@/app/ui/fonts'

import Link from 'next/link'

import { coloursConfig } from '@/app/lib/utils'

interface SocialsVideoCardProps {
  cardVideoPath: string
  cardTitle: string
  cardDescription: string
  instaLink: string
  color: keyof typeof coloursConfig
  className?: string
  sectionRef?: any
}

const SocialsVideoCard: React.FC<SocialsVideoCardProps> = ({
  cardVideoPath,
  cardTitle,
  cardDescription,
  instaLink,
  className,
  sectionRef,
  color,
}) => {
  return (
    <div
      className={`${className} hero rounded-2xl bg-base-200 ${coloursConfig[color]} text-white`}
      ref={sectionRef}
    >
      <div className='hero-content flex-col gap-10 p-12 md:flex-row'>
        <div className=''>
          <video
            className='z-1 h-full w-full rounded-2xl object-cover'
            autoPlay={true}
            muted={true}
            loop={true}
          >
            <source src={cardVideoPath} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className='w-[100%]'>
          <h1 className='text-xl font-bold sm:text-2xl xl:text-4xl'>
            {cardTitle}
          </h1>
          <p className='py-6 text-sm sm:text-lg'>{cardDescription}</p>
          <Link href={instaLink}>
            <button className='btn btn-outline btn-secondary btn-md'>
              <div className={`${inter.className} text-base`}>Instagram</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SocialsVideoCard
