'use client'

import React from 'react'

interface FormPickProps {
  fieldTitle: string
  isRequired: boolean
  placeholder: string
  options: String[]
  selectedOption: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const FormPickField: React.FC<FormPickProps> = ({
  fieldTitle,
  isRequired,
  placeholder,
  options,
  onChange,
  selectedOption,
}) => {
  return (
    <label className='form-control w-full'>
      <div className='label'>
        <span className='label-text text-white'>{fieldTitle}</span>
        {isRequired ? (
          <span className='label-text-alt text-red-600'>*</span>
        ) : null}
      </div>
      <select
        className='select select-bordered select-sm sm:select-lg lg:select-lg xl:select-lg 2xl:select-lg'
        value={selectedOption}
        onChange={onChange}
      >
        <option disabled value=''>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </label>
  )
}

export default FormPickField
