import { LoanModel } from '@/modules/loan/loan-model';

const { fields } = LoanModel;

export default [
  fields.id,
  fields.folder,
  fields.member,
  fields.issueDate,
  fields.dueDate,
  fields.returnDate,
  fields.status,
  fields.createdAt
];
