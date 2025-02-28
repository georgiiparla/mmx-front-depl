import React from 'react'

import Link from 'next/link'
import { fjala } from '@/app/ui/fonts'

interface BadgeDescription {
  badgeTitle: string
  badgeType:
    | 'badge-warning'
    | 'badge-primary'
    | 'badge-secondary'
    | 'badge-accent'
    | 'badge-outline'
    | 'badge-error'
}

interface DepartmentCardProps {
  departmentLink: string
  cardBgImagePath: string
  cardBgImagePathAlt: string
  cardTitle: string
  badges: BadgeDescription[]
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({
  departmentLink,
  cardBgImagePath,
  cardBgImagePathAlt,
  cardTitle,
  badges,
}) => {
  return (
    <Link href={departmentLink}>
      <div className='group card image-full aspect-[16/9] w-full bg-base-100 shadow-xl'>
        <figure className='h-full w-full'>
          <img
            src={cardBgImagePath}
            alt={cardBgImagePathAlt}
            className='h-full w-full object-cover'
          />
        </figure>
        <div className='card-body mx-auto my-auto flex-col items-center gap-4'>
          <h2
            className={`${fjala.className} card-title text-center text-5xl text-white sm:text-7xl lg:text-7xl xl:text-7xl 2xl:text-7xl`}
          >
            {cardTitle}
          </h2>
          <div className='card-actions hidden justify-center group-hover:flex'>
            {badges.map((badge) => (
              <div
                className={`badge ${badge.badgeType} badge-sm animate-fade animate-duration-300 animate-ease-linear sm:badge-lg lg:badge-lg xl:badge-lg 2xl:badge-lg`}
                key={badge.badgeTitle}
              >
                {badge.badgeTitle}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default DepartmentCard
