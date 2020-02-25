<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.division.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.division.list.title"></app-i18n>
      </h1>

      <app-division-list-toolbar></app-division-list-toolbar>
      <app-division-list-filter></app-division-list-filter>
      <app-division-list-table></app-division-list-table>
    </div>
  </div>
</template>

<script>
import DivisionListFilter from '@/modules/division/components/division-list-filter.vue';
import DivisionListTable from '@/modules/division/components/division-list-table.vue';
import DivisionListToolbar from '@/modules/division/components/division-list-toolbar.vue';

export default {
  name: 'app-division-list-page',

  components: {
    [DivisionListFilter.name]: DivisionListFilter,
    [DivisionListTable.name]: DivisionListTable,
    [DivisionListToolbar.name]: DivisionListToolbar,
  },
};
</script>

<style>
</style>
