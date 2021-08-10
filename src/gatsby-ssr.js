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
