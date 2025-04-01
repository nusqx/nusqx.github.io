/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","caa955f250990a7b1745e77b6cb84b44"],["/2019/03/16/c-cheng-xu-she-ji/index.html","b2195c9a646c9218c338294f9522bd5e"],["/2019/03/29/c-zhi-zhen/index.html","c59c30c03a6db79b372d4fbea5b4004d"],["/2020/10/15/ds-algorithm-md/index.html","83166b8a2a937188538a8d8dcbcd2fdc"],["/2021/05/18/algorithm-md/index.html","bea5589d243fff0ba5d4a39fb2b87027"],["/2022/01/12/python/index.html","9dc47f8552ddaaf445c011adc97c0b16"],["/2022/01/16/python2/index.html","d7b2b1ca41acdf762d2ed249322b73a2"],["/2022/01/19/python3/index.html","3698b5f1ddb860f899c6fce0935bdf53"],["/2022/02/28/c-biao-zhun-ku/index.html","901972a468c68b387fb46db9a25aae95"],["/2022/03/06/cpp/index.html","b35f18c47d663a7ef70fba9679296031"],["/2022/03/19/python4/index.html","b1ae5b58f28040b9ad48149202953816"],["/2022/03/25/lambda-han-shu/index.html","6259c1fd027af94173f832a2ec862fab"],["/2022/03/26/python5/index.html","231a5f01c01319eb5dca2ef12631f7ea"],["/2022/06/02/python6/index.html","185bec090287e61c92d0b7193e9cbcf6"],["/2023/01/06/python7/index.html","b4992714fd4409f0c3df3570d7fddd4f"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","93516baed0323e44b56e5efddc3626ca"],["/2023/04/16/machinelearning1/index.html","8f9333d0c73ea084869c660282b5e4af"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","058d0f658c8550615cd388e1802a6a3a"],["/2023/08/08/python8/index.html","28471cd33f6ced284276a6e9597498b1"],["/2023/09/05/deeplearning01/index.html","fc7be7d604b09a37d2e0ffef17028011"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","4281671d40d03b753eaa79158264e12c"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","84498dbc16cbcd14192007785126d99e"],["/2023/09/26/springboot-0/index.html","fd015f554e6e5a71761f41677275c53d"],["/2023/10/13/cuda/index.html","6b8f1ab8ce00a5da0664a878324bc6a2"],["/2023/10/14/cuda-python/index.html","a5d81da4ab7159b7832742fff55dd02c"],["/2023/12/21/dl1/index.html","6e1eb34d9173f92c0f131a234cc02ce4"],["/2023/12/22/dsandad1/index.html","0424e4dab24bd68f92411c6f6cb9854f"],["/2024/01/22/dl2/index.html","87dd81c98ecc29f8979fcd4421e8ec40"],["/2024/01/28/production/index.html","47e12b63e407c68bb23c845469964f01"],["/2024/02/25/mnist/index.html","126a18a20fb7c837589c53b3d44d49f2"],["/2024/02/26/ner/index.html","7494d547e7aa3e5a1d1081bd99a86729"],["/2024/05/18/springboot-1/index.html","0a4d0e2cb70d80fd4e2dc910f234e887"],["/2024/05/26/multicategory/index.html","9f87451efabf48210bbbcd450a7a059e"],["/2024/05/28/springboot-2/index.html","7cf8805989b9e5d3e6f52be7cae10339"],["/2024/06/02/regression/index.html","dd6cff5cb86922914d09b4df85494f96"],["/2024/06/03/imageclassifer/index.html","f63cd20ff9e4179622f6e64d4ca685a0"],["/2024/06/03/nlp/index.html","d06eb59b295a60555d6b438c6e43dbad"],["/2024/06/05/springboot-3/index.html","f0d589f4daf4e00c66c29b211aa3a5bb"],["/2024/06/10/trainsoatmodel/index.html","fbe4b81a72176edf294ae131c1ce009d"],["/2024/06/15/collab/index.html","d43c0d1b8e2a92a3a73ba733a32ddfde"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","20a9281fb443a46ace280b6856ff206d"],["/2024/07/04/vue-qian-duan-an-li/index.html","7c2b0626a33c9251e433c6a56b0d638a"],["/2024/07/05/element-plus/index.html","47d0072148243d49280f41add149a87e"],["/2024/08/10/vue-kai-fa-an-li/index.html","02b0001005039a71ec40800636f34ea6"],["/2024/08/26/ddpm/index.html","9042822c583f00538cf7c40852f7c15e"],["/2024/10/15/redis/index.html","28c736e0e76c5359203c079e7fb43f4c"],["/2024/11/30/leetcode11/index.html","210129090b2beb5f3949c9dad9028549"],["/2024/12/21/tabusearch/index.html","077d2bfc9acf5cd5304193bb0f27a23a"],["/404/index.html","cc568ee6c7aba14245cc48595b7bc062"],["/about/index.html","b10063cbd76385907646e10c98bf94ed"],["/archives/2018/09/index.html","b17702e863b9dadae4517268f76f73f0"],["/archives/2018/index.html","5f75d59e71699104cf160228b7c7af78"],["/archives/2019/03/index.html","568cd9aa19dcc61ad2440deb30761039"],["/archives/2019/index.html","8ded0540b8dfc88bd55203633b3be1ad"],["/archives/2020/10/index.html","a99a00efe50b81d0720dcc5c487523f4"],["/archives/2020/index.html","1077fb5a5690764eff38de0649e35541"],["/archives/2021/05/index.html","9925a154e63b59165af05d03a254dee4"],["/archives/2021/index.html","b1c3a536397c4d338fc0147b006eacfb"],["/archives/2022/01/index.html","f8718c871e972530f668430f6a98fcf3"],["/archives/2022/02/index.html","6b6f8ec61a5ef52b981ad2d236e43d23"],["/archives/2022/03/index.html","182d3a981f69126bb62f561d4c4afb3b"],["/archives/2022/06/index.html","3421a9d1258f3c2e26e70e80bc9b7968"],["/archives/2022/index.html","cc7d505a287e9ffa06cd14c8229366c2"],["/archives/2023/01/index.html","39c776bbe2b2534796808b3b7f8d3fd2"],["/archives/2023/04/index.html","fb726c04fc7541a39b5ea1a92a5a89c3"],["/archives/2023/08/index.html","65cb70ae998b384f3d7b996e269d462d"],["/archives/2023/09/index.html","935fe99b8cf4c316817d1566f4206969"],["/archives/2023/10/index.html","5b678772cd3e9458eb75472b17724570"],["/archives/2023/12/index.html","efe8132faa0dd11f8d678cd23e4d78e1"],["/archives/2023/index.html","e4f4b166c3a0e2b145dc39300bc2754e"],["/archives/2023/page/2/index.html","a57bbaf0bb1ee913f2a18da5459b1d4c"],["/archives/2024/01/index.html","4dde1adad675e40fdd7f3693f7c60858"],["/archives/2024/02/index.html","837b4ddfc5f2167374a56083b80bd18e"],["/archives/2024/05/index.html","bfb2deda85c9ba17ebbc15e603d935b5"],["/archives/2024/06/index.html","98bcc0b71e7c4f069ed203e5c32683d8"],["/archives/2024/07/index.html","28fb75b3ab01a8ae85c1e76e29aa8544"],["/archives/2024/08/index.html","b0e3e9c2b9e3867a693e7d0e89f85ce8"],["/archives/2024/10/index.html","288227c1cd79086fc9b982ad5a421003"],["/archives/2024/11/index.html","c07e6a4660724edd56dbccb65a3da934"],["/archives/2024/12/index.html","714f5dd9367cc0c7fdec34ad6f218591"],["/archives/2024/index.html","958da2ec27341e94a7cec6a3b87ef762"],["/archives/2024/page/2/index.html","7617b231bd777503951f361e51d6fb10"],["/archives/2024/page/3/index.html","f60e72688d3e959d85033b2ac3490922"],["/archives/index.html","be70c5ed0361deee0a0459b249060fb4"],["/archives/page/2/index.html","115829e92c89d16c2380186ca581fc80"],["/archives/page/3/index.html","19c053d89a79c048c8ddc0df50f05600"],["/archives/page/4/index.html","b0317eaf348b9673c05497a54af94920"],["/archives/page/5/index.html","5abcf0215ea4b74dc9f2206dcdaf32d2"],["/categories/C/index.html","a3f0935ef4b055c70df637367ee7b0ba"],["/categories/CUDA/index.html","bf3630287b5ef52a714c8b7ff71da37d"],["/categories/CV/index.html","79b46a198ea9cdc403cb710950c718ac"],["/categories/C语言/index.html","5dc758c27e30baf7dbfab573b9f05165"],["/categories/LeetCode刷题日常/index.html","d34256bf2c25a621c7fd7a87cc9638b6"],["/categories/Markdown/index.html","08da1893d5c1ed242f021cbe222dbc93"],["/categories/NLP/index.html","5492fefaf4d1ec600549d58e5517fa70"],["/categories/Python/index.html","cc254faea069dba4f49f4c5b50ce6816"],["/categories/SpringBoot/index.html","4ee634eebe4f0db5f50d7e017f21c2b5"],["/categories/index.html","644f8e0518baeda7c97228105eaf8291"],["/categories/前端/index.html","6ed338cfa36d40f1905f52abde12dd8b"],["/categories/协同过滤/index.html","a75f8990cc811b82af0b3315f4611236"],["/categories/启发式算法/index.html","e15de6dcc667eacf92fe06cf711ac9a6"],["/categories/数学/index.html","d131aa571f981f797553e454d88d8642"],["/categories/数据库/index.html","3ec5e0904d3aa55705984d68ddb06006"],["/categories/数据结构/index.html","339d9805aea201eb9d592b65f6a5025b"],["/categories/深度学习/index.html","58d45043143252149a383b2dcaf8c3f4"],["/categories/生成模型/index.html","3be9d093ccc4461451a0a2d2d723eb35"],["/categories/神经网络与深度学习/index.html","03aeaa2b62233399ec272179aa01abef"],["/categories/算法/index.html","208e8bc70ba9953f3469abc709462d17"],["/categories/训练模型/index.html","c6c297fcc435f71622a8661a7090da92"],["/categories/面试题/index.html","8fe35eb1d9d285577c6905c34775a188"],["/contact/index.html","afe315f499365253509d5982386b6fe7"],["/css/barrager.css","f05d50e0bcb85074dda8895c0cabf717"],["/css/bb.css","4d2116cb1d52d53e112ca983cfe896e4"],["/css/dark.css","335096df309036ab5be9ad0e505bfbaf"],["/css/gallery.css","2dddaa736e527cc0787d6ee3fa64d187"],["/css/gitment.css","690783d4247c77789e6d3ab4653a41d0"],["/css/indexcover.css","21b3a11e77e3db2d50ac9b828218c46c"],["/css/matery.css","40c2c00a408ddf07993317882eb24906"],["/css/my-gitalk.css","cd8669e2d363d6c087b01e5084b174bc"],["/css/my.css","89f18e20c3785f64f62b1cb75b0d5d11"],["/css/post.css","52bf2614592f8b8c894a1174901963e6"],["/css/reward.css","616e6ab01e67a9399e97fd69ec768b7a"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","5d333d882d8f0c55e89ec53db7885b34"],["/index.html","a4659a721894c9a61db5280ff666a1e4"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","3a145e931b85517483ee7ca24131ea83"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","2eb9475c0aef261ad92f9a5ef181f43e"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","d6e9c1a06817632a420b49222b0f86dd"],["/libs/gitalk/gitalk.css","e6c14d8021c7405d0da44ff8b99091c9"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","2f35c656dcaa739dc8a11ca691674f31"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","6c35261f06683a33e7d0998bc7604e71"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","9179cdc0cacc1b59d1cf2fa3fa6b2230"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","d096f7908cf238a84e33e99ec29683c8"],["/page/3/index.html","4bc5b69d4da36629657c9de7282d37f0"],["/page/4/index.html","1e195f749d6cd994ec8267baf774dbed"],["/page/5/index.html","2e54851d1663ebd3255959f68f480a80"],["/page/6/index.html","022226ce88e0ce339b94555f43c1d747"],["/page/7/index.html","1247eb8bc009d549e3d8720e33e34ea8"],["/page/8/index.html","0a744e7f7a2dfa2a187561311585e889"],["/sw-register.js","5be966b5b3a4fd5e1e2bbd48d758cb1f"],["/tags/CUDA/index.html","04aa7008582ced1cc7271d060e8bedd0"],["/tags/CV/index.html","fa58a4f303483d9d63adbd6fe1493175"],["/tags/C语言/index.html","2e466b8d46cb19568bb78b9907886706"],["/tags/DDPM/index.html","63f30c87e3d7ac5931f89396b6e19b04"],["/tags/DL/index.html","b41f05b2ee4592e87363bd21e5be6c45"],["/tags/Element-Plus/index.html","bd25a4fb642250c3b8d33f33ac181bff"],["/tags/Java/index.html","4ae0750de6d7d0faca829d366002d371"],["/tags/ML/index.html","305c35e32d6328934ce2facf3c712077"],["/tags/Markdown/index.html","6c4459b707c0cb45bfcd6a239e6b2a5e"],["/tags/Matplotlib/index.html","8191dc2ec90776deb1a078b85e1c7678"],["/tags/NLP/index.html","5eb8b0f19fafd857fdc79defde8077a9"],["/tags/NumPy/index.html","8036b648abbbc2359a18146cccb62d5d"],["/tags/PyTorch/index.html","ec8c18a5550dfeb1595556c4c575f2d7"],["/tags/Redis/index.html","b97e083911c9f4f19ae724947886a098"],["/tags/SpringBoot/index.html","df83b9946b7d0392809f6e86aefb6dae"],["/tags/Typora/index.html","5570d21b3617007774bd4232366e9679"],["/tags/Vue/index.html","68118b7cb34c6e5f6403e86d3307bfac"],["/tags/Vue3/index.html","836e4c552890bf3e2f9d561f93aaa078"],["/tags/array/index.html","5adaf44ce34cb5972b3537bb1dce126d"],["/tags/cpp/index.html","7bd9070fbf7600a76eb9988add66fb94"],["/tags/fastai/index.html","fbf7a099891cf2aaedfb319aa78c4bd3"],["/tags/fastiai/index.html","22c3fc039d98e2c2a58f1733a2431887"],["/tags/index.html","c46c7bdfe4f4e98e641d3e975b7315d0"],["/tags/lambda函数/index.html","56c8a70e0e0ff43932d057b538edbad4"],["/tags/python/index.html","3158bd39c3cfeb40f39150668060e6fb"],["/tags/two-pointers/index.html","5c096c6561665253373c26ca6564045f"],["/tags/优化算法/index.html","1e88ac98d4332af3f98720e36871dd3d"],["/tags/函数参数/index.html","e1006c61bbc7ec4fb3989e502d0f59bb"],["/tags/函数式编程/index.html","96e3d9ce5426157437f7bd0831106725"],["/tags/前端/index.html","5e1f5ad45b4f1da3307e87a65782aa2b"],["/tags/前端开发/index.html","1586a2ea1c03ebde0c7a9ee342b2d0a6"],["/tags/协同过滤/index.html","a5b54c07f5396d0acbca76eb3e25d476"],["/tags/启发式算法/index.html","821948da7f3d3ede50d3624673f8ba05"],["/tags/回归/index.html","11537e2d3a0205e168812adbdfd10fed"],["/tags/多标签分类/index.html","29b6c5a04d2d39f8f51da56057188e38"],["/tags/指针/index.html","74bdf3b980c95b860ad9e42fc08792be"],["/tags/数学/index.html","6f2b49bf4f87b1b87bbf405a977a2fba"],["/tags/数据结构/index.html","86e01e533f46c4a3bf2f97374ffd2a9d"],["/tags/模型/index.html","9f6fa8dc71b1eaaf053b036c13ce1248"],["/tags/测试与异常/index.html","64a776521b152bf4e3145aa413822c81"],["/tags/深度学习/index.html","97a3ea2b47c0ba5c47ba6430d6017482"],["/tags/生成器/index.html","587c1e45e5abc1e96638e043e4452fac"],["/tags/生成模型/index.html","000c302c3a3234c020b5e405865a2cfb"],["/tags/神经网络/index.html","48448c6679b437f0df8a94199eae34ab"],["/tags/算法/index.html","3bb92ea73ab07ab4be50189cd570402f"],["/tags/表格建模/index.html","2e5616b9fb0dd1a436ec95e3ab582057"],["/tags/计算机专业课/index.html","5f7aec671188096bb9fe7517d342f6e6"],["/tags/训练技术/index.html","5187dadb84bac7f9daf6ee6cff665dc5"],["/tags/迭代器/index.html","7a243f41436d3046a0d2cbf2933f4974"],["/tags/面向对象编程/index.html","41faa28101367fd97c94041efae1cd81"],["/tags/面试/index.html","b4ece96d6af211b3aeafd7e90acc3447"],["/tags/预训练/index.html","c394953ce18038f660b273bbea6ea57e"],["/tags/高阶函数/index.html","094502b1b8dd68a5cf5fc5fa9f609368"]];
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
