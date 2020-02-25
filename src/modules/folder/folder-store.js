import folderListStore from '@/modules/folder/folder-list-store';
import folderViewStore from '@/modules/folder/folder-view-store';
import folderImporterStore from '@/modules/folder/folder-importer-store';
import folderFormStore from '@/modules/folder/folder-form-store';
import folderDestroyStore from '@/modules/folder/folder-destroy-store';

export default {
  namespaced: true,

  modules: {
    destroy: folderDestroyStore,
    form: folderFormStore,
    list: folderListStore,
    view: folderViewStore,
    importer: folderImporterStore,
  },
};
