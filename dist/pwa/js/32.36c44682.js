"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[32],{27032:(e,l,a)=>{a.r(l),a.d(l,{default:()=>k});var t=a(59835),n=a(60499),i=a(86970),u=a(31655),o=a(91569);const s=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),d={__name:"Notifications",setup(e){const l=(0,n.iH)(!1),a=(0,u.T)(),d=((0,t.Fl)((()=>a.user)),(0,t.Fl)((()=>a.notifications)));async function c(e){l.value=!l.value,await o.h.post("/api/p2p/delete_notification",{id:e}),await a.get_notifications(),l.value=!l.value}return(0,t.wF)((async()=>{await a.set_notification_read()})),(e,a)=>{const u=(0,t.up)("page-header"),o=(0,t.up)("q-item-label"),p=(0,t.up)("q-item-section"),r=(0,t.up)("q-btn"),w=(0,t.up)("q-item"),m=(0,t.up)("q-list"),_=(0,t.up)("page-body"),g=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(g,null,{default:(0,t.w5)((()=>[(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u),s,(0,t.Wm)(m,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(d),(a=>((0,t.wg)(),(0,t.j4)(w,{clickable:"",class:(0,i.C_)(a.is_new?"bg-grey-2":""),key:a.id},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,{overline:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(new Date(a.createdAt).toLocaleString()),1)])),_:2},1024),(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(a.text),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(p,{side:""},{default:(0,t.w5)((()=>[a.trade?((0,t.wg)(),(0,t.j4)(r,{key:0,dense:"",size:"10px",class:"q-mb-sm q-py-sm q-px-md",color:"primary","no-caps":"",unelevated:"",loading:l.value,onClick:l=>e.$router.push({name:"p2p_trade",params:{uid:a.trade.UID}}),rounded:"",label:"В сделку"},null,8,["loading","onClick"])):(0,t.kq)("",!0),(0,t.Wm)(r,{dense:"",loading:l.value,size:"10px",color:"negative",onClick:e=>c(a.id),class:"full-width q-px-md","no-caps":"",unelevated:"",rounded:"",label:"Удалить"},null,8,["loading","onClick"])])),_:2},1024)])),_:2},1032,["class"])))),128))])),_:1})])),_:1})])),_:1})}}};var c=a(13246),p=a(490),r=a(76749),w=a(33115),m=a(24455),_=a(69984),g=a.n(_);const f=d,k=f;g()(d,"components",{QList:c.Z,QItem:p.Z,QItemSection:r.Z,QItemLabel:w.Z,QBtn:m.Z})}}]);