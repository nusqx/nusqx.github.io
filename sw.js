/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","c212448ceabc49769145e64c4360f0d7"],["/2019/03/16/c-cheng-xu-she-ji/index.html","2c0b71ecf4cb5db3dc57ec26ec326276"],["/2019/03/29/c-zhi-zhen/index.html","c376f0249fe7004c2168f8ae44f20359"],["/2020/10/15/ds-algorithm-md/index.html","06afebe9f6dca90938d99dc5895492de"],["/2021/05/18/algorithm-md/index.html","ed54269be428ab4745ee6232ec90a760"],["/2022/01/12/python/index.html","2bcc0cd3e5ee7981c37f0e176cef22ff"],["/2022/01/16/python2/index.html","a8910af92b37c4beba9006cc7046777c"],["/2022/01/19/python3/index.html","ba6aa1da5cfbeb71bff1b7966e5f0850"],["/2022/02/28/c-biao-zhun-ku/index.html","7bba6909f720dfa22cb1018722482ce1"],["/2022/03/06/cpp/index.html","21b2c50d52b53a1f9081aab13e3a8b37"],["/2022/03/19/python4/index.html","e2ded33132e3fee415d683127952846e"],["/2022/03/25/lambda-han-shu/index.html","d5245dad04cfa3262eba52e48dc8fc60"],["/2022/03/26/python5/index.html","ddca0df7a1bf220536775617aaf9e912"],["/2022/06/02/python6/index.html","f501b3aa69fd3d1c73f0cc10abcbe4fd"],["/2023/01/06/python7/index.html","a22cc08c0d81efff19629ffc9cd5065c"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","9aeddd9f39a15aa1519a10d6d73fb795"],["/2023/04/16/machinelearning1/index.html","16f4bcf9bf1846f50cd04b27ca813e4c"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","39b82177ddb7acf89805f3707718fd7f"],["/2023/05/26/db1/index.html","533daab5842dd6b92f497d42795826a5"],["/2023/05/26/db2/index.html","e5dfae2986cd789f0e39803b13232e1b"],["/2023/05/26/db3/index.html","9f04d3feefe9d3389fa5d619c5b7ed18"],["/2023/07/01/db4/index.html","6378c1f538aa9ae24003ff79a5538759"],["/2023/07/10/db5/index.html","0bb95ed69dbddbceede61daa86791dad"],["/2023/07/18/db6/index.html","95cdab8b1e543812a28ff5f0fffe5978"],["/2023/07/20/db7/index.html","eccab1e8b6ce737450623e51fdd07c2b"],["/2023/08/08/python8/index.html","37fed11d6c98b5a37b6ec4b65a884b2e"],["/2023/09/05/deeplearning01/index.html","6d0f55523c7efd81a2b985ee7e74c9b0"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","7b5e50ca1dff864975e9892b28d1f59c"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","04b191c211d0b9cb249ad5c2beae5f08"],["/2023/09/26/springboot-0/index.html","a14cf37bc285b82c71429bd0be8db18f"],["/2023/10/13/cuda/index.html","3a58ecf6f51af4773c227d185fdcec57"],["/2023/10/14/cuda-python/index.html","954834e9346cff2b071add586ef75ffe"],["/2023/12/21/dl1/index.html","7d768410d439695c87cfbe892b5fa06a"],["/2023/12/22/dsandad1/index.html","d9b147be86e0efe5831ad0b1bb0ef2d3"],["/2024/01/22/dl2/index.html","ed98fda46efd101b262ab314582884be"],["/2024/01/28/production/index.html","0b0f93650881495b579c351ee67c999d"],["/2024/02/25/mnist/index.html","73cba0c6d0a0a1b4049a1689bddf1e4a"],["/2024/02/26/ner/index.html","ab35097909cba8ecef12217bd4f257dc"],["/2024/05/18/springboot-1/index.html","db040e249aa75ecbe65a5d20860ce1c5"],["/2024/05/26/multicategory/index.html","9b96c75f990f34176888743b347fd634"],["/2024/05/28/springboot-2/index.html","e20f962acd19726474331d8b6e9218d4"],["/2024/06/02/regression/index.html","65314e1d77d6154f2279046e3b418bfc"],["/2024/06/03/imageclassifer/index.html","d32f691d513f0f56f74568fbe33e9e77"],["/2024/06/03/nlp/index.html","ab372a03fffc89045beddaa9259418d3"],["/2024/06/05/springboot-3/index.html","20bbc5ad7378a9044914700b62a6bbfc"],["/2024/06/10/trainsoatmodel/index.html","a6fd74727a06602690dff25cef1abde7"],["/2024/06/15/collab/index.html","cf7fbae36914853ee4bb78abb218df1c"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","d6b7d6308583c1204728205ff16ac013"],["/2024/07/04/vue-qian-duan-an-li/index.html","fc8e0c75119b59571d5b8f88aec0e81a"],["/2024/07/05/element-plus/index.html","459fc3b80eeb8d0977224c03556a29f8"],["/2024/08/10/vue-kai-fa-an-li/index.html","7a0914bbad3f70824f44983aaa517bdb"],["/2024/08/26/ddpm/index.html","6cf43e0d4a8ba6b0342f707d1389ff37"],["/2024/10/15/redis/index.html","51688361e5cb9e6575d9aaad0ef04518"],["/2024/11/30/leetcode11/index.html","9c3feeb70448bf4925578d91f5285d71"],["/2024/12/21/tabusearch/index.html","5cb843a37e8a0ebf7909e42d0c6329e2"],["/2025/04/01/hexo-bu-shu-dao-hua-wei-yun-fu-wu-qi/index.html","6b3ca9315b42155d370b45fdafd7dc76"],["/404/index.html","2e0270950438c4e1cee875825ac8a517"],["/about/index.html","7e414f99823d21a03fa18056860e4056"],["/archives/2018/09/index.html","b645f0404f170495a280dab0252617d3"],["/archives/2018/index.html","458084c47ec7e664a99c42fcc5d49541"],["/archives/2019/03/index.html","8acd95fac389728204f7b5fb4ecc4b9a"],["/archives/2019/index.html","f706c8757a479e8a84079dac743a2de7"],["/archives/2020/10/index.html","7fdead8462d0612f6ed1efb56d56b785"],["/archives/2020/index.html","2881af5033c867bde25ad31a487c1a40"],["/archives/2021/05/index.html","ebb71aa233e0dda167be518ca4f106ff"],["/archives/2021/index.html","161b7880bfea830d728c8e9d03076800"],["/archives/2022/01/index.html","ecc82e6102ea425e07733d9b6de95c23"],["/archives/2022/02/index.html","2a58bbbaa080e49d2c32fc38b4669077"],["/archives/2022/03/index.html","d0568da177de0b42face57122f9a1dc1"],["/archives/2022/06/index.html","71d78254ff18dcf10270bcf49966e902"],["/archives/2022/index.html","9e30372a2a1dda8844dbf7a06a8a1166"],["/archives/2023/01/index.html","6ca324d4659324d583deab7e33007a0f"],["/archives/2023/04/index.html","69e182549214798df76bb2c48e8495a1"],["/archives/2023/05/index.html","074627ffb46c09a2ce1a20fdab69ae0e"],["/archives/2023/07/index.html","50a692062d539b91a28f6ce1b59352eb"],["/archives/2023/08/index.html","229ed3086a02902c7b87e02644657e28"],["/archives/2023/09/index.html","c62b76381ca98780605e2aee9db75867"],["/archives/2023/10/index.html","9b751c308548433f3d9f22d82557c687"],["/archives/2023/12/index.html","569fea36e108efebaccec2b577ee3c41"],["/archives/2023/index.html","0aa418e57e61c2ae20a0d71065d8be80"],["/archives/2023/page/2/index.html","76a3e1d3a0a7385d117bb6853f16cedc"],["/archives/2024/01/index.html","7bc6ecce9934a13d3ddac88dd1d8edda"],["/archives/2024/02/index.html","f66a9b38bc0d98a400d2010a5dcc3086"],["/archives/2024/05/index.html","f9af26fb5823472d0fc1e2d0e70d0875"],["/archives/2024/06/index.html","d1079ff30fd0d4b4c5a79ea796ca4a9c"],["/archives/2024/07/index.html","fac6906e32215a564e0ba9a41d2589e2"],["/archives/2024/08/index.html","53092a575cc7a91439f2cbecd10828f1"],["/archives/2024/10/index.html","242e04a590046b530a8d615c26cf3710"],["/archives/2024/11/index.html","df7701876da48046584d41e996dd8566"],["/archives/2024/12/index.html","26a19fa7fdde0051a898a74ea9d1f794"],["/archives/2024/index.html","f0597be7e5dc57d1a070386f966de3d9"],["/archives/2024/page/2/index.html","d5cf58b6ca944c34f7049d63ef94186f"],["/archives/2024/page/3/index.html","48b88b53e7ef6aa560d3078f68872a86"],["/archives/2025/04/index.html","442db3045e4d3b8a95a1d2e67b104f3c"],["/archives/2025/index.html","4bcebb0e1a54d85629109aaf37e51712"],["/archives/index.html","add2690afd5516ef6d40e6b93cdd8139"],["/archives/page/2/index.html","f54259f0fa5b0f69996d892056ef8f84"],["/archives/page/3/index.html","7cc7ba884eba463e4abf2331bd355cd5"],["/archives/page/4/index.html","9ad1794db6bc2480edc43c5986dd8b1f"],["/archives/page/5/index.html","776d037b7c1e2188b739315a4c4c3494"],["/archives/page/6/index.html","3b3fb12c5eeea441c64b7147429e5cae"],["/categories/C/index.html","811e93cb57094345f8813d99ae992011"],["/categories/CUDA/index.html","59f785cab5a2c753107d1878fd710133"],["/categories/CV/index.html","f7b4881a895978b55b8b8fa8b19ce5c9"],["/categories/C语言/index.html","411d5cf65551ef50edea11c5669b6abb"],["/categories/LeetCode刷题日常/index.html","1055dc37808eea81f72079ce130b42a2"],["/categories/Markdown/index.html","d1cfb5a4fdcdf10f1109c95aef12daf9"],["/categories/NLP/index.html","7de92478f18398ff1c1f5da515fe5d63"],["/categories/Python/index.html","c5ab69c789419c81c48a0a2955524227"],["/categories/SpringBoot/index.html","9d1a47a4c5858e94cbe77b8e87a02e1b"],["/categories/index.html","66e47e57d18137891aa91fd8e90545e8"],["/categories/前端/index.html","26dfac2e4da00df19a940aed0f2bfc04"],["/categories/协同过滤/index.html","f3b4f6fb4a225016e2ca981a7c34b380"],["/categories/博客/index.html","12778f0762d19e82c7d4dbb93c43f7f5"],["/categories/启发式算法/index.html","09e956203a6de089e7bb3e500b4bb452"],["/categories/数学/index.html","dcca34dcbea22a9a7cd80b1cc36a9101"],["/categories/数据库/index.html","95ef8eaf5a4cb3fc9714e606b200eac7"],["/categories/数据库系统/index.html","102154e8ddcc14c39e5e3fe9cbb79184"],["/categories/数据结构/index.html","b0f2cc499645cc3a4291f26d54c099f7"],["/categories/深度学习/index.html","491a1d3be6367986f1cad21d70546fe8"],["/categories/生成模型/index.html","4d4f35dd227c6cd29f48abe547b2f6bb"],["/categories/神经网络与深度学习/index.html","71c305d232d11aba1eb545323afeba7e"],["/categories/算法/index.html","90ed578ff009f79a06e231ebafe686bc"],["/categories/训练模型/index.html","5a101ebeaacc3165fa9b225e2a8cb9c1"],["/categories/面试题/index.html","ed0b118b7a82c3ef9eb6a332b964ffa6"],["/contact/index.html","c04feed42326d861704a531c0438a2cc"],["/css/barrager.css","76c3ecd1b029293ec9e60cf114c0d277"],["/css/bb.css","a1d54e8585189bb4db1d6ffee1c5a88f"],["/css/dark.css","ab77210cbd36ae7c10255c2af7a467b6"],["/css/gallery.css","d39aa845ef3083d0cd34ef51c2de893a"],["/css/gitment.css","f616135c87ec59753dde03ab7f91e34a"],["/css/indexcover.css","6945f69da2766f459ee648cc0eb87450"],["/css/matery.css","06e1aabac471039ffda501c1a68f6dad"],["/css/my-gitalk.css","280ff53a5c99223c0d788b97eb31121a"],["/css/my.css","ce82d05c58bd0ecf3ae2ba756ab4d4ae"],["/css/post.css","9b7f369106dd009f664f1c95b9072abe"],["/css/reward.css","73e31259f4c669744bdafb97e23fe2ad"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","918f9263bc520c3d018c37f0d21aef19"],["/index.html","3f08fa8076daf25b6af479db7aafaabe"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","4ffd31142d42c97cf81ab38d9db1e32a"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","1cfb5a9dbf80624fe0dc0e2214f436c9"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","dbfdda44b03f0a7c8b52f3c1cdcd5a0a"],["/libs/gitalk/gitalk.css","d82a13e3e557c6b1d86730abde435f4f"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","88eceb3661956dc4bf27a606145e8d93"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","975559864543639cc71c96b1d47a7e3f"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","98c2f881df2a16651b51f1ba15f25787"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/10/index.html","8b5475f32c9d527109bf7b8cd283c54d"],["/page/2/index.html","881d90d5a4ba3ba4894e02fb7f676d5c"],["/page/3/index.html","6b9a71b242705d751e29d83b4c25a92b"],["/page/4/index.html","ff88da251a1951d0ea388697850a37e5"],["/page/5/index.html","81c240e207560dcb2d71f7a36ab6a0ee"],["/page/6/index.html","3536f53b5b2a21b684f3f48b2ad459ca"],["/page/7/index.html","a7080b4f4c1db68e655ed497f8652d38"],["/page/8/index.html","5da8988e1ed60b726041a32fbf9507a5"],["/page/9/index.html","9a95cce6186fe725dfaa2cf8acdfde08"],["/sw-register.js","20b4e60131daa44b20c4cd9025a0d355"],["/tags/CUDA/index.html","63934abd7f823c5b434020538c443cc8"],["/tags/CV/index.html","b6fae0e4a016ead8c919d2619bc89391"],["/tags/C语言/index.html","a74c57b1f20ffc58e30c2445ab2b3989"],["/tags/DDPM/index.html","200d2db0d044a311003cf56cfc7c7cf6"],["/tags/DL/index.html","293e764001be4250e860722761bf19d1"],["/tags/Element-Plus/index.html","0b5ec124250cb18738246379adaf9ff4"],["/tags/Java/index.html","9b341c1e96040e88cc0a31ffb71567f1"],["/tags/ML/index.html","98b6763953538e77d8757110e6cce28c"],["/tags/Markdown/index.html","7204992989e6b00942bf5381523de3de"],["/tags/Matplotlib/index.html","a771b78676bdc94f74bc3b5aa40b6e71"],["/tags/NLP/index.html","dec8950469309640cbf3aa74c98a75db"],["/tags/NumPy/index.html","efce1d687bfe1a23c192c434f1a73ce1"],["/tags/PyTorch/index.html","1a808cce693fb88c80bc08b409d29212"],["/tags/Redis/index.html","f73104f6d950220247b12294d418b60f"],["/tags/SpringBoot/index.html","dea247e43a7d5869bea0bba3cff8af19"],["/tags/Typora/index.html","5fc2232e1950afb2f092fcae0bf023c1"],["/tags/Vue/index.html","3d91bee76df1c125c765b8b5db9ce708"],["/tags/Vue3/index.html","2d9177037885d641a177363ba33a859f"],["/tags/array/index.html","575416ad2544825eb4b501bd2c8ba6a1"],["/tags/cpp/index.html","8ac61b16636233843b28ae943447e5cf"],["/tags/fastai/index.html","160136f56567a78e202a677f6438efd9"],["/tags/fastiai/index.html","6332ed89d5e1e7489de306f175a9cf3d"],["/tags/index.html","3779cfac5afb867c879c34b0cc458d0f"],["/tags/lambda函数/index.html","73a2dd324df82075a3557e2d6e3451d2"],["/tags/python/index.html","aa95b05dae75bc7e475d2fcb8f62ef5d"],["/tags/two-pointers/index.html","358d711a7a80ef621dc3b13f6870e626"],["/tags/事务处理/index.html","5b7c0de922067017e68d8649cb74bb22"],["/tags/优化算法/index.html","c25b0c19e2e4a713734a255a926759c9"],["/tags/关系模型/index.html","40330741ee4d256778c7c889ad3a394c"],["/tags/关系模式/index.html","3c706687b00305951394e5d65c3d0351"],["/tags/函数依赖/index.html","5d67b5c3e9e347475776972b28356556"],["/tags/函数参数/index.html","f20e31390a3d97a4dcf68a0822564bfc"],["/tags/函数式编程/index.html","4bbc87850de0e0310c399b473dc089fc"],["/tags/前端/index.html","6f4cb3d61e5348c9772b322a98ddad8a"],["/tags/前端开发/index.html","939289f428be9af3bb8cae2ebb5b727b"],["/tags/协同过滤/index.html","75c1844a273dd8534ba9882e980396e8"],["/tags/博客部署/index.html","f026dd0a6807684cc5e0eea6768953c9"],["/tags/启发式算法/index.html","d2d38d502c06b4d5d7064eed32af0421"],["/tags/回归/index.html","6d363c153c976edf0a83604e5f86f7f0"],["/tags/域名迁移/index.html","507688a0925345123a19d3ad65663485"],["/tags/多标签分类/index.html","1e1e161806ac954fa0e9f73235640022"],["/tags/并发控制/index.html","cb3bbc7d3b10e749dea6543717f5177f"],["/tags/指针/index.html","17c008c9f9247e82774a7218b1729ffe"],["/tags/故障恢复/index.html","a8a75874a7cb0eddb82b840a0cc96464"],["/tags/数学/index.html","372c77d2bdb5b92d281e82db283a5c18"],["/tags/数据库/index.html","ff10ef1be0270af207d2f810b96b02b7"],["/tags/数据库内核/index.html","c2c9d08b8b813ab3d2ae0ecc0f4215fb"],["/tags/数据库安全性/index.html","176c0a276168c60b4a7cfa304f2f6baf"],["/tags/数据库完整性/index.html","4ab315a7df4456298249f27baef4fd25"],["/tags/数据库语言/index.html","2b7774759e7f69e516e70c4cc0ba3cea"],["/tags/数据结构/index.html","1bfe1ac3db65c2ab6e7281744c626311"],["/tags/查询优化/index.html","714e27c8aa21460bfcc25a440615cf41"],["/tags/模型/index.html","986d9a1c77867691195d0ffe3b262483"],["/tags/模式分解/index.html","64169573c5a2bdb488911a89cc7ffa69"],["/tags/测试与异常/index.html","2d0c222d723f01b472aaa16ab580ae84"],["/tags/深度学习/index.html","c834177daac0e70d546e889e5d17a4cb"],["/tags/生成器/index.html","c0cd1da4a8d658c83121eb4b39415b56"],["/tags/生成模型/index.html","d61da7f574772afd9b0d7bf6b751bcab"],["/tags/神经网络/index.html","0dd9ad896a847c804497125fa9fa1ab1"],["/tags/算法/index.html","5cb424a910a366a45fd914fa8a52a2de"],["/tags/范式/index.html","73e0301cda5fed9f8e4f29a8071a326b"],["/tags/表格建模/index.html","1dc6bf938ae1a5fd0325a5858ef3ba6d"],["/tags/计算机专业课/index.html","e9511ae8c4042afa4f885373a60bcb8c"],["/tags/训练技术/index.html","8b38f09b59faf2a58c693c50f5ec68bc"],["/tags/迭代器/index.html","ca00e5330ad06984a66309c7e847c58a"],["/tags/面向对象编程/index.html","8c77950621c6b273ecfa91d5d29de546"],["/tags/面试/index.html","2c5dea9313cb5fa3c5e8befa749a9757"],["/tags/预训练/index.html","866a86e770319c62e16b82a08ec5cab3"],["/tags/高阶函数/index.html","852ccf04c41d15545e534ffd950e4efe"]];
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
