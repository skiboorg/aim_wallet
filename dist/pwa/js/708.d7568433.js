"use strict";(globalThis["webpackChunkaim_wallet"]=globalThis["webpackChunkaim_wallet"]||[]).push([[708],{75008:(e,a,t)=>{t.d(a,{C:()=>i,d:()=>n});var l=t(13433),s=t(17779);const n=({seed:e,password:a})=>{const t={status:!0,seed:e},s=l.createCipher("aes192",a);return s.update(JSON.stringify(t),"utf8","hex")+s.final("hex")},i=({hash:e,password:a})=>{try{const t=l.createDecipher("aes192",a),s=t.update(e,"hex","utf8")+t.final("utf8"),n=JSON.parse(s);return!!n.status&&n.seed}catch(t){return s.log(t),!1}}},14895:(e,a,t)=>{t.d(a,{Z:()=>x});var l=t(59835),s=t(60499),n=t(43463),i=t(87270),d=t(75008),o=t(9991),u=t(17779);const c={props:["transactionInfo"]},m=Object.assign(c,{__name:"PinCodeModal",emits:["pincode_ок"],setup(e,{emit:a}){const t=(0,n.s)(),c=(0,o.QT)();function m(e){const l=localStorage.getItem("hash"),s=(0,d.C)({hash:l,password:e});u.log(s),s?(a("pincode_ок"),t.togglePinCodeModalVisible()):(0,i.d$)("negative",c.t("wrong_pin"))}return(e,a)=>{const n=(0,l.up)("pin-code"),i=(0,l.up)("q-btn"),d=(0,l.up)("q-card-section"),o=(0,l.up)("q-card"),u=(0,l.up)("q-dialog");return(0,l.wg)(),(0,l.j4)(u,{modelValue:(0,s.SU)(t).pinCodeModalVisible,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,s.SU)(t).pinCodeModalVisible=e),persistent:"",maximized:"","transition-show":"slide-left","transition-hide":"slide-right"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{class:"bg-white fullscreen"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"flex column items-center justify-center fullscreen"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{showDigits:!1,onPincode_ready:m}),(0,l.Wm)(i,{class:"q-mt-md",onClick:a[0]||(a[0]=e=>(0,s.SU)(t).togglePinCodeModalVisible()),"no-caps":"",unelevated:"",color:"negative",label:e.$t("cancel_btn")},null,8,["label"])])),_:1})])),_:1})])),_:1},8,["modelValue"])}}});var r=t(32074),w=t(44458),p=t(63190),_=t(24455),g=t(69984),f=t.n(g);const v=m,x=v;f()(m,"components",{QDialog:r.Z,QCard:w.Z,QCardSection:p.Z,QBtn:_.Z})},60708:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Se});var l=t(59835),s=t(60499),n=t(86970),i=t(32743),d=t(76028),o=t(43463),u=t(46190),c=t(23459),m=t(18910);const r={class:"q-mb-none q-mr-sm"},w=(0,l._)("div",{class:"",style:{height:"60px"}},null,-1),p={class:"text-right"},_=["href"],g={style:{"max-width":"90%"},class:"ellipsis"},f={style:{"max-width":"100%"},class:"ellipsis"},v={style:{"max-width":"90%"},class:"ellipsis"},x={style:{"word-break":"break-all"},class:""},W={props:["transactionInfo"]},b=Object.assign(W,{__name:"TransactionInfo",setup(e){const a=(0,o.s)();return(t,i)=>{const d=(0,l.up)("q-btn"),o=(0,l.up)("q-header"),u=(0,l.up)("q-item-section"),c=(0,l.up)("q-item"),m=(0,l.up)("q-badge"),W=(0,l.up)("q-list"),b=(0,l.up)("q-card-section"),h=(0,l.up)("q-card"),k=(0,l.up)("q-dialog"),y=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(k,{modelValue:(0,s.SU)(a).transactionInfoModalVisible,"onUpdate:modelValue":i[0]||(i[0]=e=>(0,s.SU)(a).transactionInfoModalVisible=e),persistent:"",maximized:"","transition-show":"slide-left","transition-hide":"slide-right"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{class:"bg-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{reveal:"",class:"text-white q-py-sm items-center flex justify-between"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(d,{label:"Назад","no-caps":"",icon:"las la-angle-left",unelevated:""},null,512),[[y]]),(0,l._)("p",r,(0,n.zw)(t.$t("transaction"))+" #"+(0,n.zw)(e.transactionInfo.seqNo),1)])),_:1}),w,(0,l.Wm)(b,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l._)("p",p,[(0,l._)("a",{class:"text-dark text-weight-medium",href:`https://scan.rupay.pro/index/blockexplorer.html?tx=${e.transactionInfo.seqNo}&lang=ru`,target:"_blank"},(0,n.zw)(t.$t("transaction_open")),9,_)]),(0,l.Wm)(W,{dense:"",separator:""},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("date")),1)])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.transactionInfo.fullDate),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("creator")),1)])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l._)("span",g,(0,n.zw)(e.transactionInfo.creator),1),(0,l.Uk)(" "+(0,n.zw)(e.transactionInfo.creator_name?`${e.transactionInfo.creator_name}`:""),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("confirms")),1)])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.transactionInfo.confirmations),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("size")),1)])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.transactionInfo.size),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("singnature")),1)])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l._)("span",f,(0,n.zw)(e.transactionInfo.signature),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("send_asset_recipient")),1)])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l._)("span",v,(0,n.zw)(e.transactionInfo.recipient),1),(0,l.Uk)(" "+(0,n.zw)(e.transactionInfo.recipient_name?`${e.transactionInfo.recipient_name}`:""),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("amount")),1)])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.transactionInfo.amount)+" "+(0,n.zw)(e.transactionInfo.asset_name),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("status")),1)])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{color:"positive","text-color":"white",style:{width:"30%"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("done")),1)])),_:1})])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding bg-grey-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.$t("all_data")),1)])),_:1})])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.transactionInfo,((e,a)=>((0,l.wg)(),(0,l.j4)(c,{class:"no-padding",key:a},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a),1)])),_:2},1024),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l._)("span",x,(0,n.zw)(e),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}}});var h=t(32074),k=t(44458),y=t(16602),U=t(24455),q=t(63190),z=t(13246),$=t(490),S=t(76749),Z=t(20990),C=t(62146),Q=t(69984),V=t.n(Q);const I=b,H=I;V()(b,"components",{QDialog:h.Z,QCard:k.Z,QHeader:y.Z,QBtn:U.Z,QCardSection:q.Z,QList:z.Z,QItem:$.Z,QItemSection:S.Z,QBadge:Z.Z}),V()(b,"directives",{ClosePopup:C.Z});var M=t(61957),j=t(14895),D=t(87270),P=t(4682),F=t(9991),T=t(98030),A=t(17779);const L=(0,l._)("div",{class:"",style:{height:"50px"}},null,-1),B={class:"text-bold q-mb-none"},O={id:"video-container"},K=(0,l._)("video",{id:"qr-video"},null,-1),N=[K],Y={class:"text-bold q-mb-none"},E={style:{"word-break":"break-all"}},J={key:0},R={key:1},G={class:"text-caption text-white q-pa-md bg-negative"},X={__name:"SendAssetModal",props:{asset:Object},emits:["close"],setup(e,{emit:a}){const i=e,d=(0,F.QT)(),r=(0,o.s)(),{EraChain:w}=((0,m.tv)(),t(99407)),p=(0,u.c)(),_=(0,c.Q)();let g=(0,s.iH)(!1);const f=(0,s.iH)(!1),v=(0,s.iH)(!1);let x=null;const W=(0,l.Fl)((()=>p.balances));(0,l.Fl)((()=>p.verifyPersonData));async function b(){v.value=!0;const e=document.getElementById("qr-video");A.log(e);const a=new P.Z(e,(e=>{A.log("decoded qr code:",e);try{k.value.address=e.data.split(":")[0],k.value.amount=e.data.split(":")[2],v.value=!1,a.stop()}catch(t){v.value=!1,a.stop()}}),{});x=a,await a.start()}function h(){r.togglePinCodeModalVisible()}const k=(0,s.iH)({amount:"",address:"",title:"",message:"",encrypted:!1,fee:0,raw:0});function y(){k.value={amount:"",address:"",title:"",message:"",encrypted:!0,fee:0,raw:0}}async function U(){f.value=!f.value;const e=!0,a=await _.getKeyPair(),t=new w.Type.KeyPair(a),l={assetKey:i.asset.key,amount:k.value.amount};A.log(t),A.log(l);const s=await T.era.tranRawSendAsset(t,l,k.value.address,k.value.title,k.value.message,k.value.encrypted,e);A.log(s),s.error?(0,D.d$)("negative",s.error.message):(k.value.fee=s.fee,k.value.raw=s.raw),f.value=!f.value}async function q(){f.value=!f.value;const e=await T.era.broadcast64(k.value.raw);A.log(e),e.error?((0,D.d$)("negative",e.message),f.value=!f.value):((0,D.d$)("info",d.t("transaction_created")),g.value=!1,f.value=!f.value,r.toggleSendAssetModalVisible())}function z(){x&&x.stop(),a("close")}return(a,t)=>{const i=(0,l.up)("q-btn"),d=(0,l.up)("unconfirmed-tx-icon"),o=(0,l.up)("q-header"),u=(0,l.up)("q-item-section"),c=(0,l.up)("q-item"),m=(0,l.up)("q-input"),w=(0,l.up)("q-separator"),p=(0,l.up)("btn"),_=(0,l.up)("q-list"),x=(0,l.up)("q-card-section"),$=(0,l.up)("q-card"),S=(0,l.up)("q-dialog"),Z=(0,l.up)("q-card-actions"),C=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(S,{modelValue:(0,s.SU)(r).sendAssetModalVisible,"onUpdate:modelValue":t[4]||(t[4]=e=>(0,s.SU)(r).sendAssetModalVisible=e),persistent:"",maximized:"",class:(0,n.C_)({hidden:(0,s.SU)(r).isPageHidden}),"transition-show":"slide-left","transition-hide":"slide-right",onBeforeHide:z},{default:(0,l.w5)((()=>[(0,l.Wm)($,{class:"bg-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{reveal:"",class:"text-white q-py-sm items-center flex justify-between"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(i,{"no-caps":"",label:`${a.$t("send_asset")} ${e.asset.name}`,icon:"las la-angle-left",unelevated:""},null,8,["label"]),[[C]]),(0,l.Wm)(d)])),_:1}),L,(0,l.Wm)(x,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-bold text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.$t("your_balance")),1)])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)((0,s.SU)(W)[e.asset.key][0][1])+" "+(0,n.zw)(e.asset.name),1)])),_:1})])),_:1}),(0,l._)("p",B,(0,n.zw)(a.$t("main_info")),1),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.$t("send_asset_amount")),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{dense:"",outlined:"",type:"number",modelValue:k.value.amount,"onUpdate:modelValue":t[0]||(t[0]=e=>k.value.amount=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.$t("receiver_wallet")),1)])),_:1}),(0,l.Wm)(u,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{size:"18px","text-color":"dark",unelevated:"",icon:"las la-qrcode",onClick:b})])),_:1})])),_:1}),(0,l.wy)((0,l._)("div",O,N,512),[[M.F8,v.value]]),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{dense:"",outlined:"",modelValue:k.value.address,"onUpdate:modelValue":t[1]||(t[1]=e=>k.value.address=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(w,{class:"q-my-md"}),(0,l._)("p",Y,(0,n.zw)(a.$t("send_asset_message")),1),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.$t("send_asset_message_title")),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{dense:"",outlined:"",modelValue:k.value.title,"onUpdate:modelValue":t[2]||(t[2]=e=>k.value.title=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.$t("send_asset_message_body")),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{type:"textarea",dense:"",outlined:"",modelValue:k.value.message,"onUpdate:modelValue":t[3]||(t[3]=e=>k.value.message=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)(w,{class:"q-my-md"}),(0,l.Wm)(p,{label:a.$t("send_btn"),onClick:h,disabled:!k.value.amount||!k.value.address,outline:!1},null,8,["label","disabled"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","class"]),(0,l.Wm)(S,{modelValue:(0,s.SU)(g),"onUpdate:modelValue":t[5]||(t[5]=e=>(0,s.dq)(g)?g.value=e:g=e),persistent:"","transition-show":"scale","transition-hide":"scale",onBeforeHide:y},{default:(0,l.w5)((()=>[(0,l.Wm)($,{class:"bg-white text-dark",style:{width:"100%"}},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{class:"text-weight-bold"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.$t("send_asset_confirm")),1)])),_:1}),(0,l.Wm)(x,{class:"q-py-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{dense:"",separator:"",class:"q-mb-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.$t("send_asset_name")),1)])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.asset.name),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.$t("send_asset_amount_text")),1)])),_:1}),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(k.value.amount)+" "+(0,n.zw)(e.asset.name),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.$t("send_asset_recipient")),1)])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>[(0,l._)("span",E,(0,n.zw)(k.value.address),1)])),_:1})])),_:1}),(0,l.Wm)(c,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.$t("send_asset_comission")),1)])),_:1}),(0,l.Wm)(u,{class:"text-caption"},{default:(0,l.w5)((()=>["РОЛФ Тех.Аккаунт ruPay"===e.asset.maker_name?((0,l.wg)(),(0,l.iD)("span",J,(0,n.zw)(parseFloat(.01*k.value.amount).toFixed(5)),1)):(0,l.kq)("",!0),k.value.fee>0?((0,l.wg)(),(0,l.iD)("span",R,"+ газ "+(0,n.zw)(k.value.fee)+" "+(0,n.zw)(e.asset.key<4e3?e.asset.name:"OLF"),1)):(0,l.kq)("",!0)])),_:1})])),_:1})])),_:1}),(0,l._)("p",G,(0,n.zw)(a.$t("send_asset_warning")),1)])),_:1}),(0,l.Wm)(Z,{class:"bg-white text-teal"},{default:(0,l.w5)((()=>[0===k.value.fee?((0,l.wg)(),(0,l.j4)(i,{key:0,label:a.$t("calc_comission_btn"),loading:f.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"info",onClick:U,outline:!1},null,8,["label","loading"])):((0,l.wg)(),(0,l.j4)(i,{key:1,label:a.$t("send_btn"),loading:f.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"positive",onClick:q,outline:!1},null,8,["label","loading"])),(0,l.wy)((0,l.Wm)(i,{label:a.$t("cancel_btn"),"no-caps":"",color:"negative",class:"full-width",unelevated:"",outline:"",loading:f.value},null,8,["label","loading"]),[[C]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)((0,s.SU)(j.Z),{onPincode_ок:t[6]||(t[6]=e=>(0,s.dq)(g)?g.value=!0:g=!0)})],64)}}};var ee=t(13119),ae=t(50926),te=t(11221),le=t(11821);const se=X,ne=se;V()(X,"components",{QDialog:h.Z,QCard:k.Z,QHeader:y.Z,QBtn:U.Z,QCardSection:q.Z,QList:z.Z,QItem:$.Z,QItemSection:S.Z,QInput:ee.Z,QSeparator:ae.Z,QCheckbox:te.Z,QCardActions:le.Z}),V()(X,"directives",{ClosePopup:C.Z});var ie=t(17779);const de={class:"page-body--top flex column items-center justify-evenly"},oe={class:"text-center"},ue=["src"],ce={class:"text-center"},me={class:"flex items-start justify-evenly full-width text-white"},re=["innerHTML"],we=["innerHTML"],pe=["innerHTML"],_e={class:""},ge={class:"flex items-center justify-between q-pa-md"},fe={class:"q-mb-none"},ve={class:"asset-date q-pa-md bg-grey-2 q-mb-none"},xe={style:{"max-width":"70%"},class:"ellipsis inline-block"},We={key:0,class:"text-center q-pa-md"},be={components:{TransactionInfo:H,SendAssetModal:ne}},he=Object.assign(be,{__name:"Asset",setup(e){const a=(0,o.s)(),t=(0,u.c)(),r=(0,c.Q)(),w=(0,m.yj)(),p="https://scan.rupay.pro";let _=(0,s.iH)(0),g=(0,s.iH)({}),f=(0,s.iH)([]),v=(0,s.iH)(!1),x=(0,s.iH)(!1),W=(0,s.iH)(0);const b=(0,l.Fl)((()=>t.addresses[t.currentAddressIdx].address)),h=(0,l.Fl)((()=>i.ZP.isEmpty(f.value))),k=(0,l.Fl)((()=>t.assets[_.value])),y=(0,l.Fl)((()=>r.assets)),U=(0,l.Fl)((()=>t.balances[k.value.key][0][1])),q=(0,l.Fl)((()=>U.value*k.value.course));async function z(e,a){v.value=!v.value;const t=await(0,d.sg)(b.value,k.value.key,e,a);f.value=i.ZP.groupBy(t,"timestamp"),v.value=!v.value}async function $(){W.value+=50,await z(50,W.value)}return(0,l.bv)((async()=>{_.value=w.params.asset_key,x.value=y.value.find((e=>e.key===k.value.key)).is_game_asset,ie.log(k.value),await z(50,W.value)})),(e,t)=>{const i=(0,l.up)("page-header"),d=(0,l.up)("q-avatar"),o=(0,l.up)("q-icon"),u=(0,l.up)("q-item-section"),c=(0,l.up)("q-item-label"),m=(0,l.up)("q-item"),r=(0,l.up)("q-list"),w=(0,l.up)("q-btn"),_=(0,l.up)("q-scroll-area"),x=(0,l.up)("page-body"),y=(0,l.up)("page");return(0,l.wg)(),(0,l.j4)(y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l._)("div",de,[(0,l.Wm)(i),(0,l._)("div",oe,[(0,l.Wm)(d,{size:"50px",class:"q-mr-md"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:(0,s.SU)(p)+(0,s.SU)(k).iconURL,alt:""},null,8,ue)])),_:1})]),(0,l._)("div",ce,[(0,l._)("p",{class:(0,n.C_)(["text-bold text-h6 text-white no-margin text-gold-gradient",{blur:e.$global.isBlur}])},(0,n.zw)((0,s.SU)(U))+" "+(0,n.zw)((0,s.SU)(k).name),3),(0,l._)("p",{class:(0,n.C_)(["text-weight-medium text-body1 text-white no-margin text-gold-gradient",{blur:e.$global.isBlur}])},"~ "+(0,n.zw)(e.$filters.convertAmount((0,s.SU)(q)))+" ₽",3)]),(0,l._)("div",me,[(0,l._)("div",{class:"text-center",onClick:t[0]||(t[0]=e=>(0,s.SU)(a).toggleSendAssetModalVisible())},[(0,l.Wm)(d,{rounded:"",class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{size:"22px",name:"las la-upload"})])),_:1}),(0,l._)("p",{class:"no-margin text-body1 lh100",innerHTML:e.$t("send_in_rupay")},null,8,re)]),(0,l._)("div",{class:"text-center",onClick:t[1]||(t[1]=a=>e.$router.push(`/wallet/receive?asset=${(0,s.SU)(k).key}&amount=0`))},[(0,l.Wm)(d,{rounded:"",class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{size:"22px",name:"las la-download"})])),_:1}),(0,l._)("p",{class:"no-margin text-body1 lh100",innerHTML:e.$t("receive_in_rupay")},null,8,we)]),(0,l._)("div",{class:"text-center",onClick:t[2]||(t[2]=a=>e.$router.push({name:"wallet_exchange"}))},[(0,l.Wm)(d,{rounded:"",class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{size:"22px",name:"las la-exchange-alt"})])),_:1}),(0,l._)("p",{class:"no-margin text-body1 lh100",innerHTML:e.$t("exchange")},null,8,pe)])])]),(0,l._)("div",_e,[(0,l._)("div",ge,[(0,l._)("p",fe,(0,n.zw)(e.$t("transaction_history")),1),(0,l.Wm)(o,{onClick:t[3]||(t[3]=e=>((0,s.dq)(W)?W.value=0:W=0,z(50,(0,s.SU)(W)))),name:"las la-sync",color:"primary",size:"26px",class:(0,n.C_)({rotate:(0,s.SU)(v)})},null,8,["class"])]),(0,l.Wm)(_,{style:{height:"50vh",width:"100vw"}},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{style:{width:"100vw"},separator:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,s.SU)(f),((t,i)=>((0,l.wg)(),(0,l.iD)("div",{class:"",key:i},[(0,l._)("p",ve,(0,n.zw)(i),1),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t,((t,i)=>((0,l.wg)(),(0,l.j4)(m,{clickable:"",onClick:e=>((0,s.dq)(g)?g.value=t:g=t,(0,s.SU)(a).toggleTransactionInfoModalVisible()),key:i},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{avatar:""},{default:(0,l.w5)((()=>[(0,s.SU)(b)!==t.creator&&1===Math.sign(t.amount)?((0,l.wg)(),(0,l.j4)(o,{key:0,color:"positive",name:"las la-arrow-down"})):((0,l.wg)(),(0,l.j4)(o,{key:1,color:"negative",name:"las la-arrow-up"}))])),_:2},1024),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[t.message?((0,l.wg)(),(0,l.j4)(c,{key:0,overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.message),1)])),_:2},1024)):((0,l.wg)(),(0,l.j4)(c,{key:1,overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.actionName),1)])),_:2},1024)),(0,l.Wm)(c,{caption:""},{default:(0,l.w5)((()=>[(0,l._)("span",xe,(0,n.zw)((0,s.SU)(b)!==t.creator&&1===Math.sign(t.amount)?e.$t("from"):e.$t("to"))+" "+(0,n.zw)((0,s.SU)(b)!==t.creator&&1===Math.sign(t.amount)?t.creator:t.recipient),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(u,{side:""},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(parseFloat(t.amount).toFixed(4)),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])))),128))])),_:1}),(0,s.SU)(h)?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",We,[(0,l.Wm)(w,{color:"primary",label:"Загрузить еще",loading:(0,s.SU)(v),"no-caps":"",outline:"",icon:"add",onClick:$},null,8,["loading"])]))])),_:1})])])),_:1}),(0,l.Wm)((0,s.SU)(H),{"transaction-info":(0,s.SU)(g)},null,8,["transaction-info"]),(0,l.Wm)((0,s.SU)(ne),{asset:(0,s.SU)(k),onClose:t[4]||(t[4]=e=>z(50,0))},null,8,["asset"])])),_:1})}}});var ke=t(11639),ye=t(61357),Ue=t(22857),qe=t(66663),ze=t(33115);const $e=(0,ke.Z)(he,[["__scopeId","data-v-3e987586"]]),Se=$e;V()(he,"components",{QAvatar:ye.Z,QIcon:Ue.Z,QScrollArea:qe.Z,QList:z.Z,QItem:$.Z,QItemSection:S.Z,QItemLabel:ze.Z,QBtn:U.Z})}}]);