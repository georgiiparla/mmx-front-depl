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
                className='relative mx-auto flex h-[80vh] w-full animate-fade cursor-pointer flex-col justify-center overflow-hidden rounded-xl bg-[url("/media/photos/vrlady.png")] bg-cover bg-center px-4 py-8 shadow-md'
                onClick={scrollToSection}
            >
                <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 from-50% to-transparent opacity-70'></div>
                <Image
                    src='/media/mmxLogo.png'
                    width={600}
                    height={600}
                    alt='logo'
                    className='relative z-10 mx-auto'
                ></Image>

                <ChevronDoubleDownIcon className='absolute bottom-4 left-1/2 h-7 w-7 -translate-x-1/2 transform text-yellow-400' />
            </div>

            <div ref={targetSectionRef}>
                <div
                    className={`container mx-auto mb-32 grid max-h-[1920px] grid-cols-1 gap-6 lg:max-w-[768px] xl:max-w-[1280px] xl:grid-cols-2 ${isSectionInView ? 'animate-fade' : 'opacity-0'
                        }`}
                    ref={sectionRef}
                >
                    <DepartmentCard
                        departmentLink='/action-zone'
                        cardBgImagePath='/media/photos/ol_m.png'
                        cardBgImagePathAlt='BattlemaxxImage'
                        cardTitle='ACTION-ZONE'
                        badges={[
                            { badgeTitle: 'Outdoor LaserTag', badgeType: 'badge-warning' },
                        ]}
                    />
                    <DepartmentCard
                        departmentLink='/funplex-west'
                        cardBgImagePath='/media/photos/il_m.png'
                        cardBgImagePathAlt='MultimaxxImage'
                        cardTitle='FUN-PLEX WEST'
                        badges={[
                            { badgeTitle: 'Arcade Machines', badgeType: 'badge-primary' },
                            { badgeTitle: 'Indoor LaserTag', badgeType: 'badge-secondary' },
                            { badgeTitle: 'Virtual Reality', badgeType: 'badge-accent' },
                        ]}
                    />
                    <DepartmentCard
                        departmentLink='/cyber-zone'
                        cardBgImagePath='/media/photos/ls_family.png'
                        cardBgImagePathAlt='CybermaxxImage'
                        cardTitle='CYBER-ZONE'
                        badges={[
                            { badgeTitle: 'Indoor LaserTag', badgeType: 'badge-secondary' },
                        ]}
                    />
                    <DepartmentCard
                        departmentLink='/funplex-north'
                        cardBgImagePath='/media/photos/paviCars.jpg'
                        cardBgImagePathAlt='MultimaxxQormiImage'
                        cardTitle='FUN-PLEX NORTH'
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
