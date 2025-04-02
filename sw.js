/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","42fef471a36872b1a9269bb2d2ca19a8"],["/2019/03/16/c-cheng-xu-she-ji/index.html","cb39a4f74c8bad08802a7cd3659a4ebf"],["/2019/03/29/c-zhi-zhen/index.html","bddb01f9f691d8f2ed0540c3bf8014ca"],["/2020/10/15/ds-algorithm-md/index.html","64caa8b37ad863c041e35272f4296b06"],["/2021/05/18/algorithm-md/index.html","8437b93f26f55de359ec8ddf5092ca84"],["/2022/01/12/python/index.html","8d95a50e41cd95606d32fd49eb5a286e"],["/2022/01/16/python2/index.html","9887be7d646e9a86d70d7c8de94dff93"],["/2022/01/19/python3/index.html","92eab7ed5d825d6b6b1d43998f786ebb"],["/2022/02/28/c-biao-zhun-ku/index.html","36d6e765df1891910935d32b220d3e54"],["/2022/03/06/cpp/index.html","a971de0d0de288e3efb84188f1c60e00"],["/2022/03/19/python4/index.html","5e7e3d13d31af5284ca6928f81399160"],["/2022/03/25/lambda-han-shu/index.html","a3b3c895ab3d7fe0c39e8ea7131e5314"],["/2022/03/26/python5/index.html","1d75d150db7628d016443a36b96d421a"],["/2022/06/02/python6/index.html","1fd299c57ee67d7c65a7aef69f5c622b"],["/2023/01/06/python7/index.html","187b66c48b62bd9bb81af9e4ec7d9b36"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","4d5ed2fd87114b1f487360f4229c439e"],["/2023/04/16/machinelearning1/index.html","46635023a1175e568b66bf5bba1efbcd"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","48a737066475c702f6be3e94e19d4704"],["/2023/08/08/python8/index.html","07a9042fc2bf5b9b0e6e55112991ddb6"],["/2023/09/05/deeplearning01/index.html","5ddd0ac7288222e01d49094d8ae4a6b9"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","7e4dc2e7af374d4dbe6b534a4e678a41"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","721d8c3fdcea4f23fbbdd74ab18fabfa"],["/2023/09/26/springboot-0/index.html","54bb9cdea1d3a54bfc71f55683439032"],["/2023/10/13/cuda/index.html","3e7bbe3a9eb290cce012e7cec13d3776"],["/2023/10/14/cuda-python/index.html","a4984b374c8136f49e62301fac8e80fe"],["/2023/12/21/dl1/index.html","76a72f584e8e1ddef6aa50cc94f85aa4"],["/2023/12/22/dsandad1/index.html","a75a4e20c606db7f4847979bd2af98bb"],["/2024/01/22/dl2/index.html","59b305963713e43fb2d619d709d039cd"],["/2024/01/28/production/index.html","3d16772f0f082e7b8bb2c777d8b5c918"],["/2024/02/25/mnist/index.html","7763f1b47399c669e53cceab3dfccaa7"],["/2024/02/26/ner/index.html","baf0383d8c320212320a10d404bfc896"],["/2024/05/18/springboot-1/index.html","24f6643976eedcf9bb9bdd2cd5d593f0"],["/2024/05/26/multicategory/index.html","5f86a43ebe6289d070e010bda7086df1"],["/2024/05/28/springboot-2/index.html","dcc9e784ba0ea190941c470bf022a3a1"],["/2024/06/02/regression/index.html","6126b7852a4ab899da49d77a6b9adb8c"],["/2024/06/03/imageclassifer/index.html","e40c58b4e54317e4869f8840c9274721"],["/2024/06/03/nlp/index.html","3eed0123daf9085653d19a03f74d3579"],["/2024/06/05/springboot-3/index.html","d62b672925c515166323263aa9d1f98e"],["/2024/06/10/trainsoatmodel/index.html","c554c8cf33dcb82016b775d70c8d2d10"],["/2024/06/15/collab/index.html","3cea17790265483947b98bcb89538fc0"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","98779be46b36c1b2cedbc26f0ab76bf2"],["/2024/07/04/vue-qian-duan-an-li/index.html","9056bfd4d6eb8807462b3a721882e417"],["/2024/07/05/element-plus/index.html","e596f9560db58cb74ee6dfe175ae7576"],["/2024/08/10/vue-kai-fa-an-li/index.html","efac8a00a902bb4099173e19069e75c8"],["/2024/08/26/ddpm/index.html","03b9c02d8fca1ee8e9aea7ec889d939e"],["/2024/10/15/redis/index.html","b848febc0eb3313d4f2daf2f5b34f0e1"],["/2024/11/30/leetcode11/index.html","4c7e228c3fae943d49f63b8d443614b8"],["/2024/12/21/tabusearch/index.html","53b9b3ae98de67f9a429ec369c4777f6"],["/2025/04/01/hexo-bu-shu-dao-hua-wei-yun-fu-wu-qi/index.html","b2a62207a854b76e9f2c6d8fb1ee2fb2"],["/404/index.html","afd2fa047330dd2e6b1eb2249a281e90"],["/about/index.html","4154484501e793aed6fd10409f39d486"],["/archives/2018/09/index.html","0a8c347a2cfdd8668d02690dd1563a41"],["/archives/2018/index.html","9690a7019ffb96ce972b31058203a2c1"],["/archives/2019/03/index.html","3de1fad2c1428dc10ab95ad3e1ad1d54"],["/archives/2019/index.html","1d4ecd95072145fef9e1c372ee6320f1"],["/archives/2020/10/index.html","845c9ad7a95e481bef930b54d48991bc"],["/archives/2020/index.html","88ebebc5ca24d26690481617e8e05cd9"],["/archives/2021/05/index.html","4280a375381b289d9bd09ef841082acf"],["/archives/2021/index.html","63464aa5863db2c02f29ade48028b060"],["/archives/2022/01/index.html","9ebe0516683d0093e9627ce427ef98f2"],["/archives/2022/02/index.html","013e11c0fc21a1882f79c02704af5ad2"],["/archives/2022/03/index.html","9f9ab912c5d049cec524da96902174fe"],["/archives/2022/06/index.html","cb349006e5951676b9de0497be6e3762"],["/archives/2022/index.html","5976a6d28da8a2feb465a87be9ea48cf"],["/archives/2023/01/index.html","26dce65fc0f05b0b773a43c9a2f1e67b"],["/archives/2023/04/index.html","ce189d11b34e9263408e890054e344d6"],["/archives/2023/08/index.html","df594557c082b93ec9960370b8b2984b"],["/archives/2023/09/index.html","899c8f5933de90a55e53a6b7e441d973"],["/archives/2023/10/index.html","94ef9b6328ef8e11f68f055c2cdf62af"],["/archives/2023/12/index.html","792af0a6e6a941406232542c18aff7f6"],["/archives/2023/index.html","8eb5a638c494cde7e9ab8864fc497d1a"],["/archives/2023/page/2/index.html","e67b4c3024c79ca0213170d02cc2b4df"],["/archives/2024/01/index.html","b0c36a5b430d939528f60f8480f6ffb1"],["/archives/2024/02/index.html","69de5aa5bd9b45eea7eb25536401fb07"],["/archives/2024/05/index.html","536b58fea779fef2ec8995c852e16c70"],["/archives/2024/06/index.html","c842b214bae931e37d5a54bcd8df94ba"],["/archives/2024/07/index.html","415505ab6d5fcf9a3ce87ba6d16fac64"],["/archives/2024/08/index.html","5baa4e08155f426a8bbf7386c2dbfdb4"],["/archives/2024/10/index.html","1f0d9ed9ed4423714832f558321c0993"],["/archives/2024/11/index.html","be5ee6e8d56027e5191acd625eb93963"],["/archives/2024/12/index.html","f1c400a7171ec1330111947efc258b00"],["/archives/2024/index.html","39484d180faa931ee438d40bb6466605"],["/archives/2024/page/2/index.html","0973ab21eab1e94b762fa0f07320cda8"],["/archives/2024/page/3/index.html","b8f0060692ac7052f64126eee758bdb9"],["/archives/2025/04/index.html","2f73a7808f29ede76ebd8420e30832ba"],["/archives/2025/index.html","ab2add67d71cceefacb718bfee759823"],["/archives/index.html","ae324c0dd394c9c7ba9e826ce304734a"],["/archives/page/2/index.html","0158ae84a993f639b4398a82dc04d913"],["/archives/page/3/index.html","6532e2c9bb1279698ce6012eb8e2e78d"],["/archives/page/4/index.html","909b471e09e643378b7df2fa78a26ee8"],["/archives/page/5/index.html","b4345cdfc28f3dca94959f2d38195078"],["/categories/C/index.html","08bc1c86bb57e98a626fe194ce414a79"],["/categories/CUDA/index.html","f5d72efbd81bac96a803fc6e4552d9f1"],["/categories/CV/index.html","07b29fb2333ea432448203e3333bcd04"],["/categories/C语言/index.html","f33d815fd37b811fc71e8ba15329f9ae"],["/categories/LeetCode刷题日常/index.html","4221ca2074b8f90e3a60f84541912349"],["/categories/Markdown/index.html","5a8d70e0c42632518ae119bb9a27ae6f"],["/categories/NLP/index.html","2beba60f8d1c2b1e6987b612720e67ed"],["/categories/Python/index.html","0b46fedae3d80b15bef3f25a58406b5f"],["/categories/SpringBoot/index.html","0cced32690a8e545b2a809f1d48c6b55"],["/categories/index.html","ea282ddee0f55afd422577b942caefc7"],["/categories/前端/index.html","844d159194cb1410b117345fb12b6e7c"],["/categories/协同过滤/index.html","410b964acd720782f8edb310fbc8332e"],["/categories/博客/index.html","ba57d78edf92091e35e1ff7efa04515c"],["/categories/启发式算法/index.html","18fc48a4b66a880b375dd7bd0c82d69b"],["/categories/数学/index.html","97824f7c1edcd1d42cf75a2b3af30b57"],["/categories/数据库/index.html","9ac561831dbfdf0c54d4aad0ca4c7440"],["/categories/数据结构/index.html","dd9908034c04e5a9a4d01125d8ddaa4d"],["/categories/深度学习/index.html","7b3cf52f30a978d78eb2031c19c251c5"],["/categories/生成模型/index.html","5d2995fec9bbf7e54e84aa9b44f64473"],["/categories/神经网络与深度学习/index.html","ae0adf49b4972e2f1d900a47fe9cbb58"],["/categories/算法/index.html","9cba2c631c62bde26155e0360c185ef1"],["/categories/训练模型/index.html","fe4ae6a606602f5cd28950dfe9f028b4"],["/categories/面试题/index.html","98a883c7e0c53f97260336207b250d3e"],["/contact/index.html","6c1d80b6aedd321212a09ac1fcd442dd"],["/css/barrager.css","16c5d4910dd8ae2398890b0c73c8f14a"],["/css/bb.css","146d2a9f43ecf40bedb2a3f423257b88"],["/css/dark.css","250cc5e129601628691e5f7cefe2e9e1"],["/css/gallery.css","08932dbb3639031d6bda645d832f213b"],["/css/gitment.css","f22715c6fe896adc3c670f617d7052f3"],["/css/indexcover.css","726a016bc2c449b7a65daeaa5c64aedd"],["/css/matery.css","891a0a432f6df7921a1a2e371335ff81"],["/css/my-gitalk.css","0a279b9be2d801b740a76d7e4eb88cea"],["/css/my.css","23a7ea5ae65c6158ff6a598fa863c1b7"],["/css/post.css","67ad5202a28f3710ce764af3f53b1b95"],["/css/reward.css","3fd608dfb16412c042d5d2b8feb352dc"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","237544aff97e4e363ca1ac789b0152d2"],["/index.html","9c1707f50d39eef9c1be9c68c2941d9f"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","baee1e9575e4986d5620f1395d63c2f1"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","d802b818b9db9d92161aff82d97aceb8"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","5c40e750760e3915973ad6337c980d38"],["/libs/gitalk/gitalk.css","c94cb2c0f8b08a054029e80b467950d6"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","d6ff1e7dc42c777337c350ae3be9ac0b"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","24fd99c03366d69c6ea933fa9765dc6e"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","6e26f07dfbb2221fa1c70ec395c60f7a"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","eb9a32bce80b4b0be6b81a30d5fea13d"],["/page/3/index.html","ff5caa456255de7d69c957c611bb7d8f"],["/page/4/index.html","57e5b55023e44f08a14f45b29e82347f"],["/page/5/index.html","e3fc6e821d66574f9c0692c6f4912ae0"],["/page/6/index.html","150e8636d065ca9338d6ece14800ac49"],["/page/7/index.html","2f41638f50312481331c4b11234b5fca"],["/page/8/index.html","e1aada98a94353f574c7248d34771f31"],["/page/9/index.html","a488c1d2b1dff7229d9c50e3c3c984ef"],["/sw-register.js","03f1979509f67927365ed2663fb46401"],["/tags/CUDA/index.html","6af0e3ae00171b4e9dbe161956aa61a3"],["/tags/C语言/index.html","c8e43f03d4d9a56614b6e51fcb1dc8a4"],["/tags/DDPM/index.html","6fd10a5d84008d4dfeb4de3a0aa508c7"],["/tags/DL/index.html","71b1bb3aa9ee4d9286bed469f14d2b44"],["/tags/Element-Plus/index.html","d61141bf07ef260c4d7f767e7a7d627f"],["/tags/Java/index.html","413cad6353231129c3a84ac4f0df7dd5"],["/tags/ML/index.html","765f3853c35889f5c4b71cf2386ac83b"],["/tags/Markdown/index.html","e3334b8f86fb12715430fc2915d79ba1"],["/tags/Matplotlib/index.html","79d140f5889241c35bfd00c4ea4e7684"],["/tags/NLP/index.html","ce0f7eb694870473aa4acb686b1ad4ad"],["/tags/NumPy/index.html","7e06fdee537660d8a89f105bd033a049"],["/tags/PyTorch/index.html","e70c7c5fb4ee5b6594ae3d5cc098111e"],["/tags/Redis/index.html","2f1d9b80202b9e2ad75f6c9967fd76fa"],["/tags/SpringBoot/index.html","9f21663a570f0483ffef639a693f021e"],["/tags/Typora/index.html","cf9ab4fb03ef84733c07f7b2a5e15d0b"],["/tags/Vue/index.html","e3e5802e6deb986e23bc7c9692c6a598"],["/tags/Vue3/index.html","3d7594ca7c46abf322e68d7d6dbf57f5"],["/tags/array/index.html","25c8a448cd8725c8446b8b4b6b6b0d2f"],["/tags/cpp/index.html","133c40759531fcb8766ae20e65f9e47c"],["/tags/cv/index.html","777bffb4c0ba0363c3f4951187f32810"],["/tags/fastai/index.html","3326870d093fecd5d69f1d96d1da9d60"],["/tags/fastiai/index.html","31b05ce929c0b7362d2610b81def3e1f"],["/tags/index.html","4e805c53fafb6a8a39329099ed13ed29"],["/tags/lambda函数/index.html","fa6232748f6aa63600af780801d7776c"],["/tags/python/index.html","edb3dfa18489f8ced07a51de0c248c66"],["/tags/two-pointers/index.html","16590a0034d1c3804d6adaec0f93f9fa"],["/tags/优化算法/index.html","2ccdfac07d2786f29d8e0970e938100e"],["/tags/函数参数/index.html","92b9635eee72a924deb5da536756dba7"],["/tags/函数式编程/index.html","11ad59d27fa55720b72b21060b458a48"],["/tags/前端/index.html","cf5d2ea6f98a899c48541a3a40e14596"],["/tags/前端开发/index.html","e04b139b548b231546c1167bd76effb9"],["/tags/协同过滤/index.html","dcec61dcb9c65d8395b83cccd823012f"],["/tags/博客部署/index.html","9dfc8361fc5132880dadbfeb30e02857"],["/tags/启发式算法/index.html","8b62c7defd1d91293ec11067afd7d7d3"],["/tags/回归/index.html","25b097750777f431c4d9d2dcc68fa8b7"],["/tags/域名迁移/index.html","4badef22e5f2e90c4e1bb4444ceaacf1"],["/tags/多标签分类/index.html","97168c2197857147883a9c771f8d8519"],["/tags/指针/index.html","fdeee351392428adf16f91a6ab7f120f"],["/tags/数学/index.html","e21ec98ce63b44e211e923d2cf1046fe"],["/tags/数据结构/index.html","b107bcde5bb9893b220c5961a279822f"],["/tags/模型/index.html","2c636c799e1bb0716922d3780b77f169"],["/tags/测试与异常/index.html","32343d66fd8b818040b7e79063569f9a"],["/tags/深度学习/index.html","42820f41846cf4e90c3354d5e1b8f13a"],["/tags/生成器/index.html","0aaa236e6cc4c21466793c2689c9add5"],["/tags/生成模型/index.html","d66df09e6256872eec0418065e3b88c1"],["/tags/神经网络/index.html","5d798d1a40f9e1be9acab85816b09698"],["/tags/算法/index.html","ff5bb10095772f755c3e1c2f033eaf15"],["/tags/表格建模/index.html","2c3412ee9469d89805bac1a65a6a04cc"],["/tags/计算机专业课/index.html","d909aa48490e8da3c6c2ebe6601e32db"],["/tags/训练技术/index.html","edf5a0c4b7c3d3761677090d6479976e"],["/tags/迭代器/index.html","53bb0f8e2998790999ac0711e015ade6"],["/tags/面向对象编程/index.html","5e277b87e73e4ea7b73ebc695b446b4b"],["/tags/面试/index.html","eb634299da47a88654feb3d268a20602"],["/tags/预训练/index.html","5f3ad6b9cc1611730c56dbafc110a666"],["/tags/高阶函数/index.html","50d65b6dc74efddcbd4c5fb33bc51be2"]];
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
