/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","f5f6550d46ecd9590dd94c99a3b1ce2c"],["/2019/03/16/c-cheng-xu-she-ji/index.html","9c375050e373527d5a3122b39f5d1d1c"],["/2019/03/29/c-zhi-zhen/index.html","910c21897a8f89c4d699fc52dc333b62"],["/2020/10/15/ds-algorithm-md/index.html","9aa8a4d45723fa9c156942d58e5e244b"],["/2021/05/18/algorithm-md/index.html","c7f5d6f166f82cb912997cc7bad8e4d3"],["/2022/01/12/python/index.html","7baf697234711493852a20c6f1a85828"],["/2022/01/16/python2/index.html","5ba9b409e328bbcbef42823085adeac9"],["/2022/01/19/python3/index.html","1932e8dd2a361f970aaaa6ff8d139bc9"],["/2022/02/28/c-biao-zhun-ku/index.html","81ad1a0cfdf3d2ba50fd201b5c09da56"],["/2022/03/06/cpp/index.html","b33533181565b82301873df87db06414"],["/2022/03/19/python4/index.html","1be2e0e2f05d074cf7bf8c02bda8d0b8"],["/2022/03/25/lambda-han-shu/index.html","0477206f6bcde765c4f6ae72ad2a058d"],["/2022/03/26/python5/index.html","aae5108488ade7bf46ca4d065c3d08bf"],["/2022/06/02/python6/index.html","0b20791750fa2c074755c1897a020a09"],["/2023/01/06/python7/index.html","13d8a4cb77097fc7d8674dffaed270c9"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","20b6615968ae6227ce98eb36a61ad26f"],["/2023/04/16/machinelearning1/index.html","36f44db90d18cdab270788f3c5bdbc70"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","687b91f7b8dd0c28634945db79cd3cfc"],["/2023/08/08/python8/index.html","756dd9b021cd048626d4ea01bb975b5a"],["/2023/09/05/deeplearning01/index.html","201ed1b69130ad14dd8c69867241e33a"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","be27de69ad0823bd2080a2371e68359e"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","fad3f1d406a2df377910af49d56501d5"],["/2023/10/13/cuda/index.html","4517b7d17485fa2f831d1bc50c85e83a"],["/2023/10/14/cuda-python/index.html","99357f23d2e3714ea2900bbf5c657a9c"],["/2023/12/21/dl1/index.html","47ece5a6894dc78167012ae9d26c13f3"],["/2023/12/22/dsandad1/index.html","f76525e46f5657124538670c1fb54d70"],["/2024/01/22/dl2/index.html","cb12dd24e53d25aed428982a87a156b0"],["/2024/01/25/mnist/index.html","15118274d6acbbdd8f5ff2e2236333d6"],["/2024/02/26/ner/index.html","af24bac9e247770b91d8fa010dcd866e"],["/404/index.html","c2083991334af15ed45529c128038400"],["/about/index.html","a4e5255f9c435b3d50dea087d12037d4"],["/archives/2018/09/index.html","c33a42c6f97faf0ab6b0809f818f475b"],["/archives/2018/index.html","92aff6b69b1d47d9ca80f983c0fc988c"],["/archives/2019/03/index.html","5cd8617094479ae5537e73d39b729387"],["/archives/2019/index.html","db1067f178525374bdd685dfafe5d239"],["/archives/2020/10/index.html","6987d3cbcddc6043cf78f2fe31a02fbf"],["/archives/2020/index.html","45793cc94525088366bdfa536dc76213"],["/archives/2021/05/index.html","4fa9f8ab8db9bb66200d71de302ef060"],["/archives/2021/index.html","77ce86d0ee11f4745d2f1626814103e4"],["/archives/2022/01/index.html","5b1e6305e0bc5e5d92a7342f02e6e427"],["/archives/2022/02/index.html","adb0fcbc6a20cec222fc4e930f566abe"],["/archives/2022/03/index.html","2a11d95503a7bba3205f0ae54138465d"],["/archives/2022/06/index.html","0e8797965a0cbb2ab33858c554d19ad0"],["/archives/2022/index.html","baf432ce6e38171cea4a9fdcb1e5bd7b"],["/archives/2023/01/index.html","38dc6644efae9ca4565afc248e5502f6"],["/archives/2023/04/index.html","97c87d481d70486572c12b08f140ee9a"],["/archives/2023/08/index.html","9f82e1cc77dcfd8c96949cfd1717e435"],["/archives/2023/09/index.html","abd61120239641f0a8f17db6ad7edcfe"],["/archives/2023/10/index.html","9845cfa3425cb47ea43c47ee3f94da40"],["/archives/2023/12/index.html","ab34d85e7da3e183a512de715d0f8fdb"],["/archives/2023/index.html","9280f2e8d4a9063984204fc81d2fdab3"],["/archives/2023/page/2/index.html","d7b129bde53285b8e4134d1ec0dc6950"],["/archives/2024/01/index.html","ae4c799a1f681807e31a47bd2d5c78a5"],["/archives/2024/02/index.html","a65d4b80be90c086a90cb4854408938a"],["/archives/2024/index.html","1370d3dcca2bb6285ca5d2cf9e8cfe97"],["/archives/index.html","6be1017fd1d90ad0ad631a9b93e6a939"],["/archives/page/2/index.html","643a49d5deb284fc1f2b39f52b3bd376"],["/archives/page/3/index.html","77c3cbfe225b169d11e097edfdb272fd"],["/categories/C/index.html","1b6a8310665e017580b8f2f203b98de6"],["/categories/CUDA/index.html","7cb05a56ea9396f78a5501fe3a32b6a7"],["/categories/C语言/index.html","e11c74ba8f6a4a678dcc3bdb93adb2b9"],["/categories/Markdown/index.html","a14d4e6cf97e56219bc679287f3e08ec"],["/categories/NLP/index.html","94947f1cd43bdca7ee38b7a2ba232806"],["/categories/Python/index.html","b171dff33b629432b4e69a77ea63fa98"],["/categories/index.html","dbcc8ddcab07a553620d9cbff23a3bf5"],["/categories/数学/index.html","5512cdaa608830042d55279c75ecf8da"],["/categories/数据结构/index.html","53712720ec88db4e1af6738e39ebb672"],["/categories/深度学习/index.html","8e1906bc9439a81c44a6d6a3b49f193b"],["/categories/神经网络与深度学习/index.html","c7abe02afa7bbf29d05816de388f8ac3"],["/categories/算法/index.html","fb89bb4615a832f7491b4d370e7f3130"],["/categories/面试题/index.html","ecb14354a5c251dbc5c1940dfe892acb"],["/contact/index.html","68add36887172028ccd5243a5c8c2fb8"],["/css/barrager.css","94be005a04f8b600afc58f7594f5c327"],["/css/bb.css","ee8bfa1efa21f69735fa9d5f41652e3d"],["/css/dark.css","54e8514aff1619953b89344b89b91214"],["/css/gallery.css","373bba5e3aaf50205a498101d611c99d"],["/css/gitment.css","90a0f5bb33b709a6d9547f7338d39b74"],["/css/indexcover.css","d6510cf22a18866f88028bd0e5a20465"],["/css/matery.css","8ccd96d8c7c47c20cb36f331d2ff54db"],["/css/my-gitalk.css","e5402291fb5a3db7a2a6da53a55f5ba5"],["/css/my.css","40cee1df7f24b24456150ad51eb7b3f0"],["/css/post.css","00fabc54b21d16e821ac5f4275eb3b20"],["/css/reward.css","9ef6718f670b2cdf0e10e569d6c7b9bd"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","82d0e57cbfb7740e5a900bc7bddaa3c0"],["/index.html","2d5e02e22eb04af53cc06e5e79b672bc"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","7d7c75761d43002e2698cfb50e36c03c"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","dab36299ecd2ce34ddb93bdd4e352a82"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","cace06a2b87dba6bcd8c7a0197081d46"],["/libs/gitalk/gitalk.css","eef0ef4efe51f20ec4323ace049e95ca"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","06156926df39609b103d35e7741547b8"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","62c94c4b8b1512b4487fe783598cde40"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","1bb3961010a1ac4ddc44208bb5d1dabe"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","3317d52c332af8247b040db6cf07c7ca"],["/page/3/index.html","48f1030151a8f3039cfc3dbc0567f222"],["/page/4/index.html","a6f4de29b6c987b90f1a157cd8fa6c5a"],["/page/5/index.html","853f3722bc7bd2138af124f2e65bc239"],["/sw-register.js","e44f4f3f54721bd930542111561ce3df"],["/tags/CUDA/index.html","a9923cde14a5993fa784350d2f8dc4b0"],["/tags/C语言/index.html","f4dd7f07f2963e676abe2c94129471dd"],["/tags/DL/index.html","a44d6f2f0bb50bfe39495d84217889e2"],["/tags/ML/index.html","cc8577198ad5887b8a6c46eb2829a30d"],["/tags/Markdown/index.html","83cfbce9198113491888eac982b8d2b3"],["/tags/Matplotlib/index.html","e8ef12f6c20c107e79c6ecac64287686"],["/tags/NLP/index.html","b71b23124d45cb73a0c0cb0848cec6a3"],["/tags/NumPy/index.html","0f51c607bf2a20660754f90a3228dc06"],["/tags/PyTorch/index.html","98e3532a96b7ed961a2908cac0c4956d"],["/tags/Typora/index.html","160dca658a195821100bab89057b5338"],["/tags/cpp/index.html","4e26ae8e53900dbd4a50e30bf5cbaae6"],["/tags/fastiai/index.html","0cb367a379065f666cca55ad7ebdb173"],["/tags/index.html","995021c09cb6d721e7a857d448fa64f8"],["/tags/lambda函数/index.html","48fed69f05cc20b162cff89374f63418"],["/tags/python/index.html","fe74521a4216a4a5914b4a4ed1523c4e"],["/tags/函数参数/index.html","7273f7b97cf81d08ff03e3685cf77075"],["/tags/函数式编程/index.html","99b417714208ed15a6c6d8c167f087e7"],["/tags/指针/index.html","9b6a6285877f49764e23c0f46cb7305f"],["/tags/数学/index.html","9b8420eaa0dcd98d549d5d8be6239684"],["/tags/数据结构/index.html","7685c5a085d6b976ba2c5a4af32d1dd7"],["/tags/测试与异常/index.html","4f927d9d13620743f0cd231129e01af2"],["/tags/深度学习/index.html","c3964cd823d49a24cc2fd0a01da34033"],["/tags/生成器/index.html","0593be7b719fed319833762a872ac5fd"],["/tags/神经网络/index.html","a59c95853c5b347588ef69d5f3d472b2"],["/tags/算法/index.html","628665303305120fddd8a5d362105c4d"],["/tags/计算机专业课/index.html","fc010f2d20a7f3b345d743ac028a48ad"],["/tags/迭代器/index.html","8de814f89c5317a93f76594f61a86ae4"],["/tags/面向对象编程/index.html","723dca6bf79c5ccd3d819eeccbb49757"],["/tags/面试/index.html","737a58c5e2e148a0461f860cdb13105a"],["/tags/高阶函数/index.html","671ddd8f12295d8e8d04e54f86ad9934"]];
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
