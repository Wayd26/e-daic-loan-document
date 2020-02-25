<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <app-i18n code="home.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/box' }">
        <app-i18n code="entities.box.menu"></app-i18n>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <app-i18n code="entities.box.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.box.new.title" v-if="!isEditing"></app-i18n>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="app-content-page">
      <h1 class="app-content-title">
        <app-i18n code="entities.box.edit.title" v-if="isEditing"></app-i18n>
        <app-i18n code="entities.box.new.title" v-if="!isEditing"></app-i18n>
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
          :label="fields.images.label"
          :prop="fields.images.name"
          :required="fields.images.required"
        >
          <el-col :lg="11" :md="16" :sm="24">
            <app-image-upload
              :max="fields.images.max"
              :path="fields.images.path"
              :schema="fields.images.fileSchema"
              v-model="model[fields.images.name]"
            ></app-image-upload>
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
import { BoxModel } from '@/modules/box/box-model';

const { fields } = BoxModel;
const formSchema = new FormSchema([
  fields.id,
  fields.cote,
  fields.title,
  fields.images,
]);

export default {
  name: 'app-box-form-page',

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
      record: 'box/form/record',
      findLoading: 'box/form/findLoading',
      saveLoading: 'box/form/saveLoading',
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
      doFind: 'box/form/doFind',
      doNew: 'box/form/doNew',
      doUpdate: 'box/form/doUpdate',
      doCreate: 'box/form/doCreate',
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
