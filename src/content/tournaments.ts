import type { TournamentPlayed, TournamentStaffed } from '../utils/types';

export const tournamentsPlayed = ([{
  id: 1,
  date: 'February 26th, 2020',
  format: '1v1 Double Elimination',
  forumPostId: '1026857',
  img: 'olrt',
  name: 'osu! Low Rank Tournament',
  participantCount: 32,
  placement: {
    seed: 1,
    final: 1
  },
  rankRange: ['200k', '300k'],
}, {
  id: 2,
  date: 'April 11th, 2020',
  format: '2v2 Double Elimination',
  forumPostId: '1051009',
  img: 'npc2',
  name: 'Non-Professional Cup 2',
  participantCount: 44,
  placement: {
    final: 6,
    seed: 6
  },
  rankRange: ['150k', '250k'],
  team: {
    name: 'Fashionably Late',
    players: [{
      osuUserId: '11740481',
      username: 'Dream10'
    }, {
      osuUserId: '9653206',
      username: 'FourFifty'
    }, {
      osuUserId: '12056779',
      username: 'Serlum'
    }]
  }
}, {
  id: 3,
  date: 'July 22nd, 2020',
  format: '2v2 Double Elimination',
  forumPostId: '1111565',
  img: 'olrt2',
  name: 'osu! Low Rank Tournament 2',
  participantCount: 44,
  placement: {
    final: 12,
    seed: 9
  },
  rankRange: ['100k', '350k'],
  team: {
    name: 'No Skill',
    players: [{
      osuUserId: '15676464',
      username: 'chrissi'
    }, {
      osuUserId: '12420508',
      username: 'JesusWCS'
    }, {
      osuUserId: '14967328',
      username: 'Mysteri04'
    }, {
      osuUserId: '16229987',
      username: 'r6echo14'
    }, {
      osuUserId: '12056779',
      username: 'Serlum'
    }]
  }
}, {
  id: 4,
  date: 'August 4th, 2020',
  format: '1v1 Single Elimination',
  forumPostId: '1120107',
  img: 'otst',
  name: 'Oddie\'s TV Size Tournament',
  participantCount: 188,
  placement: {
    final: 32,
    seed: 8
  },
  rankRange: ['100k', '999k'],
}, {
  id: 5,
  date: 'September 5th, 2020',
  format: '2v2 Double Elimination',
  forumPostId: '1139956',
  img: 'stk8',
  name: 'STK8',
  participantCount: 60,
  placement: {
    final: 16
  },
  rankRange: ['80k', '150k'],
  team: {
    name: 'Totally Not Derankers',
    players: [{
      osuUserId: '9653206',
      username: 'FourFifty'
    }, {
      osuUserId: '8240995',
      username: 'Joryan'
    }]
  }
}, {
  id: 6,
  date: 'September 29th, 2020',
  format: '2v2 Double Elimination',
  forumPostId: '1154593',
  img: 'bqt2',
  name: 'BQT2',
  participantCount: 87,
  placement: {
    final: 6,
    seed: 3
  },
  rankRange: ['100k', '350k'],
  team: {
    name: 'Begone Farmers',
    players: [{
      osuUserId: '11364009',
      username: 'Alonso2903'
    }, {
      osuUserId: '8240995',
      username: 'Joryan'
    }]
  }
}, {
  id: 7,
  date: 'October 23rd, 2020',
  format: '1v1 Single Elimination',
  forumPostId: '1168579',
  img: 'ost',
  name: 'Orange\'s Scuffed Tournament',
  participantCount: 89,
  placement: {
    final :16,
    seed: 15
  },
  rankRange: ['100k', '200k']
}, {
  id: 8,
  date: 'December 6th, 2020',
  format: '2v2 Single Elimination',
  forumPostId: '1197583',
  img: 'awt',
  name: 'Aeris Winter Tournament',
  participantCount: 36,
  placement: {
    final: 4,
    seed: 6
  },
  rankRange: ['60k', '160k'],
  team: {
    name: 'Frencher Toast',
    players: [{
      osuUserId: '11364009',
      username: 'Alonso2903'
    }, {
      osuUserId: '16657449',
      username: 'AndromedaX1'
    }, {
      osuUserId: '14373729',
      username: 'MyAngelMissklik'
    }]
  }
}, {
  id: 9,
  date: 'December 12th, 2020',
  format: '1v1 Double Elimination',
  forumPostId: '1201581',
  img: 'lf6dc',
  name: 'Lolis Fantasy 6 Digits Cup',
  participantCount: 53,
  placement: {
    final: 2,
    seed: 3
  },
  rankRange: ['100k', '450k']
}, {
  id: 10,
  date: 'February 11th, 2021',
  format: '1v1 Double Elimination',
  forumPostId: '1247656',
  img: 'osdl',
  name: 'osu! Six Digits League Spring 2021',
  participantCount: 55,
  placement: {
    final: 3,
    seed: 3
  },
  rankRange: ['90k', '999k'],
  team: {
    name: 'When You See It',
    players: [{
      osuUserId: '16052525',
      username: 'Geag'
    }, {
      osuUserId: '8240995',
      username: 'Joryan'
    }]
  }
}, {
  id: 11,
  date: 'March 5th, 2021',
  format: '2v2 Double Elimination',
  forumPostId: '1265690',
  img: 'stk9',
  name: 'STK9',
  participantCount: 101,
  placement: {
    final: 8,
    seed: 14
  },
  rankRange: ['80k', '150k'],
  team: {
    name: 'Ukon Cherry',
    players: [{
      osuUserId: '13686468',
      username: 'Dr Skill Issue'
    }, {
      osuUserId: '9653206',
      username: 'FourFifty'
    }]
  }
}, {
  id: 12,
  date: 'March 26th, 2021',
  format: '2v2 Double Elimination',
  forumPostId: '1334728',
  img: 'estsummer2021',
  name: 'Entropy\'s Summer Tournament 2021',
  participantCount: 50,
  placement: {
    final: 8,
    seed: 9
  },
  rankRange: ['75k', '135k'],
  team: {
    name: 'Shroomers',
    players: [{
      osuUserId: '15518219',
      username: 'Kocha'
    }, {
      osuUserId: '10747626',
      username: 'SadShiba'
    }, {
      osuUserId: '7173963',
      username: 'Sanduha'
    }]
  }
}, {
  id: 13,
  date: 'June 5th, 2021',
  format: '1v1 Double Elimination',
  forumPostId: '1342701',
  img: 'hkc',
  name: 'HKttyCup (Tier 2)',
  participantCount: 68,
  placement: {
    final: 3,
    seed: 3
  },
  rankRange: ['80k', '150k']
}, {
  id: 14,
  date: 'June 19th, 2021',
  format: '4v4 Double Elimination',
  forumPostId: '1353676',
  img: 'mit',
  name: 'Moop\'s Intermediate Tournament',
  participantCount: 32,
  placement: {
    final: 6,
    seed: 12
  },
  rankRange: ['50k', '160k'],
  team: {
    name: ':pray: 4 Schedule',
    players: [{
      osuUserId: '14060864',
      username: '-wicked-'
    }, {
      osuUserId: '12828809',
      username: 'ADancingPot'
    }, {
      osuUserId: '3191010',
      username: 'Andy26'
    }, {
      osuUserId: '11364009',
      username: 'Alonso2903'
    }, {
      osuUserId: '12125431',
      username: 'FrozenTea'
    }, {
      osuUserId: '6696542',
      username: 'Rone'
    }, {
      osuUserId: '6693576',
      username: 'StolenName4'
    }]
  }
}, {
  id: 15,
  date: 'October 16th, 2021',
  format: '2v2 Double Elimination',
  forumPostId: '1443224',
  img: 'ufc',
  name: 'UFC',
  participantCount: 25,
  placement: {
    final: 3,
    seed: 1
  },
  rankRange: ['80k', '150k'],
  team: {
    name: 'Team',
    players: [{
      osuUserId: '13352562',
      username: 'Numero_Zer0e'
    }, {
      osuUserId: '11364009',
      username: 'Alonso2903'
    }, {
      osuUserId: '7452074',
      username: 'Shark'
    }]
  }
}, {
  id: 16,
  date: 'October 16th, 2021',
  format: '2v2 Double Elimination',
  forumPostId: '1443184',
  img: 'woc',
  name: 'WhiteOut Cup',
  participantCount: 30,
  placement: {
    final: 3,
    seed: 3
  },
  rankRange: ['69k', '999k'],
  team: {
    name: 'Nameless',
    players: [{
      osuUserId: '3787563',
      username: '[ TrainerRed ]'
    }, {
      osuUserId: '10766611',
      username: 'NekoMeganG'
    }]
  }
}, {
  id: 17,
  date: 'November 30th, 2021',
  format: '2v2 Double Elimination',
  forumPostId: '1473528',
  img: 'dc2',
  name: 'Duck Cup 2',
  participantCount: 77,
  placement: {
    final: 32,
    seed: 29
  },
  rankRange: ['60k', '140k'],
  team: {
    name: 'Quack',
    players: [{
      osuUserId: '4937932',
      username: 'Overladsc'
    }, {
      osuUserId: '11246010',
      username: '-R4z-'
    }]
  }
}] satisfies TournamentPlayed[]).reverse();

export const tournamentsStaffed = ([{
  id: 1,
  date: 'January 9th, 2021',
  img: 'tc',
  name: 'Tomori Cup',
  roles: ['Referee'],
  forumPostId: '1222027'
}, {
  id: 2,
  date: 'January 31st, 2021',
  img: 'estspring2021',
  name: 'Entropy\'s Spring Tournament 2021',
  roles: ['Referee'],
  forumPostId: '1238765'
}, {
  id: 3,
  date: 'January 31st, 2021',
  img: 'pdn',
  name: 'Pas De Nom',
  roles: ['Spreadsheeter', 'GFX Designer'],
  forumPostId: '1239289',
  spreadsheetId: '1O8iTaV_ZvJAerjJAj71O-_y-gHZN-XXB8mepmxTt8vg'
}, {
  id: 4,
  date: 'February 21st, 2021',
  img: 'ot',
  name: 'oldsu! Tournament',
  roles: ['Spreadsheeter'],
  spreadsheetId: '1L0u_cClBDyhATTmg9k4whBtnagVuKj5pqj-PgAqEyJE'
}, {
  id: 5,
  date: 'March 7th, 2021',
  img: 'gsht',
  name: 'Gary\'s Hidden Spring Tournament',
  roles: ['Referee'],
  forumPostId: '1266715'
}, {
  id: 6,
  date: 'March 20th, 2021',
  img: 'npc4',
  name: 'Non-Professional Cup 4',
  roles: ['Referee'],
  forumPostId: '1278163'
}, {
  id: 7,
  date: 'April 14th, 2021',
  img: 'woot',
  name: 'WhiteCat Official osu! Tournament',
  roles: ['Referee'],
  forumPostId: '1298947'
}, {
  id: 8,
  date: 'May 30th, 2021',
  img: 'kb2st',
  name: 'Koro\'s Back 2 Skool Tournament',
  roles: ['Referee', 'Spreadsheeter'],
  forumPostId: '1337953',
  spreadsheetId: '1xCa1UH-IPCA5K726o2EWPUWuYEF2NzbiuSOc3cm-2s0'
}, {
  id: 9,
  date: 'May 30th, 2021',
  img: 'jss',
  name: 'Juni\'s Summer Singles',
  roles: ['Referee'],
  forumPostId: '1329453'
}, {
  id: 10,
  date: 'June 3rd, 2021',
  img: 'tc2',
  name: 'Tomori Cup 2',
  roles: ['Referee'],
  forumPostId: '1340754'
}, {
  id: 11,
  date: 'August 26th, 2021',
  img: 'stt2',
  name: 'Scarlet\'s Touhou Tournament 2',
  roles: ['Referee'],
  forumPostId: '1407029'
}, {
  id: 12,
  date: 'September 11th, 2021',
  img: 'cc2',
  name: 'Circle Cup 2',
  roles: ['Referee'],
  forumPostId: '1418634'
}, {
  id: 13,
  date: 'September 15th, 2021',
  img: 'ckt',
  name: 'Crying Koroking Tournament',
  roles: ['Spreadsheeter'],
  forumPostId: '1421414',
  spreadsheetId: '1LzxkDskN0qiuYpEj66E12GBvcK9z9fON1zowcwZeYqA'
}, {
  id: 14,
  date: 'October 15th, 2021',
  img: 'hh',
  name: 'Hidden Havoc!',
  roles: ['Spreadsheeter'],
  forumPostId: '1442282',
  spreadsheetId: '1iGQgtMSSYPB7ynCU6nydQMgYE7-MA70EIi_TJueKaTM'
}, {
  id: 15,
  date: 'November 10th, 2021',
  img: 'uwc',
  name: 'UTSGhost\'s Winter Cup',
  roles: ['Referee'],
  forumPostId: '1460280'
}, {
  id: 16,
  date: 'November 17th, 2021',
  img: 'cdc',
  name: 'CLXXIII\'s Draft Cup',
  roles: ['Referee'],
  forumPostId: '1465092'
}, {
  id: 17,
  date: 'November 26th, 2021',
  img: '6wc',
  name: '6 Digit World Cup',
  roles: ['Referee', 'Playtester'],
  forumPostId: '1471035'
}, {
  id: 18,
  date: 'December 5th, 2021',
  img: 'kt',
  name: 'Kono Tournamento',
  roles: ['Spreadsheeter'],
  forumPostId: '1476854',
  spreadsheetId: '1G9FdKodGsd-_URsCc4CcCnLJ1-aSoQSlPDshWwtpPHw'
}, {
  id: 19,
  date: 'December 14th, 2021',
  img: 'b5db',
  name: 'Binfy\'s 5 Digit Bracket',
  roles: ['Referee'],
  forumPostId: '1482422'
}, {
  id: 20,
  date: 'December 15th, 2021',
  img: 'pis',
  name: 'Pandemonium Intl. Showdown',
  roles: ['Referee'],
  forumPostId: '1482993'
}, {
  id: 21,
  date: 'January 2nd, 2022',
  img: 'zmt',
  name: 'Zen\'s Multi Tourney',
  roles: ['Spreadsheeter'],
  forumPostId: '1495139',
  spreadsheetId: '1s4etyAC2SHA0efWNBH9xZp9KLQB_fmWaMPK17AwmkYU'
}, {
  id: 22,
  date: 'January 3rd, 2022',
  img: 'gc',
  name: 'Gura Cup',
  roles: ['Spreadsheeter'],
  forumPostId: '1495731',
  spreadsheetId: '1GkPJJEK5PAllbKB5M-K6y8stF0ZmN1CaG6xMVWOYt7E'
}, {
  id: 23,
  date: 'January 4th, 2022',
  img: 'tc3',
  name: 'Tomori Cup 3',
  roles: ['Spreadsheeter'],
  forumPostId: '1496154'
}, {
  id: 24,
  date: 'March 6th, 2022',
  img: 'pdn2',
  name: 'Pas De Nom 2',
  roles: ['Spreadsheeter'],
  forumPostId: '1535404',
  spreadsheetId: '149MMKanLuR_Yh2Ss42t1LfsRJiePjNtUJMn3soMubTE'
}, {
  id: 25,
  date: 'March 23rd, 2022',
  img: 'evoc',
  name: 'Evolution Cup',
  roles: ['Spreadsheeter'],
  forumPostId: '1545494',
  spreadsheetId: '1PlYwN9f_A9Scj_p2lV4JhUybgIdGO_Etz7XmaPkL2CE'
}, {
  id: 26,
  date: 'April 30th, 2022',
  img: '6sc',
  name: '6 Digit States Cup',
  roles: ['Spreadsheeter'],
  forumPostId: '1568987',
  spreadsheetId: '12CzHfWVnsXcVo5YtkH9Jghx3RhlSZSQ42B_8quQtvwI'
}, {
  id: 27,
  date: 'May 15th, 2022',
  img: 'occ',
  name: 'osu! Charity Cup',
  roles: ['Spreadsheeter'],
  forumPostId: '1577546',
  spreadsheetId: '1LZnTWyfUakIFb03MVXuBOWb2FfIx0by5asF4VMHSINc'
}, {
  id: 28,
  date: 'May 17th, 2022',
  img: 'stdc',
  name: 'Scarlet\'s Team Draft Competition',
  roles: ['Spreadsheeter'],
  forumPostId: '1578524',
  spreadsheetId: '14Dbf_kZ9djHwWoUyWtheqMxVawPFAVI7Wk_7SZO8K54'
}, {
  id: 29,
  date: 'May 27th, 2022',
  img: 'oprr',
  name: 'Rock Rumble',
  roles: ['Spreadsheeter'],
  forumPostId: '1584353',
  spreadsheetId: '1WavhqoaqEorpb2lQem5KKYXn7qbmBOKPTuvzSLmnAQo'
}, {
  id: 30,
  date: 'May 30th, 2022',
  img: 'chl',
  name: 'Coffee Hispanic: Latte',
  roles: ['Spreadsheeter'],
  forumPostId: '1586059',
  spreadsheetId: '186DY3WgzSecjrabnePI74zq8JR8oWRmrWP8byQ_HO-4'
}, {
  id: 31,
  date: 'May 30th, 2022',
  img: 'estsummer2022',
  name: 'Entropy\'s Summer Tournament 2022',
  roles: ['Front-end Developer', 'Backend Developer'],
  forumPostId: '1586300',
  websiteId: 1
}, {
  id: 32,
  date: 'June 28th, 2022',
  img: 'bct',
  name: 'Blob Cat Tournament',
  roles: ['Spreadsheeter'],
  forumPostId: '1602891',
  spreadsheetId: '1k5VGMNdWDW9cxBU64Nu6rQfzDvyABqah4NVVVocgrNY'
}, {
  id: 33,
  date: 'July 15th, 2022',
  img: '6wc2',
  name: '6 Digit World Cup 2',
  roles: ['Spreadsheeter'],
  forumPostId: '1612568',
  spreadsheetId: '1y69tdh941OQctTsbhz_JNBCi4RbxH9nXNmncEmpeDjA'
}, {
  id: 34,
  date: 'November 12th, 2022',
  img: 'wdt',
  name: 'Waffle\'s Draft Tournament',
  roles: ['Front-end Developer', 'Backend Developer'],
  forumPostId: '1675352',
  websiteId: 3
}, {
  id: 35,
  date: 'January 22nd, 2024',
  img: '5wc2024',
  name: '5 Digit World Cup 2024',
  roles: ['Front-end Developer'],
  forumPostId: '1874523',
  websiteId: 7
}, {
  id: 36,
  date: 'February 25th, 2024',
  img: 'testopen',
  name: 'TEST Open',
  roles: ['Translator'],
  forumPostId: '1889282'
}] satisfies TournamentStaffed[]).reverse();