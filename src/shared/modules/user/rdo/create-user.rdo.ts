import { Expose } from 'class-transformer';

export class UserRDO {
  @Expose() name!: string;
  @Expose() email!: string;
  @Expose() avatarPath!: string;
  @Expose() userType!: string;
}
