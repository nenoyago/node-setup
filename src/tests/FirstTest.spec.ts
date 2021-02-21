import { User } from '@models/User';

test('it should be ok', () => {
  const user = new User();

  user.name = 'Yago Neno';

  expect(user.name).toEqual('Yago Neno');
});