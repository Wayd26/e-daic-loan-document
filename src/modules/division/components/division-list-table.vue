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

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/division/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/division/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { DivisionModel } from '@/modules/division/division-model';
import { mapGetters, mapActions } from 'vuex';
import { DivisionPermissions } from '@/modules/division/division-permissions';
import { i18n } from '@/i18n';
import DivisionStatusTag from '@/modules/division/components/division-status-tag';

const { fields } = DivisionModel;

export default {
  name: 'app-division-list-table',

  components: {
    [DivisionStatusTag.name]: DivisionStatusTag,
  },

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'division/list/rows',
      count: 'division/list/count',
      loading: 'division/list/loading',
      pagination: 'division/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'division/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new DivisionPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new DivisionPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'division/list/doChangeSort',
      doChangePaginationCurrentPage:
        'division/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'division/list/doChangePaginationPageSize',
      doMountTable: 'division/list/doMountTable',
      doDestroy: 'division/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return DivisionModel.presenter(row, fieldName);
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
.division-image-list-item {
  border-radius: 0;
  width: 50px;
  height: 50px;
  line-height: 50px;
}

.division-image-list-item img {
  object-fit: cover;
}
</style>
