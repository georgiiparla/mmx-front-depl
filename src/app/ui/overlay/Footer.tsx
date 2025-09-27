import { interBold } from '@/app/ui/fonts'

import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='footer relative z-40 bg-base-200 p-10 text-base-content'>
            <aside>
                <Image src='/media/mmxLogo3.png' width={125} height={75} alt='logo'></Image>
                <p>
                    Multimaxx Ltd.
                    <br />
                    Providing entertainment services since 2010
                    <br />
                    <br />
                    <span className={`${interBold.className}`}>BATTLEMAXX</span> <br />
                    info@starwarsmalta.com <br />
                    Tel: +356 99177777
                    <br />
                    <br />
                    <span className={`${interBold.className}`}>
                        MULTIMAXX BAY STREET
                    </span>{' '}
                    <br />
                    St. Jullian's Level 4, Bay Street Complex, Saint Julian's, Malta{' '}
                    <br />
                    info@starwarsmalta.com <br />
                    Tel: +356 99177777
                    <br />
                    <br />
                    <span className={`${interBold.className}`}>MULTIMAXX PAOLA</span>{' '}
                    <br />
                    Paola Level 2, Main Street Complex, Paola, Malta <br />
                    info@starwarsmalta.com <br />
                    Tel: +356 99177777
                    <br />
                    <br />
                    <span className={`${interBold.className}`}>MULTIMAXX QORMI</span>{' '}
                    <br />
                    Qormi Pavi Shopping Complex, Square Cafe, Level -1 <br />
                    info@Starwarsmalta.com <br />
                    Tel: +356 99177777
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
