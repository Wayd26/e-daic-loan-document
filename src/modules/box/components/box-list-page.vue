<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.box.menu"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.box.list.title"></app-i18n>
      </h1>

      <app-box-list-toolbar></app-box-list-toolbar>
      <app-box-list-filter></app-box-list-filter>
      <app-box-list-table></app-box-list-table>
    </div>
  </div>
</template>

<script>
import BoxListFilter from '@/modules/box/components/box-list-filter.vue';
import BoxListTable from '@/modules/box/components/box-list-table.vue';
import BoxListToolbar from '@/modules/box/components/box-list-toolbar.vue';

export default {
  name: 'app-box-list-page',

  components: {
    [BoxListFilter.name]: BoxListFilter,
    [BoxListTable.name]: BoxListTable,
    [BoxListToolbar.name]: BoxListToolbar,
  },
};
</script>

<style>
</style>
