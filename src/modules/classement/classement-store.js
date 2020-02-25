import classementListStore from '@/modules/classement/classement-list-store';
import classementViewStore from '@/modules/classement/classement-view-store';
import classementImporterStore from '@/modules/classement/classement-importer-store';
import classementFormStore from '@/modules/classement/classement-form-store';
import classementDestroyStore from '@/modules/classement/classement-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: classementDestroyStore,
    form: classementFormStore,
    list: classementListStore,
    view: classementViewStore,
    importer: classementImporterStore,
  },
};
