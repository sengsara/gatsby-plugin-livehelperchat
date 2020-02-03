/* eslint-disable import/no-unresolved */
import React from 'react'

function getAsyncOrDefer(isDefer) {
  return isDefer ? 's.defer=1' : 's.async=1'
}

exports.onRenderBody = (
  { setHeadComponents },
  { baseUrl, enableDuringDevelop = true, defer = false },
) => {
  if (!enableDuringDevelop && process.env.NODE_ENV === 'development') {
    console.log(
      'gatsby-plugin-livehelperchat configured not to load in development server.',
    )
    return null
  }

  if (!baseUrl) {
    console.log(
      'You have not provided websiteId, gatsby-plugin-livehelperchat will not take effect.',
    )
    return null
  }

  const scriptInnerHTML =

`<script type="text/javascript">
var LHCChatOptions = {};
LHCChatOptions.opt = {widget_height:340,widget_width:300,popup_height:520,popup_width:500};
(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
var referrer = (document.referrer) ? encodeURIComponent(document.referrer.substr(document.referrer.indexOf('://')+1)) : '';
var location  = (document.location) ? encodeURIComponent(window.location.href.substring(window.location.protocol.length)) : '';
po.src = '//onecloud.ciptadrasoft.net/livehelper2/lhc_web//index.php/chat/getstatus/(click)/internal/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true?r='+referrer+'&l='+location;
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>`;

/*
`<script type="text/javascript">
var LHCChatOptions = {};
LHCChatOptions.opt = {widget_height:340,widget_width:300,popup_height:520,popup_width:500,domain:'sengsara.com'};
(function() {
var _l = '';var _m = document.getElementsByTagName('meta');var _cl = '';for (i=0; i < _m.length; i++) {if ( _m[i].getAttribute('http-equiv') == 'content-language' ) {_cl = _m[i].getAttribute('content');}}if (document.documentElement.lang != '') _l = document.documentElement.lang;if (_cl != '' && _cl != _l) _l = _cl;if (_l == undefined || _l == '') {_l = 'ita/';} else {_l = _l[0].toLowerCase() + _l[1].toLowerCase(); if ('eng' == _l) {_l = ''} else {_l = _l + '/';}}
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
var referrer = (document.referrer) ? encodeURIComponent(document.referrer.substr(document.referrer.indexOf('://')+1)) : '';
var location  = (document.location) ? encodeURIComponent(window.location.href.substring(window.location.protocol.length)) : '';
po.src = 'https://onecloud.ciptadrasoft.net/livehelper2/lhc_web//index.php/'+_l+'chat/getstatus/(click)/internal/(position)/bottom_right/(ma)/br/(top)/350/(units)/pixels/(leaveamessage)/true/(department)/1/2?r='+referrer+'&l='+location;
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>`*/
  
    //`window.$xrisp=[];window.XRISP_WEBSITE_ID="${websiteId}";` +
    //`(function(){d=document;s=d.createElement("script");` +
    //`s.src="https://client.xrisp.chat/l.js";` +
    //`${getAsyncOrDefer(defer)};` +
    //`d.getElementsByTagName("head")[0].appendChild(s);})();`

  return setHeadComponents([
    <script
      key="gatsby-plugin-livehelperchat"
      dangerouslySetInnerHTML={{ __html: scriptInnerHTML }}
    />,
  ])
}
