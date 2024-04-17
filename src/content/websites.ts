import type { Website } from '../utils/types';

export const websites: Website[] = [{
  name: 'EST Summer 2022',
  description: 'First commissioned website. Website for EST Summer 2022 osu! tournament.',
  url: 'https://esttournaments.com',
  img: {
    folder: 'est-summer-2022',
    count: 5
  }
}, {
  name: 'Mario564\'s Website (v1)',
  description: 'The first version of my personal website.',
  url: 'https://mario564.com',
  img: {
    folder: 'mario564-website-v1',
    count: 3,
  }
}, {
  name: 'WDT Winter 2022 Pickems',
  description: 'Pickems website for Waffle\'s Draft Tournament Winter 2022 osu! tournament.',
  url: 'https://wdt-winter-2022-pickems.web.app',
  img: {
    folder: 'wdt-winter-2022-pickems',
    count: 3
  }
}, {
  name: 'starlightof\'s Portfolio',
  description: 'Portfolio website designed by starlightof using Figma, developed by me.',
  url: 'https://starlightof.com',
  img: {
    folder: 'starlightof-portfolio',
    count: 4
  }
}, {
  name: 'Eclipse Manager',
  description: 'Website for managing everything related to the Eclipse Open series of osu! tournaments. The tournament and the site were cancelled.',
  img: {
    folder: 'eclipse-manager',
    count: 5
  }
}, {
  name: 'osu.js Docs',
  description: 'Documentation site for my library osu.js.',
  url: 'https://osujs.mario564.com',
  repo: 'https://github.com/L-Mario564/osu.js',
  img: {
    folder: 'osu-js-docs',
    count: 3
  }
}, {
  name: '5WC 2024',
  description: 'Information, player registration and team management site for the 5WC 2024 osu! tournament. I was the lead developer of the frontend team.',
  url: 'https://5wc.stagec.xyz',
  repo: 'https://github.com/5DigitWorldCup/2024Website',
  img: {
    folder: '5wc-2024',
    count: 4
  }
}].reverse();
