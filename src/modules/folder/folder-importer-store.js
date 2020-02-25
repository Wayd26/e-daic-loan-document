import importerStore from '@/shared/importer/importer-store';
import { FolderService } from '@/modules/folder/folder-service';
import folderImporterFields from '@/modules/folder/folder-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  FolderService.import,
  folderImporterFields,
  i18n('entities.folder.importer.fileName'),
  i18n('entities.folder.importer.hint'),
);
