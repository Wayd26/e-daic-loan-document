<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/division' }">
        <app-i18n code="entities.division.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.division.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.division.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-division-view-toolbar v-if="record"></app-division-view-toolbar>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        @submit.prevent.native
        class="form"
        v-if="record"
      >
        <app-view-item-text :label="fields.id.label" :value="presenter(record, 'id')"></app-view-item-text>

        <app-view-item-text :label="fields.isbn.label" :value="presenter(record, 'isbn')"></app-view-item-text>

        <app-view-item-text :label="fields.title.label" :value="presenter(record, 'title')"></app-view-item-text>

        <app-view-item-text :label="fields.author.label" :value="presenter(record, 'author')"></app-view-item-text>

        <app-view-item-text
          :label="fields.numberOfCopies.label"
          :value="presenter(record, 'numberOfCopies')"
        ></app-view-item-text>

        <app-view-item-text :label="fields.stock.label" :value="presenter(record, 'stock')"></app-view-item-text>

        <app-view-item-image :label="fields.images.label" :value="presenter(record, 'images')"></app-view-item-image>

        <app-view-item-custom :label="fields.status.label" :value="record.status">
          <app-division-status-tag :value="record.status" />
        </app-view-item-custom>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DivisionViewToolbar from '@/modules/division/components/division-view-toolbar.vue';
import { DivisionModel } from '@/modules/division/division-model';
import DivisionStatusTag from '@/modules/division/components/division-status-tag';

const { fields } = DivisionModel;

export default {
  name: 'app-division-view-page',

  props: ['id'],

  components: {
    [DivisionViewToolbar.name]: DivisionViewToolbar,
    [DivisionStatusTag.name]: DivisionStatusTag,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'division/view/record',
      loading: 'division/view/loading',
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
      doFind: 'division/view/doFind',
    }),

    presenter(record, fieldName) {
      return DivisionModel.presenter(record, fieldName);
    },
  },
};
</script>
