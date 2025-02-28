'use client'

import { useInView } from 'react-intersection-observer'

import VideoHeader from '../ui/departmentPageHeader/VideoHeader'
import ImgDescriptionCard from '../ui/cards/ImgDescriptionCard'
import SocialsVideoCard from '../ui/cards/SocialsVideoCard'
import BookingField from '../ui/forms/BookingField'
import DownloadField from '../ui/forms/DownloadField'

export default function Page() {
  const { ref: sectionRef, inView: isSectionInView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Percentage of the section visible before triggering the animation
  })
  const { ref: sectionRef2, inView: isSectionInView2 } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Percentage of the section visible before triggering the animation
  })
  const { ref: sectionRef3, inView: isSectionInView3 } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Percentage of the section visible before triggering the animation
  })
  const { ref: sectionRef4, inView: isSectionInView4 } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Percentage of the section visible before triggering the animation
  })
  const { ref: sectionRef5, inView: isSectionInView5 } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Percentage of the section visible before triggering the animation
  })
  return (
    <>
      <VideoHeader
        headerVideoPath='https://georgiiparla.github.io/mmxFront/public/photos/file.mp4'
        headerTitle='MULTIMAXX ST.JULIANS'
        headerSubtitle='Laser tag, arcades, VR.'
        overlayColor='zinc'
      />
      <main className='relative z-40 mx-auto mb-28 flex min-h-screen flex-col gap-28 p-12 lg:max-w-[1024px]'>
        <div className='flex flex-col gap-4'>
          <DownloadField
            color='zinc900'
            btnColour='warning'
            downloadLink='https://georgiiparla.github.io/mmxFront/public/bayStreetOffers.pdf'
          />
          <BookingField
            fieldTitle='Choose your option to start booking process'
            placeholder='Pick one'
            options={[
              '1 game of Laser Tag (10 min) - €7 per person',
              '2 games of LaserTag (10 min each) - €12 per person',
              '3 games of LaserTag (10 min each) - €17 per person',
              '3 games of LaserTag (10 min each) - €150 (minimum 10 players, €15 p/p)',
            ]}
            color='zinc900'
            btnColour='warning'
          />
        </div>

        <div className='divider'></div>
        <div className='h-100% grid grid-cols-1 gap-24'>
          <ImgDescriptionCard
            cardImgPath='https://georgiiparla.github.io/mmxFront/public/photos/mmxCars.jpg'
            cardTitle='Arcade machines'
            cardDescription={`Welcome to our boundless gaming haven, where adventure awaits at every corner! Dive into an exhilarating world filled with endless possibilities as you use your play cards to explore a vast array of arcade experiences. Whether you're chasing high scores or discovering new favorites, our diverse selection of games guarantees non-stop entertainment for everyone. Get ready for a journey of infinite fun and excitement!`}
            className={isSectionInView ? 'animate-fade-right' : 'opacity-0'}
            sectionRef={sectionRef}
            overlayColour='zinc'
          />

          <ImgDescriptionCard
            cardImgPath='https://georgiiparla.github.io/mmxFront/public/photos/mmxVr.jpg'
            cardTitle='Virtual Reality'
            cardDescription={`Step into the future with our cutting-edge Virtual Reality experience, where the boundaries of imagination and reality blend seamlessly! Equip your VR headset and embark on extraordinary adventures as you explore stunning virtual worlds and engage in immersive gameplay. With a range of thrilling experiences designed for all interests, you’ll find yourself lost in a realm where the excitement knows no limits. Prepare for a journey beyond your wildest dreams and redefine what it means to have fun!`}
            className={isSectionInView2 ? 'animate-fade-left' : 'opacity-0'}
            sectionRef={sectionRef2}
            overlayColour='zinc'
          />

          <ImgDescriptionCard
            cardImgPath='https://georgiiparla.github.io/mmxFront/public/photos/lasermaxxFamily.jpg'
            cardTitle='Indoor Laser tag'
            cardDescription={`Step into the heart-pounding world of Indoor Laser Tag, where strategy and excitement collide in an electrifying battle of wits and agility! Gear up with our high-tech laser gear and dive into a dynamic arena filled with challenging obstacles and thrilling surprises. Whether you're teaming up or going solo, the action is non-stop and the fun is intense. Get ready to experience a game that will keep you on the edge of your seat and leave you craving more!`}
            className={isSectionInView4 ? 'animate-fade-right' : 'opacity-0'}
            sectionRef={sectionRef4}
            overlayColour='zinc'
          />

          <ImgDescriptionCard
            cardImgPath='https://georgiiparla.github.io/mmxFront/public/photos/stats.png'
            cardTitle='Detailed statistics'
            cardDescription={`After each game, you'll receive personalized statistics that track your performance. From accuracy and total hits to eliminations and objective completions, you’ll get a detailed breakdown of your gameplay. These stats help you monitor your progress, improve your skills, and compete with friends to see who comes out on top!`}
            className={isSectionInView5 ? 'animate-fade-left' : 'opacity-0'}
            sectionRef={sectionRef5}
            overlayColour='zinc'
          />
        </div>

        <SocialsVideoCard
          cardVideoPath='https://georgiiparla.github.io/mmxFront/public/photos/mmxCards.mp4'
          cardTitle='Visit our Socials'
          cardDescription="We highly recommend checking out our social media channels. Stay updated with exclusive flash offers that you won’t want to miss, watch thrilling gameplay videos to see the action in real time, and browse through stunning venue photos to get a feel for the atmosphere. Whether you're planning a visit or just curious, our socials are the perfect way to stay connected and get all the information you need!"
          instaLink='https://www.instagram.com/multimaxxmalta/'
          className={isSectionInView3 ? 'animate-fadeInSlideUp' : 'opacity-0'}
          sectionRef={sectionRef3}
          color='zinc900'
        />
      </main>
    </>
  )
}
