export class ClassModel {
  
  public readonly id: number;

  public subject: string;
  public cost: number;
  public user_id: number;

  constructor(props: Omit<ClassModel, 'id'>) {
    Object.assign(this, props);
  }
}