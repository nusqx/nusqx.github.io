/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","5da3b993b7c1a5b097c8d6693d096482"],["/2019/03/16/c-cheng-xu-she-ji/index.html","b1089169957a43c26f134499ecd5c986"],["/2019/03/29/c-zhi-zhen/index.html","646f1c56116dce25320a60ccdd8ef6f6"],["/2020/10/15/ds-algorithm-md/index.html","137a8e9e5a1cc3f470fe942322ef073a"],["/2021/05/18/algorithm-md/index.html","27e326c4db8a9bb6022511f2c30cd8b5"],["/2022/01/12/python/index.html","9d45a4ccbe80c40c203c2011c1247dbc"],["/2022/01/16/python2/index.html","a5344319ca59822d713a6c3ebfe7c2c8"],["/2022/01/19/python3/index.html","7a3d21e477f5518c20b6a7924cf75449"],["/2022/02/28/c-biao-zhun-ku/index.html","0c55470879635450dc94224dc2ade93b"],["/2022/03/06/cpp/index.html","b5b46db0d409a8a0affeac569e2688d4"],["/2022/03/19/python4/index.html","a46c4e6c56f1643c131eb5fb49a5f13f"],["/2022/03/25/lambda-han-shu/index.html","32929083f2a1b04b1f99a034687cbb6c"],["/2022/03/26/python5/index.html","7d1009244b642d43ee76b3349df5ff3f"],["/2022/06/02/python6/index.html","893b8a6dca21b57f0975df6d07ebc9be"],["/2023/01/06/python7/index.html","29b5f578c73ee5024d85cc42c25f7c4b"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","801b8e7fa4cae768304e4b3f3caec2b1"],["/2023/04/16/machinelearning1/index.html","d6f9aa3afbb3dade4eecf69fc6ab81ec"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","4c806fb1579eee706d74e595bbc74559"],["/2023/08/08/python8/index.html","19da434f5e5f811ee75edf4e00b3f83a"],["/2023/09/05/deeplearning01/index.html","60c5325b31a489157221056e6cee6aed"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","61aef89b10abbd76bd157d9f05c087a4"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","0410ccf4d5178e96439c589215c0621c"],["/2023/10/13/cuda/index.html","2876be23f4e2eb213be40310d8a37ca1"],["/2023/10/14/cuda-python/index.html","a40bf1289a7b2748cbd73fe2af9f3155"],["/2023/12/21/dl1/index.html","a015a91534f9814f391ebdad3821f253"],["/2023/12/22/dsandad1/index.html","492cd0f9294ed7e752fd68ddf2b5af26"],["/404/index.html","e201dcbab47eda36e8045685f9b1285d"],["/about/index.html","f85a0a1b0fdcc43b04c81a017a975683"],["/archives/2018/09/index.html","30c7cf5e5520bc7f94faa327498efd09"],["/archives/2018/index.html","f24b1bb3f3ff9c73dad9c6aea4b85235"],["/archives/2019/03/index.html","cb89df1075156cc4eadcc3d81cab1571"],["/archives/2019/index.html","7b628d99fe000ae4e6dc632ad3e146f6"],["/archives/2020/10/index.html","233523b515c88736b4cdaac97fa8adfe"],["/archives/2020/index.html","71a589dda527479b04776fb6ce92b3b4"],["/archives/2021/05/index.html","db63a50ff9be41153728d216826e3a39"],["/archives/2021/index.html","e1182df4658c0818d40f5f8e82a5210b"],["/archives/2022/01/index.html","10e659e73627ca7372210010a62d5d5e"],["/archives/2022/02/index.html","6dcd4f15c85929585eba2b823974df8c"],["/archives/2022/03/index.html","5fb963fb9be37783edb6f4aeedc5ca2a"],["/archives/2022/06/index.html","1902529fdbae0e648cfcba753d0cfc17"],["/archives/2022/index.html","d25363cf02f3a2c274ac853bbe009aa7"],["/archives/2023/01/index.html","c9015f5943fff1f36ce99377967b5c36"],["/archives/2023/04/index.html","43b81f114053f133c0dab7957b4999f1"],["/archives/2023/08/index.html","d1a5170c904add0360677c8b76d4619a"],["/archives/2023/09/index.html","086bcfe5a157aebe71063f87393e5fad"],["/archives/2023/10/index.html","b9f5f8cff2de7fc1bb1af7e0f33725e0"],["/archives/2023/12/index.html","ffb83a06c952196f706e6775d23ec402"],["/archives/2023/index.html","1b8e535ca175bb8257de887f2d26f463"],["/archives/2023/page/2/index.html","fba61b8675c18212b4e071dd6b610e4e"],["/archives/index.html","9d14e0fff12bbbfbfad631e8b9125df9"],["/archives/page/2/index.html","4586afa564599e9fa392735536388008"],["/archives/page/3/index.html","6314a65dca36ff8a94f5ac81e94f2a7a"],["/categories/C/index.html","0b3dba463f46b346af9d1854c5603174"],["/categories/CUDA/index.html","f437571c0ff12e0044512f9574370f0a"],["/categories/C语言/index.html","816b500e7dc5445905a277fe3aecaa25"],["/categories/Markdown/index.html","fec0d55c343af893bbf2758d25150a7a"],["/categories/Python/index.html","305f809a6655df496a64b5e8c15ca48e"],["/categories/index.html","4c4cfe2640b0c74b8b6e77aedd41df0d"],["/categories/数学/index.html","11ceb17a8c84e0a9567662a5ae9459ba"],["/categories/数据结构/index.html","d107e95bd0f7936ca741a5ceeedc7bc5"],["/categories/深度学习/index.html","b214b4d5ccefad9e08956fe689750f04"],["/categories/算法/index.html","e52ff472c784911594ca4ef00e03f461"],["/categories/面试题/index.html","2a03733dcf029d7db01348fe80aefcd7"],["/contact/index.html","66396a368f27916ba45679c1d2a06dcc"],["/css/barrager.css","a3b7c99137a0d0e3232a5c58eee2bce8"],["/css/bb.css","3b642d2f23090b252c8719a7ccba8453"],["/css/dark.css","e19687a2ba02a5d7aee7e0c3fc42895f"],["/css/gallery.css","ced6d793424e27ec21019f9e7ae48be9"],["/css/gitment.css","47a0e5a70abfac026e1a13bf6ae48808"],["/css/indexcover.css","7b250a9fe34b27259ebc2806532ff44d"],["/css/matery.css","1433bc39ae8e107e63f9ad9e19a9eb11"],["/css/my-gitalk.css","fc601f185c683191b36b310cda2f7689"],["/css/my.css","535d00a179a3ec80855e1d1a02fee396"],["/css/post.css","d24ac7203939009c8f9b316014250ca7"],["/css/reward.css","06df6f721e213cb621105c978cb4b8af"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","4a46f1b0a23e9218116c2e877ef1625f"],["/index.html","98065bb05ec3701bdea513004245f4d3"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","24ea0302299447cb351bf38530e8cc9e"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","9f442e015273427676aad108b0e0de0b"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","c22ea5809eb096258d6b49c2f915aec3"],["/libs/gitalk/gitalk.css","998f76ab26752e9c3d6ce61b503ec30b"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","f40f29ca99e39ad504f0f9609206b4b5"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","52a26c65166c1fcbfe6b88860fd9ea21"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","5a54ca270def5032f644b2b36ec79faf"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","0f3fdb630c0ad9724173765d6107f364"],["/page/3/index.html","17bce5f9d3f0f3a8d89bdd47068937e5"],["/page/4/index.html","6e1c0477b503143295f79f888b6291a3"],["/page/5/index.html","8f6351dedf4e5da591b2bd383504be36"],["/sw-register.js","6bdb884634ddd38e5c4f64c89795e6b1"],["/tags/CUDA/index.html","c1f87dbb926581a12203b20cec0cc0b1"],["/tags/C语言/index.html","7433ea4c20c22b3b0e49d9d166a7db90"],["/tags/DL/index.html","2fcfc4d0f019020f8cbb67b726b33813"],["/tags/ML/index.html","d9762e628a6df753eee26fe43d423ca8"],["/tags/Markdown/index.html","d3f39e3df6b5af3be7a56d1348f8aca0"],["/tags/Matplotlib/index.html","82804a90cff347ba47c0b66a2a9d9d09"],["/tags/NumPy/index.html","d0d3ae8e7d78c99f3fda54c6739cd83f"],["/tags/PyTorch/index.html","961c2239df34d655acbc21eb785dbf18"],["/tags/Typora/index.html","eb3a62a8c953a3b3e5d4b56f975888c6"],["/tags/cpp/index.html","409a33474a92f01cce2210cd6502829e"],["/tags/index.html","33cc6ea5c2a57d3153d0427db887c245"],["/tags/lambda函数/index.html","bad2a342b6e5af3b81a9687c0618e94b"],["/tags/python/index.html","eb51503fd32c704441ee1cbb32db8874"],["/tags/函数参数/index.html","17be586b3754bcb34845dc2878e3e693"],["/tags/函数式编程/index.html","8476160a4e56eeb4f4982dbd6f1e2135"],["/tags/指针/index.html","3a6dd6c9fd61e9856b61becd2bb68628"],["/tags/数学/index.html","a7ef38eace98074622b449f49121829f"],["/tags/数据结构/index.html","f634a572bd29e84cf042eda9edba5809"],["/tags/测试与异常/index.html","7c0f8a32118d4072a92fc46bbe482133"],["/tags/深度学习/index.html","9fb483b0d38e1422728470ae8383a93d"],["/tags/生成器/index.html","9bcf0ba21f83cf7624c7ee6092b916b3"],["/tags/算法/index.html","18fbe0a850f9ef2e43288d48fb02ab5d"],["/tags/计算机专业课/index.html","4e975b2c91a61da914bdd148f476d1bb"],["/tags/迭代器/index.html","27725eda06400a26c50eb855224bc099"],["/tags/面向对象编程/index.html","fe0ae5af3000ef683502e08fb4c7371b"],["/tags/面试/index.html","762b2e4b719d9060842f917417b0e8bf"],["/tags/高阶函数/index.html","dd9046086c2603b81746faa7a70de538"]];
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
