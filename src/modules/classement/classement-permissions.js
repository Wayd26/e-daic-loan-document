import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class ClassementPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.classementRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.classementImport,
    );
    this.classementAutocomplete = permissionChecker.match(
      Permissions.values.classementAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.classementCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.classementEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.classementDestroy,
    );
  }
}
