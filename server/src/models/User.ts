// import { uuid } from 'uuidv4'

export class User {
  
  public readonly id: number;

  public name: string;
  public avatar: string;
  public whatsapp: string;
  public bio: string;

  constructor(props: Omit<User, 'id'>) {
    Object.assign(this, props);

    // if (!id) {
    //   this.id = uuid();
    // }
  }
}
