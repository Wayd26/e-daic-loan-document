<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/folder' }">
        <app-i18n code="entities.folder.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.folder.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.folder.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-folder-view-toolbar v-if="record"></app-folder-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.cote.label" :value="presenter(record, 'cote')"></app-view-item-text>

        <app-view-item-text :label="fields.title.label" :value="presenter(record, 'title')"></app-view-item-text>

        <app-view-item-text :label="fields.author.label" :value="presenter(record, 'author')"></app-view-item-text>

        <app-view-item-text
          :label="fields.numberOfCopies.label"
          :value="presenter(record, 'numberOfCopies')"
        ></app-view-item-text>

        <app-view-item-text :label="fields.stock.label" :value="presenter(record, 'stock')"></app-view-item-text>

        <app-view-item-image :label="fields.images.label" :value="presenter(record, 'images')"></app-view-item-image>

        <app-view-item-custom :label="fields.status.label" :value="record.status">
          <app-folder-status-tag :value="record.status" />
        </app-view-item-custom>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FolderViewToolbar from '@/modules/folder/components/folder-view-toolbar.vue';
import { FolderModel } from '@/modules/folder/folder-model';
import FolderStatusTag from '@/modules/folder/components/folder-status-tag';

const { fields } = FolderModel;

export default {
  name: 'app-folder-view-page',

  props: ['id'],

  components: {
    [FolderViewToolbar.name]: FolderViewToolbar,
    [FolderStatusTag.name]: FolderStatusTag,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'folder/view/record',
      loading: 'folder/view/loading',
    }),

    fields() {
      return fields;
    },
  },

  async created() {
    await this.doFind(this.id);
  },

  methods: {
    ...mapActions({
      doFind: 'folder/view/doFind',
    }),

    presenter(record, fieldName) {
      return FolderModel.presenter(record, fieldName);
    },
  },
};
</script>
