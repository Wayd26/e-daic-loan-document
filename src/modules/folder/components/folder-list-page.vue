<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.folder.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.folder.list.title"></app-i18n>
      </h1>

      <app-folder-list-toolbar></app-folder-list-toolbar>
      <app-folder-list-filter></app-folder-list-filter>
      <app-folder-list-table></app-folder-list-table>
    </div>
  </div>
</template>

<script>
import FolderListFilter from '@/modules/folder/components/folder-list-filter.vue';
import FolderListTable from '@/modules/folder/components/folder-list-table.vue';
import FolderListToolbar from '@/modules/folder/components/folder-list-toolbar.vue';

export default {
  name: 'app-folder-list-page',

  components: {
    [FolderListFilter.name]: FolderListFilter,
    [FolderListTable.name]: FolderListTable,
    [FolderListToolbar.name]: FolderListToolbar,
  },
};
</script>

<style>
</style>
