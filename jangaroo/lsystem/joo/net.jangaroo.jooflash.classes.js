// class flash.external.ExternalInterface
joo.classLoader.prepare("package flash.external",
"public final class ExternalInterface",1,function($$private){;return[
"public static function get available",function(){
return true;
},
"public static var",{marshallExceptions:false},
"public static function get objectID",function(){
return window.frameElement?window.frameElement.id:window.document.body.id;
},
"public static function addCallback",function(functionName,closure){
var global=window.parent;
var proxy=global[flash.external.ExternalInterface.objectID];
if(!proxy){
proxy=global[flash.external.ExternalInterface.objectID]={};
}
if(!global.document[flash.external.ExternalInterface.objectID]){
global.document[flash.external.ExternalInterface.objectID]=proxy;
}
proxy[functionName]=closure;
},
"public static function call",function(functionName){var rest=Array.prototype.slice.call(arguments,1);
var scope=window.parent;
var properties=functionName.split('.');
for(var i=0;i<properties.length-1;i++){
scope=scope[properties[i]];
if(typeof scope==="undefined"||scope===null){
return null;
}
}
var fn=scope[properties[properties.length-1]];
return typeof fn==='function'?(fn).apply(scope,rest):null;
},
];},["available","objectID","addCallback","call"],["Function"], "0.8.0", "0.9.6"
);
// class flash.system.Security
joo.classLoader.prepare("package flash.system",
"public final class Security",1,function($$private){;return[
"public static function get exactSettings",function(){
throw new Error('not implemented');
},
"public static function set exactSettings",function(value){
throw new Error('not implemented');
},
"public static function get sandboxType",function(){
throw new Error('not implemented');
},
"public static function allowDomain",function(){var domains=Array.prototype.slice.call(arguments);
throw new Error('not implemented');
},
"public static function allowInsecureDomain",function(){var domains=Array.prototype.slice.call(arguments);
throw new Error('not implemented');
},
"public static function loadPolicyFile",function(url){
throw new Error('not implemented');
},
"public static function showSettings",function(panel){if(arguments.length<1){panel="default";}
throw new Error('not implemented');
},
"public static const",{LOCAL_TRUSTED:"localTrusted"},
"public static const",{LOCAL_WITH_FILE:"localWithFile"},
"public static const",{LOCAL_WITH_NETWORK:"localWithNetwork"},
"public static const",{REMOTE:"remote"},
];},["exactSettings","sandboxType","allowDomain","allowInsecureDomain","loadPolicyFile","showSettings"],["Error"], "0.8.0", "0.9.6"
);
// class flash.system.TouchscreenType
joo.classLoader.prepare("package flash.system",
"public final class TouchscreenType",1,function($$private){;return[
"public static const",{FINGER:"finger"},
"public static const",{NONE:"none"},
"public static const",{STYLUS:"stylus"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.system.IMEConversionMode
joo.classLoader.prepare("package flash.system",
"public final class IMEConversionMode",1,function($$private){;return[
"public static const",{ALPHANUMERIC_FULL:"ALPHANUMERIC_FULL"},
"public static const",{ALPHANUMERIC_HALF:"ALPHANUMERIC_HALF"},
"public static const",{CHINESE:"CHINESE"},
"public static const",{JAPANESE_HIRAGANA:"JAPANESE_HIRAGANA"},
"public static const",{JAPANESE_KATAKANA_FULL:"JAPANESE_KATAKANA_FULL"},
"public static const",{JAPANESE_KATAKANA_HALF:"JAPANESE_KATAKANA_HALF"},
"public static const",{KOREAN:"KOREAN"},
"public static const",{UNKNOWN:"UNKNOWN"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.system.System
joo.classLoader.prepare("package flash.system",
"public final class System",1,function($$private){;return[
"public static function get freeMemory",function(){
throw new Error('not implemented');
},
"public static function get ime",function(){
throw new Error('not implemented');
},
"public static function get privateMemory",function(){
throw new Error('not implemented');
},
"public static function get totalMemory",function(){
return 1000000;
},
"public static function get totalMemoryNumber",function(){
throw new Error('not implemented');
},
"public static function get useCodePage",function(){
throw new Error('not implemented');
},
"public static function set useCodePage",function(value){
throw new Error('not implemented');
},
"public static function disposeXML",function(node){
throw new Error('not implemented');
},
"public static function exit",function(code){
throw new Error('not implemented');
},
"public static function gc",function(){
throw new Error('not implemented');
},
"public static function pause",function(){
throw new Error('not implemented');
},
"public static function resume",function(){
throw new Error('not implemented');
},
"public static function setClipboard",function(string){
},
];},["freeMemory","ime","privateMemory","totalMemory","totalMemoryNumber","useCodePage","disposeXML","exit","gc","pause","resume","setClipboard"],["Error"], "0.8.0", "0.9.6"
);
// class flash.system.Capabilities
joo.classLoader.prepare("package flash.system",
"public final class Capabilities",1,function($$private){;return[
"public static function get avHardwareDisable",function(){
return false;
},
"public static function get cpuArchitecture",function(){
throw new Error('not implemented');
},
"public static function get hasAccessibility",function(){
return false;
},
"public static function get hasAudio",function(){
return $$private.audio!==null;
},
"public static function get hasAudioEncoder",function(){
return false;
},
"public static function get hasEmbeddedVideo",function(){
return! !joo.getQualifiedObject('Video');
},
"public static function get hasIME",function(){
return false;
},
"public static function get hasMP3",function(){
return flash.system.Capabilities.hasAudio&&$$private.audio['canPlayType']("audio/mp3");
},
"public static function get hasPrinting",function(){
return false;
},
"public static function get hasScreenBroadcast",function(){
return false;
},
"public static function get hasScreenPlayback",function(){
return false;
},
"public static function get hasStreamingAudio",function(){
return false;
},
"public static function get hasStreamingVideo",function(){
return flash.system.Capabilities.hasEmbeddedVideo;
},
"public static function get hasTLS",function(){
return false;
},
"public static function get hasVideoEncoder",function(){
return false;
},
"public static function get isDebugger",function(){
return joo.debug;
},
"public static function get isEmbeddedInAcrobat",function(){
return false;
},
"public static function get language",function(){
throw new Error('not implemented');
},
"public static function get localFileReadDisable",function(){
return true;
},
"public static function get manufacturer",function(){
return"Jangaroo";
},
"public static function get maxLevelIDC",function(){
throw new Error('not implemented');
},
"public static function get os",function(){
throw new Error('not implemented');
},
"public static function get pixelAspectRatio",function(){
throw new Error('not implemented');
},
"public static function get playerType",function(){
return"PlugIn";
},
"public static function get screenColor",function(){
throw new Error('not implemented');
},
"public static function get screenDPI",function(){
throw new Error('not implemented');
},
"public static function get screenResolutionX",function(){
throw new Error('not implemented');
},
"public static function get screenResolutionY",function(){
throw new Error('not implemented');
},
"public static function get serverString",function(){
throw new Error('not implemented');
},
"public static function get supports32BitProcesses",function(){
throw new Error('not implemented');
},
"public static function get supports64BitProcesses",function(){
throw new Error('not implemented');
},
"public static function get touchscreenType",function(){
throw new Error('not implemented');
},
"public static function get version",function(){
throw new Error('not implemented');
},
"private static const",{audio:function(){return((function(){
var Audio=joo.getQualifiedObject('Audio');
return Audio?new Audio:null;
})());}},
];},["avHardwareDisable","cpuArchitecture","hasAccessibility","hasAudio","hasAudioEncoder","hasEmbeddedVideo","hasIME","hasMP3","hasPrinting","hasScreenBroadcast","hasScreenPlayback","hasStreamingAudio","hasStreamingVideo","hasTLS","hasVideoEncoder","isDebugger","isEmbeddedInAcrobat","language","localFileReadDisable","manufacturer","maxLevelIDC","os","pixelAspectRatio","playerType","screenColor","screenDPI","screenResolutionX","screenResolutionY","serverString","supports32BitProcesses","supports64BitProcesses","touchscreenType","version"],["Error"], "0.8.0", "0.9.6"
);
// class flash.system.SecurityPanel
joo.classLoader.prepare("package flash.system",
"public final class SecurityPanel",1,function($$private){;return[
"public static const",{CAMERA:"camera"},
"public static const",{DEFAULT:"default"},
"public static const",{DISPLAY:"display"},
"public static const",{LOCAL_STORAGE:"localStorage"},
"public static const",{MICROPHONE:"microphone"},
"public static const",{PRIVACY:"privacy"},
"public static const",{SETTINGS_MANAGER:"settingsManager"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.system.ApplicationDomain
joo.classLoader.prepare("package flash.system",
"public final class ApplicationDomain",1,function($$private){;return[
"public static function get currentDomain",function(){
throw new Error('not implemented');
},
"public function get domainMemory",function(){
throw new Error('not implemented');
},
"public function set domainMemory",function(value){
throw new Error('not implemented');
},
"public static function get MIN_DOMAIN_MEMORY_LENGTH",function(){
throw new Error('not implemented');
},
"public function get parentDomain",function(){
throw new Error('not implemented');
},
"public function ApplicationDomain",function(parentDomain){if(arguments.length<1){parentDomain=null;}
throw new Error('not implemented');
},
"public function getDefinition",function(name){
throw new Error('not implemented');
},
"public function hasDefinition",function(name){
throw new Error('not implemented');
},
];},["currentDomain","MIN_DOMAIN_MEMORY_LENGTH"],["Error"], "0.8.0", "0.9.6"
);
// class flash.system.LoaderContext
joo.classLoader.prepare("package flash.system",
"public class LoaderContext",1,function($$private){;return[
"public var",{allowCodeImport:false},
"public var",{applicationDomain:null},
"public var",{checkPolicyFile:false},
"public var",{parameters:null},
"public var",{requestedContentParent:null},
"public var",{securityDomain:null},
"public function LoaderContext",function(checkPolicyFile,applicationDomain,securityDomain){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){checkPolicyFile=false;}applicationDomain=null;}securityDomain=null;}
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.system.SystemUpdater
joo.classLoader.prepare("package flash.system",
{Event:{name:"cancel",type:"flash.events.Event"}},
{Event:{name:"complete",type:"flash.events.Event"}},
{Event:{name:"ioError",type:"flash.events.IOErrorEvent"}},
{Event:{name:"open",type:"flash.events.Event"}},
{Event:{name:"progress",type:"flash.events.ProgressEvent"}},
{Event:{name:"securityError",type:"flash.events.SecurityErrorEvent"}},
{Event:{name:"status",type:"flash.events.StatusEvent"}},
"public class SystemUpdater extends flash.events.EventDispatcher",2,function($$private){;return[
"public function SystemUpdater",function(){flash.events.EventDispatcher.call(this);
throw new Error('not implemented');
},
"public function cancel",function(){
throw new Error('not implemented');
},
"public function update",function(type){
throw new Error('not implemented');
},
];},[],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.system.JPEGLoaderContext
joo.classLoader.prepare("package flash.system",
"public class JPEGLoaderContext extends flash.system.LoaderContext",2,function($$private){;return[
"public var",{deblockingFilter:0.0},
"public function JPEGLoaderContext",function(deblockingFilter,checkPolicyFile,applicationDomain,securityDomain){flash.system.LoaderContext.call(this);if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){deblockingFilter=0.0;}checkPolicyFile=false;}applicationDomain=null;}securityDomain=null;}
throw new Error('not implemented');
},
];},[],["flash.system.LoaderContext","Error"], "0.8.0", "0.9.6"
);
// class flash.system.SystemUpdaterType
joo.classLoader.prepare("package flash.system",
"public class SystemUpdaterType",1,function($$private){;return[
"public static const",{DRM:"drm"},
"public static const",{SYSTEM:"system"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.system.IME
joo.classLoader.prepare("package flash.system",
{Event:{name:"imeComposition",type:"flash.events.IMEEvent"}},
"public final class IME extends flash.events.EventDispatcher",2,function($$private){;return[
"public static function get conversionMode",function(){
throw new Error('not implemented');
},
"public static function set conversionMode",function(value){
throw new Error('not implemented');
},
"public static function get enabled",function(){
throw new Error('not implemented');
},
"public static function set enabled",function(value){
throw new Error('not implemented');
},
"public static function get isSupported",function(){
throw new Error('not implemented');
},
"public static function compositionAbandoned",function(){
throw new Error('not implemented');
},
"public static function compositionSelectionChanged",function(start,end){
throw new Error('not implemented');
},
"public static function doConversion",function(){
throw new Error('not implemented');
},
"public static function setCompositionString",function(composition){
throw new Error('not implemented');
},
];},["conversionMode","enabled","isSupported","compositionAbandoned","compositionSelectionChanged","doConversion","setCompositionString"],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.system.SecurityDomain
joo.classLoader.prepare("package flash.system",
"public class SecurityDomain",1,function($$private){;return[
"public static function get currentDomain",function(){
throw new Error('not implemented');
},
];},["currentDomain"],["Error"], "0.8.0", "0.9.6"
);
// class flash.media.SoundChannel
joo.classLoader.prepare("package flash.media",
{Event:{name:"soundComplete",type:"flash.events.Event"}},
"public final class SoundChannel extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get leftPeak",function(){
throw new Error('not implemented');
},
"public function get position",function(){
throw new Error('not implemented');
},
"public function get rightPeak",function(){
throw new Error('not implemented');
},
"public function get soundTransform",function(){
throw new Error('not implemented');
},
"public function set soundTransform",function(value){
throw new Error('not implemented');
},
"public function stop",function(){
throw new Error('not implemented');
},
];},[],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.media.Camera
joo.classLoader.prepare("package flash.media",
{Event:{name:"activity",type:"flash.events.ActivityEvent"}},
{Event:{name:"status",type:"flash.events.StatusEvent"}},
"public final class Camera extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get activityLevel",function(){
throw new Error('not implemented');
},
"public function get bandwidth",function(){
throw new Error('not implemented');
},
"public function get currentFPS",function(){
throw new Error('not implemented');
},
"public function get fps",function(){
throw new Error('not implemented');
},
"public function get height",function(){
throw new Error('not implemented');
},
"public function get index",function(){
throw new Error('not implemented');
},
"public static function get isSupported",function(){
return false;
},
"public function get keyFrameInterval",function(){
throw new Error('not implemented');
},
"public function get loopback",function(){
throw new Error('not implemented');
},
"public function get motionLevel",function(){
throw new Error('not implemented');
},
"public function get motionTimeout",function(){
throw new Error('not implemented');
},
"public function get muted",function(){
throw new Error('not implemented');
},
"public function get name",function(){
throw new Error('not implemented');
},
"public static function get names",function(){
throw new Error('not implemented');
},
"public function get quality",function(){
throw new Error('not implemented');
},
"public function get width",function(){
throw new Error('not implemented');
},
"public static function getCamera",function(name){if(arguments.length<1){name=null;}
throw new Error('not implemented');
},
"public function setKeyFrameInterval",function(keyFrameInterval){
throw new Error('not implemented');
},
"public function setLoopback",function(compress){if(arguments.length<1){compress=false;}
throw new Error('not implemented');
},
"public function setMode",function(width,height,fps,favorArea){if(arguments.length<4){favorArea=true;}
throw new Error('not implemented');
},
"public function setMotionLevel",function(motionLevel,timeout){if(arguments.length<2){timeout=2000;}
throw new Error('not implemented');
},
"public function setQuality",function(bandwidth,quality){
throw new Error('not implemented');
},
];},["isSupported","names","getCamera"],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.media.SoundTransform
joo.classLoader.prepare("package flash.media",
"public final class SoundTransform",1,function($$private){;return[
"public function get leftToLeft",function(){
throw new Error('not implemented');
},
"public function set leftToLeft",function(value){
throw new Error('not implemented');
},
"public function get leftToRight",function(){
throw new Error('not implemented');
},
"public function set leftToRight",function(value){
throw new Error('not implemented');
},
"public function get pan",function(){
return this._pan$1;
},
"public function set pan",function(value){
this._pan$1=value;
},
"public function get rightToLeft",function(){
throw new Error('not implemented');
},
"public function set rightToLeft",function(value){
throw new Error('not implemented');
},
"public function get rightToRight",function(){
throw new Error('not implemented');
},
"public function set rightToRight",function(value){
throw new Error('not implemented');
},
"public function get volume",function(){
return this._volume$1;
},
"public function set volume",function(value){
this._volume$1=value;
},
"public function SoundTransform",function(vol,panning){if(arguments.length<2){if(arguments.length<1){vol=1;}panning=0;}
this.volume=vol;
this.pan=panning;
},
"private var",{_volume:NaN},
"private var",{_pan:NaN},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.media.Sound
joo.classLoader.prepare("package flash.media",
{Event:{name:"complete",type:"flash.events.Event"}},
{Event:{name:"id3",type:"flash.events.Event"}},
{Event:{name:"ioError",type:"flash.events.IOErrorEvent"}},
{Event:{name:"open",type:"flash.events.Event"}},
{Event:{name:"progress",type:"flash.events.ProgressEvent"}},
{Event:{name:"sampleData",type:"flash.events.SampleDataEvent"}},
"public class Sound extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get bytesLoaded",function(){
throw new Error('not implemented');
},
"public function get bytesTotal",function(){
throw new Error('not implemented');
},
"public function get id3",function(){
return new flash.media.ID3Info();
},
"public function get isBuffering",function(){
throw new Error('not implemented');
},
"public function get isURLInaccessible",function(){
throw new Error('not implemented');
},
"public function get length",function(){
throw new Error('not implemented');
},
"public function get url",function(){
throw new Error('not implemented');
},
"public function Sound",function(stream,context){flash.events.EventDispatcher.call(this);if(arguments.length<2){if(arguments.length<1){stream=null;}context=null;}
if(!this.audio){
this.audio=new js.Audio();
this.audio.addEventListener('error',function(e){
window.alert("error "+e);
},false);
this.load(stream,context);
}
},
"public function close",function(){
throw new Error('not implemented');
},
"public function extract",function(target,length,startPosition){if(arguments.length<3){startPosition=-1;}
throw new Error('not implemented');
},
"public function load",function(stream,context){if(arguments.length<2){context=null;}
if(stream&&stream.url){
var url=stream.url;
var mp3ExtensionPos=url.indexOf(".mp3");
if(mp3ExtensionPos!==-1&&this.audio.canPlayType("audio/mp3")){
var newExtension=this.audio.canPlayType("audio/ogg")?".ogg":".wav";
url=url.substring(0,mp3ExtensionPos)+newExtension+url.substring(mp3ExtensionPos+4);
}
this.audio.src=url;
this.audio.load();
}
},
"public function play",function(startTime,loops,sndTransform){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){startTime=0;}loops=0;}sndTransform=null;}
this.audio['play']();
return null;
},
"protected var",{audio:null},
];},[],["flash.events.EventDispatcher","Error","flash.media.ID3Info","js.Audio"], "0.8.0", "0.9.6"
);
// class flash.media.SoundCodec
joo.classLoader.prepare("package flash.media",
"public final class SoundCodec",1,function($$private){;return[
"public static const",{NELLYMOSER:"NellyMoser"},
"public static const",{SPEEX:"Speex"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.media.StageVideoAvailability
joo.classLoader.prepare("package flash.media",
"public final class StageVideoAvailability",1,function($$private){;return[
"public static const",{AVAILABLE:"available"},
"public static const",{UNAVAILABLE:"unavailable"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.media.ID3Info
joo.classLoader.prepare("package flash.media",
"public final dynamic class ID3Info",1,function($$private){;return[
"public var",{album:null},
"public var",{artist:null},
"public var",{comment:null},
"public var",{genre:null},
"public var",{songName:null},
"public var",{track:null},
"public var",{year:null},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.media.Microphone
joo.classLoader.prepare("package flash.media",
{Event:{name:"activity",type:"flash.events.ActivityEvent"}},
{Event:{name:"sampleData",type:"flash.events.SampleDataEvent"}},
{Event:{name:"status",type:"flash.events.StatusEvent"}},
"public final class Microphone extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get activityLevel",function(){
throw new Error('not implemented');
},
"public function get codec",function(){
throw new Error('not implemented');
},
"public function set codec",function(value){
throw new Error('not implemented');
},
"public function get enableVAD",function(){
throw new Error('not implemented');
},
"public function set enableVAD",function(value){
throw new Error('not implemented');
},
"public function get encodeQuality",function(){
throw new Error('not implemented');
},
"public function set encodeQuality",function(value){
throw new Error('not implemented');
},
"public function get framesPerPacket",function(){
throw new Error('not implemented');
},
"public function set framesPerPacket",function(value){
throw new Error('not implemented');
},
"public function get gain",function(){
throw new Error('not implemented');
},
"public function set gain",function(value){
throw new Error('not implemented');
},
"public function get index",function(){
throw new Error('not implemented');
},
"public static function get isSupported",function(){
throw new Error('not implemented');
},
"public function get muted",function(){
throw new Error('not implemented');
},
"public function get name",function(){
throw new Error('not implemented');
},
"public static function get names",function(){
throw new Error('not implemented');
},
"public function get noiseSuppressionLevel",function(){
throw new Error('not implemented');
},
"public function set noiseSuppressionLevel",function(value){
throw new Error('not implemented');
},
"public function get rate",function(){
throw new Error('not implemented');
},
"public function set rate",function(value){
throw new Error('not implemented');
},
"public function get silenceLevel",function(){
throw new Error('not implemented');
},
"public function get silenceTimeout",function(){
throw new Error('not implemented');
},
"public function get soundTransform",function(){
throw new Error('not implemented');
},
"public function set soundTransform",function(value){
throw new Error('not implemented');
},
"public function get useEchoSuppression",function(){
throw new Error('not implemented');
},
"public static function getMicrophone",function(index){if(arguments.length<1){index=-1;}
throw new Error('not implemented');
},
"public function setLoopBack",function(state){if(arguments.length<1){state=true;}
throw new Error('not implemented');
},
"public function setSilenceLevel",function(silenceLevel,timeout){if(arguments.length<2){timeout=-1;}
throw new Error('not implemented');
},
"public function setUseEchoSuppression",function(useEchoSuppression){
throw new Error('not implemented');
},
];},["isSupported","names","getMicrophone"],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.media.VideoStatus
joo.classLoader.prepare("package flash.media",
"public final class VideoStatus",1,function($$private){;return[
"public static const",{ACCELERATED:"accelerated"},
"public static const",{SOFTWARE:"software"},
"public static const",{UNAVAILABLE:"unavailable"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.media.Video
joo.classLoader.prepare("package flash.media",
"public class Video extends flash.display.DisplayObject",3,function($$private){;return[
"public function get deblocking",function(){
throw new Error('not implemented');
},
"public function set deblocking",function(value){
throw new Error('not implemented');
},
"public function get smoothing",function(){
throw new Error('not implemented');
},
"public function set smoothing",function(value){
throw new Error('not implemented');
},
"public function get videoHeight",function(){
throw new Error('not implemented');
},
"public function get videoWidth",function(){
throw new Error('not implemented');
},
"public function Video",function(width,height){flash.display.DisplayObject.call(this);if(arguments.length<2){if(arguments.length<1){width=320;}height=240;}
throw new Error('not implemented');
},
"public function attachCamera",function(camera){
throw new Error('not implemented');
},
"public function attachNetStream",function(netStream){
throw new Error('not implemented');
},
"public function clear",function(){
throw new Error('not implemented');
},
];},[],["flash.display.DisplayObject","Error"], "0.8.0", "0.9.6"
);
// class flash.media.SoundMixer
joo.classLoader.prepare("package flash.media",
"public final class SoundMixer",1,function($$private){;return[
"public static function get bufferTime",function(){
throw new Error('not implemented');
},
"public static function set bufferTime",function(value){
throw new Error('not implemented');
},
"public static function get soundTransform",function(){
throw new Error('not implemented');
},
"public static function set soundTransform",function(value){
throw new Error('not implemented');
},
"public static function areSoundsInaccessible",function(){
throw new Error('not implemented');
},
"public static function computeSpectrum",function(outputArray,FFTMode,stretchFactor){if(arguments.length<3){if(arguments.length<2){FFTMode=false;}stretchFactor=0;}
throw new Error('not implemented');
},
"public static function stopAll",function(){
throw new Error('not implemented');
},
];},["bufferTime","soundTransform","areSoundsInaccessible","computeSpectrum","stopAll"],["Error"], "0.8.0", "0.9.6"
);
// class flash.media.StageVideo
joo.classLoader.prepare("package flash.media",
{Event:{name:"renderState",type:"flash.events.StageVideoEvent"}},
"public class StageVideo extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get colorSpaces",function(){
throw new Error('not implemented');
},
"public function get depth",function(){
throw new Error('not implemented');
},
"public function set depth",function(value){
throw new Error('not implemented');
},
"public function get pan",function(){
throw new Error('not implemented');
},
"public function set pan",function(value){
throw new Error('not implemented');
},
"public function get videoHeight",function(){
throw new Error('not implemented');
},
"public function get videoWidth",function(){
throw new Error('not implemented');
},
"public function get viewPort",function(){
throw new Error('not implemented');
},
"public function set viewPort",function(value){
throw new Error('not implemented');
},
"public function get zoom",function(){
throw new Error('not implemented');
},
"public function set zoom",function(value){
throw new Error('not implemented');
},
"public function attachNetStream",function(netStream){
throw new Error('not implemented');
},
];},[],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.media.SoundLoaderContext
joo.classLoader.prepare("package flash.media",
"public class SoundLoaderContext",1,function($$private){;return[
"public var",{bufferTime:1000},
"public var",{checkPolicyFile:false},
"public function SoundLoaderContext",function(bufferTime,checkPolicyFile){if(arguments.length<2){if(arguments.length<1){bufferTime=1000;}checkPolicyFile=false;}
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.accessibility.ISearchableText
joo.classLoader.prepare("package flash.accessibility",
"public interface ISearchableText",1,function($$private){;return[,
];},[],[], "0.8.0", "0.9.6"
);
// class flash.accessibility.Accessibility
joo.classLoader.prepare("package flash.accessibility",
"public final class Accessibility",1,function($$private){;return[
"public static function get active",function(){
return false;
},
"public static function sendEvent",function(source,childID,eventType,nonHTML){if(arguments.length<4){nonHTML=false;}
throw new flash.errors.IllegalOperationError();
},
"public static function updateProperties",function(){
throw new flash.errors.IllegalOperationError();
},
];},["active","sendEvent","updateProperties"],["flash.errors.IllegalOperationError"], "0.8.0", "0.9.6"
);
// class flash.accessibility.AccessibilityProperties
joo.classLoader.prepare("package flash.accessibility",
"public class AccessibilityProperties",1,function($$private){;return[
"public var",{description:null},
"public var",{forceSimple:false},
"public var",{name:null},
"public var",{noAutoLabeling:false},
"public var",{shortcut:null},
"public var",{silent:false},
"public function AccessibilityProperties",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.accessibility.ISimpleTextSelection
joo.classLoader.prepare("package flash.accessibility",
"public interface ISimpleTextSelection",1,function($$private){;return[,,
];},[],[], "0.8.0", "0.9.6"
);
// class flash.accessibility.AccessibilityImplementation
joo.classLoader.prepare("package flash.accessibility",
"public class AccessibilityImplementation",1,function($$private){;return[
"public var",{errno:0},
"public var",{stub:false},
"public function AccessibilityImplementation",function(){
throw new Error('not implemented');
},
"public function accDoDefaultAction",function(childID){
throw new Error('not implemented');
},
"public function accLocation",function(childID){
throw new Error('not implemented');
},
"public function accSelect",function(operation,childID){
throw new Error('not implemented');
},
"public function get_accDefaultAction",function(childID){
throw new Error('not implemented');
},
"public function get_accFocus",function(){
throw new Error('not implemented');
},
"public function get_accName",function(childID){
throw new Error('not implemented');
},
"public function get_accRole",function(childID){
throw new Error('not implemented');
},
"public function get_accSelection",function(){
throw new Error('not implemented');
},
"public function get_accState",function(childID){
throw new Error('not implemented');
},
"public function get_accValue",function(childID){
throw new Error('not implemented');
},
"public function getChildIDArray",function(){
throw new Error('not implemented');
},
"public function isLabeledBy",function(labelBounds){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.desktop.Clipboard
joo.classLoader.prepare("package flash.desktop",
"public class Clipboard",1,function($$private){;return[
"public function get formats",function(){
throw new Error('not implemented');
},
"public static function get generalClipboard",function(){
throw new Error('not implemented');
},
"public function Clipboard",function(){
throw new Error('not implemented');
},
"public function clear",function(){
throw new Error('not implemented');
},
"public function clearData",function(format){
throw new Error('not implemented');
},
"public function getData",function(format,transferMode){if(arguments.length<2){transferMode="originalPreferred";}
throw new Error('not implemented');
},
"public function hasFormat",function(format){
throw new Error('not implemented');
},
"public function setData",function(format,data,serializable){if(arguments.length<3){serializable=true;}
throw new Error('not implemented');
},
"public function setDataHandler",function(format,handler,serializable){if(arguments.length<3){serializable=true;}
throw new Error('not implemented');
},
];},["generalClipboard"],["Error"], "0.8.0", "0.9.6"
);
// class flash.desktop.ClipboardTransferMode
joo.classLoader.prepare("package flash.desktop",
"public class ClipboardTransferMode",1,function($$private){;return[
"public static const",{CLONE_ONLY:"cloneOnly"},
"public static const",{CLONE_PREFERRED:"clonePreferred"},
"public static const",{ORIGINAL_ONLY:"originalOnly"},
"public static const",{ORIGINAL_PREFERRED:"originalPreferred"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.desktop.ClipboardFormats
joo.classLoader.prepare("package flash.desktop",
"public class ClipboardFormats",1,function($$private){;return[
"public static const",{HTML_FORMAT:"air:html"},
"public static const",{RICH_TEXT_FORMAT:"air:rtf"},
"public static const",{TEXT_FORMAT:"air:text"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.errors.EOFError
joo.classLoader.prepare("package flash.errors",
"public dynamic class EOFError extends flash.errors.IOError",3,function($$private){;return[
"public function EOFError",function(message){if(arguments.length<1){message="";}
flash.errors.IOError.call(this,message);
},
];},[],["flash.errors.IOError"], "0.8.0", "0.9.6"
);
// class flash.errors.IllegalOperationError
joo.classLoader.prepare("package flash.errors",
"public dynamic class IllegalOperationError extends Error",2,function($$private){;return[
"public function IllegalOperationError",function(message){if(arguments.length<1){message="";}
joo.Error.call(this,message);
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.errors.MemoryError
joo.classLoader.prepare("package flash.errors",
"public dynamic class MemoryError extends Error",2,function($$private){;return[
"public function MemoryError",function(message){if(arguments.length<1){message="";}
joo.Error.call(this,message);
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.errors.IOError
joo.classLoader.prepare("package flash.errors",
"public dynamic class IOError extends Error",2,function($$private){;return[
"public function IOError",function(message){if(arguments.length<1){message="";}
joo.Error.call(this,message);
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.errors.StackOverflowError
joo.classLoader.prepare("package flash.errors",
"public dynamic class StackOverflowError extends Error",2,function($$private){;return[
"public function StackOverflowError",function(message){if(arguments.length<1){message="";}
joo.Error.call(this,message);
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.errors.ScriptTimeoutError
joo.classLoader.prepare("package flash.errors",
"public dynamic class ScriptTimeoutError extends Error",2,function($$private){;return[
"public function ScriptTimeoutError",function(message){if(arguments.length<1){message="";}
joo.Error.call(this,message);
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.errors.InvalidSWFError
joo.classLoader.prepare("package flash.errors",
"public dynamic class InvalidSWFError extends Error",2,function($$private){;return[
"public function InvalidSWFError",function(message,id){if(arguments.length<2){if(arguments.length<1){message="";}id=0;}
joo.Error.call(this,message);
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.text.TextRenderer
joo.classLoader.prepare("package flash.text",
"public final class TextRenderer",1,function($$private){;return[
"public static function get displayMode",function(){
return $$private._displayMode;
},
"public static function set displayMode",function(value){
$$private._displayMode=value;
},
"public static function get maxLevel",function(){
return $$private._maxLevel;
},
"public static function set maxLevel",function(value){
$$private._maxLevel=value;
},
"public static function setAdvancedAntiAliasingTable",function(fontName,fontStyle,colorType,advancedAntiAliasingTable){
throw new Error('not implemented');
},
"private static var",{_displayMode:null},
"private static var",{_maxLevel:0},
];},["displayMode","maxLevel","setAdvancedAntiAliasingTable"],["Error"], "0.8.0", "0.9.6"
);
// class flash.text.TextField
joo.classLoader.prepare("package flash.text",
{Event:{name:"change",type:"flash.events.Event"}},
{Event:{name:"link",type:"flash.events.TextEvent"}},
{Event:{name:"scroll",type:"flash.events.Event"}},
{Event:{name:"textInput",type:"flash.events.TextEvent"}},
"public class TextField extends flash.display.InteractiveObject",4,function($$private){;return[function(){joo.classLoader.init(flash.text.TextFormatAlign,flash.text.TextInteractionMode);},
"public function get alwaysShowSelection",function(){
return this._alwaysShowSelection$4;
},
"public function set alwaysShowSelection",function(value){
this._alwaysShowSelection$4=value;
},
"public function get antiAliasType",function(){
return this._antiAliasType$4;
},
"public function set antiAliasType",function(value){
this._antiAliasType$4=value;
},
"public function get autoSize",function(){
return this._autoSize$4;
},
"public function set autoSize",function(value){
this._autoSize$4=value;
},
"public function get background",function(){
return this._background$4;
},
"public function set background",function(value){
this._background$4=value;
},
"public function get backgroundColor",function(){
return this._backgroundColor$4;
},
"public function set backgroundColor",function(value){
this._backgroundColor$4=value;
$$private.updateElementProperty(this.getElement(),"style.backgroundColor",flash.display.Graphics.toRGBA(value));
},
"public function get border",function(){
return this._border$4;
},
"public function set border",function(value){
this._border$4=value;
$$private.updateElementProperty(this.getElement(),"style.borderWidth",value?"1px":"0");
},
"public function get borderColor",function(){
return this._borderColor$4;
},
"public function set borderColor",function(value){
this._borderColor$4=value;
$$private.updateElementProperty(this.getElement(),"style.borderColor",flash.display.Graphics.toRGBA(value));
},
"public function get bottomScrollV",function(){
return this._bottomScrollV$4;
},
"public function get caretIndex",function(){
return this._caretIndex$4;
},
"public function get condenseWhite",function(){
return this._condenseWhite$4;
},
"public function set condenseWhite",function(value){
this._condenseWhite$4=value;
},
"public function get defaultTextFormat",function(){
return this._defaultTextFormat$4;
},
"public function set defaultTextFormat",function(value){
for(var property in value){
if(value.hasOwnProperty(property)){
var val=value[property];
if(typeof val!=="function"&&val!==null&&val!==""){
this._defaultTextFormat$4[property]=value[property];
}
}
}
if(this.hasElement()){
this.syncTextFormat$4(this.getElement());
}
},
"public function get displayAsPassword",function(){
return this._displayAsPassword$4;
},
"public function set displayAsPassword",function(value){
this._displayAsPassword$4=value;
},
"public function get embedFonts",function(){
return this._embedFonts$4;
},
"public function set embedFonts",function(value){
this._embedFonts$4=value;
},
"public function get gridFitType",function(){
return this._gridFitType$4;
},
"public function set gridFitType",function(value){
this._gridFitType$4=value;
},
"public function get htmlText",function(){
return this._htmlText$4;
},
"public function set htmlText",function(value){
this._htmlText$4=value;
$$private.updateElementProperty(this.getElement(),"innerHTML",value);
},
"public function get length",function(){
return this._length$4;
},
"public function get maxChars",function(){
return this._maxChars$4;
},
"public function set maxChars",function(value){
this._maxChars$4=value;
},
"public function get maxScrollH",function(){
return this._maxScrollH$4;
},
"public function get maxScrollV",function(){
return this._maxScrollV$4;
},
"public function get mouseWheelEnabled",function(){
return this._mouseWheelEnabled$4;
},
"public function set mouseWheelEnabled",function(value){
this._mouseWheelEnabled$4=value;
},
"public function get multiline",function(){
return this._multiline$4;
},
"public function set multiline",function(value){
this._multiline$4=value;
},
"public function get numLines",function(){
return this._lines$4.length;
},
"public function get restrict",function(){
return this._restrict$4;
},
"public function set restrict",function(value){
this._restrict$4=value;
},
"public function get scrollH",function(){
return this._scrollH$4;
},
"public function set scrollH",function(value){
this._scrollH$4=value;
},
"public function get scrollV",function(){
return this._scrollV$4;
},
"public function set scrollV",function(value){
this._scrollV$4=value;
},
"public function get selectable",function(){
return this._selectable$4;
},
"public function set selectable",function(value){
this._selectable$4=value;
},
"public function get selectionBeginIndex",function(){
return this._selectionBeginIndex$4;
},
"public function get selectionEndIndex",function(){
return this._selectionEndIndex$4;
},
"public function get sharpness",function(){
return this._sharpness$4;
},
"public function set sharpness",function(value){
this._sharpness$4=value;
},
"public function get styleSheet",function(){
return this._styleSheet$4;
},
"public function set styleSheet",function(value){
this._styleSheet$4=value;
},
"public function get text",function(){
return this._lines$4.join('\n');
},
"public function set text",function(value){
this._lines$4=value.split('\n');
$$private.updateElementProperty(this.getElement(),"innerHTML",this._lines$4.join('<br />'));
},
"public function get textColor",function(){
return $$uint(this._textFormat$4.color!==null?this._textFormat$4.color:this._defaultTextFormat$4.color);
},
"public function set textColor",function(value){
this._defaultTextFormat$4.color=this._textFormat$4.color=value;
if(this.hasElement()){
$$private.updateElementProperty(this.getElement(),"style.color",flash.display.Graphics.toRGBA(value));
}
},
"public function get textHeight",function(){
return this._textHeight$4;
},
"public function get textInteractionMode",function(){
return flash.text.TextInteractionMode.NORMAL;
},
"public function get textWidth",function(){
return this._textWidth$4;
},
"public function get thickness",function(){
return this._thickness$4;
},
"public function set thickness",function(value){
this._thickness$4=value;
},
"public function get type",function(){
return this._type$4;
},
"public function set type",function(value){
this._type$4=value;
},
"public function get useRichTextClipboard",function(){
return this._useRichTextClipboard$4;
},
"public function set useRichTextClipboard",function(value){
this._useRichTextClipboard$4=value;
},
"public function get wordWrap",function(){
return this._wordWrap$4;
},
"public function set wordWrap",function(value){
this._wordWrap$4=value;
},
"public function TextField",function(){
flash.display.InteractiveObject.call(this);this._defaultTextFormat$4=this._defaultTextFormat$4();this._textFormat$4=this._textFormat$4();
this._lines$4=[""];
},
"public function appendText",function(newText){
this.text=this.text+newText;
},
"public function getCharBoundaries",function(charIndex){
throw new Error('not implemented');
},
"public function getCharIndexAtPoint",function(x,y){
throw new Error('not implemented');
},
"public function getFirstCharInParagraph",function(charIndex){
throw new Error('not implemented');
},
"public function getImageReference",function(id){
throw new Error('not implemented');
},
"public function getLineIndexAtPoint",function(x,y){
throw new Error('not implemented');
},
"public function getLineIndexOfChar",function(charIndex){
throw new Error('not implemented');
},
"public function getLineLength",function(lineIndex){
return this._lines$4[lineIndex].length;
},
"public function getLineMetrics",function(lineIndex){
if(!$$private.lineMetricsContext){
$$private.lineMetricsContext=((window.document.createElement("CANVAS")).getContext("2d"));
}
$$private.lineMetricsContext.font=this.asWebFont$4();
var width=$$private.lineMetricsContext.measureText(this._lines$4[lineIndex]).width;
return new flash.text.TextLineMetrics(0,width,this.getSize$4(),0,0,0);
},
"private function getSize",function(){
return $$int(this._textFormat$4.size!==null?this._textFormat$4.size:this._defaultTextFormat$4.size);
},
"public function getLineOffset",function(lineIndex){
throw new Error('not implemented');
},
"public function getLineText",function(lineIndex){
throw new Error('not implemented');
},
"public function getParagraphLength",function(charIndex){
throw new Error('not implemented');
},
"public function getTextFormat",function(beginIndex,endIndex){if(arguments.length<2){if(arguments.length<1){beginIndex=-1;}endIndex=-1;}
throw new Error('not implemented');
},
"public static function isFontCompatible",function(fontName,fontStyle){
throw new Error('not implemented');
},
"public function replaceSelectedText",function(value){
throw new Error('not implemented');
},
"public function replaceText",function(beginIndex,endIndex,newText){
throw new Error('not implemented');
},
"public function setSelection",function(beginIndex,endIndex){
this._selectionBeginIndex$4=beginIndex;
this._selectionEndIndex$4=endIndex;
},
"public function setTextFormat",function(format,beginIndex,endIndex){if(arguments.length<3){if(arguments.length<2){beginIndex=-1;}endIndex=-1;}
this._textFormat$4=format;
if(this.hasElement()){
this.syncTextFormat$4(this.getElement());
}
},
"private function asWebFont",function(){
switch(this._textFormat$4.font!==null?this._textFormat$4.font:this._defaultTextFormat$4.font){
case"Times New Roman":
return"Times New Roman,serif";
case"system":
return"console,monospace";
case"Verdana":
return"Verdana";
}
return"Helvetica,Arial,sans-serif";
},
"override public function get width",function(){
var element=this.ensureAddedToDOM$4();
return this.vertical?
element.offsetHeight:
element.offsetWidth;
},
"override public function get height",function(){
var element=this.ensureAddedToDOM$4();
return this.vertical?
element.offsetWidth:
element.offsetHeight;
},
"private function ensureAddedToDOM",function(){
var element=this.getElement();
if(!this.parent){
element.style.visibility="hidden";
window.document.body.appendChild(element);
}
return element;
},
"override protected function setParent",function(parent){
this.getElement().style.visibility="visible";
this.setParent$4(parent);
},
"override protected function createElement",function(){
var elem=this.createElement$4();
elem.style.padding="2px";
elem.style.width="auto";
this.syncTextFormat$4(elem);
return elem;
},
"private function syncTextFormat",function(element){
$$private.updateElementProperty(element,"style.fontFamily",this.asWebFont$4());
$$private.updateElementProperty(element,"style.fontSize",this.getSize$4()+"px");
$$private.updateElementProperty(element,"style.color",flash.display.Graphics.toRGBA(this.textColor));
var bold=this._textFormat$4.bold!==null?this._textFormat$4.bold:this._defaultTextFormat$4.bold;
$$private.updateElementProperty(element,"style.fontWeight",bold?"bold":"normal");
var italic=this._textFormat$4.italic!==null?this._textFormat$4.italic:this._defaultTextFormat$4.italic;
$$private.updateElementProperty(element,"style.fontStyle",italic?"italic":"normal");
var align=this._textFormat$4.align!==null?this._textFormat$4.align:this._defaultTextFormat$4.align;
$$private.updateElementProperty(element,"style.textAlign",align);
},
"override protected function getElementName",function(){
return"span";
},
"private static function updateElementProperty",function(element,propertyPath,value){
var current=element;
var propertyPathArcs=propertyPath.split(".");
var lastIndex=propertyPathArcs.length-1;
for(var i=0;i<lastIndex;++i){
current=current[propertyPathArcs[i]];
}
current[propertyPathArcs[lastIndex]]=value;
},
"private var",{_alwaysShowSelection:false},
"private var",{_antiAliasType:null},
"private var",{_autoSize:null},
"private var",{_background:false},
"private var",{_backgroundColor:0},
"private var",{_border:false},
"private var",{_borderColor:0},
"private var",{_bottomScrollV:0},
"private var",{_caretIndex:0},
"private var",{_condenseWhite:false},
"private var",{_displayAsPassword:false},
"private var",{_embedFonts:false},
"private var",{_gridFitType:null},
"private var",{_htmlText:null},
"private var",{_length:0},
"private var",{_maxChars:0},
"private var",{_maxScrollH:0},
"private var",{_maxScrollV:0},
"private var",{_mouseWheelEnabled:false},
"private var",{_multiline:false},
"private var",{_restrict:null},
"private var",{_scrollH:0},
"private var",{_scrollV:0},
"private var",{_selectable:false},
"private var",{_selectionBeginIndex:0},
"private var",{_selectionEndIndex:0},
"private var",{_sharpness:NaN},
"private var",{_defaultTextFormat:function(){return(new flash.text.TextFormat("Times New Roman",12,0,false,false,false,"","",flash.text.TextFormatAlign.LEFT,0,0,0,0));}},
"private var",{_textFormat:function(){return(new flash.text.TextFormat());}},
"private var",{_lines:null},
"private var",{_styleSheet:null},
"private var",{_textHeight:NaN},
"private var",{_textWidth:NaN},
"private var",{_thickness:NaN},
"private var",{_type:null},
"private var",{_useRichTextClipboard:false},
"private var",{_wordWrap:false},
"private static var",{lineMetricsContext:null},
];},["isFontCompatible"],["flash.display.InteractiveObject","flash.display.Graphics","uint","flash.text.TextInteractionMode","Error","js.CanvasRenderingContext2D","js.HTMLCanvasElement","flash.text.TextLineMetrics","int","flash.text.TextFormat","flash.text.TextFormatAlign"], "0.8.0", "0.9.6"
);
// class flash.text.TextInteractionMode
joo.classLoader.prepare("package flash.text",
"public final class TextInteractionMode",1,function($$private){;return[
"public static const",{NORMAL:"normal"},
"public static const",{SELECTION:"selection"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.AntiAliasType
joo.classLoader.prepare("package flash.text",
"public final class AntiAliasType",1,function($$private){;return[
"public static const",{ADVANCED:"advanced"},
"public static const",{NORMAL:"normal"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.TextFieldType
joo.classLoader.prepare("package flash.text",
"public final class TextFieldType",1,function($$private){;return[
"public static const",{DYNAMIC:"dynamic"},
"public static const",{INPUT:"input"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.FontType
joo.classLoader.prepare("package flash.text",
"public final class FontType",1,function($$private){;return[
"public static const",{DEVICE:"device"},
"public static const",{EMBEDDED:"embedded"},
"public static const",{EMBEDDED_CFF:"embeddedCFF"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.Font
joo.classLoader.prepare("package flash.text",
"public class Font",1,function($$private){;return[
"public function get fontName",function(){
throw new Error('not implemented');
},
"public function get fontStyle",function(){
throw new Error('not implemented');
},
"public function get fontType",function(){
throw new Error('not implemented');
},
"public static function enumerateFonts",function(enumerateDeviceFonts){if(arguments.length<1){enumerateDeviceFonts=false;}
throw new Error('not implemented');
},
"public function hasGlyphs",function(str){
throw new Error('not implemented');
},
"public static function registerFont",function(font){
throw new Error('not implemented');
},
];},["enumerateFonts","registerFont"],["Error"], "0.8.0", "0.9.6"
);
// class flash.text.engine.SpaceJustifier
joo.classLoader.prepare("package flash.text.engine",
"public final class SpaceJustifier extends flash.text.engine.TextJustifier",2,function($$private){;return[
"public function get letterSpacing",function(){
throw new Error('not implemented');
},
"public function set letterSpacing",function(value){
throw new Error('not implemented');
},
"public function get maximumSpacing",function(){
throw new Error('not implemented');
},
"public function set maximumSpacing",function(value){
throw new Error('not implemented');
},
"public function get minimumSpacing",function(){
throw new Error('not implemented');
},
"public function set minimumSpacing",function(value){
throw new Error('not implemented');
},
"public function get optimumSpacing",function(){
throw new Error('not implemented');
},
"public function set optimumSpacing",function(value){
throw new Error('not implemented');
},
"public function SpaceJustifier",function(locale,lineJustification,letterSpacing){flash.text.engine.TextJustifier.call(this);if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){locale="en";}lineJustification="unjustified";}letterSpacing=false;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
];},[],["flash.text.engine.TextJustifier","Error"], "0.8.0", "0.9.6"
);
// class flash.text.engine.ElementFormat
joo.classLoader.prepare("package flash.text.engine",
"public final class ElementFormat",1,function($$private){;return[
"public function get alignmentBaseline",function(){
throw new Error('not implemented');
},
"public function set alignmentBaseline",function(value){
throw new Error('not implemented');
},
"public function get alpha",function(){
throw new Error('not implemented');
},
"public function set alpha",function(value){
throw new Error('not implemented');
},
"public function get baselineShift",function(){
throw new Error('not implemented');
},
"public function set baselineShift",function(value){
throw new Error('not implemented');
},
"public function get breakOpportunity",function(){
throw new Error('not implemented');
},
"public function set breakOpportunity",function(value){
throw new Error('not implemented');
},
"public function get color",function(){
throw new Error('not implemented');
},
"public function set color",function(value){
throw new Error('not implemented');
},
"public function get digitCase",function(){
throw new Error('not implemented');
},
"public function set digitCase",function(value){
throw new Error('not implemented');
},
"public function get digitWidth",function(){
throw new Error('not implemented');
},
"public function set digitWidth",function(value){
throw new Error('not implemented');
},
"public function get dominantBaseline",function(){
throw new Error('not implemented');
},
"public function set dominantBaseline",function(value){
throw new Error('not implemented');
},
"public function get fontDescription",function(){
throw new Error('not implemented');
},
"public function set fontDescription",function(value){
throw new Error('not implemented');
},
"public function get fontSize",function(){
throw new Error('not implemented');
},
"public function set fontSize",function(value){
throw new Error('not implemented');
},
"public function get kerning",function(){
throw new Error('not implemented');
},
"public function set kerning",function(value){
throw new Error('not implemented');
},
"public function get ligatureLevel",function(){
throw new Error('not implemented');
},
"public function set ligatureLevel",function(value){
throw new Error('not implemented');
},
"public function get locale",function(){
throw new Error('not implemented');
},
"public function set locale",function(value){
throw new Error('not implemented');
},
"public function get locked",function(){
throw new Error('not implemented');
},
"public function set locked",function(value){
throw new Error('not implemented');
},
"public function get textRotation",function(){
throw new Error('not implemented');
},
"public function set textRotation",function(value){
throw new Error('not implemented');
},
"public function get trackingLeft",function(){
throw new Error('not implemented');
},
"public function set trackingLeft",function(value){
throw new Error('not implemented');
},
"public function get trackingRight",function(){
throw new Error('not implemented');
},
"public function set trackingRight",function(value){
throw new Error('not implemented');
},
"public function get typographicCase",function(){
throw new Error('not implemented');
},
"public function set typographicCase",function(value){
throw new Error('not implemented');
},
"public function ElementFormat",function(fontDescription,fontSize,color,alpha,textRotation,dominantBaseline,alignmentBaseline,baselineShift,kerning,trackingRight,trackingLeft,locale,breakOpportunity,digitCase,digitWidth,ligatureLevel,typographicCase){if(arguments.length<17){if(arguments.length<16){if(arguments.length<15){if(arguments.length<14){if(arguments.length<13){if(arguments.length<12){if(arguments.length<11){if(arguments.length<10){if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){fontDescription=null;}fontSize=12.0;}color=0x000000;}alpha=1.0;}textRotation="auto";}dominantBaseline="roman";}alignmentBaseline="useDominantBaseline";}baselineShift=0.0;}kerning="on";}trackingRight=0.0;}trackingLeft=0.0;}locale="en";}breakOpportunity="auto";}digitCase="default";}digitWidth="default";}ligatureLevel="common";}typographicCase="default";}
throw new Error('not implemented');
},
"public function clone",function(){
throw new Error('not implemented');
},
"public function getFontMetrics",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.text.engine.FontMetrics
joo.classLoader.prepare("package flash.text.engine",
"public final class FontMetrics",1,function($$private){;return[
"public var",{emBox:null},
"public var",{strikethroughOffset:NaN},
"public var",{strikethroughThickness:NaN},
"public var",{subscriptOffset:NaN},
"public var",{subscriptScale:NaN},
"public var",{superscriptOffset:NaN},
"public var",{superscriptScale:NaN},
"public var",{underlineOffset:NaN},
"public var",{underlineThickness:NaN},
"public function FontMetrics",function(emBox,strikethroughOffset,strikethroughThickness,underlineOffset,underlineThickness,subscriptOffset,subscriptScale,superscriptOffset,superscriptScale){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.text.engine.JustificationStyle
joo.classLoader.prepare("package flash.text.engine",
"public final class JustificationStyle",1,function($$private){;return[
"public static const",{PRIORITIZE_LEAST_ADJUSTMENT:"prioritizeLeastAdjustment"},
"public static const",{PUSH_IN_KINSOKU:"pushInKinsoku"},
"public static const",{PUSH_OUT_ONLY:"pushOutOnly"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.FontPosture
joo.classLoader.prepare("package flash.text.engine",
"public final class FontPosture",1,function($$private){;return[
"public static const",{ITALIC:"italic"},
"public static const",{NORMAL:"normal"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.DigitCase
joo.classLoader.prepare("package flash.text.engine",
"public final class DigitCase",1,function($$private){;return[
"public static const",{DEFAULT:"default"},
"public static const",{LINING:"lining"},
"public static const",{OLD_STYLE:"oldStyle"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.TextBaseline
joo.classLoader.prepare("package flash.text.engine",
"public final class TextBaseline",1,function($$private){;return[
"public static const",{ASCENT:"ascent"},
"public static const",{DESCENT:"descent"},
"public static const",{IDEOGRAPHIC_BOTTOM:"ideographicBottom"},
"public static const",{IDEOGRAPHIC_CENTER:"ideographicCenter"},
"public static const",{IDEOGRAPHIC_TOP:"ideographicTop"},
"public static const",{ROMAN:"roman"},
"public static const",{USE_DOMINANT_BASELINE:"useDominantBaseline"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.DigitWidth
joo.classLoader.prepare("package flash.text.engine",
"public final class DigitWidth",1,function($$private){;return[
"public static const",{DEFAULT:"default"},
"public static const",{PROPORTIONAL:"proportional"},
"public static const",{TABULAR:"tabular"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.CFFHinting
joo.classLoader.prepare("package flash.text.engine",
"public final class CFFHinting",1,function($$private){;return[
"public static const",{HORIZONTAL_STEM:"horizontalStem"},
"public static const",{NONE:"none"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.BreakOpportunity
joo.classLoader.prepare("package flash.text.engine",
"public final class BreakOpportunity",1,function($$private){;return[
"public static const",{ALL:"all"},
"public static const",{ANY:"any"},
"public static const",{AUTO:"auto"},
"public static const",{NONE:"none"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.FontLookup
joo.classLoader.prepare("package flash.text.engine",
"public final class FontLookup",1,function($$private){;return[
"public static const",{DEVICE:"device"},
"public static const",{EMBEDDED_CFF:"embeddedCFF"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.LineJustification
joo.classLoader.prepare("package flash.text.engine",
"public final class LineJustification",1,function($$private){;return[
"public static const",{ALL_BUT_LAST:"allButLast"},
"public static const",{ALL_INCLUDING_LAST:"allIncludingLast"},
"public static const",{UNJUSTIFIED:"unjustified"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.TabAlignment
joo.classLoader.prepare("package flash.text.engine",
"public final class TabAlignment",1,function($$private){;return[
"public static const",{CENTER:"center"},
"public static const",{DECIMAL:"decimal"},
"public static const",{END:"end"},
"public static const",{START:"start"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.FontWeight
joo.classLoader.prepare("package flash.text.engine",
"public final class FontWeight",1,function($$private){;return[
"public static const",{BOLD:"bold"},
"public static const",{NORMAL:"normal"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.TextRotation
joo.classLoader.prepare("package flash.text.engine",
"public final class TextRotation",1,function($$private){;return[
"public static const",{AUTO:"auto"},
"public static const",{ROTATE_0:"rotate0"},
"public static const",{ROTATE_180:"rotate180"},
"public static const",{ROTATE_270:"rotate270"},
"public static const",{ROTATE_90:"rotate90"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.TextLineValidity
joo.classLoader.prepare("package flash.text.engine",
"public final class TextLineValidity",1,function($$private){;return[
"public static const",{INVALID:"invalid"},
"public static const",{POSSIBLY_INVALID:"possiblyInvalid"},
"public static const",{STATIC:"static"},
"public static const",{VALID:"valid"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.TextBlock
joo.classLoader.prepare("package flash.text.engine",
"public final class TextBlock",1,function($$private){;return[
"public function get applyNonLinearFontScaling",function(){
throw new Error('not implemented');
},
"public function set applyNonLinearFontScaling",function(value){
throw new Error('not implemented');
},
"public function get baselineFontDescription",function(){
throw new Error('not implemented');
},
"public function set baselineFontDescription",function(value){
throw new Error('not implemented');
},
"public function get baselineFontSize",function(){
throw new Error('not implemented');
},
"public function set baselineFontSize",function(value){
throw new Error('not implemented');
},
"public function get baselineZero",function(){
throw new Error('not implemented');
},
"public function set baselineZero",function(value){
throw new Error('not implemented');
},
"public function get bidiLevel",function(){
throw new Error('not implemented');
},
"public function set bidiLevel",function(value){
throw new Error('not implemented');
},
"public function get content",function(){
throw new Error('not implemented');
},
"public function set content",function(value){
throw new Error('not implemented');
},
"public function get firstInvalidLine",function(){
throw new Error('not implemented');
},
"public function get firstLine",function(){
throw new Error('not implemented');
},
"public function get lastLine",function(){
throw new Error('not implemented');
},
"public function get lineRotation",function(){
throw new Error('not implemented');
},
"public function set lineRotation",function(value){
throw new Error('not implemented');
},
"public function get tabStops",function(){
throw new Error('not implemented');
},
"public function set tabStops",function(value){
throw new Error('not implemented');
},
"public function get textJustifier",function(){
throw new Error('not implemented');
},
"public function set textJustifier",function(value){
throw new Error('not implemented');
},
"public function get textLineCreationResult",function(){
throw new Error('not implemented');
},
"public var",{userData:undefined},
"public function TextBlock",function(content,tabStops,
textJustifier,lineRotation,
baselineZero,bidiLevel,
applyNonLinearFontScaling,
baselineFontDescription,
baselineFontSize){if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){content=null;}tabStops=null;}textJustifier=null;}lineRotation="rotate0";}baselineZero="roman";}bidiLevel=0;}applyNonLinearFontScaling=true;}baselineFontDescription=null;}baselineFontSize=12.0;}
throw new Error('not implemented');
},
"public function createTextLine",function(previousLine,width,lineOffset,fitSomething){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){previousLine=null;}width=1000000;}lineOffset=0.0;}fitSomething=false;}
throw new Error('not implemented');
},
"public function dump",function(){
throw new Error('not implemented');
},
"public function findNextAtomBoundary",function(afterCharIndex){
throw new Error('not implemented');
},
"public function findNextWordBoundary",function(afterCharIndex){
throw new Error('not implemented');
},
"public function findPreviousAtomBoundary",function(beforeCharIndex){
throw new Error('not implemented');
},
"public function findPreviousWordBoundary",function(beforeCharIndex){
throw new Error('not implemented');
},
"public function getTextLineAtCharIndex",function(charIndex){
throw new Error('not implemented');
},
"public function recreateTextLine",function(textLine,previousLine,width,lineOffset,fitSomething){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){previousLine=null;}width=1000000;}lineOffset=0.0;}fitSomething=false;}
throw new Error('not implemented');
},
"public function releaseLineCreationData",function(){
throw new Error('not implemented');
},
"public function releaseLines",function(firstLine,lastLine){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.text.engine.Kerning
joo.classLoader.prepare("package flash.text.engine",
"public final class Kerning",1,function($$private){;return[
"public static const",{AUTO:"auto"},
"public static const",{OFF:"off"},
"public static const",{ON:"on"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.LigatureLevel
joo.classLoader.prepare("package flash.text.engine",
"public final class LigatureLevel",1,function($$private){;return[
"public static const",{COMMON:"common"},
"public static const",{EXOTIC:"exotic"},
"public static const",{MINIMUM:"minimum"},
"public static const",{NONE:"none"},
"public static const",{UNCOMMON:"uncommon"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.TypographicCase
joo.classLoader.prepare("package flash.text.engine",
"public final class TypographicCase",1,function($$private){;return[
"public static const",{CAPS:"caps"},
"public static const",{CAPS_AND_SMALL_CAPS:"capsAndSmallCaps"},
"public static const",{DEFAULT:"default"},
"public static const",{LOWERCASE:"lowercase"},
"public static const",{SMALL_CAPS:"smallCaps"},
"public static const",{TITLE:"title"},
"public static const",{UPPERCASE:"uppercase"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.RenderingMode
joo.classLoader.prepare("package flash.text.engine",
"public final class RenderingMode",1,function($$private){;return[
"public static const",{CFF:"cff"},
"public static const",{NORMAL:"normal"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.ContentElement
joo.classLoader.prepare("package flash.text.engine",
"public class ContentElement",1,function($$private){;return[
"public function get elementFormat",function(){
throw new Error('not implemented');
},
"public function set elementFormat",function(value){
throw new Error('not implemented');
},
"public function get eventMirror",function(){
throw new Error('not implemented');
},
"public function set eventMirror",function(value){
throw new Error('not implemented');
},
"public function get groupElement",function(){
throw new Error('not implemented');
},
"public function get rawText",function(){
throw new Error('not implemented');
},
"public function get text",function(){
throw new Error('not implemented');
},
"public function get textBlock",function(){
throw new Error('not implemented');
},
"public function get textBlockBeginIndex",function(){
throw new Error('not implemented');
},
"public function get textRotation",function(){
throw new Error('not implemented');
},
"public function set textRotation",function(value){
throw new Error('not implemented');
},
"public var",{userData:undefined},
"public function ContentElement",function(elementFormat,eventMirror,textRotation){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){elementFormat=null;}eventMirror=null;}textRotation="rotate0";}
throw new Error('not implemented');
},
"public static const",{GRAPHIC_ELEMENT:0xFDEF},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.text.engine.EastAsianJustifier
joo.classLoader.prepare("package flash.text.engine",
"public final class EastAsianJustifier extends flash.text.engine.TextJustifier",2,function($$private){;return[
"public function get justificationStyle",function(){
throw new Error('not implemented');
},
"public function set justificationStyle",function(value){
throw new Error('not implemented');
},
"public function EastAsianJustifier",function(locale,lineJustification,justificationStyle){flash.text.engine.TextJustifier.call(this);if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){locale="ja";}lineJustification="allButLast";}justificationStyle="pushInKinsoku";}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
];},[],["flash.text.engine.TextJustifier","Error"], "0.8.0", "0.9.6"
);
// class flash.text.engine.GroupElement
joo.classLoader.prepare("package flash.text.engine",
"public final class GroupElement extends flash.text.engine.ContentElement",2,function($$private){;return[
"public function get elementCount",function(){
throw new Error('not implemented');
},
"public function GroupElement",function(elements,elementFormat,eventMirror,textRotation){flash.text.engine.ContentElement.call(this);if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){elements=null;}elementFormat=null;}eventMirror=null;}textRotation="rotate0";}
throw new Error('not implemented');
},
"public function getElementAt",function(index){
throw new Error('not implemented');
},
"public function getElementAtCharIndex",function(charIndex){
throw new Error('not implemented');
},
"public function getElementIndex",function(element){
throw new Error('not implemented');
},
"public function groupElements",function(beginIndex,endIndex){
throw new Error('not implemented');
},
"public function mergeTextElements",function(beginIndex,endIndex){
throw new Error('not implemented');
},
"public function replaceElements",function(beginIndex,endIndex,newElements){
throw new Error('not implemented');
},
"public function setElements",function(value){
throw new Error('not implemented');
},
"public function splitTextElement",function(elementIndex,splitIndex){
throw new Error('not implemented');
},
"public function ungroupElements",function(groupIndex){
throw new Error('not implemented');
},
];},[],["flash.text.engine.ContentElement","Error"], "0.8.0", "0.9.6"
);
// class flash.text.engine.GraphicElement
joo.classLoader.prepare("package flash.text.engine",
"public final class GraphicElement extends flash.text.engine.ContentElement",2,function($$private){;return[
"public function get elementHeight",function(){
throw new Error('not implemented');
},
"public function set elementHeight",function(value){
throw new Error('not implemented');
},
"public function get elementWidth",function(){
throw new Error('not implemented');
},
"public function set elementWidth",function(value){
throw new Error('not implemented');
},
"public function get graphic",function(){
throw new Error('not implemented');
},
"public function set graphic",function(value){
throw new Error('not implemented');
},
"public function GraphicElement",function(graphic,elementWidth,elementHeight,elementFormat,eventMirror,textRotation){flash.text.engine.ContentElement.call(this);if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){graphic=null;}elementWidth=15.0;}elementHeight=15.0;}elementFormat=null;}eventMirror=null;}textRotation="rotate0";}
throw new Error('not implemented');
},
];},[],["flash.text.engine.ContentElement","Error"], "0.8.0", "0.9.6"
);
// class flash.text.engine.TextElement
joo.classLoader.prepare("package flash.text.engine",
"public final class TextElement extends flash.text.engine.ContentElement",2,function($$private){;return[
"override public function get text",function(){
throw new Error('not implemented');
},
"public function set text",function(value){
throw new Error('not implemented');
},
"public function TextElement",function(text,elementFormat,eventMirror,textRotation){flash.text.engine.ContentElement.call(this);if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){text=null;}elementFormat=null;}eventMirror=null;}textRotation="rotate0";}
throw new Error('not implemented');
},
"public function replaceText",function(beginIndex,endIndex,newText){
throw new Error('not implemented');
},
];},[],["flash.text.engine.ContentElement","Error"], "0.8.0", "0.9.6"
);
// class flash.text.engine.TextLineCreationResult
joo.classLoader.prepare("package flash.text.engine",
"public final class TextLineCreationResult",1,function($$private){;return[
"public static const",{COMPLETE:"complete"},
"public static const",{EMERGENCY:"emergency"},
"public static const",{INSUFFICIENT_WIDTH:"insufficientWidth"},
"public static const",{SUCCESS:"success"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.engine.FontDescription
joo.classLoader.prepare("package flash.text.engine",
"public final class FontDescription",1,function($$private){;return[
"public function get cffHinting",function(){
throw new Error('not implemented');
},
"public function set cffHinting",function(value){
throw new Error('not implemented');
},
"public function get fontLookup",function(){
throw new Error('not implemented');
},
"public function set fontLookup",function(value){
throw new Error('not implemented');
},
"public function get fontName",function(){
throw new Error('not implemented');
},
"public function set fontName",function(value){
throw new Error('not implemented');
},
"public function get fontPosture",function(){
throw new Error('not implemented');
},
"public function set fontPosture",function(value){
throw new Error('not implemented');
},
"public function get fontWeight",function(){
throw new Error('not implemented');
},
"public function set fontWeight",function(value){
throw new Error('not implemented');
},
"public function get locked",function(){
throw new Error('not implemented');
},
"public function set locked",function(value){
throw new Error('not implemented');
},
"public function get renderingMode",function(){
throw new Error('not implemented');
},
"public function set renderingMode",function(value){
throw new Error('not implemented');
},
"public function FontDescription",function(fontName,fontWeight,fontPosture,fontLookup,renderingMode,cffHinting){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){fontName="_serif";}fontWeight="normal";}fontPosture="normal";}fontLookup="device";}renderingMode="cff";}cffHinting="horizontalStem";}
throw new Error('not implemented');
},
"public function clone",function(){
throw new Error('not implemented');
},
"public static function isDeviceFontCompatible",function(fontName,fontWeight,fontPosture){
throw new Error('not implemented');
},
"public static function isFontCompatible",function(fontName,fontWeight,fontPosture){
throw new Error('not implemented');
},
];},["isDeviceFontCompatible","isFontCompatible"],["Error"], "0.8.0", "0.9.6"
);
// class flash.text.engine.TextJustifier
joo.classLoader.prepare("package flash.text.engine",
"public class TextJustifier",1,function($$private){;return[
"public function get lineJustification",function(){
throw new Error('not implemented');
},
"public function set lineJustification",function(value){
throw new Error('not implemented');
},
"public function get locale",function(){
throw new Error('not implemented');
},
"public function TextJustifier",function(locale,lineJustification){
throw new Error('not implemented');
},
"public function clone",function(){
throw new Error('not implemented');
},
"public static function getJustifierForLocale",function(locale){
throw new Error('not implemented');
},
];},["getJustifierForLocale"],["Error"], "0.8.0", "0.9.6"
);
// class flash.text.engine.TabStop
joo.classLoader.prepare("package flash.text.engine",
"public final class TabStop",1,function($$private){;return[
"public function get alignment",function(){
throw new Error('not implemented');
},
"public function set alignment",function(value){
throw new Error('not implemented');
},
"public function get decimalAlignmentToken",function(){
throw new Error('not implemented');
},
"public function set decimalAlignmentToken",function(value){
throw new Error('not implemented');
},
"public function get position",function(){
throw new Error('not implemented');
},
"public function set position",function(value){
throw new Error('not implemented');
},
"public function TabStop",function(alignment,position,decimalAlignmentToken){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){alignment="start";}position=0.0;}decimalAlignmentToken="";}
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.text.engine.TextLineMirrorRegion
joo.classLoader.prepare("package flash.text.engine",
"public final class TextLineMirrorRegion",1,function($$private){;return[
"public function get bounds",function(){
throw new Error('not implemented');
},
"public function get element",function(){
throw new Error('not implemented');
},
"public function get mirror",function(){
throw new Error('not implemented');
},
"public function get nextRegion",function(){
throw new Error('not implemented');
},
"public function get previousRegion",function(){
throw new Error('not implemented');
},
"public function get textLine",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.text.engine.TextLine
joo.classLoader.prepare("package flash.text.engine",
"public final class TextLine extends flash.display.DisplayObjectContainer",5,function($$private){;return[
"public function get ascent",function(){
throw new Error('not implemented');
},
"public function get atomCount",function(){
throw new Error('not implemented');
},
"public function get descent",function(){
throw new Error('not implemented');
},
"public function get hasGraphicElement",function(){
throw new Error('not implemented');
},
"public function get hasTabs",function(){
throw new Error('not implemented');
},
"public function get mirrorRegions",function(){
throw new Error('not implemented');
},
"public function get nextLine",function(){
throw new Error('not implemented');
},
"public function get previousLine",function(){
throw new Error('not implemented');
},
"public function get rawTextLength",function(){
throw new Error('not implemented');
},
"public function get specifiedWidth",function(){
throw new Error('not implemented');
},
"public function get textBlock",function(){
throw new Error('not implemented');
},
"public function get textBlockBeginIndex",function(){
throw new Error('not implemented');
},
"public function get textHeight",function(){
throw new Error('not implemented');
},
"public function get textWidth",function(){
throw new Error('not implemented');
},
"public function get totalAscent",function(){
throw new Error('not implemented');
},
"public function get totalDescent",function(){
throw new Error('not implemented');
},
"public function get totalHeight",function(){
throw new Error('not implemented');
},
"public function get unjustifiedTextWidth",function(){
throw new Error('not implemented');
},
"public var",{userData:undefined},
"public function get validity",function(){
throw new Error('not implemented');
},
"public function set validity",function(value){
throw new Error('not implemented');
},
"public function dump",function(){
throw new Error('not implemented');
},
"public function flushAtomData",function(){
throw new Error('not implemented');
},
"public function getAtomBidiLevel",function(atomIndex){
throw new Error('not implemented');
},
"public function getAtomBounds",function(atomIndex){
throw new Error('not implemented');
},
"public function getAtomCenter",function(atomIndex){
throw new Error('not implemented');
},
"public function getAtomGraphic",function(atomIndex){
throw new Error('not implemented');
},
"public function getAtomIndexAtCharIndex",function(charIndex){
throw new Error('not implemented');
},
"public function getAtomIndexAtPoint",function(stageX,stageY){
throw new Error('not implemented');
},
"public function getAtomTextBlockBeginIndex",function(atomIndex){
throw new Error('not implemented');
},
"public function getAtomTextBlockEndIndex",function(atomIndex){
throw new Error('not implemented');
},
"public function getAtomTextRotation",function(atomIndex){
throw new Error('not implemented');
},
"public function getAtomWordBoundaryOnLeft",function(atomIndex){
throw new Error('not implemented');
},
"public function getBaselinePosition",function(baseline){
throw new Error('not implemented');
},
"public function getMirrorRegion",function(mirror){
throw new Error('not implemented');
},
"public static const",{MAX_LINE_WIDTH:1000000},
];},[],["flash.display.DisplayObjectContainer","Error"], "0.8.0", "0.9.6"
);
// class flash.text.TextDisplayMode
joo.classLoader.prepare("package flash.text",
"public final class TextDisplayMode",1,function($$private){;return[
"public static const",{CRT:"crt"},
"public static const",{DEFAULT:"default"},
"public static const",{LCD:"lcd"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.TextFormat
joo.classLoader.prepare("package flash.text",
"public class TextFormat",1,function($$private){;return[
"public function get align",function(){
return this._align$1;
},
"public function set align",function(value){
this._align$1=value;
},
"public function get blockIndent",function(){
return this._blockIndent$1;
},
"public function set blockIndent",function(value){
this._blockIndent$1=value;
},
"public function get bold",function(){
return this._bold$1;
},
"public function set bold",function(value){
this._bold$1=value;
},
"public function get bullet",function(){
return this._bullet$1;
},
"public function set bullet",function(value){
this._bullet$1=value;
},
"public function get color",function(){
return this._color$1;
},
"public function set color",function(value){
this._color$1=value;
},
"public function get font",function(){
return this._font$1;
},
"public function set font",function(value){
this._font$1=value;
},
"public function get indent",function(){
return this._indent$1;
},
"public function set indent",function(value){
this._indent$1=value;
},
"public function get italic",function(){
return this._italic$1;
},
"public function set italic",function(value){
this._italic$1=value;
},
"public function get kerning",function(){
return this._kerning$1;
},
"public function set kerning",function(value){
this._kerning$1=value;
},
"public function get leading",function(){
return this._leading$1;
},
"public function set leading",function(value){
this._leading$1=value;
},
"public function get leftMargin",function(){
return this._leftMargin$1;
},
"public function set leftMargin",function(value){
this._leftMargin$1=value;
},
"public function get letterSpacing",function(){
return this._letterSpacing$1;
},
"public function set letterSpacing",function(value){
this._letterSpacing$1=value;
},
"public function get rightMargin",function(){
return this._rightMargin$1;
},
"public function set rightMargin",function(value){
this._rightMargin$1=value;
},
"public function get size",function(){
return this._size$1;
},
"public function set size",function(value){
this._size$1=value;
},
"public function get tabStops",function(){
return this._tabStops$1;
},
"public function set tabStops",function(value){
this._tabStops$1=value;
},
"public function get target",function(){
return this._target$1;
},
"public function set target",function(value){
this._target$1=value;
},
"public function get underline",function(){
return this._underline$1;
},
"public function set underline",function(value){
this._underline$1=value;
},
"public function get url",function(){
return this._url$1;
},
"public function set url",function(value){
this._url$1=value;
},
"public function TextFormat",function(font,size,color,bold,
italic,underline,url,target,
align,leftMargin,rightMargin,
indent,leading){if(arguments.length<13){if(arguments.length<12){if(arguments.length<11){if(arguments.length<10){if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){font=null;}size=null;}color=null;}bold=null;}italic=null;}underline=null;}url=null;}target=null;}align=null;}leftMargin=null;}rightMargin=null;}indent=null;}leading=null;}
this._font$1=font;
this._size$1=size;
this._color$1=color;
this._bold$1=bold;
this._italic$1=italic;
this._underline$1=underline;
this._url$1=url;
this._target$1=target;
this._align$1=align;
this._leftMargin$1=leftMargin;
this._rightMargin$1=rightMargin;
this._indent$1=indent;
this._leading$1=leading;
},
"private var",{_align:null},
"private var",{_blockIndent:null},
"private var",{_bold:null},
"private var",{_bullet:null},
"private var",{_color:null},
"private var",{_font:null},
"private var",{_indent:null},
"private var",{_italic:null},
"private var",{_kerning:null},
"private var",{_leading:null},
"private var",{_leftMargin:null},
"private var",{_letterSpacing:null},
"private var",{_rightMargin:null},
"private var",{_size:null},
"private var",{_tabStops:null},
"private var",{_target:null},
"private var",{_underline:null},
"private var",{_url:null},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.ime.CompositionAttributeRange
joo.classLoader.prepare("package flash.text.ime",
"public final class CompositionAttributeRange",1,function($$private){;return[
"public var",{converted:false},
"public var",{relativeEnd:0},
"public var",{relativeStart:0},
"public var",{selected:false},
"public function CompositionAttributeRange",function(relativeStart,relativeEnd,selected,converted){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.text.ime.IIMEClient
joo.classLoader.prepare("package flash.text.ime",
{Event:{name:"imeStartComposition",type:"flash.events.IMEEvent"}},
{Event:{name:"textInput",type:"flash.events.TextEvent"}},
"public interface IIMEClient",1,function($$private){;return[,,,,,,,,,,
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.TextFieldAutoSize
joo.classLoader.prepare("package flash.text",
"public final class TextFieldAutoSize",1,function($$private){;return[
"public static const",{CENTER:"center"},
"public static const",{LEFT:"left"},
"public static const",{NONE:"none"},
"public static const",{RIGHT:"right"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.TextFormatAlign
joo.classLoader.prepare("package flash.text",
"public final class TextFormatAlign",1,function($$private){;return[
"public static const",{CENTER:"center"},
"public static const",{JUSTIFY:"justify"},
"public static const",{LEFT:"left"},
"public static const",{RIGHT:"right"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.TextLineMetrics
joo.classLoader.prepare("package flash.text",
"public class TextLineMetrics",1,function($$private){;return[
"public var",{ascent:NaN},
"public var",{descent:NaN},
"public var",{height:NaN},
"public var",{leading:NaN},
"public var",{width:NaN},
"public var",{x:NaN},
"public function TextLineMetrics",function(x,width,height,ascent,descent,leading){
this.x=x;
this.width=width;
this.height=height;
this.ascent=ascent;
this.descent=descent;
this.leading=leading;
},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.GridFitType
joo.classLoader.prepare("package flash.text",
"public final class GridFitType",1,function($$private){;return[
"public static const",{NONE:"none"},
"public static const",{PIXEL:"pixel"},
"public static const",{SUBPIXEL:"subpixel"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.TextColorType
joo.classLoader.prepare("package flash.text",
"public final class TextColorType",1,function($$private){;return[
"public static const",{DARK_COLOR:"dark"},
"public static const",{LIGHT_COLOR:"light"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.StyleSheet
joo.classLoader.prepare("package flash.text",
"public dynamic class StyleSheet extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get styleNames",function(){
return this._styleNames$2;
},
"public function StyleSheet",function(){flash.events.EventDispatcher.call(this);
this.clear();
},
"public function clear",function(){
this._styleNames$2=[];
this.styles$2={};
},
"public function getStyle",function(styleName){
return this.styles$2[styleName];
},
"public function parseCSS",function(CSSText){
throw new Error('not implemented');
},
"public function setStyle",function(styleName,styleObject){
if(!(styleName in this.styles$2)){
this.styleNames.push(styleName);
}
this.styles$2[styleName]=styleObject;
},
"public function transform",function(formatObject){
throw new Error('not implemented');
},
"private var",{_styleNames:null},
"private var",{styles:null},
];},[],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.text.TextSnapshot
joo.classLoader.prepare("package flash.text",
"public class TextSnapshot",1,function($$private){;return[
"public function get charCount",function(){
throw new Error('not implemented');
},
"public function findText",function(beginIndex,textToFind,caseSensitive){
throw new Error('not implemented');
},
"public function getSelected",function(beginIndex,endIndex){
throw new Error('not implemented');
},
"public function getSelectedText",function(includeLineEndings){if(arguments.length<1){includeLineEndings=false;}
throw new Error('not implemented');
},
"public function getText",function(beginIndex,endIndex,includeLineEndings){if(arguments.length<3){includeLineEndings=false;}
throw new Error('not implemented');
},
"public function getTextRunInfo",function(beginIndex,endIndex){
throw new Error('not implemented');
},
"public function hitTestTextNearPos",function(x,y,maxDistance){if(arguments.length<3){maxDistance=0;}
throw new Error('not implemented');
},
"public function setSelectColor",function(hexColor){if(arguments.length<1){hexColor=0xFFFF00;}
throw new Error('not implemented');
},
"public function setSelected",function(beginIndex,endIndex,select){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.text.TextExtent
joo.classLoader.prepare("package flash.text",
"public class TextExtent",1,function($$private){;return[
"public var",{ascent:NaN},
"public var",{descent:NaN},
"public var",{height:NaN},
"public var",{textFieldHeight:NaN},
"public var",{textFieldWidth:NaN},
"public var",{width:NaN},
"public function TextExtent",function(width,height,textFieldWidth,textFieldHeight,ascent,descent){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.text.FontStyle
joo.classLoader.prepare("package flash.text",
"public final class FontStyle",1,function($$private){;return[
"public static const",{BOLD:"bold"},
"public static const",{BOLD_ITALIC:"boldItalic"},
"public static const",{ITALIC:"italic"},
"public static const",{REGULAR:"regular"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.text.StaticText
joo.classLoader.prepare("package flash.text",
"public final class StaticText extends flash.display.DisplayObject",3,function($$private){;return[
"public function get text",function(){
throw new Error('not implemented');
},
];},[],["flash.display.DisplayObject","Error"], "0.8.0", "0.9.6"
);
// class flash.text.CSMSettings
joo.classLoader.prepare("package flash.text",
"public final class CSMSettings",1,function($$private){;return[
"public var",{fontSize:NaN},
"public var",{insideCutoff:NaN},
"public var",{outsideCutoff:NaN},
"public function CSMSettings",function(fontSize,insideCutoff,outsideCutoff){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.sensors.Accelerometer
joo.classLoader.prepare("package flash.sensors",
{Event:{name:"status",type:"flash.events.StatusEvent"}},
{Event:{name:"update",type:"flash.events.AccelerometerEvent"}},
"public class Accelerometer extends flash.events.EventDispatcher",2,function($$private){;return[
"public static function get isSupported",function(){
throw new Error('not implemented');
},
"public function get muted",function(){
throw new Error('not implemented');
},
"public function Accelerometer",function(){flash.events.EventDispatcher.call(this);
throw new Error('not implemented');
},
"public function setRequestedUpdateInterval",function(interval){
throw new Error('not implemented');
},
];},["isSupported"],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.display.CapsStyle
joo.classLoader.prepare("package flash.display",
"public final class CapsStyle",1,function($$private){;return[
"public static const",{NONE:"none"},
"public static const",{ROUND:"round"},
"public static const",{SQUARE:"square"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.IGraphicsPath
joo.classLoader.prepare("package flash.display",
"public interface IGraphicsPath",1,function($$private){;return[
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.GraphicsShaderFill
joo.classLoader.prepare("package flash.display",
"public final class GraphicsShaderFill implements flash.display.IGraphicsFill,flash.display.IGraphicsData",1,function($$private){;return[
"public var",{matrix:null},
"public var",{shader:null},
"public function GraphicsShaderFill",function(shader,matrix){if(arguments.length<2){if(arguments.length<1){shader=null;}matrix=null;}
throw new Error('not implemented');
},
];},[],["flash.display.IGraphicsFill","flash.display.IGraphicsData","Error"], "0.8.0", "0.9.6"
);
// class flash.display.Bitmap
joo.classLoader.prepare("package flash.display",
"public class Bitmap extends flash.display.DisplayObject",3,function($$private){var $$bound=joo.boundMethod;return[
"public function get bitmapData",function(){
return this._bitmapData$3;
},
"public function set bitmapData",function(value){
if(this.listenerAdded$3){
this._bitmapData$3.removeElementChangeListener($$bound(this,"setElement"));
}
this._bitmapData$3=value;
if(this.listenerAdded$3){
this._bitmapData$3.addElementChangeListener($$bound(this,"setElement"));
}
},
"public function get pixelSnapping",function(){
return this._pixelSnapping$3;
},
"public function set pixelSnapping",function(value){
this._pixelSnapping$3=value;
},
"public function get smoothing",function(){
return this._smoothing$3;
},
"public function set smoothing",function(value){
this._smoothing$3=value;
},
"public function Bitmap",function(bitmapData,pixelSnapping,smoothing){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){bitmapData=null;}pixelSnapping="auto";}smoothing=false;}
this._bitmapData$3=bitmapData;
flash.display.DisplayObject.call(this);
this._pixelSnapping$3=pixelSnapping;
this._smoothing$3=smoothing;
},
"override protected function createElement",function(){
if(!this.listenerAdded$3){
this._bitmapData$3.addElementChangeListener($$bound(this,"setElement"));
}
return this._bitmapData$3.getElement();
},
"override public function get height",function(){
return this._bitmapData$3.height*this.scaleY;
},
"override public function get width",function(){
return this._bitmapData$3.width*this.scaleX;
},
"private var",{_bitmapData:null},
"private var",{listenerAdded:false},
"private var",{_pixelSnapping:null},
"private var",{_smoothing:false},
];},[],["flash.display.DisplayObject"], "0.8.0", "0.9.6"
);
// class flash.display.TriangleCulling
joo.classLoader.prepare("package flash.display",
"public final class TriangleCulling",1,function($$private){;return[
"public static const",{NEGATIVE:"negative"},
"public static const",{NONE:"none"},
"public static const",{POSITIVE:"positive"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.StageQuality
joo.classLoader.prepare("package flash.display",
"public final class StageQuality",1,function($$private){;return[
"public static const",{BEST:"best"},
"public static const",{HIGH:"high"},
"public static const",{LOW:"low"},
"public static const",{MEDIUM:"medium"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.GraphicsBitmapFill
joo.classLoader.prepare("package flash.display",
"public final class GraphicsBitmapFill implements flash.display.IGraphicsFill,flash.display.IGraphicsData",1,function($$private){;return[
"public var",{bitmapData:null},
"public var",{matrix:null},
"public var",{repeat:false},
"public var",{smooth:false},
"public function GraphicsBitmapFill",function(bitmapData,matrix,repeat,smooth){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){bitmapData=null;}matrix=null;}repeat=true;}smooth=false;}
throw new Error('not implemented');
},
];},[],["flash.display.IGraphicsFill","flash.display.IGraphicsData","Error"], "0.8.0", "0.9.6"
);
// class flash.display.JointStyle
joo.classLoader.prepare("package flash.display",
"public final class JointStyle",1,function($$private){;return[
"public static const",{BEVEL:"bevel"},
"public static const",{MITER:"miter"},
"public static const",{ROUND:"round"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.Shape
joo.classLoader.prepare("package flash.display",
"public class Shape extends flash.display.DisplayObject",3,function($$private){;return[
"public function get graphics",function(){
return this._graphics$3;
},
"public function Shape",function(){
flash.display.DisplayObject.call(this);
this._graphics$3=new flash.display.Graphics();
},
"override public function set transform",function(value){
this.transform$3=value;
var m=value.matrix;
if(m){
this.graphics.renderingContext.setTransform(m.a,m.b,m.c,m.d,m.tx,m.ty);
}
},
"override public function get width",function(){
return this._graphics$3.width;
},
"override public function get height",function(){
return this._graphics$3.height;
},
"override protected function createElement",function(){
return this.graphics.canvas;
},
"private var",{_graphics:null},
];},[],["flash.display.DisplayObject","flash.display.Graphics"], "0.8.0", "0.9.6"
);
// class flash.display.Scene
joo.classLoader.prepare("package flash.display",
"public final class Scene",1,function($$private){;return[
"public function get labels",function(){
throw new Error('not implemented');
},
"public function get name",function(){
throw new Error('not implemented');
},
"public function get numFrames",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.display.LoaderInfo
joo.classLoader.prepare("package flash.display",
{Event:{name:"complete",type:"flash.events.Event"}},
{Event:{name:"httpStatus",type:"flash.events.HTTPStatusEvent"}},
{Event:{name:"init",type:"flash.events.Event"}},
{Event:{name:"ioError",type:"flash.events.IOErrorEvent"}},
{Event:{name:"open",type:"flash.events.Event"}},
{Event:{name:"progress",type:"flash.events.ProgressEvent"}},
{Event:{name:"unload",type:"flash.events.Event"}},
"public class LoaderInfo extends flash.events.EventDispatcher",2,function($$private){;return[function(){joo.classLoader.init(flash.events.Event);},
"public function get actionScriptVersion",function(){
throw new Error('not implemented');
},
"public function get applicationDomain",function(){
throw new Error('not implemented');
},
"public native function get bytes",
"internal function setBytes",function(value){
this['bytes']=value;
},
"public function get bytesLoaded",function(){
throw new Error('not implemented');
},
"public function get bytesTotal",function(){
throw new Error('not implemented');
},
"public function get childAllowsParent",function(){
throw new Error('not implemented');
},
"public native function get content",
"internal function setContent",function(content){
this['content']=content;
},
"public function get contentType",function(){
throw new Error('not implemented');
},
"public function get frameRate",function(){
throw new Error('not implemented');
},
"public function get height",function(){
return this.content.height;
},
"public function get isURLInaccessible",function(){
throw new Error('not implemented');
},
"public native function get loader",
"public function get loaderURL",function(){
throw new Error('not implemented');
},
"public native function get parameters",
"public function get parentAllowsChild",function(){
throw new Error('not implemented');
},
"public function get sameDomain",function(){
throw new Error('not implemented');
},
"public function get sharedEvents",function(){
throw new Error('not implemented');
},
"public function get swfVersion",function(){
throw new Error('not implemented');
},
"public function get uncaughtErrorEvents",function(){
throw new Error('not implemented');
},
"public native function get url",
"internal function setUrl",function(url){
this['url']=url;
},
"public function get width",function(){
return this.content.width;
},
"public static function getLoaderInfoByDefinition",function(object){
throw new Error('not implemented');
},
"public function LoaderInfo",function(loader){flash.events.EventDispatcher.call(this);if(arguments.length<1){loader=null;}
this['loader']=loader;
this.setUrl(window.location.href);
var params={};
var query=window.location.search.substr(1);
var keysValues=query.split('&');
for(var i=0;i<keysValues.length;i++){
var keyValue=String(keysValues[i]).split('=');
params[decodeURIComponent(keyValue[0])]=decodeURIComponent(keyValue[1]);
}
this['parameters']=params;
},
"internal function load",function(){var this$=this;
var img=new js.Image();
img.addEventListener("load",function(){
this$.setContent(new flash.display.Bitmap(flash.display.BitmapData.fromImg(img)));
this$.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
},false);
img.src=this.url;
},
];},["getLoaderInfoByDefinition"],["flash.events.EventDispatcher","Error","String","js.Image","flash.display.Bitmap","flash.display.BitmapData","flash.events.Event"], "0.8.0", "0.9.6"
);
// class flash.display.IBitmapDrawable
joo.classLoader.prepare("package flash.display",
"public interface IBitmapDrawable",1,function($$private){;return[
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.PixelSnapping
joo.classLoader.prepare("package flash.display",
"public final class PixelSnapping",1,function($$private){;return[
"public static const",{ALWAYS:"always"},
"public static const",{AUTO:"auto"},
"public static const",{NEVER:"never"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.Shader
joo.classLoader.prepare("package flash.display",
"public class Shader",1,function($$private){;return[
"public function set byteCode",function(value){
throw new Error('not implemented');
},
"public function get data",function(){
throw new Error('not implemented');
},
"public function set data",function(value){
throw new Error('not implemented');
},
"public function get precisionHint",function(){
throw new Error('not implemented');
},
"public function set precisionHint",function(value){
throw new Error('not implemented');
},
"public function Shader",function(code){if(arguments.length<1){code=null;}
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.display.ColorCorrectionSupport
joo.classLoader.prepare("package flash.display",
"public final class ColorCorrectionSupport",1,function($$private){;return[
"public static const",{DEFAULT_OFF:"defaultOff"},
"public static const",{DEFAULT_ON:"defaultOn"},
"public static const",{UNSUPPORTED:"unsupported"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.GraphicsGradientFill
joo.classLoader.prepare("package flash.display",
"public final class GraphicsGradientFill implements flash.display.IGraphicsFill,flash.display.IGraphicsData",1,function($$private){;return[
"public var",{alphas:null},
"public var",{colors:null},
"public var",{focalPointRatio:NaN},
"public function get interpolationMethod",function(){
throw new Error('not implemented');
},
"public function set interpolationMethod",function(value){
throw new Error('not implemented');
},
"public var",{matrix:null},
"public var",{ratios:null},
"public function get spreadMethod",function(){
throw new Error('not implemented');
},
"public function set spreadMethod",function(value){
throw new Error('not implemented');
},
"public function get type",function(){
throw new Error('not implemented');
},
"public function set type",function(value){
throw new Error('not implemented');
},
"public function GraphicsGradientFill",function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){type="linear";}colors=null;}alphas=null;}ratios=null;}matrix=null;}spreadMethod="pad";}interpolationMethod="rgb";}focalPointRatio=0.0;}
throw new Error('not implemented');
},
];},[],["flash.display.IGraphicsFill","flash.display.IGraphicsData","Error"], "0.8.0", "0.9.6"
);
// class flash.display.Graphics
joo.classLoader.prepare("package flash.display",
"public final class Graphics",1,function($$private){var as=joo.as;return[function(){joo.classLoader.init(flash.geom.Matrix,flash.display.CapsStyle,Math,flash.display.GradientType,flash.display.JointStyle);},
"public function beginBitmapFill",function(bitmap,matrix,repeat,smooth){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){matrix=null;}repeat=true;}smooth=false;}
this._beginFill$1(this.createPattern$1(bitmap,matrix,repeat,smooth));
},
"public function beginFill",function(color,alpha){if(arguments.length<2){alpha=1.0;}
this._beginFill$1(flash.display.Graphics.toRGBA(color,alpha));
},
"public function beginGradientFill",function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){matrix=null;}spreadMethod="pad";}interpolationMethod="rgb";}focalPointRatio=0;}
this._beginFill$1(this.createGradientStyle$1(type,colors,alphas,ratios,
matrix,spreadMethod,interpolationMethod,focalPointRatio));
},
"public function beginShaderFill",function(shader,matrix){if(arguments.length<2){matrix=null;}
throw new Error('not implemented');
},
"public function clear",function(){
this.lineStyle();
this.context$1.save();
this.context$1.setTransform(1,0,0,1,0,0);
this.context$1.fillStyle="#000000";
this.context$1.clearRect(0,0,this.context$1.canvas.width,this.context$1.canvas.height);
this.context$1.restore();
this.fillCommands$1=null;
this.context$1.moveTo(0,0);
this.empty$1=true;
},
"public function copyFrom",function(sourceGraphics){
throw new Error('not implemented');
},
"public function curveTo",function(controlX,controlY,anchorX,anchorY){var this$=this;
this.createSpace$1(this.x$1,this.y$1);
this.createSpace$1(controlX,controlY);
this.createSpace$1(anchorX,anchorY);
this.scheduleCommand$1(function(){
this$.x$1=anchorX;
this$.y$1=anchorY;
this$.context$1.quadraticCurveTo(controlX,controlY,anchorX,anchorY);
if(!this$.fillCommands$1&&this$.thickness$1){
this$.context$1.stroke();
}
this$.empty$1=false;
});
},
"public function drawCircle",function(x,y,radius){
this.createSpace$1(x-radius,y-radius);
this.createSpace$1(x+radius,y+radius);
this.createCanvasSpace$1();
this.context$1.moveTo(x+radius,y);
this.context$1.arc(x,y,radius,0,2*Math.PI,false);
if(this.fillCommands$1){
this.context$1.fill();
}
if(!isNaN(this.thickness$1)){
this.context$1.stroke();
}
this.empty$1=false;
this.context$1.beginPath();
this.context$1.moveTo(x,y);
},
"public function drawEllipse",function(x,y,width,height){
this.createSpace$1(x-width,y-height);
this.createSpace$1(x+width,y+height);
this.createCanvasSpace$1();
var rx=width/2;
var ry=height/2;
var cx=x+rx;
var cy=y+ry;
this.context$1.beginPath();
this.context$1.moveTo(cx,cy-ry);
this.context$1.bezierCurveTo(cx+($$private.KAPPA*rx),cy-ry,cx+rx,cy-($$private.KAPPA*ry),cx+rx,cy);
this.context$1.bezierCurveTo(cx+rx,cy+($$private.KAPPA*ry),cx+($$private.KAPPA*rx),cy+ry,cx,cy+ry);
this.context$1.bezierCurveTo(cx-($$private.KAPPA*rx),cy+ry,cx-rx,cy+($$private.KAPPA*ry),cx-rx,cy);
this.context$1.bezierCurveTo(cx-rx,cy-($$private.KAPPA*ry),cx-($$private.KAPPA*rx),cy-ry,cx,cy-ry);
if(this.fillCommands$1){
this.context$1.fill();
}
if(!isNaN(this.thickness$1)){
this.context$1.stroke();
}
this.empty$1=false;
this.context$1.beginPath();
this.context$1.moveTo(x,y);
},
"public function drawGraphicsData",function(graphicsData){
throw new Error('not implemented');
},
"public function drawPath",function(commands,data,winding){if(arguments.length<3){winding="evenOdd";}
throw new Error('not implemented');
},
"public function drawRect",function(x,y,width,height){
this.createSpace$1(x,y);
this.createSpace$1(x+width,y+height);
this.createCanvasSpace$1();
if(this.fillCommands$1){
this.context$1.fillRect(x,y,width,height);
}
if(!isNaN(this.thickness$1)){
this.context$1.strokeRect(x,y,width,height);
}
this.empty$1=false;
},
"public function drawRoundRect",function(x,y,width,height,ellipseWidth,ellipseHeight){if(arguments.length<6){ellipseHeight=NaN;}
this.createSpace$1(x,y);
var x_r=x+width;
var y_b=y+height;
this.createSpace$1(x_r,y_b);
this.createCanvasSpace$1();
if(ellipseHeight==0||ellipseWidth==0){
this.drawRect(x,y,width,height);
return;
}
if(isNaN(ellipseHeight)){
ellipseHeight=ellipseWidth;
}
var x_lw=x+ellipseWidth;
var x_rw=x_r-ellipseWidth;
var y_tw=y+ellipseHeight;
var y_bw=y_b-ellipseHeight;
this.context$1.beginPath();
this.context$1.moveTo(x_lw,y);
this.context$1.lineTo(x_rw,y);
this.context$1.quadraticCurveTo(x_r,y,x_r,y_tw);
this.context$1.lineTo(x_r,y_bw);
this.context$1.quadraticCurveTo(x_r,y_b,x_rw,y_b);
this.context$1.lineTo(x_lw,y_b);
this.context$1.quadraticCurveTo(x,y_b,x,y_bw);
this.context$1.lineTo(x,y_tw);
this.context$1.quadraticCurveTo(x,y,x_lw,y);
this.context$1.closePath();
if(this.fillCommands$1){
this.context$1.fill();
}
if(!isNaN(this.thickness$1)){
this.context$1.stroke();
}
this.empty$1=false;
},
"public function drawRoundRectComplex",function(x,y,width,height,topLeftRadius,topRightRadius,bottomLeftRadius,bottomRightRadius){
this.createSpace$1(x,y);
var x_r=x+width;
var y_b=y+height;
this.createSpace$1(x_r,y_b);
this.createCanvasSpace$1();
if(topLeftRadius==0&&topRightRadius==0&&bottomLeftRadius==0&&bottomRightRadius==0){
this.drawRect(x,y,width,height);
return;
}
this.context$1.beginPath();
var x_tl=x+topLeftRadius;
this.context$1.moveTo(x_tl,y);
this.context$1.lineTo(x_r-topRightRadius,y);
this.context$1.quadraticCurveTo(x_r,y,x_r,y+topRightRadius);
this.context$1.lineTo(x_r,y_b-bottomRightRadius);
this.context$1.quadraticCurveTo(x_r,y_b,x_r-bottomRightRadius,y_b);
this.context$1.lineTo(x+bottomLeftRadius,y_b);
this.context$1.quadraticCurveTo(x,y_b,x,y_b-bottomLeftRadius);
this.context$1.lineTo(x,y+topLeftRadius);
this.context$1.quadraticCurveTo(x,y,x_tl,y);
this.context$1.closePath();
if(this.fillCommands$1){
this.context$1.fill();
}
if(!isNaN(this.thickness$1)){
this.context$1.stroke();
}
this.empty$1=false;
},
"public function drawTriangles",function(vertices,indices,uvtData,culling){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){indices=null;}uvtData=null;}culling="none";}
throw new Error('not implemented');
},
"public function endFill",function(){
if(this.fillCommands$1){
this.createCanvasSpace$1();
this.context$1.beginPath();
for(var i=0;i<this.fillCommands$1.length;i++){
this.fillCommands$1[i]();
}
if(this.x$1!==this.startX$1||this.y$1!==this.startY$1){
this.context$1.lineTo(this.startX$1,this.startY$1);
}
this.context$1.closePath();
this.context$1.fill();
if(!isNaN(this.thickness$1)){
this.context$1.stroke();
}
this.fillCommands$1=null;
}
},
"public function lineBitmapStyle",function(bitmap,matrix,repeat,smooth){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){matrix=null;}repeat=true;}smooth=false;}
throw new Error('not implemented');
},
"public function lineGradientStyle",function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){matrix=null;}spreadMethod="pad";}interpolationMethod="rgb";}focalPointRatio=0;}
this.context$1.strokeStyle=this.createGradientStyle$1(type,colors,alphas,ratios,
matrix,spreadMethod,interpolationMethod,focalPointRatio);
},
"public function lineShaderStyle",function(shader,matrix){if(arguments.length<2){matrix=null;}
throw new Error('not implemented');
},
"public function lineStyle",function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){thickness=NaN;}color=0;}alpha=1.0;}pixelHinting=false;}scaleMode="normal";}caps=null;}joints=null;}miterLimit=3;}
this.thickness$1=thickness;
this.context$1.lineWidth=thickness>0?thickness:1;
this.context$1.strokeStyle=flash.display.Graphics.toRGBA(color,alpha);
this.context$1.lineCap=caps||flash.display.CapsStyle.ROUND;
this.context$1.lineJoin=joints||flash.display.JointStyle.ROUND;
this.context$1.miterLimit=miterLimit;
},
"public function lineTo",function(x,y){var this$=this;
this.createSpace$1(this.x$1,this.y$1);
this.createSpace$1(x,y);
this.scheduleCommand$1(function(){
if(!this$.fillCommands$1){
this$.context$1.beginPath();
this$.restorePosition$1();
}
this$.context$1.lineTo(x,y);
this$.setPosition$1(x,y);
if(!this$.fillCommands$1){
this$.context$1.closePath();
if(!isNaN(this$.thickness$1)){
this$.context$1.stroke();
}
}
this$.empty$1=false;
});
},
"public function moveTo",function(x,y){var this$=this;
this.startX$1=x;
this.startY$1=y;
this.setPosition$1(x,y);
this.scheduleCommand$1(function(){
this$.context$1.moveTo(x,y);
});
},
"private var",{context:null},
"private var",{thickness:NaN},
"private var",{fillCommands:null},
"private var",{minX:NaN},
"private var",{minY:NaN},
"private var",{maxX:NaN},
"private var",{maxY:NaN},
"private var",{oldIntMinX:0},
"private var",{oldIntMinY:0},
"private var",{empty:true},
"private var",{x:0},
"private var",{y:0},
"private var",{startX:0},
"private var",{startY:0},
"public function Graphics",function(){
var canvas=as(window.document.createElement("canvas"),js.HTMLCanvasElement);
canvas.width=1;
canvas.height=1;
canvas.style.position="absolute";
this.context$1=(canvas.getContext("2d"));
this.context$1.beginPath();
this.context$1.moveTo(0,0);
this.context$1.lineWidth=1;
this.context$1.lineCap=flash.display.CapsStyle.ROUND;
this.context$1.lineJoin=flash.display.JointStyle.ROUND;
this.context$1.miterLimit=3;
},
"internal function get canvas",function(){
return this.context$1.canvas;
},
"internal function get renderingContext",function(){
return this.context$1;
},
"public function get width",function(){
return isNaN(this.minX$1)?0:this.maxX$1-this.minX$1+1;
},
"public function get height",function(){
return isNaN(this.minY$1)?0:this.maxY$1-this.minY$1+1;
},
"private function createSpace",function(x,y){
var thickness=this.thickness$1||0;
if(isNaN(this.minX$1)){
this.minX$1=x-thickness;
this.minY$1=y-thickness;
this.maxX$1=x+thickness;
this.maxY$1=y+thickness;
}else{
this.minX$1=Math.min(this.minX$1,x-thickness);
this.minY$1=Math.min(this.minY$1,y-thickness);
this.maxX$1=Math.max(this.maxX$1,x+thickness);
this.maxY$1=Math.max(this.maxY$1,y+thickness);
}
},
"private function createCanvasSpace",function(){
var imageData;
var canvas=this.canvas;
var intMinX=Math.floor(this.minX$1);
var intMinY=Math.floor(this.minY$1);
var intWidth=Math.ceil(this.maxX$1)-intMinX+1;
var intHeight=Math.ceil(this.maxY$1)-intMinY+1;
if(intWidth>canvas.width||intHeight>canvas.height){
var backupStyle={
fillStyle:this.context$1.fillStyle,
lineWidth:this.context$1.lineWidth,
strokeStyle:this.context$1.strokeStyle,
lineCap:this.context$1.lineCap,
lineJoin:this.context$1.lineJoin,
miterLimit:this.context$1.miterLimit
};
imageData=this.empty$1?null:this.context$1.getImageData(0,0,canvas.width,canvas.height);
if(intWidth>canvas.width){
canvas.width=intWidth;
}
if(intHeight>canvas.height){
canvas.height=intHeight;
}
this.context$1.translate(-intMinX,-intMinY);
canvas.style.left=intMinX+"px";
canvas.style.top=intMinY+"px";
if(imageData){
this.context$1.putImageData(imageData,this.oldIntMinX$1-intMinX,this.oldIntMinY$1-intMinY);
}
for(var m in backupStyle){
this.context$1[m]=backupStyle[m];
}
}
this.oldIntMinX$1=intMinX;
this.oldIntMinY$1=intMinY;
},
"private function _beginFill",function(fillStyle){
this.endFill();
this.context$1.fillStyle=fillStyle;
this.fillCommands$1=[];
},
"private function createPattern",function(bitmap,matrix,repeat,smooth){
return this.context$1.createPattern(bitmap.getElement(),repeat?"repeat":"no-repeat");
},
"private function createGradientStyle",function(type,colors,alphas,ratios,
matrix,spreadMethod,
interpolationMethod,focalPointRatio){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){matrix=null;}spreadMethod="pad";}interpolationMethod="rgb";}focalPointRatio=0;}
var gradient;
var p0=new flash.geom.Point(0,0);
var p1=new flash.geom.Point(-flash.geom.Matrix.MAGIC_GRADIENT_FACTOR/2,0);
var p2=type==flash.display.GradientType.LINEAR
?new flash.geom.Point(0,-flash.geom.Matrix.MAGIC_GRADIENT_FACTOR/2)
:new flash.geom.Point(flash.geom.Matrix.MAGIC_GRADIENT_FACTOR/2*focalPointRatio,0);
if(matrix){
p0=matrix.transformPoint(p0);
p1=matrix.transformPoint(p1);
p2=matrix.transformPoint(p2);
}
if(type==flash.display.GradientType.LINEAR){
var x1;
var y1;
if(p2.x==p0.x){
x1=p1.x;
y1=p1.y;
}else if(p2.y==p0.y){
x1=p1.x;
y1=p2.x;
}else{
var d=-(p2.x-p0.x)/(p2.y-p0.y);
x1=(p1.x/d+p1.y+d*p0.x-p0.y)/(d+1/d);
y1=d*(x1-p0.x)+p0.y;
}
var x2=p0.x+(p0.x-x1);
var y2=p0.y+(p0.y-y1);
gradient=this.context$1.createLinearGradient(x1,y1,x2,y2);
}else{
var rx=p1.x-p0.x;
var ry=p1.y-p0.y;
var r=rx==0?Math.abs(ry):ry==0?Math.abs(rx):Math.sqrt(rx*rx+ry*ry);
gradient=this.context$1.createRadialGradient(p2.x,p2.y,0,p0.x,p0.y,r);
}
for(var i=0;i<colors.length;++i){
gradient.addColorStop(ratios[i]/255,flash.display.Graphics.toRGBA(colors[i],alphas[i]));
}
return gradient;
},
"public static function toRGBA",function(color,alpha){
var params=[color>>>16&0xFF,color>>>8&0xFF,color&0xFF].join(",");
return alpha<1?["rgba(",params,",",alpha,")"].join("")
:"rgb("+params+")";
},
"private function setPosition",function(x,y){
this.x$1=x;
this.y$1=y;
},
"private function restorePosition",function(){
this.context$1.moveTo(this.x$1,this.y$1);
},
"private function scheduleCommand",function(command){
if(this.fillCommands$1){
this.fillCommands$1.push(command);
}else{
this.createCanvasSpace$1();
command();
}
},
"private static const",{KAPPA:function(){return(4*((Math.sqrt(2)-1)/3));}},
];},["toRGBA"],["Error","Math","flash.display.CapsStyle","flash.display.JointStyle","js.HTMLCanvasElement","js.CanvasRenderingContext2D","flash.geom.Point","flash.geom.Matrix","flash.display.GradientType"], "0.8.0", "0.9.6"
);
// class flash.display.IGraphicsStroke
joo.classLoader.prepare("package flash.display",
"public interface IGraphicsStroke",1,function($$private){;return[
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.Stage
joo.classLoader.prepare("package flash.display",
{Event:{name:"fullScreen",type:"flash.events.FullScreenEvent"}},
{Event:{name:"mouseLeave",type:"flash.events.Event"}},
{Event:{name:"resize",type:"flash.events.Event"}},
{Event:{name:"stageVideoAvailability",type:"flash.events.StageVideoAvailabilityEvent"}},
"public class Stage extends flash.display.DisplayObjectContainer",5,function($$private){;return[function(){joo.classLoader.init(flash.display.StageScaleMode,flash.display.StageQuality,flash.display.StageAlign,flash.display.StageDisplayState,flash.events.Event,flash.events.TimerEvent);},
"public function get align",function(){
return this._align$5;
},
"public function set align",function(value){
this._align$5=value;
},
"public function get allowsFullScreen",function(){
return false;
},
"public function get colorCorrection",function(){
return"default";
},
"public function set colorCorrection",function(value){
throw new Error('not implemented');
},
"public function get colorCorrectionSupport",function(){
return"unsupported";
},
"public function get displayState",function(){
return flash.display.StageDisplayState.NORMAL;
},
"public function set displayState",function(value){
if(value!==flash.display.StageDisplayState.NORMAL){
throw new Error('not implemented');
}
},
"public function get focus",function(){
throw new Error('not implemented');
},
"public function set focus",function(value){
throw new Error('not implemented');
},
"public function get frameRate",function(){
return this._frameRate$5;
},
"public function set frameRate",function(value){
this._frameRate$5=Number(value);
if(this.frameTimer$5){
this.frameTimer$5.delay=1000/this._frameRate$5;
}
},
"public function get fullScreenHeight",function(){
throw new Error('not implemented');
},
"public function get fullScreenSourceRect",function(){
throw new Error('not implemented');
},
"public function set fullScreenSourceRect",function(value){
throw new Error('not implemented');
},
"public function get fullScreenWidth",function(){
throw new Error('not implemented');
},
"override public function get height",function(){
return this._stageHeight$5;
},
"override public function set height",function(value){
this.stageHeight=$$int(value);
},
"override public function get mouseChildren",function(){
throw new Error('not implemented');
},
"override public function set mouseChildren",function(value){
throw new Error('not implemented');
},
"override public function get numChildren",function(){
return this.numChildren$5;
},
"public function get quality",function(){
return this._quality$5;
},
"public function set quality",function(value){
this._quality$5=value;
},
"public function get scaleMode",function(){
return this._scaleMode$5;
},
"public function set scaleMode",function(value){
this._scaleMode$5=value;
},
"public native function get showDefaultContextMenu",
"public native function set showDefaultContextMenu",
"public function get softKeyboardRect",function(){
return new flash.geom.Rectangle();
},
"public native function get stageFocusRect",
"public native function set stageFocusRect",
"public function get stageHeight",function(){
return this._stageHeight$5;
},
"public function set stageHeight",function(value){
this._stageHeight$5=value;
this.getElement().style.height=value+"px";
},
"public function get stageWidth",function(){
return this._stageWidth$5;
},
"public function set stageWidth",function(value){
this._stageWidth$5=value;
this.getElement().style.width=value+"px";
},
"override public function get tabChildren",function(){
return this.tabChildren$5;
},
"override public function set tabChildren",function(value){
this.tabChildren$5=value;
},
"override public function get textSnapshot",function(){
return this.textSnapshot$5;
},
"override public function get width",function(){
return this._stageWidth$5;
},
"override public function set width",function(value){
this.stageWidth=$$int(value);
},
"public function get wmodeGPU",function(){
return false;
},
"override public function addChild",function(child){
return this.addChild$5(child);
},
"override public function addChildAt",function(child,index){
return this.addChildAt$5(child,index);
},
"override public function addEventListener",function(type,listener,useCapture,priority,useWeakReference){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){useCapture=false;}priority=0;}useWeakReference=false;}
this.addEventListener$5(type,listener,useCapture,priority,useWeakReference);
},
"override public function dispatchEvent",function(event){
return this.dispatchEvent$5(event);
},
"override public function hasEventListener",function(type){
return this.hasEventListener$5(type);
},
"public function invalidate",function(){
throw new Error('not implemented');
},
"public function isFocusInaccessible",function(){
throw new Error('not implemented');
},
"override public function removeChildAt",function(index){
return this.removeChildAt$5(index);
},
"override public function setChildIndex",function(child,index){
this.setChildIndex$5(child,index);
},
"override public function swapChildren",function(child1,child2){
this.swapChildren$5(child1,child2);
},
"override public function willTrigger",function(type){
return this.willTrigger$5(type);
},
"override public function get stage",function(){
return this;
},
"public function Stage",function(id,properties){
this.id$5=id;
if(properties){
for(var m in properties){
this[m]=properties[m];
}
}
flash.display.DisplayObjectContainer.call(this);this._quality$5=this._quality$5();this._scaleMode$5=this._scaleMode$5();this._align$5=this._align$5();
this.frameTimer$5=new flash.utils.Timer(1000/this._frameRate$5);
this.frameTimer$5.addEventListener(flash.events.TimerEvent.TIMER,$$private.enterFrame);
this.frameTimer$5.start();
},
"public function set backgroundColor",function(value){
if(typeof value=='string'){
value=String(value).replace(/^#/,"0x");
}
this.getElement().style.backgroundColor=flash.display.Graphics.toRGBA($$uint(value));
},
"override protected function createElement",function(){var this$=this;
var element=(window.document.getElementById(this.id$5));
element.style.position="relative";
element.style.overflow="hidden";
element.setAttribute("tabindex","0");
element.style.margin="0";
element.style.padding="0";
var width=element.getAttribute("width");
if(!width){
width=this.width;
}
element.style.width=width+"px";
var height=element.getAttribute("height");
if(!height){
height=this.height;
}
element.style.height=height+"px";
element.innerHTML="";
element.addEventListener('mousedown',function(){
this$.buttonDown=true;
},true);
element.addEventListener('mouseup',function(){
this$.buttonDown=false;
},true);
element.addEventListener('mousemove',function(e){
this$._mouseX$5=e.clientX;
this$._mouseY$5=e.clientY;
},true);
return element;
},
"override public function get mouseX",function(){
return this._mouseX$5;
},
"override public function get mouseY",function(){
return this._mouseY$5;
},
"private var",{_stageHeight:0},
"private var",{_stageWidth:0},
"private var",{_mouseX:0},
"private var",{_mouseY:0},
"private var",{id:null},
"private var",{_frameRate:30},
"private var",{frameTimer:null},
"private var",{_quality:function(){return(flash.display.StageQuality.HIGH);}},
"private var",{_scaleMode:function(){return(flash.display.StageScaleMode.NO_SCALE);}},
"private var",{_align:function(){return(flash.display.StageAlign.TOP_LEFT);}},
"internal var",{buttonDown:false},
"private static var",{enterFrameSources:function(){return([]);}},
"internal static function addEnterFrameSource",function(displayObject){
$$private.enterFrameSources.push(displayObject);
},
"internal static function removeEnterFrameSource",function(displayObject){
var index=$$private.enterFrameSources.indexOf(displayObject);
if(index!==-1){
$$private.enterFrameSources.splice(index,1);
}
},
"private static function enterFrame",function(){
var enterFrameEvent=new flash.events.Event(flash.events.Event.ENTER_FRAME,false,false);
for(var i=0;i<$$private.enterFrameSources.length;i++){
var displayObject=$$private.enterFrameSources[i];
displayObject.dispatchEvent(enterFrameEvent);
}
},
];},["addEnterFrameSource","removeEnterFrameSource"],["flash.display.DisplayObjectContainer","Error","flash.display.StageDisplayState","Number","int","flash.geom.Rectangle","flash.utils.Timer","flash.events.TimerEvent","String","flash.display.Graphics","uint","js.HTMLElement","flash.display.StageQuality","flash.display.StageScaleMode","flash.display.StageAlign","flash.events.Event"], "0.8.0", "0.9.6"
);
// class flash.display.IGraphicsData
joo.classLoader.prepare("package flash.display",
"public interface IGraphicsData",1,function($$private){;return[
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.GradientType
joo.classLoader.prepare("package flash.display",
"public final class GradientType",1,function($$private){;return[
"public static const",{LINEAR:"linear"},
"public static const",{RADIAL:"radial"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.StageAlign
joo.classLoader.prepare("package flash.display",
"public final class StageAlign",1,function($$private){;return[
"public static const",{BOTTOM:"B"},
"public static const",{BOTTOM_LEFT:"BL"},
"public static const",{BOTTOM_RIGHT:"BR"},
"public static const",{LEFT:"L"},
"public static const",{RIGHT:"R"},
"public static const",{TOP:"T"},
"public static const",{TOP_LEFT:"TL"},
"public static const",{TOP_RIGHT:"TR"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.BitmapData
joo.classLoader.prepare("package flash.display",
"public class BitmapData implements flash.display.IBitmapDrawable",1,function($$private){var is=joo.is,as=joo.as;return[
"public native function get height",
"public function get rect",function(){
return new flash.geom.Rectangle(0,0,this.width,this.height);
},
"public native function get transparent",
"public native function get width",
"public function BitmapData",function(width,height,transparent,fillColor){this.elementChangeListeners$1=this.elementChangeListeners$1();if(arguments.length<4){if(arguments.length<3){transparent=true;}fillColor=0xFFFFFFFF;}
this.transparent=transparent;
this.width=width;
this.height=height;
this._alpha$1=transparent?(fillColor>>>24)/0xFF:1;
this._fillColor$1=fillColor&0xFFFFFF;
},
"public function applyFilter",function(sourceBitmapData,sourceRect,destPoint,filter){
throw new Error('not implemented');
},
"public function clone",function(){
throw new Error('not implemented');
},
"public function colorTransform",function(rect,colorTransform){
var context=this.getContext$1();
if(colorTransform.alphaOffset==0
&&colorTransform.redMultiplier>=0&&colorTransform.redMultiplier<=1
&&colorTransform.redMultiplier==colorTransform.greenMultiplier
&&colorTransform.redMultiplier==colorTransform.blueMultiplier
&&colorTransform.redMultiplier==colorTransform.alphaMultiplier){
if(colorTransform.redOffset>=0&&colorTransform.greenOffset>=0&&colorTransform.blueOffset>=0){
context.save();
context.setTransform(1,0,0,1,0,0);
var alpha=1;
if(colorTransform.redMultiplier==1){
context.globalCompositeOperation="lighter";
}else{
context.globalCompositeOperation="source-over";
alpha-=colorTransform.alphaMultiplier;
}
context.fillStyle="rgba("+
[colorTransform.redOffset,colorTransform.greenOffset,colorTransform.blueOffset,
alpha]
.join(",")+")";
context.fillRect(rect.x,rect.y,rect.width,rect.height);
context.restore();
return;
}
}
var input=context.getImageData(rect.x,rect.y,rect.width,rect.height);
var inputData=input.data;
var maps=colorTransform.getComponentMaps();
var i;
for(var m=0;m<4;++m){
var map=maps[m];
if(map){
for(i=inputData.length-4+m;i>=0;i-=4){
inputData[i]=map[inputData[i]];
}
}
}
context.putImageData(input,rect.x,rect.y);
},
"public function compare",function(otherBitmapData){
throw new Error('not implemented');
},
"public function copyChannel",function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel){
throw new Error('not implemented');
},
"public function copyPixels",function(sourceBitmapData,sourceRect,destPoint,
alphaBitmapData,alphaPoint,mergeAlpha){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){alphaBitmapData=null;}alphaPoint=null;}mergeAlpha=false;}
var context;
var destRect=new flash.geom.Rectangle(destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
destRect=destRect.intersection(this.rect);
destRect.width=Math.floor(destRect.width);
destRect.height=Math.floor(destRect.height);
if(destRect.width>0&&destRect.height>0){
var sx=sourceRect.x+(destRect.left-destPoint.x);
var sy=sourceRect.y+(destRect.top-destPoint.y);
if(!sourceBitmapData.isCanvas$1){
if(destRect.equals(this.rect)&&(!this.isCanvas$1||!mergeAlpha)){
this._fillColor$1=sourceBitmapData._fillColor$1;
this._alpha$1=sourceBitmapData._alpha$1;
this.image$1=sourceBitmapData.image$1;
this.imageOffsetX$1=sx+sourceBitmapData.imageOffsetX$1;
this.imageOffsetY$1=sy+sourceBitmapData.imageOffsetY$1;
if(this.elem$1){
this.asDiv();
}
}else{
context=this.getContext$1();
if(sourceBitmapData._alpha$1>0){
context.fillStyle=flash.display.Graphics.toRGBA(sourceBitmapData._fillColor$1,mergeAlpha?sourceBitmapData._alpha$1:1);
context.fillRect(destRect.x,destRect.y,destRect.width,destRect.height);
}
if(sourceBitmapData.image$1){
context.drawImage(sourceBitmapData.image$1,sx+sourceBitmapData.imageOffsetX$1,sy+sourceBitmapData.imageOffsetY$1,
destRect.width,destRect.height,
destRect.left,destRect.top,destRect.width,destRect.height);
}
}
}else{
context=this.getContext$1();
if(mergeAlpha){
context.drawImage(sourceBitmapData.asCanvas$1(),sx,sy,destRect.width,destRect.height,
destRect.x,destRect.y,destRect.width,destRect.height);
}else{
var imageData=sourceBitmapData.getContext$1().getImageData(sx,sy,destRect.width,destRect.height);
context.putImageData(imageData,destRect.x,destRect.y);
}
}
}
},
"public function dispose",function(){
throw new Error('not implemented');
},
"public function draw",function(source,matrix,colorTransform,
blendMode,clipRect,smoothing){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){matrix=null;}colorTransform=null;}blendMode=null;}clipRect=null;}smoothing=false;}
var bitmapData;
if(is(source,flash.display.Bitmap)){
bitmapData=(source).bitmapData;
}else{
bitmapData=as(source,flash.display.BitmapData);
}
var element=bitmapData?
bitmapData.image$1||bitmapData.elem$1||bitmapData.asDiv():(source).getElement();
var context=this.getContext$1();
if(matrix){
context.save();
context.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
}
if(is(element,js.HTMLImageElement)||is(element,js.HTMLCanvasElement)){
var offsetX;
var offsetY;
if(bitmapData){
offsetX=bitmapData.imageOffsetX$1;
offsetY=bitmapData.imageOffsetY$1;
}else{
offsetX=parseInt(element.style.left,10)||0;
offsetY=parseInt(element.style.top,10)||0;
}
context.drawImage(element,offsetX,offsetY);
}else{
if(element.style.backgroundColor){
context.fillStyle=element.style.backgroundColor;
context.fillRect(0,0,source['width'],source['height']);
}
var text=element['textContent'];
if(text){
context.fillStyle=element.style.color;
context.font=element.style.font;
context.textBaseline="top";
context.fillText(text,0,0);
}
}
if(matrix){
context.restore();
}
},
"public function fillRect",function(rect,color){
var alpha=(color>>24&0xFF)/0xFF;
color=color&0xFFFFFF;
if(!this.isCanvas$1&&rect.equals(this.rect)){
this._fillColor$1=color;
this._alpha$1=alpha;
this.image$1=null;
if(this.elem$1){
this.asDiv();
}
return;
}
var context=this.getContext$1();
context.save();
context.setTransform(1,0,0,1,0,0);
if(alpha==0){
context.clearRect(rect.x,rect.y,rect.width,rect.height);
}else{
context.fillStyle="rgba("+
[color>>16&0xFF,color>>8&0xFF,color&0xFF,alpha]
.join(",")+")";
context.globalCompositeOperation="copy";
context.fillRect(rect.x,rect.y,rect.width,rect.height);
}
context.restore();
context.globalCompositeOperation="source-over";
},
"public function floodFill",function(x,y,color){
throw new Error('not implemented');
},
"public function generateFilterRect",function(sourceRect,filter){
throw new Error('not implemented');
},
"public function getColorBoundsRect",function(mask,color,findColor){if(arguments.length<3){findColor=true;}
throw new Error('not implemented');
},
"public function getPixel",function(x,y){
if(this.rect.contains(x,y)){
var data=this.getContext$1().getImageData(x,y,1,1).data;
return data[0]<<16|data[1]<<8|data[2];
}
return 0;
},
"public function getPixel32",function(x,y){
if(this.rect.contains(x,y)){
var data=this.getContext$1().getImageData(x,y,1,1).data;
return data[0]<<16|data[1]<<8|data[2]|data[3]<<24;
}
return 0;
},
"public function getPixels",function(rect){
throw new Error('not implemented');
},
"public function getVector",function(rect){
throw new Error('not implemented');
},
"public function histogram",function(hRect){if(arguments.length<1){hRect=null;}
throw new Error('not implemented');
},
"public function hitTest",function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold){if(arguments.length<5){if(arguments.length<4){secondBitmapDataPoint=null;}secondAlphaThreshold=1;}
throw new Error('not implemented');
},
"public function lock",function(){
},
"public function merge",function(sourceBitmapData,sourceRect,destPoint,redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier){
throw new Error('not implemented');
},
"public function noise",function(randomSeed,low,high,channelOptions,grayScale){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){low=0;}high=255;}channelOptions=7;}grayScale=false;}
throw new Error('not implemented');
},
"public function paletteMap",function(sourceBitmapData,sourceRect,destPoint,redArray,greenArray,blueArray,alphaArray){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){redArray=null;}greenArray=null;}blueArray=null;}alphaArray=null;}
throw new Error('not implemented');
},
"public function perlinNoise",function(baseX,baseY,numOctaves,randomSeed,stitch,fractalNoise,channelOptions,grayScale,offsets){if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){channelOptions=7;}grayScale=false;}offsets=null;}
throw new Error('not implemented');
},
"public function pixelDissolve",function(sourceBitmapData,sourceRect,destPoint,randomSeed,numPixels,fillColor){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){randomSeed=0;}numPixels=0;}fillColor=0;}
throw new Error('not implemented');
},
"public function scroll",function(x,y){
throw new Error('not implemented');
},
"public function setPixel",function(x,y,color){
if(this.rect.contains(x,y)){
var context=this.getContext$1();
var imageData=context.createImageData(1,1);
imageData.data[0]=color>>16&0xFF;
imageData.data[1]=color>>8&0xFF;
imageData.data[2]=color&0xFF;
imageData.data[3]=0xFF;
context.putImageData(imageData,x,y);
}
},
"public function setPixel32",function(x,y,color){
if(this.rect.contains(x,y)){
var context=this.getContext$1();
var imageData=context.createImageData(1,1);
imageData.data[0]=color>>16&0xFF;
imageData.data[1]=color>>8&0xFF;
imageData.data[2]=color&0xFF;
imageData.data[3]=color>>24&0xFF;
context.putImageData(imageData,x,y);
}
},
"public function setPixels",function(rect,inputByteArray){
throw new Error('not implemented');
},
"public function setVector",function(rect,inputVector){
throw new Error('not implemented');
},
"public function threshold",function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){color=0;}mask=0xFFFFFFFF;}copySource=false;}
throw new Error('not implemented');
},
"public function unlock",function(changeRect){if(arguments.length<1){changeRect=null;}
},
"public native function set transparent",
"public native function set width",
"public native function set height",
"private const",{elementChangeListeners:function(){return([]);}},
"internal function getElement",function(){
if(!this.elem$1){
return this.asDiv();
}
return this.elem$1;
},
"public static function fromImg",function(img){
var bitmapData=new flash.display.BitmapData(img.width,img.height,true,0);
bitmapData.image$1=img;
return bitmapData;
},
"internal function getImage",function(){
if(this.image$1)
return this.image$1;
var img=new js.Image();
if(this.isCanvas$1){
img.src=(this.elem$1).toDataURL();
}else{
return null;
}
return img;
},
"public function asDiv",function(){
var url;
if(!this.elem$1||this.isCanvas$1){
if(this.isCanvas$1){
url=this.asCanvas$1().toDataURL();
}
this.isCanvas$1=false;
var div=(window.document.createElement("DIV"));
div.style.position="absolute";
div.style.width=this.width+"px";
div.style.height=this.height+"px";
this.changeElement$1(div);
}
if(this.image$1){
url=this.image$1.src;
}
this.elem$1.style.backgroundColor=flash.display.Graphics.toRGBA(this._fillColor$1,this._alpha$1);
this.elem$1.style.backgroundImage=url?"url('"+url+"')":"none";
return this.elem$1;
},
"private function getContext",function(){
return(this.asCanvas$1().getContext("2d"));
},
"private function asCanvas",function(){
if(!this.isCanvas$1){
this.isCanvas$1=true;
var canvas=(window.document.createElement("canvas"));
canvas.width=this.width;
canvas.height=this.height;
canvas.style.position="absolute";
var context=(canvas.getContext("2d"));
if(this._alpha$1>0||!this.transparent){
context.save();
context.fillStyle=flash.display.Graphics.toRGBA(this._fillColor$1,this._alpha$1);
context.fillRect(0,0,this.width,this.height);
context.restore();
}
if(this.image$1){
context.drawImage(this.image$1,this.imageOffsetX$1,this.imageOffsetY$1,this.width,this.height,0,0,this.width,this.height);
this.image$1=null;
}
this.changeElement$1(canvas);
}
return(this.elem$1);
},
"internal function addElementChangeListener",function(listener){
this.elementChangeListeners$1.push(listener);
},
"internal function removeElementChangeListener",function(listener){
var listenerIndex=this.elementChangeListeners$1.indexOf(listener);
if(listenerIndex!==-1){
this.elementChangeListeners$1.slice(listenerIndex,1);
}
},
"private function changeElement",function(elem){
this.elem$1=elem;
for(var i=0;i<this.elementChangeListeners$1.length;i++){
this.elementChangeListeners$1[i](elem);
}
},
"private var",{_fillColor:0},
"private var",{_alpha:NaN},
"private var",{elem:null},
"private var",{isCanvas:false},
"private var",{image:null},
"private var",{imageOffsetX:0},
"private var",{imageOffsetY:0},
];},["fromImg"],["flash.display.IBitmapDrawable","flash.geom.Rectangle","Error","Math","flash.display.Graphics","flash.display.Bitmap","flash.display.DisplayObject","js.HTMLImageElement","js.HTMLCanvasElement","js.Image","js.HTMLElement","js.CanvasRenderingContext2D"], "0.8.0", "0.9.6"
);
// class flash.display.FrameLabel
joo.classLoader.prepare("package flash.display",
"public final class FrameLabel",1,function($$private){;return[
"public function get frame",function(){
return this._frame$1;
},
"public function get name",function(){
return this._name$1;
},
"public function FrameLabel",function(){
},
"private var",{_frame:0},
"private var",{_name:null},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.GraphicsPathCommand
joo.classLoader.prepare("package flash.display",
"public final class GraphicsPathCommand",1,function($$private){;return[
"public static const",{CURVE_TO:3},
"public static const",{LINE_TO:2},
"public static const",{MOVE_TO:1},
"public static const",{NO_OP:0},
"public static const",{WIDE_LINE_TO:5},
"public static const",{WIDE_MOVE_TO:4},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.BitmapDataChannel
joo.classLoader.prepare("package flash.display",
"public final class BitmapDataChannel",1,function($$private){;return[
"public static const",{ALPHA:8},
"public static const",{BLUE:4},
"public static const",{GREEN:2},
"public static const",{RED:1},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.StageDisplayState
joo.classLoader.prepare("package flash.display",
"public final class StageDisplayState",1,function($$private){;return[
"public static const",{FULL_SCREEN:"fullScreen"},
"public static const",{NORMAL:"normal"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.Sprite
joo.classLoader.prepare("package flash.display",
"public class Sprite extends flash.display.DisplayObjectContainer",5,function($$private){;return[
"public function get buttonMode",function(){
return this._buttonMode$5;
},
"public function set buttonMode",function(value){
this._buttonMode$5=value;
this.updateCursor$5();
},
"public function get dropTarget",function(){
throw new Error('not implemented');
},
"public function get graphics",function(){
if(!this._graphics$5){
this._graphics$5=new flash.display.Graphics();
var canvas=this._graphics$5.canvas;
var element=this.getElement();
if(element.firstChild){
element.insertBefore(canvas,element.firstChild);
}else{
element.appendChild(canvas);
}
}
return this._graphics$5;
},
"public function get hitArea",function(){
throw new Error('not implemented');
},
"public function set hitArea",function(value){
throw new Error('not implemented');
},
"public function get soundTransform",function(){
throw new Error('not implemented');
},
"public function set soundTransform",function(value){
throw new Error('not implemented');
},
"public function get useHandCursor",function(){
return this._useHandCursor$5;
},
"public function set useHandCursor",function(value){
this._useHandCursor$5=value;
this.updateCursor$5();
},
"public function Sprite",function(){
flash.display.DisplayObjectContainer.call(this);
},
"public function startDrag",function(lockCenter,bounds){if(arguments.length<2){if(arguments.length<1){lockCenter=false;}bounds=null;}
throw new Error('not implemented');
},
"public function startTouchDrag",function(touchPointID,lockCenter,bounds){if(arguments.length<3){if(arguments.length<2){lockCenter=false;}bounds=null;}
throw new Error('not implemented');
},
"public function stopDrag",function(){
throw new Error('not implemented');
},
"public function stopTouchDrag",function(touchPointID){
throw new Error('not implemented');
},
"override public function set transform",function(value){
this.transform$5=value;
var m=value.matrix;
if(m){
this.graphics.renderingContext.setTransform(m.a,m.b,m.c,m.d,m.tx,m.ty);
}
},
"private function updateCursor",function(){
this.getElement().style.cursor=this.buttonMode&&this.useHandCursor?'pointer':'default';
},
"private var",{_graphics:null},
"private var",{_buttonMode:false},
"private var",{_useHandCursor:false},
];},[],["flash.display.DisplayObjectContainer","Error","flash.display.Graphics"], "0.8.0", "0.9.6"
);
// class flash.display.ShaderJob
joo.classLoader.prepare("package flash.display",
{Event:{name:"complete",type:"flash.events.ShaderEvent"}},
"public class ShaderJob extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get height",function(){
throw new Error('not implemented');
},
"public function set height",function(value){
throw new Error('not implemented');
},
"public function get progress",function(){
throw new Error('not implemented');
},
"public function get shader",function(){
throw new Error('not implemented');
},
"public function set shader",function(value){
throw new Error('not implemented');
},
"public function get target",function(){
throw new Error('not implemented');
},
"public function set target",function(value){
throw new Error('not implemented');
},
"public function get width",function(){
throw new Error('not implemented');
},
"public function set width",function(value){
throw new Error('not implemented');
},
"public function ShaderJob",function(shader,target,width,height){flash.events.EventDispatcher.call(this);if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){shader=null;}target=null;}width=0;}height=0;}
throw new Error('not implemented');
},
"public function cancel",function(){
throw new Error('not implemented');
},
"public function start",function(waitForCompletion){if(arguments.length<1){waitForCompletion=false;}
throw new Error('not implemented');
},
];},[],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.display.SpreadMethod
joo.classLoader.prepare("package flash.display",
"public final class SpreadMethod",1,function($$private){;return[
"public static const",{PAD:"pad"},
"public static const",{REFLECT:"reflect"},
"public static const",{REPEAT:"repeat"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.GraphicsTrianglePath
joo.classLoader.prepare("package flash.display",
"public final class GraphicsTrianglePath implements flash.display.IGraphicsPath,flash.display.IGraphicsData",1,function($$private){;return[
"public function get culling",function(){
throw new Error('not implemented');
},
"public function set culling",function(value){
throw new Error('not implemented');
},
"public var",{indices:null},
"public var",{uvtData:null},
"public var",{vertices:null},
"public function GraphicsTrianglePath",function(vertices,indices,uvtData,culling){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){vertices=null;}indices=null;}uvtData=null;}culling="none";}
throw new Error('not implemented');
},
];},[],["flash.display.IGraphicsPath","flash.display.IGraphicsData","Error"], "0.8.0", "0.9.6"
);
// class flash.display.DisplayObjectContainer
joo.classLoader.prepare("package flash.display",
"public class DisplayObjectContainer extends flash.display.InteractiveObject",4,function($$private){var as=joo.as,assert=joo.assert;return[function(){joo.classLoader.init(flash.events.Event);},
"public function get mouseChildren",function(){
throw new Error('not implemented');
},
"public function set mouseChildren",function(value){
throw new Error('not implemented');
},
"public function get numChildren",function(){
return this.children$4.length;
},
"public function get tabChildren",function(){
throw new Error('not implemented');
},
"public function set tabChildren",function(value){
throw new Error('not implemented');
},
"public function get textSnapshot",function(){
throw new Error('not implemented');
},
"public function DisplayObjectContainer",function(){
this.children$4=[];
flash.display.InteractiveObject.call(this);
},
"public function addChild",function(child){
return this.addChildAt(child,this.children$4.length);
},
"public function addChildAt",function(child,index){
var wasInStage=! !child.stage;
this.internalAddChildAt(child,index);
var isInStage=! !this.stage;
if(wasInStage!==isInStage){
child.broadcastEvent(new flash.events.Event(isInStage?flash.events.Event.ADDED_TO_STAGE:flash.events.Event.REMOVED_FROM_STAGE,false,false));
}
return child;
},
"public function internalAddChildAt",function(child,index){
var containerElement=this.getElement();
var childElement=child.getElement();
assert(containerElement.childNodes.length===this.children$4.length, "DisplayObjectContainer.as", 263, 5);
var oldParent=child.parent;
if(oldParent){
oldParent.removeChild(child);
}else{
assert(!childElement.parentNode||childElement.parentNode===childElement.ownerDocument.body, "DisplayObjectContainer.as", 268, 7);
}
var refChild=this.children$4[index];
this.children$4.splice(index,0,child);
child.setParent(this);
if(refChild){
containerElement.insertBefore(childElement,refChild.getElement());
}else{
containerElement.appendChild(childElement);
}
assert(containerElement.childNodes.length===this.children$4.length, "DisplayObjectContainer.as", 279, 5);
},
"public function areInaccessibleObjectsUnderPoint",function(point){
throw new Error('not implemented');
},
"public function contains",function(child){
return child===this||this.children$4.some(function(someChild){
var container=as(someChild,flash.display.DisplayObjectContainer);
return container?container.contains(child):someChild===child;
});
},
"public function getChildAt",function(index){
return as(this.children$4[index],flash.display.DisplayObject);
},
"public function getChildByName",function(name){
for(var i=0;i<this.children$4.length;i++){
var child=this.children$4[i];
if(child.name===name){
return child;
}
}
return null;
},
"public function getChildIndex",function(child){
var index=this.children$4.indexOf(child);
if(index==-1){
throw new ArgumentError();
}
return index;
},
"public function getObjectsUnderPoint",function(point){
throw new Error('not implemented');
},
"public function removeChild",function(child){
return this.removeChildAt(this.getChildIndex(child));
},
"public function removeChildAt",function(index){
var containerElement=this.getElement();
assert(containerElement.childNodes.length===this.children$4.length, "DisplayObjectContainer.as", 587, 5);
var child=this.children$4.splice(index,1)[0];
child.setParent(null);
var childElement=child.getElement();
containerElement.removeChild(childElement);
assert(!childElement.parentNode, "DisplayObjectContainer.as", 593, 5);
assert(containerElement.childNodes.length===this.children$4.length, "DisplayObjectContainer.as", 594, 5);
return child;
},
"public function setChildIndex",function(child,index){
this.removeChild(child);
this.addChildAt(child,index);
},
"public function swapChildren",function(child1,child2){
var child1Index=this.children$4.indexOf(child1);
var child2Index=this.children$4.indexOf(child2);
if(child1Index===-1||child2Index===-1){
throw new ArgumentError;
}
this.swapChildrenAt(child1Index,child2Index);
},
"public function swapChildrenAt",function(index1,index2){
if(index1>index2){
this.swapChildrenAt(index2,index1);
}else if(index1<index2){
var containerElement=this.getElement();
assert(containerElement.childNodes.length===this.children$4.length, "DisplayObjectContainer.as", 734, 7);
var child1=this.children$4[index1];
var child2=this.children$4[index2];
this.children$4.splice(index1,1,child2);
this.children$4.splice(index2,1,child1);
var child1Element=child1.getElement();
var child2Element=child2.getElement();
var refElement=(child2Element.nextSibling);
containerElement.insertBefore(child2Element,child1Element);
if(refElement){
containerElement.insertBefore(child1Element,refElement);
}else{
containerElement.appendChild(child1Element);
}
assert(containerElement.childNodes.length===this.children$4.length, "DisplayObjectContainer.as", 749, 7);
}
},
"override public function get height",function(){
var _height=this.height$4||0;
for(var i=0;i<this.children$4.length;i++){
var child=this.children$4[i];
var childHeight=child.y+child.height;
if(childHeight>_height){
_height=childHeight;
}
}
return _height;
},
"override public function get width",function(){
var _width=this.width$4||0;
for(var i=0;i<this.children$4.length;i++){
var child=this.children$4[i];
var childWidth=child.x+child.width;
if(childWidth>_width){
_width=childWidth;
}
}
return _width;
},
"override public function broadcastEvent",function(event){
if(this.dispatchEvent(event)){
this.children$4.every(function(child){
return child.broadcastEvent(event);
});
return true;
}
return false;
},
"private var",{children:null},
];},[],["flash.display.InteractiveObject","Error","flash.events.Event","flash.display.DisplayObject","ArgumentError","js.Element"], "0.8.0", "0.9.6"
);
// class flash.display.InteractiveObject
joo.classLoader.prepare("package flash.display",
{Event:{name:"clear",type:"flash.events.Event"}},
{Event:{name:"click",type:"flash.events.MouseEvent"}},
{Event:{name:"copy",type:"flash.events.Event"}},
{Event:{name:"cut",type:"flash.events.Event"}},
{Event:{name:"doubleClick",type:"flash.events.MouseEvent"}},
{Event:{name:"focusIn",type:"flash.events.FocusEvent"}},
{Event:{name:"focusOut",type:"flash.events.FocusEvent"}},
{Event:{name:"gesturePan",type:"flash.events.TransformGestureEvent"}},
{Event:{name:"gesturePressAndTap",type:"flash.events.PressAndTapGestureEvent"}},
{Event:{name:"gestureRotate",type:"flash.events.TransformGestureEvent"}},
{Event:{name:"gestureSwipe",type:"flash.events.TransformGestureEvent"}},
{Event:{name:"gestureTwoFingerTap",type:"flash.events.GestureEvent"}},
{Event:{name:"gestureZoom",type:"flash.events.TransformGestureEvent"}},
{Event:{name:"keyDown",type:"flash.events.KeyboardEvent"}},
{Event:{name:"keyFocusChange",type:"flash.events.FocusEvent"}},
{Event:{name:"keyUp",type:"flash.events.KeyboardEvent"}},
{Event:{name:"mouseDown",type:"flash.events.MouseEvent"}},
{Event:{name:"mouseFocusChange",type:"flash.events.FocusEvent"}},
{Event:{name:"mouseMove",type:"flash.events.MouseEvent"}},
{Event:{name:"mouseOut",type:"flash.events.MouseEvent"}},
{Event:{name:"mouseOver",type:"flash.events.MouseEvent"}},
{Event:{name:"mouseUp",type:"flash.events.MouseEvent"}},
{Event:{name:"mouseWheel",type:"flash.events.MouseEvent"}},
{Event:{name:"paste",type:"flash.events.Event"}},
{Event:{name:"rollOut",type:"flash.events.MouseEvent"}},
{Event:{name:"rollOver",type:"flash.events.MouseEvent"}},
{Event:{name:"selectAll",type:"flash.events.Event"}},
{Event:{name:"softKeyboardActivate",type:"flash.events.SoftKeyboardEvent"}},
{Event:{name:"softKeyboardActivating",type:"flash.events.SoftKeyboardEvent"}},
{Event:{name:"softKeyboardDeactivate",type:"flash.events.SoftKeyboardEvent"}},
{Event:{name:"tabChildrenChange",type:"flash.events.Event"}},
{Event:{name:"tabEnabledChange",type:"flash.events.Event"}},
{Event:{name:"tabIndexChange",type:"flash.events.Event"}},
{Event:{name:"textInput",type:"flash.events.TextEvent"}},
{Event:{name:"touchBegin",type:"flash.events.TouchEvent"}},
{Event:{name:"touchEnd",type:"flash.events.TouchEvent"}},
{Event:{name:"touchMove",type:"flash.events.TouchEvent"}},
{Event:{name:"touchOut",type:"flash.events.TouchEvent"}},
{Event:{name:"touchOver",type:"flash.events.TouchEvent"}},
{Event:{name:"touchRollOut",type:"flash.events.TouchEvent"}},
{Event:{name:"touchRollOver",type:"flash.events.TouchEvent"}},
{Event:{name:"touchTap",type:"flash.events.TouchEvent"}},
"public class InteractiveObject extends flash.display.DisplayObject",3,function($$private){;return[
"public native function get accessibilityImplementation",
"public native function set accessibilityImplementation",
"public native function get contextMenu",
"public native function set contextMenu",
"public native function get doubleClickEnabled",
"public native function set doubleClickEnabled",
"public function get focusRect",function(){
return this._focusRect$3;
},
"public function set focusRect",function(value){
this._focusRect$3=value===null?null:Boolean(value);
},
"public native function get mouseEnabled",
"public native function set mouseEnabled",
"public function get needsSoftKeyboard",function(){
throw new Error('not implemented');
},
"public function set needsSoftKeyboard",function(value){
throw new Error('not implemented');
},
"public function get softKeyboardInputAreaOfInterest",function(){
throw new Error('not implemented');
},
"public function set softKeyboardInputAreaOfInterest",function(value){
throw new Error('not implemented');
},
"public native function get tabEnabled",
"public native function set tabEnabled",
"public native function get tabIndex",
"public native function set tabIndex",
"public function InteractiveObject",function(){flash.display.DisplayObject.call(this);
if(this['constructor']===flash.display.InteractiveObject){
throw new ArgumentError();
}
},
"public function requestSoftKeyboard",function(){
throw new Error('not implemented');
},
"private var",{_focusRect:null},
];},[],["flash.display.DisplayObject","Boolean","Error","ArgumentError"], "0.8.0", "0.9.6"
);
// class flash.display.InterpolationMethod
joo.classLoader.prepare("package flash.display",
"public final class InterpolationMethod",1,function($$private){;return[
"public static const",{LINEAR_RGB:"linearRGB"},
"public static const",{RGB:"rgb"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.ShaderPrecision
joo.classLoader.prepare("package flash.display",
"public final class ShaderPrecision",1,function($$private){;return[
"public static const",{FAST:"fast"},
"public static const",{FULL:"full"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.BlendMode
joo.classLoader.prepare("package flash.display",
"public final class BlendMode",1,function($$private){;return[
"public static const",{ADD:"add"},
"public static const",{ALPHA:"alpha"},
"public static const",{DARKEN:"darken"},
"public static const",{DIFFERENCE:"difference"},
"public static const",{ERASE:"erase"},
"public static const",{HARDLIGHT:"hardlight"},
"public static const",{INVERT:"invert"},
"public static const",{LAYER:"layer"},
"public static const",{LIGHTEN:"lighten"},
"public static const",{MULTIPLY:"multiply"},
"public static const",{NORMAL:"normal"},
"public static const",{OVERLAY:"overlay"},
"public static const",{SCREEN:"screen"},
"public static const",{SHADER:"shader"},
"public static const",{SUBTRACT:"subtract"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.AVM1Movie
joo.classLoader.prepare("package flash.display",
"public class AVM1Movie extends flash.display.DisplayObject",3,function($$private){;return[
];},[],["flash.display.DisplayObject"], "0.8.0", "0.9.6"
);
// class flash.display.SWFVersion
joo.classLoader.prepare("package flash.display",
"public final class SWFVersion",1,function($$private){;return[
"public static const",{FLASH1:1},
"public static const",{FLASH10:10},
"public static const",{FLASH11:11},
"public static const",{FLASH2:2},
"public static const",{FLASH3:3},
"public static const",{FLASH4:4},
"public static const",{FLASH5:5},
"public static const",{FLASH6:6},
"public static const",{FLASH7:7},
"public static const",{FLASH8:8},
"public static const",{FLASH9:9},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.GraphicsEndFill
joo.classLoader.prepare("package flash.display",
"public final class GraphicsEndFill implements flash.display.IGraphicsFill,flash.display.IGraphicsData",1,function($$private){;return[
"public function GraphicsEndFill",function(){
throw new Error('not implemented');
},
];},[],["flash.display.IGraphicsFill","flash.display.IGraphicsData","Error"], "0.8.0", "0.9.6"
);
// class flash.display.ActionScriptVersion
joo.classLoader.prepare("package flash.display",
"public final class ActionScriptVersion",1,function($$private){;return[
"public static const",{ACTIONSCRIPT2:2},
"public static const",{ACTIONSCRIPT3:3},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.GraphicsPathWinding
joo.classLoader.prepare("package flash.display",
"public final class GraphicsPathWinding",1,function($$private){;return[
"public static const",{EVEN_ODD:"evenOdd"},
"public static const",{NON_ZERO:"nonZero"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.GraphicsPath
joo.classLoader.prepare("package flash.display",
"public final class GraphicsPath implements flash.display.IGraphicsPath,flash.display.IGraphicsData",1,function($$private){;return[
"public var",{commands:null},
"public var",{data:null},
"public function get winding",function(){
throw new Error('not implemented');
},
"public function set winding",function(value){
throw new Error('not implemented');
},
"public function GraphicsPath",function(commands,data,winding){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){commands=null;}data=null;}winding="evenOdd";}
throw new Error('not implemented');
},
"public function curveTo",function(controlX,controlY,anchorX,anchorY){
throw new Error('not implemented');
},
"public function lineTo",function(x,y){
throw new Error('not implemented');
},
"public function moveTo",function(x,y){
throw new Error('not implemented');
},
"public function wideLineTo",function(x,y){
throw new Error('not implemented');
},
"public function wideMoveTo",function(x,y){
throw new Error('not implemented');
},
];},[],["flash.display.IGraphicsPath","flash.display.IGraphicsData","Error"], "0.8.0", "0.9.6"
);
// class flash.display.Loader
joo.classLoader.prepare("package flash.display",
"public class Loader extends flash.display.DisplayObjectContainer",5,function($$private){;return[
"public function get content",function(){
return this.contentLoaderInfo.content;
},
"public native function get contentLoaderInfo",
"public function get uncaughtErrorEvents",function(){
throw new Error('not implemented');
},
"public function Loader",function(){flash.display.DisplayObjectContainer.call(this);
this['contentLoaderInfo']=new flash.display.LoaderInfo(this);
},
"public function close",function(){
},
"public function load",function(request,context){if(arguments.length<2){context=null;}
this.contentLoaderInfo.setUrl(request.url);
this.contentLoaderInfo.load();
},
"public function loadBytes",function(bytes,context){if(arguments.length<2){context=null;}
this.contentLoaderInfo.setBytes(bytes);
this.contentLoaderInfo.setUrl("data:image/gif;base64,"+joo.flash.util.Base64.encodeBytes(bytes));
this.contentLoaderInfo.load();
},
"public function unload",function(){
this.contentLoaderInfo.setContent(null);
},
"public function unloadAndStop",function(gc){if(arguments.length<1){gc=true;}
throw new Error('not implemented');
},
];},[],["flash.display.DisplayObjectContainer","Error","flash.display.LoaderInfo","joo.flash.util.Base64"], "0.8.0", "0.9.6"
);
// class flash.display.ShaderParameterType
joo.classLoader.prepare("package flash.display",
"public final class ShaderParameterType",1,function($$private){;return[
"public static const",{BOOL:"bool"},
"public static const",{BOOL2:"bool2"},
"public static const",{BOOL3:"bool3"},
"public static const",{BOOL4:"bool4"},
"public static const",{FLOAT:"float"},
"public static const",{FLOAT2:"float2"},
"public static const",{FLOAT3:"float3"},
"public static const",{FLOAT4:"float4"},
"public static const",{INT:"int"},
"public static const",{INT2:"int2"},
"public static const",{INT3:"int3"},
"public static const",{INT4:"int4"},
"public static const",{MATRIX2X2:"matrix2x2"},
"public static const",{MATRIX3X3:"matrix3x3"},
"public static const",{MATRIX4X4:"matrix4x4"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.ShaderParameter
joo.classLoader.prepare("package flash.display",
"public final dynamic class ShaderParameter",1,function($$private){;return[
"public function get index",function(){
throw new Error('not implemented');
},
"public function get type",function(){
throw new Error('not implemented');
},
"public function get value",function(){
throw new Error('not implemented');
},
"public function set value",function(value){
throw new Error('not implemented');
},
"public function ShaderParameter",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.display.ShaderInput
joo.classLoader.prepare("package flash.display",
"public final dynamic class ShaderInput",1,function($$private){;return[
"public function get channels",function(){
throw new Error('not implemented');
},
"public function get height",function(){
throw new Error('not implemented');
},
"public function set height",function(value){
throw new Error('not implemented');
},
"public function get index",function(){
throw new Error('not implemented');
},
"public function get input",function(){
throw new Error('not implemented');
},
"public function set input",function(value){
throw new Error('not implemented');
},
"public function get width",function(){
throw new Error('not implemented');
},
"public function set width",function(value){
throw new Error('not implemented');
},
"public function ShaderInput",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.display.GraphicsSolidFill
joo.classLoader.prepare("package flash.display",
"public final class GraphicsSolidFill implements flash.display.IGraphicsFill,flash.display.IGraphicsData",1,function($$private){;return[
"public var",{alpha:1.0},
"public var",{color:0},
"public function GraphicsSolidFill",function(color,alpha){if(arguments.length<2){if(arguments.length<1){color=0;}alpha=1.0;}
throw new Error('not implemented');
},
];},[],["flash.display.IGraphicsFill","flash.display.IGraphicsData","Error"], "0.8.0", "0.9.6"
);
// class flash.display.ShaderData
joo.classLoader.prepare("package flash.display",
"public final dynamic class ShaderData",1,function($$private){;return[
"public function ShaderData",function(byteCode){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.display.LineScaleMode
joo.classLoader.prepare("package flash.display",
"public final class LineScaleMode",1,function($$private){;return[
"public static const",{HORIZONTAL:"horizontal"},
"public static const",{NONE:"none"},
"public static const",{NORMAL:"normal"},
"public static const",{VERTICAL:"vertical"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.SimpleButton
joo.classLoader.prepare("package flash.display",
"public class SimpleButton extends flash.display.InteractiveObject",4,function($$private){;return[
"public native function get downState",
"public native function set downState",
"public function get enabled",function(){
return this._enabled$4;
},
"public function set enabled",function(value){
this._enabled$4=value;
this.getElement().disabled=!value;
},
"public native function get hitTestState",
"public native function set hitTestState",
"public native function get overState",
"public native function set overState",
"public native function get soundTransform",
"public native function set soundTransform",
"public native function get trackAsMenu",
"public native function set trackAsMenu",
"public native function get upState",
"public native function set upState",
"public native function get useHandCursor",
"public native function set useHandCursor",
"public function SimpleButton",function(upState,overState,downState,hitTestState){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){upState=null;}overState=null;}downState=null;}hitTestState=null;}
flash.display.InteractiveObject.call(this);
this.upState=upState;
this.overState=overState;
this.downState=downState;
this.hitTestState=hitTestState;
},
"override protected function getElementName",function(){
return"button";
},
"private var",{_enabled:true},
];},[],["flash.display.InteractiveObject"], "0.8.0", "0.9.6"
);
// class flash.display.DisplayObject
joo.classLoader.prepare("package flash.display",
{Event:{name:"added",type:"flash.events.Event"}},
{Event:{name:"addedToStage",type:"flash.events.Event"}},
{Event:{name:"enterFrame",type:"flash.events.Event"}},
{Event:{name:"exitFrame",type:"flash.events.Event"}},
{Event:{name:"frameConstructed",type:"flash.events.Event"}},
{Event:{name:"removed",type:"flash.events.Event"}},
{Event:{name:"removedFromStage",type:"flash.events.Event"}},
{Event:{name:"render",type:"flash.events.Event"}},
"public class DisplayObject extends flash.events.EventDispatcher implements flash.display.IBitmapDrawable",2,function($$private){var $$bound=joo.boundMethod,trace=joo.trace;return[function(){joo.classLoader.init(flash.events.KeyboardEvent,flash.display.BlendMode,flash.events.MouseEvent,flash.events.Event);},
"public function get accessibilityProperties",function(){
throw new Error('not implemented');
},
"public function set accessibilityProperties",function(value){
throw new Error('not implemented');
},
"public function get alpha",function(){
return this._alpha$2;
},
"public function set alpha",function(value){
this._alpha$2=value;
this.getElement().style.opacity=String(value);
},
"public function get blendMode",function(){
return this._blendMode$2;
},
"public function set blendMode",function(value){
this._blendMode$2=value;
},
"public function set blendShader",function(value){
throw new Error('not implemented');
},
"public function get cacheAsBitmap",function(){
return this._cacheAsBitmap$2;
},
"public function set cacheAsBitmap",function(value){
this._cacheAsBitmap$2=value;
},
"public function get filters",function(){
return this._filters$2.concat();
},
"public function set filters",function(value){
this._filters$2=value.concat();
if(value.length>0){
this._cacheAsBitmap$2=true;
}
},
"public function get height",function(){
return this._height*this._scaleY$2;
},
"public function set height",function(value){
var style=this.getElement().style;
var oldHeight=this.height;
if(!isNaN(value)){
if(style.paddingTop){
value-=$$private.styleLengthToNumber(style.paddingTop);
}
if(style.paddingBottom){
value-=$$private.styleLengthToNumber(style.paddingBottom);
}
}
style.height=$$private.numberToStyleLength(value);
if(oldHeight&&value){
this._scaleY$2=value/oldHeight;
}
},
"public native function get loaderInfo",
"public function get mask",function(){
throw new Error('not implemented');
},
"public function set mask",function(value){
throw new Error('not implemented');
},
"public function get mouseX",function(){
return this.stage?this.stage.mouseX/this._scaleX$2:NaN;
},
"public function get mouseY",function(){
return this.stage?this.stage.mouseY/this._scaleY$2:NaN;
},
"public native function get name",
"public native function set name",
"public function get opaqueBackground",function(){
throw new Error('not implemented');
},
"public function set opaqueBackground",function(value){
throw new Error('not implemented');
},
"public native function get parent",
"public function get root",function(){
var root=this;
while(root.parent){
root=root.parent;
}
return root;
},
"public function get rotation",function(){
return this._rotation$2;
},
"public function set rotation",function(value){
if(!value){
value=0;
}
if(value!==this._rotation$2){
this._rotation$2=value;
var style=this.getElement().style;
$$private.setProprietaryStyle(style,'transform',"rotate("+this.rotation+"deg)");
$$private.setProprietaryStyle(style,'transform-origin',"0pt 0pt");
}
},
"private static const",{BROWSER_PREFIXES:function(){return({'-moz-':1,'-webkit-':1,'-o':1,'-ms-':1});}},
"private static function setProprietaryStyle",function(style,property,value){
for(var browserPrefix in $$private.BROWSER_PREFIXES){
try{
style['setProperty'](browserPrefix+property,value,"");
}catch(e){
}
}
},
"protected function get vertical",function(){
return this._rotation$2===90||this._rotation$2===270;
},
"public function get rotationX",function(){
throw new Error('not implemented');
},
"public function set rotationX",function(value){
throw new Error('not implemented');
},
"public function get rotationY",function(){
throw new Error('not implemented');
},
"public function set rotationY",function(value){
throw new Error('not implemented');
},
"public function get rotationZ",function(){
throw new Error('not implemented');
},
"public function set rotationZ",function(value){
throw new Error('not implemented');
},
"public function get scale9Grid",function(){
throw new Error('not implemented');
},
"public function set scale9Grid",function(value){
throw new Error('not implemented');
},
"public function get scaleX",function(){
return this._scaleX$2;
},
"public function set scaleX",function(value){
var width=this.width;
if(width){
this.width=width*value/this._scaleX$2;
}else{
this._scaleX$2=value;
}
},
"public function get scaleY",function(){
return this._scaleY$2;
},
"public function set scaleY",function(value){
var height=this.height;
if(height){
this.height=height*value/this._scaleY$2;
}else{
this._scaleY$2=value;
}
},
"public function get scaleZ",function(){
throw new Error('not implemented');
},
"public function set scaleZ",function(value){
throw new Error('not implemented');
},
"public function get scrollRect",function(){
throw new Error('not implemented');
},
"public function set scrollRect",function(value){
throw new Error('not implemented');
},
"public function get stage",function(){
return this.parent?this.parent.stage:null;
},
"public function get transform",function(){
if(!this._transform$2)
this._transform$2=new flash.geom.Transform(this);
return this._transform$2;
},
"public function set transform",function(value){
this._transform$2=value;
},
"public function get visible",function(){
return this._visible$2;
},
"public function set visible",function(value){
this._visible$2=value;
this.getElement().style.display=this._visible$2?"":"none";
},
"public function get width",function(){
return this._width*this._scaleX$2;
},
"public function set width",function(value){
var style=this.getElement().style;
var oldWidth=this.width;
if(!isNaN(value)){
if(style.paddingLeft){
value-=$$private.styleLengthToNumber(style.paddingLeft);
}
if(style.paddingRight){
value-=$$private.styleLengthToNumber(style.paddingRight);
}
}
style.width=$$private.numberToStyleLength(value);
if(oldWidth&&value){
this._scaleX$2=value/oldWidth;
}
},
"public function get x",function(){
return this._x$2;
},
"public function set x",function(value){
this._x$2=value||0;
if(this._elem$2){
this._elem$2.style.left=this._x$2+"px";
}
},
"public function get y",function(){
return this._y$2;
},
"public function set y",function(value){
this._y$2=value||0;
if(this._elem$2){
this._elem$2.style.top=this._y$2+"px";
}
},
"public function get z",function(){
throw new Error('not implemented');
},
"public function set z",function(value){
throw new Error('not implemented');
},
"public function getBounds",function(targetCoordinateSpace){
var stageOffset=this.getStageOffset$2();
var targetStageOffset=targetCoordinateSpace.getStageOffset$2();
return new flash.geom.Rectangle(
stageOffset.x-targetStageOffset.x,
stageOffset.y-targetStageOffset.y,
this.width,this.height);
},
"public function getRect",function(targetCoordinateSpace){
throw new Error('not implemented');
},
"public function globalToLocal",function(point){
return point.subtract(this.getStageOffset$2());
},
"public function globalToLocal3D",function(point){
throw new Error('not implemented');
},
"public function hitTestObject",function(obj){
throw new Error('not implemented');
},
"public function hitTestPoint",function(x,y,shapeFlag){if(arguments.length<3){shapeFlag=false;}
throw new Error('not implemented');
},
"public function local3DToGlobal",function(point3d){
throw new Error('not implemented');
},
"public function localToGlobal",function(point){
return point.add(this.getStageOffset$2());
},
"protected function setParent",function(parent){
this['parent']=parent;
},
"public function broadcastEvent",function(event){
return this.dispatchEvent(event);
},
"private static const",{DOM_EVENT_TO_MOUSE_EVENT:function(){return({
'click':flash.events.MouseEvent.CLICK,
'dblclick':flash.events.MouseEvent.DOUBLE_CLICK,
'mousedown':flash.events.MouseEvent.MOUSE_DOWN,
'mouseup':flash.events.MouseEvent.MOUSE_UP,
'mousemove':flash.events.MouseEvent.MOUSE_MOVE,
'mouseover':flash.events.MouseEvent.MOUSE_OVER,
'mouseout':flash.events.MouseEvent.MOUSE_OUT,
'mousewheel':flash.events.MouseEvent.MOUSE_WHEEL
});}},
"private static const",{DOM_EVENT_TO_KEYBOARD_EVENT:function(){return({
'keydown':flash.events.KeyboardEvent.KEY_DOWN,
'keyup':flash.events.KeyboardEvent.KEY_UP
});}},
"private static const",{FLASH_EVENT_TO_DOM_EVENT:function(){return($$private.merge(
$$private.reverseMapping($$private.DOM_EVENT_TO_MOUSE_EVENT),
$$private.reverseMapping($$private.DOM_EVENT_TO_KEYBOARD_EVENT)));}},
"private static function merge",function(o1,o2){
var result={};
for(var m in o1){
result[m]=o1[m];
}
for(m in o2){
result[m]=o2[m];
}
return result;
},
"private static function reverseMapping",function(mapping){
var result={};
for(var m in mapping){
result[mapping[m]]=m;
}
return result;
},
"override public function addEventListener",function(type,listener,useCapture,
priority,useWeakReference){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){useCapture=false;}priority=0;}useWeakReference=false;}
var newEventType=!this.hasEventListener(type);
this.addEventListener$2(type,listener,useCapture,priority,useWeakReference);
var domEventType=$$private.FLASH_EVENT_TO_DOM_EVENT[type];
if(newEventType){
if(domEventType){
this.getElement().addEventListener(domEventType,$$bound(this,"transformAndDispatch$2"),useCapture);
}else if(type===flash.events.Event.ENTER_FRAME){
flash.display.Stage.addEnterFrameSource(this);
}
}
},
"override public function removeEventListener",function(type,listener,useCapture){if(arguments.length<3){useCapture=false;}
this.removeEventListener$2(type,listener,useCapture);
if(!this.hasEventListener(type)){
var domEventType=$$private.FLASH_EVENT_TO_DOM_EVENT[type];
if(domEventType){
this._elem$2.removeEventListener(domEventType,$$bound(this,"transformAndDispatch$2"),useCapture);
}else if(type===flash.events.Event.ENTER_FRAME){
flash.display.Stage.removeEnterFrameSource(this);
}
}
},
"private function transformAndDispatch",function(event){
var flashEvent;
var type=$$private.DOM_EVENT_TO_MOUSE_EVENT[event.type];
if(type){
flashEvent=new flash.events.MouseEvent(type,true,true,event.pageX-this.stage.x,event.pageY-this.stage.y,null,
event.ctrlKey,event.altKey,event.shiftKey,this.stage.buttonDown);
}else{
type=$$private.DOM_EVENT_TO_KEYBOARD_EVENT[event.type];
if(type){
flashEvent=new flash.events.KeyboardEvent(type,true,true,event['charCode'],event.keyCode||event['which'],0,
event.ctrlKey,event.altKey,event.shiftKey,event.ctrlKey,event.ctrlKey);
}
}
if(!flashEvent){
trace("Unmapped DOM event type "+event.type+" occured, ignoring.");
}
return this.dispatchEvent(flashEvent);
},
"private static function numberToStyleLength",function(value){
return isNaN(value)?"auto":(value+"px");
},
"private static function styleLengthToNumber",function(length){
return length=="auto"?NaN:Number(length.split("px")[0]);
},
"protected function createElement",function(){
var elem=(window.document.createElement(this.getElementName()));
elem.style.position="absolute";
elem.style.width="100%";
elem.style.left=this._x$2+"px";
elem.style.top=this._y$2+"px";
elem.style['MozUserSelect']='none';
elem.style['KhtmlUserSelect']='none';
elem['unselectable']='on';
elem['onselectstart']=function(){return false;};
return elem;
},
"protected function getElementName",function(){
return"div";
},
"public function hasElement",function(){
return! !this._elem$2;
},
"public function getElement",function(){
if(!this._elem$2){
this._elem$2=this.createElement();
}
return this._elem$2;
},
"protected function setElement",function(elem){
elem.style.left=this._x$2+"px";
elem.style.top=this._y$2+"px";
if(this._elem$2){
elem.style.width=this._elem$2.style.width;
elem.style.height=this._elem$2.style.height;
if(this.parent){
this.parent.getElement().replaceChild(elem,this._elem$2);
}
}
this._elem$2=elem;
},
"private function getStageOffset",function(){
var x=this._x$2;
var y=this._y$2;
for(var current=this.parent;current;current=current.parent){
x+=current.x;
y+=current.y;
}
return new flash.geom.Point(x,y);
},
"public function DisplayObject",function(){
flash.events.EventDispatcher.call(this);
this._filters$2=[];
this._blendMode$2=flash.display.BlendMode.NORMAL;
},
"private var",{_elem:null},
"private var",{_x:0,_y:0},
"protected var",{_width:0,_height:0},
"private var",{_scaleX:1},
"private var",{_scaleY:1},
"private var",{_transform:null},
"private var",{_rotation:0},
"private var",{_visible:true},
"private var",{_alpha:1},
"private var",{_filters:null},
"private var",{_cacheAsBitmap:false},
"private var",{_blendMode:null},
"private static var",{_loaderInfo:null},
];},[],["flash.events.EventDispatcher","flash.display.IBitmapDrawable","Error","String","flash.geom.Transform","flash.geom.Rectangle","flash.events.MouseEvent","flash.events.KeyboardEvent","flash.events.Event","flash.display.Stage","Number","js.HTMLElement","flash.geom.Point","flash.display.BlendMode"], "0.8.0", "0.9.6"
);
// class flash.display.GraphicsStroke
joo.classLoader.prepare("package flash.display",
"public final class GraphicsStroke implements flash.display.IGraphicsStroke,flash.display.IGraphicsData",1,function($$private){;return[
"public function get caps",function(){
throw new Error('not implemented');
},
"public function set caps",function(value){
throw new Error('not implemented');
},
"public var",{fill:null},
"public function get joints",function(){
throw new Error('not implemented');
},
"public function set joints",function(value){
throw new Error('not implemented');
},
"public var",{miterLimit:NaN},
"public var",{pixelHinting:false},
"public function get scaleMode",function(){
throw new Error('not implemented');
},
"public function set scaleMode",function(value){
throw new Error('not implemented');
},
"public var",{thickness:NaN},
"public function GraphicsStroke",function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){thickness=NaN;}pixelHinting=false;}scaleMode="normal";}caps="none";}joints="round";}miterLimit=3.0;}fill=null;}
throw new Error('not implemented');
},
];},[],["flash.display.IGraphicsStroke","flash.display.IGraphicsData","Error"], "0.8.0", "0.9.6"
);
// class flash.display.ColorCorrection
joo.classLoader.prepare("package flash.display",
"public final class ColorCorrection",1,function($$private){;return[
"public static const",{DEFAULT:"default"},
"public static const",{OFF:"off"},
"public static const",{ON:"on"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.IGraphicsFill
joo.classLoader.prepare("package flash.display",
"public interface IGraphicsFill",1,function($$private){;return[
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.StageScaleMode
joo.classLoader.prepare("package flash.display",
"public final class StageScaleMode",1,function($$private){;return[
"public static const",{EXACT_FIT:"exactFit"},
"public static const",{NO_BORDER:"noBorder"},
"public static const",{NO_SCALE:"noScale"},
"public static const",{SHOW_ALL:"showAll"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.display.MorphShape
joo.classLoader.prepare("package flash.display",
"public final class MorphShape extends flash.display.DisplayObject",3,function($$private){;return[
];},[],["flash.display.DisplayObject"], "0.8.0", "0.9.6"
);
// class flash.display.MovieClip
joo.classLoader.prepare("package flash.display",
"public dynamic class MovieClip extends flash.display.Sprite",6,function($$private){;return[
"public function get currentFrame",function(){
throw new Error('not implemented');
},
"public function get currentFrameLabel",function(){
throw new Error('not implemented');
},
"public function get currentLabel",function(){
throw new Error('not implemented');
},
"public function get currentLabels",function(){
throw new Error('not implemented');
},
"public function get currentScene",function(){
throw new Error('not implemented');
},
"public function get enabled",function(){
throw new Error('not implemented');
},
"public function set enabled",function(value){
throw new Error('not implemented');
},
"public function get framesLoaded",function(){
return-1;
},
"public function get scenes",function(){
throw new Error('not implemented');
},
"public function get totalFrames",function(){
return-1;
},
"public function get trackAsMenu",function(){
throw new Error('not implemented');
},
"public function set trackAsMenu",function(value){
throw new Error('not implemented');
},
"public function MovieClip",function(){flash.display.Sprite.call(this);
},
"public function gotoAndPlay",function(frame,scene){if(arguments.length<2){scene=null;}
throw new Error('not implemented');
},
"public function gotoAndStop",function(frame,scene){if(arguments.length<2){scene=null;}
throw new Error('not implemented');
},
"public function nextFrame",function(){
},
"public function nextScene",function(){
throw new Error('not implemented');
},
"public function play",function(){
throw new Error('not implemented');
},
"public function prevFrame",function(){
},
"public function prevScene",function(){
throw new Error('not implemented');
},
"public function stop",function(){
},
];},[],["flash.display.Sprite","Error"], "0.8.0", "0.9.6"
);
// class flash.events.DRMAuthenticationErrorEvent
joo.classLoader.prepare("package flash.events",
"public class DRMAuthenticationErrorEvent extends flash.events.ErrorEvent",4,function($$private){;return[
"public function get domain",function(){
throw new Error('not implemented');
},
"public function set domain",function(value){
throw new Error('not implemented');
},
"public function get serverURL",function(){
throw new Error('not implemented');
},
"public function set serverURL",function(value){
throw new Error('not implemented');
},
"public function get subErrorID",function(){
throw new Error('not implemented');
},
"public function set subErrorID",function(value){
throw new Error('not implemented');
},
"public function DRMAuthenticationErrorEvent",function(type,bubbles,cancelable,inDetail,inErrorID,inSubErrorID,inServerURL,inDomain){flash.events.ErrorEvent.call(this);if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}inDetail="";}inErrorID=0;}inSubErrorID=0;}inServerURL=null;}inDomain=null;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
"public static const",{AUTHENTICATION_ERROR:"authenticationError"},
];},[],["flash.events.ErrorEvent","Error"], "0.8.0", "0.9.6"
);
// class flash.events.KeyboardEvent
joo.classLoader.prepare("package flash.events",
"public class KeyboardEvent extends flash.events.Event",2,function($$private){;return[
"public native function get altKey",
"public native function set altKey",
"public native function get charCode",
"public native function set charCode",
"public native function get ctrlKey",
"public native function set ctrlKey",
"public native function get keyCode",
"public native function set keyCode",
"public native function get keyLocation",
"public native function set keyLocation",
"public native function get shiftKey",
"public native function set shiftKey",
"public function KeyboardEvent",function(type,bubbles,cancelable,charCodeValue,keyCodeValue,keyLocationValue,ctrlKeyValue,altKeyValue,shiftKeyValue,controlKeyValue,commandKeyValue){if(arguments.length<11){if(arguments.length<10){if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=true;}cancelable=false;}charCodeValue=0;}keyCodeValue=0;}keyLocationValue=0;}ctrlKeyValue=false;}altKeyValue=false;}shiftKeyValue=false;}controlKeyValue=false;}commandKeyValue=false;}
flash.events.Event.call(this,type,bubbles,cancelable);
this.charCode=charCodeValue;
this.keyCode=keyCodeValue;
this.keyLocation=keyLocationValue;
this.ctrlKey=ctrlKeyValue||controlKeyValue||commandKeyValue;
this.altKey=altKeyValue;
this.shiftKey=shiftKeyValue;
},
"override public function clone",function(){
return new flash.events.KeyboardEvent(this.type,this.bubbles,this.cancelable,this.charCode,this.keyCode,this.keyLocation,this.ctrlKey,this.altKey,
this.shiftKey,this.ctrlKey,this.ctrlKey);
},
"override public function toString",function(){
return this.formatToString("KeyboardEvent","type","bubbles","cancelable",
"charCode","keyCode","keyLocation","ctrlKey","altKey","shiftKey","controlKey","commandKey");
},
"public function updateAfterEvent",function(){
},
"public static const",{KEY_DOWN:"keyDown"},
"public static const",{KEY_UP:"keyUp"},
];},[],["flash.events.Event"], "0.8.0", "0.9.6"
);
// class flash.events.ErrorEvent
joo.classLoader.prepare("package flash.events",
"public class ErrorEvent extends flash.events.TextEvent",3,function($$private){;return[
"public native function get errorID",
"public function ErrorEvent",function(type,bubbles,cancelable,text,id){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}text="";}id=0;}
flash.events.TextEvent.call(this,type,bubbles,cancelable,text);
this['errorID']=id;
},
"override public function clone",function(){
return new flash.events.ErrorEvent(this.type,this.bubbles,this.cancelable,this.text,this.errorID);
},
"override public function toString",function(){
return this.formatToString("ErrorEvent","type","bubbles","cancelable","text","errorID");
},
"public static const",{ERROR:"error"},
];},[],["flash.events.TextEvent"], "0.8.0", "0.9.6"
);
// class flash.events.HTTPStatusEvent
joo.classLoader.prepare("package flash.events",
"public class HTTPStatusEvent extends flash.events.Event",2,function($$private){;return[
"public native function get status",
"public function HTTPStatusEvent",function(type,bubbles,cancelable,status){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}status=0;}
flash.events.Event.call(this,type,bubbles,cancelable);
this['status']=status;
},
"override public function clone",function(){
return new flash.events.HTTPStatusEvent(this.type,this.bubbles,this.cancelable,this.status);
},
"override public function toString",function(){
return this.formatToString("HTTPStatusEvent","type","bubbles","cancelable","status");
},
"public static const",{HTTP_STATUS:"httpStatus"},
];},[],["flash.events.Event"], "0.8.0", "0.9.6"
);
// class flash.events.DRMAuthenticationCompleteEvent
joo.classLoader.prepare("package flash.events",
"public class DRMAuthenticationCompleteEvent extends flash.events.Event",2,function($$private){;return[
"public function get domain",function(){
throw new Error('not implemented');
},
"public function set domain",function(value){
throw new Error('not implemented');
},
"public function get serverURL",function(){
throw new Error('not implemented');
},
"public function set serverURL",function(value){
throw new Error('not implemented');
},
"public function get token",function(){
throw new Error('not implemented');
},
"public function set token",function(value){
throw new Error('not implemented');
},
"public function DRMAuthenticationCompleteEvent",function(type,bubbles,cancelable,inServerURL,inDomain,inToken){flash.events.Event.call(this);if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}inServerURL=null;}inDomain=null;}inToken=null;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
"public static const",{AUTHENTICATION_COMPLETE:"authenticationComplete"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flash.events.AsyncErrorEvent
joo.classLoader.prepare("package flash.events",
"public class AsyncErrorEvent extends flash.events.ErrorEvent",4,function($$private){;return[
"public var",{error:null},
"public function AsyncErrorEvent",function(type,bubbles,cancelable,text,error){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}text="";}error=null;}
flash.events.ErrorEvent.call(this,type,bubbles,cancelable,text);
this.error=error;
},
"override public function clone",function(){
return new flash.events.AsyncErrorEvent(this.type,this.bubbles,this.cancelable,this.text,this.error);
},
"override public function toString",function(){
return this.formatToString("AsyncErrorEvent","type","bubbles","cancelable","error");
},
"public static const",{ASYNC_ERROR:"asyncError"},
];},[],["flash.events.ErrorEvent"], "0.8.0", "0.9.6"
);
// class flash.events.TouchEvent
joo.classLoader.prepare("package flash.events",
"public class TouchEvent extends flash.events.Event",2,function($$private){;return[
"public function get altKey",function(){
throw new Error('not implemented');
},
"public function set altKey",function(value){
throw new Error('not implemented');
},
"public function get commandKey",function(){
throw new Error('not implemented');
},
"public function set commandKey",function(value){
throw new Error('not implemented');
},
"public function get controlKey",function(){
throw new Error('not implemented');
},
"public function set controlKey",function(value){
throw new Error('not implemented');
},
"public function get ctrlKey",function(){
throw new Error('not implemented');
},
"public function set ctrlKey",function(value){
throw new Error('not implemented');
},
"public function get isPrimaryTouchPoint",function(){
throw new Error('not implemented');
},
"public function set isPrimaryTouchPoint",function(value){
throw new Error('not implemented');
},
"public function get isRelatedObjectInaccessible",function(){
throw new Error('not implemented');
},
"public function set isRelatedObjectInaccessible",function(value){
throw new Error('not implemented');
},
"public function get localX",function(){
throw new Error('not implemented');
},
"public function set localX",function(value){
throw new Error('not implemented');
},
"public function get localY",function(){
throw new Error('not implemented');
},
"public function set localY",function(value){
throw new Error('not implemented');
},
"public function get pressure",function(){
throw new Error('not implemented');
},
"public function set pressure",function(value){
throw new Error('not implemented');
},
"public function get relatedObject",function(){
throw new Error('not implemented');
},
"public function set relatedObject",function(value){
throw new Error('not implemented');
},
"public function get shiftKey",function(){
throw new Error('not implemented');
},
"public function set shiftKey",function(value){
throw new Error('not implemented');
},
"public function get sizeX",function(){
throw new Error('not implemented');
},
"public function set sizeX",function(value){
throw new Error('not implemented');
},
"public function get sizeY",function(){
throw new Error('not implemented');
},
"public function set sizeY",function(value){
throw new Error('not implemented');
},
"public function get stageX",function(){
throw new Error('not implemented');
},
"public function get stageY",function(){
throw new Error('not implemented');
},
"public function get touchPointID",function(){
throw new Error('not implemented');
},
"public function set touchPointID",function(value){
throw new Error('not implemented');
},
"public function TouchEvent",function(type,bubbles,cancelable,touchPointID,isPrimaryTouchPoint,localX,localY,sizeX,sizeY,pressure,relatedObject,ctrlKey,altKey,shiftKey,commandKey,controlKey){flash.events.Event.call(this);if(arguments.length<16){if(arguments.length<15){if(arguments.length<14){if(arguments.length<13){if(arguments.length<12){if(arguments.length<11){if(arguments.length<10){if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=true;}cancelable=false;}touchPointID=0;}isPrimaryTouchPoint=false;}localX=NaN;}localY=NaN;}sizeX=NaN;}sizeY=NaN;}pressure=NaN;}relatedObject=null;}ctrlKey=false;}altKey=false;}shiftKey=false;}commandKey=false;}controlKey=false;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
"override public function toString",function(){
throw new Error('not implemented');
},
"public function updateAfterEvent",function(){
throw new Error('not implemented');
},
"public static const",{TOUCH_BEGIN:"touchBegin"},
"public static const",{TOUCH_END:"touchEnd"},
"public static const",{TOUCH_MOVE:"touchMove"},
"public static const",{TOUCH_OUT:"touchOut"},
"public static const",{TOUCH_OVER:"touchOver"},
"public static const",{TOUCH_ROLL_OUT:"touchRollOut"},
"public static const",{TOUCH_ROLL_OVER:"touchRollOver"},
"public static const",{TOUCH_TAP:"touchTap"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flash.events.SecurityErrorEvent
joo.classLoader.prepare("package flash.events",
"public class SecurityErrorEvent extends flash.events.ErrorEvent",4,function($$private){;return[
"public function SecurityErrorEvent",function(type,bubbles,cancelable,text,id){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}text="";}id=0;}
flash.events.ErrorEvent.call(this,type,bubbles,cancelable,text,id);
},
"override public function clone",function(){
return new flash.events.SecurityErrorEvent(this.type,this.bubbles,this.cancelable,this.text,this.errorID);
},
"override public function toString",function(){
return this.formatToString("SecurityErrorEvent","type","bubbles","cancelable","text");
},
"public static const",{SECURITY_ERROR:"securityError"},
];},[],["flash.events.ErrorEvent"], "0.8.0", "0.9.6"
);
// class flash.events.DataEvent
joo.classLoader.prepare("package flash.events",
"public class DataEvent extends flash.events.TextEvent",3,function($$private){;return[
"public native function get data",
"public native function set data",
"public function DataEvent",function(type,bubbles,cancelable,data){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}data="";}
flash.events.TextEvent.call(this,type,bubbles,cancelable);
this.data=data;
},
"override public function clone",function(){
return new flash.events.DataEvent(this.type,this.bubbles,this.cancelable,this.data);
},
"override public function toString",function(){
return this.formatToString("DataEvent","type","bubbles","cancelable","data");
},
"public static const",{DATA:"data"},
"public static const",{UPLOAD_COMPLETE_DATA:"uploadCompleteData"},
];},[],["flash.events.TextEvent"], "0.8.0", "0.9.6"
);
// class flash.events.StageVideoAvailabilityEvent
joo.classLoader.prepare("package flash.events",
"public class StageVideoAvailabilityEvent extends flash.events.Event",2,function($$private){;return[
"public function get availability",function(){
throw new Error('not implemented');
},
"public function StageVideoAvailabilityEvent",function(type,bubbles,cancelable,availability){flash.events.Event.call(this);if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}availability=null;}
throw new Error('not implemented');
},
"public static const",{STAGE_VIDEO_AVAILABILITY:"stageVideoAvailability"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flash.events.ActivityEvent
joo.classLoader.prepare("package flash.events",
"public class ActivityEvent extends flash.events.Event",2,function($$private){;return[
"public native function get activating",
"public native function set activating",
"public function ActivityEvent",function(type,bubbles,cancelable,activating){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}activating=false;}
flash.events.Event.call(this,flash.events.ActivityEvent.ACTIVITY,bubbles,cancelable);
this.activating=activating;
},
"override public function clone",function(){
return new flash.events.ActivityEvent(this.type,this.bubbles,this.cancelable,this.activating);
},
"override public function toString",function(){
return this.formatToString("ActivityEvent","type","bubbles","cancelable","activating");
},
"public static const",{ACTIVITY:"activity"},
];},[],["flash.events.Event"], "0.8.0", "0.9.6"
);
// class flash.events.IEventDispatcher
joo.classLoader.prepare("package flash.events",
"public interface IEventDispatcher",1,function($$private){;return[,,,,,
];},[],[], "0.8.0", "0.9.6"
);
// class flash.events.TimerEvent
joo.classLoader.prepare("package flash.events",
"public class TimerEvent extends flash.events.Event",2,function($$private){;return[
"public function TimerEvent",function(type,bubbles,cancelable){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}
flash.events.Event.call(this,type,bubbles,cancelable);
},
"override public function clone",function(){
return new flash.events.TimerEvent(this.type,this.bubbles,this.cancelable);
},
"override public function toString",function(){
return this.formatToString("TimerEvent","type","bubbles","cancelable");
},
"public function updateAfterEvent",function(){
},
"public static const",{TIMER:"timer"},
"public static const",{TIMER_COMPLETE:"timerComplete"},
];},[],["flash.events.Event"], "0.8.0", "0.9.6"
);
// class flash.events.ContextMenuEvent
joo.classLoader.prepare("package flash.events",
"public class ContextMenuEvent extends flash.events.Event",2,function($$private){;return[
"public native function get contextMenuOwner",
"public native function set contextMenuOwner",
"public native function get isMouseTargetInaccessible",
"public native function set isMouseTargetInaccessible",
"public native function get mouseTarget",
"public native function set mouseTarget",
"public function ContextMenuEvent",function(type,bubbles,cancelable,mouseTarget,contextMenuOwner){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}mouseTarget=null;}contextMenuOwner=null;}
flash.events.Event.call(this,type,bubbles,cancelable);
this.mouseTarget=mouseTarget;
this.contextMenuOwner=contextMenuOwner;
},
"override public function clone",function(){
return new flash.events.ContextMenuEvent(this.type,this.bubbles,this.cancelable,this.mouseTarget,this.contextMenuOwner);
},
"override public function toString",function(){
return this.formatToString("ContextMenuEvent","type","bubbles","cancelable","mouseTarget","contextMenuOwner");
},
"public static const",{MENU_ITEM_SELECT:"menuItemSelect"},
"public static const",{MENU_SELECT:"menuSelect"},
];},[],["flash.events.Event"], "0.8.0", "0.9.6"
);
// class flash.events.TransformGestureEvent
joo.classLoader.prepare("package flash.events",
"public class TransformGestureEvent extends flash.events.GestureEvent",3,function($$private){;return[
"public function get offsetX",function(){
throw new Error('not implemented');
},
"public function set offsetX",function(value){
throw new Error('not implemented');
},
"public function get offsetY",function(){
throw new Error('not implemented');
},
"public function set offsetY",function(value){
throw new Error('not implemented');
},
"public function get rotation",function(){
throw new Error('not implemented');
},
"public function set rotation",function(value){
throw new Error('not implemented');
},
"public function get scaleX",function(){
throw new Error('not implemented');
},
"public function set scaleX",function(value){
throw new Error('not implemented');
},
"public function get scaleY",function(){
throw new Error('not implemented');
},
"public function set scaleY",function(value){
throw new Error('not implemented');
},
"public function TransformGestureEvent",function(type,bubbles,cancelable,phase,localX,localY,scaleX,scaleY,rotation,offsetX,offsetY,ctrlKey,altKey,shiftKey,commandKey,controlKey){flash.events.GestureEvent.call(this);if(arguments.length<16){if(arguments.length<15){if(arguments.length<14){if(arguments.length<13){if(arguments.length<12){if(arguments.length<11){if(arguments.length<10){if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=true;}cancelable=false;}phase=null;}localX=0;}localY=0;}scaleX=1.0;}scaleY=1.0;}rotation=0;}offsetX=0;}offsetY=0;}ctrlKey=false;}altKey=false;}shiftKey=false;}commandKey=false;}controlKey=false;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
"override public function toString",function(){
throw new Error('not implemented');
},
"public static const",{GESTURE_PAN:"gesturePan"},
"public static const",{GESTURE_ROTATE:"gestureRotate"},
"public static const",{GESTURE_SWIPE:"gestureSwipe"},
"public static const",{GESTURE_ZOOM:"gestureZoom"},
];},[],["flash.events.GestureEvent","Error"], "0.8.0", "0.9.6"
);
// class flash.events.MouseEvent
joo.classLoader.prepare("package flash.events",
"public class MouseEvent extends flash.events.Event",2,function($$private){var as=joo.as;return[
"public native function get altKey",
"public native function set altKey",
"public native function get buttonDown",
"public native function set buttonDown",
"public native function get ctrlKey",
"public native function set ctrlKey",
"public native function get delta",
"public native function set delta",
"public native function get isRelatedObjectInaccessible",
"public native function set isRelatedObjectInaccessible",
"public native function get localX",
"public native function set localX",
"public native function get localY",
"public native function set localY",
"public native function get relatedObject",
"public native function set relatedObject",
"public native function get shiftKey",
"public native function set shiftKey",
"public function get stageX",function(){
return(as(this.target,flash.display.DisplayObject)).x+this.localX;
},
"public function get stageY",function(){
return(as(this.target,flash.display.DisplayObject)).y+this.localY;
},
"public function MouseEvent",function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,controlKey,clickCount){if(arguments.length<14){if(arguments.length<13){if(arguments.length<12){if(arguments.length<11){if(arguments.length<10){if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=true;}cancelable=false;}localX=NaN;}localY=NaN;}relatedObject=null;}ctrlKey=false;}altKey=false;}shiftKey=false;}buttonDown=false;}delta=0;}commandKey=false;}controlKey=false;}clickCount=0;}
flash.events.Event.call(this,type,bubbles,cancelable);
this.localX=localX;
this.localY=localY;
this.relatedObject=relatedObject;
this.ctrlKey=ctrlKey;
this.altKey=altKey;
this.shiftKey=shiftKey;
this.buttonDown=buttonDown;
this.delta=delta;
},
"override public function clone",function(){
return new flash.events.MouseEvent(this.type,this.bubbles,this.cancelable,this.localX,this.localY,this.relatedObject,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta);
},
"override public function toString",function(){
return this.formatToString("MouseEvent","type","bubbles","cancelable",
"localX","localY","relatedObject","ctrlKey","altKey","shiftKey","buttonDown","delta");
},
"public function updateAfterEvent",function(){
},
"public static const",{CLICK:"click"},
"public static const",{DOUBLE_CLICK:"doubleClick"},
"public static const",{MOUSE_DOWN:"mouseDown"},
"public static const",{MOUSE_MOVE:"mouseMove"},
"public static const",{MOUSE_OUT:"mouseOut"},
"public static const",{MOUSE_OVER:"mouseOver"},
"public static const",{MOUSE_UP:"mouseUp"},
"public static const",{MOUSE_WHEEL:"mouseWheel"},
"public static const",{ROLL_OUT:"rollOut"},
"public static const",{ROLL_OVER:"rollOver"},
];},[],["flash.events.Event","flash.display.DisplayObject"], "0.8.0", "0.9.6"
);
// class flash.events.TextEvent
joo.classLoader.prepare("package flash.events",
"public class TextEvent extends flash.events.Event",2,function($$private){;return[
"public native function get text",
"public native function set text",
"public function TextEvent",function(type,bubbles,cancelable,text){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}text="";}
flash.events.Event.call(this,type,bubbles,cancelable);
this.text=text;
},
"override public function clone",function(){
return new flash.events.TextEvent(this.type,this.bubbles,this.cancelable,this.text);
},
"override public function toString",function(){
return this.formatToString("TextEvent","type","bubbles","cancelable","text");
},
"public static const",{LINK:"link"},
"public static const",{TEXT_INPUT:"textInput"},
];},[],["flash.events.Event"], "0.8.0", "0.9.6"
);
// class flash.events.IOErrorEvent
joo.classLoader.prepare("package flash.events",
"public class IOErrorEvent extends flash.events.ErrorEvent",4,function($$private){;return[
"public function IOErrorEvent",function(type,bubbles,cancelable,text,id){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}text="";}id=0;}
flash.events.ErrorEvent.call(this,type,bubbles,cancelable,text,id);
},
"override public function clone",function(){
return new flash.events.IOErrorEvent(this.type,this.bubbles,this.cancelable,this.text,this.errorID);
},
"override public function toString",function(){
return this.formatToString("IOErrorEvent","type","bubbles","cancelable","text");
},
"public static const",{IO_ERROR:"ioError"},
];},[],["flash.events.ErrorEvent"], "0.8.0", "0.9.6"
);
// class flash.events.PressAndTapGestureEvent
joo.classLoader.prepare("package flash.events",
"public class PressAndTapGestureEvent extends flash.events.GestureEvent",3,function($$private){;return[
"public function get tapLocalX",function(){
throw new Error('not implemented');
},
"public function set tapLocalX",function(value){
throw new Error('not implemented');
},
"public function get tapLocalY",function(){
throw new Error('not implemented');
},
"public function set tapLocalY",function(value){
throw new Error('not implemented');
},
"public function get tapStageX",function(){
throw new Error('not implemented');
},
"public function get tapStageY",function(){
throw new Error('not implemented');
},
"public function PressAndTapGestureEvent",function(type,bubbles,cancelable,phase,localX,localY,tapLocalX,tapLocalY,ctrlKey,altKey,shiftKey,commandKey,controlKey){flash.events.GestureEvent.call(this);if(arguments.length<13){if(arguments.length<12){if(arguments.length<11){if(arguments.length<10){if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=true;}cancelable=false;}phase=null;}localX=0;}localY=0;}tapLocalX=0;}tapLocalY=0;}ctrlKey=false;}altKey=false;}shiftKey=false;}commandKey=false;}controlKey=false;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
"override public function toString",function(){
throw new Error('not implemented');
},
"public static const",{GESTURE_PRESS_AND_TAP:"gesturePressAndTap"},
];},[],["flash.events.GestureEvent","Error"], "0.8.0", "0.9.6"
);
// class flash.events.GestureEvent
joo.classLoader.prepare("package flash.events",
"public class GestureEvent extends flash.events.Event",2,function($$private){;return[
"public function get altKey",function(){
throw new Error('not implemented');
},
"public function set altKey",function(value){
throw new Error('not implemented');
},
"public function get controlKey",function(){
throw new Error('not implemented');
},
"public function set controlKey",function(value){
throw new Error('not implemented');
},
"public function get ctrlKey",function(){
throw new Error('not implemented');
},
"public function set ctrlKey",function(value){
throw new Error('not implemented');
},
"public function get localX",function(){
throw new Error('not implemented');
},
"public function set localX",function(value){
throw new Error('not implemented');
},
"public function get localY",function(){
throw new Error('not implemented');
},
"public function set localY",function(value){
throw new Error('not implemented');
},
"public function get phase",function(){
throw new Error('not implemented');
},
"public function set phase",function(value){
throw new Error('not implemented');
},
"public function get shiftKey",function(){
throw new Error('not implemented');
},
"public function set shiftKey",function(value){
throw new Error('not implemented');
},
"public function get stageX",function(){
throw new Error('not implemented');
},
"public function get stageY",function(){
throw new Error('not implemented');
},
"public function GestureEvent",function(type,bubbles,cancelable,phase,localX,localY,ctrlKey,altKey,shiftKey,commandKey,controlKey){flash.events.Event.call(this);if(arguments.length<11){if(arguments.length<10){if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=true;}cancelable=false;}phase=null;}localX=0;}localY=0;}ctrlKey=false;}altKey=false;}shiftKey=false;}commandKey=false;}controlKey=false;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
"override public function toString",function(){
throw new Error('not implemented');
},
"public function updateAfterEvent",function(){
throw new Error('not implemented');
},
"public static const",{GESTURE_TWO_FINGER_TAP:"gestureTwoFingerTap"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flash.events.Event
joo.classLoader.prepare("package flash.events",
"public class Event",1,function($$private){;return[
"public native function get bubbles",
"public native function get cancelable",
"public native function get currentTarget",
"public native function get eventPhase",
"public native function get target",
"public native function get type",
"public function Event",function(type,bubbles,cancelable){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}
this['type']=type;
this['bubbles']=bubbles;
this['cancelable']=cancelable;
},
"public function clone",function(){
return new flash.events.Event(this.type,this.bubbles,this.cancelable);
},
"public function formatToString",function(className){var rest=Array.prototype.slice.call(arguments,1);
var sb=["[",className," "];
for(var i=0;i<rest.length;++i){
sb.push(rest[i],"=",this[rest[i]]," ");
}
sb.push("]");
return sb.join("");
},
"public function isDefaultPrevented",function(){
return this.defaultPrevented$1;
},
"public function preventDefault",function(){
if(this.cancelable){
this.defaultPrevented$1=true;
}
},
"public function stopImmediatePropagation",function(){
this.immediatePropagationStopped$1=true;
},
"public function stopPropagation",function(){
this.propagationStopped$1=true;
},
"public function toString",function(){
return this.formatToString("Event","type","bubbles","cancelable");
},
"public static const",{ACTIVATE:"activate"},
"public static const",{ADDED:"added"},
"public static const",{ADDED_TO_STAGE:"addedToStage"},
"public static const",{CANCEL:"cancel"},
"public static const",{CHANGE:"change"},
"public static const",{CLEAR:"clear"},
"public static const",{CLOSE:"close"},
"public static const",{COMPLETE:"complete"},
"public static const",{CONNECT:"connect"},
"public static const",{COPY:"copy"},
"public static const",{CUT:"cut"},
"public static const",{DEACTIVATE:"deactivate"},
"public static const",{ENTER_FRAME:"enterFrame"},
"public static const",{EXIT_FRAME:"exitFrame"},
"public static const",{FRAME_CONSTRUCTED:"frameConstructed"},
"public static const",{FULLSCREEN:"fullScreen"},
"public static const",{ID3:"id3"},
"public static const",{INIT:"init"},
"public static const",{MOUSE_LEAVE:"mouseLeave"},
"public static const",{OPEN:"open"},
"public static const",{PASTE:"paste"},
"public static const",{REMOVED:"removed"},
"public static const",{REMOVED_FROM_STAGE:"removedFromStage"},
"public static const",{RENDER:"render"},
"public static const",{RESIZE:"resize"},
"public static const",{SCROLL:"scroll"},
"public static const",{SELECT:"select"},
"public static const",{SELECT_ALL:"selectAll"},
"public static const",{SOUND_COMPLETE:"soundComplete"},
"public static const",{TAB_CHILDREN_CHANGE:"tabChildrenChange"},
"public static const",{TAB_ENABLED_CHANGE:"tabEnabledChange"},
"public static const",{TAB_INDEX_CHANGE:"tabIndexChange"},
"public static const",{TEXT_INTERACTION_MODE_CHANGE:"textInteractionModeChange"},
"public static const",{UNLOAD:"unload"},
"public function isPropagationStopped",function(){
return this.propagationStopped$1;
},
"public function isImmediatePropagationStopped",function(){
return this.immediatePropagationStopped$1;
},
"internal function withTarget",function(target){
var event=this.target?this.clone():this;
event['target']=target;
return event;
},
"private var",{defaultPrevented:false},
"private var",{propagationStopped:false},
"private var",{immediatePropagationStopped:false},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.events.FocusEvent
joo.classLoader.prepare("package flash.events",
"public class FocusEvent extends flash.events.Event",2,function($$private){;return[
"public native function get isRelatedObjectInaccessible",
"public native function set isRelatedObjectInaccessible",
"public native function get keyCode",
"public native function set keyCode",
"public native function get relatedObject",
"public native function set relatedObject",
"public native function get shiftKey",
"public native function set shiftKey",
"public function FocusEvent",function(type,bubbles,cancelable,relatedObject,shiftKey,keyCode,direction){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=true;}cancelable=false;}relatedObject=null;}shiftKey=false;}keyCode=0;}direction="none";}
flash.events.Event.call(this,type,bubbles,cancelable);
this.relatedObject=relatedObject;
this.shiftKey=shiftKey;
this.keyCode=keyCode;
},
"override public function clone",function(){
return new flash.events.FocusEvent(this.type,this.bubbles,this.cancelable,this.relatedObject,this.shiftKey,this.keyCode);
},
"override public function toString",function(){
return this.formatToString("FocusEvent","type","bubbles","cancelable","relatedObject","shiftKey","keyCode");
},
"public static const",{FOCUS_IN:"focusIn"},
"public static const",{FOCUS_OUT:"focusOut"},
"public static const",{KEY_FOCUS_CHANGE:"keyFocusChange"},
"public static const",{MOUSE_FOCUS_CHANGE:"mouseFocusChange"},
];},[],["flash.events.Event"], "0.8.0", "0.9.6"
);
// class flash.events.ProgressEvent
joo.classLoader.prepare("package flash.events",
"public class ProgressEvent extends flash.events.Event",2,function($$private){;return[
"public native function get bytesLoaded",
"public native function set bytesLoaded",
"public native function get bytesTotal",
"public native function set bytesTotal",
"public function ProgressEvent",function(type,bubbles,cancelable,bytesLoaded,bytesTotal){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}bytesLoaded=0;}bytesTotal=0;}
flash.events.Event.call(this,type,bubbles,cancelable);
this.bytesLoaded=bytesLoaded;
this.bytesTotal=bytesTotal;
},
"override public function clone",function(){
return new flash.events.ProgressEvent(this.type,this.bubbles,this.cancelable,this.bytesLoaded,this.bytesTotal);
},
"override public function toString",function(){
return this.formatToString("TimerEvent","type","bubbles","cancelable","bytesLoaded","bytesTotal");
},
"public static const",{PROGRESS:"progress"},
"public static const",{SOCKET_DATA:"socketData"},
];},[],["flash.events.Event"], "0.8.0", "0.9.6"
);
// class flash.events.FullScreenEvent
joo.classLoader.prepare("package flash.events",
"public class FullScreenEvent extends flash.events.ActivityEvent",3,function($$private){;return[
"public native function get fullScreen",
"public function FullScreenEvent",function(type,bubbles,cancelable,fullScreen){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}fullScreen=false;}
flash.events.ActivityEvent.call(this,type,bubbles,cancelable);
this['fullScreen']=fullScreen;
},
"override public function clone",function(){
return new flash.events.FullScreenEvent(this.type,this.bubbles,this.cancelable,this.fullScreen);
},
"override public function toString",function(){
return this.formatToString("FullScreenEvent","type","bubbles","cancelable","fullScreen");
},
"public static const",{FULL_SCREEN:"fullScreen"},
];},[],["flash.events.ActivityEvent"], "0.8.0", "0.9.6"
);
// class flash.events.ShaderEvent
joo.classLoader.prepare("package flash.events",
"public class ShaderEvent extends flash.events.Event",2,function($$private){;return[
"public function get bitmapData",function(){
throw new Error('not implemented');
},
"public function set bitmapData",function(value){
throw new Error('not implemented');
},
"public function get byteArray",function(){
throw new Error('not implemented');
},
"public function set byteArray",function(value){
throw new Error('not implemented');
},
"public function get vector",function(){
throw new Error('not implemented');
},
"public function set vector",function(value){
throw new Error('not implemented');
},
"public function ShaderEvent",function(type,bubbles,cancelable,bitmap,array,vector){flash.events.Event.call(this);if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}bitmap=null;}array=null;}vector=null;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
"override public function toString",function(){
throw new Error('not implemented');
},
"public static const",{COMPLETE:"complete"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flash.events.StageVideoEvent
joo.classLoader.prepare("package flash.events",
"public class StageVideoEvent extends flash.events.Event",2,function($$private){;return[
"public function get colorSpace",function(){
throw new Error('not implemented');
},
"public function get status",function(){
throw new Error('not implemented');
},
"public function StageVideoEvent",function(type,bubbles,cancelable,status,colorSpace){flash.events.Event.call(this);if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}status=null;}colorSpace=null;}
throw new Error('not implemented');
},
"public static const",{RENDER_STATE:"renderState"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flash.events.SoftKeyboardTrigger
joo.classLoader.prepare("package flash.events",
"public class SoftKeyboardTrigger",1,function($$private){;return[
"public static const",{CONTENT_TRIGGERED:"contentTriggered"},
"public static const",{USER_TRIGGERED:"userTriggered"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.events.SampleDataEvent
joo.classLoader.prepare("package flash.events",
"public class SampleDataEvent extends flash.events.Event",2,function($$private){;return[
"public function get data",function(){
throw new Error('not implemented');
},
"public function set data",function(value){
throw new Error('not implemented');
},
"public function get position",function(){
throw new Error('not implemented');
},
"public function set position",function(value){
throw new Error('not implemented');
},
"public function SampleDataEvent",function(type,bubbles,cancelable,theposition,thedata){flash.events.Event.call(this);if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}theposition=0;}thedata=null;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
"override public function toString",function(){
throw new Error('not implemented');
},
"public static const",{SAMPLE_DATA:"sampleData"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flash.events.DRMErrorEvent
joo.classLoader.prepare("package flash.events",
"public class DRMErrorEvent extends flash.events.ErrorEvent",4,function($$private){;return[
"public function get contentData",function(){
throw new Error('not implemented');
},
"public function set contentData",function(value){
throw new Error('not implemented');
},
"public function get drmUpdateNeeded",function(){
throw new Error('not implemented');
},
"public function get subErrorID",function(){
throw new Error('not implemented');
},
"public function get systemUpdateNeeded",function(){
throw new Error('not implemented');
},
"public function DRMErrorEvent",function(type,bubbles,cancelable,inErrorDetail,inErrorCode,insubErrorID,inMetadata,inSystemUpdateNeeded,inDrmUpdateNeeded){flash.events.ErrorEvent.call(this);if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}inErrorDetail="";}inErrorCode=0;}insubErrorID=0;}inMetadata=null;}inSystemUpdateNeeded=false;}inDrmUpdateNeeded=false;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
"override public function toString",function(){
throw new Error('not implemented');
},
"public static const",{DRM_ERROR:"drmError"},
];},[],["flash.events.ErrorEvent","Error"], "0.8.0", "0.9.6"
);
// class flash.events.SoftKeyboardEvent
joo.classLoader.prepare("package flash.events",
"public class SoftKeyboardEvent extends flash.events.Event",2,function($$private){;return[
"public function get relatedObject",function(){
throw new Error('not implemented');
},
"public function set relatedObject",function(value){
throw new Error('not implemented');
},
"public function get triggerType",function(){
throw new Error('not implemented');
},
"public function SoftKeyboardEvent",function(type,bubbles,cancelable,relatedObjectVal,triggerTypeVal){flash.events.Event.call(this);
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
"override public function toString",function(){
throw new Error('not implemented');
},
"public static const",{SOFT_KEYBOARD_ACTIVATE:"softKeyboardActivate"},
"public static const",{SOFT_KEYBOARD_ACTIVATING:"softKeyboardActivating"},
"public static const",{SOFT_KEYBOARD_DEACTIVATE:"softKeyboardDeactivate"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flash.events.UncaughtErrorEvent
joo.classLoader.prepare("package flash.events",
"public class UncaughtErrorEvent extends flash.events.ErrorEvent",4,function($$private){;return[
"public function get error",function(){
throw new Error('not implemented');
},
"public function UncaughtErrorEvent",function(type,bubbles,cancelable,error_in){flash.events.ErrorEvent.call(this);if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=true;}cancelable=true;}error_in=null;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
"override public function toString",function(){
throw new Error('not implemented');
},
"public static const",{UNCAUGHT_ERROR:"uncaughtError"},
];},[],["flash.events.ErrorEvent","Error"], "0.8.0", "0.9.6"
);
// class flash.events.UncaughtErrorEvents
joo.classLoader.prepare("package flash.events",
{Event:{name:"uncaughtError",type:"flash.events.UncaughtErrorEvent"}},
"public class UncaughtErrorEvents extends flash.events.EventDispatcher",2,function($$private){;return[
"public function UncaughtErrorEvents",function(){flash.events.EventDispatcher.call(this);
throw new Error('not implemented');
},
];},[],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.events.EventPhase
joo.classLoader.prepare("package flash.events",
"public final class EventPhase",1,function($$private){;return[
"public static const",{AT_TARGET:2},
"public static const",{BUBBLING_PHASE:3},
"public static const",{CAPTURING_PHASE:1},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.events.AccelerometerEvent
joo.classLoader.prepare("package flash.events",
"public class AccelerometerEvent extends flash.events.Event",2,function($$private){;return[
"public function get accelerationX",function(){
throw new Error('not implemented');
},
"public function set accelerationX",function(value){
throw new Error('not implemented');
},
"public function get accelerationY",function(){
throw new Error('not implemented');
},
"public function set accelerationY",function(value){
throw new Error('not implemented');
},
"public function get accelerationZ",function(){
throw new Error('not implemented');
},
"public function set accelerationZ",function(value){
throw new Error('not implemented');
},
"public function get timestamp",function(){
throw new Error('not implemented');
},
"public function set timestamp",function(value){
throw new Error('not implemented');
},
"public function AccelerometerEvent",function(type,bubbles,cancelable,timestamp,accelerationX,accelerationY,accelerationZ){flash.events.Event.call(this);if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}timestamp=0;}accelerationX=0;}accelerationY=0;}accelerationZ=0;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
"override public function toString",function(){
throw new Error('not implemented');
},
"public static const",{UPDATE:"update"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flash.events.GesturePhase
joo.classLoader.prepare("package flash.events",
"public final class GesturePhase",1,function($$private){;return[
"public static const",{ALL:"all"},
"public static const",{BEGIN:"begin"},
"public static const",{END:"end"},
"public static const",{UPDATE:"update"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.events.StatusEvent
joo.classLoader.prepare("package flash.events",
"public class StatusEvent extends flash.events.Event",2,function($$private){;return[
"public native function get code",
"public native function set code",
"public native function get level",
"public native function set level",
"public function StatusEvent",function(type,bubbles,cancelable,code,level){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}code="";}level="";}
flash.events.Event.call(this,type,bubbles,cancelable);
this.code=code;
this.level=level;
},
"override public function clone",function(){
return new flash.events.StatusEvent(this.type,this.bubbles,this.cancelable,this.code,this.level);
},
"override public function toString",function(){
return this.formatToString("StatusEvent","type","bubbles","cancelable","code","level");
},
"public static const",{STATUS:"status"},
];},[],["flash.events.Event"], "0.8.0", "0.9.6"
);
// class flash.events.SyncEvent
joo.classLoader.prepare("package flash.events",
"public class SyncEvent extends flash.events.Event",2,function($$private){;return[
"public native function get changeList",
"public native function set changeList",
"public function SyncEvent",function(type,bubbles,cancelable,changeList){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}changeList=null;}
flash.events.Event.call(this,type,bubbles,cancelable);
this.changeList=changeList;
},
"override public function clone",function(){
return new flash.events.SyncEvent(this.type,this.bubbles,this.cancelable,this.changeList);
},
"override public function toString",function(){
return this.formatToString("SyncEvent","type","bubbles","cancelable","changeList");
},
"public static const",{SYNC:"sync"},
];},[],["flash.events.Event"], "0.8.0", "0.9.6"
);
// class flash.events.VideoEvent
joo.classLoader.prepare("package flash.events",
"public class VideoEvent extends flash.events.Event",2,function($$private){;return[
"public function get status",function(){
throw new Error('not implemented');
},
"public function VideoEvent",function(type,bubbles,cancelable,status){flash.events.Event.call(this);if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}status=null;}
throw new Error('not implemented');
},
"public static const",{RENDER_STATE:"renderState"},
"public static const",{RENDER_STATUS_ACCELERATED:"accelerated"},
"public static const",{RENDER_STATUS_SOFTWARE:"software"},
"public static const",{RENDER_STATUS_UNAVAILABLE:"unavailable"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flash.events.DRMStatusEvent
joo.classLoader.prepare("package flash.events",
"public class DRMStatusEvent extends flash.events.Event",2,function($$private){;return[
"public function get contentData",function(){
throw new Error('not implemented');
},
"public function set contentData",function(value){
throw new Error('not implemented');
},
"public function get isLocal",function(){
throw new Error('not implemented');
},
"public function set isLocal",function(value){
throw new Error('not implemented');
},
"public function get voucher",function(){
throw new Error('not implemented');
},
"public function set voucher",function(value){
throw new Error('not implemented');
},
"public function DRMStatusEvent",function(type,bubbles,cancelable,inMetadata,inVoucher,inLocal){flash.events.Event.call(this);if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}inMetadata=null;}inVoucher=null;}inLocal=false;}
throw new Error('not implemented');
},
"public static const",{DRM_STATUS:"drmStatus"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flash.events.IMEEvent
joo.classLoader.prepare("package flash.events",
"public class IMEEvent extends flash.events.TextEvent",3,function($$private){;return[
"public native function get imeClient",
"public native function set imeClient",
"public function IMEEvent",function(type,bubbles,cancelable,text,imeClient){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}text="";}imeClient=null;}
flash.events.TextEvent.call(this,type,bubbles,cancelable,text);
this.imeClient=imeClient;
},
"override public function clone",function(){
return new flash.events.IMEEvent(this.type,this.bubbles,this.cancelable,this.text,this.imeClient);
},
"override public function toString",function(){
return this.formatToString("IMEEvent","type","bubbles","cancelable","text");
},
"public static const",{IME_COMPOSITION:"imeComposition"},
"public static const",{IME_START_COMPOSITION:"imeStartComposition"},
];},[],["flash.events.TextEvent"], "0.8.0", "0.9.6"
);
// class flash.events.NetStatusEvent
joo.classLoader.prepare("package flash.events",
"public class NetStatusEvent extends flash.events.Event",2,function($$private){;return[
"public native function get info",
"public native function set info",
"public function NetStatusEvent",function(type,bubbles,cancelable,info){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}info=null;}
flash.events.Event.call(this,type,bubbles,cancelable);
this.info=info;
},
"override public function clone",function(){
return new flash.events.NetStatusEvent(this.type,this.bubbles,this.cancelable,this.info);
},
"override public function toString",function(){
return this.formatToString("NetStatusEvent","type","bubbles","cancelable","info");
},
"public static const",{NET_STATUS:"netStatus"},
];},[],["flash.events.Event"], "0.8.0", "0.9.6"
);
// class flash.events.EventDispatcher
joo.classLoader.prepare("package flash.events",
{Event:{name:"activate",type:"flash.events.Event"}},
{Event:{name:"deactivate",type:"flash.events.Event"}},
"public class EventDispatcher implements flash.events.IEventDispatcher",1,function($$private){;return[
"public function EventDispatcher",function(target){if(arguments.length<1){target=null;}
this.target$1=target;
this.captureListeners$1={};
this.listeners$1={};
},
"public function addEventListener",function(type,listener,useCapture,priority,useWeakReference){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){useCapture=false;}priority=0;}useWeakReference=false;}
var listenersByType=useCapture?this.captureListeners$1:this.listeners$1;
if(!(type in listenersByType)){
listenersByType[type]=[listener];
}else{
listenersByType[type].push(listener);
}
},
"public function dispatchEvent",function(event){
event.withTarget(this.target$1||this);
var listeners=this.listeners$1[event.type];
if(listeners){
for(var i=0;i<listeners.length;++i){
if(listeners[i](event)===false){
event.stopPropagation();
event.preventDefault();
}
if(event.isImmediatePropagationStopped()){
break;
}
}
}
return!event.isDefaultPrevented();
},
"public function hasEventListener",function(type){
return this.listeners$1[type]||this.captureListeners$1[type];
},
"public function removeEventListener",function(type,listener,useCapture){if(arguments.length<3){useCapture=false;}
var listenersByType=useCapture?this.captureListeners$1:this.listeners$1;
var listeners=listenersByType[type];
if(listeners){
for(var i=0;i<listeners.length;++i){
if(listeners[i]==listener){
if(listeners.length==1){
delete listenersByType[type];
}else{
listeners.splice(i,1);
}
return;
}
}
}
},
"public function willTrigger",function(type){
return this.hasEventListener(type);
},
"public function toString",function(){
return["EventDispatcher[target=",this.target$1,"]"].join("");
},
"private var",{captureListeners:null},
"private var",{listeners:null},
"private var",{target:null},
];},[],["flash.events.IEventDispatcher"], "0.8.0", "0.9.6"
);
// class flash.filters.DisplacementMapFilter
joo.classLoader.prepare("package flash.filters",
"public final class DisplacementMapFilter extends flash.filters.BitmapFilter",2,function($$private){;return[
"public function get alpha",function(){
throw new Error('not implemented');
},
"public function set alpha",function(value){
throw new Error('not implemented');
},
"public function get color",function(){
throw new Error('not implemented');
},
"public function set color",function(value){
throw new Error('not implemented');
},
"public function get componentX",function(){
throw new Error('not implemented');
},
"public function set componentX",function(value){
throw new Error('not implemented');
},
"public function get componentY",function(){
throw new Error('not implemented');
},
"public function set componentY",function(value){
throw new Error('not implemented');
},
"public function get mapBitmap",function(){
throw new Error('not implemented');
},
"public function set mapBitmap",function(value){
throw new Error('not implemented');
},
"public function get mapPoint",function(){
throw new Error('not implemented');
},
"public function set mapPoint",function(value){
throw new Error('not implemented');
},
"public function get mode",function(){
throw new Error('not implemented');
},
"public function set mode",function(value){
throw new Error('not implemented');
},
"public function get scaleX",function(){
throw new Error('not implemented');
},
"public function set scaleX",function(value){
throw new Error('not implemented');
},
"public function get scaleY",function(){
throw new Error('not implemented');
},
"public function set scaleY",function(value){
throw new Error('not implemented');
},
"public function DisplacementMapFilter",function(mapBitmap,mapPoint,componentX,componentY,scaleX,scaleY,mode,color,alpha){flash.filters.BitmapFilter.call(this);if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){mapBitmap=null;}mapPoint=null;}componentX=0;}componentY=0;}scaleX=0.0;}scaleY=0.0;}mode="wrap";}color=0;}alpha=0.0;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
];},[],["flash.filters.BitmapFilter","Error"], "0.8.0", "0.9.6"
);
// class flash.filters.DropShadowFilter
joo.classLoader.prepare("package flash.filters",
"public final class DropShadowFilter extends flash.filters.BitmapFilter",2,function($$private){;return[
"public native function get alpha",
"public native function set alpha",
"public native function get angle",
"public native function set angle",
"public native function get blurX",
"public native function set blurX",
"public native function get blurY",
"public native function set blurY",
"public native function get color",
"public native function set color",
"public native function get distance",
"public native function set distance",
"public native function get hideObject",
"public native function set hideObject",
"public native function get inner",
"public native function set inner",
"public native function get knockout",
"public native function set knockout",
"public native function get quality",
"public native function set quality",
"public native function get strength",
"public native function set strength",
"public function DropShadowFilter",function(distance,angle,color,alpha,blurX,blurY,strength,quality,inner,knockout,hideObject){flash.filters.BitmapFilter.call(this);if(arguments.length<11){if(arguments.length<10){if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){distance=4.0;}angle=45;}color=0;}alpha=1.0;}blurX=4.0;}blurY=4.0;}strength=1.0;}quality=1;}inner=false;}knockout=false;}hideObject=false;}
this.distance=distance;
this.angle=angle;
this.color=color;
this.alpha=alpha;
this.blurX=blurX;
this.blurY=blurY;
this.strength=strength;
this.quality=quality;
this.inner=inner;
this.knockout=knockout;
this.hideObject=hideObject;
},
"override public function clone",function(){
return new flash.filters.DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,
this.knockout,this.hideObject);
},
];},[],["flash.filters.BitmapFilter"], "0.8.0", "0.9.6"
);
// class flash.filters.BitmapFilter
joo.classLoader.prepare("package flash.filters",
"public class BitmapFilter",1,function($$private){;return[
"public function clone",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.filters.DisplacementMapFilterMode
joo.classLoader.prepare("package flash.filters",
"public final class DisplacementMapFilterMode",1,function($$private){;return[
"public static const",{CLAMP:"clamp"},
"public static const",{COLOR:"color"},
"public static const",{IGNORE:"ignore"},
"public static const",{WRAP:"wrap"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.filters.BlurFilter
joo.classLoader.prepare("package flash.filters",
"public final class BlurFilter extends flash.filters.BitmapFilter",2,function($$private){;return[
"public function get blurX",function(){
throw new Error('not implemented');
},
"public function set blurX",function(value){
throw new Error('not implemented');
},
"public function get blurY",function(){
throw new Error('not implemented');
},
"public function set blurY",function(value){
throw new Error('not implemented');
},
"public function get quality",function(){
throw new Error('not implemented');
},
"public function set quality",function(value){
throw new Error('not implemented');
},
"public function BlurFilter",function(blurX,blurY,quality){flash.filters.BitmapFilter.call(this);if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){blurX=4.0;}blurY=4.0;}quality=1;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
];},[],["flash.filters.BitmapFilter","Error"], "0.8.0", "0.9.6"
);
// class flash.filters.ConvolutionFilter
joo.classLoader.prepare("package flash.filters",
"public class ConvolutionFilter extends flash.filters.BitmapFilter",2,function($$private){;return[
"public function get alpha",function(){
throw new Error('not implemented');
},
"public function set alpha",function(value){
throw new Error('not implemented');
},
"public function get bias",function(){
throw new Error('not implemented');
},
"public function set bias",function(value){
throw new Error('not implemented');
},
"public function get clamp",function(){
throw new Error('not implemented');
},
"public function set clamp",function(value){
throw new Error('not implemented');
},
"public function get color",function(){
throw new Error('not implemented');
},
"public function set color",function(value){
throw new Error('not implemented');
},
"public function get divisor",function(){
throw new Error('not implemented');
},
"public function set divisor",function(value){
throw new Error('not implemented');
},
"public function get matrix",function(){
throw new Error('not implemented');
},
"public function set matrix",function(value){
throw new Error('not implemented');
},
"public function get matrixX",function(){
throw new Error('not implemented');
},
"public function set matrixX",function(value){
throw new Error('not implemented');
},
"public function get matrixY",function(){
throw new Error('not implemented');
},
"public function set matrixY",function(value){
throw new Error('not implemented');
},
"public function get preserveAlpha",function(){
throw new Error('not implemented');
},
"public function set preserveAlpha",function(value){
throw new Error('not implemented');
},
"public function ConvolutionFilter",function(matrixX,matrixY,matrix,divisor,bias,preserveAlpha,clamp,color,alpha){flash.filters.BitmapFilter.call(this);if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){matrixX=0;}matrixY=0;}matrix=null;}divisor=1.0;}bias=0.0;}preserveAlpha=true;}clamp=true;}color=0;}alpha=0.0;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
];},[],["flash.filters.BitmapFilter","Error"], "0.8.0", "0.9.6"
);
// class flash.filters.BitmapFilterQuality
joo.classLoader.prepare("package flash.filters",
"public final class BitmapFilterQuality",1,function($$private){;return[
"public static const",{HIGH:3},
"public static const",{LOW:1},
"public static const",{MEDIUM:2},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.filters.BitmapFilterType
joo.classLoader.prepare("package flash.filters",
"public final class BitmapFilterType",1,function($$private){;return[
"public static const",{FULL:"full"},
"public static const",{INNER:"inner"},
"public static const",{OUTER:"outer"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.filters.ColorMatrixFilter
joo.classLoader.prepare("package flash.filters",
"public final class ColorMatrixFilter extends flash.filters.BitmapFilter",2,function($$private){;return[
"public function get matrix",function(){
throw new Error('not implemented');
},
"public function set matrix",function(value){
throw new Error('not implemented');
},
"public function ColorMatrixFilter",function(matrix){flash.filters.BitmapFilter.call(this);if(arguments.length<1){matrix=null;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
];},[],["flash.filters.BitmapFilter","Error"], "0.8.0", "0.9.6"
);
// class flash.filters.ShaderFilter
joo.classLoader.prepare("package flash.filters",
"public class ShaderFilter extends flash.filters.BitmapFilter",2,function($$private){;return[
"public function get bottomExtension",function(){
throw new Error('not implemented');
},
"public function set bottomExtension",function(value){
throw new Error('not implemented');
},
"public function get leftExtension",function(){
throw new Error('not implemented');
},
"public function set leftExtension",function(value){
throw new Error('not implemented');
},
"public function get rightExtension",function(){
throw new Error('not implemented');
},
"public function set rightExtension",function(value){
throw new Error('not implemented');
},
"public function get shader",function(){
throw new Error('not implemented');
},
"public function set shader",function(value){
throw new Error('not implemented');
},
"public function get topExtension",function(){
throw new Error('not implemented');
},
"public function set topExtension",function(value){
throw new Error('not implemented');
},
"public function ShaderFilter",function(shader){flash.filters.BitmapFilter.call(this);if(arguments.length<1){shader=null;}
throw new Error('not implemented');
},
];},[],["flash.filters.BitmapFilter","Error"], "0.8.0", "0.9.6"
);
// class flash.filters.GlowFilter
joo.classLoader.prepare("package flash.filters",
"public final class GlowFilter extends flash.filters.BitmapFilter",2,function($$private){;return[
"public function get alpha",function(){
throw new Error('not implemented');
},
"public function set alpha",function(value){
throw new Error('not implemented');
},
"public function get blurX",function(){
throw new Error('not implemented');
},
"public function set blurX",function(value){
throw new Error('not implemented');
},
"public function get blurY",function(){
throw new Error('not implemented');
},
"public function set blurY",function(value){
throw new Error('not implemented');
},
"public function get color",function(){
throw new Error('not implemented');
},
"public function set color",function(value){
throw new Error('not implemented');
},
"public function get inner",function(){
throw new Error('not implemented');
},
"public function set inner",function(value){
throw new Error('not implemented');
},
"public function get knockout",function(){
throw new Error('not implemented');
},
"public function set knockout",function(value){
throw new Error('not implemented');
},
"public function get quality",function(){
throw new Error('not implemented');
},
"public function set quality",function(value){
throw new Error('not implemented');
},
"public function get strength",function(){
throw new Error('not implemented');
},
"public function set strength",function(value){
throw new Error('not implemented');
},
"public function GlowFilter",function(color,alpha,blurX,blurY,strength,quality,inner,knockout){flash.filters.BitmapFilter.call(this);if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){color=0xFF0000;}alpha=1.0;}blurX=6.0;}blurY=6.0;}strength=2;}quality=1;}inner=false;}knockout=false;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
];},[],["flash.filters.BitmapFilter","Error"], "0.8.0", "0.9.6"
);
// class flash.filters.GradientBevelFilter
joo.classLoader.prepare("package flash.filters",
"public final class GradientBevelFilter extends flash.filters.BitmapFilter",2,function($$private){;return[
"public function get alphas",function(){
throw new Error('not implemented');
},
"public function set alphas",function(value){
throw new Error('not implemented');
},
"public function get angle",function(){
throw new Error('not implemented');
},
"public function set angle",function(value){
throw new Error('not implemented');
},
"public function get blurX",function(){
throw new Error('not implemented');
},
"public function set blurX",function(value){
throw new Error('not implemented');
},
"public function get blurY",function(){
throw new Error('not implemented');
},
"public function set blurY",function(value){
throw new Error('not implemented');
},
"public function get colors",function(){
throw new Error('not implemented');
},
"public function set colors",function(value){
throw new Error('not implemented');
},
"public function get distance",function(){
throw new Error('not implemented');
},
"public function set distance",function(value){
throw new Error('not implemented');
},
"public function get knockout",function(){
throw new Error('not implemented');
},
"public function set knockout",function(value){
throw new Error('not implemented');
},
"public function get quality",function(){
throw new Error('not implemented');
},
"public function set quality",function(value){
throw new Error('not implemented');
},
"public function get ratios",function(){
throw new Error('not implemented');
},
"public function set ratios",function(value){
throw new Error('not implemented');
},
"public function get strength",function(){
throw new Error('not implemented');
},
"public function set strength",function(value){
throw new Error('not implemented');
},
"public function get type",function(){
throw new Error('not implemented');
},
"public function set type",function(value){
throw new Error('not implemented');
},
"public function GradientBevelFilter",function(distance,angle,colors,alphas,ratios,blurX,blurY,strength,quality,type,knockout){flash.filters.BitmapFilter.call(this);if(arguments.length<11){if(arguments.length<10){if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){distance=4.0;}angle=45;}colors=null;}alphas=null;}ratios=null;}blurX=4.0;}blurY=4.0;}strength=1;}quality=1;}type="inner";}knockout=false;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
];},[],["flash.filters.BitmapFilter","Error"], "0.8.0", "0.9.6"
);
// class flash.filters.GradientGlowFilter
joo.classLoader.prepare("package flash.filters",
"public final class GradientGlowFilter extends flash.filters.BitmapFilter",2,function($$private){;return[
"public function get alphas",function(){
throw new Error('not implemented');
},
"public function set alphas",function(value){
throw new Error('not implemented');
},
"public function get angle",function(){
throw new Error('not implemented');
},
"public function set angle",function(value){
throw new Error('not implemented');
},
"public function get blurX",function(){
throw new Error('not implemented');
},
"public function set blurX",function(value){
throw new Error('not implemented');
},
"public function get blurY",function(){
throw new Error('not implemented');
},
"public function set blurY",function(value){
throw new Error('not implemented');
},
"public function get colors",function(){
throw new Error('not implemented');
},
"public function set colors",function(value){
throw new Error('not implemented');
},
"public function get distance",function(){
throw new Error('not implemented');
},
"public function set distance",function(value){
throw new Error('not implemented');
},
"public function get knockout",function(){
throw new Error('not implemented');
},
"public function set knockout",function(value){
throw new Error('not implemented');
},
"public function get quality",function(){
throw new Error('not implemented');
},
"public function set quality",function(value){
throw new Error('not implemented');
},
"public function get ratios",function(){
throw new Error('not implemented');
},
"public function set ratios",function(value){
throw new Error('not implemented');
},
"public function get strength",function(){
throw new Error('not implemented');
},
"public function set strength",function(value){
throw new Error('not implemented');
},
"public function get type",function(){
throw new Error('not implemented');
},
"public function set type",function(value){
throw new Error('not implemented');
},
"public function GradientGlowFilter",function(distance,angle,colors,alphas,ratios,blurX,blurY,strength,quality,type,knockout){flash.filters.BitmapFilter.call(this);if(arguments.length<11){if(arguments.length<10){if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){distance=4.0;}angle=45;}colors=null;}alphas=null;}ratios=null;}blurX=4.0;}blurY=4.0;}strength=1;}quality=1;}type="inner";}knockout=false;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
];},[],["flash.filters.BitmapFilter","Error"], "0.8.0", "0.9.6"
);
// class flash.filters.BevelFilter
joo.classLoader.prepare("package flash.filters",
"public final class BevelFilter extends flash.filters.BitmapFilter",2,function($$private){;return[
"public function get angle",function(){
throw new Error('not implemented');
},
"public function set angle",function(value){
throw new Error('not implemented');
},
"public function get blurX",function(){
throw new Error('not implemented');
},
"public function set blurX",function(value){
throw new Error('not implemented');
},
"public function get blurY",function(){
throw new Error('not implemented');
},
"public function set blurY",function(value){
throw new Error('not implemented');
},
"public function get distance",function(){
throw new Error('not implemented');
},
"public function set distance",function(value){
throw new Error('not implemented');
},
"public function get highlightAlpha",function(){
throw new Error('not implemented');
},
"public function set highlightAlpha",function(value){
throw new Error('not implemented');
},
"public function get highlightColor",function(){
throw new Error('not implemented');
},
"public function set highlightColor",function(value){
throw new Error('not implemented');
},
"public function get knockout",function(){
throw new Error('not implemented');
},
"public function set knockout",function(value){
throw new Error('not implemented');
},
"public function get quality",function(){
throw new Error('not implemented');
},
"public function set quality",function(value){
throw new Error('not implemented');
},
"public function get shadowAlpha",function(){
throw new Error('not implemented');
},
"public function set shadowAlpha",function(value){
throw new Error('not implemented');
},
"public function get shadowColor",function(){
throw new Error('not implemented');
},
"public function set shadowColor",function(value){
throw new Error('not implemented');
},
"public function get strength",function(){
throw new Error('not implemented');
},
"public function set strength",function(value){
throw new Error('not implemented');
},
"public function get type",function(){
throw new Error('not implemented');
},
"public function set type",function(value){
throw new Error('not implemented');
},
"public function BevelFilter",function(distance,angle,highlightColor,highlightAlpha,shadowColor,shadowAlpha,blurX,blurY,strength,quality,type,knockout){flash.filters.BitmapFilter.call(this);if(arguments.length<12){if(arguments.length<11){if(arguments.length<10){if(arguments.length<9){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){distance=4.0;}angle=45;}highlightColor=0xFFFFFF;}highlightAlpha=1.0;}shadowColor=0x000000;}shadowAlpha=1.0;}blurX=4.0;}blurY=4.0;}strength=1;}quality=1;}type="inner";}knockout=false;}
throw new Error('not implemented');
},
"override public function clone",function(){
throw new Error('not implemented');
},
];},[],["flash.filters.BitmapFilter","Error"], "0.8.0", "0.9.6"
);
// class flash.ui.Keyboard
joo.classLoader.prepare("package flash.ui",
"public final class Keyboard",1,function($$private){;return[
"public static function get capsLock",function(){
throw new Error('not implemented');
},
"public static function get hasVirtualKeyboard",function(){
throw new Error('not implemented');
},
"public static function get numLock",function(){
throw new Error('not implemented');
},
"public static function get physicalKeyboardType",function(){
throw new Error('not implemented');
},
"public static function isAccessible",function(){
throw new Error('not implemented');
},
"public static const",{BACKSPACE:8},
"public static const",{CAPS_LOCK:20},
"public static const",{CONTROL:17},
"public static const",{DELETE:46},
"public static const",{DOWN:40},
"public static const",{END:35},
"public static const",{ENTER:13},
"public static const",{ESCAPE:27},
"public static const",{F1:112},
"public static const",{F10:121},
"public static const",{F11:122},
"public static const",{F12:123},
"public static const",{F13:124},
"public static const",{F14:125},
"public static const",{F15:126},
"public static const",{F2:113},
"public static const",{F3:114},
"public static const",{F4:115},
"public static const",{F5:116},
"public static const",{F6:117},
"public static const",{F7:118},
"public static const",{F8:119},
"public static const",{F9:120},
"public static const",{G:71},
"public static const",{HOME:36},
"public static const",{INSERT:45},
"public static const",{LEFT:37},
"public static const",{NUMPAD_0:96},
"public static const",{NUMPAD_1:97},
"public static const",{NUMPAD_2:98},
"public static const",{NUMPAD_3:99},
"public static const",{NUMPAD_4:100},
"public static const",{NUMPAD_5:101},
"public static const",{NUMPAD_6:102},
"public static const",{NUMPAD_7:103},
"public static const",{NUMPAD_8:104},
"public static const",{NUMPAD_9:105},
"public static const",{NUMPAD_ADD:107},
"public static const",{NUMPAD_DECIMAL:110},
"public static const",{NUMPAD_DIVIDE:111},
"public static const",{NUMPAD_ENTER:108},
"public static const",{NUMPAD_MULTIPLY:106},
"public static const",{NUMPAD_SUBTRACT:109},
"public static const",{PAGE_DOWN:34},
"public static const",{PAGE_UP:33},
"public static const",{RIGHT:39},
"public static const",{SHIFT:16},
"public static const",{SPACE:32},
"public static const",{TAB:9},
"public static const",{UP:38},
];},["capsLock","hasVirtualKeyboard","numLock","physicalKeyboardType","isAccessible"],["Error"], "0.8.0", "0.9.6"
);
// class flash.ui.Mouse
joo.classLoader.prepare("package flash.ui",
"public final class Mouse",1,function($$private){;return[
"public static function get cursor",function(){
throw new Error('not implemented');
},
"public static function set cursor",function(value){
throw new Error('not implemented');
},
"public static function get supportsCursor",function(){
throw new Error('not implemented');
},
"public static function get supportsNativeCursor",function(){
throw new Error('not implemented');
},
"public static function hide",function(){
},
"public static function registerCursor",function(name,cursor){
throw new Error('not implemented');
},
"public static function show",function(){
},
"public static function unregisterCursor",function(name){
throw new Error('not implemented');
},
];},["cursor","supportsCursor","supportsNativeCursor","hide","registerCursor","show","unregisterCursor"],["Error"], "0.8.0", "0.9.6"
);
// class flash.ui.Multitouch
joo.classLoader.prepare("package flash.ui",
"public final class Multitouch",1,function($$private){;return[
"public static function get inputMode",function(){
throw new Error('not implemented');
},
"public static function set inputMode",function(value){
throw new Error('not implemented');
},
"public static function get maxTouchPoints",function(){
throw new Error('not implemented');
},
"public static function get supportedGestures",function(){
throw new Error('not implemented');
},
"public static function get supportsGestureEvents",function(){
throw new Error('not implemented');
},
"public static function get supportsTouchEvents",function(){
throw new Error('not implemented');
},
];},["inputMode","maxTouchPoints","supportedGestures","supportsGestureEvents","supportsTouchEvents"],["Error"], "0.8.0", "0.9.6"
);
// class flash.ui.ContextMenuBuiltInItems
joo.classLoader.prepare("package flash.ui",
"public final class ContextMenuBuiltInItems",1,function($$private){;return[
"public function get forwardAndBack",function(){
throw new Error('not implemented');
},
"public function set forwardAndBack",function(value){
throw new Error('not implemented');
},
"public function get loop",function(){
throw new Error('not implemented');
},
"public function set loop",function(value){
throw new Error('not implemented');
},
"public function get play",function(){
throw new Error('not implemented');
},
"public function set play",function(value){
throw new Error('not implemented');
},
"public function get print",function(){
throw new Error('not implemented');
},
"public function set print",function(value){
throw new Error('not implemented');
},
"public function get quality",function(){
throw new Error('not implemented');
},
"public function set quality",function(value){
throw new Error('not implemented');
},
"public function get rewind",function(){
throw new Error('not implemented');
},
"public function set rewind",function(value){
throw new Error('not implemented');
},
"public function get save",function(){
throw new Error('not implemented');
},
"public function set save",function(value){
throw new Error('not implemented');
},
"public function get zoom",function(){
throw new Error('not implemented');
},
"public function set zoom",function(value){
throw new Error('not implemented');
},
"public function ContextMenuBuiltInItems",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.ui.MouseCursor
joo.classLoader.prepare("package flash.ui",
"public final class MouseCursor",1,function($$private){;return[
"public static const",{ARROW:"arrow"},
"public static const",{AUTO:"auto"},
"public static const",{BUTTON:"button"},
"public static const",{HAND:"hand"},
"public static const",{IBEAM:"ibeam"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.ui.KeyboardType
joo.classLoader.prepare("package flash.ui",
"public final class KeyboardType",1,function($$private){;return[
"public static const",{ALPHANUMERIC:"alphanumeric"},
"public static const",{KEYPAD:"keypad"},
"public static const",{NONE:"none"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.ui.ContextMenuClipboardItems
joo.classLoader.prepare("package flash.ui",
"public final class ContextMenuClipboardItems",1,function($$private){;return[
"public function get clear",function(){
throw new Error('not implemented');
},
"public function set clear",function(value){
throw new Error('not implemented');
},
"public function get copy",function(){
throw new Error('not implemented');
},
"public function set copy",function(value){
throw new Error('not implemented');
},
"public function get cut",function(){
throw new Error('not implemented');
},
"public function set cut",function(value){
throw new Error('not implemented');
},
"public function get paste",function(){
throw new Error('not implemented');
},
"public function set paste",function(value){
throw new Error('not implemented');
},
"public function get selectAll",function(){
throw new Error('not implemented');
},
"public function set selectAll",function(value){
throw new Error('not implemented');
},
"public function ContextMenuClipboardItems",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.ui.MultitouchInputMode
joo.classLoader.prepare("package flash.ui",
"public final class MultitouchInputMode",1,function($$private){;return[
"public static const",{GESTURE:"gesture"},
"public static const",{NONE:"none"},
"public static const",{TOUCH_POINT:"touchPoint"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.ui.MouseCursorData
joo.classLoader.prepare("package flash.ui",
"public final class MouseCursorData",1,function($$private){;return[
"public function get data",function(){
throw new Error('not implemented');
},
"public function set data",function(value){
throw new Error('not implemented');
},
"public function get frameRate",function(){
throw new Error('not implemented');
},
"public function set frameRate",function(value){
throw new Error('not implemented');
},
"public function get hotSpot",function(){
throw new Error('not implemented');
},
"public function set hotSpot",function(value){
throw new Error('not implemented');
},
"public function MouseCursorData",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.ui.ContextMenuItem
joo.classLoader.prepare("package flash.ui",
{Event:{name:"menuItemSelect",type:"flash.events.ContextMenuEvent"}},
"public final class ContextMenuItem extends flash.events.EventDispatcher",2,function($$private){;return[
"public native function get caption",
"public native function set caption",
"public native function get separatorBefore",
"public native function set separatorBefore",
"public native function get visible",
"public native function set visible",
"public function ContextMenuItem",function(caption,separatorBefore,enabled,visible){flash.events.EventDispatcher.call(this);if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){separatorBefore=false;}enabled=true;}visible=true;}
this.caption=caption;
this.separatorBefore=separatorBefore;
this.visible=visible;
},
];},[],["flash.events.EventDispatcher"], "0.8.0", "0.9.6"
);
// class flash.ui.KeyLocation
joo.classLoader.prepare("package flash.ui",
"public final class KeyLocation",1,function($$private){;return[
"public static const",{LEFT:1},
"public static const",{NUM_PAD:3},
"public static const",{RIGHT:2},
"public static const",{STANDARD:0},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.ui.ContextMenu
joo.classLoader.prepare("package flash.ui",
{Event:{name:"menuSelect",type:"flash.events.ContextMenuEvent"}},
"public final class ContextMenu extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get builtInItems",function(){
throw new Error('not implemented');
},
"public function set builtInItems",function(value){
throw new Error('not implemented');
},
"public function get clipboardItems",function(){
throw new Error('not implemented');
},
"public function set clipboardItems",function(value){
throw new Error('not implemented');
},
"public function get clipboardMenu",function(){
throw new Error('not implemented');
},
"public function set clipboardMenu",function(value){
throw new Error('not implemented');
},
"public native function get customItems",
"public native function set customItems",
"public static function get isSupported",function(){
return false;
},
"public function get link",function(){
throw new Error('not implemented');
},
"public function set link",function(value){
throw new Error('not implemented');
},
"public function ContextMenu",function(){flash.events.EventDispatcher.call(this);
this['customItems']=[];
},
"public function hideBuiltInItems",function(){
this.hidden$2=true;
},
"private var",{hidden:false},
];},["isSupported"],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.geom.Matrix
joo.classLoader.prepare("package flash.geom",
"public class Matrix",1,function($$private){;return[
"public var",{a:NaN},
"public var",{b:NaN},
"public var",{c:NaN},
"public var",{d:NaN},
"public var",{tx:NaN},
"public var",{ty:NaN},
"public function Matrix",function(a,b,c,d,tx,ty){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){a=1;}b=0;}c=0;}d=1;}tx=0;}ty=0;}
this.a=a;
this.b=b;
this.c=c;
this.d=d;
this.tx=tx;
this.ty=ty;
},
"public function clone",function(){
return new flash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
},
"public function concat",function(m){
var a=this.a;
var b=this.b;
var c=this.c;
var d=this.d;
var tx=this.tx;
var ty=this.ty;
this.a=m.a*a+m.c*b;
this.b=m.b*a+m.d*b;
this.c=m.a*c+m.c*d;
this.d=m.b*c+m.d*d;
this.tx=m.a*tx+m.c*ty+m.tx;
this.ty=m.b*tx+m.d*ty+m.ty;
},
"public function createBox",function(scaleX,scaleY,rotation,tx,ty){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){rotation=0;}tx=0;}ty=0;}
if(rotation==0){
this.a=this.d=1;
this.b=this.c=0;
}else{
this.a=Math.cos(rotation);
this.b=Math.sin(rotation);
this.c=-this.b;
this.d=this.a;
}
if(scaleX!=1){
this.a*=scaleX;
this.c*=scaleY;
}
if(scaleY!=1){
this.b*=scaleY;
this.d*=scaleY;
}
this.tx=tx;
this.ty=ty;
},
"public function createGradientBox",function(width,height,rotation,tx,ty){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){rotation=0;}tx=0;}ty=0;}
this.createBox(width/flash.geom.Matrix.MAGIC_GRADIENT_FACTOR,height/flash.geom.Matrix.MAGIC_GRADIENT_FACTOR,rotation,tx+width/2,ty+height/2);
},
"public function deltaTransformPoint",function(point){
return new flash.geom.Point(this.a*point.x+this.c*point.y,this.b*point.x+this.d*point.y);
},
"public function identity",function(){
this.a=this.d=1;
this.b=this.c=this.tx=this.ty=0;
},
"public function invert",function(){
var a=this.a;
var b=this.b;
var c=this.c;
var d=this.d;
var tx=this.tx;
var ty=this.ty;
var det=a*d-c*b;
this.a=d/det;
this.b=-b/det;
this.c=-c/det;
this.d=a/det;
this.tx=(c*ty-tx*d)/det;
this.ty=(tx*b-a*ty)/det;
},
"public function rotate",function(angle){
if(angle!=0){
var cos=Math.cos(angle);
var sin=Math.sin(angle);
var a=this.a;
var b=this.b;
var c=this.c;
var d=this.d;
var tx=this.tx;
var ty=this.ty;
this.a=a*cos-c*sin;
this.b=a*sin+c*cos;
this.c=b*cos-d*sin;
this.d=b*sin+d*cos;
this.tx=tx*cos-ty*sin;
this.ty=tx*sin+ty*cos;
}
},
"public function scale",function(sx,sy){
if(sx!=1){
this.a*=sx;
this.tx*=sx;
}
if(sy!=1){
this.d*=sy;
this.ty*=sy;
}
},
"public function toString",function(){
return"("+["a="+this.a,"b="+this.b,"c="+this.c,"d="+this.d,"tx="+this.tx,"ty="+this.ty].join(", ")+")";
},
"public function transformPoint",function(point){
return new flash.geom.Point(this.a*point.x+this.c*point.y+this.tx,this.b*point.x+this.d*point.y+this.ty);
},
"public function translate",function(dx,dy){
this.tx+=dx;
this.ty+=dy;
},
"public static const",{MAGIC_GRADIENT_FACTOR:16384/10},
];},[],["Math","flash.geom.Point"], "0.8.0", "0.9.6"
);
// class flash.geom.Vector3D
joo.classLoader.prepare("package flash.geom",
"public class Vector3D",1,function($$private){;return[
"public function get length",function(){
throw new Error('not implemented');
},
"public function get lengthSquared",function(){
throw new Error('not implemented');
},
"public var",{w:NaN},
"public var",{x:NaN},
"public var",{y:NaN},
"public var",{z:NaN},
"public function Vector3D",function(x,y,z,w){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){x=0.;}y=0.;}z=0.;}w=0.;}
throw new Error('not implemented');
},
"public function add",function(a){
throw new Error('not implemented');
},
"public static function angleBetween",function(a,b){
throw new Error('not implemented');
},
"public function clone",function(){
throw new Error('not implemented');
},
"public function crossProduct",function(a){
throw new Error('not implemented');
},
"public function decrementBy",function(a){
throw new Error('not implemented');
},
"public static function distance",function(pt1,pt2){
throw new Error('not implemented');
},
"public function dotProduct",function(a){
throw new Error('not implemented');
},
"public function equals",function(toCompare,allFour){if(arguments.length<2){allFour=false;}
throw new Error('not implemented');
},
"public function incrementBy",function(a){
throw new Error('not implemented');
},
"public function nearEquals",function(toCompare,tolerance,allFour){if(arguments.length<3){allFour=false;}
throw new Error('not implemented');
},
"public function negate",function(){
throw new Error('not implemented');
},
"public function normalize",function(){
throw new Error('not implemented');
},
"public function project",function(){
throw new Error('not implemented');
},
"public function scaleBy",function(s){
throw new Error('not implemented');
},
"public function subtract",function(a){
throw new Error('not implemented');
},
"public function toString",function(){
throw new Error('not implemented');
},
"public static const",{X_AXIS:function(){return(new flash.geom.Vector3D(1,0,0));}},
"public static const",{Y_AXIS:function(){return(new flash.geom.Vector3D(0,1,0));}},
"public static const",{Z_AXIS:function(){return(new flash.geom.Vector3D(0,0,1));}},
];},["angleBetween","distance"],["Error"], "0.8.0", "0.9.6"
);
// class flash.geom.PerspectiveProjection
joo.classLoader.prepare("package flash.geom",
"public class PerspectiveProjection",1,function($$private){;return[
"public function get fieldOfView",function(){
throw new Error('not implemented');
},
"public function set fieldOfView",function(value){
throw new Error('not implemented');
},
"public function get focalLength",function(){
throw new Error('not implemented');
},
"public function set focalLength",function(value){
throw new Error('not implemented');
},
"public function get projectionCenter",function(){
throw new Error('not implemented');
},
"public function set projectionCenter",function(value){
throw new Error('not implemented');
},
"public function PerspectiveProjection",function(){
throw new Error('not implemented');
},
"public function toMatrix3D",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.geom.Orientation3D
joo.classLoader.prepare("package flash.geom",
"public final class Orientation3D",1,function($$private){;return[
"public static const",{AXIS_ANGLE:"axisAngle"},
"public static const",{EULER_ANGLES:"eulerAngles"},
"public static const",{QUATERNION:"quaternion"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.geom.Transform
joo.classLoader.prepare("package flash.geom",
"public class Transform",1,function($$private){;return[
"public function get colorTransform",function(){
return this._colorTransform$1;
},
"public function set colorTransform",function(value){
this._colorTransform$1=value;
},
"public function get concatenatedColorTransform",function(){
var concCT=this._colorTransform$1;
var currentDO=this.displayObject$1.parent;
while(currentDO){
concCT.concat(currentDO.transform.colorTransform);
currentDO=currentDO.parent;
}
return this.colorTransform;
},
"public function get concatenatedMatrix",function(){
var concMatrix=this._matrix$1;
var currentDO=this.displayObject$1.parent;
while(currentDO){
concMatrix.concat(currentDO.transform.matrix);
currentDO=currentDO.parent;
}
return concMatrix;
},
"public function get matrix",function(){
return this._matrix$1;
},
"public function set matrix",function(value){
this._matrix$1=value;
this.displayObject$1.transform=this;
},
"public function get matrix3D",function(){
throw new Error('not implemented');
},
"public function set matrix3D",function(value){
throw new Error('not implemented');
},
"public function get perspectiveProjection",function(){
throw new Error('not implemented');
},
"public function set perspectiveProjection",function(value){
throw new Error('not implemented');
},
"public function get pixelBounds",function(){
return new flash.geom.Rectangle(this.displayObject$1.x,this.displayObject$1.y,this.displayObject$1.width,this.displayObject$1.height);
},
"public function getRelativeMatrix3D",function(relativeTo){
throw new Error('not implemented');
},
"public function Transform",function(displayObject){
this.displayObject$1=displayObject;
},
"private var",{displayObject:null},
"private var",{_colorTransform:null},
"private var",{_matrix:null},
];},[],["Error","flash.geom.Rectangle"], "0.8.0", "0.9.6"
);
// class flash.geom.Rectangle
joo.classLoader.prepare("package flash.geom",
"public class Rectangle",1,function($$private){;return[
"public function get bottom",function(){
return this.y+this.height;
},
"public function set bottom",function(value){
this.height=Math.max(value-this.y,0);
},
"public function get bottomRight",function(){
return new flash.geom.Point(this.right,this.bottom);
},
"public function set bottomRight",function(value){
this.right=value.x;
this.bottom=value.y;
},
"public var",{height:NaN},
"public function get left",function(){
return this.x;
},
"public function set left",function(value){
this.width+=this.x-value;
this.x=value;
},
"public function get right",function(){
return this.x+this.width;
},
"public function set right",function(value){
this.width=value-this.x;
},
"public function get size",function(){
return new flash.geom.Point(this.width,this.height);
},
"public function set size",function(value){
this.width=value.x;
this.height=value.y;
},
"public function get top",function(){
return this.y;
},
"public function set top",function(value){
this.height+=this.y-value;
this.y=value;
},
"public function get topLeft",function(){
return new flash.geom.Point(this.x,this.y);
},
"public function set topLeft",function(value){
this.left=value.x;
this.top=value.y;
},
"public var",{width:NaN},
"public var",{x:NaN},
"public var",{y:NaN},
"public function Rectangle",function(x,y,width,height){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){x=0;}y=0;}width=0;}height=0;}
this.x=x;
this.y=y;
this.width=width;
this.height=height;
},
"public function clone",function(){
return new flash.geom.Rectangle(this.x,this.y,this.width,this.height);
},
"public function contains",function(x,y){
return this.x<=x&&x<this.right&&this.y<=y&&y<this.bottom;
},
"public function containsPoint",function(point){
return this.contains(point.x,point.y);
},
"public function containsRect",function(rect){
return this.containsPoint(rect.topLeft)&&this.containsPoint(rect.bottomRight);
},
"public function equals",function(toCompare){
return this.x==toCompare.x&&this.y==toCompare.y&&this.width==toCompare.width&&this.height==toCompare.height;
},
"public function inflate",function(dx,dy){
this.width+=dx;
this.height+=dy;
},
"public function inflatePoint",function(point){
this.inflate(point.x,point.y);
},
"public function intersection",function(toIntersect){
var x=Math.max(this.x,toIntersect.x);
var right=Math.min(this.right,toIntersect.right);
if(x<=right){
var y=Math.max(this.y,toIntersect.y);
var bottom=Math.min(this.bottom,toIntersect.bottom);
if(y<=bottom){
return new flash.geom.Rectangle(x,y,right-x,bottom-y);
}
}
return new flash.geom.Rectangle();
},
"public function intersects",function(toIntersect){
return Math.max(this.x,toIntersect.x)<=Math.min(this.right,toIntersect.right)
&&Math.max(this.y,toIntersect.y)<=Math.min(this.bottom,toIntersect.bottom);
},
"public function isEmpty",function(){
return this.x==0&&this.y==0&&this.width==0&&this.height==0;
},
"public function offset",function(dx,dy){
this.x+=dx;
this.y+=dy;
},
"public function offsetPoint",function(point){
this.offset(point.x,point.y);
},
"public function setEmpty",function(){
this.x=this.y=this.width=this.height=0;
},
"public function toString",function(){
return"[Rectangle("+[this.x,this.y,this.width,this.height].join(", ")+")]";
},
"public function union",function(toUnion){
var x=Math.min(this.x,toUnion.x);
var y=Math.min(this.y,toUnion.y);
return new flash.geom.Rectangle(x,y,Math.max(this.right,toUnion.right)-x,Math.max(this.bottom-toUnion.bottom)-y);
},
];},[],["Math","flash.geom.Point"], "0.8.0", "0.9.6"
);
// class flash.geom.Point
joo.classLoader.prepare("package flash.geom",
"public class Point",1,function($$private){;return[
"public function get length",function(){
return Math.sqrt(this.x^2+this.y^2);
},
"public var",{x:NaN},
"public var",{y:NaN},
"public function Point",function(x,y){if(arguments.length<2){if(arguments.length<1){x=0;}y=0;}
this.x=x;
this.y=y;
},
"public function add",function(v){
return new flash.geom.Point(this.x+v.x,this.y+v.y);
},
"public function clone",function(){
return new flash.geom.Point(this.x,this.y);
},
"public static function distance",function(pt1,pt2){
return Math.sqrt((pt2.x-pt1.x)^2+(pt2.y-pt2.y)^2);
},
"public function equals",function(toCompare){
return this.x==toCompare.x&&this.y==toCompare.y;
},
"public static function interpolate",function(pt1,pt2,f){
throw new Error('not implemented');
},
"public function normalize",function(thickness){
throw new Error('not implemented');
},
"public function offset",function(dx,dy){
this.x+=dx;
this.y+=dy;
},
"public static function polar",function(len,angle){
throw new Error('not implemented');
},
"public function subtract",function(v){
return new flash.geom.Point(this.x-v.x,this.y-v.y);
},
"public function toString",function(){
return["(x=",this.x,", y=",this.y,")"].join("");
},
];},["distance","interpolate","polar"],["Math","Error"], "0.8.0", "0.9.6"
);
// class flash.geom.Matrix3D
joo.classLoader.prepare("package flash.geom",
"public class Matrix3D",1,function($$private){;return[
"public function get determinant",function(){
throw new Error('not implemented');
},
"public function get position",function(){
throw new Error('not implemented');
},
"public function set position",function(value){
throw new Error('not implemented');
},
"public function get rawData",function(){
throw new Error('not implemented');
},
"public function set rawData",function(value){
throw new Error('not implemented');
},
"public function Matrix3D",function(v){if(arguments.length<1){v=null;}
throw new Error('not implemented');
},
"public function append",function(lhs){
throw new Error('not implemented');
},
"public function appendRotation",function(degrees,axis,pivotPoint){if(arguments.length<3){pivotPoint=null;}
throw new Error('not implemented');
},
"public function appendScale",function(xScale,yScale,zScale){
throw new Error('not implemented');
},
"public function appendTranslation",function(x,y,z){
throw new Error('not implemented');
},
"public function clone",function(){
throw new Error('not implemented');
},
"public function decompose",function(orientationStyle){if(arguments.length<1){orientationStyle="eulerAngles";}
throw new Error('not implemented');
},
"public function deltaTransformVector",function(v){
throw new Error('not implemented');
},
"public function identity",function(){
throw new Error('not implemented');
},
"public static function interpolate",function(thisMat,toMat,percent){
throw new Error('not implemented');
},
"public function interpolateTo",function(toMat,percent){
throw new Error('not implemented');
},
"public function invert",function(){
throw new Error('not implemented');
},
"public function pointAt",function(pos,at,up){if(arguments.length<3){if(arguments.length<2){at=null;}up=null;}
throw new Error('not implemented');
},
"public function prepend",function(rhs){
throw new Error('not implemented');
},
"public function prependRotation",function(degrees,axis,pivotPoint){if(arguments.length<3){pivotPoint=null;}
throw new Error('not implemented');
},
"public function prependScale",function(xScale,yScale,zScale){
throw new Error('not implemented');
},
"public function prependTranslation",function(x,y,z){
throw new Error('not implemented');
},
"public function recompose",function(components,orientationStyle){if(arguments.length<2){orientationStyle="eulerAngles";}
throw new Error('not implemented');
},
"public function transformVector",function(v){
throw new Error('not implemented');
},
"public function transformVectors",function(vin,vout){
throw new Error('not implemented');
},
"public function transpose",function(){
throw new Error('not implemented');
},
];},["interpolate"],["Error"], "0.8.0", "0.9.6"
);
// class flash.geom.ColorTransform
joo.classLoader.prepare("package flash.geom",
"public class ColorTransform",1,function($$private){;return[
"public var",{alphaMultiplier:NaN},
"public var",{alphaOffset:NaN},
"public var",{blueMultiplier:NaN},
"public var",{blueOffset:NaN},
"public function get color",function(){
return this.redOffset<<16|this.greenOffset<<8||this.blueOffset;
},
"public function set color",function(value){
this.redOffset=value>>16&0xF;
this.greenOffset=value>>8&0xF;
this.blueOffset=value&0xF;
this.redMultiplier=this.greenMultiplier=this.blueMultiplier=1;
},
"public var",{greenMultiplier:NaN},
"public var",{greenOffset:NaN},
"public var",{redMultiplier:NaN},
"public var",{redOffset:NaN},
"public function ColorTransform",function(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset){if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){redMultiplier=1.0;}greenMultiplier=1.0;}blueMultiplier=1.0;}alphaMultiplier=1.0;}redOffset=0;}greenOffset=0;}blueOffset=0;}alphaOffset=0;}
this.redMultiplier=redMultiplier;
this.greenMultiplier=greenMultiplier;
this.blueMultiplier=blueMultiplier;
this.alphaMultiplier=alphaMultiplier;
this.redOffset=redOffset;
this.greenOffset=greenOffset;
this.blueOffset=blueOffset;
this.alphaOffset=alphaOffset;
},
"public function concat",function(second){
this.redMultiplier*=second.redMultiplier;
this.greenMultiplier*=second.greenMultiplier;
this.blueMultiplier*=second.blueMultiplier;
this.alphaMultiplier*=second.alphaMultiplier;
this.redOffset+=second.redOffset;
this.greenOffset+=second.greenOffset;
this.blueOffset+=second.blueOffset;
this.alphaOffset+=second.alphaOffset;
},
"public function toString",function(){
return"[ColorTransform("+[this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,
this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset].join(", ")+")]";
},
"private var",{maps:null},
"public function getComponentMaps",function(){
if(!this.maps$1){
var offsets=[this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset];
var multipliers=[this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier];
this.maps$1=new Array(4);
for(var c=0;c<4;++c){
var offset=offsets[c];
var multiplier=multipliers[c];
var map;
if(offset==0&&multiplier==1){
map=null;
}else{
map=new Array(256);
for(var b=0;b<256;++b){
var val=offset+multiplier*b;
map[b]=val<=0?0:val<=255?val:255;
}
}
this.maps$1[c]=map;
}
}
return this.maps$1;
},
];},[],["Array"], "0.8.0", "0.9.6"
);
// class flash.geom.Utils3D
joo.classLoader.prepare("package flash.geom",
"public class Utils3D",1,function($$private){;return[
"public static function pointTowards",function(percent,mat,pos,at,up){if(arguments.length<5){if(arguments.length<4){at=null;}up=null;}
throw new Error('not implemented');
},
"public static function projectVector",function(m,v){
throw new Error('not implemented');
},
"public static function projectVectors",function(m,verts,projectedVerts,uvts){
throw new Error('not implemented');
},
];},["pointTowards","projectVector","projectVectors"],["Error"], "0.8.0", "0.9.6"
);
// class flash.net.XMLSocket
joo.classLoader.prepare("package flash.net",
{Event:{name:"close",type:"flash.events.Event"}},
{Event:{name:"connect",type:"flash.events.Event"}},
{Event:{name:"data",type:"flash.events.DataEvent"}},
{Event:{name:"ioError",type:"flash.events.IOErrorEvent"}},
{Event:{name:"securityError",type:"flash.events.SecurityErrorEvent"}},
"public class XMLSocket extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get connected",function(){
throw new Error('not implemented');
},
"public function get timeout",function(){
throw new Error('not implemented');
},
"public function set timeout",function(value){
throw new Error('not implemented');
},
"public function XMLSocket",function(host,port){flash.events.EventDispatcher.call(this);if(arguments.length<2){if(arguments.length<1){host=null;}port=0;}
throw new Error('not implemented');
},
"public function close",function(){
throw new Error('not implemented');
},
"public function connect",function(host,port){
throw new Error('not implemented');
},
"public function send",function(object){
throw new Error('not implemented');
},
];},[],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.net.NetConnection
joo.classLoader.prepare("package flash.net",
{Event:{name:"asyncError",type:"flash.events.AsyncErrorEvent"}},
{Event:{name:"ioError",type:"flash.events.IOErrorEvent"}},
{Event:{name:"netStatus",type:"flash.events.NetStatusEvent"}},
{Event:{name:"securityError",type:"flash.events.SecurityErrorEvent"}},
"public class NetConnection extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get client",function(){
throw new Error('not implemented');
},
"public function set client",function(value){
throw new Error('not implemented');
},
"public function get connected",function(){
throw new Error('not implemented');
},
"public function get connectedProxyType",function(){
throw new Error('not implemented');
},
"public static function get defaultObjectEncoding",function(){
throw new Error('not implemented');
},
"public static function set defaultObjectEncoding",function(value){
throw new Error('not implemented');
},
"public function get farID",function(){
throw new Error('not implemented');
},
"public function get farNonce",function(){
throw new Error('not implemented');
},
"public function get maxPeerConnections",function(){
throw new Error('not implemented');
},
"public function set maxPeerConnections",function(value){
throw new Error('not implemented');
},
"public function get nearID",function(){
throw new Error('not implemented');
},
"public function get nearNonce",function(){
throw new Error('not implemented');
},
"public function get objectEncoding",function(){
throw new Error('not implemented');
},
"public function set objectEncoding",function(value){
throw new Error('not implemented');
},
"public function get protocol",function(){
throw new Error('not implemented');
},
"public function get proxyType",function(){
throw new Error('not implemented');
},
"public function set proxyType",function(value){
throw new Error('not implemented');
},
"public function get unconnectedPeerStreams",function(){
throw new Error('not implemented');
},
"public function get uri",function(){
throw new Error('not implemented');
},
"public function get usingTLS",function(){
throw new Error('not implemented');
},
"public function NetConnection",function(){flash.events.EventDispatcher.call(this);
throw new Error('not implemented');
},
"public function addHeader",function(operation,mustUnderstand,param){if(arguments.length<3){if(arguments.length<2){mustUnderstand=false;}param=null;}
throw new Error('not implemented');
},
"public function call",function(command,responder){var rest=Array.prototype.slice.call(arguments,2);
throw new Error('not implemented');
},
"public function close",function(){
throw new Error('not implemented');
},
"public function connect",function(command){var rest=Array.prototype.slice.call(arguments,1);
throw new Error('not implemented');
},
];},["defaultObjectEncoding"],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.net.URLRequestMethod
joo.classLoader.prepare("package flash.net",
"public final class URLRequestMethod",1,function($$private){;return[
"public static const",{GET:"GET"},
"public static const",{POST:"POST"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.net.IDynamicPropertyOutput
joo.classLoader.prepare("package flash.net",
"public interface IDynamicPropertyOutput",1,function($$private){;return[,
];},[],[], "0.8.0", "0.9.6"
);
// class flash.net.FileReference
joo.classLoader.prepare("package flash.net",
{Event:{name:"cancel",type:"flash.events.Event"}},
{Event:{name:"complete",type:"flash.events.Event"}},
{Event:{name:"httpStatus",type:"flash.events.HTTPStatusEvent"}},
{Event:{name:"ioError",type:"flash.events.IOErrorEvent"}},
{Event:{name:"open",type:"flash.events.Event"}},
{Event:{name:"progress",type:"flash.events.ProgressEvent"}},
{Event:{name:"securityError",type:"flash.events.SecurityErrorEvent"}},
{Event:{name:"select",type:"flash.events.Event"}},
{Event:{name:"uploadCompleteData",type:"flash.events.DataEvent"}},
"public class FileReference extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get creationDate",function(){
throw new Error('not implemented');
},
"public function get creator",function(){
throw new Error('not implemented');
},
"public function get data",function(){
throw new Error('not implemented');
},
"public function get modificationDate",function(){
throw new Error('not implemented');
},
"public function get name",function(){
throw new Error('not implemented');
},
"public function get size",function(){
throw new Error('not implemented');
},
"public function get type",function(){
throw new Error('not implemented');
},
"public function FileReference",function(){flash.events.EventDispatcher.call(this);
throw new Error('not implemented');
},
"public function browse",function(typeFilter){if(arguments.length<1){typeFilter=null;}
throw new Error('not implemented');
},
"public function cancel",function(){
throw new Error('not implemented');
},
"public function download",function(request,defaultFileName){if(arguments.length<2){defaultFileName=null;}
throw new Error('not implemented');
},
"public function load",function(){
throw new Error('not implemented');
},
"public function save",function(data,defaultFileName){if(arguments.length<2){defaultFileName=null;}
throw new Error('not implemented');
},
"public function upload",function(request,uploadDataFieldName,testUpload){if(arguments.length<3){if(arguments.length<2){uploadDataFieldName="Filedata";}testUpload=false;}
throw new Error('not implemented');
},
];},[],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.net.NetStreamAppendBytesAction
joo.classLoader.prepare("package flash.net",
"public final class NetStreamAppendBytesAction",1,function($$private){;return[
"public static const",{END_SEQUENCE:"endSequence"},
"public static const",{RESET_BEGIN:"resetBegin"},
"public static const",{RESET_SEEK:"resetSeek"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.net.GroupSpecifier
joo.classLoader.prepare("package flash.net",
"public class GroupSpecifier",1,function($$private){;return[
"public function get ipMulticastMemberUpdatesEnabled",function(){
throw new Error('not implemented');
},
"public function set ipMulticastMemberUpdatesEnabled",function(value){
throw new Error('not implemented');
},
"public function get multicastEnabled",function(){
throw new Error('not implemented');
},
"public function set multicastEnabled",function(value){
throw new Error('not implemented');
},
"public function get objectReplicationEnabled",function(){
throw new Error('not implemented');
},
"public function set objectReplicationEnabled",function(value){
throw new Error('not implemented');
},
"public function get peerToPeerDisabled",function(){
throw new Error('not implemented');
},
"public function set peerToPeerDisabled",function(value){
throw new Error('not implemented');
},
"public function get postingEnabled",function(){
throw new Error('not implemented');
},
"public function set postingEnabled",function(value){
throw new Error('not implemented');
},
"public function get routingEnabled",function(){
throw new Error('not implemented');
},
"public function set routingEnabled",function(value){
throw new Error('not implemented');
},
"public function get serverChannelEnabled",function(){
throw new Error('not implemented');
},
"public function set serverChannelEnabled",function(value){
throw new Error('not implemented');
},
"public function GroupSpecifier",function(name){
throw new Error('not implemented');
},
"public function addBootstrapPeer",function(peerID){
throw new Error('not implemented');
},
"public function addIPMulticastAddress",function(address,port,source){if(arguments.length<3){if(arguments.length<2){port=null;}source=null;}
throw new Error('not implemented');
},
"public function authorizations",function(){
throw new Error('not implemented');
},
"public static function encodeBootstrapPeerIDSpec",function(peerID){
throw new Error('not implemented');
},
"public static function encodeIPMulticastAddressSpec",function(address,port,source){if(arguments.length<3){if(arguments.length<2){port=null;}source=null;}
throw new Error('not implemented');
},
"public static function encodePostingAuthorization",function(password){
throw new Error('not implemented');
},
"public static function encodePublishAuthorization",function(password){
throw new Error('not implemented');
},
"public function groupspecWithAuthorizations",function(){
throw new Error('not implemented');
},
"public function groupspecWithoutAuthorizations",function(){
throw new Error('not implemented');
},
"public function makeUnique",function(){
throw new Error('not implemented');
},
"public function setPostingPassword",function(password,salt){if(arguments.length<2){if(arguments.length<1){password=null;}salt=null;}
throw new Error('not implemented');
},
"public function setPublishPassword",function(password,salt){if(arguments.length<2){if(arguments.length<1){password=null;}salt=null;}
throw new Error('not implemented');
},
"public function toString",function(){
throw new Error('not implemented');
},
];},["encodeBootstrapPeerIDSpec","encodeIPMulticastAddressSpec","encodePostingAuthorization","encodePublishAuthorization"],["Error"], "0.8.0", "0.9.6"
);
// class flash.net.NetGroupReceiveMode
joo.classLoader.prepare("package flash.net",
"public final class NetGroupReceiveMode",1,function($$private){;return[
"public static const",{EXACT:"exact"},
"public static const",{NEAREST:"nearest"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.net.NetGroupReplicationStrategy
joo.classLoader.prepare("package flash.net",
"public final class NetGroupReplicationStrategy",1,function($$private){;return[
"public static const",{LOWEST_FIRST:"lowestFirst"},
"public static const",{RAREST_FIRST:"rarestFirst"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.net.LocalConnection
joo.classLoader.prepare("package flash.net",
{Event:{name:"asyncError",type:"flash.events.AsyncErrorEvent"}},
{Event:{name:"securityError",type:"flash.events.SecurityErrorEvent"}},
{Event:{name:"status",type:"flash.events.StatusEvent"}},
"public class LocalConnection extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get client",function(){
throw new Error('not implemented');
},
"public function set client",function(value){
throw new Error('not implemented');
},
"public function get domain",function(){
throw new Error('not implemented');
},
"public function get isPerUser",function(){
throw new Error('not implemented');
},
"public function set isPerUser",function(value){
throw new Error('not implemented');
},
"public static function get isSupported",function(){
throw new Error('not implemented');
},
"public function LocalConnection",function(){flash.events.EventDispatcher.call(this);
throw new Error('not implemented');
},
"public function allowDomain",function(){var domains=Array.prototype.slice.call(arguments);
throw new Error('not implemented');
},
"public function allowInsecureDomain",function(){var domains=Array.prototype.slice.call(arguments);
throw new Error('not implemented');
},
"public function close",function(){
throw new Error('not implemented');
},
"public function connect",function(connectionName){
throw new Error('not implemented');
},
"public function send",function(connectionName,methodName){var rest=Array.prototype.slice.call(arguments,2);
throw new Error('not implemented');
},
];},["isSupported"],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.net.NetStream
joo.classLoader.prepare("package flash.net",
{Event:{name:"asyncError",type:"flash.events.AsyncErrorEvent"}},
{Event:{name:"drmError",type:"flash.events.DRMErrorEvent"}},
{Event:{name:"drmStatus",type:"flash.events.DRMStatusEvent"}},
{Event:{name:"ioError",type:"flash.events.IOErrorEvent"}},
{Event:{name:"netStatus",type:"flash.events.NetStatusEvent"}},
{Event:{name:"status",type:"flash.events.StatusEvent"}},
"public class NetStream extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get audioReliable",function(){
throw new Error('not implemented');
},
"public function set audioReliable",function(value){
throw new Error('not implemented');
},
"public function get audioSampleAccess",function(){
throw new Error('not implemented');
},
"public function set audioSampleAccess",function(value){
throw new Error('not implemented');
},
"public function get backBufferLength",function(){
throw new Error('not implemented');
},
"public function get backBufferTime",function(){
throw new Error('not implemented');
},
"public function set backBufferTime",function(value){
throw new Error('not implemented');
},
"public function get bufferLength",function(){
throw new Error('not implemented');
},
"public function get bufferTime",function(){
throw new Error('not implemented');
},
"public function set bufferTime",function(value){
throw new Error('not implemented');
},
"public function get bufferTimeMax",function(){
throw new Error('not implemented');
},
"public function set bufferTimeMax",function(value){
throw new Error('not implemented');
},
"public function get bytesLoaded",function(){
throw new Error('not implemented');
},
"public function get bytesTotal",function(){
throw new Error('not implemented');
},
"public function get checkPolicyFile",function(){
throw new Error('not implemented');
},
"public function set checkPolicyFile",function(value){
throw new Error('not implemented');
},
"public function get client",function(){
throw new Error('not implemented');
},
"public function set client",function(value){
throw new Error('not implemented');
},
"public function get currentFPS",function(){
throw new Error('not implemented');
},
"public function get dataReliable",function(){
throw new Error('not implemented');
},
"public function set dataReliable",function(value){
throw new Error('not implemented');
},
"public function get farID",function(){
throw new Error('not implemented');
},
"public function get farNonce",function(){
throw new Error('not implemented');
},
"public function get inBufferSeek",function(){
throw new Error('not implemented');
},
"public function set inBufferSeek",function(value){
throw new Error('not implemented');
},
"public function get info",function(){
throw new Error('not implemented');
},
"public function get liveDelay",function(){
throw new Error('not implemented');
},
"public function get maxPauseBufferTime",function(){
throw new Error('not implemented');
},
"public function set maxPauseBufferTime",function(value){
throw new Error('not implemented');
},
"public function get multicastAvailabilitySendToAll",function(){
throw new Error('not implemented');
},
"public function set multicastAvailabilitySendToAll",function(value){
throw new Error('not implemented');
},
"public function get multicastAvailabilityUpdatePeriod",function(){
throw new Error('not implemented');
},
"public function set multicastAvailabilityUpdatePeriod",function(value){
throw new Error('not implemented');
},
"public function get multicastFetchPeriod",function(){
throw new Error('not implemented');
},
"public function set multicastFetchPeriod",function(value){
throw new Error('not implemented');
},
"public function get multicastInfo",function(){
throw new Error('not implemented');
},
"public function get multicastPushNeighborLimit",function(){
throw new Error('not implemented');
},
"public function set multicastPushNeighborLimit",function(value){
throw new Error('not implemented');
},
"public function get multicastRelayMarginDuration",function(){
throw new Error('not implemented');
},
"public function set multicastRelayMarginDuration",function(value){
throw new Error('not implemented');
},
"public function get multicastWindowDuration",function(){
throw new Error('not implemented');
},
"public function set multicastWindowDuration",function(value){
throw new Error('not implemented');
},
"public function get nearNonce",function(){
throw new Error('not implemented');
},
"public function get objectEncoding",function(){
throw new Error('not implemented');
},
"public function get peerStreams",function(){
throw new Error('not implemented');
},
"public function get soundTransform",function(){
throw new Error('not implemented');
},
"public function set soundTransform",function(value){
throw new Error('not implemented');
},
"public function get time",function(){
throw new Error('not implemented');
},
"public function get videoReliable",function(){
throw new Error('not implemented');
},
"public function set videoReliable",function(value){
throw new Error('not implemented');
},
"public function get videoSampleAccess",function(){
throw new Error('not implemented');
},
"public function set videoSampleAccess",function(value){
throw new Error('not implemented');
},
"public function NetStream",function(connection,peerID){flash.events.EventDispatcher.call(this);if(arguments.length<2){peerID="connectToFMS";}
throw new Error('not implemented');
},
"public function appendBytes",function(bytes){
throw new Error('not implemented');
},
"public function appendBytesAction",function(netStreamAppendBytesAction){
throw new Error('not implemented');
},
"public function attach",function(connection){
throw new Error('not implemented');
},
"public function attachAudio",function(microphone){
throw new Error('not implemented');
},
"public function attachCamera",function(theCamera,snapshotMilliseconds){if(arguments.length<2){snapshotMilliseconds=-1;}
throw new Error('not implemented');
},
"public function close",function(){
throw new Error('not implemented');
},
"public function onPeerConnect",function(subscriber){
throw new Error('not implemented');
},
"public function pause",function(){
throw new Error('not implemented');
},
"public function play",function(){var rest=Array.prototype.slice.call(arguments);
throw new Error('not implemented');
},
"public function play2",function(param){
throw new Error('not implemented');
},
"public function publish",function(name,type){if(arguments.length<2){if(arguments.length<1){name=null;}type=null;}
throw new Error('not implemented');
},
"public function receiveAudio",function(flag){
throw new Error('not implemented');
},
"public function receiveVideo",function(flag){
throw new Error('not implemented');
},
"public function receiveVideoFPS",function(FPS){
throw new Error('not implemented');
},
"public function resume",function(){
throw new Error('not implemented');
},
"public function seek",function(offset){
throw new Error('not implemented');
},
"public function send",function(handlerName){var rest=Array.prototype.slice.call(arguments,1);
throw new Error('not implemented');
},
"public function step",function(frames){
throw new Error('not implemented');
},
"public function togglePause",function(){
throw new Error('not implemented');
},
"public static const",{CONNECT_TO_FMS:"connectToFMS"},
"public static const",{DIRECT_CONNECTIONS:"directConnections"},
];},[],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.net.Responder
joo.classLoader.prepare("package flash.net",
"public class Responder",1,function($$private){;return[
"public function Responder",function(result,status){if(arguments.length<2){status=null;}
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.net.SharedObject
joo.classLoader.prepare("package flash.net",
{Event:{name:"asyncError",type:"flash.events.AsyncErrorEvent"}},
{Event:{name:"netStatus",type:"flash.events.NetStatusEvent"}},
{Event:{name:"sync",type:"flash.events.SyncEvent"}},
"public class SharedObject extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get client",function(){
throw new Error('not implemented');
},
"public function set client",function(value){
throw new Error('not implemented');
},
"public function get data",function(){
return this._data$2;
},
"public static function get defaultObjectEncoding",function(){
throw new Error('not implemented');
},
"public static function set defaultObjectEncoding",function(value){
throw new Error('not implemented');
},
"public function set fps",function(value){
throw new Error('not implemented');
},
"public function get objectEncoding",function(){
throw new Error('not implemented');
},
"public function set objectEncoding",function(value){
throw new Error('not implemented');
},
"public function get size",function(){
throw new Error('not implemented');
},
"public function clear",function(){
throw new Error('not implemented');
},
"public function close",function(){
throw new Error('not implemented');
},
"public function connect",function(myConnection,params){if(arguments.length<2){params=null;}
throw new Error('not implemented');
},
"public function flush",function(minDiskSpace){if(arguments.length<1){minDiskSpace=0;}
throw new Error('not implemented');
},
"public static function getLocal",function(name,localPath,secure){if(arguments.length<3){if(arguments.length<2){localPath=null;}secure=false;}
return new flash.net.SharedObject({});
},
"public static function getRemote",function(name,remotePath,persistence,secure){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){remotePath=null;}persistence=false;}secure=false;}
throw new Error('not implemented');
},
"public function send",function(){var rest=Array.prototype.slice.call(arguments);
throw new Error('not implemented');
},
"public function setDirty",function(propertyName){
throw new Error('not implemented');
},
"public function setProperty",function(propertyName,value){if(arguments.length<2){value=null;}
throw new Error('not implemented');
},
"public function SharedObject",function(data){flash.events.EventDispatcher.call(this);
this._data$2=data;
},
"private var",{_data:null},
];},["defaultObjectEncoding","getLocal","getRemote"],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.net.NetStreamPlayTransitions
joo.classLoader.prepare("package flash.net",
"public class NetStreamPlayTransitions",1,function($$private){;return[
"public static const",{APPEND:"append"},
"public static const",{APPEND_AND_WAIT:"appendAndWait"},
"public static const",{RESET:"reset"},
"public static const",{RESUME:"resume"},
"public static const",{STOP:"stop"},
"public static const",{SWAP:"swap"},
"public static const",{SWITCH:"switch"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.net.NetGroupSendMode
joo.classLoader.prepare("package flash.net",
"public final class NetGroupSendMode",1,function($$private){;return[
"public static const",{NEXT_DECREASING:"nextDecreasing"},
"public static const",{NEXT_INCREASING:"nextIncreasing"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.net.URLStream
joo.classLoader.prepare("package flash.net",
{Event:{name:"complete",type:"flash.events.Event"}},
{Event:{name:"httpStatus",type:"flash.events.HTTPStatusEvent"}},
{Event:{name:"ioError",type:"flash.events.IOErrorEvent"}},
{Event:{name:"open",type:"flash.events.Event"}},
{Event:{name:"progress",type:"flash.events.ProgressEvent"}},
{Event:{name:"securityError",type:"flash.events.SecurityErrorEvent"}},
"public class URLStream extends flash.events.EventDispatcher implements flash.utils.IDataInput",2,function($$private){;return[
"public function get bytesAvailable",function(){
throw new Error('not implemented');
},
"public function get connected",function(){
throw new Error('not implemented');
},
"public function get endian",function(){
throw new Error('not implemented');
},
"public function set endian",function(value){
throw new Error('not implemented');
},
"public function get objectEncoding",function(){
throw new Error('not implemented');
},
"public function set objectEncoding",function(value){
throw new Error('not implemented');
},
"public function close",function(){
throw new Error('not implemented');
},
"public function load",function(request){
throw new Error('not implemented');
},
"public function readBoolean",function(){
throw new Error('not implemented');
},
"public function readByte",function(){
throw new Error('not implemented');
},
"public function readBytes",function(bytes,offset,length){if(arguments.length<3){if(arguments.length<2){offset=0;}length=0;}
throw new Error('not implemented');
},
"public function readDouble",function(){
throw new Error('not implemented');
},
"public function readFloat",function(){
throw new Error('not implemented');
},
"public function readInt",function(){
throw new Error('not implemented');
},
"public function readMultiByte",function(length,charSet){
throw new Error('not implemented');
},
"public function readObject",function(){
throw new Error('not implemented');
},
"public function readShort",function(){
throw new Error('not implemented');
},
"public function readUnsignedByte",function(){
throw new Error('not implemented');
},
"public function readUnsignedInt",function(){
throw new Error('not implemented');
},
"public function readUnsignedShort",function(){
throw new Error('not implemented');
},
"public function readUTF",function(){
throw new Error('not implemented');
},
"public function readUTFBytes",function(length){
throw new Error('not implemented');
},
];},[],["flash.events.EventDispatcher","flash.utils.IDataInput","Error"], "0.8.0", "0.9.6"
);
// class flash.net.URLLoader
joo.classLoader.prepare("package flash.net",
{Event:{name:"complete",type:"flash.events.Event"}},
{Event:{name:"httpStatus",type:"flash.events.HTTPStatusEvent"}},
{Event:{name:"ioError",type:"flash.events.IOErrorEvent"}},
{Event:{name:"open",type:"flash.events.Event"}},
{Event:{name:"progress",type:"flash.events.ProgressEvent"}},
{Event:{name:"securityError",type:"flash.events.SecurityErrorEvent"}},
"public class URLLoader extends flash.events.EventDispatcher",2,function($$private){var is=joo.is,$$bound=joo.boundMethod,trace=joo.trace;return[function(){joo.classLoader.init(flash.events.IOErrorEvent,flash.events.Event,js.XMLHttpRequest);},
"public var",{bytesLoaded:0},
"public var",{bytesTotal:0},
"public var",{data:undefined},
"public var",{dataFormat:"text"},
"public function URLLoader",function(request){flash.events.EventDispatcher.call(this);if(arguments.length<1){request=null;}
if(request){
this.load(request);
}
},
"override public function addEventListener",function(type,listener,useCapture,priority,useWeakReference){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){useCapture=false;}priority=0;}useWeakReference=false;}
this.addEventListener$2(type,listener,useCapture,priority,useWeakReference);
},
"public function close",function(){
this.xmlHttpRequest$2.abort();
},
"public function load",function(request){
try{
this.xmlHttpRequest$2=new js.XMLHttpRequest();
}catch(e){if(is(e,Error)){
throw new Error("Your browser does not support XMLHttpRequest: "+e.message);
}else throw e;}
this.xmlHttpRequest$2.onreadystatechange=$$bound(this,"readyStateChanged$2");
this.xmlHttpRequest$2.open(request.method,request.url,true);
this.xmlHttpRequest$2.send(null);
},
"private function readyStateChanged",function(){
trace("URLLoader: "+this.xmlHttpRequest$2.readyState);
if(this.xmlHttpRequest$2.readyState==js.XMLHttpRequest.DONE){
this.data=this.xmlHttpRequest$2.responseText;
}
var eventType=this.createEvent$2();
if(eventType){
this.dispatchEvent(new flash.events.Event(eventType,false,false));
}
},
"private function createEvent",function(){
switch(this.xmlHttpRequest$2.readyState){
case js.XMLHttpRequest.OPENED:
return flash.events.Event.OPEN;
case js.XMLHttpRequest.DONE:
return this.xmlHttpRequest$2.status>=200&&this.xmlHttpRequest$2.status<400?flash.events.Event.COMPLETE:flash.events.IOErrorEvent.IO_ERROR;
}
return null;
},
"private var",{xmlHttpRequest:null},
];},[],["flash.events.EventDispatcher","js.XMLHttpRequest","Error","flash.events.Event","flash.events.IOErrorEvent"], "0.8.0", "0.9.6"
);
// class flash.net.FileReferenceList
joo.classLoader.prepare("package flash.net",
{Event:{name:"cancel",type:"flash.events.Event"}},
{Event:{name:"select",type:"flash.events.Event"}},
"public class FileReferenceList extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get fileList",function(){
throw new Error('not implemented');
},
"public function FileReferenceList",function(){flash.events.EventDispatcher.call(this);
throw new Error('not implemented');
},
"public function browse",function(typeFilter){if(arguments.length<1){typeFilter=null;}
throw new Error('not implemented');
},
];},[],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.net.Socket
joo.classLoader.prepare("package flash.net",
{Event:{name:"close",type:"flash.events.Event"}},
{Event:{name:"connect",type:"flash.events.Event"}},
{Event:{name:"ioError",type:"flash.events.IOErrorEvent"}},
{Event:{name:"securityError",type:"flash.events.SecurityErrorEvent"}},
{Event:{name:"socketData",type:"flash.events.ProgressEvent"}},
"public class Socket extends flash.events.EventDispatcher implements flash.utils.IDataInput,flash.utils.IDataOutput",2,function($$private){;return[
"public function get bytesAvailable",function(){
throw new Error('not implemented');
},
"public function get connected",function(){
throw new Error('not implemented');
},
"public function get endian",function(){
throw new Error('not implemented');
},
"public function set endian",function(value){
throw new Error('not implemented');
},
"public function get objectEncoding",function(){
throw new Error('not implemented');
},
"public function set objectEncoding",function(value){
throw new Error('not implemented');
},
"public function get timeout",function(){
throw new Error('not implemented');
},
"public function set timeout",function(value){
throw new Error('not implemented');
},
"public function Socket",function(host,port){flash.events.EventDispatcher.call(this);if(arguments.length<2){if(arguments.length<1){host=null;}port=0;}
throw new Error('not implemented');
},
"public function close",function(){
throw new Error('not implemented');
},
"public function connect",function(host,port){
throw new Error('not implemented');
},
"public function flush",function(){
throw new Error('not implemented');
},
"public function readBoolean",function(){
throw new Error('not implemented');
},
"public function readByte",function(){
throw new Error('not implemented');
},
"public function readBytes",function(bytes,offset,length){if(arguments.length<3){if(arguments.length<2){offset=0;}length=0;}
throw new Error('not implemented');
},
"public function readDouble",function(){
throw new Error('not implemented');
},
"public function readFloat",function(){
throw new Error('not implemented');
},
"public function readInt",function(){
throw new Error('not implemented');
},
"public function readMultiByte",function(length,charSet){
throw new Error('not implemented');
},
"public function readObject",function(){
throw new Error('not implemented');
},
"public function readShort",function(){
throw new Error('not implemented');
},
"public function readUnsignedByte",function(){
throw new Error('not implemented');
},
"public function readUnsignedInt",function(){
throw new Error('not implemented');
},
"public function readUnsignedShort",function(){
throw new Error('not implemented');
},
"public function readUTF",function(){
throw new Error('not implemented');
},
"public function readUTFBytes",function(length){
throw new Error('not implemented');
},
"public function writeBoolean",function(value){
throw new Error('not implemented');
},
"public function writeByte",function(value){
throw new Error('not implemented');
},
"public function writeBytes",function(bytes,offset,length){if(arguments.length<3){if(arguments.length<2){offset=0;}length=0;}
throw new Error('not implemented');
},
"public function writeDouble",function(value){
throw new Error('not implemented');
},
"public function writeFloat",function(value){
throw new Error('not implemented');
},
"public function writeInt",function(value){
throw new Error('not implemented');
},
"public function writeMultiByte",function(value,charSet){
throw new Error('not implemented');
},
"public function writeObject",function(object){
throw new Error('not implemented');
},
"public function writeShort",function(value){
throw new Error('not implemented');
},
"public function writeUnsignedInt",function(value){
throw new Error('not implemented');
},
"public function writeUTF",function(value){
throw new Error('not implemented');
},
"public function writeUTFBytes",function(value){
throw new Error('not implemented');
},
];},[],["flash.events.EventDispatcher","flash.utils.IDataInput","flash.utils.IDataOutput","Error"], "0.8.0", "0.9.6"
);
// class flash.net.NetStreamPlayOptions
joo.classLoader.prepare("package flash.net",
"public dynamic class NetStreamPlayOptions extends flash.events.EventDispatcher",2,function($$private){;return[
"public var",{len:NaN},
"public var",{offset:NaN},
"public var",{oldStreamName:null},
"public var",{start:NaN},
"public var",{streamName:null},
"public var",{transition:null},
"public function NetStreamPlayOptions",function(){flash.events.EventDispatcher.call(this);
throw new Error('not implemented');
},
];},[],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.net.NetStreamInfo
joo.classLoader.prepare("package flash.net",
"public final class NetStreamInfo",1,function($$private){;return[
"public function get audioBufferByteLength",function(){
throw new Error('not implemented');
},
"public function get audioBufferLength",function(){
throw new Error('not implemented');
},
"public function get audioByteCount",function(){
throw new Error('not implemented');
},
"public function get audioBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get audioLossRate",function(){
throw new Error('not implemented');
},
"public function get byteCount",function(){
throw new Error('not implemented');
},
"public function get currentBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get dataBufferByteLength",function(){
throw new Error('not implemented');
},
"public function get dataBufferLength",function(){
throw new Error('not implemented');
},
"public function get dataByteCount",function(){
throw new Error('not implemented');
},
"public function get dataBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get droppedFrames",function(){
throw new Error('not implemented');
},
"public function get maxBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get playbackBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get SRTT",function(){
throw new Error('not implemented');
},
"public function get videoBufferByteLength",function(){
throw new Error('not implemented');
},
"public function get videoBufferLength",function(){
throw new Error('not implemented');
},
"public function get videoByteCount",function(){
throw new Error('not implemented');
},
"public function get videoBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get videoLossRate",function(){
throw new Error('not implemented');
},
"public function toString",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.net.URLRequest
joo.classLoader.prepare("package flash.net",
"public final class URLRequest",1,function($$private){;return[function(){joo.classLoader.init(flash.net.URLRequestMethod);},
"public native function get contentType",
"public native function set contentType",
"public native function get data",
"public native function set data",
"public native function get digest",
"public native function set digest",
"public native function get method",
"public native function set method",
"public native function get requestHeaders",
"public native function set requestHeaders",
"public native function get url",
"public native function set url",
"public function URLRequest",function(url){if(arguments.length<1){url=null;}
this.method=flash.net.URLRequestMethod.GET;
this.url=url;
},
];},[],["flash.net.URLRequestMethod"], "0.8.0", "0.9.6"
);
// class flash.net.drm.DRMPlaybackTimeWindow
joo.classLoader.prepare("package flash.net.drm",
"public class DRMPlaybackTimeWindow",1,function($$private){;return[
"public function get endDate",function(){
throw new Error('not implemented');
},
"public function get period",function(){
throw new Error('not implemented');
},
"public function get startDate",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.net.drm.DRMVoucher
joo.classLoader.prepare("package flash.net.drm",
"public class DRMVoucher",1,function($$private){;return[
"public function get offlineLeaseEndDate",function(){
throw new Error('not implemented');
},
"public function get offlineLeaseStartDate",function(){
throw new Error('not implemented');
},
"public function get playbackTimeWindow",function(){
throw new Error('not implemented');
},
"public function get policies",function(){
throw new Error('not implemented');
},
"public function get voucherEndDate",function(){
throw new Error('not implemented');
},
"public function get voucherStartDate",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.net.drm.DRMContentData
joo.classLoader.prepare("package flash.net.drm",
"public class DRMContentData",1,function($$private){;return[
"public function get authenticationMethod",function(){
throw new Error('not implemented');
},
"public function get domain",function(){
throw new Error('not implemented');
},
"public function get licenseID",function(){
throw new Error('not implemented');
},
"public function get serverURL",function(){
throw new Error('not implemented');
},
"public function DRMContentData",function(rawData){if(arguments.length<1){rawData=null;}
throw new Error('not implemented');
},
"public function getVoucherAccessInfo",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.net.drm.VoucherAccessInfo
joo.classLoader.prepare("package flash.net.drm",
"public final class VoucherAccessInfo",1,function($$private){;return[
"public function get authenticationMethod",function(){
throw new Error('not implemented');
},
"public function get displayName",function(){
throw new Error('not implemented');
},
"public function get domain",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.net.drm.DRMManager
joo.classLoader.prepare("package flash.net.drm",
{Event:{name:"authenticationComplete",type:"flash.events.DRMAuthenticationCompleteEvent"}},
{Event:{name:"authenticationError",type:"flash.events.DRMAuthenticationErrorEvent"}},
{Event:{name:"drmError",type:"flash.events.DRMErrorEvent"}},
{Event:{name:"drmStatus",type:"flash.events.DRMStatusEvent"}},
"public class DRMManager extends flash.events.EventDispatcher",2,function($$private){;return[
"public static function get isSupported",function(){
throw new Error('not implemented');
},
"public function authenticate",function(serverURL,domain,username,password){
throw new Error('not implemented');
},
"public static function getDRMManager",function(){
throw new Error('not implemented');
},
"public function loadPreviewVoucher",function(contentData){
throw new Error('not implemented');
},
"public function loadVoucher",function(contentData,setting){
throw new Error('not implemented');
},
"public function setAuthenticationToken",function(serverUrl,domain,token){
throw new Error('not implemented');
},
];},["isSupported","getDRMManager"],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.net.drm.AuthenticationMethod
joo.classLoader.prepare("package flash.net.drm",
"public final class AuthenticationMethod",1,function($$private){;return[
"public static const",{ANONYMOUS:"anonymous"},
"public static const",{USERNAME_AND_PASSWORD:"usernameAndPassword"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.net.drm.LoadVoucherSetting
joo.classLoader.prepare("package flash.net.drm",
"public final class LoadVoucherSetting",1,function($$private){;return[
"public static const",{ALLOW_SERVER:"allowServer"},
"public static const",{FORCE_REFRESH:"forceRefresh"},
"public static const",{LOCAL_ONLY:"localOnly"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.net.SharedObjectFlushStatus
joo.classLoader.prepare("package flash.net",
"public final class SharedObjectFlushStatus",1,function($$private){;return[
"public static const",{FLUSHED:"flushed"},
"public static const",{PENDING:"pending"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.net.NetGroupInfo
joo.classLoader.prepare("package flash.net",
"public final class NetGroupInfo",1,function($$private){;return[
"public function get objectReplicationReceiveBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get objectReplicationSendBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get postingReceiveControlBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get postingReceiveDataBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get postingSendControlBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get postingSendDataBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get routingReceiveBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get routingSendBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function toString",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.net.NetStreamMulticastInfo
joo.classLoader.prepare("package flash.net",
"public final class NetStreamMulticastInfo",1,function($$private){;return[
"public function get bytesPushedFromPeers",function(){
throw new Error('not implemented');
},
"public function get bytesPushedToPeers",function(){
throw new Error('not implemented');
},
"public function get bytesReceivedFromIPMulticast",function(){
throw new Error('not implemented');
},
"public function get bytesReceivedFromServer",function(){
throw new Error('not implemented');
},
"public function get bytesRequestedByPeers",function(){
throw new Error('not implemented');
},
"public function get bytesRequestedFromPeers",function(){
throw new Error('not implemented');
},
"public function get fragmentsPushedFromPeers",function(){
throw new Error('not implemented');
},
"public function get fragmentsPushedToPeers",function(){
throw new Error('not implemented');
},
"public function get fragmentsReceivedFromIPMulticast",function(){
throw new Error('not implemented');
},
"public function get fragmentsReceivedFromServer",function(){
throw new Error('not implemented');
},
"public function get fragmentsRequestedByPeers",function(){
throw new Error('not implemented');
},
"public function get fragmentsRequestedFromPeers",function(){
throw new Error('not implemented');
},
"public function get receiveControlBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get receiveDataBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get receiveDataBytesPerSecondFromIPMulticast",function(){
throw new Error('not implemented');
},
"public function get receiveDataBytesPerSecondFromServer",function(){
throw new Error('not implemented');
},
"public function get sendControlBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function get sendControlBytesPerSecondToServer",function(){
throw new Error('not implemented');
},
"public function get sendDataBytesPerSecond",function(){
throw new Error('not implemented');
},
"public function toString",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.net.URLLoaderDataFormat
joo.classLoader.prepare("package flash.net",
"public final class URLLoaderDataFormat",1,function($$private){;return[
"public static const",{BINARY:"binary"},
"public static const",{TEXT:"text"},
"public static const",{VARIABLES:"variables"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.net.NetGroupSendResult
joo.classLoader.prepare("package flash.net",
"public final class NetGroupSendResult",1,function($$private){;return[
"public static const",{ERROR:"error"},
"public static const",{NO_ROUTE:"no route"},
"public static const",{SENT:"sent"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.net.URLVariables
joo.classLoader.prepare("package flash.net",
"public dynamic class URLVariables",1,function($$private){;return[
"public function URLVariables",function(source){if(arguments.length<1){source=null;}
throw new Error('not implemented');
},
"public function decode",function(source){
throw new Error('not implemented');
},
"public function toString",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.net.URLRequestHeader
joo.classLoader.prepare("package flash.net",
"public final class URLRequestHeader",1,function($$private){;return[
"public var",{name:null},
"public var",{value:null},
"public function URLRequestHeader",function(name,value){if(arguments.length<2){if(arguments.length<1){name="";}value="";}
this.name=name;
this.value=value;
},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.net.IDynamicPropertyWriter
joo.classLoader.prepare("package flash.net",
"public interface IDynamicPropertyWriter",1,function($$private){;return[,
];},[],[], "0.8.0", "0.9.6"
);
// class flash.net.FileFilter
joo.classLoader.prepare("package flash.net",
"public final class FileFilter",1,function($$private){;return[
"public function get description",function(){
throw new Error('not implemented');
},
"public function set description",function(value){
throw new Error('not implemented');
},
"public function get extension",function(){
throw new Error('not implemented');
},
"public function set extension",function(value){
throw new Error('not implemented');
},
"public function get macType",function(){
throw new Error('not implemented');
},
"public function set macType",function(value){
throw new Error('not implemented');
},
"public function FileFilter",function(description,extension,macType){if(arguments.length<3){macType=null;}
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.net.NetGroup
joo.classLoader.prepare("package flash.net",
{Event:{name:"netStatus",type:"flash.events.NetStatusEvent"}},
"public class NetGroup extends flash.events.EventDispatcher",2,function($$private){;return[
"public function get estimatedMemberCount",function(){
throw new Error('not implemented');
},
"public function get info",function(){
throw new Error('not implemented');
},
"public function get localCoverageFrom",function(){
throw new Error('not implemented');
},
"public function get localCoverageTo",function(){
throw new Error('not implemented');
},
"public function get neighborCount",function(){
throw new Error('not implemented');
},
"public function get receiveMode",function(){
throw new Error('not implemented');
},
"public function set receiveMode",function(value){
throw new Error('not implemented');
},
"public function get replicationStrategy",function(){
throw new Error('not implemented');
},
"public function set replicationStrategy",function(value){
throw new Error('not implemented');
},
"public function NetGroup",function(connection,groupspec){flash.events.EventDispatcher.call(this);
throw new Error('not implemented');
},
"public function addHaveObjects",function(startIndex,endIndex){
throw new Error('not implemented');
},
"public function addMemberHint",function(peerID){
throw new Error('not implemented');
},
"public function addNeighbor",function(peerID){
throw new Error('not implemented');
},
"public function addWantObjects",function(startIndex,endIndex){
throw new Error('not implemented');
},
"public function close",function(){
throw new Error('not implemented');
},
"public function convertPeerIDToGroupAddress",function(peerID){
throw new Error('not implemented');
},
"public function denyRequestedObject",function(requestID){
throw new Error('not implemented');
},
"public function post",function(message){
throw new Error('not implemented');
},
"public function removeHaveObjects",function(startIndex,endIndex){
throw new Error('not implemented');
},
"public function removeWantObjects",function(startIndex,endIndex){
throw new Error('not implemented');
},
"public function sendToAllNeighbors",function(message){
throw new Error('not implemented');
},
"public function sendToNearest",function(message,groupAddress){
throw new Error('not implemented');
},
"public function sendToNeighbor",function(message,sendMode){
throw new Error('not implemented');
},
"public function writeRequestedObject",function(requestID,object){
throw new Error('not implemented');
},
];},[],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.net.ObjectEncoding
joo.classLoader.prepare("package flash.net",
"public final class ObjectEncoding",1,function($$private){;return[
"public static function get dynamicPropertyWriter",function(){
throw new Error('not implemented');
},
"public static function set dynamicPropertyWriter",function(value){
throw new Error('not implemented');
},
"public static const",{AMF0:0},
"public static const",{AMF3:3},
"public static const",{DEFAULT:3},
];},["dynamicPropertyWriter"],["Error"], "0.8.0", "0.9.6"
);
// class flash.utils.Endian
joo.classLoader.prepare("package flash.utils",
"public final class Endian",1,function($$private){;return[
"public static const",{BIG_ENDIAN:"bigEndian"},
"public static const",{LITTLE_ENDIAN:"littleEndian"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.utils.IDataOutput
joo.classLoader.prepare("package flash.utils",
"public interface IDataOutput",1,function($$private){;return[,,,,,,,,,,,,,,,,
];},[],[], "0.8.0", "0.9.6"
);
// class flash.utils.Timer
joo.classLoader.prepare("package flash.utils",
{Event:{name:"timer",type:"flash.events.TimerEvent"}},
{Event:{name:"timerComplete",type:"flash.events.TimerEvent"}},
"public class Timer extends flash.events.EventDispatcher",2,function($$private){var $$bound=joo.boundMethod;return[function(){joo.classLoader.init(flash.events.TimerEvent);},
"public function get currentCount",function(){
return this._currentCount$2;
},
"public function get delay",function(){
return this._delay$2;
},
"public function set delay",function(value){
this._delay$2=value;
if(this.timer$2){
this.stop();
this.start();
}
},
"public function get repeatCount",function(){
return this._repeatCount$2;
},
"public function set repeatCount",function(value){
this._repeatCount$2=value;
this.checkComplete$2();
},
"public function get running",function(){
return this.timer$2!=null;
},
"public function Timer",function(delay,repeatCount){flash.events.EventDispatcher.call(this);if(arguments.length<2){repeatCount=0;}
this._delay$2=delay;
this._repeatCount$2=repeatCount;
},
"public function reset",function(){
this.stop();
this._currentCount$2=0;
},
"public function start",function(){
if(!this.timer$2){
this.timer$2=window.setInterval($$bound(this,"tick$2"),this._delay$2);
}
},
"public function stop",function(){
if(this.timer$2){
window.clearInterval(this.timer$2);
this.timer$2=null;
}
},
"private function tick",function(){
if(!this.timer$2){
return;
}
++this._currentCount$2;
try{
this.dispatchEvent(new flash.events.TimerEvent(flash.events.TimerEvent.TIMER));
this.checkComplete$2();
}catch(e){
this.stop();
throw e;
}
},
"private function checkComplete",function(){
if(this._repeatCount$2>0&&this._currentCount$2>=this._repeatCount$2){
this.stop();
this.dispatchEvent(new flash.events.TimerEvent(flash.events.TimerEvent.TIMER_COMPLETE));
}
},
"private var",{timer:null},
"private var",{_delay:NaN},
"private var",{_repeatCount:0},
"private var",{_currentCount:0},
];},[],["flash.events.EventDispatcher","flash.events.TimerEvent"], "0.8.0", "0.9.6"
);
// class flash.utils.IDataInput
joo.classLoader.prepare("package flash.utils",
"public interface IDataInput",1,function($$private){;return[,,,,,,,,,,,,,,,,,,,
];},[],[], "0.8.0", "0.9.6"
);
// class flash.utils.ByteArray
joo.classLoader.prepare("package flash.utils",
"public class ByteArray implements flash.utils.IDataInput,flash.utils.IDataOutput",1,function($$private){;return[
"public function get bytesAvailable",function(){
throw new Error('not implemented');
},
"public static function get defaultObjectEncoding",function(){
throw new Error('not implemented');
},
"public static function set defaultObjectEncoding",function(value){
throw new Error('not implemented');
},
"public function get endian",function(){
throw new Error('not implemented');
},
"public function set endian",function(value){
throw new Error('not implemented');
},
"public function get length",function(){
while(this._length$1 in this){
++this._length$1;
}
return this._length$1;
},
"public function set length",function(value){
this._length$1=value;
},
"public function get objectEncoding",function(){
throw new Error('not implemented');
},
"public function set objectEncoding",function(value){
throw new Error('not implemented');
},
"public function get position",function(){
throw new Error('not implemented');
},
"public function set position",function(value){
throw new Error('not implemented');
},
"public function ByteArray",function(){
},
"public function clear",function(){
throw new Error('not implemented');
},
"public function compress",function(algorithm){
throw new Error('not implemented');
},
"public function deflate",function(){
throw new Error('not implemented');
},
"public function inflate",function(){
throw new Error('not implemented');
},
"public function readBoolean",function(){
throw new Error('not implemented');
},
"public function readByte",function(){
throw new Error('not implemented');
},
"public function readBytes",function(bytes,offset,length){if(arguments.length<3){if(arguments.length<2){offset=0;}length=0;}
throw new Error('not implemented');
},
"public function readDouble",function(){
throw new Error('not implemented');
},
"public function readFloat",function(){
throw new Error('not implemented');
},
"public function readInt",function(){
throw new Error('not implemented');
},
"public function readMultiByte",function(length,charSet){
throw new Error('not implemented');
},
"public function readObject",function(){
throw new Error('not implemented');
},
"public function readShort",function(){
throw new Error('not implemented');
},
"public function readUnsignedByte",function(){
throw new Error('not implemented');
},
"public function readUnsignedInt",function(){
throw new Error('not implemented');
},
"public function readUnsignedShort",function(){
throw new Error('not implemented');
},
"public function readUTF",function(){
throw new Error('not implemented');
},
"public function readUTFBytes",function(length){
throw new Error('not implemented');
},
"public function toString",function(){
throw new Error('not implemented');
},
"public function uncompress",function(algorithm){
throw new Error('not implemented');
},
"public function writeBoolean",function(value){
throw new Error('not implemented');
},
"public function writeByte",function(value){
throw new Error('not implemented');
},
"public function writeBytes",function(bytes,offset,length){if(arguments.length<3){if(arguments.length<2){offset=0;}length=0;}
throw new Error('not implemented');
},
"public function writeDouble",function(value){
throw new Error('not implemented');
},
"public function writeFloat",function(value){
throw new Error('not implemented');
},
"public function writeInt",function(value){
throw new Error('not implemented');
},
"public function writeMultiByte",function(value,charSet){
throw new Error('not implemented');
},
"public function writeObject",function(object){
throw new Error('not implemented');
},
"public function writeShort",function(value){
throw new Error('not implemented');
},
"public function writeUnsignedInt",function(value){
throw new Error('not implemented');
},
"public function writeUTF",function(value){
throw new Error('not implemented');
},
"public function writeUTFBytes",function(value){
throw new Error('not implemented');
},
"private var",{_length:0},
];},["defaultObjectEncoding"],["flash.utils.IDataInput","flash.utils.IDataOutput","Error"], "0.8.0", "0.9.6"
);
// class flash.utils.Proxy
joo.classLoader.prepare("package flash.utils",
"public class Proxy",1,function($$private){;return[
"flash_proxy function callProperty",function(name){var rest=Array.prototype.slice.call(arguments,1);
throw new Error('not implemented');
},
"flash_proxy function deleteProperty",function(name){
throw new Error('not implemented');
},
"flash_proxy function getDescendants",function(name){
throw new Error('not implemented');
},
"flash_proxy function getProperty",function(name){
throw new Error('not implemented');
},
"flash_proxy function hasProperty",function(name){
throw new Error('not implemented');
},
"flash_proxy function isAttribute",function(name){
throw new Error('not implemented');
},
"flash_proxy function nextName",function(index){
throw new Error('not implemented');
},
"flash_proxy function nextNameIndex",function(index){
throw new Error('not implemented');
},
"flash_proxy function nextValue",function(index){
throw new Error('not implemented');
},
"flash_proxy function setProperty",function(name,value){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.utils.IExternalizable
joo.classLoader.prepare("package flash.utils",
"public interface IExternalizable",1,function($$private){;return[,,
];},[],[], "0.8.0", "0.9.6"
);
// class flash.utils.flash_proxy
joo.classLoader.prepare("package flash.utils",
"public namespace flash_proxy","http://www.adobe.com/flash/proxy",[],[], "0.8.0", "0.9.6"
);
// class flash.utils.Dictionary
joo.classLoader.prepare("package flash.utils",
"public dynamic class Dictionary",1,function($$private){var trace=joo.trace;return[
"public function Dictionary",function(weakKeys){if(arguments.length<1){weakKeys=false;}
if(weakKeys){
trace("[WARN]","Dictionary with weakKeys not supported by Jangaroo.");
}
},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.printing.PrintJobOrientation
joo.classLoader.prepare("package flash.printing",
"public final class PrintJobOrientation",1,function($$private){;return[
"public static const",{LANDSCAPE:"landscape"},
"public static const",{PORTRAIT:"portrait"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.printing.PrintJobOptions
joo.classLoader.prepare("package flash.printing",
"public class PrintJobOptions",1,function($$private){;return[
"public var",{printAsBitmap:false},
"public function PrintJobOptions",function(printAsBitmap){if(arguments.length<1){printAsBitmap=false;}
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.printing.PrintJob
joo.classLoader.prepare("package flash.printing",
"public class PrintJob extends flash.events.EventDispatcher",2,function($$private){;return[
"public static function get isSupported",function(){
return false;
},
"public function get orientation",function(){
throw new Error('not implemented');
},
"public function set orientation",function(value){
throw new Error('not implemented');
},
"public function get pageHeight",function(){
throw new Error('not implemented');
},
"public function get pageWidth",function(){
throw new Error('not implemented');
},
"public function get paperHeight",function(){
throw new Error('not implemented');
},
"public function get paperWidth",function(){
throw new Error('not implemented');
},
"public function PrintJob",function(){flash.events.EventDispatcher.call(this);
throw new Error('not implemented');
},
"public function addPage",function(sprite,printArea,options,frameNum){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){printArea=null;}options=null;}frameNum=0;}
throw new Error('not implemented');
},
"public function send",function(){
throw new Error('not implemented');
},
"public function start",function(){
throw new Error('not implemented');
},
];},["isSupported"],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flash.sampler.StackFrame
joo.classLoader.prepare("package flash.sampler",
"public final class StackFrame",1,function($$private){;return[
"public function toString",function(){
throw new Error('not implemented');
},
"public native function get file",
"public native function get line",
"public native function get name",
"public native function get scriptID",
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.sampler.NewObjectSample
joo.classLoader.prepare("package flash.sampler",
"public final class NewObjectSample extends flash.sampler.Sample",2,function($$private){;return[
"public function get object",function(){
throw new Error('not implemented');
},
"public function get size",function(){
throw new Error('not implemented');
},
"public native function get type",
];},[],["flash.sampler.Sample","Error"], "0.8.0", "0.9.6"
);
// class flash.sampler.DeleteObjectSample
joo.classLoader.prepare("package flash.sampler",
"public final class DeleteObjectSample extends flash.sampler.Sample",2,function($$private){;return[
"public native function get id",
"public native function get size",
];},[],["flash.sampler.Sample"], "0.8.0", "0.9.6"
);
// class flash.sampler.Sample
joo.classLoader.prepare("package flash.sampler",
"public class Sample",1,function($$private){;return[
"public native function get stack",
"public native function get time",
];},[],[], "0.8.0", "0.9.6"
);
// class flash.xml.XMLNodeType
joo.classLoader.prepare("package flash.xml",
"public final class XMLNodeType",1,function($$private){;return[
"public static const",{ELEMENT_NODE:1},
"public static const",{TEXT_NODE:3},
"internal static const",{DOCUMENT_NODE:0},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.xml.XMLNode
joo.classLoader.prepare("package flash.xml",
"public class XMLNode",1,function($$private){;return[
"public function get attributes",function(){
throw new Error('not implemented');
},
"public function set attributes",function(value){
throw new Error('not implemented');
},
"public function get childNodes",function(){
throw new Error('not implemented');
},
"public var",{firstChild:null},
"public var",{lastChild:null},
"public function get localName",function(){
throw new Error('not implemented');
},
"public function get namespaceURI",function(){
throw new Error('not implemented');
},
"public var",{nextSibling:null},
"public var",{nodeName:null},
"public var",{nodeType:0},
"public var",{nodeValue:null},
"public var",{parentNode:null},
"public function get prefix",function(){
throw new Error('not implemented');
},
"public var",{previousSibling:null},
"public function XMLNode",function(type,value){
throw new Error('not implemented');
},
"public function appendChild",function(node){
throw new Error('not implemented');
},
"public function cloneNode",function(deep){
throw new Error('not implemented');
},
"public function getNamespaceForPrefix",function(prefix){
throw new Error('not implemented');
},
"public function getPrefixForNamespace",function(ns){
throw new Error('not implemented');
},
"public function hasChildNodes",function(){
throw new Error('not implemented');
},
"public function insertBefore",function(node,before){
throw new Error('not implemented');
},
"public function removeNode",function(){
throw new Error('not implemented');
},
"public function toString",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.xml.XMLDocument
joo.classLoader.prepare("package flash.xml",
"public class XMLDocument extends flash.xml.XMLNode",2,function($$private){;return[function(){joo.classLoader.init(flash.xml.XMLNodeType);},
"public var",{docTypeDecl:null},
"public var",{idMap:null},
"public var",{ignoreWhite:false},
"public var",{xmlDecl:null},
"public function XMLDocument",function(source){if(arguments.length<1){source=null;}
flash.xml.XMLNode.call(this,flash.xml.XMLNodeType.DOCUMENT_NODE,source);
},
"public function createElement",function(name){
return new flash.xml.XMLNode(flash.xml.XMLNodeType.ELEMENT_NODE,name);
},
"public function createTextNode",function(text){
return new flash.xml.XMLNode(flash.xml.XMLNodeType.ELEMENT_NODE,text);
},
"public function parseXML",function(source){
throw new Error('not implemented');
},
"override public function toString",function(){
throw new Error('not implemented');
},
];},[],["flash.xml.XMLNode","flash.xml.XMLNodeType","Error"], "0.8.0", "0.9.6"
);
// class flash.globalization.DateTimeNameContext
joo.classLoader.prepare("package flash.globalization",
"public final class DateTimeNameContext",1,function($$private){;return[
"public static const",{FORMAT:"format"},
"public static const",{STANDALONE:"standalone"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.globalization.DateTimeFormatter
joo.classLoader.prepare("package flash.globalization",
"public final class DateTimeFormatter",1,function($$private){;return[
"public function get actualLocaleIDName",function(){
throw new Error('not implemented');
},
"public function get lastOperationStatus",function(){
throw new Error('not implemented');
},
"public function get requestedLocaleIDName",function(){
throw new Error('not implemented');
},
"public function DateTimeFormatter",function(requestedLocaleIDName,dateStyle,timeStyle){if(arguments.length<3){if(arguments.length<2){dateStyle="long";}timeStyle="long";}
throw new Error('not implemented');
},
"public function format",function(dateTime){
throw new Error('not implemented');
},
"public function formatUTC",function(dateTime){
throw new Error('not implemented');
},
"public static function getAvailableLocaleIDNames",function(){
throw new Error('not implemented');
},
"public function getDateStyle",function(){
throw new Error('not implemented');
},
"public function getDateTimePattern",function(){
throw new Error('not implemented');
},
"public function getFirstWeekday",function(){
throw new Error('not implemented');
},
"public function getMonthNames",function(nameStyle,context){if(arguments.length<2){if(arguments.length<1){nameStyle="full";}context="standalone";}
throw new Error('not implemented');
},
"public function getTimeStyle",function(){
throw new Error('not implemented');
},
"public function getWeekdayNames",function(nameStyle,context){if(arguments.length<2){if(arguments.length<1){nameStyle="full";}context="standalone";}
throw new Error('not implemented');
},
"public function setDateTimePattern",function(pattern){
throw new Error('not implemented');
},
"public function setDateTimeStyles",function(dateStyle,timeStyle){
throw new Error('not implemented');
},
];},["getAvailableLocaleIDNames"],["Error"], "0.8.0", "0.9.6"
);
// class flash.globalization.NumberFormatter
joo.classLoader.prepare("package flash.globalization",
"public final class NumberFormatter",1,function($$private){;return[
"public function get actualLocaleIDName",function(){
throw new Error('not implemented');
},
"public function get decimalSeparator",function(){
throw new Error('not implemented');
},
"public function set decimalSeparator",function(value){
throw new Error('not implemented');
},
"public function get digitsType",function(){
throw new Error('not implemented');
},
"public function set digitsType",function(value){
throw new Error('not implemented');
},
"public function get fractionalDigits",function(){
throw new Error('not implemented');
},
"public function set fractionalDigits",function(value){
throw new Error('not implemented');
},
"public function get groupingPattern",function(){
throw new Error('not implemented');
},
"public function set groupingPattern",function(value){
throw new Error('not implemented');
},
"public function get groupingSeparator",function(){
throw new Error('not implemented');
},
"public function set groupingSeparator",function(value){
throw new Error('not implemented');
},
"public function get lastOperationStatus",function(){
throw new Error('not implemented');
},
"public function get leadingZero",function(){
throw new Error('not implemented');
},
"public function set leadingZero",function(value){
throw new Error('not implemented');
},
"public function get negativeNumberFormat",function(){
throw new Error('not implemented');
},
"public function set negativeNumberFormat",function(value){
throw new Error('not implemented');
},
"public function get negativeSymbol",function(){
throw new Error('not implemented');
},
"public function set negativeSymbol",function(value){
throw new Error('not implemented');
},
"public function get requestedLocaleIDName",function(){
throw new Error('not implemented');
},
"public function get trailingZeros",function(){
throw new Error('not implemented');
},
"public function set trailingZeros",function(value){
throw new Error('not implemented');
},
"public function get useGrouping",function(){
throw new Error('not implemented');
},
"public function set useGrouping",function(value){
throw new Error('not implemented');
},
"public function NumberFormatter",function(requestedLocaleIDName){
throw new Error('not implemented');
},
"public function formatInt",function(value){
throw new Error('not implemented');
},
"public function formatNumber",function(value){
throw new Error('not implemented');
},
"public function formatUint",function(value){
throw new Error('not implemented');
},
"public static function getAvailableLocaleIDNames",function(){
throw new Error('not implemented');
},
"public function parse",function(parseString){
throw new Error('not implemented');
},
"public function parseNumber",function(parseString){
throw new Error('not implemented');
},
];},["getAvailableLocaleIDNames"],["Error"], "0.8.0", "0.9.6"
);
// class flash.globalization.CurrencyFormatter
joo.classLoader.prepare("package flash.globalization",
"public final class CurrencyFormatter",1,function($$private){;return[
"public function get actualLocaleIDName",function(){
throw new Error('not implemented');
},
"public function get currencyISOCode",function(){
throw new Error('not implemented');
},
"public function get currencySymbol",function(){
throw new Error('not implemented');
},
"public function get decimalSeparator",function(){
throw new Error('not implemented');
},
"public function set decimalSeparator",function(value){
throw new Error('not implemented');
},
"public function get digitsType",function(){
throw new Error('not implemented');
},
"public function set digitsType",function(value){
throw new Error('not implemented');
},
"public function get fractionalDigits",function(){
throw new Error('not implemented');
},
"public function set fractionalDigits",function(value){
throw new Error('not implemented');
},
"public function get groupingPattern",function(){
throw new Error('not implemented');
},
"public function set groupingPattern",function(value){
throw new Error('not implemented');
},
"public function get groupingSeparator",function(){
throw new Error('not implemented');
},
"public function set groupingSeparator",function(value){
throw new Error('not implemented');
},
"public function get lastOperationStatus",function(){
throw new Error('not implemented');
},
"public function get leadingZero",function(){
throw new Error('not implemented');
},
"public function set leadingZero",function(value){
throw new Error('not implemented');
},
"public function get negativeCurrencyFormat",function(){
throw new Error('not implemented');
},
"public function set negativeCurrencyFormat",function(value){
throw new Error('not implemented');
},
"public function get negativeSymbol",function(){
throw new Error('not implemented');
},
"public function set negativeSymbol",function(value){
throw new Error('not implemented');
},
"public function get positiveCurrencyFormat",function(){
throw new Error('not implemented');
},
"public function set positiveCurrencyFormat",function(value){
throw new Error('not implemented');
},
"public function get requestedLocaleIDName",function(){
throw new Error('not implemented');
},
"public function get trailingZeros",function(){
throw new Error('not implemented');
},
"public function set trailingZeros",function(value){
throw new Error('not implemented');
},
"public function get useGrouping",function(){
throw new Error('not implemented');
},
"public function set useGrouping",function(value){
throw new Error('not implemented');
},
"public function CurrencyFormatter",function(requestedLocaleIDName){
throw new Error('not implemented');
},
"public function format",function(value,withCurrencySymbol){if(arguments.length<2){withCurrencySymbol=false;}
throw new Error('not implemented');
},
"public function formattingWithCurrencySymbolIsSafe",function(requestedISOCode){
throw new Error('not implemented');
},
"public static function getAvailableLocaleIDNames",function(){
throw new Error('not implemented');
},
"public function parse",function(inputString){
throw new Error('not implemented');
},
"public function setCurrency",function(currencyISOCode,currencySymbol){
throw new Error('not implemented');
},
];},["getAvailableLocaleIDNames"],["Error"], "0.8.0", "0.9.6"
);
// class flash.globalization.StringTools
joo.classLoader.prepare("package flash.globalization",
"public final class StringTools",1,function($$private){;return[
"public function get actualLocaleIDName",function(){
throw new Error('not implemented');
},
"public function get lastOperationStatus",function(){
throw new Error('not implemented');
},
"public function get requestedLocaleIDName",function(){
throw new Error('not implemented');
},
"public function StringTools",function(requestedLocaleIDName){
throw new Error('not implemented');
},
"public static function getAvailableLocaleIDNames",function(){
throw new Error('not implemented');
},
"public function toLowerCase",function(s){
throw new Error('not implemented');
},
"public function toUpperCase",function(s){
throw new Error('not implemented');
},
];},["getAvailableLocaleIDNames"],["Error"], "0.8.0", "0.9.6"
);
// class flash.globalization.Collator
joo.classLoader.prepare("package flash.globalization",
"public final class Collator",1,function($$private){;return[
"public function get actualLocaleIDName",function(){
throw new Error('not implemented');
},
"public function get ignoreCase",function(){
throw new Error('not implemented');
},
"public function set ignoreCase",function(value){
throw new Error('not implemented');
},
"public function get ignoreCharacterWidth",function(){
throw new Error('not implemented');
},
"public function set ignoreCharacterWidth",function(value){
throw new Error('not implemented');
},
"public function get ignoreDiacritics",function(){
throw new Error('not implemented');
},
"public function set ignoreDiacritics",function(value){
throw new Error('not implemented');
},
"public function get ignoreKanaType",function(){
throw new Error('not implemented');
},
"public function set ignoreKanaType",function(value){
throw new Error('not implemented');
},
"public function get ignoreSymbols",function(){
throw new Error('not implemented');
},
"public function set ignoreSymbols",function(value){
throw new Error('not implemented');
},
"public function get lastOperationStatus",function(){
throw new Error('not implemented');
},
"public function get numericComparison",function(){
throw new Error('not implemented');
},
"public function set numericComparison",function(value){
throw new Error('not implemented');
},
"public function get requestedLocaleIDName",function(){
throw new Error('not implemented');
},
"public function Collator",function(requestedLocaleIDName,initialMode){if(arguments.length<2){initialMode="sorting";}
throw new Error('not implemented');
},
"public function compare",function(string1,string2){
throw new Error('not implemented');
},
"public function equals",function(string1,string2){
throw new Error('not implemented');
},
"public static function getAvailableLocaleIDNames",function(){
throw new Error('not implemented');
},
];},["getAvailableLocaleIDNames"],["Error"], "0.8.0", "0.9.6"
);
// class flash.globalization.LastOperationStatus
joo.classLoader.prepare("package flash.globalization",
"public final class LastOperationStatus",1,function($$private){;return[
"public static const",{BUFFER_OVERFLOW_ERROR:"bufferOverflowError"},
"public static const",{ERROR_CODE_UNKNOWN:"errorCodeUnknown"},
"public static const",{ILLEGAL_ARGUMENT_ERROR:"illegalArgumentError"},
"public static const",{INDEX_OUT_OF_BOUNDS_ERROR:"indexOutOfBoundsError"},
"public static const",{INVALID_ATTR_VALUE:"invalidAttrValue"},
"public static const",{INVALID_CHAR_FOUND:"invalidCharFound"},
"public static const",{MEMORY_ALLOCATION_ERROR:"memoryAllocationError"},
"public static const",{NO_ERROR:"noError"},
"public static const",{NUMBER_OVERFLOW_ERROR:"numberOverflowError"},
"public static const",{PARSE_ERROR:"parseError"},
"public static const",{PATTERN_SYNTAX_ERROR:"patternSyntaxError"},
"public static const",{PLATFORM_API_FAILED:"platformAPIFailed"},
"public static const",{TRUNCATED_CHAR_FOUND:"truncatedCharFound"},
"public static const",{UNEXPECTED_TOKEN:"unexpectedToken"},
"public static const",{UNSUPPORTED_ERROR:"unsupportedError"},
"public static const",{USING_DEFAULT_WARNING:"usingDefaultWarning"},
"public static const",{USING_FALLBACK_WARNING:"usingFallbackWarning"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.globalization.CollatorMode
joo.classLoader.prepare("package flash.globalization",
"public final class CollatorMode",1,function($$private){;return[
"public static const",{MATCHING:"matching"},
"public static const",{SORTING:"sorting"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.globalization.NumberParseResult
joo.classLoader.prepare("package flash.globalization",
"public final class NumberParseResult",1,function($$private){;return[
"public function get endIndex",function(){
throw new Error('not implemented');
},
"public function get startIndex",function(){
throw new Error('not implemented');
},
"public function get value",function(){
throw new Error('not implemented');
},
"public function NumberParseResult",function(value,startIndex,endIndex){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){value=NaN;}startIndex=0x7fffffff;}endIndex=0x7fffffff;}
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.globalization.NationalDigitsType
joo.classLoader.prepare("package flash.globalization",
"public final class NationalDigitsType",1,function($$private){;return[
"public static const",{ARABIC_INDIC:0x0660},
"public static const",{BALINESE:0x1B50},
"public static const",{BENGALI:0x09E6},
"public static const",{CHAM:0xAA50},
"public static const",{DEVANAGARI:0x0966},
"public static const",{EUROPEAN:0x0030},
"public static const",{EXTENDED_ARABIC_INDIC:0x06F0},
"public static const",{FULL_WIDTH:0xFF10},
"public static const",{GUJARATI:0x0AE6},
"public static const",{GURMUKHI:0x0A66},
"public static const",{KANNADA:0x0CE6},
"public static const",{KAYAH_LI:0xA900},
"public static const",{KHMER:0x17E0},
"public static const",{LAO:0x0ED0},
"public static const",{LEPCHA:0x1C40},
"public static const",{LIMBU:0x1946},
"public static const",{MALAYALAM:0x0D66},
"public static const",{MONGOLIAN:0x1810},
"public static const",{MYANMAR:0x1040},
"public static const",{MYANMAR_SHAN:0x1090},
"public static const",{NEW_TAI_LUE:0x19D0},
"public static const",{NKO:0x07C0},
"public static const",{OL_CHIKI:0x1C50},
"public static const",{ORIYA:0x0B66},
"public static const",{OSMANYA:0x104A0},
"public static const",{SAURASHTRA:0xA8D0},
"public static const",{SUNDANESE:0x1BB0},
"public static const",{TAMIL:0x0BE6},
"public static const",{TELUGU:0x0C66},
"public static const",{THAI:0x0E50},
"public static const",{TIBETAN:0x0F20},
"public static const",{VAI:0xA620},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.globalization.LocaleID
joo.classLoader.prepare("package flash.globalization",
"public final class LocaleID",1,function($$private){;return[
"public function get lastOperationStatus",function(){
throw new Error('not implemented');
},
"public function get name",function(){
throw new Error('not implemented');
},
"public function LocaleID",function(name){
throw new Error('not implemented');
},
"public static function determinePreferredLocales",function(want,have,keyword){if(arguments.length<3){keyword="userinterface";}
throw new Error('not implemented');
},
"public function getKeysAndValues",function(){
throw new Error('not implemented');
},
"public function getLanguage",function(){
throw new Error('not implemented');
},
"public function getRegion",function(){
throw new Error('not implemented');
},
"public function getScript",function(){
throw new Error('not implemented');
},
"public function getVariant",function(){
throw new Error('not implemented');
},
"public function isRightToLeft",function(){
throw new Error('not implemented');
},
"public static const",{DEFAULT:"i-default"},
];},["determinePreferredLocales"],["Error"], "0.8.0", "0.9.6"
);
// class flash.globalization.CurrencyParseResult
joo.classLoader.prepare("package flash.globalization",
"public final class CurrencyParseResult",1,function($$private){;return[
"public function get currencyString",function(){
throw new Error('not implemented');
},
"public function get value",function(){
throw new Error('not implemented');
},
"public function CurrencyParseResult",function(value,symbol){if(arguments.length<2){if(arguments.length<1){value=NaN;}symbol="";}
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flash.globalization.DateTimeNameStyle
joo.classLoader.prepare("package flash.globalization",
"public final class DateTimeNameStyle",1,function($$private){;return[
"public static const",{FULL:"full"},
"public static const",{LONG_ABBREVIATION:"longAbbreviation"},
"public static const",{SHORT_ABBREVIATION:"shortAbbreviation"},
];},[],[], "0.8.0", "0.9.6"
);
// class flash.globalization.DateTimeStyle
joo.classLoader.prepare("package flash.globalization",
"public final class DateTimeStyle",1,function($$private){;return[
"public static const",{CUSTOM:"custom"},
"public static const",{LONG:"long"},
"public static const",{MEDIUM:"medium"},
"public static const",{NONE:"none"},
"public static const",{SHORT:"short"},
];},[],[], "0.8.0", "0.9.6"
);
// class joo.flash.Meta
joo.classLoader.prepare("package joo.flash",
"public class Meta",1,function($$private){var is=joo.is,trace=joo.trace;return[function(){joo.classLoader.init(flash.media.Sound,flash.display.Bitmap);},function(){
{
joo.getOrCreatePackage("joo.meta").Embed=joo.flash.Meta.embed;
}},
"public static function embed",function(classDeclaration,memberDeclaration,parameters){
var relativeUrl=parameters['source'];
var resource=joo.DynamicClassLoader.INSTANCE.getResource(relativeUrl);
if(is(resource,String)){
memberDeclaration.value=function(){
return new String(resource);
};
return;
}
var EmbedClass;
var superClassDeclaration;
if(resource){
if(is(resource,js.HTMLImageElement)){
superClassDeclaration=flash.display.Bitmap['$class'];
EmbedClass=function(){
var bitmapData=flash.display.BitmapData.fromImg((resource));
superClassDeclaration.constructor_.call(this,bitmapData);
};
}else if(is(resource,js.HTMLAudioElement)){
superClassDeclaration=flash.media.Sound['$class'];
EmbedClass=function(){
this['audio']=(resource);
superClassDeclaration.constructor_.call(this);
};
}
}
if(EmbedClass){
EmbedClass['$class']=true;
EmbedClass.prototype=new superClassDeclaration.Public();
EmbedClass.toString=function(){
return relativeUrl;
};
memberDeclaration.value=EmbedClass;
}else{
trace("[WARN]","Ignoring unsupported media type of file "+relativeUrl);
}
},
];},["embed"],["joo.DynamicClassLoader","String","js.HTMLImageElement","flash.display.Bitmap","flash.display.BitmapData","js.HTMLAudioElement","flash.media.Sound"], "0.8.0", "0.9.6"
);
// class joo.flash.Run
joo.classLoader.prepare("package joo.flash",
"public class Run",1,function($$private){var trace=joo.trace;return[function(){joo.classLoader.init(joo.DynamicClassLoader,flash.events.Event);},
"public static function main",function(id,primaryDisplayObjectClassName,parameters){
var classLoader=joo.DynamicClassLoader.INSTANCE;
classLoader.import_(primaryDisplayObjectClassName);
classLoader.complete(function(){
if(classLoader.debug){
trace("[INFO] Loaded Flash main class "+primaryDisplayObjectClassName+".");
}
var primaryDisplayObjectClass=flash.utils.getDefinitionByName(primaryDisplayObjectClassName);
var cd=primaryDisplayObjectClass['$class'];
var metadata=cd.metadata;
var swf=metadata['SWF'];
var stage=new flash.display.Stage(id,swf);
var displayObject=(new cd.Public());
stage.internalAddChildAt(displayObject,0);
var loaderInfo=new flash.display.LoaderInfo();
loaderInfo['parameters']=parameters;
displayObject['loaderInfo']=loaderInfo;
cd.constructor_.call(displayObject);
displayObject.broadcastEvent(new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false));
});
},
];},["main"],["joo.DynamicClassLoader","flash.display.Stage","flash.display.DisplayObject","flash.display.LoaderInfo","flash.events.Event"], "0.8.0", "0.9.6"
);
// class joo.flash.util.Base64
joo.classLoader.prepare(
"package joo.flash.util",
"public class Base64",1,function($$private){;return[
"private static const",{keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},
"public static function encodeBytes",function(input){
var output=[];
for(var i=0;i<input.length;){
var chr1=input[i++];
var chr2=input[i++];
var chr3=input[i++];
var enc1=chr1>>2;
var enc2=((chr1&3)<<4)|(chr2>>4);
var enc3=((chr2&15)<<2)|(chr3>>6);
var enc4=chr3&63;
if(isNaN(chr2)){
enc3=enc4=64;
}else if(isNaN(chr3)){
enc4=64;
}
output.push($$private.keyStr.charAt(enc1),
$$private.keyStr.charAt(enc2),
$$private.keyStr.charAt(enc3),
$$private.keyStr.charAt(enc4));
}
return output.join("");
},
"public static function encode",function(input){
var output=[];
input=$$private.utf8Encode(input);
for(var i=0;i<input.length;){
var chr1=input.charCodeAt(i++);
var chr2=input.charCodeAt(i++);
var chr3=input.charCodeAt(i++);
var enc1=chr1>>2;
var enc2=((chr1&3)<<4)|(chr2>>4);
var enc3=((chr2&15)<<2)|(chr3>>6);
var enc4=chr3&63;
if(isNaN(chr2)){
enc3=enc4=64;
}else if(isNaN(chr3)){
enc4=64;
}
output.push($$private.keyStr.charAt(enc1),
$$private.keyStr.charAt(enc2),
$$private.keyStr.charAt(enc3),
$$private.keyStr.charAt(enc4));
}
return output.join("");
},
"public static function decode",function(input){
var output=[];
input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");
for(var i=0;i<input.length;){
var enc1=$$private.keyStr.indexOf(input.charAt(i++));
var enc2=$$private.keyStr.indexOf(input.charAt(i++));
var enc3=$$private.keyStr.indexOf(input.charAt(i++));
var enc4=$$private.keyStr.indexOf(input.charAt(i++));
var chr1=(enc1<<2)|(enc2>>4);
var chr2=((enc2&15)<<4)|(enc3>>2);
var chr3=((enc3&3)<<6)|enc4;
output.push(String.fromCharCode(chr1));
if(enc3!=64){
output.push(String.fromCharCode(chr2));
}
if(enc4!=64){
output.push(String.fromCharCode(chr3));
}
}
return $$private.utf8Decode(output.join(""));
},
"private static function utf8Encode",function(string){
string=string.replace(/\r\n/g,"\n");
var utftext=[];
for(var n=0;n<string.length;n++){
var c=string.charCodeAt(n);
if(c<128){
utftext.push(String.fromCharCode(c));
}else if(c<2048){
utftext.push(String.fromCharCode((c>>6)|192),
String.fromCharCode((c&63)|128));
}else{
utftext.push(String.fromCharCode((c>>12)|224),
String.fromCharCode(((c>>6)&63)|128),
String.fromCharCode((c&63)|128));
}
}
return utftext.join("");
},
"private static function utf8Decode",function(utftext){
var string=[];
for(var i=0;i<utftext.length;){
var c=utftext.charCodeAt(i++);
if(c>=128){
var c2=utftext.charCodeAt(i++);
if(c>191&&c<224){
c=((c&31)<<6)|(c2&63);
}else{
var c3=utftext.charCodeAt(i++);
c=((c&15)<<12)|((c2&63)<<6)|(c3&63);
}
}
string.push(String.fromCharCode(c));
}
return string.join("");
},
];},["encodeBytes","encode","decode"],["String"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.ApplyElementIDOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class ApplyElementIDOperation extends flashx.textLayout.operations.FlowElementOperation",4,function($$private){;return[
"public function get newID",function(){
throw new Error('not implemented');
},
"public function set newID",function(value){
throw new Error('not implemented');
},
"public function ApplyElementIDOperation",function(operationState,targetElement,newID,relativeStart,relativeEnd){flashx.textLayout.operations.FlowElementOperation.call(this);if(arguments.length<5){if(arguments.length<4){relativeStart=0;}relativeEnd=-1;}
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowElementOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.DeleteTextOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class DeleteTextOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[
"public function get allowMerge",function(){
throw new Error('not implemented');
},
"public function set allowMerge",function(value){
throw new Error('not implemented');
},
"public function get deleteSelectionState",function(){
throw new Error('not implemented');
},
"public function set deleteSelectionState",function(value){
throw new Error('not implemented');
},
"public function DeleteTextOperation",function(operationState,deleteSelectionState,allowMerge){flashx.textLayout.operations.FlowTextOperation.call(this);if(arguments.length<3){if(arguments.length<2){deleteSelectionState=null;}allowMerge=false;}
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.CutOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class CutOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[
"public function get scrapToCut",function(){
throw new Error('not implemented');
},
"public function set scrapToCut",function(value){
throw new Error('not implemented');
},
"public function CutOperation",function(operationState,scrapToCut){flashx.textLayout.operations.FlowTextOperation.call(this);
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.FlowElementOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class FlowElementOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[
"public function get relativeEnd",function(){
throw new Error('not implemented');
},
"public function set relativeEnd",function(value){
throw new Error('not implemented');
},
"public function get relativeStart",function(){
throw new Error('not implemented');
},
"public function set relativeStart",function(value){
throw new Error('not implemented');
},
"public function get targetElement",function(){
throw new Error('not implemented');
},
"public function set targetElement",function(value){
throw new Error('not implemented');
},
"public function FlowElementOperation",function(operationState,targetElement,relativeStart,relativeEnd){flashx.textLayout.operations.FlowTextOperation.call(this);if(arguments.length<4){if(arguments.length<3){relativeStart=0;}relativeEnd=-1;}
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.InsertInlineGraphicOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class InsertInlineGraphicOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[
"public function get height",function(){
throw new Error('not implemented');
},
"public function set height",function(value){
throw new Error('not implemented');
},
"public function get options",function(){
throw new Error('not implemented');
},
"public function set options",function(value){
throw new Error('not implemented');
},
"public function get source",function(){
throw new Error('not implemented');
},
"public function set source",function(value){
throw new Error('not implemented');
},
"public function get width",function(){
throw new Error('not implemented');
},
"public function set width",function(value){
throw new Error('not implemented');
},
"public function InsertInlineGraphicOperation",function(operationState,source,width,height,options){flashx.textLayout.operations.FlowTextOperation.call(this);if(arguments.length<5){options=null;}
throw new Error('not implemented');
},
"override public function redo",function(){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.ApplyTCYOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class ApplyTCYOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[
"public function get tcyOn",function(){
throw new Error('not implemented');
},
"public function set tcyOn",function(value){
throw new Error('not implemented');
},
"public function ApplyTCYOperation",function(operationState,tcyOn){flashx.textLayout.operations.FlowTextOperation.call(this);
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.PasteOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class PasteOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[
"public function get textScrap",function(){
throw new Error('not implemented');
},
"public function set textScrap",function(value){
throw new Error('not implemented');
},
"public function PasteOperation",function(operationState,textScrap){flashx.textLayout.operations.FlowTextOperation.call(this);
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.UndoOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class UndoOperation extends flashx.textLayout.operations.FlowOperation",2,function($$private){;return[
"public function get operation",function(){
throw new Error('not implemented');
},
"public function set operation",function(value){
throw new Error('not implemented');
},
"public function UndoOperation",function(op){flashx.textLayout.operations.FlowOperation.call(this);
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.FlowOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class FlowOperation implements flashx.undo.IOperation",1,function($$private){;return[
"public function get beginGeneration",function(){
throw new Error('not implemented');
},
"public function get endGeneration",function(){
throw new Error('not implemented');
},
"public function get textFlow",function(){
throw new Error('not implemented');
},
"public function set textFlow",function(value){
throw new Error('not implemented');
},
"public var",{userData:undefined},
"public function FlowOperation",function(textFlow){
throw new Error('not implemented');
},
"public function canUndo",function(){
throw new Error('not implemented');
},
"public function doOperation",function(){
throw new Error('not implemented');
},
"public function redo",function(){
throw new Error('not implemented');
},
"public function undo",function(){
throw new Error('not implemented');
},
"public function performRedo",function(){
throw new Error('not implemented');
},
"public function performUndo",function(){
throw new Error('not implemented');
},
];},[],["flashx.undo.IOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.CopyOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class CopyOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[
"public function CopyOperation",function(operationState){flashx.textLayout.operations.FlowTextOperation.call(this);
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.ApplyElementUserStyleOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class ApplyElementUserStyleOperation extends flashx.textLayout.operations.FlowElementOperation",4,function($$private){;return[
"public function get newValue",function(){
throw new Error('not implemented');
},
"public function set newValue",function(value){
throw new Error('not implemented');
},
"public function get styleName",function(){
throw new Error('not implemented');
},
"public function set styleName",function(value){
throw new Error('not implemented');
},
"public function ApplyElementUserStyleOperation",function(operationState,targetElement,styleName,value,relativeStart,relativeEnd){flashx.textLayout.operations.FlowElementOperation.call(this);if(arguments.length<6){if(arguments.length<5){relativeStart=0;}relativeEnd=-1;}
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowElementOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.ApplyElementStyleNameOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class ApplyElementStyleNameOperation extends flashx.textLayout.operations.FlowElementOperation",4,function($$private){;return[
"public function get newStyleName",function(){
throw new Error('not implemented');
},
"public function set newStyleName",function(value){
throw new Error('not implemented');
},
"public function ApplyElementStyleNameOperation",function(operationState,targetElement,newStyleName,relativeStart,relativeEnd){flashx.textLayout.operations.FlowElementOperation.call(this);if(arguments.length<5){if(arguments.length<4){relativeStart=0;}relativeEnd=-1;}
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowElementOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.InsertTextOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class InsertTextOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[
"public function get characterFormat",function(){
throw new Error('not implemented');
},
"public function set characterFormat",function(value){
throw new Error('not implemented');
},
"public function get deleteSelectionState",function(){
throw new Error('not implemented');
},
"public function set deleteSelectionState",function(value){
throw new Error('not implemented');
},
"public function get text",function(){
throw new Error('not implemented');
},
"public function set text",function(value){
throw new Error('not implemented');
},
"public function InsertTextOperation",function(operationState,text,deleteSelectionState){flashx.textLayout.operations.FlowTextOperation.call(this);if(arguments.length<3){deleteSelectionState=null;}
throw new Error('not implemented');
},
"override public function redo",function(){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.ApplyFormatOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class ApplyFormatOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[
"public function get containerFormat",function(){
throw new Error('not implemented');
},
"public function set containerFormat",function(value){
throw new Error('not implemented');
},
"public function get leafFormat",function(){
throw new Error('not implemented');
},
"public function set leafFormat",function(value){
throw new Error('not implemented');
},
"public function get paragraphFormat",function(){
throw new Error('not implemented');
},
"public function set paragraphFormat",function(value){
throw new Error('not implemented');
},
"public function ApplyFormatOperation",function(operationState,leafFormat,paragraphFormat,containerFormat){flashx.textLayout.operations.FlowTextOperation.call(this);if(arguments.length<4){containerFormat=null;}
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.ClearFormatOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class ClearFormatOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[
"public function get containerFormat",function(){
throw new Error('not implemented');
},
"public function set containerFormat",function(value){
throw new Error('not implemented');
},
"public function get leafFormat",function(){
throw new Error('not implemented');
},
"public function set leafFormat",function(value){
throw new Error('not implemented');
},
"public function get paragraphFormat",function(){
throw new Error('not implemented');
},
"public function set paragraphFormat",function(value){
throw new Error('not implemented');
},
"public function ClearFormatOperation",function(operationState,leafFormat,paragraphFormat,containerFormat){flashx.textLayout.operations.FlowTextOperation.call(this);if(arguments.length<4){containerFormat=null;}
throw new Error('not implemented');
},
"override public function redo",function(){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.RedoOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class RedoOperation extends flashx.textLayout.operations.FlowOperation",2,function($$private){;return[
"public function get operation",function(){
throw new Error('not implemented');
},
"public function set operation",function(value){
throw new Error('not implemented');
},
"public function RedoOperation",function(operation){flashx.textLayout.operations.FlowOperation.call(this);
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.ApplyLinkOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class ApplyLinkOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[
"public function get extendToLinkBoundary",function(){
throw new Error('not implemented');
},
"public function set extendToLinkBoundary",function(value){
throw new Error('not implemented');
},
"public function get href",function(){
throw new Error('not implemented');
},
"public function set href",function(value){
throw new Error('not implemented');
},
"public function get target",function(){
throw new Error('not implemented');
},
"public function set target",function(value){
throw new Error('not implemented');
},
"public function ApplyLinkOperation",function(operationState,href,target,extendToLinkBoundary){flashx.textLayout.operations.FlowTextOperation.call(this);
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.ApplyFormatToElementOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class ApplyFormatToElementOperation extends flashx.textLayout.operations.FlowElementOperation",4,function($$private){;return[
"public function get format",function(){
throw new Error('not implemented');
},
"public function set format",function(value){
throw new Error('not implemented');
},
"public function ApplyFormatToElementOperation",function(operationState,targetElement,format,relativeStart,relativeEnd){flashx.textLayout.operations.FlowElementOperation.call(this);if(arguments.length<5){if(arguments.length<4){relativeStart=0;}relativeEnd=-1;}
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowElementOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.ClearFormatOnElementOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class ClearFormatOnElementOperation extends flashx.textLayout.operations.FlowElementOperation",4,function($$private){;return[
"public function get format",function(){
throw new Error('not implemented');
},
"public function set format",function(value){
throw new Error('not implemented');
},
"public function ClearFormatOnElementOperation",function(operationState,targetElement,format,relativeStart,relativeEnd){flashx.textLayout.operations.FlowElementOperation.call(this);if(arguments.length<5){if(arguments.length<4){relativeStart=0;}relativeEnd=-1;}
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowElementOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.CompositeOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class CompositeOperation extends flashx.textLayout.operations.FlowOperation",2,function($$private){;return[
"public function get operations",function(){
throw new Error('not implemented');
},
"public function set operations",function(value){
throw new Error('not implemented');
},
"public function CompositeOperation",function(operations){flashx.textLayout.operations.FlowOperation.call(this);if(arguments.length<1){operations=null;}
throw new Error('not implemented');
},
"public function addOperation",function(operation){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.FlowTextOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class FlowTextOperation extends flashx.textLayout.operations.FlowOperation",2,function($$private){;return[
"public function get absoluteEnd",function(){
throw new Error('not implemented');
},
"public function set absoluteEnd",function(value){
throw new Error('not implemented');
},
"public function get absoluteStart",function(){
throw new Error('not implemented');
},
"public function set absoluteStart",function(value){
throw new Error('not implemented');
},
"public function get originalSelectionState",function(){
throw new Error('not implemented');
},
"public function set originalSelectionState",function(value){
throw new Error('not implemented');
},
"public function FlowTextOperation",function(operationState){flashx.textLayout.operations.FlowOperation.call(this);
throw new Error('not implemented');
},
"override public function redo",function(){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.ModifyInlineGraphicOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class ModifyInlineGraphicOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[
"public function get height",function(){
throw new Error('not implemented');
},
"public function set height",function(value){
throw new Error('not implemented');
},
"public function get options",function(){
throw new Error('not implemented');
},
"public function set options",function(value){
throw new Error('not implemented');
},
"public function get source",function(){
throw new Error('not implemented');
},
"public function set source",function(value){
throw new Error('not implemented');
},
"public function get width",function(){
throw new Error('not implemented');
},
"public function set width",function(value){
throw new Error('not implemented');
},
"public function ModifyInlineGraphicOperation",function(operationState,source,width,height,options){flashx.textLayout.operations.FlowTextOperation.call(this);if(arguments.length<5){options=null;}
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.operations.SplitParagraphOperation
joo.classLoader.prepare("package flashx.textLayout.operations",
"public class SplitParagraphOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[
"public function SplitParagraphOperation",function(operationState){flashx.textLayout.operations.FlowTextOperation.call(this);
throw new Error('not implemented');
},
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.factory.TruncationOptions
joo.classLoader.prepare("package flashx.textLayout.factory",
"public final class TruncationOptions",1,function($$private){;return[
"public function get lineCountLimit",function(){
throw new Error('not implemented');
},
"public function set lineCountLimit",function(value){
throw new Error('not implemented');
},
"public function get truncationIndicator",function(){
throw new Error('not implemented');
},
"public function set truncationIndicator",function(value){
throw new Error('not implemented');
},
"public function get truncationIndicatorFormat",function(){
throw new Error('not implemented');
},
"public function set truncationIndicatorFormat",function(value){
throw new Error('not implemented');
},
"public function TruncationOptions",function(truncationIndicator,lineCountLimit,truncationIndicatorFormat){if(arguments.length<3){truncationIndicatorFormat=null;}
throw new Error('not implemented');
},
"public static const",{HORIZONTAL_ELLIPSIS:"…"},
"public static const",{NO_LINE_COUNT_LIMIT:-1},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.factory.StringTextLineFactory
joo.classLoader.prepare("package flashx.textLayout.factory",
"public final class StringTextLineFactory extends flashx.textLayout.factory.TextLineFactoryBase",2,function($$private){;return[
"public function get configuration",function(){
throw new Error('not implemented');
},
"public static function get defaultConfiguration",function(){
throw new Error('not implemented');
},
"public function get paragraphFormat",function(){
throw new Error('not implemented');
},
"public function set paragraphFormat",function(value){
throw new Error('not implemented');
},
"public function get spanFormat",function(){
throw new Error('not implemented');
},
"public function set spanFormat",function(value){
throw new Error('not implemented');
},
"public function get text",function(){
throw new Error('not implemented');
},
"public function set text",function(value){
throw new Error('not implemented');
},
"public function get textFlowFormat",function(){
throw new Error('not implemented');
},
"public function set textFlowFormat",function(value){
throw new Error('not implemented');
},
"public function StringTextLineFactory",function(configuration){flashx.textLayout.factory.TextLineFactoryBase.call(this);if(arguments.length<1){configuration=null;}
throw new Error('not implemented');
},
"public function createTextLines",function(callback){
throw new Error('not implemented');
},
];},["defaultConfiguration"],["flashx.textLayout.factory.TextLineFactoryBase","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.factory.TextLineFactoryBase
joo.classLoader.prepare("package flashx.textLayout.factory",
"public class TextLineFactoryBase",1,function($$private){;return[
"public function get compositionBounds",function(){
throw new Error('not implemented');
},
"public function set compositionBounds",function(value){
throw new Error('not implemented');
},
"public function get horizontalScrollPolicy",function(){
throw new Error('not implemented');
},
"public function set horizontalScrollPolicy",function(value){
throw new Error('not implemented');
},
"public function get isTruncated",function(){
throw new Error('not implemented');
},
"public function get swfContext",function(){
throw new Error('not implemented');
},
"public function set swfContext",function(value){
throw new Error('not implemented');
},
"public function get truncationOptions",function(){
throw new Error('not implemented');
},
"public function set truncationOptions",function(value){
throw new Error('not implemented');
},
"public function get verticalScrollPolicy",function(){
throw new Error('not implemented');
},
"public function set verticalScrollPolicy",function(value){
throw new Error('not implemented');
},
"public function TextLineFactoryBase",function(){
throw new Error('not implemented');
},
"public function getContentBounds",function(){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.factory.TextFlowTextLineFactory
joo.classLoader.prepare("package flashx.textLayout.factory",
"public final class TextFlowTextLineFactory extends flashx.textLayout.factory.TextLineFactoryBase",2,function($$private){;return[
"public function TextFlowTextLineFactory",function(){flashx.textLayout.factory.TextLineFactoryBase.call(this);
throw new Error('not implemented');
},
"public function createTextLines",function(callback,textFlow){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.factory.TextLineFactoryBase","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.compose.StandardFlowComposer
joo.classLoader.prepare("package flashx.textLayout.compose",
"public class StandardFlowComposer extends flashx.textLayout.compose.FlowComposerBase implements flashx.textLayout.compose.IFlowComposer",2,function($$private){;return[
"public function get composing",function(){
throw new Error('not implemented');
},
"public function get numControllers",function(){
throw new Error('not implemented');
},
"public function get rootElement",function(){
throw new Error('not implemented');
},
"public function StandardFlowComposer",function(){flashx.textLayout.compose.FlowComposerBase.call(this);
throw new Error('not implemented');
},
"public function addController",function(controller){
throw new Error('not implemented');
},
"public function addControllerAt",function(controller,index){
throw new Error('not implemented');
},
"public function compose",function(){
throw new Error('not implemented');
},
"public function composeToController",function(index){
throw new Error('not implemented');
},
"public function composeToPosition",function(absolutePosition){
throw new Error('not implemented');
},
"public function findControllerIndexAtPosition",function(absolutePosition,preferPrevious){if(arguments.length<2){preferPrevious=false;}
throw new Error('not implemented');
},
"public function getAbsoluteStart",function(controller){
throw new Error('not implemented');
},
"public function getControllerAt",function(index){
throw new Error('not implemented');
},
"public function getControllerIndex",function(controller){
throw new Error('not implemented');
},
"public function interactionManagerChanged",function(newInteractionManager){
throw new Error('not implemented');
},
"protected function preCompose",function(){
throw new Error('not implemented');
},
"public function removeAllControllers",function(){
throw new Error('not implemented');
},
"public function removeController",function(controller){
throw new Error('not implemented');
},
"public function removeControllerAt",function(index){
throw new Error('not implemented');
},
"public function setFocus",function(absolutePosition,leanLeft){if(arguments.length<2){leanLeft=false;}
throw new Error('not implemented');
},
"public function setRootElement",function(newRootElement){
throw new Error('not implemented');
},
"public function updateAllControllers",function(){
throw new Error('not implemented');
},
"public function updateToController",function(index){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.compose.FlowComposerBase","flashx.textLayout.compose.IFlowComposer","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.compose.FlowComposerBase
joo.classLoader.prepare("package flashx.textLayout.compose",
"public class FlowComposerBase",1,function($$private){;return[
"public function get damageAbsoluteStart",function(){
throw new Error('not implemented');
},
"public function get numLines",function(){
throw new Error('not implemented');
},
"public function get swfContext",function(){
throw new Error('not implemented');
},
"public function set swfContext",function(value){
throw new Error('not implemented');
},
"public function get textFlow",function(){
throw new Error('not implemented');
},
"public function FlowComposerBase",function(){
throw new Error('not implemented');
},
"public function damage",function(startPosition,damageLength,damageType){
throw new Error('not implemented');
},
"public function findLineAtPosition",function(absolutePosition,preferPrevious){if(arguments.length<2){preferPrevious=false;}
throw new Error('not implemented');
},
"public function findLineIndexAtPosition",function(absolutePosition,preferPrevious){if(arguments.length<2){preferPrevious=false;}
throw new Error('not implemented');
},
"public function getLineAt",function(index){
throw new Error('not implemented');
},
"public function isDamaged",function(absolutePosition){
throw new Error('not implemented');
},
"public function updateLengths",function(startPosition,deltaLength){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.compose.FlowDamageType
joo.classLoader.prepare("package flashx.textLayout.compose",
"public class FlowDamageType",1,function($$private){;return[
"public static const",{GEOMETRY:"geometry"},
"public static const",{INVALID:"invalid"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.compose.ISWFContext
joo.classLoader.prepare("package flashx.textLayout.compose",
"public interface ISWFContext",1,function($$private){;return[,
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.compose.TextFlowLine
joo.classLoader.prepare("package flashx.textLayout.compose",
"public final class TextFlowLine implements flashx.textLayout.compose.IVerticalJustificationLine",1,function($$private){;return[
"public function get absoluteStart",function(){
throw new Error('not implemented');
},
"public function get ascent",function(){
throw new Error('not implemented');
},
"public function get columnIndex",function(){
throw new Error('not implemented');
},
"public function get controller",function(){
throw new Error('not implemented');
},
"public function get descent",function(){
throw new Error('not implemented');
},
"public function get height",function(){
throw new Error('not implemented');
},
"public function get lineOffset",function(){
throw new Error('not implemented');
},
"public function get location",function(){
throw new Error('not implemented');
},
"public function get paragraph",function(){
throw new Error('not implemented');
},
"public function get spaceAfter",function(){
throw new Error('not implemented');
},
"public function get spaceBefore",function(){
throw new Error('not implemented');
},
"public function get textHeight",function(){
throw new Error('not implemented');
},
"public function get textLength",function(){
throw new Error('not implemented');
},
"public function get textLineExists",function(){
throw new Error('not implemented');
},
"public function get unjustifiedTextWidth",function(){
throw new Error('not implemented');
},
"public function get validity",function(){
throw new Error('not implemented');
},
"public function get x",function(){
throw new Error('not implemented');
},
"public function set x",function(value){
throw new Error('not implemented');
},
"public function get y",function(){
throw new Error('not implemented');
},
"public function set y",function(value){
throw new Error('not implemented');
},
"public function TextFlowLine",function(textLine,paragraph,outerTargetWidth,lineOffset,absoluteStart,numChars){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){outerTargetWidth=0;}lineOffset=0;}absoluteStart=0;}numChars=0;}
throw new Error('not implemented');
},
"public function getBounds",function(){
throw new Error('not implemented');
},
"public function getTextLine",function(forceValid){if(arguments.length<1){forceValid=false;}
throw new Error('not implemented');
},
];},[],["flashx.textLayout.compose.IVerticalJustificationLine","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.compose.TextLineRecycler
joo.classLoader.prepare("package flashx.textLayout.compose",
"public class TextLineRecycler",1,function($$private){;return[
"public static function get textLineRecyclerEnabled",function(){
throw new Error('not implemented');
},
"public static function set textLineRecyclerEnabled",function(value){
throw new Error('not implemented');
},
"public static function addLineForReuse",function(textLine){
throw new Error('not implemented');
},
"public static function getLineForReuse",function(){
throw new Error('not implemented');
},
];},["textLineRecyclerEnabled","addLineForReuse","getLineForReuse"],["Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.compose.IVerticalJustificationLine
joo.classLoader.prepare("package flashx.textLayout.compose",
"public interface IVerticalJustificationLine",1,function($$private){;return[,,,,,,,
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.compose.TextFlowLineLocation
joo.classLoader.prepare("package flashx.textLayout.compose",
"public final class TextFlowLineLocation",1,function($$private){;return[
"public static const",{FIRST:1},
"public static const",{LAST:4},
"public static const",{MIDDLE:2},
"public static const",{ONLY:5},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.compose.IFlowComposer
joo.classLoader.prepare("package flashx.textLayout.compose",
"public interface IFlowComposer",1,function($$private){;return[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.compose.ITextLineCreator
joo.classLoader.prepare("package flashx.textLayout.compose",
"public interface ITextLineCreator",1,function($$private){;return[,,
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.conversion.ConversionType
joo.classLoader.prepare("package flashx.textLayout.conversion",
"public final class ConversionType",1,function($$private){;return[
"public static const",{STRING_TYPE:"stringType"},
"public static const",{XML_TYPE:"xmlType"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.conversion.PlainTextExporter
joo.classLoader.prepare("package flashx.textLayout.conversion",
"public class PlainTextExporter implements flashx.textLayout.conversion.ITextExporter",1,function($$private){;return[
"public function get paragraphSeparator",function(){
throw new Error('not implemented');
},
"public function set paragraphSeparator",function(value){
throw new Error('not implemented');
},
"public function get stripDiscretionaryHyphens",function(){
throw new Error('not implemented');
},
"public function set stripDiscretionaryHyphens",function(value){
throw new Error('not implemented');
},
"public function PlainTextExporter",function(){
throw new Error('not implemented');
},
"public function export",function(source,conversionType){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.conversion.ITextExporter","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.conversion.ITextExporter
joo.classLoader.prepare("package flashx.textLayout.conversion",
"public interface ITextExporter",1,function($$private){;return[,
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.conversion.TextConverter
joo.classLoader.prepare("package flashx.textLayout.conversion",
"public class TextConverter",1,function($$private){;return[
"public static function export",function(source,format,conversionType){
throw new Error('not implemented');
},
"public static function getExporter",function(format){
throw new Error('not implemented');
},
"public static function getImporter",function(format,config){if(arguments.length<2){config=null;}
throw new Error('not implemented');
},
"public static function importToFlow",function(source,format,config){if(arguments.length<3){config=null;}
throw new Error('not implemented');
},
"public static const",{PLAIN_TEXT_FORMAT:"plainTextFormat"},
"public static const",{TEXT_FIELD_HTML_FORMAT:"textFieldHTMLFormat"},
"public static const",{TEXT_LAYOUT_FORMAT:"textLayoutFormat"},
];},["export","getExporter","getImporter","importToFlow"],["Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.conversion.ITextImporter
joo.classLoader.prepare("package flashx.textLayout.conversion",
"public interface ITextImporter",1,function($$private){;return[,,,,
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.events.SelectionEvent
joo.classLoader.prepare("package flashx.textLayout.events",
"public class SelectionEvent extends flash.events.Event",2,function($$private){;return[
"public function get selectionState",function(){
throw new Error('not implemented');
},
"public function set selectionState",function(value){
throw new Error('not implemented');
},
"public function SelectionEvent",function(type,bubbles,cancelable,selectionState){flash.events.Event.call(this);if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}selectionState=null;}
throw new Error('not implemented');
},
"public static const",{SELECTION_CHANGE:"selectionChange"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.events.FlowOperationEvent
joo.classLoader.prepare("package flashx.textLayout.events",
"public class FlowOperationEvent extends flash.events.Event",2,function($$private){;return[
"public function get error",function(){
throw new Error('not implemented');
},
"public function set error",function(value){
throw new Error('not implemented');
},
"public function get level",function(){
throw new Error('not implemented');
},
"public function set level",function(value){
throw new Error('not implemented');
},
"public function get operation",function(){
throw new Error('not implemented');
},
"public function set operation",function(value){
throw new Error('not implemented');
},
"public function FlowOperationEvent",function(type,bubbles,cancelable,operation,level,error){flash.events.Event.call(this);if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}operation=null;}level=0;}error=null;}
throw new Error('not implemented');
},
"public static const",{FLOW_OPERATION_BEGIN:"flowOperationBegin"},
"public static const",{FLOW_OPERATION_COMPLETE:"flowOperationComplete"},
"public static const",{FLOW_OPERATION_END:"flowOperationEnd"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.events.CompositionCompleteEvent
joo.classLoader.prepare("package flashx.textLayout.events",
"public class CompositionCompleteEvent extends flash.events.Event",2,function($$private){;return[
"public function get compositionLength",function(){
throw new Error('not implemented');
},
"public function set compositionLength",function(value){
throw new Error('not implemented');
},
"public function get compositionStart",function(){
throw new Error('not implemented');
},
"public function set compositionStart",function(value){
throw new Error('not implemented');
},
"public function get textFlow",function(){
throw new Error('not implemented');
},
"public function set textFlow",function(value){
throw new Error('not implemented');
},
"public function CompositionCompleteEvent",function(type,bubbles,cancelable,textFlow,compositionStart,compositionLength){flash.events.Event.call(this);if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}textFlow=null;}compositionStart=0;}compositionLength=0;}
throw new Error('not implemented');
},
"public static const",{COMPOSITION_COMPLETE:"compositionComplete"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.events.UpdateCompleteEvent
joo.classLoader.prepare("package flashx.textLayout.events",
"public class UpdateCompleteEvent extends flash.events.Event",2,function($$private){;return[
"public function get controller",function(){
throw new Error('not implemented');
},
"public function set controller",function(value){
throw new Error('not implemented');
},
"public function get textFlow",function(){
throw new Error('not implemented');
},
"public function set textFlow",function(value){
throw new Error('not implemented');
},
"public function UpdateCompleteEvent",function(type,bubbles,cancelable,textFlow,controller){flash.events.Event.call(this);if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}textFlow=null;}controller=null;}
throw new Error('not implemented');
},
"public static const",{UPDATE_COMPLETE:"updateComplete"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.events.DamageEvent
joo.classLoader.prepare("package flashx.textLayout.events",
"public class DamageEvent extends flash.events.Event",2,function($$private){;return[
"public function get damageAbsoluteStart",function(){
throw new Error('not implemented');
},
"public function get damageLength",function(){
throw new Error('not implemented');
},
"public function get textFlow",function(){
throw new Error('not implemented');
},
"public function DamageEvent",function(type,bubbles,cancelable,textFlow,damageAbsoluteStart,damageLength){flash.events.Event.call(this);if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}textFlow=null;}damageAbsoluteStart=0;}damageLength=0;}
throw new Error('not implemented');
},
"public static const",{DAMAGE:"damage"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.events.TextLayoutEvent
joo.classLoader.prepare("package flashx.textLayout.events",
"public class TextLayoutEvent extends flash.events.Event",2,function($$private){;return[
"public function TextLayoutEvent",function(type,bubbles,cancelable){flash.events.Event.call(this);if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}
throw new Error('not implemented');
},
"public static const",{SCROLL:"scroll"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.events.StatusChangeEvent
joo.classLoader.prepare("package flashx.textLayout.events",
"public class StatusChangeEvent extends flash.events.Event",2,function($$private){;return[
"public function get element",function(){
throw new Error('not implemented');
},
"public function set element",function(value){
throw new Error('not implemented');
},
"public function get errorEvent",function(){
throw new Error('not implemented');
},
"public function set errorEvent",function(value){
throw new Error('not implemented');
},
"public function get status",function(){
throw new Error('not implemented');
},
"public function set status",function(value){
throw new Error('not implemented');
},
"public function StatusChangeEvent",function(type,bubbles,cancelable,element,status,errorEvent){flash.events.Event.call(this);if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=false;}element=null;}status=null;}errorEvent=null;}
throw new Error('not implemented');
},
"public static const",{INLINE_GRAPHIC_STATUS_CHANGE:"inlineGraphicStatusChange"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.events.FlowElementMouseEvent
joo.classLoader.prepare("package flashx.textLayout.events",
"public class FlowElementMouseEvent extends flash.events.Event",2,function($$private){;return[
"public function get flowElement",function(){
throw new Error('not implemented');
},
"public function set flowElement",function(value){
throw new Error('not implemented');
},
"public function get originalEvent",function(){
throw new Error('not implemented');
},
"public function set originalEvent",function(value){
throw new Error('not implemented');
},
"public function FlowElementMouseEvent",function(type,bubbles,cancelable,flowElement,originalEvent){flash.events.Event.call(this);if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles=false;}cancelable=true;}flowElement=null;}originalEvent=null;}
throw new Error('not implemented');
},
"public static const",{CLICK:"click"},
"public static const",{MOUSE_DOWN:"mouseDown"},
"public static const",{MOUSE_MOVE:"mouseMove"},
"public static const",{MOUSE_UP:"mouseUp"},
"public static const",{ROLL_OUT:"rollOut"},
"public static const",{ROLL_OVER:"rollOver"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.FlowGroupElement
joo.classLoader.prepare("package flashx.textLayout.elements",
"public class FlowGroupElement extends flashx.textLayout.elements.FlowElement",2,function($$private){;return[
"public function get mxmlChildren",function(){
throw new Error('not implemented');
},
"public function set mxmlChildren",function(value){
throw new Error('not implemented');
},
"public function get numChildren",function(){
throw new Error('not implemented');
},
"public function FlowGroupElement",function(){flashx.textLayout.elements.FlowElement.call(this);
throw new Error('not implemented');
},
"public function addChild",function(child){
throw new Error('not implemented');
},
"public function addChildAt",function(index,child){
throw new Error('not implemented');
},
"public function findChildIndexAtPosition",function(relativePosition){
throw new Error('not implemented');
},
"public function findLeaf",function(relativePosition){
throw new Error('not implemented');
},
"public function getChildAt",function(index){
throw new Error('not implemented');
},
"public function getChildIndex",function(child){
throw new Error('not implemented');
},
"public function getFirstLeaf",function(){
throw new Error('not implemented');
},
"public function getLastLeaf",function(){
throw new Error('not implemented');
},
"override public function getText",function(relativeStart,relativeEnd,paragraphSeparator){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){relativeStart=0;}relativeEnd=-1;}paragraphSeparator=" ";}
throw new Error('not implemented');
},
"public function removeChild",function(child){
throw new Error('not implemented');
},
"public function removeChildAt",function(index){
throw new Error('not implemented');
},
"public function replaceChildren",function(beginChildIndex,endChildIndex){var rest=Array.prototype.slice.call(arguments,2);
throw new Error('not implemented');
},
"public function splitAtIndex",function(childIndex){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.elements.FlowElement","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.GlobalSettings
joo.classLoader.prepare("package flashx.textLayout.elements",
"public class GlobalSettings",1,function($$private){;return[
"public static function get enableSearch",function(){
throw new Error('not implemented');
},
"public static function set enableSearch",function(value){
throw new Error('not implemented');
},
"public static function get fontMapperFunction",function(){
throw new Error('not implemented');
},
"public static function set fontMapperFunction",function(value){
throw new Error('not implemented');
},
"public static function get resolveFontLookupFunction",function(){
throw new Error('not implemented');
},
"public static function set resolveFontLookupFunction",function(value){
throw new Error('not implemented');
},
"public static function get resourceStringFunction",function(){
throw new Error('not implemented');
},
"public static function set resourceStringFunction",function(value){
throw new Error('not implemented');
},
];},["enableSearch","fontMapperFunction","resolveFontLookupFunction","resourceStringFunction"],["Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.TabElement
joo.classLoader.prepare("package flashx.textLayout.elements",
"public final class TabElement extends flashx.textLayout.elements.SpecialCharacterElement",5,function($$private){;return[
"public function TabElement",function(){flashx.textLayout.elements.SpecialCharacterElement.call(this);
throw new Error('not implemented');
},
];},[],["flashx.textLayout.elements.SpecialCharacterElement","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.SpecialCharacterElement
joo.classLoader.prepare("package flashx.textLayout.elements",
"public class SpecialCharacterElement extends flashx.textLayout.elements.SpanElement",4,function($$private){;return[
"public function SpecialCharacterElement",function(){flashx.textLayout.elements.SpanElement.call(this);
throw new Error('not implemented');
},
];},[],["flashx.textLayout.elements.SpanElement","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.SubParagraphGroupElement
joo.classLoader.prepare("package flashx.textLayout.elements",
"public class SubParagraphGroupElement extends flashx.textLayout.elements.FlowGroupElement",3,function($$private){;return[
"public function SubParagraphGroupElement",function(){flashx.textLayout.elements.FlowGroupElement.call(this);
throw new Error('not implemented');
},
];},[],["flashx.textLayout.elements.FlowGroupElement","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.Configuration
joo.classLoader.prepare("package flashx.textLayout.elements",
"public class Configuration implements flashx.textLayout.elements.IConfiguration",1,function($$private){;return[
"public function get defaultLinkActiveFormat",function(){
throw new Error('not implemented');
},
"public function set defaultLinkActiveFormat",function(value){
throw new Error('not implemented');
},
"public function get defaultLinkHoverFormat",function(){
throw new Error('not implemented');
},
"public function set defaultLinkHoverFormat",function(value){
throw new Error('not implemented');
},
"public function get defaultLinkNormalFormat",function(){
throw new Error('not implemented');
},
"public function set defaultLinkNormalFormat",function(value){
throw new Error('not implemented');
},
"public function get enableAccessibility",function(){
throw new Error('not implemented');
},
"public function set enableAccessibility",function(value){
throw new Error('not implemented');
},
"public function get flowComposerClass",function(){
throw new Error('not implemented');
},
"public function set flowComposerClass",function(value){
throw new Error('not implemented');
},
"public function get focusedSelectionFormat",function(){
throw new Error('not implemented');
},
"public function set focusedSelectionFormat",function(value){
throw new Error('not implemented');
},
"public function get inactiveSelectionFormat",function(){
throw new Error('not implemented');
},
"public function set inactiveSelectionFormat",function(value){
throw new Error('not implemented');
},
"public function get inlineGraphicResolverFunction",function(){
throw new Error('not implemented');
},
"public function set inlineGraphicResolverFunction",function(value){
throw new Error('not implemented');
},
"public function get manageEnterKey",function(){
throw new Error('not implemented');
},
"public function set manageEnterKey",function(value){
throw new Error('not implemented');
},
"public function get manageTabKey",function(){
throw new Error('not implemented');
},
"public function set manageTabKey",function(value){
throw new Error('not implemented');
},
"public function get overflowPolicy",function(){
throw new Error('not implemented');
},
"public function set overflowPolicy",function(value){
throw new Error('not implemented');
},
"public function get releaseLineCreationData",function(){
throw new Error('not implemented');
},
"public function set releaseLineCreationData",function(value){
throw new Error('not implemented');
},
"public function get scrollDragDelay",function(){
throw new Error('not implemented');
},
"public function set scrollDragDelay",function(value){
throw new Error('not implemented');
},
"public function get scrollDragPixels",function(){
throw new Error('not implemented');
},
"public function set scrollDragPixels",function(value){
throw new Error('not implemented');
},
"public function get scrollMouseWheelMultiplier",function(){
throw new Error('not implemented');
},
"public function set scrollMouseWheelMultiplier",function(value){
throw new Error('not implemented');
},
"public function get scrollPagePercentage",function(){
throw new Error('not implemented');
},
"public function set scrollPagePercentage",function(value){
throw new Error('not implemented');
},
"public function get textFlowInitialFormat",function(){
throw new Error('not implemented');
},
"public function set textFlowInitialFormat",function(value){
throw new Error('not implemented');
},
"public function get unfocusedSelectionFormat",function(){
throw new Error('not implemented');
},
"public function set unfocusedSelectionFormat",function(value){
throw new Error('not implemented');
},
"public function Configuration",function(initializeWithDefaults){if(arguments.length<1){initializeWithDefaults=true;}
throw new Error('not implemented');
},
"public function clone",function(){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.elements.IConfiguration","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.InlineGraphicElement
joo.classLoader.prepare("package flashx.textLayout.elements",
"public final class InlineGraphicElement extends flashx.textLayout.elements.FlowLeafElement",3,function($$private){;return[
"public function get actualHeight",function(){
throw new Error('not implemented');
},
"public function get actualWidth",function(){
throw new Error('not implemented');
},
"public function get graphic",function(){
throw new Error('not implemented');
},
"public function get height",function(){
throw new Error('not implemented');
},
"public function set height",function(value){
throw new Error('not implemented');
},
"public function get measuredHeight",function(){
throw new Error('not implemented');
},
"public function get measuredWidth",function(){
throw new Error('not implemented');
},
"public function get source",function(){
throw new Error('not implemented');
},
"public function set source",function(value){
throw new Error('not implemented');
},
"public function get status",function(){
throw new Error('not implemented');
},
"public function get width",function(){
throw new Error('not implemented');
},
"public function set width",function(value){
throw new Error('not implemented');
},
"public function InlineGraphicElement",function(){flashx.textLayout.elements.FlowLeafElement.call(this);
throw new Error('not implemented');
},
];},[],["flashx.textLayout.elements.FlowLeafElement","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.IConfiguration
joo.classLoader.prepare("package flashx.textLayout.elements",
"public interface IConfiguration",1,function($$private){;return[,,,,,,,,,,,,,,,,,,
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.SpanElement
joo.classLoader.prepare("package flashx.textLayout.elements",
"public class SpanElement extends flashx.textLayout.elements.FlowLeafElement",3,function($$private){;return[
"public function get mxmlChildren",function(){
throw new Error('not implemented');
},
"public function set mxmlChildren",function(value){
throw new Error('not implemented');
},
"override public function get text",function(){
throw new Error('not implemented');
},
"public function set text",function(value){
throw new Error('not implemented');
},
"public function SpanElement",function(){flashx.textLayout.elements.FlowLeafElement.call(this);
throw new Error('not implemented');
},
"public function replaceText",function(relativeStartPosition,relativeEndPosition,textValue){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.elements.FlowLeafElement","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.ContainerFormattedElement
joo.classLoader.prepare("package flashx.textLayout.elements",
"public class ContainerFormattedElement extends flashx.textLayout.elements.ParagraphFormattedElement",4,function($$private){;return[
];},[],["flashx.textLayout.elements.ParagraphFormattedElement"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.InlineGraphicElementStatus
joo.classLoader.prepare("package flashx.textLayout.elements",
"public final class InlineGraphicElementStatus",1,function($$private){;return[
"public static const",{ERROR:"error"},
"public static const",{LOAD_PENDING:"loadPending"},
"public static const",{LOADING:"loading"},
"public static const",{READY:"ready"},
"public static const",{SIZE_PENDING:"sizePending"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.ParagraphFormattedElement
joo.classLoader.prepare("package flashx.textLayout.elements",
"public class ParagraphFormattedElement extends flashx.textLayout.elements.FlowGroupElement",3,function($$private){;return[
];},[],["flashx.textLayout.elements.FlowGroupElement"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.BreakElement
joo.classLoader.prepare("package flashx.textLayout.elements",
"public final class BreakElement extends flashx.textLayout.elements.SpecialCharacterElement",5,function($$private){;return[
"public function BreakElement",function(){flashx.textLayout.elements.SpecialCharacterElement.call(this);
throw new Error('not implemented');
},
];},[],["flashx.textLayout.elements.SpecialCharacterElement","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.FlowElement
joo.classLoader.prepare("package flashx.textLayout.elements",
"public class FlowElement implements flashx.textLayout.formats.ITextLayoutFormat",1,function($$private){;return[
"public function get alignmentBaseline",function(){
throw new Error('not implemented');
},
"public function set alignmentBaseline",function(value){
throw new Error('not implemented');
},
"public function get backgroundAlpha",function(){
throw new Error('not implemented');
},
"public function set backgroundAlpha",function(value){
throw new Error('not implemented');
},
"public function get backgroundColor",function(){
throw new Error('not implemented');
},
"public function set backgroundColor",function(value){
throw new Error('not implemented');
},
"public function get baselineShift",function(){
throw new Error('not implemented');
},
"public function set baselineShift",function(value){
throw new Error('not implemented');
},
"public function get blockProgression",function(){
throw new Error('not implemented');
},
"public function set blockProgression",function(value){
throw new Error('not implemented');
},
"public function get breakOpportunity",function(){
throw new Error('not implemented');
},
"public function set breakOpportunity",function(value){
throw new Error('not implemented');
},
"public function get cffHinting",function(){
throw new Error('not implemented');
},
"public function set cffHinting",function(value){
throw new Error('not implemented');
},
"public function get color",function(){
throw new Error('not implemented');
},
"public function set color",function(value){
throw new Error('not implemented');
},
"public function get columnCount",function(){
throw new Error('not implemented');
},
"public function set columnCount",function(value){
throw new Error('not implemented');
},
"public function get columnGap",function(){
throw new Error('not implemented');
},
"public function set columnGap",function(value){
throw new Error('not implemented');
},
"public function get columnWidth",function(){
throw new Error('not implemented');
},
"public function set columnWidth",function(value){
throw new Error('not implemented');
},
"public function get computedFormat",function(){
throw new Error('not implemented');
},
"public function get coreStyles",function(){
throw new Error('not implemented');
},
"public function get digitCase",function(){
throw new Error('not implemented');
},
"public function set digitCase",function(value){
throw new Error('not implemented');
},
"public function get digitWidth",function(){
throw new Error('not implemented');
},
"public function set digitWidth",function(value){
throw new Error('not implemented');
},
"public function get direction",function(){
throw new Error('not implemented');
},
"public function set direction",function(value){
throw new Error('not implemented');
},
"public function get dominantBaseline",function(){
throw new Error('not implemented');
},
"public function set dominantBaseline",function(value){
throw new Error('not implemented');
},
"public function get firstBaselineOffset",function(){
throw new Error('not implemented');
},
"public function set firstBaselineOffset",function(value){
throw new Error('not implemented');
},
"public function get fontFamily",function(){
throw new Error('not implemented');
},
"public function set fontFamily",function(value){
throw new Error('not implemented');
},
"public function get fontLookup",function(){
throw new Error('not implemented');
},
"public function set fontLookup",function(value){
throw new Error('not implemented');
},
"public function get fontSize",function(){
throw new Error('not implemented');
},
"public function set fontSize",function(value){
throw new Error('not implemented');
},
"public function get fontStyle",function(){
throw new Error('not implemented');
},
"public function set fontStyle",function(value){
throw new Error('not implemented');
},
"public function get fontWeight",function(){
throw new Error('not implemented');
},
"public function set fontWeight",function(value){
throw new Error('not implemented');
},
"public function get format",function(){
throw new Error('not implemented');
},
"public function set format",function(value){
throw new Error('not implemented');
},
"public function get id",function(){
throw new Error('not implemented');
},
"public function set id",function(value){
throw new Error('not implemented');
},
"public function get justificationRule",function(){
throw new Error('not implemented');
},
"public function set justificationRule",function(value){
throw new Error('not implemented');
},
"public function get justificationStyle",function(){
throw new Error('not implemented');
},
"public function set justificationStyle",function(value){
throw new Error('not implemented');
},
"public function get kerning",function(){
throw new Error('not implemented');
},
"public function set kerning",function(value){
throw new Error('not implemented');
},
"public function get leadingModel",function(){
throw new Error('not implemented');
},
"public function set leadingModel",function(value){
throw new Error('not implemented');
},
"public function get ligatureLevel",function(){
throw new Error('not implemented');
},
"public function set ligatureLevel",function(value){
throw new Error('not implemented');
},
"public function get lineBreak",function(){
throw new Error('not implemented');
},
"public function set lineBreak",function(value){
throw new Error('not implemented');
},
"public function get lineHeight",function(){
throw new Error('not implemented');
},
"public function set lineHeight",function(value){
throw new Error('not implemented');
},
"public function get lineThrough",function(){
throw new Error('not implemented');
},
"public function set lineThrough",function(value){
throw new Error('not implemented');
},
"public function get linkActiveFormat",function(){
throw new Error('not implemented');
},
"public function set linkActiveFormat",function(value){
throw new Error('not implemented');
},
"public function get linkHoverFormat",function(){
throw new Error('not implemented');
},
"public function set linkHoverFormat",function(value){
throw new Error('not implemented');
},
"public function get linkNormalFormat",function(){
throw new Error('not implemented');
},
"public function set linkNormalFormat",function(value){
throw new Error('not implemented');
},
"public function get locale",function(){
throw new Error('not implemented');
},
"public function set locale",function(value){
throw new Error('not implemented');
},
"public function get paddingBottom",function(){
throw new Error('not implemented');
},
"public function set paddingBottom",function(value){
throw new Error('not implemented');
},
"public function get paddingLeft",function(){
throw new Error('not implemented');
},
"public function set paddingLeft",function(value){
throw new Error('not implemented');
},
"public function get paddingRight",function(){
throw new Error('not implemented');
},
"public function set paddingRight",function(value){
throw new Error('not implemented');
},
"public function get paddingTop",function(){
throw new Error('not implemented');
},
"public function set paddingTop",function(value){
throw new Error('not implemented');
},
"public function get paragraphEndIndent",function(){
throw new Error('not implemented');
},
"public function set paragraphEndIndent",function(value){
throw new Error('not implemented');
},
"public function get paragraphSpaceAfter",function(){
throw new Error('not implemented');
},
"public function set paragraphSpaceAfter",function(value){
throw new Error('not implemented');
},
"public function get paragraphSpaceBefore",function(){
throw new Error('not implemented');
},
"public function set paragraphSpaceBefore",function(value){
throw new Error('not implemented');
},
"public function get paragraphStartIndent",function(){
throw new Error('not implemented');
},
"public function set paragraphStartIndent",function(value){
throw new Error('not implemented');
},
"public function get parent",function(){
throw new Error('not implemented');
},
"public function get parentRelativeEnd",function(){
throw new Error('not implemented');
},
"public function get parentRelativeStart",function(){
throw new Error('not implemented');
},
"public function get renderingMode",function(){
throw new Error('not implemented');
},
"public function set renderingMode",function(value){
throw new Error('not implemented');
},
"public function get styleName",function(){
throw new Error('not implemented');
},
"public function set styleName",function(value){
throw new Error('not implemented');
},
"public function get tabStops",function(){
throw new Error('not implemented');
},
"public function set tabStops",function(value){
throw new Error('not implemented');
},
"public function get textAlign",function(){
throw new Error('not implemented');
},
"public function set textAlign",function(value){
throw new Error('not implemented');
},
"public function get textAlignLast",function(){
throw new Error('not implemented');
},
"public function set textAlignLast",function(value){
throw new Error('not implemented');
},
"public function get textAlpha",function(){
throw new Error('not implemented');
},
"public function set textAlpha",function(value){
throw new Error('not implemented');
},
"public function get textDecoration",function(){
throw new Error('not implemented');
},
"public function set textDecoration",function(value){
throw new Error('not implemented');
},
"public function get textIndent",function(){
throw new Error('not implemented');
},
"public function set textIndent",function(value){
throw new Error('not implemented');
},
"public function get textJustify",function(){
throw new Error('not implemented');
},
"public function set textJustify",function(value){
throw new Error('not implemented');
},
"public function get textLength",function(){
throw new Error('not implemented');
},
"public function get textRotation",function(){
throw new Error('not implemented');
},
"public function set textRotation",function(value){
throw new Error('not implemented');
},
"public function set tracking",function(value){
throw new Error('not implemented');
},
"public function get trackingLeft",function(){
throw new Error('not implemented');
},
"public function set trackingLeft",function(value){
throw new Error('not implemented');
},
"public function get trackingRight",function(){
throw new Error('not implemented');
},
"public function set trackingRight",function(value){
throw new Error('not implemented');
},
"public function get typographicCase",function(){
throw new Error('not implemented');
},
"public function set typographicCase",function(value){
throw new Error('not implemented');
},
"public function get userStyles",function(){
throw new Error('not implemented');
},
"public function set userStyles",function(value){
throw new Error('not implemented');
},
"public function get verticalAlign",function(){
throw new Error('not implemented');
},
"public function set verticalAlign",function(value){
throw new Error('not implemented');
},
"public function get whiteSpaceCollapse",function(){
throw new Error('not implemented');
},
"public function set whiteSpaceCollapse",function(value){
throw new Error('not implemented');
},
"public function FlowElement",function(){
throw new Error('not implemented');
},
"public function clearStyle",function(styleProp){
throw new Error('not implemented');
},
"public function deepCopy",function(relativeStart,relativeEnd){if(arguments.length<2){if(arguments.length<1){relativeStart=0;}relativeEnd=-1;}
throw new Error('not implemented');
},
"public function equalUserStyles",function(otherElement){
throw new Error('not implemented');
},
"public function getAbsoluteStart",function(){
throw new Error('not implemented');
},
"public function getCharAtPosition",function(relativePosition){
throw new Error('not implemented');
},
"public function getCharCodeAtPosition",function(relativePosition){
throw new Error('not implemented');
},
"public function getElementRelativeStart",function(ancestorElement){
throw new Error('not implemented');
},
"public function getNextSibling",function(){
throw new Error('not implemented');
},
"public function getParagraph",function(){
throw new Error('not implemented');
},
"public function getPreviousSibling",function(){
throw new Error('not implemented');
},
"public function getStyle",function(styleProp){
throw new Error('not implemented');
},
"public function getText",function(relativeStart,relativeEnd,paragraphSeparator){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){relativeStart=0;}relativeEnd=-1;}paragraphSeparator=" ";}
throw new Error('not implemented');
},
"public function getTextFlow",function(){
throw new Error('not implemented');
},
"public function initialized",function(document,id){
throw new Error('not implemented');
},
"public function setStyle",function(styleProp,newValue){
throw new Error('not implemented');
},
"public function shallowCopy",function(relativeStart,relativeEnd){if(arguments.length<2){if(arguments.length<1){relativeStart=0;}relativeEnd=-1;}
throw new Error('not implemented');
},
"public function splitAtPosition",function(relativePosition){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.formats.ITextLayoutFormat","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.LinkElement
joo.classLoader.prepare("package flashx.textLayout.elements",
{Event:{name:"click",type:"flashx.textLayout.events.FlowElementMouseEvent"}},
{Event:{name:"mouseDown",type:"flashx.textLayout.events.FlowElementMouseEvent"}},
{Event:{name:"mouseMove",type:"flashx.textLayout.events.FlowElementMouseEvent"}},
{Event:{name:"mouseUp",type:"flashx.textLayout.events.FlowElementMouseEvent"}},
{Event:{name:"rollOut",type:"flashx.textLayout.events.FlowElementMouseEvent"}},
{Event:{name:"rollOver",type:"flashx.textLayout.events.FlowElementMouseEvent"}},
"public final class LinkElement extends flashx.textLayout.elements.SubParagraphGroupElement implements flash.events.IEventDispatcher",4,function($$private){;return[
"public function get href",function(){
throw new Error('not implemented');
},
"public function set href",function(value){
throw new Error('not implemented');
},
"public function get linkState",function(){
throw new Error('not implemented');
},
"public function get target",function(){
throw new Error('not implemented');
},
"public function set target",function(value){
throw new Error('not implemented');
},
"public function LinkElement",function(){flashx.textLayout.elements.SubParagraphGroupElement.call(this);
throw new Error('not implemented');
},
"public function addEventListener",function(type,listener,useCapture,priority,useWeakReference){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){useCapture=false;}priority=0;}useWeakReference=false;}
throw new Error('not implemented');
},
"public function dispatchEvent",function(evt){
throw new Error('not implemented');
},
"public function hasEventListener",function(type){
throw new Error('not implemented');
},
"public function removeEventListener",function(type,listener,useCapture){if(arguments.length<3){useCapture=false;}
throw new Error('not implemented');
},
"public function willTrigger",function(type){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.elements.SubParagraphGroupElement","flash.events.IEventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.DivElement
joo.classLoader.prepare("package flashx.textLayout.elements",
"public final class DivElement extends flashx.textLayout.elements.ContainerFormattedElement",5,function($$private){;return[
"public function DivElement",function(){flashx.textLayout.elements.ContainerFormattedElement.call(this);
throw new Error('not implemented');
},
];},[],["flashx.textLayout.elements.ContainerFormattedElement","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.TCYElement
joo.classLoader.prepare("package flashx.textLayout.elements",
"public final class TCYElement extends flashx.textLayout.elements.SubParagraphGroupElement",4,function($$private){;return[
"public function TCYElement",function(){flashx.textLayout.elements.SubParagraphGroupElement.call(this);
throw new Error('not implemented');
},
];},[],["flashx.textLayout.elements.SubParagraphGroupElement","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.OverflowPolicy
joo.classLoader.prepare("package flashx.textLayout.elements",
"public final class OverflowPolicy",1,function($$private){;return[
"public static const",{FIT_ANY:"fitAny"},
"public static const",{FIT_DESCENDERS:"fitDescenders"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.IFormatResolver
joo.classLoader.prepare("package flashx.textLayout.elements",
"public interface IFormatResolver",1,function($$private){;return[,,,,,
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.FlowLeafElement
joo.classLoader.prepare("package flashx.textLayout.elements",
"public class FlowLeafElement extends flashx.textLayout.elements.FlowElement",2,function($$private){;return[
"override public function get computedFormat",function(){
throw new Error('not implemented');
},
"public function get text",function(){
throw new Error('not implemented');
},
"public function FlowLeafElement",function(){flashx.textLayout.elements.FlowElement.call(this);
throw new Error('not implemented');
},
"public function getComputedFontMetrics",function(){
throw new Error('not implemented');
},
"public function getNextLeaf",function(limitElement){if(arguments.length<1){limitElement=null;}
throw new Error('not implemented');
},
"public function getPreviousLeaf",function(limitElement){if(arguments.length<1){limitElement=null;}
throw new Error('not implemented');
},
];},[],["flashx.textLayout.elements.FlowElement","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.LinkState
joo.classLoader.prepare("package flashx.textLayout.elements",
"public final class LinkState",1,function($$private){;return[
"public static const",{ACTIVE:"active"},
"public static const",{HOVER:"hover"},
"public static const",{LINK:"link"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.TextFlow
joo.classLoader.prepare("package flashx.textLayout.elements",
{Event:{name:"flowOperationBegin",type:"flashx.textLayout.events.FlowOperationEvent"}},
{Event:{name:"flowOperationComplete",type:"flashx.textLayout.events.FlowOperationEvent"}},
{Event:{name:"flowOperationEnd",type:"flashx.textLayout.events.FlowOperationEvent"}},
"public class TextFlow extends flashx.textLayout.elements.ContainerFormattedElement implements flash.events.IEventDispatcher",5,function($$private){;return[
"public function get configuration",function(){
throw new Error('not implemented');
},
"public static var",{defaultConfiguration:null},
"public function get flowComposer",function(){
throw new Error('not implemented');
},
"public function set flowComposer",function(value){
throw new Error('not implemented');
},
"public function get formatResolver",function(){
throw new Error('not implemented');
},
"public function set formatResolver",function(value){
throw new Error('not implemented');
},
"public function get generation",function(){
throw new Error('not implemented');
},
"public function get hostFormat",function(){
throw new Error('not implemented');
},
"public function set hostFormat",function(value){
throw new Error('not implemented');
},
"public function get interactionManager",function(){
throw new Error('not implemented');
},
"public function set interactionManager",function(value){
throw new Error('not implemented');
},
"public function TextFlow",function(config){flashx.textLayout.elements.ContainerFormattedElement.call(this);if(arguments.length<1){config=null;}
throw new Error('not implemented');
},
"public function addEventListener",function(type,listener,useCapture,priority,useWeakReference){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){useCapture=false;}priority=0;}useWeakReference=false;}
throw new Error('not implemented');
},
"public function dispatchEvent",function(event){
throw new Error('not implemented');
},
"public function getElementByID",function(idName){
throw new Error('not implemented');
},
"public function getElementsByStyleName",function(styleNameValue){
throw new Error('not implemented');
},
"public function hasEventListener",function(type){
throw new Error('not implemented');
},
"public function invalidateAllFormats",function(){
throw new Error('not implemented');
},
"public function removeEventListener",function(type,listener,useCapture){if(arguments.length<3){useCapture=false;}
throw new Error('not implemented');
},
"public function willTrigger",function(type){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.elements.ContainerFormattedElement","flash.events.IEventDispatcher","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.ParagraphElement
joo.classLoader.prepare("package flashx.textLayout.elements",
"public final class ParagraphElement extends flashx.textLayout.elements.ParagraphFormattedElement",4,function($$private){;return[
"public function ParagraphElement",function(){flashx.textLayout.elements.ParagraphFormattedElement.call(this);
throw new Error('not implemented');
},
"public function findNextAtomBoundary",function(relativePosition){
throw new Error('not implemented');
},
"public function findNextWordBoundary",function(relativePosition){
throw new Error('not implemented');
},
"public function findPreviousAtomBoundary",function(relativePosition){
throw new Error('not implemented');
},
"public function findPreviousWordBoundary",function(relativePosition){
throw new Error('not implemented');
},
"public function getNextParagraph",function(){
throw new Error('not implemented');
},
"public function getPreviousParagraph",function(){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.elements.ParagraphFormattedElement","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.elements.TextRange
joo.classLoader.prepare("package flashx.textLayout.elements",
"public class TextRange",1,function($$private){;return[
"public function get absoluteEnd",function(){
throw new Error('not implemented');
},
"public function set absoluteEnd",function(value){
throw new Error('not implemented');
},
"public function get absoluteStart",function(){
throw new Error('not implemented');
},
"public function set absoluteStart",function(value){
throw new Error('not implemented');
},
"public function get activePosition",function(){
throw new Error('not implemented');
},
"public function set activePosition",function(value){
throw new Error('not implemented');
},
"public function get anchorPosition",function(){
throw new Error('not implemented');
},
"public function set anchorPosition",function(value){
throw new Error('not implemented');
},
"public function get textFlow",function(){
throw new Error('not implemented');
},
"public function set textFlow",function(value){
throw new Error('not implemented');
},
"public function TextRange",function(root,anchorIndex,activeIndex){
throw new Error('not implemented');
},
"public function updateRange",function(newAnchorPosition,newActivePosition){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.LineBreak
joo.classLoader.prepare("package flashx.textLayout.formats",
"public final class LineBreak",1,function($$private){;return[
"public static const",{EXPLICIT:"explicit"},
"public static const",{TO_FIT:"toFit"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.TextLayoutFormat
joo.classLoader.prepare("package flashx.textLayout.formats",
"public class TextLayoutFormat implements flashx.textLayout.formats.ITextLayoutFormat",1,function($$private){;return[
"public function get alignmentBaseline",function(){
throw new Error('not implemented');
},
"public function set alignmentBaseline",function(value){
throw new Error('not implemented');
},
"public function get backgroundAlpha",function(){
throw new Error('not implemented');
},
"public function set backgroundAlpha",function(value){
throw new Error('not implemented');
},
"public function get backgroundColor",function(){
throw new Error('not implemented');
},
"public function set backgroundColor",function(value){
throw new Error('not implemented');
},
"public function get baselineShift",function(){
throw new Error('not implemented');
},
"public function set baselineShift",function(value){
throw new Error('not implemented');
},
"public function get blockProgression",function(){
throw new Error('not implemented');
},
"public function set blockProgression",function(value){
throw new Error('not implemented');
},
"public function get breakOpportunity",function(){
throw new Error('not implemented');
},
"public function set breakOpportunity",function(value){
throw new Error('not implemented');
},
"public function get cffHinting",function(){
throw new Error('not implemented');
},
"public function set cffHinting",function(value){
throw new Error('not implemented');
},
"public function get color",function(){
throw new Error('not implemented');
},
"public function set color",function(value){
throw new Error('not implemented');
},
"public function get columnCount",function(){
throw new Error('not implemented');
},
"public function set columnCount",function(value){
throw new Error('not implemented');
},
"public function get columnGap",function(){
throw new Error('not implemented');
},
"public function set columnGap",function(value){
throw new Error('not implemented');
},
"public function get columnWidth",function(){
throw new Error('not implemented');
},
"public function set columnWidth",function(value){
throw new Error('not implemented');
},
"public static function get defaultFormat",function(){
throw new Error('not implemented');
},
"public function get digitCase",function(){
throw new Error('not implemented');
},
"public function set digitCase",function(value){
throw new Error('not implemented');
},
"public function get digitWidth",function(){
throw new Error('not implemented');
},
"public function set digitWidth",function(value){
throw new Error('not implemented');
},
"public function get direction",function(){
throw new Error('not implemented');
},
"public function set direction",function(value){
throw new Error('not implemented');
},
"public function get dominantBaseline",function(){
throw new Error('not implemented');
},
"public function set dominantBaseline",function(value){
throw new Error('not implemented');
},
"public function get firstBaselineOffset",function(){
throw new Error('not implemented');
},
"public function set firstBaselineOffset",function(value){
throw new Error('not implemented');
},
"public function get fontFamily",function(){
throw new Error('not implemented');
},
"public function set fontFamily",function(value){
throw new Error('not implemented');
},
"public function get fontLookup",function(){
throw new Error('not implemented');
},
"public function set fontLookup",function(value){
throw new Error('not implemented');
},
"public function get fontSize",function(){
throw new Error('not implemented');
},
"public function set fontSize",function(value){
throw new Error('not implemented');
},
"public function get fontStyle",function(){
throw new Error('not implemented');
},
"public function set fontStyle",function(value){
throw new Error('not implemented');
},
"public function get fontWeight",function(){
throw new Error('not implemented');
},
"public function set fontWeight",function(value){
throw new Error('not implemented');
},
"public function get justificationRule",function(){
throw new Error('not implemented');
},
"public function set justificationRule",function(value){
throw new Error('not implemented');
},
"public function get justificationStyle",function(){
throw new Error('not implemented');
},
"public function set justificationStyle",function(value){
throw new Error('not implemented');
},
"public function get kerning",function(){
throw new Error('not implemented');
},
"public function set kerning",function(value){
throw new Error('not implemented');
},
"public function get leadingModel",function(){
throw new Error('not implemented');
},
"public function set leadingModel",function(value){
throw new Error('not implemented');
},
"public function get ligatureLevel",function(){
throw new Error('not implemented');
},
"public function set ligatureLevel",function(value){
throw new Error('not implemented');
},
"public function get lineBreak",function(){
throw new Error('not implemented');
},
"public function set lineBreak",function(value){
throw new Error('not implemented');
},
"public function get lineHeight",function(){
throw new Error('not implemented');
},
"public function set lineHeight",function(value){
throw new Error('not implemented');
},
"public function get lineThrough",function(){
throw new Error('not implemented');
},
"public function set lineThrough",function(value){
throw new Error('not implemented');
},
"public function get locale",function(){
throw new Error('not implemented');
},
"public function set locale",function(value){
throw new Error('not implemented');
},
"public function get paddingBottom",function(){
throw new Error('not implemented');
},
"public function set paddingBottom",function(value){
throw new Error('not implemented');
},
"public function get paddingLeft",function(){
throw new Error('not implemented');
},
"public function set paddingLeft",function(value){
throw new Error('not implemented');
},
"public function get paddingRight",function(){
throw new Error('not implemented');
},
"public function set paddingRight",function(value){
throw new Error('not implemented');
},
"public function get paddingTop",function(){
throw new Error('not implemented');
},
"public function set paddingTop",function(value){
throw new Error('not implemented');
},
"public function get paragraphEndIndent",function(){
throw new Error('not implemented');
},
"public function set paragraphEndIndent",function(value){
throw new Error('not implemented');
},
"public function get paragraphSpaceAfter",function(){
throw new Error('not implemented');
},
"public function set paragraphSpaceAfter",function(value){
throw new Error('not implemented');
},
"public function get paragraphSpaceBefore",function(){
throw new Error('not implemented');
},
"public function set paragraphSpaceBefore",function(value){
throw new Error('not implemented');
},
"public function get paragraphStartIndent",function(){
throw new Error('not implemented');
},
"public function set paragraphStartIndent",function(value){
throw new Error('not implemented');
},
"public function get renderingMode",function(){
throw new Error('not implemented');
},
"public function set renderingMode",function(value){
throw new Error('not implemented');
},
"public function get tabStops",function(){
throw new Error('not implemented');
},
"public function set tabStops",function(value){
throw new Error('not implemented');
},
"public function get textAlign",function(){
throw new Error('not implemented');
},
"public function set textAlign",function(value){
throw new Error('not implemented');
},
"public function get textAlignLast",function(){
throw new Error('not implemented');
},
"public function set textAlignLast",function(value){
throw new Error('not implemented');
},
"public function get textAlpha",function(){
throw new Error('not implemented');
},
"public function set textAlpha",function(value){
throw new Error('not implemented');
},
"public function get textDecoration",function(){
throw new Error('not implemented');
},
"public function set textDecoration",function(value){
throw new Error('not implemented');
},
"public function get textIndent",function(){
throw new Error('not implemented');
},
"public function set textIndent",function(value){
throw new Error('not implemented');
},
"public function get textJustify",function(){
throw new Error('not implemented');
},
"public function set textJustify",function(value){
throw new Error('not implemented');
},
"public function get textRotation",function(){
throw new Error('not implemented');
},
"public function set textRotation",function(value){
throw new Error('not implemented');
},
"public function get trackingLeft",function(){
throw new Error('not implemented');
},
"public function set trackingLeft",function(value){
throw new Error('not implemented');
},
"public function get trackingRight",function(){
throw new Error('not implemented');
},
"public function set trackingRight",function(value){
throw new Error('not implemented');
},
"public function get typographicCase",function(){
throw new Error('not implemented');
},
"public function set typographicCase",function(value){
throw new Error('not implemented');
},
"public function get verticalAlign",function(){
throw new Error('not implemented');
},
"public function set verticalAlign",function(value){
throw new Error('not implemented');
},
"public function get whiteSpaceCollapse",function(){
throw new Error('not implemented');
},
"public function set whiteSpaceCollapse",function(value){
throw new Error('not implemented');
},
"public function TextLayoutFormat",function(initialValues){if(arguments.length<1){initialValues=null;}
throw new Error('not implemented');
},
"public function apply",function(incoming){
throw new Error('not implemented');
},
"public function concat",function(incoming){
throw new Error('not implemented');
},
"public function concatInheritOnly",function(incoming){
throw new Error('not implemented');
},
"public function copy",function(values){
throw new Error('not implemented');
},
"public static function isEqual",function(p1,p2){
throw new Error('not implemented');
},
"public function removeClashing",function(incoming){
throw new Error('not implemented');
},
"public function removeMatching",function(incoming){
throw new Error('not implemented');
},
];},["defaultFormat","isEqual"],["flashx.textLayout.formats.ITextLayoutFormat","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.Direction
joo.classLoader.prepare("package flashx.textLayout.formats",
"public final class Direction",1,function($$private){;return[
"public static const",{LTR:"ltr"},
"public static const",{RTL:"rtl"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.TLFTypographicCase
joo.classLoader.prepare("package flashx.textLayout.formats",
"public final class TLFTypographicCase",1,function($$private){;return[
"public static const",{CAPS_TO_SMALL_CAPS:"capsToSmallCaps"},
"public static const",{DEFAULT:"default"},
"public static const",{LOWERCASE:"lowercase"},
"public static const",{LOWERCASE_TO_SMALL_CAPS:"lowercaseToSmallCaps"},
"public static const",{UPPERCASE:"uppercase"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.LeadingModel
joo.classLoader.prepare("package flashx.textLayout.formats",
"public final class LeadingModel",1,function($$private){;return[
"public static const",{APPROXIMATE_TEXT_FIELD:"approximateTextField"},
"public static const",{ASCENT_DESCENT_UP:"ascentDescentUp"},
"public static const",{AUTO:"auto"},
"public static const",{IDEOGRAPHIC_CENTER_DOWN:"ideographicCenterDown"},
"public static const",{IDEOGRAPHIC_CENTER_UP:"ideographicCenterUp"},
"public static const",{IDEOGRAPHIC_TOP_DOWN:"ideographicTopDown"},
"public static const",{IDEOGRAPHIC_TOP_UP:"ideographicTopUp"},
"public static const",{ROMAN_UP:"romanUp"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.VerticalAlign
joo.classLoader.prepare("package flashx.textLayout.formats",
"public final class VerticalAlign",1,function($$private){;return[
"public static const",{BOTTOM:"bottom"},
"public static const",{JUSTIFY:"justify"},
"public static const",{MIDDLE:"middle"},
"public static const",{TOP:"top"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.BaselineShift
joo.classLoader.prepare("package flashx.textLayout.formats",
"public final class BaselineShift",1,function($$private){;return[
"public static const",{SUBSCRIPT:"subscript"},
"public static const",{SUPERSCRIPT:"superscript"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.TextAlign
joo.classLoader.prepare("package flashx.textLayout.formats",
"public final class TextAlign",1,function($$private){;return[
"public static const",{CENTER:"center"},
"public static const",{END:"end"},
"public static const",{JUSTIFY:"justify"},
"public static const",{LEFT:"left"},
"public static const",{RIGHT:"right"},
"public static const",{START:"start"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.TabStopFormat
joo.classLoader.prepare("package flashx.textLayout.formats",
"public class TabStopFormat implements flashx.textLayout.formats.ITabStopFormat",1,function($$private){;return[
"public function get alignment",function(){
throw new Error('not implemented');
},
"public function set alignment",function(value){
throw new Error('not implemented');
},
"public function get decimalAlignmentToken",function(){
throw new Error('not implemented');
},
"public function set decimalAlignmentToken",function(value){
throw new Error('not implemented');
},
"public static function get defaultFormat",function(){
throw new Error('not implemented');
},
"public function get position",function(){
throw new Error('not implemented');
},
"public function set position",function(value){
throw new Error('not implemented');
},
"public function TabStopFormat",function(initialValues){if(arguments.length<1){initialValues=null;}
throw new Error('not implemented');
},
"public function apply",function(incoming){
throw new Error('not implemented');
},
"public function concat",function(incoming){
throw new Error('not implemented');
},
"public function concatInheritOnly",function(incoming){
throw new Error('not implemented');
},
"public function copy",function(values){
throw new Error('not implemented');
},
"public static function isEqual",function(p1,p2){
throw new Error('not implemented');
},
"public function removeClashing",function(incoming){
throw new Error('not implemented');
},
"public function removeMatching",function(incoming){
throw new Error('not implemented');
},
];},["defaultFormat","isEqual"],["flashx.textLayout.formats.ITabStopFormat","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.WhiteSpaceCollapse
joo.classLoader.prepare("package flashx.textLayout.formats",
"public final class WhiteSpaceCollapse",1,function($$private){;return[
"public static const",{COLLAPSE:"collapse"},
"public static const",{PRESERVE:"preserve"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.BaselineOffset
joo.classLoader.prepare("package flashx.textLayout.formats",
"public final class BaselineOffset",1,function($$private){;return[
"public static const",{ASCENT:"ascent"},
"public static const",{AUTO:"auto"},
"public static const",{LINE_HEIGHT:"lineHeight"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.BlockProgression
joo.classLoader.prepare("package flashx.textLayout.formats",
"public final class BlockProgression",1,function($$private){;return[
"public static const",{RL:"rl"},
"public static const",{TB:"tb"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.FormatValue
joo.classLoader.prepare("package flashx.textLayout.formats",
"public final class FormatValue",1,function($$private){;return[
"public static const",{AUTO:"auto"},
"public static const",{INHERIT:"inherit"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.ITextLayoutFormat
joo.classLoader.prepare("package flashx.textLayout.formats",
"public interface ITextLayoutFormat",1,function($$private){;return[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.TextJustify
joo.classLoader.prepare("package flashx.textLayout.formats",
"public final class TextJustify",1,function($$private){;return[
"public static const",{DISTRIBUTE:"distribute"},
"public static const",{INTER_WORD:"interWord"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.BackgroundColor
joo.classLoader.prepare("package flashx.textLayout.formats",
"public final class BackgroundColor",1,function($$private){;return[
"public static const",{TRANSPARENT:"transparent"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.TextDecoration
joo.classLoader.prepare("package flashx.textLayout.formats",
"public final class TextDecoration",1,function($$private){;return[
"public static const",{NONE:"none"},
"public static const",{UNDERLINE:"underline"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.JustificationRule
joo.classLoader.prepare("package flashx.textLayout.formats",
"public final class JustificationRule",1,function($$private){;return[
"public static const",{EAST_ASIAN:"eastAsian"},
"public static const",{SPACE:"space"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.formats.ITabStopFormat
joo.classLoader.prepare("package flashx.textLayout.formats",
"public interface ITabStopFormat",1,function($$private){;return[,,,
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.utils.CharacterUtil
joo.classLoader.prepare("package flashx.textLayout.utils",
"public final class CharacterUtil",1,function($$private){;return[
"public static function isHighSurrogate",function(charCode){
throw new Error('not implemented');
},
"public static function isLowSurrogate",function(charCode){
throw new Error('not implemented');
},
"public static function isWhitespace",function(charCode){
throw new Error('not implemented');
},
];},["isHighSurrogate","isLowSurrogate","isWhitespace"],["Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.utils.NavigationUtil
joo.classLoader.prepare("package flashx.textLayout.utils",
"public final class NavigationUtil",1,function($$private){;return[
"public static function endOfDocument",function(range,extendSelection){if(arguments.length<2){extendSelection=false;}
throw new Error('not implemented');
},
"public static function endOfLine",function(range,extendSelection){if(arguments.length<2){extendSelection=false;}
throw new Error('not implemented');
},
"public static function endOfParagraph",function(range,extendSelection){if(arguments.length<2){extendSelection=false;}
throw new Error('not implemented');
},
"public static function nextAtomPosition",function(flowRoot,absolutePos){
throw new Error('not implemented');
},
"public static function nextCharacter",function(range,extendSelection){if(arguments.length<2){extendSelection=false;}
throw new Error('not implemented');
},
"public static function nextLine",function(range,extendSelection){if(arguments.length<2){extendSelection=false;}
throw new Error('not implemented');
},
"public static function nextPage",function(range,extendSelection){if(arguments.length<2){extendSelection=false;}
throw new Error('not implemented');
},
"public static function nextWord",function(range,extendSelection){if(arguments.length<2){extendSelection=false;}
throw new Error('not implemented');
},
"public static function nextWordPosition",function(flowRoot,absolutePos){
throw new Error('not implemented');
},
"public static function previousAtomPosition",function(flowRoot,absolutePos){
throw new Error('not implemented');
},
"public static function previousCharacter",function(range,extendSelection){if(arguments.length<2){extendSelection=false;}
throw new Error('not implemented');
},
"public static function previousLine",function(range,extendSelection){if(arguments.length<2){extendSelection=false;}
throw new Error('not implemented');
},
"public static function previousPage",function(range,extendSelection){if(arguments.length<2){extendSelection=false;}
throw new Error('not implemented');
},
"public static function previousWord",function(range,extendSelection){if(arguments.length<2){extendSelection=false;}
throw new Error('not implemented');
},
"public static function previousWordPosition",function(flowRoot,absolutePos){
throw new Error('not implemented');
},
"public static function startOfDocument",function(range,extendSelection){if(arguments.length<2){extendSelection=false;}
throw new Error('not implemented');
},
"public static function startOfLine",function(range,extendSelection){if(arguments.length<2){extendSelection=false;}
throw new Error('not implemented');
},
"public static function startOfParagraph",function(range,extendSelection){if(arguments.length<2){extendSelection=false;}
throw new Error('not implemented');
},
];},["endOfDocument","endOfLine","endOfParagraph","nextAtomPosition","nextCharacter","nextLine","nextPage","nextWord","nextWordPosition","previousAtomPosition","previousCharacter","previousLine","previousPage","previousWord","previousWordPosition","startOfDocument","startOfLine","startOfParagraph"],["Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.edit.TextScrap
joo.classLoader.prepare("package flashx.textLayout.edit",
"public class TextScrap",1,function($$private){;return[
"public function TextScrap",function(textFlow){if(arguments.length<1){textFlow=null;}
throw new Error('not implemented');
},
"public function clone",function(){
throw new Error('not implemented');
},
"public static function createTextScrap",function(range){
throw new Error('not implemented');
},
];},["createTextScrap"],["Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.edit.SelectionState
joo.classLoader.prepare("package flashx.textLayout.edit",
"public class SelectionState extends flashx.textLayout.elements.TextRange",2,function($$private){;return[
"public function get pointFormat",function(){
throw new Error('not implemented');
},
"public function set pointFormat",function(value){
throw new Error('not implemented');
},
"public function SelectionState",function(root,anchorPosition,activePosition,format){flashx.textLayout.elements.TextRange.call(this);if(arguments.length<4){format=null;}
throw new Error('not implemented');
},
"override public function updateRange",function(newAnchorPosition,newActivePosition){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.elements.TextRange","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.edit.SelectionManager
joo.classLoader.prepare("package flashx.textLayout.edit",
"public class SelectionManager implements flashx.textLayout.edit.ISelectionManager",1,function($$private){;return[
"public function get absoluteEnd",function(){
throw new Error('not implemented');
},
"public function get absoluteStart",function(){
throw new Error('not implemented');
},
"public function get activePosition",function(){
throw new Error('not implemented');
},
"public function get anchorPosition",function(){
throw new Error('not implemented');
},
"public function get currentSelectionFormat",function(){
throw new Error('not implemented');
},
"public function get editingMode",function(){
throw new Error('not implemented');
},
"public function get focused",function(){
throw new Error('not implemented');
},
"public function get focusedSelectionFormat",function(){
throw new Error('not implemented');
},
"public function set focusedSelectionFormat",function(value){
throw new Error('not implemented');
},
"public function get inactiveSelectionFormat",function(){
throw new Error('not implemented');
},
"public function set inactiveSelectionFormat",function(value){
throw new Error('not implemented');
},
"protected function get pointFormat",function(){
throw new Error('not implemented');
},
"public function get textFlow",function(){
throw new Error('not implemented');
},
"public function set textFlow",function(value){
throw new Error('not implemented');
},
"public function get unfocusedSelectionFormat",function(){
throw new Error('not implemented');
},
"public function set unfocusedSelectionFormat",function(value){
throw new Error('not implemented');
},
"public function get windowActive",function(){
throw new Error('not implemented');
},
"public function SelectionManager",function(){
throw new Error('not implemented');
},
"public function activateHandler",function(event){
throw new Error('not implemented');
},
"public function deactivateHandler",function(event){
throw new Error('not implemented');
},
"public function doOperation",function(op){
throw new Error('not implemented');
},
"public function editHandler",function(event){
throw new Error('not implemented');
},
"public function flushPendingOperations",function(){
throw new Error('not implemented');
},
"public function focusChangeHandler",function(event){
throw new Error('not implemented');
},
"public function focusInHandler",function(event){
throw new Error('not implemented');
},
"public function focusOutHandler",function(event){
throw new Error('not implemented');
},
"public function getCommonCharacterFormat",function(range){if(arguments.length<1){range=null;}
throw new Error('not implemented');
},
"public function getCommonContainerFormat",function(range){if(arguments.length<1){range=null;}
throw new Error('not implemented');
},
"public function getCommonParagraphFormat",function(range){if(arguments.length<1){range=null;}
throw new Error('not implemented');
},
"public function getSelectionState",function(){
throw new Error('not implemented');
},
"public function hasSelection",function(){
throw new Error('not implemented');
},
"public function imeStartCompositionHandler",function(event){
throw new Error('not implemented');
},
"public function isRangeSelection",function(){
throw new Error('not implemented');
},
"public function keyDownHandler",function(event){
throw new Error('not implemented');
},
"public function keyFocusChangeHandler",function(event){
throw new Error('not implemented');
},
"public function keyUpHandler",function(event){
throw new Error('not implemented');
},
"public function menuSelectHandler",function(event){
throw new Error('not implemented');
},
"public function mouseDoubleClickHandler",function(event){
throw new Error('not implemented');
},
"public function mouseDownHandler",function(event){
throw new Error('not implemented');
},
"public function mouseMoveHandler",function(event){
throw new Error('not implemented');
},
"public function mouseOutHandler",function(event){
throw new Error('not implemented');
},
"public function mouseOverHandler",function(event){
throw new Error('not implemented');
},
"public function mouseUpHandler",function(event){
throw new Error('not implemented');
},
"public function mouseWheelHandler",function(event){
throw new Error('not implemented');
},
"public function notifyInsertOrDelete",function(absolutePosition,length){
throw new Error('not implemented');
},
"public function refreshSelection",function(){
throw new Error('not implemented');
},
"public function selectAll",function(){
throw new Error('not implemented');
},
"public function selectRange",function(anchorPosition,activePosition){
throw new Error('not implemented');
},
"public function setFocus",function(){
throw new Error('not implemented');
},
"public function setSelectionState",function(sel){
throw new Error('not implemented');
},
"public function textInputHandler",function(event){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.edit.ISelectionManager","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.edit.IInteractionEventHandler
joo.classLoader.prepare("package flashx.textLayout.edit",
"public interface IInteractionEventHandler",1,function($$private){;return[,,,,,,,,,,,,,,,,,,,
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.edit.IEditManager
joo.classLoader.prepare("package flashx.textLayout.edit",
"public interface IEditManager extends flashx.textLayout.edit.ISelectionManager,flashx.textLayout.edit.IInteractionEventHandler",1,function($$private){;return[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
];},[],["flashx.textLayout.edit.ISelectionManager","flashx.textLayout.edit.IInteractionEventHandler"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.edit.EditManager
joo.classLoader.prepare("package flashx.textLayout.edit",
"public class EditManager extends flashx.textLayout.edit.SelectionManager implements flashx.textLayout.edit.IEditManager",2,function($$private){;return[
"public static var",{overwriteMode:false},
"public function get undoManager",function(){
throw new Error('not implemented');
},
"public function EditManager",function(undoManager){flashx.textLayout.edit.SelectionManager.call(this);if(arguments.length<1){undoManager=null;}
throw new Error('not implemented');
},
"public function applyContainerFormat",function(containerFormat,operationState){if(arguments.length<2){operationState=null;}
throw new Error('not implemented');
},
"public function applyFormat",function(leafFormat,paragraphFormat,containerFormat,operationState){if(arguments.length<4){operationState=null;}
throw new Error('not implemented');
},
"public function applyFormatToElement",function(targetElement,format,operationState){if(arguments.length<3){operationState=null;}
throw new Error('not implemented');
},
"public function applyLeafFormat",function(characterFormat,operationState){if(arguments.length<2){operationState=null;}
throw new Error('not implemented');
},
"public function applyLink",function(href,targetString,extendToLinkBoundary,operationState){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){targetString=null;}extendToLinkBoundary=false;}operationState=null;}
throw new Error('not implemented');
},
"public function applyParagraphFormat",function(paragraphFormat,operationState){if(arguments.length<2){operationState=null;}
throw new Error('not implemented');
},
"public function applyTCY",function(tcyOn,operationState){if(arguments.length<2){operationState=null;}
throw new Error('not implemented');
},
"public function beginCompositeOperation",function(){
throw new Error('not implemented');
},
"public function changeElementID",function(newID,targetElement,relativeStart,relativeEnd,operationState){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){relativeStart=0;}relativeEnd=-1;}operationState=null;}
throw new Error('not implemented');
},
"public function changeStyleName",function(newName,targetElement,relativeStart,relativeEnd,operationState){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){relativeStart=0;}relativeEnd=-1;}operationState=null;}
throw new Error('not implemented');
},
"public function clearFormat",function(leafFormat,paragraphFormat,containerFormat,operationState){if(arguments.length<4){operationState=null;}
throw new Error('not implemented');
},
"public function clearFormatOnElement",function(targetElement,format,operationState){if(arguments.length<3){operationState=null;}
throw new Error('not implemented');
},
"public function cutTextScrap",function(operationState){if(arguments.length<1){operationState=null;}
throw new Error('not implemented');
},
"public function deleteNextCharacter",function(operationState){if(arguments.length<1){operationState=null;}
throw new Error('not implemented');
},
"public function deleteNextWord",function(operationState){if(arguments.length<1){operationState=null;}
throw new Error('not implemented');
},
"public function deletePreviousCharacter",function(operationState){if(arguments.length<1){operationState=null;}
throw new Error('not implemented');
},
"public function deletePreviousWord",function(operationState){if(arguments.length<1){operationState=null;}
throw new Error('not implemented');
},
"public function deleteText",function(operationState){if(arguments.length<1){operationState=null;}
throw new Error('not implemented');
},
"override public function doOperation",function(operation){
throw new Error('not implemented');
},
"override public function editHandler",function(event){
throw new Error('not implemented');
},
"public function endCompositeOperation",function(){
throw new Error('not implemented');
},
"public function insertInlineGraphic",function(source,width,height,options,operationState){if(arguments.length<5){if(arguments.length<4){options=null;}operationState=null;}
throw new Error('not implemented');
},
"public function insertText",function(text,origOperationState){if(arguments.length<2){origOperationState=null;}
throw new Error('not implemented');
},
"public function modifyInlineGraphic",function(source,width,height,options,operationState){if(arguments.length<5){if(arguments.length<4){options=null;}operationState=null;}
throw new Error('not implemented');
},
"public function overwriteText",function(text,operationState){if(arguments.length<2){operationState=null;}
throw new Error('not implemented');
},
"public function pasteTextScrap",function(scrapToPaste,operationState){if(arguments.length<2){operationState=null;}
throw new Error('not implemented');
},
"public function redo",function(){
throw new Error('not implemented');
},
"public function splitParagraph",function(operationState){if(arguments.length<1){operationState=null;}
throw new Error('not implemented');
},
"public function undo",function(){
throw new Error('not implemented');
},
"protected function updateAllControllers",function(){
throw new Error('not implemented');
},
];},[],["flashx.textLayout.edit.SelectionManager","flashx.textLayout.edit.IEditManager","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.edit.TextClipboard
joo.classLoader.prepare("package flashx.textLayout.edit",
"public class TextClipboard",1,function($$private){;return[
"public static function getContents",function(){
throw new Error('not implemented');
},
"public static function setContents",function(scrap){
throw new Error('not implemented');
},
];},["getContents","setContents"],["Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.edit.ElementRange
joo.classLoader.prepare("package flashx.textLayout.edit",
"public class ElementRange",1,function($$private){;return[
"public function get absoluteEnd",function(){
throw new Error('not implemented');
},
"public function set absoluteEnd",function(value){
throw new Error('not implemented');
},
"public function get absoluteStart",function(){
throw new Error('not implemented');
},
"public function set absoluteStart",function(value){
throw new Error('not implemented');
},
"public function get characterFormat",function(){
throw new Error('not implemented');
},
"public function get containerFormat",function(){
throw new Error('not implemented');
},
"public function get firstLeaf",function(){
throw new Error('not implemented');
},
"public function set firstLeaf",function(value){
throw new Error('not implemented');
},
"public function get firstParagraph",function(){
throw new Error('not implemented');
},
"public function set firstParagraph",function(value){
throw new Error('not implemented');
},
"public function get lastLeaf",function(){
throw new Error('not implemented');
},
"public function set lastLeaf",function(value){
throw new Error('not implemented');
},
"public function get lastParagraph",function(){
throw new Error('not implemented');
},
"public function set lastParagraph",function(value){
throw new Error('not implemented');
},
"public function get paragraphFormat",function(){
throw new Error('not implemented');
},
"public function get textFlow",function(){
throw new Error('not implemented');
},
"public function set textFlow",function(value){
throw new Error('not implemented');
},
"public static function createElementRange",function(textFlow,absoluteStart,absoluteEnd){
throw new Error('not implemented');
},
];},["createElementRange"],["Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.edit.ISelectionManager
joo.classLoader.prepare("package flashx.textLayout.edit",
"public interface ISelectionManager extends flashx.textLayout.edit.IInteractionEventHandler",1,function($$private){;return[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
];},[],["flashx.textLayout.edit.IInteractionEventHandler"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.edit.EditingMode
joo.classLoader.prepare("package flashx.textLayout.edit",
"public final class EditingMode",1,function($$private){;return[
"public static const",{READ_ONLY:"readOnly"},
"public static const",{READ_SELECT:"readSelect"},
"public static const",{READ_WRITE:"readWrite"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.edit.SelectionFormat
joo.classLoader.prepare("package flashx.textLayout.edit",
"public class SelectionFormat",1,function($$private){;return[
"public function get pointAlpha",function(){
throw new Error('not implemented');
},
"public function get pointBlendMode",function(){
throw new Error('not implemented');
},
"public function get pointBlinkRate",function(){
throw new Error('not implemented');
},
"public function get pointColor",function(){
throw new Error('not implemented');
},
"public function get rangeAlpha",function(){
throw new Error('not implemented');
},
"public function get rangeBlendMode",function(){
throw new Error('not implemented');
},
"public function get rangeColor",function(){
throw new Error('not implemented');
},
"public function SelectionFormat",function(rangeColor,rangeAlpha,rangeBlendMode,pointColor,pointAlpha,pointBlendMode,pointBlinkRate){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){rangeColor=0xffffff;}rangeAlpha=1.0;}rangeBlendMode="difference";}pointColor=0xffffff;}pointAlpha=1.0;}pointBlendMode="difference";}pointBlinkRate=500;}
throw new Error('not implemented');
},
"public function equals",function(selectionFormat){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.container.ContainerController
joo.classLoader.prepare("package flashx.textLayout.container",
"public class ContainerController implements flashx.textLayout.edit.IInteractionEventHandler,flashx.textLayout.formats.ITextLayoutFormat,flashx.textLayout.container.ISandboxSupport",1,function($$private){;return[
"public function get absoluteStart",function(){
throw new Error('not implemented');
},
"public function get alignmentBaseline",function(){
throw new Error('not implemented');
},
"public function set alignmentBaseline",function(value){
throw new Error('not implemented');
},
"public function get backgroundAlpha",function(){
throw new Error('not implemented');
},
"public function set backgroundAlpha",function(value){
throw new Error('not implemented');
},
"public function get backgroundColor",function(){
throw new Error('not implemented');
},
"public function set backgroundColor",function(value){
throw new Error('not implemented');
},
"public function get baselineShift",function(){
throw new Error('not implemented');
},
"public function set baselineShift",function(value){
throw new Error('not implemented');
},
"public function get blockProgression",function(){
throw new Error('not implemented');
},
"public function set blockProgression",function(value){
throw new Error('not implemented');
},
"public function get breakOpportunity",function(){
throw new Error('not implemented');
},
"public function set breakOpportunity",function(value){
throw new Error('not implemented');
},
"public function get cffHinting",function(){
throw new Error('not implemented');
},
"public function set cffHinting",function(value){
throw new Error('not implemented');
},
"public function get color",function(){
throw new Error('not implemented');
},
"public function set color",function(value){
throw new Error('not implemented');
},
"public function get columnCount",function(){
throw new Error('not implemented');
},
"public function set columnCount",function(value){
throw new Error('not implemented');
},
"public function get columnGap",function(){
throw new Error('not implemented');
},
"public function set columnGap",function(value){
throw new Error('not implemented');
},
"public function get columnState",function(){
throw new Error('not implemented');
},
"public function get columnWidth",function(){
throw new Error('not implemented');
},
"public function set columnWidth",function(value){
throw new Error('not implemented');
},
"public function get compositionHeight",function(){
throw new Error('not implemented');
},
"public function get compositionWidth",function(){
throw new Error('not implemented');
},
"public function get computedFormat",function(){
throw new Error('not implemented');
},
"public function get container",function(){
throw new Error('not implemented');
},
"public static function get containerControllerInitialFormat",function(){
throw new Error('not implemented');
},
"public static function set containerControllerInitialFormat",function(value){
throw new Error('not implemented');
},
"public function get coreStyles",function(){
throw new Error('not implemented');
},
"public function get digitCase",function(){
throw new Error('not implemented');
},
"public function set digitCase",function(value){
throw new Error('not implemented');
},
"public function get digitWidth",function(){
throw new Error('not implemented');
},
"public function set digitWidth",function(value){
throw new Error('not implemented');
},
"public function get direction",function(){
throw new Error('not implemented');
},
"public function set direction",function(value){
throw new Error('not implemented');
},
"public function get dominantBaseline",function(){
throw new Error('not implemented');
},
"public function set dominantBaseline",function(value){
throw new Error('not implemented');
},
"public function get firstBaselineOffset",function(){
throw new Error('not implemented');
},
"public function set firstBaselineOffset",function(value){
throw new Error('not implemented');
},
"public function get flowComposer",function(){
throw new Error('not implemented');
},
"public function get fontFamily",function(){
throw new Error('not implemented');
},
"public function set fontFamily",function(value){
throw new Error('not implemented');
},
"public function get fontLookup",function(){
throw new Error('not implemented');
},
"public function set fontLookup",function(value){
throw new Error('not implemented');
},
"public function get fontSize",function(){
throw new Error('not implemented');
},
"public function set fontSize",function(value){
throw new Error('not implemented');
},
"public function get fontStyle",function(){
throw new Error('not implemented');
},
"public function set fontStyle",function(value){
throw new Error('not implemented');
},
"public function get fontWeight",function(){
throw new Error('not implemented');
},
"public function set fontWeight",function(value){
throw new Error('not implemented');
},
"public function get format",function(){
throw new Error('not implemented');
},
"public function set format",function(value){
throw new Error('not implemented');
},
"public function get horizontalScrollPolicy",function(){
throw new Error('not implemented');
},
"public function set horizontalScrollPolicy",function(value){
throw new Error('not implemented');
},
"public function get horizontalScrollPosition",function(){
throw new Error('not implemented');
},
"public function set horizontalScrollPosition",function(value){
throw new Error('not implemented');
},
"public function get interactionManager",function(){
throw new Error('not implemented');
},
"public function get justificationRule",function(){
throw new Error('not implemented');
},
"public function set justificationRule",function(value){
throw new Error('not implemented');
},
"public function get justificationStyle",function(){
throw new Error('not implemented');
},
"public function set justificationStyle",function(value){
throw new Error('not implemented');
},
"public function get kerning",function(){
throw new Error('not implemented');
},
"public function set kerning",function(value){
throw new Error('not implemented');
},
"public function get leadingModel",function(){
throw new Error('not implemented');
},
"public function set leadingModel",function(value){
throw new Error('not implemented');
},
"public function get ligatureLevel",function(){
throw new Error('not implemented');
},
"public function set ligatureLevel",function(value){
throw new Error('not implemented');
},
"public function get lineBreak",function(){
throw new Error('not implemented');
},
"public function set lineBreak",function(value){
throw new Error('not implemented');
},
"public function get lineHeight",function(){
throw new Error('not implemented');
},
"public function set lineHeight",function(value){
throw new Error('not implemented');
},
"public function get lineThrough",function(){
throw new Error('not implemented');
},
"public function set lineThrough",function(value){
throw new Error('not implemented');
},
"public function get locale",function(){
throw new Error('not implemented');
},
"public function set locale",function(value){
throw new Error('not implemented');
},
"public function get paddingBottom",function(){
throw new Error('not implemented');
},
"public function set paddingBottom",function(value){
throw new Error('not implemented');
},
"public function get paddingLeft",function(){
throw new Error('not implemented');
},
"public function set paddingLeft",function(value){
throw new Error('not implemented');
},
"public function get paddingRight",function(){
throw new Error('not implemented');
},
"public function set paddingRight",function(value){
throw new Error('not implemented');
},
"public function get paddingTop",function(){
throw new Error('not implemented');
},
"public function set paddingTop",function(value){
throw new Error('not implemented');
},
"public function get paragraphEndIndent",function(){
throw new Error('not implemented');
},
"public function set paragraphEndIndent",function(value){
throw new Error('not implemented');
},
"public function get paragraphSpaceAfter",function(){
throw new Error('not implemented');
},
"public function set paragraphSpaceAfter",function(value){
throw new Error('not implemented');
},
"public function get paragraphSpaceBefore",function(){
throw new Error('not implemented');
},
"public function set paragraphSpaceBefore",function(value){
throw new Error('not implemented');
},
"public function get paragraphStartIndent",function(){
throw new Error('not implemented');
},
"public function set paragraphStartIndent",function(value){
throw new Error('not implemented');
},
"public function get renderingMode",function(){
throw new Error('not implemented');
},
"public function set renderingMode",function(value){
throw new Error('not implemented');
},
"public function get rootElement",function(){
throw new Error('not implemented');
},
"public function get tabStops",function(){
throw new Error('not implemented');
},
"public function set tabStops",function(value){
throw new Error('not implemented');
},
"public function get textAlign",function(){
throw new Error('not implemented');
},
"public function set textAlign",function(value){
throw new Error('not implemented');
},
"public function get textAlignLast",function(){
throw new Error('not implemented');
},
"public function set textAlignLast",function(value){
throw new Error('not implemented');
},
"public function get textAlpha",function(){
throw new Error('not implemented');
},
"public function set textAlpha",function(value){
throw new Error('not implemented');
},
"public function get textDecoration",function(){
throw new Error('not implemented');
},
"public function set textDecoration",function(value){
throw new Error('not implemented');
},
"public function get textFlow",function(){
throw new Error('not implemented');
},
"public function get textIndent",function(){
throw new Error('not implemented');
},
"public function set textIndent",function(value){
throw new Error('not implemented');
},
"public function get textJustify",function(){
throw new Error('not implemented');
},
"public function set textJustify",function(value){
throw new Error('not implemented');
},
"public function get textLength",function(){
throw new Error('not implemented');
},
"public function get textRotation",function(){
throw new Error('not implemented');
},
"public function set textRotation",function(value){
throw new Error('not implemented');
},
"public function get trackingLeft",function(){
throw new Error('not implemented');
},
"public function set trackingLeft",function(value){
throw new Error('not implemented');
},
"public function get trackingRight",function(){
throw new Error('not implemented');
},
"public function set trackingRight",function(value){
throw new Error('not implemented');
},
"public function get typographicCase",function(){
throw new Error('not implemented');
},
"public function set typographicCase",function(value){
throw new Error('not implemented');
},
"public function get userStyles",function(){
throw new Error('not implemented');
},
"public function set userStyles",function(value){
throw new Error('not implemented');
},
"public function get verticalAlign",function(){
throw new Error('not implemented');
},
"public function set verticalAlign",function(value){
throw new Error('not implemented');
},
"public function get verticalScrollPolicy",function(){
throw new Error('not implemented');
},
"public function set verticalScrollPolicy",function(value){
throw new Error('not implemented');
},
"public function get verticalScrollPosition",function(){
throw new Error('not implemented');
},
"public function set verticalScrollPosition",function(value){
throw new Error('not implemented');
},
"public function get whiteSpaceCollapse",function(){
throw new Error('not implemented');
},
"public function set whiteSpaceCollapse",function(value){
throw new Error('not implemented');
},
"public function ContainerController",function(container,compositionWidth,compositionHeight){if(arguments.length<3){if(arguments.length<2){compositionWidth=100;}compositionHeight=100;}
throw new Error('not implemented');
},
"public function activateHandler",function(event){
throw new Error('not implemented');
},
"protected function addBackgroundShape",function(shape){
throw new Error('not implemented');
},
"protected function addSelectionContainer",function(selectionContainer){
throw new Error('not implemented');
},
"protected function addTextLine",function(textLine,index){
throw new Error('not implemented');
},
"public function autoScrollIfNecessary",function(mouseX,mouseY){
throw new Error('not implemented');
},
"public function beginMouseCapture",function(){
throw new Error('not implemented');
},
"public function clearStyle",function(styleProp){
throw new Error('not implemented');
},
"protected function createContextMenu",function(){
throw new Error('not implemented');
},
"public function deactivateHandler",function(event){
throw new Error('not implemented');
},
"public function editHandler",function(event){
throw new Error('not implemented');
},
"public function endMouseCapture",function(){
throw new Error('not implemented');
},
"public function focusChangeHandler",function(event){
throw new Error('not implemented');
},
"public function focusInHandler",function(event){
throw new Error('not implemented');
},
"public function focusOutHandler",function(event){
throw new Error('not implemented');
},
"public function getContentBounds",function(){
throw new Error('not implemented');
},
"protected function getFirstTextLineChildIndex",function(){
throw new Error('not implemented');
},
"public function getScrollDelta",function(numLines){
throw new Error('not implemented');
},
"public function getStyle",function(styleProp){
throw new Error('not implemented');
},
"public function imeStartCompositionHandler",function(event){
throw new Error('not implemented');
},
"public function invalidateContents",function(){
throw new Error('not implemented');
},
"public function isDamaged",function(){
throw new Error('not implemented');
},
"public function keyDownHandler",function(event){
throw new Error('not implemented');
},
"public function keyFocusChangeHandler",function(event){
throw new Error('not implemented');
},
"public function keyUpHandler",function(event){
throw new Error('not implemented');
},
"public function menuSelectHandler",function(event){
throw new Error('not implemented');
},
"public function mouseDoubleClickHandler",function(event){
throw new Error('not implemented');
},
"public function mouseDownHandler",function(event){
throw new Error('not implemented');
},
"public function mouseMoveHandler",function(event){
throw new Error('not implemented');
},
"public function mouseMoveSomewhere",function(event){
throw new Error('not implemented');
},
"public function mouseOutHandler",function(event){
throw new Error('not implemented');
},
"public function mouseOverHandler",function(event){
throw new Error('not implemented');
},
"public function mouseUpHandler",function(event){
throw new Error('not implemented');
},
"public function mouseUpSomewhere",function(event){
throw new Error('not implemented');
},
"public function mouseWheelHandler",function(event){
throw new Error('not implemented');
},
"protected function removeSelectionContainer",function(selectionContainer){
throw new Error('not implemented');
},
"protected function removeTextLine",function(textLine){
throw new Error('not implemented');
},
"public function scrollToRange",function(activePosition,anchorPosition){
throw new Error('not implemented');
},
"public function selectRange",function(anchorIndex,activeIndex){
throw new Error('not implemented');
},
"public function setCompositionSize",function(w,h){
throw new Error('not implemented');
},
"public function setStyle",function(styleProp,newValue){
throw new Error('not implemented');
},
"public function textInputHandler",function(event){
throw new Error('not implemented');
},
"protected function updateVisibleRectangle",function(){
throw new Error('not implemented');
},
];},["containerControllerInitialFormat"],["flashx.textLayout.edit.IInteractionEventHandler","flashx.textLayout.formats.ITextLayoutFormat","flashx.textLayout.container.ISandboxSupport","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.container.ISandboxSupport
joo.classLoader.prepare("package flashx.textLayout.container",
"public interface ISandboxSupport",1,function($$private){;return[,,,,
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.container.ScrollPolicy
joo.classLoader.prepare("package flashx.textLayout.container",
"public final class ScrollPolicy",1,function($$private){;return[
"public static const",{AUTO:"auto"},
"public static const",{OFF:"off"},
"public static const",{ON:"on"},
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.textLayout.container.TextContainerManager
joo.classLoader.prepare("package flashx.textLayout.container",
{Event:{name:"flowOperationBegin",type:"flashx.textLayout.events.FlowOperationEvent"}},
{Event:{name:"flowOperationComplete",type:"flashx.textLayout.events.FlowOperationEvent"}},
{Event:{name:"flowOperationEnd",type:"flashx.textLayout.events.FlowOperationEvent"}},
"public class TextContainerManager extends flash.events.EventDispatcher implements flashx.textLayout.compose.ISWFContext,flashx.textLayout.edit.IInteractionEventHandler,flashx.textLayout.container.ISandboxSupport",2,function($$private){;return[
"public function get compositionHeight",function(){
throw new Error('not implemented');
},
"public function set compositionHeight",function(value){
throw new Error('not implemented');
},
"public function get compositionWidth",function(){
throw new Error('not implemented');
},
"public function set compositionWidth",function(value){
throw new Error('not implemented');
},
"public function get configuration",function(){
throw new Error('not implemented');
},
"public function get container",function(){
throw new Error('not implemented');
},
"public static function get defaultConfiguration",function(){
throw new Error('not implemented');
},
"public function get editingMode",function(){
throw new Error('not implemented');
},
"public function set editingMode",function(value){
throw new Error('not implemented');
},
"public function get horizontalScrollPolicy",function(){
throw new Error('not implemented');
},
"public function set horizontalScrollPolicy",function(value){
throw new Error('not implemented');
},
"public function get horizontalScrollPosition",function(){
throw new Error('not implemented');
},
"public function set horizontalScrollPosition",function(value){
throw new Error('not implemented');
},
"public function get hostFormat",function(){
throw new Error('not implemented');
},
"public function set hostFormat",function(value){
throw new Error('not implemented');
},
"public function get numLines",function(){
throw new Error('not implemented');
},
"public function get swfContext",function(){
throw new Error('not implemented');
},
"public function set swfContext",function(value){
throw new Error('not implemented');
},
"public function get verticalScrollPolicy",function(){
throw new Error('not implemented');
},
"public function set verticalScrollPolicy",function(value){
throw new Error('not implemented');
},
"public function get verticalScrollPosition",function(){
throw new Error('not implemented');
},
"public function set verticalScrollPosition",function(value){
throw new Error('not implemented');
},
"public function TextContainerManager",function(container,configuration){flash.events.EventDispatcher.call(this);if(arguments.length<2){configuration=null;}
throw new Error('not implemented');
},
"public function activateHandler",function(event){
throw new Error('not implemented');
},
"public function beginInteraction",function(){
throw new Error('not implemented');
},
"public function beginMouseCapture",function(){
throw new Error('not implemented');
},
"public function compose",function(){
throw new Error('not implemented');
},
"protected function createContextMenu",function(){
throw new Error('not implemented');
},
"protected function createEditManager",function(undoManager){
throw new Error('not implemented');
},
"protected function createSelectionManager",function(){
throw new Error('not implemented');
},
"public function deactivateHandler",function(event){
throw new Error('not implemented');
},
"public function drawBackgroundAndSetScrollRect",function(scrollX,scrollY){
throw new Error('not implemented');
},
"public function editHandler",function(event){
throw new Error('not implemented');
},
"public function endInteraction",function(){
throw new Error('not implemented');
},
"public function endMouseCapture",function(){
throw new Error('not implemented');
},
"public function focusChangeHandler",function(event){
throw new Error('not implemented');
},
"public function focusInHandler",function(event){
throw new Error('not implemented');
},
"public function focusOutHandler",function(event){
throw new Error('not implemented');
},
"public function getContentBounds",function(){
throw new Error('not implemented');
},
"protected function getFocusedSelectionFormat",function(){
throw new Error('not implemented');
},
"protected function getInactiveSelectionFormat",function(){
throw new Error('not implemented');
},
"public function getLineAt",function(index){
throw new Error('not implemented');
},
"public function getScrollDelta",function(numLines){
throw new Error('not implemented');
},
"public function getText",function(separator){if(arguments.length<1){separator="";}
throw new Error('not implemented');
},
"public function getTextFlow",function(){
throw new Error('not implemented');
},
"protected function getUndoManager",function(){
throw new Error('not implemented');
},
"protected function getUnfocusedSelectionFormat",function(){
throw new Error('not implemented');
},
"public function imeStartCompositionHandler",function(event){
throw new Error('not implemented');
},
"public function invalidateSelectionFormats",function(){
throw new Error('not implemented');
},
"public function invalidateUndoManager",function(){
throw new Error('not implemented');
},
"public function isDamaged",function(){
throw new Error('not implemented');
},
"public function keyDownHandler",function(event){
throw new Error('not implemented');
},
"public function keyFocusChangeHandler",function(event){
throw new Error('not implemented');
},
"public function keyUpHandler",function(event){
throw new Error('not implemented');
},
"public function menuSelectHandler",function(event){
throw new Error('not implemented');
},
"public function mouseDoubleClickHandler",function(event){
throw new Error('not implemented');
},
"public function mouseDownHandler",function(event){
throw new Error('not implemented');
},
"public function mouseMoveHandler",function(event){
throw new Error('not implemented');
},
"public function mouseMoveSomewhere",function(e){
throw new Error('not implemented');
},
"public function mouseOutHandler",function(event){
throw new Error('not implemented');
},
"public function mouseOverHandler",function(event){
throw new Error('not implemented');
},
"public function mouseUpHandler",function(event){
throw new Error('not implemented');
},
"public function mouseUpSomewhere",function(e){
throw new Error('not implemented');
},
"public function mouseWheelHandler",function(event){
throw new Error('not implemented');
},
"public function scrollToRange",function(activePosition,anchorPosition){
throw new Error('not implemented');
},
"public function setText",function(text){
throw new Error('not implemented');
},
"public function setTextFlow",function(textFlow){
throw new Error('not implemented');
},
"public function textInputHandler",function(event){
throw new Error('not implemented');
},
"public function updateContainer",function(){
throw new Error('not implemented');
},
"public function callInContext",function(fn,thisArg,argArray,returns){if(arguments.length<4){returns=true;}
throw new Error('not implemented');
},
];},["defaultConfiguration"],["flash.events.EventDispatcher","flashx.textLayout.compose.ISWFContext","flashx.textLayout.edit.IInteractionEventHandler","flashx.textLayout.container.ISandboxSupport","Error"], "0.8.0", "0.9.6"
);
// class flashx.textLayout.container.ColumnState
joo.classLoader.prepare("package flashx.textLayout.container",
"public class ColumnState",1,function($$private){;return[
"public function get columnCount",function(){
throw new Error('not implemented');
},
"public function get columnGap",function(){
throw new Error('not implemented');
},
"public function get columnWidth",function(){
throw new Error('not implemented');
},
"public function ColumnState",function(blockProgression,columnDirection,controller,compositionWidth,compositionHeight){
throw new Error('not implemented');
},
"public function getColumnAt",function(index){
throw new Error('not implemented');
},
];},[],["Error"], "0.8.0", "0.9.6"
);
// class flashx.undo.IOperation
joo.classLoader.prepare("package flashx.undo",
"public interface IOperation",1,function($$private){;return[,,
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.undo.IUndoManager
joo.classLoader.prepare("package flashx.undo",
"public interface IUndoManager",1,function($$private){;return[,,,,,,,,,,,,,,
];},[],[], "0.8.0", "0.9.6"
);
// class flashx.undo.UndoManager
joo.classLoader.prepare("package flashx.undo",
"public class UndoManager implements flashx.undo.IUndoManager",1,function($$private){;return[
"public function get undoAndRedoItemLimit",function(){
throw new Error('not implemented');
},
"public function set undoAndRedoItemLimit",function(value){
throw new Error('not implemented');
},
"public function UndoManager",function(){
throw new Error('not implemented');
},
"public function canRedo",function(){
throw new Error('not implemented');
},
"public function canUndo",function(){
throw new Error('not implemented');
},
"public function clearAll",function(){
throw new Error('not implemented');
},
"public function clearRedo",function(){
throw new Error('not implemented');
},
"public function peekRedo",function(){
throw new Error('not implemented');
},
"public function peekUndo",function(){
throw new Error('not implemented');
},
"public function popRedo",function(){
throw new Error('not implemented');
},
"public function popUndo",function(){
throw new Error('not implemented');
},
"public function pushRedo",function(operation){
throw new Error('not implemented');
},
"public function pushUndo",function(operation){
throw new Error('not implemented');
},
"public function redo",function(){
throw new Error('not implemented');
},
"public function undo",function(){
throw new Error('not implemented');
},
];},[],["flashx.undo.IUndoManager","Error"], "0.8.0", "0.9.6"
);
