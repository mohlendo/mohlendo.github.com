joo.classLoader.prepare("package flash.net",/* {*/


/**
 * The NetGroupReplicationStrategy class is an enumeration of constant values used in setting the <code>replicationStrategy</code> property of the <code>NetGroup</code> class.
 * @see NetGroup#addWantObjects()
 * @see NetGroup#replicationStrategy
 *
 */
"public final class NetGroupReplicationStrategy",1,function($$private){;return[ 
  /**
   * Specifies that when fetching objects from a neighbor to satisfy a want, the objects with the lowest index numbers are requested first.
   * @see NetGroup#addWantObjects()
   *
   */
  "public static const",{ LOWEST_FIRST/*:String*/ : "lowestFirst"},
  /**
   * Specifies that when fetching objects from a neighbor to satisfy a want, the objects with the fewest replicas among all the neighbors are requested first.
   * @see NetGroup#addWantObjects()
   *
   */
  "public static const",{ RAREST_FIRST/*:String*/ : "rarestFirst"},
];},[],[], "0.8.0", "0.9.6"
);