'use client'

import { useState } from 'react'
import Image from 'next/image'
import { StarIcon, CheckBadgeIcon, HandThumbUpIcon } from '@heroicons/react/20/solid'
import { inter, inter2, fjala, interBold } from '@/app/ui/fonts'

interface Review {
    id: number
    name: string
    department: string
    rating: number
    date: string
    review: string
    avatar?: string
    verified: boolean
    helpful: number
}

const reviewsData: Review[] = [
    {
        id: 1,
        name: "Sarah Martinez",
        department: "ACTION-ZONE",
        rating: 5,
        date: "2024-09-15",
        review: "Absolutely incredible experience! The outdoor adventure at ACTION-ZONE exceeded all expectations. The equipment was top-notch and the staff was professional. Perfect for team building events!",
        avatar: "/media/photos/avatar1.png",
        verified: true,
        helpful: 23
    },
    {
        id: 2,
        name: "Mike Thompson",
        department: "CYBER-ZONE",
        rating: 5,
        date: "2024-09-12",
        review: "The indoor laser tag arena is mind-blowing! The maze design is challenging and the technology is cutting-edge. Had an amazing birthday party here with friends.",
        avatar: "/media/photos/avatar2.png",
        verified: true,
        helpful: 18
    },
    {
        id: 3,
        name: "Emma Wilson",
        department: "FUN-PLEX NORTH",
        rating: 4,
        date: "2024-09-10",
        review: "Great variety of activities! The VR experience was fantastic and the arcade games are modern. The restaurant has good food too. Only wish the waiting times were shorter.",
        verified: true,
        helpful: 15
    },
    {
        id: 4,
        name: "James Rodriguez",
        department: "FUN-PLEX WEST",
        rating: 5,
        date: "2024-09-08",
        review: "Perfect entertainment center! The combination of laser tag, VR, and arcade games makes it ideal for any age group. Highly recommended for family outings.",
        avatar: "/media/photos/avatar3.png",
        verified: true,
        helpful: 31
    },
    {
        id: 5,
        name: "Lisa Chen",
        department: "ACTION-ZONE",
        rating: 5,
        date: "2024-09-05",
        review: "Best outdoor adventure experience in the region! The variety of game modes keeps things exciting. The detailed statistics at the end are a nice touch.",
        verified: true,
        helpful: 27
    },
    {
        id: 6,
        name: "David Brown",
        department: "CYBER-ZONE",
        rating: 4,
        date: "2024-09-03",
        review: "Really enjoyed the indoor laser tag. The arena design is impressive with lots of hiding spots and obstacles. Great for competitive players!",
        avatar: "/media/photos/avatar4.png",
        verified: false,
        helpful: 12
    }
]

export default function ReviewsPageV2() {
    const [selectedDepartment, setSelectedDepartment] = useState('All Departments')
    const [sortBy, setSortBy] = useState('newest')

    // Add state for helpful votes and user interactions
    const [helpfulCounts, setHelpfulCounts] = useState<{ [key: number]: number }>(() => {
        const initialCounts: { [key: number]: number } = {}
        reviewsData.forEach(review => {
            initialCounts[review.id] = review.helpful
        })
        return initialCounts
    })

    // FIXED: Use array instead of Set to avoid ES target issues
    const [userHelpfulVotes, setUserHelpfulVotes] = useState<number[]>([])

    const filteredReviews = reviewsData
        .filter(review => selectedDepartment === 'All Departments' || review.department === selectedDepartment)
        .sort((a, b) => {
            switch (sortBy) {
                case 'newest': return new Date(b.date).getTime() - new Date(a.date).getTime()
                case 'oldest': return new Date(a.date).getTime() - new Date(b.date).getTime()
                case 'highest': return b.rating - a.rating
                case 'lowest': return a.rating - b.rating
                case 'helpful': return (helpfulCounts[b.id] || 0) - (helpfulCounts[a.id] || 0)
                default: return 0
            }
        })

    // Fixed calculations
    const averageRating = reviewsData.length > 0 ? reviewsData.reduce((acc, review) => acc + review.rating, 0) / reviewsData.length : 0
    const totalReviews = reviewsData.length

    const ratingCounts = [5, 4, 3, 2, 1].map(star => {
        const count = reviewsData.filter(r => r.rating === star).length
        return { star, count, percentage: totalReviews > 0 ? (count / totalReviews) * 100 : 0 }
    })

    // FIXED: Handle helpful button click with array operations
    const handleHelpfulClick = (reviewId: number) => {
        const isAlreadyHelpful = userHelpfulVotes.includes(reviewId)

        if (isAlreadyHelpful) {
            // Unlike - decrease count and remove from array
            setHelpfulCounts(prev => ({
                ...prev,
                [reviewId]: Math.max(0, (prev[reviewId] || 0) - 1)
            }))
            setUserHelpfulVotes(prev => prev.filter(id => id !== reviewId))
        } else {
            // Like - increase count and add to array
            setHelpfulCounts(prev => ({
                ...prev,
                [reviewId]: (prev[reviewId] || 0) + 1
            }))
            setUserHelpfulVotes(prev => [...prev, reviewId])
        }
    }

    return (
        <main className={`${inter.className} flex min-h-screen flex-col gap-32 p-6 bg-base-100 text-white`}>
            <div
                className="hero min-h-[60vh] rounded-xl relative overflow-hidden bg-cover bg-center bg-no-repeat hidden lg:block"
                style={{ backgroundImage: "url('/media/photos/vrlady.png')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] w-full">
                    <h1 className={`${fjala.className} text-8xl font-bold text-center`}>
                        CUSTOMER REVIEWS
                    </h1>
                    <p className={`${inter2.className} text-xl text-center mt-6 mb-8`}>
                        Explore reviews from our recent visitors
                    </p>
                    <div className="flex justify-center items-center gap-4 text-lg">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <StarIcon
                                        key={star}
                                        className={`h-6 w-6 ${star <= Math.floor(averageRating)
                                            ? 'text-yellow-400'
                                            : 'text-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className={`${interBold.className} text-xl`}>{averageRating.toFixed(1)}</span>
                        </div>
                        <span className={`${inter.className} text-gray-300`}>
                            {totalReviews} reviews
                        </span>
                        <span className={`${inter.className} text-gray-300`}>
                            {reviewsData.filter((r) => r.verified).length} verified
                        </span>
                    </div>
                </div>
            </div>



            {/* Content Section */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 w-full">
                {/* Left Sidebar */}
                <aside className="md:col-span-4 lg:col-span-3">
                    <div className="sticky top-24 space-y-8">
                        {/* Rating Summary */}
                        <div className="card bg-base-200 shadow-lg">
                            <div className="card-body">
                                <h2 className={`${interBold.className} card-title`}>Overall Rating</h2>
                                <div className="flex items-center gap-3 my-2">
                                    <span className={`${fjala.className} text-5xl text-yellow-400`}>
                                        {averageRating.toFixed(1)}
                                    </span>
                                    <div className="flex flex-col">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map(s => (
                                                <StarIcon
                                                    key={s}
                                                    className={`h-5 w-5 ${s <= averageRating ? 'text-yellow-400' : 'text-gray-600'}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-400">Based on {totalReviews} reviews</span>
                                    </div>
                                </div>
                                <div className="space-y-2 mt-2">
                                    {[5, 4, 3, 2, 1].map((star) => {
                                        const count = reviewsData.filter(r => r.rating === star).length;
                                        const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                                        return (
                                            <div key={star} className="flex items-center gap-2 w-full">
                                                <div className="flex items-center">
                                                    <span className="font-bold text-yellow-400">{star}</span>
                                                    <StarIcon className="h-4 w-4 text-yellow-400 ml-1" />
                                                </div>
                                                <div className="flex-1 mx-2">
                                                    <div className="h-2 rounded bg-zinc-700 overflow-hidden">
                                                        <div
                                                            className="h-2 bg-yellow-400 rounded transition-all"
                                                            style={{ width: `${percentage}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div className="w-6 text-right text-gray-300 tabular-nums">{count}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="card bg-base-200 shadow-lg">
                            <div className="card-body space-y-4">
                                <div className="form-control">
                                    <label className={`${inter.className} label text-white text-sm`}>
                                        Filter by Department
                                    </label>
                                    <select
                                        className="select select-bordered bg-base-200 text-white min-w-full"
                                        value={selectedDepartment}
                                        onChange={(e) => setSelectedDepartment(e.target.value)}
                                    >
                                        <option value="All Departments">All Departments</option>
                                        <option value="ACTION-ZONE">ACTION-ZONE</option>
                                        <option value="CYBER-ZONE">CYBER-ZONE</option>
                                        <option value="FUN-PLEX NORTH">FUN-PLEX NORTH</option>
                                        <option value="FUN-PLEX WEST">FUN-PLEX WEST</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className={`${inter.className} label text-white text-sm`}>
                                        Sort by
                                    </label>
                                    <select
                                        className="select select-bordered bg-base-200 text-white min-w-full"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="newest">Newest First</option>
                                        <option value="oldest">Oldest First</option>
                                        <option value="highest">Highest Rating</option>
                                        <option value="lowest">Lowest Rating</option>
                                        <option value="helpful">Most Helpful</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Right Content - Reviews */}
                <section className="md:col-span-8 lg:col-span-9 space-y-6">
                    <div className="mb-4">
                        <p className={`${inter.className} text-gray-400`}>
                            Showing {filteredReviews.length} of {totalReviews} reviews
                        </p>
                    </div>

                    {filteredReviews.map(review => (
                        <div key={review.id} className="card bg-base-200 shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="card-body p-6">
                                <div className="flex items-start gap-4">
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            {review.avatar ? (
                                                <Image
                                                    src={review.avatar}
                                                    width={56}
                                                    height={56}
                                                    alt={review.name}
                                                    className="rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 text-white font-bold">
                                                    {review.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <div>
                                                <h3 className={`${interBold.className} text-lg text-white`}>{review.name}</h3>
                                                <span className={`badge badge-sm ${{
                                                    'ACTION-ZONE': 'badge-accent',
                                                    'CYBER-ZONE': 'badge-secondary',
                                                    'FUN-PLEX NORTH': 'badge-primary',
                                                    'FUN-PLEX WEST': 'badge-warning'
                                                }[review.department] || 'badge-ghost'}`}>
                                                    {review.department}
                                                </span>
                                            </div>
                                            <span className="text-sm text-gray-500">
                                                {new Date(review.date).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 my-2">
                                            {[1, 2, 3, 4, 5].map(s => (
                                                <StarIcon
                                                    key={s}
                                                    className={`h-5 w-5 ${s <= review.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                                                />
                                            ))}
                                        </div>
                                        <p className={`${inter.className} text-gray-300 leading-relaxed`}>
                                            "{review.review}"
                                        </p>
                                    </div>
                                </div>
                                <div className="card-actions justify-between items-center mt-4 pt-4 border-t border-zinc-700">
                                    <div className="flex items-center gap-4">
                                        {review.verified && (
                                            <div className="flex items-center gap-1 text-sm text-success">
                                                <CheckBadgeIcon className="h-4 w-4" />
                                                Verified Customer
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        className={`btn btn-sm flex items-center gap-2 transition-colors duration-200 ${userHelpfulVotes.includes(review.id)
                                            ? 'btn-warning text-warning-content'
                                            : 'btn-ghost text-gray-400 hover:text-white'
                                            }`}
                                        onClick={() => handleHelpfulClick(review.id)}
                                    >
                                        <HandThumbUpIcon className="h-4 w-4" />
                                        {userHelpfulVotes.includes(review.id) ? 'Helpful!' : 'Helpful'} ({helpfulCounts[review.id] || 0})
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    )
}
