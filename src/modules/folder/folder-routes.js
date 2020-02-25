import Layout from '@/modules/layout/components/layout.vue';
import Permissions from '@/security/permissions';

const FolderListPage = () =>
  import('@/modules/folder/components/folder-list-page.vue');
const FolderFormPage = () =>
  import('@/modules/folder/components/folder-form-page.vue');
const FolderViewPage = () =>
  import('@/modules/folder/components/folder-view-page.vue');
const FolderImporterPage = () =>
  import('@/modules/folder/components/folder-importer-page.vue');

export default [
  {
    name: '',
    path: '',
    component: Layout,
    meta: { auth: true },
    children: [
      {
        name: 'folder',
        path: '/folder',
        component: FolderListPage,
        meta: {
          auth: true,
          permission: Permissions.values.folderView,
        },
      },
      {
        name: 'folderNew',
        path: '/folder/new',
        component: FolderFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.folderCreate,
        },
      },
      {
        name: 'folderImporter',
        path: '/folder/import',
        component: FolderImporterPage,
        meta: {
          auth: true,
          permission: Permissions.values.folderImport,
        },
      },
      {
        name: 'folderEdit',
        path: '/folder/:id/edit',
        component: FolderFormPage,
        meta: {
          auth: true,
          permission: Permissions.values.folderEdit,
        },
        props: true,
      },
      {
        name: 'folderView',
        path: '/folder/:id',
        component: FolderViewPage,
        meta: {
          auth: true,
          permission: Permissions.values.folderView,
        },
        props: true,
      },
    ],
  },
];
