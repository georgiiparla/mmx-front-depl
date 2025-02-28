'use client'

import { coloursConfig, buttonsConfig } from '@/app/lib/utils'

import React from 'react'

import Link from 'next/link'

import { inter2 } from '../fonts'

interface DownloadFieldProps {
  color: keyof typeof coloursConfig
  btnColour: keyof typeof buttonsConfig
  downloadLink: string
}

const DownloadField: React.FC<DownloadFieldProps> = ({
  color,
  btnColour,
  downloadLink,
}) => {
  return (
    <div
      role='alert'
      className={`alert ${coloursConfig[color]} border-none p-8 shadow-lg`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        className='h-6 w-6 shrink-0 stroke-info invert'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        ></path>
      </svg>
      <div>
        <h3 className={`text-white ${inter2.className}`}>
          Have a look at our great deals
        </h3>
        <div className='text-xs text-white'>
          Press the button to download the PDF
        </div>
      </div>
      <Link href={downloadLink}>
        <button className={`btn ${buttonsConfig[btnColour]} btn-sm`}>
          Download Offers
        </button>
      </Link>
    </div>
  )
}

export default DownloadField
