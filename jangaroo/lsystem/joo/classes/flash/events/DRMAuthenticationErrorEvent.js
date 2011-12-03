joo.classLoader.prepare("package flash.events",/* {*/


/**
 * The DRMManager dispatches a DRMAuthenticationErrorEvent object when a call to the <code>authenticate()</code> method of the DRMManager object fails.
 */
"public class DRMAuthenticationErrorEvent extends flash.events.ErrorEvent",4,function($$private){;return[ 
  /**
   * The content domain of the media rights server. Here, domain is not a network or Internet domain name.
   */
  "public function get domain",function domain$get()/*:String*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set domain",function domain$set(value/*:String*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The URL of the media rights server that rejected the authentication attempt.
   */
  "public function get serverURL",function serverURL$get()/*:String*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set serverURL",function serverURL$set(value/*:String*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * A more detailed error code.
   */
  "public function get subErrorID",function subErrorID$get()/*:int*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set subErrorID",function subErrorID$set(value/*:int*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Creates a new instance of a DRMAuthenticationErrorEvent object.
   * @param type the event type string
   * @param bubbles whether the event bubbles up the display list
   * @param cancelable whether the event can be canceled
   * @param inDetail The error description
   * @param inErrorID The ID of the general type of error
   * @param inSubErrorID The ID indicating the specific error within its type
   * @param inServerURL the URL of the logged-in server
   * @param inDomain the authenticated domain on the logged-in server
   *
   */
  "public function DRMAuthenticationErrorEvent",function DRMAuthenticationErrorEvent$(type/*:String*/, bubbles/*:Boolean = false*/, cancelable/*:Boolean = false*/, inDetail/*:String = ""*/, inErrorID/*:int = 0*/, inSubErrorID/*:int = 0*/, inServerURL/*:String = null*/, inDomain/*:String = null*/) {flash.events.ErrorEvent.call(this);if(arguments.length<8){if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles = false;}cancelable = false;}inDetail = "";}inErrorID = 0;}inSubErrorID = 0;}inServerURL = null;}inDomain = null;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Creates a copy of the ErrorEvent object and sets the value of each property to match that of the original.
   * @return A new ErrorEvent object with property values that match those of the original.
   *
   */
  "override public function clone",function clone()/*:Event*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The string constant to use for the authentication error event in the type parameter when adding and removing event listeners.
   */
  "public static const",{ AUTHENTICATION_ERROR/*:String*/ : "authenticationError"},
];},[],["flash.events.ErrorEvent","Error"], "0.8.0", "0.9.6"
);