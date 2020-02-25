import { FolderModel } from '@/modules/folder/folder-model';

const { fields } = FolderModel;

export default [
  fields.id,
  fields.cote,
  fields.title,
  fields.images,
  fields.box,
  fields.classement,
  fields.status,
  fields.createdAt
];
