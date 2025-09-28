'use client'

import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { inter2 } from '../fonts'

export default function Hamburger() {
    return (
        <div className="drawer drawer-end fixed bottom-4 left-4 z-50 lg:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label
                    htmlFor="my-drawer-4"
                    className="btn btn-square btn-outline btn-warning drawer-button btn-md"
                >
                    <Bars3Icon className="h-7 w-7 text-yellow-400" />
                </label>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul
                    className={`menu flex min-h-full w-80 flex-col items-center justify-center gap-6 bg-base-200 p-4 text-white ${inter2.className}`}
                >
                    {/* Sidebar content here */}
                    <li className="w-full">
                        <div className="collapse border border-base-300 bg-base-200">
                            <div className="collapse-title text-lg font-medium">
                                <Link href="/">Home</Link>
                            </div>
                        </div>
                    </li>
                    <li className="w-full">
                        <div
                            tabIndex={0}
                            className="collapse collapse-arrow border border-base-300 bg-base-200"
                        >
                            <div className="collapse-title text-lg font-medium">Departments</div>
                            <div className="collapse-content text-base text-white">
                                <div className="flex flex-col gap-4">
                                    <Link href="/battlemaxx">ACTION-ZONE</Link>
                                    <Link href="/multimaxx-stjulians">FUN-PLEX WEST</Link>
                                    <Link href="/multimaxx-paola">CYBER-ZONE</Link>
                                    <Link href="/multimaxx-qormi">FUN-PLEX NORTH</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="w-full">
                        <div
                            tabIndex={0}
                            className="collapse collapse-arrow border border-base-300 bg-base-200"
                        >
                            <div className="collapse-title text-lg font-medium">Our offers</div>
                            <div className="collapse-content text-base text-white">
                                <div className="flex flex-col gap-4">
                                    <a>ACTION-ZONE</a>
                                    <a>FUN-PLEX WEST</a>
                                    <a>CYBER-ZONE</a>
                                    <a>FUN-PLEX NORTH</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="w-full">
                        <div className="collapse border border-base-300 bg-base-200">
                            <div className="collapse-title text-lg font-medium">Contact Us</div>
                        </div>
                    </li>
                    <li className="w-full">
                        <div className="collapse border border-base-300 bg-base-200">
                            <div className="collapse-title text-lg font-medium">
                                <Link href="/reviews">See reviews</Link>
                            </div>
                        </div>
                    </li>
                    <li className="w-full">
                        <div className="collapse border border-base-300 bg-base-200">
                            <div className="collapse-title text-lg font-medium">Our Socials</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
