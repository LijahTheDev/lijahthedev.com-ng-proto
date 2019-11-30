interface Lang {
  name: string;
  color: string;
}

interface Links {
  [index: number]: string;
}

export interface Project {
  id?: string;
  title?: string;
  description?: string;
  year?: number;
  lang?: Lang;
  color?: string;
  dark?: boolean;
  image?: string;
  links?: Links;
}
