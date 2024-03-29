export interface UserType {
  username: string;
  email: string;
  role: string;
  about: about;
  timeline: timeline[];
  skills: skills[];
  youtube?: youtube;
  projects: projects[];
  social_handles: social_handles[];
  testimonials: testimonials[];
  services: services[];
  createdAt?: string;
  updatedAt?: string;
}

export type projects = {
  liveurl: string;
  githuburl: string;
  title: string;
  sequence: number;
  image: {
    url: string;
  };
  description: string;
  techStack: string[];
  enabled: boolean;
};

export type services = {
  name: string;
  charge: string;
  desc: string;
  enabled: boolean;
  image: {
    url: string;
  };
};

export type social_handles = {
  platform: string;
  url: string;
  image: {
    url: string;
  };
  enabled: boolean;
};

export type testimonials = {
  name: string;
  review: string;
  position: string;
  enabled: boolean;
  image: {
    url: string;
  };
};

export type youtube = {
  url: string;
  title: string;
  sequence: number;
  image: null;
  embedId: string;
  enabled: boolean;
};

export type skills = {
  enabled: boolean;
  name: string;
  sequence: number;
  percentage: number;
  image: {
    url: string;
  };
};

export type timeline = {
  enabled: boolean;
  company_name: string;
  summary: string;
  sequence: number;
  startDate: string;
  endDate: string;
  jobTitle: string;
  jobLocation: string;
  bulletPoints: string[];
  forEducation: boolean;
};

export type about = {
  name: string;
  title: string;
  subTitle: string;
  description: string;
  quote?: string;
  avatar?:
    | {
        url: string | undefined;
      }
    | undefined;
  exp_year: string;
  address: string;
  phoneNumber: string;
};
