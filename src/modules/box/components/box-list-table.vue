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

      <el-table-column :prop="fields.images.name" align="center">
        <template slot-scope="scope">
          <app-list-item-image :value="presenter(scope.row, 'images')" class="box-image-list-item"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column :label="fields.cote.label" :prop="fields.cote.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'cote') }}</template>
      </el-table-column>

      <el-table-column :label="fields.title.label" :prop="fields.title.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'title') }}</template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/box/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/box/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { BoxModel } from '@/modules/box/box-model';
import { mapGetters, mapActions } from 'vuex';
import { BoxPermissions } from '@/modules/box/box-permissions';
import { i18n } from '@/i18n';
import BoxStatusTag from '@/modules/box/components/box-status-tag';

const { fields } = BoxModel;

export default {
  name: 'app-box-list-table',

  components: {
    [BoxStatusTag.name]: BoxStatusTag,
  },

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'box/list/rows',
      count: 'box/list/count',
      loading: 'box/list/loading',
      pagination: 'box/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'box/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new BoxPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new BoxPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'box/list/doChangeSort',
      doChangePaginationCurrentPage:
        'box/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'box/list/doChangePaginationPageSize',
      doMountTable: 'box/list/doMountTable',
      doDestroy: 'box/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return BoxModel.presenter(row, fieldName);
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
.box-image-list-item {
  border-radius: 0;
  width: 50px;
  height: 50px;
  line-height: 50px;
}

.box-image-list-item img {
  object-fit: cover;
}
</style>
