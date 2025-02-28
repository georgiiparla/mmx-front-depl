'use client'

import { useInView } from 'react-intersection-observer'

import VideoHeader from '../ui/departmentPageHeader/VideoHeader'
import ImgDescriptionCard from '../ui/cards/ImgDescriptionCard'
import SocialsVideoCard from '../ui/cards/SocialsVideoCard'
import BookingField from '@/app/ui/forms/BookingField'
import DownloadField from '../ui/forms/DownloadField'
import VideoDescriptionCard from '../ui/cards/VideoDescriptionCard'

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
        headerVideoPath='https://georgiiparla.github.io/mmxFront/public/photos/cmx.mp4'
        headerTitle='CYBERMAXX'
        headerSubtitle='Indoor laser tag in Paola.'
        overlayColor='indigo'
      />
      <main className='relative z-40 mx-auto mb-28 flex min-h-screen flex-col gap-28 p-12 lg:max-w-[1024px]'>
        <div className='flex flex-col gap-4'>
          <DownloadField
            color='indigo'
            downloadLink='https://georgiiparla.github.io/mmxFront/public/bayStreetOffers.pdf'
            btnColour='secondary'
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
            color='indigo'
            btnColour='secondary'
          />
        </div>

        <div className='divider'></div>
        <div className='h-100% grid grid-cols-1 gap-24'>
          <ImgDescriptionCard
            cardImgPath='https://georgiiparla.github.io/mmxFront/public/photos/cmxParty.jpg'
            cardTitle='Laser Tag'
            cardDescription={`Enter the adrenaline-charged realm of Indoor Laser Tag, where every corner hides a new challenge and every move counts! Suit up with your laser vest and prepare to navigate a maze of obstacles in a high-stakes game of skill and strategy. Whether you’re in it for the team victory or aiming to dominate solo, the energy is electric, and the excitement never lets up. It’s not just a game; it’s an experience that will have you coming back for more!`}
            className={isSectionInView ? 'animate-fade-right' : 'opacity-0'}
            sectionRef={sectionRef}
            overlayColour='indigo'
          />

          <VideoDescriptionCard
            cardVideoPath='https://georgiiparla.github.io/mmxFront/public/photos/cmxArena.mp4'
            cardTitle='Sprawling maze'
            cardDescription={`Get ready to test your skills in our vast Maze Laser Tag Arena. Navigate through an intricate labyrinth of corridors, designed to challenge even the most experienced players. With plenty of space to strategize, this arena offers endless excitement and intense gameplay. Whether you're leading your team or hunting down your rivals, our sprawling maze is the perfect setting for the ultimate laser tag showdown!`}
            className={isSectionInView2 ? 'animate-fade-left' : 'opacity-0'}
            sectionRef={sectionRef2}
            color='indigo'
          />

          <ImgDescriptionCard
            cardImgPath='https://georgiiparla.github.io/mmxFront/public/photos/lasermaxxFamily.jpg'
            cardTitle='Indoor Laser tag'
            cardDescription={`Step into the heart-pounding world of Indoor Laser Tag, where strategy and excitement collide in an electrifying battle of wits and agility! Gear up with our high-tech laser gear and dive into a dynamic arena filled with challenging obstacles and thrilling surprises. Whether you're teaming up or going solo, the action is non-stop and the fun is intense. Get ready to experience a game that will keep you on the edge of your seat and leave you craving more!`}
            className={isSectionInView4 ? 'animate-fade-right' : 'opacity-0'}
            sectionRef={sectionRef4}
            overlayColour='indigo'
          />

          <ImgDescriptionCard
            cardImgPath='https://georgiiparla.github.io/mmxFront/public/photos/stats.png'
            cardTitle='Detailed statistics'
            cardDescription={`After each game, you'll receive personalized statistics that track your performance. From accuracy and total hits to eliminations and objective completions, you’ll get a detailed breakdown of your gameplay. These stats help you monitor your progress, improve your skills, and compete with friends to see who comes out on top!`}
            className={isSectionInView5 ? 'animate-fade-left' : 'opacity-0'}
            sectionRef={sectionRef5}
            overlayColour='indigo'
          />
        </div>

        <SocialsVideoCard
          cardVideoPath='https://georgiiparla.github.io/mmxFront/public/photos/cmxBg.mp4'
          cardTitle='Visit our Socials'
          cardDescription="We highly recommend checking out our social media channels. Stay updated with exclusive flash offers that you won’t want to miss, watch thrilling gameplay videos to see the action in real time, and browse through stunning venue photos to get a feel for the atmosphere. Whether you're planning a visit or just curious, our socials are the perfect way to stay connected and get all the information you need!"
          instaLink='https://www.instagram.com/multimaxxmalta/'
          className={isSectionInView3 ? 'animate-fadeInSlideUp' : 'opacity-0'}
          sectionRef={sectionRef3}
          color='indigo'
        />
      </main>
    </>
  )
}