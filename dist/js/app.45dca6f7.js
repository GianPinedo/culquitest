(function(){"use strict";var e={6124:function(e,a,l){var s=l(9963),o=l(6252);const i={id:"app"};function t(e,a,l,s,t,n){const r=(0,o.up)("RouterView");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(r)])}l(560);var n=l(2119),r=l(3577),c=l.p+"img/login.8f2b886b.png",d=l.p+"img/logo_white.119ddafd.svg";const u={id:"app2"},v=(0,o.uE)('<div id="coluna1"><div id="logo"><img id="bg" src="'+c+'" alt="logo" width="100%"></div><div class="linea"></div><div id="texto"><div><div class="izq"><img id="logoimg" src="'+d+'" alt="logo" width="50"></div><p id="texto2">Dale más power ⚡ a tus <br>empleados hoy 💪</p><p id="texto3">Te ayudamos a gestionarlos de manera más sencilla</p></div></div></div>',1),p={id:"coluna2"},g=(0,o._)("h2",null,"Inicia sesión",-1),m=(0,o._)("label",{for:"username"},[(0,o.Uk)("Correo Electrónico:"),(0,o._)("strong",{id:"strong"},"*")],-1),_=(0,o._)("br",null,null,-1),b=(0,o._)("label",{for:"password"},[(0,o.Uk)("Contraseña: "),(0,o._)("strong",{id:"strong"},"*")],-1),w={key:0,id:"error",class:"error-message"},f=(0,o._)("br",null,null,-1),h=(0,o._)("i",{class:"fa fa-exclamation-circle"},null,-1),k=(0,o._)("br",null,null,-1),y={id:"boxBoton"},C={key:0,disabled:"",class:"boton"},P=(0,o._)("i",{class:"fa fa-spinner fa-spin"},null,-1),x={key:1,class:"boton",type:"submit"},T=(0,o._)("div",{id:"footer"},[(0,o._)("p",{id:"foot"},[(0,o.Uk)("¿Eres nuevo aquí? "),(0,o._)("a",{id:"creacta",href:"https://www.culqi.com/",target:"_blank"},"Crea una cuenta")])],-1);function E(e,a,l,i,t,n){return(0,o.wg)(),(0,o.iD)("div",u,[v,(0,o._)("div",p,[g,(0,o._)("form",{onSubmit:a[2]||(a[2]=(0,s.iM)(((...a)=>e.login&&e.login(...a)),["prevent"]))},[(0,o._)("div",null,[m,(0,o.wy)((0,o._)("input",{type:"text",id:"username","onUpdate:modelValue":a[0]||(a[0]=a=>e.username=a)},null,512),[[s.nr,e.username]])]),_,(0,o._)("div",null,[b,(0,o.wy)((0,o._)("input",{type:"password",id:"password","onUpdate:modelValue":a[1]||(a[1]=a=>e.password=a)},null,512),[[s.nr,e.password]]),e.errorMessage?((0,o.wg)(),(0,o.iD)("div",w,[f,h,(0,o.Uk)(" "+(0,r.zw)(e.errorMessage),1)])):(0,o.kq)("",!0)]),k,(0,o._)("div",y,[e.isLoading?((0,o.wg)(),(0,o.iD)("button",C,[P,(0,o.Uk)(" Iniciando sesión... ")])):((0,o.wg)(),(0,o.iD)("button",x,"Iniciar Sesión"))]),T],32)])])}var M=l(2262),D=l(5121);const O="https://fepruebatecnicaculqi-backend-production.up.railway.app";var S=(0,o.aZ)({name:"LoginV",setup(){const e=(0,M.iH)("c.quispe@culqi.com"),a=(0,M.iH)(""),l=(0,M.iH)(""),s=(0,M.iH)(!1),o=(0,n.tv)(),i=()=>{o.push("/empleados")},t=async()=>{s.value=!0;try{const s=await D.Z.post(O+"/auth/login",{correo:e.value,password:a.value});"error"===s.data.status?l.value=s.data.message:(localStorage.setItem("token",s.data.data.token),localStorage.setItem("usuario",s.data.data.user.nombre),i())}catch(o){l.value="Correo o contraseña incorrectos",console.error("Error al iniciar sesión:",o)}finally{s.value=!1}};return{username:e,password:a,errorMessage:l,isLoading:s,goToEmpleados:i,login:t}}}),I=l(3744);const L=(0,I.Z)(S,[["render",E]]);var z=L,H=l.p+"img/logo_black.16e4667f.svg";const U={class:"app-container"},q=(0,o._)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"},null,-1),j=(0,o._)("link",{href:"https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Poppins:wght@200&display=swap",rel:"stylesheet"},null,-1),Z={class:"sidebar"},A=(0,o.uE)('<div class="logo"><img src="'+H+'" alt="Logo"></div><ul class="menu"><li class="active"><span class="material-symbols-outlined">group</span> Empleados</li><li><i class="fa fa-briefcase"></i> Reclutamiento</li></ul>',2),N={id:"maincontent"},R={class:"app-header"},V={class:"user-info-right"},F={class:"circle"},$={class:"initials"},B={class:"user-name"},G={class:"content"},K={class:"card"},Y={class:"row"},W=(0,o._)("div",{class:"col-8"},[(0,o._)("h2",{class:"text-bold"},"Empleados"),(0,o._)("p",null,"Gestiona tus empleados")],-1),J={class:"col-4 text-right"},Q={key:0,class:""},X=(0,o._)("div",{class:"row"},[(0,o._)("div",{class:"col-12"},[(0,o._)("div",{class:"skeleton-row"})])],-1),ee=[X],ae={key:1},le=(0,o._)("button",{class:"download-button m-2"},[(0,o._)("i",{class:"fa fa-file-download"}),(0,o.Uk)(" Descargar")],-1),se=(0,o._)("button",{class:"new-button"},[(0,o._)("i",{class:"fa fa-plus"}),(0,o.Uk)(" Nuevo")],-1),oe=[le,se],ie={key:0,class:"skeleton-loading"},te=(0,o.uE)('<div class="row"><div class="col-4"><div class="skeleton-row"></div></div><div class="col-4"><div class="skeleton-row"></div></div><div class="col-4"><div class="skeleton-row"></div></div></div><br><div class="row" id="firstrow"><div class="col-1"><div class="skeleton-row-h"></div></div><div class="col-2"><div class="skeleton-row-h"></div></div><div class="col-2"><div class="skeleton-row-h"></div></div><div class="col-1"><div class="skeleton-row-h"></div></div><div class="col-2"><div class="skeleton-row-h"></div></div><div class="col-1"><div class="skeleton-row-h"></div></div><div class="col-2"><div class="skeleton-row-h"></div></div><div class="col-1"><div class="skeleton-row-h"></div></div></div>',3),ne=(0,o.uE)('<div class="col-1"><div class="skeleton-row"></div></div><div class="col-2"><div class="skeleton-row"></div></div><div class="col-2"><div class="skeleton-row"></div></div><div class="col-1"><div class="skeleton-row"></div></div><div class="col-2"><div class="skeleton-row"></div></div><div class="col-1"><div class="skeleton-row"></div></div><div class="col-2"><div class="skeleton-row"></div></div><div class="col-1"><div class="skeleton-row"></div></div>',8),re=[ne],ce={key:1},de=(0,o.uE)('<div class="filters"><div class="col-8 p-0"><div class="input-group"><input type="text" class="form-control" placeholder="Buscar empleado"><div class="input-group-append"><button class="btn btn-outline-secondary" id="btn1" type="button"><i class="fa fa-search"></i></button></div></div></div><div class="col-4"><select class="form-control"><option value="0">Nombre de cargo</option><option value="1">Activo</option><option value="2">Inactivo</option></select></div></div>',1),ue={id:"empleados-table",class:"display"},ve=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"Nombre"),(0,o._)("th",null,"Nombre cargo"),(0,o._)("th",null,"Departamento"),(0,o._)("th",null,"Oficina"),(0,o._)("th",null,"Cuenta"),(0,o._)("th",null,"Acciones")])],-1),pe={class:"font-bold"},ge=(0,o._)("br",null,null,-1),me={class:"smallemail"},_e=(0,o._)("td",null,[(0,o._)("button",{class:"rounded-button btn btn-success btn-sm m-1","data-toggle":"modal","data-target":"#viewModal"},[(0,o._)("span",{class:"material-symbols-outlined"}," visibility ")]),(0,o._)("button",{class:"rounded-button btn btn-primary btn-sm","data-toggle":"modal","data-target":"#viewModal"},[(0,o._)("span",{class:"material-symbols-outlined"}," edit ")]),(0,o._)("button",{class:"rounded-button btn btn-danger btn-sm m-1","data-toggle":"modal","data-target":"#viewModal"},[(0,o._)("span",{class:"material-symbols-outlined"}," delete ")])],-1),be={class:"row mt-3"},we={class:"col-md-6"},fe={"aria-label":"Page navigation"},he={class:"pagination"},ke={class:"page-item"},ye=(0,o._)("span",{"aria-hidden":"true"},"«",-1),Ce=[ye],Pe={class:"page-item"},xe={class:"page-item"},Te={class:"page-item"},Ee={class:"page-item"},Me={class:"page-item"},De={class:"page-item"},Oe={class:"page-item"},Se=(0,o._)("span",{"aria-hidden":"true"},"»",-1),Ie=[Se],Le={class:"col-md-6 text-right"},ze=(0,o._)("label",{for:"recordsPerPage",class:"mr-2"},null,-1),He=(0,o._)("option",{value:"8"},"Mostrar 8",-1),Ue=(0,o._)("option",{value:"16"},"Mostrar 16",-1),qe=(0,o._)("option",{value:"24"},"Mostrar 24",-1),je=(0,o._)("option",{value:"32"},"Mostrar 32",-1),Ze=[He,Ue,qe,je];function Ae(e,a,l,i,t,n){return(0,o.wg)(),(0,o.iD)("div",U,[q,j,(0,o._)("nav",Z,[A,(0,o._)("button",{class:"logout-button",onClick:a[0]||(a[0]=a=>e.salir())},"Salir")]),(0,o._)("div",N,[(0,o._)("div",R,[(0,o._)("div",V,[(0,o._)("div",F,[(0,o._)("span",$,(0,r.zw)(e.siglas),1)]),(0,o._)("span",B,(0,r.zw)(e.username),1)])]),(0,o._)("div",G,[(0,o._)("div",K,[(0,o._)("div",Y,[W,(0,o._)("div",J,[e.isLoading?((0,o.wg)(),(0,o.iD)("div",Q,ee)):((0,o.wg)(),(0,o.iD)("div",ae,oe))])]),e.isLoading?((0,o.wg)(),(0,o.iD)("div",ie,[te,((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(9,(e=>(0,o._)("div",{key:e,class:"row",id:"secondrow"},re))),64))])):((0,o.wg)(),(0,o.iD)("div",ce,[de,(0,o._)("table",ue,[ve,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.employers,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[(0,o._)("td",null,[(0,o._)("strong",pe,(0,r.zw)(e.nombre),1),ge,(0,o._)("small",me,(0,r.zw)(e.correo),1)]),(0,o._)("td",null,(0,r.zw)(e.cargo),1),(0,o._)("td",null,(0,r.zw)(e.departamento),1),(0,o._)("td",null,(0,r.zw)(e.oficina),1),(0,o._)("td",null,(0,r.zw)(e.estadoCuenta),1),_e])))),128))])]),(0,o._)("div",be,[(0,o._)("div",we,[(0,o._)("nav",fe,[(0,o._)("ul",he,[(0,o._)("li",ke,[(0,o._)("a",{class:"page-link",onClick:a[1]||(a[1]=a=>e.loadTable(e.currentPage-1,e.limit)),"aria-label":"Anterior"},Ce)]),(0,o._)("li",Pe,[(0,o._)("a",{class:(0,r.C_)(["page-link",{"selected-page":1===e.currentPage}]),onClick:a[2]||(a[2]=a=>e.loadTable(1,e.limit))},"1",2)]),(0,o._)("li",xe,[(0,o._)("a",{class:(0,r.C_)(["page-link",{"selected-page":2===e.currentPage}]),onClick:a[3]||(a[3]=a=>e.loadTable(2,e.limit))},"2",2)]),(0,o._)("li",Te,[(0,o._)("a",{class:(0,r.C_)(["page-link",{"selected-page":3===e.currentPage}]),onClick:a[4]||(a[4]=a=>e.loadTable(3,e.limit))},"3",2)]),(0,o._)("li",Ee,[(0,o._)("a",{class:(0,r.C_)(["page-link",{"selected-page":4===e.currentPage}]),onClick:a[5]||(a[5]=a=>e.loadTable(4,e.limit))},"4",2)]),(0,o._)("li",Me,[(0,o._)("a",{class:(0,r.C_)(["page-link",{"selected-page":5===e.currentPage}]),onClick:a[6]||(a[6]=a=>e.loadTable(5,e.limit))},"5",2)]),(0,o._)("li",De,[(0,o._)("a",{class:(0,r.C_)(["page-link",{"selected-page":6===e.currentPage}]),onClick:a[7]||(a[7]=a=>e.loadTable(6,e.limit))},"6",2)]),(0,o._)("li",Oe,[(0,o._)("a",{class:(0,r.C_)(["page-link",{"selected-page":7===e.currentPage}]),onClick:a[8]||(a[8]=a=>e.loadTable(7,e.limit))},"7",2)]),(0,o._)("li",{class:(0,r.C_)(["page-item",{"selected-page":1===e.currentPage}])},[(0,o._)("a",{class:"page-link",onClick:a[9]||(a[9]=a=>e.loadTable(e.currentPage+1,e.limit)),"aria-label":"Siguiente"},Ie)],2)])])]),(0,o._)("div",Le,[(0,o.Uk)(" Mostrando "+(0,r.zw)(e.startIndex)+" a "+(0,r.zw)(e.endIndex)+" de "+(0,r.zw)(e.totalRegistros)+" registros ",1),ze,(0,o.wy)((0,o._)("select",{id:"recordsPerPage",class:"p-2","onUpdate:modelValue":a[10]||(a[10]=a=>e.limit=a),onChange:a[11]||(a[11]=a=>e.loadTable(e.currentPage,e.limit))},Ze,544),[[s.bM,e.limit]])])])]))])])])])}l(991),l(4069);var Ne=(0,o.aZ)({name:"EmpleadosL",setup(){const e=(0,n.tv)(),a=(0,M.iH)(!1),l=(0,M.iH)([]),s=(0,M.iH)(1),i=(0,M.iH)(8),t=(0,M.iH)(0),r=(0,M.iH)(""),c=(0,M.iH)(""),d=(0,o.Fl)((()=>(s.value-1)*i.value+1)),u=(0,o.Fl)((()=>Math.min(s.value*i.value,t.value))),v=()=>{localStorage.removeItem("token"),localStorage.removeItem("usuario"),e.push("/")},p=async(e,o)=>{if(e<1)return;a.value=!0,s.value=e;const i=localStorage.getItem("token");if(!i)return void console.error("No se encontró el token en localStorage");const n=new Headers;n.append("Authorization",`Bearer ${i}`);const r=`${O}/empleados?limit=${o}&page=${e}`;try{const e=await fetch(r,{method:"GET",headers:n}),s=await e.json();l.value=s.data,t.value=s.total,a.value=!1}catch(c){console.error("Error al obtener los datos de la API:",c)}};return(0,o.bv)((()=>{p(s.value,i.value),r.value=localStorage.getItem("usuario")||"",c.value=r.value.split(" ").map((e=>e[0])).join("").toUpperCase()})),{isLoading:a,employers:l,currentPage:s,limit:i,startIndex:d,endIndex:u,totalRegistros:t,username:r,siglas:c,salir:v,loadTable:p}}});const Re=(0,I.Z)(Ne,[["render",Ae]]);var Ve=Re;const Fe=(0,n.p7)({history:(0,n.PO)(),routes:[{path:"/",name:"Login",component:z},{path:"/empleados",name:"EmpleadosL",component:Ve}]});var $e=(0,o.aZ)({name:"LoginPage",router:Fe,data(){return{username:"c.quispe@culqi.com",password:"",errorMessage:"",isloading:!1}},setup(){const e=(0,n.tv)(),a=()=>{e.push("/empleados")};return{goToEmpleados:a}}});const Be=(0,I.Z)($e,[["render",t]]);var Ge=Be;l(9755);const Ke=(0,n.p7)({history:(0,n.PO)(),routes:[{path:"/",name:"Login",component:z},{path:"/empleados",name:"EmpleadosL",component:Ve}]}),Ye=(0,s.ri)(Ge).use(Ke);Ye.mount("#app")}},a={};function l(s){var o=a[s];if(void 0!==o)return o.exports;var i=a[s]={exports:{}};return e[s].call(i.exports,i,i.exports,l),i.exports}l.m=e,function(){var e=[];l.O=function(a,s,o,i){if(!s){var t=1/0;for(d=0;d<e.length;d++){s=e[d][0],o=e[d][1],i=e[d][2];for(var n=!0,r=0;r<s.length;r++)(!1&i||t>=i)&&Object.keys(l.O).every((function(e){return l.O[e](s[r])}))?s.splice(r--,1):(n=!1,i<t&&(t=i));if(n){e.splice(d--,1);var c=o();void 0!==c&&(a=c)}}return a}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,o,i]}}(),function(){l.d=function(e,a){for(var s in a)l.o(a,s)&&!l.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){l.p="/tu-nombre-de-usuario/tu-repositorio/"}(),function(){var e={143:0};l.O.j=function(a){return 0===e[a]};var a=function(a,s){var o,i,t=s[0],n=s[1],r=s[2],c=0;if(t.some((function(a){return 0!==e[a]}))){for(o in n)l.o(n,o)&&(l.m[o]=n[o]);if(r)var d=r(l)}for(a&&a(s);c<t.length;c++)i=t[c],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(d)},s=self["webpackChunkculqui"]=self["webpackChunkculqui"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=l.O(void 0,[998],(function(){return l(6124)}));s=l.O(s)})();
//# sourceMappingURL=app.45dca6f7.js.map