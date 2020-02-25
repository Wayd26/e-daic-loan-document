import Roles from '@/security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [roles.librarian],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [roles.librarian],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [roles.librarian],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [roles.librarian],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [roles.librarian],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.librarian],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.librarian],
      },
      loanEmail: {
        id: 'loanEmail',
        allowedRoles: [roles.librarian],
      },
      loanImport: {
        id: 'loanImport',
        allowedRoles: [roles.librarian],
      },
      loanCreate: {
        id: 'loanCreate',
        allowedRoles: [roles.librarian],
        allowedStorageFolders: ['loan'],
      },
      loanEdit: {
        id: 'loanEdit',
        allowedRoles: [roles.librarian],
        allowedStorageFolders: ['loan'],
      },
      loanDestroy: {
        id: 'loanDestroy',
        allowedRoles: [roles.librarian],
        allowedStorageFolders: ['loan'],
      },
      loanRead: {
        id: 'loanRead',
        allowedRoles: [roles.librarian, roles.member],
      },
      loanAutocomplete: {
        id: 'loanAutocomplete',
        allowedRoles: [roles.librarian],
      },

      folderImport: {
        id: 'folderImport',
        allowedRoles: [roles.librarian],
      },
      folderCreate: {
        id: 'folderCreate',
        allowedRoles: [roles.librarian],
        allowedStorageFolders: ['folder'],
      },
      folderEdit: {
        id: 'folderEdit',
        allowedRoles: [roles.librarian],
        allowedStorageFolders: ['folder'],
      },
      folderDestroy: {
        id: 'folderDestroy',
        allowedRoles: [roles.librarian],
        allowedStorageFolders: ['folder'],
      },
      folderRead: {
        id: 'folderRead',
        allowedRoles: [roles.librarian, roles.member],
      },
      folderAutocomplete: {
        id: 'folderAutocomplete',
        allowedRoles: [roles.librarian, roles.member],
      },

      boxImport: {
        id: 'boxImport',
        allowedRoles: [roles.librarian],
      },
      boxCreate: {
        id: 'boxCreate',
        allowedRoles: [roles.librarian],
        allowedStorageBoxs: ['box'],
      },
      boxEdit: {
        id: 'boxEdit',
        allowedRoles: [roles.librarian],
        allowedStorageBoxs: ['box'],
      },
      boxDestroy: {
        id: 'boxDestroy',
        allowedRoles: [roles.librarian],
        allowedStorageBoxs: ['box'],
      },
      boxRead: {
        id: 'boxRead',
        allowedRoles: [roles.librarian, roles.member],
      },
      boxAutocomplete: {
        id: 'boxAutocomplete',
        allowedRoles: [roles.librarian, roles.member],
      },

      divisionImport: {
        id: 'divisionImport',
        allowedRoles: [roles.librarian],
      },
      divisionCreate: {
        id: 'divisionCreate',
        allowedRoles: [roles.librarian],
        allowedStorageDivisions: ['division'],
      },
      divisionEdit: {
        id: 'divisionEdit',
        allowedRoles: [roles.librarian],
        allowedStorageDivisions: ['division'],
      },
      divisionDestroy: {
        id: 'divisionDestroy',
        allowedRoles: [roles.librarian],
        allowedStorageDivisions: ['division'],
      },
      divisionRead: {
        id: 'divisionRead',
        allowedRoles: [roles.librarian, roles.member],
      },
      divisionAutocomplete: {
        id: 'divisionAutocomplete',
        allowedRoles: [roles.librarian, roles.member],
      },

      classementImport: {
        id: 'classementImport',
        allowedRoles: [roles.librarian],
      },
      classementCreate: {
        id: 'classementCreate',
        allowedRoles: [roles.librarian],
        allowedStorageClassements: ['classement'],
      },
      classementEdit: {
        id: 'classementEdit',
        allowedRoles: [roles.librarian],
        allowedStorageClassements: ['classement'],
      },
      classementDestroy: {
        id: 'classementDestroy',
        allowedRoles: [roles.librarian],
        allowedStorageClassements: ['classement'],
      },
      classementRead: {
        id: 'classementRead',
        allowedRoles: [roles.librarian, roles.member],
      },
      classementAutocomplete: {
        id: 'classementAutocomplete',
        allowedRoles: [roles.librarian, roles.member],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
