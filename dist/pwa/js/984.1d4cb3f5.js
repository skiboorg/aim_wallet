"use strict";(globalThis["webpackChunkaim_wallet"]=globalThis["webpackChunkaim_wallet"]||[]).push([[984],{61984:(e,l,a)=>{a.r(l),a.d(l,{default:()=>S});var u=a(59835),t=a(60499),s=a(86970),o=a(46190),n=a(31655),p=a(91569),d=a(87270),m=a(18910),i=(a(24409),a(23459)),r=a(17779);const c=(0,u._)("div",{class:"",style:{height:"50px"}},null,-1),_=["src"],v={key:0},b={key:1},w={class:"text-caption"},y={key:0,class:"text-caption text-negative"},g={key:2},k={__name:"NewSellOffer",setup(e){const l=(0,o.c)(),a=(0,t.iH)(null),k=(0,m.tv)(),f=(0,n.T)(),q=((0,i.Q)(),(0,t.iH)(null)),V=(0,t.iH)(null),h=(0,t.iH)(null),U=(0,t.iH)(null),W=(0,t.iH)(null),$=((0,u.Fl)((()=>l.addresses[l.currentAddressIdx].address)),(0,u.Fl)((()=>f.user))),F=(0,u.Fl)((()=>l.assets)),z=(0,u.Fl)((()=>l.balances));async function x(){r.log(q.value);const e=await p.h.post("/api/p2p/add_offer",{is_sell:!0,asset_key:q.value.key,wallet:$.value.wallet,amount:V.value,min_amount:h.value,payment_types:a.value,course:U.value,rules:W.value});r.log(e.data),e.data.success?(0,d.d)("positive",e.data.message):(0,d.d)("negative",e.data.message),await f.get_own_offers(),k.push({name:"p2p_index"})}return(e,l)=>{const o=(0,u.up)("page-header"),n=(0,u.up)("q-avatar"),p=(0,u.up)("q-item-section"),d=(0,u.up)("q-item-label"),m=(0,u.up)("q-item"),i=(0,u.up)("q-select"),r=(0,u.up)("q-btn"),k=(0,u.up)("q-input"),f=(0,u.up)("page-body"),S=(0,u.up)("page");return(0,u.wg)(),(0,u.j4)(S,null,{default:(0,u.w5)((()=>[(0,u.Wm)(f,{class:"q-pa-md"},{default:(0,u.w5)((()=>[(0,u.Wm)(o,{route_name:"p2p_index"}),c,(0,u.Wm)(i,{outlined:"",rounded:"",options:(0,t.SU)(F),modelValue:q.value,"onUpdate:modelValue":l[0]||(l[0]=e=>q.value=e),"option-label":"name",class:"q-mb-md",behavior:"dialog",label:e.$t("p2p_select_asset_for_sell")},{option:(0,u.w5)((l=>[(0,u.Wm)(m,(0,s.vs)((0,u.F4)(l.itemProps)),{default:(0,u.w5)((()=>[(0,u.Wm)(p,{avatar:""},{default:(0,u.w5)((()=>[(0,u.Wm)(n,null,{default:(0,u.w5)((()=>[(0,u._)("img",{src:`https://scan.rupay.pro${l.opt.iconURL}`},null,8,_)])),_:2},1024)])),_:2},1024),(0,u.Wm)(p,null,{default:(0,u.w5)((()=>[(0,u.Wm)(d,{class:"text-bold"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,s.zw)(l.opt.name),1)])),_:2},1024),(0,u.Wm)(d,{caption:""},{default:(0,u.w5)((()=>[(0,u.Uk)((0,s.zw)(e.$t("your_balance"))+": "+(0,s.zw)((0,t.SU)(z)[l.opt.key][0][1]),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["options","modelValue","label"]),q.value?((0,u.wg)(),(0,u.iD)("div",v,[(0,u.Wm)(i,{outlined:"",rounded:"",options:(0,t.SU)($).payment_types,modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value=e),"use-chips":"",class:"q-mb-md",behavior:"dialog",multiple:"",label:e.$t("p2p_select_payment_system")},null,8,["options","modelValue","label"])])):(0,u.kq)("",!0),a.value&&a.value.length>0?((0,u.wg)(),(0,u.iD)("div",b,[(0,u._)("p",null,(0,s.zw)(e.$t("your_balance"))+" "+(0,s.zw)((0,t.SU)(z)[q.value.key][0][1])+" "+(0,s.zw)(q.value.name),1),(0,u.Wm)(k,{outlined:"",rounded:"",modelValue:V.value,"onUpdate:modelValue":l[3]||(l[3]=e=>V.value=e),class:"q-mb-md",type:"number",label:e.$t("p2p_select_volume")},{append:(0,u.w5)((()=>[(0,u.Wm)(r,{onClick:l[2]||(l[2]=e=>V.value=(0,t.SU)(z)[q.value.key][0][1]),size:"10px",unelevated:"",color:"primary","no-caps":"",rounded:"",label:e.$t("sell_all")},null,8,["label"])])),_:1},8,["modelValue","label"]),(0,u.Wm)(k,{outlined:"",rounded:"",modelValue:h.value,"onUpdate:modelValue":l[4]||(l[4]=e=>h.value=e),class:"q-mb-md",type:"number",label:e.$t("p2p_select_volume_min")},null,8,["modelValue","label"]),(0,u._)("p",w,(0,s.zw)(e.$t("buy_amomunt_cource"))+": "+(0,s.zw)(q.value.course),1),parseFloat(q.value.p2p_min_sell_price)>0?((0,u.wg)(),(0,u.iD)("p",y,(0,s.zw)(e.$t("sell_min_cource"))+": "+(0,s.zw)(q.value.p2p_min_sell_price),1)):(0,u.kq)("",!0),(0,u.Wm)(k,{outlined:"",rounded:"",modelValue:U.value,"onUpdate:modelValue":l[5]||(l[5]=e=>U.value=e),class:"q-mb-md",type:"number",label:e.$t("p2p_select_course")},null,8,["modelValue","label"]),(0,u.Wm)(k,{outlined:"",rounded:"",modelValue:W.value,"onUpdate:modelValue":l[6]||(l[6]=e=>W.value=e),class:"q-mb-md",type:"textarea",label:e.$t("p2p_select_rules")},null,8,["modelValue","label"])])):(0,u.kq)("",!0),V.value&&h.value&&U.value?((0,u.wg)(),(0,u.iD)("div",g,[(0,u.Wm)(r,{dense:"",class:"full-width q-py-md",color:"positive","no-caps":"",unelevated:"",disable:parseFloat(V.value)>parseFloat((0,t.SU)(z)[q.value.key][0][1])||parseFloat(h.value)>parseFloat(V.value)||parseFloat(U.value)<parseFloat(q.value.p2p_min_sell_price),onClick:x,rounded:"",label:`${e.$t("p2p_create_offer")} ${V.value*U.value} RUB`},null,8,["disable","label"])])):(0,u.kq)("",!0)])),_:1})])),_:1})}}};var f=a(57786),q=a(490),V=a(76749),h=a(61357),U=a(33115),W=a(13119),$=a(24455),F=a(69984),z=a.n(F);const x=k,S=x;z()(k,"components",{QSelect:f.Z,QItem:q.Z,QItemSection:V.Z,QAvatar:h.Z,QItemLabel:U.Z,QInput:W.Z,QBtn:$.Z})}}]);