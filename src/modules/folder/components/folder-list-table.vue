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
          <app-list-item-image :value="presenter(scope.row, 'images')" class="folder-image-list-item"></app-list-item-image>
        </template>
      </el-table-column>

      <el-table-column :label="fields.cote.label" :prop="fields.cote.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'cote') }}</template>
      </el-table-column>

      <el-table-column :label="fields.title.label" :prop="fields.title.name" sortable="custom">
        <template slot-scope="scope">{{ presenter(scope.row, 'title') }}</template>
      </el-table-column>

      <el-table-column :label="fields.status.label" :prop="fields.status.name" sortable="custom">
        <template slot-scope="scope">
          <app-folder-status-tag :value="scope.row.status" />
        </template>
      </el-table-column>

      <el-table-column :fixed="isMobile? undefined : 'right'" align="center" width="180">
        <template slot-scope="scope">
          <div class="table-actions">
            <router-link :to="`/folder/${scope.row.id}`">
              <el-button type="text">
                <app-i18n code="common.view"></app-i18n>
              </el-button>
            </router-link>

            <router-link :to="`/folder/${scope.row.id}/edit`" v-if="hasPermissionToEdit">
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
import { FolderModel } from '@/modules/folder/folder-model';
import { mapGetters, mapActions } from 'vuex';
import { FolderPermissions } from '@/modules/folder/folder-permissions';
import { i18n } from '@/i18n';
import FolderStatusTag from '@/modules/folder/components/folder-status-tag';

const { fields } = FolderModel;

export default {
  name: 'app-folder-list-table',

  components: {
    [FolderStatusTag.name]: FolderStatusTag,
  },

  mounted() {
    this.doMountTable(this.$refs.table);
  },

  computed: {
    ...mapGetters({
      rows: 'folder/list/rows',
      count: 'folder/list/count',
      loading: 'folder/list/loading',
      pagination: 'folder/list/pagination',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
      destroyLoading: 'folder/destroy/loading',
      paginationLayout: 'layout/paginationLayout',
    }),

    hasPermissionToEdit() {
      return new FolderPermissions(this.currentUser).edit;
    },

    hasPermissionToDestroy() {
      return new FolderPermissions(this.currentUser).destroy;
    },

    fields() {
      return fields;
    },
  },

  methods: {
    ...mapActions({
      doChangeSort: 'folder/list/doChangeSort',
      doChangePaginationCurrentPage:
        'folder/list/doChangePaginationCurrentPage',
      doChangePaginationPageSize:
        'folder/list/doChangePaginationPageSize',
      doMountTable: 'folder/list/doMountTable',
      doDestroy: 'folder/destroy/doDestroy',
    }),

    presenter(row, fieldName) {
      return FolderModel.presenter(row, fieldName);
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
.folder-image-list-item {
  border-radius: 0;
  width: 50px;
  height: 50px;
  line-height: 50px;
}

.folder-image-list-item img {
  object-fit: cover;
}
</style>
