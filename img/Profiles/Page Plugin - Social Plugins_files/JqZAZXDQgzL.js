if (self.CavalryLogger) { CavalryLogger.start_js(["TMjsY"]); }

__d("DevsiteAppDashApplicationProductRoute",[],(function a(b,c,d,e,f,g){f.exports={FACEBOOK_LOGIN:"fb-login",AUDIENCE_NETWORK:"audience-network",ANALYTICS:"analytics",ACCOUNT_KIT:"account-kit",MESSENGER:"messenger",WEBHOOKS:"webhooks",THREAT_EXCHANGE:"threat-exchange",MESSENGER_EXPRESSION:"messenger-expression",CUSTOM_OPEN_GRAPH:"open-graph",MARKETING_API:"marketing-api",APP_CENTER:"app-details",CANVAS_PAYMENTS:"payments",CANVAS_HOSTING:"hosting",INSTANT_GAMES:"instant-games",PAGES_PLATFORM:"pages-platform",INSTANT_EXPERIENCES:"instant-experiences",ARCADE_NATIVE:"arcade-native",OZONE:"ozone",CANVAS_LOCALIZE:"localize",DASHBOARD:"dashboard",SETTINGS:"settings",ROLES:"roles",ALERTS:"alerts",APP_REVIEW:"review-status",ADD_INTEGRATION:"add"};}),null);
__d('TabBar',['ArbiterMixin','ReactDOM','mixin'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function j(k,l,m){'use strict';i.constructor.call(this);l.props=babelHelpers['extends']({},l.props,{onTabClick:function(n){return this.inform(j.TAB_CLICK,n);}.bind(this)});c('ReactDOM').render(k(l),m);}j.TAB_CLICK='onTabClick';f.exports=j;}),null);
__d('XUICardHeader',['TabBar'],(function a(b,c,d,e,f,g){function h(i){'use strict';this.tabBar=i;}h.prototype.subscribe=function(){'use strict';this.tabBar.subscribe.apply(this.tabBar,arguments);};h.TAB_CLICK=c('TabBar').TAB_CLICK;f.exports=h;}),null);
__d('MenuDeprecated',['Event','Arbiter','CSS','DataStore','DOM','HTML','Keys','Parent','Style','UserAgent_DEPRECATED','emptyFunction','Run'],(function a(b,c,d,e,f,g){var h='menu:mouseover',i=null;function j(t){if(c('CSS').hasClass(t,'uiMenuContainer'))return t;return c('Parent').byClass(t,'uiMenu');}function k(t){return c('Parent').byClass(t,'uiMenuItem');}function l(t){if(document.activeElement){var u=k(document.activeElement);return t.indexOf(u);}return -1;}function m(t){return c('DOM').find(t,'a.itemAnchor');}function n(t){return c('CSS').hasClass(t,'checked');}function o(t){return !c('CSS').hasClass(t,'disabled')&&c('Style').get(t,'display')!=='none';}function p(event){var t=document.activeElement;if(!t||!c('Parent').byClass(t,'uiMenu')||!c('DOM').isInputNode(t)){var u=k(event.getTarget());u&&s.focusItem(u);}}function q(t){c('UserAgent_DEPRECATED').firefox()&&m(t).blur();s.inform('select',{menu:j(t),item:t});}var r=function t(){r=c('emptyFunction');var u={};u.click=function(event){var v=k(event.getTarget());if(v&&o(v)){q(v);var w=m(v),x=w.href,y=w.getAttribute('rel');return y&&y!=='ignore'||x&&x.charAt(x.length-1)!=='#';}};u.keydown=function(event){var v=event.getTarget();if(event.getModifiers().any)return;if(!i||c('DOM').isInputNode(v))return;var w=c('Event').getKeyCode(event),x;switch(w){case c('Keys').UP:case c('Keys').DOWN:var y=s.getEnabledItems(i);x=l(y);s.focusItem(y[x+(w===c('Keys').UP?-1:1)]);return false;case c('Keys').SPACE:var z=k(v);if(z){q(z);event.prevent();}break;default:var aa=String.fromCharCode(w).toLowerCase(),ba=s.getEnabledItems(i);x=l(ba);var ca=x,da=ba.length;while(~x&&(ca=++ca%da)!==x||!~x&&++ca<da){var ea=s.getItemLabel(ba[ca]);if(ea&&ea.charAt(0).toLowerCase()===aa){s.focusItem(ba[ca]);return false;}}}};c('Event').listen(document.body,u);},s=Object.assign(new (c('Arbiter'))(),{focusItem:function t(u){if(u&&o(u)){this._removeSelected(j(u));c('CSS').addClass(u,'selected');m(u).focus();}},getEnabledItems:function t(u){return s.getItems(u).filter(o);},getCheckedItems:function t(u){return s.getItems(u).filter(n);},getItems:function t(u){return c('DOM').scry(u,'li.uiMenuItem');},getItemLabel:function t(u){return u.getAttribute('data-label',2)||'';},isItemChecked:function t(u){return c('CSS').hasClass(u,'checked');},autoregister:function t(u,v,w){u.subscribe('show',function(){s.register(v,w);});u.subscribe('hide',function(){s.unregister(v);});},register:function t(u,v){u=j(u);r();if(!c('DataStore').get(u,h))c('DataStore').set(u,h,c('Event').listen(u,'mouseover',p));if(v!==false)i=u;},setItemEnabled:function t(u,v){if(!v&&!c('DOM').scry(u,'span.disabledAnchor')[0])c('DOM').appendContent(u,c('DOM').create('span',{className:c('DOM').find(u,'a').className+' disabledAnchor'},c('HTML')(m(u).innerHTML)));c('CSS').conditionClass(u,'disabled',!v);},toggleItem:function t(u){var v=!s.isItemChecked(u);s.setItemChecked(u,v);},setItemChecked:function t(u,v){c('CSS').conditionClass(u,'checked',v);m(u).setAttribute('aria-checked',v);},unregister:function t(u){u=j(u);var v=c('DataStore').remove(u,h);v&&v.remove();i=null;this._removeSelected(u);},_removeSelected:function t(u){s.getItems(u).filter(function(v){return c('CSS').hasClass(v,'selected');}).forEach(function(v){c('CSS').removeClass(v,'selected');});}});f.exports=s;}),null);
__d('SelectorDeprecated',['Arbiter','Button','ContextualLayer','CSS','DataStore','DOM','Event','Focus','HTML','Keys','MenuDeprecated','Parent','Style','Toggler','TooltipData','URI','Vector','arrayContains','emptyFunction','getDocumentScrollElement'],(function a(b,c,d,e,f,g){var h,i,j=[],k;function l(w){return c('Parent').byClass(w,'uiSelector');}function m(w){return c('Parent').byClass(w,'uiSelectorButton');}function n(){if(!i){i=new (c('ContextualLayer'))({position:'below'},c('DOM').create('div'));c('CSS').addClass(i.getRoot(),'uiSelectorContextualLayer');}return i;}function o(w){return c('DOM').scry(w,'select')[0];}function p(w){return c('DOM').find(w,'div.uiSelectorMenuWrapper');}var q=function w(){q=c('emptyFunction');c('MenuDeprecated').subscribe('select',function(x,y){if(!h||!y||y.menu!==v.getSelectorMenu(h))return;var z=r(h),aa=s(y.item);if(aa){var ba=h,ca=v.isOptionSelected(y.item),da=v.inform('select',{selector:ba,option:y.item,clone:k});if(da===false)return;if(z||!ca){v.setSelected(ba,v.getOptionValue(y.item),!ca);v.inform('toggle',{selector:ba,option:y.item});v.inform('change',{selector:ba});c('Arbiter').inform('Form/change',{node:ba});if(t(ba))c('DataStore').set(ba,'dirty',true);}}if(!z||!aa)h&&v.toggle(h);});};function r(w){return !!w.getAttribute('data-multiple');}function s(w){return c('CSS').hasClass(w,'uiSelectorOption');}function t(w){return !!w.getAttribute('data-autosubmit');}var u=function w(){u=c('emptyFunction');var x={keydown:function y(event){var z=event.getTarget();if(c('DOM').isInputNode(z))return;switch(c('Event').getKeyCode(event)){case c('Keys').DOWN:case c('Keys').SPACE:case c('Keys').UP:if(m(z)){var aa=l(z);v.toggle(aa);return false;}break;case c('Keys').ESC:if(h){var ba=v.getSelectorButton(h);v.toggle(h);ba&&c('Focus').set(ba);return false;}break;}},mouseover:function y(event){var z=c('Parent').byAttribute(event.getTarget(),'ajaxify');if(z&&c('CSS').hasClass(z,'uiSelectorButton'))v.loadMenu(l(z));}};c('Event').listen(document.body,x);};c('Toggler').subscribe(['show','hide'],function(w,x){var y=l(x.getActive());if(y){u();q();var z=v.getSelectorButton(y),aa=v.getSelectorMenu(y),ba=w==='show';z.setAttribute('aria-expanded',ba?'true':'false');if(ba){h=y;if(c('CSS').hasClass(z,'uiButtonDisabled')){v.setEnabled(y,false);return false;}aa=aa||v.loadMenu(y);var ca=c('Style').getScrollParent(y),da=ca!==window&&ca!==c('getDocumentScrollElement')();if(da||c('CSS').hasClass(y,'uiSelectorUseLayer')){if(da)j.push(c('Event').listen(ca,'scroll',function(){x.hide();}));k=c('DOM').create('div',{className:y.className});c('CSS').addClass(k,'invisible_elem');c('Vector').getElementDimensions(y).setElementDimensions(k);c('DOM').replace(y,k);var ea=c('CSS').hasClass(y,'uiSelectorRight'),fa=c('CSS').hasClass(y,'uiSelectorBottomUp');n().setContext(k).setContent(y).setPosition(fa?'above':'below').setAlignment(ea?'right':'left').show();}c('MenuDeprecated').register(aa);var ga=c('MenuDeprecated').getCheckedItems(aa);if(!ga.length)ga=c('MenuDeprecated').getEnabledItems(aa);if(ga.length)c('MenuDeprecated').focusItem(ga[0]);}else{h=null;if(k){while(j.length)j.pop().remove();c('DOM').replace(k,y);n().hide();k=null;}aa&&c('MenuDeprecated').unregister(aa);if(t(y)&&c('DataStore').get(y,'dirty')){var ha=c('DOM').scry(y,'input.submitButton')[0];ha&&ha.click();c('DataStore').remove(y,'dirty');}}c('CSS').conditionClass(v.getSelectorButton(y),'selected',ba);v.inform(ba?'open':'close',{selector:y,clone:k});}});var v=Object.assign(new (c('Arbiter'))(),{attachMenu:function w(x,y,z){x=l(x);if(x){h&&c('MenuDeprecated').unregister(v.getSelectorMenu(h));c('DOM').setContent(p(x),y);h&&c('MenuDeprecated').register(v.getSelectorMenu(x));k&&n().updatePosition();if(z){var aa=x.getAttribute('data-name');aa&&z.setAttribute('name',aa);if(!r(x))z.setAttribute('multiple',false);var ba=o(x);if(ba){c('DOM').replace(ba,z);}else c('DOM').insertAfter(x.firstChild,z);}return true;}},getOption:function w(x,y){var z=v.getOptions(x),aa=z.length;while(aa--)if(y===v.getOptionValue(z[aa]))return z[aa];return null;},getOptions:function w(x){var y=c('MenuDeprecated').getItems(v.getSelectorMenu(x));return y.filter(s);},getEnabledOptions:function w(x){var y=c('MenuDeprecated').getEnabledItems(v.getSelectorMenu(x));return y.filter(s);},getSelectedOptions:function w(x){return c('MenuDeprecated').getCheckedItems(v.getSelectorMenu(x));},getOptionText:function w(x){return c('MenuDeprecated').getItemLabel(x);},getOptionValue:function w(x){var y=l(x),z=o(y),aa=v.getOptions(y).indexOf(x);return aa>=0?z.options[aa+1].value:'';},getSelectorButton:function w(x){return c('DOM').find(x,'a.uiSelectorButton');},getSelectorMenu:function w(x){return c('DOM').scry(x,'div.uiSelectorMenu')[0];},getValue:function w(x){var y=o(x);if(!y)return null;if(!r(x))return y.value;var z=[],aa=y.options;for(var ba=1,ca=aa.length;ba<ca;ba++)if(aa[ba].selected)z.push(aa[ba].value);return z;},isOptionSelected:function w(x){return c('MenuDeprecated').isItemChecked(x);},listen:function w(x,y,z){return this.subscribe(y,function(aa,ba){if(ba.selector===x)return z(ba,aa);});},loadMenu:function w(x,y){var z=v.getSelectorMenu(x);if(!z){var aa=v.getSelectorButton(x),ba=aa.getAttribute('ajaxify');if(ba){e(['AsyncRequest'],function(da){var ea=new (c('URI'))(ba),fa=ea.getQueryData();ea.setQueryData({});var ga=new da(ea).setData(fa).setNectarModuleDataSafe(aa).setRelativeTo(aa);y&&ga.setFinallyHandler(function(){setTimeout(y,0);});ga.send();}.bind(this));var ca=c('HTML')('<div class="uiSelectorMenuWrapper uiToggleFlyout">'+'<div class="uiMenu uiSelectorMenu loading">'+'<ul class="uiMenuInner">'+'<li><span></span></li>'+'</ul>'+'</div>'+'</div>');c('DOM').appendContent(aa.parentNode,ca);z=v.getSelectorMenu(x);aa.removeAttribute('onmouseover');}}else y&&y();return z;},setButtonLabel:function w(x,y){var z=v.getSelectorButton(x),aa=parseInt(z.getAttribute('data-length'),10);y=y||z.getAttribute('data-label')||'';c('Button').setLabel(z,y);if(typeof y==='string')if(aa&&y.length>aa){z.setAttribute('title',y);}else z.removeAttribute('title');},setButtonTooltip:function w(x,y){var z=v.getSelectorButton(x),aa=c('Parent').byTag(z,'a');aa&&c('TooltipData').set(aa,y||z.getAttribute('data-tooltip')||'');},setEnabled:function w(x,y){if(!y&&h&&l(x)===h)v.toggle(x);c('Button').setEnabled(v.getSelectorButton(x),y);},setOptionEnabled:function w(x,y){c('MenuDeprecated').setItemEnabled(x,y);},setSelected:function w(x,y,z){z=z!==false;var aa=v.getOption(x,y);if(!aa)return;var ba=v.isOptionSelected(aa);if(z!==ba){if(!r(x)&&!ba){var ca=v.getSelectedOptions(x)[0];ca&&c('MenuDeprecated').toggleItem(ca);}c('MenuDeprecated').toggleItem(aa);}v.updateSelector(x);},toggle:function w(x){c('Toggler').toggle(c('DOM').scry(l(x),'div.wrap')[0]);},updateSelector:function w(x){var y=v.getOptions(x),z=v.getSelectedOptions(x),aa=o(x).options,ba=[],ca=[];for(var da=0,ea=y.length;da<ea;da++){var fa=c('arrayContains')(z,y[da]);aa[da+1].selected=fa;if(fa){var ga=v.getOptionText(y[da]);ba.push(ga);ca.push(y[da].getAttribute('data-tooltip')||ga);}}aa[0].selected=!z.length;var ha=c('CSS').hasClass(x,'uiSelectorDynamicLabel'),ia=c('CSS').hasClass(x,'uiSelectorDynamicTooltip');if(ha||ia){var ja='';if(r(x)){var ka=v.getSelectorButton(x);ja=ka.getAttribute('data-delimiter')||', ';}ba=ba.join(ja);ca=ca.join(ja);ha&&v.setButtonLabel(x,ba);ia&&v.setButtonTooltip(x,ca);}}});f.exports=v;}),null);
__d('getIframeEmbedCode',['URI'],(function a(b,c,d,e,f,g){'use strict';function h(i,j,k){var l=['border:none','overflow:hidden'],m=['src="'+i.toString()+'"','width="'+j+'"','height="'+k+'"','style="'+l.join(';')+'"','scrolling="no"','frameborder="0"','allowTransparency="true"'];return '<iframe '+m.join(' ')+'></iframe>';}f.exports=h;}),null);
__d('PluginConfigurator',['CSS','DOM','Event','SelectorDeprecated','URI','XUICardHeader','XDeveloperAppController','DevsiteAppDashApplicationProductRoute','$','arrayContains','ge','getElementText','getIframeEmbedCode'],(function a(b,c,d,e,f,g){var h=[];function i(){}Object.assign(i.prototype,{init:function l(m,n){this.config=m;this.config.code_button=n;for(var o in this.config.params)this.config.params[o].value=this.config.params[o]['default'];var p=c('$')(this.config.form_id),q=c('DOM').scry(p,'input[type="text"]'),r=c('DOM').scry(p,'input[type="checkbox"]'),s=q.concat(r,c('DOM').scry(p,'textarea'));for(var t in this.config.params){var u=0;if(this.config.params[t].type=='question'){var v='param_'+t+'_link',w=t+'_link',x=c('ge')(v);this.config.params[w]={};this.config.params[w].lastShownPollItem=1;this.config.params[w].questionName=t;for(var y=0,z=s.length;y<z;y++)if(s[y].name==t+"poll"+u){u++;this.config.params[s[y].name]={};this.config.params[s[y].name].pollName=t;this.config.params[s[y].name].type='poll';this.config.params[s[y].name].value=this.config.params[t]['default'];}this.config.params[t].questionsCount=u-1;c('Event').listen(x,'click',this.handleAddLinkClick.bind(this));}}for(var y=0,z=s.length;y<z;y++){this.updateFormElement(s[y]);c('Event').listen(s[y],'change',this.handleChange.bind(this));}for(y=0;y<h.length;y++){var aa=h[y];this.updateFormElement(aa);aa.subscribe('change',function(ba,event){this.updateFormElement(ba);if(this.getName(ba)!='pageselector')this.renderExample(true);}.bind(this,aa));}this.renderExample(false);},renderExample:function l(m){var n='',o={},p=false,q=[],r;for(var s in this.config.params){var t=this.config.params[s],u=t.value,v=t['default'],w=t.example,x=t.always_set,y=t.type;if(u===undefined&&w!==undefined)u=w;if(t.xfbml_name)s=t.xfbml_name;if(y=='question')r=s;if(y=='poll')q.push(u);if(s=='colorscheme'&&u=='dark')p=true;if(u!==undefined&&u!==''&&u!==null&&y!='question'&&y!='poll'&&(x!=null||u!=v||u==w)){s='data-'+s.replace(/_/g,'-');o[s]=u;}}if(q.length!==0)o[r]=JSON.stringify(q);n=c('DOM').create('div');for(var z in o)if(o.hasOwnProperty(z))n.setAttribute(z,o[z]);n.className=this.config.xfbml.replace(':','-');if(!this.config.example_id)return;var aa=c('$')(this.config.example_id),ba=["fb:comments","fb:follow","fb:like"];if(c('arrayContains')(ba,this.config.xfbml))c('CSS').conditionClass(aa,'dark_background',p);c('DOM').setContent(aa,n);if(m)b.FB.XFBML.parse(c('$')(this.config.example_id));},handleAddLinkClick:function l(event){var m=event.getTarget(),n=this.getName(m)||this.getName(m.parentNode),o=this.config.params[n].lastShownPollItem,p=this.config.params[n].questionName;o++;var q=c('ge')('param_'+p+o);if(q!=null){q.type="text";this.config.params[n].lastShownPollItem=o;var r=c('ge')('param_'+p+(o+1));if(r==null){m.parentNode.style.visibility='hidden';m.style.visibility='hidden';}}},handleChange:function l(event){var m=event.getTarget();this.updateFormElement(m);this.renderExample(true);},getName:function l(m){return m.name||m.getName()||m.getAttribute('data-name');},updateFormElement:function l(m){var n=this.getName(m),o=this.config.params[n];if(n!==null&&o){if(o.type=='bool'){o.value=m.checked?'true':'false';}else if(o.type=='enum'){o.value=m.getValue();}else if(o.type=='pageselector'){var p=c('SelectorDeprecated').getValue(m);if(!!m.getAttribute('data-multiple')){p=p.filter(function(t){return t.length>0;});p=p.join(',');}o.value=p;}else if(m.value!=m.placeholder)o.value=m.value;var q=o.value;if(o.type=='poll'){q=this.handlePollValueChange(n);n=o.pollName;}var r={};r[n]=q;var s=new (c('URI'))(this.config.code_button.href);s.addQueryData(r);this.config.code_button.href=s.toString();}},handlePollValueChange:function l(m){var n=this.config.params[m],o=n.pollName,p=[];for(var q=0;q<this.config.params[o].questionsCount;q++){var r=this.config.params[o+'poll'+q].value;if(r!=='')p.push(r);}return JSON.stringify(p);}});i.initDialog=function(l,m,n,o){l.subscribe(c('XUICardHeader').TAB_CLICK,function(p,q){c('CSS').show(q==='iframe'?n:m);c('CSS').hide(q==='iframe'?m:n);if(q==='iframe'){var r=c('DOM').scry(c('$')('snip-iframe'),'textarea');if(r){var s=c('DOM').find(c('$')('devsitePluginConfiguratorExample'),'iframe'),t=new (c('URI'))(o),u=t.getQueryData(),v=u.width||s.offsetWidth,w=u.height||s.offsetHeight;t.addQueryData({width:v,height:w,appId:j});c('DOM').setContent(r[0],c('getIframeEmbedCode')(t,v,w));}}});};var j=null,k=null;i.initAppChooser=function(l,m){if(l.getName()==='app')j=l.getValue();if(l.getName()==='locale')k=l.getValue();l.subscribe('change',function(n){var o=j,p=k;if(l.getName()==='app')j=l.getValue();if(l.getName()==='locale')k=l.getValue();var q=m[j];if(q){c('$')('sandbox_warning_link').href=c('XDeveloperAppController').getURIBuilder().setEnum('page',c('DevsiteAppDashApplicationProductRoute').APP_REVIEW).setInt('app_id',j).getURI();c('CSS').show(c('$')('sandbox_warning'));}else c('CSS').hide(c('$')('sandbox_warning'));var r=c('DOM').scry(c('$')('snip-html5'),'textarea'),s=c('DOM').scry(c('$')('snip-iframe'),'textarea'),t=[r[0],s[0]];t.forEach(function(u){c('DOM').setContent(u,c('getElementText')(u).replace(new RegExp(o,'g'),j).replace(new RegExp(p,'g'),k));});});};i.registerSelector=function(l){h.push(l);};f.exports=i;}),null);
__d('legacy:devsite-plugin-config',['PluginConfigurator'],(function a(b,c,d,e,f,g){b.PluginConfigurator=c('PluginConfigurator');}),3);