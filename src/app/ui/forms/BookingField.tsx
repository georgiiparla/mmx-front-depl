'use client'

import React from 'react'

import Image from 'next/image'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import { bookingLinks, coloursConfig, buttonsConfig } from '@/app/lib/utils'

import { inter2 } from '../fonts'

interface BookingFieldProps {
  fieldTitle: string
  placeholder: string
  color: keyof typeof coloursConfig
  options: String[]
  logoPath?: string
  btnColour: keyof typeof buttonsConfig
}

const BookingField: React.FC<BookingFieldProps> = ({
  fieldTitle,
  placeholder,
  options,
  logoPath,
  color,
  btnColour,
}) => {
  if (!logoPath) {
    logoPath = ''
  }
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(selectedOption)
    if (selectedOption in bookingLinks) {
      const link = bookingLinks[selectedOption]
      router.push(link)
    }
  }
  return (
    <form
      className={`form-control w-full gap-10 rounded-xl ${coloursConfig[color]} p-10 shadow-md`}
      onSubmit={handleSubmit}
    >
      {logoPath ? (
        <Image
          src={logoPath}
          width={300}
          height={100}
          alt='logo'
          className='relative z-10 mx-auto'
        ></Image>
      ) : null}
      <div className='label mx-auto'>
        <span
          className={`label-text text-2xl text-white md:text-3xl ${inter2.className} text-center`}
        >
          {fieldTitle}
        </span>
      </div>
      <select
        className={`select select-bordered select-lg ${coloursConfig[color]} mx-auto w-full max-w-[700px] text-white`}
        value={selectedOption}
        onChange={handleChange}
      >
        <option disabled value=''>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <button
        className={`btn mx-auto ${buttonsConfig[btnColour]} btn-lg`}
        type='submit'
      >
        Book online
      </button>
    </form>
  )
}

export default BookingField
