<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.classement.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.classement.list.title"></app-i18n>
      </h1>

      <app-classement-list-toolbar></app-classement-list-toolbar>
      <app-classement-list-filter></app-classement-list-filter>
      <app-classement-list-table></app-classement-list-table>
    </div>
  </div>
</template>

<script>
import ClassementListFilter from '@/modules/classement/components/classement-list-filter.vue';
import ClassementListTable from '@/modules/classement/components/classement-list-table.vue';
import ClassementListToolbar from '@/modules/classement/components/classement-list-toolbar.vue';

export default {
  name: 'app-classement-list-page',

  components: {
    [ClassementListFilter.name]: ClassementListFilter,
    [ClassementListTable.name]: ClassementListTable,
    [ClassementListToolbar.name]: ClassementListToolbar,
  },
};
</script>

<style>
</style>
