export interface ISocialNetworks {
  socialNetworks: ISocialNetwork[];
}

export interface ISocialNetwork {
  image: string;
  name: string;
  link: string;
  category: Category;
}

export interface IConfiguration {
  profileImagePath: string;
}

export enum Category {
  Professional = 'Professional',
  Development = 'Development',
  Personal = 'Personal',
}

export enum Languages {
  PtBR = 'pt-BR',
  EnUS = 'en-US',
  EsEs = 'es-ES',
}
