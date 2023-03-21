"use strict";(globalThis["webpackChunkaim_wallet"]=globalThis["webpackChunkaim_wallet"]||[]).push([[429],{89429:(e,a,l)=>{l.r(a),l.d(a,{default:()=>Ya});l(46727),l(40702),l(18964);var t=l(59835),n=l(60499),o=l(86970),u=l(61957),i=l(76028),s=l(23459),r=l(98030),d=l(91569),c=l(46190),m=l(43463),p=l(6827),v=(l(39981),l(18910)),w=l(9991),_=l(66195),g=l.n(_),f=l(82341),y=l.n(f),b=l(95563),x=l.n(b),h=l(17779);const U={class:"flex items-center"},k=["src"],S={class:"no-margin text-weight-medium"},W=(0,t._)("p",{class:"q-mb-none q-px-sm text-weight-medium"},"/",-1),z=["src"],q={class:"no-margin text-weight-medium"},$=(0,t._)("div",{class:"",style:{height:"60px"}},null,-1),H={class:"row q-col-gutter-sm"},F={class:"col-4"},V={key:0,class:"no-margin text-bold text-h6"},Q={key:1,class:"no-margin text-bold text-h6 text-positive"},Z={class:"col-8"},C={class:"row q-col-gutter-xs text-caption"},P={class:"col-5"},j={class:"text-grey-7"},K=(0,t._)("br",null,null,-1),A=(0,t._)("br",null,null,-1),D={class:"text-grey-7"},O=(0,t._)("br",null,null,-1),T={class:"col-6"},Y={class:"text-grey-7 ellipsis q-mb-none"},I=(0,t._)("br",null,null,-1),L={class:"text-grey-7 ellipsis q-mb-none"},B=(0,t._)("br",null,null,-1),N={class:"flex items-center no-wrap q-mb-md"},M=(0,t._)("br",null,null,-1),E=(0,t._)("br",null,null,-1),R={class:"text-caption q-mb-sm"},G={class:"text-caption q-mb-sm"},J={class:"text-caption q-mb-sm"},X={class:""},ee={class:"row q-col-gutter-sm"},ae={class:"col-6"},le={class:"orders-grid"},te={class:"flex items-center justify-between"},ne={class:"no-margin text-10 text-grey-8 text-weight-medium"},oe={class:"no-margin text-10 text-grey-8 text-weight-medium"},ue={class:"no-margin price-red-color text-10 text-weight-medium"},ie={class:"no-margin vol-color text-10 text-weight-medium"},se={class:"col-6"},re={class:"orders-grid"},de={class:"flex items-center justify-between"},ce={class:"no-margin text-10 text-grey-8 text-weight-medium"},me={class:"no-margin text-10 text-grey-8 text-weight-medium"},pe={class:"no-margin price-green-color text-10 text-weight-medium"},ve={class:"no-margin vol-color text-10 text-weight-medium"},we={class:"col-6"},_e={class:"flex items-center justify-between"},ge={class:"no-margin text-10 text-grey-8 text-weight-medium"},fe={class:"no-margin text-10 vol-color text-weight-medium"},ye={class:"col-6"},be={class:"flex items-center justify-between"},xe={class:"no-margin text-10 text-grey-8 text-weight-medium"},he={class:"no-margin text-10 vol-color text-weight-medium"};y().setOptions({rangeSelector:{dropdownLabel:["Масштаб"],buttons:[{type:"month",count:1,text:"1м",title:"1 мес"},{type:"month",count:3,text:"3м",title:"3 мес"},{type:"month",count:6,text:"6м",title:"6 мес"},{type:"ytd",text:"С начала года",title:"С начала года"},{type:"year",count:1,text:"1г",title:"1 год"},{type:"all",text:"Все",title:"Показать всё"}]},lang:{shortMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],weekdays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]}}),x()(y());const Ue={name:"StockChart",components:{VueHighcharts:g()}},ke=Object.assign(Ue,{props:{tradePair:Object},setup(e){const a=e,l=(0,m.s)(),u=(0,s.Q)(),_=(0,w.QT)(),g=(0,c.c)(),f=((0,v.tv)(),(0,t.Fl)((()=>u.assets)),(0,t.Fl)((()=>g.balances)));let y=(0,n.iH)([]),b=(0,n.iH)([]),x=(0,n.iH)([]),Ue=(0,n.iH)({}),ke=(0,n.iH)({}),Se=(0,n.iH)("buy"),We=(0,n.iH)(null),ze=(0,n.iH)(null),qe=(0,n.iH)(null),$e=(0,n.iH)(!1),He=(0,n.iH)(!1),Fe=(0,n.iH)({}),Ve=(0,n.iH)(0),Qe=(0,n.iH)(0),Ze=(0,n.iH)(0),Ce=(0,n.iH)(0),Pe=(0,n.iH)({}),je=(0,n.iH)([]),Ke=(0,n.iH)(!0),Ae=(0,n.iH)({rangeSelector:{selected:1},title:{text:""},series:[{name:"",data:[]}]});const De={11:_.t("trade_error_balance"),66:_.t("trade_error_min_order")};function Oe(){h.log(We.value),We.value||(qe.value=null,ze.value=null),ze.value&&(qe.value=parseFloat(We.value*ze.value).toFixed(5))}function Te(){Ce.value=0,Ze.value=0,Se.value="buy",We.value=null,ze.value=null,qe.value=null,Ae.value.series[0].data=[],je.value=[]}function Ye(){Ve.value>0&&"sell"===Se.value&&(2===Ue.value.key||1048610===Ue.value.key)&&(ze.value>=Qe.value||(ze.value=Qe.value)),We.value&&(qe.value=parseFloat(We.value*ze.value).toFixed(5))}function Ie(){h.log(qe.value),ze.value&&(We.value=parseFloat(qe.value/ze.value).toFixed(5))}async function Le(){const e=await u.getKeyPair(),a="buy"===Se.value?ke.value.key:Ue.value.key,l="buy"===Se.value?qe.value:We.value,t="buy"===Se.value?Ue.value.key:ke.value.key,n="buy"===Se.value?We.value:qe.value;h.log("have",a),h.log("want",t),h.log("haveAmount",l),h.log("wantAmount",n),await r.era.tranRawOrder(e,"name",a,l,t,n,!0).then((e=>{Fe.value=e,h.log(Fe.value),$e.value=!0}))}async function Be(){He.value=!He.value;const e=await r.era.broadcast64(Fe.value.raw);h.log(e),e.error?p.Z.create({color:"negative",message:De[e.error]}):p.Z.create({color:"info",message:_.t("transaction_created")}),$e.value=!1,He.value=!He.value}function Ne(e){h.log(e),We.value=e.leftWant,ze.value=e.pairPrice,qe.value=parseFloat(e.leftWant*e.pairPrice).toFixed(5),Se.value="sell"}function Me(e){We.value=parseFloat(e.leftHave).toFixed(5),ze.value=e.pairPrice,qe.value=parseFloat(e.leftHave*e.pairPrice).toFixed(5),Se.value="buy"}async function Ee(){Ke.value=!0,x.value=[],b.value=[],Ue.value=u.assets.find((e=>e.key===a.tradePair["0"])),ke.value=u.assets.find((e=>e.key===a.tradePair["1"])),y.value=await(0,i.AU)(a.tradePair["0"],a.tradePair["1"]),Ve.value=parseFloat(ke.value.min_trade_price),Qe.value=parseFloat(Ue.value.min_trade_price);for(let a of y.value.have){Ze.value+=parseFloat(a.leftHave);let e=[];e=y.value.have.filter((e=>e.pairPrice===a.pairPrice));let l=0;if(x.value.filter((e=>e.pairPrice===a.pairPrice)).length>0);else{for(let a of e)l+=parseFloat(a.leftHave);e[0].leftHave=l,x.value.push(e[0])}}for(let a of y.value.want){Ce.value+=parseFloat(a.leftWant);let e=[];e=y.value.want.filter((e=>e.pairPrice===a.pairPrice));let l=0;if(b.value.filter((e=>e.pairPrice===a.pairPrice)).length>0);else{for(let a of e)l+=parseFloat(a.leftWant);e[0].leftWant=l,b.value.push(e[0])}}const e=await d.h.get(`/api/settings/volume?q_key=${ke.value.key}&b_key=${Ue.value.key}`);Pe.value=e.data;const l=await d.h.get(`https://scan.rupay.pro/apiexchange/trades/${Ue.value.key}/${ke.value.key}`);for(let a of l.data.reverse())je.value.push([a.timestamp,a.price]);Ae.value.series[0].data=je.value,Ae.value.series[0].name=`${Ue.value.name}/${ke.value.name}`,Ke.value=!1}return(0,t.YP)(Se,(e=>{We.value=null,ze.value=null,qe.value=null})),(e,a)=>{const u=(0,t.up)("q-btn"),i=(0,t.up)("q-avatar"),s=(0,t.up)("q-header"),r=(0,t.up)("q-separator"),d=(0,t.up)("q-input"),c=(0,t.up)("q-linear-progress"),m=(0,t.up)("q-card-section"),p=(0,t.up)("q-card"),v=(0,t.up)("q-dialog"),w=(0,t.up)("q-item-section"),_=(0,t.up)("q-item"),g=(0,t.up)("q-list"),y=(0,t.up)("q-card-actions"),h=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(v,{modelValue:(0,n.SU)(l).tradeModalVisible,"onUpdate:modelValue":a[6]||(a[6]=e=>(0,n.SU)(l).tradeModalVisible=e),persistent:"",maximized:"","transition-show":"slide-left","transition-hide":"slide-right",onBeforeShow:Ee,onBeforeHide:Te},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"bg-white"},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{style:{"padding-right":"16px"},reveal:"",class:"text-white q-py-sm items-center flex justify-between"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(u,{label:"Назад","no-caps":"",icon:"las la-angle-left",unelevated:""},null,512),[[h]]),(0,t._)("div",U,[(0,t.Wm)(i,{size:"30px",class:"q-mr-sm"},{default:(0,t.w5)((()=>[(0,t._)("img",{src:(0,n.SU)(Ue).icon,alt:""},null,8,k)])),_:1}),(0,t._)("p",S,(0,o.zw)((0,n.SU)(Ue).name),1),W,(0,t.Wm)(i,{size:"30px",class:"q-mr-sm"},{default:(0,t.w5)((()=>[(0,t._)("img",{src:(0,n.SU)(ke).icon,alt:""},null,8,z)])),_:1}),(0,t._)("p",q,(0,o.zw)((0,n.SU)(ke).name),1)])])),_:1}),$,(0,t.Wm)(m,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t._)("div",H,[(0,t._)("div",F,["OLF"!==(0,n.SU)(Ue).name?((0,t.wg)(),(0,t.iD)("p",V,(0,o.zw)(parseFloat((0,n.SU)(Pe).last_price).toFixed(4)),1)):((0,t.wg)(),(0,t.iD)("p",Q,(0,o.zw)(parseFloat((0,n.SU)(Ue).course/(0,n.SU)(ke).course).toFixed(5)),1))]),(0,t._)("div",Z,[(0,t._)("div",C,[(0,t._)("div",P,[(0,t._)("span",j,(0,o.zw)(e.$t("trade_max24")),1),K,(0,t.Uk)(" "+(0,o.zw)(parseFloat((0,n.SU)(Pe).highest_price_24h).toFixed(2)),1),A,(0,t._)("span",D,(0,o.zw)(e.$t("trade_min24")),1),O,(0,t.Uk)(" "+(0,o.zw)(parseFloat((0,n.SU)(Pe).lowest_price_24h).toFixed(2)),1)]),(0,t._)("div",T,[(0,t._)("p",Y,(0,o.zw)(e.$t("trade_vol24"))+" ("+(0,o.zw)((0,n.SU)(Ue).name)+")",1),(0,t.Uk)(" ~"+(0,o.zw)(parseFloat((0,n.SU)(Pe).base_volume_24).toFixed(2)),1),I,(0,t._)("p",L,(0,o.zw)(e.$t("trade_vol24"))+"("+(0,o.zw)((0,n.SU)(ke).name)+")",1),(0,t.Uk)(" ~"+(0,o.zw)(parseFloat((0,n.SU)(Pe).quote_volume_24).toFixed(2)),1),B])])])]),(0,t.Wm)(r,{spaced:"md"}),(0,t._)("div",N,[(0,t.Wm)(u,{unelevated:"","no-caps":"",class:"bye-btn full-width q-py-sm",color:"buy"===(0,n.SU)(Se)?"positive":"grey-5",onClick:a[0]||(a[0]=e=>(0,n.dq)(Se)?Se.value="buy":Se="buy")},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.$t("buy"))+" "+(0,o.zw)((0,n.SU)(Ue).name)+" за",1),M,(0,t.Uk)(" "+(0,o.zw)((0,n.SU)(ke).name),1)])),_:1},8,["color"]),(0,t.Wm)(u,{color:"sell"===(0,n.SU)(Se)?"negative":"grey-5",unelevated:"",class:"sell-btn full-width q-py-sm","no-caps":"",onClick:a[1]||(a[1]=e=>(0,n.dq)(Se)?Se.value="sell":Se="sell")},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.$t("sell"))+" "+(0,o.zw)((0,n.SU)(Ue).name)+" за",1),E,(0,t.Uk)(" "+(0,o.zw)((0,n.SU)(ke).name),1)])),_:1},8,["color"])]),(0,t._)("p",R,(0,o.zw)("buy"===(0,n.SU)(Se)?e.$t("buy_amount"):e.$t("sell_amount")),1),(0,t.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(We),"onUpdate:modelValue":a[3]||(a[3]=e=>(0,n.dq)(We)?We.value=e:We=e),onKeyup:Oe,type:"number"},{append:(0,t.w5)((()=>["sell"===(0,n.SU)(Se)?((0,t.wg)(),(0,t.j4)(u,{key:0,onClick:a[2]||(a[2]=e=>(0,n.dq)(We)?We.value=(0,n.SU)(f)[(0,n.SU)(Ue).key][0][1]:We=(0,n.SU)(f)[(0,n.SU)(Ue).key][0][1]),size:"10px",flat:"",rounded:"",label:e.$t("sell_all")},null,8,["label"])):(0,t.kq)("",!0)])),_:1},8,["modelValue"]),(0,t._)("p",G,(0,o.zw)(e.$t("price_per_unit")),1),(0,t.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(ze),"onUpdate:modelValue":a[4]||(a[4]=e=>(0,n.dq)(ze)?ze.value=e:ze=e),onBlur:Ye,type:"number"},null,8,["modelValue"]),(0,t._)("p",J,(0,o.zw)(e.$t("total")),1),(0,t.Wm)(d,{class:"q-mb-md",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(qe),"onUpdate:modelValue":a[5]||(a[5]=e=>(0,n.dq)(qe)?qe.value=e:qe=e),onKeyup:Ie,type:"number"},null,8,["modelValue"]),(0,t.Wm)(u,{rounded:"",loading:(0,n.SU)(He),label:"buy"===(0,n.SU)(Se)?e.$t("buy"):e.$t("sell"),color:"buy"===(0,n.SU)(Se)?"positive":"negative",class:"full-width q-mb-md",unelevated:"",size:"18px","no-caps":"",disable:!(0,n.SU)(We)||!(0,n.SU)(ze)||!(0,n.SU)(qe),onClick:Le},null,8,["loading","label","color","disable"]),(0,t._)("div",X,[(0,t._)("div",ee,[(0,t._)("div",ae,[(0,t._)("div",le,[(0,t._)("div",te,[(0,t._)("p",ne,(0,o.zw)(e.$t("price")),1),(0,t._)("p",oe,(0,o.zw)(e.$t("volume")),1)]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(x),((e,a)=>((0,t.wg)(),(0,t.j4)(c,{reverse:"",onClick:a=>Me(e),class:"flex items-center justify-between relative-position sell-pr",color:"red-2",value:e.leftHave/e.amountHave,size:"16px"},{default:(0,t.w5)((()=>[(0,t._)("p",ue,(0,o.zw)(e.pairPrice),1),(0,t._)("p",ie,(0,o.zw)(e.leftHave),1)])),_:2},1032,["onClick","value"])))),256))])]),(0,t._)("div",se,[(0,t._)("div",re,[(0,t._)("div",de,[(0,t._)("p",ce,(0,o.zw)(e.$t("price")),1),(0,t._)("p",me,(0,o.zw)(e.$t("volume")),1)]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(b),((e,a)=>((0,t.wg)(),(0,t.j4)(c,{onClick:a=>Ne(e),class:"flex items-center justify-between relative-position bg-white buy-pr",color:"light-green-11",value:e.leftWant/e.amountWant,size:"16px"},{default:(0,t.w5)((()=>[(0,t._)("p",pe,(0,o.zw)(e.pairPrice),1),(0,t._)("p",ve,(0,o.zw)(e.leftWant),1)])),_:2},1032,["onClick","value"])))),256))])]),(0,t._)("div",we,[(0,t.Wm)(r),(0,t._)("div",_e,[(0,t._)("p",ge,(0,o.zw)(e.$t("total_all")),1),(0,t._)("p",fe,(0,o.zw)((0,n.SU)(Ze)),1)])]),(0,t._)("div",ye,[(0,t.Wm)(r),(0,t._)("div",be,[(0,t._)("p",xe,(0,o.zw)(e.$t("total_all")),1),(0,t._)("p",he,(0,o.zw)((0,n.SU)(Ce)),1)])])])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(v,{modelValue:(0,n.SU)($e),"onUpdate:modelValue":a[7]||(a[7]=e=>(0,n.dq)($e)?$e.value=e:$e=e),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.$t("trade_confirm")),1)])),_:1}),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(g,{separator:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.$t("trade_have")),1)])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)("buy"===(0,n.SU)(Se)?(0,n.SU)(qe):(0,n.SU)(We))+" "+(0,o.zw)("buy"===(0,n.SU)(Se)?(0,n.SU)(ke).name:(0,n.SU)(Ue).name),1)])),_:1})])),_:1}),(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.$t("trade_want")),1)])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)("buy"===(0,n.SU)(Se)?(0,n.SU)(We):(0,n.SU)(qe))+" "+(0,o.zw)("buy"===(0,n.SU)(Se)?(0,n.SU)(Ue).name:(0,n.SU)(ke).name),1)])),_:1})])),_:1}),(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.$t("trade_gas")),1)])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)((0,n.SU)(Fe).fee)+" OLF ",1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(y,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(u,{rounded:"","no-caps":"",unelevated:"",color:"grey-6",loading:(0,n.SU)(He),label:"Отмена"},null,8,["loading"]),[[h]]),(0,t.Wm)(u,{rounded:"","no-caps":"",unelevated:"",loading:(0,n.SU)(He),onClick:Be,label:"buy"===(0,n.SU)(Se)?e.$t("buy"):e.$t("sell"),color:"buy"===(0,n.SU)(Se)?"positive":"negative"},null,8,["loading","label","color"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}});var Se=l(32074),We=l(44458),ze=l(16602),qe=l(24455),$e=l(61357),He=l(63190),Fe=l(50926),Ve=l(13119),Qe=l(8289),Ze=l(13246),Ce=l(490),Pe=l(76749),je=l(11821),Ke=l(62146),Ae=l(69984),De=l.n(Ae);const Oe=ke,Te=Oe;De()(ke,"components",{QDialog:Se.Z,QCard:We.Z,QHeader:ze.Z,QBtn:qe.Z,QAvatar:$e.Z,QCardSection:He.Z,QSeparator:Fe.Z,QInput:Ve.Z,QLinearProgress:Qe.Z,QList:Ze.Z,QItem:Ce.Z,QItemSection:Pe.Z,QCardActions:je.Z}),De()(ke,"directives",{ClosePopup:Ke.Z});var Ye=l(17779);const Ie=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),Le={class:"flex items-center justify-start"},Be=["src"],Ne=["src"],Me={class:"q-pa-md"},Ee={key:0},Re={class:"text-weight-medium text-grey-9"},Ge=(0,t.Uk)(" : "),Je=(0,t._)("br",null,null,-1),Xe={class:"text-weight-medium text-grey-9"},ea=(0,t.Uk)(" : "),aa=(0,t._)("br",null,null,-1),la={class:"text-weight-medium text-grey-9"},ta=(0,t.Uk)(" : "),na={class:"no-margin text-caption text-weight-bold"},oa={class:"no-margin text-caption"},ua={class:"no-margin text-caption"},ia={class:"no-margin text-caption"},sa={class:"no-margin text-caption"},ra={class:"no-margin text-caption"},da=["href"],ca={class:"no-margin text-caption text-weight-bold"},ma={class:"no-margin text-caption"},pa={class:"no-margin text-caption"},va={class:"no-margin text-caption"},wa={class:"no-margin text-caption"},_a={class:"no-margin text-caption"},ga=["href"],fa={class:"no-margin text-caption text-weight-bold"},ya={class:"no-margin text-caption"},ba={class:"no-margin text-caption"},xa={class:"no-margin text-caption"},ha={class:"no-margin text-caption"},Ua={class:"no-margin text-caption"},ka=["href"],Sa={class:"text-h6"},Wa={class:"caption q-mb-sm"},za={class:"caption q-mb-sm"},qa={key:0,class:"no-margin text-negative text-center"},$a=(0,t.Uk)(" Подтверждение транзакции отмены ордера "),Ha=(0,t.Uk)("Комиссия"),Fa={components:{TradeModal:Te}},Va=Object.assign(Fa,{__name:"Exchange",setup(e){const a=(0,s.Q)(),l=(0,c.c)(),p=(0,m.s)(),v=(0,n.iH)(null),w=(0,n.iH)(!1),_=(0,n.iH)(!1),g=(0,n.iH)(null),f=(0,n.iH)(null),y=(0,n.iH)("market"),b=(0,n.iH)("active"),x=(0,n.iH)(null),h=(0,n.iH)({}),U=(0,n.iH)([]),k=(0,n.iH)([]),S=(0,n.iH)([]),W=(0,n.iH)([]),z=(0,n.iH)({});let q=(0,n.iH)({}),$=(0,n.iH)(!1),H=(0,n.iH)([]);async function F(e){_.value=!_.value;const l=await a.getKeyPair(),t=await r.era.tranBySeq(e);Ye.log(t);const n=await r.era.tranRawCancelOrder(l,"name",t.signature,!0);q.value=n,Ye.log(q.value),$.value=!0,_.value=!_.value}async function V(){_.value=!_.value,Ye.log(q.value.raw);const e=await r.era.broadcast64(q.value.raw);Ye.log(e),$.value=!1,_.value=!_.value}function Q(){let e=K.value[v.value];x.value=g.value*e.price}function Z(){let e=K.value[v.value];g.value=x.value*e.reversePrice}function C(){g.value=null,x.value=null,q.value={}}async function P(){_.value=!_.value;const e=await a.getKeyPair();let l=K.value[v.value];const t=l.have,n=g.value,o=l.want,u=x.value;Ye.log("have",t),Ye.log("want",o),Ye.log("haveAmount",n),Ye.log("wantAmount",u),await r.era.tranRawOrder(e,"name",t,n,o,u,!0).then((e=>{q.value=e,Ye.log(q.value)})),_.value=!_.value}(0,t.YP)(f,(e=>{if(e){let a={};Ye.log(A.value);let l=Object.keys(A.value).filter((a=>a.toUpperCase().includes(e.toUpperCase())));Ye.log(l);for(let e of l)Ye.log(A.value[e]),a[e]=A.value[e];z.value=a,Ye.log(a)}else z.value={}})),(0,t.YP)(g,(e=>{e>O.value[K.value[v.value].have][0][1]&&(g.value=O.value[K.value[v.value].have][0][1],x.value=0,Z())}));const j=(0,t.Fl)((()=>a.assets)),K=(0,t.Fl)((()=>a.marketExchange)),A=(0,t.Fl)((()=>a.trade_pairs)),D=(0,t.Fl)((()=>l.addresses[l.currentAddressIdx].address)),O=((0,t.Fl)((()=>l.assets)),(0,t.Fl)((()=>l.balances))),T=(0,t.Fl)((()=>Object.keys(O.value)));return(0,t.wF)((async()=>{p.toggleLoadingState();const e=await d.h.get("/api/settings/volumes");Ye.log(e.data),H.value=e.data,await a.getMarketExchangeOrders(),await a.setTradePairs(),U.value=await(0,i.rK)(D.value);let l=[];Ye.log(U.value);for(let a of U.value)j.value.find((e=>e.key===a.haveAssetKey))&&j.value.find((e=>e.key===a.wantAssetKey))&&l.push(a);Ye.log(l),k.value=l.filter((e=>1===e.status||2===e.status)),S.value=l.filter((e=>3===e.status)),W.value=l.filter((e=>4===e.status)),p.toggleLoadingState()})),(e,a)=>{const l=(0,t.up)("page-header"),i=(0,t.up)("q-tab"),s=(0,t.up)("q-tabs"),r=(0,t.up)("q-separator"),d=(0,t.up)("q-avatar"),c=(0,t.up)("q-icon"),m=(0,t.up)("q-item-section"),U=(0,t.up)("q-item-label"),D=(0,t.up)("q-item"),Y=(0,t.up)("q-list"),I=(0,t.up)("q-scroll-area"),L=(0,t.up)("q-tab-panel"),B=(0,t.up)("q-input"),N=(0,t.up)("q-badge"),M=(0,t.up)("q-btn"),E=(0,t.up)("q-tab-panels"),R=(0,t.up)("q-card-section"),G=(0,t.up)("q-card-actions"),J=(0,t.up)("q-card"),X=(0,t.up)("q-dialog"),ee=(0,t.up)("page-body"),ae=(0,t.up)("page"),le=(0,t.Q2)("touch-swipe"),te=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(ae,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ee,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l),Ie,(0,t.wy)(((0,t.wg)(),(0,t.j4)(s,{modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=e=>y.value=e),class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{"no-caps":"",class:"bg-white",name:"market",label:e.$t("market")},null,8,["label"]),(0,t.Wm)(i,{"no-caps":"",class:"bg-white",name:"own_orders",label:e.$t("owm_trade")},null,8,["label"])])),_:1},8,["modelValue"])),[[le]]),(0,t.Wm)(r),(0,t.Wm)(E,{modelValue:y.value,"onUpdate:modelValue":a[4]||(a[4]=e=>y.value=e),animated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(L,{name:"exchange",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{style:{height:"85vh"}},{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(K),((e,a)=>(0,t.wy)(((0,t.wg)(),(0,t.j4)(D,{clickable:"",onClick:e=>(v.value=a,w.value=!0),key:a},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("div",Le,[(0,t.Wm)(d,{rounded:""},{default:(0,t.w5)((()=>[(0,t._)("img",{src:`/asset_icons/${(0,n.SU)(j).find((a=>a.key===e.have)).icon}`},null,8,Be)])),_:2},1024),(0,t.Wm)(c,{name:"las la-long-arrow-alt-right",size:"30px"}),(0,t.Wm)(d,{rounded:""},{default:(0,t.w5)((()=>[(0,t._)("img",{src:`/asset_icons/${(0,n.SU)(j).find((a=>a.key===e.want)).icon}`},null,8,Ne)])),_:2},1024)])])),_:2},1024),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(U,{class:"text-weight-medium"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)((0,n.SU)(j).find((a=>a.key===e.have)).name)+"/"+(0,o.zw)((0,n.SU)(j).find((a=>a.key===e.want)).name),1)])),_:2},1024),(0,t.Wm)(U,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" 1 / "+(0,o.zw)(e.price),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[u.F8,(0,n.SU)(T).includes(String(e.have))]]))),128))])),_:1})])),_:1})])),_:1}),(0,t.Wm)(L,{name:"market",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t._)("div",Me,[(0,t.Wm)(B,{dense:"",outlined:"",rounded:"",modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=e=>f.value=e),label:e.$t("search")},{prepend:(0,t.w5)((()=>[(0,t.Wm)(c,{name:"search"})])),_:1},8,["modelValue","label"])]),(0,t.Wm)(r),(0,t.Wm)(I,{style:{height:"75vh"}},{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Object.keys(z.value).length>0?z.value:(0,n.SU)(A),((a,l)=>((0,t.wg)(),(0,t.j4)(D,{clickable:"",onClick:e=>(h.value=a,(0,n.SU)(p).toggleTradeModalVisible()),key:l},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{class:"text-weight-medium"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(l.replace("_"," / ")),1)])),_:2},1024),(0,t.Wm)(m,{class:"text-caption"},{default:(0,t.w5)((()=>[(0,n.SU)(H).filter((e=>e.pair===l)).length>0?((0,t.wg)(),(0,t.iD)("span",Ee,[(0,t._)("span",Re,(0,o.zw)(e.$t("for24h")),1),Ge,(0,t.Wm)(N,{rounded:"",color:"grey-3","text-color":"dark"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(parseFloat((0,n.SU)(H).find((e=>e.pair===l)).base_volume_24).toFixed(2))+" / "+(0,o.zw)(parseFloat((0,n.SU)(H).find((e=>e.pair===l)).quote_volume_24).toFixed(2)),1)])),_:2},1024),Je,(0,t._)("span",Xe,(0,o.zw)(e.$t("for7d")),1),ea,(0,t.Wm)(N,{rounded:"",color:"grey-3","text-color":"dark"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(parseFloat((0,n.SU)(H).find((e=>e.pair===l)).base_volume_1w).toFixed(2))+" / "+(0,o.zw)(parseFloat((0,n.SU)(H).find((e=>e.pair===l)).quote_volume_1w).toFixed(2)),1)])),_:2},1024),aa,(0,t._)("span",la,(0,o.zw)(e.$t("for1m")),1),ta,(0,t.Wm)(N,{rounded:"",color:"grey-3","text-color":"dark"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(parseFloat((0,n.SU)(H).find((e=>e.pair===l)).base_volume_1m).toFixed(2))+" / "+(0,o.zw)(parseFloat((0,n.SU)(H).find((e=>e.pair===l)).quote_volume_1m).toFixed(2)),1)])),_:2},1024)])):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),(0,t.Wm)(L,{name:"own_orders",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.j4)(s,{modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=e=>b.value=e),dense:"",align:"justify"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{"no-caps":"",class:"bg-white text-info",name:"active",label:e.$t("active_offers")},null,8,["label"]),(0,t.Wm)(i,{"no-caps":"",class:"bg-white text-positive",name:"done",label:e.$t("done_offers")},null,8,["label"]),(0,t.Wm)(i,{"no-caps":"",class:"bg-white text-negative",name:"cancel",label:e.$t("cancel_offers")},null,8,["label"])])),_:1},8,["modelValue"])),[[le]]),(0,t.Wm)(r),(0,t.Wm)(I,{style:{height:"83vh"}},{default:(0,t.w5)((()=>[(0,t.Wm)(E,{modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=e=>b.value=e),animated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(L,{name:"active",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(k.value,((a,l)=>((0,t.wg)(),(0,t.j4)(D,{key:l},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("p",na,(0,o.zw)((0,n.SU)(j).find((e=>e.key===a.wantAssetKey)).name)+" / "+(0,o.zw)((0,n.SU)(j).find((e=>e.key===a.haveAssetKey)).name),1),(0,t._)("p",oa,(0,o.zw)(e.$t("offer_kol_vo"))+" "+(0,o.zw)(a.amountHave),1),(0,t._)("p",ua,(0,o.zw)(e.$t("offer_kol_price"))+" "+(0,o.zw)(a.price),1),(0,t._)("p",ia,(0,o.zw)(e.$t("offer_kol_total"))+" "+(0,o.zw)(a.amountWant),1),(0,t._)("p",sa,(0,o.zw)(e.$t("offer_kol_left"))+" "+(0,o.zw)(a.leftWant),1),(0,t._)("p",ra,[(0,t.Uk)((0,o.zw)(e.$t("offer_kol_block"))+" ",1),(0,t._)("a",{target:"_blank",href:`https://scan.rupay.pro/index/blockexplorer.html?tx=${a.seqNo}&lang=ru`},(0,o.zw)(a.seqNo),9,da)])])),_:2},1024),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(M,{rounded:"",color:"negative",loading:_.value,onClick:e=>F(a.seqNo),unelevated:"",outline:"","no-caps":"",size:"12px",label:e.$t("cancel_offer")},null,8,["loading","onClick","label"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,t.Wm)(L,{name:"done",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(S.value,((a,l)=>((0,t.wg)(),(0,t.j4)(D,{key:l},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("p",ca,(0,o.zw)((0,n.SU)(j).find((e=>e.key===a.wantAssetKey)).name)+" / "+(0,o.zw)((0,n.SU)(j).find((e=>e.key===a.haveAssetKey)).name),1),(0,t._)("p",ma,(0,o.zw)(e.$t("offer_kol_vo"))+" "+(0,o.zw)(a.amountHave),1),(0,t._)("p",pa,(0,o.zw)(e.$t("offer_kol_price"))+" "+(0,o.zw)(a.price),1),(0,t._)("p",va,(0,o.zw)(e.$t("offer_kol_total"))+" "+(0,o.zw)(a.amountWant),1),(0,t._)("p",wa,(0,o.zw)(e.$t("offer_kol_left"))+" "+(0,o.zw)(a.leftWant),1),(0,t._)("p",_a,[(0,t.Uk)((0,o.zw)(e.$t("offer_kol_block"))+" ",1),(0,t._)("a",{target:"_blank",href:`https://scan.rupay.pro/index/blockexplorer.html?tx=${a.seqNo}&lang=ru`},(0,o.zw)(a.seqNo),9,ga)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,t.Wm)(L,{name:"cancel",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(W.value,((a,l)=>((0,t.wg)(),(0,t.j4)(D,{key:l},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("p",fa,(0,o.zw)((0,n.SU)(j).find((e=>e.key===a.wantAssetKey)).name)+" / "+(0,o.zw)((0,n.SU)(j).find((e=>e.key===a.haveAssetKey)).name),1),(0,t._)("p",ya,(0,o.zw)(e.$t("offer_kol_vo"))+" "+(0,o.zw)(a.amountHave),1),(0,t._)("p",ba,(0,o.zw)(e.$t("offer_kol_price"))+" "+(0,o.zw)(a.price),1),(0,t._)("p",xa,(0,o.zw)(e.$t("offer_kol_total"))+" "+(0,o.zw)(a.amountWant),1),(0,t._)("p",ha,(0,o.zw)(e.$t("offer_kol_left"))+" "+(0,o.zw)(a.leftWant),1),(0,t._)("p",Ua,[(0,t.Uk)((0,o.zw)(e.$t("offer_kol_block"))+" ",1),(0,t._)("a",{target:"_blank",href:`https://scan.rupay.pro/index/blockexplorer.html?tx=${a.seqNo}&lang=ru`},(0,o.zw)(a.seqNo),9,ka)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(X,{modelValue:w.value,"onUpdate:modelValue":a[7]||(a[7]=e=>w.value=e),persistent:"","transition-show":"scale","transition-hide":"scale",onBeforeShow:C},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[(0,t._)("div",Sa,[(0,t.Uk)("Обмен "+(0,o.zw)((0,n.SU)(j).find((e=>e.key===(0,n.SU)(K)[v.value].have)).name)+" ",1),(0,t.Wm)(c,{name:"las la-long-arrow-alt-right",size:"30px"}),(0,t.Uk)(" "+(0,o.zw)((0,n.SU)(j).find((e=>e.key===(0,n.SU)(K)[v.value].want)).name),1)])])),_:1}),(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t._)("p",Wa,"Отдам "+(0,o.zw)((0,n.SU)(j).find((e=>e.key===(0,n.SU)(K)[v.value].have)).name)+" (баланс "+(0,o.zw)((0,n.SU)(O)[(0,n.SU)(K)[v.value].have][0][1])+") ",1),(0,t.Wm)(B,{class:"q-mb-md",dense:"",outlined:"",autofocus:"",modelValue:g.value,"onUpdate:modelValue":a[5]||(a[5]=e=>g.value=e),onKeyup:Q,type:"number"},null,8,["modelValue"]),(0,t._)("p",za,"Получу "+(0,o.zw)((0,n.SU)(j).find((e=>e.key===(0,n.SU)(K)[v.value].want)).name),1),(0,t.Wm)(B,{class:"q-mb-md",dense:"",outlined:"",modelValue:x.value,"onUpdate:modelValue":a[6]||(a[6]=e=>x.value=e),onKeyup:Z,type:"number"},null,8,["modelValue"]),(0,n.SU)(q).raw?((0,t.wg)(),(0,t.iD)("p",qa,"Комиссия : "+(0,o.zw)((0,n.SU)(q).fee),1)):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(G,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(M,{"no-caps":"",unelevated:"",color:"negative",loading:_.value,outline:"",label:"Отмена"},null,8,["loading"]),[[te]]),(0,n.SU)(q).raw?((0,t.wg)(),(0,t.j4)(M,{key:1,"no-caps":"",unelevated:"",color:"positive",loading:_.value,onClick:V,label:"Обменять"},null,8,["loading"])):((0,t.wg)(),(0,t.j4)(M,{key:0,"no-caps":"",unelevated:"",color:"positive",disable:!g.value||!x.value,loading:_.value,onClick:P,label:"Запросить комиссию"},null,8,["disable","loading"]))])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)((0,n.SU)(Te),{"trade-pair":h.value},null,8,["trade-pair"]),(0,t.Wm)(X,{modelValue:(0,n.SU)($),"onUpdate:modelValue":a[8]||(a[8]=e=>(0,n.dq)($)?$.value=e:$=e),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[$a])),_:1}),(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Y,{separator:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(D,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[Ha])),_:1}),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)((0,n.SU)(q).fee),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(G,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(M,{"no-caps":"",unelevated:"",color:"grey-6",loading:_.value,label:"Отмена"},null,8,["loading"]),[[te]]),(0,t.Wm)(M,{"no-caps":"",unelevated:"",loading:_.value,onClick:V,label:"Ок",color:"positive"},null,8,["loading"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}});var Qa=l(47817),Za=l(70900),Ca=l(89800),Pa=l(84106),ja=l(66663),Ka=l(22857),Aa=l(33115),Da=l(20990),Oa=l(64871);const Ta=Va,Ya=Ta;De()(Va,"components",{QTabs:Qa.Z,QTab:Za.Z,QSeparator:Fe.Z,QTabPanels:Ca.Z,QTabPanel:Pa.Z,QScrollArea:ja.Z,QList:Ze.Z,QItem:Ce.Z,QItemSection:Pe.Z,QAvatar:$e.Z,QIcon:Ka.Z,QItemLabel:Aa.Z,QInput:Ve.Z,QBadge:Da.Z,QBtn:qe.Z,QDialog:Se.Z,QCard:We.Z,QCardSection:He.Z,QCardActions:je.Z}),De()(Va,"directives",{TouchSwipe:Oa.Z,ClosePopup:Ke.Z})}}]);