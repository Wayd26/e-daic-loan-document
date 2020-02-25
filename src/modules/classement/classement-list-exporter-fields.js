import { ClassementModel } from '@/modules/classement/classement-model';

const { fields } = ClassementModel;

export default [
  fields.id,
  fields.cote,
  fields.title,
  fields.division,
  fields.createdAt
];
