/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","1586ab71b252cae5665eaadde87e9d88"],["/2019/03/16/c-cheng-xu-she-ji/index.html","3aaec218e49b6ec1e85dec00886e65b5"],["/2019/03/29/c-zhi-zhen/index.html","ed032db0994081a077a6164a0788a0d9"],["/2020/10/15/ds-algorithm-md/index.html","c9ff15fb60bc74d69be43a8ae7f0f62c"],["/2021/05/18/algorithm-md/index.html","c8c2644b2a298503a0b0f698adc8707f"],["/2022/01/12/python/index.html","aa745f3dc0bb6328ff7e853664f6ddac"],["/2022/01/16/python2/index.html","ca589ab33f0a49b405c6ff7506a7827f"],["/2022/01/19/python3/index.html","769cf25f466a873676d2bed6c1e8d166"],["/2022/02/28/c-biao-zhun-ku/index.html","b268609b0821f99cf296102a764feac8"],["/2022/03/06/cpp/index.html","4bb59909bf5493d907070ead13dbe76a"],["/2022/03/19/python4/index.html","69fe7ab80b0967d2d7860a392bdd4e82"],["/2022/03/25/lambda-han-shu/index.html","338c4d23d0796ab01d8920f4653ed3e1"],["/2022/03/26/python5/index.html","a28b501b6052dce9675d11bbad701677"],["/2022/06/02/python6/index.html","4211cce1838cfc5c79a235564f000835"],["/2023/01/06/python7/index.html","d7c6b5c67842a2d1d935d060599d927c"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","e093a8bb1c4b8c04d17d84ee36373a8f"],["/2023/04/16/machinelearning1/index.html","ccf4c0be2eb94372a15dd1f6fbd441dc"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","960241bc95d609dc1b2f578a8fe2d3e7"],["/2023/08/08/python8/index.html","d71d77ccf42ef7caeef3c9383c34c4e8"],["/2023/09/05/deeplearning01/index.html","4d82f1ffc60cc964d1c9baee8537e55c"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","1c775abeca71cf1e988a6f11c96903da"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","3629de95bc0954a593ef259600d34cf2"],["/2023/09/26/springboot-0/index.html","2e72bcbaef012ff375001427e3282ad3"],["/2023/10/13/cuda/index.html","58b6fdfcabf63c73a6962a42df979995"],["/2023/10/14/cuda-python/index.html","3d232d8417323c76b33e3f59ddad3fa0"],["/2023/12/21/dl1/index.html","001fa123d56244de753ce3ad61259ac1"],["/2023/12/22/dsandad1/index.html","8045acdbf1105488909966f86ee8c212"],["/2024/01/22/dl2/index.html","efcafb2079e57f78a6417a654d96d8b1"],["/2024/01/28/production/index.html","b4f9e7df3d365a04697a0b1b5b3e8330"],["/2024/02/25/mnist/index.html","ca75c27aed927329feabc45007068b1d"],["/2024/02/26/ner/index.html","952fad2dfcd5a54bee1cc4c47b4011db"],["/2024/05/18/springboot-1/index.html","6e9677428e30e4da99619454c578bcba"],["/2024/05/26/multicategory/index.html","1928cbde6e86f30ee8aac8a691f3c7ac"],["/2024/05/28/springboot-2/index.html","c104c06472fbb157c1a805928d370ea5"],["/2024/06/02/regression/index.html","9baec4d292e164f800762edf7decdbd7"],["/2024/06/03/imageclassifer/index.html","417b8da527902288275b641657b5b10c"],["/2024/06/03/nlp/index.html","f50a8218d708d0c27a639cfe6a9012a9"],["/2024/06/05/springboot-3/index.html","a0f9964ea5414dff554444054ad769dd"],["/2024/06/10/trainsoatmodel/index.html","944acb92e4d1d60816c17b425b0149b9"],["/2024/06/15/collab/index.html","fe14a1afac154736fd627e864ac81a63"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","d57a90f2cf784cae092575f6e7fdcacf"],["/2024/07/04/vue-qian-duan-an-li/index.html","3cd777fedd96360a5b70c65d57b33691"],["/2024/07/05/element-plus/index.html","f4a3434665812039b6b23f261b777442"],["/2024/08/10/vue-kai-fa-an-li/index.html","100b62c915efa3a934e293feb5bea43d"],["/2024/08/26/ddpm/index.html","a1bcd1fcb36b51a69811d3fb315bff06"],["/2024/10/15/redis/index.html","639a171bd180ece7f585714e665e3d60"],["/404/index.html","dd421c45d79a56d5dd6c66e47f3b5d5d"],["/about/index.html","29020fccf0d103c25a629b90ee1de95a"],["/archives/2018/09/index.html","3b0341a0f5999910dbb6f45f85f6a3a4"],["/archives/2018/index.html","b09ca413bf57ccb151d4a94d87247d3b"],["/archives/2019/03/index.html","f6fe1af44bce009e78e5140f7b501f30"],["/archives/2019/index.html","6f23b15c86f46f8d43d2354067c2219b"],["/archives/2020/10/index.html","fa87d45417f9c5b43ffffa4abe51a408"],["/archives/2020/index.html","0b59d89e8acca985dc1ce560d7b5e798"],["/archives/2021/05/index.html","5d86a7446a399bae39c5f6d49151a99a"],["/archives/2021/index.html","938eebd3f7b85ffdc2754b20fc5084c2"],["/archives/2022/01/index.html","8c2c73654cfc3bbb362ea67764afbcfb"],["/archives/2022/02/index.html","923eb808b02fa1888fc28098f5b57853"],["/archives/2022/03/index.html","c7063443f36e87210d3dc007d3309f69"],["/archives/2022/06/index.html","151169d6d680aefc188ef06ce11b862e"],["/archives/2022/index.html","968734d90367776f307399480aad4da3"],["/archives/2023/01/index.html","26490541a005edbb98cf21ee3f649233"],["/archives/2023/04/index.html","2fadb37fb83c6f1e72ddcaa609087e74"],["/archives/2023/08/index.html","3d1c07f02e19355103ce89b034547d0d"],["/archives/2023/09/index.html","1234520e3fa71c3ff5bfaa269a7915f0"],["/archives/2023/10/index.html","13afc5a3f520fc5eaf5ca006b5572368"],["/archives/2023/12/index.html","a8f3f601180f597adb08f35dea01751f"],["/archives/2023/index.html","a158894047ebbcb3b731872e3a0d091d"],["/archives/2023/page/2/index.html","f828b362f0a6da203be7ccc38f8fd61d"],["/archives/2024/01/index.html","e3c4a6bc2e70c6cea62ca7e71f69d954"],["/archives/2024/02/index.html","0908b171388fa82da3b57048a901ac6c"],["/archives/2024/05/index.html","9168cb9ae9bd2fbafc2a38d7f677f313"],["/archives/2024/06/index.html","a6e9a5a65662ff6379bc1e7f51b9132f"],["/archives/2024/07/index.html","0aa07ab50742558ba66d16662828ffc5"],["/archives/2024/08/index.html","c78cbe18f92c59669d04bac09818f983"],["/archives/2024/10/index.html","5dba119d1eceef666e3a39e2d35d44a2"],["/archives/2024/index.html","48d04aa663de602b1ba6cd0a259bf9cf"],["/archives/2024/page/2/index.html","3278c77a68feea384a7f9a65702b1efa"],["/archives/index.html","88deecc0e79b8fffb53f0841eb186860"],["/archives/page/2/index.html","3cdb973b7d6004c4750c9d48f04b4d23"],["/archives/page/3/index.html","e475c183b0f36af264694e4bb5c340b7"],["/archives/page/4/index.html","0f24ca450f6ea6532af1e4aa3e7721f6"],["/archives/page/5/index.html","f4c2cfd1d0e62ffa7cd0b2df6d7fa70d"],["/categories/C/index.html","1a1c5f4ada1879fd8f033d2dc4b1257e"],["/categories/CUDA/index.html","166c89ac24cde890de2908d939e11520"],["/categories/CV/index.html","3156087850f5ff55011e27f6f7808e7a"],["/categories/C语言/index.html","872ef186b13fb9a017a126dc15d0c786"],["/categories/Java/index.html","c92aa16d480e6ea924af23d425fe96dd"],["/categories/Markdown/index.html","17077a3f53fc9dcaab6b2f74046288e5"],["/categories/NLP/index.html","0169cc3edd29b8a2449f0df72ffdfcdb"],["/categories/Python/index.html","83249fb08c109f3e5a608b16cc01111c"],["/categories/SpringBoot/index.html","143088cbd5efe8b40d6e96d3691b8e06"],["/categories/index.html","7ae29f8157184ae3c7c22e4fa93be108"],["/categories/前端/index.html","de9ce31d689830255e220179856c7f9d"],["/categories/协同过滤/index.html","5bfa47e03880fe395b23f9f0c6ce84a7"],["/categories/数学/index.html","5dca7bc0f1858ce2e101c39c5291048a"],["/categories/数据结构/index.html","8bd673c2fa08c18241a9b98ec3be0653"],["/categories/深度学习/index.html","53acec8978d7facc27ba5a0a7ff5d20e"],["/categories/生成模型/index.html","b422a1734b8943dba58b6a81829eaa3e"],["/categories/神经网络与深度学习/index.html","cc01e2e12b3f73fe7ba3e0c263f57efc"],["/categories/算法/index.html","3d6efee946d876d27ac1ee9daa0dc26d"],["/categories/训练模型/index.html","56462009f34c00c4a018766f6991fd6b"],["/categories/面试题/index.html","611fbca0e6b7e3abb6101d39dadfc051"],["/contact/index.html","7f1c30e061f4b9237b8b2dd9352ec838"],["/css/barrager.css","331a704d0feb633d5e32419e533ed21c"],["/css/bb.css","c7b465b13b6bdbcda3da85c8eae02cd4"],["/css/dark.css","44e6914b3e703007e300033af1ab5c00"],["/css/gallery.css","42044e3cc77c2e6e87fe78ccb4a7b2db"],["/css/gitment.css","1dca188a398769c9eb68e55ef32f651c"],["/css/indexcover.css","3ace64e411b76dceab7e39ee479a22cc"],["/css/matery.css","de3687f454b5a48ec182f3c6cb6a54a8"],["/css/my-gitalk.css","2855429485bb5a5777019d759224dd0d"],["/css/my.css","da4305acbfda8b2c192d538f0b46aed5"],["/css/post.css","aa63994e718dc683cbbfa3688f9a0bd4"],["/css/reward.css","48f86557c810e30debd3524f19d2c216"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","8070772805b6fe4082982f35437857b5"],["/index.html","1d516b0a5f2803d8e72018780056d867"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","400ec89ac02893f81d479cb05395b018"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","054f8f36e0c86179e439466e0a1f50a4"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","9ce4c97cf790f2a68ec61105ee7df44f"],["/libs/gitalk/gitalk.css","a20a0ff31e754ebda94cd35c24a5a04f"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","620c4334853d237df4a0ac1772c7b5bc"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","d275ae92540af8280405f444fa5b811c"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","b6039f27c412d3a038f05982bd788ac4"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","574467aeb29ff5a1dc212404866c1558"],["/page/3/index.html","d2b8562f6aaf9cb87b65d2c7f4ca9618"],["/page/4/index.html","f8eae30c768f78d2e0d2ea6b1a233850"],["/page/5/index.html","997cff7f083e96ca2f0e4044660bde5d"],["/page/6/index.html","6964cccaf415c30d4295283babab8f2d"],["/page/7/index.html","629b6b670ecd3c10a5c582fc45cc3ffb"],["/page/8/index.html","76c38583a16000702c6ca422354b0698"],["/sw-register.js","1193d91475b1ac8c577ed21ed2a1a211"],["/tags/CUDA/index.html","fbf2a208a247bbd4373607d12555eff0"],["/tags/C语言/index.html","edda0756c50aa2c87d3bdf9e7a52956a"],["/tags/DDPM/index.html","e9f9bb96cfcae2362570dd0a8f889b6f"],["/tags/DL/index.html","1e796eca592893cad736f3e594258892"],["/tags/Element-Plus/index.html","276b44cc566508f3480fc7895123fce2"],["/tags/Java/index.html","39bb2e176ebe21429367214a67633ab0"],["/tags/ML/index.html","47d8f7653fce8430739ec952f1e192e8"],["/tags/Markdown/index.html","3ca6a6f2da4ee10acaed7009cfbeaad5"],["/tags/Matplotlib/index.html","03cffbcb9d0d7ef843319b9358fdce1e"],["/tags/NLP/index.html","d0c16713f4a36ec17fe55b30ef06859e"],["/tags/NumPy/index.html","b15868f6163d430859b102b9418f2df1"],["/tags/PyTorch/index.html","5fb61eb2f5bd5306759fe492cf52258e"],["/tags/Redis/index.html","8db6b8d35186c0abaa1cf485428e6453"],["/tags/SpringBoot/index.html","766b580ae42fe3f68e388dd763be039e"],["/tags/Typora/index.html","a9ae9f96b19a07cc931f484bd277c9cd"],["/tags/Vue/index.html","51d262ad49f652423d268dcf29dc4c88"],["/tags/Vue3/index.html","39f75fb9a67dc323297f8d99625bb9a1"],["/tags/cpp/index.html","c12fc79694876bc8179f4739b80f05fd"],["/tags/cv/index.html","09861f6b40fcaf14db2cd8096b1e0f42"],["/tags/fastai/index.html","c132fe6da652aa10ff4c61be1cc798ae"],["/tags/fastiai/index.html","2bebec85e19589f3e24e9c5c09cf4daa"],["/tags/index.html","f370e8efadf3a8bb773714ca0ff1a9d6"],["/tags/lambda函数/index.html","1ef768cbf2c35c39039b0c2387f9a09e"],["/tags/python/index.html","d1757ef7234bfbfc6f4cadda48be0b35"],["/tags/函数参数/index.html","2203898225dfc4724143c52f066f09c1"],["/tags/函数式编程/index.html","4087f40a18b09f99b40146de5de42f2f"],["/tags/前端/index.html","0adc7a4a866da1c86bd7fa6a95361184"],["/tags/前端开发/index.html","b90d3ac0a3bd0581e704042c6bfd5ceb"],["/tags/协同过滤/index.html","1ba348a5d1d0aae2dba2b711a29afaf3"],["/tags/回归/index.html","0e9d6cf7e00d11a245724317cac7811e"],["/tags/多标签分类/index.html","ae8581507e1c2b8cc8904f029872ae60"],["/tags/指针/index.html","e476d4e689867412c883b061e4697470"],["/tags/数学/index.html","545a652df7f7e941d04566c0c170da9e"],["/tags/数据结构/index.html","14928f920629bcb0c34b157e2a03da5a"],["/tags/模型/index.html","772d2dccfe817cd6dbe6f0db22bf10a3"],["/tags/测试与异常/index.html","40e78af15242acc23b56b5dd8fdef927"],["/tags/深度学习/index.html","7293306bb34c8127c58c3474c32a924e"],["/tags/生成器/index.html","47535a0c82d2796203ca0b2975a12dfe"],["/tags/生成模型/index.html","3bb0aba6e298d7791d1cb2d61d707c56"],["/tags/神经网络/index.html","d1a2c1239dc23c263c136e8d3402abf5"],["/tags/算法/index.html","43a3ce087d3eafc111337bf360632faf"],["/tags/表格建模/index.html","a39ad89225e2b62266cb9e702175e771"],["/tags/计算机专业课/index.html","60ad4ce81b8fd5e91901ff35095c7bf4"],["/tags/训练技术/index.html","03f39c3dde88b5d6a54d08d70161ef2a"],["/tags/迭代器/index.html","fe354ea020d90e3310118674de5541bf"],["/tags/面向对象编程/index.html","44ac4291ff28bc9ee2a02546c269a999"],["/tags/面试/index.html","dfddc32aa7281e95c6dc44fd73e75af1"],["/tags/预训练/index.html","d6530158e974e237d5896f1dfcf4421c"],["/tags/高阶函数/index.html","d909c3480422468026179c00e1e6379d"]];
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
