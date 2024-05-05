export class CustomerCreateCommand {
  constructor(
    public code: string, 
    public name: string, 
    public email: string
  ) {}
}
