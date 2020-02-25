import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const BoxListPage = () =>
  import('@/modules/box/components/box-list-page.vue');
const BoxFormPage = () =>
  import('@/modules/box/components/box-form-page.vue');
const BoxViewPage = () =>
  import('@/modules/box/components/box-view-page.vue');
const BoxImporterPage = () =>
  import('@/modules/box/components/box-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'box',
        path: '/box',
        component: BoxListPage,
        meta: {
          auth: true,
          permission: Permissions.values.boxView,
        },
      },
      {
        name: 'boxNew',
        path: '/box/new',
        component: BoxFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.boxCreate,
        },
      },
      {
        name: 'boxImporter',
        path: '/box/import',
        component: BoxImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.boxImport,
        },
      },
      {
        name: 'boxEdit',
        path: '/box/:id/edit',
        component: BoxFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.boxEdit,
        },
        props: true,
      },
      {
        name: 'boxView',
        path: '/box/:id',
        component: BoxViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.boxView,
        },
        props: true,
      },
    ],
  },
];
