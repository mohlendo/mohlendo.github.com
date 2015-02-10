joo.classLoader.prepare(/*
 * Copyright 2009 CoreMedia AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0 
 *
 * Unless required by applicable law or agreed to in writing, 
 * software distributed under the License is distributed on an "AS
 * IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either 
 * express or implied. See the License for the specific language 
 * governing permissions and limitations under the License.
 */

// JangarooScript runtime support. Author: Frank Wienberg

"package joo",/* {*/

"public class JooClassDeclaration extends joo.NativeClassDeclaration",2,function($$private){var as=joo.as;return[function(){joo.classLoader.init(joo.MemberDeclaration,joo.JavaScriptObject,Object);}, 

  "public static const",{ STATE_EVENT_AFTER_INIT_MEMBERS/*:String*/ : 'afterInitMembers'},
  "private static var",{ STATE_BY_EVENT/*:Object*/:null},function(){
  $$private.STATE_BY_EVENT = {
    'afterInitMembers': joo.NativeClassDeclaration.STATE_INITIALIZED
  };},

  "internal var",{
          package_/* : Object*/:null,
          type/* : String*/ :function(){return( joo.MemberDeclaration.MEMBER_TYPE_CLASS);},
          namespace_/* : String*/ :function(){return( joo.MemberDeclaration.NAMESPACE_INTERNAL);},
          className/* : String*/:null,
          native_/* : Boolean*/ : false,
          extends_/* : String*/ : "Object",
          level/* : int*/ : -1,
          privateStatics/* : Object*/:null,
          memberDeclarations/* : **/:undefined /* Function, then Array */,
          memberDeclarationsByQualifiedName/* : Object*/:null,
          staticInitializers/* : Array*/:null/*<MemberDeclaration|Function>*/,
          publicStaticMethodNames/* : Array*/:null,
          implementingClasses/*: Array*/:null/*Class*/,
          dependencies/* : Array*/:null,
          stateListeners/*: Object*/:null},
  /**
   * The metadata (annotations) associated with this class.
   */
  "public var",{ metadata/* : Object*/:null},

  "private static const",{ DECLARATION_PATTERN_CLASS/*:RegExp*/ :
    /^\s*((public|internal|final|dynamic)\s+)*class\s+([A-Za-z][a-zA-Z$_0-9]*)(\s+extends\s+([a-zA-Z$_0-9.]+))?(\s+implements\s+([a-zA-Z$_0-9.,\s]+))?\s*$/},
  "private static const",{ DECLARATION_PATTERN_INTERFACE/*:RegExp*/ :
    /^\s*((public|internal)\s+)?interface\s+([A-Za-z][a-zA-Z$_0-9]*)(\s+extends\s+([a-zA-Z$_0-9.,\s]+))?\s*$/},
  "private static const",{ DECLARATION_PATTERN_NAMESPACE/*:RegExp*/ :
    /^\s*((public|internal)\s+)?namespace\s+([A-Za-z][a-zA-Z$_0-9]*)\s*$/},

  "public function JooClassDeclaration",function JooClassDeclaration$(packageDef/*:String*/, metadata/*:Object*/, classDef/*:String*/, inheritanceLevel/*:int*/, memberDeclarations/*:Function*/, publicStaticMethodNames/*:Array*/, dependencies/*:Array*/) {joo.NativeClassDeclaration.call(this);this.namespace_=this.namespace_();this.type=this.type();
    this.stateListeners = {};
    this.metadata = metadata;
    var packageName/* : String*/ = packageDef.split(/\s+/)[1] || "";
    this.package_ = joo.getOrCreatePackage(packageName);
    var classMatch/* : Array*/ = classDef.match($$private.DECLARATION_PATTERN_CLASS);
    var interfaces/* : String*/;
    if (classMatch) {
      if (classMatch[5]) {
        this.extends_ = classMatch[5];
      }
      interfaces = classMatch[7];
    } else {
      classMatch = classDef.match($$private.DECLARATION_PATTERN_INTERFACE);
      if (classMatch) {
        this.type = joo.MemberDeclaration.MEMBER_TYPE_INTERFACE;
        interfaces = classMatch[5];
      } else {
        classMatch = classDef.match($$private.DECLARATION_PATTERN_NAMESPACE);
        if (classMatch) {
          this.type = joo.MemberDeclaration.MEMBER_TYPE_NAMESPACE;
        }
      }
    }
    if (!classMatch) {
      throw new Error("SyntaxError: \""+classDef+"\" does not match.");
    }
    this.level = inheritanceLevel;
    this.namespace_ = classMatch[2];
    this.className    = classMatch[3];
    var fullClassName/* : String*/ = this.className;
    if (packageName) {
      fullClassName = packageName+"."+this.className;
    }
    this.interfaces = interfaces ? interfaces.split(/\s*,\s*/) : [];
    this.memberDeclarations = memberDeclarations;
    this.publicStaticMethodNames = publicStaticMethodNames;
    this.dependencies = dependencies;
    this.privateStatics = {};
    this.publicConstructor = joo.getQualifiedObject(fullClassName);
    if (this.publicConstructor) {
      this.native_ = true;
    } else {
      this.package_[this.className] = this.publicConstructor = $$private.createInitializingConstructor(this);
      for (var i/*:int*/ = 0; i < publicStaticMethodNames.length; i++) {
        this.createInitializingStaticMethod(publicStaticMethodNames[i]);
      }
    }
    this.create(fullClassName, this.publicConstructor);
    this._processMetadata(); // for early annotation processing like adding dependencies
  },

  "public function addStateListener",function addStateListener(state/*:String*/, listener/*:Function*/)/*:void*/ {
    if (this.state >= $$private.STATE_BY_EVENT[state]) {
      // when already past this state, call back immediately:
      listener(this);
    } else {
      var stateListeners/*:Array*/ = this.stateListeners[state];
      if (!stateListeners) {
        this.stateListeners[state] = stateListeners = [];
      }
      stateListeners.push(listener);
    }
  },

  "public function removeStateListener",function removeStateListener(state/*:String*/, listener/*:Function*/)/*:void*/ {
    var stateListeners/*:Array*/ = this.stateListeners[state];
    if (stateListeners) {
      var pos/*:int*/ = stateListeners.indexOf(listener);
      if (pos !== -1) {
        stateListeners.splice(pos, 1);
      }
    }
  },

  "public function isClass",function isClass()/* : Boolean*/ {
    return this.type === joo.MemberDeclaration.MEMBER_TYPE_CLASS;
  },

  "public function isInterface",function isInterface()/* : Boolean*/ {
    return this.type === joo.MemberDeclaration.MEMBER_TYPE_INTERFACE;
  },

  "internal function addToInterfaces",function addToInterfaces(clazz/*:Function*/)/*:void*/ {
    var scd/*:JooClassDeclaration*/ =as( this.superClassDeclaration,  joo.JooClassDeclaration);
    if (scd) {
      scd.addToInterfaces(clazz);
    }
    for (var i/*:int*/ = 0; i < this.interfaces.length; i++) {/*
      joo.JooClassDeclaration*/(this.interfaces[i]).addImplementingClass(clazz);
    }
  },

  "internal function addImplementingClass",function addImplementingClass(clazz/*:Function*/)/*:void*/ {
    //trace("#### adding " + clazz + " to interface " + fullClassName + ":");
    var implementingClasses/*:Array*/ = [];
    //trace("####   before: " + this.implementingClasses.join(", "));
    for (var i/*:int*/ = 0; i < this.implementingClasses.length; i++) {
      var implementingClass/*:Function*/ = this.implementingClasses[i];
      // do not add new clazz if it or a superclass is already in the set:
      if (clazz === implementingClass || clazz.prototype instanceof implementingClass) {
        //trace("####   " + implementingClass + " already present, nothing changed.");
        return; // class or superclass already added!
      }
      // remove all subclasses from the set (keep only non-subclasses):
      if (!(implementingClass.prototype instanceof clazz)) {
        implementingClasses.push(implementingClass);
      }
    }
    implementingClasses.push(clazz);
    this.implementingClasses = implementingClasses;
    //trace("####   after: " + this.implementingClasses.join(", "));
    this.addToInterfaces(clazz);
  },

  "override public function isInstance",function isInstance(obj/*:Object*/)/*:Boolean*/ {
    return this.Public ? this.isInterface() ? this.implementingClasses.some(function joo$JooClassDeclaration$172_62(implementingClass/*:Function*/)/*:Boolean*/ {
      return obj instanceof implementingClass;
    }) : obj instanceof this.Public // cannot invoke super, since BootstrapClassLoader does not support super calls!
    : false; // class not even completed, cannot have instances!
  },

  "public function isNamespace",function isNamespace()/* : Boolean*/ {
    return this.type === joo.MemberDeclaration.MEMBER_TYPE_NAMESPACE;
  },

  "public function isNative",function isNative()/* : Boolean*/ {
    return this.native_;
  },

  "internal override function doComplete",function doComplete()/* : void*/ {
    this.superClassDeclaration = joo.classLoader.getRequiredClassDeclaration(this.extends_);
    this.superClassDeclaration.complete();
    var proto/*:Object*/ = this.native_ ? this.publicConstructor.prototype : new (this.superClassDeclaration.Public)();
    this.Public = joo.NativeClassDeclaration.createEmptyConstructor(proto);
  },

  "internal function initMembers",function initMembers()/* : void*/ {
    this.staticInitializers = [];
    var memberDeclarations/*:Array*/ = this.memberDeclarations(this.privateStatics);
    this.memberDeclarations = [];
    this.memberDeclarationsByQualifiedName = {};
    this.constructor_ = this.isNative() ? this.publicConstructor : null;
    var metadata/*:Object*/ = {};
    for (var i/*:int*/ = 0; i < memberDeclarations.length; ++i) {
      var item/*:**/ = memberDeclarations[i];
      switch (typeof item) {
        case "function":
          this.staticInitializers.push(item);
          break;
        case "string":
          var memberDeclaration/*:MemberDeclaration*/ = joo.MemberDeclaration.create(item);
          if (memberDeclaration) {
            memberDeclaration.metadata = metadata;
            metadata = {};
            if (!memberDeclaration.isNative()) {
              if (++i >= memberDeclarations.length) {
                throw new Error(this + ": Member expected after modifiers '" + item + "'.");
              }
              var member/*:**/ = memberDeclarations[i];
            }
            switch (memberDeclaration.memberType) {
              case joo.MemberDeclaration.MEMBER_TYPE_FUNCTION:
                this.initMethod(memberDeclaration,/* Function*/(member));
                break;
              case joo.MemberDeclaration.MEMBER_TYPE_CLASS:
                //noinspection UnnecessaryLocalVariableJS
                var helperInheritanceLevel/*:int*/ = member;
                var helperMemberDeclarations/*:Function*/ = memberDeclarations[++i];
                var helperStatics/*:Array*/ = memberDeclarations[++i];
                var secondaryClass/*:NativeClassDeclaration*/ = joo.classLoader.prepare("package " + this.fullClassName, item,
                  helperInheritanceLevel, helperMemberDeclarations,
                  helperStatics, [], joo.runtimeApiVersion, joo.compilerVersion).complete();
                memberDeclaration._static = true;
                memberDeclaration.initSlot(this.level);
                this._storeMember(memberDeclaration, secondaryClass.publicConstructor);
                break;
              default:
                for (var memberName/*:String*/ in member) {
                  this._storeMember(this._createMemberDeclaration(memberDeclaration, {memberName: memberName}), member[memberName]);
                }
            }
          }
          break;
        case "object":
          joo.SystemClassLoader.addToMetadata(metadata, item);
      }
    }
    if (!this.isInterface() && !this.native_) {
      if (!this.superClassDeclaration.constructor_) {
        throw new Error("Class " + this.fullClassName + " extends " + this.superClassDeclaration.fullClassName + " whose constructor is not defined!");
      }
      // only add "super$..." for backwards compatibility, and never if we are a JavaScriptObject:
      if (!(this.Public.prototype instanceof joo.JavaScriptObject)) {
        this.Public.prototype["super$" + this.level] = this.superClassDeclaration.constructor_;
      }
      if (!this.constructor_) {
        // no explicit constructor found
        // generate constructor invoking super() and initialize it from the "collecting" constructor:
        this._setConstructor($$private.createSuperConstructor(this));
      }
    }
  },

  //noinspection JSFieldCanBeLocalInspection
  "private static var",{ jooClasstoString/*:Function*/:null},function(){
  $$private.jooClasstoString = function joo$JooClassDeclaration$262_22()/*:String*/ {
    return "[class " + this.$class.className + "]";
  };},

  "internal function _setConstructor",function _setConstructor(constructor_/*:Function*/)/*:void*/ {
    // replay all non-private static members collected so far for new constructor_ function:
    for (var i/*:int*/ = 0; i < this.memberDeclarations.length; i++) {
      var memberDeclaration/*:MemberDeclaration*/ = this.memberDeclarations[i];
      if (memberDeclaration.isStatic() && !memberDeclaration.isPrivate()) {
        memberDeclaration.storeMember(constructor_);
      }
    }
    constructor_['$class'] = this;
    if (this.superClassDeclaration) {
      constructor_['superclass'] = this.superClassDeclaration.Public.prototype; // Ext Core compatibility!
    }
    constructor_.prototype = this.Public.prototype;
    // do not overwrite 'constructor' explicitly if this class is marked as a simple JavaScript object by inheriting from joo.JavaScriptObject!
    if (!(this.Public.prototype instanceof joo.JavaScriptObject)) {
      this.Public.prototype['constructor'] = constructor_;
    }
    constructor_.toString = $$private.jooClasstoString;
    // replace initializing constructor by the real one:
    this.package_[this.className] = this.constructor_ = constructor_;
  },

  "private static function createSuperConstructor",function createSuperConstructor(classDeclaration/*:JooClassDeclaration*/)/*:Function*/ {
    return function generatedConstructor$()/*:void*/ {
      classDeclaration.superClassDeclaration.constructor_.call(this);
    };
  },

  "internal function initMethod",function initMethod(memberDeclaration/* : MemberDeclaration*/, member/* : Function*/)/* : void*/ {
    if (memberDeclaration.memberName == this.className && !memberDeclaration.isStatic()) {
      if (memberDeclaration.getterOrSetter) {
        throw new Error(this+": Class name cannot be used for getter or setter: "+memberDeclaration);
      }
      if (!this.native_ && !memberDeclaration.isNative()) {
        this._setConstructor(member);
      }
    } else {
      memberDeclaration.initSlot(this.level);
      if (memberDeclaration.isNative()) {
        member = memberDeclaration.getNativeMember(this.publicConstructor);
      }
      if (memberDeclaration.isMethod()) {
        if (this.extends_!="Object") {
          var superMethod/* : Function*/ = memberDeclaration.retrieveMember(this.superClassDeclaration.Public.prototype);
        }
        var overrides/* : Boolean*/ = ! !superMethod
          && superMethod!==member
          && superMethod!==Object['prototype'][memberDeclaration.memberName];
        if (overrides !== memberDeclaration.isOverride()) {
          var msg/* : String*/ = overrides
                  ? "Method overrides without 'override' modifier"
                  : "Method with 'override' modifier does not override";
          throw new Error(this+": "+msg+": "+memberDeclaration);
        }
        if (overrides) {
          // found overriding: store super class' method as private member:
          this._storeMember(this._createMemberDeclaration(memberDeclaration, {_namespace: joo.MemberDeclaration.NAMESPACE_PRIVATE}), superMethod);
        }
      }
      this._storeMember(memberDeclaration, member);
    }
  },

  "internal function _createMemberDeclaration",function _createMemberDeclaration(memberDeclaration/* : MemberDeclaration*/, changedProperties/* : Object*/)/* : MemberDeclaration*/ {
    var newMemberDeclaration/* : MemberDeclaration*/ = memberDeclaration.clone(changedProperties);
    newMemberDeclaration.initSlot(this.level);
    return newMemberDeclaration;
  },

  "internal function _storeMember",function _storeMember(memberDeclaration/* : MemberDeclaration*/, value/* : Object*/)/* : void*/ {
    this.memberDeclarations.push(memberDeclaration);
    this.memberDeclarationsByQualifiedName[memberDeclaration.getQualifiedName()] = memberDeclaration;
    memberDeclaration.value = value;
    var _static/* : Boolean*/ = memberDeclaration.isStatic();
    var _private/* : Boolean*/ = memberDeclaration.isPrivate();

    if (_static && memberDeclaration.hasInitializer()) {
      this.staticInitializers.push(memberDeclaration);
    }
    this._processMetadata(memberDeclaration);
    var target/* : Object*/ = _static ? _private ? this.privateStatics : this.constructor_ : this.Public.prototype;

    if (target) {
      memberDeclaration.storeMember(target);
    }
    // if constructor_ is not yet set, static non-private members will be added later by _setConstructor().
  },

  "internal function _processMetadata",function _processMetadata(memberDeclaration/* : MemberDeclaration = null*/)/*:void*/ {if(arguments.length<1){memberDeclaration = null;}
    var metaPackage/*:**/ = joo.getQualifiedObject("joo.meta");
    if (metaPackage) {
      var metadata/*:Object*/ = memberDeclaration ? memberDeclaration.metadata : this.metadata;
      if (metadata) {
        for (var metaFunctionName/*:String*/ in metadata) {
          if (metaFunctionName in metaPackage) {
            metaPackage[metaFunctionName](this, memberDeclaration, metadata[metaFunctionName]);
          }
        }
      }
    }
  },

  "internal override function doInit",function doInit()/* : void*/ {
    this.superClassDeclaration.init();
    for (var j/*:int*/ = 0; j < this.interfaces.length; j++) {
      this.interfaces[j] = joo.classLoader.getRequiredClassDeclaration(this.interfaces[j]).init();
    }
    this.initMembers();
    if (this.isInterface()) {
      this.implementingClasses = [];
    } else {
      this.addToInterfaces(this.constructor_);
    }
    this.fireStateEvent(joo.JooClassDeclaration.STATE_EVENT_AFTER_INIT_MEMBERS);
    for (var i/*:int*/ =0; i<this.staticInitializers.length; ++i) {
      var staticInitializer/* : **/ = this.staticInitializers[i];
      if (typeof staticInitializer=="function") {
        // static statements
        staticInitializer();
      } else {
        // static variable initializer expression
        var target/* : Object*/ = staticInitializer.isPrivate() ? this.privateStatics : this.constructor_;
        target[staticInitializer.slot] = target[staticInitializer.slot]();
      }
    }
  },

  "internal function fireStateEvent",function fireStateEvent(event/*:String*/)/*:void*/ {
    var stateListeners/*:Array*/ = this.stateListeners[event];
    if (stateListeners) {
      for (var i/*:int*/ = 0; i < stateListeners.length; i++) {
        stateListeners[i](this);
      }
      delete this.stateListeners[event];
    }
  },

  "public function getMemberDeclaration",function getMemberDeclaration(namespace_/* : String*/, memberName/* : String*/)/* : MemberDeclaration*/ {
    var memberDeclaration/*:MemberDeclaration*/ = this.memberDeclarationsByQualifiedName[namespace_ + "::" + memberName];
    return !memberDeclaration && this.superClassDeclaration && this.superClassDeclaration["getMemberDeclaration"]
      ?/* joo.JooClassDeclaration*/(this.superClassDeclaration).getMemberDeclaration(namespace_, memberName)
      : memberDeclaration;

  },

  "public function getDependencies",function getDependencies()/* : Array*/ {
    return this.dependencies;
  },

  "private static function createInitializingConstructor",function createInitializingConstructor(classDeclaration/* : JooClassDeclaration*/)/* : Function*/ {
    return function joo$JooClassDeclaration$416_12()/* : Object*/ {
      classDeclaration.init();
      // create an uninitialized Object with the correct prototype chain:
      var instance/*:Object*/ = new classDeclaration.Public();
      // now, apply the constructor to that Object.
      // classDeclaration.constructor_ must have been set, at least to a default constructor:
      classDeclaration.constructor_.apply(instance, arguments);
      return instance;
    };
  },

  "internal function createInitializingStaticMethod",function createInitializingStaticMethod(methodName/* : String*/)/* : void*/ {var this$=this;
    this.publicConstructor[methodName] = function joo$JooClassDeclaration$428_42()/* : **/ {
      this$.init();
      return this$.constructor_[methodName].apply(null, arguments);
    };
  },
];},[],["joo.NativeClassDeclaration","joo.MemberDeclaration","Error","Function","joo.SystemClassLoader","joo.JavaScriptObject","Object"], "0.8.0", "0.9.6"
);