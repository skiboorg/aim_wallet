"use strict";(globalThis["webpackChunkaim_wallet"]=globalThis["webpackChunkaim_wallet"]||[]).push([[628],{76628:(e,a,l)=>{l.r(a),l.d(a,{default:()=>C});var t=l(59835),u=l(86970),s=l(60499),p=l(91569),n=l(18910),o=l(46190),_=l(9991),i=l(31655),r=l(87270);const v=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),d={class:"q-mb-sm"},m={class:"text-bold"},w={class:"text-bold"},c={class:"text-bold"},y=(0,t._)("br",null,null,-1),b=["href"],$={class:"text-bold"},f=(0,t._)("br",null,null,-1),g={class:"text-bold"},z=(0,t._)("br",null,null,-1),k=(0,t._)("span",{class:"text-bold"},null,-1),U={class:"text-bold"},x={class:"text-bold"},h={key:0,class:"text-negative text-bold"},F={__name:"Offer",setup(e){const a=(0,n.yj)(),l=(0,n.tv)(),F=(0,o.c)(),q=(0,_.QT)(),W=(0,i.T)(),S=(0,s.iH)({asset:{name:""},user:{wallet:"",total_trades:0}}),j=(0,s.iH)(null),Q=(0,s.iH)(null),V=(0,s.iH)(!1),B=(0,t.Fl)((()=>W.user)),Z=(0,t.Fl)((()=>{if(Q.value){let e=Q.value.payment_type.id;return B.value.payment_types.filter((a=>a.payment_type.id===e))}return!1})),C=(0,t.Fl)((()=>{if(Q.value){let e=Q.value.payment_type.id;return R.value?B.value.payment_types.filter((a=>a.payment_type.id===e)):S.value.user.payment_types.filter((a=>a.payment_type.id===e))}})),H=(0,t.Fl)((()=>R.value?`${q.t("sell")} ${j.value} ${S.value.asset.name} ${q.t("p2p_na")} ${D.value} RUB`:`${q.t("buy")} ${j.value} ${S.value.asset.name}  ${q.t("p2p_na")} ${D.value} RUB`)),T=(0,t.Fl)((()=>A.value?R.value?"negative":"positive":"grey-7")),R=(0,t.Fl)((()=>S.value.is_sell?S.value.user.wallet===B.value.wallet:S.value.user.wallet!==B.value.wallet)),I=(0,t.Fl)((()=>F.addresses[F.currentAddressIdx].address)),A=(0,t.Fl)((()=>parseFloat(j.value)>=S.value.min_amount&&parseFloat(j.value)<=S.value.amount&&Q.value&&C.value.length>0)),D=(0,t.Fl)((()=>{if(j.value)return parseFloat(j.value)*S.value.course}));async function O(){V.value=!V.value;const e=await p.h.post("/api/p2p/create_trade",{offer_id:S.value.id,amount:j.value,asset_amount_without_commission:parseFloat(j.value-.01*j.value).toFixed(5),payment_type:C.value[0].id,opponent:I.value});e.data.success?(0,r.d$)("positive",e.data.message):(0,r.d$)("negative",e.data.message),V.value=!V.value,await W.get_own_trades(),l.push({name:"p2p_index"})}return(0,t.wF)((async()=>{let e=a.params.offer_id;const l=await p.h.get(`/api/p2p/offer?id=${e}`);S.value=l.data})),(e,a)=>{const l=(0,t.up)("page-header"),p=(0,t.up)("q-badge"),n=(0,t.up)("q-separator"),o=(0,t.up)("q-btn"),_=(0,t.up)("q-input"),i=(0,t.up)("q-select"),r=(0,t.up)("router-link"),F=(0,t.up)("page-body"),q=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(F,{class:"q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{route_name:"p2p_index"}),v,(0,t._)("p",d,[(0,t.Uk)((0,u.zw)(e.$t("p2p_offer"))+" #"+(0,u.zw)(S.value.id)+" "+(0,u.zw)(e.$t("p2p_na"))+" "+(0,u.zw)(S.value.is_sell?e.$t("p2p_selling"):e.$t("p2p_buying"))+" ",1),(0,t._)("span",m,(0,u.zw)(S.value.amount)+" "+(0,u.zw)(S.value.asset.name),1),(0,t.Uk)(", "+(0,u.zw)(e.$t("p2p_volume_min"))+" ",1),(0,t._)("span",w,(0,u.zw)(S.value.min_amount)+" "+(0,u.zw)(S.value.asset.name),1),(0,t.Uk)(", "+(0,u.zw)(e.$t("p2p_course"))+" "+(0,u.zw)(S.value.is_sell?e.$t("p2p_buying"):e.$t("p2p_selling"))+" ",1),(0,t._)("span",c,(0,u.zw)(S.value.course)+" RUB.",1),y,(0,t.Uk)(" "+(0,u.zw)(e.$t("p2p_placed"))+" ",1),(0,t._)("a",{href:`https://scan.rupay.pro/index/main.html?address=${S.value.user.wallet}&lang=en`,style:{"text-decoration":"none","border-bottom":"1px dashed"},class:"text-primary text-bold",target:"_blank"},(0,u.zw)(S.value.user.fio?S.value.user.fio:S.value.user.wallet),9,b),S.value.user.fio?((0,t.wg)(),(0,t.j4)(p,{key:0,color:"positive"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.$t("p2p_verify")),1)])),_:1})):((0,t.wg)(),(0,t.j4)(p,{key:1,color:"negative"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.$t("p2p_not_verify")),1)])),_:1})),S.value.user.is_online?((0,t.wg)(),(0,t.j4)(p,{key:2,color:"positive"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.$t("p2p_online")),1)])),_:1})):((0,t.wg)(),(0,t.j4)(p,{key:3,color:"negative"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.$t("p2p_offline")),1)])),_:1})),(0,t.Uk)(" "+(0,u.zw)(e.$t("p2p_trades"))+" ",1),(0,t._)("span",$,(0,u.zw)(S.value.user.total_trades),1),f,(0,t._)("span",g,(0,u.zw)(e.$t("p2p_rules"))+":",1),z,(0,t.Uk)((0,u.zw)(S.value.rules),1)]),(0,t.Wm)(n,{spaced:"md"}),k,(0,t._)("p",null,[(0,t.Uk)((0,u.zw)(e.$t("p2p_enter_min"))+": ",1),(0,t._)("span",U,(0,u.zw)(S.value.min_amount)+" "+(0,u.zw)(S.value.asset.name),1),(0,t.Uk)(", "+(0,u.zw)(e.$t("buy_amomunt_max"))+": ",1),(0,t._)("span",x,(0,u.zw)(S.value.amount)+" "+(0,u.zw)(S.value.asset.name),1)]),(0,t.Wm)(_,{outlined:"",modelValue:j.value,"onUpdate:modelValue":a[1]||(a[1]=e=>j.value=e),type:"number",label:`Объем сделки в ${S.value.asset.name}`,class:"q-mb-md"},{append:(0,t.w5)((()=>[(0,t.Wm)(o,{onClick:a[0]||(a[0]=e=>j.value=S.value.amount),size:"10px",unelevated:"",color:"primary","no-caps":"",label:e.$t("buy_amomunt_max")},null,8,["label"])])),_:1},8,["modelValue","label"]),(0,t._)("p",null,(0,u.zw)(e.$t("p2p_select_payment_system1")),1),(0,t.Wm)(i,{outlined:"",modelValue:Q.value,"onUpdate:modelValue":a[2]||(a[2]=e=>Q.value=e),options:S.value.payment_types,class:"q-mb-md",label:e.$t("p2p_payment_system"),behavior:"dialog"},null,8,["modelValue","options","label"]),Q.value&&!(0,s.SU)(Z).length>0?((0,t.wg)(),(0,t.iD)("p",h,[(0,t.Uk)((0,u.zw)(e.$t("p2p_no_payment_system"))+" ",1),(0,t.Wm)(r,{to:{name:"p2p_user"}},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(e.$t("app_pc_ver_btn")),1)])),_:1}),(0,t.Uk)(" "+(0,u.zw)(e.$t("p2p_no_payment_system_or"))+".",1)])):(0,t.kq)("",!0),(0,t.Wm)(o,{disable:!(0,s.SU)(A),label:(0,s.SU)(A)?(0,s.SU)(H):e.$t("p2p_all_fields"),class:"full-width q-py-md",color:(0,s.SU)(T),"no-caps":"",onClick:O,loading:V.value,unelevated:""},null,8,["disable","label","color","loading"])])),_:1})])),_:1})}}};var q=l(20990),W=l(50926),S=l(13119),j=l(24455),Q=l(57786),V=l(69984),B=l.n(V);const Z=F,C=Z;B()(F,"components",{QBadge:q.Z,QSeparator:W.Z,QInput:S.Z,QBtn:j.Z,QSelect:Q.Z})}}]);