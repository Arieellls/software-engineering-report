// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lG9kv":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d8ca8d7ee9e283e3";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"fbvks":[function(require,module,exports) {
(()=>{
    function e(e, t, r, n) {
        Object.defineProperty(e, t, {
            get: r,
            set: n,
            enumerable: !0,
            configurable: !0
        });
    }
    var t, r, n, i, a, o, c, s, u, l, p, f, g, d, v, h, m = globalThis;
    function y(e) {
        return e && e.__esModule ? e.default : e;
    }
    var b = {}, _ = {}, w = m.parcelRequire08c1;
    null == w && ((w = function(e) {
        if (e in b) return b[e].exports;
        if (e in _) {
            var t = _[e];
            delete _[e];
            var r = {
                id: e,
                exports: {}
            };
            return b[e] = r, t.call(r.exports, r, r.exports), r.exports;
        }
        var n = Error("Cannot find module '" + e + "'");
        throw n.code = "MODULE_NOT_FOUND", n;
    }).register = function(e, t) {
        _[e] = t;
    }, m.parcelRequire08c1 = w);
    var S = w.register;
    S("juxiN", function(t, r) {
        e(t.exports, "register", ()=>n, (e)=>n = e);
        var n, i = new Map;
        n = function(e, t) {
            for(var r = 0; r < t.length - 1; r += 2)i.set(t[r], {
                baseUrl: e,
                path: t[r + 1]
            });
        };
    }), S("4qOVI", function(t, r) {
        e(t.exports, "getBundleURL", ()=>n, (e)=>n = e);
        var n, i = {};
        n = function(e) {
            var t = i[e];
            return t || (t = function() {
                try {
                    throw Error();
                } catch (t) {
                    var e = ("" + t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
                    if (e) return ("" + e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
                }
                return "/";
            }(), i[e] = t), t;
        };
    }), S("3N7lV", function(t, r) {
        e(t.exports, "state", ()=>a), e(t.exports, "loadRecipe", ()=>o), e(t.exports, "loadSearchResults", ()=>c), e(t.exports, "getResultsPage", ()=>s);
        var n = w("6EqfN"), i = w("OBRyv");
        let a = {
            recipe: {},
            search: {
                query: "",
                results: [],
                resultsPerPage: n.RES_PER_PAGE,
                page: 1
            }
        }, o = async function(e) {
            try {
                let { recipe: t } = (await (0, i.getJSON)(`${n.API_URL}/${e}`)).data;
                a.recipe = {
                    id: t.id,
                    title: t.title,
                    publisher: t.publisher,
                    sourceUrl: t.source_url,
                    image: t.image_url,
                    servings: t.servings,
                    cookingTime: t.cooking_time,
                    ingredients: t.ingredients
                };
            } catch (e) {
                console.log(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`);
            }
        }, c = async function(e) {
            try {
                a.search.query = e;
                let t = await (0, i.getJSON)(`${n.API_URL}?search=${e}`);
                a.search.results = t.data.recipes.map((e)=>({
                        id: e.id,
                        title: e.title,
                        publisher: e.publisher,
                        sourceUrl: e.source_url,
                        image: e.image_url
                    }));
            } catch (e) {
                console.log(e);
            }
        }, s = function(e = a.search.page) {
            a.search.page = e;
            let t = (e - 1) * a.search.resultsPerPage, r = e * a.search.resultsPerPage;
            return a.search.results.slice(t, r);
        };
    }), S("6EqfN", function(t, r) {
        e(t.exports, "API_URL", ()=>n), e(t.exports, "TIMEOUT_SEC", ()=>i), e(t.exports, "RES_PER_PAGE", ()=>a);
        let n = "https://forkify-api.herokuapp.com/api/v2/recipes", i = 10, a = 7;
    }), S("OBRyv", function(t, r) {
        e(t.exports, "getJSON", ()=>i);
        var n = w("6EqfN");
        let i = async function(e) {
            try {
                var t;
                let r = fetch(e), i = await Promise.race([
                    r,
                    (t = n.TIMEOUT_SEC, new Promise(function(e, r) {
                        setTimeout(function() {
                            r(Error(`Request took too long! Timeout after ${t} second`));
                        }, 1e3 * t);
                    }))
                ]), a = await i.json();
                if (!i.ok) throw Error(`${a.message} (${i.status})`);
                return a;
            } catch (e) {
                throw e;
            }
        };
    }), w("juxiN").register(w("4qOVI").getBundleURL("8NHJq"), JSON.parse('["8NHJq","controller.js","39zAh","icons.c14567a0.svg"]'));
    var E = {}, $ = {}, O = function(e) {
        return e && e.Math === Math && e;
    };
    $ = O("object" == typeof globalThis && globalThis) || O("object" == typeof window && window) || O("object" == typeof self && self) || O("object" == typeof m && m) || function() {
        return this;
    }() || $ || Function("return this")();
    var P = {}, j = {};
    P = !(j = function(e) {
        try {
            return !!e();
        } catch (e) {
            return !0;
        }
    })(function() {
        return 7 !== Object.defineProperty({}, 1, {
            get: function() {
                return 7;
            }
        })[1];
    });
    var M = {}, H = {};
    H = !j(function() {
        var e = (function() {}).bind();
        return "function" != typeof e || e.hasOwnProperty("prototype");
    });
    var A = Function.prototype.call;
    M = H ? A.bind(A) : function() {
        return A.apply(A, arguments);
    };
    var I = {}.propertyIsEnumerable, R = Object.getOwnPropertyDescriptor;
    i = R && !I.call({
        1: 2
    }, 1) ? function(e) {
        var t = R(this, e);
        return !!t && t.enumerable;
    } : I;
    var T = {};
    T = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        };
    };
    var k = {}, q = {}, L = {}, x = Function.prototype, N = x.call, F = H && x.bind.bind(N, N), C = {}, D = (L = H ? F : function(e) {
        return function() {
            return N.apply(e, arguments);
        };
    })({}.toString), U = L("".slice);
    C = function(e) {
        return U(D(e), 8, -1);
    };
    var B = Object, z = L("".split);
    q = j(function() {
        return !B("z").propertyIsEnumerable(0);
    }) ? function(e) {
        return "String" === C(e) ? z(e, "") : B(e);
    } : B;
    var J = {}, W = {};
    W = function(e) {
        return null == e;
    };
    var V = TypeError;
    J = function(e) {
        if (W(e)) throw new V("Can't call method on " + e);
        return e;
    }, k = function(e) {
        return q(J(e));
    };
    var G = {}, Q = {}, Y = {}, K = {}, X = {}, Z = "object" == typeof document && document.all, ee = (X = {
        all: Z,
        IS_HTMLDDA: void 0 === Z && void 0 !== Z
    }).all;
    K = X.IS_HTMLDDA ? function(e) {
        return "function" == typeof e || e === ee;
    } : function(e) {
        return "function" == typeof e;
    };
    var et = X.all;
    Y = X.IS_HTMLDDA ? function(e) {
        return "object" == typeof e ? null !== e : K(e) || e === et;
    } : function(e) {
        return "object" == typeof e ? null !== e : K(e);
    };
    var er = {}, en = {};
    en = function(e, t) {
        var r;
        return arguments.length < 2 ? (r = $[e], K(r) ? r : void 0) : $[e] && $[e][t];
    };
    var ei = {};
    ei = L({}.isPrototypeOf);
    var ea = {}, eo = {}, ec = {}, es = {};
    es = "undefined" != typeof navigator && String(navigator.userAgent) || "";
    var eu = $.process, el = $.Deno, ep = eu && eu.versions || el && el.version, ef = ep && ep.v8;
    ef && (o = (a = ef.split("."))[0] > 0 && a[0] < 4 ? 1 : +(a[0] + a[1])), !o && es && (!(a = es.match(/Edge\/(\d+)/)) || a[1] >= 74) && (a = es.match(/Chrome\/(\d+)/)) && (o = +a[1]), ec = o;
    var eg = $.String;
    ea = (eo = !!Object.getOwnPropertySymbols && !j(function() {
        var e = Symbol("symbol detection");
        return !eg(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && ec && ec < 41;
    })) && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    var ed = Object;
    er = ea ? function(e) {
        return "symbol" == typeof e;
    } : function(e) {
        var t = en("Symbol");
        return K(t) && ei(t.prototype, ed(e));
    };
    var ev = {}, eh = {}, em = {}, ey = String;
    em = function(e) {
        try {
            return ey(e);
        } catch (e) {
            return "Object";
        }
    };
    var eb = TypeError;
    eh = function(e) {
        if (K(e)) return e;
        throw new eb(em(e) + " is not a function");
    }, ev = function(e, t) {
        var r = e[t];
        return W(r) ? void 0 : eh(r);
    };
    var e_ = {}, ew = TypeError;
    e_ = function(e, t) {
        var r, n;
        if ("string" === t && K(r = e.toString) && !Y(n = M(r, e)) || K(r = e.valueOf) && !Y(n = M(r, e)) || "string" !== t && K(r = e.toString) && !Y(n = M(r, e))) return n;
        throw new ew("Can't convert object to primitive value");
    };
    var eS = {}, eE = {};
    eE = !1;
    var e$ = {}, eO = {}, eP = Object.defineProperty;
    eO = function(e, t) {
        try {
            eP($, e, {
                value: t,
                configurable: !0,
                writable: !0
            });
        } catch (r) {
            $[e] = t;
        }
        return t;
    };
    var ej = "__core-js_shared__";
    e$ = $[ej] || eO(ej, {}), (eS = function(e, t) {
        return e$[e] || (e$[e] = void 0 !== t ? t : {});
    })("versions", []).push({
        version: "3.33.2",
        mode: eE ? "pure" : "global",
        copyright: "\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var eM = {}, eH = {}, eA = Object;
    eH = function(e) {
        return eA(J(e));
    };
    var eI = L({}.hasOwnProperty);
    eM = Object.hasOwn || function(e, t) {
        return eI(eH(e), t);
    };
    var eR = {}, eT = 0, ek = Math.random(), eq = L(1..toString);
    eR = function(e) {
        return "Symbol(" + (void 0 === e ? "" : e) + ")_" + eq(++eT + ek, 36);
    };
    var eL = $.Symbol, ex = eS("wks"), eN = ea ? eL.for || eL : eL && eL.withoutSetter || eR, eF = TypeError, eC = (eM(ex, t = "toPrimitive") || (ex[t] = eo && eM(eL, t) ? eL[t] : eN("Symbol." + t)), ex[t]);
    Q = function(e, t) {
        if (!Y(e) || er(e)) return e;
        var r, n = ev(e, eC);
        if (n) {
            if (void 0 === t && (t = "default"), r = M(n, e, t), !Y(r) || er(r)) return r;
            throw new eF("Can't convert object to primitive value");
        }
        return void 0 === t && (t = "number"), e_(e, t);
    }, G = function(e) {
        var t = Q(e, "string");
        return er(t) ? t : t + "";
    };
    var eD = {}, eU = {}, eB = $.document, ez = Y(eB) && Y(eB.createElement);
    eU = function(e) {
        return ez ? eB.createElement(e) : {};
    }, eD = !P && !j(function() {
        return 7 !== Object.defineProperty(eU("div"), "a", {
            get: function() {
                return 7;
            }
        }).a;
    });
    var eJ = Object.getOwnPropertyDescriptor;
    n = P ? eJ : function(e, t) {
        if (e = k(e), t = G(t), eD) try {
            return eJ(e, t);
        } catch (e) {}
        if (eM(e, t)) return T(!M(i, e, t), e[t]);
    };
    var eW = {}, eV = {};
    eV = P && j(function() {
        return 42 !== Object.defineProperty(function() {}, "prototype", {
            value: 42,
            writable: !1
        }).prototype;
    });
    var eG = {}, eQ = String, eY = TypeError;
    eG = function(e) {
        if (Y(e)) return e;
        throw new eY(eQ(e) + " is not an object");
    };
    var eK = TypeError, eX = Object.defineProperty, eZ = Object.getOwnPropertyDescriptor, e0 = "enumerable", e1 = "configurable", e9 = "writable";
    c = P ? eV ? function(e, t, r) {
        if (eG(e), t = G(t), eG(r), "function" == typeof e && "prototype" === t && "value" in r && e9 in r && !r[e9]) {
            var n = eZ(e, t);
            n && n[e9] && (e[t] = r.value, r = {
                configurable: e1 in r ? r[e1] : n[e1],
                enumerable: e0 in r ? r[e0] : n[e0],
                writable: !1
            });
        }
        return eX(e, t, r);
    } : eX : function(e, t, r) {
        if (eG(e), t = G(t), eG(r), eD) try {
            return eX(e, t, r);
        } catch (e) {}
        if ("get" in r || "set" in r) throw new eK("Accessors not supported");
        return "value" in r && (e[t] = r.value), e;
    }, eW = P ? function(e, t, r) {
        return c(e, t, T(1, r));
    } : function(e, t, r) {
        return e[t] = r, e;
    };
    var e2 = {}, e4 = {}, e3 = Function.prototype, e7 = P && Object.getOwnPropertyDescriptor, e8 = eM(e3, "name") && (!P || P && e7(e3, "name").configurable), e5 = {}, e6 = L(Function.toString);
    K(e$.inspectSource) || (e$.inspectSource = function(e) {
        return e6(e);
    }), e5 = e$.inspectSource;
    var te = {}, tt = {}, tr = $.WeakMap;
    tt = K(tr) && /native code/.test(String(tr));
    var tn = {}, ti = eS("keys");
    tn = function(e) {
        return ti[e] || (ti[e] = eR(e));
    };
    var ta = {};
    ta = {};
    var to = "Object already initialized", tc = $.TypeError, ts = $.WeakMap;
    if (tt || e$.state) {
        var tu = e$.state || (e$.state = new ts);
        tu.get = tu.get, tu.has = tu.has, tu.set = tu.set, s = function(e, t) {
            if (tu.has(e)) throw new tc(to);
            return t.facade = e, tu.set(e, t), t;
        }, u = function(e) {
            return tu.get(e) || {};
        }, l = function(e) {
            return tu.has(e);
        };
    } else {
        var tl = tn("state");
        ta[tl] = !0, s = function(e, t) {
            if (eM(e, tl)) throw new tc(to);
            return t.facade = e, eW(e, tl, t), t;
        }, u = function(e) {
            return eM(e, tl) ? e[tl] : {};
        }, l = function(e) {
            return eM(e, tl);
        };
    }
    var tp = (te = {
        set: s,
        get: u,
        has: l,
        enforce: function(e) {
            return l(e) ? u(e) : s(e, {});
        },
        getterFor: function(e) {
            return function(t) {
                var r;
                if (!Y(t) || (r = u(t)).type !== e) throw new tc("Incompatible receiver, " + e + " required");
                return r;
            };
        }
    }).enforce, tf = te.get, tg = String, td = Object.defineProperty, tv = L("".slice), th = L("".replace), tm = L([].join), ty = P && !j(function() {
        return 8 !== td(function() {}, "length", {
            value: 8
        }).length;
    }), tb = String(String).split("String"), t_ = e4 = function(e, t, r) {
        "Symbol(" === tv(tg(t), 0, 7) && (t = "[" + th(tg(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!eM(e, "name") || e8 && e.name !== t) && (P ? td(e, "name", {
            value: t,
            configurable: !0
        }) : e.name = t), ty && r && eM(r, "arity") && e.length !== r.arity && td(e, "length", {
            value: r.arity
        });
        try {
            r && eM(r, "constructor") && r.constructor ? P && td(e, "prototype", {
                writable: !1
            }) : e.prototype && (e.prototype = void 0);
        } catch (e) {}
        var n = tp(e);
        return eM(n, "source") || (n.source = tm(tb, "string" == typeof t ? t : "")), e;
    };
    Function.prototype.toString = t_(function() {
        return K(this) && tf(this).source || e5(this);
    }, "toString"), e2 = function(e, t, r, n) {
        n || (n = {});
        var i = n.enumerable, a = void 0 !== n.name ? n.name : t;
        if (K(r) && e4(r, a, n), n.global) i ? e[t] = r : eO(t, r);
        else {
            try {
                n.unsafe ? e[t] && (i = !0) : delete e[t];
            } catch (e) {}
            i ? e[t] = r : c(e, t, {
                value: r,
                enumerable: !1,
                configurable: !n.nonConfigurable,
                writable: !n.nonWritable
            });
        }
        return e;
    };
    var tw = {}, tS = {}, tE = {}, t$ = {}, tO = {}, tP = {}, tj = Math.ceil, tM = Math.floor;
    tP = Math.trunc || function(e) {
        var t = +e;
        return (t > 0 ? tM : tj)(t);
    }, tO = function(e) {
        var t = +e;
        return t != t || 0 === t ? 0 : tP(t);
    };
    var tH = Math.max, tA = Math.min;
    t$ = function(e, t) {
        var r = tO(e);
        return r < 0 ? tH(r + t, 0) : tA(r, t);
    };
    var tI = {}, tR = {}, tT = Math.min;
    tR = function(e) {
        return e > 0 ? tT(tO(e), 9007199254740991) : 0;
    }, tI = function(e) {
        return tR(e.length);
    };
    var tk = function(e) {
        return function(t, r, n) {
            var i, a = k(t), o = tI(a), c = t$(n, o);
            if (e && r != r) {
                for(; o > c;)if ((i = a[c++]) != i) return !0;
            } else for(; o > c; c++)if ((e || c in a) && a[c] === r) return e || c || 0;
            return !e && -1;
        };
    }, tq = {
        includes: tk(!0),
        indexOf: tk(!1)
    }.indexOf, tL = L([].push);
    tE = function(e, t) {
        var r, n = k(e), i = 0, a = [];
        for(r in n)!eM(ta, r) && eM(n, r) && tL(a, r);
        for(; t.length > i;)eM(n, r = t[i++]) && (~tq(a, r) || tL(a, r));
        return a;
    };
    var tx = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
    ].concat("length", "prototype");
    p = Object.getOwnPropertyNames || function(e) {
        return tE(e, tx);
    }, f = Object.getOwnPropertySymbols;
    var tN = L([].concat);
    tS = en("Reflect", "ownKeys") || function(e) {
        var t = p(eG(e));
        return f ? tN(t, f(e)) : t;
    }, tw = function(e, t, r) {
        for(var i = tS(t), a = 0; a < i.length; a++){
            var o = i[a];
            eM(e, o) || r && eM(r, o) || c(e, o, n(t, o));
        }
    };
    var tF = {}, tC = /#|\.prototype\./, tD = function(e, t) {
        var r = tB[tU(e)];
        return r === tJ || r !== tz && (K(t) ? j(t) : !!t);
    }, tU = tD.normalize = function(e) {
        return String(e).replace(tC, ".").toLowerCase();
    }, tB = tD.data = {}, tz = tD.NATIVE = "N", tJ = tD.POLYFILL = "P";
    tF = tD, E = function(e, t) {
        var r, i, a, o, c, s = e.target, u = e.global, l = e.stat;
        if (r = u ? $ : l ? $[s] || eO(s, {}) : ($[s] || {}).prototype) for(i in t){
            if (o = t[i], a = e.dontCallGetSet ? (c = n(r, i)) && c.value : r[i], !tF(u ? i : s + (l ? "." : "#") + i, e.forced) && void 0 !== a) {
                if (typeof o == typeof a) continue;
                tw(o, a);
            }
            (e.sham || a && a.sham) && eW(o, "sham", !0), e2(r, i, o, e);
        }
    };
    var tW = {}, tV = {}, tG = Function.prototype, tQ = tG.apply, tY = tG.call;
    tV = "object" == typeof Reflect && Reflect.apply || (H ? tY.bind(tQ) : function() {
        return tY.apply(tQ, arguments);
    });
    var tK = {}, tX = {}, tZ = (tX = function(e) {
        if ("Function" === C(e)) return L(e);
    })(tX.bind);
    tK = function(e, t) {
        return eh(e), void 0 === t ? e : H ? tZ(e, t) : function() {
            return e.apply(t, arguments);
        };
    };
    var t0 = {};
    t0 = en("document", "documentElement");
    var t1 = {};
    t1 = L([].slice);
    var t9 = {}, t2 = TypeError;
    t9 = function(e, t) {
        if (e < t) throw new t2("Not enough arguments");
        return e;
    };
    var t4 = {};
    t4 = /(?:ipad|iphone|ipod).*applewebkit/i.test(es);
    var t3 = {};
    t3 = "process" === C($.process);
    var t7 = $.setImmediate, t8 = $.clearImmediate, t5 = $.process, t6 = $.Dispatch, re = $.Function, rt = $.MessageChannel, rr = $.String, rn = 0, ri = {}, ra = "onreadystatechange";
    j(function() {
        g = $.location;
    });
    var ro = function(e) {
        if (eM(ri, e)) {
            var t = ri[e];
            delete ri[e], t();
        }
    }, rc = function(e) {
        return function() {
            ro(e);
        };
    }, rs = function(e) {
        ro(e.data);
    }, ru = function(e) {
        $.postMessage(rr(e), g.protocol + "//" + g.host);
    };
    t7 && t8 || (t7 = function(e) {
        t9(arguments.length, 1);
        var t = K(e) ? e : re(e), r = t1(arguments, 1);
        return ri[++rn] = function() {
            tV(t, void 0, r);
        }, d(rn), rn;
    }, t8 = function(e) {
        delete ri[e];
    }, t3 ? d = function(e) {
        t5.nextTick(rc(e));
    } : t6 && t6.now ? d = function(e) {
        t6.now(rc(e));
    } : rt && !t4 ? (h = (v = new rt).port2, v.port1.onmessage = rs, d = tK(h.postMessage, h)) : $.addEventListener && K($.postMessage) && !$.importScripts && g && "file:" !== g.protocol && !j(ru) ? (d = ru, $.addEventListener("message", rs, !1)) : d = ra in eU("script") ? function(e) {
        t0.appendChild(eU("script"))[ra] = function() {
            t0.removeChild(this), ro(e);
        };
    } : function(e) {
        setTimeout(rc(e), 0);
    });
    var rl = (tW = {
        set: t7,
        clear: t8
    }).clear;
    E({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: $.clearImmediate !== rl
    }, {
        clearImmediate: rl
    });
    var rp = tW.set, rf = {}, rg = {};
    rg = "function" == typeof Bun && Bun && "string" == typeof Bun.version;
    var rd = $.Function, rv = /MSIE .\./.test(es) || rg && ((r = $.Bun.version.split(".")).length < 3 || "0" === r[0] && (r[1] < 3 || "3" === r[1] && "0" === r[2]));
    rf = function(e, t) {
        var r = t ? 2 : 1;
        return rv ? function(n, i) {
            var a = t9(arguments.length, 1) > r, o = K(n) ? n : rd(n), c = a ? t1(arguments, r) : [], s = a ? function() {
                tV(o, this, c);
            } : o;
            return t ? e(s, i) : e(s);
        } : e;
    };
    var rh = $.setImmediate ? rf(rp, !1) : rp;
    E({
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: $.setImmediate !== rh
    }, {
        setImmediate: rh
    });
    var rm = w("3N7lV"), ry = {};
    function rb(e, t, r, n, i) {
        var a, o, c;
        let s = [
            2,
            3,
            5
        ];
        if (!0 === i) for(let t = 3; t * t <= e; t += 2)e % t == 0 && s.push(t);
        let u = 0, l = e, p = t;
        for(; u <= s.length;)l % s[u] == 0 && p % s[u] == 0 ? (s[u], l /= s[u], p /= s[u]) : u++;
        return a = p, o = l, c = r, 1 === a && 1 === o ? (c = `${n}${(parseInt(c) + 1).toString()}`, `${c}`) : 0 === o ? `${n}${c}` : "0" == c ? `${n}${o}/${a}` : `${n}${c} ${o}/${a}`;
    }
    ry = function(e) {
        let t, r;
        if (e < 0 ? (e = Math.abs(e), t = "-") : t = "", void 0 === e) return "Your input was undefined.";
        if (isNaN(e)) return `"${e}" is not a number.`;
        if (1e16 == e) return `${t}9999999999999999`;
        if (e > 1e16) return "Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";
        if (Number.isInteger(e)) return `${t}${e}`;
        if (e < 1e-6) return "0";
        let n = e.toString(), i = n.split("."), a = i[0];
        if ("0" == r && "0" !== a) return a;
        if ("0" == r && "0" == a) return "0";
        if ("99" == (r = n.length >= 17 ? i[1].slice(0, i[1].length - 1) : i[1]) && "0" !== a) return `${a} 99/100`;
        if ("99" == r && "0" == a) return "99/100";
        if (1 - parseFloat(`.${r}`) < .0011 && (r = "999"), void 0 == r) return a;
        let o = r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);
        if (!o || !(r.length > 2)) {
            var c, s;
            return c = r, s = t, rb(parseInt(c, 10), Math.pow(10, c.length), a, s, !1);
        }
        {
            let e = o[0].split("").reverse().join(""), n = o[1].split("").reverse().join("");
            if (n.length > 1) {
                let e = n.split(""), t = 1;
                for(let r = 0; r < e.length; r++)t /= e[0] / e[r];
                1 === t && (n = e[0]);
            }
            return n.length > 1 && n.length % 2 == 0 && (n = parseInt(n.slice(0, n.length / 2), 10) - parseInt(n.slice(n.length / 2, n.length), 10) == 0 ? n.slice(0, n.length / 2) : n), function(e, t, r, n, i) {
                let a = e.length - r.length >= 1 ? e.length - r.length : 1, o = parseFloat(`0.${e}`), c = Math.pow(10, t.length);
                return rb(Math.round((o * c - o) * Math.pow(10, a)), (c - 1) * Math.pow(10, a), n, i, !0);
            }(r, n, e, a, t);
        }
    };
    var r_ = {};
    r_ = w("4qOVI").getBundleURL("8NHJq") + "icons.c14567a0.svg";
    class rw {
        _data;
        _parentWrapper = document.querySelector(".recipe-wrapper__right");
        render(e) {
            if (!e || Array.isArray(e) && 0 === e.length) return this.renderError();
            this._data = e;
            let t = this._generateMarkup();
            this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", t);
            let r = rE._generateRecipeImage();
            this._parentWrapper.insertAdjacentHTML("afterbegin", r);
        }
        _clear() {
            this._parentElement && (this._parentElement.innerHTML = "");
        }
        renderSpinner = function() {
            let e = `
        <div class="spinner">
          <svg>
            <use href="${y(r_)}#icon-loader"></use>
          </svg>
          <p>Loading...</p>
        </div>
      `;
            this._parentElement.innerHTML = "", this._parentElement.insertAdjacentHTML("afterbegin", e);
        };
        renderError(e = this._errorMessage) {
            let t = `
        <div class="error">
          <div>
            <svg>
              <use href="${y(r_)}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>
        `;
            this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", t);
        }
        renderMessage(e = this._message) {
            let t = `
        <div class="message">
          <div>
            <svg>
              <use href="${y(r_)}#icon-smile"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>
        `;
            this._clear(), this._parentElement.insertAdjacentHTML("afterbegin", t);
        }
        regenerateRepoterTitle() {
            return `
          <div class="headline">
            <div class="group-reporter">
              <h1>Architectural Design: Real World Project Presentation<br><span>Chapter 13 | BSCS 3B</span></h1>
            </div>
          </div>
        `;
        }
    }
    class rS extends rw {
        _parentElement = document.querySelector(".recipe");
        _parentWrapper = document.querySelector(".recipe-wrapper__right");
        _recipeImage = document.querySelector(".recipe-image");
        addHandlerRender(e) {
            [
                "hashchange",
                "load"
            ].forEach((t)=>window.addEventListener(t, e));
        }
        _generateMarkup() {
            return `
        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          </ul>
        </div>
    `;
        }
        _generateMarkupIngredient(e) {
            return `
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
                <use href="${y(r_)}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${e.quantity ? y(ry)(e.quantity) : ""}</div>
            <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
            </div>
        </li>
        `;
        }
        _generateRecipeImage() {
            let e = this._data && this._data.image ? `background-image: url('${this._data.image}');` : "";
            return e ? `
          <div class="recipe-image" style="${e}">
            <h2 class="recipe-title">${this._data.title}</h2>
          </div>
        ` : "";
        }
    }
    var rE = new rS;
    class r$ extends rw {
        _parentElement = document.querySelector(".results");
        _errorMessage = "No recipe found for your query! Please try again :)";
        _message = "";
        _generateMarkup() {
            return this._data.map(this._generateMarkupPreview).join("");
        }
        _generateMarkupPreview(e) {
            return `       
        <li class="preview">
            <a class="preview__link" href="#${e.id}">
                <figure class="preview__fig"ks>
                    <img src="${e.image}" alt="${e.title}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${e.title}</h4>
                    <p class="preview__publisher">${e.publisher}</p>
                </div>
            </a>
        </li>
        `;
        }
    }
    var rO = new r$;
    class rP {
        _parentElement = document.querySelector(".search");
        getQuery() {
            let e = this._parentElement.querySelector(".search__field").value;
            return this._clearInput, e;
        }
        _clearInput() {
            this._parentElement.querySelector(".search__field").value = "";
        }
        addHandlerSearch(e) {
            this._parentElement.addEventListener("submit", function(t) {
                t.preventDefault(), e();
            });
        }
    }
    var rj = new rP;
    class rM extends rw {
        _parentElement = document.querySelector(".pagination");
        addHandlerClick(e) {
            this._parentElement.addEventListener("click", function(t) {
                let r = t.target.closest(".btn--inline");
                if (!r) return;
                let n = +r.dataset.goto;
                console.log(n), e(n);
            });
        }
        _generateMarkup() {
            let e = this._data.page, t = Math.ceil(this._data.results.length / this._data.resultsPerPage);
            return 1 === e && t > 1 ? `
            <button data-goto="${e + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${e + 1}</span>
                <svg class="search__icon">
                    <use href="${y(r_)}#icon-arrow-right"></use>
                </svg>
            </button>
            ` : e === t && t > 1 ? `
            <button data-goto="${e - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${y(r_)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${e - 1}</span>
            </button>
            ` : e < t ? `
            <button data-goto="${e - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${y(r_)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${e - 1}</span>
            </button>
            <button data-goto="${e + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${e + 1}</span>
                <svg class="search__icon">
                    <use href="${y(r_)}#icon-arrow-right"></use>
                </svg>
            </button>
            ` : "";
        }
    }
    var rH = new rM;
    document.querySelector(".recipe");
    let rA = async function() {
        try {
            let e = window.location.hash.slice(1);
            if (!e) return;
            rE.renderSpinner(), await rm.loadRecipe(e), rE.render(rm.state.recipe);
        } catch (e) {
            console.log("HAHHAHHAHAHHHAHAHHAHHAHAHHAHAHHAHHAHAH " + e), rE.renderError();
        }
    }, rI = async function() {
        try {
            let e = rj.getQuery();
            if (!e) return;
            rO.renderSpinner(), await rm.loadSearchResults(e), rO.render(rm.getResultsPage(1)), rH.render(rm.state.search);
        } catch (e) {
            console.log(e);
        }
    };
    rE.addHandlerRender(rA), rj.addHandlerSearch(rI), rH.addHandlerClick(function(e) {
        rO.render(rm.getResultsPage(e)), rH.render(rm.state.search);
    });
})();

},{}]},["lG9kv","fbvks"], "fbvks", "parcelRequire08c1")

//# sourceMappingURL=index.e9e283e3.js.map
