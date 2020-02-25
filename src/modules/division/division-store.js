import divisionListStore from '@/modules/division/division-list-store';
import divisionViewStore from '@/modules/division/division-view-store';
import divisionImporterStore from '@/modules/division/division-importer-store';
import divisionFormStore from '@/modules/division/division-form-store';
import divisionDestroyStore from '@/modules/division/division-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: divisionDestroyStore,
    form: divisionFormStore,
    list: divisionListStore,
    view: divisionViewStore,
    importer: divisionImporterStore,
  },
};
