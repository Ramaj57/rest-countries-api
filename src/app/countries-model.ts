export interface Country {
    name: Name;
    tld?: string[];
    cca2: string;
    ccn3?: string;
    cca3: string;
    independent?: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital?: string[];
    altSpellings: string[];
    region: string;
    languages: Languages;
    translations: Translations;
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms?: Demonyms;
    flag: string;
    maps: Maps;
    population: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flags;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    cioc?: string;
    subregion?: string;
    fifa?: string;
    borders?: string[];
    gini?: Gini;
    postalCode?: PostalCode;
  }
  
  export interface PostalCode {
    format: string;
    regex?: string;
  }
  
  export interface Gini {
    '2018'?: number;
    '2015'?: number;
    '2017'?: number;
    '2019'?: number;
    '2016'?: number;
    '2013'?: number;
    '2014'?: number;
    '2012'?: number;
    '2003'?: number;
    '2011'?: number;
    '2010'?: number;
    '2005'?: number;
    '2009'?: number;
    '1999'?: number;
    '1992'?: number;
    '1998'?: number;
    '2008'?: number;
    '2006'?: number;
    '2004'?: number;
  }
  
  export interface CapitalInfo {
    latlng?: number[];
  }
  
  export interface CoatOfArms {
    png?: string;
    svg?: string;
  }
  
  export interface Flags {
    png: string;
  }
  
  export interface Car {
    signs?: string[];
    side: string;
  }
  
  export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
  }
  
  export interface Demonyms {
    eng: Eng2;
    fra?: Eng2;
  }
  
  export interface Eng2 {
    f: string;
    m: string;
  }
  
  export interface Translations {
    ara: Eng;
    bre: Eng;
    ces: Eng;
    cym: Eng;
    deu: Eng;
    est: Eng;
    fin: Eng;
    fra: Eng;
    hrv?: Eng;
    hun: Eng;
    ita: Eng;
    jpn?: Eng;
    kor: Eng;
    nld: Eng;
    per?: Eng;
    pol: Eng;
    por: Eng;
    rus: Eng;
    slk: Eng;
    spa: Eng;
    srp: Eng;
    swe: Eng;
    tur: Eng;
    urd: Eng;
    zho?: Eng;
  }
  
  export interface Languages {
    eng?: string;
    fra?: string;
    gsw?: string;
    ita?: string;
    roh?: string;
    hun?: string;
    zho?: string;
    ara?: string;
    ind?: string;
    por?: string;
    lao?: string;
    nld?: string;
    pap?: string;
    swa?: string;
    cat?: string;
    run?: string;
    afr?: string;
    nbl?: string;
    nso?: string;
    sot?: string;
    ssw?: string;
    tsn?: string;
    tso?: string;
    ven?: string;
    xho?: string;
    zul?: string;
    spa?: string;
    cal?: string;
    cha?: string;
    mkd?: string;
    nfr?: string;
    nor?: string;
    dan?: string;
    fao?: string;
    rus?: string;
    uzb?: string;
    sin?: string;
    tam?: string;
    ben?: string;
    aym?: string;
    que?: string;
    msa?: string;
    tur?: string;
    prs?: string;
    pus?: string;
    tuk?: string;
    rar?: string;
    fin?: string;
    swe?: string;
    smo?: string;
    tkl?: string;
    pov?: string;
    aze?: string;
    kor?: string;
    mfe?: string;
    ell?: string;
    hrv?: string;
    ber?: string;
    fij?: string;
    hif?: string;
    deu?: string;
    nep?: string;
    kat?: string;
    urd?: string;
    hmo?: string;
    tpi?: string;
    pih?: string;
    mlg?: string;
    hin?: string;
    cnr?: string;
    grn?: string;
    ukr?: string;
    glv?: string;
    her?: string;
    hgm?: string;
    kwn?: string;
    loz?: string;
    ndo?: string;
    bul?: string;
    kal?: string;
    khm?: string;
    arc?: string;
    ckb?: string;
    kir?: string;
    nya?: string;
    bos?: string;
    srp?: string;
    amh?: string;
    eus?: string;
    glc?: string;
    slv?: string;
    mah?: string;
    isl?: string;
    ltz?: string;
    nau?: string;
    mey?: string;
    tha?: string;
    hat?: string;
    tvl?: string;
    bel?: string;
    lav?: string;
    pau?: string;
    fil?: string;
    kon?: string;
    lin?: string;
    lua?: string;
    som?: string;
    ces?: string;
    slk?: string;
    bis?: string;
    niu?: string;
    kin?: string;
    est?: string;
    ron?: string;
    tet?: string;
    vie?: string;
    lat?: string;
    de?: string;
    gle?: string;
    nno?: string;
    nob?: string;
    smi?: string;
    sag?: string;
    tir?: string;
    lit?: string;
    kaz?: string;
    hye?: string;
    nrf?: string;
    jpn?: string;
    crs?: string;
    tgk?: string;
    mlt?: string;
    sqi?: string;
    div?: string;
    fas?: string;
    bjz?: string;
    mya?: string;
    dzo?: string;
    jam?: string;
    pol?: string;
    zdj?: string;
    ton?: string;
    gil?: string;
    bwg?: string;
    kck?: string;
    khi?: string;
    ndc?: string;
    nde?: string;
    sna?: string;
    toi?: string;
    zib?: string;
    mon?: string;
    heb?: string;
    mri?: string;
    nzs?: string;
  }
  
  export interface Idd {
    root?: string;
    suffixes?: string[];
  }
  
  export interface Currencies {
    [x: string]: any;
    SHP?: SHP;
    XCD?: SHP;
    CHF?: SHP;
    SLL?: SHP;
    HUF?: SHP;
    TWD?: SHP;
    XPF?: SHP;
    BBD?: SHP;
    NZD?: SHP;
    XOF?: SHP;
    TND?: SHP;
    EUR?: SHP;
    IDR?: SHP;
    CVE?: SHP;
    LAK?: SHP;
    USD?: SHP;
    UGX?: SHP;
    BIF?: SHP;
    ZAR?: SHP;
    LYD?: SHP;
    MXN?: SHP;
    XAF?: SHP;
    MKD?: SHP;
    CNY?: SHP;
    YER?: SHP;
    GBP?: SHP;
    GGP?: SHP;
    SBD?: SHP;
    NOK?: SHP;
    DKK?: SHP;
    FOK?: SHP;
    UZS?: SHP;
    EGP?: SHP;
    LKR?: SHP;
    ILS?: SHP;
    JOD?: SHP;
    BDT?: SHP;
    PEN?: SHP;
    SGD?: SHP;
    TRY?: SHP;
    AFN?: SHP;
    AWG?: SHP;
    CKD?: SHP;
    ZMW?: SHP;
    AUD?: SHP;
    AZN?: SHP;
    DJF?: SHP;
    KPW?: SHP;
    MUR?: SHP;
    COP?: SHP;
    MAD?: SHP;
    DZD?: SHP;
    SDG?: SHP;
    FJD?: SHP;
    NPR?: SHP;
    GEL?: SHP;
    PKR?: SHP;
    BWP?: SHP;
    LBP?: SHP;
    PGK?: SHP;
    DOP?: SHP;
    QAR?: SHP;
    MGA?: SHP;
    INR?: SHP;
    SYP?: SHP;
    SZL?: SHP;
    PYG?: SHP;
    UAH?: SHP;
    IMP?: SHP;
    NAD?: SHP;
    AED?: SHP;
    BGN?: SHP;
    KHR?: SHP;
    IQD?: SHP;
    SEK?: SHP;
    CUC?: SHP;
    CUP?: SHP;
    KGS?: SHP;
    RUB?: SHP;
    MYR?: SHP;
    STN?: SHP;
    CAD?: SHP;
    MWK?: SHP;
    SAR?: SHP;
    BAM?: SHP;
    ETB?: SHP;
    OMR?: SHP;
    MOP?: SHP;
    LSL?: SHP;
    ANG?: SHP;
    ISK?: SHP;
    ARS?: SHP;
    MRU?: SHP;
    CRC?: SHP;
    THB?: SHP;
    HTG?: SHP;
    TVD?: SHP;
    HNL?: SHP;
    BYN?: SHP;
    PHP?: SHP;
    GIP?: SHP;
    GNF?: SHP;
    BHD?: SHP;
    SRD?: SHP;
    CDF?: SHP;
    SOS?: SHP;
    CZK?: SHP;
    VUV?: SHP;
    KES?: SHP;
    RWF?: SHP;
    RON?: SHP;
    TTD?: SHP;
    GYD?: SHP;
    VND?: SHP;
    UYU?: SHP;
    HKD?: SHP;
    TMT?: SHP;
    MZN?: SHP;
    PAB?: SHP;
    ERN?: SHP;
    TZS?: SHP;
    KRW?: SHP;
    AOA?: SHP;
    KZT?: SHP;
    MDL?: SHP;
    FKP?: SHP;
    AMD?: SHP;
    WST?: SHP;
    JEP?: SHP;
    JPY?: SHP;
    BOB?: SHP;
    CLP?: SHP;
    BMD?: SHP;
    SCR?: SHP;
    GTQ?: SHP;
    TJS?: SHP;
    GMD?: SHP;
    NGN?: SHP;
    BSD?: SHP;
    KWD?: SHP;
    MVR?: SHP;
    SSP?: SHP;
    IRR?: SHP;
    ALL?: SHP;
    BRL?: SHP;
    RSD?: SHP;
    BZD?: SHP;
    MMK?: SHP;
    BTN?: SHP;
    VES?: SHP;
    LRD?: SHP;
    JMD?: SHP;
    PLN?: SHP;
    KYD?: SHP;
    BND?: SHP;
    KMF?: SHP;
    TOP?: SHP;
    KID?: SHP;
    GHS?: SHP;
    ZWL?: SHP;
    MNT?: SHP;
    NIO?: SHP;
  }
  
  export interface SHP {
    name: string;
    symbol: string;
  }
  
  export interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
  }
  
  export interface NativeName {
    eng?: Eng;
    fra?: Eng;
    gsw?: Eng;
    ita?: Eng;
    roh?: Eng;
    hun?: Eng;
    zho?: Eng;
    ara?: Eng;
    ind?: Eng;
    por?: Eng;
    lao?: Eng;
    nld?: Eng;
    pap?: Eng;
    swa?: Eng;
    cat?: Eng;
    run?: Eng;
    afr?: Eng;
    nbl?: Eng;
    nso?: Eng;
    sot?: Eng;
    ssw?: Eng;
    tsn?: Eng;
    tso?: Eng;
    ven?: Eng;
    xho?: Eng;
    zul?: Eng;
    spa?: Eng;
    cal?: Eng;
    cha?: Eng;
    mkd?: Eng;
    nfr?: Eng;
    nor?: Eng;
    dan?: Eng;
    fao?: Eng;
    rus?: Eng;
    uzb?: Eng;
    sin?: Eng;
    tam?: Eng;
    ben?: Eng;
    aym?: Eng;
    que?: Eng;
    msa?: Eng;
    tur?: Eng;
    prs?: Eng;
    pus?: Eng;
    tuk?: Eng;
    rar?: Eng;
    fin?: Eng;
    swe?: Eng;
    smo?: Eng;
    tkl?: Eng;
    pov?: Eng;
    aze?: Eng;
    kor?: Eng;
    mfe?: Eng;
    ell?: Eng;
    hrv?: Eng;
    ber?: Eng;
    fij?: Eng;
    hif?: Eng;
    deu?: Eng;
    nep?: Eng;
    kat?: Eng;
    urd?: Eng;
    hmo?: Eng;
    tpi?: Eng;
    pih?: Eng;
    mlg?: Eng;
    hin?: Eng;
    cnr?: Eng;
    grn?: Eng;
    ukr?: Eng;
    glv?: Eng;
    her?: Eng;
    hgm?: Eng;
    kwn?: Eng;
    loz?: Eng;
    ndo?: Eng;
    bul?: Eng;
    kal?: Eng;
    khm?: Eng;
    arc?: Eng;
    ckb?: Eng;
    kir?: Eng;
    nya?: Eng;
    bos?: Eng;
    srp?: Eng;
    amh?: Eng;
    slv?: Eng;
    mah?: Eng;
    isl?: Eng;
    ltz?: Eng;
    nau?: Eng;
    mey?: Eng;
    tha?: Eng;
    hat?: Eng;
    tvl?: Eng;
    bel?: Eng;
    lav?: Eng;
    pau?: Eng;
    fil?: Eng;
    kon?: Eng;
    lin?: Eng;
    lua?: Eng;
    som?: Eng;
    ces?: Eng;
    slk?: Eng;
    bis?: Eng;
    niu?: Eng;
    kin?: Eng;
    est?: Eng;
    ron?: Eng;
    tet?: Eng;
    vie?: Eng;
    lat?: Eng;
    bar?: Eng;
    gle?: Eng;
    nno?: Eng;
    nob?: Eng;
    smi?: Eng;
    sag?: Eng;
    tir?: Eng;
    lit?: Eng;
    kaz?: Eng;
    hye?: Eng;
    nrf?: Eng;
    jpn?: Eng;
    crs?: Eng;
    tgk?: Eng;
    mlt?: Eng;
    sqi?: Eng;
    div?: Eng;
    fas?: Eng;
    bjz?: Eng;
    mya?: Eng;
    dzo?: Eng;
    jam?: Eng;
    pol?: Eng;
    zdj?: Eng;
    ton?: Eng;
    gil?: Eng;
    bwg?: Eng;
    kck?: Eng;
    khi?: Eng;
    ndc?: Eng;
    nde?: Eng;
    sna?: Eng;
    toi?: Eng;
    zib?: Eng;
    mon?: Eng;
    heb?: Eng;
    mri?: Eng;
    nzs?: Eng;
  }
  
  export interface Eng {
    official: string;
    common: string;
  }
