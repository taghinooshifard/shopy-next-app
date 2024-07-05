export default interface UserType {
  id: number;
  name: string;
  permissions: string[];
}
export class User {
  user?: UserType;

  constructor(myUser?: UserType) {
    this.user = myUser;
  }
  canAccess(permission: string): boolean {
    let UserPermission = permission
      .split("|")
      .filter((permission) => this.user?.permissions.includes(permission));
    return UserPermission.length > 0;
  }
}
