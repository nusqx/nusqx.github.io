/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","448e4c319a05334cb01b9221dcc63a1a"],["/2019/03/16/c-cheng-xu-she-ji/index.html","ded155d1631b20b1828c2c574b50af52"],["/2019/03/29/c-zhi-zhen/index.html","44284b37ac2c144068169e241162ae2e"],["/2020/10/15/ds-algorithm-md/index.html","0cb2f80852b70af0f4f397317e7a624d"],["/2021/05/18/algorithm-md/index.html","8b2c6f9b3b31a6010ef500fc184762db"],["/2022/01/12/python/index.html","c6c3e82051ca5f306cf620643b4a66e5"],["/2022/01/16/python2/index.html","9f03c37a3e7c6391a08cfe0001f1e82e"],["/2022/01/19/python3/index.html","87bb5473f9d891882216ae8b97e5276a"],["/2022/02/28/c-biao-zhun-ku/index.html","0b760de4432089afb981308731aba649"],["/2022/03/06/cpp/index.html","4c9c16dc8c9ae20d35bf7367473580b8"],["/2022/03/19/python4/index.html","81f606dceef408190e34479122436481"],["/2022/03/25/lambda-han-shu/index.html","e062d9b38eb8df821c59ec6452f43665"],["/2022/03/26/python5/index.html","ef5076b8187fa147f4eb6f54b5b46d87"],["/2022/06/02/python6/index.html","add3f5f1b9ee5b21f4160dc5985a32b8"],["/2023/01/06/python7/index.html","ec841bae569144527e86256b6c015075"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","72e835d668328d423ffcac74b0f3d387"],["/2023/04/16/machinelearning1/index.html","54135ecaaebf3da51c025febd9abd086"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","3d35d8100689c887f3e3ea6328912765"],["/2023/05/26/db1/index.html","afe3b8d8428d729fe61a2c0379fa9587"],["/2023/05/26/db2/index.html","a415c114dd087c37262b3b380d54469c"],["/2023/05/26/db3/index.html","42ba99497f343ce56e3d2a0ff2342294"],["/2023/08/08/python8/index.html","c3574eabfd7273189929c0bd8a72f636"],["/2023/09/05/deeplearning01/index.html","eae75dfe9ee4b0a1918ed03156b82f67"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","91a6b9d4092b8eab8d0e820a5f068c01"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","40c84a1b8aa11f824b7b6b657f084302"],["/2023/09/26/springboot-0/index.html","dbff2aa0edcf68c217537208556d9c7e"],["/2023/10/13/cuda/index.html","2827cde34fd848973bc0afd6d154193e"],["/2023/10/14/cuda-python/index.html","26d8423ba7e87bc6bfc33066e848daf2"],["/2023/12/21/dl1/index.html","f0b5362a9f84257646435774b2ced86f"],["/2023/12/22/dsandad1/index.html","ff105f1db20f14ff4669fb9dca12a1af"],["/2024/01/22/dl2/index.html","5925f09d4ef1f1cca0c8576aa70a9837"],["/2024/01/28/production/index.html","8ea77d3208b438696bcf84f99759da59"],["/2024/02/25/mnist/index.html","e6b4cfc0bc52d5a7986d7fa17eb153c2"],["/2024/02/26/ner/index.html","530f79aecb486e31766744085d5aefef"],["/2024/05/18/springboot-1/index.html","2e30c834460ada9cd009919d83a358ee"],["/2024/05/26/multicategory/index.html","07ad8cdc4a522460d46ba2bdb67b99b6"],["/2024/05/28/springboot-2/index.html","d146733c90fb8043ae9e39a460402bdd"],["/2024/06/02/regression/index.html","fb593eb01cbd8198e8917f602c629000"],["/2024/06/03/imageclassifer/index.html","c8e5d4aac6afd5f84a3cb193ea0d45be"],["/2024/06/03/nlp/index.html","49af7ab54de7e49d89b06ec721e570ab"],["/2024/06/05/springboot-3/index.html","09a09a550b3d8c6707a5f01f775da44c"],["/2024/06/10/trainsoatmodel/index.html","4371a243c24fd92f515478fae50d0aa7"],["/2024/06/15/collab/index.html","01a51e2943c32d17740843707dcd3709"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","2ac24a292f145ad5403fb9b4d83982f0"],["/2024/07/04/vue-qian-duan-an-li/index.html","33b03722cc9482960158c19b1425ac7a"],["/2024/07/05/element-plus/index.html","34daaae1cddb4f3d85715e892076d6b5"],["/2024/08/10/vue-kai-fa-an-li/index.html","2f70d188d08ad50ce64eb4c9b9f8c369"],["/2024/08/26/ddpm/index.html","c1152df4cd3416dab504b5a8686b1f2a"],["/2024/10/15/redis/index.html","f52d6bf514b996f0a175c4e7875dc652"],["/2024/11/30/leetcode11/index.html","7f056e0adc8b402623531b44ba5c7fc2"],["/2024/12/21/tabusearch/index.html","ba41acd603b506ecb0ff14e887c19cb9"],["/2025/04/01/hexo-bu-shu-dao-hua-wei-yun-fu-wu-qi/index.html","b3c209d1fbbebedf150caded451cee1a"],["/404/index.html","f45c82d0f5a7ef595f1dca8e95ac80b6"],["/about/index.html","04a36f8100af944fbb23a1811c2f9199"],["/archives/2018/09/index.html","57450d440d560d622999124470e6a3f8"],["/archives/2018/index.html","c147b4d3df537ec9dc8dd4e7c024a164"],["/archives/2019/03/index.html","35ecaf44b97a570af7c680a6180a7ac8"],["/archives/2019/index.html","2d67cb292f0f7634afffb00a7b323fe1"],["/archives/2020/10/index.html","fba49bc1a2a9ff030e27bcce0a3d0140"],["/archives/2020/index.html","25b63550327a23c9bd9bff54dbb1d882"],["/archives/2021/05/index.html","07bfcb81a6b50396a0ccd81799809bbf"],["/archives/2021/index.html","10188f0a4845c23fdd79a59401604530"],["/archives/2022/01/index.html","609dd5a071458e2877bf938232b26d71"],["/archives/2022/02/index.html","a51657ad6af5f0cd3a92dd90783b3423"],["/archives/2022/03/index.html","e0c7d3911f583bfe79697c76d0065570"],["/archives/2022/06/index.html","17d8ab221a0bfd1d1a9b7e7782a5de1b"],["/archives/2022/index.html","7196d728aaafd1e84a86e6e57e2d61fa"],["/archives/2023/01/index.html","2a82b7add8097716aa0ca169d9acd63c"],["/archives/2023/04/index.html","c649ced3f5532f89eeb32bf8aff18313"],["/archives/2023/05/index.html","7081beb253544248f236c777073005d7"],["/archives/2023/08/index.html","58f3b136617afbcf030d48f02f663821"],["/archives/2023/09/index.html","b085606ef964ad6065badcf0bf6d6831"],["/archives/2023/10/index.html","cc2392e127d6ef0895a7a8df3bf0012b"],["/archives/2023/12/index.html","d222fe109e3b343953cbfe7d65ed274e"],["/archives/2023/index.html","2e0ead43c22bd5d72a9597487a72a201"],["/archives/2023/page/2/index.html","1dd4a71e2831cff9533fb70c9f207415"],["/archives/2024/01/index.html","493980eefe14268edff3c5c27217d5ae"],["/archives/2024/02/index.html","2b328cdaaf6a3228c7ac840b5a811ca5"],["/archives/2024/05/index.html","3a873dbd880a7575f55036ebca4e0955"],["/archives/2024/06/index.html","cb706bdbeec972bc1e18c8dff85f70b7"],["/archives/2024/07/index.html","c17c4b78ba319ed1c2fe0be0a1871153"],["/archives/2024/08/index.html","0055a6cf39a1d786ad06ef315cf1e6db"],["/archives/2024/10/index.html","ddeea0256ec58f7baba89642f9428c3e"],["/archives/2024/11/index.html","846d7cf8a21666e2cf0a145d0d98257c"],["/archives/2024/12/index.html","a4cad3c8a075b23d4d4152e52400bc58"],["/archives/2024/index.html","f79cba88a11af5082b16f44a5b31322c"],["/archives/2024/page/2/index.html","1645614af756e9c47693dea783433564"],["/archives/2024/page/3/index.html","483ce5f953c4e6e5b61eecc0dfaed18d"],["/archives/2025/04/index.html","78fe363ae2f86079bfe5d1e8b816e6da"],["/archives/2025/index.html","38548a6d7e527d0b12f3a8125bb1b99e"],["/archives/index.html","202a0bfb4a1ce56bcba1bceb3d406b5e"],["/archives/page/2/index.html","09a816beffe428e21ab9a1528fca29d1"],["/archives/page/3/index.html","0722a9eaf1c63befa0735ae775778bb0"],["/archives/page/4/index.html","4e807850eccc4af161ffec894b34d20d"],["/archives/page/5/index.html","8b2278a0bc1e9261bf0a6d60b66ec9cf"],["/archives/page/6/index.html","7c45e01be43696d1bf6ba62f12181396"],["/categories/C/index.html","b939ee658f49cbc1e20f28674937b001"],["/categories/CUDA/index.html","b72d448acbff041e013fe284497b0572"],["/categories/CV/index.html","7c3006fc58ccd5445133052de99fb32f"],["/categories/C语言/index.html","37f234c135bd30fcd2cd75e661be6258"],["/categories/LeetCode刷题日常/index.html","d337a56c9c015898687f8f30b61e1c38"],["/categories/Markdown/index.html","8957d52abcd9cec0d475840df1f07f7d"],["/categories/NLP/index.html","d0a0fc1b2a7c5b1ce029295d32ed2efa"],["/categories/Python/index.html","5ae7c6c6493ca6031b099282066d3252"],["/categories/SpringBoot/index.html","a6bf4886d6b4ca35fb62834c6f59dd81"],["/categories/index.html","fbf217584b1dbbde3e4c4775533b48ef"],["/categories/前端/index.html","30d709a1c4428ec42cb0aafff327dadd"],["/categories/协同过滤/index.html","ac832b05b24b7c3f67c1f095cd9364f0"],["/categories/博客/index.html","417ded777f33ed9175d291deed1d1f79"],["/categories/启发式算法/index.html","06109984690174b5eb08cb1ac868931a"],["/categories/数学/index.html","aaa5a64748eb04a47752bbeaf704dd2a"],["/categories/数据库/index.html","3f3c8e4f7f461eb85b7e7d563069abca"],["/categories/数据库系统/index.html","9bd2b517be24317494842afd202fb263"],["/categories/数据结构/index.html","95f0c5b8d84e7a5a63dee27d0d1dcdb8"],["/categories/深度学习/index.html","6dce76f9cb41d0eed3fe6e0ab5451cd8"],["/categories/生成模型/index.html","28ebae3e370e2834e1f1b80f39f7e89d"],["/categories/神经网络与深度学习/index.html","42af76b0260ac4ec70beff2d69bbeb29"],["/categories/算法/index.html","09a27b5e619da98d8caf9c794c7d071d"],["/categories/训练模型/index.html","3cdef03a43e82d1ee7af2f20c2b0ca8c"],["/categories/面试题/index.html","6461be796f8300065c98a59ce15fe8f9"],["/contact/index.html","90a281bdb951edb9dfaf8e34b4c9ee36"],["/css/barrager.css","d511d53aca86c986f4c949cbd43412c8"],["/css/bb.css","974dc33d47f7649926220948ec778f8d"],["/css/dark.css","841ffcee9edac3bfc1b495abd96fdc90"],["/css/gallery.css","130625ffc695c3e76c148f0259a5897d"],["/css/gitment.css","ac7fc4e9c38b7c3db9d215c6b95b8904"],["/css/indexcover.css","b9ab67fc9173844bf86c1d03b1e9f272"],["/css/matery.css","4661ac2e592fbe60ab76c6c7d185eee7"],["/css/my-gitalk.css","5e0474ef67384a2e49866acfae01b565"],["/css/my.css","beb11dba1817a9c19c0ceb4d25c261c7"],["/css/post.css","d2b8fd392c0c5e395368333217c0f5f9"],["/css/reward.css","9c2bae5c67e55511c1828728985f44d8"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","3f5c2d5f7573aa6781e188b9d7189e4b"],["/index.html","66d9a4a4aef9c6475b16f0da9c615e64"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","f17c9d9bd740bf6789e838a5ff5d961d"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","a1469337d09c6ecb06e0bd80755472a3"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","874fd37fb60c038f4cdc51c998040c46"],["/libs/gitalk/gitalk.css","8e8fe050bc29a98380397d32f23a4e37"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","35eeeb5d5a2f7a0425fe9f0ce1882648"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","be33a72b8762adebaaaf3674b609dc68"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","17218df6dc6cdbdca9009630cb5f46f3"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","8ad5b6ea097d259ebce6c303ab1def58"],["/page/3/index.html","dc9ff7fd8d4fa2490fc3260727870add"],["/page/4/index.html","f1ad49dd9a002c530d76eacd02334c04"],["/page/5/index.html","2548c39460959409024a921d1561a588"],["/page/6/index.html","2effa7e3a4009bca087a3cdb873eee4c"],["/page/7/index.html","6535f2946a83905ffac365a7d8fc71e0"],["/page/8/index.html","198a3d459e8c9c4a18a4689c8cddda7d"],["/page/9/index.html","e2e3fede89d835636530ba396f646aae"],["/sw-register.js","0b2687a5a6fe9650c6d3288424aa1925"],["/tags/CUDA/index.html","34a1b52676a083c15256f42d9f961146"],["/tags/C语言/index.html","22d412aa802b7dc2d5ba28094c792be8"],["/tags/DDPM/index.html","a7554a797fe39d54f064a91a3ce560b1"],["/tags/DL/index.html","d827926c6847a7078990c43143dcb719"],["/tags/Element-Plus/index.html","da3914314b962ba546ec8a91d549b630"],["/tags/Java/index.html","6f016a16b14e7b38f9d033eeaecd87c8"],["/tags/ML/index.html","45829b57f2301feaaf37be4366978ab4"],["/tags/Markdown/index.html","45d180dfb12461a91aea1ad13e36927e"],["/tags/Matplotlib/index.html","7c077322701325bdc4fd96a63f5058c1"],["/tags/NLP/index.html","e480580f30819b0ab08c7b75377aa75b"],["/tags/NumPy/index.html","011dd912685b74091c745950baad05cc"],["/tags/PyTorch/index.html","ca9bc334d4c1cf9ae4e24a3ed6bc598b"],["/tags/Redis/index.html","1240eeeeb95abd2cb0a96aec0a78c058"],["/tags/SpringBoot/index.html","ef18ecb375c3f65bbd6e3d997c21d2b7"],["/tags/Typora/index.html","2f6525c831f5de1d44cef708257a3155"],["/tags/Vue/index.html","88168cefa5edb582ac744c11bf0fa558"],["/tags/Vue3/index.html","380756235ab232c0298590c4a0529c1a"],["/tags/array/index.html","a9652314219b6355f9797e08806a40ac"],["/tags/cpp/index.html","08a7ffa94a394093704a943c0aaf42ac"],["/tags/cv/index.html","5924b96eb87328b0cefeefea532983cb"],["/tags/fastai/index.html","1f0f91c4b61802fc28af2f9eb1297bc5"],["/tags/fastiai/index.html","3834e3961127519d713f2d33c16a3b1f"],["/tags/index.html","04b0961092428200e21518f6ca4356ea"],["/tags/lambda函数/index.html","8cf4aaeae8fa7dc3ee45f6d24e8c3456"],["/tags/python/index.html","3706e48252acddb482d5f3e403ad3056"],["/tags/two-pointers/index.html","a00c72f096d35e82f2d0c34cf14f0c11"],["/tags/优化算法/index.html","1120d7bf58694b08fd1aa2b7f28dcf37"],["/tags/关系模型/index.html","c694688c9e385fdb6ee941bdee40e4c8"],["/tags/函数依赖/index.html","d702f4174bb1855186526c635f0b99d2"],["/tags/函数参数/index.html","e8a900e96769a3448b8d3527bcba9dc6"],["/tags/函数式编程/index.html","56290f45609fc24eaa2698e17345d676"],["/tags/前端/index.html","eafe5def493aebae9172695b3a8e2ea9"],["/tags/前端开发/index.html","8600261a97413cbaf9bce8dcb1b642c4"],["/tags/协同过滤/index.html","33954259d0a4f0e8584c9acfe84a2c61"],["/tags/博客部署/index.html","dd4bc4dca9669251fc6ae4dc3764e4b2"],["/tags/启发式算法/index.html","f78a989923c213f69418c1ba569a3b4c"],["/tags/回归/index.html","2b4503adf643e7d0447b05408ce1e06b"],["/tags/域名迁移/index.html","00aaeda5090e2c975082f4fe9098da5a"],["/tags/多标签分类/index.html","a07665e47bcf0643d3962a5024cb143b"],["/tags/指针/index.html","5ed7d36fe134aa2565a9c0aee01367b9"],["/tags/数学/index.html","ce51516c475e524867f049f2a52b99aa"],["/tags/数据库/index.html","68fb77a7fb6b78716750b70ef8df4ace"],["/tags/数据库安全性/index.html","45b16ac5d3bd29a721ca066ddc3347cc"],["/tags/数据库完整性/index.html","04c9f57d29df5acef7777d0e60048421"],["/tags/数据库语言/index.html","69e5c192144526540174d8b3881712ec"],["/tags/数据结构/index.html","2c5ccf7ec51f473ee87615b9210b2ff3"],["/tags/模型/index.html","1858fa8938dd82e9eddede473f069078"],["/tags/测试与异常/index.html","e7dcb46280ceb4978fac18573d41ccd1"],["/tags/深度学习/index.html","c3284471ec66dfe1732927175f4abc83"],["/tags/生成器/index.html","fceac1d0cfcf8a1b8650b0c0e0f7e73a"],["/tags/生成模型/index.html","7f477650513855fba42df44b32fe788a"],["/tags/神经网络/index.html","b1de4caf5fe5fee947061423e3f1f47e"],["/tags/算法/index.html","919dad50b14f1695a0f5e5990eb810c5"],["/tags/范式/index.html","cf70b21fc9381bf56006c0a115c7e377"],["/tags/表格建模/index.html","30f091bb18aa78338a1c543773f3aa25"],["/tags/计算机专业课/index.html","9ef8feac283388e60f7e987dd406c0ca"],["/tags/训练技术/index.html","2767efa3fdbcc64c0b4f8b6d8f690be6"],["/tags/迭代器/index.html","1b8d7542075f09198e9e3cca6caa0c04"],["/tags/面向对象编程/index.html","5208f802681cf93bacecab78feb4ff85"],["/tags/面试/index.html","18f590968331704d967048f8837364f6"],["/tags/预训练/index.html","bfd6dc9493a8b34fc015d81215f4f5c5"],["/tags/高阶函数/index.html","744716c9da83bc63527a965b28dd07fe"]];
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
