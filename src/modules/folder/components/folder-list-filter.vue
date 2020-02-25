<template>
  <el-form
    :label-position="labelPosition"
    :label-width="labelWidthFilter"
    :model="model"
    :rules="rules"
    @submit.native.prevent="doFilter"
    class="filter"
    ref="form"
  >
    <el-row>
      <el-col :lg="12" :md="16" :sm="24">      
        <el-form-item :label="fields.cote.label" :prop="fields.cote.name">
          <el-input v-model="model[fields.cote.name]" />
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.title.label" :prop="fields.title.name">
          <el-input v-model="model[fields.title.name]" />
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.status.label" :prop="fields.status.name">
          <el-select placeholder v-model="model[fields.status.name]">
            <el-option :value="undefined">--</el-option>
            <el-option
              :key="option.id"
              :label="option.label"
              :value="option.id"
              v-for="option in fields.status.options"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.box.label" :prop="fields.box.name">
          <app-autocomplete-one-input
            :fetchFn="fields.box.fetchFn"
            v-model="model[fields.box.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      </el-col>

      <el-col :lg="12" :md="16" :sm="24">
        <el-form-item :label="fields.classement.label" :prop="fields.classement.name">
          <app-autocomplete-one-input
            :fetchFn="fields.classement.fetchFn"
            v-model="model[fields.classement.name]"
          ></app-autocomplete-one-input>
        </el-form-item>
      </el-col>
      
      <el-col :lg="12" :md="16" :sm="24">
        <div class="filter-buttons">
          <el-button :disabled="loading" @click="doFilter" icon="el-icon-fa-search" type="primary">
            <app-i18n code="common.search"></app-i18n>
          </el-button>

          <el-button :disabled="loading" @click="doResetFilter" icon="el-icon-fa-undo">
            <app-i18n code="common.reset"></app-i18n>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FilterSchema } from '@/shared/form/filter-schema';
import { FolderModel } from '@/modules/folder/folder-model';

const { fields } = FolderModel;

const filterSchema = new FilterSchema([
  fields.id,
  fields.createdAtRange,
  fields.cote,
  fields.title,
  fields.box,
  fields.classement,
]);

export default {
  name: 'app-folder-list-filter',

  data() {
    return {
      rules: filterSchema.rules(),
      model: {},
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthFilter: 'layout/labelWidthFilter',
      loading: 'folder/list/loading',
      filter: 'folder/list/filter',
    }),

    fields() {
      return fields;
    },
  },

  async mounted() {
    this.model = filterSchema.initialValues(
      this.filter,
      this.$route.query,
    );

    return this.doFilter();
  },

  methods: {
    ...mapActions({
      doReset: 'folder/list/doReset',
      doFetch: 'folder/list/doFetch',
    }),

    async doResetFilter() {
      this.model = filterSchema.initialValues();
      this.$refs.form.clearValidate();
      return this.doReset();
    },

    async doFilter() {
      try {
        await this.$refs.form.validate();
        this.$refs.form.clearValidate();
      } catch (error) {
        return;
      }

      const filter = filterSchema.cast(this.model);
      return this.doFetch({
        filter,
      });
    },
  },
};
</script>

<style>
</style>
