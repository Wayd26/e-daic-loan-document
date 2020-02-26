<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/classement' }">
        <app-i18n code="entities.classement.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.classement.view.title"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.classement.view.title"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="loading" v-loading="loading"></div>

      <app-classement-view-toolbar v-if="record"></app-classement-view-toolbar>

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

        <app-view-item-custom :label="fields.status.label" :value="record.status">
          <app-classement-status-tag :value="record.status" />
        </app-view-item-custom>

        <app-view-item-text :label="fields.createdAt.label" :value="presenter(record, 'createdAt')"></app-view-item-text>

        <app-view-item-text :label="fields.updatedAt.label" :value="presenter(record, 'updatedAt')"></app-view-item-text>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ClassementViewToolbar from '@/modules/classement/components/classement-view-toolbar.vue';
import { ClassementModel } from '@/modules/classement/classement-model';
import ClassementStatusTag from '@/modules/classement/components/classement-status-tag';

const { fields } = ClassementModel;

export default {
  name: 'app-classement-view-page',

  props: ['id'],

  components: {
    [ClassementViewToolbar.name]: ClassementViewToolbar,
    [ClassementStatusTag.name]: ClassementStatusTag,
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'classement/view/record',
      loading: 'classement/view/loading',
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
      doFind: 'classement/view/doFind',
    }),

    presenter(record, fieldName) {
      return ClassementModel.presenter(record, fieldName);
    },
  },
};
</script>
