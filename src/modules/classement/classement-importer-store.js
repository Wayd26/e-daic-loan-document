import importerStore from '@/shared/importer/importer-store';
import { ClassementService } from '@/modules/classement/classement-service';
import classementImporterFields from '@/modules/classement/classement-importer-fields';
import { i18n } from '@/i18n';

export default importerStore(
  ClassementService.import,
  classementImporterFields,
  i18n('entities.classement.importer.fileName'),
  i18n('entities.classement.importer.hint'),
);
