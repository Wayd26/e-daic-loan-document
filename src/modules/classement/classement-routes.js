import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const ClassementListPage = () =>
  import('@/modules/classement/components/classement-list-page.vue');
const ClassementFormPage = () =>
  import('@/modules/classement/components/classement-form-page.vue');
const ClassementViewPage = () =>
  import('@/modules/classement/components/classement-view-page.vue');
const ClassementImporterPage = () =>
  import('@/modules/classement/components/classement-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'classement',
        path: '/classement',
        component: ClassementListPage,
        meta: {
          auth: true,
          permission: Permissions.values.classementView,
        },
      },
      {
        name: 'classementNew',
        path: '/classement/new',
        component: ClassementFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.classementCreate,
        },
      },
      {
        name: 'classementImporter',
        path: '/classement/import',
        component: ClassementImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.classementImport,
        },
      },
      {
        name: 'classementEdit',
        path: '/classement/:id/edit',
        component: ClassementFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.classementEdit,
        },
        props: true,
      },
      {
        name: 'classementView',
        path: '/classement/:id',
        component: ClassementViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.classementView,
        },
        props: true,
      },
    ],
  },
];
