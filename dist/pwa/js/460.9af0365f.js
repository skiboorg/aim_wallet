"use strict";(globalThis["webpackChunkaim_wallet"]=globalThis["webpackChunkaim_wallet"]||[]).push([[460],{75008:(e,a,t)=>{t.d(a,{C:()=>d,d:()=>n});var l=t(13433),s=t(17779);const n=({seed:e,password:a})=>{const t={status:!0,seed:e},s=l.createCipher("aes192",a);return s.update(JSON.stringify(t),"utf8","hex")+s.final("hex")},d=({hash:e,password:a})=>{try{const t=l.createDecipher("aes192",a),s=t.update(e,"hex","utf8")+t.final("utf8"),n=JSON.parse(s);return!!n.status&&n.seed}catch(t){return s.log(t),!1}}},14895:(e,a,t)=>{t.d(a,{Z:()=>h});var l=t(59835),s=t(60499),n=t(43463),d=t(87270),u=t(75008),i=t(9991),o=t(17779);const c={props:["transactionInfo"]},r=Object.assign(c,{__name:"PinCodeModal",emits:["pincode_ок"],setup(e,{emit:a}){const t=(0,n.s)(),c=(0,i.QT)();function r(e){const l=localStorage.getItem("hash"),s=(0,u.C)({hash:l,password:e});o.log(s),s?(a("pincode_ок"),t.togglePinCodeModalVisible()):(0,d.d$)("negative",c.t("wrong_pin"))}return(e,a)=>{const n=(0,l.up)("pin-code"),d=(0,l.up)("q-btn"),u=(0,l.up)("q-card-section"),i=(0,l.up)("q-card"),o=(0,l.up)("q-dialog");return(0,l.wg)(),(0,l.j4)(o,{modelValue:(0,s.SU)(t).pinCodeModalVisible,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,s.SU)(t).pinCodeModalVisible=e),persistent:"",maximized:"","transition-show":"slide-left","transition-hide":"slide-right"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{class:"bg-white fullscreen"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"flex column items-center justify-center fullscreen"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{showDigits:!1,onPincode_ready:r}),(0,l.Wm)(d,{class:"q-mt-md",onClick:a[0]||(a[0]=e=>(0,s.SU)(t).togglePinCodeModalVisible()),"no-caps":"",unelevated:"",color:"negative",label:e.$t("cancel_btn")},null,8,["label"])])),_:1})])),_:1})])),_:1},8,["modelValue"])}}});var m=t(32074),p=t(44458),w=t(63190),g=t(24455),f=t(69984),v=t.n(f);const _=r,h=_;v()(r,"components",{QDialog:m.Z,QCard:p.Z,QCardSection:w.Z,QBtn:g.Z})},29460:(e,a,t)=>{t.r(a),t.d(a,{default:()=>A});var l=t(59835),s=t(86970),n=t(60499),d=t(39981),u=t.n(d),i=t(87270),o=t(14895),c=t(43463),r=(t(76028),t(18910)),m=t(46190),p=t(23459),w=t(98030),g=t(17779);const f=(0,l._)("div",{class:"",style:{height:"50px"}},null,-1),v=(0,l._)("div",{class:"",style:{height:"50px"}},null,-1),_=(0,l.Uk)("Ваш баланс"),h=(0,l.Uk)("Ваш внутриигровой баланс"),b=(0,l.Uk)("Кол-во отправляемого актива*"),W=(0,l.Uk)(" Подтверждение отправки актива "),k=(0,l.Uk)("Актив"),y=(0,l.Uk)("ChikenBro"),C=(0,l.Uk)("Количество"),x=(0,l.Uk)("Комиссия транзакции"),q={key:0},U={__name:"ChickenGameCBT",setup(e){const a="https://chickenbro.ru",d=(0,c.s)(),{EraChain:U}=((0,r.tv)(),t(99407)),Q=(0,m.c)(),Z=(0,p.Q)();let S=(0,n.iH)(!1);const V=(0,n.iH)(!1),M=(0,n.iH)(0),B=(0,r.yj)();let H=(0,n.iH)(null);(0,l.bv)((async()=>{H.value=B.params.asset_key}));const j=(0,l.Fl)((()=>Q.balances)),$=(0,l.Fl)((()=>Q.addresses[Q.currentAddressIdx].address));function P(){d.togglePinCodeModalVisible()}(0,l.wF)((async()=>{const e=await u().get(a+`/api/user/get_user?wallet=${$.value}`);g.log(e.data.wallet),M.value=e.data.balance}));const N=(0,n.iH)({amount:"",address:"7NBHJjDugvtNq9GsMMcwcbx7yNMAn47fLH",title:"Пополнение баланса игры",message:"Пополнение баланса игры",encrypted:!1,fee:0,raw:0});function D(){N.value={amount:"",address:"7NBHJjDugvtNq9GsMMcwcbx7yNMAn47fLH",title:"Пополнение баланса игры",message:"Пополнение баланса игры",encrypted:!1,fee:0,raw:0}}async function T(){V.value=!V.value;const e=!0,a=await Z.getKeyPair(),t=new U.Type.KeyPair(a),l={assetKey:"1048580",amount:N.value.amount};g.log(t),g.log(l);const s=await w.era.tranRawSendAsset(t,l,N.value.address,N.value.title,N.value.message,N.value.encrypted,e);g.log(s),s.error?(0,i.d$)("negative",s.error.message):(N.value.fee=s.fee,N.value.raw=s.raw),V.value=!V.value}async function I(){V.value=!V.value;const e=await u().get(a+"/api/data/settings");if(e.data.is_can_change_balance){const e=await w.era.broadcast64(N.value.raw);if(g.log(e),e.error)(0,i.d$)("negative",e.message),V.value=!V.value;else{(0,i.d$)("info","Транзакция создана"),S.value=!1;const t=await u().post(a+"/api/user/add_to_balance",{wallet:$.value,signature:e.signature}),l=await u().get(a+`/api/user/get_user?wallet=${$.value}`);M.value=l.data.balance,t.data.success&&(0,i.d$)("positive","Баланс пополнен")}}else(0,i.d$)("negative","Сервер занят. Повторите попытку через пару минут");V.value=!V.value}return(e,a)=>{const t=(0,l.up)("q-btn"),d=(0,l.up)("unconfirmed-tx-icon"),u=(0,l.up)("q-header"),i=(0,l.up)("q-item-section"),c=(0,l.up)("q-item"),r=(0,l.up)("q-input"),m=(0,l.up)("q-separator"),p=(0,l.up)("btn"),w=(0,l.up)("q-list"),g=(0,l.up)("q-card-section"),U=(0,l.up)("page-body"),Q=(0,l.up)("q-card-actions"),Z=(0,l.up)("q-card"),B=(0,l.up)("q-dialog"),H=(0,l.up)("page"),$=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(H,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,{reveal:"",class:"text-white q-py-sm items-center flex justify-between"},{default:(0,l.w5)((()=>[(0,l.Wm)(t,{"no-caps":"",label:"Отправка актива ChikenBro",onClick:a[0]||(a[0]=a=>e.$router.back()),icon:"las la-angle-left",unelevated:""}),(0,l.Wm)(d)])),_:1}),f,v,(0,l.Wm)(g,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{side:"",class:"text-weight-bold text-dark"},{default:(0,l.w5)((()=>[_])),_:1}),(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)((0,n.SU)(j)[1048580][0][1])+" CBT",1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{side:"",class:"text-weight-bold text-dark"},{default:(0,l.w5)((()=>[h])),_:1}),(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(M.value)+" CBT",1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[b])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r,{dense:"",outlined:"",type:"number",modelValue:N.value.amount,"onUpdate:modelValue":a[1]||(a[1]=e=>N.value.amount=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(m,{class:"q-my-md"}),(0,l.Wm)(p,{label:"Отправить",onClick:P,disabled:!N.value.amount||!N.value.address,outline:!1},null,8,["disabled"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(B,{modelValue:(0,n.SU)(S),"onUpdate:modelValue":a[2]||(a[2]=e=>(0,n.dq)(S)?S.value=e:S=e),persistent:"","transition-show":"scale","transition-hide":"scale",onBeforeHide:D},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"bg-white text-dark",style:{width:"100%"}},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{class:"text-weight-bold"},{default:(0,l.w5)((()=>[W])),_:1}),(0,l.Wm)(g,{class:"q-py-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{dense:"",separator:"",class:"q-mb-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[k])),_:1}),(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[y])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[C])),_:1}),(0,l.Wm)(i,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(N.value.amount)+" ChikenBro",1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[x])),_:1}),(0,l.Wm)(i,{class:"text-caption"},{default:(0,l.w5)((()=>[N.value.fee>0?((0,l.wg)(),(0,l.iD)("span",q,"газ "+(0,s.zw)(N.value.fee)+" OLF",1)):(0,l.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(Q,{class:"bg-white text-teal"},{default:(0,l.w5)((()=>[0===N.value.fee?((0,l.wg)(),(0,l.j4)(t,{key:0,label:"Расчет комиссии",loading:V.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"info",onClick:T,outline:!1},null,8,["loading"])):((0,l.wg)(),(0,l.j4)(t,{key:1,label:"Подтвердить",loading:V.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"positive",onClick:I,outline:!1},null,8,["loading"])),(0,l.wy)((0,l.Wm)(t,{label:"Отменить","no-caps":"",color:"negative",class:"full-width",unelevated:"",outline:"",loading:V.value},null,8,["loading"]),[[$]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)((0,n.SU)(o.Z),{onPincode_ок:a[3]||(a[3]=e=>(0,n.dq)(S)?S.value=!0:S=!0)})])),_:1})}}};var Q=t(16602),Z=t(24455),S=t(63190),V=t(13246),M=t(490),B=t(76749),H=t(13119),j=t(50926),$=t(32074),P=t(44458),N=t(11821),D=t(62146),T=t(69984),I=t.n(T);const z=U,A=z;I()(U,"components",{QHeader:Q.Z,QBtn:Z.Z,QCardSection:S.Z,QList:V.Z,QItem:M.Z,QItemSection:B.Z,QInput:H.Z,QSeparator:j.Z,QDialog:$.Z,QCard:P.Z,QCardActions:N.Z}),I()(U,"directives",{ClosePopup:D.Z})}}]);