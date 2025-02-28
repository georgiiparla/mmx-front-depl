import React from 'react'

interface FormFieldProps {
  fieldTitle: string
  isRequired: boolean
  placeholder: string
  type: 'text' | 'date'
}

const FormField: React.FC<FormFieldProps> = ({
  fieldTitle,
  isRequired,
  placeholder,
  type,
}) => {
  return (
    <label className='form-control w-full'>
      <div className='label'>
        <span className='label-text text-white'>{fieldTitle}</span>
        {isRequired ? (
          <span className='label-text-alt text-red-600'>*</span>
        ) : null}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className='input input-sm input-bordered w-full sm:input-lg lg:input-lg xl:input-lg 2xl:input-lg'
      />
    </label>
  )
}

export default FormField
