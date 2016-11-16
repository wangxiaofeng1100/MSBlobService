/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function(){var e=["require","exports","vs/nls!vs/workbench/parts/search/browser/searchViewlet","vs/base/common/strings","vs/base/browser/builder","vs/base/common/keyCodes","vs/workbench/parts/search/common/searchModel","vs/nls!vs/workbench/parts/search/browser/patternInputWidget","vs/nls","vs/css!vs/workbench/parts/search/browser/media/searchviewlet","vs/nls!vs/workbench/parts/search/browser/searchResultsView","vs/platform/instantiation/common/instantiation","vs/workbench/parts/search/browser/searchActions","vs/platform/workspace/common/workspace","vs/base/browser/ui/inputbox/inputBox","vs/workbench/parts/search/browser/patternInputWidget","vs/base/common/winjs.base","vs/workbench/parts/search/common/searchQuery","vs/base/browser/dom","vs/platform/search/common/search","vs/platform/configuration/common/configuration","vs/workbench/parts/search/browser/searchResultsView","vs/base/common/errors","vs/base/browser/ui/findinput/findInput","vs/base/common/platform","vs/base/common/objects","vs/base/common/event","vs/base/parts/tree/browser/actionsRenderer","vs/base/browser/ui/countBadge/countBadge","vs/base/browser/ui/fileLabel/fileLabel","vs/base/browser/ui/leftRightWidget/leftRightWidget","vs/base/parts/tree/browser/treeDefaults","vs/workbench/browser/actionBarRegistry","vs/css!vs/workbench/parts/search/browser/searchViewlet","vs/base/browser/ui/checkbox/checkbox","vs/editor/common/core/range","vs/base/common/glob","vs/base/browser/ui/widget","vs/workbench/parts/search/browser/searchViewlet","vs/editor/common/editorCommon","vs/base/common/lifecycle","vs/base/browser/ui/aria/aria","vs/base/common/types","vs/base/browser/keyboardEvent","vs/base/common/paths","vs/base/parts/tree/browser/treeImpl","vs/workbench/common/memento","vs/workbench/browser/actions/openSettings","vs/workbench/common/events","vs/workbench/services/group/common/groupService","vs/workbench/common/editor","vs/platform/files/common/files","vs/workbench/browser/viewlet","vs/workbench/parts/search/common/constants","vs/workbench/services/editor/common/editorService","vs/platform/storage/common/storage","vs/platform/contextview/browser/contextView","vs/platform/event/common/event","vs/platform/message/common/message","vs/platform/progress/common/progress","vs/platform/keybinding/common/keybinding","vs/platform/contextkey/common/contextkey","vs/platform/telemetry/common/telemetry","vs/workbench/parts/search/browser/searchWidget","vs/workbench/parts/search/common/replace","vs/base/common/severity"],t=function(t){for(var n=[],i=0,s=t.length;i<s;i++)n[i]=e[t[i]];return n};define(e[9],t([33]),{}),define(e[7],t([8,2]),function(e,t){return e.create("vs/workbench/parts/search/browser/patternInputWidget",t)}),define(e[10],t([8,2]),function(e,t){return e.create("vs/workbench/parts/search/browser/searchResultsView",t)});var n=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)};define(e[15],t([0,1,7,3,4,37,36,34,14,5,26]),function(e,t,i,s,r,o,a,c,l,u,h){"use strict";var p=function(e){function t(t,n,s){void 0===s&&(s=Object.create(null)),e.call(this),this.contextViewProvider=n,this._onSubmit=this._register(new h.Emitter),this.onSubmit=this._onSubmit.event,this.onOptionChange=null,this.width=s.width||100,this.placeholder=s.placeholder||"",this.ariaLabel=s.ariaLabel||i.localize(0,null),this.toDispose=[],this.pattern=null,this.domNode=null,this.inputNode=null,this.inputBox=null,this.render(),t.appendChild(this.domNode)}return n(t,e),t.prototype.dispose=function(){e.prototype.dispose.call(this),this.pattern.dispose(),this.toDispose.forEach(function(e){e()}),this.toDispose=[]},t.prototype.on=function(e,n){switch(e){case"keydown":case"keyup":r.$(this.inputBox.inputElement).on(e,n);break;case t.OPTION_CHANGE:this.onOptionChange=n}return this},t.prototype.setWidth=function(e){this.width=e,this.domNode.style.width=this.width+"px",this.contextViewProvider.layout(),this.setInputWidth()},t.prototype.getValue=function(){return this.inputBox.value},t.prototype.setValue=function(e){this.inputBox.value!==e&&(this.inputBox.value=e)},t.prototype.getGlob=function(){var e=this.getValue(),t=this.isGlobPattern();if(e){var n,i=Object.create(null);return n=t?a.splitGlobAware(e,",").map(function(e){return e.trim()}).filter(function(e){return!!e.length}):e.split(",").map(function(e){return s.trim(e.trim(),"/")}).filter(function(e){return!!e.length}).map(function(e){return"."===e[0]&&(e="*"+e),s.format("{{0}/**,**/{1}}",e,e)}),n.reduce(function(e,t){return i[t]=!0,i},i)}},t.prototype.select=function(){this.inputBox.select()},t.prototype.focus=function(){this.inputBox.focus()},t.prototype.isGlobPattern=function(){return this.pattern.checked},t.prototype.setIsGlobPattern=function(e){this.pattern.checked=e,this.setInputWidth()},t.prototype.setInputWidth=function(){var e=this.width-this.pattern.width();this.inputBox.width=e},t.prototype.render=function(){var e=this;this.domNode=document.createElement("div"),this.domNode.style.width=this.width+"px",r.$(this.domNode).addClass("monaco-findInput"),this.inputBox=new l.InputBox(this.domNode,this.contextViewProvider,{placeholder:this.placeholder||"",ariaLabel:this.ariaLabel||"",validationOptions:{validation:null,showMessage:!0}}),this.onkeyup(this.inputBox.inputElement,function(t){return e.onInputKeyUp(t)}),this.pattern=new c.Checkbox({actionClassName:"pattern",title:i.localize(1,null),isChecked:!1,onChange:function(t){e.onOptionChange(null),t||e.inputBox.focus(),e.setInputWidth(),e.isGlobPattern()?e.showGlobHelp():e.inputBox.hideMessage()}}),r.$(this.pattern.domNode).on("mouseover",function(){e.isGlobPattern()&&e.showGlobHelp()}),r.$(this.pattern.domNode).on(["mouseleave","mouseout"],function(){e.inputBox.hideMessage()}),this.setInputWidth();var t=document.createElement("div");t.className="controls",t.appendChild(this.pattern.domNode),this.domNode.appendChild(t)},t.prototype.showGlobHelp=function(){this.inputBox.showMessage({type:l.MessageType.INFO,formatContent:!0,content:i.localize(2,null)},!0)},t.prototype.onInputKeyUp=function(e){switch(e.keyCode){case u.KeyCode.Enter:return void this._onSubmit.fire();default:return}},t.OPTION_CHANGE="optionChange",t}(o.Widget);t.PatternInputWidget=p});var i=this&&this.__decorate||function(e,t,n,i){var s,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__param||function(e,t){return function(n,i){t(n,i,e)}};define(e[17],t([0,1,25,19,20]),function(e,t,n,r,o){"use strict";function a(e){var t=e&&e.files&&e.files.exclude,i=e&&e.search&&e.search.exclude;if(!t&&!i)return null;if(!t||!i)return t||i;var s=Object.create(null);return s=n.mixin(s,t),s=n.mixin(s,i,!0)}t.getExcludes=a;var c=function(){function e(e){this.configurationService=e}return e.prototype.text=function(e,t){return this.query(r.QueryType.Text,e,t)},e.prototype.file=function(e){return this.query(r.QueryType.File,null,e)},e.prototype.query=function(e,t,i){void 0===i&&(i={});var s=this.configurationService.getConfiguration(),r=a(s);return i.excludePattern?n.mixin(i.excludePattern,r,!1):i.excludePattern=r,{type:e,folderResources:i.folderResources,extraFileResources:i.extraFileResources,filePattern:i.filePattern,excludePattern:i.excludePattern,includePattern:i.includePattern,maxResults:i.maxResults,sortByScore:i.sortByScore,cacheKey:i.cacheKey,fileEncoding:i.fileEncoding,contentPattern:t}},e=i([s(0,o.IConfigurationService)],e)}();t.QueryBuilder=c}),define(e[21],t([0,1,10,3,24,22,44,18,4,16,27,28,29,30,31,32,6,13,35,5,12,11]),function(e,t,r,o,a,c,l,u,h,p,d,v,f,g,y,m,w,b,S,E,R,C){"use strict";var x=function(){function e(){}return e.prototype.getId=function(e,t){return t instanceof w.FileMatch?t.id():t instanceof w.Match?t.id():"root"},e.prototype.getChildren=function(e,t){var n=[];return t instanceof w.FileMatch?n=t.matches():t instanceof w.SearchResult&&(n=t.matches()),p.TPromise.as(n)},e.prototype.hasChildren=function(e,t){return t instanceof w.FileMatch||t instanceof w.SearchResult},e.prototype.getParent=function(e,t){var n=null;return t instanceof w.Match?n=t.parent():t instanceof w.FileMatch&&(n=t.parent()),p.TPromise.as(n)},e}();t.SearchDataSource=x;var I=function(){function e(){}return e.prototype.compare=function(e,t,n){return t instanceof w.FileMatch&&n instanceof w.FileMatch?t.resource().fsPath.localeCompare(n.resource().fsPath)||t.name().localeCompare(n.name()):t instanceof w.Match&&n instanceof w.Match?S.Range.compareRangesUsingStarts(t.range(),n.range()):void 0},e}();t.SearchSorter=I;var P=function(e){function t(t,n){e.call(this),this.viewlet=t,this.instantiationService=n}return n(t,e),t.prototype.hasActions=function(t,n){var i=t.getInput();return n instanceof w.FileMatch||i.searchModel.isReplaceActive()||n instanceof w.Match||e.prototype.hasActions.call(this,t,n)},t.prototype.getActions=function(t,n){var i=this;return e.prototype.getActions.call(this,t,n).then(function(e){var s=t.getInput();return n instanceof w.FileMatch&&(e.unshift(new R.RemoveAction(t,n)),s.searchModel.isReplaceActive()&&n.count()>0&&e.unshift(i.instantiationService.createInstance(R.ReplaceAllAction,t,n,i.viewlet))),n instanceof w.Match&&s.searchModel.isReplaceActive()&&e.unshift(i.instantiationService.createInstance(R.ReplaceAction,t,n,i.viewlet),new R.RemoveAction(t,n)),e})},t=i([s(1,C.IInstantiationService)],t)}(m.ContributableActionProvider),M=function(e){function t(t,n,i,s){e.call(this,{actionProvider:s.createInstance(P,n),actionRunner:t}),this.contextService=i,this.instantiationService=s}return n(t,e),t.prototype.getContentHeight=function(e,t){return 22},t.prototype.renderContents=function(e,t,n,i){var s=this;if(t instanceof w.FileMatch){var a=t,c=h.$(".filematch"),l=void 0,p=void 0,d=void 0;return l=function(e){return new f.FileLabel(e,a.resource(),s.contextService),null},p=function(e){var t=a.count();return new v.CountBadge(e,t,t>1?r.localize(0,null,t):r.localize(1,null,t))},d=new g.LeftRightWidget(c,l,p),c.appendTo(n),d.dispose.bind(d)}if(t instanceof w.Match){u.addClass(n,"linematch");var y=t,m=[],b=y.preview();m.push("<span>"),m.push(o.escape(b.before));var S=e.getInput().searchModel,E=S.isReplaceActive()&&!!S.replaceString;m.push('</span><span class="'+(E?"replace ":"")+'findInFileMatch">'),m.push(o.escape(b.inside)),E&&(m.push('</span><span class="replaceMatch">'),m.push(o.escape(y.replaceString))),m.push("</span><span>"),m.push(o.escape(b.after)),m.push("</span>"),h.$("a.plain").innerHtml(m.join(o.empty)).title((b.before+(E?y.replaceString:b.inside)+b.after).trim().substr(0,999)).appendTo(n)}return null},t=i([s(2,b.IWorkspaceContextService),s(3,C.IInstantiationService)],t)}(d.ActionsRenderer);t.SearchRenderer=M;var W=function(){function e(e){this.contextService=e}return e.prototype.getAriaLabel=function(e,t){if(t instanceof w.FileMatch){var n=this.contextService.toWorkspaceRelativePath(t.resource())||t.resource().fsPath;return r.localize(2,null,t.count(),t.name(),l.dirname(n))}if(t instanceof w.Match){var i=t,s=e.getInput();if(s.searchModel.isReplaceActive()){var o=i.preview();return r.localize(3,null,o.before+i.replaceString+o.after)}return r.localize(4,null,i.text())}},e=i([s(0,b.IWorkspaceContextService)],e)}();t.SearchAccessibilityProvider=W;var A=function(e){function t(t,n){var i=this;e.call(this,{clickBehavior:y.ClickBehavior.ON_MOUSE_DOWN}),this.viewlet=t,this.instantiationService=n,a.isMacintosh?(this.downKeyBindingDispatcher.set(E.CommonKeybindings.CTRLCMD_BACKSPACE,function(e,t){i.onDelete(e,t)}),this.upKeyBindingDispatcher.set(E.CommonKeybindings.WINCTRL_ENTER,this.onEnter.bind(this))):(this.downKeyBindingDispatcher.set(E.CommonKeybindings.DELETE,function(e,t){i.onDelete(e,t)}),this.upKeyBindingDispatcher.set(E.CommonKeybindings.CTRLCMD_ENTER,this.onEnter.bind(this))),this.downKeyBindingDispatcher.set(R.ReplaceAllAction.KEY_BINDING,function(e,t){i.onReplaceAll(e,t)}),this.downKeyBindingDispatcher.set(R.ReplaceAction.KEY_BINDING,function(e,t){i.onReplace(e,t)}),this.downKeyBindingDispatcher.set(E.CommonKeybindings.ESCAPE,function(e,t){i.onEscape(e,t)})}return n(t,e),t.prototype.onEscape=function(t,n){return!!this.viewlet.cancelSearch()||e.prototype.onEscape.call(this,t,n)},t.prototype.onDelete=function(e,t){var n=e.getInput(),i=!1,s=e.getFocus();return(s instanceof w.FileMatch||s instanceof w.Match&&n.searchModel.isReplaceActive())&&(new R.RemoveAction(e,s).run().done(null,c.onUnexpectedError),i=!0),i},t.prototype.onReplace=function(e,t){var n=e.getInput(),i=!1,s=e.getFocus();return s instanceof w.Match&&n.searchModel.isReplaceActive()&&(this.instantiationService.createInstance(R.ReplaceAction,e,s,this.viewlet).run().done(null,c.onUnexpectedError),i=!0),i},t.prototype.onReplaceAll=function(e,t){var n=!1,i=e.getFocus();return i instanceof w.FileMatch&&i.count()>0&&(this.instantiationService.createInstance(R.ReplaceAllAction,e,i,this.viewlet).run().done(null,c.onUnexpectedError),n=!0),n},t.prototype.onUp=function(t,n){return t.getNavigator().first()===t.getFocus()?(this.viewlet.moveFocusFromResults(),!0):e.prototype.onUp.call(this,t,n)},t.prototype.onSpace=function(t,n){var i=t.getFocus();return i instanceof w.Match?this.onEnter(t,n):void e.prototype.onSpace.call(this,t,n)},t=i([s(1,C.IInstantiationService)],t)}(y.DefaultController);t.SearchController=A;var T=function(){function e(){}return e.prototype.isVisible=function(e,t){return!(t instanceof w.FileMatch)||t.matches().length>0},e}();t.SearchFilter=T}),define(e[38],t([0,1,2,16,39,40,22,41,42,3,18,43,4,23,45,46,47,48,49,50,51,52,6,17,53,14,54,55,20,56,57,11,58,19,59,13,60,61,62,5,15,21,63,12,64,65,9]),function(e,t,r,o,a,c,l,u,h,p,d,v,f,g,y,m,w,b,S,E,R,C,x,I,P,M,W,A,T,F,k,N,O,L,K,D,G,V,_,B,U,z,q,H,Q,j){"use strict";var $=function(e){function t(t,n,i,s,r,o,a,c,l,u,h,p,d,v,f){var g=this;e.call(this,P.VIEWLET_ID,t),this.eventService=n,this.editorService=i,this.editorGroupService=s,this.progressService=r,this.messageService=o,this.storageService=a,this.contextViewService=c,this.instantiationService=l,this.configurationService=u,this.contextService=h,this.searchService=p,this.contextKeyService=d,this.keybindingService=v,this.replaceService=f,this.toDispose=[],this.viewletVisible=P.SearchViewletVisible.bindTo(d),this.callOnModelChange=[],this.queryBuilder=this.instantiationService.createInstance(I.QueryBuilder),this.viewletSettings=this.getMemento(a,m.Scope.WORKSPACE),this.toUnbind.push(this.eventService.addListener2(R.EventType.FILE_CHANGES,function(e){return g.onFilesChanged(e)})),this.toUnbind.push(this.eventService.addListener2(b.EventType.UNTITLED_FILE_SAVED,function(e){return g.onUntitledFileSaved(e)})),this.toUnbind.push(this.configurationService.onDidUpdateConfiguration(function(e){return g.onConfigurationUpdated(e.config)}))}return n(t,e),t.prototype.onConfigurationUpdated=function(e){this.updateGlobalPatternExclusions(e)},t.prototype.create=function(t){var n=this;e.prototype.create.call(this,t),this.viewModel=this.instantiationService.createInstance(x.SearchModel);var i;this.domNode=t.div({"class":"search-viewlet"},function(e){i=e}),i.div({"class":["search-widgets-container"]},function(e){n.searchWidgetsContainer=e}),this.createSearchWidget(this.searchWidgetsContainer);var s=this.viewletSettings["query.filePatterns"]||"",a=this.viewletSettings["query.folderExclusions"]||"",c=this.viewletSettings["query.exclusionsUsePattern"],l=this.viewletSettings["query.includesUsePattern"],u=this.viewletSettings["query.folderIncludes"]||"";this.queryDetails=this.searchWidgetsContainer.div({"class":["query-details"]},function(e){e.div({"class":"more",tabindex:0,role:"button",title:r.localize(0,null)}).on(d.EventType.CLICK,function(e){d.EventHelper.stop(e),n.toggleFileTypes(!0)}).on(d.EventType.KEY_UP,function(e){var t=new v.StandardKeyboardEvent(e);(t.equals(B.CommonKeybindings.ENTER)||t.equals(B.CommonKeybindings.SPACE))&&(d.EventHelper.stop(e),n.toggleFileTypes())}),e.div({"class":"file-types"},function(e){var t=r.localize(1,null);e.element("h4",{text:t}),n.inputPatternIncludes=new U.PatternInputWidget(e.getContainer(),n.contextViewService,{ariaLabel:r.localize(2,null)}),n.inputPatternIncludes.setIsGlobPattern(l),n.inputPatternIncludes.setValue(u),n.inputPatternIncludes.on(d.EventType.KEY_DOWN,function(e){var t=new v.StandardKeyboardEvent(e);t.equals(B.CommonKeybindings.UP_ARROW)?(d.EventHelper.stop(e),n.searchWidget.focus(!0,!0)):t.equals(B.CommonKeybindings.DOWN_ARROW)&&(d.EventHelper.stop(e),n.inputPatternExclusions.focus(),n.inputPatternExclusions.select())}).on(g.FindInput.OPTION_CHANGE,function(e){n.onQueryChanged(!1)}),n.inputPatternIncludes.onSubmit(function(){return n.onQueryChanged(!0)})}),e.div({"class":"file-types"},function(e){var t=r.localize(3,null);e.element("h4",{text:t}),n.inputPatternExclusions=new U.PatternInputWidget(e.getContainer(),n.contextViewService,{ariaLabel:r.localize(4,null)}),n.inputPatternExclusions.setIsGlobPattern(c),n.inputPatternExclusions.setValue(a),n.inputPatternExclusions.on(d.EventType.KEY_DOWN,function(e){var t=new v.StandardKeyboardEvent(e);t.equals(B.CommonKeybindings.UP_ARROW)?(d.EventHelper.stop(e),n.inputPatternIncludes.focus(),n.inputPatternIncludes.select()):t.equals(B.CommonKeybindings.DOWN_ARROW)&&(d.EventHelper.stop(e),n.selectTreeIfNotSelected())}).on(g.FindInput.OPTION_CHANGE,function(e){n.onQueryChanged(!1)}),n.inputPatternExclusions.onSubmit(function(){return n.onQueryChanged(!0)})}),n.inputPatternGlobalExclusionsContainer=e.div({"class":"file-types global-exclude disabled"},function(e){var t=r.localize(5,null);e.element("h4",{text:t}),n.inputPatternGlobalExclusions=new M.InputBox(e.getContainer(),n.contextViewService,{actions:[n.instantiationService.createInstance(H.ConfigureGlobalExclusionsAction)],ariaLabel:r.localize(6,null)}),n.inputPatternGlobalExclusions.inputElement.readOnly=!0,f.$(n.inputPatternGlobalExclusions.inputElement).attr("aria-readonly","true"),f.$(n.inputPatternGlobalExclusions.inputElement).addClass("disabled")}).hide()}).getHTMLElement(),this.messages=i.div({"class":"messages"}).hide().clone(),this.createSearchResultsView(i),this.actionRegistry={};var h=[new H.CollapseAllAction(this),new H.RefreshAction(this),new H.ClearSearchResultsAction(this)];return h.forEach(function(e){n.actionRegistry[e.id]=e}),""===s&&""===a&&""===u||this.toggleFileTypes(!0,!0,!0),this.updateGlobalPatternExclusions(this.configurationService.getConfiguration()),this.toUnbind.push(this.viewModel.searchResult.onChange(function(e){return n.onSearchResultsChanged(e)})),o.TPromise.as(null)},Object.defineProperty(t.prototype,"searchAndReplaceWidget",{get:function(){return this.searchWidget},enumerable:!0,configurable:!0}),t.prototype.createSearchWidget=function(e){var n=this,i=this.viewletSettings["query.contentPattern"]||"",s=this.viewletSettings["query.regex"]===!0,r=this.viewletSettings["query.wholeWords"]===!0,o=this.viewletSettings["query.caseSensitive"]===!0;this.searchWidget=new q.SearchWidget(e,this.contextViewService,{value:i,isRegex:s,isCaseSensitive:o,isWholeWords:r},this.contextKeyService,this.keybindingService,this.instantiationService),this.storageService.getBoolean(t.SHOW_REPLACE_STORAGE_KEY,A.StorageScope.WORKSPACE,!0)&&this.searchWidget.toggleReplace(!0),this.toUnbind.push(this.searchWidget),this.toUnbind.push(this.searchWidget.onSearchSubmit(function(e){return n.onQueryChanged(e)})),this.toUnbind.push(this.searchWidget.onSearchCancel(function(){return n.cancelSearch()})),this.toUnbind.push(this.searchWidget.searchInput.onDidOptionChange(function(e){return n.onQueryChanged(!0,e)})),this.toUnbind.push(this.searchWidget.onReplaceToggled(function(){return n.onReplaceToggled()})),this.toUnbind.push(this.searchWidget.onReplaceStateChange(function(e){n.viewModel.replaceActive=e,n.tree.refresh()})),this.toUnbind.push(this.searchWidget.onReplaceValueChanged(function(e){n.viewModel.replaceString=n.searchWidget.getReplaceValue(),n.refreshInputs(),n.tree.refresh()})),this.toUnbind.push(this.searchWidget.onKeyDownArrow(function(){n.showsFileTypes()?n.toggleFileTypes(!0,n.showsFileTypes()):n.selectTreeIfNotSelected()})),this.toUnbind.push(this.searchWidget.onReplaceAll(function(){return n.replaceAll()}))},t.prototype.onReplaceToggled=function(){this.layout(this.size),this.storageService.store(t.SHOW_REPLACE_STORAGE_KEY,this.searchAndReplaceWidget.isReplaceShown(),A.StorageScope.WORKSPACE)},t.prototype.onSearchResultsChanged=function(e){var t=this;return this.refreshTree(e).then(function(){t.searchWidget.setReplaceAllActionState(!t.viewModel.searchResult.isEmpty())})},t.prototype.refreshTree=function(e){var t=this;return e?e.added||e.removed?this.tree.refresh(this.viewModel.searchResult).then(function(){e.added&&e.elements.forEach(function(e){t.autoExpandFileMatch(e,!0)})}):1===e.elements.length?this.tree.refresh(e.elements[0]):this.tree.refresh(e.elements):this.tree.refresh(this.viewModel.searchResult)},t.prototype.refreshInputs=function(){var e=this;this.viewModel.searchResult.matches().forEach(function(t){e.replaceService.refreshInput(t)})},t.prototype.replaceAll=function(){var e=this;if(0!==this.viewModel.searchResult.count()){var t=this.progressService.show(100),n=this.viewModel.searchResult.count(),i=this.viewModel.searchResult.fileCount(),s=this.searchWidget.getReplaceValue()||"",o=s?r.localize(7,null,n,i,s):r.localize(8,null,n,i),a={title:r.localize(9,null),message:s?r.localize(10,null,n,i,s):r.localize(11,null,n,i),primaryButton:r.localize(12,null)};this.messageService.confirm(a)&&(this.searchWidget.setReplaceAllActionState(!1),this.viewModel.searchResult.replaceAll(t).then(function(){t.done(),e.showMessage(o)},function(n){t.done(),l.isPromiseCanceledError(n),e.messageService.show(j["default"].Error,n)}))}},t.prototype.showMessage=function(e){return this.messages.empty().show().asContainer().div({"class":"message",text:e})},t.prototype.createSearchResultsView=function(e){var t=this;e.div({"class":"results"},function(e){t.results=e;var n=new z.SearchDataSource,i=t.instantiationService.createInstance(z.SearchRenderer,t.getActionRunner(),t);t.tree=new y.Tree(e.getHTMLElement(),{dataSource:n,renderer:i,sorter:new z.SearchSorter,filter:new z.SearchFilter,controller:new z.SearchController(t,t.instantiationService),accessibilityProvider:t.instantiationService.createInstance(z.SearchAccessibilityProvider)},{ariaLabel:r.localize(13,null)}),t.tree.setInput(t.viewModel.searchResult),t.toUnbind.push(i),t.toUnbind.push(t.tree.addListener2("selection",function(e){var n,i=e.payload&&"keyboard"===e.payload.origin;n=i?t.tree.getFocus():e.selection[0];var s=e.payload&&e.payload.originalEvent,r=e.payload&&"mouse"===e.payload.origin&&s&&2===s.detail;r&&s.preventDefault();var o=s&&(s.ctrlKey||s.metaKey),a=i&&s.keyCode===B.KeyCode.Enter||r;if(n instanceof x.Match){var c=n;t.currentSelectedFileMatch&&t.currentSelectedFileMatch.setSelectedMatch(null),t.currentSelectedFileMatch=c.parent(),t.currentSelectedFileMatch.setSelectedMatch(c),t.onFocus(c,!a,o,r)}}))})},t.prototype.updateGlobalPatternExclusions=function(e){if(this.inputPatternGlobalExclusionsContainer){var t=I.getExcludes(e);if(t){var n=Object.getOwnPropertyNames(t).filter(function(e){return t[e]===!0||"string"==typeof t[e].when}).map(function(e){return t[e]===!0?e:r.localize(14,null,e,t[e].when)});if(n.length){var i=n.join(", ");this.inputPatternGlobalExclusions.value=i,this.inputPatternGlobalExclusions.inputElement.title=i,this.inputPatternGlobalExclusionsContainer.show()}else this.inputPatternGlobalExclusionsContainer.hide()}}},t.prototype.setVisible=function(t){var n;if(this.viewletVisible.set(t),t?(n=e.prototype.setVisible.call(this,t),this.tree.onVisible()):(this.tree.onHidden(),n=e.prototype.setVisible.call(this,t)),this.viewModel&&this.viewModel.searchResult.toggleHighlights(t),t&&!this.editorService.getActiveEditor()){var i=this.tree.getFocus();i&&this.onFocus(i)}return n},t.prototype.focus=function(){e.prototype.focus.call(this);var t=this.getSearchTextFromEditor();t&&this.searchWidget.searchInput.setValue(t),this.searchWidget.focus()},t.prototype.moveFocusFromResults=function(){this.showsFileTypes()?this.toggleFileTypes(!0,!0,!1,!0):this.searchWidget.focus(!0,!0)},t.prototype.reLayout=function(){if(!this.isDisposed){this.searchWidget.setWidth(this.size.width-25),this.inputPatternExclusions.setWidth(this.size.width-28),this.inputPatternIncludes.setWidth(this.size.width-28),this.inputPatternGlobalExclusions.width=this.size.width-28-24;var e=this.size.height-d.getTotalHeight(this.searchWidgetsContainer.getContainer())-6;this.results.style({height:e+"px"}),this.tree.layout(e)}},t.prototype.layout=function(e){this.size=e,this.reLayout()},t.prototype.getControl=function(){return this.tree},t.prototype.clearSearchResults=function(){this.viewModel.searchResult.clear(),this.showEmptyStage(),this.searchWidget.clear(),this.viewModel.cancelSearch()},t.prototype.cancelSearch=function(){return!!this.viewModel.cancelSearch()&&(this.searchWidget.focus(),!0)},t.prototype.selectTreeIfNotSelected=function(){if(this.tree.getInput()){this.tree.DOMFocus();var e=this.tree.getSelection();0===e.length&&this.tree.focusNext()}},t.prototype.getSearchTextFromEditor=function(){if(!this.editorService.getActiveEditor())return null;var e=this.editorService.getActiveEditor().getControl();if(!e||!h.isFunction(e.getEditorType)||e.getEditorType()!==a.EditorType.ICodeEditor)return null;var t=e.getSelection();if(t&&!t.isEmpty()&&t.startLineNumber===t.endLineNumber){var n=e.getModel().getLineContent(t.startLineNumber);return n=n.substring(t.startColumn-1,t.endColumn-1)}return null},t.prototype.showsFileTypes=function(){return d.hasClass(this.queryDetails,"more")},t.prototype.toggleFileTypes=function(e,t,n,i){var s="more";t="undefined"==typeof t?!d.hasClass(this.queryDetails,s):Boolean(t),n=Boolean(n),t?(d.addClass(this.queryDetails,s),e&&(i?(this.inputPatternExclusions.focus(),this.inputPatternExclusions.select()):(this.inputPatternIncludes.focus(),this.inputPatternIncludes.select()))):(d.removeClass(this.queryDetails,s),e&&this.searchWidget.focus()),!n&&this.size&&this.layout(this.size)},t.prototype.searchInFolder=function(e){this.showsFileTypes()||this.toggleFileTypes(!0,!0);var t=this.contextService.toWorkspaceRelativePath(e);t&&(this.inputPatternIncludes.setIsGlobPattern(!1),this.inputPatternIncludes.setValue(t),this.searchWidget.focus(!1))},t.prototype.onQueryChanged=function(e,n){var i=this.searchWidget.searchInput.getRegex(),s=this.searchWidget.searchInput.getWholeWords(),r=this.searchWidget.searchInput.getCaseSensitive(),o=this.searchWidget.searchInput.getValue(),a=this.inputPatternExclusions.getValue().trim(),c=this.inputPatternExclusions.isGlobPattern(),l=this.inputPatternIncludes.getValue().trim(),u=this.inputPatternIncludes.isGlobPattern();if(this.viewletSettings["query.contentPattern"]=o,this.viewletSettings["query.regex"]=i,this.viewletSettings["query.wholeWords"]=s,this.viewletSettings["query.caseSensitive"]=r,this.viewletSettings["query.folderExclusions"]=a,this.viewletSettings["query.exclusionsUsePattern"]=c,this.viewletSettings["query.folderIncludes"]=l,this.viewletSettings["query.includesUsePattern"]=u,e&&0!==o.length){if(i){var h=void 0;try{h=new RegExp(o)}catch(d){return}if(p.regExpLeadsToEndlessLoop(h))return}var v={pattern:o,isRegExp:i,isCaseSensitive:r,isWordMatch:s},f=this.inputPatternExclusions.getGlob(),g=this.inputPatternIncludes.getGlob(),y={folderResources:this.contextService.getWorkspace()?[this.contextService.getWorkspace().resource]:[],extraFileResources:E.getOutOfWorkspaceEditorResources(this.editorGroupService,this.contextService),excludePattern:f,maxResults:t.MAX_TEXT_RESULTS,includePattern:g};this.onQueryTriggered(this.queryBuilder.text(v,y),a,l),n||this.searchWidget.focus(!1)}},t.prototype.autoExpandFileMatch=function(e,t){var n=e.matches().length;n<10||t&&1===this.viewModel.searchResult.count()&&n<50?this.tree.expand(e).done(null,l.onUnexpectedError):this.tree.collapse(e).done(null,l.onUnexpectedError)},t.prototype.onQueryTriggered=function(e,t,n){var i=this;this.viewModel.cancelSearch();var s=100,o=this.progressService.show(s),a=0;this.loading=!0,this.searchWidget.searchInput.clearMessage(),this.showEmptyStage();var c=Object.create(null),h=function(e){var t=i.viewModel.searchResult.matches();t.forEach(function(t){c[t.id()]||(c[t.id()]=!0,i.autoExpandFileMatch(t,e))})},p=!1,v=function(e){p=!0,e?(o.worked(s-a),setTimeout(function(){return o.done()},200)):o.done(),i.onSearchResultsChanged().then(function(){return h(!0)}),i.viewModel.replaceString=i.searchWidget.getReplaceValue();var c=!i.viewModel.searchResult.isEmpty();if(i.loading=!1,i.actionRegistry.refresh.enabled=!0,i.actionRegistry["vs.tree.collapse"].enabled=c,i.actionRegistry.clearSearchResults.enabled=c,e&&e.limitHit&&i.searchWidget.searchInput.showMessage({content:r.localize(15,null),type:M.MessageType.WARNING}),c)i.viewModel.searchResult.toggleHighlights(!0),u.status(r.localize(24,null,i.viewModel.searchResult.count(),i.viewModel.searchResult.fileCount()));else{var v=!!t,g=!!n,y=void 0;y=e?g&&v?r.localize(17,null,n,t):g?r.localize(18,null,n):v?r.localize(19,null,t):r.localize(20,null):r.localize(16,null),u.status(y),i.tree.onHidden(),i.results.hide();var m=i.showMessage(y);e?g||v?f.$(m).a({"class":["pointer","prominent"],tabindex:"0",text:r.localize(22,null)}).on(d.EventType.CLICK,function(e){d.EventHelper.stop(e,!1),i.inputPatternExclusions.setValue(""),i.inputPatternIncludes.setValue(""),i.onQueryChanged(!0)}):f.$(m).a({"class":["pointer","prominent"],tabindex:"0",text:r.localize(23,null)}).on(d.EventType.CLICK,function(e){d.EventHelper.stop(e,!1);var t=i.instantiationService.createInstance(w.OpenGlobalSettingsAction,w.OpenGlobalSettingsAction.ID,w.OpenGlobalSettingsAction.LABEL);t.run().done(function(){return t.dispose()},l.onUnexpectedError)}):f.$(m).a({"class":["pointer","prominent"],text:r.localize(21,null)}).on(d.EventType.CLICK,function(e){d.EventHelper.stop(e,!1),i.onQueryChanged(!0)})}},g=function(e){l.isPromiseCanceledError(e)?v(null):(i.loading=!1,p=!0,o.done(),i.messageService.show(2,e))},y=0,m=0,b=0,S=function(e){e.total&&(y=e.total),e.worked&&(m=e.worked)},E=setInterval(function(){if(p)return void window.clearInterval(E);var e=!0;if(y>0&&m>0){var t=Math.round(m/y*100);t>a&&(o.worked(t-a),a=t,e=!1)}e&&a<90&&(a++,o.worked(1));var n=i.viewModel.searchResult.fileCount();b!==n&&(b=n,i.tree.refresh().then(function(){h(!1)}).done(null,l.onUnexpectedError)),n>0&&(i.actionRegistry["vs.tree.collapse"].enabled||(i.actionRegistry["vs.tree.collapse"].enabled=!0))},200);this.searchWidget.setReplaceAllActionState(!1),this.replaceService.disposeAllInputs(),this.viewModel.search(e).done(v,g,S)},t.prototype.showEmptyStage=function(){this.actionRegistry.refresh.enabled=!1,this.actionRegistry["vs.tree.collapse"].enabled=!1,this.actionRegistry.clearSearchResults.enabled=!1,this.replaceService.disposeAllInputs(),this.messages.hide(),this.results.show(),this.tree.onVisible(),this.currentSelectedFileMatch=null},t.prototype.onFocus=function(e,t,n,i){return e instanceof x.Match?(this.telemetryService.publicLog("searchResultChosen"),this.viewModel.isReplaceActive()&&this.viewModel.replaceString?this.replaceService.openReplacePreviewEditor(e,t,n,i):this.open(e,t,n,i)):o.TPromise.as(!0)},t.prototype.open=function(e,t,n,i){var s=this.getSelectionFrom(e),r=e instanceof x.Match?e.parent().resource():e.resource();return this.editorService.openEditor({resource:r,options:{preserveFocus:t,pinned:i,selection:s,revealIfVisible:!0}},n)},t.prototype.getSelectionFrom=function(e){var t=null;if(e instanceof x.Match&&(t=e),e instanceof x.FileMatch&&e.count()>0&&(t=e.matches()[e.matches().length-1]),t){var n=t.range();if(this.viewModel.isReplaceActive()){var i=t.replaceString;
return{startLineNumber:n.startLineNumber,startColumn:n.startColumn+i.length,endLineNumber:n.startLineNumber,endColumn:n.startColumn+i.length}}return n}},t.prototype.onUntitledFileSaved=function(e){if(this.viewModel)for(var t=this.viewModel.searchResult.matches(),n=0,i=t.length;n<i;n++)e.resource.toString()===t[n].resource().toString()&&this.viewModel.searchResult.remove(t[n])},t.prototype.onFilesChanged=function(e){if(this.viewModel)for(var t=this.viewModel.searchResult.matches(),n=0,i=t.length;n<i;n++)e.contains(t[n].resource(),R.FileChangeType.DELETED)&&this.viewModel.searchResult.remove(t[n])},t.prototype.getActions=function(){return[this.actionRegistry.refresh,this.actionRegistry["vs.tree.collapse"],this.actionRegistry.clearSearchResults]},t.prototype.dispose=function(){this.isDisposed=!0,this.toDispose=c.dispose(this.toDispose),this.tree&&this.tree.dispose(),this.searchWidget.dispose(),this.inputPatternIncludes.dispose(),this.inputPatternExclusions.dispose(),this.viewModel.dispose(),e.prototype.dispose.call(this)},t.MAX_TEXT_RESULTS=2048,t.SHOW_REPLACE_STORAGE_KEY="vs.search.show.replace",t=i([s(0,_.ITelemetryService),s(1,k.IEventService),s(2,W.IWorkbenchEditorService),s(3,S.IEditorGroupService),s(4,K.IProgressService),s(5,O.IMessageService),s(6,A.IStorageService),s(7,F.IContextViewService),s(8,N.IInstantiationService),s(9,T.IConfigurationService),s(10,D.IWorkspaceContextService),s(11,L.ISearchService),s(12,V.IContextKeyService),s(13,G.IKeybindingService),s(14,Q.IReplaceService)],t)}(C.Viewlet);t.SearchViewlet=$})}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/66f37fd2a99eb9d628dd374d81d78835b410c39b/vs/workbench/parts/search/browser/searchViewlet.js.map
