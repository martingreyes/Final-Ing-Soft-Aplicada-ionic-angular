"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8204],{8204:(v,c,a)=>{a.r(c),a.d(c,{Tab2PageModule:()=>f});var n=a(3800),d=a(6814),h=a(95),m=a(3554),u=a(5877),p=a(5861),t=a(5678);const g=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}getUserData(){var o=this;return(0,p.Z)(function*(){try{const l=yield fetch("http://localhost:8080/api/account",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTcwNDU1MjA5M30.PWIn549iMy9FMf8WrQeJcLD6zLvRlQdecTd5C0WKwle2iKPQooKiWe97pstwu2OXlvAU6ASwqK4z3mc1BgIxiQ"}});if(!l.ok)throw Error(l.statusText);const r=yield l.json();o.firstName=r.firstName,o.lastName=r.lastName,o.email=r.email,o.langKey=r.langKey,o.authorities=r.authorities,console.log("User data:",r)}catch(i){console.error("Error fetching user data:",i)}})()}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-tab2"]],decls:31,vars:7,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[1,"container"],[1,"ion-padding"],[3,"click"]],template:function(i,s){1&i&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," Tab 2 "),t.qZA()()(),t.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),t._uU(8,"Tab 2"),t.qZA()()(),t.TgZ(9,"div",4)(10,"div",5)(11,"h1"),t._uU(12,"Ionic Angular Rest Example."),t.qZA()(),t.TgZ(13,"div",5)(14,"ion-button",6),t.NdJ("click",function(){return s.getUserData()}),t._uU(15,"Obtener Datos del Usuario"),t.qZA()(),t.TgZ(16,"div",5)(17,"ion-label"),t._uU(18),t.qZA()(),t.TgZ(19,"div",5)(20,"ion-label"),t._uU(21),t.qZA()(),t.TgZ(22,"div",5)(23,"ion-label"),t._uU(24),t.qZA()(),t.TgZ(25,"div",5)(26,"ion-label"),t._uU(27),t.qZA()(),t.TgZ(28,"div",5)(29,"ion-label"),t._uU(30),t.qZA()()()()),2&i&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(14),t.hij("Nombre: ",s.firstName,""),t.xp6(3),t.hij("Apellido: ",s.lastName,""),t.xp6(3),t.hij("Email: ",s.email,""),t.xp6(3),t.hij("Idioma: ",s.langKey,""),t.xp6(3),t.hij("Permisos: ",s.authorities,""))},dependencies:[n.YG,n.W2,n.Gu,n.Q$,n.wd,n.sr]})}return e})()}];let T=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(g),u.Bz]})}return e})(),f=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[n.Pc,d.ez,h.u5,m.e,T]})}return e})()}}]);