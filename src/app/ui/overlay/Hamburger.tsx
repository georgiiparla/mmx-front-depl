import { Bars3Icon } from '@heroicons/react/24/outline'

import { inter, inter2 } from '../fonts'

export default function Hamburger() {
  return (
    <div className='drawer drawer-end fixed bottom-4 left-4 z-50 lg:hidden'>
      <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label
          htmlFor='my-drawer-4'
          className='btn btn-square btn-outline btn-warning drawer-button btn-md'
        >
          <Bars3Icon className='h-7 w-7 text-yellow-400' />
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-4'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu flex min-h-full w-80 flex-col items-center justify-center gap-6 bg-base-200 p-4 text-white'>
          {/* Sidebar content here */}
          <li className='w-full'>
            <div className='collapse border border-base-300 bg-base-200'>
              <div className='collapse-title text-lg font-medium'>Home</div>
            </div>
          </li>
          <li className='w-full'>
            <div
              tabIndex={0}
              className='collapse collapse-arrow border border-base-300 bg-base-200'
            >
              <div className='collapse-title text-lg font-medium'>
                Departments
              </div>
              <div className='collapse-content text-base text-white'>
                <div className={`flex flex-col gap-4 ${inter2.className}`}>
                  <a>BATTLEMAXX</a>
                  <a>MULTIMAXXX St.Julians</a>
                  <a>CYBERMAXX</a>
                  <a>MULTIMAXX Qormi</a>
                </div>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div
              tabIndex={0}
              className='collapse collapse-arrow border border-base-300 bg-base-200'
            >
              <div className='collapse-title text-lg font-medium'>
                Our offers
              </div>
              <div className='collapse-content text-base text-white'>
                <div className={`flex flex-col gap-4 ${inter2.className}`}>
                  <a>BATTLEMAXX</a>
                  <a>MULTIMAXXX St.Julians</a>
                  <a>CYBERMAXX</a>
                  <a>MULTIMAXX Qormi</a>
                </div>
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='collapse border border-base-300 bg-base-200'>
              <div className='collapse-title text-lg font-medium'>
                Contact Us
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='collapse border border-base-300 bg-base-200'>
              <div className='collapse-title text-lg font-medium'>
                Book online
              </div>
            </div>
          </li>
          <li className='w-full'>
            <div className='collapse border border-base-300 bg-base-200'>
              <div className='collapse-title text-lg font-medium'>
                Our Socials
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
