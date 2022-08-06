
let productData = [
        ['kettlebells', 'benlee','BENLEE KETTLEBELL 3 KG ROZE','Productdetail/kettlebell_3_kg_roze.html','../media/fotos/productlogos/kettlebells/BENLEE_3KG_ROZE.png', 'BENLEE_3KG_ROZE','20.95'],
        ['kettlebells', 'domyos','DOMYOS KETTLEBELL 8 KG','Productdetail/DOMYOS_KETTLEBELL_8KG.html','../media/fotos/productlogos/kettlebells/DOMYOS_8KG.png', 'DOMYOS_8KG','20.95'],
        ['kettlebells', 'gymstick','GYMSTICK PRO KETTLEBELL ZWART 4 KG','Productdetail/GYMSTICK_PRO_KETTLEBELL_ZWART4KG.html','../media/fotos/productlogos/kettlebells/GYMSTICK_ZWART_4KG.png', 'GYMSTICK_ZWART_4KG','20.95'],
        ['kettlebells', 'matchu','MATCHU SPORTS - ZWART - KETTLEBELL - 4KG - KUNSTSTOF','','../media/fotos/productlogos/kettlebells/MATCHU_SPORTS_4KG_KUNSTSTOF.png', 'MATCHU_SPORTS_4KG_KUNSTSTOF','20.59'],
        ['kettlebells', 'toorx','TOORX AKCA STEEL COMPETITION KETTLEBELL - STAAL - 12 KG','','../media/fotos/productlogos/kettlebells/TOORX_STAAL_12KG.png', 'TOORX_STAAL_12KG','20.59'],
        ['kettlebells', 'gymstick','GYMSTICK PRO KETTLEBELL - ZWART  - 10 KG','','../media/fotos/productlogos/kettlebells/GYMSTICK_10_KG.png', 'GYMSTICK_10_KG','20.95'],
        ['kettlebells', 'muscle','MUSCLE POWER RUBBEREN KETTLEBELL - ZWART - 24 KG','','../media/fotos/productlogos/kettlebells/MUSCLE_POWERMUSCLE_RUBBEREN_24KG.png', 'MUSCLE_POWERMUSCLE_RUBBEREN_24KG','20.95'],
        ['kettlebells', 'virtufit','VIRTUFIT KETTLEBELL PRO - GIETIJZER - 10 KG','','../media/fotos/productlogos/kettlebells/VIRTUFIT_GIETIJZER_10KG.png', 'VIRTUFIT_GIETIJZER_10KG','20.95'],
        ['fitnessmatten', 'yogamat','YOGAMAT 5 MM ZACHTE YOGA DONKERBLAUW','Productdetail/YOGAMAT_5MM_ZACHTE_YOGA_DONKERBLAUW.html','../media/fotos/productlogos/fitnessmatten/KIMJALI_YOGAMAT_5MM_ZACHTE_YOGA_DONKERBLAUW.png', 'KIMJALI_YOGAMAT_5MM_ZACHTE_YOGA_DONKERBLAUW','20.95'],
        ['fitnessmatten', 'domyos','DOMYOS Vloertegel voor kleutergym blauw','','../media/fotos/productlogos/fitnessmatten/DOMYOS_VLOERTEGEL_VOOR_KLEUTERGYM_BLAUW.png', 'DOMYOS_VLOERTEGEL_VOOR_KLEUTERGYM_BLAUW','20.95'],
        ['fitnessmatten', 'YOGAMAT','YOGAMAT | 5 MM | DYNAMISCHE YOGA | DONKERGRIJS','','../media/fotos/productlogos/fitnessmatten/KIMJALY_YOGAMAT_5MM_DYNAMISCHE_YOGA_DONKERGRIJS.png', 'KIMJALY_YOGAMAT_5MM_DYNAMISCHE_YOGA_DONKERGRIJS','20.95'],
        ['fitnessmatten', 'virtufit','VirtuFit Universele Vloermat - Beschermmat Fitnessapparatuur','','../media/fotos/productlogos/fitnessmatten/VIRTUFIT_UNIVERSELE_VLOERMAT_BESCHERMMAT_FITNESSAPPARATUUR.png', 'VIRTUFIT_UNIVERSELE_VLOERMAT_BESCHERMMAT_FITNESSAPPARATUUR','20.95'],
        ['fitnessmatten', 'merkloos','Opvouwbare fitnessmat blauw','','../media/fotos/productlogos/fitnessmatten/OPVOUWBAREFITNESSMATBLAUW160CMX60CMX7MM.png', 'OPVOUWBAREFITNESSMATBLAUW160CMX60CMX7MM','20.95'],
        ['fitnessmatten', 'reebok','Reebok Vloermat','','../media/fotos/productlogos/fitnessmatten/REEBOK_VLOETMAT.png', 'OPVOUWBAREFITNESSMATBLAUW160CMX60CMX7MM','20.95'],
        ['weerstandsbanden', 'blackroll','BLACKROLL RESIST BAND - Grijs','Productdetail/BLACKROLl_RESIST_BAND_Grijs.html','../media/fotos/productlogos/elastieken/BLACKROLL_RESISTBAND_GRIJS.png', 'BLACKROLL_RESISTBAND_GRIJS','20.95'],
        ['weerstandsbanden', 'merkloos','Korte weerstandsbanden rubber set van 3 turquoise/bordeaux/zwart','','../media/fotos/productlogos/elastieken/KORTE_WEERSTANDSBANDEN567KG_RUBBER_SET_VAN_3_TURQUOISE_BORDEAUX_ZWART.png', 'KORTE_WEERSTANDSBANDEN567KG_RUBBER_SET_VAN_3_TURQUOISE_BORDEAUX_ZWART','20.95'],
        ['weerstandsbanden', 'tunturi','Tunturi Weerstandsbanden Set - Textiel - 3 stuks','','../media/fotos/productlogos/elastieken/TUNTURI_WEERSTANDSBANDEN_SET_TEXTIEL_3STUKS.png', 'TUNTURI_WEERSTANDSBANDEN_SET_TEXTIEL_3STUKS','20.95'],
        ['weerstandsbanden', 'matchu','MATCHU - Weerstandsband - Medium','','../media/fotos/productlogos/elastieken/WEERSTANDSBAND_MEDIUM.png', 'WEERSTANDSBAND_MEDIUM','20.95'],
        ['weerstandsbanden', 'matchu','MATCHU- Weerstandsbanden set - GeelRoodGroenBlauw - Latex','','../media/fotos/productlogos/elastieken/WEERSTANDSBANDEN_SET_GEELROODGROENBLAUW_LATEX.png', 'WEERSTANDSBANDEN_SET_GEELROODGROENBLAUW_LATEX','20.95'],
        ['weerstandsbanden', 'domyos','DOMYOS Weerstandsband glute band krachttraining billen hard','','../media/fotos/productlogos/elastieken/WEERSTANDSBAND_GLUTE_BAND_KRACHTTRAINING_BILLEN%20_HARD.png', 'WEERSTANDSBAND_GLUTE_BAND_KRACHTTRAINING_BILLEN%20_HARD','20.95'],
];

let filterData = [
        'benlee',
        'reebok',
        'yogamat',
        'domyos',
        'matchu',
        'toorx',
        'muscle',
        'virtufit',
        'blackroll',
        'tunturi',
        'merkloos',
        'gymstick'
]

let categoryData = [
        'kettlebells', 'fitnessmatten','weerstandsbanden'
];