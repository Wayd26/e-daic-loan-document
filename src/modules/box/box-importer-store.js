import importerStore from '@/shared/importer/importer-store';
import { BoxService } from '@/modules/box/box-service';
import boxImporterFields from '@/modules/box/box-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  BoxService.import,
  boxImporterFields,
  i18n('entities.box.importer.fileName'),
  i18n('entities.box.importer.hint'),
);
