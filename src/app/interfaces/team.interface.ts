import { ISocial } from './social.interface';

export interface ITeamMember {
  name?: string;
  intro?: string;
  role?: string;
  image?: string;
  description?: string;
  socials?: ISocial[]
}
