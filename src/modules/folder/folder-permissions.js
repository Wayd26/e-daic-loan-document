import Permissions from '@/security/permissions';
import PermissionChecker from '@/modules/iam/permission-checker';

export class FolderPermissions {
  constructor(currentUser) {
    const permissionChecker = new PermissionChecker(
      currentUser,
    );

    this.read = permissionChecker.match(
      Permissions.values.folderRead,
    );
    this.import = permissionChecker.match(
      Permissions.values.folderImport,
    );
    this.folderAutocomplete = permissionChecker.match(
      Permissions.values.folderAutocomplete,
    );
    this.create = permissionChecker.match(
      Permissions.values.folderCreate,
    );
    this.edit = permissionChecker.match(
      Permissions.values.folderEdit,
    );
    this.destroy = permissionChecker.match(
      Permissions.values.folderDestroy,
    );
  }
}
