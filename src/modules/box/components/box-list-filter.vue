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
    </el-row>

    <div class="filter-buttons">
      <el-button :disabled="loading" @click="doFilter" icon="el-icon-fa-search" type="primary">
        <app-i18n code="common.search"></app-i18n>
      </el-button>

      <el-button :disabled="loading" @click="doResetFilter" icon="el-icon-fa-undo">
        <app-i18n code="common.reset"></app-i18n>
      </el-button>
    </div>
  </el-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FilterSchema } from '@/shared/form/filter-schema';
import { BoxModel } from '@/modules/box/box-model';

const { fields } = BoxModel;

const filterSchema = new FilterSchema([
  fields.id,
  fields.cote,
  fields.title,
]);

export default {
  name: 'app-box-list-filter',

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
      loading: 'box/list/loading',
      filter: 'box/list/filter',
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
      doReset: 'box/list/doReset',
      doFetch: 'box/list/doFetch',
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
