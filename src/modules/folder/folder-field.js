import { FolderService } from '@/modules/folder/folder-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class FolderField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/folder',
      Permissions.values.folderRead,
      FolderService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: `${record.cote} - ${record.title}`,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/folder',
      Permissions.values.folderRead,
      FolderService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.title,
        };
      },
      options,
    );
  }
}
