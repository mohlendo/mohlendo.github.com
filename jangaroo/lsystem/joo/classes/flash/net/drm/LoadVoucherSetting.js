joo.classLoader.prepare("package flash.net.drm",/* {*/


/**
 * The LoadVoucherSetting class provides string constants for use with the <code>settings</code> parameter of the DRMManager <code>loadVoucher()</code> method.
 */
"public final class LoadVoucherSetting",1,function($$private){;return[ 
  /**
   * Loads the voucher from the local cache, if possible; downloads the voucher from a media rights server only if a locally cached copy does not exist.
   */
  "public static const",{ ALLOW_SERVER/*:String*/ : "allowServer"},
  /**
   * Downloads the voucher from the media rights server only. Does not load the voucher from the local cache.
   */
  "public static const",{ FORCE_REFRESH/*:String*/ : "forceRefresh"},
  /**
   * Loads the voucher from the local cache only. Does not download the voucher from a media rights server.
   */
  "public static const",{ LOCAL_ONLY/*:String*/ : "localOnly"},
];},[],[], "0.8.0", "0.9.6"
);