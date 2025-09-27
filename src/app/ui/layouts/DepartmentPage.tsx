'use client'

import { useInView } from 'react-intersection-observer'
import VideoHeader from '@/app/ui/departmentPageHeader/VideoHeader'
import ImgDescriptionCard from '@/app/ui/cards/ImgDescriptionCard'
import SocialsVideoCard from '@/app/ui/cards/SocialsVideoCard'
import BookingField from '@/app/ui/forms/BookingField'
import DownloadField from '@/app/ui/forms/DownloadField'
import VideoDescriptionCard from '@/app/ui/cards/VideoDescriptionCard'
import { pageData } from '@/app/lib/data'

type DepartmentPageProps = {
    pageData: typeof pageData[keyof typeof pageData]
}

export default function DepartmentPage({ pageData }: DepartmentPageProps) {
    // Create an array of refs and inView states for all cards + socials card
    const animationHooks = Array.from({ length: pageData.cards.length + 1 }).map(
        () =>
            useInView({
                triggerOnce: true,
                threshold: 0.1,
            }),
    )

    return (
        <>
            <VideoHeader
                headerVideoPath={pageData.header.videoPath}
                headerTitle={pageData.header.title}
                headerSubtitle={pageData.header.subtitle}
                overlayColor={pageData.header.overlayColor}
            />
            <main className='relative z-40 mx-auto mb-28 flex min-h-screen flex-col gap-28 p-12 lg:max-w-[1024px]'>
                <div className='flex flex-col gap-4'>
                    <DownloadField
                        color={pageData.download.color}
                        btnColour={pageData.download.btnColour}
                        downloadLink={pageData.download.link}
                    />
                    <BookingField
                        fieldTitle={pageData.booking.fieldTitle}
                        placeholder={pageData.booking.placeholder}
                        options={pageData.booking.options}
                        color={pageData.booking.color}
                        btnColour={pageData.booking.btnColour}
                    />
                </div>

                <div className='divider'></div>
                <div className='h-100% grid grid-cols-1 gap-24'>
                    {pageData.cards.map((card, index) => {
                        const { ref, inView } = animationHooks[index]
                        const animationClass =
                            index % 2 === 0 ? 'animate-fade-right' : 'animate-fade-left'

                        if (card.type === 'img') {
                            return (
                                <ImgDescriptionCard
                                    key={card.title}
                                    cardImgPath={card.path}
                                    cardTitle={card.title}
                                    cardDescription={card.description}
                                    overlayColour={card.overlayColour!}
                                    className={inView ? animationClass : 'opacity-0'}
                                    sectionRef={ref}
                                />
                            )
                        }
                        if (card.type === 'video') {
                            return (
                                <VideoDescriptionCard
                                    key={card.title}
                                    cardVideoPath={card.path}
                                    cardTitle={card.title}
                                    cardDescription={card.description}
                                    color={card.color!}
                                    className={inView ? animationClass : 'opacity-0'}
                                    sectionRef={ref}
                                />
                            )
                        }
                        return null
                    })}
                </div>

                <SocialsVideoCard
                    cardVideoPath={pageData.socials.videoPath}
                    cardTitle={pageData.socials.title}
                    cardDescription={pageData.socials.description}
                    instaLink={pageData.socials.instaLink}
                    className={
                        animationHooks[pageData.cards.length].inView
                            ? 'animate-fadeInSlideUp'
                            : 'opacity-0'
                    }
                    sectionRef={animationHooks[pageData.cards.length].ref}
                    color={pageData.socials.color}
                />
            </main>
        </>
    )
}