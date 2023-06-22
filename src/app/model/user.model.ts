export class UserModel {
  id!: number
  name!: string
  address!: string
  phoneNumber!: string
  email!: string

  constructor(response: any) {
    this.id = response.id
    this.name = response.name
    this.address = response.address
    this.phoneNumber = response.phoneNumber
    this.email = response.email
  }
}
