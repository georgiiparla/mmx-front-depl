import { coloursConfig, buttonsConfig } from './utils'

type Card = {
    type: 'img' | 'video'
    path: string
    title: string
    description: string
    overlayColour?: keyof typeof coloursConfig
    color?: keyof typeof coloursConfig
}

type PageConfig = {
    header: {
        videoPath: string
        title: string
        subtitle: string
        overlayColor: keyof typeof coloursConfig
    }
    download: {
        color: keyof typeof coloursConfig
        btnColour: keyof typeof buttonsConfig
        link: string
    }
    booking: {
        fieldTitle: string
        placeholder: string
        options: string[]
        color: keyof typeof coloursConfig
        btnColour: keyof typeof buttonsConfig
    }
    cards: Card[]
    socials: {
        videoPath: string
        title: string
        description: string
        instaLink: string
        color: keyof typeof coloursConfig
    }
}

export const pageData: { [key: string]: PageConfig } = {
    actionZone: { // Renamed from 'battlemaxx'
        header: {
            videoPath: '/media/photos/BATTLEMAXX.mp4',
            title: 'ACTION-ZONE', // Mock name
            subtitle: '#1 outdoor adventure in the region', // Mock subtitle
            overlayColor: 'emerald',
        },
        download: {
            color: 'emerald',
            btnColour: 'accent',
            link: '/media/offers.pdf', // Generic link
        },
        booking: {
            fieldTitle: 'Choose your option to start booking',
            placeholder: 'Select a package',
            options: [ // Mock locations
                'Forest Arena 2 hours - €300 (minimum 10 players, €30 p/p)',
                'Forest Arena 3 hours - €400 (minimum 10 players, €40 p/p)',
                'River Park 2 hours - €300 (minimum 10 players, €30 p/p)',
                'River Park 3 hours - €400 (minimum 10 players, €40 p/p)',
            ],
            color: 'emerald',
            btnColour: 'accent',
        },
        cards: [
            {
                type: 'img',
                path: '/media/photos/ol_m.png',
                title: 'About Us',
                description: `Welcome to Action-Zone, the region's premier adventure experience! Get ready for an action-packed day like no other. Gather your friends and family for exhilarating fun and safe entertainment that you won’t forget. We promise to deliver one of the most unforgettable experiences of your life.`, // Generic description
                overlayColour: 'emerald',
            },
            {
                type: 'img',
                path: '/media/photos/ol3_m.png',
                title: 'Huge Armoury',
                description: `Our armoury includes a wide range of the latest high-tech equipment for your use. We provide a variety of thrilling game zones and locations, ensuring a fantastic experience whether you’re spending time with friends, hosting a team-building event, or planning a memorable party.`, // Generic description
                overlayColour: 'emerald',
            },
            {
                type: 'img',
                path: '/media/photos/ol_m2.png',
                title: 'Variety of Modes',
                description: `Our adventure experience offers a variety of exciting game modes to keep the action fresh and thrilling. You can engage in classic modes like Capture the Flag or strategize with your team in Team Missions. For those who love tactical challenges, try our unique objective-based scenarios!`, // Generic description
                overlayColour: 'emerald',
            },
            {
                type: 'img',
                path: '/media/photos/stats.png',
                title: 'Detailed Statistics',
                description: `After each game, you'll receive personalized statistics that track your performance. From accuracy and total hits to objective completions, you’ll get a detailed breakdown of your gameplay. These stats help you monitor your progress and compete with friends!`, // Description is generic enough
                overlayColour: 'emerald',
            },
        ],
        socials: {
            videoPath: '/media/photos/bmxGozo.mp4',
            title: 'Visit our Socials',
            description: "We highly recommend checking out our social media channels for updates, exclusive offers, and gameplay videos. Our socials are the perfect way to stay connected and get all the information you need!", // Generic description
            instaLink: 'https://www.instagram.com/example', // Mock link
            color: 'emerald',
        },
    },
    funplexCityCenter: { // Renamed from 'multimaxxPaola'
        header: {
            videoPath: '/media/photos/cmx.mp4',
            title: 'CYBER-ZONE', // Mock name
            subtitle: 'Indoor laser tag in the City Center', // Mock subtitle
            overlayColor: 'indigo',
        },
        download: {
            color: 'indigo',
            btnColour: 'secondary',
            link: '/media/offers.pdf',
        },
        booking: {
            fieldTitle: 'Choose your option to start booking',
            placeholder: 'Select a package',
            options: [ // Generic options
                '1 game of Laser Tag (10 min) - €7 per person',
                '2 games of Laser Tag (10 min each) - €12 per person',
                '3 games of Laser Tag (10 min each) - €17 per person',
                'Party Package (10 players) - €150',
            ],
            color: 'indigo',
            btnColour: 'secondary',
        },
        cards: [
            {
                type: 'img',
                path: '/media/photos/il_m.png',
                title: 'Laser Tag',
                description: `Enter the adrenaline-charged realm of Indoor Laser Tag, where every corner hides a new challenge! Suit up with your laser vest and prepare to navigate a maze of obstacles in a high-stakes game of skill and strategy. The energy is electric, and the excitement never lets up.`, // Generic description
                overlayColour: 'indigo',
            },
            {
                type: 'video',
                path: '/media/photos/cmxArena.mp4',
                title: 'Sprawling Maze',
                description: `Get ready to test your skills in our vast Maze Arena. Navigate through an intricate labyrinth of corridors, designed to challenge even the most experienced players. This arena offers endless excitement and intense gameplay for the ultimate laser tag showdown!`, // Generic description
                color: 'indigo',
            },
            {
                type: 'img',
                path: '/media/photos/ls_family.png',
                title: 'Indoor Laser Fun',
                description: `Step into the heart-pounding world of Indoor Laser Tag, where strategy and excitement collide! Gear up with our high-tech laser gear and dive into a dynamic arena filled with challenging obstacles and thrilling surprises. The action is non-stop and the fun is intense.`, // Generic description
                overlayColour: 'indigo',
            },
            {
                type: 'img',
                path: '/media/photos/stats.png',
                title: 'Detailed Statistics',
                description: `After each game, you'll receive personalized statistics that track your performance. These stats help you monitor your progress, improve your skills, and compete with friends to see who comes out on top!`, // Description is generic enough
                overlayColour: 'indigo',
            },
        ],
        socials: {
            videoPath: '/media/photos/cmxBg.mp4',
            title: 'Visit our Socials',
            description: "Stay updated with exclusive flash offers that you won’t want to miss, watch thrilling gameplay videos, and browse through stunning venue photos. Our socials are the perfect way to stay connected!", // Generic description
            instaLink: 'https://www.instagram.com/example', // Mock link
            color: 'indigo',
        },
    },
    funplexNorthside: { // Renamed from 'multimaxxQormi'
        header: {
            videoPath: '/media/photos/qormi.mp4',
            title: 'FUN-PLEX NORTH', // Mock name
            subtitle: 'Bumping cars, arcades, VR',
            overlayColor: 'sky',
        },
        download: {
            color: 'sky',
            btnColour: 'primary',
            link: '/media/offers.pdf',
        },
        booking: {
            fieldTitle: 'Choose your option to start booking',
            placeholder: 'Select a package',
            options: [
                'Arcade Fun Pass - €15 per person',
                'VR Experience (30 min) - €20 per person',
                'Bumper Cars (10 min) - €8 per person',
                'Ultimate Party Package - €250',
            ],
            color: 'sky',
            btnColour: 'primary',
        },
        cards: [
            {
                type: 'img',
                path: '/media/photos/square.jpg',
                title: 'Restaurant Service',
                description: `A welcoming family restaurant offering a variety of mouthwatering dishes. Enjoy light snacks, flavorful burgers, crisp salads, and pizzas. Our menu has something for everyone in a warm, friendly atmosphere.`, // Generic description
                overlayColour: 'sky',
            },
            {
                type: 'img',
                path: '/media/photos/a_m.png',
                title: 'Arcade Machines',
                description: `Dive into fun at our entertainment center, where everyone can enjoy the latest in modern arcade gaming! Our cutting-edge machines offer a variety of exciting games for all skill levels. Our arcade is the ultimate destination for adventure and excitement.`, // Generic description
                color: 'sky',
            },
            {
                type: 'img',
                path: '/media/photos/paviCars.jpg',
                title: 'Bumping Cars',
                description: `Get ready to spin, twirl, and revolve in our vibrant and thrilling Bumping Car Arena. Immerse yourself in a whirlwind of color as you navigate through the electrifying atmosphere, dodging and bumping into other cars in a fun and exhilarating ride.`, // Generic description
                overlayColour: 'sky',
            },
            {
                type: 'img',
                path: '/media/photos/vr_m.png',
                title: 'Virtual Reality',
                description: `Experience the next level of entertainment with our Virtual Reality offerings. Put on your VR headset and dive into captivating virtual worlds where imagination meets reality. Discover a range of experiences designed to suit different interests.`, // Generic description
                overlayColour: 'sky',
            },
        ],
        socials: {
            videoPath: '/media/photos/qormiParty.mp4',
            title: 'Visit our Socials',
            description: "Check out our social media channels to see the action in real time, and browse through stunning venue photos to get a feel for the atmosphere. Our socials are the perfect way to stay connected!", // Generic description
            instaLink: 'https://www.instagram.com/example',
            color: 'sky',
        },
    },
    funplexWestEnd: { // Renamed from 'multimaxxStjulians'
        header: {
            videoPath: '/media/photos/file.mp4',
            title: 'FUN-PLEX WEST', // Mock name
            subtitle: 'Laser tag, arcades, VR.',
            overlayColor: 'zinc',
        },
        download: {
            color: 'zinc900',
            btnColour: 'warning',
            link: '/media/offers.pdf',
        },
        booking: {
            fieldTitle: 'Choose your option to start booking',
            placeholder: 'Select a package',
            options: [
                '1 game of Laser Tag (10 min) - €7 per person',
                '2 games of Laser Tag (10 min each) - €12 per person',
                'VR Experience (30 min) - €20 per person',
                'Party Package - €150',
            ],
            color: 'zinc900',
            btnColour: 'warning',
        },
        cards: [
            {
                type: 'img',
                path: '/media/photos/a_m.png',
                title: 'Arcade Machines',
                description: `Welcome to our boundless gaming haven, where adventure awaits! Dive into an exhilarating world filled with endless possibilities as you explore a vast array of arcade experiences. Get ready for a journey of infinite fun and excitement!`, // Generic description
                overlayColour: 'zinc',
            },
            {
                type: 'img',
                path: '/media/photos/vr_m.png',
                title: 'Virtual Reality',
                description: `Step into the future with our cutting-edge Virtual Reality experience! Equip your VR headset and embark on extraordinary adventures as you explore stunning virtual worlds and engage in immersive gameplay.`, // Generic description
                overlayColour: 'zinc',
            },
            {
                type: 'img',
                path: '/media/photos/il_m.png',
                title: 'Indoor Laser Tag',
                description: `Gear up with our high-tech laser gear and dive into a dynamic arena filled with challenging obstacles and thrilling surprises. Whether you're teaming up or going solo, the action is non-stop and the fun is intense.`, // Generic description
                overlayColour: 'zinc',
            },
            {
                type: 'img',
                path: '/media/photos/stats.png',
                title: 'Detailed Statistics',
                description: `After each game, you'll receive personalized statistics that track your performance. These stats help you monitor your progress, improve your skills, and compete with friends to see who comes out on top!`, // Description is generic enough
                overlayColour: 'zinc',
            },
        ],
        socials: {
            videoPath: '/media/photos/mmxCards.mp4',
            title: 'Visit our Socials',
            description: "Our social channels keep you updated with offers, gameplay videos, and photos of our venue. Stay connected with us for all the latest news and information!", // Generic description
            instaLink: 'https://www.instagram.com/example',
            color: 'zinc900',
        },
    },
}
