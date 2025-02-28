'use client'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'

import Image from 'next/image'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'

import DepartmentCard from './ui/cards/DepartmentCard'

export default function Page() {
  const { ref: sectionRef, inView: isSectionInView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Percentage of the section visible before triggering the animation
  })
  const targetSectionRef = useRef<HTMLDivElement>(null)

  const scrollToSection = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <main className='flex min-h-screen flex-col gap-32 p-6'>
      <div
        className='relative mx-auto flex h-[80vh] w-full animate-fade cursor-pointer flex-col justify-center overflow-hidden rounded-xl bg-[url("https://georgiiparla.github.io/mmxFront/public/photos/vrlady.webp")] bg-cover bg-center px-4 py-8 shadow-md'
        onClick={scrollToSection}
      >
        <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 from-50% to-transparent opacity-70'></div>
        <Image
          src='https://georgiiparla.github.io/mmxFront/public/mmxLogo.png'
          width={400}
          height={400}
          alt='logo'
          className='relative z-10 mx-auto'
        ></Image>

        <ChevronDoubleDownIcon className='absolute bottom-4 left-1/2 h-7 w-7 -translate-x-1/2 transform text-yellow-400' />
      </div>

      <div ref={targetSectionRef}>
        <div
          className={`container mx-auto mb-32 grid max-h-[1920px] grid-cols-1 gap-6 lg:max-w-[768px] xl:max-w-[1280px] xl:grid-cols-2 ${
            isSectionInView ? 'animate-fade' : 'opacity-0'
          }`}
          ref={sectionRef}
        >
          <DepartmentCard
            departmentLink='/battlemaxx'
            cardBgImagePath='https://georgiiparla.github.io/mmxFront/public/photos/bmxKid.webp'
            cardBgImagePathAlt='BattlemaxxImage'
            cardTitle='BATTLEMAXX'
            badges={[
              { badgeTitle: 'Outdoor LaserTag', badgeType: 'badge-warning' },
            ]}
          />
          <DepartmentCard
            departmentLink='/multimaxx-stjulians'
            cardBgImagePath='https://georgiiparla.github.io/mmxFront/public/photos/laserTeam.jpg'
            cardBgImagePathAlt='MultimaxxImage'
            cardTitle='MULTIMAXX ST. JULIANS'
            badges={[
              { badgeTitle: 'Arcade Machines', badgeType: 'badge-primary' },
              { badgeTitle: 'Indoor LaserTag', badgeType: 'badge-secondary' },
              { badgeTitle: 'Virtual Reality', badgeType: 'badge-accent' },
            ]}
          />
          <DepartmentCard
            departmentLink='/multimaxx-paola'
            cardBgImagePath='https://georgiiparla.github.io/mmxFront/public/photos/cmxLaserTag.jpg'
            cardBgImagePathAlt='CybermaxxImage'
            cardTitle='CYBERMAXX'
            badges={[
              { badgeTitle: 'Indoor LaserTag', badgeType: 'badge-secondary' },
            ]}
          />
          <DepartmentCard
            departmentLink='/multimaxx-qormi'
            cardBgImagePath='https://georgiiparla.github.io/mmxFront/public/photos/paviCars.jpg'
            cardBgImagePathAlt='MultimaxxQormiImage'
            cardTitle='MULTIMAXX QORMI'
            badges={[
              { badgeTitle: 'Arcade Machines', badgeType: 'badge-primary' },
              { badgeTitle: 'Bumping Cars', badgeType: 'badge-error' },
              { badgeTitle: 'Virtual Reality', badgeType: 'badge-accent' },
              { badgeTitle: 'Soft Play Area', badgeType: 'badge-outline' },
            ]}
          />
        </div>
      </div>
    </main>
  )
}
