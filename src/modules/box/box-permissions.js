import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class BoxPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.boxRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.boxImport,
    );
    this.boxAutocomplete = permissionChecker.match(
      Permissions.values.boxAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.boxCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.boxEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.boxDestroy,
    );
  }
}
