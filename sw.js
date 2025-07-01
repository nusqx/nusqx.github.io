/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","aa85abd626d3669c47d4a6fe74478280"],["/2019/03/16/c-cheng-xu-she-ji/index.html","4e88f9a3715e1e049a2b6c2a1b39aa1f"],["/2019/03/29/c-zhi-zhen/index.html","babb583027567f3c87771631cc03718f"],["/2020/10/15/ds-algorithm-md/index.html","b9335ce4fa6d3bc26a96e8a086bbf052"],["/2021/05/18/algorithm-md/index.html","31fcdb9124f478fbb435dc8a045b7288"],["/2022/01/12/python/index.html","0dcce8dfeaefe378cf89762f97e62d5a"],["/2022/01/16/python2/index.html","a26be0a245e4bf35bee4989e6e4c2ef8"],["/2022/01/19/python3/index.html","854271fa5b178fedc7c892f10dc7b0e6"],["/2022/02/28/c-biao-zhun-ku/index.html","ecdf0fe44c0dd5b4955b8b36d83a14f0"],["/2022/03/06/cpp/index.html","a82a435ba2de7558055441307514081d"],["/2022/03/19/python4/index.html","478a351e0de3023dfba0dc19c442e587"],["/2022/03/25/lambda-han-shu/index.html","77001e998c36ddf608fe7e8d67273cde"],["/2022/03/26/python5/index.html","dde53fbb4847a44001116e832dc2fbe7"],["/2022/06/02/python6/index.html","6a85be4d52d559515aa8517c37aa2943"],["/2023/01/06/python7/index.html","ce1033a7c1ea35592913525bd72fd52e"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","4f3e416e6159aee0d6de4a9f8ad735c8"],["/2023/04/16/machinelearning1/index.html","96ed22b162c337d4de83a4dfe5538d27"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","3504d34ee3414198f2d03699c2071868"],["/2023/05/26/db1/index.html","9205f65d3b7aeecf10cca05260243430"],["/2023/05/26/db2/index.html","c675d50abcca6f275aa0374fd9af5572"],["/2023/05/26/db3/index.html","7342914a689418baaec61efb9d87ba36"],["/2023/08/08/python8/index.html","aa3a415a5b313341a2294f5b25346a7a"],["/2023/09/05/deeplearning01/index.html","2bcea343dc0c9dd25ae4fe9702b049b6"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","1cb6117235ac956d91d3b9a2d73023cd"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","5393867daf3ba0ea6ec1bbd85a1df614"],["/2023/09/26/springboot-0/index.html","5b74eb1bffcaf46f3620daff21698a8e"],["/2023/10/13/cuda/index.html","2cdb517d9a334d43b232bcb9b74a586d"],["/2023/10/14/cuda-python/index.html","cf279d6efe7fd54fe8cd1f0809bbea1d"],["/2023/12/21/dl1/index.html","b00d9ef30ccfc8f5015259d010eea690"],["/2023/12/22/dsandad1/index.html","c803d0d6cd3963d13dd4717338b8013d"],["/2024/01/22/dl2/index.html","04257786579b1ac7f78a0142dfac8573"],["/2024/01/28/production/index.html","ffb9488eca418b17f2555368443bb76f"],["/2024/02/25/mnist/index.html","9162b6b5e1f87067553d468904eba1dd"],["/2024/02/26/ner/index.html","bf9d10ca53f4533865630b9fe77f2cc2"],["/2024/05/18/springboot-1/index.html","39ed093f546d0939f9dc13fe8717a250"],["/2024/05/26/multicategory/index.html","008342539db898ef163ea491c27858d9"],["/2024/05/28/springboot-2/index.html","cff0de94115ef3661d0c1b321e5a499f"],["/2024/06/02/regression/index.html","dde3bb325e22d0e61aad07d6fd80dfb4"],["/2024/06/03/imageclassifer/index.html","68e025196158657853ce759ca635c37c"],["/2024/06/03/nlp/index.html","f11cbd045a4bddd103e455c369946517"],["/2024/06/05/springboot-3/index.html","98cb183a378687c5bf9e0564d99f586c"],["/2024/06/10/trainsoatmodel/index.html","fc866f2cbaca6b66d43ecdcf9c62cdc4"],["/2024/06/15/collab/index.html","9fafb9c4c611662a7fe5dacabc7544c0"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","c2b82a1514b71c8ec58deae3b9a5ccec"],["/2024/07/04/vue-qian-duan-an-li/index.html","15ab0c346181bb0891e0b5225bf87d81"],["/2024/07/05/element-plus/index.html","26dcbbb824e34cda7af70a2733c71498"],["/2024/08/10/vue-kai-fa-an-li/index.html","b1bf045d808fa5e6c07291b0ef485491"],["/2024/08/26/ddpm/index.html","f054344669568c30d3795e298cc00213"],["/2024/10/15/redis/index.html","3b205bbdbff822092b336fe3db0bed22"],["/2024/11/30/leetcode11/index.html","6daf28af6c099ea5ef8239eed93a8883"],["/2024/12/21/tabusearch/index.html","a10158e2220a3cd760d8dbf472353748"],["/2025/04/01/hexo-bu-shu-dao-hua-wei-yun-fu-wu-qi/index.html","061ac0900158709683b44c17f6250c76"],["/2025/07/01/db4/index.html","b7d1c9b6e1dd7186b3f2650781ca92a2"],["/404/index.html","c86690674f8d8ddae626a0db79e5a95a"],["/about/index.html","a9010a9b734712da974bb0b5a723eb1f"],["/archives/2018/09/index.html","7498261cc57021012fb6713672ca25aa"],["/archives/2018/index.html","69751330448fa1571d302fde29627f92"],["/archives/2019/03/index.html","9e6bb338e888b9433fcc519a6e3496b3"],["/archives/2019/index.html","c8b0999e88a30007cbb22409a717c131"],["/archives/2020/10/index.html","16393bab42fa0c13764d9c7ccb97d700"],["/archives/2020/index.html","9f336d2b31372a81782f37cf090bd7a3"],["/archives/2021/05/index.html","890986481bb17b7c7106256f66c64301"],["/archives/2021/index.html","96c8bc04cc6bc6dd0f515ba0d4db3a74"],["/archives/2022/01/index.html","f63da54fedd05294e532fee724e1b684"],["/archives/2022/02/index.html","0c88f5cac93d5137fca6a0d8691d61a8"],["/archives/2022/03/index.html","d27f51d032976dc88617fb161673684f"],["/archives/2022/06/index.html","cfe153df9adb171dddb8534f73dc902a"],["/archives/2022/index.html","06db4a88eafab97b6712172f2099f615"],["/archives/2023/01/index.html","9367004fb3d1d864737c5b7a81a8e910"],["/archives/2023/04/index.html","de39f42478eda46c5182af010fd31a22"],["/archives/2023/05/index.html","6f9eaf0d74ae7187f69177c2e6cc431b"],["/archives/2023/08/index.html","9758f4bbb5e7a6ecbdc2c4cc856aa8e3"],["/archives/2023/09/index.html","79af290f684382b521eb388a233659ce"],["/archives/2023/10/index.html","cdedcbbbcad0594a1c728bbb6613bc4a"],["/archives/2023/12/index.html","57839a1b0c86fe3e197d8ca6716489d9"],["/archives/2023/index.html","0aca0d1f9f11c5fbf9e6be2c8f4d935e"],["/archives/2023/page/2/index.html","b400c590cb50007960bf70c3dc4fd41e"],["/archives/2024/01/index.html","5ebb4acad66b5ce1da80e86f86f56af8"],["/archives/2024/02/index.html","52303419a972f5e97bf2c4bec4aa57d9"],["/archives/2024/05/index.html","4f5b9df44b3b9750783b0b554be55b5b"],["/archives/2024/06/index.html","7794c015fddcf08cd39017496df45ce8"],["/archives/2024/07/index.html","87f56d33032eb08fd65743857d349da9"],["/archives/2024/08/index.html","4926380d06cd2caa5472adc697366b44"],["/archives/2024/10/index.html","5521edb5d7f9f540bf3c8963e1c09910"],["/archives/2024/11/index.html","8e5c75464b4e2d38457af6429152825f"],["/archives/2024/12/index.html","6712083eee62d7188c71f33f6732ebb5"],["/archives/2024/index.html","df3c31695f5520437695359774aeee56"],["/archives/2024/page/2/index.html","a1bc8b6a3bfc274aaaad1faba590cc12"],["/archives/2024/page/3/index.html","e1a162ea7283017517d1c82bd13fa4c0"],["/archives/2025/04/index.html","6ba8926ce31958b84f8d512d3b653e9d"],["/archives/2025/07/index.html","28e71598c0d3e3b3d210bb2510ec79ba"],["/archives/2025/index.html","7f8e0c7e32fc514b2922568f61c243be"],["/archives/index.html","189f4822792da7154ec996ed38db3a49"],["/archives/page/2/index.html","ee3b296ac4de05ec257c20053c5e6d33"],["/archives/page/3/index.html","c4edd84cdb61005845ad2c69a026f476"],["/archives/page/4/index.html","443a1f4d22f04efa306cebdea71aac0c"],["/archives/page/5/index.html","85b48db991f7ed6948a992dd4cfb136d"],["/archives/page/6/index.html","317e8f6f3ddc57be401124760f51ebf9"],["/categories/C/index.html","629ddcbe629b30518f4ab6de116b5986"],["/categories/CUDA/index.html","0e87919d835d0719b41c008376bedeb4"],["/categories/CV/index.html","3b935407878a5fc5f4435ba9c2448d24"],["/categories/C语言/index.html","2e8571a4728ed81a76a94aedb526e499"],["/categories/LeetCode刷题日常/index.html","e5842fb9ceee568db381720f2eb93a27"],["/categories/Markdown/index.html","0b1a7498d9112443d2f96717ee4d0933"],["/categories/NLP/index.html","987e4b163077fe4357500f9d8079c46b"],["/categories/Python/index.html","2e9637f7384a09849423efd181a56b60"],["/categories/SpringBoot/index.html","9a362e0916c801932c8bc49df9faa012"],["/categories/index.html","c6ca3e5d3a60ad3019ba9d2bc9932eae"],["/categories/前端/index.html","5f8b97460e0179b9cc422b819c4b25d3"],["/categories/协同过滤/index.html","82a6dbad260bc60dbed264fe255f44c0"],["/categories/博客/index.html","ab064da555a702c23a1e52b682333669"],["/categories/启发式算法/index.html","f2ace59c593c299140393d71dc9f9b13"],["/categories/数学/index.html","f8997b021ca077f7826babcb56b1f21e"],["/categories/数据库/index.html","037d61ab76c35eb8a1621b45456bf79f"],["/categories/数据库系统/index.html","298290cbc1bd06d69be0b33102d0e810"],["/categories/数据结构/index.html","ea68dc1ae1b1d80cd92a6494e4ca83f6"],["/categories/深度学习/index.html","29efc563efa9d852d6c24183bb4675e7"],["/categories/生成模型/index.html","8852f346e1628757a4739a7eb8efeda9"],["/categories/神经网络与深度学习/index.html","ae6d58ea5121ea89d215f3821849725f"],["/categories/算法/index.html","916b5df6af2799da44bc8e88020f34c6"],["/categories/训练模型/index.html","4b0eaf0ae9ba37924624c57ba5402eed"],["/categories/面试题/index.html","a69495f24e3ec2fa1ebeb377a10f7b1a"],["/contact/index.html","5fd46e5330035e7816c3e93f0f3a2904"],["/css/barrager.css","17915619be1c99db631395705e14aae2"],["/css/bb.css","b7c6a82f31d388d2d526af255a0b433b"],["/css/dark.css","66af7688eac18316ee6cc2f827acaf60"],["/css/gallery.css","570801bee8bb691a104c36ae268ea1cf"],["/css/gitment.css","acc3a376e118c479d9540629c24d1990"],["/css/indexcover.css","b4d2ffe7ec6035e10439816f8944b741"],["/css/matery.css","19f8aaf9ad5cdba9f4186fc2bdc95b0c"],["/css/my-gitalk.css","e3b7adfe895597d7df574841ed33f200"],["/css/my.css","a5562b19f3a3c466e0424751d6d456b7"],["/css/post.css","75b3d6c268a650ae87320317a1e310a1"],["/css/reward.css","092050cbf22c04686ca5507f27bb3d4c"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","cf79f5d67964bda7117e2cc04e3ca4f6"],["/index.html","718ff3a219d4e3e95f7d7b145cc52444"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","b7d48dad6af153f25a78c122d12b15b8"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","8ed1663031172b31b789e3da5709a661"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","0d4f34d818c95a08a4dfc80bec9dc0fa"],["/libs/gitalk/gitalk.css","1e79e7cba933f0f0e530b12a5e912abf"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","a6c940cef71fcaac37625c6e91c2414f"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","a571c1a52025ab57bd6c5066bf3e37c6"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","d4468aacaed152a6a9ae58787987d7d8"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","4b16262b046f38a26bb54ad8051b80c8"],["/page/3/index.html","4864aee2ea87c7134779720218048b58"],["/page/4/index.html","6b4c47d775c0e281e3208eff4eff3949"],["/page/5/index.html","301589d0c5a9d515282260282be43d18"],["/page/6/index.html","f85b490774530b81390e7b55097f6bf1"],["/page/7/index.html","73d250d6ee5e5b52f70a0e222c6b2561"],["/page/8/index.html","26d07764146267d12e2013b41147086c"],["/page/9/index.html","1d509c84390fb904fa4d01f57477fa90"],["/sw-register.js","62f542fa7af949dcb4af80a6a29fc6c4"],["/tags/CUDA/index.html","6e9a87a814c768fc12b498162bc6e4a8"],["/tags/C语言/index.html","a6f14cb1b5190bd753e3198bfdeb42c8"],["/tags/DDPM/index.html","c32df956f398f2fbfcbe0ff5be8f9df6"],["/tags/DL/index.html","a25640c0e60f8c2d96d38526275cf90c"],["/tags/Element-Plus/index.html","8771a217d2a147e26e23af7262aeadb2"],["/tags/Java/index.html","fb516dfaae973dfe78cfebf06470f104"],["/tags/ML/index.html","e246439a44a6bce5a6f225aaa7593453"],["/tags/Markdown/index.html","6fdcd66d67bf4c274315f45fe5ace95c"],["/tags/Matplotlib/index.html","aa9f5438d1949316858d412639d8e604"],["/tags/NLP/index.html","de9d30e452f50689e193e8800b154b2c"],["/tags/NumPy/index.html","85f2f8256018cb40900e39309d866580"],["/tags/PyTorch/index.html","335647dfea667b4186f5b6638c18d4e9"],["/tags/Redis/index.html","027fdb8662d9d42c78c9dc97829a6316"],["/tags/SpringBoot/index.html","e379a3893fb1748e9894090ebd1f710b"],["/tags/Typora/index.html","b5443671715c928878457f32fdca568d"],["/tags/Vue/index.html","39eea8ea12fad98fb726ecf76e9ea6ba"],["/tags/Vue3/index.html","02d3f94136952dbce907ec72dd1613bd"],["/tags/array/index.html","ab31f9cc1c35863bfe94797614a0a19c"],["/tags/cpp/index.html","9a8759282920cdd03a6a429331ac5b22"],["/tags/cv/index.html","5bb5245ddfed503093db05efdbe69d14"],["/tags/fastai/index.html","2087e085d1788278cda656c3cd926425"],["/tags/fastiai/index.html","99245afd8f47cfcdc7e09927c7e109ac"],["/tags/index.html","4ac3e7f296fcb827f5a9a8ead5720bfd"],["/tags/lambda函数/index.html","a78b865c89fdce51184bf5a23e0c1cba"],["/tags/python/index.html","2db3fcb2618a26bc0f5a85061aaa26b3"],["/tags/two-pointers/index.html","7e8a1c7c738deeec8f0c2cb60a7bddcc"],["/tags/优化算法/index.html","f2b36cfbd57848efdedbf7d9416bb479"],["/tags/关系模型/index.html","2c1b47a398eb88302b816ec15fbbfdc5"],["/tags/关系模式/index.html","c813325d07aaf4cc2a160a7fe3002bfd"],["/tags/函数依赖/index.html","df43316cc85fd0af0fc8e771e6771e96"],["/tags/函数参数/index.html","eea7ac4f343a1b06ac3cc1a32c294397"],["/tags/函数式编程/index.html","238c0c777eb15001243bd97af3afa846"],["/tags/前端/index.html","adbc29f76ffdf57ba0214a7df3c3ccba"],["/tags/前端开发/index.html","65946345ae7b31213d7459469635d769"],["/tags/协同过滤/index.html","36a5b91772e67a073a9b87e9c6871d2c"],["/tags/博客部署/index.html","3c7047b5eea26ca0394b21bfebba4f93"],["/tags/启发式算法/index.html","8163fbe54bb5408c5469d0f6c503a3d8"],["/tags/回归/index.html","e4575e693a3a90de793922de07573079"],["/tags/域名迁移/index.html","d140c5cad87ddf7d1ffb403d0f69dc24"],["/tags/多标签分类/index.html","7c344c45fd445646e77f93209fde2844"],["/tags/指针/index.html","e6b561574e4d1b650cad82132a543252"],["/tags/数学/index.html","40520192e78c9cdc32fd21e2b08ee08a"],["/tags/数据库/index.html","01e323742a9124383f8b9393d2fb9c8f"],["/tags/数据库安全性/index.html","f572f46705f92bb110992c3826aa05f4"],["/tags/数据库完整性/index.html","b62ae28428793ee7c4d0f5264cebf7a7"],["/tags/数据库语言/index.html","f4762ff8f8635b57f3fe6ceefba6e607"],["/tags/数据结构/index.html","a3482c90493adc35e5667d263a34858b"],["/tags/模型/index.html","5f60f20fa5e15a826e6e93668681ba07"],["/tags/模式分解/index.html","208d726070a7b1032cc63837306ccc80"],["/tags/测试与异常/index.html","29116f7662a3b4ed9240b3b6be6f0bf7"],["/tags/深度学习/index.html","42a3e6ea93bd9b876df209ed1eaf3912"],["/tags/生成器/index.html","55cdc418d0fb1b2f0f5565c10d4d03fb"],["/tags/生成模型/index.html","93353814cb282989526fe4e0f80ba606"],["/tags/神经网络/index.html","324768c499b4cefd2dd8e037f2639e59"],["/tags/算法/index.html","b686f0299996d9be2778aaf373747377"],["/tags/范式/index.html","8e46dcbd5171cb3c876a1931e528713d"],["/tags/表格建模/index.html","b05b74d025d045f707ae61a8b3d35d4c"],["/tags/计算机专业课/index.html","800fa6717fc9b0c36253c849a8b8cd35"],["/tags/训练技术/index.html","c3d9222b22c5979b5a198ecce3ec6cf4"],["/tags/迭代器/index.html","6c322f728c7850f96339487ef15cf6a6"],["/tags/面向对象编程/index.html","be4d64aa27fd04c13f6720576925602d"],["/tags/面试/index.html","6a0967b82f74b762098ae26010873369"],["/tags/预训练/index.html","208be5f94c2af6a1e42d282c4f3935a1"],["/tags/高阶函数/index.html","c69a3f2d13f12322350fc230dd99619f"]];
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
