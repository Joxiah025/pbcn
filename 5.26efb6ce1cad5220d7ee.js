(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{TDBs:function(n,t,e){"use strict";e.r(t),e.d(t,"DashboardModule",(function(){return I}));var i=e("ofXK"),o=e("tyNb"),c=e("fXoL");let a=(()=>{class n{canActivate(n,t){return!0}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=c.Eb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var b=e("jhN1");let r=(()=>{class n{constructor(n){this.title=n}ngOnInit(){this.title.setTitle("Applications")}}return n.\u0275fac=function(t){return new(t||n)(c.Ib(b.c))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-applications"]],decls:2,vars:0,template:function(n,t){1&n&&(c.Ob(0,"p"),c.uc(1,"applications works!"),c.Nb())},styles:[""]}),n})();var s=e("3Pt+");function l(n,t){1&n&&(c.Ob(0,"section",13),c.Ob(1,"div",14),c.Ob(2,"div",15),c.Ob(3,"div",16),c.Ob(4,"div",17),c.uc(5,"1"),c.Nb(),c.Nb(),c.Ob(6,"div",16),c.Ob(7,"div",18),c.uc(8,"2"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(9,"div",19),c.Ob(10,"h5"),c.uc(11,"Request for background check"),c.Nb(),c.Ob(12,"p"),c.uc(13,"Please provide your details below to continue"),c.Nb(),c.Nb(),c.Ob(14,"div",20),c.Ob(15,"label"),c.uc(16,"Country"),c.Nb(),c.Ob(17,"select",21),c.Ob(18,"option",22),c.uc(19,"Choose a country"),c.Nb(),c.Ob(20,"option",23),c.uc(21,"Nigeria"),c.Nb(),c.Ob(22,"option",24),c.uc(23,"Tunisia"),c.Nb(),c.Ob(24,"option",25),c.uc(25,"Canada"),c.Nb(),c.Nb(),c.Nb(),c.Ob(26,"div",20),c.Ob(27,"label"),c.uc(28,"Application Type"),c.Nb(),c.Ob(29,"select"),c.Ob(30,"option",22),c.uc(31,"Choose"),c.Nb(),c.Ob(32,"option",23),c.uc(33,"Nigeria"),c.Nb(),c.Ob(34,"option",24),c.uc(35,"Tunisia"),c.Nb(),c.Ob(36,"option",25),c.uc(37,"Canada"),c.Nb(),c.Nb(),c.Nb(),c.Nb())}function d(n,t){1&n&&(c.Ob(0,"section",26),c.Ob(1,"div",14),c.Ob(2,"div",15),c.Ob(3,"div",16),c.Jb(4,"div",27),c.Nb(),c.Ob(5,"div",16),c.Ob(6,"div",17),c.uc(7,"2"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(8,"div",19),c.Ob(9,"h5"),c.uc(10,"Choose payment"),c.Nb(),c.Nb(),c.Ob(11,"fieldset"),c.Ob(12,"legend"),c.uc(13,"Payment Methods"),c.Nb(),c.Ob(14,"div",28),c.Ob(15,"div"),c.Jb(16,"img",29),c.Nb(),c.Ob(17,"div",30),c.Ob(18,"p"),c.uc(19,"Pay with your card"),c.Nb(),c.Nb(),c.Ob(20,"div",31),c.Ob(21,"div",32),c.uc(22,"\u20a61,500"),c.Nb(),c.Nb(),c.Nb(),c.Ob(23,"div",28),c.Ob(24,"div"),c.Jb(25,"img",33),c.Nb(),c.Ob(26,"div",30),c.Ob(27,"p"),c.uc(28,"Pay with your bank"),c.Nb(),c.Nb(),c.Ob(29,"div",31),c.Ob(30,"div",32),c.uc(31,"\u20a61,500"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb())}function g(n,t){if(1&n){const n=c.Pb();c.Ob(0,"button",34),c.Vb("click",(function(){return c.mc(n),c.Yb().moveNext(-1)})),c.uc(1,"PREVIOUS"),c.Nb()}}function p(n,t){if(1&n){const n=c.Pb();c.Ob(0,"button",35),c.Vb("click",(function(){return c.mc(n),c.Yb().moveNext(1)})),c.uc(1,"NEXT"),c.Nb()}}function O(n,t){1&n&&(c.Ob(0,"button",36),c.uc(1,"SUBMIT"),c.Nb())}let u=(()=>{class n{constructor(n){this.title=n,this.stepCount=0}ngOnInit(){this.title.setTitle("Background Check"),this.initBackgroundCheckForm()}moveNext(n){this.stepCount+=n}initBackgroundCheckForm(){this.backgroundCheckForm=new s.d({stepone:new s.d({country:new s.b("")}),steptwo:new s.d({country:new s.b("")})})}saveBackgroundCheck(){}}return n.\u0275fac=function(t){return new(t||n)(c.Ib(b.c))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-background-check"]],decls:16,vars:6,consts:[[1,"row","mb-4"],[1,"col-12"],[1,"title"],[1,"col-12","col-md-8","offset-md-2"],[3,"formGroup","ngSubmit"],[1,"form-section"],["formGroupName","stepone","class","section-one",4,"ngIf"],["formGroupName","steptwo","class","section-one",4,"ngIf"],[1,"footer-space"],["class","btn btn-link button-link","type","button",3,"click",4,"ngIf"],["class","btn btn-primary btn-lg","type","button",3,"click",4,"ngIf"],["class","btn btn-primary btn-lg","type","submit",4,"ngIf"],[1,"col-md-2"],["formGroupName","stepone",1,"section-one"],[1,"form-header"],[1,"ellipsis-space"],[1,"ellipsis-container"],[1,"ellipsis-active"],[1,"ellipsis"],[1,"title-block"],[1,"mt-3"],["formControlName","country"],["value",""],["value","Nigeria"],["value","Tunisia"],["value","Canada"],["formGroupName","steptwo",1,"section-one"],[1,"ellipsis-checked"],[1,"box-card","mb-4"],["src","assets/img/svg/card-icon.svg","alt","credit card icon"],[1,"mx-auto","p-2"],[1,"mx-auto"],[1,"price-box"],["src","assets/img/svg/bank-icon.svg","alt","bank icon"],["type","button",1,"btn","btn-link","button-link",3,"click"],["type","button",1,"btn","btn-primary","btn-lg",3,"click"],["type","submit",1,"btn","btn-primary","btn-lg"]],template:function(n,t){1&n&&(c.Ob(0,"main"),c.Ob(1,"div",0),c.Ob(2,"div",1),c.Ob(3,"h5",2),c.uc(4,"Request Background Check"),c.Nb(),c.Nb(),c.Nb(),c.Ob(5,"div",0),c.Ob(6,"div",3),c.Ob(7,"form",4),c.Vb("ngSubmit",(function(){return t.saveBackgroundCheck()})),c.Ob(8,"div",5),c.sc(9,l,38,0,"section",6),c.sc(10,d,32,0,"section",7),c.Nb(),c.Ob(11,"div",8),c.sc(12,g,2,0,"button",9),c.sc(13,p,2,0,"button",10),c.sc(14,O,2,0,"button",11),c.Nb(),c.Nb(),c.Nb(),c.Jb(15,"div",12),c.Nb(),c.Nb()),2&n&&(c.xb(7),c.dc("formGroup",t.backgroundCheckForm),c.xb(2),c.dc("ngIf",0==t.stepCount),c.xb(1),c.dc("ngIf",1==t.stepCount),c.xb(2),c.dc("ngIf",1==t.stepCount),c.xb(1),c.dc("ngIf",0==t.stepCount),c.xb(1),c.dc("ngIf",1==t.stepCount))},directives:[s.q,s.j,s.e,i.j,s.f,s.n,s.i,s.c,s.l,s.p],styles:['main[_ngcontent-%COMP%]{padding:30px}main[_ngcontent-%COMP%]   h5.title[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:500;font-size:18px;line-height:22px;color:#00184b;margin:100px 0 20px auto}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]{display:inline-flex;justify-content:center}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]:before{content:url(bar.c88f87907e82cd21275e.svg);position:absolute;left:-41px;top:4px}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]:after{content:url(bar.c88f87907e82cd21275e.svg);position:absolute;right:-41px;top:4px}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]:first-child:after, main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]:first-child:before, main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]:last-child:after{content:""}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]:first-child{margin-left:auto}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]:last-child{margin-right:auto}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]{position:relative;margin:auto 22px;text-align:center}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]   .ellipsis[_ngcontent-%COMP%]{width:33px;height:33px;border-radius:50%;border:1px solid #e5e6f2;background:#fff;color:#979797;text-align:center;vertical-align:middle;line-height:33px}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]   .ellipsis-active[_ngcontent-%COMP%]{width:33px;height:33px;border-radius:50%;color:#272643;text-align:center;vertical-align:middle;line-height:33px;background:#bae8e8}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]   .ellipsis-checked[_ngcontent-%COMP%]{width:33px;height:33px;border-radius:50%;color:#fff;text-align:center;vertical-align:middle;line-height:33px;background:#272643;position:relative}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]   .ellipsis-checked[_ngcontent-%COMP%]:before{content:url(check-all.0f0483c9f9a05168d280.svg);position:absolute;top:2px;bottom:0;left:0;right:0}main[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]{margin-top:20px;text-align:center;position:relative}main[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:700;font-size:20px;line-height:34px}main[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;color:#00184b}main[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:13px;line-height:22px}main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{padding:30px 100px 10px}main[_ngcontent-%COMP%]   .footer-space[_ngcontent-%COMP%]{padding:20px 100px;background:#fff!important;text-align:right;border-top:1px solid #ccc}main[_ngcontent-%COMP%]   .footer-space[_ngcontent-%COMP%]   .button-link[_ngcontent-%COMP%]{position:relative;color:#00184b}main[_ngcontent-%COMP%]   .footer-space[_ngcontent-%COMP%]   .button-link[_ngcontent-%COMP%]:before{content:url(chevron-left.2cc02c9e876fc7461300.svg);position:absolute;top:4px;left:-10px}main[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{border:1px solid #c6cbdf;box-sizing:border-box;border-radius:8px;padding:10px 30px;margin:20px auto 40px}main[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{text-align:left}main[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{width:auto;background:#fff;padding:3px;font-family:Inter;font-style:normal;font-weight:600;font-size:16px;line-height:19px;color:#949dc2;text-align:left}main[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   .box-card[_ngcontent-%COMP%]{padding-top:10px;padding-left:20px;padding-right:35px;position:relative;border:1px solid #c6cbdf;box-sizing:border-box;border-radius:8px;display:flex;justify-content:space-between;vertical-align:middle}main[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   .box-card[_ngcontent-%COMP%]   .price-box[_ngcontent-%COMP%]{margin-top:8px;text-align:center;width:78px;height:25px;vertical-align:middle;line-height:25px;font-weight:700;background:#bae8e8;border-radius:30px}main[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   .box-card[_ngcontent-%COMP%]:after{content:url(chevron-right.659ed0ee81b3a01e77cb.svg);position:absolute;right:5px;top:19px}']}),n})();function m(n,t){1&n&&(c.Ob(0,"section",13),c.Ob(1,"div",14),c.Ob(2,"div",15),c.Ob(3,"div",16),c.Ob(4,"div",17),c.uc(5,"1"),c.Nb(),c.Nb(),c.Ob(6,"div",16),c.Ob(7,"div",18),c.uc(8,"2"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(9,"div",19),c.Ob(10,"h5"),c.uc(11,"Request for character certificate"),c.Nb(),c.Ob(12,"p"),c.uc(13,"Please provide your details below to continue"),c.Nb(),c.Nb(),c.Ob(14,"div",20),c.Ob(15,"label"),c.uc(16,"Country"),c.Nb(),c.Ob(17,"select",21),c.Ob(18,"option",22),c.uc(19,"Choose a country"),c.Nb(),c.Ob(20,"option",23),c.uc(21,"Nigeria"),c.Nb(),c.Ob(22,"option",24),c.uc(23,"Tunisia"),c.Nb(),c.Ob(24,"option",25),c.uc(25,"Canada"),c.Nb(),c.Nb(),c.Nb(),c.Ob(26,"div",20),c.Ob(27,"label"),c.uc(28,"Application Type"),c.Nb(),c.Ob(29,"select"),c.Ob(30,"option",22),c.uc(31,"Choose"),c.Nb(),c.Ob(32,"option",23),c.uc(33,"Nigeria"),c.Nb(),c.Ob(34,"option",24),c.uc(35,"Tunisia"),c.Nb(),c.Ob(36,"option",25),c.uc(37,"Canada"),c.Nb(),c.Nb(),c.Nb(),c.Nb())}function f(n,t){1&n&&(c.Ob(0,"section",26),c.Ob(1,"div",14),c.Ob(2,"div",15),c.Ob(3,"div",16),c.Jb(4,"div",27),c.Nb(),c.Ob(5,"div",16),c.Ob(6,"div",17),c.uc(7,"2"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(8,"div",19),c.Ob(9,"h5"),c.uc(10,"Choose payment"),c.Nb(),c.Nb(),c.Ob(11,"fieldset"),c.Ob(12,"legend"),c.uc(13,"Payment Methods"),c.Nb(),c.Ob(14,"div",28),c.Ob(15,"div"),c.Jb(16,"img",29),c.Nb(),c.Ob(17,"div",30),c.Ob(18,"p"),c.uc(19,"Pay with your card"),c.Nb(),c.Nb(),c.Ob(20,"div",31),c.Ob(21,"div",32),c.uc(22,"\u20a61,500"),c.Nb(),c.Nb(),c.Nb(),c.Ob(23,"div",28),c.Ob(24,"div"),c.Jb(25,"img",33),c.Nb(),c.Ob(26,"div",30),c.Ob(27,"p"),c.uc(28,"Pay with your bank"),c.Nb(),c.Nb(),c.Ob(29,"div",31),c.Ob(30,"div",32),c.uc(31,"\u20a61,500"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb())}function C(n,t){if(1&n){const n=c.Pb();c.Ob(0,"button",34),c.Vb("click",(function(){return c.mc(n),c.Yb().moveNext(-1)})),c.uc(1,"PREVIOUS"),c.Nb()}}function h(n,t){if(1&n){const n=c.Pb();c.Ob(0,"button",35),c.Vb("click",(function(){return c.mc(n),c.Yb().moveNext(1)})),c.uc(1,"NEXT"),c.Nb()}}function P(n,t){1&n&&(c.Ob(0,"button",36),c.uc(1,"SUBMIT"),c.Nb())}let M=(()=>{class n{constructor(n){this.title=n,this.stepCount=0}ngOnInit(){this.title.setTitle("Clearance Certificate"),this.initCharacterClearanceForm()}moveNext(n){this.stepCount+=n}initCharacterClearanceForm(){this.characterClearanceForm=new s.d({stepone:new s.d({country:new s.b("")}),steptwo:new s.d({country:new s.b("")})})}saveCharacterClearance(){}}return n.\u0275fac=function(t){return new(t||n)(c.Ib(b.c))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-clearance-certificate"]],decls:16,vars:6,consts:[[1,"row","mb-4"],[1,"col"],[1,"title"],[1,"col-12","col-md-8","offset-md-2"],[3,"formGroup","ngSubmit"],[1,"form-section"],["formGroupName","stepone","class","section-one",4,"ngIf"],["formGroupName","steptwo","class","section-one",4,"ngIf"],[1,"footer-space"],["class","btn btn-link button-link","type","button",3,"click",4,"ngIf"],["class","btn btn-primary btn-lg","type","button",3,"click",4,"ngIf"],["class","btn btn-primary btn-lg","type","submit",4,"ngIf"],[1,"col-md-2"],["formGroupName","stepone",1,"section-one"],[1,"form-header"],[1,"ellipsis-space"],[1,"ellipsis-container"],[1,"ellipsis-active"],[1,"ellipsis"],[1,"title-block"],[1,"mt-3"],["formControlName","country"],["value",""],["value","Nigeria"],["value","Tunisia"],["value","Canada"],["formGroupName","steptwo",1,"section-one"],[1,"ellipsis-checked"],[1,"box-card","mb-4"],["src","assets/img/svg/card-icon.svg","alt","credit card icon"],[1,"mx-auto","p-2"],[1,"mx-auto"],[1,"price-box"],["src","assets/img/svg/bank-icon.svg","alt","bank icon"],["type","button",1,"btn","btn-link","button-link",3,"click"],["type","button",1,"btn","btn-primary","btn-lg",3,"click"],["type","submit",1,"btn","btn-primary","btn-lg"]],template:function(n,t){1&n&&(c.Ob(0,"main"),c.Ob(1,"div",0),c.Ob(2,"div",1),c.Ob(3,"h5",2),c.uc(4,"Police Clearance Certificate"),c.Nb(),c.Nb(),c.Nb(),c.Ob(5,"div",0),c.Ob(6,"div",3),c.Ob(7,"form",4),c.Vb("ngSubmit",(function(){return t.saveCharacterClearance()})),c.Ob(8,"div",5),c.sc(9,m,38,0,"section",6),c.sc(10,f,32,0,"section",7),c.Nb(),c.Ob(11,"div",8),c.sc(12,C,2,0,"button",9),c.sc(13,h,2,0,"button",10),c.sc(14,P,2,0,"button",11),c.Nb(),c.Nb(),c.Nb(),c.Jb(15,"div",12),c.Nb(),c.Nb()),2&n&&(c.xb(7),c.dc("formGroup",t.characterClearanceForm),c.xb(2),c.dc("ngIf",0==t.stepCount),c.xb(1),c.dc("ngIf",1==t.stepCount),c.xb(2),c.dc("ngIf",1==t.stepCount),c.xb(1),c.dc("ngIf",0==t.stepCount),c.xb(1),c.dc("ngIf",1==t.stepCount))},directives:[s.q,s.j,s.e,i.j,s.f,s.n,s.i,s.c,s.l,s.p],styles:['main[_ngcontent-%COMP%]{padding:30px}main[_ngcontent-%COMP%]   h5.title[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:500;font-size:18px;line-height:22px;color:#00184b;margin:100px 0 20px auto}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]{display:inline-flex;justify-content:center}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]:before{content:url(bar.c88f87907e82cd21275e.svg);position:absolute;left:-41px;top:4px}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]:after{content:url(bar.c88f87907e82cd21275e.svg);position:absolute;right:-41px;top:4px}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]:first-child:after, main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]:first-child:before, main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]:last-child:after{content:""}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]:first-child{margin-left:auto}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]:last-child{margin-right:auto}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]{position:relative;margin:auto 22px;text-align:center}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]   .ellipsis[_ngcontent-%COMP%]{width:33px;height:33px;border-radius:50%;border:1px solid #e5e6f2;background:#fff;color:#979797;text-align:center;vertical-align:middle;line-height:33px}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]   .ellipsis-active[_ngcontent-%COMP%]{width:33px;height:33px;border-radius:50%;color:#272643;text-align:center;vertical-align:middle;line-height:33px;background:#bae8e8}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]   .ellipsis-checked[_ngcontent-%COMP%]{width:33px;height:33px;border-radius:50%;color:#fff;text-align:center;vertical-align:middle;line-height:33px;background:#272643;position:relative}main[_ngcontent-%COMP%]   .ellipsis-space[_ngcontent-%COMP%]   .ellipsis-container[_ngcontent-%COMP%]   .ellipsis-checked[_ngcontent-%COMP%]:before{content:url(check-all.0f0483c9f9a05168d280.svg);position:absolute;top:2px;bottom:0;left:0;right:0}main[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]{margin-top:20px;text-align:center;position:relative}main[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:700;font-size:20px;line-height:34px}main[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;color:#00184b}main[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400;font-size:13px;line-height:22px}main[_ngcontent-%COMP%]   .form-section[_ngcontent-%COMP%]{padding:30px 100px 10px}main[_ngcontent-%COMP%]   .footer-space[_ngcontent-%COMP%]{padding:20px 100px;background:#fff!important;text-align:right;border-top:1px solid #ccc}main[_ngcontent-%COMP%]   .footer-space[_ngcontent-%COMP%]   .button-link[_ngcontent-%COMP%]{position:relative;color:#00184b}main[_ngcontent-%COMP%]   .footer-space[_ngcontent-%COMP%]   .button-link[_ngcontent-%COMP%]:before{content:url(chevron-left.2cc02c9e876fc7461300.svg);position:absolute;top:4px;left:-10px}main[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{border:1px solid #c6cbdf;box-sizing:border-box;border-radius:8px;padding:10px 30px;margin:20px auto 40px}main[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{text-align:left}main[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{width:auto;background:#fff;padding:3px;font-family:Inter;font-style:normal;font-weight:600;font-size:16px;line-height:19px;color:#949dc2;text-align:left}main[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   .box-card[_ngcontent-%COMP%]{padding-top:10px;padding-left:20px;padding-right:35px;position:relative;border:1px solid #c6cbdf;box-sizing:border-box;border-radius:8px;display:flex;justify-content:space-between;vertical-align:middle}main[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   .box-card[_ngcontent-%COMP%]   .price-box[_ngcontent-%COMP%]{margin-top:8px;text-align:center;width:78px;height:25px;vertical-align:middle;line-height:25px;font-weight:700;background:#bae8e8;border-radius:30px}main[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   .box-card[_ngcontent-%COMP%]:after{content:url(chevron-right.659ed0ee81b3a01e77cb.svg);position:absolute;right:5px;top:19px}']}),n})();const _=function(){return["/dashboard"]},N=function(){return["/background-check"]},x=function(){return["/clearance-certificate"]},v=function(){return["/applications"]},k=function(){return["/profile"]},y=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Cb({type:n,selectors:[["app-dashboard-layout"]],decls:56,vars:10,consts:[[1,"cookie"],[1,"menu-hamburger"],["src","assets/img/svg/menu.svg","alt","menu hamburger"],[1,"icon-holder"],["src","assets/img/svg/icon.svg","alt","mapp icon"],[1,"search-form"],["type","search","placeholder","Search in app ..."],[1,"sign-out"],["src","assets/img/svg/power.svg","alt","sign-out icon","routerLink","['/signin']"],[1,"profile-header"],[1,"img"],["src","assets/img/png/author-1.png","alt","profile image"],[1,"name"],[1,"menu"],[1,"menu-header-title"],[1,"menu-item"],["routerLinkActive","menu-item-active",1,"menu-item-list",3,"routerLink"],["src","assets/img/svg/dashboard.svg",1,"mr-4"],["src","assets/img/svg/background-check.svg",1,"mr-4"],["src","assets/img/svg/character-check.svg",1,"mr-4"],["src","assets/img/svg/application.svg",1,"mr-4"],["src","assets/img/svg/profile.svg",1,"mr-4"],[1,"main"]],template:function(n,t){1&n&&(c.Ob(0,"header"),c.Ob(1,"div",0),c.Ob(2,"div",1),c.Jb(3,"img",2),c.Nb(),c.Ob(4,"div",3),c.Jb(5,"img",4),c.Nb(),c.Nb(),c.Ob(6,"div",5),c.Jb(7,"input",6),c.Nb(),c.Ob(8,"div",7),c.Jb(9,"img",8),c.Nb(),c.Nb(),c.Ob(10,"main"),c.Ob(11,"aside"),c.Ob(12,"div",9),c.Ob(13,"div",10),c.Jb(14,"img",11),c.Nb(),c.Ob(15,"div",12),c.Ob(16,"p"),c.uc(17,"Houssem Aouar"),c.Nb(),c.Nb(),c.Nb(),c.Ob(18,"div",13),c.Ob(19,"div",14),c.uc(20,"Menu"),c.Nb(),c.Ob(21,"ul",15),c.Ob(22,"li"),c.Ob(23,"a",16),c.Jb(24,"img",17),c.uc(25," Dashboard"),c.Nb(),c.Nb(),c.Nb(),c.Ob(26,"div",14),c.uc(27,"Request"),c.Nb(),c.Ob(28,"ul",15),c.Ob(29,"li"),c.Ob(30,"a",16),c.Jb(31,"img",18),c.uc(32," Background Check"),c.Nb(),c.Nb(),c.Ob(33,"li"),c.Ob(34,"a",16),c.Jb(35,"img",19),c.uc(36,"Character Certificate"),c.Nb(),c.Nb(),c.Nb(),c.Ob(37,"div",14),c.uc(38,"Applications"),c.Nb(),c.Ob(39,"ul",15),c.Ob(40,"li"),c.Ob(41,"a",16),c.Jb(42,"img",20),c.uc(43,"Pending Application"),c.Nb(),c.Nb(),c.Nb(),c.Ob(44,"div",14),c.uc(45,"Account"),c.Nb(),c.Ob(46,"ul",15),c.Ob(47,"li"),c.Ob(48,"a",16),c.Jb(49,"img",21),c.uc(50,"Profile"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(51,"section",22),c.Jb(52,"router-outlet"),c.Ob(53,"footer"),c.Ob(54,"span"),c.uc(55,"Copyright The Nigerian Police Force 2020"),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&n&&(c.xb(23),c.dc("routerLink",c.fc(5,_)),c.xb(7),c.dc("routerLink",c.fc(6,N)),c.xb(4),c.dc("routerLink",c.fc(7,x)),c.xb(7),c.dc("routerLink",c.fc(8,v)),c.xb(7),c.dc("routerLink",c.fc(9,k)))},directives:[o.c,o.e,o.d,o.g],styles:["header[_ngcontent-%COMP%]{z-index:10;height:74px;width:100%;background:#fff;box-shadow:0 2px 10px rgba(0,0,0,.1);position:fixed;display:flex;justify-content:space-between;padding-left:30px;padding-right:30px}header[_ngcontent-%COMP%]   .cookie[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}header[_ngcontent-%COMP%]   .cookie[_ngcontent-%COMP%]   .icon-holder[_ngcontent-%COMP%]{margin-left:50px;text-align:center;vertical-align:middle;display:flex}header[_ngcontent-%COMP%]   .cookie[_ngcontent-%COMP%]   .icon-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:45px}header[_ngcontent-%COMP%]   .cookie[_ngcontent-%COMP%]   .menu-hamburger[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .sign-out[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;display:flex;cursor:pointer}header[_ngcontent-%COMP%]   .sign-out[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px}header[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;position:relative;margin-left:-500px}@media screen and (max-width:700px){header[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]{display:none}}@media screen and (min-width:700px){header[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]{display:flex}}header[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]{background:#f2f3fa;border:1px solid #c3c5db;box-sizing:border-box;border-radius:4px;height:40px;width:400px;margin-top:20px;padding-left:50px;outline:none}header[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]:before{content:url(search.89a1f894eca348d2e56d.svg);position:absolute;top:28px;left:15px}main[_ngcontent-%COMP%]{background:#f5f7f8;display:flex}main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{min-height:100vh;width:310px;background:#272643;padding:1px}@media screen and (max-width:700px){main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{display:none}}@media screen and (min-width:700px){main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{display:block}}main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;margin:120px 30px auto;border-bottom:2px solid #fff;padding-bottom:15px}main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{border-radius:50%;border:4px solid #fff}main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{vertical-align:middle}main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:15px;color:#fff;margin-bottom:unset;font-weight:500}@media screen and (max-width:300px){main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{line-height:unset}}@media screen and (min-width:700px){main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{line-height:unset}}@media screen and (min-width:900px){main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{line-height:55px}}main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-header-title[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:400;font-size:18px;line-height:30px;color:#a8a6ce;margin-top:20px;padding-left:30px;padding-bottom:5px}main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.menu-item[_ngcontent-%COMP%]{list-style-type:none;padding:0}main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.menu-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.menu-item-list[_ngcontent-%COMP%]{text-decoration:none;font-family:Inter;font-style:normal;font-weight:400;font-size:15px;line-height:30px;color:#fff;padding:12px 15px 12px 30px;cursor:pointer;display:block}main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.menu-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.menu-item-active[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul.menu-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a.menu-item-list[_ngcontent-%COMP%]:hover{background:rgba(79,77,137,.6)}@media screen and (max-width:700px){main[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{width:100%}}@media screen and (min-width:700px){main[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{width:1208px}}main[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{height:50px;background:#fff;filter:drop-shadow(0 2px 10px rgba(0,0,0,.06));color:#272643;font-size:14px;padding:15px 30px 10px}"]}),n})(),children:[{path:"dashboard",component:(()=>{class n{constructor(n){this.title=n}ngOnInit(){this.title.setTitle("Welcome! Houssem")}}return n.\u0275fac=function(t){return new(t||n)(c.Ib(b.c))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-dashboard"]],decls:200,vars:0,consts:[[1,"row"],[1,"col-12","my-2"],[1,"title"],[1,"app-notice"],[1,"my-auto","ml-5"],["src","assets/img/svg/alert-circle.svg","alt","notification"],[1,"my-auto","ml-5","mr-5"],[1,"col-12","col-md-3","my-2"],[1,"dash-card-one"],[1,"mid-title"],["src","assets/img/svg/chevron-up.svg","alt","chevron-up"],[1,"dash-card-two"],[1,"dash-card-three"],[1,"dash-card-four"],[1,"col-12","col-md-6","my-2"],[1,"card"],[1,"card-body"],[1,"card-title",2,"display","flex","justify-content","space-between"],["href","#",2,"color","#ccc"],[1,"card-text"],[1,"table-responsive"],[1,"table","table-striped"],[1,"badge","badge-warning"],[1,"badge","badge-success"],[1,"badge","badge-danger"],["href","#",1,"badge","badge-light"]],template:function(n,t){1&n&&(c.Ob(0,"main"),c.Ob(1,"div",0),c.Ob(2,"div",1),c.Ob(3,"h5",2),c.uc(4,"My Dashboard"),c.Nb(),c.Ob(5,"div",3),c.Ob(6,"div",4),c.Jb(7,"img",5),c.Nb(),c.Ob(8,"div",6),c.Ob(9,"h4"),c.uc(10," Application Received "),c.Nb(),c.Ob(11,"p"),c.uc(12,"Your application will be reviewed and you would get a response"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(13,"div",0),c.Ob(14,"div",7),c.Ob(15,"div",8),c.Ob(16,"p"),c.uc(17,"Number of checks done"),c.Nb(),c.Ob(18,"p",9),c.uc(19,"3"),c.Nb(),c.Ob(20,"p"),c.uc(21,"This year "),c.Jb(22,"img",10),c.Nb(),c.Nb(),c.Nb(),c.Ob(23,"div",7),c.Ob(24,"div",11),c.Ob(25,"p"),c.uc(26,"Number of clearance received"),c.Nb(),c.Ob(27,"p",9),c.uc(28,"12"),c.Nb(),c.Ob(29,"p"),c.uc(30,"This year "),c.Jb(31,"img",10),c.Nb(),c.Nb(),c.Nb(),c.Ob(32,"div",7),c.Ob(33,"div",12),c.Ob(34,"p"),c.uc(35,"Last checks done"),c.Nb(),c.Ob(36,"p",9),c.uc(37,"24 June 2020"),c.Nb(),c.Ob(38,"p"),c.uc(39,"Last month "),c.Jb(40,"img",10),c.Nb(),c.Nb(),c.Nb(),c.Ob(41,"div",7),c.Ob(42,"div",13),c.Ob(43,"p"),c.uc(44,"Number of checks done"),c.Nb(),c.Ob(45,"p",9),c.uc(46,"3"),c.Nb(),c.Ob(47,"p"),c.uc(48,"This year "),c.Jb(49,"img",10),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(50,"div",0),c.Ob(51,"div",14),c.Ob(52,"div",15),c.Ob(53,"div",16),c.Ob(54,"div",17),c.Ob(55,"h5"),c.uc(56,"Background Check"),c.Nb(),c.Ob(57,"a",18),c.uc(58,"View all"),c.Nb(),c.Nb(),c.Ob(59,"div",19),c.Ob(60,"div",20),c.Ob(61,"table",21),c.Ob(62,"thead"),c.Ob(63,"tr"),c.Ob(64,"td"),c.uc(65,"Check Number"),c.Nb(),c.Ob(66,"td"),c.uc(67,"Application Type"),c.Nb(),c.Ob(68,"td"),c.uc(69,"Date"),c.Nb(),c.Ob(70,"td"),c.uc(71,"Status"),c.Nb(),c.Nb(),c.Nb(),c.Ob(72,"tbody"),c.Ob(73,"tr"),c.Ob(74,"td"),c.uc(75,"PB1101"),c.Nb(),c.Ob(76,"td"),c.uc(77,"Premium"),c.Nb(),c.Ob(78,"td"),c.uc(79,"22/05/2020"),c.Nb(),c.Ob(80,"td"),c.Ob(81,"span",22),c.uc(82,"Open"),c.Nb(),c.Nb(),c.Nb(),c.Ob(83,"tr"),c.Ob(84,"td"),c.uc(85,"PB1101"),c.Nb(),c.Ob(86,"td"),c.uc(87,"Premium"),c.Nb(),c.Ob(88,"td"),c.uc(89,"22/05/2020"),c.Nb(),c.Ob(90,"td"),c.Ob(91,"span",22),c.uc(92,"Open"),c.Nb(),c.Nb(),c.Nb(),c.Ob(93,"tr"),c.Ob(94,"td"),c.uc(95,"PB1101"),c.Nb(),c.Ob(96,"td"),c.uc(97,"Regular"),c.Nb(),c.Ob(98,"td"),c.uc(99,"22/05/2020"),c.Nb(),c.Ob(100,"td"),c.Ob(101,"span",23),c.uc(102,"Approved"),c.Nb(),c.Nb(),c.Nb(),c.Ob(103,"tr"),c.Ob(104,"td"),c.uc(105,"PB1101"),c.Nb(),c.Ob(106,"td"),c.uc(107,"Premium"),c.Nb(),c.Ob(108,"td"),c.uc(109,"22/05/2020"),c.Nb(),c.Ob(110,"td"),c.Ob(111,"span",24),c.uc(112,"Denied"),c.Nb(),c.Nb(),c.Nb(),c.Ob(113,"tr"),c.Ob(114,"td"),c.uc(115,"PB1101"),c.Nb(),c.Ob(116,"td"),c.uc(117,"Premium"),c.Nb(),c.Ob(118,"td"),c.uc(119,"22/05/2020"),c.Nb(),c.Ob(120,"td"),c.Ob(121,"span",22),c.uc(122,"Open"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(123,"div",14),c.Ob(124,"div",15),c.Ob(125,"div",16),c.Ob(126,"div",17),c.Ob(127,"h5"),c.uc(128,"Clearance Certificate History"),c.Nb(),c.Ob(129,"a",18),c.uc(130,"View all"),c.Nb(),c.Nb(),c.Ob(131,"div",19),c.Ob(132,"div",20),c.Ob(133,"table",21),c.Ob(134,"thead"),c.Ob(135,"tr"),c.Ob(136,"td"),c.uc(137,"Clearance Number"),c.Nb(),c.Ob(138,"td"),c.uc(139,"Date"),c.Nb(),c.Ob(140,"td"),c.uc(141,"Status"),c.Nb(),c.Ob(142,"td"),c.uc(143,"Action"),c.Nb(),c.Nb(),c.Nb(),c.Ob(144,"tbody"),c.Ob(145,"tr"),c.Ob(146,"td"),c.uc(147,"CL1101"),c.Nb(),c.Ob(148,"td"),c.uc(149,"22/05/2020"),c.Nb(),c.Ob(150,"td"),c.Ob(151,"div",22),c.uc(152,"Open"),c.Nb(),c.Nb(),c.Ob(153,"td"),c.Ob(154,"a",25),c.uc(155,"Download"),c.Nb(),c.Nb(),c.Nb(),c.Ob(156,"tr"),c.Ob(157,"td"),c.uc(158,"CL1101"),c.Nb(),c.Ob(159,"td"),c.uc(160,"22/05/2020"),c.Nb(),c.Ob(161,"td"),c.Ob(162,"div",22),c.uc(163,"Open"),c.Nb(),c.Nb(),c.Ob(164,"td"),c.Ob(165,"a",25),c.uc(166,"Download"),c.Nb(),c.Nb(),c.Nb(),c.Ob(167,"tr"),c.Ob(168,"td"),c.uc(169,"CL1101"),c.Nb(),c.Ob(170,"td"),c.uc(171,"22/05/2020"),c.Nb(),c.Ob(172,"td"),c.Ob(173,"div",22),c.uc(174,"Open"),c.Nb(),c.Nb(),c.Ob(175,"td"),c.Ob(176,"a",25),c.uc(177,"Download"),c.Nb(),c.Nb(),c.Nb(),c.Ob(178,"tr"),c.Ob(179,"td"),c.uc(180,"CL1101"),c.Nb(),c.Ob(181,"td"),c.uc(182,"22/05/2020"),c.Nb(),c.Ob(183,"td"),c.Ob(184,"div",23),c.uc(185,"Open"),c.Nb(),c.Nb(),c.Ob(186,"td"),c.Ob(187,"a",25),c.uc(188,"Download"),c.Nb(),c.Nb(),c.Nb(),c.Ob(189,"tr"),c.Ob(190,"td"),c.uc(191,"CL1101"),c.Nb(),c.Ob(192,"td"),c.uc(193,"22/05/2020"),c.Nb(),c.Ob(194,"td"),c.Ob(195,"div",24),c.uc(196,"Open"),c.Nb(),c.Nb(),c.Ob(197,"td"),c.Ob(198,"a",25),c.uc(199,"Download"),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb())},styles:['main[_ngcontent-%COMP%]{padding:30px}main[_ngcontent-%COMP%]   h5.title[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:500;font-size:18px;line-height:22px;color:#00184b;margin:100px 0 20px auto}main[_ngcontent-%COMP%]   .app-notice[_ngcontent-%COMP%]{min-height:120px;background:#fcfcfb url(application.f32f7fc05a1b7d89c774.png) no-repeat 50% scroll;background-size:120%;filter:drop-shadow(0 2px 20px rgba(0,0,0,.05));border-radius:8px;position:relative;width:100%;z-index:1;display:flex;justify-content:flex-start}main[_ngcontent-%COMP%]   .app-notice[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:10px;background:#272643;box-shadow:0 2px 20px rgba(0,0,0,.05);border-radius:4px 0 0 4px;min-height:120px}main[_ngcontent-%COMP%]   .dash-card-one[_ngcontent-%COMP%]{display:inline-block;width:100%;height:120px;background:url(cardbg-1.797705538fa25cd8672f.png) no-repeat 50% scroll;filter:drop-shadow(0 2px 10px rgba(0,0,0,.06));border-radius:8px;background-size:120%;color:#fff;padding:20px}main[_ngcontent-%COMP%]   .dash-card-one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:unset}main[_ngcontent-%COMP%]   .dash-card-one[_ngcontent-%COMP%]   p.mid-title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:24px;line-height:29px;margin:5px auto}main[_ngcontent-%COMP%]   .dash-card-two[_ngcontent-%COMP%]{display:inline-block;width:100%;height:120px;background:url(cardbg-2.05ebff1e40761e489052.png) no-repeat 50% scroll;filter:drop-shadow(0 2px 10px rgba(0,0,0,.06));border-radius:8px;background-size:120%;color:#fff;padding:20px}main[_ngcontent-%COMP%]   .dash-card-two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:unset}main[_ngcontent-%COMP%]   .dash-card-two[_ngcontent-%COMP%]   p.mid-title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:24px;line-height:29px;margin:5px auto}main[_ngcontent-%COMP%]   .dash-card-three[_ngcontent-%COMP%]{display:inline-block;width:100%;height:120px;background:url(cardbg-3.d4c8ddbe9528f3f52d48.png) no-repeat 50% scroll;filter:drop-shadow(0 2px 10px rgba(0,0,0,.06));border-radius:8px;background-size:120%;color:#fff;padding:20px}main[_ngcontent-%COMP%]   .dash-card-three[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:unset}main[_ngcontent-%COMP%]   .dash-card-three[_ngcontent-%COMP%]   p.mid-title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:24px;line-height:29px;margin:5px auto}main[_ngcontent-%COMP%]   .dash-card-four[_ngcontent-%COMP%]{display:inline-block;width:100%;height:120px;background:url(cardbg-4.03eebce520a235913140.png) no-repeat 50% scroll;filter:drop-shadow(0 2px 10px rgba(0,0,0,.06));border-radius:8px;background-size:120%;color:#fff;padding:20px}main[_ngcontent-%COMP%]   .dash-card-four[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:unset}main[_ngcontent-%COMP%]   .dash-card-four[_ngcontent-%COMP%]   p.mid-title[_ngcontent-%COMP%]{font-style:normal;font-weight:700;font-size:24px;line-height:29px;margin:5px auto}']}),n})()},{path:"applications",component:r},{path:"background-check",component:u},{path:"clearance-certificate",component:M},{path:"profile",component:(()=>{class n{constructor(n){this.title=n}ngOnInit(){this.title.setTitle("Profile")}}return n.\u0275fac=function(t){return new(t||n)(c.Ib(b.c))},n.\u0275cmp=c.Cb({type:n,selectors:[["app-profile"]],decls:2,vars:0,template:function(n,t){1&n&&(c.Ob(0,"p"),c.uc(1,"profile works!"),c.Nb())},styles:[""]}),n})()}],canActivate:[a]}];let w=(()=>{class n{}return n.\u0275mod=c.Gb({type:n}),n.\u0275inj=c.Fb({factory:function(t){return new(t||n)},imports:[[o.f.forChild(y)],o.f]}),n})(),I=(()=>{class n{}return n.\u0275mod=c.Gb({type:n}),n.\u0275inj=c.Fb({factory:function(t){return new(t||n)},providers:[a],imports:[[i.b,s.g,s.m,w]]}),n})()}}]);