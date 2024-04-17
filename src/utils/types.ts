export interface Technology {
  name: string;
  imgName: string;
  website: string;
  experience: 1 | 2 | 3 | 4 | 5;
}

export interface Website {
  name: string;
  description: string;
  url?: string;
  repo?: string;
  img: {
    folder: string;
    count: number;
  };
}