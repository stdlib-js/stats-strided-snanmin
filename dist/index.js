"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var v=s(function(A,q){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),l=require('@stdlib/math-base-assert-is-negative-zerof/dist');function R(e,r,a,o){var u,t,i,n;if(e<=0)return NaN;if(e===1||a===0)return r[o];for(t=o,n=0;n<e&&(i=r[t],i!==i);n++)t+=a;if(n===e)return NaN;for(u=i,n+=1,n;n<e;n++)t+=a,i=r[t],!x(i)&&(i<u||i===u&&l(i))&&(u=i);return u}q.exports=R
});var c=s(function(B,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=v();function g(e,r,a){return b(e,r,a,_(e,a))}m.exports=g
});var d=s(function(C,y){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),E=v();k(p,"ndarray",E);y.exports=p
});var O=require("path").join,Z=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=d(),f,j=Z(O(__dirname,"./native.js"));h(j)?f=w:f=j;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
