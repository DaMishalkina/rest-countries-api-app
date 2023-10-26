import{H as Ce}from"../chunks/control.f5b05b5f.js";import{s as pe,C as $e,f as w,a as D,l as M,g as E,h as C,c as N,m as P,d as b,j as v,J as ee,i as T,v as p,F as ze,G as Le,H as De,n as J,I as te,r as le,u as ne,y as Ne,E as Oe}from"../chunks/scheduler.26305d68.js";import{S as ge,i as ve,a as U,t as W,b as de,d as ye,m as be,c as ke,e as je,g as we}from"../chunks/index.788f041a.js";import{e as G,u as Y,a as se,o as Ie,r as re,d as ae}from"../chunks/replaceSpaceWithDash.2e45b528.js";import{b as oe}from"../chunks/paths.92983bdb.js";function Se(c,t){return new Ce(c,t)}new TextEncoder;const Me=async({fetch:c,params:t})=>{let l=null,r=null;try{const a=async()=>{const n=await c("https://raw.githubusercontent.com/DaMishalkina/rest-countries-api-app/main/static/data/data.json");if(!n.ok)throw Se(404,{message:"Not found"});return l=(await n.json()).find(s=>s.alpha3Code.toLowerCase()===t.slug),r=l.borders,{country:l,...r&&{borders:r}}},e=async()=>{try{const n=await a().then(({borders:s})=>s),u=n==null?void 0:n.map(async s=>{const h=await c("https://raw.githubusercontent.com/DaMishalkina/rest-countries-api-app/main/static/data/data.json");return h.ok?(await h.json()).find(_=>_.alpha3Code===s):(console.error(`Failed to fetch data for border: ${s}`),{name:"Fallback Border Name"})});return await Promise.all(u)}catch(n){return console.error("Fetch Border Data Error:",n),[]}};return{country:a().then(({country:n})=>n),...await a().then(({borders:n})=>n)&&{borders:e()}}}catch(a){return console.error(a),{error:"Unable to fetch country data"}}},We=Object.freeze(Object.defineProperty({__proto__:null,load:Me},Symbol.toStringTag,{value:"Module"}));function Pe(c){let t,l,r,a;const e=c[4].default,n=$e(e,c,c[3],null);return{c(){t=w("a"),n&&n.c(),l=D(),r=M(c[1]),this.h()},l(u){t=E(u,"A",{href:!0,class:!0});var s=C(t);n&&n.l(s),l=N(s),r=P(s,c[1]),s.forEach(b),this.h()},h(){v(t,"href",c[0]),v(t,"class","action svelte-2y0e1a"),ee(t,"action--large",c[2])},m(u,s){T(u,t,s),n&&n.m(t,null),p(t,l),p(t,r),a=!0},p(u,[s]){n&&n.p&&(!a||s&8)&&ze(n,e,u,u[3],a?De(e,u[3],s,null):Le(u[3]),null),(!a||s&2)&&J(r,u[1]),(!a||s&1)&&v(t,"href",u[0]),(!a||s&4)&&ee(t,"action--large",u[2])},i(u){a||(U(n,u),a=!0)},o(u){W(n,u),a=!1},d(u){u&&b(t),n&&n.d(u)}}}function Ae(c,t,l){let{$$slots:r={},$$scope:a}=t,{link:e="",title:n="",isLarge:u=!1}=t;return c.$$set=s=>{"link"in s&&l(0,e=s.link),"title"in s&&l(1,n=s.title),"isLarge"in s&&l(2,u=s.isLarge),"$$scope"in s&&l(3,a=s.$$scope)},[e,n,u,a,r]}class Ee extends ge{constructor(t){super(),ve(this,t,Ae,Pe,pe,{link:0,title:1,isLarge:2})}}function ie(c,t,l){const r=c.slice();return r[3]=t[l],r}function ce(c,t,l){const r=c.slice();return r[6]=t[l][0],r[7]=t[l][1],r}function ue(c,t,l){const r=c.slice();return r[6]=t[l][0],r[7]=t[l][1],r}function Fe(c){let t,l;return{c(){t=le("svg"),l=le("path"),this.h()},l(r){t=ne(r,"svg",{width:!0,height:!0,xmlns:!0,"fill-rule":!0,"clip-rule":!0,fill:!0});var a=C(t);l=ne(a,"path",{d:!0}),C(l).forEach(b),a.forEach(b),this.h()},h(){v(l,"d","M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"),v(t,"width","22"),v(t,"height","22"),v(t,"xmlns","http://www.w3.org/2000/svg"),v(t,"fill-rule","evenodd"),v(t,"clip-rule","evenodd"),v(t,"fill","currentColor")},m(r,a){T(r,t,a),p(t,l)},p:Ne,d(r){r&&b(t)}}}function _e(c,t){let l,r,a=t[6]+"",e,n,u,s,h=t[7]+"",d,_;return{key:c,first:null,c(){l=w("li"),r=w("span"),e=M(a),n=M(":"),u=D(),s=w("span"),d=M(h),_=D(),this.h()},l(o){l=E(o,"LI",{class:!0});var f=C(l);r=E(f,"SPAN",{class:!0});var y=C(r);e=P(y,a),n=P(y,":"),y.forEach(b),u=N(f),s=E(f,"SPAN",{});var $=C(s);d=P($,h),$.forEach(b),_=N(f),f.forEach(b),this.h()},h(){v(r,"class","country-detail__field-name svelte-d7hjpz"),v(l,"class","country-detail country-details__item"),this.first=l},m(o,f){T(o,l,f),p(l,r),p(r,e),p(r,n),p(l,u),p(l,s),p(s,d),p(l,_)},p(o,f){t=o,f&4&&a!==(a=t[6]+"")&&J(e,a),f&4&&h!==(h=t[7]+"")&&J(d,h)},d(o){o&&b(l)}}}function he(c,t){let l,r,a=t[6]+"",e,n,u,s,h=t[7]+"",d,_;return{key:c,first:null,c(){l=w("li"),r=w("span"),e=M(a),n=M(":"),u=D(),s=w("span"),d=M(h),_=D(),this.h()},l(o){l=E(o,"LI",{class:!0});var f=C(l);r=E(f,"SPAN",{class:!0});var y=C(r);e=P(y,a),n=P(y,":"),y.forEach(b),u=N(f),s=E(f,"SPAN",{});var $=C(s);d=P($,h),$.forEach(b),_=N(f),f.forEach(b),this.h()},h(){v(r,"class","country-detail__field-name svelte-d7hjpz"),v(l,"class","country-detail country-details__item"),this.first=l},m(o,f){T(o,l,f),p(l,r),p(r,e),p(r,n),p(l,u),p(l,s),p(s,d),p(l,_)},p(o,f){t=o,f&4&&a!==(a=t[6]+"")&&J(e,a),f&4&&h!==(h=t[7]+"")&&J(d,h)},d(o){o&&b(l)}}}function fe(c){let t,l,r="Border Countries:",a,e,n=[],u=new Map,s,h=G(c[1]);const d=_=>_[3].cca3;for(let _=0;_<h.length;_+=1){let o=ie(c,h,_),f=d(o);u.set(f,n[_]=me(f,o))}return{c(){t=w("div"),l=w("p"),l.textContent=r,a=D(),e=w("ul");for(let _=0;_<n.length;_+=1)n[_].c();this.h()},l(_){t=E(_,"DIV",{class:!0});var o=C(t);l=E(o,"P",{class:!0,"data-svelte-h":!0}),Oe(l)!=="svelte-1n7thn8"&&(l.textContent=r),a=N(o),e=E(o,"UL",{class:!0});var f=C(e);for(let y=0;y<n.length;y+=1)n[y].l(f);f.forEach(b),o.forEach(b),this.h()},h(){v(l,"class","borders-container__title svelte-d7hjpz"),v(e,"class","borders-container__list svelte-d7hjpz"),v(t,"class","borders-container country-data__borders-container svelte-d7hjpz")},m(_,o){T(_,t,o),p(t,l),p(t,a),p(t,e);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(e,null);s=!0},p(_,o){o&2&&(h=G(_[1]),we(),n=Y(n,o,d,1,_,h,u,e,Ie,me,null,ie),ke())},i(_){if(!s){for(let o=0;o<h.length;o+=1)U(n[o]);s=!0}},o(_){for(let o=0;o<n.length;o+=1)W(n[o]);s=!1},d(_){_&&b(t);for(let o=0;o<n.length;o+=1)n[o].d()}}}function me(c,t){var n,u;let l,r,a,e;return r=new Ee({props:{link:oe+`/${re((n=t[3])==null?void 0:n.cca3)}`,title:(u=t[3])==null?void 0:u.name}}),{key:c,first:null,c(){l=w("li"),de(r.$$.fragment),a=D(),this.h()},l(s){l=E(s,"LI",{});var h=C(l);ye(r.$$.fragment,h),a=N(h),h.forEach(b),this.h()},h(){this.first=l},m(s,h){T(s,l,h),be(r,l,null),p(l,a),e=!0},p(s,h){var _,o;t=s;const d={};h&2&&(d.link=oe+`/${re((_=t[3])==null?void 0:_.cca3)}`),h&2&&(d.title=(o=t[3])==null?void 0:o.name),r.$set(d)},i(s){e||(U(r.$$.fragment,s),e=!0)},o(s){W(r.$$.fragment,s),e=!1},d(s){s&&b(l),je(r)}}}function Be(c){let t,l,r,a,e,n,u,s,h,d,_=c[2].name+"",o,f,y,$,z=[],K=new Map,V,O,L=[],Q=new Map,q,I;l=new Ee({props:{link:"/",title:"Back",isLarge:!0,$$slots:{default:[Fe]},$$scope:{ctx:c}}});let A=G(Object.entries(c[2]).slice(0,5));const R=i=>i[6];for(let i=0;i<A.length;i+=1){let m=ue(c,A,i),g=R(m);K.set(g,z[i]=_e(g,m))}let F=G(Object.entries(c[2]).slice(5));const X=i=>i[6];for(let i=0;i<F.length;i+=1){let m=ce(c,F,i),g=X(m);Q.set(g,L[i]=he(g,m))}let k=c[1]&&c[1].length>0&&fe(c);return{c(){t=w("main"),de(l.$$.fragment),r=D(),a=w("section"),e=w("img"),s=D(),h=w("div"),d=w("h1"),o=M(_),f=D(),y=w("div"),$=w("ul");for(let i=0;i<z.length;i+=1)z[i].c();V=D(),O=w("ul");for(let i=0;i<L.length;i+=1)L[i].c();q=D(),k&&k.c(),this.h()},l(i){t=E(i,"MAIN",{class:!0});var m=C(t);ye(l.$$.fragment,m),r=N(m),a=E(m,"SECTION",{class:!0});var g=C(a);e=E(g,"IMG",{class:!0,src:!0,alt:!0}),s=N(g),h=E(g,"DIV",{class:!0});var j=C(h);d=E(j,"H1",{class:!0});var B=C(d);o=P(B,_),B.forEach(b),f=N(j),y=E(j,"DIV",{class:!0});var S=C(y);$=E(S,"UL",{class:!0});var Z=C($);for(let H=0;H<z.length;H+=1)z[H].l(Z);Z.forEach(b),V=N(S),O=E(S,"UL",{class:!0});var x=C(O);for(let H=0;H<L.length;H+=1)L[H].l(x);x.forEach(b),q=N(S),k&&k.l(S),S.forEach(b),j.forEach(b),g.forEach(b),m.forEach(b),this.h()},h(){var i,m,g;v(e,"class","country-data__image svelte-d7hjpz"),te(e.src,n=(g=(m=(i=c[0])==null?void 0:i.country)==null?void 0:m.flags)==null?void 0:g.png)||v(e,"src",n),v(e,"alt",u=c[2].name+" Flag"),v(d,"class","country-data__title svelte-d7hjpz"),v($,"class","country-details__list svelte-d7hjpz"),v(O,"class","country-details__list svelte-d7hjpz"),v(y,"class","country-details country-data__details svelte-d7hjpz"),v(h,"class","country-data__text"),v(a,"class","country-data main__country-data svelte-d7hjpz"),v(t,"class","main svelte-d7hjpz")},m(i,m){T(i,t,m),be(l,t,null),p(t,r),p(t,a),p(a,e),p(a,s),p(a,h),p(h,d),p(d,o),p(h,f),p(h,y),p(y,$);for(let g=0;g<z.length;g+=1)z[g]&&z[g].m($,null);p(y,V),p(y,O);for(let g=0;g<L.length;g+=1)L[g]&&L[g].m(O,null);p(y,q),k&&k.m(y,null),I=!0},p(i,[m]){var j,B,S;const g={};m&4096&&(g.$$scope={dirty:m,ctx:i}),l.$set(g),(!I||m&1&&!te(e.src,n=(S=(B=(j=i[0])==null?void 0:j.country)==null?void 0:B.flags)==null?void 0:S.png))&&v(e,"src",n),(!I||m&4&&u!==(u=i[2].name+" Flag"))&&v(e,"alt",u),(!I||m&4)&&_!==(_=i[2].name+"")&&J(o,_),m&4&&(A=G(Object.entries(i[2]).slice(0,5)),z=Y(z,m,R,1,i,A,K,$,ae,_e,null,ue)),m&4&&(F=G(Object.entries(i[2]).slice(5)),L=Y(L,m,X,1,i,F,Q,O,ae,he,null,ce)),i[1]&&i[1].length>0?k?(k.p(i,m),m&2&&U(k,1)):(k=fe(i),k.c(),U(k,1),k.m(y,null)):k&&(we(),W(k,1,1,()=>{k=null}),ke())},i(i){I||(U(l.$$.fragment,i),U(k),I=!0)},o(i){W(l.$$.fragment,i),W(k),I=!1},d(i){i&&b(t),je(l);for(let m=0;m<z.length;m+=1)z[m].d();for(let m=0;m<L.length;m+=1)L[m].d();k&&k.d()}}}function He(c,t,l){let r,a,{data:e}=t;return c.$$set=n=>{"data"in n&&l(0,e=n.data)},c.$$.update=()=>{var n,u,s,h,d,_,o,f,y,$,z,K,V,O,L,Q,q,I,A,R,F,X,k,i,m,g;c.$$.dirty&1&&l(2,r=typeof((n=e==null?void 0:e.country)==null?void 0:n.name)=="string"?{name:(u=e==null?void 0:e.country)==null?void 0:u.name,"native name":(s=e==null?void 0:e.country)==null?void 0:s.nativeName,population:se((h=e==null?void 0:e.country)==null?void 0:h.population),region:(d=e==null?void 0:e.country)==null?void 0:d.region,"sub region":(_=e==null?void 0:e.country)==null?void 0:_.subregion,"top level domain":(o=e==null?void 0:e.country)==null?void 0:o.topLevelDomain[0],...((f=e==null?void 0:e.country)==null?void 0:f.capital)&&{capital:(y=e==null?void 0:e.country)==null?void 0:y.capital},...(($=e==null?void 0:e.country)==null?void 0:$.currencies)&&{currencies:Object.values((z=e==null?void 0:e.country)==null?void 0:z.currencies).map(j=>j.name).join(", ")},languages:(K=e==null?void 0:e.country)==null?void 0:K.languages.map(j=>j.name).join(", ")}:{name:(O=(V=e==null?void 0:e.country)==null?void 0:V.name)==null?void 0:O.common,"native name":Object.entries((Q=(L=e==null?void 0:e.country)==null?void 0:L.name)==null?void 0:Q.nativeName).map(([j,B])=>`${B.common} (${j})`).join(", "),population:se((q=e==null?void 0:e.country)==null?void 0:q.population),region:(I=e==null?void 0:e.country)==null?void 0:I.region,"sub region":(A=e==null?void 0:e.country)==null?void 0:A.subregion,capital:(R=e==null?void 0:e.country)==null?void 0:R.capital[0],...((F=e==null?void 0:e.country)==null?void 0:F.tld)&&{"top level domain":e==null?void 0:e.country.tld[0]},...((X=e==null?void 0:e.country)==null?void 0:X.currencies)&&{currencies:Object.values((k=e==null?void 0:e.country)==null?void 0:k.currencies).map(j=>j.name).join(", ")},...((i=e==null?void 0:e.country)==null?void 0:i.languages)&&{languages:Object.values((m=e==null?void 0:e.country)==null?void 0:m.languages).join(", ")}}),c.$$.dirty&1&&l(1,a=(e==null?void 0:e.borders)&&((g=e==null?void 0:e.borders)==null?void 0:g.map(j=>typeof(j==null?void 0:j.name)=="string"?{name:j.name,cca3:j.alpha3Code}:{name:j.name.common,cca3:j.cca3})))},[e,a,r]}class Je extends ge{constructor(t){super(),ve(this,t,He,Be,pe,{data:0})}}export{Je as component,We as universal};
