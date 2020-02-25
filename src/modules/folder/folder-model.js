import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import EnumeratorField from '@/shared/fields/enumerator-field';
import ImagesField from '@/shared/fields/images-field';
import { BoxField } from '@/modules/box/box-field';
import { ClassementField } from '@/modules/classement/classement-field';

function label(name) {
  return i18n(`entities.folder.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.folder.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  box: BoxField.relationToOne('box', label('box'), {
    required: true,
  }),
  classement: ClassementField.relationToOne('classement', label('classement'), {
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
  images: new ImagesField('images', label('images'), 'folder/images',{
    "max": 3,
    "size": 3000000
  }),
  status: new EnumeratorField('status', label('status'), [
    { id: 'available', label: enumeratorLabel('status', 'available') },
    { id: 'unavailable', label: enumeratorLabel('status', 'unavailable') },
  ],{}),
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

export class FolderModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
