import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const DivisionListPage = () =>
  import('@/modules/division/components/division-list-page.vue');
const DivisionFormPage = () =>
  import('@/modules/division/components/division-form-page.vue');
const DivisionViewPage = () =>
  import('@/modules/division/components/division-view-page.vue');
const DivisionImporterPage = () =>
  import('@/modules/division/components/division-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'division',
        path: '/division',
        component: DivisionListPage,
        meta: {
          auth: true,
          permission: Permissions.values.divisionView,
        },
      },
      {
        name: 'divisionNew',
        path: '/division/new',
        component: DivisionFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.divisionCreate,
        },
      },
      {
        name: 'divisionImporter',
        path: '/division/import',
        component: DivisionImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.divisionImport,
        },
      },
      {
        name: 'divisionEdit',
        path: '/division/:id/edit',
        component: DivisionFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.divisionEdit,
        },
        props: true,
      },
      {
        name: 'divisionView',
        path: '/division/:id',
        component: DivisionViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.divisionView,
        },
        props: true,
      },
    ],
  },
];
