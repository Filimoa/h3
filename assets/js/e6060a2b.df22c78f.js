"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[3593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),l=n(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(7462),l=n(7294),o=n(6010),r=n(2466),i=n(6775),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){var t,n;return null!=(t=null==(n=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function d(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=null!=t?t:p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[r,i]=(0,l.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const l=null!=(t=a.find((e=>e.default)))?t:a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:o}))),[s,u]=g({queryString:n,groupId:a}),[p,y]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=null!=s?s:p;return m({value:e,tabValues:o})?e:null})();(0,l.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var v=n(2389);const f="tabList__CuJ",h="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const t=c.indexOf(e.currentTarget)+1;n=null!=(a=c[t])?a:c[0];break}case"ArrowLeft":{var l;const t=c.indexOf(e.currentTarget)-1;n=null!=(l=c[t])?l:c[c.length-1];break}}null==(t=n)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},r,{className:(0,o.Z)("tabs__item",h,null==r?void 0:r.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=y(e);return l.createElement("div",{className:(0,o.Z)("tabs-container",f)},l.createElement(b,(0,a.Z)({},e,t)),l.createElement(k,(0,a.Z)({},e,t)))}function x(e){const t=(0,v.Z)();return l.createElement(T,(0,a.Z)({key:String(t)},e))}},2500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),l=(n(7294),n(3905)),o=n(4866),r=n(5162);const i={id:"regions",title:"Region functions",sidebar_label:"Regions",slug:"/api/regions"},s=void 0,u={unversionedId:"api/regions",id:"api/regions",title:"Region functions",description:"These functions convert H3 indexes to and from polygonal areas.",source:"@site/docs/api/regions.mdx",sourceDirName:"api",slug:"/api/regions",permalink:"/docs/api/regions",draft:!1,editUrl:"https://github.com/uber/h3/edit/master/website/docs/api/regions.mdx",tags:[],version:"current",frontMatter:{id:"regions",title:"Region functions",sidebar_label:"Regions",slug:"/api/regions"},sidebar:"someSidebar",previous:{title:"Hierarchy",permalink:"/docs/api/hierarchy"},next:{title:"Directed edges",permalink:"/docs/api/uniedge"}},c={},p=[{value:"polygonToCells",id:"polygontocells",level:2},{value:"maxPolygonToCellsSize",id:"maxpolygontocellssize",level:3},{value:"cellsToLinkedMultiPolygon / cellsToMultiPolygon",id:"cellstolinkedmultipolygon--cellstomultipolygon",level:2},{value:"destroyLinkedMultiPolygon",id:"destroylinkedmultipolygon",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"These functions convert H3 indexes to and from polygonal areas."),(0,l.kt)("h2",{id:"polygontocells"},"polygonToCells"),(0,l.kt)(o.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"H3Error polygonToCells(const GeoPolygon *geoPolygon, int res, uint32_t flags, H3Index *out);\n"))),(0,l.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"h3.polygon_to_cells(polygons, res, geo_json_conformant=False)\n"))),(0,l.kt)(r.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<Long> polygonToCells(List<LatLng> points, List<List<LatLng>> holes, int res);\nList<String> polygonToCellAddresses(List<LatLng> points, List<List<LatLng>> holes, int res);\n"))),(0,l.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"h3.polygonToCells(polygon, res, isGeoJson)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n    const polygon = [\n        [37.813318999983238, -122.4089866999972145],\n        [37.7198061999978478, -122.3544736999993603],\n        [37.8151571999998453, -122.4798767000009008]\n    ];\n    const res = 7;\n    return h3.polygonToCells(polygon, res);\n}\n")))),(0,l.kt)("p",null,"polygonToCells takes a given GeoJSON-like data structure and preallocated,\nzeroed memory, and fills it with the hexagons that are contained by\nthe GeoJSON-like data structure."),(0,l.kt)("p",null,"Containment is determined by the cells' centroids. A partitioning\nusing the GeoJSON-like data structure, where polygons cover an area\nwithout overlap, will result in a partitioning in the H3 grid, where\ncells cover the same area without overlap."),(0,l.kt)("p",null,"Returns 0 (",(0,l.kt)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,l.kt)("h3",{id:"maxpolygontocellssize"},"maxPolygonToCellsSize"),(0,l.kt)(o.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"H3Error maxPolygonToCellsSize(const GeoPolygon *geoPolygon, int res, uint32_t flags, int64_t *out);\n"))),(0,l.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This function exists for memory management and is not exposed."))),(0,l.kt)(r.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This function exists for memory management and is not exposed."))),(0,l.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This function exists for memory management and is not exposed.")))),(0,l.kt)("p",null,"maxPolygonToCellsSize returns the number of hexagons to allocate space for when\ncomputing ",(0,l.kt)("inlineCode",{parentName:"p"},"polygonToCells")," on the given GeoJSON-like data structure."),(0,l.kt)("p",null,"Returns 0 (",(0,l.kt)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,l.kt)("h2",{id:"cellstolinkedmultipolygon--cellstomultipolygon"},"cellsToLinkedMultiPolygon / cellsToMultiPolygon"),(0,l.kt)(o.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"H3Error cellsToLinkedMultiPolygon(const H3Index *h3Set, const int numHexes, LinkedGeoPolygon *out);\n"))),(0,l.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"h3.cells_to_multi_polygon(hexes, geo_json=False)\n"))),(0,l.kt)(r.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<List<List<LatLng>>> cellsToMultiPolygon(Collection<Long> h3, boolean geoJson);\nList<List<List<LatLng>>> cellAddressesToMultiPolygon(Collection<String> h3Addresses, boolean geoJson);\n"))),(0,l.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"h3.cellsToMultiPolygon(cells, geoJson)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n    const hexagons = ['872830828ffffff', '87283082effffff'];\n    return h3.cellsToMultiPolygon(hexagons, true);\n}\n")))),(0,l.kt)("p",null,"Create a LinkedGeoPolygon describing the outline(s) of a set of  hexagons.\nPolygon outlines will follow GeoJSON MultiPolygon order: Each polygon will\nhave one outer loop, which is first in the list, followed by any holes."),(0,l.kt)("p",null,"It is the responsibility of the caller to call destroyLinkedPolygon on the\npopulated linked geo structure, or the memory for that structure will\nnot be freed."),(0,l.kt)("p",null,"It is expected that all hexagons in the set have the same resolution and\nthat the set contains no duplicates. Behavior is undefined if duplicates\nor multiple resolutions are present, and the algorithm may produce\nunexpected or invalid output."),(0,l.kt)("p",null,"Returns 0 (",(0,l.kt)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,l.kt)("h2",{id:"destroylinkedmultipolygon"},"destroyLinkedMultiPolygon"),(0,l.kt)(o.Z,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"c",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"void destroyLinkedMultiPolygon(LinkedGeoPolygon *polygon);\n"))),(0,l.kt)(r.Z,{value:"python",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This function exists for memory management and is not exposed."))),(0,l.kt)(r.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This function exists for memory management and is not exposed."))),(0,l.kt)(r.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This function exists for memory management and is not exposed.")))),(0,l.kt)("p",null,"Free all allocated memory for a linked geo structure. The caller is\nresponsible for freeing memory allocated to the input polygon struct."))}m.isMDXComponent=!0}}]);