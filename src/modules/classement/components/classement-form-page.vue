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
        <app-i18n code="entities.classement.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.classement.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.classement.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.classement.new.title" v-if="!isEditing"></app-i18n>
      </h1>

      <div class="app-page-spinner" v-if="findLoading" v-loading="findLoading"></div>

      <el-form
        :label-position="labelPosition"
        :label-width="labelWidthForm"
        :model="model"
        :rules="rules"
        @submit.native.prevent="doSubmit"
        class="form"
        ref="form"
        v-if="model"
      >
        <el-form-item :label="fields.id.label" :prop="fields.id.name" v-if="isEditing">
          <el-col :lg="11" :md="16" :sm="24">
            <el-input :disabled="true" v-model="model[fields.id.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.cote.label"
          :prop="fields.cote.name"
          :required="fields.cote.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input ref="focus" v-model="model[fields.cote.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.title.label"
          :prop="fields.title.name"
          :required="fields.title.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <el-input v-model="model[fields.title.name]" />
          </el-col>
        </el-form-item>

        <el-form-item
          :label="fields.division.label"
          :prop="fields.division.name"
          :required="fields.division.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-autocomplete-one-input
              :disabled="isEditing"
              :fetchFn="fields.division.fetchFn"
              v-model="model[fields.division.name]"
            ></app-autocomplete-one-input>
          </el-col>
        </el-form-item>

        <el-form-item>
          <div class="form-buttons">
            <el-button
              :disabled="saveLoading"
              @click="doSubmit"
              icon="el-icon-fa-floppy-o"
              type="primary"
            >
              <app-i18n code="common.save"></app-i18n>
            </el-button>

            <el-button :disabled="saveLoading" @click="doReset" icon="el-icon-fa-undo">
              <app-i18n code="common.reset"></app-i18n>
            </el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FormSchema } from '@/shared/form/form-schema';
import { ClassementModel } from '@/modules/classement/classement-model';

const { fields } = ClassementModel;
const formSchema = new FormSchema([
  fields.id,
  fields.cote,
  fields.title,
  fields.division,
]);

export default {
  name: 'app-classement-form-page',

  props: ['id'],

  data() {
    return {
      rules: formSchema.rules(),
      model: null,
    };
  },

  computed: {
    ...mapGetters({
      labelPosition: 'layout/labelPosition',
      labelWidthForm: 'layout/labelWidthForm',
      record: 'classement/form/record',
      findLoading: 'classement/form/findLoading',
      saveLoading: 'classement/form/saveLoading',
    }),

    isEditing() {
      return !!this.id;
    },

    fields() {
      return fields;
    },
  },

  async created() {
    if (this.isEditing) {
      await this.doFind(this.id);
    } else {
      await this.doNew();
    }

    this.model = formSchema.initialValues(this.record);
  },

  methods: {
    ...mapActions({
      doFind: 'classement/form/doFind',
      doNew: 'classement/form/doNew',
      doUpdate: 'classement/form/doUpdate',
      doCreate: 'classement/form/doCreate',
    }),

    doReset() {
      this.model = formSchema.initialValues(this.record);
    },

    async doSubmit() {
      try {
        await this.$refs.form.validate();
      } catch (error) {
        return;
      }

      const { id, ...values } = formSchema.cast(this.model);

      if (this.isEditing) {
        return this.doUpdate({
          id,
          values,
        });
      } else {
        return this.doCreate(values);
      }
    },
  },
};
</script>

<style>
</style>
