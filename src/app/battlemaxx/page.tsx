'use client'

import { useInView } from 'react-intersection-observer'

import VideoHeader from '../ui/departmentPageHeader/VideoHeader'
import ImgDescriptionCard from '../ui/cards/ImgDescriptionCard'
import SocialsVideoCard from '../ui/cards/SocialsVideoCard'
import BookingField from '@/app/ui/forms/BookingField'
import DownloadField from '../ui/forms/DownloadField'

export default function Page() {
  const { ref: sectionRef, inView: isSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { ref: sectionRef2, inView: isSectionInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { ref: sectionRef3, inView: isSectionInView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { ref: sectionRef4, inView: isSectionInView4 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { ref: sectionRef5, inView: isSectionInView5 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <>
      <VideoHeader
        headerVideoPath='https://georgiiparla.github.io/mmxFront/public/photos/BATTLEMAXX.mp4'
        headerTitle='BATTLEMAXX'
        headerSubtitle='#1 outdoor laser tag in Malta'
        overlayColor='emerald'
      />
      <main className='relative z-40 mx-auto mb-28 flex min-h-screen flex-col gap-28 p-12 lg:max-w-[1024px]'>
        <div className='flex flex-col gap-4'>
          <DownloadField
            color='emerald'
            btnColour='accent'
            downloadLink='https://georgiiparla.github.io/mmxFront/public/bayStreetOffers.pdf'
          />
          <BookingField
            fieldTitle='Choose your option to start booking process'
            placeholder='Pick one'
            options={[
              'Kordin Prison 2 hours - €300 (minimum 10 players, €30 p/p)',
              'Kordin Prison 3 hours - €400 (minimum 10 players, €40 p/p)',
              'Ghaxaq Grounds 2 hours - €300 (minimum 10 players, €30 p/p)',
              'Ghaxaq Grounds 3 hours - €400 (minimum 10 players, €40 p/p)',
            ]}
            color='emerald'
            btnColour='accent'
          />
        </div>

        <div className='divider'></div>
        <div className='h-100% grid grid-cols-1 gap-24'>
          <ImgDescriptionCard
            cardImgPath='https://georgiiparla.github.io/mmxFront/public/photos/bmxBro.jpg'
            cardTitle='About Us'
            cardDescription={`Welcome to BATTLEMAXX, Malta's premier laser tag experience! Get ready for an action-packed adventure like no other. Gather your friends and family for a day of exhilarating fun and safe entertainment that you won’t forget. At BATTLEMAXX, we promise to deliver one of the most unforgettable experiences of your life.`}
            className={isSectionInView ? 'animate-fade-right' : 'opacity-0'}
            sectionRef={sectionRef}
            overlayColour='emerald'
          />

          <ImgDescriptionCard
            cardImgPath='https://georgiiparla.github.io/mmxFront/public/photos/bmxBro2.jpg'
            cardTitle='Huge armoury'
            cardDescription={`Our armoury includes over 200 guns, offering the latest high-tech equipment for your use. We provide a variety of thrilling playgrounds and locations, ensuring a fantastic experience whether you’re spending time with friends, hosting a team-building event, or planning a memorable kids' party.`}
            className={isSectionInView2 ? 'animate-fade-left' : 'opacity-0'}
            sectionRef={sectionRef2}
            overlayColour='emerald'
          />

          <ImgDescriptionCard
            cardImgPath='https://georgiiparla.github.io/mmxFront/public/photos/bmxBro3.jpg'
            cardTitle='Variety of Mods'
            cardDescription={`Our laser tag experience offers a variety of exciting game modes to keep the action fresh and thrilling. You can engage in classic modes like Capture the Towers or strategize with your team in Team Deathmatch. For those who love tactical challenges, try Plant the Bomb and more! Each mode provides a unique way to test your skills and teamwork.`}
            className={isSectionInView4 ? 'animate-fade-right' : 'opacity-0'}
            sectionRef={sectionRef4}
            overlayColour='emerald'
          />

          <ImgDescriptionCard
            cardImgPath='https://georgiiparla.github.io/mmxFront/public/photos/stats.png'
            cardTitle='Detailed statistics'
            cardDescription={`After each game, you'll receive personalized statistics that track your performance. From accuracy and total hits to eliminations and objective completions, you’ll get a detailed breakdown of your gameplay. These stats help you monitor your progress, improve your skills, and compete with friends to see who comes out on top!`}
            className={isSectionInView5 ? 'animate-fade-left' : 'opacity-0'}
            sectionRef={sectionRef5}
            overlayColour='emerald'
          />
        </div>

        <SocialsVideoCard
          cardVideoPath='https://georgiiparla.github.io/mmxFront/public/photos/bmxGozo.mp4'
          cardTitle='Visit our Socials'
          cardDescription="We highly recommend checking out our social media channels. Stay updated with exclusive flash offers that you won’t want to miss, watch thrilling gameplay videos to see the action in real time, and browse through stunning venue photos to get a feel for the atmosphere. Whether you're planning a visit or just curious, our socials are the perfect way to stay connected and get all the information you need!"
          instaLink='https://www.instagram.com/multimaxxmalta/'
          className={isSectionInView3 ? 'animate-fadeInSlideUp' : 'opacity-0'}
          sectionRef={sectionRef3}
          color='emerald'
        />
      </main>
    </>
  )
}