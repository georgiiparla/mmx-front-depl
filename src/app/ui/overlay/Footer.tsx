import { interBold } from '@/app/ui/fonts'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='footer relative z-40 bg-base-200 p-10 text-base-content'>
            <aside>
                <Image src='/media/mmxLogo3.png' width={125} height={75} alt='logo'></Image>
                <p>
                    Funplex Entertainment Ltd.
                    <br />
                    Providing entertainment services since 2015
                    <br />
                    <br />
                    <span className={`${interBold.className}`}>ACTION-ZONE</span> <br />
                    contact@example.com <br />
                    Tel: +1 (555) 123-4567
                    <br />
                    <br />
                    <span className={`${interBold.className}`}>FUN-PLEX CITY</span>{' '}
                    <br />
                    City Center, Level 4, Bay Street Complex, Fun City <br />
                    contact@example.com <br />
                    Tel: +1 (555) 123-4567
                    <br />
                    <br />
                    <span className={`${interBold.className}`}>FUN-PLEX DOWNTOWN</span>{' '}
                    <br />
                    Downtown, Level 2, Main Street Complex, Fun City <br />
                    contact@example.com <br />
                    Tel: +1 (555) 123-4567
                    <br />
                    <br />
                    <span className={`${interBold.className}`}>FUN-PLEX NORTHSIDE</span>{' '}
                    <br />
                    Northside Shopping Complex, Level -1, Fun City <br />
                    contact@example.com <br />
                    Tel: +1 (555) 123-4567
                </p>
            </aside>
            <nav>
                <h6 className='footer-title'>Services</h6>
                <a className='link-hover link'>Activities</a>
                <a className='link-hover link'>Kids parties</a>
                <a className='link-hover link'>Teens parties</a>
            </nav>
            <nav>
                <h6 className='footer-title'>Company</h6>
                <a className='link-hover link'>About us</a>
                <a className='link-hover link'>Contact</a>
            </nav>
            <nav>
                <h6 className='footer-title'>Legal</h6>
                <a className='link-hover link'>Terms of use</a>
                <a className='link-hover link'>Privacy policy</a>
                <a className='link-hover link'>Cookie policy</a>
            </nav>
        </footer>
    )
}
