/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","214e4408b2bcef9c103c75b7f762de01"],["/2019/03/16/c-cheng-xu-she-ji/index.html","06f798e6937544910ad2a78553bfc8c3"],["/2019/03/29/c-zhi-zhen/index.html","4a5c12baeb7822e07ede2bc6966b17f7"],["/2020/10/15/ds-algorithm-md/index.html","fedba155393295507861ae1e43aad479"],["/2021/05/18/algorithm-md/index.html","f0d067990a904b80fb567e286f8f0630"],["/2022/01/12/python/index.html","e2d0ba4d8c64a235079f7f4a727983a8"],["/2022/01/16/python2/index.html","5fb7fc052ec80da4d001665b1cb1c519"],["/2022/01/19/python3/index.html","5de3d915469d372412f9f207a7a4079e"],["/2022/02/28/c-biao-zhun-ku/index.html","2b1a8867e1eff56377e3972506343288"],["/2022/03/06/cpp/index.html","0c69878d7f010ea48ef4f6fd480b4b74"],["/2022/03/19/python4/index.html","7e1050cbcde406fecf577fb259e14431"],["/2022/03/25/lambda-han-shu/index.html","091f52c1a01f6e355500527fa95017be"],["/2022/03/26/python5/index.html","ecb93ffe0815e00ad3b97d5097c14c38"],["/2022/06/02/python6/index.html","9554cb53a0d356cc009ff332eb2e0f50"],["/2023/01/06/python7/index.html","7bb2e46e202d4928f28c3df82c184b62"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","ef7b3244932f8d7f4e4962170374a8b6"],["/2023/04/16/machinelearning1/index.html","8c2082cf5de5f3115ff7ad746fe8cdec"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","dd919fc0517fff1e487ccce6a17c80a0"],["/2023/08/08/python8/index.html","15031da9e3fa3b32a29153c36088a542"],["/2023/09/05/deeplearning01/index.html","3869e5955341eb04fd8b99bde13035a8"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","403204f7bff5f4b2eb151bbaa09dfba0"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","98f5e7ef8349a216905cdf0df08c9f09"],["/2023/09/26/springboot-0/index.html","d5d4368d41098bdcea41dabeb9e637e2"],["/2023/10/13/cuda/index.html","900e034d540ccbe9b5b42306e52a6a54"],["/2023/10/14/cuda-python/index.html","447284568a531130f930ec4552b748e7"],["/2023/12/21/dl1/index.html","55682a9d7d05f0e73af09fbb8d0ff65f"],["/2023/12/22/dsandad1/index.html","cdae5ef721c575aee6c7c49b4264e7f0"],["/2024/01/22/dl2/index.html","5886c9e8ffece6ff3f3504da8f8902fa"],["/2024/01/28/production/index.html","96cc3a114416cb6e20f54c290ef73d92"],["/2024/02/25/mnist/index.html","4e1726801dc8acce256180cb8503e297"],["/2024/02/26/ner/index.html","b23cb7803f98e5f0af8ea82fc7dc64db"],["/2024/05/18/springboot-1/index.html","e8938338d04a678a54eb4dd499234662"],["/2024/05/26/multicategory/index.html","d07951c2506630740703bc810c1a5b38"],["/2024/05/28/springboot-2/index.html","f2d3efecb47e4be1f4c1fc82be4c7f82"],["/2024/06/02/regression/index.html","6edc9be6c66ed92afc3b9e03fa8ac0ac"],["/2024/06/03/imageclassifer/index.html","597fdf87ba14b574f6ba8517b3bdbc2d"],["/2024/06/03/nlp/index.html","4a928bb9905378e00de2482d2a4bc5a8"],["/2024/06/05/springboot-3/index.html","fa3db7259bb7eacb0db1592b1254432a"],["/2024/06/10/trainsoatmodel/index.html","e33bfb3880d9f0905b956d8e80e30f7b"],["/2024/06/15/collab/index.html","f0bf687cae7c6b03276f041f131ddea5"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","119bb001d6ff8abf07becd42ceb8846e"],["/2024/07/04/vue-qian-duan-an-li/index.html","44de21d175302b71e5ae291f8e4bfc2c"],["/2024/07/05/element-plus/index.html","a68bbe50fe858c10cbceee24f019d5e5"],["/2024/08/10/vue-kai-fa-an-li/index.html","d5fc4785ea87ad67037064cf90ff383d"],["/2024/08/26/ddpm/index.html","57f1de0e455ba4a31f8fc26fc5d9d010"],["/2024/10/15/redis/index.html","8963ce7f8fbb42a96127fcbd327b5324"],["/2024/11/30/leetcode11/index.html","0f031ad726e1b111253859518e1b5cfa"],["/404/index.html","411f9c4259cd8258caaeca3b770a1c54"],["/about/index.html","632c2af956a72fec79c1bbd4eb8dd506"],["/archives/2018/09/index.html","0f56c6c37ee686aaa41d64963c803e5b"],["/archives/2018/index.html","6d6e9b9907bad79376558bdecc96f8ec"],["/archives/2019/03/index.html","837aa2d934dc41ea8702af6653638b96"],["/archives/2019/index.html","5b65900a769d461416ce75f317d9fe13"],["/archives/2020/10/index.html","7c87267526eafa9cdeaf83c26045bd22"],["/archives/2020/index.html","6965d8f983bdc2c4f890fd4aaeb7310c"],["/archives/2021/05/index.html","fdbc21f1ec027a2e16a080e1973920ff"],["/archives/2021/index.html","eda0b3a4e5f2673b553165f379faffef"],["/archives/2022/01/index.html","4df45963868d5cf5df15bbb881f7e9ad"],["/archives/2022/02/index.html","919bd851f7a0c92d176a4fd2dab6d5fa"],["/archives/2022/03/index.html","249aa8234433ee86b6b8c1f94960e3cb"],["/archives/2022/06/index.html","4a009b3e56b34be40c9c3fa69b3bd8d3"],["/archives/2022/index.html","9a045c844624d8693e6b6f5100f476c4"],["/archives/2023/01/index.html","c55de768899a308f1ec93cfa21f80d24"],["/archives/2023/04/index.html","72f38f152a2e1bdd3c7229a7b835e82b"],["/archives/2023/08/index.html","87ff52894ba2f7cccdbff282acdf3811"],["/archives/2023/09/index.html","3fbd0e1a02b045852f56a0f2df321a58"],["/archives/2023/10/index.html","dfd55174bd5ab4adfc1f4706499b6dec"],["/archives/2023/12/index.html","04c45135395d979c39fbdca2111ff138"],["/archives/2023/index.html","62d1f23193234f31b6282f29e733b26a"],["/archives/2023/page/2/index.html","29ad9107b2afcc288a8ac781a293bb57"],["/archives/2024/01/index.html","9310d183984477e7f3ce404851d35caf"],["/archives/2024/02/index.html","adf46402aec908843068acd81fbd52bb"],["/archives/2024/05/index.html","9613ae22e91c025606d5e723ac9d051e"],["/archives/2024/06/index.html","8b11566c04a4071ec2db36166c07e2d7"],["/archives/2024/07/index.html","64fcc20e101425bf38109738f89a5cf2"],["/archives/2024/08/index.html","e8a725b62d12469e71deb10e49a4037a"],["/archives/2024/10/index.html","29eb32a1de7a25d7ad7f0ee722d3c6bf"],["/archives/2024/11/index.html","5cbb998841cc54e3a2ba9f82b7187410"],["/archives/2024/index.html","ee973aaff5c1b51e75ad249748980215"],["/archives/2024/page/2/index.html","3769e6c3a369ee49fd74215fde54a1dd"],["/archives/index.html","24839046d86ca2411d6cd05d20816dac"],["/archives/page/2/index.html","9e252f5f7251bcb4195889f010a5f6b1"],["/archives/page/3/index.html","76157dba1d93e5d333c271d580c9419a"],["/archives/page/4/index.html","b73872e8331c22f8ddf9ecde0002f359"],["/archives/page/5/index.html","31d86ee6d3d60069d686ccfa41b7546a"],["/categories/C/index.html","69ef88b7177f203962c0d271a067be7f"],["/categories/CUDA/index.html","09fbd1552bdde3e2dcd28c3164174df3"],["/categories/CV/index.html","22675a4127baf4f6e6facd7320279b5c"],["/categories/C语言/index.html","c718ce5ca2d8e70b0c0b46abb1f17fde"],["/categories/LeetCode刷题日常/index.html","8b0cc566bae4c60ded2c032dbd7bc979"],["/categories/Markdown/index.html","40a901bd59580136dcf02bbd76f79b63"],["/categories/NLP/index.html","3afd840d78c484fc230feedf470be5be"],["/categories/Python/index.html","dac21d6027dc09806f9b534a32c6c58b"],["/categories/SpringBoot/index.html","78ad656a441138eb38b1baeb69354628"],["/categories/index.html","9bd7f48da7d93aa201308461715c3b10"],["/categories/前端/index.html","d6cebd12a1a6546ff7da8d0c156df58e"],["/categories/协同过滤/index.html","90d7f6e7f060769b7fb0fb327501faf6"],["/categories/数学/index.html","02dcea986a4addb28d0bdee4c8373253"],["/categories/数据库/index.html","2b7a3807e086fad1f6b240b8080ab7b0"],["/categories/数据结构/index.html","5ceeb2bab22a3e8adb3248152716b958"],["/categories/深度学习/index.html","799f2edcff950b3cf397ad57206fe94b"],["/categories/生成模型/index.html","3ac7a766ab93732073dc64815da125f1"],["/categories/神经网络与深度学习/index.html","11126d95d83f9abff5b9f43b5b1f2637"],["/categories/算法/index.html","70582b25c9da882bd26efd6512b87afa"],["/categories/训练模型/index.html","125d1983b13a95769d53e9d7f710017d"],["/categories/面试题/index.html","eb9df5cf8cbd80c65781dd7763c67510"],["/contact/index.html","5eed663b9b4ca6b6e3349c40199820f7"],["/css/barrager.css","0358616aba664cc5aeefeed554301a6b"],["/css/bb.css","9b2197c2250369253c0a1efe264bcdf7"],["/css/dark.css","9748eb61988dd2cda8027bbc701007d2"],["/css/gallery.css","0d44d00d28ba9948bd5ba66a5d575479"],["/css/gitment.css","3a97023aa26b099ebf9b340684244307"],["/css/indexcover.css","4355e4a65672f25b04153ddb5505ad4b"],["/css/matery.css","12e85c420b3f4292180f6d3172643e1c"],["/css/my-gitalk.css","be16f3a7c26d24c77dee066e77eb0c2f"],["/css/my.css","50b7d85b5f2f87bd90637aa700d081f5"],["/css/post.css","a96d54fd4fbb2e75b93c6baa9c8221ab"],["/css/reward.css","dd480a157990013f90ff61fd245f28e3"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","e73494e835951e674c424cf51d951877"],["/index.html","5062ee847299f4505cd19806e466f5b8"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","eb6493bbdb1cdf2f301caa202f6bc2c0"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","2cc6124685104aeb5b0f4c7d42b3a79d"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","e7e46d46d215ab5dddcec7655be4c631"],["/libs/gitalk/gitalk.css","32d5c84cabc961c48a685d814da5979b"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","2a875e7ca8c1f97b100713121f2524ff"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","4b87bc52dd53d743fe40af7a3cdb615e"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","8b1b4c2ae2612ddfd50653f75bbc4f48"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","f7f405cff2c2949b96c5e5fc3caaeb4b"],["/page/3/index.html","d2bf2002f4c00425d00b454a5e757305"],["/page/4/index.html","64e46aaf57719622b1d18b630dd23752"],["/page/5/index.html","684b856bb26f3ff03b4958eb812a0c24"],["/page/6/index.html","65e72f9d3e7ed6ab20e04601284013a3"],["/page/7/index.html","9ed9fa35abfdc967803b2dcbd9070f07"],["/page/8/index.html","24b8df7796228ac274873a578aa56b5d"],["/sw-register.js","cac1c6ac4acfadf2bead66d6eb84120d"],["/tags/CUDA/index.html","3c6928d5fe9cde3823621603c976c8c1"],["/tags/C语言/index.html","adea4c293d377b4bb92458da29dc72d5"],["/tags/DDPM/index.html","4706bf8ac25618f9c10f8a930f16fcae"],["/tags/DL/index.html","1a0fb92ff20360f081831991c207eb58"],["/tags/Element-Plus/index.html","387575f22e1645826c6404f10b0cce4b"],["/tags/Java/index.html","99d74b2d7df07dfe7e601934c7c89366"],["/tags/ML/index.html","fdf3ae0cfbbbd862a8491f6934526997"],["/tags/Markdown/index.html","52bdb1069919283e14d5e1a295349149"],["/tags/Matplotlib/index.html","5a0b24a10f31610a3c4421de1e08a8ff"],["/tags/NLP/index.html","86d0800da173f3a795d7eaa0db3bf1b9"],["/tags/NumPy/index.html","2dc60f485cd404c8265f219b193eb9af"],["/tags/PyTorch/index.html","d8022092eb481a1ae93570e5ff488e9e"],["/tags/Redis/index.html","71b3d6065ffae03218aacde44f0db434"],["/tags/SpringBoot/index.html","93841db9a997ccc67c78fb11d6e735fc"],["/tags/Typora/index.html","de7829bac0b9b7351cd34501750d695b"],["/tags/Vue/index.html","e5c6a792e9a68a8094d2c8d1ce798d57"],["/tags/Vue3/index.html","aeffe5e3a09f60e874351c51a3b23282"],["/tags/array/index.html","af74957b1fad80b5149bbe0c395d3dc7"],["/tags/cpp/index.html","c23b5a50056f87afdd7cc670907cefd1"],["/tags/cv/index.html","3a7c61b3b2cf74ddbbf4073fbe29df61"],["/tags/fastai/index.html","fdcc325a67ede44af4c9df3d377a97cd"],["/tags/fastiai/index.html","3718dca8604386a13dd95b91b8219de1"],["/tags/index.html","843e519306120cfa044994e1c57b957a"],["/tags/lambda函数/index.html","a0c5ef447f8cfad38fe833fabf087240"],["/tags/python/index.html","10513f5ee2d951e2bb3edd33d51fd4d9"],["/tags/two-pointers/index.html","586d52c3a001987716041aa4ee4e3bee"],["/tags/函数参数/index.html","aa41b136859e1121075e8ea239c99ac4"],["/tags/函数式编程/index.html","11f7cfab3464203db5198b3947d8c09a"],["/tags/前端/index.html","2d7adeb46d0c0d5f379ab41c5b5f17eb"],["/tags/前端开发/index.html","a1fe35dfcee32387f8a869aa464b4f19"],["/tags/协同过滤/index.html","a7a5bcdf40fc3f29148a596a82ab3e57"],["/tags/回归/index.html","702e946f7adbc3baf73c0c2d5157bcef"],["/tags/多标签分类/index.html","516abab5cae6f4a8cfd7a0ef49aabac7"],["/tags/指针/index.html","44ef7b6208ae31474faee280a6b24972"],["/tags/数学/index.html","19f6b9c64573e096a82bd725b0ad232a"],["/tags/数据结构/index.html","11690d7732575bba341ed1845c714eba"],["/tags/模型/index.html","cf695da137edcaaec7ac490def948a60"],["/tags/测试与异常/index.html","1a53daa04fdeea2dc21c444efbab43c9"],["/tags/深度学习/index.html","9e6e12041c0a1cd1a7a6812d4414348f"],["/tags/生成器/index.html","fcd41fa5bd328b51931e43ab38e0b959"],["/tags/生成模型/index.html","a38ad1b7471bc7bde9ff9140580cced1"],["/tags/神经网络/index.html","8fd4e71e0c83b46cbc01948663a799ce"],["/tags/算法/index.html","3e98fb06c9acb57dcf17af83d441d6d5"],["/tags/表格建模/index.html","409d02b13ae895a7f477d35811882561"],["/tags/计算机专业课/index.html","32dcbcffb46f53e0d56620b0c2296bda"],["/tags/训练技术/index.html","4f83176cb8a8e74971cc6fc40ec8a7ec"],["/tags/迭代器/index.html","df6d907754d60049569c0f74df1e2a0e"],["/tags/面向对象编程/index.html","47f897518ff89c93c1fffb922f8517eb"],["/tags/面试/index.html","c9a40a0b99cf450236ae707c17c04acd"],["/tags/预训练/index.html","c53afc0f8c980018f57666f374dee400"],["/tags/高阶函数/index.html","baada6151b8a37260b730d586f865d8e"]];
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
