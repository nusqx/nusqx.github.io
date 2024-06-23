/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","83b03a35450503a134940d24ad98f231"],["/2019/03/16/c-cheng-xu-she-ji/index.html","572c7303f5541922a805ed7bac0e94f7"],["/2019/03/29/c-zhi-zhen/index.html","85f2675f4bf1614bc64b10b2d5381bfc"],["/2020/10/15/ds-algorithm-md/index.html","d7a55c8d5ad0015130199c19faea6a6b"],["/2021/05/18/algorithm-md/index.html","a6095b3ba53f103e5aabcd0eb2eeaa00"],["/2022/01/12/python/index.html","4b08faf6f15118a220f237087b3fc340"],["/2022/01/16/python2/index.html","99db358a5e39850a2a67fc84d6848660"],["/2022/01/19/python3/index.html","92acc17c68a07a28c35fef5471f2782b"],["/2022/02/28/c-biao-zhun-ku/index.html","b80d83cb26c31e9236db2b72870b8bb7"],["/2022/03/06/cpp/index.html","9c2218d79c696ca3b44546955e250faf"],["/2022/03/19/python4/index.html","dba7d5d3b6607367c3016af3fdbeab92"],["/2022/03/25/lambda-han-shu/index.html","c789f837cdc5672d313f2e4fce548184"],["/2022/03/26/python5/index.html","88a1bb2bc204e5ca5cc2241226c56a23"],["/2022/06/02/python6/index.html","e79a750a586bac02fdd3783eef3f529e"],["/2023/01/06/python7/index.html","7572d5ff4fd0737163c27ff052feb612"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","4af3087e5a4707e1eee9be063b12e3e6"],["/2023/04/16/machinelearning1/index.html","0c9c53cce116dece9fefbf755706c9db"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","910d4e7a10ff3005ada614e0f523fddd"],["/2023/08/08/python8/index.html","3efcc5fc25ed827414973b0404e5e6ef"],["/2023/09/05/deeplearning01/index.html","630445d1dbc36e6c18384f31a0b2654e"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","87fca28dbdaff1d035525c41578673aa"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","7af3ab497ebfeeae339c4381ac8a5201"],["/2023/10/13/cuda/index.html","a04ab2a392c005f711c29b32f502627b"],["/2023/10/14/cuda-python/index.html","5ba71312190212bd9fd5fd3ca5a82472"],["/2023/12/21/dl1/index.html","5baab5dc0a51e96a909acb0f88f9cc7d"],["/2023/12/22/dsandad1/index.html","a7826180b79c775c9329f166fa421236"],["/2024/01/22/dl2/index.html","2daca53e799ab6bb9f1e5ac5062d0f16"],["/2024/01/28/production/index.html","fe4e297887de79a292983a116825e633"],["/2024/02/25/mnist/index.html","820d1778ed410791d4bf1ab7c619681a"],["/2024/02/26/ner/index.html","edf3faa48f110a385d586b47e4883913"],["/2024/05/26/multicategory/index.html","ea157496045771be8c752aca3873fd45"],["/2024/06/02/regression/index.html","f23f201ebf670398721c6cd7e066820c"],["/2024/06/03/imageclassifer/index.html","661d7652921ed36160b41407e527429a"],["/2024/06/03/nlp/index.html","539a9370b1a0cc12f72ead4865bed8b6"],["/2024/06/10/trainsoatmodel/index.html","3486336eee50e8b0acf5e04948f10903"],["/2024/06/15/collab/index.html","699b2f8ed84748c9e2ecd1bdfe985448"],["/404/index.html","eda4f8de349b7d4e969ebbe0bc760987"],["/about/index.html","e26a75de9920b68ae857ee8123b22605"],["/archives/2018/09/index.html","6aa1982ad7c4e83955e232e70575a147"],["/archives/2018/index.html","12d25e7a660443febf218152b3104a0c"],["/archives/2019/03/index.html","ac22a8ccedb4a309efe9a008bfccaccc"],["/archives/2019/index.html","fc2afc068b99a62719f60648dcae2d7c"],["/archives/2020/10/index.html","f41b5c5273a9c24e8c91d3cdcfd7bff6"],["/archives/2020/index.html","27ad45bf2104065fcbf2e8c075bb4666"],["/archives/2021/05/index.html","755718a07fcef2ac215866fa09242b4e"],["/archives/2021/index.html","b700620632b8506d7e44c68db5ab8225"],["/archives/2022/01/index.html","2eff4193d432ac4d091f7feb6c48211e"],["/archives/2022/02/index.html","f58685ecce0a2086afb319e65eff7a66"],["/archives/2022/03/index.html","09894e5341248885b9fcd26b6b118116"],["/archives/2022/06/index.html","0ddbabb5a72a3479396aca8cf0b899da"],["/archives/2022/index.html","d740ce1cdd36aa2be51bede82b15269f"],["/archives/2023/01/index.html","05935127c4e53be086d9940ce1ce009a"],["/archives/2023/04/index.html","2edcfc8286a42315fb994ee5a1d8114d"],["/archives/2023/08/index.html","9561862d5a93384ddffbb38f3b66920b"],["/archives/2023/09/index.html","75cbc6c93a2df4c1a282dc146658a286"],["/archives/2023/10/index.html","079984b5c25cf3ad5269b099ead24321"],["/archives/2023/12/index.html","ef887a1426e33721a8a383f8302261f2"],["/archives/2023/index.html","2e7be4df8ffc326a4fe50c39fd47e7de"],["/archives/2023/page/2/index.html","42cc98776d29f9d043757768dffd0df0"],["/archives/2024/01/index.html","8e0e3efe7c11c2ac6ee8dc203dce0651"],["/archives/2024/02/index.html","bf7520b3106ac679002f83b78ec23f5f"],["/archives/2024/05/index.html","c9ecc1b3d913fe77c37bc37fc5dd16da"],["/archives/2024/06/index.html","99e157065da3513b52da8264f36c6525"],["/archives/2024/index.html","2e49fa723245f708eef4fba995a52709"],["/archives/index.html","f882a0327c42df1136832e4b3251740f"],["/archives/page/2/index.html","9646192b02a59558e0f1b0d8ca860e66"],["/archives/page/3/index.html","b82b0820815814b7954b57f792f7a034"],["/archives/page/4/index.html","9c6e1170386ee52bb2b3de996a4075ad"],["/categories/C/index.html","6a68164d651dd22830bab190a188f895"],["/categories/CUDA/index.html","d4a8c17d060b8a2021f6047f97cebc37"],["/categories/CV/index.html","6ff84b7223ad4c46221decb72e3f912a"],["/categories/C语言/index.html","1a4eb8a29737e9db3d6cde96daadc3c4"],["/categories/Markdown/index.html","a3df06dfd79e97065524f2828dae19bf"],["/categories/NLP/index.html","e96ba431ba3d6ac9817ae2c01995e7f4"],["/categories/Python/index.html","1b973d672118ccad7b30820f292bbf48"],["/categories/index.html","5512b3717dbe2ed51525fb6ccd51960e"],["/categories/协同过滤/index.html","412e86d568156593b02773ac97b230f0"],["/categories/数学/index.html","411b61e872a97b24810d9aab1cc87e99"],["/categories/数据结构/index.html","59847a7b38c481f4280186c267a96698"],["/categories/深度学习/index.html","bc6c8625c1c22ebf8654b9c4c9579fb2"],["/categories/神经网络与深度学习/index.html","27842643d1570a8c22b924403f54a1af"],["/categories/算法/index.html","ab3f4c0cccdc4a31188eaa2b056a231e"],["/categories/训练模型/index.html","df180bd67049aceda9f8d101186b1dc1"],["/categories/面试题/index.html","7a918b3930b18eb18cf292c895d235fc"],["/contact/index.html","8fc181d9ae76337edadf8ea7dcc6c4a0"],["/css/barrager.css","6729ca69b771ed5d3e4ebf7966abffd3"],["/css/bb.css","e4db4dd84a957669f5aa8bcda172e679"],["/css/dark.css","4727816c1c1784adbf8c1e409ff6f29a"],["/css/gallery.css","c4e2873604ea55cec3f9fa22f7d0be78"],["/css/gitment.css","4caa54194db1557ba39c3be3b72f92c8"],["/css/indexcover.css","56f8a78083b1e28bdf98df031cdae0b3"],["/css/matery.css","135a2bf39f971f6dd5589a8a66d57a98"],["/css/my-gitalk.css","5a791b749c133c8aebfb1058da294dad"],["/css/my.css","0f87a2b228965e2614f03a0bf9de2f8f"],["/css/post.css","fa5a89bf36df68da7b2c8d0ae36c1503"],["/css/reward.css","02d7d8f02fcb2e1c1e28916da95cd061"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","8f42c9cd58719518ec0d38e016a997ad"],["/index.html","9dcef84eb540eabf2febd4d445eace60"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","a5ce906837a0a15ef6b792f31c72edc5"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","8ab5099a8b1e8083e46ce43746bd20f9"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","20bdde25700aa1b2b73b239293d943b8"],["/libs/gitalk/gitalk.css","54cd3d600d008903ae9d243a79c32cfa"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","17b7c1f306f0eb71f47a1ddd09a3cd15"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c4c5d775ba8a38ac98b84168919bd14b"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","583cae4de5505321c392a39ad8b19cc0"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","4eee112a78762d8c72686415876036c0"],["/page/3/index.html","f4d0383f5228735daadfe7c1d2055169"],["/page/4/index.html","1927037921ebad0b99234222b4c3e72a"],["/page/5/index.html","169849bc13243333173683736c07e139"],["/page/6/index.html","cb5ce5d9432f4551f15ebc398a033360"],["/sw-register.js","28cd1148fd90f0df65aa5211c5d08b16"],["/tags/CUDA/index.html","5b9df4513c3bdcd29a56d683e4f8e9d0"],["/tags/C语言/index.html","10419f825a048a17d0ee9e3b2d8376e0"],["/tags/DL/index.html","2015acd35e591a8e460e7af3d57e565d"],["/tags/ML/index.html","7d5c136cfad94e58bef5082956620b67"],["/tags/Markdown/index.html","befe8a46b49ebb703c61a96f275c6b90"],["/tags/Matplotlib/index.html","eda539604892638f507455b98f7af6f1"],["/tags/NLP/index.html","1b6cd1c5d1691760f9ee03bec11ff51f"],["/tags/NumPy/index.html","d22d27a6d0639c010a7020a51dbea947"],["/tags/PyTorch/index.html","c8c715d4bc32545fde092814a5bc93e0"],["/tags/Typora/index.html","4a4095ae11198f61b531b9d3e47e5540"],["/tags/cpp/index.html","95680c667cb7f161d74e9027b9e97590"],["/tags/cv/index.html","9cf76f79e9d940e70837ec2ac8030f95"],["/tags/fastai/index.html","68dc2e372bdf9d32eb001b87a0b869a5"],["/tags/fastiai/index.html","15b3f9eb00e472ad2a1a66ebd33d5caa"],["/tags/index.html","630a0a463627a0a9457d814de7e25dfb"],["/tags/lambda函数/index.html","9f0976f7e54a9e7bf56d5e7adfaf1a89"],["/tags/python/index.html","d53006592553c6252f58ac7c2422194d"],["/tags/函数参数/index.html","f93f186a96639cf33a12ed364bd4cd48"],["/tags/函数式编程/index.html","625ee1aacaf9ce8cc52ec0a7965ccf9e"],["/tags/协同过滤/index.html","124b6e5bd2f72efdf26370bbd0f64fe4"],["/tags/回归/index.html","e3bbead2a7b71f0aade7244988f459f8"],["/tags/多标签分类/index.html","6385255af22777677b2da9581f245309"],["/tags/指针/index.html","d39a6cdc9bb9f34e9928835da9ec6aa0"],["/tags/数学/index.html","bc1d2b69c32fa81a7ce9149947ccf2b4"],["/tags/数据结构/index.html","8f21fb48c91dcbac645ab8469ae37eb4"],["/tags/模型/index.html","3f8293a305c4bc9c200b548d9129f712"],["/tags/测试与异常/index.html","dc31a0b289cfcb45acbb15bce9f72d0e"],["/tags/深度学习/index.html","c0532336ac85a18b05a876fa689c130f"],["/tags/生成器/index.html","99673577674ef95a178e7ff7db2df66a"],["/tags/神经网络/index.html","20af268f9c605ea2444429cad4447427"],["/tags/算法/index.html","c9dbea54e00d46638156650559b04c49"],["/tags/表格建模/index.html","65091b0a8f49d29de0ff06341bd39d5e"],["/tags/计算机专业课/index.html","042f2c9145d93f3b5a9f7e5addd08ce7"],["/tags/训练技术/index.html","8f2e62dbe05fde781fad055210ee4efd"],["/tags/迭代器/index.html","f21b0d4a0ed9b290972be476053e8761"],["/tags/面向对象编程/index.html","d04b49cdaadf8dfd36212f932cfce67a"],["/tags/面试/index.html","9f065fc847205d68cafad64e799db215"],["/tags/预训练/index.html","153643e806d0c01cdc0a599de8c73edb"],["/tags/高阶函数/index.html","1a04cd4297cd9687d33348a512a00784"]];
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
