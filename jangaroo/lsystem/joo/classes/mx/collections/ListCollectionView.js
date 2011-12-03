joo.classLoader.prepare(////////////////////////////////////////////////////////////////////////////////
//
//  ADOBE SYSTEMS INCORPORATED
//  Copyright 2005-2007 Adobe Systems Incorporated
//  All Rights Reserved.
//
//  NOTICE: Adobe permits you to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
//
////////////////////////////////////////////////////////////////////////////////

"package mx.collections",/*
{

import flash.events.Event;*/

/**
 *  Dispatched when the ICollectionView has been updated in some way.
 *
 *  @eventType mx.events.CollectionEvent.COLLECTION_CHANGE
 */
{Event:{name:"collectionChange", type:"mx.events.CollectionEvent"}},

/**
 * The ListCollectionView class adds the properties and methods of the
 * <code>ICollectionView</code> interface to an object that conforms to the
 * <code>IList</code> interface. As a result, you can pass an object of this class
 * to anything that requires an <code>IList</code> or <code>ICollectionView</code>.
 *
 * <p>This class also lets you use [ ] array notation
 * to access the <code>getItemAt()</code> and <code>setItemAt()</code> methods.
 * If you use code such as <code>myListCollectionView[index]</code>
 * Flex calls the <code>myListCollectionView</code> object's
 * <code>getItemAt()</code> or <code>setItemAt()</code> method.</p>
 * 
 * @mxml
 *
 *  <p>The <code>&lt;mx:ListCollectionView&gt;</code> has the following attributes,
 *  which all of its subclasses inherit:</p>
 *
 *  <pre>
 *  &lt;mx:ListCollectionView
 *  <b>Properties</b>
 *  filterFunction="null"
 *  list="null"
 *  sort="null"
 *  <b>Events</b>
 *  collectionChange="<i>No default</i>"
 *  /&gt;
 *  </pre>
 */
"public class ListCollectionView extends Array"+
"       implements mx.collections.IList",2,function($$private){;return[
/*
    ////////////////////////////////////////////////////////////////////////////////
//
//  ADOBE SYSTEMS INCORPORATED
//  Copyright 2005-2007 Adobe Systems Incorporated
//  All Rights Reserved.
//
//  NOTICE: Adobe permits you to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
//
////////////////////////////////////////////////////////////////////////////////

import mx.core.mx_internal;*/

/**
 *  @private
 *  Version string for this class.
 */
"mx_internal static const",{ VERSION/*:String*/ : "3.3.0.4852"},function(){
;},

  "public function addItem",function addItem(item/*:Object*/)/*:void*/ {
    throw new Error("not implemented!");
  },

  "public function addItemAt",function addItemAt(item/*:Object*/, index/*:int*/)/*:void*/ {
    throw new Error("not implemented!");
  },

  "public function getItemAt",function getItemAt(index/*:int*/, prefetch/*:int = 0*/)/*:Object*/ {if(arguments.length<2){prefetch = 0;}
    throw new Error("not implemented!");
  },

  "public function getItemIndex",function getItemIndex(item/*:Object*/)/*:int*/ {
    throw new Error("not implemented!");
  },

  "public function itemUpdated",function itemUpdated(item/*:Object*/, property/*:Object = null*/, oldValue/*:Object = null*/, newValue/*:Object = null*/)/*:void*/ {if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){property = null;}oldValue = null;}newValue = null;}
    throw new Error("not implemented!");
  },

  "public function removeAll",function removeAll()/*:void*/ {
    throw new Error("not implemented!");
  },

  "public function removeItemAt",function removeItemAt(index/*:int*/)/*:Object*/ {
    throw new Error("not implemented!");
  },

  "public function setItemAt",function setItemAt(item/*:Object*/, index/*:int*/)/*:Object*/ {
    throw new Error("not implemented!");
  },

  "public function toArray",function toArray()/*:Array*/ {
    throw new Error("not implemented!");
  },

  "public function addEventListener",function addEventListener(type/*:String*/, listener/*:Function*/, useCapture/*:Boolean = false*/, priority/*:int = 0*/, useWeakReference/*:Boolean = false*/)/*:void*/ {if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){useCapture = false;}priority = 0;}useWeakReference = false;}
    throw new Error("not implemented!");
  },

  "public function dispatchEvent",function dispatchEvent(event/*:Event*/)/*:Boolean*/ {
    throw new Error("not implemented!");
  },

  "public function hasEventListener",function hasEventListener(type/*:String*/)/*:Boolean*/ {
    throw new Error("not implemented!");
  },

  "public function removeEventListener",function removeEventListener(type/*:String*/, listener/*:Function*/, useCapture/*:Boolean = false*/)/*:void*/ {if(arguments.length<3){useCapture = false;}
    throw new Error("not implemented!");
  },

  "public function willTrigger",function willTrigger(type/*:String*/)/*:Boolean*/ {
    throw new Error("not implemented!");
  },
];},[],["Array","mx.collections.IList","Error"], "0.8.0", "0.9.6"
);