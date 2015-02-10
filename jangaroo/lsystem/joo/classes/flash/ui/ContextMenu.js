joo.classLoader.prepare("package flash.ui",/* {
import flash.net.URLRequest;
import flash.events.EventDispatcher;*/

/**
 * Dispatched when a user first generates a context menu but before the contents of the context menu are displayed. This allows your program to modify the set of context menu items before displaying the menu. The user generates the context menu by right-clicking the pointing device.
 * @eventType flash.events.ContextMenuEvent.MENU_SELECT
 */
{Event:{name:"menuSelect", type:"flash.events.ContextMenuEvent"}},

/**
 * The ContextMenu class provides control over the items displayed in context menus.
 * <p><b>Mobile Browser Support:</b> This class is not supported in mobile browsers.</p>
 * <p><i>AIR profile support:</i> This feature is not supported on mobile devices or AIR for TV devices. See <a href="http://help.adobe.com/en_US/air/build/WS144092a96ffef7cc16ddeea2126bb46b82f-8000.html">AIR Profile Support</a> for more information regarding API support across multiple profiles.</p>
 * <p>In Flash Player, users open the context menu by right-clicking (Windows or Linux) or Control-clicking (Macintosh) Flash Player. You can use the methods and properties of the ContextMenu class to add custom menu items, control the display of the built-in context menu items (for example, Zoom In, and Print), or create copies of menus. In AIR, there are no built-in items and no standard context menu.</p>
 * <p>In Flash Professional, you can attach a ContextMenu object to a specific button, movie clip, or text field object, or to an entire movie level. You use the <code>contextMenu</code> property of the InteractiveObject class to do this.</p>
 * <p>In Flex or Flash Builder, only top-level components in the application can have context menus. For example, if a DataGrid control is a child of a TabNavigator or VBox container, the DataGrid control cannot have its own context menu.</p>
 * <p>To add new items to a ContextMenu object, you create a ContextMenuItem object, and then add that object to the <code>ContextMenu.customItems</code> array. For more information about creating context menu items, see the ContextMenuItem class entry.</p>
 * <p>Flash Player has three types of context menus: the standard menu (which appears when you right-click in Flash Player), the edit menu (which appears when you right-click a selectable or editable text field), and an error menu (which appears when a SWF file has failed to load into Flash Player). Only the standard and edit menus can be modified with the ContextMenu class. Only the edit menu appears in AIR.</p>
 * <p>Custom menu items always appear at the top of the Flash Player context menu, above any visible built-in menu items; a separator bar distinguishes built-in and custom menu items. You cannot remove the Settings menu item from the context menu. The Settings menu item is required in Flash so that users can access the settings that affect privacy and storage on their computers. You also cannot remove the About menu item, which is required so that users can find out what version of Flash Player they are using. (In AIR, the built-in Settings and About menu items are not used.)</p>
 * <p>You can add no more than 15 custom items to a context menu in Flash Player. In AIR, there is no explicit limit imposed on the number of items in a context menu.</p>
 * <p>You must use the <code>ContextMenu()</code> constructor to create a ContextMenu object before calling its methods.</p>
 * <p><a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/ui/ContextMenu.html#includeExamplesSummary">View the examples</a></p>
 * @see ContextMenuItem
 * @see flash.display.InteractiveObject#contextMenu
 * @see http://help.adobe.com/en_US/as3/dev/WS5b3ccc516d4fbf351e63e3d118676a48d0-8000.html Working with menus
 *
 */
"public final class ContextMenu extends flash.events.EventDispatcher",2,function($$private){;return[ 
  /**
   * An instance of the ContextMenuBuiltInItems class with the following properties: <code>forwardAndBack</code>, <code>loop</code>, <code>play</code>, <code>print</code>, <code>quality</code>, <code>rewind</code>, <code>save</code>, and <code>zoom</code>. Setting these properties to <code>false</code> removes the corresponding menu items from the specified ContextMenu object. These properties are enumerable and are set to <code>true</code> by default.
   * <p><b>Note:</b> In AIR, context menus do not have built-in items.</p>
   * @see ContextMenuBuiltInItems
   * @see #hideBuiltInItems()
   *
   */
  "public function get builtInItems",function builtInItems$get()/*:ContextMenuBuiltInItems*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set builtInItems",function builtInItems$set(value/*:ContextMenuBuiltInItems*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * An instance of the ContextMenuClipboardItems class with the following properties: <code>cut</code>, <code>copy</code>, <code>paste</code>, <code>delete</code>, <code>selectAll</code>. Setting one of these properties to <code>false</code> disables the corresponding item in the clipboard menu.
   * @see ContextMenuClipboardItems
   *
   * @example The following example demonstrates the use of the <code>clipboardItems</code> property of the <code>ContextMenu</code> object. Create a <code>ContextMenu</code>, and set its <code>clipboardMenu</code> property to <code>true</code>. Add an event handler for the <code>MENU_SELECT</code> (generally, right-click) event, and assign the menu to a display object. In this case, the <code>copy</code> and <code>paste</code> menus are enabled.
   * <listing>
   * package {
   *     import flash.ui.ContextMenu;
   *     import flash.events.ContextMenuEvent;
   *     import flash.display.Sprite;
   *
   *     public class ContextMenuClipboardItemsExample extends Sprite {
   *         public function ContextMenuClipboardItemsExample() {
   *             var myContextMenu:ContextMenu = new ContextMenu();
   *             myContextMenu.clipboardMenu = true;
   *             myContextMenu.addEventListener(ContextMenuEvent.MENU_SELECT, menuSelectHandler);
   *             var rc:Sprite = new Sprite();
   *             rc.graphics.beginFill(0xDDDDDD);
   *             rc.graphics.drawRect(0,0,100,30);
   *             addChild(rc);
   *             rc.contextMenu = myContextMenu;
   *         }
   *         function menuSelectHandler(event:ContextMenuEvent):void {
   *             event.contextMenuOwner.contextMenu.clipboardItems.copy = true;
   *             event.contextMenuOwner.contextMenu.clipboardItems.paste = true;
   *         }
   *     }
   * }
   * </listing>
   */
  "public function get clipboardItems",function clipboardItems$get()/*:ContextMenuClipboardItems*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set clipboardItems",function clipboardItems$set(value/*:ContextMenuClipboardItems*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Specifies whether or not the clipboard menu should be used. If this value is <code>true</code>, the <code>clipboardItems</code> property determines which items are enabled or disabled on the clipboard menu.
   * <p>If the <code>link</code> property is non-null, this <code>clipBoardMenu</code> property is ignored.</p>
   */
  "public function get clipboardMenu",function clipboardMenu$get()/*:Boolean*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set clipboardMenu",function clipboardMenu$set(value/*:Boolean*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * An array of ContextMenuItem objects. Each object in the array represents a context menu item that you have defined. Use this property to add, remove, or modify these custom menu items.
   * <p>To add new menu items, you create a ContextMenuItem object and then add it to the <code>customItems</code> array (for example, by using <code>Array.push()</code>). For more information about creating menu items, see the ContextMenuItem class entry.</p>
   * @see flash.display.InteractiveObject#contextMenu
   *
   */
  "public native function get customItems"/*():Array*/,

  /**
   * @private
   */
  "public native function set customItems"/*(value:Array):void*/,

  /**
   * The <code>isSupported</code> property is set to <code>true</code> if the ContextMenu class is supported on the current platform, otherwise it is set to <code>false</code>.
   */
  "public static function get isSupported",function isSupported$get()/*:Boolean*/ {
    return false;
  },

  /**
   * The <code>URLRequest</code> of the link. If this property is <code>null</code>, a normal context menu is displayed. If this property is not <code>null</code>, the link context menu is displayed, and operates on the url specified.
   * <p>If a <code>link</code> is specified, the <code>clipboardMenu</code> property is ignored.</p>
   * <p>The default value is <code>null</code>.</p>
   */
  "public function get link",function link$get()/*:URLRequest*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set link",function link$set(value/*:URLRequest*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Creates a ContextMenu object.
   * @see #customItems
   * @see #hideBuiltInItems()
   *
   */
  "public function ContextMenu",function ContextMenu$() {flash.events.EventDispatcher.call(this);
    this['customItems'] = [];
  },

  /**
   * Hides all built-in menu items (except Settings) in the specified ContextMenu object. If the debugger version of Flash Player is running, the Debugging menu item appears, although it is dimmed for SWF files that do not have remote debugging enabled.
   * <p>This method hides only menu items that appear in the standard context menu; it does not affect items that appear in the edit and error menus.</p>
   * <p>This method works by setting all the Boolean members of <code><i>my_cm</i></code><code>.builtInItems</code> to <code>false</code>. You can selectively make a built-in item visible by setting its corresponding member in <code><i>my_cm</i></code><code>.builtInItems</code> to <code>true</code>.</p>
   * <p><b>Note:</b> In AIR, context menus do not have built-in items. Calling this method will have no effect.</p>
   * @see ContextMenuBuiltInItems
   * @see #builtInItems
   *
   */
  "public function hideBuiltInItems",function hideBuiltInItems()/*:void*/ {
    this.hidden$2 = true;
  },

  "private var",{ hidden/*:Boolean*/:false},
];},["isSupported"],["flash.events.EventDispatcher","Error"], "0.8.0", "0.9.6"
);