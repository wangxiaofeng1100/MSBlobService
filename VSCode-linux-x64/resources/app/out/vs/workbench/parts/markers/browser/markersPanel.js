/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function(){var e=["vs/workbench/parts/markers/common/markersModel","require","exports","vs/base/common/winjs.base","vs/workbench/parts/markers/common/messages","vs/base/common/severity","vs/css!vs/workbench/parts/markers/browser/media/markers","vs/workbench/parts/markers/browser/markersActionProvider","vs/nls!vs/workbench/parts/markers/browser/markersActionProvider","vs/platform/instantiation/common/instantiation","vs/workbench/parts/markers/browser/markersTreeViewer","vs/base/browser/dom","vs/workbench/parts/markers/browser/markersTreeController","vs/base/common/errors","vs/workbench/services/editor/common/editorService","vs/platform/telemetry/common/telemetry","vs/nls!vs/workbench/parts/markers/browser/markersPanel","vs/base/common/paths","vs/base/common/actions","vs/base/common/types","vs/base/common/map","vs/platform/configuration/common/configuration","vs/css!vs/workbench/parts/markers/browser/markersPanel","vs/base/browser/ui/countBadge/countBadge","vs/base/browser/ui/fileLabel/fileLabel","vs/base/browser/ui/highlightedlabel/highlightedLabel","vs/base/common/uri","vs/editor/common/core/range","vs/base/parts/tree/browser/treeDefaults","vs/base/common/filters","vs/nls","vs/workbench/parts/markers/browser/markersPanel","vs/base/common/set","vs/base/common/async","vs/base/common/lifecycle","vs/platform/markers/common/markers","vs/platform/event/common/event","vs/workbench/services/group/common/groupService","vs/workbench/parts/files/common/editors/fileEditorInput","vs/workbench/browser/panel","vs/workbench/parts/markers/common/constants","vs/base/parts/tree/browser/treeImpl","vs/workbench/parts/markers/browser/markersPanelActions","vs/platform/workspace/common/workspace"],t=function(t){for(var r=[],s=0,i=t.length;s<i;s++)r[s]=e[t[s]];return r};define(e[6],t([22]),{}),define(e[8],t([30,16]),function(e,t){return e.create("vs/workbench/parts/markers/browser/markersActionProvider",t)}),define(e[0],t([1,2,17,19,20,5,26,27,29,4]),function(e,t,r,s,i,n,o,a,c,u){"use strict";var l=function(){function e(e,t,s,i){void 0===i&&(i=[]),this.uri=e,this.markers=t,this.statistics=s,this.matches=i,this.path=e.fsPath,this.name=r.basename(e.fsPath)}return e}();t.Resource=l;var h=function(){function e(e,t,r,s){void 0===r&&(r=[]),void 0===s&&(s=[]),this.id=e,this.marker=t,this.labelMatches=r,this.sourceMatches=s}return e}();t.Marker=h;var p=function(){function e(e){void 0===e&&(e=""),this._filterErrors=!1,this._filterWarnings=!1,this._filterInfos=!1,this._filter="",this._completeFilter="",e&&this.parse(e)}return Object.defineProperty(e.prototype,"filterErrors",{get:function(){return this._filterErrors},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filterWarnings",{get:function(){return this._filterWarnings},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filterInfos",{get:function(){return this._filterInfos},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filter",{get:function(){return this._filter},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"completeFilter",{get:function(){return this._completeFilter},enumerable:!0,configurable:!0}),e.prototype.hasFilters=function(){return!!this._filter},e.prototype.parse=function(e){this._completeFilter=e,this._filter=e.trim(),this._filterErrors=this.matches(this._filter,u["default"].MARKERS_PANEL_FILTER_ERRORS),this._filterWarnings=this.matches(this._filter,u["default"].MARKERS_PANEL_FILTER_WARNINGS),this._filterInfos=this.matches(this._filter,u["default"].MARKERS_PANEL_FILTER_INFOS)},e.prototype.matches=function(e,t){var r=c.matchesPrefix(e,t);return r&&r.length>0},e._filter=c.or(c.matchesPrefix,c.matchesContiguousSubString),e._fuzzyFilter=c.or(c.matchesPrefix,c.matchesContiguousSubString,c.matchesFuzzy),e}();t.FilterOptions=p;var f=function(){function e(e){void 0===e&&(e=[]),this.markersByResource=new i.LinkedMap,this._filterOptions=new p,this.update(e)}return Object.defineProperty(e.prototype,"filterOptions",{get:function(){return this._filterOptions},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"filteredResources",{get:function(){return this._filteredResources},enumerable:!0,configurable:!0}),e.prototype.hasFilteredResources=function(){return this.filteredResources.length>0},e.prototype.hasResources=function(){return this.markersByResource.size>0},e.prototype.hasResource=function(e){return this.markersByResource.has(e)},Object.defineProperty(e.prototype,"nonFilteredResources",{get:function(){return this._nonFilteredResources},enumerable:!0,configurable:!0}),e.prototype.update=function(e,t){e instanceof p&&(this._filterOptions=e),e instanceof o["default"]&&this.updateResource(e,t),s.isArray(e)&&this.updateMarkers(e),this.refresh()},e.prototype.refresh=function(){this.refreshResources()},e.prototype.refreshResources=function(){var e=this.markersByResource.entries().map(this.toFilteredResource.bind(this));this._nonFilteredResources=e.filter(function(e){return 0===e.markers.length}),this._filteredResources=e.filter(function(e){return e.markers.length>0}),this._filteredResources.sort(function(e,t){return 0===e.statistics.errors&&t.statistics.errors>0?1:0===t.statistics.errors&&e.statistics.errors>0?-1:e.path.localeCompare(t.path)||e.name.localeCompare(t.name)})},e.prototype.updateResource=function(e,t){this.markersByResource.has(e)&&this.markersByResource["delete"](e),t.length>0&&this.markersByResource.set(e,t)},e.prototype.updateMarkers=function(e){var t=this;e.forEach(function(e){var r=e.resource,s=t.markersByResource.get(r);s||(s=[],t.markersByResource.set(r,s)),s.push(e)})},e.prototype.toFilteredResource=function(e){var t=this,s=e.value.filter(this.filterMarker.bind(this)).map(function(e,r){return t.toMarker(e,r)});s.sort(this.compareMarkers.bind(this));var i=p._filter(this._filterOptions.filter,r.basename(e.key.fsPath));return new l(e.key,s,this.getStatistics(e.value),i||[])},e.prototype.toMarker=function(e,t){var r=p._fuzzyFilter(this._filterOptions.filter,e.message),s=e.source?p._filter(this._filterOptions.filter,e.source):[];return new h(e.resource.toString()+t,e,r||[],s||[])},e.prototype.filterMarker=function(e){return!this._filterOptions.filter||(!(!this._filterOptions.filterErrors||n["default"].Error!==e.severity)||(!(!this._filterOptions.filterWarnings||n["default"].Warning!==e.severity)||(!(!this._filterOptions.filterInfos||n["default"].Info!==e.severity)||(!!p._fuzzyFilter(this._filterOptions.filter,e.message)||(!!p._filter(this._filterOptions.filter,r.basename(e.resource.fsPath))||!(!e.source||!p._filter(this._filterOptions.filter,e.source)))))))},e.prototype.compareMarkers=function(e,t){return a.Range.compareRangesUsingStarts({startLineNumber:e.marker.startLineNumber,startColumn:e.marker.startColumn,endLineNumber:e.marker.endLineNumber,endColumn:e.marker.endColumn},{startLineNumber:t.marker.startLineNumber,startColumn:t.marker.startColumn,endLineNumber:t.marker.endLineNumber,endColumn:t.marker.endColumn})},e.prototype.getStatistics=function(e){var t=0,r=0,s=0,i=0;return e.forEach(function(e){switch(e.severity){case n["default"].Error:return void t++;case n["default"].Warning:return void r++;case n["default"].Info:return void s++;default:return void i++}}),{errors:t,warnings:r,infos:s,unknwons:i}},e.prototype.dispose=function(){this.markersByResource.clear(),this._filteredResources=[],this._nonFilteredResources=[]},e.prototype.getTitle=function(t){var r=e.getStatisticsLabel(t);return r?r:u["default"].MARKERS_PANEL_TITLE_NO_PROBLEMS},e.prototype.getMessage=function(){return this.hasFilteredResources()?"":this.hasResources()&&this._filterOptions.hasFilters()?u["default"].MARKERS_PANEL_NO_PROBLEMS_FILTERS:u["default"].MARKERS_PANEL_NO_PROBLEMS_BUILT},e.getStatisticsLabel=function(e,t){void 0===t&&(t=!1);var r=this.getLabel("",e.errors,u["default"].MARKERS_PANEL_SINGLE_ERROR_LABEL,u["default"].MARKERS_PANEL_MULTIPLE_ERRORS_LABEL);return t||(r=this.getLabel(r,e.warnings,u["default"].MARKERS_PANEL_SINGLE_WARNING_LABEL,u["default"].MARKERS_PANEL_MULTIPLE_WARNINGS_LABEL),r=this.getLabel(r,e.infos,u["default"].MARKERS_PANEL_SINGLE_INFO_LABEL,u["default"].MARKERS_PANEL_MULTIPLE_INFOS_LABEL),r=this.getLabel(r,e.unknwons,u["default"].MARKERS_PANEL_SINGLE_UNKNOWN_LABEL,u["default"].MARKERS_PANEL_MULTIPLE_UNKNOWNS_LABEL)),r},e.getLabel=function(e,t,r,s){return t<=0?e:(e=e?e+", ":"",e+=1===t?r:s(t))},e}();t.MarkersModel=f});var r=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},s=this&&this.__decorate||function(e,t,r,s){var i,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,r,o):i(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o},i=this&&this.__param||function(e,t){return function(r,s){t(r,s,e)}};define(e[7],t([1,2,8,3,18,9,0]),function(e,t,n,o,a,c,u){"use strict";var l=function(e){function t(){e.call(this,"remove",n.localize(0,null),"action-remove")}return r(t,e),t.prototype.run=function(e){return e.tree.refresh()},t}(a.Action),h=function(){function e(e){this.cache={},this.instantiationService=e}return e.prototype.getAction=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var s=this.cache[e.ID];return s||(t.unshift(e),s=this.cache[e.ID]=this.instantiationService.createInstance.apply(this.instantiationService,t)),s},e.prototype.dispose=function(){var e=this;Object.keys(this.cache).forEach(function(t){e.cache[t].dispose()}),this.cache=null},e}();t.ActionContainer=h;var p=function(e){function t(t){e.call(this,t)}return r(t,e),t.prototype.hasActions=function(e,t){return t instanceof u.Resource},t.prototype.getActions=function(e,t){return o.TPromise.as(this.getActionsForResource())},t.prototype.getActionsForResource=function(){return[new l]},t.prototype.hasSecondaryActions=function(e,t){return!1},t.prototype.getSecondaryActions=function(e,t){return o.TPromise.as([])},t.prototype.getActionItem=function(e,t,r){return null},t=s([i(0,c.IInstantiationService)],t)}(h);t.ActionProvider=p}),define(e[10],t([1,2,3,11,5,43,23,24,25,0,4]),function(e,t,r,n,o,a,c,u,l,h,p){"use strict";var f=function(){function e(){}return e.prototype.getId=function(e,t){return t instanceof h.MarkersModel?"root":t instanceof h.Resource?t.uri.toString():t instanceof h.Marker?t.id:""},e.prototype.hasChildren=function(e,t){return t instanceof h.MarkersModel||t instanceof h.Resource},e.prototype.getChildren=function(e,t){return t instanceof h.MarkersModel?r.TPromise.as(t.filteredResources):t instanceof h.Resource?r.TPromise.as(t.markers):null},e.prototype.getParent=function(e,t){return r.TPromise.as(null)},e}();t.DataSource=f;var d=function(){function e(e,t,r){this.actionRunner=e,this.actionProvider=t,this.contextService=r}return e.prototype.getHeight=function(e,t){return 22},e.prototype.getTemplateId=function(t,r){return r instanceof h.Resource?e.RESOURCE_TEMPLATE_ID:r instanceof h.Marker?e.MARKER_TEMPLATE_ID:""},e.prototype.renderTemplate=function(t,r,s){switch(n.addClass(s,"markers-panel-tree-entry"),r){case e.RESOURCE_TEMPLATE_ID:return this.renderResourceTemplate(s);case e.MARKER_TEMPLATE_ID:return this.renderMarkerTemplate(s)}},e.prototype.renderResourceTemplate=function(e){var t=Object.create(null),r=n.append(e,n.$(".resource-label-container"));t.file=new u.FileLabel(r,null,this.contextService);var s=n.append(e,n.$(".count-badge-wrapper"));return t.count=new c.CountBadge(s),t},e.prototype.renderMarkerTemplate=function(e){var t=Object.create(null);return t.icon=n.append(e,n.$(".marker-icon")),t.source=new l.HighlightedLabel(n.append(e,n.$(""))),t.description=new l.HighlightedLabel(n.append(e,n.$(".marker-description"))),t.lnCol=n.append(e,n.$("span.marker-line")),t},e.prototype.renderElement=function(t,r,s,i){switch(s){case e.RESOURCE_TEMPLATE_ID:return this.renderResourceElement(t,r,i);case e.MARKER_TEMPLATE_ID:return this.renderMarkerElement(t,r,i)}},e.prototype.renderResourceElement=function(e,t,r){r.file.setValue(t.uri,t.matches),r.count.setCount(t.markers.length)},e.prototype.renderMarkerElement=function(t,r,s){var i=r.marker;s.icon.className="icon "+e.iconClassNameFor(i),s.description.set(i.message,r.labelMatches),s.description.element.title=i.message,n.toggleClass(s.source.element,"marker-source",!!i.source),s.source.set(i.source,r.sourceMatches),s.lnCol.textContent=p["default"].MARKERS_PANEL_AT_LINE_COL_NUMBER(i.startLineNumber,i.startColumn)},e.iconClassNameFor=function(e){switch(e.severity){case o["default"].Ignore:return"info";case o["default"].Info:return"info";case o["default"].Warning:return"warning";case o["default"].Error:return"error"}return""},e.prototype.disposeTemplate=function(e,t,r){},e.RESOURCE_TEMPLATE_ID="resource-template",e.MARKER_TEMPLATE_ID="marker-template",e=s([i(2,a.IWorkspaceContextService)],e)}();t.Renderer=d;var m=function(){function e(){}return e.prototype.getAriaLabel=function(e,t){return t instanceof h.Resource?p["default"].MARKERS_TREE_ARIA_LABEL_RESOURCE(t.name,t.markers.length):t instanceof h.Marker?p["default"].MARKERS_TREE_ARIA_LABEL_MARKER(t.marker):null},e}();t.MarkersTreeAccessibilityProvider=m}),define(e[12],t([1,2,13,28,0,14,15]),function(e,t,n,o,a,c,u){"use strict";var l=function(e){function t(t,r){e.call(this),this.editorService=t,this.telemetryService=r}return r(t,e),t.prototype.onLeftClick=function(t,r,s){var i=t.getFocus();if(e.prototype.onLeftClick.call(this,t,r,s)){if(this.openFileAtElement(r,2!==s.detail,s.ctrlKey||s.metaKey,2===s.detail))return!0;if(r instanceof a.MarkersModel)return i?t.setFocus(i):t.focusFirst(),!0}return!1},t.prototype.onEnter=function(t,r){return!!e.prototype.onEnter.call(this,t,r)&&this.openFileAtElement(t.getFocus(),!1,r.ctrlKey||r.metaKey,!0)},t.prototype.onSpace=function(t,r){var s=t.getFocus();return s instanceof a.Marker?(t.setSelection([s]),this.openFileAtElement(t.getFocus(),!0,!1,!1)):e.prototype.onSpace.call(this,t,r)},t.prototype.openFileAtElement=function(e,t,r,s){if(e instanceof a.Marker){this.telemetryService.publicLog("problems.marker.opened",{source:e.source});var i=e.marker;return this.editorService.openEditor({resource:i.resource,options:{selection:{startLineNumber:i.startLineNumber,startColumn:i.startColumn,endLineNumber:i.endLineNumber,endColumn:i.endColumn},preserveFocus:t,pinned:s,revealIfVisible:!0}},r).done(null,n.onUnexpectedError),!0}return!1},t=s([i(0,c.IWorkbenchEditorService),i(1,u.ITelemetryService)],t)}(o.DefaultController);t.Controller=l}),define(e[31],t([1,2,13,32,3,33,11,34,35,15,36,37,38,39,14,40,0,12,41,10,9,7,42,21,4,6]),function(e,t,n,o,a,c,u,l,h,p,f,d,m,v,g,R,E,k,y,b,_,A,S,M,L){"use strict";var P=function(e){function t(t,r,s,i,n,a,u){e.call(this,R["default"].MARKERS_PANEL_ID,u),this.instantiationService=t,this.markerService=r,this.editorGroupService=s,this.editorService=i,this.eventService=n,this.configurationService=a,this.lastSelectedRelativeTop=0,this.currentActiveFile=null,this.toDispose=[],this.delayedRefresh=new c.Delayer(500),this.autoExpanded=new o.ArraySet}return r(t,e),t.prototype.create=function(t){e.prototype.create.call(this,t),this.markersModel=new E.MarkersModel,u.addClass(t.getHTMLElement(),"markers-panel");var r=this.configurationService.getConfiguration();this.onConfigurationsUpdated(r);var s=u.append(t.getHTMLElement(),u.$(".markers-panel-container"));return this.createMessageBox(s),this.createTree(s),this.createActions(),this.createListeners(),this.render(),a.TPromise.as(null)},t.prototype.getTitle=function(){var e=this.markerService.getStatistics();return this.markersModel.getTitle(e)},t.prototype.layout=function(e){this.tree.layout(e.height)},t.prototype.focus=function(){this.tree.isDOMFocused()||(this.markersModel.hasFilteredResources()?(this.tree.DOMFocus(),0===this.tree.getSelection().length&&this.tree.focusFirst(),this.autoReveal(!0)):this.messageBox.focus())},t.prototype.getActions=function(){return this.collapseAllAction.enabled=this.markersModel.hasFilteredResources(),this.actions},t.prototype.refreshPanel=function(e){var t=this;return void 0===e&&(e=!1),this.collapseAllAction.enabled=this.markersModel.hasFilteredResources(),e&&this.updateTitleArea(),u.toggleClass(this.treeContainer,"hidden",!this.markersModel.hasFilteredResources()),this.renderMessage(),this.markersModel.hasFilteredResources()?this.tree.refresh().then(function(){t.autoExpand()}):a.TPromise.as(null)},t.prototype.updateFilter=function(e){this.markersModel.update(new E.FilterOptions(e)),this.autoExpanded=new o.ArraySet,this.refreshPanel(),this.autoReveal()},t.prototype.createMessageBox=function(e){this.messageBoxContainer=u.append(e,u.$(".message-box-container")),this.messageBox=u.append(this.messageBoxContainer,u.$("span")),this.messageBox.setAttribute("tabindex","0")},t.prototype.createTree=function(e){this.treeContainer=u.append(e,u.$(".tree-container"));var t=this.instantiationService.createInstance(A.ActionProvider),r=this.instantiationService.createInstance(b.Renderer,this.getActionRunner(),t),s=this.instantiationService.createInstance(k.Controller);this.tree=new y.Tree(this.treeContainer,{dataSource:new b.DataSource,renderer:r,controller:s,accessibilityProvider:new b.MarkersTreeAccessibilityProvider},{indentPixels:0,twistiePixels:20,ariaLabel:L["default"].MARKERS_PANEL_ARIA_LABEL_PROBLEMS_TREE})},t.prototype.createActions=function(){var e=this;this.collapseAllAction=this.instantiationService.createInstance(S.CollapseAllAction,this.tree,!0),this.filterAction=new S.FilterAction(this),this.actions=[this.filterAction,this.collapseAllAction],this.actions.forEach(function(t){e.toDispose.push(t)})},t.prototype.createListeners=function(){var e=this;this.toDispose.push(this.configurationService.onDidUpdateConfiguration(function(t){return e.onConfigurationsUpdated(t.config)})),this.toDispose.push(this.markerService.onMarkerChanged(this.onMarkerChanged,this)),this.toDispose.push(this.editorGroupService.onEditorsChanged(this.onEditorsChanged,this)),this.toDispose.push(this.tree.addListener2("selection",function(){return e.onSelected()}))},t.prototype.onMarkerChanged=function(e){var t=this;this.updateResources(e),this.delayedRefresh.trigger(function(){t.refreshPanel(!0),t.autoReveal()})},t.prototype.onEditorsChanged=function(){var e=this.editorService.getActiveEditorInput();this.currentActiveFile=e instanceof m.FileEditorInput?e.getResource():null,this.autoReveal()},t.prototype.onConfigurationsUpdated=function(e){this.hasToAutoReveal=e&&e.problems&&e.problems.autoReveal},t.prototype.onSelected=function(){var e=this.tree.getSelection();e&&e.length>0&&(this.lastSelectedRelativeTop=this.tree.getRelativeTop(e[0]))},t.prototype.updateResources=function(e){var t=this;e.forEach(function(e){var r=t.markerService.read({resource:e}).slice(0);t.markersModel.update(e,r),t.markersModel.hasResource(e)||t.autoExpanded.unset(e.toString())})},t.prototype.render=function(){var e=this.markerService.read().slice(0);this.markersModel.update(e),this.tree.setInput(this.markersModel).then(this.autoExpand.bind(this)),u.toggleClass(this.treeContainer,"hidden",!this.markersModel.hasFilteredResources()),this.renderMessage()},t.prototype.renderMessage=function(){var e=this.markersModel.getMessage();this.messageBox.textContent=e,u.toggleClass(this.messageBoxContainer,"hidden",this.markersModel.hasFilteredResources())},t.prototype.autoExpand=function(){var e=this;this.markersModel.filteredResources.forEach(function(t){e.autoExpanded.contains(t.uri.toString())||(e.tree.expand(t).done(null,n.onUnexpectedError),e.autoExpanded.set(t.uri.toString()))})},t.prototype.autoReveal=function(e){void 0===e&&(e=!1);var t=this.configurationService.getConfiguration();t&&t.problems&&t.problems.autoReveal&&this.revealMarkersForCurrentActiveEditor(e)},t.prototype.revealMarkersForCurrentActiveEditor=function(e){void 0===e&&(e=!1);var t=this.getResourceForCurrentActiveFile();t?this.tree.isExpanded(t)&&this.hasSelectedMarkerFor(t)?(this.tree.reveal(this.tree.getSelection()[0],this.lastSelectedRelativeTop),e&&this.tree.setFocus(this.tree.getSelection()[0])):(this.tree.reveal(t,0),e&&(this.tree.setFocus(t),this.tree.setSelection([t]))):e&&(this.tree.setSelection([]),this.tree.focusFirst())},t.prototype.getResourceForCurrentActiveFile=function(){var e=this;if(this.currentActiveFile){var t=this.markersModel.filteredResources.filter(function(t){return e.currentActiveFile.toString()===t.uri.toString()});return t.length>0?t[0]:null}return null},t.prototype.hasSelectedMarkerFor=function(e){var t=this.tree.getSelection();return!!(t&&t.length>0&&t[0]instanceof E.Marker&&e.uri.toString()===t[0].marker.resource.toString())},t.prototype.getActionItem=function(t){return t.id===S.FilterAction.ID?this.instantiationService.createInstance(S.FilterInputBoxActionItem,this,t):e.prototype.getActionItem.call(this,t)},t.prototype.dispose=function(){this.delayedRefresh.cancel(),this.toDispose=l.dispose(this.toDispose),this.tree.dispose(),this.markersModel.dispose(),e.prototype.dispose.call(this)},t=s([i(0,_.IInstantiationService),i(1,h.IMarkerService),i(2,d.IEditorGroupService),i(3,g.IWorkbenchEditorService),i(4,f.IEventService),i(5,M.IConfigurationService),i(6,p.ITelemetryService)],t)}(v.Panel);t.MarkersPanel=P})}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/66f37fd2a99eb9d628dd374d81d78835b410c39b/vs/workbench/parts/markers/browser/markersPanel.js.map
