import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&m(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const p="modulepreload",O=function(_,i){return new URL(_,i).href},d={},t=function(i,n,m){let e=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link");e=Promise.all(n.map(r=>{if(r=O(r,m),r in d)return;d[r]=!0;const c=r.endsWith(".css"),E=c?'[rel="stylesheet"]':"";if(!!m)for(let a=o.length-1;a>=0;a--){const u=o[a];if(u.href===r&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${E}`))return;const s=document.createElement("link");if(s.rel=c?"stylesheet":p,c||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),c)return new Promise((a,u)=>{s.addEventListener("load",a),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>i()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,l=R({page:"preview"});P.setChannel(l);window.__STORYBOOK_ADDONS_CHANNEL__=l;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const T={"./.storybook/docs/changelog.mdx":async()=>t(()=>import("./changelog-x8ooVivg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),"./.storybook/docs/colors.mdx":async()=>t(()=>import("./colors-ZY4aM611.js"),__vite__mapDeps([9,1,2,3,4,5,6,7,8]),import.meta.url),"./.storybook/docs/fonts/Assistant.mdx":async()=>t(()=>import("./Assistant-mR_Zotjg.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,8]),import.meta.url),"./.storybook/docs/fonts/Inter.mdx":async()=>t(()=>import("./Inter-_QsaH34u.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8]),import.meta.url),"./.storybook/docs/get-started.mdx":async()=>t(()=>import("./get-started-k8ww5MDq.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8]),import.meta.url),"./.storybook/docs/license.mdx":async()=>t(()=>import("./license-NdhPKt0g.js"),__vite__mapDeps([13,1,2,3,4,5,6,7,8]),import.meta.url),"./src/components/Avatar/__stories__/BoAvatar.stories.ts":async()=>t(()=>import("./BoAvatar.stories-i53txWTJ.js"),__vite__mapDeps([14,15,16,17,18]),import.meta.url),"./src/components/Badge/__stories__/BoBadge.stories.ts":async()=>t(()=>import("./BoBadge.stories-Y0eSz-7D.js"),__vite__mapDeps([19,15,16,20,21,17,22]),import.meta.url),"./src/components/Icon/__stories__/BoIcon.stories.ts":async()=>t(()=>import("./BoIcon.stories-pLiq2JrP.js"),__vite__mapDeps([23,20,15,16,21,17]),import.meta.url),"./src/components/Icon/__stories__/Iconography.mdx":async()=>t(()=>import("./Iconography-So0DqkLG.js"),__vite__mapDeps([24,1,2,3,4,5,6,7,15,8]),import.meta.url),"./src/components/Input/__stories__/BoInput.stories.ts":async()=>t(()=>import("./BoInput.stories-Yyekmfur.js"),__vite__mapDeps([25,15,20,16,21,26,27,17,28]),import.meta.url),"./src/components/Loader/__stories__/BoShape.stories.ts":async()=>t(()=>import("./BoShape.stories-SGUdw8sm.js"),__vite__mapDeps([29,26,15,16,27]),import.meta.url),"./src/components/Loader/__stories__/BoSpinner.stories.ts":async()=>t(()=>import("./BoSpinner.stories-ztrRygWx.js"),__vite__mapDeps([30,26,15,16,27,17]),import.meta.url)};async function f(_){return T[_]()}const{composeConfigs:I,PreviewWeb:L,ClientApi:v}=__STORYBOOK_MODULE_PREVIEW_API__,y=async()=>{const _=await Promise.all([t(()=>import("./entry-preview-ihmK0IyV.js"),__vite__mapDeps([31,15]),import.meta.url),t(()=>import("./entry-preview-docs-CprtJsAQ.js"),__vite__mapDeps([32,6,4,15]),import.meta.url),t(()=>import("./preview-s-dCIUAT.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([33,5]),import.meta.url),t(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([34,7]),import.meta.url),t(()=>import("./preview-wm7zCcxo.js"),__vite__mapDeps([35,7]),import.meta.url),t(()=>import("./preview-MdQXpms2.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([36,7]),import.meta.url),t(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-37XjEtlT.js"),__vite__mapDeps([37,4]),import.meta.url),t(()=>import("./preview-bicOdALM.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-YNo7AEGR.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-gSFf5lSR.js"),__vite__mapDeps([38,3,39]),import.meta.url)]);return I(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new v({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:f,getProjectAnnotations:y});export{t as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./changelog-x8ooVivg.js","./jsx-runtime-5iamQlTt.js","./index-tpL99cJs.js","./chunk-ZGA76URP-Uk8hDnuP.js","./_commonjsHelpers-5-cIlDoe.js","./index-ogXoivrg.js","./index-OpicemMp.js","./index-PPLHz8o0.js","./index-EzaeZ9qI.js","./colors-ZY4aM611.js","./Assistant-mR_Zotjg.js","./Inter-_QsaH34u.js","./get-started-k8ww5MDq.js","./license-NdhPKt0g.js","./BoAvatar.stories-i53txWTJ.js","./vue.esm-bundler-6KeORcj-.js","./_plugin-vue_export-helper-x3n3nnut.js","./storybook-j7faMZma.js","./BoAvatar-Kr75XyNu.css","./BoBadge.stories-Y0eSz-7D.js","./BoIcon-KHqp46CB.js","./BoIcon-PPaDzfrv.css","./BoBadge-a7OSbw0h.css","./BoIcon.stories-pLiq2JrP.js","./Iconography-So0DqkLG.js","./BoInput.stories-Yyekmfur.js","./BoSpinner-7i0rHUk2.js","./BoSpinner-xrc5gRt_.css","./BoInput-JWp5wWcG.css","./BoShape.stories-SGUdw8sm.js","./BoSpinner.stories-ztrRygWx.js","./entry-preview-ihmK0IyV.js","./entry-preview-docs-CprtJsAQ.js","./preview-VI2eoWmp.js","./preview-OnO0tzRj.js","./preview-wm7zCcxo.js","./preview-u8M_OEO2.js","./preview-37XjEtlT.js","./preview-gSFf5lSR.js","./preview-rV-9ac-S.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}