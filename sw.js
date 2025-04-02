/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","aeed492260869dfab964c7defdac0304"],["/2019/03/16/c-cheng-xu-she-ji/index.html","2ad8fbbff673ec7945d4d6da1b49234e"],["/2019/03/29/c-zhi-zhen/index.html","3e638f7c97e6fde91d43cc6e84eb8f19"],["/2020/10/15/ds-algorithm-md/index.html","e285fe9c7c9e1a9b9c26b4e25752f8af"],["/2021/05/18/algorithm-md/index.html","4cbf47932d8b5c54c9298320cd26d4aa"],["/2022/01/12/python/index.html","793e762285bda5fadb93ef30459fa2cb"],["/2022/01/16/python2/index.html","a489b9b404dedc9c60c89d8319ef6d42"],["/2022/01/19/python3/index.html","2091bd5724d47f741720c8bbdf8e687f"],["/2022/02/28/c-biao-zhun-ku/index.html","dc6f1d91f8a479d4b1a73d179b216a2a"],["/2022/03/06/cpp/index.html","c77d900874cc12415ebc46a96073e026"],["/2022/03/19/python4/index.html","1dc83a0e7c44e642d19ca7a8b400a274"],["/2022/03/25/lambda-han-shu/index.html","7ca142112cb37b329701f68b5899432b"],["/2022/03/26/python5/index.html","50ad95ffffd37bdf20375bd638f22413"],["/2022/06/02/python6/index.html","41a90e1fd2d6c9aac4c96de77575a2e5"],["/2023/01/06/python7/index.html","8bcac65d9fbb42b09c711438a3985615"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","072ea62a983b0c5e14407de8700c20ef"],["/2023/04/16/machinelearning1/index.html","3f640ab6b56ede86a378fc33eb44417c"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","ec262bffafbb35e4f80e4b5e39177dfa"],["/2023/08/08/python8/index.html","7acf56b134540456ecc2200cb5737099"],["/2023/09/05/deeplearning01/index.html","9dd0177eccf3576d6d7f3130a261777a"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","6ce8be6406b51425dbd4d94a8254226e"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","4bbfb323a3debf64f322a0cc5880b67b"],["/2023/09/26/springboot-0/index.html","766d983c439d4026d03e89bc106b251a"],["/2023/10/13/cuda/index.html","cef282d4c2b2ccc801f411e721e5f926"],["/2023/10/14/cuda-python/index.html","1f874e7adf33492a1b850a50df75c1f0"],["/2023/12/21/dl1/index.html","6c8bd6dcf3ff2f694f7b291979cb131a"],["/2023/12/22/dsandad1/index.html","052bab09e88399ed7a234d43407bd123"],["/2024/01/22/dl2/index.html","64527723c459cca1076d5320d1bd3de4"],["/2024/01/28/production/index.html","6a790a9201b977d5908cbc00d63222d2"],["/2024/02/25/mnist/index.html","cf3925244065a21cba4e478541bafb87"],["/2024/02/26/ner/index.html","bf5c37e839263269a034bae2ce244f1b"],["/2024/05/18/springboot-1/index.html","5b6d2cf6e465d5653f1810a6ab476f00"],["/2024/05/26/multicategory/index.html","84da87ff7e40a9ab932dacf309391bab"],["/2024/05/28/springboot-2/index.html","be5d3a523cf21c4827b471b0ccc1b602"],["/2024/06/02/regression/index.html","43396e15582011e71fe9153bea489ea8"],["/2024/06/03/imageclassifer/index.html","b94b6a2ed167eeec3723dc51fb1ebb61"],["/2024/06/03/nlp/index.html","9053a1905f9feba0cafe3e25e5e074b0"],["/2024/06/05/springboot-3/index.html","f5300e03295099a304530e45631ea1de"],["/2024/06/10/trainsoatmodel/index.html","a1223f950c445699afe69eb0c4c2eec3"],["/2024/06/15/collab/index.html","b34cef40f690a20e3fe0e8fd86c45515"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","03f1069d0ae345f284db838fa0947d5e"],["/2024/07/04/vue-qian-duan-an-li/index.html","121d896e68cf21907166c525816447bc"],["/2024/07/05/element-plus/index.html","c94d369514ee8f7236cdcd4c194c9c8f"],["/2024/08/10/vue-kai-fa-an-li/index.html","4d4ef1cdec6cadf5278bfd7aebd398b5"],["/2024/08/26/ddpm/index.html","e095711c1d069450bb8bec711fa65050"],["/2024/10/15/redis/index.html","1895ccc892e3658c7baea345cefc9740"],["/2024/11/30/leetcode11/index.html","7c737c5e3881d3544e95bb28475c031b"],["/2024/12/21/tabusearch/index.html","79787a1214edb72d2be4090696ef5484"],["/2025/04/01/hexo-bu-shu-dao-hua-wei-yun-fu-wu-qi/index.html","b8272a9a5912654d6dfd7e0918b0f954"],["/404/index.html","881ae2fbc0f7f83b605649d328884134"],["/about/index.html","1a568bcaa58631555f46e841985c76bc"],["/archives/2018/09/index.html","e0f28fdbf774ccd075de8f592179b578"],["/archives/2018/index.html","42bacd40608afd4ba31d3261dedc69af"],["/archives/2019/03/index.html","05e23cd48fb7c18f4eef6ea667bfbdb1"],["/archives/2019/index.html","89918acaab4c73424c308c077dd8b656"],["/archives/2020/10/index.html","c8bedf9ed7f961523f2b4c4b1e574a94"],["/archives/2020/index.html","7b84bcd9c8bff292b30e62911861764e"],["/archives/2021/05/index.html","30224ae829d9d397315d9fd2cf0ee782"],["/archives/2021/index.html","344c7819f4a63da5c3e156082941e28f"],["/archives/2022/01/index.html","bc2cfd7544c5125a66a79011a00c330e"],["/archives/2022/02/index.html","0cac6afc93d100a539a9337c66713714"],["/archives/2022/03/index.html","064c19d26c18091263b1990a477fb17b"],["/archives/2022/06/index.html","0801ac5dbed7415b273d2826c129a50f"],["/archives/2022/index.html","ec90b2425c8094ed1cb787faebec6ac2"],["/archives/2023/01/index.html","611a3908c591cd0a9a59e4a9b1d9e3a1"],["/archives/2023/04/index.html","f52b3e7f7483b16914d9c1487376853d"],["/archives/2023/08/index.html","a688a4930a3c00044864b0f8d8831781"],["/archives/2023/09/index.html","817da202da332dd304f9dc97f744ce18"],["/archives/2023/10/index.html","fac14e36fc9bf6dc7c6da98a9e3d45f4"],["/archives/2023/12/index.html","d5e25029c392d72ae157b6355bf6c649"],["/archives/2023/index.html","9a0dd4756689d71f51928db77e2c7c4e"],["/archives/2023/page/2/index.html","39ab2bd78de29d1b1d0da9c3fc05ed83"],["/archives/2024/01/index.html","d5b3813b8dcbec1af67f121e78a96166"],["/archives/2024/02/index.html","fca11893a2dc12ac6e419aa5448bbfab"],["/archives/2024/05/index.html","924d747225e8ded8f5dcb5e5c058737e"],["/archives/2024/06/index.html","f61313fa361383132c38bda4d22ca054"],["/archives/2024/07/index.html","7161f3f9ad74bf1eeb7ab6085e467947"],["/archives/2024/08/index.html","bd28114422d00135e581c1f4a96e4c71"],["/archives/2024/10/index.html","32e9e57e7ad0fa716454c841db4025d5"],["/archives/2024/11/index.html","c3f58bb3063de05b8616ed7c28e26f65"],["/archives/2024/12/index.html","72108838ced184d40eb7bc60678d2aac"],["/archives/2024/index.html","0437e96f9df0547de72984f1f9ab9267"],["/archives/2024/page/2/index.html","1ddc47399bc23c76d9ecfe9ebbd8a4dd"],["/archives/2024/page/3/index.html","cd12d14b5305b23493b74d773024be9c"],["/archives/2025/04/index.html","533d65189ee28c12fad808d167cd50f7"],["/archives/2025/index.html","9893115cc08676338f6572a18e9a2317"],["/archives/index.html","affc422fb512a50c638f0ee4e8d9de56"],["/archives/page/2/index.html","e8589faa89c4eaa23a17567553ce319d"],["/archives/page/3/index.html","8daa1e1c6c6fb8f0522b47bf9032e53b"],["/archives/page/4/index.html","9025befaf0d230948290444735187bca"],["/archives/page/5/index.html","3757b874f8243b9e5ea577d2bfa75ce7"],["/categories/C/index.html","2c08d061c8e182f520aa4e492b6480de"],["/categories/CUDA/index.html","a7338c4b9999666f067c66eedf073ea2"],["/categories/CV/index.html","d79f3169d8e05427e4c072ed18662bb5"],["/categories/C语言/index.html","88f21f69e9aebfb4293862397077209a"],["/categories/LeetCode刷题日常/index.html","b2d8f39e8c3197974eec47c21e70fb2c"],["/categories/Markdown/index.html","a99a1062ec6b7a659088244c66300071"],["/categories/NLP/index.html","0658fac883489bbb5c0e63bee955cf74"],["/categories/Python/index.html","64f6bfeb84f63355c9c49127496f3e62"],["/categories/SpringBoot/index.html","1760f1677cd2ee64492c38242895767e"],["/categories/index.html","cce60e01c37d44d1dee1009583137289"],["/categories/前端/index.html","350b944c1861c4b4146cd116cf4ea3aa"],["/categories/协同过滤/index.html","76a65bf8c85cde52b74da801aac85697"],["/categories/博客/index.html","595e77558bb6395beefd90364ffcf335"],["/categories/启发式算法/index.html","69607447925da100fc54c079fd19919b"],["/categories/数学/index.html","b424852e1c421785560b30387b4e4755"],["/categories/数据库/index.html","7cc7cd02731c124df97bf81e6532838f"],["/categories/数据结构/index.html","f1c8bd0d8327cce55a242c9830fad44c"],["/categories/深度学习/index.html","080223355d442c13b1ca66feab0f92b4"],["/categories/生成模型/index.html","efee5ea6361597b40bd9c1beb42c5f41"],["/categories/神经网络与深度学习/index.html","919511f6984c18ea4722e9a01c797a03"],["/categories/算法/index.html","a20100bef2091d0dc59761fa53c0c2e3"],["/categories/训练模型/index.html","c9c93b3888aa9624718fb22bfea2a8c5"],["/categories/面试题/index.html","cc59cc46b78af519bb570f7af1d94239"],["/contact/index.html","9016bcf004e8d92577284f746ff3c10e"],["/css/barrager.css","781109600420d4e2ff5462b3a99ae72e"],["/css/bb.css","d2887c4397de52c471396a3139b119b3"],["/css/dark.css","0a82a60b6fe79cf7379e6cc87f142237"],["/css/gallery.css","9f3bc55e2e7fb2a9c92b9eb0d4f8f364"],["/css/gitment.css","9d4a8f72a1b8821e173b1dcfb4977402"],["/css/indexcover.css","678d8be62d67e5c7a2ca60c190c3ed41"],["/css/matery.css","4288ba29fc1cd08bdd6bb13fbff90414"],["/css/my-gitalk.css","b1060e3f2c3df3253124901a68ccd79b"],["/css/my.css","f02062ee419dd4bc5dbf80b61643d3f8"],["/css/post.css","de571505629fd1c93983afd28126e869"],["/css/reward.css","39458bf8a204d7a0bb67e5ad5b75652b"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","79f1bf69e5e35b6c1f11ddd2a7c439ff"],["/index.html","a02ac6e3ae826286510bd3f12eee9bbe"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","2a8aa6584bcf82cb16042019ac6e22d8"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","bb094971ddee3e9bf1064df80caed2e9"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","cba9c42b64af5c77f7606dada7aa07c8"],["/libs/gitalk/gitalk.css","40504af5bcc40a1f1451da88df18cac4"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","b96e6baa8bb2dda20d16ee5cb71db53d"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","ffcc787c84746da4a0a45541d4cc427a"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","c3897cdf38eea17a821df75aaa160647"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","fe689493b516a3fdbcd2f545029b1d19"],["/page/3/index.html","518790db61a64bcb0abe13120a77276c"],["/page/4/index.html","07d871a2a8fbfbcb8ccaa98c1a9933aa"],["/page/5/index.html","94bcd3cdc59132b5ce4b8f8eda5ca6ef"],["/page/6/index.html","0610ce7f34d537d4f28961255a56dc1a"],["/page/7/index.html","edc19a03de912ae823dbf22729aa85a2"],["/page/8/index.html","70459aa56908023bca40f2064260ba70"],["/page/9/index.html","72cce7e676f474714271ef0b0d4b20b4"],["/sw-register.js","733f04247e4c80b7ba8d96e977f9c9a0"],["/tags/CUDA/index.html","53883b9ca1aca4b35de39c51ea1ebbc2"],["/tags/C语言/index.html","370096e1590eee0f17849738facac865"],["/tags/DDPM/index.html","0a5d30a8ca5ea9266fe5364e5a806de3"],["/tags/DL/index.html","9871e704345d31b536d020a8bd4ca610"],["/tags/Element-Plus/index.html","9a48ebcc3af98c0eb4a89825366b820b"],["/tags/Java/index.html","727187c6dbb02d915f22164de567bb8f"],["/tags/ML/index.html","10735d69c4efe00b0c5ffe968593d0ee"],["/tags/Markdown/index.html","989644a74ed404c69bb12c2bbe4fa9f6"],["/tags/Matplotlib/index.html","3dae779aaaecc14dc38bb6152b1a4396"],["/tags/NLP/index.html","cdd94fa1d4e8f063e504150a6a9960bb"],["/tags/NumPy/index.html","64955ce32e3c50e42c1607a6fc493835"],["/tags/PyTorch/index.html","1a77559ff9e6801f1edade7a0860793c"],["/tags/Redis/index.html","e5dbc61bc5d244c6b6fdfe287af19a4f"],["/tags/SpringBoot/index.html","89290a26bab695dbdb74e58105267016"],["/tags/Typora/index.html","c78040663379c198c229757e1b56221e"],["/tags/Vue/index.html","cda9ed4da2d71f07aeb5aa80a7822675"],["/tags/Vue3/index.html","894c91165145af94f23cdf2236e76773"],["/tags/array/index.html","a9178ef41eb0f8c2f95915a33c199a12"],["/tags/cpp/index.html","e83fc46468ff4f3e705d6fc21f75e3d1"],["/tags/cv/index.html","62fa92c1843f33d73385baec45892a0a"],["/tags/fastai/index.html","ff09103d0741fb7391d952f69fc60b01"],["/tags/fastiai/index.html","247e1966f73581bc8d028c5cc7af782f"],["/tags/index.html","a70a965c49a10aedd3c4937c2133a8e6"],["/tags/lambda函数/index.html","21dde247d6edf7fad0f58aaafe4d008d"],["/tags/python/index.html","e078419557cc17716a7397b35fc080e8"],["/tags/two-pointers/index.html","ce09d0ccc77048a5166f6a77d3d33cfb"],["/tags/优化算法/index.html","c8ba8e8b69f71a3d3932689b37f2567e"],["/tags/函数参数/index.html","f9355fdb2aec63e2f02b574828f9f28f"],["/tags/函数式编程/index.html","8c9bafbd95232e816cafa5de8d8a3d15"],["/tags/前端/index.html","e5f77d14a37a00440c1f00c6269a2674"],["/tags/前端开发/index.html","a3aa4fc08ddfb39a5deef84d4f97d067"],["/tags/协同过滤/index.html","f3d7a21d409ecc96fde8762ef050cfe5"],["/tags/博客部署/index.html","8f064641163cd6486726f0ae08f54d60"],["/tags/启发式算法/index.html","38e0d210e12c2fe009b9e0b3954ab05c"],["/tags/回归/index.html","187bfe1444c6f7f41e25a214d82abbcc"],["/tags/域名迁移/index.html","81045905a4c7254e9627ba0201d22414"],["/tags/多标签分类/index.html","501298404f93cb693e59b054a928e7e0"],["/tags/指针/index.html","909c17ec9832742961105a6627d5f716"],["/tags/数学/index.html","052b1da1b7d23e7b200f22ec18394f60"],["/tags/数据结构/index.html","1586defc9e9e7263bbc5f372e56264d5"],["/tags/模型/index.html","2583908a01bfc01234190089830a6305"],["/tags/测试与异常/index.html","aca7a9051b85efd741b66c9989987bba"],["/tags/深度学习/index.html","1205404c57ce727fd824ee804f5d6e02"],["/tags/生成器/index.html","45d175f20c30e984cb335c5c2e527045"],["/tags/生成模型/index.html","0a901a2715a1d0a38d9e2ce5ab787564"],["/tags/神经网络/index.html","6ebfff14a95e58c520a2353383b79b2b"],["/tags/算法/index.html","b8ed9c62420600c5475b90b8a93ce552"],["/tags/表格建模/index.html","140408b05860cd03727b4956eb850eea"],["/tags/计算机专业课/index.html","2e0f4fe13dc8655a8132688deb7c892c"],["/tags/训练技术/index.html","4b1535206e23bac4edb26858a3d4f4ee"],["/tags/迭代器/index.html","631b5b3a809c0de076ac777a3262c38c"],["/tags/面向对象编程/index.html","44e936c5813cb9fae1f864435b515722"],["/tags/面试/index.html","cdcb55b94155b2a7e9140400f58de171"],["/tags/预训练/index.html","ad3de3f2884efcb4edafecd4cb967a1c"],["/tags/高阶函数/index.html","a9c80b3106abf60eb7a1abd48aed3d1b"]];
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
