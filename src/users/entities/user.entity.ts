import { randomUUID } from 'crypto';

type UserProps = {
  name: string;
  age: number;
  email: string;
  password: string;
  level: number;
};

export class User {
  id: string;
  props: UserProps;
  createdAt: Date;

  constructor(props: UserProps) {
    this.id = randomUUID();
    this.props = props;
    this.createdAt = new Date();
  }
}
