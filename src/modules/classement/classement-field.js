import { ClassementService } from '@/modules/classement/classement-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class ClassementField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/classement',
      Permissions.values.classementRead,
      ClassementService.listAutocomplete,
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

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/classement',
      Permissions.values.classementRead,
      ClassementService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }
}
