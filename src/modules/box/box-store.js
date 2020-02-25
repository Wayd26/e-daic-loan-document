import boxListStore from '@/modules/box/box-list-store';
import boxViewStore from '@/modules/box/box-view-store';
import boxImporterStore from '@/modules/box/box-importer-store';
import boxFormStore from '@/modules/box/box-form-store';
import boxDestroyStore from '@/modules/box/box-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: boxDestroyStore,
    form: boxFormStore,
    list: boxListStore,
    view: boxViewStore,
    importer: boxImporterStore,
  },
};
