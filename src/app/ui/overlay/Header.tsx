import Link from 'next/link'
import Image from 'next/image'
import { inter } from '@/app/ui/fonts'

import { PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-between p-4'>
      <Link href={'/'}>
        <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-white lg:h-16 lg:w-16'>
          <Image
            src='https://georgiiparla.github.io/mmxFront/public/mmxLogo2.png'
            width={36}
            height={36}
            alt='logo'
            className='h-9 w-9 lg:h-12 lg:w-12'
          ></Image>
        </div>
      </Link>

      <div className='flex gap-4'>
        <a
          href='https://book22776.simplybook.me/v2/?widget-type=iframe&theme=space&theme=space&timeline=modern&datepicker=top_calendar#book/count/1/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='btn btn-outline btn-warning btn-md sm:btn-md lg:btn-lg xl:btn-lg 2xl:btn-lg'>
            <div className={`${inter.className} text-base`}>Book online</div>
          </button>
        </a>

        <button className='btn btn-square btn-warning btn-md bg-yellow-400 sm:btn-md lg:btn-lg xl:btn-lg 2xl:btn-lg'>
          <PhoneArrowDownLeftIcon className='h-7 w-7 text-black' />
        </button>
      </div>
    </header>
  )
}