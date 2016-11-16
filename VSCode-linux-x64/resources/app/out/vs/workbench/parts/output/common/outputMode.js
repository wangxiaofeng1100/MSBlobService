/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function(){var t=["vs/workbench/parts/output/common/outputMode","require","exports","vs/platform/instantiation/common/instantiation","vs/editor/common/modes","vs/editor/common/modes/abstractMode","vs/base/common/async","vs/editor/common/services/compatWorkerService","vs/platform/workspace/common/workspace"],e=function(e){for(var r=[],o=0,n=e.length;o<n;o++)r[o]=t[e[o]];return r},r=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},o=this&&this.__decorate||function(t,e,r,o){var n,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(i<3?n(c):i>3?n(e,r,c):n(e,r))||c);return i>3&&c&&Object.defineProperty(e,r,c),c},n=this&&this.__param||function(t,e){return function(r,o){e(r,o,t)}};define(t[0],e([1,2,3,4,5,6,7,8]),function(t,e,i,c,s,u,a,p){"use strict";var f=function(t){function e(e,r,o,n){var i=this;if(t.call(this,e.id,o),this._modeWorkerManager=new s.ModeWorkerManager(e,"vs/workbench/parts/output/common/outputWorker","OutputWorker",null,r),c.LinkProviderRegistry.register(this.getId(),{provideLinks:function(t,e){return u.wireCancellationToken(e,i._provideLinks(t.uri))}}),o.isInMainThread){var a=n.getWorkspace();a&&this._configure(a.resource)}}return r(e,t),e.prototype._worker=function(t){return this._modeWorkerManager.worker(t)},e.prototype._configure=function(t){return this._worker(function(e){return e.configure(t)})},e.prototype._provideLinks=function(t){return this._worker(function(e){return e.provideLinks(t)})},e.$_configure=a.CompatWorkerAttr(e,e.prototype._configure),e.$_provideLinks=a.CompatWorkerAttr(e,e.prototype._provideLinks),e=o([n(1,i.IInstantiationService),n(2,a.ICompatWorkerService),n(3,p.IWorkspaceContextService)],e)}(s.CompatMode);e.OutputMode=f})}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/66f37fd2a99eb9d628dd374d81d78835b410c39b/vs/workbench/parts/output/common/outputMode.js.map
