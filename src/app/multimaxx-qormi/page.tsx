'use client'

import { useInView } from 'react-intersection-observer'

import VideoHeader from '../ui/departmentPageHeader/VideoHeader'
import ImgDescriptionCard from '../ui/cards/ImgDescriptionCard'
import SocialsVideoCard from '../ui/cards/SocialsVideoCard'
import VideoDescriptionCard from '../ui/cards/VideoDescriptionCard'
import BookingField from '../ui/forms/BookingField'
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
        headerVideoPath='https://georgiiparla.github.io/mmxFront/public/photos/qormi.mp4'
        headerTitle='MULTIMAXX QORMI'
        headerSubtitle='Bumping cars, arcades, VR'
        overlayColor='sky'
      />
      <main className='relative z-40 mx-auto mb-28 flex min-h-screen flex-col gap-28 p-12 lg:max-w-[1024px]'>
        <div className='flex flex-col gap-4'>
          <DownloadField
            color='sky'
            btnColour='primary'
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
            color='sky'
            btnColour='primary'
          />
        </div>

        <div className='divider'></div>
        <div className='h-100% grid grid-cols-1 gap-24'>
          <ImgDescriptionCard
            cardImgPath='https://georgiiparla.github.io/mmxFront/public/photos/square.jpg'
            cardTitle='Restaurant Service'
            cardDescription={`A welcoming family restaurant offering a variety of mouthwatering dishes to satisfy every craving. Enjoy light snacks, flavorful homemade burgers, crisp salads, and perfectly baked pizzas. Our superb pasta dishes are crafted with love and the finest ingredients, ensuring a delightful dining experience. Whether you're in the mood for a quick bite or a leisurely meal, our menu has something for everyone in a warm, friendly atmosphere.`}
            className={isSectionInView ? 'animate-fade-right' : 'opacity-0'}
            sectionRef={sectionRef}
            overlayColour='sky'
          />

          <VideoDescriptionCard
            cardVideoPath='https://georgiiparla.github.io/mmxFront/public/photos/paviArcs.mp4'
            cardTitle='Arcade machines'
            cardDescription={`Dive into fun at our entertainment center, where kids can enjoy the latest in modern arcade gaming! Our cutting-edge machines offer a variety of exciting games with vibrant graphics and interactive gameplay. Perfect for all skill levels, there's something for every child, whether they're racing, solving puzzles, or testing reflexes. Our arcade is the ultimate destination for adventure and excitement. Come play and let the good times roll!`}
            className={isSectionInView2 ? 'animate-fade-left' : 'opacity-0'}
            sectionRef={sectionRef2}
            color='sky'
          />

          <ImgDescriptionCard
            cardImgPath='https://georgiiparla.github.io/mmxFront/public/photos/paviCars.jpg'
            cardTitle='Bumping cars'
            cardDescription={`Get ready to spin, twirl, and revolve in all directions at the vibrant and thrilling Bumping Car Arena inside MULTIMAXX. Immerse yourself in a whirlwind of color as you navigate through the electrifying atmosphere, dodging and bumping into other cars in a fun and exhilarating ride. Whether you're looking for a burst of adrenaline or just some lighthearted fun, the arena promises endless excitement and unforgettable moments.`}
            className={isSectionInView4 ? 'animate-fade-right' : 'opacity-0'}
            sectionRef={sectionRef4}
            overlayColour='sky'
          />

          <ImgDescriptionCard
            cardImgPath='https://georgiiparla.github.io/mmxFront/public/photos/vrGirl.jpeg'
            cardTitle='Virtual Reality'
            cardDescription={`Experience the next level of entertainment with our Virtual Reality offerings. Put on your VR headset and dive into captivating virtual worlds where imagination meets reality. Whether you're exploring new environments or enjoying immersive gameplay, there's something for everyone. Discover a range of experiences designed to suit different interests, and enjoy a new way to have fun. Ready for an adventure that takes you beyond the ordinary?`}
            className={isSectionInView5 ? 'animate-fade-left' : 'opacity-0'}
            sectionRef={sectionRef5}
            overlayColour='sky'
          />
        </div>

        <SocialsVideoCard
          cardVideoPath='https://georgiiparla.github.io/mmxFront/public/photos/qormiParty.mp4'
          cardTitle='Visit our Socials'
          cardDescription="We highly recommend checking out our social media channels. Stay updated with exclusive flash offers that you won’t want to miss, watch thrilling gameplay videos to see the action in real time, and browse through stunning venue photos to get a feel for the atmosphere. Whether you're planning a visit or just curious, our socials are the perfect way to stay connected and get all the information you need!"
          instaLink='https://www.instagram.com/multimaxxmalta/'
          className={isSectionInView3 ? 'animate-fadeInSlideUp' : 'opacity-0'}
          sectionRef={sectionRef3}
          color='sky'
        />
      </main>
    </>
  )
}