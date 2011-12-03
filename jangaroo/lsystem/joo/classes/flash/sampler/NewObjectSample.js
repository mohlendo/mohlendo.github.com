joo.classLoader.prepare("package flash.sampler",/* {*/


/**
 * The NewObjectSample class represents objects that are created within a <code>getSamples()</code> stream. For Flash Player debugger version only.
 * <p><a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/sampler/NewObjectSample.html#includeExamplesSummary">View the examples</a></p>
 * @see package#getSamples()
 *
 */
"public final class NewObjectSample extends flash.sampler.Sample",2,function($$private){;return[ 
  /**
   * The NewObjectSample object if it still exists. If the object has been garbage collected, this property is undefined and a corresponding DeleteObjectSample exists. For Flash Player debugger version only.
   * @see DeleteObjectSample
   *
   */
  "public function get object",function object$get()/*:**/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The NewObjectSample object size. If the object has been garbagecollected, this property is undefined and a corresponding DeleteObjectSample exists. For FlashPlayer debugger version only.
   * @see DeleteObjectSample
   *
   */
  "public function get size",function size$get()/*:Number*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The Class object corresponding to the object created within a <code>getSamples()</code> stream. For Flash Player debugger version only.
   */
  "public native function get type"/*():Class*/,
];},[],["flash.sampler.Sample","Error"], "0.8.0", "0.9.6"
);