import { ISocial } from './social.interface';

export interface ITeamMember {
  name?: string;
  intro?: string;
  joyIntro?: string;
  image?: string;
  description?: string;
  socials?: ISocial[]
}
