const fr = {
    common: {
        or: 'Ou',
        cancel: 'Annuler',
        reset: 'Reset',
        save: 'Enregistrer',
        search: 'Chercher',
        edit: 'Editer',
        remove: 'Supprimer',
        new: 'Nouveau',
        export: 'Exporter en Excel',
        noDataToExport: 'Pas de données à exporter',
        import: 'Importer',
        discard: 'Abandonner ',
        yes: 'Oui',
        no: 'Non',
        pause: 'Pause',
        areYouSure: 'Etes-vous sûr ?',
        view: 'View',
        destroy: 'Supprimer',
        mustSelectARow: 'Sélectionner une ligne',
        confirm: 'Confirmer',
      },
    
      app: {
        title: 'Archive',
      },
  entities: {
    loan : {
            name : "prêt",
            label : "Prêts",
            menu : "Prêts",
            exporterFileName : "loan_export",
            list : {
              menu : "Prêts",
              title : "Prêts",
            },
            emailAll : {
              label : "Envoyer un rappel par e-mail",
              success : "Courriel(s) envoyé(s) avec succès",
            },
            create : {
              success : "Prêt enregisté avec succès",
            },
            update : {
              success : "Prêt enregisté avec succès",
            },
            destroy : {
              success : "Prêt supprimé avec succès",
            },
            destroyAll : {
              success : "Prêt(s) supprimé(s) avec succès",
            },
            edit : {
              title : "Edit Loan",
            },
            fields : {
              id : "Id",
              folder : "Dossier",
              member : "Membre",
              issueDateRange : "Date d'émission",
              issueDate : "Date d'émission",
              dueDateRange : "Date d'échéance",
              dueDate : "Date d'échéance",
              returnDateRange : "Date de retour",
              returnDate : "Date de retour",
              status : "Statut",
              createdAt : "Créé à",
              updatedAt : "Mise à jour à",
              createdAtRange : "Créé à",
            },
            enumerators : {
              status : {
                inProgress : "En cours",
                overdue : "En retard",
                closed : "Fermé",
              },
            },
            new : {
              title : "Nouveau prêt",
            },
            view : {
              title : "View Loan",
            },
            importer : {
              title : "Prêts à l'importation",
              fileName : "modèle_de_prêt_import",
              hint :
                "Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par des espaces",
            },
            validation : {
              folderOutOfStock : "Désolé, ce dossier est en rupture de stock",
            },
    },
    
    folder: {
          name: 'dossier',
          label: 'Dossiers',
          menu: 'Dossiers',
          exporterFileName: 'dossier_export',
          list: {
            menu: 'Dossiers',
            title: 'Dossiers',
          },
          create: {
            success: 'Dossier sauvegardé avec succès',
          },
          update: {
            success: 'Dossier sauvegardé avec succès',
          },
          destroy: {
            success: 'Dossier supprimé avec succès',
          },
          destroyAll: {
            success: 'Dossier(s) supprimé(s) avec succès',
          },
          edit: {
            title: 'Dossier d\'édition',
          },
          fields: {
            id: 'Id',
            cote: 'Cote',
            title: 'Titre',
            box: 'Boîte',
            classement: 'Classement',
            images: 'Images',
            status: 'Statut',
            createdAt: 'Créé à',
            updatedAt: 'Mise à jour à l\'adresse',
            createdAtRange: 'Créé à',
          },
          enumerators: {
            status: {
              available: 'Disponible',
              unavailable: 'Non disponible',
            },
          },
          new: {
            title: 'Nouveau dossier',
          },
          view: {
            title: 'Voir le dossier',
          },
          importer: {
            title: 'Dossiers d\'importation',
            fileName: 'modèle_d\'importation_de_dossier',
            hint:
              'Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par un espace.',
          },
    },
        
    division: {
          name: 'division',
          label: 'Divisions',
          menu: 'Divisions',
          exporterFileName: 'division_export',
          list: {
            menu: 'Divisions',
            title: 'Divisions',
          },
          create: {
            success: 'La division a réussi à sauver',
          },
          update: {
            success: 'La division a réussi à sauver',
          },
          destroy: {
            success: 'Division supprimée avec succès',
          },
          destroyAll: {
            success: 'Division(s) supprimée(s) avec succès',
          },
          edit: {
            title: 'Division de l\'édition',
          },
          fields: {
            id: 'Id',
            title: 'Titre',
            createdAt: 'Créé à',
            updatedAt: 'Mise à jour à l\'adresse',
            createdAtRange: 'Créé à',
          },
          new: {
            title: 'Nouvelle division',
          },
          view: {
            title: 'Voir la division',
          },
          importer: {
            title: 'Divisions des importations',
            fileName: 'modèle_d\'importation_de_division',
            hint:
              'Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par un espace.',
          },
    },
    
    classement: {
          name: 'classement',
          label: 'Classements',
          menu: 'Classements',
          exporterFileName: 'classement_export',
          list: {
            menu: 'Classements',
            title: 'Classements',
          },
          create: {
            success: 'Classement sauvegardé avec succès',
          },
          update: {
            success: 'Classement sauvegardé avec succès',
          },
          destroy: {
            success: 'Classement supprimé avec succès',
          },
          destroyAll: {
            success: 'Classement(s) supprimé(s) avec succès',
          },
          edit: {
            title: 'Classement de l\'édition',
          },
          fields: {
            id: 'Id',
            title: 'Titre',
            cote: 'Cote',
            division: 'Division',
            createdAt: 'Créé à',
            updatedAt: 'Mise à jour à l\'adresse',
            createdAtRange: 'Créé à',
          },
          new: {
            title: 'Nouveau classement',
          },
          view: {
            title: 'Voir le classement',
          },
          importer: {
            title: 'Classes d\'importation',
            fileName: 'modèle_de_classement_import',
            hint:
              'Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par un espace.',
          },
    },
        
    box: {
          name: 'boîte',
          label: 'Boîtes',
          menu: 'Boîtes',
          exporterFileName: 'box_export',
          list: {
            menu: 'Boîtes',
            title: 'Boîtes',
          },
          create: {
            success: 'Boîte sauvegardée avec succès',
          },
          update: {
            success: 'Boîte sauvegardée avec succès',
          },
          destroy: {
            success: 'Boîte supprimée avec succès',
          },
          destroyAll: {
            success: 'Boîte(s) supprimée(s) avec succès',
          },
          edit: {
            title: 'Boîte d\'édition',
          },
          fields: {
            id: 'Id',
            title: 'Titre',
            cote: 'Cote',
            division: 'Division',
            createdAt: 'Créé à',
            updatedAt: 'Mise à jour à l\'adresse',
            createdAtRange: 'Créé à',
          },
          new: {
            title: 'Nouvelle boîte',
          },
          view: {
            title: 'Voir l\'encadré',
          },
          importer: {
            title: 'Boîtes d\'importation',
            fileName: 'modèle_d\'importation_boîte',
            hint:
              'Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par un espace.',
          },
    },
  },

  auth: {
        profile: {
          title: 'Editer le Profil',
          success: 'Profil mis à jour avec succès',
        },
        createAnAccount: 'Créer un compte',
        rememberMe: 'Se souvenir',
        forgotPassword: 'Mot de passe oublié',
        signin: 'Se connecter',
        signup: 'S\'inscrire',
        signout: 'Deconnecter',
        alreadyHaveAnAccount:
          'Avez-vous déja un compte? Se connecter.',
        signinWithAnotherAccount:
          'Se connecter avec un autre compte',
        emailUnverified: {
          message: `Please confirm your email at <strong>{0}</strong> to continue.`,
          submit: `Renvoyer l'email de verification`,
        },
        emptyPermissions: {
          message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
        },
        passwordResetEmail: {
          message: 'Send password reset email',
          error: `Email non reconnu`,
        },
        passwordReset: {
          message: 'Restaurer le mot de passe',
        },
        emailAddressVerificationEmail: {
            error: `Email non reconnu`,
        },
        verificationEmailSuccess: `Verification email sent successfully`,
        passwordResetEmailSuccess: `Password reset email sent successfully`,
        passwordResetSuccess: `Password changed successfully`,
        verifyEmail: {
          success: 'Email successfully verified',
          message:
            'Just a moment, your email is being verified...',
        },
  },

  roles: {
        librarian: {
          label: 'Archiviste',
          description: 'Acces total à toutes les ressources',
        },
        member: {
          label: 'Membre',
          description: 'Acces simple',
        },
  },

  iam: {
    title: 'Utilisateurs',
    menu: 'Utilisateurs',
    disable: 'Désactiver',
    disabled: 'Handicapés',
    enabled: 'Activé',
    enable: 'Activer',
    doEnableSuccess: 'Utilisateur activé avec succès',
    doDisableSuccess: 'Utilisateur désactivé avec succès',
    doDisableAllSuccess: 'Utilisateur(s) désactivé(s) avec succès',
    doEnableAllSuccess: 'Utilisateur(s) activé(s) avec succès',
    doAddSuccess: 'Utilisateur(s) sauvegardé(s) avec succès',
    doUpdateSuccess: 'Utilisateur enregistré avec succès',
    viewBy: 'Afficher par',
    users: {
      name: 'utilisateurs',
      label: 'Utilisateurs',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Autorisations supprimées avec succès',
    },
    roles: {
      label: 'Rôles',
      doRemoveAllSelectedSuccess:
        'Autorisations supprimées avec succès',
    },
    edit: {
      title: 'Modifier l\'utilisateur',
    },
    new: {
      title: 'Nouveau(x) utilisateur(s)',
      emailsHint:
        'Séparez les adresses électroniques multiples en utilisant le caractère virgule.',
    },
    view: {
      title: 'Voir l\'utilisateur',
      activity: 'Activité',
    },
    importer: {
      title: 'Utilisateurs de l\'importation',
      fileName: 'users_import_template',
      hint:
        'Les colonnes Fichiers/Images doivent être les URL des fichiers séparés par un espace. Les relations doivent être l\'ID des enregistrements référencés séparés par un espace. Les rôles doivent être les identifiants des rôles séparés par un espace.',
    },
    errors: {
      userAlreadyExists:
        'L\'utilisateur avec cet e-mail existe déjà',
      userNotFound: 'Utilisateur non trouvé',
      disablingHimself: `Vous ne pouvez pas vous désactiver`,
      revokingOwnPermission: `Vous ne pouvez pas révoquer votre propre autorisation d'archiviste`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Uid d\'authentification',
      avatars: 'Avatar',
      email: 'Courriel :',
      emails: 'Courriel(s)',
      fullName: 'Nom',
      firstName: 'Prénom',
      lastName: 'Nom de famille',
      status: 'Statut',
      disabled: 'Handicapés',
      phoneNumber: 'Numéro de téléphone',
      role: 'Rôle',
      createdAt: 'Créé à',
      updatedAt: 'Mise à jour à l\'adresse',
      roleUser: 'Rôle/utilisateur',
      roles: 'Rôles',
      createdAtRange: 'Créé à',
      password: 'Mot de passe',
      rememberMe: 'Se souvenir de moi',
    },
    enabled: 'Activé',
    disabled: 'Handicapés',
    validations: {
      // eslint-disable-next-line
      email: 'L\'adresse électronique ${valeur} n\'est pas valide',
    },
  },

  auditLog: {
    menu: 'Journaux d\'audit',
    title: 'Journaux d\'audit',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Séparez les entités multiples en utilisant le caractère virgule.',
    fields: {
      id: 'Id',
      timestampRange: 'Période',
      entityName: 'Entité',
      entityNames: 'Entités',
      entityId: 'Identification de l\'entité',
      action: 'Action',
      values: 'Valeurs',
      timestamp: 'Date',
      createdByEmail: 'Courriel de l\'utilisateur',
    },
  },

  settings: {
    title: 'Paramètres',
    menu: 'Paramètres',
    save: {
      success:
        'Les réglages ont été enregistrés avec succès. La page se rechargera dans les {0} secondes pour que les modifications prennent effet.',
    },
    fields: {
      theme: 'Thème',
      loanPeriodInDays: 'Durée du prêt (en jours)',
    },
    colors: {
      default: 'Par défaut',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Or',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Vert polaire',
      purple: 'Violet',
      red: 'Rouge',
      volcano: 'Volcan',
      yellow: 'Jaune',
    },
  },
  
  home: {
    menu: 'Accueil',
  },

  errors: {
    backToHome: 'Retour à la maison',
    403: `Désolé, vous n'avez pas accès à cette page`,
    404: 'Désolé, la page que vous avez visitée n\'existe pas',
    500: 'Désolé, le serveur signale une erreur',
    forbidden: {
      message: 'Interdit',
    },
    validation: {
      message: 'Une erreur est survenue',
    },
    defaultErrorMessage: 'Ops, une erreur s\'est produite',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} n\'est pas valide',
      required: '${path} est nécessaire',
      oneOf:
        '${path} doit être une des valeurs suivantes: ${values}',
      notOneOf:
        '${path} ne doit pas être l\'une des valeurs suivantes:${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} doit être un ${type}`;
      },
    },
    string: {
      length:
        '${path} doit être exactement ${length} caractères',
      min: '${path} doit contenir au moins ${min} caractères',
      max: '${path} doit être d\'au plus ${max} caractères',
      matches:
        '${path} doit correspondre à la suivante: "${regex}"',
      email: '${path} doit être un courriel valide',
      url: '${path} doit être une URL valide',
      trim: '${path} doit être une chaîne ajustée',
      lowercase: '${path} doit être une chaîne en minuscules',
      uppercase: '${path} doit être une chaîne en majuscules',
      selected: '${path} doit être sélectionné',
    },
    number: {
      min:
        '${path} doit être supérieur ou égal à ${min}',
      max: '${path} doit être inférieure ou égale à ${max}',
      lessThan: '${path} doit être inférieur à ${less}',
      moreThan: '${path} doit être supérieur à ${more}',
      notEqual: '${path} ne doit pas être égale à ${notEqual}',
      positive: '${path} doit être un nombre positif',
      negative: '${path} doit être un nombre négatif',
      integer: '${path} doit être un entier',
      invalid: '${path} doit être un nombre',
    },
    date: {
      min: '${path} le champ doit être plus tard que ${min}',
      max: '${path} le terrain doit être au plus tôt ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} le champ ne peut pas avoir de clés non spécifiées dans la forme de l\'objet',
    },
    array: {
      min: '${path} le terrain doit avoir au moins ${min} article',
      max:
        '${path} le terrain doit avoir moins de ou égal à ${max} article',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Télécharger',
    image: 'Vous devez télécharger une image',
    size: 'Fichier est trop gros. Max autorisé taille est {0}',
    formats: `Format non valide. Doit être '{0}'.`,
  },
  importer: {
    line: 'Ligne',
    status: 'Statut',
    pending: 'Attente',
    imported: 'Importer',
    error: 'Erreur',
    total: `{0} importé, {1} en attente et {2} avec erreur`,
    importedMessage: `Traité {0} sur {1}.`,
    noNavigateAwayMessage:
      'Ne naviguez pas loin de cette page ou l\'importation sera arrêtée.',
    completed: {
      success:
        'Importation terminée. Toutes les lignes ont été importées avec succès.',
      someErrors:
        'Le traitement terminé, mais certaines lignes n\'ont pas pu être importés.',
      allErrors: 'Échec de l\'importation. Il n\'y a pas valable lignes.',
    },
    form: {
      downloadTemplate: 'Télécharger le modèle',
      hint:
        'Cliquez ou faites glisser le fichier vers cette zone pour continuer',
    },
    list: {
      discardConfirm:
        'Êtes-vous sûre? Les données non importées seront perdues.',
    },
    errors: {
      invalidFileEmpty: 'Le fichier est vide',
      invalidFileExcel:
        'Seulement excel (.les fichiers xlsx) sont autorisés',
      invalidFileUpload:
        'Fichier non valide. Assurez-vous que vous utilisez la dernière version du modèle.',
      importHashRequired: 'Le hachage d\'importation est requis',
      importHashExistent: 'Les données ont déjà été importés',
    },
  },

  autocomplete: {
    loading: 'Chargement...',
  },

  imagesViewer: {
    noImage: 'Pas d\'image',
  },
};

export default fr;