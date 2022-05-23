(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),b=(n(0),n(465)),c={id:"eventwidget",title:"EventWidget",sidebar_label:"EventWidget"},l={unversionedId:"api/generated/classes/eventwidget",id:"api/generated/classes/eventwidget",isDocsHomePage:!1,title:"EventWidget",description:"Abstract class that adds event handling support to all widgets.",source:"@site/docs/api/generated/classes/eventwidget.md",slug:"/api/generated/classes/eventwidget",permalink:"/docs/api/generated/classes/eventwidget",editUrl:"https://github.com/nodegui/nodegui/edit/master/website/docs/api/generated/classes/eventwidget.md",version:"current",sidebar_label:"EventWidget",sidebar:"api",previous:{title:"Component",permalink:"/docs/api/generated/classes/component"},next:{title:"FlexLayout",permalink:"/docs/api/generated/classes/flexlayout"}},p=[{value:"Example",id:"example",children:[]},{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"native",id:"native",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"addEventListener",id:"addeventlistener",children:[]},{value:"eventProcessed",id:"eventprocessed",children:[]},{value:"removeEventListener",id:"removeeventlistener",children:[]},{value:"setEventProcessed",id:"seteventprocessed",children:[]}]}],i={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Abstract class that adds event handling support to all widgets.")),Object(b.b)("p",null,"*This class implements an event emitter and merges it with Qt's event and signal system. It allows us to register and unregister event and signal listener at will from javascript**"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"EventWidget")," is an abstract class and hence no instances of the same should be created. It exists so that we can add event handling functionalities to all widget's easily. This is an internal class."),Object(b.b)("h3",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const { QWidget, QWidgetSignals, WidgetEventTypes } = require("@nodegui/nodegui");\n\nconst view = new QWidget();\n// You either listen for a widget\'s signal\nview.addEventListener(\'windowTitleChanged\', () => {\nconsole.log("window title changed");\n});\n\n// or you can listen for an event\n\nview.addEventListener(WidgetEventTypes.MouseMove, () => {\nconsole.log("mouse moved");\n});\n')),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"Signals"),": ",Object(b.b)("em",{parentName:"p"},"unknown")),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/generated/classes/component"}),"Component")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"EventWidget")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/generated/classes/qobject"}),"QObject")))),Object(b.b)("h2",{id:"index"},"Index"),Object(b.b)("h3",{id:"constructors"},"Constructors"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/generated/classes/eventwidget#constructor"}),"constructor"))),Object(b.b)("h3",{id:"properties"},"Properties"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/generated/classes/eventwidget#native"}),"native"))),Object(b.b)("h3",{id:"methods"},"Methods"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/generated/classes/eventwidget#addeventlistener"}),"addEventListener")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/generated/classes/eventwidget#eventprocessed"}),"eventProcessed")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/generated/classes/eventwidget#removeeventlistener"}),"removeEventListener")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/generated/classes/eventwidget#seteventprocessed"}),"setEventProcessed"))),Object(b.b)("h2",{id:"constructors-1"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new EventWidget"),"(",Object(b.b)("inlineCode",{parentName:"p"},"native"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/generated/globals#nativeelement"}),"NativeElement"),"): ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget"}),"EventWidget"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#constructor"}),"constructor"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"native")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/api/generated/globals#nativeelement"}),"NativeElement"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget"}),"EventWidget"))),Object(b.b)("h2",{id:"properties-1"},"Properties"),Object(b.b)("h3",{id:"native"},"native"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"native"),": ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/generated/globals#nativeelement"}),"NativeElement")," | null")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#native"}),"native"))),Object(b.b)("h2",{id:"methods-1"},"Methods"),Object(b.b)("h3",{id:"addeventlistener"},"addEventListener"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addEventListener"),"\u2039",Object(b.b)("strong",{parentName:"p"},"SignalType"),"\u203a(",Object(b.b)("inlineCode",{parentName:"p"},"signalType"),": SignalType, ",Object(b.b)("inlineCode",{parentName:"p"},"callback"),": Signals","[SignalType]","): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type parameters:")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"SignalType"),": ",Object(b.b)("em",{parentName:"p"},"keyof Signals")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"signalType")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SignalType"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SignalType is a signal from the widgets signals interface.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"callback")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Signals","[SignalType]"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Corresponding callback for the signal as mentioned in the widget's signal interface")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"void"),Object(b.b)("p",null,"For example in the case of QPushButton:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const button = new QPushButton();\nbutton.addEventListener('clicked',(checked)=>console.log(\"clicked\"));\n// here clicked is a value from QPushButtonSignals interface\n")),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"addEventListener"),"(",Object(b.b)("inlineCode",{parentName:"p"},"eventType"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/generated/enums/widgeteventtypes"}),"WidgetEventTypes"),", ",Object(b.b)("inlineCode",{parentName:"p"},"callback"),": function): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"eventType"),": ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/generated/enums/widgeteventtypes"}),"WidgetEventTypes"))),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"callback"),": ",Object(b.b)("em",{parentName:"p"},"function")),Object(b.b)("p",null,"For example in the case of QPushButton:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const button = new QPushButton();\nbutton.addEventListener(WidgetEventTypes.HoverEnter,()=>console.log("hovered"));\n')),Object(b.b)("p",null,"\u25b8 (",Object(b.b)("inlineCode",{parentName:"p"},"event?"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/generated/globals#nativerawpointer"}),"NativeRawPointer"),'\u2039"QEvent"\u203a): ',Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"event?")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/api/generated/globals#nativerawpointer"}),"NativeRawPointer"),'\u2039"QEvent"\u203a')))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"eventprocessed"},"eventProcessed"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"eventProcessed"),"(): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Get the state of the event processed flag"),Object(b.b)("p",null,"See ",Object(b.b)("inlineCode",{parentName:"p"},"setEventProcessed()"),"."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"boolean True if the current event is flagged as processed."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"removeeventlistener"},"removeEventListener"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"removeEventListener"),"\u2039",Object(b.b)("strong",{parentName:"p"},"SignalType"),"\u203a(",Object(b.b)("inlineCode",{parentName:"p"},"signalType"),": SignalType, ",Object(b.b)("inlineCode",{parentName:"p"},"callback"),": Signals","[SignalType]","): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type parameters:")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"SignalType"),": ",Object(b.b)("em",{parentName:"p"},"keyof Signals")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"signalType")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SignalType")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"callback")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Signals","[SignalType]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"removeEventListener"),"(",Object(b.b)("inlineCode",{parentName:"p"},"eventType"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/generated/enums/widgeteventtypes"}),"WidgetEventTypes"),", ",Object(b.b)("inlineCode",{parentName:"p"},"callback"),": function): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"eventType"),": ",Object(b.b)("em",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/api/generated/enums/widgeteventtypes"}),"WidgetEventTypes"))),Object(b.b)("p",null,"\u25aa ",Object(b.b)("strong",{parentName:"p"},"callback"),": ",Object(b.b)("em",{parentName:"p"},"function")),Object(b.b)("p",null,"\u25b8 (",Object(b.b)("inlineCode",{parentName:"p"},"event?"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/generated/globals#nativerawpointer"}),"NativeRawPointer"),'\u2039"QEvent"\u203a): ',Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"event?")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/api/generated/globals#nativerawpointer"}),"NativeRawPointer"),'\u2039"QEvent"\u203a')))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"seteventprocessed"},"setEventProcessed"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"setEventProcessed"),"(",Object(b.b)("inlineCode",{parentName:"p"},"isProcessed"),": boolean): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Mark the current event as having been processed"),Object(b.b)("p",null,"This method is used to indicate that the currently dispatched event\nhas been processed and no further processing by superclasses is\nrequired. It only makes sense to call this method from an event\nhandler."),Object(b.b)("p",null,"When set, this flag will cause NodeGui's ",Object(b.b)("inlineCode",{parentName:"p"},"QObject::event()")," method to\nreturn true and not call the superclass ",Object(b.b)("inlineCode",{parentName:"p"},"event()"),", effectively preventing\nany further processing on this event."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"isProcessed")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true if the event has been processed.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")))}s.isMDXComponent=!0},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),o=s(n),O=a,j=o["".concat(c,".").concat(O)]||o[O]||d[O]||b;return n?r.a.createElement(j,l(l({ref:t},i),{},{components:n})):r.a.createElement(j,l({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=O;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<b;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);