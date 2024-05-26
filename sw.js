/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","23dbda4fed33642e18e40cb0e5d021b9"],["/2019/03/16/c-cheng-xu-she-ji/index.html","9fcc1460d68292396c4b135f3c86ab1f"],["/2019/03/29/c-zhi-zhen/index.html","5e81b8b6b8e214097cfec7d65889e666"],["/2020/10/15/ds-algorithm-md/index.html","383d15f4f2449fdafa11569569e4e55a"],["/2021/05/18/algorithm-md/index.html","3bece5ac510bf43341bc8eb3f2ba3da6"],["/2022/01/12/python/index.html","cd81e2bcc6e824595b4a58bb82f4707a"],["/2022/01/16/python2/index.html","0d6c6149754a708f49db77797023fb56"],["/2022/01/19/python3/index.html","b8842834bcf4f0a63a1b06dd4969c347"],["/2022/02/28/c-biao-zhun-ku/index.html","dba6e50a973639e19bae2b12e6d01b72"],["/2022/03/06/cpp/index.html","61613affe94a98a2c09ff09e4f3a8e42"],["/2022/03/19/python4/index.html","f974c4fd51a54fa39e20954e6ff1bd96"],["/2022/03/25/lambda-han-shu/index.html","8410b5ac159538cc610745738451d4d1"],["/2022/03/26/python5/index.html","fb6d54260c8833a2bf7c6d5cd0aacf1c"],["/2022/06/02/python6/index.html","41d96b673824ce227b41f045804a575d"],["/2023/01/06/python7/index.html","b760900d684201c9311fdacba2149dac"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","77d452fec32a66cecfa3f23d6cb0a2fc"],["/2023/04/16/machinelearning1/index.html","e677fc9781e24b06c3cef1abc2d1b3b1"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","fe02531197fc025b6560a5dcdf741a19"],["/2023/08/08/python8/index.html","7b52f5980c21df18a70797c66ddd8673"],["/2023/09/05/deeplearning01/index.html","120a0626afdd4564abb2a11135338ee9"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","2cc5894e8d1b321c3308ca79aeb50249"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","dbc90a40b40c122794da081dedf50b00"],["/2023/10/13/cuda/index.html","94c503565b82dca546dc225a596cd878"],["/2023/10/14/cuda-python/index.html","e2f3de2b4ccec49c0568abecf891e1bb"],["/2023/12/21/dl1/index.html","e341f2a2bbc427acb66f0e616d4a8b0a"],["/2023/12/22/dsandad1/index.html","c8145f938b3e628b4ff9d39995fc9a3a"],["/2024/01/22/dl2/index.html","de28fbfca11c324fc75cfcc815f533b4"],["/2024/01/25/mnist/index.html","6dbf4a53c593723babc4e8ab16b12f12"],["/2024/02/26/ner/index.html","f495f768debd2614c5c1972d61f9f8cf"],["/404/index.html","cc4248de295483d08a2021e4e612ffa0"],["/about/index.html","c03b8f6659a2a89b861312e033adae12"],["/archives/2018/09/index.html","3832d4082967d5f9031ce7ee5d70a100"],["/archives/2018/index.html","daf25ea6b6b02778b378b4b309684a29"],["/archives/2019/03/index.html","4250ce54c914c931a3d7a4914e996d29"],["/archives/2019/index.html","232e9827bc3a9ff577ba9e8116cd3123"],["/archives/2020/10/index.html","b331749591f4808c10bb71164f1e8e20"],["/archives/2020/index.html","d3501d9f3690b71ee46be9565c89da03"],["/archives/2021/05/index.html","ea662025f517841063875edc280abe96"],["/archives/2021/index.html","78085456e7a8cce45649125e6bb964b2"],["/archives/2022/01/index.html","06779b970c5b8ca759774a3b2e1dc83c"],["/archives/2022/02/index.html","d374d8dc295e3b3e3684f75b85cfd06a"],["/archives/2022/03/index.html","bd49f92b120d32e4e318e9bf6ae610e2"],["/archives/2022/06/index.html","57cb7463f1bc79ab0f4f53e4a735d387"],["/archives/2022/index.html","18ae6ae0f90cd58694c1819e0b6e36ee"],["/archives/2023/01/index.html","dc35251db8f2941796c7a8a01657a7ce"],["/archives/2023/04/index.html","6e17ac5d8e5f1346a8e24314c02c0652"],["/archives/2023/08/index.html","f6dcc1c0a20c00206910aa077025a2d3"],["/archives/2023/09/index.html","b45a23f285d2516257556eece37df532"],["/archives/2023/10/index.html","3d3e80de369cb8b76ba65b13e20c204d"],["/archives/2023/12/index.html","dbb7bdf937a46ecd7f203700454fc21a"],["/archives/2023/index.html","9ebc1442408d9e1ea5fd0ebd22e08ef3"],["/archives/2023/page/2/index.html","06f2de3f65c0eb0a247a9dc3ba7d88a9"],["/archives/2024/01/index.html","5b082788c9db1db64dfbf779aa9aeae3"],["/archives/2024/02/index.html","c1dff123ca83cd6797b2c5db83143b9e"],["/archives/2024/index.html","968f85a40ea07f10d2858e2485693842"],["/archives/index.html","9973adb192f411c27f1426d0d4536e21"],["/archives/page/2/index.html","bd56ee4fcc82faa2b0c3c5e3a893726b"],["/archives/page/3/index.html","38f6af40df0392ea01194dd89193d1a5"],["/categories/C/index.html","142c966972bbe15bc6e0546a60040ebb"],["/categories/CUDA/index.html","5173e806e1b3df29932f060f5f2d8713"],["/categories/C语言/index.html","3e27469883392ea199fc25bf5cedd8ff"],["/categories/Markdown/index.html","4225baa33f007bd0510b2f52dc2ca0de"],["/categories/NLP/index.html","47a1629fe66e4524e310b7cc9fcc2ecb"],["/categories/Python/index.html","eaac32a960079843cc77ad95d3562e35"],["/categories/index.html","1bfe56b8190b02773378b5c3293ae8b7"],["/categories/数学/index.html","c0b327f49030a65804185f496f3f0d8a"],["/categories/数据结构/index.html","c0890e6ae036c3abce43f9d082deec48"],["/categories/深度学习/index.html","5590bd35772a5016afa702b01c52123e"],["/categories/神经网络与深度学习/index.html","82990d15c5dcdaa53984b8063f1f0432"],["/categories/算法/index.html","4d042229f7b686494f58d152ac035596"],["/categories/面试题/index.html","b919c84b7d4d6096e2e5d8d748c33aba"],["/contact/index.html","9db8c1445bbe3d2f45667f6a8c3a6077"],["/css/barrager.css","a2a383f58d356d9564ca35306b6fb907"],["/css/bb.css","d5b4c1f59041100e1091522955cf0a7c"],["/css/dark.css","49e5d1d3d1b23d212735514dc0a6025c"],["/css/gallery.css","e904b39abb257d58762ac669642e188c"],["/css/gitment.css","89d8d001517986ff854a92c1596968f5"],["/css/indexcover.css","c1c3cb0ea139b9e537ac61b92747975c"],["/css/matery.css","e99a41aead80acd103cfa92f47f23334"],["/css/my-gitalk.css","48779395456274e1cf8dc91093c935ec"],["/css/my.css","0414e8efaf7f4f7353a4487db7e97646"],["/css/post.css","fe3628f6cc10639e50963da9294f09ba"],["/css/reward.css","45bf969c1508a6416b2692850ad6d1c0"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","4bd8acb0ef18a85f09481a5bfabec381"],["/index.html","0dca65f8c5c55831dcbc27cb6f0cd5ff"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","bf5fde72f51b66822292aeb1b6151344"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","ab6308321dee4ce45673463f515c84ff"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","915b22206cde2a9a577d5ff3fbcf5b62"],["/libs/gitalk/gitalk.css","9244243e681c0968c19baabea7c06d8d"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","62f9cb25b754ee13a5327e02b76a5eac"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","ae72ce2702ae389e9bbd5d929e1043af"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","ef5b4232d3d1769a1fa87c86273f08f1"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","026c5b89b17755be61993848140c1ed8"],["/page/3/index.html","4c275ff62ee9a16760670fe972155fc7"],["/page/4/index.html","93823ceb6ffca868382a0ed2710377d4"],["/page/5/index.html","e897f74454e59cf868134947044c47d7"],["/sw-register.js","bd99f21cc889126c8bcf125a34de911c"],["/tags/CUDA/index.html","967a549126bba836d71861a01d3a1281"],["/tags/C语言/index.html","5c9eecdd7454977d447e429873e495b6"],["/tags/DL/index.html","e2b928d8d49b6dfe3cff37e3bd97ffe0"],["/tags/ML/index.html","ed4f5fe7d60df88ac509786fbd8498fc"],["/tags/Markdown/index.html","5d0760b21243fe4eff19a725b1e718bd"],["/tags/Matplotlib/index.html","2f8919e65c0f59848ce3d27e3d01356d"],["/tags/NLP/index.html","82e5896f869255fa311d1e5be779bc7a"],["/tags/NumPy/index.html","d3dd61fe459772b21fb1a42f5f63a260"],["/tags/PyTorch/index.html","33d98c33aedb1e4941c0cc60e36e10a0"],["/tags/Typora/index.html","abce93828b9d594bd56655092e96aded"],["/tags/cpp/index.html","9fb157e9558ebe2d693ccfcaad38caa9"],["/tags/fastiai/index.html","5e3c62170fff8755bfa36c961b0bb09e"],["/tags/index.html","c974d546f5a5797f23a999b85a91293a"],["/tags/lambda函数/index.html","ca6385477de0decebbc32f9d1cd35f30"],["/tags/python/index.html","0125d14d496846f7c5a714841020826f"],["/tags/函数参数/index.html","a94c80d0922652e02de5d568e3b048fe"],["/tags/函数式编程/index.html","f450568355b2b1323f3258c7bb99acc8"],["/tags/指针/index.html","d6dea379600fc8e94d1ccf768a9f1656"],["/tags/数学/index.html","cd5f7ba421d91e1c1f0e514bed89b3f0"],["/tags/数据结构/index.html","f9f50c1f2a765681ea3e6c70994f94fe"],["/tags/测试与异常/index.html","216430ef06674fc3ea1ff2e8f353edc7"],["/tags/深度学习/index.html","036893aa6549f1824f5a940964f4758a"],["/tags/生成器/index.html","dd516845b7a1feb1ef94f62455514ea1"],["/tags/神经网络/index.html","fcf4eb5707c84f8f9f0d0c7eeca01acd"],["/tags/算法/index.html","0ce5a77e5d3bbaff744064477b40edc0"],["/tags/计算机专业课/index.html","61b551658b52a5a798fc36d001a5e753"],["/tags/迭代器/index.html","103e822974a4c1c0394abc2f620fe1c9"],["/tags/面向对象编程/index.html","f7431c34271c3ad35fd08709fbefbd66"],["/tags/面试/index.html","cb895e93420a6a6b7c45915c22749b2d"],["/tags/高阶函数/index.html","378340598deb24488426d0c7eeb85c9d"]];
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
