<template>
  <div class="app-page-toolbar">
    <router-link :to="{ path: '/classement/new' }" v-if="hasPermissionToCreate">
      <el-button icon="el-icon-fa-plus" type="primary">
        <app-i18n code="common.new"></app-i18n>
      </el-button>
    </router-link>

    <router-link :to="{ path: '/classement/import' }" v-if="hasPermissionToImport">
      <el-button icon="el-icon-fa-upload" type="primary">
        <app-i18n code="common.import"></app-i18n>
      </el-button>
    </router-link>

    <el-tooltip
      :content="destroyButtonTooltip"
      :disabled="!destroyButtonTooltip"
      v-if="hasPermissionToDestroy"
    >
      <span>
        <el-button
          :disabled="destroyButtonDisabled"
          @click="doDestroyAllSelected"
          icon="el-icon-fa-trash"
          type="primary"
        >
          <app-i18n code="common.destroy"></app-i18n>
        </el-button>
      </span>
    </el-tooltip>

    <router-link
      :to="{ path: '/audit-logs', query: { entityNames: 'classement' } }"
      v-if="hasPermissionToAuditLogs"
    >
      <el-button icon="el-icon-fa-history">
        <app-i18n code="auditLog.menu"></app-i18n>
      </el-button>
    </router-link>

    <el-tooltip :content="exportButtonTooltip" :disabled="!exportButtonTooltip">
      <span>
        <el-button
          :disabled="exportButtonDisabled"
          @click="doExport()"
          icon="el-icon-fa-file-excel-o"
        >
          <app-i18n code="common.export"></app-i18n>
        </el-button>
      </span>
    </el-tooltip>

    <el-tooltip
      :content="emailButtonTooltip"
      :disabled="!emailButtonTooltip"
      v-if="hasPermissionToEmail"
    >
      <span>
        <el-button
          :disabled="emailButtonDisabled"
          @click="doEmailAllSelected"
          icon="el-icon-fa-envelope"
          type="primary"
        >
          <app-i18n code="entities.classement.emailAll.label"></app-i18n>
        </el-button>
      </span>
    </el-tooltip>
  </div>
</template>

<script>
import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
import { mapGetters, mapActions } from 'vuex';
import { ClassementPermissions } from '@/modules/classement/classement-permissions';
import { i18n } from '@/i18n';

export default {
  name: 'app-classement-list-toolbar',

  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      hasRows: 'classement/list/hasRows',
      loading: 'classement/list/loading',
      exportLoading: 'classement/list/exportLoading',
      selectedRows: 'classement/list/selectedRows',
      destroyLoading: 'classement/destroy/loading',
      emailLoading: 'classement/email/loading',
    }),

    hasPermissionToAuditLogs() {
      return new AuditLogPermissions(this.currentUser).read;
    },

    hasPermissionToCreate() {
      return new ClassementPermissions(this.currentUser).create;
    },

    hasPermissionToEdit() {
      return new ClassementPermissions(this.currentUser).edit;
    },

    hasPermissionToImport() {
      return new ClassementPermissions(this.currentUser).import;
    },

    hasPermissionToDestroy() {
      return new ClassementPermissions(this.currentUser).destroy;
    },

    hasPermissionToEmail() {
      return new ClassementPermissions(this.currentUser).email;
    },

    exportButtonDisabled() {
      return (
        !this.hasRows || this.loading || this.exportLoading
      );
    },

    exportButtonTooltip() {
      return !this.hasRows
        ? i18n('common.noDataToExport')
        : null;
    },

    removeButtonDisabled() {
      return !this.selectedRows.length || this.loading;
    },

    removeButtonTooltip() {
      return !this.selectedRows.length
        ? i18n('common.mustSelectARow')
        : null;
    },

    enableButtonDisabled() {
      return !this.selectedRows.length || this.loading;
    },

    enableButtonTooltip() {
      return !this.selectedRows.length
        ? i18n('common.mustSelectARow')
        : null;
    },

    disableButtonDisabled() {
      return !this.selectedRows.length || this.loading;
    },

    disableButtonTooltip() {
      return !this.selectedRows.length
        ? i18n('common.mustSelectARow')
        : null;
    },

    destroyButtonDisabled() {
      return (
        !this.selectedRows.length ||
        this.loading ||
        this.destroyLoading
      );
    },

    destroyButtonTooltip() {
      if (!this.selectedRows.length || this.loading) {
        return i18n('common.mustSelectARow');
      }

      return null;
    },

    emailButtonDisabled() {
      return (
        !this.selectedRows.length ||
        this.loading ||
        this.emailLoading
      );
    },

    emailButtonTooltip() {
      if (!this.selectedRows.length || this.loading) {
        return i18n('common.mustSelectARow');
      }

      return null;
    },
  },

  methods: {
    ...mapActions({
      doExport: 'classement/list/doExport',
      doRemoveAllSelected: 'classement/list/doRemoveAllSelected',
      doDisableAllSelected:
        'classement/list/doDisableAllSelected',
      doEnableAllSelected: 'classement/list/doEnableAllSelected',
      doDestroyAll: 'classement/destroy/doDestroyAll',
      doEmailAll: 'classement/email/doEmailAll',
    }),

    async doEmailAllSelected() {
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

        return this.doEmailAll(
          this.selectedRows.map((item) => item.id),
        );
      } catch (error) {
        // no
      }
    },

    async doDestroyAllSelected() {
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

        return this.doDestroyAll(
          this.selectedRows.map((item) => item.id),
        );
      } catch (error) {
        // no
      }
    },
  },
};
</script>

<style>
</style>
