import { DivisionService } from '@/modules/division/division-service';
import RelationToOneField from '@/shared/fields/relation-to-one-field';
import RelationToManyField from '@/shared/fields/relation-to-many-field';
import Permissions from '@/security/permissions';

export class DivisionField {
  static relationToOne(name, label, options) {
    return new RelationToOneField(
      name,
      label,
      '/division',
      Permissions.values.divisionRead,
      DivisionService.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: `${record.title}`,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options) {
    return new RelationToManyField(
      name,
      label,
      '/division',
      Permissions.values.divisionRead,
      DivisionService.listAutocomplete,
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
