/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","f71230573550854c941694d138db4ede"],["/2019/03/16/c-cheng-xu-she-ji/index.html","088112aac94e9e08eb17302cf55378b9"],["/2019/03/29/c-zhi-zhen/index.html","057aab90e42bbd6b728380788025982b"],["/2020/10/15/ds-algorithm-md/index.html","d4f36bd577608c772d863294ef5459de"],["/2021/05/18/algorithm-md/index.html","01d26cd18e1fff9190c4d7693b64305e"],["/2022/01/12/python/index.html","d803d0a97d673093b3e8ea36fb408410"],["/2022/01/16/python2/index.html","dbdd1e08f67f50bc8d5bb483df81df1f"],["/2022/01/19/python3/index.html","a49e253eb8579b0862c83ebcac0317ba"],["/2022/02/28/c-biao-zhun-ku/index.html","0332e3a280d32128d0618da4e0fb3ba6"],["/2022/03/06/cpp/index.html","fc8890506ef67d839de4bdb9e75a0f27"],["/2022/03/19/python4/index.html","cf67c8a4afeab39d130e48e950a7ca18"],["/2022/03/25/lambda-han-shu/index.html","41d3f39974fd1b066e641e0992bf5744"],["/2022/03/26/python5/index.html","9a08b3513cb94a2370cb9782ce92a9b3"],["/2022/06/02/python6/index.html","8987c3d657c06dff0f60b98309a537e2"],["/2023/01/06/python7/index.html","01ab6d22ff1a158a839d5ff90d0ab1bb"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","83207582c206edd07a5519296ae83452"],["/2023/04/16/machinelearning1/index.html","aa8d4b30da37d3e15ffe21e37c6c85f3"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","3636bb9129c96f1ec5d824ee39a23e58"],["/2023/08/08/python8/index.html","246dd37b01e895ebfbef05f57ed001dd"],["/2023/09/05/deeplearning01/index.html","1f6bd8dc29cd9e5d8de0be4d4e87f132"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","af6e0efbdda57a0f6032a42678ba1091"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","ad49b4cb3848e9465860a1268890dc95"],["/2023/09/26/springboot-0/index.html","b148143677c8dd241ddb292249c91afc"],["/2023/10/13/cuda/index.html","74d2f6693c868c85d9614521087ae462"],["/2023/10/14/cuda-python/index.html","9912c4f467b03e71975f610da8195053"],["/2023/12/21/dl1/index.html","b69ba5299be9d0fa5ae4303cc2f76d74"],["/2023/12/22/dsandad1/index.html","b376bf5ded3ea2e5b8c64bbd5d23478f"],["/2024/01/22/dl2/index.html","d87dbe499457581222782cc5f7131980"],["/2024/01/28/production/index.html","d60126b5f324ae607f8d778928bb5c75"],["/2024/02/25/mnist/index.html","88866ebb4819cefcaa8a25f97ff5c83c"],["/2024/02/26/ner/index.html","6a7377dcb0596fd1ebfc8a27d26d0ca8"],["/2024/05/18/springboot-1/index.html","43847900b6d32fcc785319701d69e7b7"],["/2024/05/26/multicategory/index.html","9455779ef98ba00df9cab2ab79487fe0"],["/2024/05/28/springboot-2/index.html","2372dad075f7f22ede088022ee3ec252"],["/2024/06/02/regression/index.html","0f11b2a37de3560b03ea0b79cafae32f"],["/2024/06/03/imageclassifer/index.html","52fb9ab2232bd8f9b1147d5e0df99344"],["/2024/06/03/nlp/index.html","bb6a83ff41c059b794119286a8125e81"],["/2024/06/05/springboot-3/index.html","2842921e9825f50ddae17997c5bf7740"],["/2024/06/10/trainsoatmodel/index.html","b75e76f05b06585b36c27bc1ceead88e"],["/2024/06/15/collab/index.html","78124c3778b55ad62250741fc0c2745e"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","586cf3547a37873d15ae9372f76f5bb6"],["/2024/07/04/vue-qian-duan-an-li/index.html","b4d441d5eea459fee5e7dcc4c213c269"],["/2024/07/05/element-plus/index.html","9d63fb2f2b2f3e8844f46ac169eb3a0e"],["/2024/08/10/vue-kai-fa-an-li/index.html","ab3b66f6abf2aa60e121b812fce8515f"],["/404/index.html","f376f9feb4f36f7b17d8c0e50c264c47"],["/about/index.html","75dfd758d67cca030cbd04d855efdcd4"],["/archives/2018/09/index.html","1b7bb169f3703b31f48aac5770a55a6d"],["/archives/2018/index.html","61132fe8fbb88a4e0ba1f25e139088b1"],["/archives/2019/03/index.html","cb2188dd1c5fc98812955a3c2e3edba4"],["/archives/2019/index.html","d7cfecf86d7b84e80318b038f92b62a4"],["/archives/2020/10/index.html","332b37bf6e6ef6f7c140310d695a0210"],["/archives/2020/index.html","f260095fe82576cfdaee70a8252746d3"],["/archives/2021/05/index.html","3c744492c5a6d1736fe1c9c945bb5163"],["/archives/2021/index.html","f9d0fdc74b2a994a484a876cebb6eea2"],["/archives/2022/01/index.html","838ea763931e47bd7f7d109ea1ac7cd8"],["/archives/2022/02/index.html","d9b46869279fcd00d92c9674c579b9dd"],["/archives/2022/03/index.html","3375791d2ed3e20f96d8bdcbc6daf730"],["/archives/2022/06/index.html","1fcc42ff0a8febf1dcfe0fd882c5b3ee"],["/archives/2022/index.html","5e128121dc0bb91ef80e620a106be5b8"],["/archives/2023/01/index.html","c250fb04f08c7d363aeda99dcb3abbd9"],["/archives/2023/04/index.html","2bfb1190cc9649b7db8545d727be0360"],["/archives/2023/08/index.html","002e9d051716a9c687f0470a9aa60a2b"],["/archives/2023/09/index.html","5657011e66b75cce8e91ca13903104a5"],["/archives/2023/10/index.html","61dabd8f3250b419bb2d6a57c613f36f"],["/archives/2023/12/index.html","ddfeaa2abc8f844a8be3f3d335ece69c"],["/archives/2023/index.html","238d9df50585aca9c1a4edf0500ca313"],["/archives/2023/page/2/index.html","59ddac671ea3e2905f42b383d613a5a4"],["/archives/2024/01/index.html","67884e4d261acf15c50b4558666c4e89"],["/archives/2024/02/index.html","e5a7f9a209053eb1c701d0dbe99f4707"],["/archives/2024/05/index.html","e72a2db392ac1f96f027bc57a9f6a521"],["/archives/2024/06/index.html","8de03c951c556b999faef8dcd743c6f5"],["/archives/2024/07/index.html","aad4dc347d73a9bf94752565442c49bb"],["/archives/2024/08/index.html","4f80dc20c3583bc1f5edf6b6fffa3629"],["/archives/2024/index.html","8bb11cd62767f76bd14897d6b9f7f8b8"],["/archives/2024/page/2/index.html","0e0db3a1db5ce16e84a681a04163eb7a"],["/archives/index.html","21ca9fe57ab0948e30864f0da876c1c0"],["/archives/page/2/index.html","1ac0c99032ddec86a519f551ab9058da"],["/archives/page/3/index.html","297df7667c7ab01cd3b880ccd40fa011"],["/archives/page/4/index.html","dd41ffc126e353dedb8fd42b17c0c7d7"],["/archives/page/5/index.html","c10426031114dff683afe37a4ae46e10"],["/categories/C/index.html","cf62961da6d554cdba42c9f212acc0f1"],["/categories/CUDA/index.html","717467225ab07ccb81f86e3f227e79d6"],["/categories/CV/index.html","4ad2972f37407556164ba66bff9b0969"],["/categories/C语言/index.html","85e8fa8aa05deeab146632ed1ec1d279"],["/categories/Markdown/index.html","9fa687a533fa95a9d37abc58410f0c99"],["/categories/NLP/index.html","36f81f5718389dfee0548c1fb00aaff8"],["/categories/Python/index.html","95d14516d37523a16ec1e0bf89fe3364"],["/categories/SpringBoot/index.html","0749d86f0462255fa5cd7194626f664e"],["/categories/index.html","e312e23a88f10b714c9ef5d0ee094556"],["/categories/前端/index.html","0e366ae65293893cb90cd3e729695f01"],["/categories/协同过滤/index.html","42f3aa63a5c088256e7a29191881125e"],["/categories/数学/index.html","e3b3bf52d5d7abfb3f3954307ad6e991"],["/categories/数据结构/index.html","69ef0aa4d84190bbfa017c4ac47b5770"],["/categories/深度学习/index.html","5350db98e41ac785b6f7bbd94766e3f1"],["/categories/神经网络与深度学习/index.html","296037e8650f56242958af44d3b080c0"],["/categories/算法/index.html","0ff8c3355795714a28df6221c29e83fa"],["/categories/训练模型/index.html","ef61837aba177e9bb0a3d1ce1f16bee4"],["/categories/面试题/index.html","0fc4f9b3bce99a47bc7253ff7b5f421f"],["/contact/index.html","63c02994701e5416ee6dc082a251b6b6"],["/css/barrager.css","953e67d26abf042915cb51452dbc529f"],["/css/bb.css","50c9712e36968633b313d29ef4473920"],["/css/dark.css","53f4f7c791c10152a7ae88e5eac88bc6"],["/css/gallery.css","dffacd0a50724ffbc73e042bc8b51f87"],["/css/gitment.css","380906e4ab5951cb54c8116dc520fa64"],["/css/indexcover.css","33b26ac0408cb56db9f5e886d9038248"],["/css/matery.css","b029d5081d85b559393b219c5824b91c"],["/css/my-gitalk.css","05808bac26b1b70daa3a4f06044042c8"],["/css/my.css","7c373822bb434d700949bdd6ce604474"],["/css/post.css","e497839e158006c1170a298c4d3c9357"],["/css/reward.css","0a3ff5ec61647a679a0ca0cfdeb23c85"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","db0a1a475282dab20c188746915f8eb9"],["/index.html","2a51c45feaf5d4d456a8b7ae11df1b7c"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","4f4fe6edeebaf3cf4c5bd9fff33d53a1"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","c6e66cd385092f11c1d5e23df5e7828d"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","22984b178ba471cbe83b0cabe7d86d5f"],["/libs/gitalk/gitalk.css","bcc929396ccff25793507ac5fd12d05e"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","447cb7a4bfe1c078e80d9efd2cf788a8"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","6be3e122451d4a34f5ad50d229350cc0"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","46a78256db182a14fab3bb1eabd91f51"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","0da77da3e92f83498ac267e86b9011db"],["/page/3/index.html","662a30810a08d0443385463d21805d38"],["/page/4/index.html","2da7edad52017490d549979da1e7afd1"],["/page/5/index.html","40e7b5a3cde6990e480049869afc02aa"],["/page/6/index.html","35a287a4e54150a46fdadd3e62364d3b"],["/page/7/index.html","3ae2617071efae5a81c7209aaffa9d8c"],["/page/8/index.html","a2121840c2d2f26261987c992ffc50b8"],["/sw-register.js","cddfe1a8e67ea3b6b1879ca65c8ca4e8"],["/tags/CUDA/index.html","30a68c17b65c753c40608129f3f2ca8a"],["/tags/C语言/index.html","60a0250f8b0de6677b70c850426eebaf"],["/tags/DL/index.html","6843cc2d98ad1ba6eebf9df0ee9670d1"],["/tags/Element-Plus/index.html","7d7a0822341179a2c55922c9caae1328"],["/tags/Java/index.html","1ac6f5025a0bac8a2369e8252870a0bd"],["/tags/ML/index.html","89bac690db30299f3a8180781a3d7e31"],["/tags/Markdown/index.html","d92bc5e844c1ad128e8d1185f3cf8265"],["/tags/Matplotlib/index.html","99bec11b9065c7bc4a3bc5aa7529941b"],["/tags/NLP/index.html","769da7d5fe16735529f0b4602771c752"],["/tags/NumPy/index.html","fba9d9d868dfd7208569524a859794e9"],["/tags/PyTorch/index.html","c84836d100e55a32832051d579b99fcb"],["/tags/SpringBoot/index.html","680965fa2079042af767328536b2e4a8"],["/tags/Typora/index.html","68d20e3d24f733f373d7ae7d3efa0569"],["/tags/Vue/index.html","d5a482c79094964c09eb6765925a13f3"],["/tags/Vue3/index.html","6f5c1efd5260e497b55fa46f03be5d22"],["/tags/cpp/index.html","c33ac30205a8379fa43580e6fc744b51"],["/tags/cv/index.html","b1de4de8c846d83fbe574911155ad510"],["/tags/fastai/index.html","cf1696aaefbd6da2eeb0561b72b9dab4"],["/tags/fastiai/index.html","5c210d8a179a959df2bbd8d2cd5bd0a3"],["/tags/index.html","b2656b8cc23f5c9547705eccd18a652f"],["/tags/lambda函数/index.html","4e4f4f54f05d93b2656cbe44270d134f"],["/tags/python/index.html","0e2a4869d6e04f8809db9daeb2d9abdf"],["/tags/函数参数/index.html","4decb5877dc2dfd04f140e05a656b85c"],["/tags/函数式编程/index.html","431cfd0b0828be9e86927f4bf4487029"],["/tags/前端/index.html","d02056a0895171a7842ba8257ac91b41"],["/tags/前端开发/index.html","72190ae02b5a85195f45911006e25d36"],["/tags/协同过滤/index.html","c2ab209412a824614dbd623d9ba58e45"],["/tags/回归/index.html","7118f44eb689e9a4cc14e103f5acff1d"],["/tags/多标签分类/index.html","1166996ddfb173573c9ffe27ed825f9a"],["/tags/指针/index.html","692c55fc0040f83adb286a69acaad349"],["/tags/数学/index.html","fa2cad6965b7cbb14ef3d934621dc53d"],["/tags/数据结构/index.html","8e8d337b76c179c15430bc00f23c1615"],["/tags/模型/index.html","5fa8e8b3e0f9a039ea54772a7ccebbf0"],["/tags/测试与异常/index.html","0d1577324e3f56f67cce9271b80df7ec"],["/tags/深度学习/index.html","6a147c8c802aca0c554bec739d8faeb7"],["/tags/生成器/index.html","c9b80792849ae62fedeb968987fa2f73"],["/tags/神经网络/index.html","bc669955306ee5cf65f3fbe7adcfc50a"],["/tags/算法/index.html","2a6dff0ced6466707b1988e38ecc7631"],["/tags/表格建模/index.html","84de55e61789a57b05bd8e6b24b957fb"],["/tags/计算机专业课/index.html","1ce5f2c29f489315cb4bc417f22f00e0"],["/tags/训练技术/index.html","b23efc25faada18cc8fce50fadd1c1d0"],["/tags/迭代器/index.html","00b37f7a980b6e8c3324ab483c0f4312"],["/tags/面向对象编程/index.html","7393a2318c7099f9cc31ad531b8ad6f9"],["/tags/面试/index.html","bb6f0906c69304631140874bc0fbddbe"],["/tags/预训练/index.html","c65158e1f2ed34cf66a18a0f9cf2d22c"],["/tags/高阶函数/index.html","fd94aeeefea090e824c68685176f6e49"]];
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
