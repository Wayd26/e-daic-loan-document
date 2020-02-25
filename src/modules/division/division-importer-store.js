import importerStore from '@/shared/importer/importer-store';
import { DivisionService } from '@/modules/division/division-service';
import divisionImporterFields from '@/modules/division/division-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  DivisionService.import,
  divisionImporterFields,
  i18n('entities.division.importer.fileName'),
  i18n('entities.division.importer.hint'),
);
