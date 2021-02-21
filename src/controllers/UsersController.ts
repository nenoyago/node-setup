import { User } from '@models/User';

export class UsersController {
  private user: User;
  constructor() {
    this.user = new User(
      'Yago Neno',
      'developer.neno@gmail.com'
    );
  }
}