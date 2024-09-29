export type Simplify<T> = { [K in keyof T]: T[K] } & {};

export interface Technology {
  name: string;
  imgName: string;
  website: string;
  experience: 1 | 2 | 3 | 4 | 5;
}

interface Project {
  name: string;
  description: string;
  url?: string;
}

export interface Website extends Project {
  repo?: string;
  img: {
    folder: string;
    count: number;
  };
}

export interface Tool extends Project {
  repo?: string;
}

export interface OSSProject extends Project {
  repo: string;
  /** Amount of pull requests merged */
  contributions: number;
}

interface Tournament {
  name: string;
  date: string;
  forumPostId: string;
  img: string;
}

type StaffRole = 'Spreadsheeter' | 'GFX Designer' | 'Referee' | 'Front-end Developer' | 'Backend Developer';

export interface TournamentPlayed extends Tournament {
  format: string;
  participantCount: number;
  placement: {
    final: number;
    seed?: number;
  };
  rankRange: [string, string] | 'open';
  team?: {
    name: string;
    players: {
      osuUserId: string;
      username: string;
    }[];
  };
}

export interface TournamentStaffed extends Tournament {
  roles: StaffRole[];
}

export interface TournamentBanner {
  date: string;
  img: string;
  height: number;
  tournament: string;
  type: 'staff'|  'player';
}
