<template>
  <div>
    <el-table
      :border="true"
      :data="rows"
      @sort-change="doChangeSort"
      ref="table"
      row-key="id"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      
      <el-table-column :label="fields.title.label" :prop="fields.title.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'title') }}</template>
      </el-table-column>

      <el-table-column :label="fields.division.label" :prop="fields.division.name">
        <template slot-scope="scope">
          <app-list-item-relation-to-one
            :label="fields.division.label"
            :permission="fields.division.readPermission"
            :url="fields.division.viewUrl"
            :value="presenter(scope.row, 'division')"
          ></app-list-item-relation-to-one>
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/classement/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link
              :to="`/classement/${scope.row.id}/edit`"
              v-if="hasPermissionToEdit && scope.row.status !== 'closed'"
            >
              <el-button type="text">
                <app-i18n code="common.edit"></app-i18n>
              </el-button>
            </router-link>

            <el-button
              :disabled="destroyLoading"
              @click="doDestroyWithConfirm(scope.row.id)"
              type="text"
              v-if="hasPermissionToDestroy"
            >
              <app-i18n code="common.destroy"></app-i18n>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="el-pagination-wrapper">
      <el-pagination
        :current-page="pagination.currentPage || 1"
        :disabled="loading"
        :layout="paginationLayout"
        :total="count"
        @current-change="doChangePaginationCurrentPage"
        @size-change="doChangePaginationPageSize"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { ClassementModel } from '@/modules/classement/classement-model';
import { mapGetters, mapActions } from 'vuex';
import { ClassementPermissions } from '@/modules/classement/classement-permissions';
import { i18n } from '@/i18n';

const { fields } = ClassementModel;

export default {
  name: 'app-classement-list-table',

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'classement/list/rows',
      count: 'classement/list/count',
      loading: 'classement/list/loading',
      pagination: 'classement/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'classement/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new ClassementPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new ClassementPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'classement/list/doChangeSort',
      doChangePaginationCurrentPage:
        'classement/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'classement/list/doChangePaginationPageSize',
      doMountTable: 'classement/list/doMountTable',
      doDestroy: 'classement/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      console.log(fields.division);
      return ClassementModel.presenter(row, fieldName);
    },

    async doDestroyWithConfirm(id) {
      try {
        await this.$confirm(
          i18n('common.areYouSure'),
          i18n('common.confirm'),
          {
            confirmButtonText: i18n('common.yes'),
            cancelButtonText: i18n('common.no'),
            type: 'warning',
          },
        );

        return this.doDestroy(id);
      } catch (error) {
        // no
      }
    },
  },
};
</script>

<style>
</style>
