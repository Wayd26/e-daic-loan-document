import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class DivisionPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.divisionRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.divisionImport,
    );
    this.divisionAutocomplete = permissionChecker.match(
      Permissions.values.divisionAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.divisionCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.divisionEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.divisionDestroy,
    );
  }
}
