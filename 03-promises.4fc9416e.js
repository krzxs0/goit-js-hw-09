!function(){function e(e,n,t,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){t(e);return}c.done?n(l):Promise.resolve(l).then(r,o)}function n(){var t;return(t=function(e){var n,t,r,o,a;return function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(l){return function(c){if(t)throw TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=n.call(e,i)}catch(e){c=[6,e],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}(this,function(i){var c,l,u,s,f,p,y,d,h,b;switch(i.label){case 0:n=e.delay,t=e.step,r=e.amount,o=n,a=1,i.label=1;case 1:if(!(a<=r))return[3,7];i.label=2;case 2:return i.trys.push([2,4,,5]),[4,(l=(c={position:a,delay:o}).position,u=c.delay,s=Math.random()>.3,new Promise(function(e,n){setTimeout(function(){s?e({position:l,delay:u}):n({position:l,delay:u})},u)}))];case 3:return p=(f=i.sent()).position,y=f.delay,console.log("Fulfilled promise ".concat(p," in ").concat(y,"ms")),[3,5];case 4:return h=(d=i.sent()).position,b=d.delay,console.error("Rejected promise ".concat(h," in ").concat(b,"ms")),[3,5];case 5:o+=t,i.label=6;case 6:return a++,[3,1];case 7:return[2]}})},n=function(){var n=this,r=arguments;return new Promise(function(o,a){var i=t.apply(n,r);function c(n){e(i,o,a,c,l,"next",n)}function l(n){e(i,o,a,c,l,"throw",n)}c(void 0)})}).apply(this,arguments)}document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();var t=Object.fromEntries(new FormData(e.currentTarget).entries());t.position=parseInt(t.position),function(e){n.apply(this,arguments)}(t)})}();
//# sourceMappingURL=03-promises.4fc9416e.js.map
