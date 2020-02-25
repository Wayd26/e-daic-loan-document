import { i18n } from '@/i18n';
import IdField from '@/shared/fields/id-field';
import DateTimeRangeField from '@/shared/fields/date-time-range-field';
import DateTimeField from '@/shared/fields/date-time-field';
import { GenericModel } from '@/shared/model/generic-model';
import StringField from '@/shared/fields/string-field';
import ImagesField from '@/shared/fields/images-field';

function label(name) {
  return i18n(`entities.box.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  cote: new StringField('cote', label('cote'), {
    "required": true,
    "max": 255
  }),
  title: new StringField('title', label('title'), {
    "required": true,
    "max": 255
  }),
  images: new ImagesField('images', label('images'), 'box/images',{
    "max": 3,
    "size": 3000000
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

export class BoxModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
