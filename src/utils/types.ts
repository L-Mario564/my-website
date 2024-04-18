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
