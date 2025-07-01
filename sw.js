/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","beaabd98b70cffc5fa0a05aa4e146750"],["/2019/03/16/c-cheng-xu-she-ji/index.html","04f585bca9c5f299f465d842ff14a4bd"],["/2019/03/29/c-zhi-zhen/index.html","622fbe7548ad4adacf4adde87537a34f"],["/2020/10/15/ds-algorithm-md/index.html","75b2bec0f96b18919f0cbd03c3841d57"],["/2021/05/18/algorithm-md/index.html","bf130b323ab2c419594b5aee59d7ad21"],["/2022/01/12/python/index.html","ae480eb5e4712fda0098b8b1bcf46e73"],["/2022/01/16/python2/index.html","c5025b953a50c33d44ebf3eb29a55a86"],["/2022/01/19/python3/index.html","f7c4763da893869ea8dc5ebb6fbe947e"],["/2022/02/28/c-biao-zhun-ku/index.html","8d0a9fab3b3f3a207e4c4617a3e8db64"],["/2022/03/06/cpp/index.html","33aa04503ecbdf40a35c1749e5cc1095"],["/2022/03/19/python4/index.html","caf891e1893e609675793dcc0042f703"],["/2022/03/25/lambda-han-shu/index.html","53d7f1fa4fc8d942956768228db8f052"],["/2022/03/26/python5/index.html","cfdf2eff481956d750d6b1e7c0d8d088"],["/2022/06/02/python6/index.html","bed12d590ca7c1858caa52c97ad94d71"],["/2023/01/06/python7/index.html","bf07765837b21b0beb1900eb0693602e"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","03668656eff08161222821ce875e490e"],["/2023/04/16/machinelearning1/index.html","43cb8dd2a236edc9325a06023915b01e"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","25195ed05e1423e15289e03db0dc7009"],["/2023/05/26/db1/index.html","d1cf99f3f225d1988b958b9b0f39478d"],["/2023/05/26/db2/index.html","b342b71b09cfe8a2925371c88d85d2c2"],["/2023/05/26/db3/index.html","348f34719954f773759f759ce2d3a309"],["/2023/08/08/python8/index.html","0e2a5c9880a591b113487864746f8b23"],["/2023/09/05/deeplearning01/index.html","e05f2f7fb03321c09db5d23eb059caef"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","f2b6423645c86b8fd60aac06cbee5888"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","bd16255f98e35fce3d5d075fa55567d1"],["/2023/09/26/springboot-0/index.html","7902dd53d6435b6ad17aa0a39c9ec66b"],["/2023/10/13/cuda/index.html","ab143714415ff0200aba14030329ded0"],["/2023/10/14/cuda-python/index.html","7b970a01524d0b05872668e76c2e3754"],["/2023/12/21/dl1/index.html","0027f90499f72241fe65688087cc8ad7"],["/2023/12/22/dsandad1/index.html","eb684cffa5c9bb4eb2590b68f0d851ad"],["/2024/01/22/dl2/index.html","d35df1996ddb61a85292282e6f9348f5"],["/2024/01/28/production/index.html","c803197df6fa1214323ebf97b633c557"],["/2024/02/25/mnist/index.html","6952a90c15ca449b487f4d17dd38d754"],["/2024/02/26/ner/index.html","6f4ef875447e009415bf9b8dac71e8fd"],["/2024/05/18/springboot-1/index.html","9a5679ea1a596a9a3b35f110f20c682d"],["/2024/05/26/multicategory/index.html","fc1a8a039bb5b04f91b729ce90673195"],["/2024/05/28/springboot-2/index.html","5c5018c6ca2a8858a3bc1ad6fc8b56ea"],["/2024/06/02/regression/index.html","1caed8369d4a9c22391e9c62ccae65df"],["/2024/06/03/imageclassifer/index.html","b3fea09c92d52726c6b36f922ef5eeeb"],["/2024/06/03/nlp/index.html","ddb36fd666e64362bc9fb9610fcda9b3"],["/2024/06/05/springboot-3/index.html","53f49ee3dbe53f09fd9f221305c720c1"],["/2024/06/10/trainsoatmodel/index.html","d03dc8f7328216cfc4fa21c7b4324a24"],["/2024/06/15/collab/index.html","590549595ae26150bc0d91472be39bda"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","b75e9be8249339c609f9df10487c0e85"],["/2024/07/04/vue-qian-duan-an-li/index.html","8f3e0e9d0ec37a84a3d8b7639cec3662"],["/2024/07/05/element-plus/index.html","985eb032689ee68323c4df1c00ed5e0d"],["/2024/08/10/vue-kai-fa-an-li/index.html","7f17e056e9037ed937fa59488d40d0d0"],["/2024/08/26/ddpm/index.html","3feb8c13bfe9b43785f71ba90f2c4d92"],["/2024/10/15/redis/index.html","e7f8d26aaf762ecab11ac894c37dc80d"],["/2024/11/30/leetcode11/index.html","677196abe71878f4d4076991c15eb66e"],["/2024/12/21/tabusearch/index.html","0006f6b9104db8df3d21708498341a15"],["/2025/04/01/hexo-bu-shu-dao-hua-wei-yun-fu-wu-qi/index.html","0fb12145ba1c42fcd32da27c24774812"],["/404/index.html","986ca4ba9450907c8228de6a21284884"],["/about/index.html","cc73870e7bfa29378baeb569b140cd56"],["/archives/2018/09/index.html","e315ed5ca20b4902305a90b30e35869c"],["/archives/2018/index.html","4949c8a111ff91e17281beda9cd5def7"],["/archives/2019/03/index.html","6f9c56f0c5d7769ebc06ea8e74d935cd"],["/archives/2019/index.html","969578a3116d36e552fc6ccb84642bfc"],["/archives/2020/10/index.html","bfdc621790ab5753187c963e480f28b7"],["/archives/2020/index.html","0dcad374d19e7de354961743cbfe749b"],["/archives/2021/05/index.html","e225202377d5fe54e31fcc08f6396186"],["/archives/2021/index.html","367dac862c644b6bfd843e81c223eea3"],["/archives/2022/01/index.html","1df878a825ba4c08696416295af5e00a"],["/archives/2022/02/index.html","5e320cb8c3157112ebb3ace649412f75"],["/archives/2022/03/index.html","8b98ee50a6b839c5a1a72ebce2d1caed"],["/archives/2022/06/index.html","d15cfe45a716424dbb574c0f00edaf57"],["/archives/2022/index.html","359e19daca3c6379048a19dd35a4f1f5"],["/archives/2023/01/index.html","3c624891ea1afea81a834faca8eaebf3"],["/archives/2023/04/index.html","b0720df8279e7145a093076b8d59c711"],["/archives/2023/05/index.html","e94614236b7f81678a96da45628495d5"],["/archives/2023/08/index.html","3fb6abe3015044295f6688d14acf0bdc"],["/archives/2023/09/index.html","b3ccf7f68b89b53059f14bab11a35850"],["/archives/2023/10/index.html","13200bc2196171871d3d511ca82ec259"],["/archives/2023/12/index.html","120d25ad43b4690c569bde1d3834e5bb"],["/archives/2023/index.html","33dd361d60f444e86cbb74e07a2c8934"],["/archives/2023/page/2/index.html","da1318c37635c56b4bd538de8644084b"],["/archives/2024/01/index.html","789cfd32f0df392e4c2db15b58bb220c"],["/archives/2024/02/index.html","155d688996e7ced59036c5d0714718d7"],["/archives/2024/05/index.html","a150f8dcd3d2b08aaaf8d1ab55a571a3"],["/archives/2024/06/index.html","1903e2a19d7779d69382bedb812ccf08"],["/archives/2024/07/index.html","250ad06f1dfe5fb12835178d8c12aa0d"],["/archives/2024/08/index.html","38fbf85f66503e76c2b15e5d3e92af89"],["/archives/2024/10/index.html","04fdf5818e0ab49fa811ea96c646aabd"],["/archives/2024/11/index.html","c9f1c83f000e174b158f63935fe45d73"],["/archives/2024/12/index.html","6cc33e8403565b427ae7aa86c07a6614"],["/archives/2024/index.html","3f068a04132eba9dcbefdc2bfb05b279"],["/archives/2024/page/2/index.html","49e762602cb6e81c49b7033d1040d691"],["/archives/2024/page/3/index.html","55ab5e3ce36556a1218617e9fe1fa580"],["/archives/2025/04/index.html","852bd9d2554abdc291b5ef737f1bd62c"],["/archives/2025/index.html","b71b86bfeb72a53bdae25fdc0c710a30"],["/archives/index.html","177d790cb356f1619d923d958bb72d08"],["/archives/page/2/index.html","9a59926089223824fcb2eb1fe5e11309"],["/archives/page/3/index.html","464ebb0d27a0a45cd05de7324f898119"],["/archives/page/4/index.html","8dd1062e77cab56a4141752a9871ffeb"],["/archives/page/5/index.html","f2a7bad923f8ffe65a9c796db39485fa"],["/archives/page/6/index.html","305ad81be93974c001229aa2ee180ec5"],["/categories/C/index.html","f13fd63894b3ea3385786482686caf57"],["/categories/CUDA/index.html","17a3953df148e7e06e18f681317a2d31"],["/categories/CV/index.html","aedc64e08cd3721f8f50e00c2c7d21fc"],["/categories/C语言/index.html","836efb4410f5d27d958ebfb52d75e9dd"],["/categories/LeetCode刷题日常/index.html","79ba7d3b844065ff2e3e784a9fe42a97"],["/categories/Markdown/index.html","2c9ab1fe00b5921e44f91ea28a52253f"],["/categories/NLP/index.html","b4c1fd55fa02b0b4c4e36536ad194a1f"],["/categories/Python/index.html","6cfcf1fe57f2d9924236bfff233a6200"],["/categories/SpringBoot/index.html","a3bfa0e01bd48a3818f87c809c72f5ac"],["/categories/index.html","1baf19474f15061b78f7f62efcda7162"],["/categories/前端/index.html","f247e4e7e6b746b3542bf1b1a792a466"],["/categories/协同过滤/index.html","deb5697cb0e001a9cbc67a485ff0ad17"],["/categories/博客/index.html","cdd980c50cecc538e1b7582e29e79ae0"],["/categories/启发式算法/index.html","70a701d29f86f8e02f8d7dd9fee3e9c0"],["/categories/数学/index.html","1d31ff39034f6d9421e80a3b176964a0"],["/categories/数据库/index.html","3e47928465d47bd511bf9e25dd346c24"],["/categories/数据库系统/index.html","b43908ee945952d1aca9ecdc3252f712"],["/categories/数据结构/index.html","ba28dd6958e97db4f6822c71ed99ba57"],["/categories/深度学习/index.html","0fc827901e28c0586f572b65bbc9311a"],["/categories/生成模型/index.html","27d9395973c5077d03e0d043b709a4b7"],["/categories/神经网络与深度学习/index.html","bdb5535737d198b2b3cfa7104a5fe60d"],["/categories/算法/index.html","c86089a28b64423b3bbc377c95d35c59"],["/categories/训练模型/index.html","cc12c825c802884b9aee6112e5a05192"],["/categories/面试题/index.html","e8d72945dc1076d072cdb324ae555de6"],["/contact/index.html","6e1f6dd348f1fd3c7063d6c96eb3e145"],["/css/barrager.css","1d87e4caedc3c630621d013f5ac3d3e9"],["/css/bb.css","cb48af510a3d227b303a45b9efa929b7"],["/css/dark.css","d5b2be13845874aed3af54b92f2eb17c"],["/css/gallery.css","0e3f2e20b36fbd9446241c02362f59bd"],["/css/gitment.css","5d3d9c60ee23fbd5c3e4751d6fe9197f"],["/css/indexcover.css","f1478c240bad7b6ff0b36f367cf082a9"],["/css/matery.css","9fbffbcb25a37e0e393197a8dd4837a6"],["/css/my-gitalk.css","e825d3e116f23167a849ef35be9e6107"],["/css/my.css","c19221c307dbd57b35fad570b2d02a0f"],["/css/post.css","dbe01a6ae8772b915f33f2e24175a9f1"],["/css/reward.css","27d3e06d40b016116df5cc4516978942"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","e1697b5928f2a2eaa5e146c5d507251b"],["/index.html","1693087fb4dc386f9af32071ae21392d"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","74cc09db17c1f0cd921225eec46c1ae6"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","27f122bff0b979002504300f0b9fe7ff"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","3a03e04d3d692254233a3a2201d5079c"],["/libs/gitalk/gitalk.css","a542de286e8f65f34b08555357d72795"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","81f3da603a9461bac6f41891f28f517c"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c2805e24e9ac941c2a2d0c834ec7de8b"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","872e40c85e6a3e380c3d61f52c852b3d"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","42bc70ab6c465e8caa5a0a02884664f1"],["/page/3/index.html","f5fc37c37aa127e7db97c233b6714bf1"],["/page/4/index.html","bf1d3c12993338f98264713a35574895"],["/page/5/index.html","8abb720b958fc1277fd3fd7f592a5fb9"],["/page/6/index.html","26e44e1e691b5b502ed4e6e5e02ded8a"],["/page/7/index.html","1debc16b8c6b6a3dc50ce0309a7ec938"],["/page/8/index.html","215b41ba52dc4225352ca398272a6447"],["/page/9/index.html","e95f80b0f2682212b9667a58c32fc891"],["/sw-register.js","1f9b7803e0f6e758fdf0eae9731d3bdf"],["/tags/CUDA/index.html","89489abeaf2fac5e33c385b7c995390b"],["/tags/C语言/index.html","4400c6d587a6bd562af395ea341cef77"],["/tags/DDPM/index.html","a41eb1564c170a3ec0ca2d864cb1d0f4"],["/tags/DL/index.html","f8aa987c0e97b230b2b15bff7de87132"],["/tags/Element-Plus/index.html","7eb38a56d0b19c87644c3c6de165e0c7"],["/tags/Java/index.html","c7744fc2e8d622301a8ded5ec93ed951"],["/tags/ML/index.html","23128c63e0ef0d901d6df43e1d815423"],["/tags/Markdown/index.html","e16e4d5eedab9752227bb872eb36bee9"],["/tags/Matplotlib/index.html","3d4e2bcd0a776164d1767b5768472232"],["/tags/NLP/index.html","bbb2f7587fc969047f0671a5a5bf4fea"],["/tags/NumPy/index.html","4c5747f2e53521988242a1ca729cef47"],["/tags/PyTorch/index.html","6007f382ca1f66b4dc5f6ae6638930e7"],["/tags/Redis/index.html","05a1c1ef880e7a1aa2ac0a3668477ede"],["/tags/SpringBoot/index.html","9d25c1e0f2fe5aa2f4206601c8efb88c"],["/tags/Typora/index.html","d48b227e9e2da3f70671a887c01bb27e"],["/tags/Vue/index.html","3bec181fd768d6b78a160d83b8ebde3f"],["/tags/Vue3/index.html","e81f600f4408ef5fb317f53a48ebad58"],["/tags/array/index.html","d3e5432cd3a42cb6053be7c7b19993d9"],["/tags/cpp/index.html","20045e285b862affb4dd19803595ce9f"],["/tags/cv/index.html","11901804f57c5ccf9bdec75d043c3343"],["/tags/fastai/index.html","f766aaf79a16c9c87042bd0b525667bf"],["/tags/fastiai/index.html","414c1a42825ef9ac1c488ac970c93e49"],["/tags/index.html","9e9efedf5244b987617b272540aed02e"],["/tags/lambda函数/index.html","e705ce780f7bd2efd1c2c223f9468abf"],["/tags/python/index.html","69801ee941df0b2b328eb5a177fbc369"],["/tags/two-pointers/index.html","7469de89fcdb07f69e90aa84022002e9"],["/tags/优化算法/index.html","4859981fdc559296962a1a1eb0e25eb3"],["/tags/关系模型/index.html","a61b96de12e523cae69499c23e1541b0"],["/tags/函数依赖/index.html","d608cc409efaea0d1e4bbfa1b7e7c656"],["/tags/函数参数/index.html","cb191202c1962c26f3f66e8ab38b494f"],["/tags/函数式编程/index.html","dad8ab52cc9664fbcbda9d58530d1bee"],["/tags/前端/index.html","828fb58110ae55cf9ddd5f4c032d1446"],["/tags/前端开发/index.html","77f540c914b5db8dbf200be4685afe61"],["/tags/协同过滤/index.html","0f1696fd570dc9544f892eb097912eb8"],["/tags/博客部署/index.html","6b652d0f7e3043a8eb97ab1b81d51557"],["/tags/启发式算法/index.html","1c90891873e729e3e4f4414102324e55"],["/tags/回归/index.html","3b4d1756ccdba71eb2d7ba7e492fbc43"],["/tags/域名迁移/index.html","ca64920f77de647886304821933db7e5"],["/tags/多标签分类/index.html","04a1942c8c3d4f25d950eede8a1672c0"],["/tags/指针/index.html","34d3f829e825bc29ea9c73a81410115f"],["/tags/数学/index.html","17cac85cad27abeb07fe36de29265166"],["/tags/数据库/index.html","24a067c67edd5245652a0b2a63ea5c0d"],["/tags/数据库安全性/index.html","7674423ed8dfffefd6b9b70e75de7018"],["/tags/数据库完整性/index.html","dcbd34a9a86ad96a36f921666f59776c"],["/tags/数据库语言/index.html","1883a1ac841466e7047fe628750c0b0c"],["/tags/数据结构/index.html","6b1cbaac72df3731a161d57dc984424e"],["/tags/模型/index.html","7df8b95b41a6da548d0acc156d2543b4"],["/tags/测试与异常/index.html","457ab30b36395bd6289ed59dadbfcb84"],["/tags/深度学习/index.html","9bc937e7c9ca8a6228df0025f48326ed"],["/tags/生成器/index.html","9f78fc5775aeaed537d1b3336e34fb46"],["/tags/生成模型/index.html","ebd3f97d5b57324c887960f1c5abb888"],["/tags/神经网络/index.html","337673b21a75a225814738781a220d0f"],["/tags/算法/index.html","8b94d9d7fc3c5150f6760bb984c28759"],["/tags/范式/index.html","c5ec5fcb3e00e22e0e5a5cc05d8ac69b"],["/tags/表格建模/index.html","68edfba5caa114e0136c5c113111fc0b"],["/tags/计算机专业课/index.html","2ddb4718726188f0f9ba2612d2d59f5a"],["/tags/训练技术/index.html","45b50866a072027c795736188f9c9a25"],["/tags/迭代器/index.html","76d7c79cfa6703bff1d9539b1a658382"],["/tags/面向对象编程/index.html","ca7dbf74f65557e936c394c919735834"],["/tags/面试/index.html","55d38a3827fb0b155d9d4a4b759e8b66"],["/tags/预训练/index.html","345bdea6ca13f816e028a52d548cd89f"],["/tags/高阶函数/index.html","7b6e7fd7a9ec9237f7cee73ae5d9d66f"]];
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
