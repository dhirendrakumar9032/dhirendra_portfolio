import { IconType } from "react-icons";

export interface ExperienceEntry {
    role: string;
    company: string;
    period?: string;
    responsibilities?: string[];
  }

  export interface BlogCardProps {
    title: string;
    description: string;
    readTime: string;
    imageUrl: string;
    url: string;
  }

  export type ContactFormValues = {
    fullName: string;
    email: string;
    message?: string;
  };

  export type socialMediaLinksType = {
    link: string;
    logo: IconType;
  };

  export type NaveItems = {
    id:string,
    icon:JSX.Element
  }

  export type SkillsType = {
    name:string;
    icon:string
  }
