/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","c82e81475f0a677811689ee6b2c97da8"],["/2019/03/16/c-cheng-xu-she-ji/index.html","ce880f8844c17ab332c996c8717189a5"],["/2019/03/29/c-zhi-zhen/index.html","46f97f32dc294a9105e4446bca0a7ffb"],["/2020/10/15/ds-algorithm-md/index.html","b8891a99de321bed6fece261bef493e8"],["/2021/05/18/algorithm-md/index.html","17160ebf08acb17ca003a427ff33570f"],["/2022/01/12/python/index.html","0df619c28623e98fea78102ea8aaee7f"],["/2022/01/16/python2/index.html","38114339ca6d24925dfd5a466c0eed42"],["/2022/01/19/python3/index.html","5e501c8c47aac7a76cce8078a832db14"],["/2022/02/28/c-biao-zhun-ku/index.html","6659f0b1bda7405e481b046ec3e5615e"],["/2022/03/06/cpp/index.html","547a11874bc238158f86ff26f9cc2599"],["/2022/03/19/python4/index.html","f425815f30169c2bacf3f613ec6313dd"],["/2022/03/25/lambda-han-shu/index.html","e5f6b48c4abb38a5929ec9b2bd2a1f83"],["/2022/03/26/python5/index.html","a8464b024fd50a106784dc88565ebd69"],["/2022/06/02/python6/index.html","0722d4af07c1daf29ba02088f6e5511b"],["/2023/01/06/python7/index.html","8f071a079f444ddcd5e1d40493515c3d"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","390f1e9a398b4aa1f004422479e0d680"],["/2023/04/16/machinelearning1/index.html","7ef436ac81e10013fc7f241f8a86e723"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","a50026f42bcd4ba95989cb98892571a8"],["/2023/08/08/python8/index.html","2342499701ebf51cc1a89bc2cc6ea387"],["/2023/09/05/deeplearning01/index.html","00c40e39d29a201926bb51ce5aa8f569"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","59ec41970e28a751beaf1d6b249d4d37"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","6c17a0769a7e313a1dd38656e9b61dd9"],["/2023/09/26/springboot-0/index.html","9ac54c1f02d2f933eb975d238177a98a"],["/2023/10/13/cuda/index.html","cd445e8cd6737601e53563f4e74d390b"],["/2023/10/14/cuda-python/index.html","652df35a190930f6760c6530b45377b5"],["/2023/12/21/dl1/index.html","32abb8a765ca5f6cd99aa47190a55863"],["/2023/12/22/dsandad1/index.html","6ce9291cd451fd6bb3cdd7fdb36bfdd7"],["/2024/01/22/dl2/index.html","f11cd82d57db4fffff25033eb48d28a8"],["/2024/01/28/production/index.html","08433ecb7c01cb49e717fde18bbcad87"],["/2024/02/25/mnist/index.html","5f11c5d2e3d023da18c486d2e203091c"],["/2024/02/26/ner/index.html","8ac2f061eb39ba2cb6f890b968e23fc0"],["/2024/05/18/springboot-1/index.html","f3352afa2cb21a1f0be10c7453341f5c"],["/2024/05/26/multicategory/index.html","e89c77053ce05bf6afc2f913b128b8dd"],["/2024/05/28/springboot-2/index.html","867b5a9cbacfcc68b4cacca842b57244"],["/2024/06/02/regression/index.html","32cc0c28a0495d79857b0ce153e75f70"],["/2024/06/03/imageclassifer/index.html","c620e8172a0937553b4f80b31d5d5389"],["/2024/06/03/nlp/index.html","bd8c439ee3838f00e3dc3f5c1e2bfa40"],["/2024/06/05/springboot-3/index.html","e175697b5ae18be311a454a3843b3f7f"],["/2024/06/10/trainsoatmodel/index.html","cc6d5e21f46aff47dc4b041549b2faec"],["/2024/06/15/collab/index.html","bacce621800e071d0e5a00983dd18f50"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","bca67e550b06b8921ae76eb7d4d4632a"],["/2024/07/04/vue-qian-duan-an-li/index.html","6bf2b26bd0d3721f1ee59819eddb5b76"],["/2024/07/05/element-plus/index.html","fa3562366ec84ec8ef5b3462de22ac1a"],["/2024/08/10/vue-kai-fa-an-li/index.html","e761eaed31630824dc84e6293f7b46ff"],["/2024/08/26/ddpm/index.html","e2081a1caecc2e629ccef1c379f554f0"],["/2024/10/15/redis/index.html","5a6494d4ac1d9f3f362037911ccec55b"],["/2024/11/30/leetcode11/index.html","41be073f291953ff674f59aff34ecd79"],["/2024/12/21/tabusearch/index.html","af4925c637285f56e772ee413fb141fb"],["/2025/04/01/hexo-bu-shu-dao-hua-wei-yun-fu-wu-qi/index.html","e1c61f37efba5bed22e932beae8f6879"],["/404/index.html","769c57ea3204544c7ada7d761d191cc7"],["/about/index.html","b33af9334a4cc5b87ea9d487c4ec69af"],["/archives/2018/09/index.html","15b8ab64207ff6328d5b25642fc6c07d"],["/archives/2018/index.html","85ed626ae45ad36ce0cb054c2cfce21a"],["/archives/2019/03/index.html","349cd2236a22cf8276711a152b92e439"],["/archives/2019/index.html","0ab949042a212e2393ac82e56623a130"],["/archives/2020/10/index.html","bdd5aee7d810d428a81a4a000108f872"],["/archives/2020/index.html","e71b2298f7d1566ecee758f3574408c4"],["/archives/2021/05/index.html","1c4886c1dbe21ef43cd06245450c17d8"],["/archives/2021/index.html","b364a815e8240ab29ccada94f0ef40ba"],["/archives/2022/01/index.html","880aae09bbeb54e161523d29cb7dd917"],["/archives/2022/02/index.html","726aea501c0f6f1175c3e3e1b2b38ebc"],["/archives/2022/03/index.html","9ff76531672340c38076ac884f728d32"],["/archives/2022/06/index.html","ebb3e88a337bd3e251bee157af2948cd"],["/archives/2022/index.html","ce4f6193a36ec72326d0b230ffed5cf4"],["/archives/2023/01/index.html","5002c8e586b3ab8b14eab2e74f8fe4f1"],["/archives/2023/04/index.html","6a208d1884a3e687e0496d82a0b4e57b"],["/archives/2023/08/index.html","c1ad42163b54e53d6e1de30bb59638da"],["/archives/2023/09/index.html","70fe3a4e481abf427287e70e984c7054"],["/archives/2023/10/index.html","aa5a4a1ee83e538ab519f6f09e55f5b9"],["/archives/2023/12/index.html","a9ff52b9bdc86d1066b2c2a9d8ee1fc5"],["/archives/2023/index.html","637327b4c56fdd067e42b97b2c4d5c61"],["/archives/2023/page/2/index.html","f2d338842f0072916cdf4fc2ce50e365"],["/archives/2024/01/index.html","15350d7817fbb4ffc4326b6a9174cbe5"],["/archives/2024/02/index.html","00eb6f9459f0dbee046185bcaa165818"],["/archives/2024/05/index.html","5d86b1737eb70ce31d28d7c571dbb55f"],["/archives/2024/06/index.html","3c68f867a7f263b53559c0ab2ff3e671"],["/archives/2024/07/index.html","e12b38671b8a57a75b4431ddb5f8b473"],["/archives/2024/08/index.html","dc73556d75d2912c8824cb8f3fdbe457"],["/archives/2024/10/index.html","b429e8b40f1c06da8adaa6549fa8b929"],["/archives/2024/11/index.html","d9c987fa652a5bfdd51c6f8bfb8acfc2"],["/archives/2024/12/index.html","b375799d7350056f3c547733b296fb80"],["/archives/2024/index.html","4a6462515c7f9925aa79468002598b9c"],["/archives/2024/page/2/index.html","71c1404a72c06c5ffa12dc69e81f914a"],["/archives/2024/page/3/index.html","56207e148642c8b8cf0f7ca6fd999844"],["/archives/2025/04/index.html","ce9b1c01105993648329266b0d03ad2d"],["/archives/2025/index.html","0fa0b5c8a3c3eb4288225fee3bc46be7"],["/archives/index.html","4bbd2893610cc412fce281215b9aedff"],["/archives/page/2/index.html","e13395641a1435fbb759bc3ff098efa2"],["/archives/page/3/index.html","bff3f39bd51a9d7770512d36bbf90c3c"],["/archives/page/4/index.html","43fef0f66f89e538b61b8c3673313612"],["/archives/page/5/index.html","3fc795f72cc590b8cd125f4d8bb694bb"],["/categories/C/index.html","56f11dc65e755edb52a18854c0980604"],["/categories/CUDA/index.html","660d836e1cf73427e692090671eed97d"],["/categories/CV/index.html","85929b8ad99a3ec982aed21cbd65b60a"],["/categories/C语言/index.html","b9899dfb11aa4510fc81f6e4c3166102"],["/categories/LeetCode刷题日常/index.html","41b9b525a6c81bdc93d2a9705fffbb1c"],["/categories/Markdown/index.html","50cfa718dbef80cce584d9d669e45aa9"],["/categories/NLP/index.html","fe1c4961696dd251dcd8c4615720cae7"],["/categories/Python/index.html","70686781c61e34bdfe25644399d7a800"],["/categories/SpringBoot/index.html","91da4817c9ecee53ab0ce80cf5533a2b"],["/categories/index.html","44dfe5584d8fd64a952bd83f5fbfcd3c"],["/categories/前端/index.html","2bca713ffc00164dea1f7beba90fda48"],["/categories/协同过滤/index.html","abc3da0ae019fdbf00e12e372b9bf6ad"],["/categories/博客/index.html","f5ae01da2bc8830495be3bab38630fd6"],["/categories/启发式算法/index.html","ffd28813cded3bb2117c0bb72333f336"],["/categories/数学/index.html","1a74302f30c092de846f2691560177b9"],["/categories/数据库/index.html","f937ca24b0babb80ebd968f5d7bf8753"],["/categories/数据结构/index.html","03a5970e4da60b6da0047f01f126cf30"],["/categories/深度学习/index.html","104602f52e219fe0df272d3378af133f"],["/categories/生成模型/index.html","995ea8c439082b97559fd9b2706fd512"],["/categories/神经网络与深度学习/index.html","c6b8917ac1db5c509f968755630db967"],["/categories/算法/index.html","42bdbec749f5b228d94fadef2169ebc6"],["/categories/训练模型/index.html","67e4ab57c58f152c574f0ae7a583d463"],["/categories/面试题/index.html","4e41261a77c4192c1bb8303842244a47"],["/contact/index.html","62cb671fb008f4a343fbbfbaab627980"],["/css/barrager.css","1219aa9de8f5fafe075c007bd0b75fc6"],["/css/bb.css","b5d50ae6dbeba24b64f7311ef4524289"],["/css/dark.css","b2e585a13c73825fdbe3946b100210f9"],["/css/gallery.css","7fcdd2560478fd823b1bb69dc839c26a"],["/css/gitment.css","3b8bc76f19439416a313de4c88432497"],["/css/indexcover.css","956b8b014e47b7eca5a61d972e3cb349"],["/css/matery.css","1ddeb5c39d658449ff37b3defd8c3bdf"],["/css/my-gitalk.css","ed7d9ca1d3dc0015a387ca42366d1916"],["/css/my.css","52fb1492ed1c9d9c30817601a4209091"],["/css/post.css","ea49d2cfb649e3fd26a17296a7e2a310"],["/css/reward.css","decbea0a9b7bca54ebeb2a2161a810bc"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","a1a7daab954246286487f36bba28224f"],["/index.html","49a1dff2e0c2e6243406715a42a418c3"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","beafa53d736e6c9972909f5565bdba80"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","e3ffab4f80f71caa8f836954473d735b"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","40e5c3b36f399bafd44491f4986a3949"],["/libs/gitalk/gitalk.css","8db900ea7d6887d2c002a6a8db7a0deb"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","17c47acd7a44277362a9a2530719344b"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","0505f0139a33f6221d3283b53756148c"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e9921cceb97df7fa91b0fa0b502b00f0"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","09c75625dcbf1b2d21307e7f5602ca55"],["/page/3/index.html","4caab482a7c77551a20afd17a1dd308a"],["/page/4/index.html","da665a9b9c8726d431f48a6ae416c250"],["/page/5/index.html","ee8f71430ac12385cc87f439deffe661"],["/page/6/index.html","ded366cf18bdad9dc88bf23ca05838e2"],["/page/7/index.html","b0786fc3c2be30347444c3c27c1bc7c2"],["/page/8/index.html","5c4c482dd6a4d67a5ff5e437af479441"],["/page/9/index.html","23bb05079ad81349d76b14545761f922"],["/sw-register.js","7ba6963e56c24a241586365776c04988"],["/tags/CUDA/index.html","7c7a10abf6ac3bbfe7e62839dea18b5f"],["/tags/C语言/index.html","ed7c1b89a4770e5bdbfdb69f9e40f259"],["/tags/DDPM/index.html","b5efd2f2232fca18d4b0f11127812d07"],["/tags/DL/index.html","6f9aa7fca6852c3f393ab0d1020e2509"],["/tags/Element-Plus/index.html","d4c022996a252a635fbb60901b220353"],["/tags/Java/index.html","506ba49dd0bb8965a518f74978fcb4f5"],["/tags/ML/index.html","78ed58acc69de3b653500fb248a3f5e2"],["/tags/Markdown/index.html","0c55d1c1c0f5ef79b603554c19042f9c"],["/tags/Matplotlib/index.html","1d9b13e5eef44661ca4c07c3a799b6e8"],["/tags/NLP/index.html","142814be4334869e17d246af93f4fa83"],["/tags/NumPy/index.html","055a0ecfb27e3d3ba4a8d989292dee24"],["/tags/PyTorch/index.html","4d36a62ef298762e4e84b816025ae17f"],["/tags/Redis/index.html","dbfed9afe27462effc9a3d1b18d09438"],["/tags/SpringBoot/index.html","c6851e5b3248eb51746aeb6abef102bc"],["/tags/Typora/index.html","fd85c0da1e00587b2113c29d8d9b31ae"],["/tags/Vue/index.html","a046abc96918431f76410df815260099"],["/tags/Vue3/index.html","02c1dd0bc261f85f4fef5e76d1524510"],["/tags/array/index.html","7f44dab4a1395571de282c8e01d6b917"],["/tags/cpp/index.html","2998711d70df7567b187e1fce2b8a794"],["/tags/cv/index.html","28fdadf5d88d95e8cdc2f0076b0f2d80"],["/tags/fastai/index.html","79ebd127c09218ddb417c74e0ad1f055"],["/tags/fastiai/index.html","361fc4c851cf9e7d79f976423332a378"],["/tags/index.html","5d18bcb4894503704586f10272cf4d79"],["/tags/lambda函数/index.html","3d33099e819236b4c63a3cad275e800f"],["/tags/python/index.html","a68751037bc045375dd3674c35a08342"],["/tags/two-pointers/index.html","70512e180707a1597a6b7075372deb9e"],["/tags/优化算法/index.html","c2ddfcbd2494708b96a86705f63fca92"],["/tags/函数参数/index.html","e5a282ef0d07f51278b5777cf9b7ee30"],["/tags/函数式编程/index.html","cde80a160c238ebcc3dc00eaebf66204"],["/tags/前端/index.html","34093e2625debe812452786cca68058d"],["/tags/前端开发/index.html","419767e3d639cc79c39bd6e9e3ac1d7b"],["/tags/协同过滤/index.html","877f8f108cf5b531f3e38a098a0253f8"],["/tags/博客部署/index.html","482924ed46be9aa41363b5fd547cc89c"],["/tags/启发式算法/index.html","077bfde6e361ff1e1404baa5cbc305c7"],["/tags/回归/index.html","e516f73f931d92fbbadeb674af4a1d3b"],["/tags/域名迁移/index.html","01e00da4e59bfce8fbb78f06f482295f"],["/tags/多标签分类/index.html","8643d947e6849b4d29a9f30e0dcb58af"],["/tags/指针/index.html","8cb04d8869f9694401c6722ae8419702"],["/tags/数学/index.html","0d3480bae233640d36be6e61600ce494"],["/tags/数据结构/index.html","25c0364b866d64576d2ad6c4d230fe91"],["/tags/模型/index.html","0eb2327f1f4138c3c015f60fe95f4c33"],["/tags/测试与异常/index.html","9f369687ef86b49858cc414091fd5607"],["/tags/深度学习/index.html","171676c1bfb4e95bf07f8e89039fc04d"],["/tags/生成器/index.html","ba6ce71c790d9aa8a53ddf419a2bc564"],["/tags/生成模型/index.html","41538f4f04c783b2fc16dc99b21013c4"],["/tags/神经网络/index.html","585d5c13fa6d773ff3941a681c92e180"],["/tags/算法/index.html","0babb3de1dc652c0d0a4d2ac8c79f1f7"],["/tags/表格建模/index.html","cf7e8929d3b21b1b6a0d4e17d2d75dc2"],["/tags/计算机专业课/index.html","454078c9355bd98a6684b906337c4dea"],["/tags/训练技术/index.html","44811e8465b948740607277b5e174e78"],["/tags/迭代器/index.html","3d497663b14783aca20ac06d6b175bf4"],["/tags/面向对象编程/index.html","9af4f4ba6586f14eb6e67c14d3c5ac73"],["/tags/面试/index.html","fb3a0a9473cd163e8a83a92f13f9c927"],["/tags/预训练/index.html","3f1524d5aa2511a7f3c658b3e358cc07"],["/tags/高阶函数/index.html","00f2762410d6f9da43f4dd98278c4d50"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
