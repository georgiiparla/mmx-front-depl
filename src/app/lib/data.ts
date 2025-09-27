// src/app/lib/data.ts

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
    battlemaxx: {
        header: {
            videoPath: '/media/photos/BATTLEMAXX.mp4',
            title: 'BATTLEMAXX',
            subtitle: '#1 outdoor laser tag in Malta',
            overlayColor: 'emerald',
        },
        download: {
            color: 'emerald',
            btnColour: 'accent',
            link: '/media/bayStreetOffers.pdf',
        },
        booking: {
            fieldTitle: 'Choose your option to start booking process',
            placeholder: 'Pick one',
            options: [
                'Kordin Prison 2 hours - €300 (minimum 10 players, €30 p/p)',
                'Kordin Prison 3 hours - €400 (minimum 10 players, €40 p/p)',
                'Ghaxaq Grounds 2 hours - €300 (minimum 10 players, €30 p/p)',
                'Ghaxaq Grounds 3 hours - €400 (minimum 10 players, €40 p/p)',
            ],
            color: 'emerald',
            btnColour: 'accent',
        },
        cards: [
            {
                type: 'img',
                path: '/media/photos/bmxBro.jpg',
                title: 'About Us',
                description: `Welcome to BATTLEMAXX, Malta's premier laser tag experience! Get ready for an action-packed adventure like no other. Gather your friends and family for a day of exhilarating fun and safe entertainment that you won’t forget. At BATTLEMAXX, we promise to deliver one of the most unforgettable experiences of your life.`,
                overlayColour: 'emerald',
            },
            {
                type: 'img',
                path: '/media/photos/bmxBro2.jpg',
                title: 'Huge armoury',
                description: `Our armoury includes over 200 guns, offering the latest high-tech equipment for your use. We provide a variety of thrilling playgrounds and locations, ensuring a fantastic experience whether you’re spending time with friends, hosting a team-building event, or planning a memorable kids' party.`,
                overlayColour: 'emerald',
            },
            {
                type: 'img',
                path: '/media/photos/bmxBro3.jpg',
                title: 'Variety of Mods',
                description: `Our laser tag experience offers a variety of exciting game modes to keep the action fresh and thrilling. You can engage in classic modes like Capture the Towers or strategize with your team in Team Deathmatch. For those who love tactical challenges, try Plant the Bomb and more! Each mode provides a unique way to test your skills and teamwork.`,
                overlayColour: 'emerald',
            },
            {
                type: 'img',
                path: '/media/photos/stats.png',
                title: 'Detailed statistics',
                description: `After each game, you'll receive personalized statistics that track your performance. From accuracy and total hits to eliminations and objective completions, you’ll get a detailed breakdown of your gameplay. These stats help you monitor your progress, improve your skills, and compete with friends to see who comes out on top!`,
                overlayColour: 'emerald',
            },
        ],
        socials: {
            videoPath: '/media/photos/bmxGozo.mp4',
            title: 'Visit our Socials',
            description: "We highly recommend checking out our social media channels. Stay updated with exclusive flash offers that you won’t want to miss, watch thrilling gameplay videos to see the action in real time, and browse through stunning venue photos to get a feel for the atmosphere. Whether you're planning a visit or just curious, our socials are the perfect way to stay connected and get all the information you need!",
            instaLink: 'https://www.instagram.com/multimaxxmalta/',
            color: 'emerald',
        },
    },
    multimaxxPaola: {
        header: {
            videoPath: '/media/photos/cmx.mp4',
            title: 'CYBERMAXX',
            subtitle: 'Indoor laser tag in Paola.',
            overlayColor: 'indigo',
        },
        download: {
            color: 'indigo',
            btnColour: 'secondary',
            link: '/media/bayStreetOffers.pdf',
        },
        booking: {
            fieldTitle: 'Choose your option to start booking process',
            placeholder: 'Pick one',
            options: [
                '1 game of Laser Tag (10 min) - €7 per person',
                '2 games of LaserTag (10 min each) - €12 per person',
                '3 games of LaserTag (10 min each) - €17 per person',
                '3 games of LaserTag (10 min each) - €150 (minimum 10 players, €15 p/p)',
            ],
            color: 'indigo',
            btnColour: 'secondary',
        },
        cards: [
            {
                type: 'img',
                path: '/media/photos/cmxParty.jpg',
                title: 'Laser Tag',
                description: `Enter the adrenaline-charged realm of Indoor Laser Tag, where every corner hides a new challenge and every move counts! Suit up with your laser vest and prepare to navigate a maze of obstacles in a high-stakes game of skill and strategy. Whether you’re in it for the team victory or aiming to dominate solo, the energy is electric, and the excitement never lets up. It’s not just a game; it’s an experience that will have you coming back for more!`,
                overlayColour: 'indigo',
            },
            {
                type: 'video',
                path: '/media/photos/cmxArena.mp4',
                title: 'Sprawling maze',
                description: `Get ready to test your skills in our vast Maze Laser Tag Arena. Navigate through an intricate labyrinth of corridors, designed to challenge even the most experienced players. With plenty of space to strategize, this arena offers endless excitement and intense gameplay. Whether you're leading your team or hunting down your rivals, our sprawling maze is the perfect setting for the ultimate laser tag showdown!`,
                color: 'indigo',
            },
            {
                type: 'img',
                path: '/media/photos/lasermaxxFamily.jpg',
                title: 'Indoor Laser tag',
                description: `Step into the heart-pounding world of Indoor Laser Tag, where strategy and excitement collide in an electrifying battle of wits and agility! Gear up with our high-tech laser gear and dive into a dynamic arena filled with challenging obstacles and thrilling surprises. Whether you're teaming up or going solo, the action is non-stop and the fun is intense. Get ready to experience a game that will keep you on the edge of your seat and leave you craving more!`,
                overlayColour: 'indigo',
            },
            {
                type: 'img',
                path: '/media/photos/stats.png',
                title: 'Detailed statistics',
                description: `After each game, you'll receive personalized statistics that track your performance. From accuracy and total hits to eliminations and objective completions, you’ll get a detailed breakdown of your gameplay. These stats help you monitor your progress, improve your skills, and compete with friends to see who comes out on top!`,
                overlayColour: 'indigo',
            },
        ],
        socials: {
            videoPath: '/media/photos/cmxBg.mp4',
            title: 'Visit our Socials',
            description: "We highly recommend checking out our social media channels. Stay updated with exclusive flash offers that you won’t want to miss, watch thrilling gameplay videos to see the action in real time, and browse through stunning venue photos to get a feel for the atmosphere. Whether you're planning a visit or just curious, our socials are the perfect way to stay connected and get all the information you need!",
            instaLink: 'https://www.instagram.com/multimaxxmalta/',
            color: 'indigo',
        },
    },
    multimaxxQormi: {
        header: {
            videoPath: '/media/photos/qormi.mp4',
            title: 'MULTIMAXX QORMI',
            subtitle: 'Bumping cars, arcades, VR',
            overlayColor: 'sky',
        },
        download: {
            color: 'sky',
            btnColour: 'primary',
            link: '/media/bayStreetOffers.pdf',
        },
        booking: {
            fieldTitle: 'Choose your option to start booking process',
            placeholder: 'Pick one',
            options: [
                '1 game of Laser Tag (10 min) - €7 per person',
                '2 games of LaserTag (10 min each) - €12 per person',
                '3 games of LaserTag (10 min each) - €17 per person',
                '3 games of LaserTag (10 min each) - €150 (minimum 10 players, €15 p/p)',
            ],
            color: 'sky',
            btnColour: 'primary',
        },
        cards: [
            {
                type: 'img',
                path: '/media/photos/square.jpg',
                title: 'Restaurant Service',
                description: `A welcoming family restaurant offering a variety of mouthwatering dishes to satisfy every craving. Enjoy light snacks, flavorful homemade burgers, crisp salads, and perfectly baked pizzas. Our superb pasta dishes are crafted with love and the finest ingredients, ensuring a delightful dining experience. Whether you're in the mood for a quick bite or a leisurely meal, our menu has something for everyone in a warm, friendly atmosphere.`,
                overlayColour: 'sky',
            },
            {
                type: 'video',
                path: '/media/photos/paviArcs.mp4',
                title: 'Arcade machines',
                description: `Dive into fun at our entertainment center, where kids can enjoy the latest in modern arcade gaming! Our cutting-edge machines offer a variety of exciting games with vibrant graphics and interactive gameplay. Perfect for all skill levels, there's something for every child, whether they're racing, solving puzzles, or testing reflexes. Our arcade is the ultimate destination for adventure and excitement. Come play and let the good times roll!`,
                color: 'sky',
            },
            {
                type: 'img',
                path: '/media/photos/paviCars.jpg',
                title: 'Bumping cars',
                description: `Get ready to spin, twirl, and revolve in all directions at the vibrant and thrilling Bumping Car Arena inside MULTIMAXX. Immerse yourself in a whirlwind of color as you navigate through the electrifying atmosphere, dodging and bumping into other cars in a fun and exhilarating ride. Whether you're looking for a burst of adrenaline or just some lighthearted fun, the arena promises endless excitement and unforgettable moments.`,
                overlayColour: 'sky',
            },
            {
                type: 'img',
                path: '/media/photos/vrGirl.jpeg',
                title: 'Virtual Reality',
                description: `Experience the next level of entertainment with our Virtual Reality offerings. Put on your VR headset and dive into captivating virtual worlds where imagination meets reality. Whether you're exploring new environments or enjoying immersive gameplay, there's something for everyone. Discover a range of experiences designed to suit different interests, and enjoy a new way to have fun. Ready for an adventure that takes you beyond the ordinary?`,
                overlayColour: 'sky',
            },
        ],
        socials: {
            videoPath: '/media/photos/qormiParty.mp4',
            title: 'Visit our Socials',
            description: "We highly recommend checking out our social media channels. Stay updated with exclusive flash offers that you won’t want to miss, watch thrilling gameplay videos to see the action in real time, and browse through stunning venue photos to get a feel for the atmosphere. Whether you're planning a visit or just curious, our socials are the perfect way to stay connected and get all the information you need!",
            instaLink: 'https://www.instagram.com/multimaxxmalta/',
            color: 'sky',
        },
    },
    multimaxxStjulians: {
        header: {
            videoPath: '/media/photos/file.mp4',
            title: 'MULTIMAXX ST.JULIANS',
            subtitle: 'Laser tag, arcades, VR.',
            overlayColor: 'zinc',
        },
        download: {
            color: 'zinc900',
            btnColour: 'warning',
            link: '/media/bayStreetOffers.pdf',
        },
        booking: {
            fieldTitle: 'Choose your option to start booking process',
            placeholder: 'Pick one',
            options: [
                '1 game of Laser Tag (10 min) - €7 per person',
                '2 games of LaserTag (10 min each) - €12 per person',
                '3 games of LaserTag (10 min each) - €17 per person',
                '3 games of LaserTag (10 min each) - €150 (minimum 10 players, €15 p/p)',
            ],
            color: 'zinc900',
            btnColour: 'warning',
        },
        cards: [
            {
                type: 'img',
                path: '/media/photos/mmxCars.jpg',
                title: 'Arcade machines',
                description: `Welcome to our boundless gaming haven, where adventure awaits at every corner! Dive into an exhilarating world filled with endless possibilities as you use your play cards to explore a vast array of arcade experiences. Whether you're chasing high scores or discovering new favorites, our diverse selection of games guarantees non-stop entertainment for everyone. Get ready for a journey of infinite fun and excitement!`,
                overlayColour: 'zinc',
            },
            {
                type: 'img',
                path: '/media/photos/mmxVr.jpg',
                title: 'Virtual Reality',
                description: `Step into the future with our cutting-edge Virtual Reality experience, where the boundaries of imagination and reality blend seamlessly! Equip your VR headset and embark on extraordinary adventures as you explore stunning virtual worlds and engage in immersive gameplay. With a range of thrilling experiences designed for all interests, you’ll find yourself lost in a realm where the excitement knows no limits. Prepare for a journey beyond your wildest dreams and redefine what it means to have fun!`,
                overlayColour: 'zinc',
            },
            {
                type: 'img',
                path: '/media/photos/lasermaxxFamily.jpg',
                title: 'Indoor Laser tag',
                description: `Step into the heart-pounding world of Indoor Laser Tag, where strategy and excitement collide in an electrifying battle of wits and agility! Gear up with our high-tech laser gear and dive into a dynamic arena filled with challenging obstacles and thrilling surprises. Whether you're teaming up or going solo, the action is non-stop and the fun is intense. Get ready to experience a game that will keep you on the edge of your seat and leave you craving more!`,
                overlayColour: 'zinc',
            },
            {
                type: 'img',
                path: '/media/photos/stats.png',
                title: 'Detailed statistics',
                description: `After each game, you'll receive personalized statistics that track your performance. From accuracy and total hits to eliminations and objective completions, you’ll get a detailed breakdown of your gameplay. These stats help you monitor your progress, improve your skills, and compete with friends to see who comes out on top!`,
                overlayColour: 'zinc',
            },
        ],
        socials: {
            videoPath: '/media/photos/mmxCards.mp4',
            title: 'Visit our Socials',
            description: "We highly recommend checking out our social media channels. Stay updated with exclusive flash offers that you won’t want to miss, watch thrilling gameplay videos to see the action in real time, and browse through stunning venue photos to get a feel for the atmosphere. Whether you're planning a visit or just curious, our socials are the perfect way to stay connected and get all the information you need!",
            instaLink: 'https://www.instagram.com/multimaxxmalta/',
            color: 'zinc900',
        },
    },
}