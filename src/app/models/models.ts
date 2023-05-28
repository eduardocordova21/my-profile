export interface ISocialNetworks {
  socialNetworks: ISocialNetwork[];
}

export interface ISocialNetwork {
  img: string;
  name: string;
  link: string;
  category: Category;
}

export interface IConfiguration {
  profileImgPath: string;
}

export enum Category {
  Professional = 'Professional',
  Development = 'Development',
  Personal = 'Personal',
}
