import type { Project } from "@/models/Projects";

export const projectLists = [
  {
    name: 'Escape Velocity',
    description: 'Vertical Scrolling shooting game',
    type: 'game',
    tags: ['Raylib', 'Web', 'Web Assembly'],

    imgUrl: 'https://img.itch.zone/aW1nLzIwMTEzMjYwLmdpZg==/original/zVDrOp.gif',
    sourceCode: 'https://github.com/UnknownRori/mini-jam-179',
    itchIo: 'https://unknownrori.itch.io/escape-velocity',
  },
  {
    name: 'CLI Video Player',
    description: 'Terminal Video Player written in Rust, it\'s render video on Terminal',
    type: 'app',
    tags: ['Rust', 'ffmpeg', 'Video Player', 'Terminal'],

    imgUrl: 'https://github.com/UnknownRori/cli-video-player/raw/main/screenshot/demo.jpg',
    sourceCode: 'https://github.com/UnknownRori/cli-video-player',
    previewUrl: 'https://youtu.be/1PNJHKkE3QI?si=rDZZ2hwC7u1l7Krp',
  },
  {
    name: 'Kosuzu Want Peace',
    description: 'Touhou Game Jam 2026',
    type: 'game',
    tags: ['Collaboration', 'GDevelop', 'Krita', 'FL Studio', 'Musescore', 'Tohuou Project'],

    imgUrl: 'https://img.itch.zone/aW1nLzI1Njg3Njc2LnBuZw==/315x250%23c/kYmU1s.png',
    itchIo: 'https://raykeju.itch.io/kosuzu-game',
  },
  {
    name: 'Touhou Unfinished Matrix Dream',
    description: 'Touhou Gameboy Cover',
    type: 'music',
    tags: ['Gameboy', 'Music', '8-Bit', 'VGM', 'Touhou Project'],

    imgUrl: 'https://f4.bcbits.com/img/a3227884736_16.jpg',
    previewUrl: 'https://open.spotify.com/album/1XOjB6SruP6ZhWjGJ6SSls',
  },
  {
    name: 'Monas Jas Hujan - Project Kurenai',
    description: 'Company website',
    type: 'web',
    tags: ['SSR', 'Laravel', 'Bootstrap'],

    imgUrl: '/image/1745666623750.jpg',
    previewUrl: 'https://monasjashujan.com/',
  },
  {
    name: 'Schmhotel',
    description: 'Hotel reservation app',
    type: 'web',
    tags: ['E-Commerce', 'SSR', 'Laravel', 'Bootstrap'],

    imgUrl: 'https://user-images.githubusercontent.com/68576836/267157350-6380e0ca-3bd0-4342-a514-584cd135b782.png',
    sourceCode: 'https://github.com/UnknownRori/reservation-room-app',
  },
  {
    name: 'TouhouRad',
    description: 'Multi-Platform Touhou Music Player',
    type: 'app',
    tags: ['Flutter', 'Mobile', 'Multi-platform', 'Touhou Project'],

    imgUrl: '/image/Screenshot_20240921-161100.png',
    sourceCode: 'https://github.com/UnknownRori/touhourad',
  },
  {
    name: 'Rin',
    description: 'Minimalistic PHP Framework inspired by Laravel elegantness',
    type: 'web',
    tags: ['PHP', 'Framework'],

    imgUrl: 'https://opengraph.githubassets.com/220e217e0f31a920a690f709c3ad7a05f57eb373407557687f3f99c846d0c155/UnknownRori/rin',
    sourceCode: 'https://github.com/UnknownRori/Rin',
  },
  {
    name: 'Lilith Itou',
    description: 'First Original Character',
    type: 'artwork',
    tags: ['Original Character', 'pixel-art'],

    imgUrl: '/assets/img/me.gif',
    pixiv: 'https://www.pixiv.net/en/artworks/142875935',
  },
  {
    name: 'Lyra',
    description: 'Rigel Theater\'s Original Character',
    type: 'artwork',
    tags: ['Original Character', 'pixel-art', 'Rigel Theater'],

    imgUrl: '/image/73.gif',
    pixiv: 'https://www.pixiv.net/en/artworks/142965347',
  },
  {
    name: 'Keine Kamishirasawa',
    description: 'Touhou Project\'s 8 Character',
    type: 'artwork',
    tags: ['pixel-art', 'Touhou Project'],

    imgUrl: '/image/78.gif',
    pixiv: 'https://www.pixiv.net/en/artworks/143402826',
  },
] as Project[];

type Grouped<T extends { type: string }> = Record<
  string,
  { type: string; items: T[] }
>;

export type GroupProject = Grouped<Project>;

export const projects = projectLists.reduce<GroupProject>((acc, item) => {
  if (!acc[item.type]) {
    acc[item.type] = {
      type: item.type,
      items: [],
    };
  }

  acc[item.type].items.push(item);
  return acc;
}, {})

export const projectTypes = [...new Set(projectLists.map((project) => project.type))];

