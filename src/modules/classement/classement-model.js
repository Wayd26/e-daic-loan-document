import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import { DivisionField } from '@/modules/division/division-field';

function label(name) {
  return i18n(`entities.classement.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  division: DivisionField.relationToOne('division', label('division'), {
    required: true,
  }),
  cote: new StringField('cote', label('cote'), {
    "required": true,
    "max": 255
  }),
  title: new StringField('title', label('title'), {
    "required": true,
    "max": 255
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
};

export class ClassementModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
