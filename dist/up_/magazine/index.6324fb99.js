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
})({"1BUxe":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f9e0441f6324fb99";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6Vptd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../util/index.js");
var _indexJs1 = require("../modules/index.js");
// DOM
const container = document.querySelector(".container");
const root = document.querySelector("#root");
/* 
  At initialization we fetch data for the current website from the database.
  Then we create a toolbar, a footer and a home page. They are cached for later use. 
*/ async function initApp() {
    (0, _indexJs.store).page = "home";
    // create toolbar
    const toolbar = new (0, _indexJs1.Toolbar)("spa");
    toolbar.render();
    // create home page
    const home = new (0, _indexJs1.Home)();
    home.render();
    // create footer
    const footer = new (0, _indexJs1.Footer)("spa");
    footer.render();
    // cache the elements
    (0, _indexJs.cache).set("home", home);
    (0, _indexJs.cache).set("toolbar", toolbar);
    (0, _indexJs.cache).set("footer", footer);
    // set History API
    window.history.pushState({
        page: (0, _indexJs.store).page
    }, "");
    // fade in the page
    (0, _indexJs1.fadeIn)((0, _indexJs1.elements)).then(()=>{
        root.classList.add("loaded");
        container.classList.add("loaded");
    // footerDom.classList.add("loaded"); 
    });
    return true;
}
exports.default = initApp;

},{"../util/index.js":"6gmsK","../modules/index.js":"aOVNo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6gmsK":[function(require,module,exports) {
// Export modules for easy access elsewhere
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cache", ()=>(0, _cacheJsDefault.default));
parcelHelpers.export(exports, "db", ()=>(0, _dbJsDefault.default));
parcelHelpers.export(exports, "getDB", ()=>(0, _dbJs.getDB));
parcelHelpers.export(exports, "getDataFromDB", ()=>(0, _dbJs.getDataFromDB));
parcelHelpers.export(exports, "store", ()=>(0, _storeJsDefault.default));
var _cacheJs = require("./cache.js");
var _cacheJsDefault = parcelHelpers.interopDefault(_cacheJs);
var _dbJs = require("./db.js");
var _dbJsDefault = parcelHelpers.interopDefault(_dbJs);
var _storeJs = require("./store.js");
var _storeJsDefault = parcelHelpers.interopDefault(_storeJs);

},{"./cache.js":"8zrej","./db.js":"8MXK7","./store.js":"3LADJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zrej":[function(require,module,exports) {
// Simple cache to store pages once they are created
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const cache = new Map();
exports.default = cache;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8MXK7":[function(require,module,exports) {
// Mock database with two methods
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDataFromDB", ()=>getDataFromDB);
parcelHelpers.export(exports, "getDB", ()=>getDB);
var _frostJs = require("./data/frost.js");
var _frostJsDefault = parcelHelpers.interopDefault(_frostJs);
var _magazineJs = require("./data/magazine.js");
var _magazineJsDefault = parcelHelpers.interopDefault(_magazineJs);
const db = {
    frost: (0, _frostJsDefault.default),
    magazine: (0, _magazineJsDefault.default)
};
const getDataFromDB = (website, pageNum)=>{
    return db[website].page.find((page)=>page.id == pageNum);
};
const getDB = (website)=>{
    return db[website];
};
exports.default = db;

},{"./data/frost.js":"fEWC6","./data/magazine.js":"ecUd2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fEWC6":[function(require,module,exports) {
// Mock database for the Frost website
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const hero = {
    head: "our mission",
    body: "Creating spaces that are comfortable, memorable and inspiring."
};
const about = {
    id: 5,
    head: "Who we are",
    body: "Frost is a design studio based in Stockholm. We are a team of architects, designers and engineers who are passionate about creating beautiful and functional spaces.",
    src: [
        new URL(require("cb29d589332125aa"))
    ]
};
const offer = {
    id: 6,
    head: "Our offer",
    body: "Frost offers a variety of architectural services, including residential design for single-family homes to multi-unit developments, commercial design for offices, retail spaces, restaurants, and hotels, and public design for parks, community centers, and schools. We aim to create functional and attractive spaces that meet clients' needs. Contact us for a consultation.",
    src: [
        new URL(require("510fa49b9ae71317"))
    ]
};
const toolbar = {
    logo: "Frost",
    navLinks: [
        "home",
        "about",
        "offer",
        "projects"
    ],
    navButton: "Try now",
    navButtonLink: "about"
};
const footer = {
    adress: "Stockholm, Sweden",
    phone: "+46 123 456 789",
    email: "demo@frost.se",
    social: [
        {
            name: "facebook",
            link: "https://www.facebook.com/"
        },
        {
            name: "instagram",
            link: "https://www.instagram.com/"
        },
        {
            name: "twitter",
            link: "https://twitter.com/"
        }
    ]
};
const page1 = {
    id: 1,
    head: "Residential design",
    subhead: "Living spaces and new homes.",
    body: "Residential design at Frost creates living spaces, new homes or renovations, reflecting clients' style and meeting their needs. Experienced in designing single-family homes to multi-unit developments. Aims to bring clients' vision to life with functional and attractive spaces.",
    cover: new URL(require("6ea58ad5355e8d7a")),
    src: [
        new URL(require("4acc752246417867")),
        new URL(require("af94c78835da98b2")),
        new URL(require("b57d11f516e72919")),
        new URL(require("de287f6c452fdaaa"))
    ],
    path: "/frost/residential"
};
const page2 = {
    id: 2,
    head: "Corporate design",
    subhead: "Functional work environments.",
    body: "Corporate design at Frost creates functional and attractive work environments for businesses, including offices, retail spaces, restaurants, and hotels. Meets clients' needs to enhance the business and create a professional and welcoming environment.",
    cover: new URL(require("5e966e886386f6d8")),
    src: [
        new URL(require("ee730df7d1ea171c")),
        new URL(require("2124aa53b103bf1d")),
        new URL(require("6f7dfa61d0dfd90f")),
        new URL(require("65ac7b76215ea54e"))
    ],
    path: "/frost/business"
};
const page3 = {
    id: 3,
    head: "Public design",
    subhead: "Bringing people together.",
    body: "Public design at Frost creates functional and inviting spaces, such as parks, community centers, and schools, to enhance the community and bring people together. Aims to meet clients' needs and goals.",
    cover: new URL(require("92e71cb8e4cad5fa")),
    src: [
        new URL(require("2f440fd5134914c5")),
        new URL(require("efabc77d3dc4d8a4")),
        new URL(require("5ec353d4d5e41aa2")),
        new URL(require("c3c762f8b86a0bb5"))
    ],
    path: "/frost/public"
};
const page4 = {
    id: 4,
    head: "Interior design",
    subhead: "Attract with interiors.",
    body: "Interior design creates functional, attractive interior spaces (homes, offices, retail spaces, hotels) using elements such as furniture, color, lighting, and materials. Aims to create a space that is aesthetically pleasing, functional, and reflective of the client's style and needs. Works with clients to meet their needs and enhance their space.",
    cover: new URL(require("8bd2fc057c0148a7")),
    src: [
        new URL(require("2f440fd5134914c5")),
        new URL(require("ee730df7d1ea171c")),
        new URL(require("c12e94304f459d87")),
        new URL(require("dfa4f03af1b5be77"))
    ],
    path: "/frost/public"
};
const frost = {
    toolbar,
    hero,
    about,
    offer,
    page: [
        page1,
        page2,
        page3,
        page4
    ],
    footer
};
exports.default = frost;

},{"cb29d589332125aa":"6yHlS","510fa49b9ae71317":"3dFRD","6ea58ad5355e8d7a":"c1pge","4acc752246417867":"8hDjL","af94c78835da98b2":"ijvWo","b57d11f516e72919":"eqlQi","de287f6c452fdaaa":"dgyuz","5e966e886386f6d8":"7QjFe","ee730df7d1ea171c":"kSPOJ","2124aa53b103bf1d":"a6ciz","6f7dfa61d0dfd90f":"lFvgI","65ac7b76215ea54e":"irPCy","92e71cb8e4cad5fa":"csbc0","2f440fd5134914c5":"k0Ndy","efabc77d3dc4d8a4":"hm6z6","5ec353d4d5e41aa2":"1WD6u","c3c762f8b86a0bb5":"1FnYB","8bd2fc057c0148a7":"5103u","c12e94304f459d87":"aPvZ8","dfa4f03af1b5be77":"50GgN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6yHlS":[function(require,module,exports) {
module.exports = require("75bf458611028526").getBundleURL("ls5e1") + "../../a2.717b0c00.webp" + "?" + Date.now();

},{"75bf458611028526":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3dFRD":[function(require,module,exports) {
module.exports = require("5239f7a6314a08c1").getBundleURL("ls5e1") + "../../a1.110a42ce.webp" + "?" + Date.now();

},{"5239f7a6314a08c1":"lgJ39"}],"c1pge":[function(require,module,exports) {
module.exports = require("e29f939e34dba569").getBundleURL("ls5e1") + "../../r_front.7b93d880.webp" + "?" + Date.now();

},{"e29f939e34dba569":"lgJ39"}],"8hDjL":[function(require,module,exports) {
module.exports = require("47656cb37b3de3f0").getBundleURL("ls5e1") + "../../r1.bf4da5fd.webp" + "?" + Date.now();

},{"47656cb37b3de3f0":"lgJ39"}],"ijvWo":[function(require,module,exports) {
module.exports = require("3d92258d9f4d45af").getBundleURL("ls5e1") + "../../r2.4f1027de.webp" + "?" + Date.now();

},{"3d92258d9f4d45af":"lgJ39"}],"eqlQi":[function(require,module,exports) {
module.exports = require("b3952a673132bfed").getBundleURL("ls5e1") + "../../r3.d9065711.webp" + "?" + Date.now();

},{"b3952a673132bfed":"lgJ39"}],"dgyuz":[function(require,module,exports) {
module.exports = require("a6f0c688a78359d7").getBundleURL("ls5e1") + "../../r4.eb0ea35f.webp" + "?" + Date.now();

},{"a6f0c688a78359d7":"lgJ39"}],"7QjFe":[function(require,module,exports) {
module.exports = require("992142af2bb22a3e").getBundleURL("ls5e1") + "../../c_front.fc3d1d48.webp" + "?" + Date.now();

},{"992142af2bb22a3e":"lgJ39"}],"kSPOJ":[function(require,module,exports) {
module.exports = require("496ccd3cf7dc8e08").getBundleURL("ls5e1") + "../../c1.38705904.webp" + "?" + Date.now();

},{"496ccd3cf7dc8e08":"lgJ39"}],"a6ciz":[function(require,module,exports) {
module.exports = require("f286d0d19d69f38c").getBundleURL("ls5e1") + "../../c2.7e1e23bf.webp" + "?" + Date.now();

},{"f286d0d19d69f38c":"lgJ39"}],"lFvgI":[function(require,module,exports) {
module.exports = require("6851d07d80d193f4").getBundleURL("ls5e1") + "../../c3.b461502f.webp" + "?" + Date.now();

},{"6851d07d80d193f4":"lgJ39"}],"irPCy":[function(require,module,exports) {
module.exports = require("cf82320a7a494031").getBundleURL("ls5e1") + "../../c4.72809e88.webp" + "?" + Date.now();

},{"cf82320a7a494031":"lgJ39"}],"csbc0":[function(require,module,exports) {
module.exports = require("cc3671777f92299").getBundleURL("ls5e1") + "../../p_front.0f962e37.webp" + "?" + Date.now();

},{"cc3671777f92299":"lgJ39"}],"k0Ndy":[function(require,module,exports) {
module.exports = require("c7f0f51ae465d657").getBundleURL("ls5e1") + "../../p1.612d7c3c.webp" + "?" + Date.now();

},{"c7f0f51ae465d657":"lgJ39"}],"hm6z6":[function(require,module,exports) {
module.exports = require("c33493da834215d6").getBundleURL("ls5e1") + "../../p2.591db559.webp" + "?" + Date.now();

},{"c33493da834215d6":"lgJ39"}],"1WD6u":[function(require,module,exports) {
module.exports = require("3718b17395f7d0f3").getBundleURL("ls5e1") + "../../p3.c7af4fa0.webp" + "?" + Date.now();

},{"3718b17395f7d0f3":"lgJ39"}],"1FnYB":[function(require,module,exports) {
module.exports = require("f0f595a64faeb0c3").getBundleURL("ls5e1") + "../../p4.dccd42a4.webp" + "?" + Date.now();

},{"f0f595a64faeb0c3":"lgJ39"}],"5103u":[function(require,module,exports) {
module.exports = require("4b3534606eb2abb4").getBundleURL("ls5e1") + "../../i_front.411debab.webp" + "?" + Date.now();

},{"4b3534606eb2abb4":"lgJ39"}],"aPvZ8":[function(require,module,exports) {
module.exports = require("3e9131d9ae60075").getBundleURL("ls5e1") + "../../i1.bb7a12b6.webp" + "?" + Date.now();

},{"3e9131d9ae60075":"lgJ39"}],"50GgN":[function(require,module,exports) {
module.exports = require("e5570babfb9f3f39").getBundleURL("ls5e1") + "../../i2.f47f0532.webp" + "?" + Date.now();

},{"e5570babfb9f3f39":"lgJ39"}],"ecUd2":[function(require,module,exports) {
// Mock database for the Magazine website
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const path = "../../public/frost";
const hero = {
    head: "Magazine24",
    body: "Covering the latest in fashion, beauty, and lifestyle."
};
const about = {
    id: 5,
    head: "Who we are",
    body: "Magazine24 makes cover stories and articles on the latest in fashion, beauty, and lifestyle.",
    src: [
        `https://images.unsplash.com/photo-1553484771-0a615f264d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`
    ]
};
const mission = {
    id: 6,
    head: "Our mission",
    body: "We are committed to providing the best content for our readers. Time is precious, and we want to make sure you spend it on the things that matter most to you.",
    src: [
        `https://images.unsplash.com/photo-1553484771-8bbd4e16c60b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2286&q=80`
    ]
};
const toolbar = {
    logo: "M-24",
    navLinks: [
        "home",
        "about",
        "mission",
        "projects"
    ],
    navButton: "Try now",
    navButtonLink: "about"
};
const page1 = {
    id: 1,
    head: "Woman's minimalism",
    subhead: "Graphic and minimalistic style.",
    body: "Minimalism involves curating a wardrobe consisting of timeless pieces that can be styled in a variety of ways, creating a versatile collection that is both effortless to maintain and effortless to wear.",
    cover: `https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80`,
    src: [
        `https://images.unsplash.com/photo-1602353195884-44ea7e76e196?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80`,
        `https://images.unsplash.com/photo-1608312149553-d31a9cbc5224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80`,
        `https://images.unsplash.com/photo-1609505849504-405b3d1f4678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80`,
        `https://images.unsplash.com/photo-1601574465779-76d6dbb88557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`
    ],
    path: "/frost/residential"
};
const page2 = {
    id: 2,
    head: "Beige and blue.",
    subhead: "Classic combo, with a touch of the past.",
    body: "The timeless pairing of beige and blue originates from classic and influential suits. This classic color combination will never go out of style. The versatility of beige and blue makes it effortless to wear and pair with other colors.",
    cover: `https://images.unsplash.com/photo-1483118714900-540cf339fd46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80`,
    src: [
        `https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`,
        `https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`,
        `https://images.unsplash.com/photo-1541346160430-93fcee38d521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2488&q=80`,
        `https://images.unsplash.com/photo-1606485165292-3112b81c49e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`
    ],
    path: "/frost/business"
};
const page3 = {
    id: 3,
    head: "Round glasses",
    subhead: "The shape comes with a mood.",
    body: "Round glasses evoke a nostalgic mood with their timeless shape that flirts with the past. The use of plastic and pastel colors in this style is reminiscent of the iconic 80s era, adding a retro vibe to any look. This classic eyewear shape is an enduring style that will never go out of fashion.",
    cover: `https://images.unsplash.com/photo-1480881222301-b5db5622744b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80`,
    src: [
        `https://images.unsplash.com/photo-1513673054901-2b5f51551112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80`,
        `https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80`,
        `https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`,
        `https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`
    ],
    path: "/frost/public"
};
const page4 = {
    id: 4,
    head: "Men's hats",
    subhead: "All occations, all sizes.",
    body: "For centuries, hats have been a staple accessory worn by people to adorn their heads. A hat not only serves as a functional accessory to protect you from the sun or cold, but it's also a great way to add a personal touch to your outfit. Whether it's a classic fedora or a trendy beanie, hats come in a wide range of styles and materials, allowing you to express your unique sense of fashion.",
    cover: `https://images.unsplash.com/photo-1550314124-301ca0b773ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2260&q=80`,
    src: [
        `https://images.unsplash.com/photo-1580880783109-6746c2199006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`,
        `https://images.unsplash.com/photo-1556247428-f2262e19d6be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`,
        `https://images.unsplash.com/photo-1587651696669-86b588f28cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2225&q=80`,
        `https://images.unsplash.com/photo-1595625516953-c31cd1fc260b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80`
    ],
    path: "/frost/public"
};
const footer = {
    adress: "London, UK",
    phone: "+44 20 123 456",
    email: "demo@mag24.se",
    social: [
        {
            name: "facebook",
            link: "https://www.facebook.com/"
        },
        {
            name: "instagram",
            link: "https://www.instagram.com/"
        },
        {
            name: "twitter",
            link: "https://twitter.com/"
        }
    ]
};
const magazine = {
    toolbar,
    hero,
    about,
    mission,
    page: [
        page1,
        page2,
        page3,
        page4
    ],
    footer
};
exports.default = magazine;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3LADJ":[function(require,module,exports) {
// A simple store and state management class
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setpageJs = require("../handlers/setpage.js");
var _setpageJsDefault = parcelHelpers.interopDefault(_setpageJs);
var _indexJs = require("./index.js");
class Store {
    constructor(){
        this._navLinks = [];
    }
    get adress() {
        return this._adress;
    }
    get email() {
        return this._email;
    }
    get phone() {
        return this._phone;
    }
    get social() {
        return this._social;
    }
    get page() {
        return this._page;
    }
    set page(page) {
        if (this._page == page) return;
        this._page = page;
        (0, _setpageJsDefault.default)(page);
    }
    get logo() {
        return this._logo;
    }
    set logo(logo) {
        this._logo = logo;
    }
    set navLinks(navLinks) {
        this._navLinks = navLinks;
        this._page = navLinks[0];
    }
    get path() {
        return "/" + this._page;
    }
    get website() {
        return this._website;
    }
    get navLinks() {
        return this._navLinks;
    }
    get navButton() {
        return this._navButton;
    }
    setWebsite(website) {
        this._website = website;
        const db = (0, _indexJs.getDB)(website);
        const { logo , navLinks , navButton  } = db.toolbar;
        const { adress , email , phone , social  } = db.footer;
        this._logo = logo;
        this._navLinks = navLinks;
        this._navButton = navButton;
        this._page = navLinks[0];
        this._adress = adress;
        this._email = email;
        this._phone = phone;
        this._social = social;
    }
}
const store = new Store();
exports.default = store;

},{"../handlers/setpage.js":"hogRW","./index.js":"6gmsK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hogRW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createpageJs = require("./createpage.js");
var _createpageJsDefault = parcelHelpers.interopDefault(_createpageJs);
var _indexJs = require("../util/index.js");
var _fxJs = require("./fx.js");
var _indexJs1 = require("../modules/index.js");
// DOM
const root = document.querySelector("#root");
const footer = document.querySelector("#footer");
/* 
	This function is called when a new page is requested
		- check if page is already in cache, if not
		- call createPage() to create the new page
		- call side effects
*/ const setPage = (page)=>{
    // if click on logo or projects, render home page
    if (page === (0, _indexJs.store).logo || page === "projects") page = "home";
    (0, _fxJs.fadeOut)(root);
    // check and render if page already exsists in cache
    if ((0, _indexJs.cache).has(page)) {
        (0, _indexJs.cache).get(page).render().then(()=>(0, _fxJs.fadeInWhenLoaded)(root));
        (0, _fxJs.sideEffects)(page);
        return;
    }
    // if not in cache create, render and cache the new page
    const elem = (0, _createpageJsDefault.default)(page);
    elem.render().then(()=>{
        (0, _fxJs.fadeInWhenLoaded)(root);
        (0, _fxJs.sideEffects)(page, elem);
    });
};
exports.default = setPage;

},{"./createpage.js":"lQieA","../util/index.js":"6gmsK","./fx.js":"2CD5o","../modules/index.js":"aOVNo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lQieA":[function(require,module,exports) {
/* 
  This function creates a new page or subpage.
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function createPage(page) {
    let elem;
    const isPage = isNaN(page);
    if (isPage) {
        elem = document.createElement("my-about");
        elem.setAttribute("variant", page);
    } else {
        elem = document.createElement("my-page");
        elem.setAttribute("page", page);
    }
    return elem;
}
exports.default = createPage;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2CD5o":[function(require,module,exports) {
/* 
	Handers for side effects that happen when a page is loaded
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sideEffects", ()=>sideEffects);
parcelHelpers.export(exports, "fadeOut", ()=>fadeOut);
parcelHelpers.export(exports, "fadeInWhenLoaded", ()=>fadeInWhenLoaded);
var _indexJs = require("../util/index.js");
const historyAPI = (page)=>window.history.pushState({
        page
    }, "");
const scrollToTop = ()=>window.scrollTo(0, 0, "smooth");
const fadeOut = (root)=>root.classList.remove("loaded");
const fadeInWhenLoaded = (root)=>{
    // timeout to avoid visual FOUC
    setTimeout(()=>{
        root.classList.add("loaded");
    }, 50);
};
function sideEffects(page, elem) {
    elem && (0, _indexJs.cache).set(page, elem); // cache the element
    (0, _indexJs.store).page = page; // set current page in store
    historyAPI(page); // update history API
    scrollToTop(); // scroll to top
}

},{"../util/index.js":"6gmsK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aOVNo":[function(require,module,exports) {
// handlers
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "About", ()=>(0, _aboutJsDefault.default));
parcelHelpers.export(exports, "Home", ()=>(0, _homeJsDefault.default));
parcelHelpers.export(exports, "Button", ()=>(0, _buttonJsDefault.default));
parcelHelpers.export(exports, "Toolbar", ()=>(0, _toolbarJsDefault.default));
parcelHelpers.export(exports, "HeroButton", ()=>(0, _heroButtonJsDefault.default));
parcelHelpers.export(exports, "Hero", ()=>(0, _heroJsDefault.default));
parcelHelpers.export(exports, "Section", ()=>(0, _sectionJsDefault.default));
parcelHelpers.export(exports, "Footer", ()=>(0, _footerJsDefault.default));
parcelHelpers.export(exports, "Double", ()=>(0, _doubleJsDefault.default));
parcelHelpers.export(exports, "ImageGrid", ()=>(0, _imagegridJsDefault.default));
parcelHelpers.export(exports, "Page", ()=>(0, _pageJsDefault.default));
parcelHelpers.export(exports, "Form", ()=>(0, _formJsDefault.default));
parcelHelpers.export(exports, "fadeIn", ()=>(0, _fadeinJsDefault.default));
parcelHelpers.export(exports, "handleIntersection", ()=>(0, _observerJs.handleIntersection));
parcelHelpers.export(exports, "observerOptions", ()=>(0, _observerJs.observerOptions));
parcelHelpers.export(exports, "getTemplate", ()=>(0, _getTemplateJsDefault.default));
parcelHelpers.export(exports, "getStyle", ()=>(0, _getStylesJsDefault.default));
parcelHelpers.export(exports, "getSkin", ()=>(0, _getStylesJs.getSkin));
parcelHelpers.export(exports, "elements", ()=>(0, _elementsJsDefault.default));
var _getTemplateJs = require("./common/getTemplate.js");
var _getTemplateJsDefault = parcelHelpers.interopDefault(_getTemplateJs);
var _getStylesJs = require("./common/getStyles.js");
var _getStylesJsDefault = parcelHelpers.interopDefault(_getStylesJs);
var _fadeinJs = require("./common/fadein.js");
var _fadeinJsDefault = parcelHelpers.interopDefault(_fadeinJs);
var _observerJs = require("./common/observer.js");
var _elementsJs = require("./common/elements.js");
var _elementsJsDefault = parcelHelpers.interopDefault(_elementsJs);
// pages
var _aboutJs = require("./pages/about/about.js");
var _aboutJsDefault = parcelHelpers.interopDefault(_aboutJs);
var _homeJs = require("./pages/home/home.js");
var _homeJsDefault = parcelHelpers.interopDefault(_homeJs);
var _pageJs = require("./pages/projects/page.js");
var _pageJsDefault = parcelHelpers.interopDefault(_pageJs);
// components
var _buttonJs = require("./button/button.js");
var _buttonJsDefault = parcelHelpers.interopDefault(_buttonJs);
var _toolbarJs = require("./toolbar/toolbar.js");
var _toolbarJsDefault = parcelHelpers.interopDefault(_toolbarJs);
var _heroButtonJs = require("./hero-button/hero-button.js");
var _heroButtonJsDefault = parcelHelpers.interopDefault(_heroButtonJs);
var _heroJs = require("./hero/hero.js");
var _heroJsDefault = parcelHelpers.interopDefault(_heroJs);
var _sectionJs = require("./section/section.js");
var _sectionJsDefault = parcelHelpers.interopDefault(_sectionJs);
var _footerJs = require("./footer/footer.js");
var _footerJsDefault = parcelHelpers.interopDefault(_footerJs);
var _doubleJs = require("./double/double.js");
var _doubleJsDefault = parcelHelpers.interopDefault(_doubleJs);
var _formJs = require("./form/form.js");
var _formJsDefault = parcelHelpers.interopDefault(_formJs);
var _imagegridJs = require("./imagegrid/imagegrid.js");
var _imagegridJsDefault = parcelHelpers.interopDefault(_imagegridJs);

},{"./common/getTemplate.js":"lbDKh","./common/getStyles.js":"7DJFM","./common/fadein.js":"fi3Np","./common/observer.js":"cy4rt","./common/elements.js":"2bTAC","./pages/about/about.js":"facAj","./pages/home/home.js":"UoCmJ","./pages/projects/page.js":"6CD8z","./button/button.js":"ck48r","./toolbar/toolbar.js":"d7z2r","./hero-button/hero-button.js":"fJz53","./hero/hero.js":"165t0","./section/section.js":"k9MOj","./footer/footer.js":"eQBnc","./double/double.js":"hg6CE","./form/form.js":"fkaCy","./imagegrid/imagegrid.js":"6Z6tH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbDKh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
async function getTemplate(templateURL) {
    return await fetch(templateURL).then((response)=>response.text()).then((templateString)=>{
        const parser = new DOMParser(); // parse text to html
        const doc = parser.parseFromString(templateString, "text/html");
        return doc.head.firstChild.content.cloneNode(true);
    });
// console.log(document);
// const path = url.pathname.split("/").slice(-2).join("/");	
// const urld = new URL(path, import.meta.url);
// try {
// 	const res = await fetch(urld);
// 	const data = await res.text();
// 	// console.log("path", urld);
// 	// console.log("data", res);
// 	// console.log("data", data);
// 	const parser = new DOMParser(); // parse text to html
// 	const doc = parser.parseFromString(data, "text/html");
// 	// returns a deep-clone to make sure that the template itself is not altered or compromised
// 	return doc.head.firstChild.content.cloneNode(true);
// } catch(error) {
// 	console.log(error);
// }
}
exports.default = getTemplate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7DJFM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// create a link-element with the user specific css-file ("the skin")
parcelHelpers.export(exports, "getSkin", ()=>getSkin);
async function getStyle(url) {
    const css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("href", url.href);
    return css;
}
function getSkin(url) {
    const css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("href", url.pathname);
    return css;
}
exports.default = getStyle;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fi3Np":[function(require,module,exports) {
// handle fade-in effect
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
async function fadeIn(elements = []) {
    const promises = elements.map((element)=>customElements.whenDefined(element));
    return await Promise.allSettled(promises);
}
exports.default = fadeIn; // For documentation:
 // FLUO (Flash of Unstyled Content) is a problem that occurs when the browser renders the page before the custom elements are defined.
 // This is a known problem when working with web components.
 // The solution is to wait for the custom elements to be defined before appending them to the DOM.
 // Mozilla: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_custom_elements_in_html
 // Google solution: https://developers.google.com/web/fundamentals/web-components/customelements#jsapi
 // This solution: https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cy4rt":[function(require,module,exports) {
/* 
  Intersection observer API, config pararmeters for the observer
  https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleIntersection", ()=>handleIntersection);
parcelHelpers.export(exports, "observerOptions", ()=>observerOptions);
const threshold = [
    0.0,
    0.01,
    0.02,
    0.03,
    0.04,
    0.05,
    0.06,
    0.07,
    0.08,
    0.09,
    0.1,
    0.11,
    0.12,
    0.13,
    0.14,
    0.15,
    0.16,
    0.17,
    0.18,
    0.19,
    0.2,
    0.21,
    0.22,
    0.23,
    0.24,
    0.25,
    0.26,
    0.27,
    0.28,
    0.29,
    0.3,
    0.31,
    0.32,
    0.33,
    0.34,
    0.35,
    0.36,
    0.37,
    0.38,
    0.39,
    0.4,
    0.41,
    0.42,
    0.43,
    0.44,
    0.45,
    0.46,
    0.47,
    0.48,
    0.49,
    0.5,
    0.51,
    0.52,
    0.53,
    0.54,
    0.55,
    0.56,
    0.57,
    0.58,
    0.59,
    0.6,
    0.61,
    0.62,
    0.63,
    0.64,
    0.65,
    0.66,
    0.67,
    0.68,
    0.69,
    0.7,
    0.71,
    0.72,
    0.73,
    0.74,
    0.75,
    0.76,
    0.77,
    0.78,
    0.79,
    0.8,
    0.81,
    0.82,
    0.83,
    0.84,
    0.85,
    0.86,
    0.87,
    0.88,
    0.89,
    0.9,
    0.91,
    0.92,
    0.93,
    0.94,
    0.95,
    0.96,
    0.97,
    0.98,
    0.99,
    1.0
];
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold
};
/* 
  This is the handler function for the Intersection Observer:
  Visibility, opacity and transform parameters are set depending on 
  the intersection ratio and viewport width.
*/ function handleIntersection(entries) {
    // for each entry 
    entries.forEach((entry)=>{
        let intersection = entry.intersectionRatio; // get the intersection ratio 0-1
        let clientWidth = entry?.target?.clientWidth; // get the screen width
        if (entry.isIntersecting) {
            // for breakpoints < 481px and > 1200px (mobile and desktop)
            if (clientWidth < 481 || clientWidth > 1200) {
                if (intersection < 0.33) entry.target.style.opacity = entry.intersectionRatio / 10; // set opacity to intersection ratio 0-1
                else entry.target.style.opacity = entry.intersectionRatio;
                // toggle visibility and transform after 0.33 intersection ratio
                if (intersection > 0.33) {
                    entry.target.style.visibility = "visible";
                    entry.target.style.transform = "translateX(0)";
                } else entry.target.style.transform = "translateX(10vh)";
            } else entry.target.style.transform = "translateX(0)";
        } else if (clientWidth < 481 || clientWidth > 1200) {
            entry.target.style.transform = "translateX(10vh)";
            entry.target.style.visibility = "hidden";
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2bTAC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const elements = [
    "my-button",
    "my-toolbar",
    "my-hero-button",
    "my-hero",
    "my-section",
    "my-footer",
    "my-double",
    "my-page",
    "my-about",
    "my-home",
    "my-form",
    "my-grid"
];
exports.default = elements;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"facAj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../index.js");
var _indexJs1 = require("../../../util/index.js");
var _indexCss = require("bundle-text:./index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
class About extends HTMLElement {
    constructor(variant){
        super();
        this.variant = variant;
        this.skin = (0, _indexJs1.store)?.website || variant;
    }
    static get observedAttributes() {
        return [
            "variant"
        ];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }
    async connectedCallback() {
        if (this.isCashed) return;
        const db = (0, _indexJs1.getDB)((0, _indexJs1.store).website);
        const shadow = this.attachShadow({
            mode: "open"
        });
        const double = this.createDouble(db);
        const image = this.createImage(db);
        const form = this.createForm();
        const style = document.createElement("style");
        style.textContent = (0, _indexCssDefault.default);
        const skinText = await this.loadSkin(this.skin);
        let skin = document.createElement("style");
        skin.textContent = skinText;
        shadow.append(double, image, form, style, skin);
    }
    createDouble(db) {
        const double = new (0, _indexJs.Double)();
        double.setAttribute("variant", "variant-text");
        double.setAttribute("head", db[this.variant].head);
        double.setAttribute("body", db[this.variant].body);
        const section = document.createElement("section");
        section.appendChild(double);
        return section;
    }
    createImage(db) {
        const section = document.createElement("section");
        const img = document.createElement("img");
        img.setAttribute("src", db[this.variant].src[0]);
        section.appendChild(img);
        return section;
    }
    createForm() {
        if (this.variant !== "about") return document.createElement("section");
        const section = document.createElement("section");
        const form = new (0, _indexJs.Form)();
        section.appendChild(form);
        return section;
    }
    async loadSkin(skin) {
        switch(skin){
            case "frost":
                return await require("ec44d8736f4a0f29");
            case "magazine":
                return await require("d477e56efad220c3");
            case "java":
                return await require("8d25f752d16f3818");
            case "guitars":
                return await require("c957371f2c1f6131");
            default:
                console.log("Class skin: We are out of skins");
        }
    }
    disconnectedCallback() {
        this.isCashed = true;
    }
    render() {
        const root = document.querySelector("#root");
        root.replaceChildren(this);
        return customElements.whenDefined("my-about");
    }
}
customElements.define("my-about", About);
exports.default = About;

},{"../../index.js":"aOVNo","../../../util/index.js":"6gmsK","bundle-text:./index.css":"1xjFI","ec44d8736f4a0f29":"a8EGh","d477e56efad220c3":"gEqWi","8d25f752d16f3818":"4iaGM","c957371f2c1f6131":"87S2v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1xjFI":[function(require,module,exports) {
module.exports = "* {\n  margin: 0;\n}\n\n.flex {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\nsection {\n  justify-content: flex-end;\n  padding: 10vh 6vw 15vh;\n  display: flex;\n}\n\nsection:last-of-type {\n  margin-bottom: 20vh;\n}\n\nmy-form {\n  margin: 0 auto;\n}\n\nimg {\n  width: 900px;\n  max-width: 90%;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  filter: brightness() contrast(90%) saturate(90%);\n  margin-right: 6vw;\n}\n\n@media screen and (width <= 768px) {\n  img {\n    width: 60%;\n    object-position: right top;\n    aspect-ratio: 5 / 7;\n  }\n\n  section {\n    justify-content: flex-end;\n    align-items: center;\n    margin: 10% 0 50%;\n    padding: 0;\n  }\n}\n\n@media screen and (width <= 768px) and (width >= 480px) {\n  section:last-of-type {\n    margin-bottom: 25vh;\n  }\n}\n\n";

},{}],"a8EGh":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"gEqWi":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"4iaGM":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"87S2v":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"UoCmJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../index.js");
var _indexJs1 = require("../../../util/index.js");
var _indexCss = require("bundle-text:./index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
class Home extends HTMLElement {
    constructor(){
        super();
        this.skin = (0, _indexJs1.store)?.website || null;
    }
    async connectedCallback() {
        if (this.isCashed) return;
        // Get the database for the current website
        const db = (0, _indexJs1.getDB)((0, _indexJs1.store).website);
        // Create the shadow root
        const shadow = this.attachShadow({
            mode: "open"
        });
        // Create the hero and pages components
        const hero = this.createHero(db);
        const pages = this.createPages(db);
        // Get the style and skin for the current website
        const style = document.createElement("style");
        style.textContent = (0, _indexCssDefault.default);
        const skinText = await this.loadSkin(this.skin);
        let skin = document.createElement("style");
        skin.textContent = skinText;
        // Append the components to the shadow root
        shadow.append(hero, pages, style, skin);
    }
    createHero(db) {
        const { head , body  } = db.hero;
        const section = document.createElement("section");
        const myHero = new (0, _indexJs.Hero)("spa", head, body);
        section.appendChild(myHero);
        return section;
    }
    createPages(db) {
        const section = document.createElement("section");
        section.classList.add("main-section");
        db.page.forEach((page)=>{
            const { id , head , subhead , cover  } = page;
            const mySection = new (0, _indexJs.Section)("spa", id, head, subhead, cover);
            mySection.setAttribute("target", id);
            section.appendChild(mySection);
        });
        return section;
    }
    async loadSkin(skin) {
        switch(skin){
            case "frost":
                return await require("ec33e606966d54e8");
            case "magazine":
                return await require("b685ddd49cc8e3fc");
            case "java":
                return await require("6adfa9912ccf1950");
            case "guitars":
                return await require("b37665af2ed1de39");
            default:
                console.log("Class skin: We are out of skins");
        }
    }
    disconnectedCallback() {
        this.isCashed = true;
    }
    render() {
        const root = document.querySelector("#root");
        root.replaceChildren(this);
        return customElements.whenDefined("my-home");
    }
}
customElements.define("my-home", Home);
exports.default = Home;

},{"../../index.js":"aOVNo","../../../util/index.js":"6gmsK","bundle-text:./index.css":"2K0ww","ec33e606966d54e8":"kyCfL","b685ddd49cc8e3fc":"2P7LA","6adfa9912ccf1950":"h9Swu","b37665af2ed1de39":"5fnaI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2K0ww":[function(require,module,exports) {
module.exports = "main {\n  background-color: #f8f8f8;\n}\n\n.main-section {\n  display: flex;\n}\n\n@media only screen and (width <= 480px) {\n  .main-section {\n    flex-flow: column wrap;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 50px;\n  }\n}\n\n@media only screen and (width >= 481px) and (width <= 768px) {\n  .main-section {\n    flex-flow: column wrap;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 50px;\n    margin: 10vh 0;\n  }\n}\n\n@media only screen and (width >= 769px) and (width <= 1200px) {\n  .main-section {\n    flex-flow: wrap;\n    justify-content: center;\n    align-items: center;\n    gap: 5vw;\n    margin: 10vh 0 15vh;\n    display: flex;\n  }\n}\n\n@media only screen and (width >= 1201px) {\n  .main-section {\n    flex-direction: column;\n    margin-bottom: 15vh;\n  }\n}\n\n";

},{}],"kyCfL":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"2P7LA":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"h9Swu":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"5fnaI":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"6CD8z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../../index.js");
var _indexJs1 = require("../../../util/index.js");
class Page extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: "open"
        });
    }
    static get observedAttributes() {
        return [
            "page"
        ];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.page = newValue;
    }
    connectedCallback() {
        if (this.isCashed) return;
        this.createPage();
    }
    createPage() {
        const website = (0, _indexJs1.store).website;
        const dbResult = (0, _indexJs1.getDataFromDB)(website, this.page);
        const double = new (0, _indexJs.Double)();
        double.setAttribute("variant", "variant-text");
        double.setAttribute("head", dbResult.head);
        double.setAttribute("body", dbResult.body);
        const imageGrid = new (0, _indexJs.ImageGrid)(dbResult.src);
        this.shadowRoot.append(double, imageGrid);
    }
    disconnectedCallback() {
        this.isCashed = true;
    }
    render() {
        const root = document.querySelector("#root");
        root.replaceChildren(this);
        return (0, _indexJs.fadeIn)([
            "my-page",
            "my-grid",
            "my-double"
        ]);
    }
}
customElements.define("my-page", Page);
exports.default = Page;

},{"../../index.js":"aOVNo","../../../util/index.js":"6gmsK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ck48r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../index.js");
var _indexJs1 = require("../../util/index.js");
var _indexHtml = require("./index.html");
var _indexHtmlDefault = parcelHelpers.interopDefault(_indexHtml);
var _indexCss = require("bundle-text:./index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
class Button extends HTMLElement {
    constructor(variant, text = null, target, skin){
        super();
        this.variant = variant;
        this.target = target;
        this.text = text;
        this.skin = (0, _indexJs1.store)?.website || skin;
        this.handleClick = this.handleClick.bind(this);
    }
    static get observedAttributes() {
        return [
            "variant",
            "target",
            "skin"
        ];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }
    async connectedCallback() {
        if (this.isCashed) return;
        const node = await (0, _indexJs.getTemplate)((0, _indexHtmlDefault.default));
        let style = document.createElement("style");
        style.textContent = (0, _indexCssDefault.default);
        const skinText = await this.loadSkin(this.skin);
        let skin = document.createElement("style");
        skin.textContent = skinText;
        this.attachShadow({
            mode: "open"
        }).append(node, style, skin);
        this.setAttributes();
        this.addEventListeners();
    }
    async loadSkin(skin) {
        switch(skin){
            case "frost":
                return await require("8e686ca60b7dc304");
            case "magazine":
                return await require("a81d9e842497c488");
            case "java":
                return await require("68ef7d80d6ff1bd9");
            case "guitars":
                return await require("48e7702aa7ee529");
            default:
                console.log("Class skin: We are out of skins");
        }
    }
    setAttributes() {
        if (this.variant !== "spa") return;
        this.shadowRoot.firstElementChild.innerHTML = this.text;
    }
    addEventListeners() {
        this.shadowRoot.firstElementChild.addEventListener("click", this.handleClick);
    }
    handleClick(e) {
        e.preventDefault();
        if (this.variant === "spa") (0, _indexJs1.store).page = this.target;
        else window.location.href = this.target;
    }
    disconnectedCallback() {
        this.isCashed = true;
    }
}
customElements.define("my-button", Button);
exports.default = Button;

},{"../index.js":"aOVNo","../../util/index.js":"6gmsK","./index.html":"51p9v","bundle-text:./index.css":"fJXKG","8e686ca60b7dc304":"kioXQ","a81d9e842497c488":"dTyUF","68ef7d80d6ff1bd9":"fU2P3","48e7702aa7ee529":"2iGNS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"51p9v":[function(require,module,exports) {
module.exports = require("6ac8d61eb709a8a9").getBundleURL("ls5e1") + "../../button.ad6eb954.html" + "?" + Date.now();

},{"6ac8d61eb709a8a9":"lgJ39"}],"fJXKG":[function(require,module,exports) {
module.exports = ".flex {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.button-style {\n  width: 120px;\n  height: 60px;\n  color: #fff;\n  background-color: #000;\n  transition: scale .32s;\n  scale: 1;\n}\n\n.button-style:hover {\n  scale: 1.02;\n  box-shadow: 0 2px 4px #0e1e251f, 0 2px 16px #0e1e2552;\n}\n\n";

},{}],"kioXQ":[function(require,module,exports) {
module.exports = Promise.resolve(".button {\n  color: #fff;\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n  transform: scale .2s ease-in-out;\n  background-color: #000;\n  margin-right: 1vw;\n  font-family: proxima-nova, sans-serif;\n  font-size: 1.1em;\n  font-style: normal;\n  font-weight: 300;\n}\n\n.button-style {\n  width: 120px;\n  height: 60px;\n  color: #fff;\n  background-color: #000;\n  transition: scale .32s;\n  scale: 1;\n}\n\n.button-style:hover {\n  scale: 1.02;\n  box-shadow: 0 2px 4px #0e1e251f, 0 2px 16px #0e1e2552;\n}\n\n");

},{}],"dTyUF":[function(require,module,exports) {
module.exports = Promise.resolve(".button {\n  color: #fff;\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n  transform: scale .2s ease-in-out;\n  background-color: #000;\n  margin-right: 1vw;\n  font-family: proxima-nova, sans-serif;\n  font-size: 1.1em;\n  font-style: normal;\n  font-weight: 300;\n}\n\n");

},{}],"fU2P3":[function(require,module,exports) {
module.exports = Promise.resolve(".button {\n  width: 220px;\n  height: 50px;\n  color: #fff;\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n  transform: scale .2s ease-in-out;\n  background-color: #db423c;\n  margin-right: 1vw;\n  font-family: minion-pro, serif;\n  font-size: 1.1em;\n  font-style: normal;\n  font-weight: 400;\n}\n\n");

},{}],"2iGNS":[function(require,module,exports) {
module.exports = Promise.resolve(".button {\n  width: 220px;\n  height: 50px;\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n  transform: scale .2s ease-in-out;\n  background-color: #613312;\n  margin-right: 1vw;\n  font-family: Verdana, sans-serif;\n  font-size: 1em;\n  font-weight: 600;\n}\n\n");

},{}],"d7z2r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../index.js");
var _indexJs1 = require("../../util/index.js");
var _indexHtml = require("./index.html");
var _indexHtmlDefault = parcelHelpers.interopDefault(_indexHtml);
var _indexCss = require("bundle-text:./index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
class Toolbar extends HTMLElement {
    constructor(variant, skin){
        super();
        this.variant = variant;
        this.logo = (0, _indexJs1.store)?.logo;
        this.navLinks = (0, _indexJs1.store)?.navLinks;
        this.navButton = (0, _indexJs1.store)?.navButton;
        this.skin = (0, _indexJs1.store)?.website || skin;
    }
    static get observedAttributes() {
        return [
            "variant",
            "skin"
        ];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }
    async connectedCallback() {
        const shadow = this.attachShadow({
            mode: "open"
        });
        const node = await (0, _indexJs.getTemplate)((0, _indexHtmlDefault.default));
        const style = document.createElement("style");
        style.textContent = (0, _indexCssDefault.default);
        const skinText = await this.loadSkin(this.skin);
        let skin = document.createElement("style");
        skin.textContent = skinText;
        shadow.append(node, skin, style);
        this.observe();
    }
    observe() {
        if (this.variant === "spa") {
            this.setAttributes();
            this.shadowRoot.querySelectorAll("a").forEach((link)=>link.addEventListener("click", this.handleClick));
        } else {
            // setting links for non-spa please refactor
            const slots = this.shadowRoot.querySelectorAll("slot");
            document.querySelectorAll("[data-href]").forEach((link)=>{
                const href = link.dataset.href;
                const currentSlot = link.slot;
                slots.forEach((slot)=>{
                    if (slot.name == currentSlot) slot.parentElement.href = href;
                });
            });
        }
    }
    setAttributes() {
        const shadow = this.shadowRoot;
        shadow.firstElementChild.classList.add(this.variant); // add variant class
        shadow.querySelector("#logo").innerHTML = this.logo; // set logo
        shadow.querySelectorAll("li").forEach((child)=>child.remove()); // clear nav template
        this.navLinks.forEach((link)=>{
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = link;
            li.appendChild(a);
            shadow.querySelector("ul").appendChild(li);
        });
        // create and append a button
        const button = new (0, _indexJs.Button)("spa", this.navButton, this.navLinks[1], this.skin);
        shadow.querySelector(".button-container").appendChild(button);
    }
    async loadSkin(skin) {
        switch(skin){
            case "frost":
                return await require("97e613685c8817b");
            case "magazine":
                return await require("50c59a683a6c44ea");
            case "java":
                return await require("29db211dff764f2d");
            case "guitars":
                return await require("37d6f361723cc3e6");
            default:
                console.log("Class skin: We are out of skins");
        }
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector("#logo").removeEventListener("click", this.handleClick);
    }
    handleClick(e) {
        e.preventDefault();
        (0, _indexJs1.store).page = e.target.innerHTML;
    }
    render() {
        const header = document.querySelector("header");
        header.replaceChildren(this);
        return customElements.whenDefined("my-toolbar");
    }
}
customElements.define("my-toolbar", Toolbar);
exports.default = Toolbar;

},{"../index.js":"aOVNo","../../util/index.js":"6gmsK","./index.html":"bOgS7","bundle-text:./index.css":"kRS63","97e613685c8817b":"ijVSr","50c59a683a6c44ea":"23ONi","29db211dff764f2d":"6331q","37d6f361723cc3e6":"iAk0P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bOgS7":[function(require,module,exports) {
module.exports = require("bea3d55d165f6930").getBundleURL("ls5e1") + "../../toolbar.8ea41325.html" + "?" + Date.now();

},{"bea3d55d165f6930":"lgJ39"}],"kRS63":[function(require,module,exports) {
module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.flex {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.toolbar-container {\n  height: 90px;\n  z-index: 3;\n  color: var(--black-faded);\n  opacity: .9;\n  grid-template-columns: 200px auto 200px;\n  margin: 0;\n  display: grid;\n}\n\n.toolbar-container.spa {\n  background-color: var(--bg-gray);\n}\n\na {\n  color: var(--black);\n  letter-spacing: 1px;\n  -webkit-user-select: none;\n  user-select: none;\n  text-decoration: none;\n}\n\n.spa a:not(:has(#logo)) {\n  text-transform: uppercase;\n}\n\n.spa .social {\n  display: none;\n}\n\n.social img {\n  margin-left: 3px;\n}\n\n.logo {\n  color: var(--black);\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n  grid-column: 1;\n  font-size: 2rem;\n}\n\n.links {\n  grid-column: 2;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.button-container {\n  -webkit-user-select: none;\n  user-select: none;\n  opacity: .8;\n  flex-direction: row;\n  grid-column: 3;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  display: flex;\n}\n\nul {\n  list-style-type: none;\n}\n\nli {\n  padding: 10px;\n  font-size: 1.2em;\n  display: inline;\n}\n\n@media only screen and (width <= 480px) {\n  .toolbar-container {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n  }\n\n  .logo {\n    display: none;\n  }\n\n  ul {\n    display: inline-block;\n  }\n\n  .button-container {\n    display: none;\n  }\n\n  li {\n    padding: 5px;\n    font-size: 1em;\n  }\n}\n\n@media only screen and (width >= 481px) and (width <= 768px) {\n  .toolbar-container {\n    grid-template-columns: auto auto;\n  }\n\n  .logo {\n    grid-column: 1;\n    font-size: 1.8em;\n  }\n\n  .links {\n    grid-column: 2;\n  }\n\n  .button-container {\n    display: none;\n  }\n}\n\n@media only screen and (width >= 1201px) {\n  .toolbar-container {\n    height: 100px;\n    grid-template-columns: 300px auto 300px;\n  }\n\n  li {\n    padding: 10px;\n    font-size: 1.4em;\n    display: inline;\n  }\n}\n\n";

},{}],"ijVSr":[function(require,module,exports) {
module.exports = Promise.resolve("* {\n  font-family: ltc-bodoni-175, serif;\n  font-style: normal;\n  font-weight: 400;\n}\n\n@media only screen and (width <= 480px) {\n  .variant-java li, a {\n    background-color: #051b334e;\n    border-radius: 2px;\n    padding: 5px;\n    transition: background-color .4s ease-in;\n  }\n\n  a:hover {\n    background-color: #00060af5;\n  }\n}\n\n");

},{}],"23ONi":[function(require,module,exports) {
module.exports = Promise.resolve("* {\n  letter-spacing: .02em;\n  font-family: linotype-didot, serif;\n}\n\n.toolbar-container.spa {\n  background-color: #131211;\n  font-family: linotype-didot, serif;\n}\n\na {\n  color: #ececec;\n  font-family: linotype-didot, serif;\n}\n\n.spa a:hover:not(:has(#logo)) {\n  text-transform: uppercase;\n  color: #a02d2d;\n}\n\n@media only screen and (width <= 480px) {\n  .variant-java li, a {\n    background-color: unset;\n  }\n}\n\n");

},{}],"6331q":[function(require,module,exports) {
module.exports = Promise.resolve("a, li {\n  font-family: minion-pro, serif;\n  font-size: 1em;\n  font-weight: 400;\n}\n\na:hover {\n  color: #db423c;\n}\n\n.java {\n  color: #db423c;\n  font-family: minion-pro, serif;\n  font-size: 1em;\n  font-weight: 400;\n}\n\n@media only screen and (width <= 480px) {\n  li, a {\n    color: #fafafa;\n    background-color: #2c1c0c;\n    margin: 0 5px;\n    padding: 5px;\n    transition: all .3s;\n  }\n}\n\n");

},{}],"iAk0P":[function(require,module,exports) {
module.exports = Promise.resolve(".guitar {\n  width: 85px;\n}\n\na {\n  font-family: Alfa Slab One, cursive;\n  font-size: .8em;\n}\n\n");

},{}],"fJz53":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../index.js");
var _indexJs1 = require("../../util/index.js");
var _indexHtml = require("./index.html");
var _indexHtmlDefault = parcelHelpers.interopDefault(_indexHtml);
var _indexCss = require("bundle-text:./index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
class HeroButton extends HTMLElement {
    constructor(variant, skin){
        super();
        this.variant = variant;
        this.skin = (0, _indexJs1.store)?.website ?? skin;
    }
    static get observedAttributes() {
        return [
            "variant",
            "skin"
        ];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }
    async connectedCallback() {
        const node = await (0, _indexJs.getTemplate)((0, _indexHtmlDefault.default));
        const style = document.createElement("style");
        style.textContent = (0, _indexCssDefault.default);
        const skinText = await this.loadSkin(this.skin);
        let skin = document.createElement("style");
        skin.textContent = skinText;
        this.attachShadow({
            mode: "open"
        }).append(node, style, skin);
    }
    async loadSkin(skin) {
        switch(skin){
            case "frost":
                return await require("a9724ab0dfad56c9");
            case "magazine":
                return await require("29879e2330cbab42");
            case "java":
                return await require("e02f88ae0df7746c");
            case "guitars":
                return await require("67e3efb063167c13");
            default:
                console.log("Class skin: We are out of skins");
        }
    }
}
customElements.define("my-hero-button", HeroButton);
exports.default = HeroButton;

},{"../index.js":"aOVNo","../../util/index.js":"6gmsK","./index.html":"4FBDR","bundle-text:./index.css":"4I9RU","a9724ab0dfad56c9":"fZSUR","29879e2330cbab42":"3G5nq","e02f88ae0df7746c":"7nfWe","67e3efb063167c13":"cFvM4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4FBDR":[function(require,module,exports) {
module.exports = require("278a1044b73a338e").getBundleURL("ls5e1") + "../../hero-button.e2c0bede.html" + "?" + Date.now();

},{"278a1044b73a338e":"lgJ39"}],"4I9RU":[function(require,module,exports) {
module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\n.flex {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  row-gap: 40px;\n  display: flex;\n}\n\n.hero-wrapper {\n  min-height: 20vh;\n  width: 100%;\n  margin: 5vh 0;\n  padding: 5vh;\n}\n\n.hero-item {\n  width: 60%;\n}\n\n@media only screen and (width <= 480px) {\n  .hero-wrapper {\n    min-height: 20vh;\n    width: 100%;\n    margin: 14vh 0;\n    padding: 5vw;\n  }\n\n  .hero-item {\n    width: 100%;\n  }\n}\n\n@media only screen and (width >= 481px) and (width <= 768px) {\n  .flex {\n    row-gap: 50px;\n  }\n\n  .hero-wrapper {\n    min-height: 20vh;\n    width: 100%;\n    margin: 0;\n    padding: 16vw;\n  }\n\n  .hero-item {\n    width: 100%;\n  }\n}\n\n";

},{}],"fZSUR":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"3G5nq":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"7nfWe":[function(require,module,exports) {
module.exports = Promise.resolve("* {\n  color: #1b1212;\n}\n\n::slotted(*) {\n  font-family: big-caslon-fb, serif;\n  font-style: normal;\n  font-weight: 400;\n}\n\n:is(h1) {\n  text-align: center;\n  letter-spacing: .05em;\n  font-family: big-caslon-fb, serif;\n  font-size: clamp(2.1em, 8vw, 2.9em);\n  font-style: normal;\n  font-weight: 400;\n}\n\n");

},{}],"cFvM4":[function(require,module,exports) {
module.exports = Promise.resolve("h1 {\n  text-align: center;\n  font-size: 48px;\n  font-weight: 400;\n}\n\n");

},{}],"165t0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../index.js");
var _indexJs1 = require("../../util/index.js");
var _indexHtml = require("./index.html");
var _indexHtmlDefault = parcelHelpers.interopDefault(_indexHtml);
var _indexCss = require("bundle-text:./index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
class Hero extends HTMLElement {
    constructor(variant, head, subhead){
        super();
        this.variant = variant;
        this.head = head;
        this.subhead = subhead;
        this.skin = (0, _indexJs1.store)?.website || variant;
    }
    async connectedCallback() {
        if (this.isCashed) return;
        const node = await (0, _indexJs.getTemplate)((0, _indexHtmlDefault.default));
        let style = document.createElement("style");
        style.textContent = (0, _indexCssDefault.default);
        const skinText = await this.loadSkin(this.skin);
        let skin = document.createElement("style");
        skin.textContent = skinText;
        this.attachShadow({
            mode: "open"
        }).append(node, style, skin);
        this.setAttributes();
    }
    setAttributes() {
        const shadow = this.shadowRoot;
        const head = shadow.querySelector("slot[name='my-head']");
        const body = shadow.querySelector("slot[name='my-body']");
        head.textContent = this.head;
        body.textContent = this.subhead;
    }
    async loadSkin(skin) {
        switch(skin){
            case "frost":
                return await require("a72bc75f70dd14d1");
            case "magazine":
                return await require("e8c4bce408b8a16e");
            case "java":
                return await require("c689b6398d19603b");
            case "guitars":
                return await require("ef9d6e2d7571d08c");
            default:
                console.log("Class skin: We are out of skins");
        }
    }
    disconnectedCallback() {
        this.isCashed = true;
    }
}
customElements.define("my-hero", Hero);
exports.default = Hero;

},{"../index.js":"aOVNo","../../util/index.js":"6gmsK","./index.html":"3Vbnq","bundle-text:./index.css":"d3WvF","a72bc75f70dd14d1":"371p1","e8c4bce408b8a16e":"hxDyE","c689b6398d19603b":"7m0Bd","ef9d6e2d7571d08c":"enj8K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Vbnq":[function(require,module,exports) {
module.exports = require("966c8f195082fdc8").getBundleURL("ls5e1") + "../../hero.e2872d83.html" + "?" + Date.now();

},{"966c8f195082fdc8":"lgJ39"}],"d3WvF":[function(require,module,exports) {
module.exports = ".flex {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.hero-wrapper {\n  min-height: 20vh;\n  grid-template-rows: 2fr 3fr;\n  padding: 5vh;\n  display: grid;\n}\n\n.hero-head {\n  grid-row: 1;\n  padding: 2vh;\n}\n\n.hero-head p {\n  font-size: 1.2em;\n}\n\n#nova {\n  text-transform: uppercase;\n  letter-spacing: .07em;\n  font-family: proxima-nova, sans-serif;\n  font-style: normal;\n  font-weight: 400;\n}\n\n.hero-body {\n  grid-row: 2;\n}\n\n.hero-body p {\n  text-align: center;\n  max-width: 50%;\n  font-size: 2.3rem;\n}\n\n@media only screen and (width <= 480px) {\n  .hero-wrapper {\n    min-height: 20vh;\n    grid-template-rows: 1fr auto;\n    padding: 10vh 10%;\n    display: grid;\n  }\n\n  .nova {\n    font-family: proxima-nova, sans-serif;\n    font-style: normal;\n    font-weight: 400;\n  }\n\n  .hero-body p {\n    max-width: 100%;\n    font-size: 1.8rem;\n  }\n}\n\n@media only screen and (width >= 481px) and (width <= 768px) {\n  .hero-wrapper {\n    min-height: 10vh;\n    grid-template-rows: auto auto;\n    margin-top: 5vh;\n    padding: 5vh;\n    display: grid;\n  }\n\n  .hero-body p {\n    max-width: 80%;\n    font-size: 2em;\n  }\n}\n\n@media only screen and (width >= 769px) and (width <= 1200px) {\n  .hero-body p {\n    max-width: 80%;\n  }\n}\n\n@media only screen and (width >= 1201px) {\n  .hero-body p {\n    max-width: 70%;\n  }\n}\n\n";

},{}],"371p1":[function(require,module,exports) {
module.exports = Promise.resolve("* {\n  font-family: ltc-bodoni-175, serif;\n  font-style: normal;\n  font-weight: 400;\n}\n\n");

},{}],"hxDyE":[function(require,module,exports) {
module.exports = Promise.resolve("* {\n  font-family: linotype-didot, serif;\n}\n\n");

},{}],"7m0Bd":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"enj8K":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"k9MOj":[function(require,module,exports) {
/* 

  Here we define a Section-component using the Web Components API.
  There are two ways to initialize this component:

  1. With the new-keyword  
    
    const mySection = new Section (...args)

  2. With a custom html-element using attributes 
  
    <my-section src="src" reverse="reverse" variant="variant" head="head" body="body">
    </my-section>

  This project uses both approaches:
    * the first for single-page-applications (SPA) serving content from a database
    * the second when constructing static pages using inline html-code.
  
  Web Components API: https://developer.mozilla.org/en-US/docs/Web/Web_Components
    
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../index.js");
var _indexJs1 = require("../../util/index.js");
var _indexHtml = require("./index.html");
var _indexHtmlDefault = parcelHelpers.interopDefault(_indexHtml);
var _indexCss = require("bundle-text:./index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
class Section extends HTMLElement {
    /* 
    An instance of the IntersectionObserver is attached to the component. 
    It will handle visual effects when the component intersect with the viewport
  */ static observer = new IntersectionObserver((0, _indexJs.handleIntersection), (0, _indexJs.observerOptions));
    /* 
    This method is part of the Web Components API. 
    It defines which attributes that should be observed: 

    <my-section image="image" variant="variant" target="target">
    </my-section>
  */ static get observedAttributes() {
        return [
            "image",
            "variant",
            "target"
        ];
    }
    /*
    The constructor arguments is used when the component is initialized using the 
    new-keyword. 

    const mySection = new Section(...args);
  */ constructor(variant, id, head, subhead, cover){
        super();
        this.variant = variant;
        this.id = id;
        this.head = head;
        this.subhead = subhead;
        this.image = cover;
        this.skin = (0, _indexJs1.store)?.website || variant;
    }
    /*
    This method is part of the Web Components API.
    It is called when an attribute is changed.
    Here we just pass new values to the corresponding property.
  */ attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }
    /*
    This method is part of the Web Components API.
    It is called when the component is first added to the DOM.
  */ async connectedCallback() {
        // if the component is already cached, return
        if (this.isCached) return;
        const node = await (0, _indexJs.getTemplate)((0, _indexHtmlDefault.default));
        // const style = getStyle(csss);
        // const skin 	= getSkin(csss);
        /* 
      Create and attach a new shadow DOM to the component.
      The mode "open" is chosen to make sure the shadow DOM is accessible 
      from the outside with javascript.
    */ const shadow = this.attachShadow({
            mode: "open"
        });
        /* 
      Attaching the html-template and stylesheets to the shadow DOM to ensure encapsulation. 
      I.e to make sure the styles are not affected by other stylesheets on the page.
    */ const style = document.createElement("style");
        style.textContent = (0, _indexCssDefault.default);
        const skinText = await this.loadSkin(this.skin);
        let skin = document.createElement("style");
        skin.textContent = skinText;
        shadow.append(node, style, skin);
        this.setAttributes();
        this.observe();
    }
    async loadSkin(skin) {
        switch(skin){
            case "frost":
                return await require("581d680b843e19a5");
            case "magazine":
                return await require("eff25a485edabb34");
            case "java":
                return await require("5bfef7c42f110f32");
            case "guitars":
                return await require("572d6aaf29d439f4");
            default:
                console.log("Class skin: We are out of skins");
        }
    }
    /* 
    This method is part of the Web Components API.
    It is called when the component is removed from the DOM
  */ disconnectedCallback() {
        // set the isCached property to true to avoid re-creating on re-mount
        this.isCached = true;
    }
    // This method forwards attributes and props to the DOM
    setAttributes() {
        const shadow = this.shadowRoot;
        if (this.variant !== "spa") {
            console.log(this.image);
            let img = document.createElement("img");
            img.src = this.image;
        //shadow.getElementById("image").setAttribute("src", this.image);
        }
        let img = document.createElement("img");
        img.src = this.image;
        shadow.querySelector("#image").src = this.image;
        shadow.querySelector("slot[name='my-head']").textContent = this.head;
        shadow.querySelector("slot[name='my-body']").textContent = this.subhead;
        const button = new (0, _indexJs.Button)("spa", "click here", this.id);
        shadow.querySelector(".section-text-button").appendChild(button);
    }
    // This method adds event listeners and observers to the component
    observe() {
        this.shadowRoot.addEventListener("click", ()=>(0, _indexJs1.store).page = this.target);
        Section.observer.observe(this.shadowRoot.children[0]);
    }
}
/* 
  At last, we register the component in the browser. 
  We can now use <my-section></my-section> in html files
*/ customElements.define("my-section", Section);
/*
  We also export the component, to be used within other components, 
  and/or initialized with the new-keyword. 
*/ exports.default = Section;

},{"../index.js":"aOVNo","../../util/index.js":"6gmsK","./index.html":"ewSQ4","bundle-text:./index.css":"alrkp","581d680b843e19a5":"3W5ck","eff25a485edabb34":"3EZuv","5bfef7c42f110f32":"eWi5u","572d6aaf29d439f4":"dbaZJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ewSQ4":[function(require,module,exports) {
module.exports = require("2a25cd118b2f0ad1").getBundleURL("ls5e1") + "../../section.3eb09d2a.html" + "?" + Date.now();

},{"2a25cd118b2f0ad1":"lgJ39"}],"alrkp":[function(require,module,exports) {
module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.flex {\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  display: flex;\n}\n\n.section-wrapper {\n  grid-template-rows: auto auto;\n  grid-template-columns: auto 300px;\n  margin: 1vw 1vw 0;\n  padding: 5vh 0;\n  display: grid;\n}\n\n.section-image-wrapper {\n  width: 100%;\n  grid-area: 1 / 1 / auto / 3;\n}\n\n.section-image {\n  width: 100%;\n  height: 40vh;\n  object-fit: cover;\n}\n\n.section-text-wrapper {\n  color: #252525;\n  grid-area: 2 / 1 / auto / 2;\n  padding: 2vh 0;\n  font-style: normal;\n  font-weight: 400;\n}\n\n.section-text-button {\n  grid-area: 2 / 2 / auto / 3;\n}\n\n.fade-in {\n  opacity: 1;\n  transition: transform .2s ease-out;\n  transform: translateX(10vh);\n}\n\n@media only screen and (width <= 480px) {\n  .section-wrapper {\n    width: 90%;\n    border-radius: 5px;\n    margin: 5vh auto;\n    padding: 0;\n    display: block;\n    position: relative;\n    box-shadow: 0 3px 8px #0000003d;\n  }\n\n  .section-image-wrapper {\n    width: 100%;\n    border-radius: 5px;\n    margin: 0 auto;\n    display: flex;\n    position: relative;\n  }\n\n  .section-image {\n    width: 100%;\n    aspect-ratio: 1 / 1;\n    object-fit: cover;\n    border-radius: 5px;\n  }\n\n  .section-text-wrapper {\n    width: 90%;\n    height: 50%;\n    color: #f4f4f4;\n    letter-spacing: .06em;\n    background-color: #00000080;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    transition: background-color 2s, width .2s, height .2s;\n    display: flex;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .section-text-wrapper:hover {\n    width: 90%;\n    height: 55%;\n    background-color: #0000008f;\n  }\n\n  .section-text-button {\n    display: none;\n  }\n\n  h1 {\n    font-size: 1.8rem;\n  }\n\n  p {\n    font-size: 1.1rem;\n  }\n}\n\n@media only screen and (width >= 481px) and (width <= 768px) {\n  .section-wrapper {\n    width: 400px;\n    border-radius: 5px;\n    margin: 0 auto 10vh;\n    padding: 0;\n    display: block;\n    position: relative;\n    box-shadow: 0 3px 8px #0000003d;\n  }\n\n  .section-image-wrapper {\n    width: 100%;\n    border-radius: 5px;\n    display: flex;\n    position: relative;\n  }\n\n  .section-image {\n    width: 100%;\n    aspect-ratio: 1 / 2;\n    object-fit: cover;\n    border-radius: 5px;\n  }\n\n  .section-text-wrapper {\n    width: 90%;\n    height: 50%;\n    color: #f4f4f4;\n    background-color: #00000080;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    transition: background-color 2s, width .2s, height .2s;\n    display: flex;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  .section-text-wrapper:hover {\n    width: 90%;\n    height: 60%;\n    background-color: #0000008f;\n  }\n\n  h1 {\n    letter-spacing: .05em;\n  }\n\n  p {\n    margin-top: 1vh;\n    font-size: 1.3em;\n  }\n\n  .section-text-button {\n    display: none;\n  }\n}\n\n@media only screen and (width >= 769px) and (width <= 1200px) {\n  .section-wrapper {\n    width: 40vw;\n    grid-template-rows: 300px 100px;\n    grid-template-columns: 1fr;\n    align-content: center;\n    padding: 0;\n    display: grid;\n    box-shadow: 0 3px 8px #0000003d;\n  }\n\n  .section-image {\n    width: 100%;\n    object-fit: cover;\n    height: 300px;\n    overflow: hidden;\n  }\n\n  .section-text-wrapper {\n    text-align: center;\n    padding-top: 15px;\n    padding-left: 10px;\n  }\n\n  h1 {\n    font-size: 1.8em;\n  }\n\n  .section-text-button {\n    display: none;\n  }\n}\n\n@media only screen and (width >= 1201px) {\n  .section-wrapper {\n    margin: 4vw 4vw 0;\n  }\n\n  .section-image {\n    height: 60vh;\n    transition: scale 1s;\n  }\n\n  .section-image-wrapper {\n    overflow: hidden;\n  }\n\n  .section-image:hover {\n    scale: 1.03;\n  }\n\n  h1 {\n    font-size: 2.2em;\n  }\n\n  p {\n    letter-spacing: .05em;\n    font-size: 1.5em;\n  }\n}\n\n";

},{}],"3W5ck":[function(require,module,exports) {
module.exports = Promise.resolve("* {\n  letter-spacing: .04em;\n  font-family: ltc-bodoni-175, serif;\n  font-style: normal;\n  font-weight: 400;\n}\n\n");

},{}],"3EZuv":[function(require,module,exports) {
module.exports = Promise.resolve("* {\n  font-family: linotype-didot, serif !important;\n}\n\n");

},{}],"eWi5u":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"dbaZJ":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"eQBnc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../index.js");
var _indexJs1 = require("../../util/index.js");
var _indexHtml = require("./index.html");
var _indexHtmlDefault = parcelHelpers.interopDefault(_indexHtml);
var _indexCss = require("bundle-text:./index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
class Footer extends HTMLElement {
    constructor(variant, skin){
        super();
        this.variant = variant;
        this.logo = (0, _indexJs1.store).logo;
        this.adress = (0, _indexJs1.store).adress;
        this.email = (0, _indexJs1.store).email;
        this.phone = (0, _indexJs1.store).phone;
        this.social = (0, _indexJs1.store).social;
        this.skin = (0, _indexJs1.store)?.website || skin;
    }
    static get observedAttributes() {
        return [
            "variant",
            "skin"
        ];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }
    async connectedCallback() {
        const node = await (0, _indexJs.getTemplate)((0, _indexHtmlDefault.default));
        let style = document.createElement("style");
        style.textContent = (0, _indexCssDefault.default);
        const skinText = await this.loadSkin(this.skin);
        let skin = document.createElement("style");
        skin.textContent = skinText;
        this.attachShadow({
            mode: "open"
        }).append(node, style, skin);
        this.setAttributes();
    }
    setAttributes() {
        if (this.variant !== "spa") return;
        const shadow = this.shadowRoot;
        shadow.querySelector("slot[name='logo']").innerHTML = this.logo;
        shadow.querySelector("slot[name='adress']").innerHTML = this.adress;
        shadow.querySelector("slot[name='email']").innerHTML = this.email;
        shadow.querySelector("slot[name='phone']").innerHTML = this.phone;
    }
    async loadSkin(skin) {
        switch(skin){
            case "frost":
                return await require("28229b0f1c5cc8ce");
            case "magazine":
                return await require("70f2447f51a1e879");
            case "java":
                return await require("e2deb17f8245553e");
            case "guitars":
                return await require("588889e1a36ce222");
            default:
                console.log("Class skin: We are out of skins");
        }
    }
    render() {
        const footer = document.querySelector("footer");
        footer.replaceChildren(this);
        return customElements.whenDefined("my-footer");
    }
}
customElements.define("my-footer", Footer);
exports.default = Footer;

},{"../index.js":"aOVNo","../../util/index.js":"6gmsK","./index.html":"llj1o","bundle-text:./index.css":"xfh4c","28229b0f1c5cc8ce":"lNurF","70f2447f51a1e879":"lPExT","e2deb17f8245553e":"6YqbV","588889e1a36ce222":"eRbZc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"llj1o":[function(require,module,exports) {
module.exports = require("3181c3da7faec225").getBundleURL("ls5e1") + "../../footer.805e89e5.html" + "?" + Date.now();

},{"3181c3da7faec225":"lgJ39"}],"xfh4c":[function(require,module,exports) {
module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\n.flex {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.footer-wrapper {\n  height: 35vh;\n  background-color: var(--bg-gray);\n  color: var(--black-faded);\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  margin: 0;\n  display: grid;\n}\n\n.footer-logo {\n  grid-column: 1;\n  font-size: 2.5rem;\n}\n\n.footer-contact {\n  grid-column: 2;\n}\n\n.footer-links {\n  grid-column: 3;\n}\n\n.footer-projects {\n  grid-column: 4;\n}\n\n.button-container {\n  -webkit-user-select: none;\n  user-select: none;\n  opacity: .66;\n  flex-direction: row;\n  grid-column: 3;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  display: flex;\n}\n\nli {\n  list-style: none;\n}\n\na {\n  color: #252525;\n  text-decoration: none;\n}\n\ntd:first-child {\n  font-variant: all-petite-caps;\n  text-align: center;\n  padding-right: .5em;\n}\n\n.footer-projects {\n  display: none;\n}\n\n@media only screen and (width <= 480px) {\n  .footer-wrapper {\n    height: 25vh;\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    display: flex;\n  }\n\n  .footer-logo {\n    font-size: 2.5rem;\n  }\n\n  .footer-contact {\n    width: 100vw;\n    grid-row: 2;\n  }\n\n  .footer-links {\n    display: none;\n  }\n}\n\n@media only screen and (width >= 481px) and (width <= 768px) {\n  .footer-wrapper {\n    height: 35vh;\n    grid-template-columns: 1fr 1fr;\n    display: grid;\n  }\n\n  .button-container, .footer-projects, .footer-links {\n    display: none;\n  }\n}\n\n@media only screen and (width >= 769px) and (width <= 1200px) {\n  .footer-wrapper {\n    height: 35vh;\n    grid-template-columns: 1fr 1fr 1fr;\n    margin: 0;\n    display: grid;\n  }\n\n  .footer-links {\n    display: none;\n  }\n}\n\n@media only screen and (width >= 1201px) {\n  .footer-logo {\n    font-size: 2.5em;\n  }\n\n  .footer-wrapper {\n    height: 45vh;\n    grid-template-columns: 1fr 1fr 1fr;\n    margin: 0;\n    display: grid;\n  }\n\n  .footer-links {\n    display: none;\n  }\n}\n\n";

},{}],"lNurF":[function(require,module,exports) {
module.exports = Promise.resolve("* {\n  font-family: ltc-bodoni-175, serif;\n  font-style: normal;\n  font-weight: 400;\n}\n\n.footer-wrapper {\n  background-color: var(--bg-gray);\n  color: var(--black-faded);\n}\n\n");

},{}],"lPExT":[function(require,module,exports) {
module.exports = Promise.resolve("* {\n  font-family: linotype-didot, serif;\n}\n\n.footer-wrapper {\n  color: #ececec;\n  background-color: #131211;\n  font-family: linotype-didot, serif;\n}\n\n.button-container {\n  filter: invert();\n}\n\n");

},{}],"6YqbV":[function(require,module,exports) {
module.exports = Promise.resolve(".footer-logo {\n  font-size: 2rem;\n}\n\n.footer-links {\n  display: none;\n}\n\na:hover {\n  color: red;\n}\n\n.footer-wrapper {\n  background-color: #0000;\n  margin-top: 15vh;\n}\n\n");

},{}],"eRbZc":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"hg6CE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../index.js");
var _indexJs1 = require("../../util/index.js");
var _indexHtml = require("./index.html");
var _indexHtmlDefault = parcelHelpers.interopDefault(_indexHtml);
var _indexCss = require("bundle-text:./index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
class Double extends HTMLElement {
    constructor(src, reverse, variant, head, body, skin){
        super();
        this.src = src || null;
        this.head = head || null;
        this.body = body || null;
        this.reverse = reverse || false;
        this.variant = variant || null;
        this.skin = (0, _indexJs1.store)?.website || skin;
    }
    async connectedCallback() {
        if (this.isCashed) return;
        const node = await (0, _indexJs.getTemplate)((0, _indexHtmlDefault.default));
        const style = document.createElement("style");
        style.textContent = (0, _indexCssDefault.default);
        const skinText = await this.loadSkin(this.skin);
        let skin = document.createElement("style");
        skin.textContent = skinText;
        this.attachShadow({
            mode: "open"
        }).append(node, style, skin);
        this.setAttributes();
    }
    setAttributes() {
        const wrapper = this.shadowRoot.firstElementChild;
        const image = this.shadowRoot.querySelector("[slot='my-image']");
        const head = this.shadowRoot.querySelector("[slot='my-head']");
        const body = this.shadowRoot.querySelector("slot[name='my-body']");
        wrapper.classList.add(this.variant);
        this.reverse && wrapper.classList.add("reverse");
        // image.src = new URL(this.src, import.meta.url);
        this.head && (head.innerHTML = this.head);
        this.body && (body.innerHTML = this.body);
    }
    async loadSkin(skin) {
        switch(skin){
            case "frost":
                return await require("5c3b373d3c6e1d8d");
            case "magazine":
                return await require("28f0d9514b47b209");
            case "java":
                return await require("d4affd9ffb667510");
            case "guitars":
                return await require("a23eca4809b58dfd");
            default:
                console.log("Class skin: We are out of skins");
        }
    }
    static get observedAttributes() {
        return [
            "src",
            "reverse",
            "variant",
            "body",
            "head",
            "skin"
        ];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch(name){
            case "reverse":
                this[name] = newValue === "true" || newValue === "" ? true : false;
                break;
            default:
                this[name] = newValue;
        }
    }
    disconnectedCallback() {
        this.isCashed = true;
    }
}
customElements.define("my-double", Double);
exports.default = Double;

},{"../index.js":"aOVNo","../../util/index.js":"6gmsK","./index.html":"8ijM3","bundle-text:./index.css":"c7IOG","5c3b373d3c6e1d8d":"dCgus","28f0d9514b47b209":"edCir","d4affd9ffb667510":"fE3Pf","a23eca4809b58dfd":"4d0yL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ijM3":[function(require,module,exports) {
module.exports = require("ceecc83394a61000").getBundleURL("ls5e1") + "../../double.bb39e83d.html" + "?" + Date.now();

},{"ceecc83394a61000":"lgJ39"}],"c7IOG":[function(require,module,exports) {
module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.flex {\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.reverse {\n  flex-direction: row-reverse;\n}\n\n.wrapper {\n  width: 100%;\n  gap: 4vw;\n  padding: 4vw;\n}\n\n.variant-image .image-wrapper {\n  width: 50%;\n}\n\n.variant-text .image-wrapper {\n  display: none;\n}\n\n.image-frame {\n  aspect-ratio: 5 / 7;\n  overflow: hidden;\n}\n\n.image {\n  width: 100%;\n  object-fit: cover;\n  transition: scale .7s ease-in-out;\n}\n\n.img {\n  width: 100%;\n}\n\n.image:hover {\n  scale: 1.018;\n}\n\n.text-wrapper {\n  width: 50%;\n  height: 100%;\n  text-align: center;\n  color: #252525;\n  padding: 2vw;\n  font-size: 1.7rem;\n}\n\n.variant-image .text-head {\n  display: none;\n}\n\n.variant-text.flex {\n  flex-direction: row;\n  align-items: flex-start;\n}\n\n.variant-text .text-wrapper {\n  text-align: left;\n}\n\n@media screen and (width <= 768px) {\n  .flex {\n    flex-direction: column;\n  }\n\n  .wrapper {\n    margin-top: 10vh;\n  }\n\n  .text-wrapper {\n    width: 100%;\n  }\n\n  .variant-text.flex {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .variant-text .text-head {\n    font-size: calc(16px + 2vw);\n  }\n\n  .variant-text .text-body {\n    text-align: justify;\n    margin-bottom: calc(3vh + 10vw);\n    font-size: calc(10px + 2vw);\n    line-height: normal;\n  }\n\n  .variant-image .image-wrapper {\n    width: 100%;\n  }\n}\n\n@media only screen and (width >= 769px) {\n  .text-wrapper {\n    letter-spacing: .08em;\n    margin: 10vw auto;\n    font-size: 1.4em;\n    line-height: 1.5em;\n  }\n\n  .variant-text .text-head {\n    font-size: 2em;\n  }\n\n  .variant-text .text-body {\n    text-align: justify;\n  }\n}\n\n";

},{}],"dCgus":[function(require,module,exports) {
module.exports = Promise.resolve("* {\n  font-family: ltc-bodoni-175, serif;\n  font-style: normal;\n  font-weight: 400;\n}\n\n");

},{}],"edCir":[function(require,module,exports) {
module.exports = Promise.resolve(".text-wrapper {\n  font-family: linotype-didot, serif !important;\n}\n\n");

},{}],"fE3Pf":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"4d0yL":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"fkaCy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../index.js");
var _indexJs1 = require("../../util/index.js");
var _indexHtml = require("./index.html");
var _indexHtmlDefault = parcelHelpers.interopDefault(_indexHtml);
var _indexCss = require("bundle-text:./index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
class Form extends HTMLElement {
    constructor(variant){
        super();
        this.variant = variant;
        this.skin = (0, _indexJs1.store)?.website || variant;
    }
    static get observedAttributes() {
        return [
            "variant"
        ];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }
    async connectedCallback() {
        if (this.isCashed) return;
        const node = await (0, _indexJs.getTemplate)((0, _indexHtmlDefault.default));
        let style = document.createElement("style");
        style.textContent = (0, _indexCssDefault.default);
        const skinText = await this.loadSkin(this.skin);
        let skin = document.createElement("style");
        skin.textContent = skinText;
        this.attachShadow({
            mode: "open"
        }).append(node, style, skin);
        this.init();
    }
    async loadSkin(skin) {
        switch(skin){
            case "frost":
                return await require("489f8657b620078d");
            case "magazine":
                return await require("6603367b6ffddc88");
            case "java":
                return await require("e3e5b3862325f77e");
            case "guitars":
                return await require("a6a59c198c56b5aa");
            default:
                console.log("Class skin: We are out of skins");
        }
    }
    init() {
        this.shadowRoot.firstElementChild.classList.add(this.variant);
    }
    disconnectedCallback() {
        this.isCashed = true;
    }
}
customElements.define("my-form", Form);
exports.default = Form;

},{"../index.js":"aOVNo","../../util/index.js":"6gmsK","./index.html":"j1B3f","bundle-text:./index.css":"fdX1D","489f8657b620078d":"4Yj73","6603367b6ffddc88":"4Yj56","e3e5b3862325f77e":"f1c8r","a6a59c198c56b5aa":"Xx3Lx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j1B3f":[function(require,module,exports) {
module.exports = require("2d4ffa50f690b180").getBundleURL("ls5e1") + "../../form.e47fa77a.html" + "?" + Date.now();

},{"2d4ffa50f690b180":"lgJ39"}],"fdX1D":[function(require,module,exports) {
module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-size: 1.1em;\n}\n\nbody {\n  background-color: #252525;\n}\n\nmain {\n  min-height: 60vh;\n  background-color: #fafafa;\n  flex-direction: column;\n  grid-row: 1;\n  justify-content: flex-start;\n  align-items: center;\n  padding-bottom: 200px;\n  display: flex;\n}\n\n.form {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.container {\n  max-width: 1000px;\n  min-width: 80vw;\n  margin: 0 auto;\n}\n\nlegend {\n  font-size: 140%;\n}\n\nlabel, input {\n  font-size: 90%;\n}\n\ni {\n  font-size: 80%;\n}\n\n.text-section {\n  max-width: 800px;\n  margin: 3vw;\n}\n\n.form-wrapper {\n  max-width: 800px;\n  width: 60vw;\n  background-color: #e1e1e1;\n  padding: 2em;\n}\n\ntextarea {\n  width: 100%;\n  height: 100%;\n  resize: none;\n  border: 1px solid #252525;\n  border-radius: 3px;\n  padding: 1em;\n  font-size: 80%;\n}\n\ntextarea:focus {\n  background-color: #edf0f7;\n  outline: 1px solid #252525;\n}\n\ntextarea:hover {\n  outline: 1px solid #252525;\n}\n\ninput {\n  border: 1px solid #414f5e;\n  border-radius: 3px;\n  margin-bottom: 10px;\n  padding: 5px 5px 5px 25px;\n}\n\ninput:hover {\n  outline: 1px solid #252525;\n}\n\ninput:focus {\n  border: 2px solid #414f5e;\n  border-radius: 3px;\n  outline: none;\n}\n\nfieldset {\n  border-radius: 5px;\n  margin-bottom: 30px;\n  padding: 30px;\n}\n\nlabel {\n  margin-bottom: 3px;\n  display: inline-block;\n}\n\ninput[type=\"file\"], input[type=\"submit\"] {\n  border-radius: unset;\n  width: 100%;\n  border: 1px solid #252525;\n  padding: 20px;\n  font-size: 70%;\n}\n\ninput::file-selector-button, input[type=\"submit\"] {\n  color: #252525;\n  width: 70px;\n  background-color: #fff;\n  border: 1px solid #252525;\n  border-radius: 5px;\n  margin-right: 10px;\n  padding: 10px;\n  font-size: 80%;\n  box-shadow: 0 0 5px #0003;\n}\n\ninput::file-selector-button:hover, input[type=\"submit\"]:hover {\n  scale: 1.03;\n  box-shadow: 0 0 10px #0003;\n}\n\n#submit {\n  width: 120px;\n  margin-left: 38%;\n  font-size: 80%;\n}\n\n#email {\n  color: #252525;\n  background: #fff url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGbElEQVRIibWVXYhkRxXH%2F6eqbt3%2BuN09PTM9E3fdnY%2Be7OK6BjcS42aN2bir4rpEMA%2BixhfBF9cHQQRBUBD8eBC%2FHgR9WBAMiARUDEogJkokBonBRRbMuu5sMjM7Ozs9PX1v3%2B57b92qOj50j4y%2BWy8FVXXP%2BZ%2Bq%2B%2FsfYmb8PwddvHheAKCDBWaGlNKFoUaW5UjT0XJRFA%2BWpT1pbbnIDKGU3AuC4PVarfbXKKr%2FU2sNYwycc5KIDsdnNQ0umMFEQLVatcYYbG7e%2BfhgEH8uTdP3WWvBDAghAADeewCA1hpRVPtju93%2Bfqcz%2FyulpCsKExART%2BN6NRHNkFKyUsolSbKytbV9tdfrnVdKIYqizXq99sswDK9LKXsA2Dk3XxTFg3GcfKLfHzw2GCSPDQbxz5eXj3%2BqUgnLPC%2FUNAno4sXzkohIKWXv3t05u7l55wXnbKVWq%2F1jYaHzpbm52WeVUhDicOkEZo%2FxONd7e3tXdnd73zXGIIqiV0%2BcWHtI6wDTSrxcWVmiarXq9vf3127dWr%2FGzGpxceFna2urF1qt5g2A4JwT3jMzM7xnOOfgnKcw1G5ubu4VpeRzaTr6TJblR4vCvKPdbv%2BCiMDMJJRSvigKbG%2FvPM8MdDrzz66urnxaSomiMIqIEASB997DGIOyLMHMUEqyEAJFUWBhofPK0aNHPhYECoPB4Mnd3d77tdYeAJRSCrdvv%2FnlOE6WtA769923%2BFGAUZalDMPQJkkyv7fX%2F2ye55fL0p4A4IIguKV18FoYhn%2BZmWk9JwTtLC52fh3HyYv9%2Fv7j%2B%2FuDr8%2FPz74ghHBqNBpV4jj%2BqhCEhYXO12q1mi8KIyqViuv19j58%2B%2FabT%2Bd53lZKolKpeGaI0Wi0OBrhbFGYK1LKp6IoepoImJlpfSdJksfH4%2FG54TA9NjPT2hBxHD%2BRZVm1Uqnks7PtnwBAEAS%2B3%2B%2B%2FbX399m%2BNKdvtduvlkyfvP3PixJo8deokHTnylstCCIShhpQyBibvUq%2FX%2FqC1zp1zyPPivUQENR5nlwCgWq3%2BXmttnHNgZmxtbV91zqHRqG%2BurCyfi6IIxhQIwxDVamV9wgJBCEqYJ2wopcZBENzMsuy0tfY4M6DG4%2BxhKSXCUL%2BslAIADAbx%2FcaY9wCEdnvmm1EUYTQaSSKClNaVZbkKAEIQiEQK8BREghBinxlg5iYmBPMSkYDW%2Bl9EBCIgz%2FN3W%2BsQBArVauVP1pagqQcwA85xgxkgIgghRgd2NplZTGFxAKCISBIBUsrBgfFZaxcnCgWUUoNDfkhEALNvMTOIyAkhhpONiY95z3OTSuUeESAA%2BOmXfHCQiLID4%2FOeDyPMAMFad3yaIBWChswMISSstTVjylUhBLQO%2Fj69IkhmwFrXnKgAwlBfF4JgrYMxZkXrAAC81toZY5Akw48oJQGgQiSsEASlJNJ0dD7Pc12phMN6vf6StQ4C4F2AYW3ZBTD93ep%2FDoIgBhj37vW%2BnSRDVKtVDwD37u1%2BPk2HD0xE2XA4HH5Qa42iMOj3979RliWazca3arVa6ZwT1O0u%2FyZJhpdnZlq%2FW11dueS9RxAE2NnZefKNNzaeAQi1WvVWq9V8fjQan%2Bz19h7rdOZ%2B0Gg0rm1t3bmqtUaz2bya5%2FnDcRy%2FfWamdW1trftOIiLnnJTLy8dnB4Pkkvd%2Budlsfq9Wq5iyLGWz2bwupVw3xjyQZXl3f3%2FwLma%2FvLAw%2F8Njx459odOZ%2B1tRFNFwmD4Sx8kZY8zC7OzsM93u6mWllC3LUhGRp0cfPdu%2BefNW31qHubn2j7rdlStlaYmZobXmLMuQpukZ77larVZutFrNnrUO3nsppXBxPDxujHlrEATbzWZjXQgBYyYmCYDl6dOncmPKMk3TC3lePEQkXp2bm73B7FGWpVJK%2BUYjuhtF0UYQqLExJXnvlfeemOGbzUbcaNQ3tNYD7z2stepw25Td7gqazcZLaTq6kOf50ng8%2FmRZ2q16vf5aGIaeiOC9h%2FcezICUEkpJHwSBF0IgyzIYY%2BoAPDP%2Fb0%2BGXFo6JpVS3Go1f5pl2dnRaNwdDtMn0jT9gLWWnXMj73noPXvnHMqyrIzH2fJwOHyk1%2Bs9tbGx%2BWOt9Y1Wq%2FW6c%2B6%2F296UZBhjdBhqs7a29qHt7btf7Pf7X0mS5FwcJ%2BcqlRBBEDghxC4zC2ZeKEuLoijgnDugfQ%2Fg%2FwQ9lID%2FDbJQhCXf80BDAAAAAElFTkSuQmCC\") 5px / 12px no-repeat;\n}\n\n#homepage {\n  color: #252525;\n  background: #fff url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89%2BbN%2FrXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz%2FSMBAPh%2BPDwrIsAHvgABeNMLCADATZvAMByH%2Fw%2FqQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf%2BbTAICd%2BJl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA%2Fg88wAAKCRFRHgg%2FP9eM4Ors7ONo62Dl8t6r8G%2FyJiYuP%2B5c%2BrcEAAAOF0ftH%2BLC%2BzGoA7BoBt%2FqIl7gRoXgugdfeLZrIPQLUAoOnaV%2FNw%2BH48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl%2FAV%2F1s%2BX48%2FPf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H%2FLcL%2F%2Fwd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s%2BwM%2B3zUAsGo%2BAXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93%2F%2B8%2F%2FUegJQCAZkmScQAAXkQkLlTKsz%2FHCAAARKCBKrBBG%2FTBGCzABhzBBdzBC%2FxgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD%2FphCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8%2BQ8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8%2BxdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR%2BcQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI%2BksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG%2BQh8lsKnWJAcaT4U%2BIoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr%2Bh0uhHdlR5Ol9BX0svpR%2BiX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK%2BYTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI%2BpXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q%2FpH5Z%2FYkGWcNMw09DpFGgsV%2FjvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY%2FR27iz2qqaE5QzNKM1ezUvOUZj8H45hx%2BJx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4%2FOBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up%2B6Ynr5egJ5Mb6feeb3n%2Bhx9L%2F1U%2FW36p%2FVHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm%2Beb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw%2B6TvZN9un2N%2FT0HDYfZDqsdWh1%2Bc7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc%2BLpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26%2FuNu5p7ofcn8w0nymeWTNz0MPIQ%2BBR5dE%2FC5%2BVMGvfrH5PQ0%2BBZ7XnIy9jL5FXrdewt6V3qvdh7xc%2B9j5yn%2BM%2B4zw33jLeWV%2FMN8C3yLfLT8Nvnl%2BF30N%2FI%2F9k%2F3r%2F0QCngCUBZwOJgUGBWwL7%2BHp8Ib%2BOPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo%2Bqi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt%2F87fOH4p3iC%2BN7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi%2FRNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z%2Bpn5mZ2y6xlhbL%2BxW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a%2FzYnKOZarnivN7cyzytuQN5zvn%2F%2FtEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1%2B1dT1gvWd%2B1YfqGnRs%2BFYmKrhTbF5cVf9go3HjlG4dvyr%2BZ3JS0qavEuWTPZtJm6ebeLZ5bDpaql%2BaXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO%2FPLi8ZafJzs07P1SkVPRU%2BlQ27tLdtWHX%2BG7R7ht7vPY07NXbW7z3%2FT7JvttVAVVN1WbVZftJ%2B7P3P66Jqun4lvttXa1ObXHtxwPSA%2F0HIw6217nU1R3SPVRSj9Yr60cOxx%2B%2B%2Fp3vdy0NNg1VjZzG4iNwRHnk6fcJ3%2FceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w%2B0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb%2B%2B6EHTh0kX%2Fi%2Bc7vDvOXPK4dPKy2%2BUTV7hXmq86X23qdOo8%2FpPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb%2F1tWeOT3dvfN6b%2FfF9%2FXfFt1%2Bcif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v%2B3Njv3H9qwHeg89HcR%2FcGhYPP%2FpH1jw9DBY%2BZj8uGDYbrnjg%2BOTniP3L96fynQ89kzyaeF%2F6i%2FsuuFxYvfvjV69fO0ZjRoZfyl5O%2FbXyl%2FerA6xmv28bCxh6%2ByXgzMV70VvvtwXfcdx3vo98PT%2BR8IH8o%2F2j5sfVT0Kf7kxmTk%2F8EA5jz%2FGMzLdsAAAAgY0hSTQAAeiUAAICDAAD5%2FwAAgOkAAHUwAADqYAAAOpgAABdvkl%2FFRgAAG3JJREFUeNrtnXl0VGWaxjupVGWrpCoJWUkghCWGnZCEVQQMIvsuiRsgRJEREVEWJYIddgSSANrdouPYc2bp7un5w%2BOG3T2eWT3T9kg7M32Oy0w32i4s3S6tNtpzjvO%2BxXP1WoJUVapu3Xvr8ZzfgYRYuffWfX7f%2B31V9X7f%2Bvzzz79FCElNeBEIoQAIIRQAIYQCIIRQAIQQCoAQQgEQQigAQggFQAihAAghFAAhhAIghFAAhBAKgBBCARBCKABCCAVACKEACCEUACGEAiCEUACEEAqAEEIBEEIoAEIIBUAISZYAHnzwwYuSnp5O7I9PuFLYITwv%2FEb4vfAxeF%2F4rfCi0C20CiW8bvbnm7JJAZD8DE%2FGbR6P54Twpyh5y5Pu6fZ5fUN5HSkACsBZN0Wa1%2BtdIiF%2B2RTozzIyMsx8GsaX%2F%2BbJ%2BMz0%2F70n3%2BsI5AfyeG0pAArA5sHPy8vLl8B%2BzwiwEXYRgnLO5%2FP98Rvx%2Bs7pz3kzvJ%2BaZSB%2F%2F9fs7Ozh%2Bjt4rSkACsCG4ff7%2FX0lqM8bwdcQG6HPzMz8JCsz6%2BOsrKyPsrOyP5IwK38Aoa%2F134SP9WczfZmGDMwieFu%2BnqK%2FiyKgACgAG4W%2FoKCgWoL6kmnEP6ch1tBruHNycj7Mzcn9wJ%2Frf19E8X6eP%2B89M%2Fo9%2Fbfc3NwP9GdVDIYMRCBfiEAkcFr%2B7UpKgAKgAGwQfKVXr141Es7%2FCI36ElQd8Y3gS%2Bg%2FDAU%2BL%2B%2B9%2FPz838lc%2FneBQOBsMBD8Gvp9%2FZn8vPzfixTOyyA757wIfJmfqFSwXnAKEkinBCgAYp%2FwnwuV%2BlLK6yiuwdcwS%2Bg14GcKggWnCwsKlVMX4bT%2BjHAmJIPzInhPKweViVENhCqMDO8pefxmSoACIMkP%2F6c6X9eAaumuI7eO%2BDraa5hDoS8sPFVUWPRuUVHRu72Ker1zMUI%2FI6gQVAZaGagIdHoQqgakstAKI7S%2BQAlQAHwSbBP%2BjzWgGlQNrAa3oKDgtIT5lDn0xb2K374UZhmoCILB4BmViU4LtLLQKYFJAqcpAQqAJCv8UpLrqBwKv5b8MofHqB8a8SMN%2FcVEoPLQ6kGrAUjgvYtIgGsCFABJZvhNJf8pCW%2BPwn%2BhaiAkgUDgLCVAAVAAdg1%2FYSj878Qj%2FF%2BrBsIkoK8wUAIUALEg%2FMXFxf0uEf7QfD8R4f%2BaBAooAQqAArDTyJ%2Fw8EcpgTOUAAVAXDLy90ACfHWAAiBuCn8MEphGCVAAxEXhpwQoAAogyav98Qh%2FeVn5G32q%2BvyvRRK4ihKgAEjPR%2F64hL%2BstOzNlStX%2FnjrvVv%2Forpv9WusBCgACiBFwl9SXPL20qVLn5DfeUTZtGnT4xZKgJUABUCSGf758%2Bc%2FJb%2BzUzgIOjdu3PgYKwEKgAJITvirLQv%2FvPlPyu%2FcL%2BwWdgD9%2Bz6RwCMWSeA0KwEKgOH%2FMvwvWRH%2BefPmafj3CvcL9wh3C3cJm4Vtwq677777GKcDFAAF4LKRH%2BHfI9wn3CmsFpYLy4Q24XZIYadUAscsrAQ4HaAAOPInKvxKWPjXIfQLhKuF6cJc4VphjbCFEqAAKAD3hv8GYZYwQRgljBTGCBrCa4RbKQEKgAJI7Gr%2FCSvCjwW%2F8PDPROBrhT5CldAfIpgaLoFNmzY9zIVBCoACcFj4LzDy34jwNwkDhDIhKASEXkJfYYQNJMBKgAJw7dt7rSz7935D%2BEsEv5Ap%2BIQcoRASGJ5kCbDRKAXgypH%2FJSs%2B2DNv7rynIgy%2FDyFTMoTsSCTQt0%2Ff1ykBCoACsGEzjyhGfiP8aSBiCejCICVAAVAA8Sn7kxL%2BtrY2j8%2Frq5NjnScskb%2BPKi8vz4tSAlatCVACFAA%2Fzx%2Bv8Hu93rkej%2Bdnwh%2BF%2FwO6599%2FyrHe1dzcnG3DSoDtxSgAlv1xCP8eY9vwiyHH%2FOSgQYOKI5GAvm3YIgmwEqAAGP4ehD9LjqUzFHBPaPfgz7C%2FXwhs%2BPkZdv%2F9k4ji%2BJAhQ0oieXXAYgmwEqAAGH7Tm3wuFX6d12dlZmZ2GcEP7R7s9Z3TYOmOv4r%2BPRS0L3f%2F1Z97buTIkaVRSOA1SoAC4JzfZuGXY%2BkKBTrj%2FLbh2D04tHW4Hp%2BiG4rqjsLY%2FVdFYEjgeDQSsPBThJQABcDwRzTyG6O%2BBEiDpMeluwfrsWnADPy5%2Fg%2Bw3VdIBKgGQhKor6%2BPdDrwiEWVAFuOUwC2Cv8vbBj%2BTgT4nJb52VnZH2mQNFC6gaiGKxgIngFnjY0%2FVQ5aEYSqAZkqYPfhZ6OQwDFKgALgyJ%2BY8O%2BJcuTXbcM%2F0XJfg63bhmugjA1EQxSe%2F1OPVUWgP6NbjIdLQB7r2YaGhuIoKoHXKQEKgOGPfzOPmMOvAZewnza2DTej31MRBIPBM1ohqAT0fMIkYNfpQMp%2BgIgCcHsDzziN%2FFrqa8CN8F8wbEXnJaDHH5KA%2F8ISsGklkJISoAAY%2Fq%2FP%2BRF%2BXdiLJPzmsAnxlsAxdhumABh%2Bm4c%2FFglEszAoEniVjUYpAIbfxuGPQQLPRSoBCz87kFISoAAY%2FriGPwYJ%2FCTKdwy%2BzvZiFADD3%2FPV%2FoSFP1oJyJ%2FG24ZzbSYB168JUADu7Nt%2FqfAfSnT4EykBC6cDrq8EKAB3tu6OauSP9KU%2BCyRwPBoJsNEoBcDw2zz8sVQCw4cPL7OhBFxZCVAA1jfwTLnw92A6kGMjCZxyYyVAATi7b%2F%2FeWOf8Voc%2FBgk8i0qAEqAA2Lo7htbdtgt%2FmATeiWRNIFIJcN8BCiAlwh%2FzR3ptEn6XSMA1PQYpAPf18OvxB3ucLAHuO0ABMPwOCH8sEohmYZASoABSNfydTgl%2FDBJ4lhKgANi91wUjf08kYMPpgGPXBCgAlv1OlMBxm36AyHHdhikAl478iXpvv53eJ0AJUAAc%2BV0U%2FlgkEE2PQYuaijhKAhSAMzfqtOwjvXaXgHYbtmFnIcdIgAJg2e8GCRyPct8BqzoL2V4CFICzd%2BxxbfgTXAlw3wEKwD59%2Bxn%2BpFQCbDlOATgu%2FJ2pFv5YKoFo9h1I9ZbjFED0c37bbNqRKuG3YN%2BBlG05TgE4dMeeVAt%2FIluOp%2FLmIykvgFRu3U0JJE0CtqkEUloADD8lkMSXCG1RCaSsAJLRujvK8B9i%2BOMngaampoj3HUilRqMpKQCru%2FfacdOOVJNAtJuPpMp0IOUE4IBNOxj%2B1Gs5nrTpQEoJgH37KYFodyByuwRSRgAOCP8hhp87EFktgZQQQDL69vd0tZ%2Fht2w6YLduw5auCbheAEnctIPhd9GagMUSsKwScLUAwt7e%2B5INd%2Bxh%2BO3Tcjw3FTcfca0AuGMPiaHRaEQScFO3YVcKwAFtvBh%2Bdhu2hQRcJ4Aoyn727acEeroDkeO3IXOVABzQw6%2BL4ecORDFWAglpL%2BYaAbBvP0nGDkQWtxyPeyXgCgEw%2FCSFJBDXSsDxAuB2XcRGOxC95jQJOFoAdu%2FeK8fC8LugvVg0ErDwU4RxkYBjBcDW3cTG3YatkkCP1wQcKYCw8P%2FChuHnR3pTexuyY06RgOMEkMSRnw08WQlE1XLcCZuPOEoAyejbH%2BUHexh%2BTgeSNR2I6QNEjhEAW3cTh%2B47YOsdiBwhAHbvJS7YfMSWlYDtBcDwE7fsSmzHHYhsLQCGn7hp3wELPzsQsQRsKwCGnzhIAj%2Bx6duGLykBWwogGeFn625i5b4DFkrgG9cEbCcAB%2FTt5449lEBcWo7boRKwlQDYt5%2Bw5bi1lYBtBMDwE%2B5AZH0lYAsBRNHAk%2BEnTpsO5NhIAqfCK4GkCyCJffvZwJMk%2FANE0fQYTIYEki0Atu4mbDSa5H0HkiUAy7v39vQjvQw%2FcZEETl9KAokUQCj8vXv3LrPq8%2Fzs4Ucc1nLcqm7DUy4mgYQKoK2tzScB%2BxHDT9hjMKkSeEOn4BeSQKIEoL8kQ0J1HTftIOw2nHwJZPoyH29vb%2FeFSyARAtAH90yZMqVILso%2F6UVh917Cbcisl0BOTo5ZAh%2FKz03QgTmRAkiDYXyVlZVT5ReHLkqyX%2BpbsGBBgOEnyZgO1NbWViXzA0RmCeTl5XXoQKgDtCGBRAhADZNbUlKyDkH7gz%2FX%2F75epHiGP5qRXy7I1XxvP0nG%2BwTk63sROmslEDRJIDvnQzmmj2XAe0Z%2BT74O0Bio4y4AfdBMISgCOCjm%2BWKU1YukF8vqOb8ix7KIIz9JhgTkXtsp92A2chFRe7G4NRVRCUjVrcekA7Hc8%2F8ov8PocBSaCsRTAF%2BM%2FkKZTAEOavmhBpKgnUX437Uo%2FH5ccMVfXV29NNPH8BOLJJB7PnAqgaKior0YdbMw8mZb2Fno%2FDHJ%2Fa73vVTC%2FyyPX4Xj8SZCAPqgAT254cOH36tltmnR712Lyn4%2FLrTXuNh1dXU3mqsRhp9YJIGPKsorDmDUzcU96Y1UAnGYDoSOyZgKlJaWPo2cFEFI6fEWQCYefEBLS8u1cjHeMo3%2BVobfgwutX5ePHj26LbwaYfhJoiSgA0xo1M3J%2FUCqz8MYdQOmezMjQgn0qNuwaSoQOp4RI0Z0yeMO0Qod04C4CiAdJ6VBrOvs7LxywIABP8XCX8xhM7XxijT86cYrEboWIVRPmDBhrRo5ntUIIRcMXFGRSsBYgHt%2F4MCBD4WPusASCRhrAXJcJ1etWnWTPOZIoQJ58SRCAKWwTPOyZcvu68loG2P400AWLvrAyVdMvjNsLYLhJ4mTgMy9g8HzVYBMPx%2BWe3AwcpFjukejkkCsnx0whDSmaczfyWPNEUYJlVgkz0iUAPSE9UMIy2T0fSJWAUTYwPMr4cfnn79SjUydOnWD8UoER39igQBCo66uBQwZPOSY3IPDdCqKdQCPqT9GNBKIaWFQBVBTU%2FPy7t27b5fHmZ1oAWRhweMyYbJwfXd3991jx4x9PprQlZWWvblwwcInYgl%2FmABCMmpubt5IARCrML8EN3To0EfkHhxhLrvDOmRFJYF%2B1f1ei0ZGEv5fbd68WXO0UpiBx07IFMBYBNST6C%2BMFxYLtwnbZs6Y%2BVRl78rfXOqg%2B9f0f6Wtre2vYw3%2FBQQwZFrzNEMAnP%2BTxAugCO%2FGOy%2BARzHv7h0ugFgksH3b9ofqR9W%2FGMlxNDY0%2FtuOHTsekP9vgw7GeLzByE92Il4F8OI1xiqUGhpaXXjYJOxqb29%2F%2BKppV%2F3sstrL%2FruivOKkcaBVlVW%2FHj5s%2BC8XL1r85L59%2B46Ghf%2BGaMJPARAnCSAWCQgHVq1c9YPGxsZ%2Fr%2BlX82ppSelb%2Bnvlz9%2FKAPrq2LFjX7jlllt0EN0nbMX%2Fu1AYh8G5EIN13AXgwUKHhrRWuFxYIqzBgewWDnV1dR3Ztm3bo5s3bX58y5Ytj3d0dOg8qVs4iJ%2FRn70d1poRTfgpAOI0AUQggSnI0WoMpvqe%2Fv1ClwyY39m6detjmiX9U7%2BW73ci%2FNuFO5CjaXis3ol6I9C3TC%2B%2FBVAFjMAvbsVU4B5hBw7uAAJ%2FEH%2FfixNTy%2F2ZcJ1wtdAYTfgpAOJEAUQoAZ1S3yzcpdNqDJb7TTk6iK93o4JeLyzH4l8TRv8iPLYnEQJIMx28%2FqIaYbQwHRJYjYPfCjt9G2yDHO4U2lDyqDgacNARh58CIE4VwDdIoA9eSbhCWIBQr0U1oEG%2FHznSP9vx%2FduwdjYb63G1eAOQ3xj9E9UPIB2%2FIBevCPSHBKZiHnIjRLAW5ck6HGwbRv15eAVhJARSHE34KQDiZAFcRAIFqKiHIMy6JtaC9bU1yNAdmDavwfevQQU9Fq%2FKlaP0zzQ3BUlUQxBjKuBHgKthsPEY2eeinFmKA10EU6kkxmClsg%2BqCOM91NHsh04BEMcK4CISCOLlu0EYUCdhfWwBMtSCPxcg%2BJOwED8A4Q%2FgZfqMRHcECpeAsXNKBaqBoTgBNdMESGEMDlaD3w%2BlShAnHlX4KQDiBgGYN9NBaLMwghdjcKzFGlsTMmRkqQnfr0XVUIw3%2FWSGh9%2BKrsDGdMA4%2BCLYqA%2FK%2B%2F6gGu9OKoMs%2FKYDjir8FABxiwDCJODBgJqDwbEYj9nXlKUafF2Bfw%2Fg532mLkCWCSD84A0R5EIGQYS9EH%2FPx79lmkf9aMNPARA3CeAiUwKjr4AfIS9AjgrwtR%2F%2F7jMPoknfGsx0Asbnon2mz%2B5nQBQxB58CIG4VQFg1kB6WJd8FspR%2BoRE%2F6duDh53IV4j1wlAAJBUEcAkpXDRHthNAoqEASKoIIMI8UAAUAKEAKAAKgFAAFAAFQCgACoAQCoACIIQCoAAIoQAoAHdS2btSuy6duGraVc8vWrTo6YULFz6TCBYtXPTMnNlznmtsaPy5dquhACgACiCJVPet%2Fp%2B5c%2BYe3759u96IR8Bh0J0ADhu%2F58CBA99dvnz53w8dMvSXFAAFQAFYzMSJE%2F9l165dDyOYnegY8wC6xuxDF6Z4sg%2FsR5enQ9q2qru7%2B%2BiC%2BQueriiveIMCoAAogASjG6rIqK9bQXeZ2q3tRMeY%2B9CR6Z4EsRVdabaj%2FdseSKdz9erVf6NTEQqAAqAAEsj06dOPY7Tfg1ZR96IV2zp0jFmN3nLahWlVnGgDN6ML7Vq0o94CGWifugduvfXWv9J9HygACoACSADDhg47cfTo0f0Yfe9Fn8Vb0IrN6BgzG22lZoCr48AMPOZstHVbjBZvq9CqajMqkH1z5sx5igKgACiAOKN94Tds2PAwgrYRI7HRZ7EZXWOa0H1pJLrNxpMReOwG9KDXTraz0PqtDTK6r6ura9%2BggYN%2BRQFQABRAHPekq6%2BvfwHh34CtoBYh%2BE1oxTYAHWMq0TXGoDwOGI9Vaer4VIf2b1egD%2BQyTEPalyxe8kO3ipgCoAAsD7%2FS2tr6fcz1b8KofzmasRp9FovQMSYPN2NunPGDfHSnKYEMBqMH5Ezs9LSuo6Njd3lZ%2BUk3SoACoAAsF4CU%2F2%2B2t7fvQKmt8%2FyJCF5vhNHcbs3cfSmeePDY5rZVAchnICqRmagENgyuG%2FwiBUABUAA9DL%2FecFWVVa%2FI3Pp2LPRdgfBXmHrBZ8S781IUjSz9qAYGYW1Aq5ObmxqbjrtRyBQABWCtAOSc%2BlX3e%2FnIkSMrsAvTSLSEDkSzoUqCRGB0hvZjrWAwNn5pmTRp0g8KCwpPUQAUAAXQAwFoiPpU9Xn58OHDS7DSPxDz%2FSyjHbTVz8EFJOBD9%2Be%2BeJVg9uUTL%2F9LNz4nFAAFYOnor%2BdV2bvy5e7u7tl4Ga4SpX9GMsMfJgFj5%2BgyVAFTx40d9%2Bdy7GcoAAqAAuiZAM5UlFecEAE0I1ylOP%2F0ZIc%2FTAI%2B9K%2FXlyMnNDU2PRIMBM%2B6bRpAAVAAVgrglIToTHl5uQpgMhbairDwl2YzAXixLqHTgKaGhobvBQIBCoACoAB6Mv%2FXUbS8rPxEV1fXRGwRVYjR1jYCwPOSgfcg6AJlff2o%2Bu9oSOQcTmtoKAAKgAKIUQBlpWUviQDG4x14utjmtVP48bx4EAINw8hRo0aFBKBhoQAoAAqgZwI4AQH0c4AA9P0JI%2BW%2Fh0ICwPNCAVAAFECMAigtLVUBjMNOy04QwAgKgAKgACgACoACoAAoAAqAAqAAKAAKgAKgACgACoACoAAoAAqAAqAAKAAKgAKgACgACoACoAAoAAqAAqAAKAAKgAKgACgACoACoAAoAAqAAqAAKAAKgAKgACgACoACoAAoAAqAAqAAKAAKgAKgACgACoACoAAoAAqAAqAAKAAKgAKgACgACoACoAAoAAqAAqAAKAAKgAKgACgACoACoAAoAAqAAqAAKAAKgAKgACgACoACoAAoAAqAAqAAKAAKgAKgACgACoACoAAoAAqAAqAAKAAKgAKgACgACoACoAAoAAqAAqAAKAAKgAKgACgACoACoAAoAAqAAqAAKAAKgAKgACgACsAKATQ3N2%2BiACgACiBFBTBr1qw7zDcaBUABUAApJIAVK1Ysk5vsXQqAArBaAGPGjDlIASRXAIP37t07o6S45FW50c5QABRAwgVQ%2BIUAzs6dO%2FcuCiB5AihRAQjNQwYPeZICoACsFEBpSenrO3fuXAgBVFAA1p1wmkkAdcLU1pbWDk4BKADLBCDn1NDQ8CM5z5nCcJxzLgVgnQCyhGKhVpgsXF9bW%2FsCBUABJPo50XORKefJjRs3bpDznC4ME8ohgHQKwBoB%2BIRCYYAwUWhZv359R1lp2UkKgAJItABmz5r9fTnHZTr9xDS0FFUpBWCRALwIggaiSdC52JqWpS2PuaXUpADs%2BZyMHzf%2Bp3J%2B64VWYZIwSOiFqjSNArBGABm42XpjEWaGsFLYvHTp0r%2BtKK94gwKgAOLNpEmT%2FkHOrV24VVggjDE9Jz4KwPpXAox1gCt0GiCsE7Zv2LDh0WFDh52gACiAeNCvut9rrS2tP5bz2iHchfJ%2FumkB0I9BiQKweB1Aw9BXGC3MEm4SNuKJOrhixYofNjY0%2FryqsurXJcUlbzlVAL169XrFaQIYNmzYMScLQKrIk3WX1f3X%2FHnzn9m1a9dDck57hHsx%2BuuUczzWoIqSNf%2B3hQCShDENyMXLgbVYDNQnZrWwRdgpHBC6hCPCUeCE%2F%2FQ49V1m24W1wuKwctNrw%2BfkKwLAS2Rtwj3CPqH7Qef8dxT3TDeehz0o%2Fddi7n8lVv%2F1XPPxfKTZ7TlxswCMaYBWAQGhEk%2FIFGEJJKCVwP3CbmE%2FnshDQqcDOISbbqtpvtmIaidgYwHk4iWxYSiRV5gqsgMOufaduFf0ePcKHZDYbcJ1OK%2FRkHEhFv88FEDyqoAsPBF9MfKoBBZhUVDXBDYL90EGHbgZ7U4HRhxdbV6O0XSUUIURJ8OmQs7BS2J1eB5aEZwtuP5OufbfFrYh%2BHcKt2CNScPfIPTH%2BlOuXUf%2FVBCAWQI5mIv1xehzuTAbN6CKYI1wu3AHnlC7sx7BuQnl%2F2S83lxuWnCyowCy8ZKYzo3HCnOEG1DFOOnar8P11ynM9cJ8CK0e4S%2FB8%2BDFeVMASRRAOp6IHFQClVgTaEBwZqCEXgKLqxSutTmtOF4N0FSUnDUIVzZKTjsKIBNrFJUmEc%2FE2kyLQ667cg2OeTbm%2ByqzoRhgihF%2Bn53DnyoCCJdANubIJXiyajEtaMCTqCu3E7BgaGcm4HgbcOPV4JzyTDeeHZ8HL8riIkxX6jB1GeOg666MwxvMRqHyqkH1VWAq%2B20d%2FlQSgHHzGdMBH56kIGxdARn0Q%2Fk2wCHU4LgrcB75WO%2FIsOmNl4bKxLj%2BWo2VQQROuvb9Tde%2BEmsahRj1jetv%2B%2FCnmgDCqwFDBNl44vIhhAI8mU6gANVMHqY3PpvffGlhEjCufQDXvtBBBMOufWbYqJ%2FmhDykogDMN6JZBhl4An0OwwsyHHLzma%2B7x3TdvQ6%2B7h6nBT%2FuAiCEuBNeBEIoAEIIBUAIoQAIIRQAIYQCIIRQAIQQCoAQQgEQQigAQggFQAihAAghFAAhhAIghNid%2FweVUCoZSDxfkAAAAABJRU5ErkJggg%3D%3D\") 5px / 13px no-repeat;\n}\n\n#subject {\n  color: #252525;\n  background: #fff url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA9QAAAOYCAYAAAA0TruTAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A%2FwD%2FoL2nkwAAAAlwSFlzAAAASAAAAEgARslrPgAAgABJREFUeNrs3Xl8XVW9%2F%2F%2FPOSfz0KZD2qQjrVBkzFTapBmb7DShg4pXEAVEviIKCtyvwkXggoCKFgeQK4MVhK8MooACTceczGNbMl3KWOjcJk3SOVPTc876%2FaHdv6SQ0p4mWeec%2FXo%2BHv7j%2FdK%2B65fuvd7Z67OWTSklI6mvr0999NFH8vHHH8uWLVtk79690tfXJyIiPT09Mn78eImNjZUpU6bIrFmzJCUlRcaMGWMb0VAAAAAAAL9y5MgRtWnTJtm6dau0trZKe3u7dHR0SEhIiERERIjNZpOpU6fKueeeK1%2F4whfki1%2F84oh3y6Dh%2FgU9Ho%2Bqq6sTp9MppaWlUl9fL%2F39%2Faf9z9vtdvniF7%2Bo5s%2BfL7m5uWIYhsTFxVGwAQAAAMBC2tra1IleuWHDBvnggw%2FE4%2FGc9j%2FvcDgkJSVF5ebmSl5enixcuFAcDsewdkvbcH2h3rNnj3rxxRdlxYoVsnXr1mH9H3L27NliGIYYhiGLFi2SsWPHUrABAAAAIID09PSo2tpacTqd4nQ6pbGxUYZzR3V8fLx861vfkhtvvFHOPffcYemUZ12ot2zZon7605%2FK3%2F72tzP6aYG3QkJCJC0tTfLz88UwDJk7d%2B6w%2F5QBAAAAADCy3G63evvtt8XpdEpxcbHU1dWd0e5mb9lsNrnyyivloYcekvPPP%2F%2BsuqTXhbqtrU3dd9998vzzz4vL5RrxP%2FRQYmJizK3hhmHIeeedR7kGAAAAAB%2B0ZcsWdeILdGlpqRw6dEhblqCgILn%2B%2Buvl5z%2F%2Fuddjxl4V6tdee03dfPPN0tnZqe0PP5T4%2BHjJyMgQwzBk6dKlMmXKFAo2AAAAAGjQ2dmpysrKzK%2FQ27Zt0x3pU2JiYuQPf%2FiDXHPNNWfcHc%2BoUB89elTdfPPN8tJLL%2Bn%2BM58Wu90uiYmJYhiG5OfnS3p6uoSHh1OwAQAAAGAE9Pb2qpqaGikuLhan0ynNzc2jMho8HK655hp56qmnJDo6%2BrQ742kX6j179qhly5ZJU1OT7j%2Bn18LCwsyv14ZhSFJSktjtdgo2AAAAAHhp69at5jbutWvXytGjR3VH8trFF18sq1atkhkzZpxWTzytQt3S0qKWLl0qu3fv1v3nG1YTJ06UhQsXml%2BwZ82aRbkGAAAAgFNobW1V1dXV4nQ6paioSPbu3as70rCKj4%2BXlStXSkpKyuf2w88t1C0tLSonJ0frsPhoGXg9V15enowfP56CDQAAAMDSurq6VH19vXmdVUNDg%2B5II27MmDFSWlr6uaX6lIX6448%2FVhkZGbJv3z7df55R53A4zPlrwzAkMzNTQkNDKdgAAAAAAprL5VItLS1mga6oqJDjx4%2FrjjXqJk6cKFVVVfLFL35xyB44ZKFua2tT8%2BfPl507d%2Br%2Bc%2FiEyMhIyc7ONgv2JZdcQrkGAAAAEBDeeecdNbBAd3d3647kE2bOnCn19fVDXqv1mYXa4%2FGowsJCKS4u1p3fZ02aNMks2IWFhac9tA4AAAAAuu3bt09VVlaK0%2BmUNWvWyK5du3RH8lmLFi2SNWvWfOaB1p9ZqH%2F1q1%2Bpu%2B%2B%2BW3duvzJw%2Fjo%2FP19iYmIo2AAAAAB8Qk9Pj6qtrTW3cTc2NsqZXKFsdY888ojceeedn1%2Bom5ub1bx58yy5R364BAcHS2pqqlmw582bJ0FBQRRsAAAAAKPC5XKpjRs3mgW6vr6ejncWgoOD5e2335ZLL710UK%2F7VKE2DEOVlJTozhtQIiMjJS0tzSzYycnJYrPZKNgAAAAAhs3A%2B6CdTqccPHhQd6SAsnDhQiktLR26UP%2Fzn%2F9UX%2F3qV3XnDHhxcXGSmZkphmHIkiVLZOrUqZRrAAAAAGeko6NDlZeXi9PplHXr1smOHTt0Rwp4b775pnzpS18y%2B5tZqD0ej7rwwgvlww8%2F1J3RUmw2myQkJAy6nisiIoKCDQAAAGCQnp4eVVVVZX6BbmlpYQ56lH3xi1%2BUd9991zygzCzURUVFatmyZbrzWV5QUNCggp2dnS3BwcEUbAAAAMBiPB6PampqMgt0dXW19PX16Y5leatXr5bLL798cKEuKChQ69ev150NJ4mKijIPOFu2bJlceOGFlGsAAAAgQA2cgy4tLZX9%2B%2FfrjoSTLF68WFatWvX%2FF%2BotW7ao888%2Fn%2B0CfmD27NmSn58vhmFIbm6ujB8%2FnoINAAAA%2BKkDBw6o0tJScTqdUlxcLFu3btUdCZ%2FDbrfLli1bZPbs2TabUkqWL1%2BufvKTn%2BjOhTNkt9slKSnJ3B6ekZEhYWFhFGwAAADAR7lcLtXS0mJu466oqOA6Kz%2F0m9%2F8Rn784x%2F%2Fq1BnZWWpqqoq3ZlwlsLDwyU9Pd0s2ElJSeawPAAAAAA9Bm7jXrdunRw5ckR3JJylE1do2Q4cOKAmTZokLpdLdyYMs9jYWMnJyRHDMKSgoEBmzpxJuQYAAABGWFtbm3ka96pVq2TPnj26I2GYBQUFSUdHh9hWr16tFi9erDsPRsHs2bPNr9eGYci4ceMo2AAAAMBZ6u7uVnV1deY27sbGRs6nsoB169ZJ0DvvvKM7B0bJ1q1bZcWKFbJixQpxOBySmJioTpTrrKwsCQkJoWADAAAAn8Ptdqvm5mazQFdWVkp%2Ff7%2FuWBhl77zzjtiuu%2B469cILL%2BjOAs0iIyMlLS3N%2FHqdnJwsNpuNgg0AAADI4Dno4uJiOXTokO5I0Ozb3%2F622ObNm6c2btyoOwt8zNSpUwdtD4%2BLi6NcAwAAwDLa2trMAu10OpmDxqfMnz9fbF%2F4whfUJ598ojsLfNzA%2BetFixbJ2LFjKdgAAAAIGD09Paq2tpY5aJy28847T2yxsbGqo6NDdxb4kaCgIElISDALdnZ2tgQHB1OwAQAA4DdOnoOuqqqSY8eO6Y4FPzJp0iSxhYaGKv7FwdmIioqS1NRUs2CnpKRQrgEAAOBzBs5Bl5SUyIEDB3RHgh8LDQ0Vm4iwjwHDKj4%2BXjIyMsQwDFm6dKlMmTKFgg0AAIBR19nZqcrKysyDxLZt26Y7EgIMhRoj7sT89dKlSyU%2FP1%2FCwsIo2AAAABh2LpdL1dfXS1FRkTidTmlqahKPx6M7FgIYhRqjKjw8XNLT083t4UlJSWK32ynYAAAA8MrAbdxr166Vo0eP6o4EC6FQQ6uJEyfKwoULzdPDzznnHMo1AAAAhtTW1qaqqqrE6XRKUVGR7N27V3ckWBiFGj5l4PVchmHIuHHjKNgAAAAW1tXVperr683TuBsaGnRHAkwUavgsh8MhiYmJZrnOzMyU0NBQCjYAAEAAc7lcqqWlxSzQFRUVcvz4cd2xgM9EoYbfiIiIkAULFpgFOzk5WWw2GwUbAADAzw2cg16%2Ffr0cPnxYdyTgtFCo4bcmTZok2dnZYhiGFBYWyowZMyjXAAAAfqC9vV1VVFSI0%2BmUNWvWyK5du3RHArxCoUbAGDh%2FvWjRIhk7diwFGwAAwAf09PSo2tpacxt3Y2OjKEUNgf%2BjUCMgnTx%2FnZWVJSEhIRRsAACAUeB2u1Vzc7NZoKuqquTYsWO6YwHDjkINS4iMjJS0tDTmrwEAAEbIwDlop9MpBw8e1B0JGHEUalhSXFycZGZmimEYsmTJEpk6dSrlGgAA4Ax0dHSo8vJy8yCx7du3644EjDoKNSCD568LCgpkzJgxFGwAAIABent7VU1NjfkFuqmpSTwej%2B5YgFYUauAkQUFBkpCQYBbsnJwcCQoKomADAABL8Xg8qqmpySzQ1dXV0tfXpzsW4FMo1MDniI6Olvnz58vSpUtl2bJlMnv2bMo1AAAISK2traq4uFiKioqktLRU9u%2FfrzsS4NMo1MAZGrg9PC8vT8aPH0%2FBBgAAfqmrq0vV19ebX6EbGhp0RwL8CoUaOAt2u12SkpLMgp2RkSFhYWEUbAAA4JNcLpdqaWkxC3RFRYUcP35cdyzAb1GogWEUHh4u6enpZsFOSkoSu91OwQYAANoMvM5q3bp1cuTIEd2RgIBBoQZGUGxsrOTk5Jinh8%2BcOZNyDQAARtS%2BfftUZWWlOJ1OWb16tezevVt3JCBgUaiBUTRw%2Fjo%2FP19iYmIo2AAA4Kx0d3eruro6cxt3Y2OjKMUSHxgNFGpAE4fDIYmJiWbBzsrKkpCQEAo2AAA4JbfbrZqbm80CXVlZKf39%2FbpjAZZEoQZ8RGRkpKSlpZkFOzk5WWw2GwUbAAAMmoMuLi6WQ4cO6Y4EQCjUgM%2BaPHmyZGVliWEYsnjxYpk2bRrlGgAAi%2Bjo6FDl5eXidDpl7dq1snPnTt2RAHwGCjXgJwbOXxcUFMiYMWMo2AAABIienh5VW1vLHDTgZyjUgB8KCgqShIQEs2BnZ2dLcHAwBRsAAD9x8hx0VVWVHDt2THcsAGeIQg0EgKioKElNTTULdkpKCuUaAAAfM3AOuqSkRA4cOKA7EoCzRKEGAlB8fLxkZGSIYRiydOlSmTJlCgUbAIBRtn%2F%2FflVaWmoeJLZt2zbdkQAMMwo1YAGzZ8%2BWpUuXyrJlyyQjI0PCwsIo2AAADDOXy6VaWlpk5cqVUlRUJE1NTeLxeHTHAjCCKNSAxYSHh0t6erq5PTwpKUnsdjsFGwAALwzcxr127Vo5evSo7kgARhGFGrC4iRMnysKFC8UwDFm0aJGcc845lGsAAIbQ1tamqqqqxOl0SlFRkezdu1d3JAAaUagBDDLwei7DMGTcuHEUbACAZXV1dan6%2BnrzNO6GhgbdkQD4EAo1gCE5HA5JTEw0y3VmZqaEhoZSsAEAAevEHPSJAl1RUSHHjx%2FXHQuAj6JQAzhtERERsmDBArNgJycni81mo2ADAPzawDno9evXy%2BHDh3VHAuAnKNQAvDZp0iTJzs4WwzCksLBQZsyYQbkGAPi89vZ2VVFRIU6nU9asWSO7du3SHQmAn6JQAxg2A%2BevFy1aJGPHjqVgAwC06%2BnpUbW1teY27sbGRlGKJTCAs0ehBjAiTp6%2FzsrKkpCQEAo2AGDEud1u1dzcbBboqqoqOXbsmO5YAAIQhRrAqIiMjJS0tDTmrwEAI2LgHLTT6ZSDBw%2FqjgTAAijUALSIi4uTzMxMMQxDlixZIlOnTqVcAwBOW2dnpyorKzMPEtu%2BfbvuSAAsiEINwCcMnL8uLCyU6OhoCjYAwNTb26tqamrML9BNTU3i8Xh0xwJgcZYs1EFBQeJyuXTHADCEsLAwSU9PH7Q93G63U7ABwEI8Ho9qbGw0C3RNTY309fXpjgVgCA6HQ9xut%2B4Yo86ShfqNN96QadOmcVAF4Ceio6MlOztbli1bJvn5%2BTJr1izKNQAEoNbWVlVdXS0rV66U1atXy%2F79%2B3VHAjCEkw%2BgPXTokFx55ZW6Y406Sxbqt956S5YtW2YuyLlKAfAvA7eH5%2BXlyfjx4ynYAOCHurq6VH19vbkGa2ho0B0JwCmcag22cuVK9aUvfUl3xFFHof4M7e3tqqKiQpxOp6xdu1Z27typOzKAIdjtdklKSjIf7hkZGRIWFkbBBgAf5HK5VEtLi1mgKyoq5Pjx47pjARjCxIkTZeHChWIYhixatEjOOeecIddYFGoL%2BbxCfbKB1zCsX79eDh8%2BrPuPAGAI4eHhn5q%2F5nouANBn4Dpq3bp1cuTIEd2RAAzh5HVUUlLSaZ9jQ6G2kDMt1AO53W7V3Nxs%2FmS1srJS%2Bvv7df%2BRAAwhNjZWcnJyxDAMKSgokJkzZ1KuAWAE7du3T1VWVorT6ZTVq1fL7t27dUcCcAqzZ8%2BWpUuXyrJly85qpx%2BF2kLOplCfrLu7W9XV1TF%2FDfiJgbM%2F%2Bfn5EhMTQ8EGgLPAWgjwL%2FHx8ZKRkSGGYcjSpUtlypQpw7IWolBbyHAW6pO1tbWpqqoqcTqdsmrVKtmzZ4%2FuPy6AIZx8OmVWVpaEhIRQsAHgFNitB%2FiXqKgoSU1NNdc7KSkpI7LWoVBbyEgW6pMNnBtau3atHD16VPcfH8AQIiMjJS0tjflrADjJwPVMcXGxHDp0SHckAEMICgqShIQEcz2TnZ0twcHBI76eoVBbyGgW6oFOPtmyvLxcXC6X7v85AAxh8uTJkpWVJYZhyOLFi2XatGmUawCW0NHRocrLy82DxHbs2KE7EoBTGDjSVlBQIGPGjBn1NQuF2kJ0FeqTHT16VG3YsEFWrlwpRUVFsnXrVt2RAJyCL7ysAGAk9PT0qNraWuagAT%2Fhiz%2F0p1BbiK8U6pMN3E5VUlIiBw4c0B0JwBB0bacCgOHg8XhUU1OTWaCrqqrk2LFjumMBGII%2FjKVRqC3EVwv1QCe%2F6Kqrq6Wvr093LABDGK0DPwDAW%2FzgHvAf%2FnhwKoXaQvyhUJ%2Bst7dX1dTUmAW7qalJPB6P7lgAhjBSV1IAwOnav3%2B%2FKi0tNQ8S27Ztm%2B5IAE7B36%2F2pFBbiD8W6pNxWAjgXy688EJZtmyZGIYhGRkZEhYW5tfPIAC%2BZ%2BDhpytXrpS6ujp%2B%2BA74sNjYWMnJyTHPZpk5c6Zfrw0o1BYSCIX6ZFxnAfiP8PBwSU9PN38KnZSUJHa7PaCeSQBGB9dzAv7j5Pe%2FL85Bnw0KtYUEYqEeyO12q%2BbmZnN7eGVlpfT39%2BuOBWAIEydOlIULF4phGLJo0SI555xzAvb5BODstLW1qaqqKnE6nbJq1SrZs2eP7kgAhmC32yUpKcks0IG%2BQ41CbSGBXqhP1t3drerq6rgKA%2FATA2eoDMOQcePGWeZ5BWCwrq4uVV9fb77DGxoadEcCcAoD3%2BF5eXkyfvx4y7zDKdQWYrVCfbJ9%2B%2FapyspKcTqdsnr1atm9e7fuSACGcPIpn5mZmRIaGmrZ5xcQ6E7eZVZRUSHHjx%2FXHQvAECZMmCC5ubnmQWKzZs2y7DuaQm0hVi%2FUJxs4f7Vu3To5cuSI7kgAhhARESELFiwI2PkrwIoGvofXr18vhw8f1h0JwBCCgoIkISHBvMVjwYIFnIPybxRqC6FQD23gCaH8ZBzwfZMmTZLs7GwxDEMuv%2FxymT59Os82wMe1t7eriooKcTqdsmbNGtm1a5fuSABOYeA27sLCQomOjuZd%2Bxko1BZCoT59zG4B%2FmXgS3%2FRokUyduxYnnWAZj09Paq2tpazTAA%2FERcXJ5mZmWIYhixZskSmTp3Ku%2FQ0UKgthELtvdbWVlVdXS1Op1OKiopk7969uiMBGMLJ89dZWVkSEhLCsw8YYSfPQVdVVcmxY8d0xwIwhKioKElNTTXflykpKbwrvUChthAK9fDZunWrWrlypRQVFUl1dbX09fXpjgRgCJGRkZKWlsaCARgBA%2BegnU6nHDx4UHckAEMYOAdtGIZkZ2dLcHAw78SzRKG2EAr1yOjt7VU1NTXmYqKpqUk8Ho%2FuWACGwJY2wHudnZ2qrKzMPEhs%2B%2FbtuiMBOAVGokYehdpCKNSjg8UG4F84dAUYGj80BvwLh3aOPgq1hVCo9WA7HOA%2FTt4Ol5OTI0FBQTw3YRkej0c1NTWZ7yzGmgDfxrWS%2BlGoLYRCrR8HtgD%2BZcKECZKbmyuGYUh%2Bfr7MmjWLZygCzsCDN1euXCmtra26IwEYwskHb2ZmZkpoaCjvJo0o1BZCofY9XCkC%2BJeB28Pz8vJk%2FPjxPFPhd7gaEvAvA989hmHIuHHjePf4EAq1hVCofV97e7uqqKgQp9Mpa9eulZ07d%2BqOBGAIdrtdkpKSzAVORkaGhIWF8YyFz3G5XKqlpcUs0BUVFXL8%2BHHdsQAMITY2VnJycsQwDCkoKJCZM2fybvFhFGoLoVD7n4Hz1%2BvXr5fDhw%2FrjgRgCOHh4ZKens4cG3zCwPfHunXr5MiRI7ojARjCye%2BPpKQksdvtvD%2F8BIXaQijU%2Fu3k%2BevKykrp7%2B%2FXHQvAEPjCgNG0b98%2BVVlZKU6nU1avXi27d%2B%2FWHQnAENjhFFgo1BZCoQ4s3d3dqq6ujvlrwE8MnIHLz8%2BXmJgYnsfwGu8AwL8MfAfk5ubKhAkTeAcECAq1hVCoA1tbW5uqqqoSp9Mpq1atkj179uiOBGAIJ5%2FSmpWVJSEhITyfMSR2KQH%2BJSoqSlJTU83nfEpKCs%2F4AEWhthAKtbUwPwf4j8jISElLS2P%2BGoMMfI4XFxfLoUOHdEcCMISgoCBJSEgwn%2BPZ2dkSHBzMc9wCKNQWQqG2rpNPeC0vLxeXy6U7FoAhTJ48WbKyssQwDFm8eLFMmzaNZ7cFdHR0qPLycvMHoTt27NAdCcApDNzGXVBQIGPGjOFZbUEUaguhUOOEo0ePqg0bNsjKlSulqKhItm7dqjsSgFNg0RaYent7VU1NDXPQgJ%2BIi4uTzMxMMQxDlixZIlOnTuVZDAq1lVCoMZSB2wpLSkrkwIEDuiMBGALbCv2Xx%2BNRTU1NZoGurq6Wvr4%2B3bEADIFxHJwOCrWFUKhxOljwAf6Fg298Gz%2BwBPwHB0bCGxRqC6FQwxsnb0lsamoSj8ejOxaAIcTHx0tGRoYYhiHLli2T%2BPh4nvujaP%2F%2B%2Faq0tNQ8SGzbtm26IwE4Ba40xNmiUFsIhRrDgUNzAP9ht9slKSnJXCxmZGRIWFgY74FhxKGPgH%2BZNGmSZGdni2EYUlhYKDNmzOCZiLNCobYQCjVGAte6AP4jPDxc0tPTzYKdlJQkdrud98IZGvjcW7t2rRw9elR3JABDiIiIkAULFjAHjRFDobYQCjVGmtvtVs3NzeaXmsrKSunv79cdC8AQJk6cKAsXLhTDMGTRokVyzjnn8I74DG1tbaqqqkqcTqesWrVK9uzZozsSgCGcPAedmZkpoaGhPNswYijUFkKhxmjr7u5WdXV1XAkD%2BImBs4SGYci4ceMs%2Bc44%2BdnV0NCgOxKAU%2BDZBZ0o1BZCoYZu%2B%2FbtU5WVleJ0OmXNmjWya9cu3ZEADMFKX3nYXQP4F3bXwJdQqC2EQg1fM3AOcf369XL48GHdkQAMIdDmEHn%2BAP6D8x%2FgyyjUFkKhhi87%2BaTciooKOX78uO5YAIYw8KTcyy%2B%2FXKZPn%2B7T75f29nZVUVHBDhnAT1x44YWybNkybiiAz6NQWwiFGv6kq6tL1dfXM8MI%2BImBM4yLFi2SsWPHan3f9PT0qNraWs5wAPxEfHy8ZGRkiGEYsnTpUpkyZQprVvgFCrWFUKjhz1pbW1V1dbU4nU4pKiqSvXv36o4EYAgnz19nZ2dLcHDwiL5%2FTp6DrqqqkmPHjun%2BnwLAEKKioiQ1NdV8TqSkpLBGhV%2BiUFsIhRqB5MT848qVK8XpdEpfX5%2FuSACGMFIL54Fz0E6nUw4ePKj7jwpgCEFBQZKQkDCqP2gDRgOF2kIo1AhUvb29qqamxlxUNzU1icfj0R0LwBDi4uIkMzNTDMOQJUuWyNSpU0%2Fr3dTZ2anKysrMg8S2b9%2Bu%2B48C4BQGjoIUFBTImDFjWIci4FCoLYRCDasYuOguLi6Wbdu26Y4E4BQGLroLCwslOjraJsIPywB%2FM3nyZMnKyhLDMGTx4sUybdo01p0IeBRqC6FQw6q2bNmiiouLxel0SllZmRw6dEh3JABDCAsLk%2FT0dBERqampYZwD8GHR0dGSk5Mj%2Bfn5YhiGXHDBBawzYTlWLdRBugMAGD3nnXee7bzzzpNbbrmFg4sAH9fX1yclJSW6YwD4DCcfOJiVlSUhISGUaMCCKNSARTkcDltKSoqkpKTIXXfdxdU6AACcwsCRjPz8fImJiaFAA6BQA%2FiXiIgI24mFgohIe3u7qqioEKfTKWvXrpWdO3fqjggAwKiJjY2VnJwc8yCxmTNnUqABfAqFGsBnmjRpku3KK6%2BUK6%2B8UkQGX8tTXFzM%2FDUAIKBERETIggULzK%2FQycnJYrPZKNEATolCDeC0zJ4923bTTTfJTTfd9Kn568rKSunv79cdEQCA03byHHRmZqaEhoZSoAGcEQo1gDN28vx1d3e3qqurY%2F4aAODTBs5B5%2BXlyfjx4ynQAM4KhRrAWYuMjBw0f93W1qaqqqrE6XTKqlWrZM%2BePbojAgAsaMKECZKbm2seJDZr1iwKNIBhRaEGMOzi4uKGnL9et26dHDlyRHdEAEAACgoKkoSEBFm6dKksW7ZMkpKSxG63U6IBjBgKNYARN3D%2B2uVyqZaWFnN7eEVFhRw%2Fflx3RACAnxq4jbuwsFCio6Mp0ABGDYUawKgKCgoaNH%2Fd1dWl6uvrxel0ysqVK%2BW9997THREA4MPi4uIkMzNTDMOQpUuXypQpUyjQALShUAPQKioqypy%2F%2FtWvfjVoe3hpaans379fd0QAgEZRUVGSmppqfoVOSUmhQAPwGRRqAD5l4PZwj8ejmpqazO3h1dXV0tfXpzsiAGAEnZiDPlGgs7OzJTg4mBINwCdRqAH4LLvdPmh7eG9vr6qpqTELdlNTk3g8Ht0xAQBnaeAc9KJFi2Ts2LEUaAB%2BgUINwG%2BEh4cPup6ro6NDlZeXm6eH79ixQ3dEAMBpmDx5smRlZYlhGHL55ZfL9OnTKdAA%2FBKFGoDfio2NHfJ6LqfTKQcPHtQdEQAgIhEREbJgwQLzK3RycrLYbDZKNAC%2FR6EGEDAGzl%2B73W7V3NxsluvKykrp7%2B%2FXHREALMHhcEhiYqJZoDMzMyU0NJQCDSDgUKgBBCSHwzFo%2Frq7u1vV1dWZBbuxsVGUUrpjAkDAGDgHbRiGjBs3jgINIOBRqAFYQmRk5KD563379qnKykpxOp2yZs0a2bVrl%2B6IAOBXYmNjJScnRwzDkIKCApk5cyYFGoDlUKgBWNLkyZOHnL9ev369HD58WHdEAPAp4eHhkp6ebn6BTkpKErvdTokGYGkUagCQwfPXLpdLtbS0mNvDKyoq5Pjx47ojAsCostvtkpSUZBbojIwMCQsLo0ADwAAUagA4SVBQ0KD5666uLlVfX28W7IaGBt0RAWBEDJyDzs3NlQkTJlCgAeAUKNQA8DmioqIGzV%2B3traq6upqcTqdUlRUJHv37tUdEQC8Eh0dLfPnzxfDMGTZsmVy4YUXUqAB4AxQqAHgDMXHxw85f7127Vo5evSo7ogA8JmCgoIkISHB%2FAqdk5MjQUFBlGgA8BKFGgDO0sD5697eXlVTU2NuD29qahKPx6M7IgALG7iNu6CgQMaMGUOBBoBhQqEGgGEUHh4%2BaHt4Z2enKisrE6fTKcXFxbJt2zbdEQEEuLi4OMnMzBTDMGTJkiUydepUCjQAjBAKNQCMoIkTJw65PbykpEQOHDigOyIAPxcZGSlpaWnmV%2Bjk5GSx2WyUaAAYBRRqABhFA7eHu91u1dzcbG4Pr6qqkmPHjumOCMDHORwOSUxMNAt0VlaWhISEUKABQAMKNQBo4nA4Bl3P1dPTo2pra82C3djYKEop3TEB%2BICBc9CLFi2SsWPHUqABwAdQqAHAR0RERAyav25vb1cVFRXm6eE7d%2B7UHRHAKJk0aZJkZ2eLYRhSWFgoM2bMoEADgA%2BiUAOAj5o0adKQ89fFxcVy6NAh3REBDJOIiAhZsGABc9AA4Gco1ADgJ041f11ZWSn9%2Ff26IwI4TSfPQWdmZkpoaCgFGgD8DIUaAPzQyfPX3d3dqq6ujvlrwIcNnIM2DEPGjRtHgQYAP0ehBoAAEBkZOWj%2Buq2tTVVVVYnT6ZRVq1bJnj17dEcELGfixImycOFC8yCxc845hwINAAGGQg0AASguLm7I%2Bet169bJkSNHdEcEAk54eLikp6ebX6CTkpLEbrdTogEggFGoAcACBs5fu1wu1dLSYm4Pr6iokOPHj%2BuOCPgdu90uSUlJZoHOyMiQsLAwCjQAWAiFGgAsJigoaND8dVdXl6qvrzcLdkNDg%2B6IgM%2BKj4%2BXjIwMMQxDli1bJvHx8RRoALAwCjUAWFxUVNSg%2BeuB28NLS0tl%2F%2F79uiMC2kRFRUlqaqr5FTolJYUCDQAwUagBAIMM3B7u8XhUU1OT%2BfW6urpa%2Bvr6dEcERkxQUJAkJCSYBTo7O1uCg4Mp0QCAz0ShBgAMyW63D9oe3tvbq2pqasyC3dTUJB6PR3dM4KwMvM6qoKBAxowZQ4EGAJwWCjUA4LSFh4cP2h7e0dGhysvLzdPDd%2BzYoTsi8LkmT54sWVlZYhiGLF68WKZNm0aBBgB4hUINAPBabGzskNdzOZ1OOXjwoO6IgERGRkpaWpr5FTo5OVlsNhslGgBw1ijUAIBhM3D%2B2u12q%2BbmZrNcV1VVybFjx3RHhAU4HA5JTEw0C3RWVpaEhIRQoAEAw45CDQAYEQ6HY9D8dU9Pj6qtrTULdmNjoyildMdEgBg4B52fny8xMTEUaADAiKNQAwBGRURExKD563379qnKykpxOp2yZs0a2bVrl%2B6I8COxsbGSk5MjhmFIYWGhzJgxgwINABh1FGoAgBaTJ08ecv56%2Ffr1cvjwYd0R4UMiIiJkwYIFzEEDAHwKhRoA4BMGzl%2B7XC7V0tJibg%2BvqKiQ48eP646IUXTyHHRmZqaEhoZSoAEAPoVCDQDwOUFBQYPmr7u6ulR9fb1ZsBsaGnRHxAgYOAedl5cn48ePp0ADAHwahRoA4POioqIGzV%2B3traq6upqcTqdUlRUJHv37tUdEV6YOHGiLFy40DxIbNasWRRoAIBfoVADAPxOfHz8kPPXa9eulaNHj%2BqOiM8QFBQk8%2BfPl2XLlolhGJKUlCR2u50SDQDwWxRqAIDfGzh%2F3dvbq2pqaszt4U1NTeLxeHRHtKyB27gLCwslOjqaAg0ACBgUagBAQAkPDx%2B0Pbyzs1OVlZWJ0%2BmU4uJi2bZtm%2B6IAS0%2BPl4yMjLEMAxZunSpTJkyhQINAAhYFGoAQECbOHHikNvDS0pK5MCBA7oj%2BrWoqChJTU01v0KnpKRQoAEAlkGhBgBYysDt4W63WzU3N5vbw6uqquTYsWO6I%2Fq0oKAgSUhIMAt0dna2BAcHU6IBAJZEoQYAWJbD4Rh0PVdPT4%2Bqra01C3ZjY6MopXTH1G7gHPSiRYtk7NixFGgAAIRCDQCAKSIiYtD8dVtbm3I6nfLrX%2F9a%2Fvd%2F%2F1d3vFF16aWXyp133imGYUhcXBwFGgCAz2DXHQAAAF8VFxdnu%2Fbaa22pqam6o4y61NRUufbaa22UaQAAhkahBgAAAADACxRqAAAAAAC8QKEGAAAAAMALFGoAAAAAALxAoQYAAAAAwAsUagAAAAAAvEChBgAAAADACxRqAAAAAAC8QKEGAAAAAMALFGoAAAAAALxAoQYAAAAAwAsUagAAAAAAvEChBgAAAADACxRqAAAAAAC8QKEGAAAAAMALFGoAAAAAALxAoQYAAAAAwAsUagAAAAAAvEChBgAAAADACxRqAAAAAAC8QKEGAAAAAMALFGoAAAAAALxAoQYAAAAAwAsUagAAAAAAvEChBgAAAADACxRqAAAAAAC8QKEGAAAAAMALFGoAAAAAALxAoQYAAAAAwAsUagAAAAAAvEChBgAAAADACxRqAAAAAAC8QKEGAAAAAMALFGoAAAAAALxAoQYAAAAAwAsUagAAAAAAvEChBgAAAADACxRqAAAAAAC8QKEGAAAAAMALFGoAAAAAALxAoQYAAAAAwAsUagAAAAAAvEChBgAAAADACxRqAAAAAAC8QKEGAAAAAMALFGoAAAAAALxAoQYAAAAAwAsUagAAAAAAvEChBgAAAADACxRqAAAAAAC8QKEGAAAAAMALFGoAAAAAALxAoQYAAAAAwAsUagAAAAAAvEChBgAAAADACxRqAAAAAAC8QKEGAAAAAMALFGoAAAAAALxAoQYAAAAAwAsUagAAAAAAvEChBgAAAADACxRqAAAAAAC8QKEGAAAAAMALFGoAAAAAALxAoQYAAAAAwAsUagAAAAAAvEChBgAAAADACxRqAAAAAAC8EKQ7AAJLe3u7%2BuSTT6S9vV327dsn3d3dEhkZKSIiUVFRMmPGDJk2bZpMnz5dHA6HTXdeAAAA%2BD%2BPx6P27NkjO3fulN27d8vhw4dFRKSnp0dCQ0MlPj5eYmNjZdasWTJlyhTWoBg2FGqclc2bN6vVq1dLRUWFNDc3y969e0%2Frn4uKipK5c%2Beq1NRUyczMlKysLImKiuLhBgAAgM%2FV19enampqpLKyUurr62XDhg1mif48kyZNUomJiZKZmSmLFy%2BWpKQksdlsrEPhFQo1ztiOHTvUs88%2BKy%2B88IJs377dq1%2Bjq6tLysvLpby8XH71q19JSEiIpKamqvz8fDEMQy677DK%2BYAMAAEBE%2FvUFuqWlRZxOpxQXF0t1dbX09vZ69Wu1t7fL%2BvXrZf369XLffffJlClT5JprrlE33nijzJkzh%2FUnzgiFGqft7bffVg8%2B%2BKCsXr1aPB7PsP7a%2Ff39UllZKZWVlXLfffdJTEyMLFy4UBmGIfn5%2BXLeeefxcAMAALCQnTt3quLiYnE6nVJSUiIdHR0j8vvs3btXfv3rX8tvfvMbyc3NVT%2F96U8lMzOTtSdOC4Uan%2Bujjz5SP%2FnJT%2BSNN94QpdSo%2FJ6HDh2Sf%2F7zn%2FLPf%2F5TRERmzpxpfr3Oy8uTiRMn8pADAAAIIIcPH1ZlZWVyokR%2F9NFHo%2Fr7K6WkpKRESkpKpKCgQC1fvlwSEhJYc%2BKUKNQYksvlUk888YTce%2B%2B90t3drTXLjh075JlnnpFnnnlGRERmz56tDMMQwzCksLBQoqOjedgBAAD4EbfbrZqbm8XpdIrT6ZTKykrp7%2B%2FXHUtERNatWyclJSVyyy23qIcfflgiIyNZa%2BIzUajxmT755BN15ZVXSlNTk%2B4on2nr1q2yYsUKWbFihYSFhUlGRob5BTsxMVHsdjsPPQAAAB%2Fz7rvvqhNz0BUVFdLV1aU70pBcLpc8%2Fvjjsn79ennttdfURRddxPoSn0KhxqesWbNGXXPNNXLw4EHdUU5LX1%2Bf%2BZNNEZGJEycOmr%2BeNWsWDz8AAAAN2tvbVUVFhTidTlmzZo3s2rVLd6Qz9sEHH0hqaqo8%2B%2Byz6qqrrmJdiUEo1BhkxYoV6uabbx72Q8dGU2dnp7z66qvy6quviojIeeedZ5brhQsXSkxMDA9CAACAEdDd3a0qKirMOejNmzfrjjQsurq65Oqrr5adO3eqO%2B64g7UkTBRqmJ544gl16623jtrBY6Nly5YtsmXLFnnqqafE4XBIYmKiOX%2BdmZkpoaGhPBQBAAC8cPIcdFVVlRw7dkx3rBGhlJI777xTOjs71a9%2B9SvWjxARCjX%2B7amnnlI%2F%2FOEPdccYcW63WxoaGqShoUGWL18ukZGRkp2dbX7Bvvjii3k4AgAAnMKWLVvM66zKysrk0KFDuiONquXLl8u4cePUXXfdxboRFGqIrF27Vt122226Y2jR3d0tq1evltWrV4uIyKRJk1R2drZ5eviMGTN4UAIAAEvr7OxUZWVl4nQ6Zf369bJ9%2B3bdkbS7%2B%2B67Zfr06eqb3%2Fwma0WLo1Bb3AcffKCuuuoqcblcuqP4hPb29kHz1xdddJH59To7O1uioqJ4aAIAgIDW29urampqzDno5uZmvz5fZyQopeTGG2%2BUCy64QCUlJbE%2BtDAKtYUdP35cXX%2F99XL06FHdUXzWu%2B%2B%2BK%2B%2B%2B%2B678%2Fve%2F%2F9T8dVZWloSEhPAABQAAfm%2Fr1q3K6XTKypUrxel0Sl9fn%2B5IPq%2B3t1euueYaaWhoUOHh4awJLYpCbWH33XefbNy4UXcMv3Hy%2FPXYsWMHXc81Z84cHqQAAMAv7Nixw5yDLikpkc7OTt2R%2FNL7778vd999tzz22GO6o0ATCrVFvf%2F%2B%2B%2Bp3v%2Fud7hh%2B7fDhw%2FLGG2%2FIG2%2B8ISIicXFxKjMzUwzDkCVLlsjUqVMp2AAAwCd0dXWp%2Bvp68zTuhoYG3ZECxv%2F8z%2F%2FIddddp1JSUlj7WRCF2qJ%2B9KMfyfHjx3XHCChtbW2D5q9nz55tbg8vLCyU6OhoHrIAAGBUuFwu1dLSYhboiooK1n4jxOPxyJ133imlpaW6o0ADCrUFlZSUqLVr1%2BqOEfC2bt0qK1askBUrVkhYWJikp6er%2FPx8MQxDkpKSxG63U7ABAMCw2bx5s3I6nVJcXCwVFRXS3d2tO5JllJWVyZo1a9Tll1%2FO%2Bs5iKNQW9Mgjj%2BiOYDl9fX1SUlIiJSUlIiIyYcIEyc3NNeevZ82axcMXAACckfb2dlVRUSFOp1PWrFkju3bt0h3J0n7729%2FK5ZdfrjsGRhmF2mLeffddVVxcrDuG5e3fv3%2FI7eF5eXkyfvx4CjYAABikp6dH1dbWmtu4GxsbRSmlOxb%2BraSkRFpaWlRCQgLrOAuhUFvMU089xYPXBw3cHu5wOGTu3LlmwV6wYAHXcwEAYEEul0tt2rRJTmzjrq%2BvZw7ax%2F3xj3%2BUJ598UncMjCIKtYV4PB71j3%2F8Q3cMfA632y0bNmyQDRs2yC9%2B8QuJiIiQBQsWmAU7OTlZbDYbBRsAgAB04j7oE%2F85ePCg7kg4A%2F%2F4xz%2Fkf%2F7nf5TD4WCtZhEUaguprq6W1tZW3TFwhnp6esyXqohIbGys5OTkqBOnh8%2BYMYMHNgAAfqqzs1OVlZWJ0%2BmU9evXy%2Fbt23VHwlnYt2%2Bf1NbWSmZmpu4oGCUUagtZtWqV7ggYBh0dHYPmry%2B88ELzcLPs7Gyu5wIAwIf19vaq6upqKS4uFqfTKS0tLeLxeHTHwjAqKiqiUFsIhdpC6uvrdUfACHjvvffkvffek8cff1wcDockJiaa28OzsrKYvwYAQLN3331XFRUVidPplOrqaunr69MdCSNow4YNuiNgFFGoLcLtdqvGxkbdMTDC3G63NDQ0SENDgyxfvlwiIyMlLS2N%2BWsAAEZRa2urqq6uFqfTKStXrmTkzmIaGhrE7XYzR20RFGqL2LJli3R1demOgVHW3d09aP56%2BvTpYhiGys%2FPl7y8PJk0aRIPegAAztLBgwdVWVmZuY37448%2F1h0JGnV1dcknn3wic%2BbM0R0Fo4BCbRE7d%2B7UHQE%2BYNeuXfLcc8%2FJc889JyKD778uKCiQMWPGULABAPgcLpdLtbS0mD%2B0rqio4DorDLJr1y4KtUVQqC1i9%2B7duiPABw28%2FzooKEgSEhLMgp2TkyNBQUEUbAAAZPB1VuvWrZMjR47ojgQfxtrbOijUFtHe3q47Anycy%2BUaNH89YcIEyc3NNQv27NmzKdcAAMvYs2fPoPug29radEeCH9m3b5%2FuCBglFGqLYBsSztT%2B%2FfsHXc81cHt4Xl6ejB8%2FnoINAAgY3d3dqq6uzizQjY2NopTSHQt%2ByuVy6Y6AUUKhtgjuN8TZGrg93G63S1JSklmwMzIyJCwsjIINAPAbbrdbNTc3mwW6srJS%2Bvv7dcdCgGDtbR0UaosICuL%2FqzF8PB7PoO3hERERkpWVpQzDkPz8fLnkkku4ngsA4HM%2B%2FPBDdeIk7rKyMuagMWLsdrvuCBgltCyLiI2N1R0BAaynp0fWrl0ra9euFZF%2F%2FfuWk5OjTpwePnPmTMo1AGDUdXR0qPLycvMgsR07duiOBIuYNGmS7ggYJRRqi5g8ebLuCLCQjo6OIeev8%2FPzJSYmhoINABh2vb29qqamxtzG3dTUxNZbaMHa2zoo1BYxffp03RFgYSdfzzV%2F%2FnyVn58vhmHI%2FPnzuZ4LAOAVj8ejGhsbxel0SnFxsdTU1MixY8d0xwJkypQpuiNglFCoLeKiiy6S4OBgTvuGdi6XS2pqaqSmpkYeeOABiYyMlLS0NPMLdnJyMvPXAIAhtba2quLiYikqKpLS0lLZv3%2B%2F7kjAIEFBQXLRRRfpjoFRQqG2iNDQUNv555%2BvNm%2FerDsKMEh3d7e5NU%2FkX1ukThxwtnjxYpk2bRrlGgAsrKurS9XX15vvioaGBt2RgFO64IILuP3EQijUFjJ%2F%2FnyhUMPX7du3z5y%2Fttlscumll5pfr7OysiQiIoIXFAAEsGPHjqna2tpBBdrtduuOBZy2efPm6Y6AUUShtpDFixfLs88%2BqzsGcNqUUtLS0iItLS3y29%2F%2BVoKCgiQhIcEs2NnZ2RIcHEzBBgA%2Ft3XrVnWiQK9bt47rrODXLr%2F8ct0RMIoo1BayaNEiCQ0N5bAO%2BC2XyzXo%2FuuoqChJTU01C3ZKSgrlGgD8wL59%2B1RlZaU4nU5ZvXq17N69W3ckYFgEBweLYRi6Y2AUUagtJCoqylZQUKDeeust3VGAYdHV1TVo%2FvrE9Vz5%2BfmSm5sr48ePp2ADgA84evSoKi8vl%2BLiYnE6nfL%2B%2B%2B%2FrjgSMiEWLFsnYsWNZf1gIhdpibrrpJqFQI1ANvJ7LbrdLUlKS%2BfU6IyODA0IAYJS43W7V3Nxs%2FtCzsrJS%2Bvv7dccCRtxNN92kOwJGGYXaYgoLC2XGjBmyc%2BdO3VGAEeXxeAZtD4%2BIiJDMzEzzC%2Fall17K9VwAMIw%2B%2BOADdeILdHl5OXPQsJxp06bJ4sWLdcfAKKNQW4zD4bD913%2F9l%2FrhD3%2BoOwowqnp6emTdunWybt06ERGJjY2VnJwcZRiGFBQUyMyZMynXAHAGOjo6VHl5uXmQ2I4dO3RHArS64447JCgoiPWExVCoLeimm26S3%2F72t7Jt2zbdUQBtOjo6zOu5RP7%2F%2BesT%2Fxk3bhwvRAAYoLe3V9XU1JjbuBsbG0UppTsW4BPi4%2BPZ7m1RFGoLCg4Otj3wwAPq%2Buuv1x0F8BkD56%2BDgoJk3rx5Kj8%2FXwzDkNTUVH7iDMBy3G63amxsFKfTKcXFxVJbW8tNIcAQHnzwQQkPD2etYEEUaou67rrr5MUXX5Ti4mLdUQCf43K5pLa2Vmpra%2BXBBx%2BUyMhISUtLM79gJycnM38NICANvA%2B6pKREDhw4oDsS4PPS0tLkO9%2F5ju4Y0IRCbVE2m822YsUKdfHFF0t3d7fuOIBP6%2B7uHnQ91%2BTJkyUrK0sZhiGLFy%2BWadOmUa4B%2BKWjR4%2BqDRs2yMqVK6WoqEi2bt2qOxLgV0JDQ%2BXZZ58Vu93OWsCiKNQWds4559iefvppdd111%2BmOAviVffv2DTl%2FXVBQIGPGjOGlCsAnuVwu1dLSYv6QsLy8XFwul%2B5YgN96%2FPHH5YILLuC9b2EUaou79tprbTU1Nerpp5%2FWHQXwWyfPXyckJJgFOzs7W4KDg3nRAtBm4DbudevWcZ0VMEyuu%2B46uemmm3jHWxyFGvLYY4%2FJli1bpKSkRHcUwO%2B5XK5B91%2BPGzdOcnNzzYJ97rnn8uIFMKJ27dplFmin0ynt7e26IwEBJzMzU1asWKE7BnwAhRoSGhpqe%2Butt1RhYaFUVVXpjgMElIMHD8rrr78ur7%2F%2BuoiIxMfHq4yMDDEMQ5YuXSpTpkyhYAM4K93d3aquro7rrIBRkpiYKG%2B99ZaEhYXxDgeFGv8SERFhW7lypVqyZInU1NTojgMErNbWVnP%2B2m63S1JSknk9V3p6Oi9nAJ%2FL5XKp%2Bvp68zqrjRs3MgcNjJJ58%2BbJmjVrJCYmhvc1RIRCjQHGjh1rKykpUd%2F5znfkpZde0h0HCHgej8fcHv6rX%2F1KwsPDJT093dwenpSUxKmhAERk8Bx0cXGxHDp0SHckwHKuuOIKefHFFyUiIoJ3M0wUagwSGhpqe%2BGFF9T5558vDz30ED%2FxBkZRb2%2FvoOu5YmNjJS8vz%2FyCPWPGDF7ggEW0tbWpkpISKS4uFqfTKXv27NEdCbAsh8Mhd999tzz44IP8oBufQqHGp9hsNtt9990nBQUF6tprr5UtW7bojgRYUkdHh7zyyivyyiuviMjg67kMw5Bx48bxUgcCRE9Pj6qtrWUOGvAxM2fOlL%2F85S%2BSlZXFOxefiUKNIc2bN8%2FW1NSkli9fLr%2F97W%2Blp6dHdyTA0k6%2Bnuuyyy4zv16npqZyPRfgR9xut2poaDC%2FQNfW1kp%2Ff7%2FuWAD%2BLTw8XP7v%2F%2F2%2Fcvfdd0tUVBTvVwyJQo1TioyMtD300EPy3e9%2BV91%2F%2F%2F3y8ssv88IHfIDL5ZK6ujqpq6uThx56SKKioiQnJ8f8gn3RRRfx8gd8zMcff2zOQZeWlsrBgwd1RwJwkpCQELn66qvloYcekpkzZ%2FIuxeeiUOO0TJ8%2B3fbcc8%2FJww8%2FrJ588kn505%2F%2BJPv27dMdC8C%2FdXV1SVFRkRQVFYmIyLRp09SXv%2FxlueKKKyQ7O1uCgoJYFACjzO12q9raWnnjjTfkzTfflE8%2B%2BUR3JABDmDx5stx4443ygx%2F8QOLj43ln4rTZdQeAf4mPj7f97Gc%2Fs%2B3Zs0fKy8vl1ltvlZkzZ%2BqOBeAku3fvlieeeEIMw5Bp06bJT3%2F6U9XW1sZAJjAKOjs71cMPP6xmzpwpWVlZ8rvf%2FY4yDfigmTNnyq233irl5eWyZ88e%2BfnPf26jTONMUajhFYfDYcvOzrY9%2Fvjjtu3bt9s%2B%2FPBD%2BcMf%2FiBf%2BcpXZOzYsbrjARhg3759J7auyfe%2B9z2KNTBCOjs71W233aZmzJgh9957LydzAz5m7Nix8pWvfEX%2B8Ic%2FyIcffijbt2%2B3Pf7447bs7Gybw%2BGgSMMrbPnGsJgzZ45tzpw58oMf%2FEDcbrfauHGjeVJpXV2dHD9%2BXHdEwPL6%2B%2FtlxYoV8te%2F%2FlV%2B8pOfqDvuuENCQkJYQABn6fjx4%2Bqxxx6TX%2FziF3L48GHdcQD8W3BwsKSlpZm3Y8ybN08ozhhuFGoMO4fDYUtLS5O0tDS57777uAoE8DFHjx6Ve%2B%2B9V%2F7617%2FKiy%2B%2BqBISElhcAF7aunWr%2Bta3viU1NTW6owAQkdmzZ5sFetGiRTJ27FjecRhRFGqMuIiICNuJB5uISGtrqzpxTYjT6ZTW1lbdEQFL2rx5s6Slpcljjz2mbrrpJhYcwBl6%2Fvnn1Q9%2B8AOulQQ0io%2BPNwt0fn4%2BB4ph1FGoMeri4%2BNt3%2FrWt%2BRb3%2FqWiPzrp%2FsnyvX69evZLgeMot7eXvne974n7777rnr00UfFbrezEAE%2Bh1JKPfjgg%2FLggw%2FqjgJYTkREhCxYsMAs0cnJyWKz2Xh3QRsKNbSbPXu27aabbpKbbrpJ%2Bvv7VV1dnfn1etOmTeJ2u3VHBALe448%2FLm1tbfLSSy8prtgChuZ2u9W1114rr7zyiu4ogCU4HA657LLLzAKdlpbG%2BR%2FwKRRq%2BJSQkBBbdna2ZGdny89%2B9jPp6upS9fX1ZsFuaGjQHREIWH%2F%2F%2B9%2FF4%2FHIK6%2B8oji0Bfg0pZT63ve%2BR5kGRtjAOWjDMGTcuHG8k%2BCzKNTwaVFRUYPmr3fs2GHOX5eUlEhnZ6fuiEBAee211%2BSHP%2FyhPPXUU7qjAD7ntttuk2effVZ3DCDgTJw4UfLy8sw56JkzZ1Kg4Tco1PArM2fOtN14441y4403isjg%2Beu1a9fK0aNHdUcE%2FN7TTz8tiYmJ6nvf%2Bx4LGuDf%2FvKXv6g%2F%2FOEPumMAASE8PFzS09PNL9BJSUmc4QG%2FRaGGXxs4f93b26tqamrkxBfs5uZm8Xg8uiMCfun222%2BXpKQkNW%2FePBY4sLxNmzap733ve7pjAH7LbrdLYmKi%2BQU6PT1dwsPDeb8gIFCoETDCw8MHbQ%2Fv7OxUZWVl4nQ6pbi4WLZt26Y7IuA3jh07Jtddd500NzcrFj2wsmPHjqlvf%2Fvb0tfXpzsK4Ffi4%2BMlIyNDDMOQpUuXypQpU3iXICBRqBGwJk6caLvyyivlyiuvFJHB28NLSkrkwIEDuiMCPu2jjz6Sn%2F%2F85%2FKLX%2FxCdxRAm1%2F84hfy3nvv6Y4B%2BLyoqChJTU01t3GnpKRQoGEJFGpYxsDt4W63W23atMk8Pbyurk76%2B%2Ft1RwR8zq9%2F%2FWu59tpr1QUXXMDCCJazZcsWtXz5ct0xAJ8UEhIiaWlpZoG%2B7LLLhBsiYEUUaliSw%2BGwpaamSmpqqvz3f%2F%2B39PT0qNraWrNgNzY2ilJKd0xAu%2BPHj8uDDz7INUGwpAceeIAftgIDDLzOatGiRTJ27FgKNCyPQg2ISERExKD569bWVnN7uNPplL179%2BqOCGjz6quvyt13360SEhJYOMEyNm%2FerPhBEqxuypQpg%2B6Djo%2BP5z0AnIRCDXyG%2BPh423XXXSfXXXediAyev16%2Ffr0cPnxYd0Rg1Hg8Hvnd734n%2F%2B%2F%2F%2FT%2FdUYBR87vf%2FY6bImA5ERERsmDBArNAJycni81mo0QDp0ChBk7DyfPXzc3N5tfryspKtgQi4L366qvy6KOPqvHjx7OwQsA7fPiw%2Bvvf%2F647BjDiHA6HeZ2VYRiSmZkpoaGhPOeBM0ChBs6Qw%2BGwpaSkSEpKitx1111y%2BPDhQddzffTRR7ojAsOut7dXXnzxRbntttt0RwFG3Msvvyzd3d26YwAjYs6cOZKfny%2BGYcjChQuZgwbOEoUaOEtjx461feUrX5GvfOUrIiLS1tamqqqqxOl0yqpVq2TPnj26IwLD4h%2F%2F%2BAeFGpbwj3%2F8Q3cEYNhMnDhRFi5caB4kds4551CggWFEoQaGWVxc3JD3X69du1aOHj2qOyLglZqaGjl06JCKiYlhMYaA1dXVpaqqqnTHALwWHh4u6enp5jbupKQksdvtPLeBEUKhBkbYwPnrvr4%2BVVNTI8XFxeJ0OqWpqYlDb%2BA3XC6XlJSUyH%2F8x3%2FojgKMmJKSEjl27JjuGMBps9vtkpSUJIZhSH5%2BvqSnp0tYWBgFGhglFGpgFIWFhdny8vIkLy9PRET279%2BvSktLzfnrbdu26Y4InNKmTZso1AhomzZt0h0B%2BFzx8fGSkZEhhmHI0qVLZcqUKRRoQBMKNaDRhAkThtweXlJSIgcOHNAdERikqalJdwRgRDU3N%2BuOAHxKVFSUpKammtu4U1JSKNCAj6BQAz7k5Ou53n77bfN6rtraWq7ngnbvvPOO7gjAiNq8ebPuCICEhIQMug967ty54nA4KNGAD6JQAz7K4XDY5s%2BfL%2FPnz5d7771Xenp6VG1trVmwGxsbRSmlOyYsZt%2B%2BfeJyuVRQUBALOwQcpZRqbW3VHQMWNXv2bLNAFxQUyJgxY3jOAn6AQg34iYiICNuJF62ISEdHhyovLzdPD9%2B5c6fuiLAAj8cjnZ2dEhcXpzsKMOz279%2FPTiCMmsmTJ0tWVpYYhiGLFy%2BWadOmUaABP0ShBvxUbGzsoPnr9957T5043KyiooLruTBiKNQIVPv379cdAQEsOjpasrOzJT8%2FXwzDkAsvvJACDQQACjUQIC688ELbhRdeKLfddpu43W7V3Nxsbg%2BvrKzkqwuGDaMGCFT8u43h5HA4JDEx0dzGnZWVJSEhIZRoIMBQqIEA5HA4bCkpKZKSkiJ33XWXdHd3q7q6OuavMSzsdrvuCMCIsNnoOjg7A%2BegDcOQcePG8S8VEOAo1IAFREZGDpq%2F3rVrl7k9vKSkRNrb23VHhB8JDg7WHQEYEfy7jTM1adIkycvLM7dxT58%2BnQINWAyFGrCg6dOn22644Qa54YYbRGTw%2Fdfr1q2TI0eO6I4IHxYfH687AjAiOBsAnyc8PFzS09PNL9BJSUlit9sp0YCFUagBDLr%2F2uVyqZaWFnN7eHl5ubhcLt0R4SPGjBkj0dHRLB4RkCIiImwxMTHq0KFDuqPAR9jtdklKSjILdEZGhoSFhfEMBGCiUAMYJCgoaND89f79%2B1VpaalZsLdu3ao7IjSaMWOG7gjAiJo%2BfbpQqK1t4Bx0bm6uTJgwgQINYEgUagCnNGHChEHXcw3cHl5SUiIHDhzQHRGjKDk5WXcEYEQlJSXJO%2B%2B8ozsGRlFUVJSkpqaaJTolJYUCDeC0UagBnJGB28M9Ho9qamoyv15XV1dLX1%2Bf7ogYQZdddpnuCMCImjt3rvzlL3%2FRHQMjKCgoSBISEswCnZ2dLcHBwZRoAF6hUAPwmt1uH7Q9vKenR1VWVsqJE8TfeecdrucKMPPmzdMdARhR8%2BfP1x0Bw8xms8kll1xinsSdlZUlERERFGgAw4JCDWDYRERE2AoLC6WwsFBERDo6OlR5ebl5eviOHTt0R8RZmDx5ssydO1d3DGBEzZ07V%2BLj46W1tVV3FJyFyZMnS1ZWlhiGIYsXL5Zp06ZRoAGMCAo1gBETGxs75Px1cXExB%2F%2F4mSuuuILrYRDw7Ha7bdmyZWrFihW6o%2BAMREZGSlpamrmNOzk5WWw2G88rACOOQg1g1Jx8PdeGDRukuLhYnE6nbNiwgeu5fNw3vvEN3RGAUfHNb35TKNS%2BLSgoSObPny%2BGYUh%2Bfr7Mnz9fgoKCKNAARh2FGoAWQUFBtvT0dElPT5cHHnhAuru7VV1dnXnAWWNjI%2FPXPuTCCy%2BUzMxM3TGAUZGdnW27%2BOKL1ebNm3VHwQADr7PKz8%2BXmJgYCjQA7SjUAHxCZGSk7cRCSURk9%2B7d6sTW8JKSEtm3b5%2FuiJZ26623sn0SlnLLLbfILbfcojuGpU2ePFny8vLMw8SYgwbgiyjUAHzStGnTbN%2F%2B9rfl29%2F%2BtogMnr9et26dHDlyRHdEy5gxY4bccMMNumMAo%2Bo73%2FmOPPLII7J9%2B3bdUSwjPDxc0tPTmYMG4Fco1AD8wsD562PHjqna2lrzcLPGxkZxu926Iwas%2B%2B%2B%2FX0JDQ1nUwlJCQkJs99xzj7rpppt0RwlYDodDkpOTzS%2FQCxYs4FkDwO9QqAH4ndDQUNvChQtl4cKF8otf%2FEK6urpUfX29OX%2Fd0NCgO2LAmDt3rrlLALCa73znO%2FLnP%2F9Z6uvrdUcJGAPnoPPy8mT8%2BPEUaAB%2BjUINwO9FRUUNmr8%2BsT28uLhYSktL5cCBA7oj%2BiWHwyF%2F%2FOMfxeFwsOCFJdntdtsTTzyh5s%2Bfzy0EXho%2Ffrzk5uaaX6Fnz57N8wRAQKFQAwg4A7eHezwe1dTUZH69rq6ulr6%2BPt0R%2FcJPf%2FpTSU5OZvELS0tOTrbdf%2F%2F96v7779cdxS8EBQVJQkKC%2BRU6JyeH66wABDQKNYCAZrfbbSkpKZKSkiJ33XWX9PT0qKqqKnP%2B%2Bn%2F%2F93%2B5nuszGIYh9957r%2B4YgE%2B49957paqqSoqLi3VH8Tk2m00uvfRS8wt0ZmamREREUKABWAaFGoClRERE2AoKCqSgoEBERDo6OlR5ebl5eviOHTt0R9TuC1%2F4grz88stit9tZFAPyrx%2FMvfLKKyo9PV0%2B%2BOAD3XG0i4uLk8zMTDEMQ5YsWSJTp07lWQHAsijUACwtNjbWduWVV8qVV14pIiIffPCBeT1XWVmZ5a7nmjx5sqxfv15iY2NZIAMDjB8%2F3rZ69WqVnp4ura2tuuOMqjFjxsjChQvNbdxf%2FOIXeT4AwL9RqAFggC9%2B8Yu2L37xi%2FLDH%2F5Q3G63am5uNuevKysrpb%2B%2FX3fEERMXFyfFxcUcGgQMYdasWbby8nKVl5cnu3fv1h1nxDgcDklMTDQLdFZWloSEhPBcAIDPQKEGgCE4HI5B89dHjx41t4c7nU557733dEccNl%2F4whdk7dq1cu6557JoBk5hzpw5toqKClVYWChbtmzRHWfYXHjhhYMOEouOjuZZAACngUINAKcpOjratmzZMlm2bJmIiOzbt09VVlaK0%2BmU1atX%2B%2B0Xq4yMDHn99ddl0qRJLKCB0zB79mzb22%2B%2Fra655hopKirSHccrsbGxkpOTI4ZhSGFhocyYMYO%2F%2FwDgBQo1AHhp8uTJ5vy1Ukpt3rxZiouLze3h3d3duiOeUlBQkNxzzz1y3333ca0NcIbGjBlje%2BONN9Qvf%2FlLeeihh%2BT48eO6I51SZGSkZGVliWEYkp%2BfLxdffLHYbDb%2B3gPAWaJQA8AwsNlstksuuUQuueQS%2BdGPfiT9%2Ff2qtrbWvJ6roaFB3G637pimxMRE%2BeMf%2Fyjz5s1jQQ14yeFw2P77v%2F9bLr%2F8cvW9731PGhoadEcamE1SUlLM66wWLFjAHDQAjAAKNQCMgJCQEFtOTo7k5OTIz3%2F%2Bczl48KAqKyszv2B%2F%2FPHHWnJNnjxZHnjgAfnud78rDoeDxTUwDFJSUmwbN25Uzz77rPz0pz%2FVdgr4ueeea36BXrhwoYwbN46%2F4wAwwijUADAKxo0bZ%2FvqV78qX%2F3qV0VEZNu2beb1XCUlJbJ%2F%2F%2F4R%2Ff1nzZolP%2FrRj%2BQ73%2FmOhIeHs8gGhpndbrd997vfleuuu04999xz8tvf%2FlY%2B%2BeSTEf09J0yYIHl5eeZhYrNmzeLvNgCMMgo1AGgwa9Ys23e%2F%2B1357ne%2FKx6PRzU1NZlfr2tqaqSvr%2B%2Bsf4%2BYmBhZvHix3HDDDZKbmyt2u53FNjDCwsLCbDfffLN8%2F%2FvfV%2BXl5fLcc8%2FJqlWr5MCBA8Pxa0t6err5FTopKYm%2F1wCgGYUaADSz2%2B3m9Vw%2F%2BclPpLe3V9XU1Mjbb78tzc3N0tzcLFu2bBGPx3PKX2fq1KmSlJQkl112mWRnZ0t6ejqHjQGa2Gw228KFC2XhwoXidrtVbW2tlJeXy6ZNm6SpqUn27NkjSqkh%2F3m73S7nnnuuJCYmSlJSksydO1fS09PZYQIAPoZCDQA%2BJjw83HZiC%2BcJvb29qrOzUw4fPiyHDh2S3t5esdlsEh0dLePGjZOZM2dKaGgoC23ABzkcDltmZqZkZmaa%2F92xY8fUjh075ODBg3L06FFRSkl4eLjExMTI2LFjZeLEiZRnAPADFGoA8APh4eG26dOny%2FTp03VHATAMQkNDbXPmzNEdAwBwluy6AwAAAAAA4I8o1AAAAAAAeIFCDQAAAACAFyjUAAAAAAB4gUINAAAAAIAXKNQAAAAAAHiBQg0AAAAAgBco1AAAAAAAeIFCDQAAAACAFyjUAAAAAAB4gUINAAAAAIAXKNQAAAAAAHiBQg0AAAAAgBco1AAAAAAAeIFCDQAAAACAFyjUAAAAAAB4gUINAAAAAIAXKNQAAAAAAHiBQg0AAAAAgBco1AAAAAAAeIFCDQAAAACAFyjUAAAAAAB4gUINAAAAAIAXKNQAAAAAAHiBQg0AAAAAgBco1AAAAAAAeIFCDQAAAACAFyjUAAAAAAB4gUINAAAAAIAXKNQAAAAAAHiBQg0AAAAAgBco1AAAAAAAeCFIdwAEFpfLpfbu3St79%2B6Vjo4O6evrM%2F9vkyZNkqlTp8q0adMkLCzMpjsrAAAAAkd%2Ff7%2Fas2eP7N69W9ra2sz%2FPjQ0VGJjYyUuLk6mTp0qISEhrEMxbCjUOCudnZ1q7dq1UllZKU1NTbJ58%2BZBJXoos2fPVqmpqTJ%2F%2FnzJzMyUhIQEsdvtPNwAAABwWt59911VWVkp9fX1smHDBvnoo49EKXXKfyY4OFguuugilZiYKBkZGbJ48WKJj49nDQqvUahxxo4cOaJefvll%2Bctf%2FiIbN24Ut9t9xr%2FG1q1bZevWrfLyyy%2BLiEhsbKzk5uaq%2FPx8MQxDZs6cyYMNAAAApra2NuV0OqW4uFicTqfs3bv3jH%2BN48ePS3NzszQ3N8vzzz8vNptNkpOT1TXXXCPXX3%2B9jB8%2FnjUozgiFGqdtx44d6uGHH5aXXnpJuru7h%2FXX7ujokL%2F97W%2Fyt7%2F9TURE5syZowzDEMMwZOHChRITE8PDDQAAwEK6u7tVRUWFnCjRmzdvHvbfQyklDQ0N0tDQIPfcc49cddVV6p577pHzzz%2BftSdOC4Uan6u9vV099NBD8qc%2F%2FUn6%2B%2FtH5ff86KOP5KOPPpInn3xSHA6HXHbZZcowDMnPz5e0tDQJDg7mIQcAABBA3G63evvtt80v0HV1daO29hQR6evrk7%2F85S%2Fy8ssvy7XXXqseeughmT59OmtOnBKFGqf06quvqltuuUU6Ozu1ZXC73VJfXy%2F19fXy85%2F%2FXCIiImTBggXmF%2Bzk5GSx2Ww87AAAAPzM1q1bldPpFKfTKSUlJXLgwAHdkcTlcsnzzz8vf%2F%2F73%2BX%2B%2B%2B9Xd9xxhzgcDtaa%2BEwUanymjo4Ode2118r69et1R%2FmUnp4eOfHgFRGJj48XwzDM%2BWsOlgAAAPBNnZ2dqrS01PwKvX37dt2RhtTT0yM%2F%2BclPZOXKlfLKK6%2BoadOmscbEp1Co8SmNjY3qP%2F7jP3z6ATdQa2urvPDCC%2FLCCy%2BIyL9OED%2Fx9XrRokUyduxYHn4AAAAauFwuVV9fL0VFReJ0OqWpqUk8Ho%2FuWGekpqZGkpKS5JVXXlF5eXmsKzEIhRqDvPHGG%2Brqq6%2BWY8eO6Y7ita1bt8qKFStkxYoVEhwcLGlpaeb89WWXXcaWHQAAgBHi8XhUS0uL%2BQW6urpaent7dcc6a52dnVJYWCh%2F%2FvOf1XXXXcdaEiYKNUyvvPKK%2Bta3viXHjx%2FXHWXYHD9%2BXCorK6WyslLuv%2F9%2BiYyMNAu2YRiSkpLCAxEAAOAstLW1qaqqKnE6nVJUVOTVdVb%2BwOVyyfXXXy%2BHDh1St956K2tIiAiFGv%2F26quvqmuuucbvtuCcqe7u7kHz1zNnzjTLdV5ensTGxvJwBAAAOIVDhw6psrIyc0310Ucf6Y40apRScvvtt0tkZKT6P%2F%2Fn%2F7BuBIUaIps2bVLf%2Fva3A75Mf5YdO3bIs88%2BK88%2B%2B6yIDJ6%2FLiwslOjoaB6UAADA0txut2pubjYLdEVFRUDtaDxTSin5%2Fve%2FL9OnT1f5%2BfmsFS2OQm1xu3btUkuWLJGenh7dUXzCwPnrsLAwycjIMAt2UlKS2O12HpoAACDgbd68WQ0s0F1dXboj%2BZTjx4%2FLVVddJZs2bVLnnnsu60MLo1BbmMfjUd%2F%2B9relo6NDdxSf1NfXN2h7%2BIQJEyQ3N9c84GzWrFk8PAEAQEBob29XFRUV4nQ6Zc2aNbJr1y7dkXzeoUOH5Oqrr5a6ujoVHBzMutCiKNQW9utf%2F1pKS0t1x%2FAb%2B%2Ffvl1dffVVeffVVERE599xzzbuvc3NzJSYmhgcpAADwC11dXWaBLi4ulnfffVd3JL%2FU0NAgDz%2F8sPz0pz%2FVHQWaUKgtavv27eqBBx7QHcOvffzxx%2FLxxx%2FLU089JQ6HQxITE83t4ZmZmRIaGkrBBgAAPuHkOeiqqiq%2FvibVlzz88MPyjW98Q82ZM4e1nwVRqC3qrrvukr6%2BPt0xAobb7ZaGhgZpaGiQ5cuXS0REhCxYsMAs2MnJyWKz2XjIAgCAUbN161ZzDtrpdMrBgwd1RwpI%2Ff39ctddd8k%2F%2F%2FlP3VGgAYXagjZs2KBObFvGyOjp6Rk0fx0XFyeGYZhbxKdMmUK5BgAAw6qjo0OVlJSYa5AdO3bojmQZb7zxhlRVVanMzEzWeBZDobag5cuXi1JKdwxLaWtrkxdffFFefPFFERl8PVd%2Bfj7z1wAA4Iz19vaqmpoas0A3NTVZ8hpUX%2FGb3%2FxGMjMzdcfAKKNQW8y2bdvUW2%2B9pTuG5Q28nuvk%2BeusrCwJCQmhYAMAgE%2FZunWrWrlypRQVFUl1dTUjfD5k5cqV8uGHH6rzzz%2BfdZyFUKgt5sknnxS32607BgY4ef567NixkpOTY24P56EMAIB1bd%2B%2BXZ04ibu0tFQ6Ozt1R8IQlFKyYsUK%2Be1vf6s7CkYRhdpClFLMTvuBw4cPy5tvvilvvvmmiIjExcWpzMxMMQxDlixZIlOnTqVgAwAQoLq6ulR9fb25jbuhoUF3JJyBv%2F%2F97%2FKb3%2FxGcRitdVCoLWTTpk0cTuGH2traBt1%2FPXD%2BurCwUKKjo3lgAwDgp1wul2ppaTELdEVFhRw%2Fflx3LHhp9%2B7d8vbbb8tll12mOwpGCYXaQlauXKk7AobBwPnrsLAwSU9PH3Q9l91up2ADAODD3nnnHTWwQHd3d%2BuOhGH01ltvUagthEJtIXV1dbojYJj19fVJSUmJlJSUyN133y3R0dGSnZ2tli1bJvn5%2BTJr1izKNQAAmu3bt09VVlaK0%2BmUNWvWyK5du3RHwgjasGGD7ggYRRRqi1BKKWZwAt%2FRo0elqKhIioqKRGTw9vC8vDwZP348BRsAgBHW09OjamtrzW3cjY2NXFlqIRs3bhSPx6PYNWgNFGqL%2BPjjj%2BXQoUO6Y2CUnXw9V0pKijpx93VaWpqEhobyoAcA4Cy5XC61adMmKS4uFqfTKfX19cxBW9jhw4dl27Zt8oUvfEF3FIwCCrVFcBgZ3G63bNy4UTZu3CgPP%2FywhIeHf2r%2BmhMpAQA4PVu3bjXnoJ1Opxw8eFB3JPiQnTt3UqgtgkJtEXv27NEdAT6mt7fXXASIiMTGxkpOTo4yDEMKCgpk5syZlGsAAP6ts7NTlZWVidPplPXr18v27dt1R4IPY%2B1tHRRqi9i3b5%2FuCPBxHR0dg67nuuCCC1R%2Bfr4YhiE5OTlczwUAsJTe3l5VVVUlTqdTiouLpaWlhTlonLa2tjbdETBKKNQW0d%2FfrzsC%2FMz7778v77%2F%2Fvjz%2B%2BOPicDgkMTHR3B6elZUlISEhFGwAQMDweDyqqanJ3L1VXV0tfX19umPBTzFDbx0UaovweDy6I8CPud1uaWhokIaGBlm%2BfLlERkZKWloa89cAAL%2FW2tqqqqurZeXKlbJ69WrZv3%2B%2F7kgIEKy9rYNCbRF0HQyn7u7uQfPX06dPF8MwzII9adIk%2FoUDAPicgwcPqtLSUnMb9yeffKI7EgA%2FR6G2iIkTJ%2BqOgAC2a9cuee655%2BS5554TkcH3XxcUFMiYMWMo2ACAUedyuVRLS4v5Q%2BCKigq24mJUxMbG6o6AUUKhtoi4uDjdEWAhA%2B%2B%2FDgoKkoSEBLNgZ2dnS3BwMAUbADAiBl5ntW7dOjly5IjuSLCgSZMm6Y6AUUKhtoipU6fqjgCLcrlcg%2Bavx48fL7m5ueYJ4rNnz6ZcAwC8tmfPHnViC7fT6eRmE%2FiE%2BPh43REwSijUFnHRRReJw%2BEQt9utOwos7sCBA%2FLaa6%2FJa6%2B9JiKDt4fn5ubKhAkTKNgAgCF1d3eruro6cxt3Y2Mj11nBp9jtdrnooot0x8AooVBbRGRkpO28885TH3zwge4owCADt4fb7XZJSkoyC3ZGRoaEhYVRsAHAwtxut2pubjYLdGVlJdeBwqfNmTNHoqKiWL9YBIXaQi677DKhUMOXeTyeQdvDIyIiJDMz09wefumll3I9FwBYwAcffGBu4y4vL2cOGn5l7ty5uiNgFFGoLaSwsFBeeOEF3TGA09bT0yPr1q2TdevWici%2FTszMyclRJ04PnzlzJuUaAAJAR0eHKi8vNw8S27Fjh%2B5IgNcuv%2Fxy3REwiijUFnL55ZdLUFCQuFwu3VEAr3R0dMirr74qr776qogMnr%2FOz8%2BXmJgYCjYA%2BIHe3l5VU1NjbuNuamoSj8ejOxZw1hwOhxQUFOiOgVFEobaQcePG2XJycpTT6dQdBRgWJ1%2FPNX%2F%2BfLNgp6amSlBQEAUbAHyAx%2BNRDQ0NZoGuqamRY8eO6Y4FDLusrCwOWLUYCrXFfPe73xUKNQKRy%2BWSmpoaqampkQcffFAiIyMlLS3NLNjJycnMXwPAKBp4H3Rpaans379fdyRgxN100026I2CUUagt5oorrpD4%2BHhpbW3VHQUYUd3d3eaXEBGRyZMnS1ZWljIMQxYvXizTpk2jXAPAMOrq6lL19fXms7ehoUF3JGBUTZgwQa644grdMTDKKNQWExwcbLv11lvVPffcozsKMKr27ds35Px1QUGBjBkzhoINAGfA5XKplpYWs0BXVFTI8ePHdccCtPnP%2F%2FxPCQ0NZT1hMRRqC7rtttvk97%2F%2Fvezbt093FECbk%2BevExISzIKdnZ0twcHBvBAB4CQDt3GvW7eO66yAf5swYYLcdtttumNAAwq1BUVGRtruvfdexV964F9cLteg%2B6%2FHjRsnubm55v3XX%2FjCFyjXACxp9%2B7dqri4WJxOp5SUlPDDeGAIP%2FnJT9jtZlEUaov6wQ9%2BIH%2F961%2Blrq5OdxTA5xw8eFBef%2F11ef3110VEJD4%2BXmVkZMjSpUtlyZIlnN4JIGB1d3eruro6cxt3Y2OjKKV0xwJ82qWXXiq333677hjQhEJtUXa73fb000%2BruXPnMu8EfI7W1lZz%2Ftput0tSUpK5PTwjI0PCwsIo2AD8ktvtVs3NzWaBrqyslP7%2Bft2xAL%2FhcDjk2WefZVTMwijUFnbppZfafvGLX6j%2F%2Bq%2F%2F0h0F8Bsej2fQ9vCIiAjJyMgwt4cnJCRwPRcAn%2Fb%2B%2B%2B8rp9MpxcXFUl5eLkePHtUdCfBbDzzwgMydO5f3voVRqC3ujjvukLffflv%2B%2Fve%2F644C%2BKWenh5Zv369rF%2B%2FXkREJk6cKAsXLlSGYciiRYvknHPO4SULQKuOjg5VXl5uHiS2Y8cO3ZGAgLBs2TLh5hxQqC3OZrPZnnnmGbVlyxZpamrSHQfwe52dnYOu5zr%2F%2FPOVYRiSn58vCxcu5MASACOup6dHVVZWyonDxN555x3moIFhdskll8gLL7wgdrud97rFUagh0dHRtvXr16ucnBx59913dccBAsqHH34oH374oTzxxBPicDgkMTHRnL%2FOzMzkvkoAZ83j8aimpiZzDrq6ulr6%2Bvp0xwIC1nnnnSfr1q2TsWPH8g4HhRr%2FMnHiRNv69etVfn6%2BvPfee7rjAAHJ7XYPmr%2BOioqSnJwcc%2F76wgsv5MUM4LR88skn5hx0WVmZHDhwQHckwBLmzJkjTqdT4uPjeWdDRCjUGGDKlCm2%2Bvp6ddVVV8natWt1xwECXldXlxQVFUlRUZGIiEyePFllZWWJYRhy%2BeWXy%2FTp03lZAxARkaNHj6ry8nIpKiqS4uJi2bZtm%2B5IgOWkpaXJm2%2B%2BKbGxsbyfYaJQY5Do6Gjbm2%2B%2BqW6%2F%2FXZ5%2BumndccBLGXfvn3m%2FLXNZpOLL77YnL%2FOysqSyMhIXuCARfT19ana2lpzDrqxsVE8Ho%2FuWIBlfec735EnnniCUS18CoUanxISEmJ76qmn5Ctf%2BYq64YYbpLW1VXckwHKUUvLOO%2B%2FIO%2B%2B8I48%2B%2BqgEBQVJQkKCOX%2BdnZ3NnZdAgNm6das6MQe9du1arrMCfEBMTIw8%2BeST8o1vfIN3Lj4ThRpDKigosDU3N6t7771XnnvuOXG73bojAZblcrkGzV%2BPGzfOvJ4rPz9fzj33XF70gJ%2FZtWuXOvEFuqSkRNrb23VHAvBvdrtdrr%2F%2Benn44YclLi6OdyyGRKHGKU2aNMn2pz%2F9SX74wx%2Bqu%2B66S9avX8%2FVG4APOHjwoPzjH%2F%2BQf%2FzjHyIics4555iHm%2BXm5srEiRN5%2BQM%2B5siRI6qsrExOHCb24Ycf6o4E4DMsWrRIfvWrX0lSUhLvUnwuCjVOS0JCgm3t2rWyefNm9dhjj8lLL73ElRyAD9m%2Bfbv86U9%2Fkj%2F96U9it9slOTlZfeUrX5ErrriC08MBjT7%2B%2BGP1xhtvyJtvvin19fXicrl0RwLwGcLCwuSaa66R22%2B%2FXS655BLemzhtdt0B4F8uvvhi2zPPPGNrb2%2BXv%2F71r%2FK1r31NIiMjdccCMIDH45G3335b%2Fvu%2F%2F1suuugiufjii9XTTz%2Btenp62F4CjIK%2Bvj713HPPqZSUFHXeeefJnXfeKdXV1ZRpwMdERkbK1772NfnrX%2F8q7e3t8swzz9go0zhTfKGGV6Kjo21XX321XH311dLf36%2Fq6urMLWxvv%2F0289aAD3n33Xfl5ptvlnvvvVduvfVWdeedd3JiODACent71WOPPSaPPvqodHR06I4D4CQOh0Pmzp0rJ0ak0tLSJCQkhPchzgqFGmctJCTElp2dLdnZ2fKzn%2F1MDh06pEpLS%2BXESaVbtmzRHRGAiBw4cEAefPBBWbFihfz85z9XN9xwg9hsNhYSwFlSSqmXXnpJ7rnnHtm1a5fuOAAGOO%2B88%2BTEDRm5ubkSExPDew%2FDikKNYRcTE2P76le%2FKl%2F96ldFRKS1tVVVV1eL0%2BmUoqIi2bt3r%2B6IgKW1trbKd77zHXn55Zfl%2BeefV9OmTWNxAXipvb1d3XjjjbJy5UrdUQCIyMSJE2XhwoVy4haMWbNm8Y7DiKJQY8TFx8fbrrzySrnyyivF4%2FGo5uZmOXFNSHV1NYebAZqUlJRIQkKC%2FPnPf1Zf%2FvKXWXAAZ2jNmjXq%2BuuvZ3s3oFFYWJhkZGSYBToxMVHsdjvvNIwaCjVGld1utyUnJ0tycrLcdddd0tvbq2pqaszt4U1NTeLxeHTHBCzjwIEDcsUVV8j999%2BvHnjgARYgwGlasWKF%2BsEPfsBBY4AGs2fPNrdxFxYWSnR0NO8vaEOhhlbh4eG2Ew9EEZGOjg5VWlpqfsHesWOH7ohAwFNKyYMPPigHDhxQv%2F%2F975mrBk5BKaV%2B%2FOMfy6OPPqo7CmAZM2fONL9A5%2BbmSmxsLO8p%2BAwKNXxKbGys7etf%2F7p8%2FetfFxGRrVu3qhNfr51Opxw8eFB3RCBg%2Fc%2F%2F%2FI%2FYbDb5%2Fe9%2FrzsK4LPuvvtuyjQwwqKioiQ1NdX8Cp2SkkKBhs%2BiUMOnzZ4923bTTTfJTTfdJG63W23atMn8el1XVyfHjx%2FXHREIKI8%2F%2FriMGzeO7d%2FAZ%2Fj5z3%2Buli9frjsGEHCCg4MlLS3N%2FAp92WWXicPh4D0Ev0Chht9wOBy21NRUSU1Nlfvuu096enpUbW2t%2BfW6sbFRlFK6YwJ%2B76GHHpILL7xQXXXVVSxmgH9766231P333687BhAwBs5BL1q0SMaOHcs7B36JQg2%2FFRERMWj%2BurW1VTmdTvMLdmtrq%2B6IgF9SSsmNN94ol1xyibrgggtY4MDyPvzwQ3XdddfxQ1vgLMTHx5tfoA3DkPj4eN4vCAgUagSM%2BPh423XXXSfXXXediAyev16%2Ffr0cPnxYd0TAbxw9elS%2B8Y1vyKZNm1RwcDCLHliWx%2BNRN9xwgxw5ckR3FMCvREREyIIFC8yv0MnJyRx6iYBEoUbAOnn%2Burm52dweXllZKf39%2FbojAj6tpaVFHn30Ufmv%2F%2Fov3VEAbR577DGpq6vTHQPweQ6HQxITE80CnZmZKaGhoRRoBDwKNSzB4XDYUlJSJCUlRe666y45dOiQKisrMwv2Rx99pDsi4JMeeOAB%2BfrXv65mzpzJogiWs2fPHuamgVOYM2eOWaAXLlwoMTExvCtgORRqWFJMTIztiiuukCuuuEJERNra2lRVVZU4nU5ZtWqV7NmzR3dEwCf09vbKz372M3nmmWd0RwFG3c9%2B9jPp7u7WHQPwGRMnTpSFCxeaB4mdc845FGhYHoUaEJG4uDjblVdeKVdeeaWIDJ6%2FXrt2rRw9elR3RECb559%2FXu688051%2Fvnns3CCZWzfvl0999xzumMAWoWHh0t6err5FTopKUnsdjvvAmAACjXwGQbOX%2Ff19anq6mo5cYJ4c3OzeDwe3RGBUeN2u%2BWxxx6Tp556SncUYNT89re%2F5awNWI7dbpfExETzJO6MjAwJCwujQAOnQKEGPkdYWJh5PdevfvUr2b9%2FvyotLTUL9rZt23RHBEbcSy%2B9JI888oiKjo5mYYWA19vbq1566SXdMYBRER8fLxkZGWIYhixdulSmTJnCcx44AxRq4AxNmDBh0Pbwjz%2F%2BWJ24%2B7q0tFQOHTqkOyIw7I4ePSp%2F%2B9vf5MYbb9QdBRhxf%2Fvb3%2BTgwYO6YwAjIiYmRnJzc807oc8991wKNHAWKNTAWTr33HNt5557rtx8882fup6rqqpKjh07pjsiMCxee%2B01CjUs4bXXXtMdARg2QUFBkpCQYM5BZ2dnS3BwMCUaGCYUamAYnXw9V09Pj6qtrTULdmNjoyildMcEvFJeXi5dXV0qKiqKhRgCVm9vryorK9MdAzgrs2fPNgv0okWLZOzYsTy3gRFCoQZGUEREhDl%2FLfKv67lOzF47nU7Zu3ev7ojAaTt27JiUlZXJsmXLdEcBRkx5ebn09PTojgGckSlTpphbuA3DkLi4OAo0MEoo1MAoiouLs1177bVy7bXXisjg67mKi4uZv4bP27hxI4UaAW3jxo26IwCfKyIiQhYsWGB%2BhU5OThabzUaJBjSgUAMaDbye6%2BT568rKSq5sgc9pamrSHQEYUc3NzbojAJ%2FicDgkMTHRLNCZmZkSGhpKgQZ8AIUa8BEnz18fPnxYlZeXm9vDP%2FzwQ90RAWlpadEdARhR77zzju4IgIiInH%2F%2B%2BeY27pycHOagAR9FoQZ81NixY21f%2FvKX5ctf%2FrKI%2FGv%2BuqqqSpxOp6xatUr27NmjOyIsqLW1Vdxut3I4HCzsEHCUUopnK3SZOHGiLFy40DxI7JxzzuE5C%2FgBCjXgJ%2BLi4gbdfz1w%2Fnrt2rVy9OhR3RFhAW63W%2Fbv3y%2BTJk3SHQUYdgcPHpS%2Bvj7dMWAR4eHhkp6ebm7jTkpKErvdTokG%2FAyFGvBTA%2Bev%2B%2Fr6VE1NzaDruTwej%2B6ICFAdHR0UagSkzs5O3REQwOx2uyQnJ5sFOj09XcLCwijQgJ%2BjUAMBICwszJaXlyd5eXnyy1%2F%2BUo4eParKy8ulqKhIiouLZdu2bbojIoDwwxoEKv7dxnCLj4%2BXjIwMWbp0qSxZskQmTJhAgQYCDIUaCEDR0dG2ZcuWmdcbDdweXlJSIgcOHNAdEX7MbrfrjgCMCG4dwtmKioqS1NRU8yt0SkoK%2F1IBAY5CDVjAyddzNTQ0mHdf19XVybFjx3RHhB9xOBy6IwAjIiiIZRHOTGhoqKSlpUl%2Bfv6JAi0c2ghYC28OwGIcDodt3rx5Mm%2FePLnnnnukt7f3U%2FPXSindMeHD4uPjdUcARsTkyZN1R4AfmD17tvkFuqCgQMaMGUOBBiyMQg1YXHh4uO3EwkBEpKOjQ5WXl4vT6ZR169bJjh07dEeED4mMjOQuVASsqKgoW3R0tOLWBAw0efJkycrKEsMwZPHixTJt2jSegQBMFGoAg8TGxg66nuv9999XxcXF4nQ6pby8nOu5LG769Om6IwAjavr06fLee%2B%2FpjgGNoqOjJScnRwzDkPz8fLngggso0ACGRKEGcEoXXHCB7YILLpDbbrtN3G63am5uNreHV1ZWSn9%2Fv%2B6IGEVJSUm6IwAjKiEhgUJtMQ6HQxITE81t3FlZWRISEkKJBnBaKNQATpvD4bClpKRISkqK3HXXXdLd3a3q6uqYv7aQyy67THcEYETNnTtX%2FvrXv%2BqOgRE2cA46Pz9fYmJiKNAAvEKhBuC1yMjIQfPXu3fvNreHO51OaW9v1x0Rw4xCjUA3b9483REwAiZNmjSoQDMHDWC4UKgBDJtp06bZbrjhBrnhhhtEZPD91%2BvWrZMjR47ojoizMGHCBElNTdUdAxhRqampMnHiROns7NQdBWchPDxc0tPTzRKdlJQkdrudEg1g2FGoAYyYgfdfu1wu1dLSYn69rqiokOPHj%2BuOiDOwbNkyCQoKYkGKgBYUFGRbvHix%2Bstf%2FqI7Cs6A3W6XpKQks0BnZGRIWFgYzysAI45CDWBUBAUFDZq%2FPnDggCotLZUTW8S3bt2qOyI%2Bx9VXX607AjAqrr76aqFQ%2B74Tc9D5%2BfmSm5sr48ePp0ADGHUUagBajB8%2F3va1r31Nvva1r4nI4O3hpaWlsn%2F%2Fft0RMcAXvvAFyc%2FP1x0DGBWFhYVy7rnnyscff6w7CgaIioqS1NRUMQxDli1bJhdeeCEFGoB2FGoAPmHg9nC3260aGxvF6XRKcXGx1NbWyrFjx3RHtLSbb76Z%2BUNYhs1ms33ve99Td955p%2B4olhYaGioLFiyQ%2FPx8MQxDkpOTxeFw8BwC4FMo1AB8jsPhsF122WVy2WWXyd133y29vb2qpqbGnL9uamoSj8ejO6ZlxMbGyk033aQ7BjCqbr75Zvn1r3%2FNbQWjbOB1VgUFBTJmzBgKNACfRqEG4PPCw8MHXc%2B1b98%2BVVJSYn7B3r17t%2B6IAe2ee%2B6R6OhoFrWwlMjISNtdd92lfvzjH%2BuOEtCmTZtmfoHOy8uTyZMn86wB4Fco1AD8zuTJk23f%2FOY35Zvf%2FKaIDJ6%2FLi4ulkOHDumOGDDmzJkjN998s%2B4YgBY%2F%2FOEP5dlnn5X33ntPd5SAERkZKWlpaeZX6OTkZLHZbJRoAH6LQg3A7508f93c3GxuD6%2BsrJT%2B%2Fn7dEf2SzWaTp556SkJDQ1nswpJCQkJsTz%2F9tMrOzhallO44fsnhcEhiYqJZoLOysiQkJIRnCoCAQaEGEFAcDseg67m6u7tVXV2dWbAbGxtZGJ%2Bm22%2B%2FXXJzc1n4wtIyMzNtt99%2Bu3rsscd0R%2FEbA%2Beg8%2FPzJSYmhucIgIBFoQYQ0CIjIz81f11ZWSlOp1NWr17N%2FPUQ5s6dK8uXL9cdA%2FAJjzzyiGzYsEHq6up0R%2FFJsbGxkpOTI4ZhSGFhocyYMYMCDcAyKNQALGXy5Mm2K6%2B8Uq688koRGTx%2FvW7dOjly5IjuiNpNmTJFXn%2F9dbZlAv8WHBxse%2B2111RaWprs3LlTdxztIiIiZMGCBcxBA4BQqAFY3MD562PHjqm6ujopLi4Wp9MpDQ0N4na7dUccVWPGjJHVq1fzhQk4yZQpU2xFRUUqMzNTDh8%2BrDvOqHI4HJKSkmJu4U5LS%2BNsBQD4Nwo1APxbaGioLScnR3JycuQXv%2FiFdHV1qfr6enP%2BuqGhQXfEETV27FhZs2aNJCQksFAGPsMll1xiKykpUQUFBbJ%2F%2F37dcUbUwDnovLw8GT9%2BPM8FAPgMFGoAGEJUVNSg%2Bett27apE1%2BvS0tLA2pBPWnSJFm9erWkpKSwaAZOISUlxeZ0OtXll18ubW1tuuMMmwkTJkhubq75FXrWrFk8CwDgNFCoAeA0zZo1y9we7vF4VFNTk%2Fn1urq6Wvr6%2BnRH9Mqll14qb775ppxzzjksoIHTkJiYaHv77bfVFVdcIZs2bdIdxytBQUGSkJBgfoXOycmRoKAgngEAcIYo1ADgBbvdPuh6rt7eXlVVVWXOX7e0tPjF9Vzf%2Fe535dFHH5XIyEgW0sAZmDp1qq2iokLdcccd8tRTT%2Fn833ebzWYW6Pz8fMnMzJTw8HD%2B3gPAWaJQA8AwCA8Pty1atEgWLVokIiLt7e2qpKREnE6nFBcXy65du3RHHGTGjBny5JNPypIlS1hQA14KDw%2B3PfHEE%2FKlL31Jff%2F735ft27frjjTI9OnTJT8%2F35yDnjRpEn%2FfAWCYUagBYARMmjTJ9o1vfEO%2B8Y1viIjIhx9%2BqE6U6%2FLycm2nBEdERMgdd9whd911l0RERLC4BoZBQUGB7b333lO%2F%2Bc1v5JFHHpGuri4tOcaOHSs5OTlmiT7%2F%2FPP5Ow4AI4xCDQCj4Pzzz7edf%2F758oMf%2FEBcLpfauHGjOX9dX18vx48fH9HfPyYmRm655Rb5z%2F%2F8T4mNjWWRDQyz8PBw23333Se33HKL%2Bv3vfy9PPPGEHDhwYER%2Fz%2BDgYElNTTXnoOfNm8ccNACMMgo1AIyyoKAg24IFC2TBggVy%2F%2F33S1dXlyovLzfnr997773h%2Bn0kMzNTbrjhBvna177GvCQwCiZMmGB76KGH5J577lGvv%2F66PP%2F881JeXi4ul2tYfv0LL7zQnIPOycmRqKgo%2Fl4DgEYUagDQLCoqyrZ06VJZunSpiIjs3btXlZSUyNtvvy3Nzc3S0tJyWlvEg4OD5dJLL5V58%2BZJdna2LFq0SMaNG8diG9AgLCzMds0118g111wjhw4dUuvXr5eKigrZuHGjtLS0nNaulDFjxkhCQoIkJSXJ3LlzJS8vT6ZMmcLfaQDwIRRqAPAxU6ZMsV133XVy3XXXiYiIUkpt375dOjo65PDhw3Lo0CE5dOiQRERESGhoqEyePFlmzJghU6dOZbsn4INiYmJsV111lVx11VUiIuJyudSePXtk586dsm%2FfPjl27Jj09PRITEyMxMTEyNixY2XixIkya9Yssdls%2FJ0GAB9GoQYAH2ez2WyzZs2SWbNm6Y4CYBgEBQXZZs6cKTNnztQdBQBwluy6AwAAAAAA4I8o1AAAAAAAeIFCDQAAAACAFyjUAAAAAAB4gUINAAAAAIAXKNQAAAAAAHiBQg0AAAAAgBco1AAAAAAAeIFCDQAAAACAFyjUAAAAAAB4gUINAAAAAIAXKNQAAAAAAHiBQg0AAAAAgBco1AAAAAAAeIFCDQAAAACAFyjUAAAAAAB4gUINAAAAAIAXKNQAAAAAAHiBQg0AAAAAgBco1AAAAAAAeIFCDQAAAACAFyjUAAAAAAB4gUINAAAAAIAXKNQAAAAAAHiBQg0AAAAAgBco1AAAAAAAeIFCDQAAAACAFyjUAAAAAAB4gUINAAAAAIAXKNQAAAAAAHiBQg0AAAAAgBco1AAAAAAAeCFIdwAEpmPHjqmOjg7p7%2B83%2F7uJEyfKmDFjbLqzAQAAIDD19fWp3bt3y%2BHDh0VEpLu7W8LCwiQ%2BPl5iY2MlLCyMtSiGFYUaZ0UppZqbm6WyslL%2B93%2F%2FV1paWuSTTz6RQ4cOfeb%2F%2BzFjxqjp06fLBRdcIKmpqZKamiopKSk83AAAAHBG9u%2Ffr2pqaqS%2Bvl7q6urkvffek%2Fb29lP%2BM%2FHx8SoxMVESExMlMzNTcnJyJDw8nHUovEahxhlTSqmqqip54YUXZPXq1bJ3797T%2FmePHDki7777rrz77rvy2muviYhIeHi4ZGZmKsMwJD8%2FXxISEsRms%2FFgAwAAgKmvr0%2FV1tZKcXGxOJ1OaWxsFI%2FHc0a%2FRmtrq7S2tsqaNWvkl7%2F8pUREREhubq665ppr5IorrpDQ0FDWoDgjFGqctp6eHrVixQp5%2Bumn5cMPPxy2X7e3t1fWr18v69evFxGR2NhYycvLU%2Fn5%2BWIYhsyYMYMHGwAAgMUopVRLS4s4nU4pLi6Wqqoq6e3tHdbfo6enR4qKiqSoqEhiY2PlhhtuUD%2F%2B8Y9l0qRJrD9xWijU%2BFz9%2Ff3qj3%2F8o%2Fzyl7%2BU1tbWEf%2F9Ojo65JVXXpFXXnlFRETmzJljluuFCxfK2LFjecABAAAEoF27dqkTX6BLSko%2Bdwv3cOro6JBHHnlEnnzySbntttvUnXfeKTExMaw7cUoUapxSTU2Nuummm%2BS9997TluGjjz6Sjz76SJ544glxOBySmJioDMMQwzAkMzOTrTkAAAB%2Bqru7W9XV1YnT6TS3cSultGbq6uqShx9%2BWP785z%2FL8uXL1be%2B9S3WmhgShRqfqa%2BvT91xxx3y5JNPan%2BoDeR2u6WhoUEaGhpk%2BfLlEhUVJTk5OWbBvuiii3jgAQAA%2BKjjx4%2Br%2Bvp6s0Bv3LhRXC6X7lifqa2tTa6%2F%2Fnp566231DPPPMPXanwmCjU%2BZffu3eprX%2FuabNiwQXeUz9XV1WXOvYiITJo0SWVnZ4thGHL55ZfL9OnTefABAABotHXrVnWiQBcXFw95G4yvev3116WlpUX%2B8Y9%2FqEsuuYS1JQahUGOQDRs2qKVLl0pnZ6fuKF5pb2%2BXV199VV599VUREbn44ovN%2Bevs7GyJjIzkIQgAADCC2traBhXoM7kRxld9%2FPHHkpaWJq%2B99poqLCxkPQkThRqmyspKtWzZMjly5IjuKMNm8%2BbNsnnzZnn00UclKChIEhISzO3h2dnZEhwczAMRAADgLPT09Kja2lqfmoMeCd3d3fLlL39ZXn75ZfUf%2F%2FEfrCEhIhRq%2FFtlZaUqLCwc9qsIfInL5Ro0fx0TEyMLFy40v2Cfd955PBgBAAA%2Bh9vtVm%2B%2F%2Fbb5Bbqurk76%2B%2Ft1xxoV%2Ff39cvXVV8vrr7%2BuvvSlL7F2BIUaIp988on62te%2BFtBl%2BrMcOnRI%2FvnPf8o%2F%2F%2FlPERGJj49XGRkZYhiGLF26VKZMmcJDEgAAQAbPQZeUlMiBAwd0R9LG5XLJ1VdfLWVlZWr%2B%2FPmsFy2OQm1xBw4cUIsWLZKOjg7dUbRrbW0156%2FtdrskJiaaX68zMjIkLCyMByYAALCEzs5OVVpaan6F3r59u%2B5IPqW3t1euuOIKefvttxUfYayNQm1xt9xyi2zdulV3DJ%2Fj8XiksbFRGhsbZfny5RIeHi7p6enm%2FHVSUpLY7XYengAAICC4XC7V0tIiK1eulKKiImlqahKPx6M7lk9rbW2Vb3%2F727Ju3Tpls9lYF1oUhdrCnn32WfW3v%2F1Ndwy%2F0Nvbax60ISIyceJEWbhwoTIMQxYtWiTnnHMOD1EAAOBXBm7jXrt2rRw9elR3JL9TXFwsf%2FjDH%2BTWW2%2FVHQWaUKgtqr29Xf34xz%2FWHcNvdXZ2Drqea%2Fbs2ebXa8MwZNy4cRRsAADgU9ra2lRVVZU4nU5ZtWqV7NmzR3ekgHDXXXfJV77yFTV9%2BnTWfxZEobao%2B%2B67Tw4fPqw7RsDYunWrrFixQlasWCEOh0MSExPNgp2ZmSmhoaE8YAEAwKjq7u5WdXV15i67hoYG3ZECUm9vr9x3333y%2FPPP644CDSjUFvTuu%2B%2BqZ599VneMgOV2uwddzxUVFSXZ2dlmwb744osp1wAAYNgdP358UIHeuHGjuN1u3bEs4YUXXpDbb79dJSUlsc6zGAq1BT3yyCM8XEdRV1eXrFq1SlatWiUiIpMmTVLZ2dliGIZcfvnlwvYgAADgrYFz0OvXr2cHoiYej0d%2B%2Fetfy8svv6w7CkYZhdpi9u7dq1555RXdMSytvb19yPnrRYsWydixYynYAADgM7W3t6uKigpxOp2yZs0a2bVrl%2B5I%2BLdXX31Vli9fziy1xVCoLeaPf%2Fyj9Pf3646BAQbOXwcHB0taWpoyDEPy8%2FPlsssuE4fDwUMZAACL6urqUpWVlVJcXCxOp1M2b96sOxKG4HK5ZMWKFfKzn%2F1MdxSMIgq1xfz973%2FXHQGncPz4camsrJTKykq5%2F%2F77JTIy0izYhmFISkoK5RoAgADmdrtVc3OzOQddVVUlx44d0x0Lp%2Blvf%2FsbhdpiKNQW8s4776gPPvhAdwycge7u7kH3X8fFxanMzEwxDEOWLFkiU6dOpWADAODnBs5BO51OOXjwoO5I8NKWLVvknXfeUZdccglrNIugUFvIm2%2B%2BqTsCzlJbW5s5f2232yUhIcHcHp6RkSHh4eE8vAEA8HGdnZ2qpKREnE6nFBcXy44dO3RHwjB688035ZJLLtEdA6OEQm0hNTU1uiNgGHk8HmlqapKmpib59a9%2FLUFBQZKQkKCWLl0qy5Ytk6SkJLHb7RRsAAA06%2B3tVTU1NeYX6KamJvF4PLpjYYTU1dXpjoBRRKG2CKWU2rRpk%2B4YGEEul8u8%2F%2FrBBx%2BUCRMmSG5urvkFe9asWZRrAABGyYlt3CtXrhSn0yl9fX26I2GUbNy4UXcEjCIKtUXs2LFD9u%2FfrzsGRtH%2B%2FfsHXc917rnnqvz8fDEMQxYuXCjjxo2jYAMAMEx27NihTpzEXVJSIp2dnbojQZPOzk7ZuXOnmjFjBmstC6BQW8S2bdt0R4BmH3%2F8sXz88cfy1FNPicPhkMTERPP08MzMTAkNDeWhDwDAaerq6lL19fXmNu6GhgbdkeBDtm%2FfLjNmzNAdA6OAQm0Re%2Fbs0R0BPsTtdpvbw5cvXy4RERGyYMECs2AnJyeLzWajYAMA8G8ul0u1tLSYBbqiokKOHz%2BuOxZ8FGtv66BQW0Rra6vuCPBhPT09J1%2FPJYZhmPPXU6ZMoVwDACxn8%2BbN5jbuiooK6e7u1h0JfmLv3r26I2CUUKgt4tixY7ojwI%2B0tbXJiy%2B%2BKC%2B%2B%2BKKIiMyePdv8ep2fny8xMTEUbABAwGlvb1cVFRXidDplzZo1smvXLt2R4Kf6%2B%2Ft1R8AooVBbBFcz4Gxs3bpVVqxYIStWrPjU%2FHVWVpaEhIRQsAEAfqenp0fV1taau7QaGxtFKaU7FgIAa2%2FroFADOCMnz1%2BPHTtWcnJyzBPEzz%2F%2FfMo1AMAnuVwutWnTJnE6nVJcXCz19fXMQWNE8IMZ66BQW8SECRN0R0CAOnz4sLz55pvy5ptviohIXFycyszMFMMwZMmSJTJ16lQKNgBAmxP3QZ%2F4z8GDB3VHggWw9rYOCrVFxMXF6Y4Ai2hraxt0%2F%2FXA%2BevCwkKJjo6mYAMARkxnZ6cqKysTp9Mp69evl%2B3bt%2BuOBAuaPHmy7ggYJRRqi4iPj9cdARY1cP46LCxM0tPTB13PZbfbKdgAAK%2F19vaqqqoq8wt0c3Mz222hHR%2BzrINCbREXX3yx2Gw2XjDQqq%2BvT0pKSqSkpETuvvtuiY6OluzsbLVs2TLJz8%2BXWbNmUa4BAJ%2Fr3XffVUVFReJ0OqW6ulr6%2Bvp0RwJMNptNLrroIt0xMEoo1BYxZswY2%2BzZs9Unn3yiOwpgOnr0qBQVFUlRUZGIDN4enpeXJ%2BPHj6dgAwCktbVVVVdXi9PplJUrV0pra6vuSMCQZs%2BeLWPHjmUNYxEUagtJSUkRCjV82cnXc6WkpKgTd1%2BnpaVJaGgoLycAsICDBw%2BqsrIyKS4uFqfTKR9%2F%2FLHuSMBpS0mJgm5hAABDG0lEQVRJ0R0Bo4hCbSGFhYXy97%2F%2FXXcM4LS43W7ZuHGjbNy4UR5%2B%2BGEJDw%2F%2F1Py1zWajYANAAHC5XKqlpcWcg66oqOA6K%2FitgoIC3REwiijUFrJkyRKx2%2B1cNA%2B%2F1Nvbay60RERiY2MlJydHGYYhBQUFMnPmTMo1APiRgddZrVu3To4cOaI7EnDWbDabFBYW6o6BUUShtpBJkybZ0tLSVE1Nje4owFnr6OgYdD3XBRdcoPLz88UwDMnJyeF6LgDwMXv27Bl0H3RbW5vuSMCwmz9%2FvkyZMoU1iIVQqC3mxhtvFAo1AtH7778v77%2F%2Fvjz%2B%2BOPicDgkMTHR3B6elZUlISEhvNwAYBR1d3eruro6s0A3NjZy2wgC3o033qg7AkYZhdpivv71r8uPfvQjOXjwoO4owIhxu93S0NAgDQ0Nsnz5comMjJS0tDTmrwFgBLndbtXc3GwW6MrKSunv79cdCxg10dHRctVVV%2BmOgVFGobaY8PBw280336wefvhh3VGAUdPd3T1o%2FnratGmSn59vFuxJkyZRrgHACx9%2B%2BKE6cRJ3WVkZc9CwtO9%2F%2F%2FuMnFkQhdqC7rzzTnnqqaf4Sg3L2r17tzz33HPy3HPPicjg%2B68LCgpkzJgxvAwB4DN0dHSo8vJy8yCxHTt26I4E%2BISoqCi54447dMeABhRqC4qJibH9%2BMc%2FVv%2F93%2F%2BtOwrgEwbefx0aGjroeq6UlBSx2%2B0UbACW1NPTo6qqqsxdPi0tLcxBA5%2FhP%2F%2FzP9nxZlEUaou644475OWXX5b33ntPdxTApxw7dkxKS0ultLRU7rnnHomKipLU1NSBBZuXJYCA5fF4VFNTk1mgq6urpa%2BvT3cswKfNmjVLfvKTn%2BiOAU0o1BYVGhpqe%2BaZZ1RGRgb3UgOn0NXVNWj%2BeuD28NzcXJkwYQIFG4Bfa21tVcXFxVJUVCSlpaWyf%2F9%2B3ZEAv2Gz2WTFihUSGRnJesCiKNQWlpaWZrvjjjvUI488ojsK4DcGbg93OBySnJysDMOQ%2FPx8WbBggYSGhvJCBeDTDhw4oMrKyuTEYWKffPKJ7kiA37r99tvFMAze%2FRZGoba4hx9%2BWFpaWmTdunW6owB%2Bx%2B12y6ZNm2TTpk3yy1%2F%2BUsLDwwfNXyclJTF%2FDUA7l8ulWlpazN02FRUVcvz4cd2xAL%2B3YMECWb58ue4Y0IxCbXEOh8P2wgsvqLS0NH5CDZyl3t7eQdvDJ0%2BeLHl5eeYX7GnTplGuAYw4pZR65513zC%2FQlZWV0tPTozsWEFBmzpwpr7%2F%2BuoSEhPButzgKNSQ2NtZWVlamsrKyZPv27brjAAFj37598vLLL8vLL78sIoPnr%2FPz8yUmJoaXMIBhsW%2FfPlVZWSlOp1NWr14tu3fv1h0JCFiTJ0%2BWdevWSVxcHO9xUKjxL9OnT7etW7dO5ebmyp49e3THAQLSwPnroKAgmT9%2FvlmwU1NTJSgoiBczgNNy9OhRVVZWZu6Kef%2F993VHAiwhLi5OSkpK5Pzzz%2BedDRGhUGOAOXPm2DZu3KiWLVsmjY2NuuMAAc3lcklNTY3U1NTIgw8%2BKJGRkZKWlmYW7OTkZLHZbLysAYiIiNvtVs3Nzf9fe3ceXNdZ33%2F8c6%2BuJGuzZMuyLO9WCJANbTGWrM2yjiQvcpJJMJ3MNBkCwcCElpCmOAOUwNBlUlogoUOImUJIOpBJJiVg2bGkI2u1LEO0mUDDEOTd8iZbsrV4udL5%2FYF9flfGcuxrSecu79dfnQLhYyY55%2Fnc83yfxy7QTU1NunjxotOxgLBy1113adu2bVqyZAnvZ9go1Bhn%2Fvz5roaGBuuRRx7Rr371K6fjAGFjaGho3Pz1ggULVFZWZhfs1NRUXt5AmHnvvfesK3PQ9fX1OnfunNORgLC1bt06%2FfznP1diYiLvY4xDocZfSUhIcL311lt65ZVXrCeeeEKDg4NORwLCzpEjR%2FTyyy%2Fr5ZdfljR%2B%2FrqiokIzZ87khQ6EmJMnT1oNDQ0yTVPV1dU6cOCA05GAsDdjxgx985vf1D%2F%2B4z9ycweuiUKNCT366KOuvLw868knn9T27dudjgOENd%2F56%2BjoaOXl5VllZWUyDEM5OTmKiIjgJQ8EmeHhYfsgMdM0tXfvXlmW5XQsAJdVVFTo%2BeefZ14a10WhxnXdfvvtrm3btqm6utr6yle%2Bor179zodCQh7Fy5cUENDgxoaGvS1r31Ns2bN0urVq%2B3ruW677TZe%2FEAAGh0dtTo6OuzrrFpbW3XhwgWnYwG4yt13361%2F%2F%2Fd%2F19q1a3mf4gNRqHFDKioqXOXl5ZZpmvre976nHTt28Cs6ECDOnDmjN998U2%2B%2B%2BaYkadmyZVZ5ebkeeOABrV69mjsyAQedPXvW2r59u375y1%2FKNE2dPn3a6UgArsHlcqmiokJPPvmkysvLORgUN4xCjRvmcrlcZWVlKisr04EDB6wrC%2Fi2tjaNjY05HQ%2FAZfv27dNLL72kl156SYmJibr%2F%2FvutL37xi1q%2BfDmLA2Ca1NfXWz%2F4wQ%2B0fft2vkIDAcrtdis3N1cPPfSQHnroIU7vhl8o1PDLkiVLXE899ZSeeuopnThxwqqrq7O3sB06dMjpeAAuGxgY0CuvvKJXXnlFK1eutDZv3qz77ruPBQMwBSzLsl5%2F%2FXX927%2F9m7q7u52OA%2BAaFi1apCtnkJSWlmru3Lm8E3FLKNS4ZXPnznU9%2FPDDevjhhyVJPT091pUDVmpra9Xf3%2B90RACSWltbdf%2F996ukpMT6z%2F%2F8T2VlZbGIACbJb3%2F7W%2Bupp55SS0uL01EA%2BIiLi1NeXp6u3JSRnZ3Ndm5MKgo1Jl16erpr06ZN2rRpk7xer7Vnzx67XO%2FZs0der9fpiEBYq6%2Bv17333qt%2F%2BId%2FsP75n%2F%2BZGWvgFpw%2Ff97avHmzfvCDH3C2CBAAIiMjlZubaxfoj3%2F84%2FJ4PLznMGUo1JhSHo%2FHlZ%2Bfr%2Fz8fD377LM6d%2B6cVV9fbxfs9957z%2BmIQFgaGxvTd77zHdXW1urnP%2F%2B5dccdd7DYAG7Su%2B%2B%2Baz388MN69913nY4ChLU777xTV266WLVqleLj43mnYdpQqDGtEhISXPfdd5%2Fuu%2B8%2BSdLx48ftOzi3bdumI0eOOB0RCCtdXV1asWKFXnvtNWvdunUsQIAbVFtba23cuFEDAwNORwHCzty5c1VcXCzDMLRmzRotXryY9xccQ6GGo1JTU10bN27Uxo0bZVmWtXfvXvtws%2BbmZg0PDzsdEQh5586d0wMPPKCXXnrJeuyxx1iUAB9gy5Yt1hNPPMEIEzBN4uLiVFRUZB8mdvfddzMHjYBBoUbAcLlcroyMDGVkZOjpp5%2BW1%2Bu1uru7deWAs4aGBhYvwBS5dOmSPvOZz2h0dNR6%2FPHHWaQAE%2FjZz35mfeELX%2BC6SGAKRUREKDMz056DLiwsVHR0NO8mBCQKNQKWx%2BNx5eTkKCcnR5s3b1ZfX5%2B1c%2BdO%2Bwv2vn37nI4IhBTLsvT5z39eiYmJ1saNG1m4AFd57bXXrM985jOUaWAKfOhDH7K%2FQJeUlGjWrFm8hxAUKNQIGsnJyfb2cGn89Vx1dXU6ffq00xGBoDc6OqpHH31US5cutZYvX85iBriss7PT%2BvSnP63R0VGnowAhITk5WatXr7YPE1u2bBnvHAQlCjWClu%2F1XKOjo1ZXV5e9Pby5uVkXLlxwOiIQlM6fP69PfOITeuedd6yUlBQWOAh7fX191kMPPaSRkRGnowBBy%2BPxKCMjQ5WVldqwYYOysrLkdrt5xyDoUagREiIiIsZtDx8aGrIaGxvt67m40gS4OQcPHtRnP%2FtZvfXWW05HARz36U9%2FmjEj4Ca53W5lZGTYX6ALCgoUExNDgUbIoVAjJMXFxbnWrVundevWSZJOnDhhF%2By3335bhw4dcjoiEPB%2B9atf6Y033mCeGmHt9ddft3796187HQMICvPmzVNhYaEMw9D69eu1YMEC3h8IeRRqhIW5c%2BeOm79%2B9913rStfr5uamjQ4OOh0RCAg%2Ff3f%2F73Ky8utxMREFkUIOwMDA9aXvvQlp2MAASsxMVElJSX2YWIf%2FvCHeVcg7FCoEZbuvvtu1913360nn3zyr67namxs1KVLl5yOCASEY8eO6bvf%2Fa6%2B9a1vOR0FmHbf%2Fe53dezYMadjAAHj6uusioqKFBUVRYlGWKNQI%2BxdfT3X4OCg1dbWZhfs9vZ2pyMCjvrud7%2BrL37xixxQhrDS19dnff%2F733c6BuC49PR0u0CXl5eLHUvAeBRq4Crx8fGuKy8OSdq%2Ff7915e7ruro69fX1OR0RmFaDg4P6r%2F%2F6L75SI6y88MILOnv2rNMxgGmXlpZmF%2BiysjKlpaVRoIHroFADH2Dp0qWuz372s%2FrsZz8rSfr9739vVVVVyTRNtbS06Pz5805HBKbcj3%2F8Y33961%2B3IiMjWVgh5Hm9Xuu%2F%2F%2Fu%2FnY4BTIvY2FitXLnSLtHZ2dlyuVw864EbRKEGbtJdd93luuuuu7R582aNjIxYzc3NuvIFu7u7W5ZlOR0RmHS9vb3atm2bHnjgAaejAFNu27ZtOnLkiNMxgCkRERGh5cuX21%2Bgc3NzmYMGbgGFGrgFMTExrvLycpWXl0uSTp06ZdXX18s0TVVXV%2BvAgQNORwQmzS9%2B8QsKNcLCa6%2B95nQEYFL5zkEbhqFZs2ZRoIFJQqEGJtGcOXPGXc%2FV09NjXTncrLa2Vv39%2FU5HBPxWXV2tS5cuse0bIW10dNSqqalxOgZwS%2BbMmaOSkhL7ILGlS5fy3AamCIUamELp6emuTZs2adOmTfJ6vdaePXvscr1nzx55vV6nIwI3bGBgQK2trSouLnY6CjBldu3apdOnTzsdA7gpMTExKigosL9AZ2Zmyu12U6KBaUChBqaJx%2BNx5efnKz8%2FX88%2B%2B6yGhoas3bt329dzdXR0MH%2BNgEehRqjbvXu30xGAG3JlG3dlZaXKyso0Y8YMCjTgAAo14JC4uLhx13MdP37campqkmmaHIiDgNXZ2el0BGBK8fc4AlVaWpr9FbqyslLz58%2BnQAMBgEINBIjU1FR7%2FtqyLGvv3r326eHNzc0aHh52OiKgrq4upyMAU2rv3r1ORwAkSUlJSSopKVFZWZkMw9Dtt99OgQYCEIUaCEAul8uVkZGhjIwMPf300%2FJ6vVZ3d7e9PbyhoYH5azjiwIEDsizL4o5ShKqDBw86HQFhyuPxKCMjw56DLi4uFodAAoGPQg0EAY%2FH48rJyVFOTo42b96svr4%2Ba%2BfOnfYBZ%2Fv27XM6IsLExYsX1d%2Ffr1mzZjkdBZh0Z8%2BetYaGhpyOgTDie51VeXm5EhMTKdBAkKFQA0EoOTl53PVc77%2F%2FvnWlXNfX1%2BvMmTNOR0QIO378OIUaIenEiRNOR0CImz9%2F%2Frj7oNPS0ijQQJCjUAMh4EMf%2BpDrQx%2F6kD7%2F%2Bc9rdHTU6urqsreHNzc368KFC05HRAi5dOmS0xGAKcEoDSZbbGysVq5caRfo7OxsMTIDhBYKNRBiIiIixm0PHx4etlpbW7meC5PG7XY7HQGYEvQc3KqIiAhlZmbaBbqwsFDR0dH8jQWEMAo1EOJiY2PHXc%2FV29trbw83TVO9vb1OR0SQoXQgVPFjEfzx4Q9%2F2D6Ju6SkhDloIMxQqIEwk5aW5nrkkUf0yCOPSJJ6enqsK1%2Bva2pqNDAw4HREBLiUlBSnIwBTgr%2B3cSPmzJmjkpIS%2ByCxpUuXUqCBMEahBsJcenq6a9OmTdq0adNfXc%2FV2NjIvCzGiY6O1pw5c5yOAUyJpKQkV1xcHCd9Y5yYmBjl5%2Bfb27izsrLkdrsp0QAkUagB%2BLj6eq7%2B%2Fv5x13O9%2F%2F77TkeEw%2BbPn8%2BBOghp8%2BfP15%2F%2B9CenY8BBbrdbWVlZMgxDZWVlys%2FP14wZM3juAbgmCjWACSUlJbkefPBBPfjgg5L%2BMn%2Fd0tIi0zRVVVWlo0ePOh0R0%2Byee%2B5xOgIwpT72sY9RqMNQWlqaCgoKZBiGKisrNX%2F%2BfAo0gBtCoQZww9LS0sbdf%2F373%2F%2Feqqqqkmmaamlp0fnz552OiCm2fPlypyMAU2r58uV68803nY6BKRYfH6%2Fc3Fx7G3dOTg4FGoBfKNQA%2FHbXXXe57rrrLm3evFkjIyNWc3OzfXp4d3c313OFoHvvvdfpCMCU4kej0BQVFWXfB11WVqacnBxFRERQogHcMgo1gEkRExPjKi8vV3l5uSTp5MmTVkNDg0zTVHV1tQ4cOOB0RNyimJgYFRYWOh0DmFL5%2BfmaOXOmzp4963QU3KL09HT7C3RFRYVmzpxJgQYw6SjUAKZESkrKuO3hvtdz1dbWqr%2B%2F3%2BmIuEkVFRWKi4tjQYqQFh0d7VqzZo31%2BuuvOx0FNyk1NVVFRUUyDEPr1q3TwoULeV4BmHIUagDT4urrufbs2WOX6z179sjr9TodER%2FgE5%2F4hNMRgGnxyU9%2BUhTqwJeQkKBVq1bZX6HvvPNOCjSAaUehBjDtPB6PKz8%2FX%2Fn5%2BXr22Wc1NDRk7d69277%2FuqOjg%2FnrADNnzhw99NBDTscApsX999%2BvBQsW6MiRI05HgY%2BIiAhlZmbaBbqoqEhRUVGUaACOolADcFxcXJzrygJJkg4fPmxdOdzMNE2dOHHC6Yhh77HHHuMeVoQNj8fjevzxx61vfetbTkcJex%2F5yEdUVlYmwzBUUlLCHDSAgEOhBhBwFi5c6Hrsscf02GOPSRo%2Ff11dXc1hQdNsxowZ%2BtKXvuR0DGBaPfnkk3r%2B%2Bec572GapaSk2Nu4KyoqtGTJEgo0gIBGoQYQ8K6ev%2B7u7ra%2FXjc0NDB%2FPcX%2B7u%2F%2BTgsWLGBRi7CSlJTk%2BtKXvsRX6ikWExOj%2FPx8ext3VlaW3G43zxsAQYNCDSCoeDweV05OjnJycrR582b19fVZdXV1dsHet2%2Bf0xFDSkpKip555hmnYwCOePrpp%2FXTn%2F5UBw8edDpKyHC73crOzra3cefn5ys6OpoCDSBoUagBBLXk5GTXJz%2F5SX3yk5%2BUNH57eF1dnU6fPu10xKD2H%2F%2FxH5o9ezaLXYSl%2BPh4149%2B9CNr3bp1TkcJamlpaTIMQxs2bNDq1auVnJzMMwVAyKBQAwgpvtvDR0dHrXfeeUdXDjjbvXu3Ll686HTEoLFu3To98sgjTscAHLV27VrXI488Yr366qtORwkas2fP1urVq%2B1t3LfddhsFGkDIolADCFkRERGuFStWaMWKFfr617%2Bu4eFhq7W1leu5bsDChQv1s5%2F9TC6Xi4Uwwt6LL76od955R%2F%2F3f%2F%2FndJSA5PF4lJGRYRfo4uJiRUZG8uwAEBYo1ADCRmxs7LjruXp7ey3TNO0v2L29vU5HDAgxMTF64403NGfOHBbEgP5ytd%2Bbb75pFRQUMEYiyeVy6Z577rHnoIuKihQbG8vzAkBYolADCFtpaWmuRx55xN7W7Dt%2FXVNTo4GBAacjTju3263%2F%2BZ%2F%2FUW5uLotjwMcdd9zheuutt6zy8nKdP3%2Fe6TjTLjU1VUVFRTIMQ%2BvWrdPChQt5RgCAKNQAYPOdv7548aK1e%2FduXfmC%2Fc4772h0dNTpiFMqIiJCP%2F7xj%2FXggw%2ByUAauobCw0PW%2F%2F%2Fu%2F1kMPPaSRkRGn40yphIQElZSU2Nu477jjDp4LAHANFGoAuIaoqChXcXGxiouL9e1vf1v9%2Ff3Wzp077YL9%2FvvvOx1xUkVGRupnP%2FuZHn74YRbNwHWsXbvWVVVVZT3wwAM6d%2B6c03Emjcfj0YoVK2QYhsrKyrRixQp5PB6eBwDwASjUAHADkpKSXA8%2B%2BKAefPBBSX%2BZv25paZFpmtq6dWtQz1%2FPnj1br7%2F%2BukpLS1k8Azdg9erVrt%2F%2B9rfW%2Ffffrz%2F%2B8Y9Ox%2FFbenq6%2FQW6rKxMSUlJPAMA4CZRqAHAD2lpaa6NGzdq48aNevHFF63Ozk77cLNdu3YFzYzl8uXL9Ytf%2FIJrbYCb9JGPfMS1a9cu6%2FHHH9dbb73ldJwbkpqaqtLSUvswMeagAeDWUagB4Ba53W5XTk6OcnJy9Mwzz2hkZMRqbm62C3Z3d3fAXc8VFRWlr371q%2Fra177Gtk7AT8nJya5f%2FvKXevnll62nnnpKZ86ccTrSOLGxsfZBYmVlZbrnnnu4Cg8AJhmFGgAmWUxMjKu8vFzl5eWSpBMnTlh1dXV2wT506JCj%2BdatW6fvfe97%2BvCHP8zCGpgEn%2FrUp1yVlZXWP%2F3TP%2BnHP%2F6xYwcYRkREKDs72%2F4CvXLlSkVHR%2FPPOQBMIQo1AEyxuXPnuh5%2B%2BGE9%2FPDDksZfz1VbW6v%2B%2Fv5pyZGfn6%2FNmzdrw4YNLLCBSTZnzhzXiy%2B%2BqK985SvW97%2F%2FfW3ZsmVaRj9856BLS0s1e%2FZs%2FvkGgGlEoQaAaeZ7PZfX67X27Nljl%2Bs9e%2FbI6%2FVO2n%2FX7Nmz9bd%2F%2B7d6%2FPHHdc8997DQBqbYsmXLXM8%2F%2F7y%2B%2BtWvWq%2B%2B%2Bqp%2B%2BtOf6g9%2F%2BMOk%2FfWTk5O1evVqu0Snp6fzzzUAOIhCDQAO8ng8rvz8fOXn5%2BvZZ5%2FVuXPnrPr6etXV1am9vV3d3d0aHBy84b9eVFSUMjIyVFxcrHXr1qmgoECRkZEsuIFplpqa6nr66af19NNP609%2F%2BpO1bds2NTY26je%2F%2BY2OHj16Q38Nl8ul9PR0ZWVl6d5771Vpaamys7Pldrv5ZxoAAgSFGgACSEJCguu%2B%2B%2B7TfffdJ0kaGxuz%2FvznP6u7u1snT57UwMCA%2Bvv71d%2Ffr5iYGEVHRys1NVWLFy%2FWsmXLdNdddzEzCQSY22%2B%2F3fXkk0%2FqySeflCQdP37c6unp0f79%2B9Xf36%2BzZ89KkmbMmKGkpCQlJiZq7ty5uvvuuzVz5kz%2BeQaAAEahBoAA5na7Xbfffrtuv%2F12p6MAmCSpqamu1NRU5eXlOR0FAHCL3E4HAAAAAAAgGFGoAQAAAADwA4UaAAAAAAA%2FUKgBAAAAAPADhRoAAAAAAD9QqAEAAAAA8AOFGgAAAAAAP1CoAQAAAADwA4UaAAAAAAA%2FUKgBAAAAAPADhRoAAAAAAD9QqAEAAAAA8AOFGgAAAAAAP1CoAQAAAADwA4UaAAAAAAA%2FUKgBAAAAAPADhRoAAAAAAD9QqAEAAAAA8AOFGgAAAAAAP1CoAQAAAADwA4UaAAAAAAA%2FUKgBAAAAAPADhRoAAAAAAD9QqAEAAAAA8AOFGgAAAAAAP1CoAQAAAADwA4UaAAAAAAA%2FUKgBAAAAAPADhRoAAAAAAD9QqAEAAAAA8AOFGgAAAAAAP1CoAQAAAADwA4UaAAAAAAA%2FUKgBAAAAAPADhRoAAAAAAD9QqAEAAAAA8AOFGgAAAAAAP1CoAQAAAADwA4UaAAAAAAA%2FUKgBAAAAAPADhRoAAAAAAD9QqAEAAAAA8AOFGgAAAAAAP1CoAQAAAADwA4UaAAAAAAA%2FUKgBAAAAAPADhRoAAAAAAD9QqAEAAAAA8AOFGgAAAAAAP1CoAQAAAADwA4UaAAAAAAA%2FUKgBAAAAAPADhRoAAAAAAD9QqAEAAAAA8AOFGgAAAAAAP1CoAQAAAADwA4UaAAAAAAA%2FUKgBAAAAAPADhRoAAAAAAD9QqAEAAAAA8AOFGgAAAAAAP1CoAQAAAADwA4UaAAAAAAA%2FUKgBAAAAAPADhRoAAAAAAD9QqAEAAAAA8AOFGgAAAAAAP1CoAQAAAADwQ1gW6h07dmjv3r2WZVmW01kAAAAAIFgNDw9b1dXV1s9%2F%2FnOnozjC43QAJ%2Fzwhz%2FUD3%2F4Q6WkpGjVqlWWYRiqqKjQkiVLXE5nAwAAAIBANTY2ZnV2dso0TZmmqZaWFp0%2Ff97pWI4Jy0J9xcmTJ%2FXGG2%2FojTfekCSlp6dbhmHIMAyVlZUpKSmJgg0AAAAgrPX09FhXCnRdXZ1Onz7tdKSAEdaF%2Bmo9PT3asmWLtmzZooiICGVmZtoFu6ioSFFRURRsAAAAACHt3Llz1p49e7R161ZVVVWpp6fH6UgBi0I9gdHRUbW3t6u9vV3PPfec4uLilJeXZxfs7OxsuVwuCjYAAACAoOb1eq3u7m57G3dDQ4O8Xq%2FTsYIChfoGDQ0N2X%2BDSVJqaqqKiooswzC0bt06LVy4kHINAAAAICj4buPesWOHzp0753SkoESh9tPx48cnnL%2BuqKjQzJkzKdgAAAAAAsKxY8es5uZmmaapbdu26ciRI05HCgkU6kniO3%2Ft8XiUkZFhF%2Bzi4mJFRkZSsAEAAABMi6GhIWv37t32LtuOjg5xa%2FDko1BPAa%2FXO27%2BOj4%2BXrm5uXbBzsnJoVwDAAAAmDSjo6NWV1eXXaCbmpp08eJFp2OFPAr1NBgcHBw3f52WlmYVFBTIMAxt2LBBaWlpFGwAAAAAN8V3DrqmpkYDAwNORwo7FGoH9Pb22vPXX%2FjCF5SVlWV%2FvS4oKNCMGTMo2AAAAADGOXHihNXY2GgfJHbw4EGnI4U9CrXDxsbGxm0Pj4mJUX5%2Bvl2ws7Ky5Ha7KdgAAABAmBkeHrZaW1uZgw5gFOoAMzIyMm57%2BJw5c1RSUmIZhqHy8nItXbqUcg0AAACEoKvnoJubm3XhwgWnY%2BE6KNQB7tSpUxNez2UYhmbNmkXBBgAAAIKU7xy0aZo6c%2BaM05FwEyjUQcb3eq6IiAhlZmbaBbuwsFDR0dEUbAAAACBAnTp1yqqvr7cPEtu%2Ff7%2FTkXALKNRBbHR0dNz8dWxsrFauXGkX7OzsbLlcLgo2AAAA4JCRkRFr165d9hfozs5OjY2NOR0Lk4RCHUKGh4fHzV%2FPnTtXxcXFlmEYWrt2rRYtWkS5BgAAAKZYT0%2BPtXXrVlVVVamlpUXnz593OhKmCIU6hJ04cWLC%2Bevy8nIlJiZSsAEAAIBb1Nvba7W0tMg0TVVVVeno0aNOR8I0oVCHkevNXxcVFSkqKoqCDQAAAHyAwcFBq62tzd4d2t7e7nQkOIRCHaaunr%2BOi4tTXl6eXbBzcnIo1wAAAIAkr9drdXd32wW6sbFRly5dcjoWAgCFGpKkoaGhcfPX8%2BbNswoLC2UYhtavX68FCxZQsAEAABA2fK%2Bzqq6u1tmzZ52OhABEocY1HTt2bML56zVr1ighIYGCDQAAgJBx%2FPhxq6mpSaZpavv27Tp8%2BLDTkRAEKNS4Ib7z1x6PRxkZGXbBXrVqlTweDwUbAAAAQWNoaMjavXu3vUuzo6NDlmU5HQtBhkKNm%2Bb1esfNXycnJ2v16tWWYRgqKyvTsmXLKNcAAAAIKKOjo1ZXV5ddoJuamnTx4kWnYyHIeSIjIxmoxy3p6%2BubcHt4aWmpZs%2BeTcEGAADAtPOdg66trVV%2Ff7%2FTkRBCoqKi5ImNjdXAwIDTWRBCfLeHu91uZWVl2QW7oKBAM2bMoGADAABg0p08edJqaGiwDxI7cOCA05EQwuLi4uRJSEigUGPKjI2NjdseHhsbq6KiIqusrEyGYeiee%2B6Ry%2BWiYAMAAOCmDQ8P2weJmaapvXv3MgeNaZOQkCDPokWLOMEO02Z4eFg7duzQjh07JEkpKSlatWqVZRiGKioqtGTJEso1AAAArmlsbMzq7Oy0C3RLS4vOnz%2FvdCyEqcWLF8uzdOlS7d692%2BksCFMnT56ccP66rKxMSUlJFGwAAIAw5jsHXVdXp9OnTzsdCZAkLV26VJ477rjD6RyA7erruVasWGGfHr5ixQqu5wIAAAhxfX191s6dO%2B2v0D09PU5HAq7pox%2F9qDwf%2F%2FjHnc4BXJPX69WuXbu0a9cufetb31JcXJzy8vLsL9jZ2dnMXwMAAAQ5r9drdXd32wW6oaFBXq%2FX6VjAB8rNzf1LoY6IiNDo6KjTeYDrGhoash%2B0krRw4UIZhmEX7NTUVMo1AABAgLMsyy7QtbW1am5u1sjIiNOxgJsSERGhe%2B%2B9V55Zs2a5VqxYYbW2tjqdCbgphw8f1ssvv6yXX35Z0vj564qKCs2cOZOCDQAAEACOHTtmNTc3yzRNbdu2TUeOHHE6EnBL8vPzlZiY6PJI0oYNG0ShRrDznb%2BOjo5WXl6efT1XTk6OIiIiKNgAAADTYGBgwKqvr7d3F%2F7xj390OhIwqdavXy9JclmWpf3791u33XabxsbGnM4FTIn4%2BHjl5ubqyhfsnJwcyjWAG%2Fa5z33O2rJli9MxptWmTZv00ksv8awEcENGR0etrq4uu0A3NTXp4sWLTscCpoTb7VZPT4%2BWLFnyly%2FUS5cuda1evdq6MpsKhJrBwcFx89dpaWlWQUGBDMNQZWWl5s%2Bfz6IRAADgJvheZ1VTU6OBgQGnIwHTory8XEuWLHFJkufK%2F%2FOJJ54QhRrhore3177%2F2u12Kysry76eKz8%2FXzNmzKBgAwAA%2BOjt7bULtGmaOnr0qNORAEc88cQT9v9tF%2Br7779fH%2FvYx7R3716n8wHTamxsTO3t7Wpvb9dzzz2nmJgY5efn2wecZWVlye12U7ABAEBYGR4etlpbW%2B0C3dHRIcuynI4FOCojI8Oen5Z8CrXL5XJ94xvfsD7xiU84nRFw1MjIyLjt4SkpKSotLbW%2FYC9evJhyDQAAQs7o6Kj129%2F%2B1r7Oqq2tjTlo4Crf%2FOY35XK57D7g8f0XH3roIVdJSYlVX1%2FvdE4gYJw8eVKvvfaaXnvtNUnjr%2BcyDEOzZs2iYAMAgKDkOwdtmqbOnDnjdCQgYJWWluqBBx4Yt%2Fb3XP1veuGFF5STk8OvUcAEfK%2FnioiI0PLly%2B3rufLy8hQZGUnBBgAAAenkyZNWXV2dXaAPHDjgdCQgKERHR%2BuFF174q%2F%2F%2FXxXqu%2B%2B%2B2%2FXtb3%2Fb2rx5s9OZgYA3OjqqtrY2tbW16dvf%2FrZiY2O1cuVK%2Bwt2dnb2uC0hAAAA02lkZMTatWuXXaA7Ozu5Khfww7%2F8y7%2Fozjvv%2FKt1veda%2F%2Bann35aNTU1qqurczo3EFSGh4evvp5LhmHY89dpaWmUawAAMGXGxsaszs5Oez3S0tKi8%2BfPOx0LCGqGYejLX%2F7yNf%2B1axZqt9vtev31163c3Fz96U9%2Fcjo%2FELR6e3v16quv6tVXX5U0fv66vLxciYmJFGwAAHBLent7rZaWFpmmqaqqKq6zAiZRenq6fvGLX0x4649nov%2Fg7NmzXb%2F%2B9a%2BtwsJCnTp1yuk%2FBxASfOevIyMjlZuba89fL1%2B%2BXB6Ph4INAACu68yZM1Z9fb1qa2tlmqbef%2F99pyMBISklJUXbt2%2FXnDlzJlyje673F%2FjoRz%2FqMk3TKi0tVV9fn9N%2FHiCkXLp0Sc3NzWpubtY3vvENxcXFKS8vj%2FlrAAAwjtfrtbq7u%2B1t3I2Njbp06ZLTsYCQlpSUpLffflsf%2BchHrrse93zQXygjI8NVW1trrV%2B%2FXr29vU7%2FuYCQNTQ0NG7%2BevHixTIMwyorK1NpaalSUlIo1wAAhAHLsqzf%2Fe539rqgqalJQ0NDTscCwsb8%2BfO1bds2ZWZmfuD6%2BwMLtSRlZWW52trarPXr1%2Bvdd991%2Bs8HhIWDBw%2FqJz%2F5iX7yk5%2FI5XIpIyPD3h5eWFiomJgYCjYAACHiyJEjlmmaqq2tVV1dnY4dO%2BZ0JCAsfexjH1NVVZUWLVp0Q2vtGyrUkrR48WLXb37zG%2BuZZ5655v1bAKaOZVnq6upSV1eXvvOd78jj8SgjI8PeHr5q1SrmrwEACCJDQ0PW7t277a%2FQHR0dsizL6VhAWHvkkUf04osvKi4u7obX1TdcqCUpJibG9fzzz2vlypXWk08%2ByS9ngEO8Xq%2Fa29vV3t6u5557TsnJyVq9erV9PdeyZcso1wAABBCv12vt2bPHLtBtbW3yer1OxwKgv1x1%2B%2Fzzz2vjxo03vYa%2BqUJ9xd%2F8zd%2B41qxZY33jG9%2FQj370I128eNHp%2Fw2AsNbX16c33nhDb7zxhiTptttus8t1SUmJZs%2BeTcEGAGCavffee9aVk7gbGhp09uxZpyMB8BEdHa0vfOEL%2BuY3v%2Bn3dbZ%2BFWpJSkxMdD3%2F%2FPN66qmnrH%2F913%2FVK6%2B8wqXxQID485%2F%2FrD%2F%2F%2Bc966aWXFBERoezsbHv%2BeuXKlYqOjqZgAwAwyY4fP27V1dXZ11kdPnzY6UgArmHGjBn61Kc%2Bpa9%2B9as3PCs9EddkzWr09fVZr7zyil5%2B%2BWXt3bvX6f%2BNAEwgNjZWRUVFuvIF%2B5577uF6LuADfO5zn7O2bNnidIxptWnTJr300ks8G4DrGB4etpqamnTlMLHf%2Fe53zEEDASwjI0Of%2BtSn9Oijj07aDk6%2Fv1BfLTk52fXlL39ZX%2F7yl7Vv3z7r17%2F%2BtaqrqznmHwgww8PD2rFjh3bs2CFJSk1NVWlpqf0Fe%2BHChSygAQC4htHRUaujo8P%2BAt3a2qoLFy44HQvABOLi4lRUVKSKigrdd999U3LO0KR9oZ4IF9EDwSU9PV1XTg8vKytTUlISBRthjy%2FUQPjq6emxrqxj6%2BrqdPr0aacjAZhARESEMjMz7bVsYWHhlI86Tnmhvtrg4KDV1tZmF%2Bz29vZp%2Fe8HcOOufigVFRUpKiqKBTbCDoUaCB%2Fnzp2zGhoaVFVVpdraWu3bt8%2FpSACuw%2FdjUGlp6bQfxjtpW75vVHx8vOvKH1iSent7rZaWFpmmqaqqKh09enS6IwGYwOjo6LjrueLi4pSXl2fff52dnc38NQAgqF29m7KhoYHrrIAANmfOHJWUlChQroud9kJ9tbS0NNfGjRu1ceNGSf9%2FW83WrVtlmiYnhwMBZGhoyF5wSH%2BZvy4qKrIMw9C6deuYvwYABAXfbdw7duzQuXPnnI4EYAIej0crVqzQhg0bZBiGsrKy5Ha7A2bNOe1bvm%2FGyMiItWvXLnsB39nZqbGxMadjAZiA75abiooKzZw5M2AedsCtYMs3ENyOHTtmNTc3yzRNbdu2TUeOHHE6EoDr8F1TrlmzRgkJCQH7PnL8C%2FX1xMTEjNsefurUKau%2Bvt6%2BmoCZFiCw9PT0aMuWLdqyZYs8Ho8yMjLs7eHFxcWKjIwM2IchACB0DA0NWbt37%2BbMHiBIpKWlqaCgQIZhqLKyUvPnzw%2BaNWNAf6H%2BIJy6CASP%2BPh45ebm2r825uTkBM2DEuALNRDYRkdHra6uLrtANzU16eLFi07HAjCBUFoXBvQX6g%2BSnp7u2rRpkzZt2vRXD9Lm5mbuBQQCyODg4Lj567S0NCtYf4kEADjP98NKTU2NBgYGnI4EYAKXdy4qFHcuBvUX6usZHh62Wltb7QV8R0eHQvXPCoSC9PR0VVZWasOGDSooKNCMGTNC4iGL0MAXasB5J06csBobG2Wapt5%2B%2B20dOnTI6UgArsN3Drq8vFyJiYkh%2BU4J6i%2FU1xMbGztu%2Ftr3Ibxjxw4dPHjQ6YgAfPT09OiFF17QCy%2B8oJiYGOXn59vz14F2miMAYOrxcQQILpdvf5FhGFq7dq0WLVoUFmu3kC3UV5s7d%2B41r%2Be6csBZf3%2B%2F0xEBXDYyMjJue%2Fjl%2BwatK79wLl26NCwe0AAQThjfA4JLXFyc8vLy7K%2FQ2dnZcrlcYbdGC9kt3zeDgyyA4OK7hcgwDM2aNSvsHt6YXmz5BqaG7wcO0zR15swZpyMBmEBERIQyMzPt9VdRUZGioqLC%2Fj1Bob6Gq69aYIsRELiufrgXFhYqOjo67B%2FumFwUamBy%2BF6BWlNTo%2F379zsdCcB18BHjg4XNlu%2BbERcXN27%2B%2BtixY1Zzc7NM09T27dt1%2BPBhpyMCuGx0dFTt7e1qb2%2FXc889p9jYWK1cudIK9%2B1HABAIRkZGrF27dtkfKTo7OzU2NuZ0LAATSElJ0apVq2QYhioqKrRkyRLWUB%2BAQn0D5s2bN%2BH8dXV1tc6ePet0RACXDQ8Pj5u%2Fnjt3roqLiy3DMLRmzRotXryYFwMATKHf%2F%2F73VlVVlUzTVEtLi86fP%2B90JAATuHwQrDgI1n9s%2Bb5FXq%2FX6u7uthfwjY2NunTpktOxAEwgXK5wwORiyzcwsd7eXqulpUWmaWrr1q3q7e11OhKACbjdbmVlZdlrIa4qvXUU6kk2ODhotbW12QW7vb3d6UgAJsDhGrhRFGrg%2F2OtAwQX348JpaWlmj17Ns%2F2ScSW70kWHx8%2Fbv66t7fXqq2tVVVVlXbu3Km%2Bvj6nIwK47Or568vXPzB%2FDQA%2B2I0HBJeEhAStWLFClZWV2rBhg9LT01nLTCEK9RRLS0tzPfroo3r00Uc1NjZmdXZ22i8k5oqAwDI0NDRu%2FnrevHkqLCy0DMPQ%2BvXrtWDBAl5IAMIC58UAwcPj8SgjI8P%2BCr1q1Sp5PB7WLNOELd8O4uRLILj4bpmqqKjQzJkzeVmFCbZ8I9QdP37campq4kYTIEj4rknWrFmjhIQEntcO4Qu1g2JiYsZtD%2BduRiCw9fT0aMuWLdqyZcuVX4Mtfg0GEIyGhoas3bt32z%2Fqd3R0iI8sQOC6vGtO7JoLPHyhDmC%2B261M09SZM2ecjgRgAlfmlQzD0IYNG3TnnXfyogshfKFGsBsdHbW6urrsNUVTU5MuXrzodCwAE7h8ros41yXwUaiDxNUvwubmZl24cMHpWAAmwImaoYVCjWDk%2B8N8bW2t%2Bvv7nY4EYALcPBK8KNRBanh42GptbWWrFhAEuPMx%2BFGoEQxOnjxpNTQ02AeJHThwwOlIAK7D98f38vJyJSYm8swNQsxQB6nY2Nhx89cnTpywGhsbZZqm3n77bR06dMjpiAAuGxsbG3c9V0xMjPLz8%2B3566ysLLndbl6iAG7K1Yeb8uM6ENjmzp2r4uJiGYahtWvXatGiRbz7QwCFOkTMnTvXtXHjRm3cuFHS%2BG1eNTU1GhgYcDoigMtGRkbGXc%2BVkpKiVatWWVdOD1%2ByZAkvWAB%2Fhes3geASGxurlStXMgcd4tjyHQY4iAQILr5bwAzD0KxZs3j5Oowt33CK7w%2FkdXV1On36tNORAEzg6jnowsJCRUdH8xwNcRTqMHT1VRnt7e1ORwIwAQ4pCQwUakyXvr4%2Ba%2BfOnfZBYvv27XM6EoDr4EdwsOU7DMXFxY2bvz527JjV3Nws0zS1bds2HTlyxOmIAC4bHR0dN399%2BRoNi%2B1jQGjwer1Wd3e3%2FSN3Q0ODvF6v07EATGDOnDkqKSmxDxJbunQp7%2BAwR6GG5s2bN%2BH89Y4dO3Tu3DmnIwK4bGhoaNz8dWpqqoqKiiwOOAGCB%2B9ZIHhcPkhUHCSKibDlG9fFL%2BdAcOEKjqnBlm%2FcCnaCAcGDqy5xsyjUuCnnzp2zGhoaVFVVxWwXEOA8Ho8yMjLsRUFxcbEiIyNZFPiBQo2bwVklQHBJS0tTQUGBKisrtX79eiUnJ%2FPsww1jyzduSkJCgmvDhg3asGGDJE4fBQKZ1%2BsdN38dHx%2Bv3Nxce%2F46JyeHBQMwCbhNAwgul9%2BH4n2IyUChxi1JT093bdq0SZs2beJ%2BTCDADQ4Ojpu%2FTktLswoKCmQYhiorKzV%2F%2FnwWFMAN8v1BuaamRgMDA05HAjABdmxhKrHlG1NmZGTE2rVrl72A7%2Bzs1NjYmNOxAEzAd%2F56zZo1SkhIYLFxGVu%2BceLECauxsVGmaertt9%2FWoUOHnI4E4Dp832kVFRWaOXMmzzNMCb5QY8rExMSMu57r5MmTVkNDg0zTVHV1tQ4cOOB0RAA%2Benp6tGXLFm3ZsuXKqaYWp5oiXA0PD1utra32j8IdHR3iIwQQuC7feiHDMLRu3TotXLiQdxamBYUa0yYlJWXC67lqa2vV39%2FvdEQAl42MjIzbHn753k3LMAyVlZVp2bJlLFQQUq6eg25ubtaFCxecjgVgAnFxccrLy7O%2FQmdnZ8vlcvFuwrRjyzcCAge6AMHFdytdaWmpZs%2BeHdKLGLZ8hybfH3ZN09SZM2ecjgRgAhEREcrMzLTfPUVFRYqKigrpZxSCA4UaAenqK0fYagcErqsXOYWFhYqOjg6pRQ6FOjScOnXKqq%2Bvtw8S279%2Fv9ORAFyH74%2B3ZWVlSkpKCqlnEkIDW74RkOLi4sbNXx8%2FftxqamriMBggAI2Ojo67nis2NlYrV6602IYHp3E4JhBc5s6dq%2BLiYvtwzMWLF%2FPuQMCjUCMopKamTjh%2FzXUlQGAZHh4eN399eYFksUDCVOP6RiC4XP4BljloBDW2fCPoeb1eq7u7215ANTY26tKlS07HAjCBYNzCx5bvwNXb22u1tLTINE1t3bpVvb29TkcCMIFwGBFC%2BKFQI%2BQMDg5abW1tdsFub293OhKACQTLITMU6sDBMx4ILuF2iCXCD1u%2BEXLi4%2BPHzV%2F7fr2oqqrS0aNHnY4I4LKr568vX4PC%2FDVs7EICgsvlaxbFNYsIFxRqhLy0tLQJ56937Nihc%2BfOOR0RwGVDQ0Pj5q%2FnzZunwsJCyzAMrV%2B%2FXgsWLGBhFgZ8n9PV1dU6e%2Fas05EATCAmJkb5%2Bfn2V%2BisrCy53W6e1QgbbPlGWPN6vVZbW5uqqqo4ARYIAr5bBysqKjRz5sxpWbSx5Xtq%2Bd7ksH37dh0%2BfNjpPz6A67jyLK6srFRZWZlmzJhBgUbY4gs1wprH43EVFBSooKBA0vg7Smtra7Vv3z6nIwLw0dPToy1btmjLli3yeDzKyMiwt4cXFxcrMjKSRV0QGBoasnbv3m3vRujo6BA%2F8AOBKy0tTQUFBXaJnj9%2FPs9a4DK%2BUAPX4bvtsK6uTqdPn3Y6EoAJxMfHKzc31%2F6CnZOTM2kLPr5Q35rR0VGrq6vLLtBNTU26ePGi039EABOYyucpEGr4Qg1cR3p6umvTpk3atGnTXy0Im5ubdeHCBacjArhscHBw3Px1enq6%2FfV69erVSk5OZkE4jXx%2FkKytrVV%2Ff7%2FTkQBM4PKOH7HjB7h5fKEG%2FDQ8PGy1trayZREIAm63W1lZWfZisaCg4KZm%2FvhC%2FcFOnjxpNTQ02AeJHThwwOk%2FAoDrcOpMCiDU8IUa8FNsbOy467l8F5M7duzQwYMHnY4I4LKxsbFx13NdPpXW4lRa%2F%2FGjIhBcUlNTVVRUJMMwtG7dOi1cuJBnHjAJKNTAJElJSZnwei62OwKBZWRkZNz28JSUFK1atcq68qVmyZIlLDSvMjY2ZnV2djL2AgSJuLg45eXl2V%2Bhs7Oz5XK5eLYBk4wt38A04EAeILj4boU0DEPPPPOMwnHL9%2BbNm8XBjEBwiIiIUGZmpv3cKioqUlRUFAUamGIUasABZ8%2BetRoaGlRbWyvTNPXee%2B85HQnABDwej%2BLi4jQwMOB0lGn%2Fc3u9XqdjALiOj370ozIMQ2VlZVq1ahVz0IADKNRAADh%2B%2FLjV1NQk0zS1fft2HT582OlIAAAgwFweTxHjKUDgoFADAch3%2Frq6ulpnz551OhIAAJhmlw9QZA4aCGAUaiDAeb1eq7u7255jbGxs1KVLl5yOBQAAJtmtXvEHYPpRqIEgMzg4aLW1tdkFu7293elIAADAT76HIJaWlmr27NkUaCCIUKiBINfb22u1tLTINE1t3bpVvb29TkcCAAATSE5O1urVq%2B3DxJYtW0aBBoIYhRoIIVffE9vS0qLz5887HQsAgLDl8XiUkZFhf4VetWqVPB4PJRoIERRqIISNjIxYu3btsgt2Z2enxsbGnI4FAEBI893GvWbNGiUkJFCggRBFoQbCyKlTp6z6%2BnqZpqmamhrt37%2Ff6UgAAAS9efPmqbCwUIZhaP369VqwYAEFGggTFGogjPlez2Waps6cOeN0JAAAAl58fLxyc3Ptr9A5OTkUaCBMUagBSJJGR0etrq4uu1w3NzfrwoULTscCAMBxERERyszMtAt0cXGxIiMjKdEAKNQArm14eNhqbW21C3ZHR4d4XgAAwoXvHHR5ebkSExMp0AD%2BCoUawA05ceKE1djYKNM0tWPHDh08eNDpSAAATJq5c%2BequLhYhmFo7dq1WrRoEQUawAeiUAPwi%2B%2F8dU1NjQYGBpyOBADADYuNjdXKlSvtr9DZ2dlyuVyUaAA3hUIN4JZdPX%2Fd1NSkixcvOh0LAADb1XPQhYWFio6OpkADuCUUagCTbmhoyNq9ezfz1wAAR%2FnOQRuGoVmzZlGgAUwqCjWAKXfs2DGrublZpmlq27ZtOnLkiNORAAAhaM6cOSopKbEPElu6dCkFGsCUolADmHa%2B89fV1dU6e%2Fas05EAAEEoJiZG%2Bfn59hforKwsud1uSjSAaUOhBuAor9drdXd329vDGxoa5PV6nY4FAAhAbrdbWVlZdoEuKCjQjBkzKNAAHEOhBhBQzp07Z%2B3Zs0emaWrr1q36wx%2F%2B4HQkAICDfOegV69ereTkZAo0gIBBoQYQ0Hy3h%2B%2FcuVN9fX1ORwIATKH4%2BHjl5ubaJTonJ4cCDSBgUagBBI2xsTGrs7PT3h7e0tKi8%2BfPOx0LAHALPB6PMjIy7AJdXFysyMhISjSAoEChBhC0RkZGrF27dtkFu7OzU2NjY07HAgB8AN9t3BUVFZo5cyYFGkBQolADCBknT560Ghoa7NPDDxw44HQkAICkefPmqbCwUIZhaP369VqwYAEFGkBIoFADCFm%2B89emaerMmTNORwKAsBAXF6e8vDz7K3R2drZcLhclGkDIoVADCAujo6NWV1eXXa6bm5t14cIFp2MBQEiIiIhQZmamXaCLiooUFRVFgQYQ8ijUAMLS8PCw1draahfsjo4O8TwEgBvnOwddVlampKQkCjSAsEOhBgBJx48ft5qammSapt5%2B%2B20dOnTI6UgAEFDmzp2r4uJiGYahNWvWaPHixRRoAGGPQg0A1%2BA7f11TU6OBgQGnIwHAtIqNjdXKlSuZgwaA66BQA8AH8Hq9Vnd3t709vLGxUZcuXXI6FgBMqqvnoAsLCxUdHU2BBoDroFADwE0aHBy02tra7ILd3t7udCQA8IvvHLRhGJo1axYFGgBuAoUaAG7RsWPHrObmZpmmqaqqKh09etTpSABwTXPmzFFJSYkMw1B5ebmWLl1KgQaAW0ChBoBJ5jt%2FvWPHDp07d87pSADCVExMjPLz8%2B0v0FlZWXK73ZRoAJgkFGoAmEJX5q%2B3bt2qqqoqdXZ2amxszOlYAEJYenq6KisrtWHDBhUUFGjGjBkUaACYIhRqAJhGfX191s6dO2Wapmpra7Vv3z6nIwEIcmlpaSooKJBhGKqsrNT8%2BfMp0AAwTSjUAOAg3%2B3hdXV1On36tNORAAS4%2BPh45ebm2tu4c3JyKNAA4BAKNQAEiNHRUaurq8s%2BPby5uVkXLlxwOhYAh3k8HmVkZNgFuri4WJGRkZRoAAgAFGoACFDDw8NWa2urXbA7OjrEMxsID77XWVVUVGjmzJkUaAAIQBRqAAgSJ0%2BetBoaGmSapqqrq3XgwAGnIwGYJKmpqSoqKpJhGFq3bp0WLlxIgQaAIEChBoAg5Tt%2FXVtbq%2F7%2BfqcjAbhBcXFxysvLs79CZ2dny%2BVyUaIBIMhQqAEgBFw9f93U1KSLFy86HQvAZREREcrMzLQLdFFRkaKioijQABDkKNQAEIKGhoas3bt3M38NOMh3DrqsrExJSUkUaAAIMRRqAAgDx48ft5qammSaprZv367Dhw87HQkIOSkpKVq1apV9kNiSJUso0AAQ4ijUABCGfOevq6urdfbsWacjAUEnNjZWK1euZA4aAMIYhRoAwpzX67W6u7vt7eGNjY26dOmS07GAgHP1HHRhYaGio6Mp0AAQxijUAIBxBgcHrba2Nrtgt7e3Ox0JcIzvHHRpaalmz55NgQYA2CjUAIDr6u3ttVpaWmSapqqqqnT06FGnIwFTJjk5WatXr7YPElu2bBkFGgAwIQo1AOCm9PT0WFu3blVVVZVaWlp0%2Fvx5pyMBfvN4PMrIyFBlZaU2bNigrKwsud1uSjQA4IZQqAEAfhsZGbF27dplbw%2Fv7OzU2NiY07GA6%2FLdxr1mzRolJCRQoAEAfqFQAwAmzalTp6z6%2BnqZpqmamhrt37%2Ff6UiA5s2bp8LCQhmGocrKSs2fP58CDQCYFBRqAMCU8b2eyzRNnTlzxulICAPx8fHKzc21v0Ln5ORQoAEAU4JCDQCYFqOjo1ZXV5ddrpubm3XhwgWnYyEEXJmDvlKgi4uLFRkZSYkGAEw5CjUAwBHDw8NWa2urXbA7OjrEOwk3yncOury8XImJiRRoAMC0o1ADAALCiRMnrMbGRpmmqR07dujgwYNOR0IASU1NVVFRkQzD0Nq1a7Vo0SIKNADAcRRqAEBA8p2%2Frq2tVX9%2Fv9ORMI1iY2O1cuVK%2Byt0dna2XC4XJRoAEFAo1ACAgHf1%2FHVTU5MuXrzodCxMooiICGVmZtoFurCwUNHR0RRoAEBAo1ADAILO0NCQtXv3buavg5zvHLRhGJo1axYFGgAQVCjUAICgd%2BzYMau5uVmmaWrbtm06cuSI05FwDSkpKVq1apUMw1BFRYWWLFlCgQYABDUKNQAg5PjOX1dXV%2Bvs2bNORwpLMTExys%2FPt79AZ2Vlye12U6IBACGDQg0ACGler9fq7u62t4c3Njbq0qVLTscKSW63W1lZWXaBLigo0IwZMyjQAICQRaEGAISVwcFBq62tzS7Y7e3tTkcKar5z0KtXr1ZycjIFGgAQNijUAICw5rs9fOfOnerr63M6UkBLSEjQihUrZBiGNmzYoDvvvJMCDQAIWxRqAAAuGxsbszo7O%2B2v1y0tLTp%2F%2FrzTsRzl8XiUkZFhf4VetWqVPB4PJRoAAFGoAQCY0MjIiLVr1y67YHd2dmpsbMzpWFPOdxt3RUWFZs6cSYEGAOAaKNQAANygkydPWg0NDTJNUzU1Ndq%2Ff7%2FTkSbFvHnzVFhYKMMwtH79ei1YsIACDQDADaBQAwDgJ9%2F5a9M0debMGacj3ZC4uDjl5eXZX6Gzs7Plcrko0QAA3CQKNQAAk2B0dNTq6uqyy3Vzc7MuXLjgdCxJUkREhDIzM%2B0CXVRUpKioKAo0AAC3iEINAMAUGB4etlpbW%2B2C3dHRoel85%2FrOQZeXlysxMZECDQDAJKNQAwAwDU6cOGE1NjbKNE29%2FfbbOnTo0KT%2B9efOnavi4mIZhqE1a9Zo8eLFFGgAAKYYhRoAAAe8%2B%2B671pWt4Z2dndq3b99N%2FeeXLVumrKws%2BzCxu%2B%2B%2BmwINAMA0o1ADABAAzpw5Y3V0dGjfvn0aGBjQwMCA%2Bvv7JUlJSUlKTExUUlKS0tPTlZWVpaSkJAo0AAAO%2B39jmoMHBmhYPgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wNi0xMlQwMzozMzo0MSswODowMKrsGNEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMDQtMTZUMTU6NDU6MTArMDg6MDCbRNBkAAAAVHRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2RiL3N2Z19pbmZvL3N2Zy9kOC9mMy9kOGYzNjJjMjkzM2Y1M2MwNWIyZGIyYjdlMTM3YzE1Ny5zdmcAOXQFAAAAAElFTkSuQmCC\") 5px / 12px no-repeat;\n}\n\n#name {\n  color: #252525;\n  background: #fff url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3YAAAPUCAYAAADheatoAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A%2FwD%2FoL2nkwAAAAlwSFlzAAAASAAAAEgARslrPgAAgABJREFUeNrs3Xd4VlW%2B9vHfflIpCYTeMfTeQg%2B9S1d6r1KkiaJBUQFRiqBSpPfee5UiLXRCUXoP0kESQiCFJOv8oePRGVRKkrX3s7%2Bf6%2BKaeed6z3nvd2ZYa937t569DaWUAACgU0REhLp%2F%2F77cv39fQkJCJDQ09Ll%2FoqOj5dGjR%2FLs2TMJCwuTyMhIiYiIkPDwcHn27Nlf%2FneGhYVJbGzsX%2F41FxcX8fb2%2Fsu%2F5ubmJsmTJ5ekSZOKh4eHeHt7i5ubm6RIkULc3d0lZcqUz%2F3j4%2BMjadOmlXTp0omnp6eh%2B99DAIC9GRQ7AEBCiYiIUNevX5cbN27IjRs3JDg4WO7evSu3b9%2BWe%2Ffuyf379%2BX27dvy%2BPFj3VFfi5eXl2TMmFHSpUsnadOmlYwZM0r69Okle%2FbskiVLFsmaNatkzZpVkiRJQgEEACQIih0A4JXFxsaq69evy%2BXLl%2BXSpUty6dIluXz5sly7dk1u3LghDx480B3RVNKmTStZsmSR7NmzS65cuSRXrlySM2dOyZUrl2TNmlVcXFwofgCAV0KxAwD8q%2FDwcHXu3Dk5ffq0nDlzRs6cOSMXL16Uq1evSnR0tO54TsHd3V18fX0lT548UqBAgT%2F%2B5M%2BfX5IlS0bhAwD8I4odAOAPsbGx6uLFi3L8%2BHE5fvy4nDp1Ss6ePSvBwcHCfqGHYRjyxhtvSP78%2BaVQoUJSvHhxKV68uOTOnVscDgeFDwAgIhQ7ALCtmJgY9fPPP0tQUJAcP35cTpw4ISdPnpQnT57ojoYXkDx5cilSpMgfRc%2FPz08KFSokrq6ulD0AsCGKHQDYxK1bt1RQUJAEBQXJvn37ZP%2F%2B%2FfL06VPdsRCPkiZN%2BkfJ8%2FPzkwoVKkiOHDkoegBgAxQ7AHBCcXFx6tSpU7J7927Zs2ePHDhwQG7evKk7FjTIkiWLlCtXTipVqiSVK1eWggULcoUTAJwQxQ4AnEBMTIw6fvy47NmzR3bv3i2BgYESEhKiOxZMKFWqVFKhQgWpUqWKVKxYUYoXL87bOAHACVDsAMCirly5orZv3y7%2F%2BUORw6tInjy5lC1bVmrUqCE1atQQPz8%2FSh4AWBDFDgAsIiQkRG3btk22b98u27Ztk2vXrumOBCeUI0cOqVGjhtSsWVNq1KghKVOmpOgBgAVQ7ADAxK5cuaLWr18vGzZskD179vDNOCQqFxcXKVu2rDRo0EAaNGggBQoUoOQBgElR7ADARGJiYtSePXtkw4YNsn79erl06ZLuSMAf8uTJIw0aNJD69etLxYoV%2BW0eAJgIxQ4ANIuNjVUHDhyQ5cuXy9KlS%2BXu3bu6IwH%2FKlWqVFKvXj1p1qyZ1K5dW9zd3Sl5AKARxQ4ANIiIiFBbtmyRlStXyoYNG%2BTRo0e6IwGvLGXKlNKgQQNp0qSJ1K5dWzw9PSl5AJDIKHYAkEj%2BM5mbP3%2B%2BLFmyRMLCwnRHAuJd0qRJpV69etKuXTupU6eOuLm5UfIAIBFQ7AAggQUFBal58%2BbJsmXL5M6dO7rjAIkmVapU0rRpU2nXrp34%2B%2FuLYRiUPABIIBQ7AEgAV69eVXPnzpV58%2BbJ1atXdccBtMuRI4e0b99eOnbsKNmzZ6fgAUA8o9gBQDyJjIxU69evl2nTpsmOHTuE9RX4Xw6HQ8qVKyft27eXNm3aSLJkySh5ABAPKHYA8JoOHTqkZs6cKUuXLuV3c8BLSJkypbRs2VI6d%2B4spUqVouABwGug2AHAK4iMjFTLli2TsWPHyvHjx3XHASyvRIkS0r17d2ndurUkT56ckgcAL4liBwAv4fz582r27Nkyffp0efjwoe44gNPx9vaWli1bSq9evaRIkSIUPAB4QRQ7APgXMTExavXq1TJhwgTZu3ev7jiAbVSuXFn69OkjjRs3FhcXF0oeAPwDih0A%2FI2wsDA1e%2FZs%2Be677yQ4OFh3HMC2MmXKJO%2B884707dtXUqVKRcEDgOeg2AHAf7l06ZKaMGGCzJw5U548eaI7DoDfJU%2BeXFq3bi39%2BvWTAgUKUPAA4E8odgDwu71796pRo0bJpk2b%2BFQBYGIOh0Pq168vAQEBUr58eQoeAAjFDoDNKaXUhg0bZNSoUbJv3z7dcQC8JH9%2FfwkICJD69euLYRiUPAC2RbEDYEvPnj1Tixcvlq%2B%2F%2FlpOnz6tOw6A11SoUCH58MMPpVWrVuLm5kbBA2A7FDsAthIdHa1mzZolI0eO5IUogBPy9fWVTz75RDp06EDBA2ArFDsAthAdHa2WLFkiX3zxhVy%2BfFl3HAAJLFu2bPL%2B%2B%2B9L9%2B7dxdPTk4IHwOlR7AA4tejoaDVnzhwZNmyY3LhxQ3ccAImMggfALih2AJxSTEyMmjVrFoUOgIj8VvAGDx4sHTp04GPnAJwSxQ6AU1FKqRUrVsinn34qFy5c0B0HgMnkzZtXhg0bJk2bNuUtmgCcCsUOgNPYvn27GjhwoAQFBemOAsDkChcuLJ999pk0a9aMcgfAKVDsAFjekSNH1IABA2TPnj26owCwmKpVq8ro0aPFz8%2BPggfA0hy6AwDAq7px44bq3r27Klu2LKUOwCvZuXOnlCpVSpo3b66uXbvG024AlsXEDoDlhIeHqzFjxsjXX38tERERuuMAcBJJkiSRvn37yieffCLe3t5M8ABYCsUOgGXExMSoadOmyZAhQ%2BT%2B%2Ffu64wBwUhkyZJChQ4dK165dxeFwUPAAWALFDoAl7NmzR%2FXp00d%2B%2Bukn3VEA2ETx4sVl%2FPjxUqFCBcodANPjN3YATO327duqffv2qkqVKpQ6AInq%2BPHjUqlSJWnevLn65ZdfeBIOwNSY2AEwpWfPnqlJkybJ559%2FLmFhYbrjALC5ZMmSyYABA%2BSTTz4Rd3d3JngATIdiB8B0du3apXr27Cnnzp3THQUA%2FqJAgQIyZcoUqVixIuUOgKlwFROAaYSEhKju3buratWqUeoAmNKZM2ekcuXK0r59e%2FXgwQOejgMwDSZ2ALRTSqn58%2BfLgAEDeNslAMtIlSqVjBgxQt555x0xDIMJHgCtKHYAtDp37pzq0aOH7N69W3cUAHgl1atXl8mTJ0vu3LkpdwC04SomAC1iYmLUuHHjlJ%2BfH6UOgKXt2LFDihQpIqNGjVKxsbE8MQegBRM7AInu9OnTqlOnTnLkyBHdUQAgXpUpU0ZmzZolBQoUYHoHIFExsQOQaGJiYtSoUaOUn58fpQ6AUzp06JAUK1ZMBg4cqKKjo3l6DiDRMLEDkCh%2B%2Bukn1aFDBzlx4oTuKACQKEqUKCFz5syRwoULM70DkOCY2AFIUEopNW7cOFW6dGlKHQBbOXbsmPj5%2BcmQIUP47R2ABMfEDkCCuXbtmurYsSMvRwFge%2BXLl5e5c%2BdKrly5mN4BSBBM7AAkiHnz5qkiRYpQ6gBARPbv3y9%2Bfn4ybdo0nqgDSBBM7ADEq%2Fv376suXbrI%2BvXrdUcBAFN66623ZPr06ZI6dWqmdwDiDcUOQLzZuXOnateundy8eVN3FAAwtfTp08u8efOkVq1alDsA8YKrmABeW0xMjBoyZIiqWbMmpQ4AXsDdu3flzTfflH79%2Bqlnz57xlB3Aa2NiB%2BC1XL9%2BXbVp00YCAwN1RwEASypTpowsXrxYfH19md4BeGVM7AC8spUrV6qiRYtS6gDgNRw6dEhKliwpa9eu5Wk7gFdGsQPw0mJiYtTAgQNVs2bNJDQ0VHccALC8hw8fyltvvcXVTACvjKuYAF7KzZs3VYsWLWTfvn26owCAU6pYsaIsWbJEMmXKxNVMAC%2BMYgfghW3btk21adNG7t%2B%2FrzsKbCp58uSSOnVqSZ06tSRNmlQ8PT1FRCRFihTicDjE1dVVvLy8REQkWbJk4u7u%2Fpf%2F%2BejoaHny5ImIiDx%2B%2FFhiYmIkLi5OHj16JCIiEREREhERIb%2F%2B%2Bqv8%2BuuvEh4ervv%2Fy7CpDBkyyOLFi6VKlSqUOwAvhGIH4F8ppdSXX34pQ4cOldjYWN1x4EQMw5CMGTOKr6%2BvZM%2BeXdKkSSOpU6f%2B4x%2FTpUv3R5FLnTq1eHp6JuohNzIyUv2n5D148EDu378vDx48kD%2F%2Fa8HBwXL16lW5deuW7n874WRcXFzkyy%2B%2FlICAADEMg4IH4B9R7AD8o%2FDwcNWhQwdZtWqV7iiwKB8fH8mYMaNkypRJcuTI8Zc%2FefPmleTJkzvFgTU6OlrduHFDrly58j9%2Fbt26Jbdv39YdERbVoEEDWbBggXh7ezvF3xUACYNiB%2BBvXbx4UTVu3FjOnDmjOwosIHny5FKoUCEpWrSoFC1aVIoUKSIFCxaUlClTchgVkdDQUHXq1Cn56aef5OTJk%2FLTTz%2FJqVOnuO6JF1K4cGFZs2aN5MiRg79PAJ6LYgfguX744QfVqlUrCQkJ0R0FJpQxY0bx8%2FOTggULSoECBcTPz0%2Fy588vDoeDQ%2BdLunXrlgoKCpIzZ87I6dOnJSgoSM6dOydxcXG6o8FkUqVKJYsXL5ZatWrx9wzA%2F6DYAfgLpZT6%2BuuvZdCgQfyeDiIikiRJEildurRUrFhR%2FP39pVy5cpIiRQoOlgno0aNHav%2F%2B%2FbJv3z7Zu3evHDlyRCIiInTHggm4uLjIqFGj5IMPPuDvIIC%2FoNgB%2BENUVJTq1q2bzJs3T3cUaOTt7S2lS5cWf39%2FqVChglSsWFE8PDw4RGoUExOjTp48KYGBgbJv3z7ZtWsXb6e1uZYtW8rs2bMT%2FYVCAMyLYgdARETu37%2Bv3nrrLb5PZ0Np06aV2rVrS%2BXKlcXf31%2Fy5cvHG%2FhMTimlzp49%2B0fJ27p1qzx48EB3LCSySpUqyapVqyR16tT8fQVAsQPw20tS6tevLxcuXNAdBYmkQIEC0qBBA6lRo4ZUqVJFXF1dORhaWFxcnDp%2B%2FLhs375d1q9fLwcOHOA3ejaRI0cO2bBhg%2BTPn5%2B%2Fw4DNUewAm9u2bZtq3ry5hIaG6o6CBJQsWTKpWrWqNGjQQOrVqyeZM2fmEOjE7t%2B%2Fr3bt2iXr16%2BXDRs28BIkJ%2Bfl5SVLly6VN998k7%2FXgI1R7AAbmzJliurTp4%2FExMTojoIEkDt3bmnSpInUrVtXypUrx1TOpmJiYtS%2Bfftk8%2BbNsnLlSrl06ZLuSEgAbm5uMnnyZOnSpQt%2FzwGbotgBNqSUUkOHDpWhQ4fqjoJ4liVLFnn77belWbNm4u%2Fvz2%2Fl8D9Onz6tli9fLgsWLJDLly%2FrjoN4FhAQICNGjODvPmBDFDvAZmJiYtS7774r06dP1x0F8SR16tRSt25dad%2B%2BvVSvXp0DHV5YUFCQmjdvnixbtkzu3LmjOw7iSYcOHWT69Oni5ubGWgDYCMUOsJHw8HDVvHlz2bx5s%2B4oeE0%2BPj5Sv359adasmbz55ptcs8RriYuLU%2Fv375fly5fL4sWL%2BZSCE6hZs6asWLFCvL29WRsAm6DYATZx584dVa9ePTl27JjuKHhFDodDatWqJd27d5d69erxNB4JIjo6Wq1fv16mTZsm27dv5%2B2aFlayZEnZsGGDpE%2BfnrUCsAGKHWAD165dU7Vq1ZKLFy%2FqjoJXkCFDBunQoYN069ZNcuTIwQENiebGjRtq4cKFMnHiRPnll190x8Er8PX1lW3btknOnDlZOwAnR7EDnNzZs2dVrVq15MaNG7qj4CU4HA6pVq2adOvWTRo3bsx0DlrFxsaqnTt3yrhx42Tjxo3C2cFaMmbMKD%2F88IMULlyYdQRwYhQ7wIkdPXpUvfnmm%2FLgwQPdUfCC0qdPLx07dpR33nmHJ%2BwwpUuXLqkZM2bI7Nmz5d69e7rj4AX5%2BPjIpk2bpGzZsqwrgJOi2AFOavv27eqtt96S8PBw3VHwAooVKyYffvihNG3aVNzd3Tl4wfSio6PVsmXLZMyYMXLy5EndcfACvLy8ZO3atVK1alXWGMAJUewAJ7R69WrVqlUriYqK0h0F%2F6JGjRry0UcfSc2aNTlowZKUUmrr1q0yevRo2bFjh%2B44%2BBeenp6ydOlSadiwIWsO4GQodoCTWb58uWrTpo08e%2FZMdxT8DYfDIXXr1pXPPvtMSpcuzeEKTuPEiRPq22%2B%2FlcWLF0tMTIzuOPgbLi4uMnfuXGnTpg3rD%2BBEKHaAE1myZIlq164dByqTSpYsmbRp00YGDBgguXPn5kAFp3Xt2jX13XffycyZM%2BXJkye64%2BA5XFxcZPbs2dKuXTvWIsBJUOwAJzFnzhzVtWtXiY2N1R0F%2FyV16tTy3nvvybvvviupUqXiEAXbePDggZo4caKMHz9eHj58qDsO%2FgvlDnAuFDvACcyYMUN1796dDwmbTPLkyaVXr14ycOBASZkyJQcn2FZ4eLiaOHGijBgxQh49eqQ7Dv7EMAz5%2Fvvv5d1332WNAiyOYgdY3NSpU1XPnj35rpSJJEmSRHr16iUBAQGSJk0aDkvA7%2B7fv69GjBghkydPlsjISN1x8DvDMGTq1KnyzjvvsF4BFkaxAyxszpw5qkuXLkzqTMLNzU06deokn3%2F%2BuWTOnJkDEvA3bty4oUaPHi1Tp07l7b0mYRiGTJkyRbp168baBVgUxQ6wqHnz5qlOnTpR6kzA4XBIkyZNZPjw4ZIrVy4ORcALCg4OVsOHD5eZM2fy%2B2ATcDgcMnfuXGnbti3rGGBBFDvAghYvXqzatWvHQcgE3n77bfnyyy8lf%2F78HISAV3T69Gk1aNAgWbt2re4otufi4iKLFi2S5s2bs6YBFkOxAyxm1apVqkWLFnzSQLO8efPK2LFjpU6dOhx%2BgHiyc%2BdO1a9fP%2Fn55591R7E1FxcXWbhwobRo0YL1DbAQh%2B4AAF7chg0bVMuWLSl1Gvn4%2BMj48ePl1KlTlDognlWtWtUICgqS7777TlKmTKk7jm3FxsZK%2B%2FbtZfPmzTz9ByyEiR1gEfv371e1atXiY7%2BaOBwOadOmjYwZM0bSpUtHoQMS2MOHD9XQoUNl4sSJXDvXJEmSJLJlyxapVKkSax5gARQ7wAJOnjypqlSpIqGhobqj2FLp0qVl%2FPjxUqZMGQ43QCI7duyY6tevnwQGBuqOYkve3t6yc%2BdOKVGiBOsfYHJcxQRM7uLFi6p27dqUOg0yZcokc%2BfOlYMHD1LqAE1KlChh7NmzR5YtWybZsmXTHcd2wsLCpE6dOnLu3DkmAYDJMbEDTOz69euqQoUK8ssvv%2BiOYisOh0N69%2B4tX331lSRPnpxCB5jE48eP1cCBA2Xy5MnC%2BSVxZc%2BeXQIDAyVLliysiYBJUewAk%2Fr111%2BVv7%2B%2FnD9%2FXncUW8mXL5%2FMmDFD%2FP39ObwAJrVnzx7VtWtXuXjxou4otlKgQAHZu3evpEqVivURMCGuYgImFBERoRo1akSpS0Surq7St29fCQoKotQBJlepUiXjp59%2BksGDB4ubm5vuOLZx5swZqVu3rjx9%2BpSpAGBCTOwAk4mNjVXNmzeXVatW6Y5iG4ULF5aZM2dKqVKlKHSAxZw8eVJ17txZjh07pjuKbTRs2FBWrVolLi4urJmAiTCxA0ymf%2F%2F%2BlLpE4ubmJgEBAXL06FFKHWBRRYsWNQ4ePCgjR44UDw8P3XFsYd26ddK7d2%2FdMQD8FyZ2gImMGDFCffLJJ7pj2EKZMmVk5syZUrBgQQod4CROnTqlunTpIocPH9YdxRa%2B%2Fvpr%2BfDDD1lDAZOg2AEmsXDhQtWuXTve9JbAXFxc5NNPP5XPPvuMa0SAE4qJiVFffPGFDB8%2BnA%2BbJzDDMGTx4sXSokUL1lLABCh2gAns379fVatWTaKionRHcWpZs2aVBQsWSKVKlTiEAE7u4MGDqnXr1nL16lXdUZyap6en7Ny5U8qWLcu6CmjGb%2BwAza5du6beeustSl0Ce%2Fvtt%2BXEiROUOsAmypYtaxw%2FflxatmypO4pTi4yMlLfeekuCg4OZFACaUewAjR4%2FfqwaNmwo9%2B7d0x3FaSVJkkTGjh0rK1euNPj2EmAvKVKkMBYvXmzMnTtXkiVLpjuO07pz547UrVtXHj16RLkDNOIqJqBJbGysaty4sWzYsEF3FKdVsGBBWbJkiRQqVIhCB9jcuXPnVKtWreTEiRO6ozitOnXqyIYNG%2Fj9MqAJEztAk%2Ffee49Sl0AMw5D33ntPgoKCKHUAREQkX758xoEDB6RPnz5iGCwLCWHLli0yYMAA3TEA22JiB2gwc%2BZM1bVrV90xnFKKFClk%2Fvz50qBBA05uAJ5rzZo1qkOHDhIWFqY7ilOaM2eOdOjQgTUYSGQUOyCRHTx4UFWpUoWXpSSAPHnyyJo1ayR%2F%2FvwcKAD8o4sXL6rGjRvLmTNndEdxOp6enrJ7924pXbo0azGQiLiKCSSiO3fuqKZNm1LqEkD9%2BvXl8OHDlDoALyR37tzGwYMH5a233tIdxelERkZK48aN5datW0wPgEREsQMSSVRUlGrcuLHcvHlTdxSnYhiGBAQEyNq1ayVFihSUOgAvzMvLy1i5cqWMHDlSHA6ORPHp9u3b0qxZM4mOjqbcAYmEVQxIJD179pRDhw7pjuFUUqRIIevXr5eRI0caDoeDUgfgpRmGYQQEBBirV68Wb29v3XGcyv79%2B6Vfv366YwC2wW%2FsgEQwdepU1aNHD90xnAq%2FpwMQ3%2FjdXcKYNWuWdOrUibUaSGAUOyCBHTt2TPn7%2B0tkZKTuKE7jrbfekrlz54qXlxcHBQDxKiwsTLVr107WrVunO4rTSJo0qRw8eFAKFy7Mmg0kIK5iAgkoNDRUNWvWjFIXj%2Fr27SsrVqyg1AFIEN7e3saaNWtk8ODBuqM4jadPn8rbb78tjx49YpoAJCCKHZBAlFKqc%2BfOcuXKFd1RnIKLi4tMmDBBxo0bx%2B%2FpACQowzCMIUOGGGPHjuWlKvHk0qVL0qFDB1FcFQMSDKsVkEBGjRolq1ev1h3DKXh4eMiiRYukd%2B%2FeFDoAiaZfv37GihUrJEmSJLqjOIW1a9fK2LFjdccAnBa%2FsQMSQGBgoKpatarExMTojmJ5adKkkXXr1km5cuUodQC0CAwMVI0aNZKHDx%2FqjmJ5bm5usmfPHilbtixrOhDPKHZAPAsNDVXFihWT4OBg3VEsz9fXVzZv3ix58%2BblAABAq8uXL6s333xTLl68qDuK5WXLlk1OnDghPj4%2BrO1APOIqJhDPevToQamLB6VKlZKDBw9S6gCYQs6cOY29e%2FdKyZIldUexvOvXr0u3bt10xwCcDsUOiEeTJk1SS5cu1R3D8mrXri07duyQdOnSUeoAmEb69OmNXbt2Sf369XVHsbwVK1bIrFmzuDYGxCOuYgLx5PTp06pUqVISERGhO4qltWzZUubPny%2Burq6UOgCmFBsbqzp16iTz58%2FXHcXSkiVLJkeOHJH8%2BfOz3gPxgIkdEA%2BePn2qmjdvTql7TZ06dZIFCxZQ6gCYmouLizF79mxp37697iiW9uTJE2nVqpVERkYyZQDiAcUOiAcfffSRnDlzRncMS3vnnXdkxowZ4uLiQqkDYHouLi7GnDlzpFevXrqjWNrJkydl0KBBumMAToGrmMBr2r59u6pVq5bwd%2BnV9ejRQyZNmiSGYVDqAFiKUkr1799fxo0bpzuKZTkcDtm2bZtUq1aNPQB4DRQ74DWEhoaqIkWKyC%2B%2F%2FKI7imUNGDBARo8ezWYOwNI%2B%2FfRT9dVXX%2BmOYVlZsmSRn376iU8gAK%2BBq5jAa%2BjZsyel7jUEBARQ6gA4hS%2B%2F%2FNIYPHiw7hiWdePGDXnvvfd0xwAsjYkd8IpWrVqlmjRpojuGZQ0ZMkQGDx5MqQPgVEaNGqUGDhyoO4ZlLV26VJo3b87eALwCih3wCm7duqUKFy4sDx8%2B1B3FkkaMGCEDBw5k4wbglEaMGKE%2B%2BeQT3TEsKU2aNHLq1ClJnz49ewTwkriKCbyC3r17U%2Bpe0aBBgyh1AJzaxx9%2FbHz88ce6Y1jSgwcPpFu3brpjAJbExA54SQsXLlRt27bVHcOS3n33XZk4cSKlDoAt9O%2FfX40dO1Z3DEtatmyZNGvWjP0CeAkUO%2BAl3L9%2FXxUsWFDu37%2BvO4rltGnTRubNmycOh4ONGoAtKKVUly5dZPbs2bqjWE6aNGnk9OnTki5dOvYM4AVxFRN4CT179qTUvYKGDRvKnDlzKHUAbMUwDGP69OnCi7Ze3oMHD3hLJvCSmNgBL2jZsmWqRYsWumNYTrVq1WTjxo3i6elJqQNgS9HR0apBgwaydetW3VEsZ%2BXKlfL222%2BzfwAvgGIHvICHDx%2Bq%2FPnzy71793RHsZSyZcvKtm3bJHny5GzKAGzt8ePHqnr16nLkyBHdUSwlU6ZMcubMGUmRIgX7CPAvuIoJvICBAwdS6l5SoUKFZOPGjZQ6ABARLy8vY%2BvWrVKsWDHdUSzl1q1b8umnn%2BqOAVgCEzvgXwQGBqpKlSoJf1deXLZs2eTgwYOSMWNGSh0A%2FMnNmzdV2bJl5caNG7qjWIbD4ZD9%2B%2FdLmTJl2FOAf0CxA%2F5BTEyMKlmypJw8eVJ3FMvw8vKSwMBAKVKkCBswADzH6dOnlb%2B%2Fvzx69Eh3FMsoXLiwBAUFiZubG3sL8De4ign8g6%2B%2F%2FppS9xJcXFxk4cKFlDoA%2BAcFCxY0Fi9eLC4uLrqjWMbPP%2F8s48eP1x0DMDUmdsDfuHbtmipUqJA8efJEdxTLmDBhgvTu3ZtSBwAvYOzYsap%2F%2F%2F66Y1hG0qRJ5dSpU%2BLr68s%2BAzwHEzvgb%2FTu3ZtS9xL69etHqQOAl%2FDee%2B8ZvXr10h3DMp4%2BfSoffPCB7hiAaTGxA55j%2Ffr1qmHDhrpjWMabb74p69atE1dXV4odALyE2NhY1bhxY9mwYYPuKJaxefNmqVOnDvsN8F8odsB%2FiYqKUkWKFJELFy7ojmIJBQsWlH379vGNIQB4RY8fP1YVKlSQn376SXcUS8idO7f8%2FPPP4uHhwb4D%2FAlXMYH%2FMnr0aErdC8qYMaNs2rSJUgcAr8HLy8tYt26dpE%2BfXncUS7h48aJMmDBBdwzAdJjYAX9y%2Ffp1lT9%2Ffnn69KnuKKbn6ekpe%2FfulZIlS1LqACAeHDp0SFWuXFmioqJ0RzE9Ly8vOX%2F%2BPN9LBf6EiR3wJx988AGl7gWNHz%2BeUgcA8ahMmTLGd999pzuGJTx%2B%2FFg%2B%2Bugj3TEAU2FiB%2Fxuz549qnLlyrpjWELbtm1l%2Fvz5lDoASACdOnVSc%2BbM0R3D9AzDkL1794q%2Fvz%2F7ESAUO0BERJRSqkyZMnLkyBHdUUyvSJEicuDAAUmaNCkbKQAkgIiICOXv7y%2FHjx%2FXHcX0ypYtK%2Fv37xfDMNiTYHtcxQREZOHChZS6F5AyZUpZtWoVpQ4AElCSJEmMZcuWSYoUKXRHMb2DBw%2FKypUrdccATIGJHWwvMjJS5cuXT4KDg3VHMTXDMGTlypXy1ltvUeoAIBGsW7dONW7cWDir%2FTNfX185e%2FYsnz%2BA7TGxg%2B199913lLoX8PHHH1PqACARNWzY0Pjggw90xzC9q1evysSJE3XHALRjYgdbu3fvnsqdO7eEhYXpjmJq1apVk61bt4qLiwvFDgASUUxMjKpevbrs2bNHdxRT8%2FHxkYsXL0rq1KnZp2BbTOxga1999RWl7l9kzpxZFi9eTKkDAA1cXV2NJUuWSIYMGXRHMbWQkBAZMWKE7hiAVkzsYFvBwcEqb968fAj2HzgcDtm2bZtUq1aNUgcAGm3btk3Vrl2b39v9A09PT7lw4YJkzZqVPQu2xMQOtjV48GBK3b%2Fo378%2FpQ4ATKBmzZpG7969dccwtcjISBk2bJjuGIA2TOxgS%2BfPn1eFChWSmJgY3VFMq0CBAhIUFCSenp4UOwAwgcjISFW6dGn5%2BeefdUcxLRcXFzl16pTky5ePvQu2w8QOtjRw4EBK3T%2Fw8PCQRYsWUeoAwEQ8PT2NuXPniru7u%2B4ophUbGytDhgzRHQPQgmIH2zly5Ihau3at7him9uWXX0rRokUpdQBgMsWLFzcoLv9s2bJlcuzYMa6kwXa4ignbqV27ttq6davuGKZVsWJF2blzJ2%2FBBACTiouLU9WqVZPdu3frjmJaDRo0kHXr1rGPwVYodrCVgwcPqnLlyumOYVopUqSQkydPSvbs2dkMAcDErl69qooVK8Yne%2F7B4cOHpVSpUuxnsA2uYsJWhg4dqjuCqU2cOJFSBwAW4Ovra4wbN053DFP78ssvdUcAEhUTO9jGoUOHVNmyZXXHMK1mzZrJsmXLKHUAYCFvv%2F22Wr16te4YpmQYhhw9elRKlCjB3gZboNjBNurVq6c2bdqkO4YppUqVSs6cOSPp06dn8wMAC7lz544qUKCAhISE6I5iSo0bN5bVq1ezt8EWuIoJWwgKClKbN2%2FWHcO0Ro8eTakDAAvKkCGDMWLECN0xTGvt2rVy9OhRphiwBYodbGHYsGHCdPr5KleuLJ06ddIdAwDwit555x2pUKGC7himpJSSUaNG6Y4BJAquYsLpnT17VhUqVEji4uJ0RzEdDw8POX78uOTPn59pHQBY2Pnz51XRokUlKipKdxTTcTgccurUKfY6OD0mdnB6I0eOpNT9jU8%2B%2BYSNDgCcQN68eY0PP%2FxQdwxTiouLk2%2B%2F%2FVZ3DCDBMbGDU7tx44bKmTOnREdH645iOnnz5pWTJ0%2BKh4cHxQ4AnEBUVJQqXry4nD17VncU0%2FHw8JArV65IpkyZ2PPgtJjYwal98803lLrnMAxDJk%2BeTKkDACfi4eFhTJ48WQyDpf2%2FRUVFCd%2F9g7NjYgen9fDhQ5U9e3YJDw%2FXHcV0unXrJlOnTmXnBwAn1KlTJzVnzhzdMUzHy8tLrl%2B%2FLilTpmT%2Fg1NiYgenNWnSJErdc2TIkEFGjhypOwYAIIGMGTNG0qZNqzuG6Tx%2B%2FFimTp2qOwaQYCh2cErR0dFq4sSJumOY0ogRI8THx4enlQDgpFKnTm18%2BeWXumOY0vjx4%2BXZs2dcV4NTotjBKS1ZskTu3LmjO4bpFCtWTNq3b687BgAggXXp0kWKFCmiO4bp3Lp1S1asWKE7BpAgKHZwSt9%2F%2F73uCKY0evRocTgcTOsAwMm5uLgY3333ne4YpsSnD%2BCsKHZwOnv37lVHjhzRHcN03nrrLalRowalDgBsolq1aka9evV0xzCdo0ePyoEDB7iOCadDsYPT4XXG%2F8vd3V1GjRqlOwYAIJF988034ubmpjuG6XBWgDOi2MGpBAcHq7Vr1%2BqOYTq9evWS3LlzM60DAJvJmzev0aNHD90xTGflypXyyy%2B%2FMLWDU6HYwalMnTpVYmJidMcwlVSpUsmnn36qOwYAQJOhQ4dK6tSpdccwlZiYGJk2bZruGEC8otjBaURHR6tZs2bpjmE6Q4cOlVSpUjGtAwCb8vHxMQYNGqQ7hunMmDGDTx%2FAqVDs4DRWrVold%2B%2Fe1R3DVPLlyyfdu3fXHQMAoFnv3r0lT548umOYyp07d4Sfb8CZUOzgNKZMmaI7gumMHDlS3NzcmNYBgM25ubkZw4cP1x3DdCZPnqw7AhBvDKWYQMP6zp49qwoWLCj89%2Fn%2FlShRQo4ePSqGYVDsAACilFLFixeXkydP6o5iGoZhyLlz5yRPnjzslbA8JnZwCpMmTaLU%2FZehQ4dS6gAAfzAMwxg8eLDuGKailJKpU6fqjgHECyZ2sLyIiAiVKVMmCQ0N1R3FNEqVKiWHDh2i2AEA%2FkIppfz8%2FOT48eO6o5hG6tSp5ebNm%2BLh4cGeCUtjYgfLW7VqFaXuvwwZMoRSBwD4H0zt%2Ftevv%2F4q69at0x0DeG0UO1je7NmzdUcwFT8%2FP3nzzTd1xwAAmFSjRo2MUqVK6Y5hKpwl4Ay4iglLCw4OVjly5JC4uDjdUUxj8%2BbNUqdOHaZ1AIC%2FtX79etWwYUPdMUzD4XDItWvXJGvWrOyfsCwmdrC0OXPmUOr%2BpGzZspQ6AMC%2FatCggVG6dGndMUwjLi5OFixYoDsG8FqY2MGylFIqd%2B7ccvnyZd1RTOOHH36QWrVqUewAAP9q48aNqn79%2BrpjmEbu3Lnl%2FPnz%2FEYdlsXEDpa1a9cuSt2flC9fnlIHAHhh9erVY2r3JxcvXpR9%2B%2FbpjgG8MoodLIsrE3%2F1ySef6I4AALCYgQMH6o5gKgsXLtQdAXhlXMWEJUVGRqqMGTPymYPf5cmTR86ePSsOh4OJHQDghcXFxam8efPKpUuXdEcxhVSpUsnt27fF3d2d%2FRSWw8QOlrRx40ZK3Z%2F079%2BfUgcAeGkOh8Po27ev7him8fDhQ9m6davuGMArodjBkhYvXqw7gmmkSpVK2rVrpzsGAMCiunTpIqlTp9YdwzQ4Y8CqKHawnLCwMLVp0ybdMUyjZ8%2BekixZMqZ1AIBXkjRpUqNLly66Y5jGmjVrJDw8nN8qwXIodrCclStXSkREhO4YpuDm5iY9evTQHQMAYHF9%2B%2FYVNzc33TFM4enTp7Ju3TrdMYCXRrGD5SxZskR3BNNo2bKlZMmShWkdAOC1ZM6c2WjWrJnuGKbBdUxYEW%2FFhKWEhoaq9OnTS3R0tO4opnDs2DEpXrw4xQ4A8NqCgoJUyZIldccwBQ8PD7l37554e3uzx8IymNjBUtasWUOp%2B13VqlUpdQCAeOPn52dUqlRJdwxTiIqKko0bN%2BqOAbwUih0sZeXKlbojmEb%2F%2Fv11RwAAOBn2lv%2FHmQNWw1VMWMbjx49VunTpJDIyUncU7bJmzSpXr14VFxcXJnYAgHgTFxenfH195fr167qjaJc0aVK5d%2B8eb56GZTCxg2Vs2LCBUve7Ll26UOoAAPHO4XAYHTp00B3DFJ4%2BfSpbtmzRHQN4YRQ7WMaqVat0RzAFh8MhHTt21B0DAOCkOnXqJA4HR0QRrmPCWvhbC0uIiopSP%2Fzwg%2B4YplCzZk3Jnj070zoAQILw9fU1qlatqjuGKWzcuFGio6P53RIsgWIHS9i5c6c8fvxYdwxT6NKli%2B4IAAAnx17zm7CwMAkMDNQdA3ghFDtYwoYNG3RHMIXUqVNLw4YNdccAADi5t99%2BW9KkSaM7hinw2QNYBcUOlsCi%2Bpv27duLh4cH1zABAAnKw8PDaNWqle4YprB27VrdEYAXQrGD6f3888%2Fq2rVrumOYAi9NAQAklnfeeUd3BFO4fPmyXLhwgd%2FZwfQodjC99evX645gCmXLlpUiRYowrQMAJIrChQsbfn5%2BumOYAj8JgRVQ7GB6mzZt0h3BFPghOwAgsXXt2lV3BFPgJyGwAkMpJsswr0ePHqk0adJITEyM7ihaeXp6yt27d8Xb25uJHQAg0YSGhqr06dNLdHS07ihaubu7y8OHDyVZsmTswzAtJnYwtR9%2F%2FNH2pU5EpE6dOpQ6AECiS5kypVGzZk3dMbSLjo6WPXv26I4B%2FCOKHUxt27ZtuiOYQrNmzXRHAADYFHvQbziTwOy4iglTy507t7p06ZLuGFp5eHjIvXv3mNgBALQIDQ1VGTJkkKioKN1RtCpYsKCcOnWKvRimxcQOphUcHGz7UifCNUwAgF4pU6Y0atSooTuGdqdPn5YbN24wEYFpUexgWlu3btUdwRS4AgMA0I296Dc7duzQHQH4WxQ7mBaL52%2FXMBs0aKA7BgDA5ho1aiTu7u66Y2i3fft23RGAv0Wxg2nt3btXdwTtuIYJADADrmP%2BZteuXbojAH%2BLYgdTOn%2F%2BvLp165buGNpx9QUAYBbsSSI3btyQq1ev8js7mBLFDqbEt2J%2Bu4ZZv3593TEAABARkcaNG3MdUzijwLwodjAlFk2RmjVrSooUKbiGCQAwhZQpUxrVq1fXHUO73bt3644APBfFDqZEsROpV6%2Be7ggAAPxF3bp1dUfQjjMKzIpiB9O5evWqun79uu4Y2tWqVUt3BAAA%2FqJ27dq6I2h3%2BfJl%2BeWXX%2FidHUyHYgfTCQwM1B1Buzx58kiOHDm4hgkAMJXcuXMbOXPm1B1Du3379umOAPwPih1M5%2BDBg7ojaFenTh3dEQAAeC6mdpxVYE4UO5gOiyWbJgDAvNijOKvAnAyluCIM84iIiFApUqSQZ8%2Be6Y6ijYeHhzx48ECSJ0%2FOVUwAgOk8efJEpU6dWqKionRH0cbDw0MePXokHh4e7NUwDSZ2MJWgoCBblzoRkUqVKlHqAACmlSxZMqNcuXK6Y2gVFRUlx48f1x0D%2BAuKHUyFqw1ccQEAmB97FWcWmA%2FFDqZy6NAh3RG0Y7MEAJgdexVnFpgPv7GDqfj6%2Bqpr167pjqFN5syZ5ZdffhHDMLiKCQAwLaWUypQpk9y5c0d3FG1y5Mghly9fZr%2BGaTCxg2k8fPhQBQcH646hVY0aNSh1AADTMwzDqF69uu4YWl29elVCQ0OZkMA0KHYwjePHj4vdJ8j%2B%2Fv66IwAA8ELsvmcppeTkyZO6YwB%2FoNjBNHi7lEj58uV1RwAA4IWwZ3F2gblQ7GAadl8cU6ZMKfnz59cdAwCAF1K4cGFJkSKF7hha2f3sAnOh2ME07L44litXThwOB7%2BvAwBYgsPhMEqXLq07hlZ2P7vAXCh2MIWnT5%2BqCxcu6I6hld0%2F9goAsB67X8c8e%2FasREZG2vsFATANih1M4dSpUxIbG6s7hlZ23xwBANZj970rJiZGzpw5ozsGICIUO5jE6dOndUfQysXFRex%2BnQUAYD1ly5YVFxcX3TG0otjBLCh2MAW7L4pFihQRLy8vfl8HALAUb29vo2DBgrpjaGX3MwzMg2IHU7D7omj3qywAAOuy%2Bx5m91tHMA%2BKHUzB7sWOF6cAAKzK7nuY3c8wMA%2BKHbR78uSJCg4O1h1DK35fBwCwqjJlyuiOoNWVK1ckIiKCN2NCO4odtDtz5owoZd%2F1MFmyZJIzZ07dMQAAeCW5cuWSJEmS6I6hTVxcnJw7d053DIBiB%2F3svhgWKFCAD5MDACzLxcXFKFCggO4YWp09e1Z3BIBiB%2F0uXbqkO4JWRYoU0R0BAIDXUqhQId0RtLp8%2BbLuCADFDvrZvdgVLlxYdwQAAF4LxY5iB%2F0odtDO7oshxQ4AYHV238vs%2FpAa5kCxg3Z2Xwzt%2FpQTAGB9di92dn9IDXMw7Pw2QugXGhqqfHx8dMfQJn369HLnzh1enAIAsLw0adKoX3%2F9VXcMbcLCwsTLy4s9HdowsYNWFy9e1B1BK7s%2F4QQAOA%2B730C5cuWK7giwOYodtLL7Imj3TRAA4Dzs%2FrCS65jQjWIHra5fv647glZ86gAA4Czs%2FrDS7mca6Eexg1Y3btzQHUGrfPny6Y4AAEC8sPtHyn%2F55RfdEWBzFDtoZfenW76%2BvrojAAAQL9544w3dEbSi2EE3ih20svMimCRJEkmfPr3uGAAAxIvMmTOLu7u77hja2P1hNfSj2EErOy%2BC2bNnF8MweC0yAMApOBwOI2vWrLpjaGPnh9UwB4odtImKilIPHjzQHUMbu19ZAQA4HzvvbXfu3JHo6Gg%2BEA1tKHbQ5ubNm6KUfde%2F7Nmz644AAEC8svNvx%2BPi4uTWrVu6Y8DGKHbQ5vbt27ojaGXnp5oAAOdk94eWd%2B%2Fe1R0BNkaxgzb37t3THUEru29%2BAADnY%2FeHlhQ76ESxgzZ2X%2FzsvvkBAJyP3fc2u59toBfFDtrYffGz%2B%2BYHAHA%2Bdt%2Fb7H4bCXpR7KCNnRc%2FT09PyZAhg%2B4YAADEq0yZMomHh4fuGNrY%2FaE19KLYQRs7F7usWbPyDTsAgNNxOBxGlixZdMfQxs5nG%2BhHsYM2dl780qZNqzsCAAAJws57HBM76ESxgza%2F%2Fvqr7gjapEmTRncEAAASROrUqXVH0CYkJER3BNgYxQ7ahIaG6o6gjZ03PQCAc7PzHmfnsw30o9hBGzsvfkzsAADOys57HBM76ESxgxbPnj1TT5480R1DGzs%2FzQQAODc773GPHz%2BW2NhYpTsH7IliBy3sPK0TsfemBwBwbnbe45RS8ujRI90xYFMUO2hh96sKdt70AADOze57nN0fXkMfih20sPvTrFSpUumOAABAgqDYheqOAJui2EGLx48f646glZ1%2FWA4AcG52L3Z2P%2BNAH4odtHj69KnuCFrZfdMDADgvu%2B9xdj%2FjQB%2BKHbSw%2B6LHVUwAgLOy%2B60Uu59xoA%2FFDlpERETojqCNh4eHuLu7G7pzAACQEDw8PAxXV1fdMbSx8xkHelHsoIWdn2Z5eHjojgAAQIKy815n5zMO9KLYQQs7L3ru7u66IwAAkKDsvNfZ%2BYwDvSh20MLOi56dNzsAgD0wsQMSH8UOWkRFRemOoA3FDgDg7Oxc7CIjI3VHgE1R7KBFTEyM7gja2HmzAwDYg50fYsbGxuqOAJui2EELOy96dt7sAAD2YOe9zs5nHOhFsYMWdl70mNgBAJydnfc6O59xoBfFDlrYedGz81NMAIA92Hmvs%2FPPTaAXxQ5aUOwAAHBeTOyAxEexgxZ2XvQodgAAZ2fnvc7OZxzoRbGDFkop3RG0cXNz0x0BAIAERbEDEh%2FFDlo4HPb9rx4LPgDA2dn5d2YuLi66I8Cm7Hu6hlaurq66I2gTHR2tOwIAAAnKznsdN3OgC8UOWth50Xv27JnuCAAAJCg7Fzs7P7yGXhQ7aGHnRc%2FOmx0AwB7svNfZ%2BYwDvSh20MLOi56dNzsAgD3Yea%2Bz860k6EWxgxYUOwAAnJed9zo7n3GgF8UOWth50eM3dgAAZ2fnvc7OZxzoRbGDFnZe9Oz8FBMAYA923uvsfMaBXhQ7aGHnRc%2FOmx0AwB7svNfxGzvoQrGDFh4eHrojaGPnzQ4AYA923uvc3d11R4BNUeygRfLkyXVH0CYiIkJ3BAAAEpSd9zo7n3GgF8UOWnh5eemOoM2TJ08kKipK6c4BAEBCiIiIUHYudt7e3rojwKYodtDCzsVORCQkJER3BAAAEsTDhw91R9DK7mcc6EOxgxZ2X%2FQodgAAZ2X3Pc7uZxzoQ7GDFna%2Ff273p5kAAOdl9z2OYgddKHbQwu6Lnt2fZgIAnJfd9zi7n3GgD8UOWth90bP700wAgPOy%2Bx5n9zMO9KHYQQu7L3p2f5oJAHBedt%2Fj7P5zE%2BhDsYMWnp6ehpubm%2B4Y2th90wMAOC8773EeHh7i5uZm6M4Be6LYQRsfHx%2FdEbSx%2BzUVAIDzsnOxs%2FPZBvpR7KBN2rRpdUfQhmIHAHBWdt7j0qVLpzsCbIxiB23svPjdunVLdwQAABLEzZs3dUfQJn369LojwMYodtDGzsXul19%2B0R0BAIAEcf36dd0RtLHz2Qb6UeygjZ2vYv7yyy%2BilFK6cwAAEJ%2Fi4uKUnW%2BlUOygE8UO2ti52EVFRcn9%2B%2Fd1xwAAIF7duXNHoqOjdcfQxs5nG%2BhHsYM2dn%2BqxXVMAICzsfveRrGDThQ7aGP3Ymfn3yAAAJyT3fc2u59toBfFDtrY%2FamW3Z9qAgCcj933NooddKLYQRu7L3523%2FwAAM7nxo0buiNoZfeH1tCLYgdtsmbNqjuCVhQ7AICzCQ4O1h1BG8MwJHPmzLpjwMYodtAmadKkRpo0aXTH0IZiBwBwNnbe29KnTy%2Benp6G7hywL4odtMqePbvuCNpcvnxZdwQAAOLV1atXdUfQJlu2bLojwOYodtDKzovg3bt35eHDh3ykHADgFO7fv68ePHigO4Y2dn5YDXOg2EErOxc7EZFz587pjgAAQLw4e%2Fas7gha2f1MA%2F0odtDK7ovgmTNndEcAACBe2H1Ps%2FuZBvpR7KCV3a8t2P3pJgDAedh9T6PYQTeKHbSy%2ByJo900QAOA87L6n2f1hNfSj2EEruy%2BCdt8EAQDOw%2B57mt0fVkM%2FQyleygd9lFLK29tbwsPDdUfRwjAMefz4sSRLlozv3gAALOvx48cqRYoUYtdzpbe3tzx69Ii9HFoxsYNWhmEYefLk0R1DG6WUnD9%2FXncMAABey7lz52xb6kRE8ubNqzsCQLGDfnZfDO3%2BFjEAgPXZ%2FRpmvnz5dEcAKHbQz%2B7F7tSpU7ojAADwWuy%2Bl9n59hHMg2IH7exe7I4cOaI7AgAAr%2BXw4cO6I2jFxA5mQLGDdnYvdkFBQRIXF2ffHyYAACwtLi5OHT9%2BXHcMrex%2BloE5UOygXZ48ecQw7PsiqUePHsnFixd1xwAA4JWcPXtWwsLCdMfQxuFwSO7cuXXHACh20C9ZsmRGlixZdMfQiuuYAACrsvse9sYbb4inp6d9n1DDNCh2MAW7X2Gw%2B6YIALAuu%2B9hdj%2FDwDwodjAFu%2F%2Fo2O6bIgDAuo4ePao7glYUO5gFxQ6mUKRIEd0RtDp%2B%2FLg8e%2FaMF6gAACwlOjpanTx5UncMrYoWLao7AiAiFDuYRLFixXRH0CoyMtL23wACAFjPyZMnJSoqSncMrex%2BhoF5UOxgCoULFxZXV1fdMbTiOiYAwGrs%2Fv06d3d3KVCggO4YgIhQ7GASnp6eht3vqB88eFB3BAAAXsqhQ4d0R9Aqf%2F784u7uzhsxYQoUO5iG3a8y%2FPjjj7ojAADwUnbv3q07glbFixfXHQH4A8UOpmH3YhccHCzXrl3jBSoAAEu4dOmSun79uu4YWvHiFJgJxQ6mYfdiJ8LUDgBgHexZnF1gLhQ7mAbXGUR27typOwIAAC%2FE7nuWYRhM7GAqFDuYRurUqY0sWbLojqGV3TdJAIA1KKXUrl27dMfQKlu2bOLj48OLU2AaFDuYSsmSJXVH0OrmzZty4cIFfmcHADC1s2fPyp07d3TH0Kp06dK6IwB%2FQbGDqZQrV053BO34zQIAwOy4YcKZBeZDsYOpsEiyWQIAzI%2B9ijMLzMdQiltfMI%2BIiAiVMmVKiY6O1h1Fm3Tp0smdO3fEMAzu7QMATEcppdKlSycPHjzQHUUbDw8PefTokXh4eLBXwzSY2MFUkiRJYhQpUkR3DK3u3bsnJ06c0B0DAIDnOnbsmK1Lnchvb%2FKm1MFsKHYwHa42iKxfv153BAAAnmvdunW6I2hXvnx53RGA%2F0Gxg%2BlQ7Ch2AADzYo%2FirAJz4jd2MJ1r164pX19f3TG0MgxDrl%2B%2FLlmyZOGaBwDANH755ReVPXt2sfv58ZdffmGPhukwsYPpvPHGG0amTJl0x9BKKSUbNmzQHQMAgL9Yt26d7Utd1qxZKXUwJYodTMnf3193BO246gIAMBseOopUqFBBdwTguSh2MKWqVavqjqDdjh075PHjx%2FZ%2BLAoAMI3w8HDF9%2BtEqlWrpjsC8FwUO5gSi6ZIVFSUbN%2B%2BXXcMAABERGTz5s0SFRWlO4Z2nFFgVhQ7mFLevHmNLFmy6I6hHdcxAQBmwZ4kki1bNsmRIwe%2Fr4MpUexgWlzHFNm4caPExsZyHRMAoFVsbKzavHmz7hjaMa2DmVHsYFoUO5F79%2B7Jnj17dMcAANjcjz%2F%2BKA8ePNAdQzuKHcyMYgfTql69uu4IprBw4ULdEQAANrdo0SLdEUyBh84wMz5QDlPLnTu3unTpku4YWnl7e8vdu3fF09OTO%2F0AgEQXGRmpMmTIII8ePdIdRau8efPKuXPn2IthWkzsYGpceRAJCwsTftcAANBlw4YNti91IpxJYH4UO5hazZo1dUcwBa5jAgB04Rrmb2rUqKE7AvCPuIoJUwsLC1Np06aV6Oho3VG08vT0lNu3b0vKlCm5AgIASDSPHj1SGTJkkMjISN1RtHJ3d5cHDx6Il5cX%2BzBMi4kdTM3b29vw9%2FfXHUO7yMhIWb16te4YAACbWb58ue1LnYhI5cqVKXUwPYodTK9evXq6I5gC1zEBAImNa5i%2F4SwCK%2BAqJkzv3LlzKn%2F%2B%2FLpjaOdwOOT69euSOXNmnhgCABLcrVu3VLZs2SQ2NlZ3FO0uXrwouXLlYv%2BFqTGxg%2Bnly5fPyJkzp%2B4Y2sXFxcnixYt1xwAA2MTChQspdfLbZw4odbACih0sgSsQv5kyZYooxuwAgASmlFIzZszQHcMU6tevrzsC8EIodrAEit1vLl%2B%2BLDt37tQdAwDg5Hbs2CEXLlzQHcMUOIPAKih2sITf30alO4YpTJ06VXcEAICTY6%2F5jbe3t1SoUEF3DOCFUOxgCR4eHgYfK%2F%2FNmjVr5O7du1zHBAAkiDt37qi1a9fqjmEKdevWFTc3N35fB0ug2MEymjZtqjuCKURHR8usWbN0xwAAOKmZM2fKs2fPdMcwhWbNmumOALwwPncAywgPD1fp0qWTiIgI3VG0y5Ytm1y5ckVcXFx4iggAiDdxcXEqZ86ccu3aNd1RtEuaNKncu3dPkiVLxl4LS2BiB8tInjy5Ubt2bd0xTOH69euybds23TEAAE5m8%2BbNlLrf1a9fn1IHS6HYwVK4jvn%2F%2BGE7ACC%2Bsbf8P84csBquYsJSwsLCVLp06SQqKkp3FO1cXV3l6tWrkiVLFp4mAgBe2%2FXr11WOHDn4KLlwDRPWxMQOluLt7W3UqlVLdwxTiImJkfHjx%2BuOAQBwEuPGjaPU%2Fa5u3bqUOlgOxQ6Ww9WI%2Fzd16lR59OgRY3cAwGsJCwtTM2fO1B3DNDhrwIoodrCchg0bioeHh%2B4YphAWFibTp0%2FXHQMAYHGTJ0%2BWR48e6Y5hCp6enlK3bl3dMYCXRrGD5aRMmdKoU6eO7himMW7cOImOjmZqBwB4JdHR0Yqr%2Ff%2BvQYMG4uXlxTVMWA7FDpbUrl073RFM48aNG7J48WLdMQAAFrVw4UK5deuW7him0b59e90RgFfCWzFhSdHR0SpTpkzy66%2B%2F6o5iCoUKFZKffvpJDMPgCSMA4IUppVThwoXl9OnTuqOYQrp06eTGjRvi5ubGfgrLYWIHS3J3dzeaN2%2BuO4ZpnDp1SrZs2aI7BgDAYjZu3Eip%2B5PWrVtT6mBZFDtYFtcx%2F2r06NG6IwAALIa94684W8DKuIoJS8ubN6%2B6cOGC7himceTIESlZsiRPGgEA%2F%2Brw4cOqTJkyumOYRsGCBeXUqVPsobAsJnawtLZt2%2BqOYCpffPGF7ggAAItgz%2FgrXpoCq2NiB0sLDg5WOXLkkLi4ON1RTOPgwYNSpkwZnjgCAP7WkSNHVJkyZYRz4G8cDocEBwdLlixZ2D9hWUzsYGnZs2c3KlWqpDuGqXz%2B%2Bee6IwAATG7QoEGUuj%2BpUaMGpQ6WR7GD5XXp0kV3BFPZunWr7N69m90aAPBcgYGBatu2bbpjmMo777yjOwLw2riKCcuLiopSWbNmlfv37%2BuOYhoVKlSQvXv38uQRAPA%2Fqlatqnbt2qU7hmlkyJBBrl%2B%2FzmcOYHlM7GB5Hh4eRocOHXTHMJXAwED58ccfeWoDAPiL7du3U%2Br%2BS5cuXSh1cApM7OAULl%2B%2BrHLnzs3vBf6kfPnysm%2FfPjYqAMAfypcvrw4cOKA7hmk4HA65fPmyvPHGG%2ByXsDwmdnAKOXPmNKpVq6Y7hqns379ftmzZQtMFAIiIyMaNGyl1%2F6VOnTqUOjgNih2cRo8ePXRHMJ3PPvtMFGNMALA9pZTircn%2Fq3v37rojAPGGYgen0bhxY8mUKZPuGKZy9OhRWbhwoe4YAADN5s%2BfL8eOHdMdw1SyZMki9erV0x0DiDcUOzgNV1dXo2PHjrpjmM7AgQPlyZMnTO0AwKYiIiLUZ599pjuG6bzzzjvi4uLCNUw4DYodnEq3bt3E1dVVdwxTuXnzpowZM0Z3DACAJqNGjZLr16%2FrjmEq7u7u0rVrV90xgHjFWzHhdFq0aKGWLVumO4apJEmSRM6dOyfZsmXjySQA2MjNmzdV3rx55cmTJ7qjmEq7du1k3rx57IlwKkzs4HQGDBigO4LpREREyKBBg3THAAAksoCAAErdc%2FTv3193BCDeMbGDU%2BI7Pf%2FLMAzZu3ev%2BPv784QSAGzg0KFDqly5cnzj9b9UrVpVfvzxR%2FZCOB0mdnBKPIn7X0opGTBgAJ8%2FAAAbUEqp39d83VFMhzMCnBUTOzil2NhYlSdPHrly5YruKKazaNEiadWqFU8qAcCJLV68WLVu3Vp3DNPJnTu3nDt3ThwOB%2FsgnA4TOzglFxcXo3fv3rpjmFJAQICEh4fzRAcAnFR4eLgaOHCg7him9N5771Hq4LQodnBaXbt2lRQpUuiOYTq%2F%2FPKL8D0jAHBen332GZ83eA4fHx%2Fp0KGD7hhAgqHYwWl5eXkZXbp00R3DlCZMmCBHjx5lagcATiYoKEhNmDBBdwxT6tGjhyRLloxpHZwWv7GDU7tx44bKlSuXREVF6Y5iOkWKFJGjR4%2BKm5sbmxwAOIHY2FhVpkwZCQoK0h3FdDw9PeXKlSuSMWNG9jw4LSZ2cGpZsmQxOnbsqDuGKf3000%2FCU10AcB5jx46l1P2N7t27U%2Brg9JjYweldvXpV5cmTR2JiYnRHMZ2kSZPKzz%2F%2FLDly5GCzAwALu379uipYsKCEh4frjmI6bm5ucunSJcmWLRt7HZwaEzs4PV9fX4NXPj%2Ff06dPpVevXrpjAABeU%2B%2FevSl1f6NTp06UOtgCEzvYwrlz51TBggUlLi5OdxRTWrp0qTRv3pxNDwAsaOnSpaply5a6Y5iSi4uLnD17VnLnzs0eB6fHxA62kC9fPqNp06a6Y5hWv379JCQkhKc8AGAxISEh6r333tMdw7Rat25NqYNtUOxgG5988okYBmv789y5c0feeecd3TEAAC%2Fp3XfflTt37uiOYUoOh0MCAgJ0xwASDcUOtlG0aFGjfv36umOY1sqVK2XJkiVM7QDAIlatWqWWLFmiO4ZpNWnSRAoWLMgTXdgGv7GDrQQFBalSpUoJ%2F71%2FPh8fH%2Fn5558lc%2BbMbIQAYGK3bt1ShQsXlocPH%2BqOYkoOh0NOnjwphQoVYj%2BDbTCxg634%2BfkZTZo00R3DtEJCQqRjx46iaL4AYFpKKdW1a1dK3T9o3bo1pQ62w8QOtnPhwgVVsGBBvmv3DyZMmCC9e%2FdmQwQAE5o4caLq3bu37him5ebmJmfPnpWcOXOyj8FWmNjBdvLkyWO0bdtWdwxT%2B%2FDDD%2BX06dM89QEAk7l8%2BbIaOHCg7him1rVrV0odbImJHWwpODhY5c2bV6KionRHMa0SJUrIwYMHxc3Njc0RAEwgJiZGVahQQQ4dOqQ7iml5enrKxYsXJUuWLOxdsB0mdrCl7NmzG7ze%2F58dO3ZMvvrqK90xAAC%2FGzFiBKXuX%2FTu3ZtSB9tiYgfbunfvnsqZM6eEh4frjmJaDodDtmzZIjVr1mSTBACN9uzZo6pXr87vw%2F9B8uTJ5fLly5IuXTr2LNgSEzvYVrp06Qx%2BfP7P4uLipF27dnLr1i2eAAGAJvfu3VOtW7em1P2LDz%2F8kFIHW2NiB1sLCQlRuXPnll9%2F%2FVV3FFOrUqWKbN%2B%2BXVxcXNgwASARxcbGqtq1a8uOHTt0RzG1DBkyyIULF8TLy4t9CrbFxA625uPjYwwZMkR3DNPbtWuX8O8TACS%2BL774glL3Ar788ktKHWyPiR1sLyYmRhUrVkxOnz6tO4qpORwO2bBhg7z55ptsnACQCH788UdVq1YtiY2N1R3F1IoWLSpBQUHcKoHtMbGD7bm6uhpff%2F217himFxcXJ23btpVr167xNAgAEtidO3dUmzZtKHUvYPTo0ZQ6QCh2gIiI1K1b16hdu7buGKb38OFDadmypURHR1PuACCBxMTEqObNm8udO3d0RzG9Ro0a8eZm4HcUO%2BB3Y8aMERcXF90xTO%2FQoUMSEBCgOwYAOK2PP%2F5Y9u7dqzuG6bm5uQk3boD%2FR7EDfleoUCE%2BWv6Cxo4dK9OnT2dqBwDxbP78%2BWrMmDG6Y1hCr169JE%2BePEzrgN%2Fx8hTgT%2B7fv69y584tjx490h3F9Nzc3GTbtm1SuXJlNlUAiAdBQUGqYsWKEhERoTuK6fn4%2BMjFixclderU7EHA75jYAX%2BSNm1aY%2FDgwbpjWMKzZ8%2BkefPmvEwFAOLBL7%2F8ourXr0%2Bpe0FffvklpQ74L0zsgP8SExOjSpUqJSdOnNAdxRIKFCggBw4cEG9vbzZYAHgFERERqnLlynLkyBHdUSzBz89PDh06xJswgf%2FCxA74L66ursb3338vhsF%2B8SLOnDkjLVu2lNjYWJ4SAcBLUkqpTp06UepekMPhkIkTJ1LqgOeg2AHP4e%2Fvb3Tq1El3DMvYvHmzfPrpp7pjAIDlDBkyRJYuXao7hmX07NlTypQpQ6kDnoOrmMDf%2BPXXX1W%2BfPnkwYMHuqNYxowZM6RLly5suADwAlauXKmaNWsmnMVeTPr06eXs2bPi4%2BPDPgM8BxM74G%2BkTp3aGD58uO4YltK7d2%2FZvXs3JxQA%2BBf79%2B9X7dq1o9S9hDFjxlDqgH%2FAxA74B3FxcapChQpy4MAB3VEsw9vbW3bt2iXFixdn8wWA5zhz5oyqWLGiPHz4UHcUy6hUqZLs2rVLDH4AD%2Fwtih3wL06cOKFKliwpsbGxuqNYRsaMGWXfvn3i6%2BvLBgwAf%2FLLL7%2Bo8uXLy40bN3RHsQx3d3c5ceKE5M%2Bfnz0F%2BAdcxQT%2BRbFixYz3339fdwxLuX37ttSsWVPu3r3LkyMA%2BN2vv%2F6qateuTal7SR9%2F%2FDGlDngBTOyAFxAVFaWKFy8uZ8%2Be1R3FUvz8%2FGTnzp3i5eXFhgzA1iIiIlTNmjVl3759uqNYSuHCheXo0aPi7u7OPgL8CyZ2wAvw8PAwZs6cKQ4Hf2VeRlBQkDRq1EiioqJ4ggTAtp49e6aaNm1KqXtJLi4uMnPmTEod8II4pQIvqFy5ckbPnj11x7CcnTt3SseOHSUuLo5yB8B2lFKqe%2FfusmnTJt1RLGfAgAFSqlQpSh3wgriKCbyE8PBwVahQIQkODtYdxXJ69eolEyZM4I1mAGzl%2FfffV999953uGJaTJ08eOXHihCRJkoQ9A3hBTOyAl5A8eXJj1qxZQjd5eRMnTpT%2B%2FfvrjgEAiWbQoEGUulfgcDhkxowZlDrgJVHsgJdUrVo1o1OnTrpjWNK4ceOkf%2F%2F%2BXBMA4PQ%2B%2FfRTNXz4cN0xLKlXr15SsWJFSh3wkriKCbyC0NBQVahQIbl586buKJb04Ycfytdff82mDcApffrpp%2Bqrr77SHcOSfH195aeffpLkyZOzRwAviYkd8ApSpkxpzJkzhyuZr2j06NEyYMAAnioBcDqDBw%2Bm1L0ih8Mhs2fPptQBr4hiB7yiGjVqGH379tUdw7K%2B%2BeYb%2BfDDDyl3AJzG0KFD1RdffKE7hmV98sknUrlyZUod8Iq4igm8hqioKFWqVCn5%2BeefdUexLK5lAnAGo0ePVh999JHuGJZVokQJOXDgAN%2BsA14DEzvgNXh4eBjz5s0Td3d33VEsa%2FTo0fLpp5%2FyhAmAZQ0bNoxS9xqSJk0qCxcupNQBr4liB7ymYsWKGcOGDdMdw9K%2B%2BuoreffddxUfMQdgJUop9eGHH6rPP%2F9cdxRLGzNmjOTLl49SB7wmrmIC8SAuLk7VqFFDdu7cqTuKpbVs2VLmzZsnbm5ubPAATC02NlZ1795dZs6cqTuKpdWuXVs2b94sBm8jA14bxQ6IJzdu3FBFihSRkJAQ3VEsrXr16rJmzRreigbAtKKiolSbNm1k5cqVuqNYWpo0aeTnn3%2BWDBkysN4D8YCrmEA8yZIlizFlyhTdMSxvx44dUqdOHQkJCeGpEwDTCQsLU3Xq1KHUvSbDMGTOnDmUOiAeUeyAeNS8eXOjZ8%2BeumNY3r59%2B6RChQpy8%2BZNyh0A03j48KGqVauW7Nq1S3cUy%2Fvoo4%2BkXr16lDogHnEVE4hnUVFRqnz58nLs2DHdUSzP19dXtm7dKrly5WLzB6DV9evXVa1ateT8%2BfO6o1hemTJlZO%2FevfyeGohnFDsgAVy6dEn5%2BflJWFiY7iiWlyFDBlmzZo2UKVOGAwAALY4fP64aNGggN2%2Fe1B3F8lKnTi3Hjx%2BXrFmzsqYD8YyrmEACyJUrlzFjxgzdMZzCnTt3pHLlyrJw4UKeQgFIdJs3b1ZVqlSh1MUDwzBk5syZlDoggVDsgATSrFkz491339UdwylERUVJu3btZMiQIUpxzQBAIhk3bpyqX78%2Bty%2FiyUcffSSNGjWi1AEJhKuYQALi93bxr0WLFjJ79mxJkiQJhwMACSImJka99957MnHiRN1RnAa%2FqwMSHsUOSGCXLl1SpUuX5vt28ahChQqyevVqSZMmDQcEAPEqJCRENWvWTHbs2KE7itNIly6dHD16lCuYQALjKiaQwHLlymUsXbpUXFxcdEdxGoGBgVKmTBk5c%2BYMT6YAxJsrV64of39%2FSl08cnNzk6VLl1LqgERAsQMSQc2aNY1hw4bpjuFUrly5Iv7%2B%2FrJ582bKHYDXtnPnTlWmTBk5e%2Fas7ihO5dtvv5UqVapQ6oBEQLEDEsnAgQOlefPmumM4ldDQUKlXr54MHDhQxcbGUvAAvDSllBo3bpyqXbu2PHjwQHccp9KuXTvp3bs3pQ5IJPzGDkhE4eHhqnz58vLzzz%2FrjuJ0qlatKosXL5b06dNziADwQsLCwlSXLl1kxYoVuqM4nRIlSkhgYCAvugISEcUOSGTXrl1TpUqV4slwAsiSJYssX75cypYty0ECwD86efKkatq0qVy6dEl3FKeTPn16OXr0qGTJkoW1GEhEXMUEEtkbb7xhLF68mJepJIAbN25IlSpVZNy4cTyxAvC3FixYoMqXL0%2BpSwBubm6ybNkySh2gAcUO0KBGjRrGiBEjdMdwSlFRUfLee%2B9J%2B%2Fbt1dOnTyl4AP4QFRWlunfvrtq1aydPnz7VHccpff%2F991KpUiVKHaABVzEBjbp27apmzpypO4bTKlKkiCxevFgKFCjAIQOwuUuXLqlWrVrJ0aNHdUdxWu%2B%2F%2F7588803rLeAJhQ7QKNnz56punXryvbt23VHcVqenp4yZMgQ%2BfDDD8XhcHDgAGxo3rx5qlevXhIeHq47itOqV6%2BerF27VlxcXFhnAU0odoBmYWFhyt%2FfX06dOqU7ilOrWbOmzJkzRzJlysShA7CJ0NBQ9e6778rixYt1R3FqJUqUkD179kiyZMlYXwGNKHaACVy7dk2VKVNG7t27pzuKU0ubNq1Mnz5dGjVqxOEDcHLbt29XHTt2lJs3b%2BqO4tQyZcokhw4d4mUpgAnw8hTABN544w1jw4YNkjRpUt1RnNr9%2B%2FelcePG0r59exUeHs5TLcAJRUZGqoEDB6ratWtT6hJY8uTJZdOmTZQ6wCSY2AEmsnz5ctWiRQvh72XC8%2FX1lQULFkj58uU5kABO4vTp06pt27Zy4sQJ3VGcnouLi6xatUoaNmzIGgqYBBM7wESaNWtmfPXVV7pj2MLVq1elSpUqMmjQIBUZGUmTBizs2bNn6ssvv1R%2Bfn6UukQyfvx4Sh1gMkzsABN6%2F%2F331Xfffac7hm3kzJlTpk6dKtWrV%2BeQAljM8ePHVdeuXeXYsWO6o9jG4MGDZciQIayXgMlQ7AATUkqpTp06ydy5c3VHsQ3DMKRt27YyduxYSZUqFQcWwOSePn2qvvjiCxkzZozExsbqjmMb3bt3lylTprBGAiZEsQNM6tmzZ6phw4ayZcsW3VFsJUOGDDJhwgRp2rQpBxfApLZs2aJ69uwp165d0x3FVho1aiQrV67kW3WASVHsABN7%2BvSpqlmzpuzfv193FNupX7%2B%2BTJ48mbe9ASYSEhKiBg4cKNOnT%2BclU4msSpUqsnnzZvH09GRNBEyKYgeY3IMHD1SFChXk%2FPnzuqPYTsqUKWX48OHSrVs3nlADGsXFxam5c%2BdKQECA3L9%2FX3cc2ylRooTs3LlTvL29WQcBE6PYARZw48YN5e%2FvL9evX9cdxZby5csnY8eOldq1a3OoARLZ0aNHVb9%2B%2Fbi5oEnOnDklMDBQMmTIwPoHmByfOwAsIEuWLMbmzZslXbp0uqPY0rlz56ROnTrSrFkzde3aNZ6GAYng1q1bqn379qp06dKUOk2yZs0q27dvp9QBFkGxAyyiQIECxrZt2yR16tS6o9jWihUrJG%2FevNKvXz%2F1%2BPFjCh6QAJ49e6bGjRun8ufPL%2FPnz%2Be3dJqkT59etm7dKm%2B88QalDrAIrmICFnPixAlVvXp1efjwoe4otpYpUyYZMWKEtGvXTgzD4OADxIP169er%2Fv37y%2BXLl3VHsbW0adPKrl27pECBAqxtgIUwsQMsplixYsamTZvE29tbdxRbu3XrlnTo0EEqVqwoe%2Ffu5QkZ8BqOHj2qatasqRo2bEip0yx16tSyY8cOSh1gQRQ7wILKlCljbN68WZInT647iu3t27dPKlWqJDVr1lRHjx6l4AEv4ezZs6p58%2BaqdOnSsn37dt1xbC9FihSyZcsWKVy4MKUOsCCuYgIWFhgYqOrUqSNPnjzRHQW%2Fq1GjhowZM0aKFi3KwQj4G8HBwWr48OEyc%2BZMiY2N1R0HIuLt7S1bt26VMmXKsHYBFsXEDrCwChUqGKtWrRJPT0%2FdUfC77du3i5%2Bfn3To0EFdvXqVJ2fAn9y8eVP16NFD5c6dW6ZNm0apM4nkyZPLxo0bKXWAxTGxA5zAjh07VKNGjZjcmYy7u7t06dJFPv30U8mUKRMHJtjW%2Ffv31ciRI2XSpEkSGRmpOw7%2BJEWKFLJ582YpV64caxRgcRQ7wEkEBgaqevXqSVhYmO4o%2BC%2Fu7u7SokUL%2BfjjjyV%2F%2FvwcnmAbwcHB6ttvv5WZM2fy4MmEfHx8ZMuWLVK6dGnWJcAJUOwAJxIUFKRq164tv%2F76q%2B4oeA6HwyF169aVQYMGSdmyZTlIwWn9%2FPPPavTo0bJkyRJ59uyZ7jh4jnTp0sm2bdukSJEirEWAk6DYAU7mxIkTqlatWnL%2F%2Fn3dUfAP%2FP39JSAgQOrXr8938OA0AgMD1ahRo2Tjxo18WNzEMmTIINu3b5eCBQuy9gBOhGIHOKGzZ8%2BqGjVqyK1bt3RHwb8oUqSIfPDBB9K6dWtxdXXlkAXLUUqpDRs2yMiRI2X%2F%2Fv264%2BBfZMuWTXbs2CG5cuVivQGcDMUOcFLnz59XNWrUkBs3buiOghfwxhtvSPfu3aVz586SLl06DlwwvZCQEDVnzhyZMmWKXLhwQXccvIBcuXLJjh07JFu2bKwxgBOi2AFOLDg4WNWuXVvOnz%2BvOwpekLu7uzRq1Ei6desm1atX55omTCcoKEhNmzZNFi5cyAtRLKRQoUKyZcsWyZw5M2sK4KQodoCTe%2FjwoWrQoAFXpCwob9680qlTJ%2BnWrZv4%2BPhwGIM2kZGRav369TJu3DjZt2%2Bf7jh4SVWqVJE1a9ZIihQpWEcAJ0axA2wgPDxcNW3aVH744QfdUfAKvLy8pE2bNtKjRw8pWrQoBzMkmnPnzqkpU6bI3LlzJTQ0VHccvIKmTZvKggULxMPDg7UDcHIUO8AmYmJiVPfu3WXWrFm6o%2BA1FChQQJo1ayYdOnQQX19fDmqIdw8fPlQrVqyQefPmyf79%2B3m7pYV17txZpk6dyouZAJug2AE2opRSAwcOlK%2B%2F%2Flp3FLwmh8Mh5cqVk%2Fbt20vLli3F29ubgxteWWRkpNq2bZvMnz9f1qxZw7fnnEBAQICMHDmSdQGwEYodYEPjxo1T77%2F%2FvsTFxemOgnjg6ekpNWrUkPbt20vjxo3Fzc2Nwxz%2BVVxcnNq%2Ff7%2FMnz9fFi9eLI8fP9YdCfHAxcVFvv%2F%2Be%2BnRowfrAGAzFDvAphYtWqQ6d%2B4sUVFRuqMgHqVNm1YaN24sDRs2lBo1aoinpyeHO%2FwhOjpa7d69W9auXSurV6%2FmW5dOJnny5LJo0SJp0KABf%2B8BG6LYATZ28OBB1ahRI7l3757uKEgASZIkkerVq0uDBg2kYcOGkiFDBg57NvTkyRP1448%2FyvLly2X9%2BvW8BMVJZcqUSdatWyd%2Bfn78PQdsimIH2NzVq1dV%2Ffr15cyZM7qjIAG5uLhIsWLFpH79%2BtKyZUvJly8fhz8ndv36dbVlyxZZv369bN26VaKjo3VHQgIqWrSorF%2B%2FXrJmzcrfa8DGKHYAJDQ0VDVv3ly2bdumOwoSSYECBaRGjRpSrVo1qVy5sqRMmZIDoYU9fvxY7d69W3788Uf58ccf5eTJk7ojIZG89dZbMn%2F%2BfEmWLBl%2FhwGbo9gBEJHfPofw3nvvycSJE3VHQSL7zzTP399fKlSoILVq1eJDxiYXERGhgoKCZN%2B%2BfbJ9%2B3bZs2cPUzkb6tu3r3z33XficDj4%2BwqAYgfgr7799lv14Ycf8sZMG3N3d5cyZcr8Mc3z8%2FPjcwqahYeHq2PHjsnu3btl586dcuDAAYmMjNQdC5q4ubnJpEmTpGvXrvy9BPAHih2A%2F7FlyxbVunVrCQkJ0R0FJpEjRw7x9%2FcXPz8%2F8fPzk5IlS%2FLGzQQSExOjzp8%2FL0FBQX%2F8OXLkCBM5iIhImjRpZOnSpVKtWjX%2B%2FgH4C4odgOe6dOmSeuutt%2BTUqVO6o8CEPDw8pFixYlKqVCkpVaqUFC9eXPLmzSvu7u6mOGxGRESo%2F0y0lFKilBKHwyEiv33c3SxXTaOjo9XFixfl%2BPHjcuTIETl8%2BLCcOHGCaRyeq1SpUrJq1SrJkiWLKf77C8BcKHYA%2FlZ4eLjq3LmzLF%2B%2BXHcUWICrq6v4%2BvpKwYIFJX%2F%2B%2FJI%2Ff34pUKCA5MuX719f7BATE6NCQkLkP39CQ0Plz%2F%2FnkJAQCQsLk0ePHkl4ePgff0JDQyU8PFyio6NfecLs4eEhSZMmFR8fH0maNKkkTZpUvL29xcvLS5ImTSopU6YUHx8fSZUq1d%2F%2B479NL588eaLOnTsnZ8%2BelTNnzsi5c%2BfkzJkzcvnyZYmJidH9Hx0soFOnTjJp0iQm5QD%2BFsUOwD9SSqnRo0fLJ598IrGxsbrjwIIMw5Ds2bNLvnz5JEOGDP9T2kJDQ%2BXx48e6Y76WJEmSPLf03blzR86dOyfBwcHCfotX4ebmJt9995306tWLQgfgH1HsALyQ3bt3q%2BbNm%2FMxcwBIJGnTppWlS5dK1apVKXUA%2FhXFDsALu3r1qmrSpIkcP35cdxQAcGply5aVFStWSObMmSl1AF6IQ3cAANbh6%2BtrHDhwQPr27as7CgA4JcMwpG%2FfvrJ7925KHYCXwsQOwCtZvXq16tKlC59EAIB4kiJFCpkxY4Y0bdqUQgfgpVHsALyy4OBg1bJlSzl48KDuKABgaaVLl5YlS5aIr68vpQ7AK%2BEqJoBXlj17dmPPnj0SEBAghsFZBABe1n%2BuXgYGBlLqALwWJnYA4sW6detUp06d5OHDh7qjAIAlpEmTRubOnSt169al0AF4bUzsAMSLhg0bGseOHZPKlSvrjgIAplerVi05efIkpQ5AvKHYAYg32bNnN3bu3Cljx44VDw8P3XEAwHQ8PT1l5MiRsnnzZsmUKROlDkC84SomgARx%2BvRp1bZtWzlx4oTuKABgCoULF5YFCxZIkSJFKHQA4h0TOwAJomDBgsbBgwclICBAHA6WGgD25XA4pG%2FfvnL06FFKHYAEw8QOQILbv3%2B%2FateunVy5ckV3FABIVNmzZ5d58%2BZJpUqVKHQAEhSP0QEkuPLlyxtBQUHSsWNH3VEAIFEYhiHdunWTn3%2F%2BmVIHIFEwsQOQqHbv3q26du0qly5d0h0FABKEr6%2BvTJs2TWrUqEGhA5BomNgBSFSVK1c2Tp48KQEBAeLi4qI7DgDEG4fDId26dZOffvqJUgcg0TGxA6DN%2Fv37VdeuXeXs2bO6owDAaylYsKDMnDlTypQpQ6EDoAUTOwDalC9f3jh27JgMHjxY3N3ddccBgJfm6uoqAQEBEhQURKkDoBUTOwCmcPz4cdWjRw85fPiw7igA8ELKly8vkydP5hMGAEyBiR0AUyhevLhx8OBBmTt3rqRNm1Z3HAD4Wz4%2BPjJ27FjZu3cvpQ6AaTCxA2A6Dx8%2BVEOHDpXvv%2F9e4uLidMcBABH57RMGbdu2lW%2B%2B%2BUbSpk1LoQNgKhQ7AKZ19OhR9e6778qRI0d0RwFgc0WLFpVJkyZJ%2BfLlKXQATImrmABMq2TJksbBgwdl6tSpkiJFCt1xANhQsmTJZOTIkXL06FFKHQBTo9gBMLULFy7IjRs3KHYAtEidOrU8efJELl26pDsKAPwjrmICMJ2bN2%2BqFStWyPLly2Xfvn264wCAiIgUKFBAmjVrJh06dBBfX1%2BmdwBMhWIHwBRCQkLUypUrZeHChbJnzx5emgLAtBwOh1SuXFlat24tTZo0ER8fH0oeAO0odgC0iYuLUz%2F%2B%2BKPMmzdPVq5cKU%2BfPtUdCQBeioeHh9SsWVPat28vjRs3Fjc3N0oeAC0odgAS3blz59SSJUtkzpw5EhwcrDsOAMSLjBkzSrNmzaRz585StGhRCh6AREWxA5AoHj16pJYuXSrz5s3jd3MAnJ6fn5%2B0a9dO2rRpI2nSpKHkAUhwFDsACSooKEhNmzZNFixYwFVLALbj4eEhDRs2lG7dukn16tXFMAxKHoAEQbEDEO9CQ0PVsmXL5Pvvv5eff%2F5ZdxwAMIU8efJI586dpXPnzpI2bVoKHoB4RbEDEG%2F%2BM52bP3%2B%2BRERE6I4DAKbEFA9AQqDYAXgtjx49UrNnz5bJkyfLhQsXdMcBAEvJmzevvPvuu9KhQwdJkSIFBQ%2FAK6PYAXgl58%2BfV5MmTZJZs2ZJeHi47jgAYGmenp7SrFkzGTBggBQpUoSCB%2BClUewAvLC4uDi1ceNGGT9%2BvOzYsUNYPwAg%2Fvn5%2BUnfvn2lVatWfBcPwAuj2AH4Vw8ePFBTpkyRKVOmyM2bN3XHAQBbyJIli%2FTo0UO6d%2B%2FOJxMA%2FCuKHYC%2FdfHiRfX999%2FLjBkz%2BFQBAGji4eEhzZs3l4CAAClYsCAFD8BzUewA%2FI%2FAwEA1atQo2bhxI9ctAcAkDMOQ6tWrS9%2B%2BfaV%2B%2Ffq8TRPAX1DsAIiISGRkpFq4cKGMHTtWTp06pTsOAOAfFClSRN577z1p3bq1eHh4UPAAUOwAu3v8%2BLGaNWuWjB49mt%2FPAYDFpEuXTnr27Cn9%2BvUTHx8fCh5gYxQ7wKbu3bunJk2aJOPHj5eQkBDdcQAAr8HLy0s6deokH330kWTOnJmCB9gQxQ6wmStXrqhx48bJ9OnTJSIiQnccAEA8cnd3lxYtWsigQYMkb968FDzARih2gE0cP35cDR8%2BXFatWiVxcXG64wAAEpCLi4s0bdpUPv74YylatCgFD7ABih3g5E6ePKm%2B%2BuorWbFiBW%2B4BAAbqlGjhnz11VdSunRpCh7gxCh2gJM6cOCAGj58OJ8sAACIyG8Fb9iwYVK2bFkKHuCEKHaAk%2FnPN%2Bg2bNigOwoAwIT8%2Ff3liy%2B%2BkGrVqlHwACdCsQOcxJ49e9Tnn38uu3fv1h0FAGABVatWlWHDhom%2Fvz8FD3ACFDvA4g4fPqyGDRvGhA4A8Epq1Kghw4cPl1KlSlHwAAuj2AEWdfr0aTV06FBeigIAiBc1atSQUaNGSYkSJSh4gAVR7ACLOXfunBo%2BfLgsWrRIYmNjdccBADgRwzCkXr168tVXX0mRIkUoeICFUOwAi7h%2B%2Fbr6%2FPPPZcGCBRQ6AECCcnFxkfbt28vQoUMla9asFDzAAih2gMk9fPhQff311zJu3DiJjIzUHQcAYCPu7u7SsWNHGTZsmKRLl46CB5gYxQ4wqadPn6oJEybIyJEjJTQ0VHccAICNeXl5yfvvvy8BAQGSJEkSCh5gQhQ7wGTi4uLUggUL5OOPP5Zbt27pjgMAwB8yZ84sn3%2F%2BuXTu3FlcXV0peICJUOwAE1m%2Ffr366KOP5Ny5c7qjAADwtwoUKCCjR4%2BWunXrUu4Ak6DYASZw9uxZNWDAANm0aZPuKAAAvLDq1avLt99%2Byxs0ARNw6A4A2NmDBw9Uv379VOHChSl1AADL2bFjhxQvXlzat2%2Bv7t69y7QA0IiJHaBBdHS0mjx5snz%2B%2BecSFhamOw4AAK8tWbJkMmDAABk4cKB4enoywQMSGcUOSGTLli1TH330kQQHB%2BuOAgBAvPP19ZXRo0dLkyZNKHdAIqLYAYnk%2FPnzql%2B%2FfvLDDz%2FojgIAQIKrWrWqjB8%2FXgoVKkTBAxIBv7EDElhoaKgaOHCgKlKkCKUOAGAbO3fulOLFi0u%2Ffv3Uo0ePmCQACYyJHZBAlFJq%2Fvz58tFHH8ndu3d1xwEAQJvUqVPLZ599Jn369BGHw8EED0gAFDsgARw6dEj16dNHjhw5ojsKYEoOh0NSpkwpKVOmFB8fnz%2F%2B%2BZ%2F%2FuLu7S8qUKcXNzU2SJ08uSZIkEU9PT%2FHy8hJXV1fx8fH5439XihQp%2Fuf%2FjeTJk4ubm9tfDpDPnj1T4eHh%2F%2FN%2FNzQ0VP6zH4aEhEhMTIw8fvxYIiMjJSIiQsLDw%2BXZs2cSGhoq0dHREhoa%2Bj9%2FQkJC%2FvjncXFxuv8tBkypbNmyMmHCBClZsiTlDohnFDsgHoWEhKhPPvlEpk2bxsEOtpM6dWpJnz69pE2bVjJmzCjp0qWTtGnTSqZMmSRt2rSSLl06yZgxo6RMmVK8vb2d%2BlAXFhamQkJC5Pbt23L%2F%2Fn25d%2B%2Fec%2F%2F53bt35ddff9UdF0hULi4u0rNnT%2Fnyyy8lRYoUTr0WAImJYgfEk%2BXLl6s%2Bffpw7RJOydPTUzJlyiQ5cuSQjBkz%2Fs8%2Fz5Mnj3h5eXFAewVRUVHq5s2bcuvWLbl9%2B7ZcuXLlL%2F%2F88uXLEhoaqjsmEO8yZMggo0aNkvbt27N2APGAYge8pgsXLqiePXvKjz%2F%2BqDsK8FoyZMgguXLl%2BuNPzpw5%2F%2FhHHx8fDl4ahYSEqEuXLsnly5fl0qVLf%2Fy5fPmy3LlzR3c84LXUqlVLJk6cKLly5WKdAV4DxQ54RZGRkWrEiBEyatQoiYqK0h0HeCGenp6SL18%2ByZ8%2FvxQqVEjy5s37R3lLnjw5hyoLCg8P%2F6P0nTt3Tk6fPi1nz56Vs2fPsjbBMjw9PeXjjz%2BWgIAA8fDwYC0CXgHFDngFO3fuVN27d5eLFy%2FqjgI8V5IkSSR%2F%2FvxSoEABKViwoOTPn18KFiwovr6%2B4uLiwqHJBmJjY9XVq1fl1KlTcvbs2T8K35kzZyQyMlJ3POC58ubNK9OmTZNKlSqxTgEviWIHvIRHjx6pzz%2F%2FXL7%2F%2FntejgLT8Pb2lsKFC4ufn5%2F4%2BflJwYIFpXDhwuLu7s7BCP8jNjZWnTt3Ts6cOSOnT5%2BWoKAgOXjwoDx48EB3NEBERAzDkLZt28rYsWMlVapUrGPAC6LYAS9o5cqVqk%2BfPnL79m3dUWBjqVOnljJlykjx4sX%2F%2BJMjRw4OPnhtV65cUcePH5fjx4%2FLsWPH5PDhw7yxE1plzpxZJk6cKI0aNWKNA14AxQ74F3fu3FF9%2BvSRFStW6I4Cm3F1dZU8efKIn5%2BfVKhQQfz9%2FaVAgQJiGAaHHCSKW7duqX379klgYKAEBQXJ0aNH%2Bd0eEl39%2BvVlypQpkjlzZtY%2B4B9Q7IC%2FoZRS06dPl48%2B%2BkgePXqkOw5sIGPGjFKxYkUpU6aMlClTRvz8%2FMTT05ODDEwjIiJCHTt2TA4dOiQHDhyQwMBA3sqJROHj4yPffPONdOzYkYdbwN%2Bg2AHPERwcrLp27Srbt2%2FXHQVOLGPGjH9M4ipUqCAlSpTgwALLuXLligoMDJR9%2B%2FbJtm3b5OrVq7ojwYnVrl1bpk%2BfLlmzZmWtBP4LxQ74E6WUmjFjhgwYMEDCwsJ0x4GTyZ07t1SqVEkqVaoklStXluzZs3MwgdO5du2a2rNnj%2BzevVv27Nkjly5d0h0JTiZlypTy3XffSceOHVlDgT%2Bh2AG%2Fu337turevbusX79edxQ4iTRp0kjVqlWlRo0aUrt2bYocbOnOnTtq7969sn37dtmwYYPcunVLdyQ4iTp16sj06dMlS5YsrK2AUOwAERFZvny56tGjhzx8%2BFB3FFiYq6urFC1aVOrXry8NGjSQ4sWLi8Ph4MAB%2FMnp06fVhg0bZPv27RIYGMg39fBaUqRIIV9%2F%2FbV069aNtRa2R7GDrd2%2BfVt17dpVNm3apDsKLCpnzpxSv359efPNN6VSpUqSJEkSDhfAC3r69Knas2ePbN68WTZs2CBXrlzRHQkW1bBhQ5k2bZqkT5%2BeNRi2RbGDba1atUp1796dj%2FLipbi4uEixYsX%2BmMr5%2BflxiADiyZUrV9T69etlw4YNsnv3bnn27JnuSLCQtGnTyrRp06Rx48asy7Alih1sJywsTH344Ycybdo03VFgET4%2BPlKjRg2pUaOGNGrUiCfCQCJ4%2BPCh2rFjh%2Fyn6IWEhOiOBIto166dTJo0SZInT85aDVuh2MFW9u7dq9q3by%2FXrl3THQUmlzFjRmncuLE0adJEKleuLK6urhwQAE1iYmLUrl27ZOXKlbJmzRq%2BnYd%2FlTNnTpk%2Ff76UK1eOtRu2QbGDLTx79kx99dVX8uWXX0psbKzuODCpbNmySePGjaVBgwZSpUoVyhxgQnFxcWr%2F%2Fv2yYcMGWblyJZ9TwN9ycXGRAQMGyBdffCHu7u6s53B6FDs4vXPnzqnWrVvL8ePHdUeBCeXOnVuaNGkiTZo0ET8%2FPz4QDliIUkodOXJEVq1aRcnD3ypZsqQsWrRIcufOzfoOp0axg1ObN2%2Be6tWrl4SHh%2BuOAhPJlCmTNG3aVJo1ayb%2B%2Fv6UOcBJnD59Ws2fP1%2FmzZsnt2%2Ff1h0HJuLl5SVjxozhswhwahQ7OKWwsDDVs2dPWbRoke4oMIkUKVJIw4YNpVmzZvLmm29yzRJwYv%2B5rrl8%2BXJZtGgRbz%2FGH5o2bSrTp0%2BXlClTsgfA6VDs4HSOHDmiWrVqJZcvX9YdBZp5eHhIzZo1pVmzZtK0aVNJmjQpGzlgM1FRUWrr1q2yfPlyWbVqlTx58kR3JGiWPXt2WbRokZQvX549AU6FYgenoZRS48ePlw8%2F%2FJBvH9mcn5%2BftGvXTtq2bSupU6dm4wYgIiKPHj1Sa9eulfnz58v27dt1x4FGrq6uMmjQIPn888%2FF4XCwT8ApUOzgFO7evavatGkjO3bs0B0FmmTIkEHatWsnHTt2lAIFCrBJA%2FhHp0%2BfVrNnz5YFCxbI3bt3dceBJrVq1ZL58%2BdLunTp2DdgeRQ7WN7u3btV69at5datW7qjIJG5uLhI1apVpVu3btK4cWNxc3NjYwbwUmJjY9XOnTtl2rRpsnbtWomOjtYdCYksXbp0smjRIqlevTp7CCyNYgfLiouLU8OHD5chQ4bwbTqbyZ07t3Tv3l3at28vadOmZSMGEC%2Fu3bun5s2bJ1OnTuXTCTbj6uoqX375pXz00Ue8KRmWRbGDJT148EC1b99eNm%2FerDsKEonD4ZBq1apJ3759pX79%2Bmy8ABKMUkrt2LFDpk2bJmvWrOF32zZSr149mTdvnqRKlYo9BpZDsYPlHD58WLVo0UKuXbumOwoSQcaMGaV9%2B%2Fby7rvvSrZs2dhoASSq27dvq3nz5snkyZMlODhYdxwkgqxZs8qSJUt4ayYsh2IHy1BKqW%2B%2B%2BUY%2B%2FvhjiYmJ0R0HCcgwDKlZs6b07NlT6tevzzfnAGgXExOj1q9fL5MnT5bt27cL5yfn5u7uLqNHj5a%2Bffuy%2F8AyKHawhPDwcNW5c2dZvny57ihIQJ6entKsWTMJCAiQggULspkCMKWLFy%2Bq77%2F%2FXmbOnMl38Zxcq1atZPr06ZIsWTL2JJgexQ6md%2FHiRfX222%2FLqVOndEdBAsmYMaN069ZN%2BvTpw3fnAFjGo0eP1Jw5c%2BTbb7%2BV69ev646DBJIvXz5ZvXq15MuXj%2F0Jpkaxg6mtX79etW%2FfXkJDQ3VHQQLw8%2FOTvn37SqtWrfhUAQDLiouLUxs3bpTx48fz4XMn5e3tLXPmzJG33nqLvQqmRbGDKcXGxqpPP%2F1URo0axe8YnIyLi4s0a9ZM3n%2F%2FfSlVqhQbJACncujQIfXtt9%2FKypUr%2BRSPk3E4HPLZZ5%2FJ559%2FLg6Hg%2F0LpkOxg%2Bn8%2BuuvqlWrVrJt2zbdURCPPD09pWPHjjJgwADJmTMnGyIAp3bp0iU1evRomTt3rkRFRemOg3hUt25dWbhwoaRMmZK9DKZCsYOpnD9%2FXjVq1EjOnz%2BvOwriiZeXl3Tq1EkCAgIkU6ZMbIIAbOXevXtq0qRJMn78eAkJCdEdB%2FEkV65csnbtWilQoAD7GkyDYgfT2LRpk2rdurU8evRIdxTEg3Tp0knPnj3lvffe46kmANt7%2FPixmjVrlowePVpu3rypOw7igZeXlyxYsEAaNmzIHgdToNhBO6WU%2Buqrr2Tw4MESFxenOw5ek6%2BvrwwcOFA6dOggHh4ebHYA8CeRkZFqzpw5MnLkSD547gRcXFxkxIgR8uGHH7LfQTuKHbSKjIxU77zzjixYsEB3FLym7NmzS%2F%2F%2B%2FaVHjx4UOgD4F8%2BePVOLFy%2BWYcOGyaVLl3THwWtq2bKlzJw5U5ImTcr%2BB20odtAmODhYNW7cWE6cOKE7Cl5Drly5ZNCgQdK2bVtxdXVlQwOAl%2FDs2TM1b948GT58uFy5ckV3HLyG0qVLy%2BrVq%2Fk9ObSh2EGLQ4cOqUaNGsndu3d1R8Er%2Bs%2BVy86dO1PoAOA1xcXFqZUrV8qnn34qFy5c0B0Hryhjxoyybt06KVmyJPsiEp1DdwDYz9KlS1WVKlUodRaVM2dOmTdvnly8eFG6detmUOoA4PU5HA6jWbNmxunTp2XOnDni6%2BurOxJewe3bt6VKlSqyZs0aJidIdBQ7JKpx48ap1q1bS2RkpO4oeElp06aVkSNHyunTp6Vdu3aGi4sLhQ4A4pmrq6vRoUMH4%2Fz58zJ16lTJmDGj7kh4SU%2BePJG3335bhgwZQrlDouIqJhJFdHS0euedd2TevHm6o%2BAl%2Bfj4SN%2B%2BfeWDDz4QLy8vyhwAJKKnT5%2BqCRMmyKhRo%2FgOngV16dJFJk%2BeLG5ubuyfSHAUOyS4hw8fqiZNmsiuXbt0R8FLSJo0qfTp00cCAgLEx8eHDQkANAoJCVHjxo2Tb7%2F9Vh4%2Ffqw7Dl5C9erVZcWKFXzTFQmOYocEdfHiRVW3bl1e5Wwhbm5u0r17dxk0aJBkyJCBTQgATOT27dtq2LBhMmPGDHn27JnuOHhB%2BfLlk02bNomvry%2F7KhIMxQ4J5tChQ6pBgwZy%2F%2F593VHwgmrUqCFjx46VggULsvEAgIlduHBBffrpp7J8%2BXLdUfCC0qdPLxs2bOCNmUgwvDwFCWLNmjWqWrVqlDqL8PPzk127dsm2bdsMSh0AmF%2BePHmMZcuWGfv375dy5crpjoMXcPfuXalSpYps2LCBqQoSBMUO8W7ChAmqadOm8vTpU91R8C%2ByZMkiU6dOlcOHD0vlypUpdABgMeXKlTP27dsny5YtkzfeeEN3HPyLJ0%2BeSOPGjWXKlCmUO8Q7rmIi3iil1NChQ2Xo0KG6o%2BBfJEuWTAYMGCABAQGSJEkSCh0AOIH%2FvEFz%2BPDhEhYWpjsO%2FkVAQICMGDFCDMNgH0a8oNghXkRFRakOHTrI0qVLdUfBP3A4HNKpUycZPny4pEuXjo0EAJzQnTt31MCBA2XevHnCOc%2FcOnXqJFOnTuVzCIgXFDu8tvDwcNWkSRPZunWr7ij4ByVKlJDvv%2F9eypUrx%2BYBADZw9OhR1adPHzl48KDuKPgHNWrUkNWrV0vy5MnZn%2FFa%2BI0dXsvDhw9VzZo1KXUmlipVKhk7dqwcPnyYUgcANlKyZElj3759MnfuXEmXLp3uOPgb27dvl%2BrVq8uDBw%2BYtuC1MLHDKwsODla1a9eW8%2BfP646C53B1dZXOnTvLV199JWnSpKHQAYCNhYSEqCFDhsjEiRMlNjZWdxw8R4ECBeSHH36QLFmysGfjlVDs8EpOnz6tateuLTdv3tQdBc9RuXJlmTBhghQuXJjNAQDwhxMnTqg%2BffpIYGCg7ih4jjfeeEO2bt0quXPnZv%2FGS%2BMqJl7akSNHVJUqVSh1JpQqVSqZOnWq7Ny5k1IHAPgfxYoVM%2Fbs2SNz586VtGnT6o6D%2F3Lt2jUpV66cHDp0iMkLXhrFDi9ly5YtqmrVqvLgwQPdUfAnhmFI586d5cKFC9KtWzeDVycDAP6OYRhG%2B%2FbtjTNnzkiHDh2ELcNcfv31V6lVq5bs2rWLcoeXwlVMvLB169ap5s2bS1RUlO4o%2BJPcuXPLpEmTpEaNGuzMAICXtmfPHtWzZ085c%2BaM7ij4Ew8PD1myZIk0btyY%2FR0vhIkdXsiiRYtUkyZNKHUm4unpKYMHD5aff%2F6ZUgcAeGWVKlUyTpw4ISNHjhRPT0%2FdcfC7qKgoadGihSxfvpwpDF4IEzv8qylTpqhevXpJXFyc7ij4XfXq1WXy5Mn8uBoAEK%2FOnz%2BvevToIbt27dIdBb9zcXGRWbNmSfv27dnz8Y%2BY2OEfff%2F99%2Brdd9%2Bl1JmEt7e3TJ06VbZt20apAwDEu7x58xo%2F%2FvijTJ06Vby9vXXHgYjExsZKx44dZdy4cUxj8I%2BY2OFvjRo1Sg0cOFB3DPyuTp06Mm3aNMmaNSuFDgCQ4G7fvq169Ogh69at0x0Fv%2Fviiy%2Fks88%2B4xyA52Jih%2BcaMGAApc4kfHx8ZM6cObJ582aDUgcASCwZM2Y01q5da8yaNUtSpkypOw5E5PPPP5chQ4YwlcFzMbHDXyil1Pvvvy9jx47VHQUiUrduXZk6dapkyZKFQgcA0ObOnTvq3XffldWrV%2BuOAhH56KOPZNSoUZwN8BdM7PAHpZR67733KHUmkCZNGlm0aJFs3LjRoNQBAHTLkCGDsWrVKmPBggWSOnVq3XFs7%2Buvv5aPP%2F6Y6Qz%2BgokdROT%2FS9348eN1R7G9WrVqyaxZsyRz5swUOgCA6dy9e1e98847sn79et1RbO%2BDDz6QMWPGcF6AiDCxg%2FxW6vr27Uup0yxJkiQyduxY2bJlC6UOAGBa6dOnN9atW2fMnTtXkidPrjuOrX3zzTfywQcfMKWBiDCxsz2llOrTp49MnDhRdxRbK1OmjMybN0%2Fy5MlDoQMAWMbVq1dV%2B%2FbtJTAwUHcUW%2BvRo4dMmjRJDMPgHGFjTOxsTCmlevbsSanTyM3NTb788kvZt28fpQ4AYDm%2Bvr7Gzp075YsvvhA3NzfdcWxrypQp0r9%2Ff90xoBkTO5v6z%2FXL77%2F%2FXncU28qfP7%2FMnz9f%2FPz8KHQAAMv76aefVLt27eSnn37SHcW23nvvPfnuu%2B84V9gUEzub%2Bvjjjyl1GrVr106OHj1KqQMAOI0iRYoYhw4dkr59%2B%2BqOYltjx46VDz%2F8kKmNTTGxs6FBgwap4cOH645hSylSpJCpU6dKixYtKHQAAKe1evVq1bVrV3n48KHuKLY0bNgw%2BfTTTzlr2AzFzmYGDx6svvjiC90xbKlMmTKyePFi8fX1ZaEFADi969evqzZt2vBiFU2GDx8uH3%2F8MWcOG%2BEqpo188803lDoNHA6H9O3bV%2Fbu3UupAwDYRrZs2YydO3fK4MGDxcXFRXcc2%2Fnkk0%2Fk66%2B%2FZoJjI0zsbOLbb79VH3zwge4YtpMlSxZZsGCBVK5cmUIHALCtH3%2F8UbVr105u3bqlO4qtGIYhkyZNkh49enAOsQGKnQ3MmDFDdevWTfjPOnHVq1dP5s6dK6lTp2YxBQDY3v3791X79u1ly5YtuqPYisPhkHnz5kmbNm04jzg5rmI6udWrV6sePXpQ6hKRi4uLDB48WNatW0epAwDgd2nTpjU2bdokI0eO5GpmIoqLi5MOHTrIypUrOQw6OSZ2Tmzbtm2qQYMGEhUVpTuKbaRNm1YWLlwoNWvWpNABAPA3du3apVq1aiV37tzRHcU23N3dZf369VKrVi3OKE6KYuekDhw4oGrWrClPnjzRHcU2KlasKEuWLJFMmTKxYAIA8C9u3rypWrRoIfv27dMdxTaSJUsmW7dulfLly3NWcUJcxXRCJ0%2BeVPXq1aPUJRLDMKRv376yY8cOSh0AAC8oc%2BbMxq5duyQgIEAMg%2B0zMTx58kTq1asnJ06cYLLjhJjYOZnz58%2BrihUryv3793VHsYUUKVLInDlzpHHjxuxIAAC8opUrV6rOnTtLWFiY7ii2kClTJgkMDOQzTE6GYudEbt26pfz9%2FeXatWu6o9hCnjx5ZM2aNZI%2Ff34WRQAAXtPFixdV48aN5cyZM7qj2ELOnDll3759kj59es4xToKrmE4iLCxM1atXj1KXSOrVqyeHDx%2Bm1AEAEE9y585tHDx4UBo3bqw7ii1cvnxZ6tevL%2BHh4Ux5nATFzglER0erJk2ayIkTJ3RHcXqGYUhAQIAllUrMAAA3IUlEQVSsW7dOUqRIQakDACAeeXl5GatWrZKRI0eKw8ExNaEdPXpUGjVqJFFRUZQ7J8BVTIuLi4tTLVq0kBUrVuiO4vSSJ08uc%2BfOlbfffptCBwBAAtuwYYNq27atPHr0SHcUp9eqVStZsGCBOBwOzjgWxqMQi%2Bvfvz%2BlLhHkypVLDhw4QKkDACCR1K9f3zh06JDky5dPdxSnt3jxYgkICNAdA6%2BJYmdhw4YNU%2BPHj9cdw%2BnVrl1bDh8%2BLIUKFaLUAQCQiPLmzWvs27dPatasqTuK0xszZox8%2B%2B23XOWzMK5iWtTixYtVmzZthP%2F8Ela3bt3k%2B%2B%2B%2FFzc3N0odAACaxMbGqv79%2B8uECRN0R3FqhmHI%2FPnzpU2bNpx7LIhiZ0G7d%2B9WtWvXlqioKN1RnJaLi4t8%2B%2B230rdvXxY2AABMYtq0aapXr14SExOjO4rT8vT0lO3bt4u%2Fvz9nIIuh2FnMmTNnVIUKFSQkJER3FKfl5eUlixYtkvr167OgAQBgMj%2F88INq0aIFL1VJQKlTp5b9%2B%2FdLnjx5OAtZCMXOQu7cuaPKli0rwcHBuqM4LV9fX1m%2Ffr0ULFiQhQwAAJM6deqUatCgAd%2FvTUA5cuSQAwcOSLp06TgTWQQvT7GIiIgI1bhxY0pdAipbtqwcOHCAUgcAgMkVKlTIOHLkiFSsWFF3FKd15coVadCggTx9%2BpQpkEVQ7CwgNjZWtWjRQg4dOqQ7itNq3bq17Nq1S9KnT0%2BpAwDAAtKkSWP88MMP0qxZM91RnNbhw4elc%2BfOorjiZwkUOwt4%2F%2F33Zf369bpjOK2PPvpIFixYIB4eHpQ6AAAsJEmSJMaSJUukf%2F%2F%2BuqM4raVLl8qgQYN0x8AL4Dd2Jjdr1izVpUsX3TGckmEY8vXXX8uAAQModAAAWNy4cePU%2B%2B%2B%2FL3FxcbqjOKV58%2BZJu3btODOZGMXOxPbs2aNq1qwp0dHRuqM4HQ8PD5k3b540b96cBQoAACexatUq1bZtW4mIiNAdxem4u7vL1q1bpXLlypydTIpiZ1JXrlxRZcqUkQcPHuiO4nR8fHxk7dq1UrFiRRYmAACczIEDB1TDhg05QyWANGnSyKFDhyRHjhycoUyIYmdCYWFhqly5cnLmzBndUZxO9uzZZfPmzZI%2Ff34WJAAAnNSZM2fUm2%2B%2BKdevX9cdxekUKFBADhw4IN7e3pylTIaXp5hMTEyMatKkCaUuARQtWlT2799PqQMAwMkVKFDA2L9%2FvxQqVEh3FKdz5swZadeuncTFxTEdMhmKncn07dtXtm%2FfrjuG0%2FH395ddu3ZJpkyZKHUAANhA5syZjd27d0vZsmV1R3E669atk48%2F%2Flh3DPwXrmKayNSpU1WPHj10x3A61apVk7Vr10ry5MkpdQAA2MyTJ09UkyZN5IcfftAdxenMnj1bOnbsyPnKJCh2JnHgwAFVtWpViYqK0h3FqTRu3FiWLFnCN%2BoAALCx6Oho1bZtW1m%2BfLnuKE7F09NT9u7dKyVLluScZQJcxTSBO3fuqGbNmlHq4lmHDh1k%2BfLllDoAAGzO3d3dWLx4sbzzzju6oziVyMhIadKkidy%2Ff59JkQlQ7DR79uyZatasmdy8eVN3FKcSEBAgs2fPFldXV0odAAAQFxcXY%2BrUqfLRRx%2FpjuJUrl%2B%2FLm%2B%2F%2FbZER0dT7jSj2GnWs2dPCQwM1B3DaRiGIaNGjZKRI0cahmFQ6gAAwB8MwzBGjRplDB8%2BXHcUpxIYGEhhNgF%2BY6fRxIkTVe%2FevXXHcBqGYch3330n%2Ffr1o9ABAIB%2FNHnyZNWrVy%2FhLBx%2FZsyYIV26dOEcpgnFTpN9%2B%2FapqlWryrNnz3RHcQqGYcjkyZOle%2FfuLCYAAOCFTJo0SfXu3ZtyF088PT0lMDBQ%2FPz8OI9pQLHT4N69e6pEiRL8ri6eGIYhEydOlJ49e7KIAACAlzJz5kzVrVs3iYuL0x3FKWTLlk2CgoIkTZo0nMsSGb%2BxS2SxsbGqbdu2lLp44uLiIrNnz6bUAQCAV9KlSxdjwYIF4urqqjuKU7h%2B%2Fbp06NBB4uLimB4lMopdIhs0aJBs27ZNdwyn8J9S16FDB0odAAB4Za1ataLcxaNNmzYJL6hJfFzFTETr169XjRo14h53PHBxcZF58%2BZJ69atKXUAACBerFixQrVu3Zp3IMQDh8MhmzZtktq1a3NWSyQUu0Ry%2BfJlVbJkSQkNDdUdxfJcXV1l6dKl8vbbb7NQAACAeLVy5UrVsmVLiYmJ0R3F8tKmTStBQUGSNWtWzmyJgKuYiSAyMlI1b96cUhcPXFxcZO7cuZQ6AACQIJo0aWIsXryYa5nx4P79%2B9K0aVM%2BXp5IKHaJoE%2BfPnLs2DHdMSzvP6WO65cAACAhNW3a1Jg1a5Y4HByVX9fhw4clICBAdwxb4CpmAlu2bJlq0aKF7hiWZxiGTJkyRbp160apAwAAiWLOnDmqS5cufArhNRmGIatWrZLGjRtzjktAFLsEdOnSJeXn5ydhYWG6o1ga36kDAAC6zJw5U73zzju8%2FO41%2Bfj4yLFjx%2BSNN97gPJdAmC8nkKioKNWiRQtK3WsyDEMmTJhAqQMAAFp06dLFGDdunO4YlhcSEiItWrSQZ8%2Be0ZATCMUugQwYMIDf1cWDb7%2F9Vnr16kWpAwAA2vTp08cYM2aM7hiWd%2FjwYfnss890x3BaXMVMABs2bFANGzZkZP%2Bahg4dKp9%2F%2FjmlDgAAmMLnn3%2Buhg0bpjuGpRmGIWvXrpUGDRpwxotnFLt4du3aNVWiRAkJCQnRHcXS%2BvXrJ2PHjuUvPAAAMJXevXuriRMn6o5haWnTppUTJ05IpkyZOOvFI65ixqO4uDjVsWNHSt1ratu2rXz77be6YwAAAPyPCRMmSKdOnXTHsLT79%2B9L69atJS4ujglTPKLYxaMvvvhCdu%2FerTuGpTVs2FBmz54tDoeDJzgAAMB0DMMwpk%2BfLm%2B%2F%2FbbuKJa2e%2FduHuTHM65ixpPDhw%2BrChUqyLNnz3RHsayqVavKpk2bxNPTk1IHAABMLSIiQr355ps81H8Nbm5usm%2FfPilVqhRnv3hAsYsHjx49UsWLF5erV6%2FqjmJZpUqVkh07doiXlxd%2FsQEAgCWEhYWpatWqSVBQkO4olpUrVy45fvy4JE%2BenDPga%2BIqZjzo1asXpe415M2bVzZt2kSpAwAAluLt7W1s3rxZcufOrTuKZV26dEkGDBigO4ZTYGL3mhYsWKDatWunO4ZlpU2bVvbv3y%2B5cuWi1P1fe3ceH1V97nH8OTPZNyDBRCRsAgkBARMIhHDVgiBiAS0YEBCRaq%2B4oL5orXprrVK1Vq%2B92irSwkUEK4UI1IKIclFE9gBBICwJi0BYDbKEbCSTc%2F8QLSDLJJnJc86cz%2Fu%2FYjLzPZNJX79vnt%2F5DQAAsKU9e%2FaYPXr0kCNHjmhHsa3Zs2dLVlYW68E6oNjVwZ49e8zrr79eTp06pR3FlqKjo2Xp0qWSlpbGLzEAALC1nJwcs1evXlJSUqIdxZYaN24smzZtkiZNmrAurCW2YtZSdXW1OWbMGEpdLQUHB0t2djalDgAABIT09HQjOztbgoKCtKPYUlFRkYwePVpMpk61RrGrpT%2F96U%2BcglRLhmHI3%2F72N%2BnXrx%2BlDgAABIz%2B%2Ffsb77zzjhgGS5zaWLx4sUyePFk7hm2xFbMWtm3bZnbp0kXKysq0o9jSiy%2B%2BKP%2F1X%2F%2FF%2F%2BMBAICA9Pzzz5vPPfecdgxbioyMlI0bN3L%2BQi1Q7GqoqqrKzMzMlJycHO0otvSf%2F%2Fmf8te%2F%2FpVfVAAAENAeeeQR86233tKOYUs9e%2FaUL774QtxuN2vGGmArZg39%2Fve%2Fp9TV0m233SYTJ07UjgEAAOB3r7%2F%2BuvTr1087hi2tWLFC%2Fud%2F%2Fkc7hu0wsauBDRs2mBkZGVJZWakdxXbat28vK1eulAYNGvCXFwAA4AjFxcVmz549ZfPmzdpRbCc0NFRycnKkY8eOrB29RLHzUllZmZmWlibbt2%2FXjmI7CQkJsmbNGmnRogW%2FmAAAwFH27Nljdu%2FeXb755hvtKLaTlpYmq1evluDgYNaQXmArppeeffZZSl0thIWFybx58yh1AADAkVq1amX885%2F%2FlNDQUO0otrNhwwZ5%2BeWXtWPYBhM7L6xdu9bMzMwUj8ejHcVWDMOQGTNmyMiRIyl1AADA0WbPnm3eddddwtq7ZkJCQmTdunVsyfQCE7srqKioMO%2B77z5KXS387ne%2Fo9QBAACIyNChQ41nnnlGO4btnDlzRkaPHi2VlZU04iug2F3BhAkTZMuWLdoxbCcrK0ueffZZ7RgAAACW8fzzz8uIESO0Y9hObm4up2R6ga2Yl5Gbm2t269ZNqqqqtKPYSnp6uixbtkzCwsKY1gEAAJyjrKzMvOGGG2T9%2BvXaUWwlLCxMNm7cKMnJyawvL4FidwlVVVVm9%2B7dZcOGDdpRbCUhIUHWrVsniYmJ%2FNIBAABcxP79%2B82uXbvK0aNHtaPYSkZGhixfvpwPLr8EtmJewksvvUSpq6GQkBD54IMPKHUAAACX0axZM2P27NkSHBysHcVWVq9eLW%2B%2B%2BaZ2DMtiYncR%2Bfn5ZufOnaW8vFw7iq1MmjRJHnjgAUodAACAF958801z3Lhx2jFsJSIiQrZs2SKtWrVizXkBJnYXME3TfPDBByl1NXTvvfdS6gAAAGrgkUceMe6%2F%2F37tGLZSWloqDz%2F8sHYMS2Jid4EpU6aYv%2FjFL7Rj2EqPHj3k888%2Fl9DQUIodAABADVRWVpq9e%2FeW5cuXa0exldmzZ0tWVhZrz3NQ7M5RVFRkpqSkSFFRkXYU22jSpImsW7dOrrnmGn6xAAAAauHw4cNm165d5cCBA9pRbOPqq6%2BWrVu3SqNGjViDnsVWzHM8%2BuijlLoaCAkJkblz51LqAAAA6uDqq682Zs2axWEqNXD48GF5%2BumntWNYCsXurE8%2B%2BcScOXOmdgxbee211yQjI4NSBwAAUEc9e%2FY0Xn75Ze0YtjJ58mRZvnw52w%2FPYiumiJSWlprXXXed7NmzRzuKbQwbNkz%2B8Y9%2FUOoAAAB8xDRN884775S5c%2BdqR7GN9u3bS25uroSEhDh%2BXcrETkReeOEFSl0NJCUlyd%2F%2B9jftGAAAAAHFMAxj2rRp0q5dO%2B0otrF161b505%2F%2BpB3DEhw%2FsSsoKDA7duwoFRUV2lFsITIyUtasWSMdOnRw%2FF9FAAAA%2FGHz5s1mRkaGlJaWakexhYiICMnLy5OWLVs6en3q%2BIndo48%2BSqmrgbfeeotSBwAA4EcdO3Y02B3lvdLSUvnlL3%2BpHUOdo4vdrFmzzEWLFmnHsI2xY8fK6NGjKXUAAAB%2BNnLkSOPnP%2F%2B5dgzbmDt3rixcuNDRWxEduxWzuLjYTElJ4fNCvJSWliYrVqyQsLAwih0AAEA9KCsrMzMyMmTTpk3aUWyhTZs2snnzZseuVx07sXvuuecodV6KjIyUv%2F%2F97479JQEAANAQHh5ufPDBBxIVFaUdxRZ27twpr776qnYMNY6c2OXl5ZmpqalSWVmpHcUW3n33XbnnnnsodQAAAAqmTJli%2FuIXv9COYQvh4eGyZcsWufbaax23dnXkxO6RRx6h1Hlp5MiRlDoAAABF999%2FvzF06FDtGLZQVlYm48eP146hwnETu%2BzsbJNfDO%2B0bt1aNmzYIDExMRQ7AAAARSdPnjRTU1P57GUvLVq0SPr16%2BeoNayjil15ebmZkpIiX3%2F9tXYUywsODpZly5ZJRkaGo34hAAAArConJ8fs2bMnO8%2B8kJKSIl999ZUEBwc7Zi3rqK2Yr776KqXOS3%2F4wx8odQAAABaSnp5uPP%2F889oxbGHbtm0yadIk7Rj1yjETuwMHDpjt2rWT06dPa0exvFtvvVUWLlwohmFQ7AAAACykurravOWWW2TJkiXaUSwvNjZW8vPzJS4uzhFrWsdM7J566ilKnRcaN24sU6dOpdQBAABYkMvlMqZPny6xsbHaUSzv22%2B%2Fld%2F97nfaMeqNIyZ2q1evNjMzM8UJ11pXs2fPlqysLEodAACAhc2dO9ccMmSIdgzLc7vdsmHDBunUqVPAr28DfmJnmqb5%2BOOPU%2Bq8MGrUKEodAACADQwePNgYPny4dgzL83g88stf%2FlI7Rr0I%2BIndzJkzzREjRmjHsLzExETZtGmTNGrUiGIHAABgAydOnDA7d%2B4s%2B%2Fbt045ieR999JHcdtttAb3ODehid%2BbMGbN9%2B%2Faya9cu7SiW5nK5ZPHixdK7d%2B%2BAfrMDAAAEmiVLlph9%2B%2FZld9oVpKSkyKZNmyQoKChg17sBvRXzz3%2F%2BM6XOC48%2F%2FjilDgAAwIZuvvlmY9y4cdoxLG%2Fbtm3yzjvvaMfwq4Cd2B0%2Fftxs06aNfPvtt9pRLC0lJUXWr18v4eHhFDsAAAAbKi8vN9PT02XLli3aUSwtPj5edu7cKdHR0QG57g3Yid3vf%2F97St0VBAUFyXvvvUepAwAAsLGwsDBj6tSpEhQUpB3F0o4ePSqvvfaadgy%2FCchit2fPHnPixInaMSzvqaeekrS0NEodAACAzaWnpxtOOf2xLl555RUpLCwMyC2LAbkVc%2BjQoWZ2drZ2DEvr0KGDrF%2B%2FXkJDQyl2AAAAAaC8vNxMTU2V7du3a0extPvvv18mT54ccGvggCt269atM7t168bJQJfhcrnkyy%2B%2FlMzMzIB7QwMAADjZ6tWrzf%2F4j%2F8Qj8ejHcWy3G63bNq0Sdq3bx9Qa%2BGA24r59NNPU%2Bqu4Fe%2F%2BhWlDgAAIABlZGQYjz76qHYMS%2FN4PPLss89qx%2FC5gJrYLVu2zLzpppu0Y1haUlKSbNy4kQNTAAAAAlRpaal5%2FfXXS0FBgXYUyzIMQ1atWiXdu3cPmDVxQE3snnrqKe0IluZyuWTKlCmUOgAAgAAWERFhTJs2TVyugFrq%2B5RpmvLb3%2F5WO4ZPBcxP%2B5%2F%2F%2FKe5atUq7RiWNm7cOLnhhhsodQAAAAEuMzPTGDt2rHYMS1u8eLF89tlnAbN9MSC2YlZXV5tpaWny1VdfaUexrObNm0teXp5ERUVR7AAAAByguLjYbN%2B%2BvRQWFmpHsaz09HRZs2aNGIZh%2BzVyQEzs%2Fv73v1PqruAvf%2FkLpQ4AAMBBoqOjjTfeeEM7hqXl5OTIhx9%2BqB3DJ2w%2FsausrDTbtWsnu3fv1o5iWYMHD5Y5c%2BZQ6gAAABxo0KBB5vz587VjWNZ1110nX331lbhcLluvl20%2FsZs2bRql7jKio6OFv9QAAAA415tvvilRUVHaMSxry5Ytkp2drR2jzmxd7CorK80%2F%2FOEP2jEs7cUXX5TExERb%2F%2FUBAAAAtde8eXPjueee045haRMmTJDq6mpbb2W0dbGbOnWq7NmzRzuGZXXt2lUeeugh7RgAAABQ9vjjj0tqaqp2DMvaunWrzJ49WztGndj2HrvKykozKSlJvv76a%2B0oluR2u2Xt2rWSlpbGtA4AAACSk5Nj9ujRQzwej3YUS0pKSpKtW7eK2%2B225frZthO7KVOmUOou49FHH6XUAQAA4Afp6enGgw8%2BqB3DsvLz82XWrFnaMWrNlhO7M2fOmElJSbJ3717tKJaUkJAgO3bskAYNGlDsAAAA8INTp06ZycnJcvjwYe0oltS2bVvZunWrBAUF2W4dbcuJ3eTJkyl1l%2FHqq69S6gAAAPAjMTExxgsvvKAdw7IKCgpsO7Wz3cTuzJkzZuvWraWwsFA7iiVlZmbK8uXLxTAMih0AAAB%2BpLq62uzRo4esXbtWO4oltWvXTvLy8mz3uXa2m9i9%2B%2B67lLpLcLlc8vrrr1PqAAAAcEkul8uYOHGiuFy2qwL1Yvv27TJ37lztGDVmq5%2Bmx%2BMxX331Ve0YlvXAAw9Ieno6pQ4AAACX1aVLF2PMmDHaMSzrxRdfFNNmWxtttRXz%2FfffN0eOHKkdw5JiY2Nlx44d0rhxY4odAAAArujYsWNmcnKyHDt2TDuKJS1cuFD69%2B9vm7W1bSZ2pmmaL7%2F8snYMy3rxxRcpdQAAAPBaXFyc8eyzz2rHsKwJEyZoR6gR20zsPvzwQ%2FOOO%2B7QjmFJqampkpOTY9sPUwQAAICOqqoqMy0tTTZv3qwdxZKWLl0qN910ky3W2LaZ2P3xj3%2FUjmBZr7zyCqUOAAAANRYUFGS8%2Fvrr2jEs66WXXtKO4DVbFLvFixebq1at0o5hSQMHDpQ%2BffpQ6gAAAFArvXv3Nvr3768dw5I%2B%2FfRTycnJscUWR1sUO6Z1FxcUFCTcdwgAAIC6eu211yQoKEg7hiW98sor2hG8Yvlit2nTJvOzzz7TjmFJY8eOlfbt2zOtAwAAQJ2kpKQY9913n3YMS5o3b57s3LnT8lM7yxe7P%2F7xj2KXA17qU3R0tDzzzDPaMQAAABAgJkyYIDExMdoxLMfj8Ygd7kO0dLErLCw0s7OztWNY0m9%2F%2B1tJSEhgWgcAAACfiI%2BPN5588kntGJb0zjvvSFFRkaWnTZYudq%2B99ppUVlZqx7Ccli1byrhx47RjAAAAIMCMHz9eWrRooR3DckpLS%2BXtt9%2FWjnFZlv0cuxMnTpjNmzeX4uJi7SiW8%2F7778vw4cOZ1gEAAMDnZsyYYd5zzz3aMSwnPj5evv76awkPD7fkOtyyE7tJkyZR6i6iU6dOMmzYMO0YAAAACFAjR46Uzp07a8ewnKNHj8r06dO1Y1ySJSd2Z86cMVu1aiUHDx7UjmI5CxculP79%2B1vyrwQAAAAIDP%2F617%2FM22%2B%2FXTuG5SQnJ8vWrVvF5XJZbj1uyYnd7NmzKXUXccMNN1DqAAAA4HeDBg0yMjMztWNYzo4dO2TRokXaMS7KksXuL3%2F5i3YES%2BLDyAEAAFBfWHte3BtvvKEd4aIsV%2BxWrVplrl27VjuG5QwcOFAyMzOZ1gEAAKBe3HDDDcYtt9yiHcNyFi9eLNu2bbPc%2FWyWK3Z%2F%2FvOftSNYjsvlkgkTJmjHAAAAgMO89NJLYhjMFs5lmqYldxha6vCUgwcPmi1btuSz6y4wcuRIee%2B99%2FiNAgAAQL3LysoyP%2FjgA%2B0YlhIRESH79%2B%2BX2NhYy6zRLTWxe%2Fvttyl1FwgODpbnn39eOwYAAAAc6oUXXhC3260dw1JKS0tl6tSp2jHOY5liV1FRYU6ePFk7huXcc8890rp1a8v8JQAAAADOkpycbAwfPlw7huW8%2Beab4vF4LLP90TLF7h%2F%2F%2BIccOXJEO4alBAUFydNPP60dAwAAAA73zDPPMLW7wN69e2X%2B%2FPnaMX5gmWI3ceJE7QiWM2rUKKZ1AAAAUJecnGwMGzZMO4blvP3229oRfmCJw1M2btxopqamasewFLfbLVu3bpWkpCSKHQAAANQVFBSYKSkp4vF4tKNYhmEYsmPHDmnbtq36mt0SE7u33npLO4Ll3H333ZQ6AAAAWEbbtm2NoUOHasewFNM0xSrnhKhP7E6ePGk2bdpUSkpKtF8Ly3C73ZKXlyfJyckUOwAAAFjGtm3bzOuuu06qq6u1o1hGXFycFBYWSlhYmOraXX1iN336dErdBUaMGEGpAwAAgOWkpKQYWVlZ2jEs5dixY2KFz%2FlTn9h16NDB3Lp1q%2FbrYBlM6wAAAGBleXl5ZqdOnZjanaNnz56yfPly507svvjiC0rdBe68805KHQAAACyrQ4cOxh133KEdw1JWrFghubm5qhMz1WL317%2F%2BVfPpLenXv%2F61dgQAAADgsp588kntCJYzZcoU1edX24p54sQJ85prrpGysjLVF8BK%2BvXrJ4sWLWJaBwAAAMvr3bu3%2Bfnnn2vHsIwGDRrIwYMHJSIiQmU9rzaxmzFjBqXuAvzlAwAAAHbB2vV8J0%2BelHnz5qk9v1qxe%2Bedd9Qu2orS09OlV69eTOsAAABgC%2F369TPS0tK0Y1jK%2F%2F7v%2F6o9t0qx27Bhg5mbm6t20Vb01FNPaUcAAAAAauSJJ57QjmApS5culZ07d6rc66ZS7DSbrBUlJycLJwsBAADAbrKysqRt27baMSzDNE2ZNm2aynPXe7ErLy83Z86cqXKxVvXEE0%2BIy%2BViGyYAAABsxe12G%2BPHj9eOYSnTpk0Tj8dT71O7ei92c%2BbMkePHj9f301pWkyZN5O6779aOAQAAANTKvffeK1dddZV2DMs4cOCALFq0qN6ft96LHYemnO%2FBBx%2BU0NBQpnUAAACwpbCwMGPs2LHaMSxFo%2FPU6%2BfYHThwwGzRooV4PJ56v1ArCg0Nlb1790pCQgLFDgAAALZ19OhRs0WLFlJeXq4dxRJCQkLk4MGDEhcXV2%2Fr%2FHqd2M2YMYNSd467776bUgcAAADbi4%2BPN4YOHaodwzLOnDkjH3zwQb0%2BZ71O7Dp27Ghu2bKlXi%2FQyjZu3CidO3em2AEAAMD2cnNzTT7X7t969uwpy5cvD7yJ3fr16yl15%2BjduzelDgAAAAEjNTXVuPHGG7VjWMaKFSskPz%2B%2F3qZo9VbsZsyYUV9PZQuPPfaYdgQAAADAp1jjnq8%2BP%2BatXrZiVlVVmc2aNZPDhw%2FX24VZWatWraSgoEDcbjcTOwAAAAQMj8djJiUlye7du7WjWELr1q2loKBADMPw%2B7q%2FXiZ2n376KaXuHI899hilDgAAAAHH7XYbjzzyiHYMy9i1a5esWrWqXp6rXorde%2B%2B9Vy8XYweRkZEyevRo7RgAAACAX9x7770SERGhHcMy6qsL%2Bb3YlZaWmvPnz6%2BXi7GD4cOHS8OGDZnWAQAAICA1atTIGDZsmHYMy8jOzpaqqiq%2F3%2F%2Fm92K3YMECOX36tL%2BfxjbGjh2rHQEAAADwK9a8%2F1ZUVCSfffaZ35%2FH78Vu1qxZfr8Iu%2BjWrZt06dKFaR0AAAACWrdu3YwuXbpox7CM%2BuhEfi12xcXF5scff%2Bz3i7AL%2FnIBAAAAp3jggQe0I1jG3LlzpaKiwq%2FbMf1a7D788EMpKyvz51PYRsOGDYW9xgAAAHCKkSNHSsOGDbVjWMKJEyfk008%2F9etz%2BLXYsQ3z386eDsQ2TAAAADhCRESEMXLkSO0YluHvbuS3Dyg%2FceKEmZCQIGfOnPHrBdhFXl6etG%2FfnmIHAAAAx9i2bZvZoUMH8VfnsJPIyEg5cuSIREZG%2BqUT%2BG1iN2%2FePErdWTfddBOlDgAAAI6TkpJiZGZmasewhJKSEvHn%2BSN%2BK3Zz5szxW2i7%2BfnPf64dAQAAAFAxZswY7QiWMXfuXL89tl%2B2YhYXF5vx8fFSXl7uz9fFFqKiouTQoUMSFRXFxA4AAACOc%2Fr0abNJkyZ8trWIREdHy9GjRyUsLMzn3cAvE7v58%2BdT6s666667KHUAAABwrKioKGPIkCHaMSyhuLhYlixZ4pfH9kuxmzdvnl9fEDth9AwAAACnY038b%2F7qSj7fillWVmZeddVVUlJSUh%2Bvi6UlJSXJ9u3bxTAMJnYAAABwLNM0zbZt28quXbu0o6iLi4uTw4cPS1BQkE87gs8ndp988gml7qwxY8ZQ6gAAAOB4hmEYo0eP1o5hCceOHZMvv%2FzS54%2Fr82Lnz5Ne7MTtdgsfyAgAAAB8Z8yYMeJ2u7VjWII%2FtmP6tNhVVlaaCxYsqLcXxMpuueUWadasGdM6AAAAQEQSExON3r17a8ewhHnz5onp43vifFrsli1bJsePH6%2FfV8Wi7rnnHu0IAAAAgKWMGjVKO4IlFBYWyoYNG3z6mD4tdkzrvhMZGSkDBw7UjgEAAABYyuDBgyUyMlI7hiXMnz%2Ffp4%2Fn02L30Ucf1euLYVU%2F%2B9nPJDIykm2YAAAAwDkiIyONAQMGaMewBF93J58Vu%2B3bt5sFBQX1%2FoJY0YgRI7QjAAAAAJY0fPhw7QiWsH79ejlw4IDP7rPzWbHz9SjRrq666irp06ePdgwAAADAkvr37y9xcXHaMdSZpikLFy702eP5rNhxf913hg0bJsHBwWzDBAAAAC4iJCTEGDx4sHYMS%2FBlhzJ8ccrm8ePHzfj4eKmqqtJ8XSxhxYoVkpmZSbEDAAAALmHp0qVmr169tGOoCw8Pl6KiIomIiKhzf%2FDJxO7jjz%2Bm1IlIixYtpEePHtoxAAAAAEu78cYbJTExUTuGurKyMlm6dKlPHstnxQ7fHZpiGAbTOgAAAOAyXC6XMWzYMO0YluCr%2B%2BzqXOxM0zSXLFmi%2FXpYAm9OAAAAwDtDhw7VjmAJn376qU8ep8732G3YsMHs0qWL9uuhrlWrVrJ7926mdQAAAIAXTNM0W7ZsKfv27dOOom7nzp3SunXrOnWJOk%2FsPvnkE%2B3XwRKysrK0IwAAAAC2YRgGp2Oe5YupHcXOR3hTAgAAADUzZMgQ7QiW4ItOVaetmCUlJWZcXJxUVFRovxaqmjZtKvv37%2BfgFAAAAKAGqqurzcTERDl06JB2FFXR0dFy7NixOn0edp0mdkuWLHF8qRP57i8NlDoAAACgZlwul3HHHXdox1BXXFwsq1atqtNj1KnYsQ3zO4yQAQAAgNphLf2dunarOm3FTEpKMgsKCrRfA1Xx8fFy8OBBcbvdTOwAAACAGqqqqjKbNGkiRUVF2lFUde3aVXJycup%2FK%2Bb%2B%2FfsdX%2BpERO644w5KHQAAAFBLQUFBxu23364dQ11ubq4cP3681lO3Whe7zz77TPvaLWHQoEHaEQAAAABbGzBggHYEdR6PR5YtW1br7691sfv888%2B1r11deHi49OrVSzsGAAAAYGt9%2B%2FaVsLAw7Rjq6tKxal3sli5dqn3d6vr06SMRERFswwQAAADqIDIy0vjJT36iHUNdXXZF1qrY7dq1y9y7d6%2F2datjZAwAAAD4BmtrkS1btsiRI0dqdZ9drYod2zBFDMOQ2267TTsGAAAAEBAGDhyoHUGdaZryxRdf1Op7KXa1lJqaKomJiWzDBAAAAHygefPmRseOHbVjqKtt16pVseP%2BOpGf%2FvSn2hEAAACAgMIau%2Fb32dW42BUUFJgHDx7Uvl51jIoBAAAA3%2BI%2BO5H8%2FHw5dOhQje%2Bzq3GxW758ufa1qktISJAuXbpoxwAAAAACSkZGhsTFxWnHULdixYoafw%2FFrhb69u0rLpeL%2B%2BsAAAAAH3K73cbNN9%2BsHUPdypUra%2Fw9FLta6Nu3r3YEAAAAICCx1q5d5zJM0%2Fvtm998842ZkJAgNfmeQLR%2F%2F35OxAQAAAD8YO%2FevWbLli21Y6gKCgqS48ePS1RUlNedo0YTu2XLljm%2B1HXo0IFSBwAAAPhJixYtjKSkJO0YqqqqqmTNmjU1%2Bp4aFbva3MQXaBgNAwAAAP7Fmlvkyy%2B%2FrNHX16jY1fTBAxFvMgAAAMC%2FWHPXfKjm9T12paWlZoMGDaSqqkr7GtWEhITIsWPHarTXFQAAAEDNnDp1yoyLi3N094iKipITJ06I2%2B32qnt4PbFbt26do19YEZHMzExKHQAAAOBnMTExRvfu3bVjqDp9%2BrTk5eV5%2FfVeF7ucnBzta1PXp08f7QgAAACAI7AdU2p0gIrXxW716tXa16XuJz%2F5iXYEAAAAwBFuuukm7Qjq1q5d6%2FXXen2PXfPmzc39%2B%2FdrX5ua8PBwOX78uISGhrIVEwAAAPCz8vJys1GjRlJeXq4dRU3Hjh1l06ZNvrvH7vDhw44udSIiPXr0oNQBAAAA9SQsLMxIT0%2FXjqEqLy9PTp065dUkzqtiV9MPxwtEN954o3YEAAAAwFGcvgavrq6WDRs2ePW1FDsvOf1NBQAAANQ31uDedzGvip3TT8QMCQmRjIwM7RgAAACAo2RmZkpwcLB2DFXeHqByxWJnmqa5fv167etR1a1bNwkPD%2Bf%2BOgAAAKAeRUVFGWlpadoxVK1bt86rr7tisduzZ48cP35c%2B3pUMQIGAAAAdDh9Lb5v3z4pKiq64gEqVyx2Gzdu1L4WdU5%2FMwEAAABa%2BDw77zrZFYudt6ewBCrDMKR79%2B7aMQAAAABH6tGjhxiGs%2B%2BK8qaTUeyuICUlRRo2bOjsdxIAAACgJDY21mjbtq12DFW5ublX%2FJorFjtvHiSQcRomAAAAoMvpa%2FI6F7tDhw6Zhw8f1r4OVWzDBAAAAHQ5fU1eUFAgxcXFlz1A5bLFzunbMEX46wAAAACgzenFrrq6Wr766qvLfs1li92VvjnQRUZGSvv27bVjAAAAAI7WqVMniYiI0I6h6konY1622G3evFk7v6r09HQJCgri4BQAAABAUXBwsNGlSxftGKqu1M0uW%2By2bNminV8V2zABAAAAa3D62vxK3eySxa6ystLMz8%2FXzq%2FK6Xt5AQAAAKtw%2Btp88%2BbNYprmJQ9QuWSx27Fjh5w5c0Y7v6r09HTtCAAAAACEtXlxcbHs27fvkv%2F9ksXO6dswGzduLE2bNuX%2BOgAAAMACmjdvbjRu3Fg7hqrLdbRLFru8vDzt3KrS0tK0IwAAAAA4R6dOnbQjqLrcASpM7C6BYgcAAABYS2pqqnYEVbWa2Dm92Dn9TQMAAABYjdPX6DUudmVlZebu3bu1c6u6%2FvrrtSMAAAAAOIfTi9327dvF4%2FFc9GTMixa7nTt3SnV1tXZuNVFRUdKmTRvtGAAAAADOkZycLBEREdox1FRUVMjevXsv%2Bt8uWux27NihnVlVamqquFwuTsQEAAAALMTtdhsdO3bUjqHqUl2NYncRTh%2FxAgAAAFbl9LU6xa4GnH6MKgAAAGBVnTt31o6gimJXAx06dNCOAAAAAOAi2rdvrx1BVY2KXX5%2BvnZeVSkpKdoRAAAAAFyE04cwl%2BpqPyp2R44cMU%2BcOKGdV01iYqI0aNCAg1MAAAAAC4qLizMSEhK0Y6g5ePCgFBcX%2F%2BgjD35U7Jy%2BDdPpo10AAADA6pw8tTNN86JTux8Vu507d2pnVeXkNwkAAABgB04fxlyss%2F2o2O3Zs0c7pyqnv0kAAAAAq3P6mv1ine1HxW737t3aOVU5%2FU0CAAAAWJ3T1%2BwUOy9wIiYAAABgbU6%2FfepinY2tmOdo0qSJNGrUiBMxAQAAAAtr3LixER8frx1Dza5du370b%2BcVu5KSEvPo0aPaOdUkJSVpRwAAAADghbZt22pHULN%2F%2F36prKw87yMPzit2u3fvFtM0a%2FaoAaRNmzbaEQAAAAB4wclr96qqKiksLDzv384rdk7ehiki0rp1a%2B0IAAAAALzg9LX7hffZUezO4eTWDwAAANiJk7diilyh2O3du1c7nyqKHQAAAGAPTp%2FY7du377z%2FfV6xu3CfptM4%2Fc0BAAAA2IXTJ3aXvcdu%2F%2F792vnUxMfHS0xMDB91AAAAANhAw4YNjdjYWO0Yai7sbkzszmIbJgAAAGAvTl7DX3Ji5%2FF4zMOHD2vnU%2BPkNwUAAABgR05ew19yYnfo0CGpqqrSzqemVatW2hEAAAAA1MC1116rHUFNaWmpfPvttz98CPkPxc7J99eJiDRv3lw7AgAAAIAaaNasmXYEVedux6TYneX0NwUAAABgN05fw5%2Fb4X4odgcPHtTOpSoxMVE7AgAAAIAacHqxu%2BjE7tChQ9q5VDn9TQEAAADYTYsWLbQjqDr38Msfit2RI0e0c6mJjY2VqKgoPsMOAAAAsJHo6GijQYMG2jHUnNvhfih2Tv6oA6Z1AAAAgD05eS1%2F0WLn5IkdJ2ICAAAA9uTkYsdWzAs4%2Bc0AAAAA2JmThzQ%2FmtiZpmkWFRVp51LDiZgAAACAPTl5SPOjid2xY8eksrJSO5eaJk2aaEcAAAAAUAtXX321dgQ1JSUlcvr0aVPkbLFz8sEpIiIJCQnaEQAAAADUQnx8vHYEVd9vx3SJiHzzzTfaeVRdddVV2hEAAAAA1ILThzTnFTsn318n4uzxLQAAAGBnTi92x44dE5Gzxe7bb7%2FVzqPGMAwmdgAAAIBNOX0r5vdd7ofDU5yqYcOGEhoaamjnAAAAAFBz4eHhRnR0tHYMNecVu%2BPHj2vnUeP00S0AAABgd05e03%2Ff5Ry%2FFdPJbwIAAAAgEDh5Oyb32J1FsQMAAADszclr%2BvO2Yjq52DVu3Fg7AgAAAIA6cPJhiByeclZsbKx2BAAAAAB10KhRI%2B0Ias4rdidOnNDOoyYmJkY7AgAAAIA6aNiwoXYENecdnnLq1CntPGqc3O4BAACAQODkYvd9l3OZpmmWlJRo51Hj5DcBAAAAEAicvKYvLi4WERFXSUmJVFdXa%2BdR4%2BQ3AQAAABAInLymLy8vl8rKStP1fcNzKie%2FCQAAAIBA4PTbq06fPi0UO4odAAAAYGtOX9MXFxeL6%2FTp09o5VDm93QMAAAB2R7ErZmLHxx0AAAAA9ub0Ynfq1ClnF7vw8HAJDg42tHMAAAAAqL3Q0FAjJCREO4aa4uLi707FdKrw8HDtCAAAAAB8ICIiQjuCmtOnT4urrKxMO4caJ%2F%2FwAQAAgEDi5KFNeXm5uMrLy7VzqHHyDx8AAAAIJE5e2zu%2B2DGxAwAAAAKDk9f25eXl4qqoqNDOocbJP3wAAAAgkDh5be%2F4iZ2Tx7UAAABAIHHy2p6JnYNbPQAAABBInLy2r6iocPbEzsk%2FfAAAACCQOHlt7%2FiJXVhYmHYEAAAAAD7AVkwHF7vg4GDtCAAAAAB8wMlr%2B4qKCnF5PB7tHGqCgoK0IwAAAADwAbfbrR1BjcfjcXaxc%2FIPHwAAAAgkTh7aeDwecVVXV2vnUEOxAwAAAAKDk9f2TOwc%2FMMHAAAAAomT1%2FZM7Bz8wwcAAAACiZO3YlZXVzu72Dn5hw8AAAAEEicPbdiK6eAfPgAAABBInLy2Zyumg3%2F4AAAAQCBx8m48j8cjLu0QmhITE7UjAAAAAPABJ6%2FtTdMUV0REhHYONcnJydoRAAAAAPiAk9f2UVFR4oqOjtbOoSYmJkY7AgAAAAAfiIqK0o6gJjo6WlxOLjdOLrUAAABAIHFyr4mJiRFXy5YttXOocLvd0qxZM%2B0YAAAAAHygRYsWjj0csVWrVuJy6l7UVq1aSWhoqKGdAwAAAEDdhYaGGs2bN9eOoSI5Odm5xc6p1w0AAAAEqnbt2mlHUJGUlCSuZs2aGU2bNtXOUu8yMjK0IwAAAADwoe7du2tHqHfNmjWTpk2bGi4RkV69emnnqXc333yzdgQAAAAAPuTkXuMSEendu7d2nnoVHR0tXbt21Y4BAAAAwIcyMjIkMjJSO0a9%2Br7LuUREbr%2F9dgkNDdXOVG9uv%2F12CQ4O5uAUAAAAIICEhIQYAwcO1I5Rn9crt912m4icLXaxsbHGrbfeqp2r3owaNUo7AgAAAAA%2FcNJaf%2BDAgRIXF2eInC12IiKjR4%2FWzlUvrrnmGu6vAwAAAALULbfcIk2aNNGOUS%2FOLbE%2FFLtBgwZJUlKSdja%2Fe%2Byxx8TtdrMNEwAAAAhAQUFBxrhx47Rj%2BF2bNm1kwIABP%2FzvH4qd2%2B02fv3rX2vn86vY2Fh58MEHtWMAAAAA8KOHH35YGjVqpB3Dr37zm9%2BcN7BynfsfR40aJddee612Rr8ZP368REdHM60DAAAAAlhMTIzx%2BOOPa8fwmzZt2sjIkSPP%2BzfDNM3z%2FmHRokVm%2F%2F79tbP65eI3b94sYWFhFDsAAAAgwJWVlZnXXXed7N69WzuKzy1YsEB%2B%2BtOfntdrXBd%2B0a233moMGjRIO6vPvfHGG5Q6AAAAwCHCw8ONiRMnasfwucGDB%2F%2Bo1IlcZGInIlJYWGimpqZKUVGRdm6fGDNmjEydOpVSBwAAADjM6NGjzenTp2vH8In4%2BHjJzc2Va665xrtiJyLy8ccfmwMGDJDq6mrt%2FHXSoUMHWbt2rURERFDsAAAAAIcpKSkxu3XrJlu3btWOUicul0sWLlwo%2Ffr1u2ivcV3qG%2Fv37288%2FfTT2vnrpEGDBjJ79mxKHQAAAOBQkZGRxqxZsyQmJkY7Sp0888wzlyx1IpeZ2ImImKZp3n%2F%2F%2FTJ16lTt66ixkJAQWbBggfTt25dSBwAAADjc0qVLzVtvvVUqKiq0o9TY3XffLdOnTxfDMGpX7EREqqqqzJ%2F97GeyYMEC7evxWlBQkMycOVPuvPNOSh0AAAAAERHJzs42hw8fLh6PRzuK1wYOHChz586VoKCgy3Yb15UeKCgoyJgzZ44MHz5c%2B5q8EhoaSqkDAAAA8CNZWVnG3LlzJTw8XDuKV4YMGSLZ2dlXLHUiXhQ7EZGQkBDjvffek8cee0z72i4rNjZWlixZQqkDAAAAcFGDBg0yPvnkE4mNjdWOclnjx4%2BX7OxsCQ0N9arbXHEr5oXmzJlj3nfffXLy5Entaz1Penq6zJo1S1q1akWpAwAAAHBZ%2B%2FfvN%2B%2B66y5ZuXKldpTzREdHy6RJk2TEiBE16jVeTezONWTIEGPNmjXStWtX7WsWke%2Fup3vyySdlxYoVlDoAAAAAXmnWrJmxdOlSeeKJJyQoKEg7joiIdOvWTdavX1%2FjUidSi2InIpKcnGysWbNG3n33XYmLi1O78K5du8qqVavk5ZdfNoKDgyl1AAAAALwWHBxsvPLKK8a6deskMzNTLUfDhg3l9ddfl5UrV0rbtm1r1WtqvBXzQkePHjX%2F%2B7%2F%2FWyZNmiTFxcX1cuGdOnWS3%2FzmN5KVlXXZIz8BAAAAwBumaZqzZs2Sl156STZv3lwvzxkdHS0PPfSQ%2FOpXv5LGjRvXqdfUudh979tvvzXfeustmTZtmuzevdvnF%2B12u6VPnz7y0EMPycCBAyl0AAAAAHzONE3zX%2F%2F6l0ycOFGWLFnil49GaN26tdx7773y8MMPS6NGjXzSa3xW7M59IVasWCEzZ86U%2F%2Fu%2F%2F5P8%2FPxaP1ZYWJj06NFDBgwYIMOHD5cmTZpQ5gAAAADUi4MHD5rvv%2F%2B%2BfPTRR7Jq1ao6fbh5cnKy9OnTR4YPHy6ZmZk%2BH1T5vNhdqLCw0Fy2bJls3bpV8vPzJT8%2FX06ePCknT56UU6dOSWhoqERFRUlUVJQkJiZKcnKyJCUlSWpqqmRmZkp4eDhlDgAAAICqsrIyc%2BXKlZKbmys7duyQ%2FPx8KSwslNOnT0txcbGcOXNGYmJipEGDBtKgQQNJSkqSpKQk6dChg9x4443StGlTv%2Faa%2FwfMzQLvwgLDDAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wNi0xMlQwMzozNDoxMyswODowMJdPHOUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMDQtMTZUMTU6NTE6MDArMDg6MDCfi69AAAAAVHRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2RiL3N2Z19pbmZvL3N2Zy8xYi9hNC8xYmE0Yzc4ZDMxYmU2ODE3ZmNjY2Q2NDgzNDFkNDg0ZC5zdmdTrszcAAAAAElFTkSuQmCC\") 5px / 11px no-repeat;\n}\n\n#name:focus, #email:focus, #homepage:focus, #subject:focus {\n  background-color: #edf0f7;\n}\n\n@media screen and (width <= 480px) {\n  .container {\n    width: 100vw;\n  }\n\n  .text-section {\n    width: 95%;\n    margin-bottom: 2vh;\n  }\n\n  tbody, tfoot, tr, td, th {\n    padding: .3em;\n  }\n\n  .form-wrapper {\n    width: 85vw;\n    max-width: none;\n    margin: 0 auto;\n    padding: 1.2em;\n  }\n\n  fieldset {\n    padding: .8em;\n  }\n\n  legend {\n    font-size: 100%;\n  }\n\n  label, input {\n    font-size: 80%;\n  }\n}\n\n@media screen and (width <= 768px) and (width >= 480px) {\n  .form-wrapper {\n    width: 80vw;\n    max-width: none;\n    margin: 0 auto;\n    padding: 1.5em;\n  }\n}\n\n";

},{}],"4Yj73":[function(require,module,exports) {
module.exports = Promise.resolve("* {\n  font-family: ltc-bodoni-175, serif;\n  font-style: normal;\n  font-weight: 400;\n}\n\n.form-wrapper {\n  background-color: #e6e1db61;\n}\n\n#name:focus, #email:focus, #homepage:focus, #subject:focus, textarea:focus {\n  background-color: #edf4f7;\n}\n\n");

},{}],"4Yj56":[function(require,module,exports) {
module.exports = Promise.resolve("* {\n  color: #eaeaeae9;\n  text-transform: uppercase;\n  font-family: linotype-didot, serif;\n  font-size: 1em;\n}\n\n.form-wrapper {\n  background-color: #131211df;\n}\n\nlegend {\n  font-size: 160%;\n}\n\nlabel {\n  font-size: 100%;\n}\n\ninput {\n  font-size: 70%;\n}\n\ni {\n  font-size: 60%;\n}\n\ninput[type=\"file\"], input[type=\"submit\"] {\n  border: 1px solid #f5f5f5;\n}\n\nlegend {\n  background-color: #eaeaea65;\n}\n\ninput {\n  border: 1px solid #606060;\n}\n\ninput:focus {\n  border: 2px solid #4c4c4c;\n}\n\n#name:focus, #email:focus, #homepage:focus, #subject:focus, textarea:focus {\n  background-color: #f7f1ed;\n}\n\ntextarea {\n  color: #252525;\n}\n\n");

},{}],"f1c8r":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"Xx3Lx":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"6Z6tH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("../index.js");
var _indexJs1 = require("../../util/index.js");
var _indexHtml = require("./index.html");
var _indexHtmlDefault = parcelHelpers.interopDefault(_indexHtml);
var _indexCss = require("bundle-text:./index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
class ImageGrid extends HTMLElement {
    constructor(src){
        super();
        this.src = src || null;
        this.skin = (0, _indexJs1.store)?.website || null;
    }
    async connectedCallback() {
        if (this.isCashed) return;
        const node = await (0, _indexJs.getTemplate)((0, _indexHtmlDefault.default));
        let style = document.createElement("style");
        style.textContent = (0, _indexCssDefault.default);
        const skinText = await this.loadSkin(this.skin);
        let skin = document.createElement("style");
        skin.textContent = skinText;
        this.attachShadow({
            mode: "open"
        }).append(node, style, skin);
        this.setAttributes();
    }
    setAttributes() {
        this.src.forEach((image)=>{
            const div = document.createElement("div");
            div.classList.add("grid-item-wrapper");
            let img = document.createElement("img");
            img.src = new URL(image, "file:///src/modules/imagegrid/imagegrid.js");
            document.body.appendChild(img);
            // const img = document.createElement("img");
            // img.src = image;
            // img.setAttribute("alt", imgName)
            img.classList.add("grid-item");
            div.appendChild(img);
            this.shadowRoot.querySelector(".grid-container").appendChild(div);
        });
    }
    async loadSkin(skin) {
        switch(skin){
            case "frost":
                return await require("d211f486461c56bd");
            case "magazine":
                return await require("3659429280604c19");
            case "java":
                return await require("1e29f0055297601b");
            case "guitars":
                return await require("b2a50618c6889d89");
            default:
                console.log("Class skin: We are out of skins");
        }
    }
    disconnectedCallback() {
        this.isCashed = true;
    }
}
customElements.define("my-grid", ImageGrid);
exports.default = ImageGrid;

},{"../index.js":"aOVNo","../../util/index.js":"6gmsK","./index.html":"8Ngta","bundle-text:./index.css":"k4yEz","d211f486461c56bd":"7fqkx","3659429280604c19":"cydQn","1e29f0055297601b":"d1WZ5","b2a50618c6889d89":"7W3zq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Ngta":[function(require,module,exports) {
module.exports = require("86dd3c2138b99de9").getBundleURL("ls5e1") + "../../imagegrid.a2bb6d25.html" + "?" + Date.now();

},{"86dd3c2138b99de9":"lgJ39"}],"k4yEz":[function(require,module,exports) {
module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.grid-wrapper {\n  width: 90%;\n  margin: 0 auto 15vh;\n}\n\n.grid-container {\n  width: 100%;\n  grid-gap: 6%;\n  aspect-ratio: 1 / 1;\n  grid-template-rows: 47% 47%;\n  grid-template-columns: 47% 47%;\n  display: grid;\n}\n\n.grid-item-wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\nimg {\n  transition: scale .4s ease-out;\n}\n\nimg:hover {\n  scale: 1.02;\n}\n\n.grid-item {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  grid-area: auto;\n}\n\n@media only screen and (width <= 768px) {\n  .grid-wrapper {\n    margin-bottom: 0;\n  }\n\n  .grid-item-wrapper {\n    overflow: visible;\n  }\n\n  .grid-container {\n    grid-gap: 5vw;\n    width: 100%;\n    aspect-ratio: 1 / 1;\n    grid-template-rows: auto;\n    grid-template-columns: 100%;\n    display: grid;\n  }\n\n  .grid-item {\n    width: 100%;\n    aspect-ratio: 1 / 1;\n    object-fit: cover;\n    grid-area: auto;\n  }\n}\n\n@media only screen and (width >= 481px) and (width <= 768px) {\n  .grid-wrapper {\n    margin-bottom: 10vh;\n  }\n}\n\n@media only screen and (width >= 769px) and (width <= 1200px) {\n  .grid-wrapper {\n    margin-bottom: 20vh;\n  }\n}\n\n@media only screen and (width >= 1201px) {\n  .grid-wrapper {\n    margin-bottom: 25vh;\n  }\n}\n\n";

},{}],"7fqkx":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"cydQn":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"d1WZ5":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}],"7W3zq":[function(require,module,exports) {
module.exports = Promise.resolve("\n\n");

},{}]},["1BUxe"], null, "parcelRequiree4bc")

//# sourceMappingURL=index.6324fb99.js.map
