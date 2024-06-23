/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","1c3f06366089cac179c3561737fd43b1"],["/2019/03/16/c-cheng-xu-she-ji/index.html","2df3da9b62598e1c465bf71fdd7aafa5"],["/2019/03/29/c-zhi-zhen/index.html","538ceba0b325ceb6371210ad7c3a7d77"],["/2020/10/15/ds-algorithm-md/index.html","d20ca1c53f947a3c8e127e204bee5d0e"],["/2021/05/18/algorithm-md/index.html","785ee6d3ecf91c2929b6c036a4686184"],["/2022/01/12/python/index.html","4b08faf6f15118a220f237087b3fc340"],["/2022/01/16/python2/index.html","99db358a5e39850a2a67fc84d6848660"],["/2022/01/19/python3/index.html","92acc17c68a07a28c35fef5471f2782b"],["/2022/02/28/c-biao-zhun-ku/index.html","b80d83cb26c31e9236db2b72870b8bb7"],["/2022/03/06/cpp/index.html","9c2218d79c696ca3b44546955e250faf"],["/2022/03/19/python4/index.html","dba7d5d3b6607367c3016af3fdbeab92"],["/2022/03/25/lambda-han-shu/index.html","c789f837cdc5672d313f2e4fce548184"],["/2022/03/26/python5/index.html","88a1bb2bc204e5ca5cc2241226c56a23"],["/2022/06/02/python6/index.html","e79a750a586bac02fdd3783eef3f529e"],["/2023/01/06/python7/index.html","e8aa808e817bda275a1301f1a2443d5d"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","6c3c6e473d94f92b1a9d2954658ce83d"],["/2023/04/16/machinelearning1/index.html","4981a23a830e98db9bc6fe3e49849d5d"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","910d4e7a10ff3005ada614e0f523fddd"],["/2023/08/08/python8/index.html","3efcc5fc25ed827414973b0404e5e6ef"],["/2023/09/05/deeplearning01/index.html","630445d1dbc36e6c18384f31a0b2654e"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","87fca28dbdaff1d035525c41578673aa"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","7af3ab497ebfeeae339c4381ac8a5201"],["/2023/10/13/cuda/index.html","a04ab2a392c005f711c29b32f502627b"],["/2023/10/14/cuda-python/index.html","5ba71312190212bd9fd5fd3ca5a82472"],["/2023/12/21/dl1/index.html","f30fb12c3090ad94a81b4ff7646327f8"],["/2023/12/22/dsandad1/index.html","f0b1b37fdaa2a598bb22bb7c09853e9e"],["/2024/01/22/dl2/index.html","a1ed58fde200032944733a3fe3199bb2"],["/2024/01/28/production/index.html","fe4e297887de79a292983a116825e633"],["/2024/02/25/mnist/index.html","820d1778ed410791d4bf1ab7c619681a"],["/2024/02/26/ner/index.html","edf3faa48f110a385d586b47e4883913"],["/2024/05/26/multicategory/index.html","2e92b18ef57024b7ec68de19b2ae9488"],["/2024/06/02/regression/index.html","e894945cc142bb3b65704b638e52fe90"],["/2024/06/03/imageclassifer/index.html","1251a0fb00ce57f88334552fddc5fa2c"],["/2024/06/03/nlp/index.html","402b5ecddccc3666a146d9922589f438"],["/2024/06/10/trainsoatmodel/index.html","e5c928043159c95991edfbe06bf0f1c7"],["/2024/06/15/collab/index.html","3c2fa0e2bfcb4e2053bd9578d5174ed8"],["/404/index.html","eda4f8de349b7d4e969ebbe0bc760987"],["/about/index.html","5732023daee1215809635f651ab593b4"],["/archives/2018/09/index.html","6aa1982ad7c4e83955e232e70575a147"],["/archives/2018/index.html","12d25e7a660443febf218152b3104a0c"],["/archives/2019/03/index.html","b819f21b8d79143f46e3d78e5565673b"],["/archives/2019/index.html","b9304ca437ed0e22ab653e48fd6b6b57"],["/archives/2020/10/index.html","397477223100f4658746465bf8c67ddf"],["/archives/2020/index.html","03b59e4df67d146d8bde73031905453b"],["/archives/2021/05/index.html","755718a07fcef2ac215866fa09242b4e"],["/archives/2021/index.html","b700620632b8506d7e44c68db5ab8225"],["/archives/2022/01/index.html","2eff4193d432ac4d091f7feb6c48211e"],["/archives/2022/02/index.html","f58685ecce0a2086afb319e65eff7a66"],["/archives/2022/03/index.html","09894e5341248885b9fcd26b6b118116"],["/archives/2022/06/index.html","0ddbabb5a72a3479396aca8cf0b899da"],["/archives/2022/index.html","d740ce1cdd36aa2be51bede82b15269f"],["/archives/2023/01/index.html","05935127c4e53be086d9940ce1ce009a"],["/archives/2023/04/index.html","e1b4b8d80854f1601163d8c73109f04e"],["/archives/2023/08/index.html","9561862d5a93384ddffbb38f3b66920b"],["/archives/2023/09/index.html","75cbc6c93a2df4c1a282dc146658a286"],["/archives/2023/10/index.html","079984b5c25cf3ad5269b099ead24321"],["/archives/2023/12/index.html","94c4d59032d4ac042bc04c0acb22e6d9"],["/archives/2023/index.html","b3fdd3dc88fff1dc0d77e58da66db98b"],["/archives/2023/page/2/index.html","95c36e778f9b5246021cdebfdb38ed74"],["/archives/2024/01/index.html","8e0e3efe7c11c2ac6ee8dc203dce0651"],["/archives/2024/02/index.html","bf7520b3106ac679002f83b78ec23f5f"],["/archives/2024/05/index.html","c9ecc1b3d913fe77c37bc37fc5dd16da"],["/archives/2024/06/index.html","ea14ea2dd56e80ba9f444513ec5ad4ce"],["/archives/2024/index.html","2079ae618971835d8b0a7dea0d95cf8f"],["/archives/index.html","8caa654166dc162a5ca7a4d673d17388"],["/archives/page/2/index.html","a88cba8482e63ef622da77b326ede66b"],["/archives/page/3/index.html","8c94ca8347ca5c589cfea1304aad36fa"],["/archives/page/4/index.html","539f617142d9e590834feeea172839dd"],["/categories/C/index.html","5c5ae781f01653868b7e5dd64e240c63"],["/categories/CUDA/index.html","fc893c2ac1d3ce2caa358c8cdec1b390"],["/categories/CV/index.html","3ae9c96a238f9ec72b2a060138e8eeeb"],["/categories/C语言/index.html","8e8c8137c843b14f7543a06600a9f6a4"],["/categories/Markdown/index.html","4caf5097282d8270d532367c762dd83a"],["/categories/NLP/index.html","2a8ebd809d32071c0eccb16d09b0a81b"],["/categories/Python/index.html","f72c8211ccd272a43fdeacbbd1d05498"],["/categories/index.html","5524ebad62b67c2a560f99ed805a8bfc"],["/categories/协同过滤/index.html","1a2a47a555c123f51506d8e41cd2765e"],["/categories/数学/index.html","4d260f81d4c5319c949ad5ef1616ae7f"],["/categories/数据结构/index.html","6c1e0ea71f008a1f2730a40b900a0727"],["/categories/深度学习/index.html","5565786a1ea36cd94f70caddd2551580"],["/categories/神经网络与深度学习/index.html","787227bbfbf8e6554aa3df2a33d7a127"],["/categories/算法/index.html","fea9b5c8286e94c5eb3ce87850163a0a"],["/categories/训练模型/index.html","603a329201bcdd83ebe40160fccb5b43"],["/categories/面试题/index.html","f89e793a19e26a273245bf147287f876"],["/contact/index.html","8fc181d9ae76337edadf8ea7dcc6c4a0"],["/css/barrager.css","ada0738d1638ec892ba34214ebf67f5e"],["/css/bb.css","7b7422e4f683692ba4be0ea6c49f5075"],["/css/dark.css","d5902627aee50c911a15da01641e316d"],["/css/gallery.css","44485ca841855eca53f505a906cc982f"],["/css/gitment.css","1f15a07ebcc7205ddc0c4a3a974133ae"],["/css/indexcover.css","62662615ad0fcf132cec0a42537d1d4c"],["/css/matery.css","074af0659913dabaa9da8ac5abd9528f"],["/css/my-gitalk.css","ee1577cba0dafd81cb16aa2eb989366e"],["/css/my.css","cbb7601660ab55e939b645b93bd23a1f"],["/css/post.css","5d4a5197b6b13b88fe2cebfb6a6cca35"],["/css/reward.css","a102c8e3bfa5fbc489fde21142423f4b"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","8f42c9cd58719518ec0d38e016a997ad"],["/index.html","663a744e5cd2e62afa93e10c182c212f"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","c5462cde7867e83c2201f763970e47b4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","9363ba4d33de98a37ac31c9a8e8c8fb0"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","f9ec368b7ef6d39264eb83d5665b7447"],["/libs/gitalk/gitalk.css","b7aa194900e9f8422adc04b6154dc35f"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","4506bcd95f49c5bb519c8ad49bc720af"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","5edd14d2452457940655f4c1a7d2ab97"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","d2b63ec8b7b55130230c39601d8c8b24"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","24dbb0fef1249dad921e39809aaf4863"],["/page/3/index.html","f4d0383f5228735daadfe7c1d2055169"],["/page/4/index.html","e719aa5d1a79577cf0d3ac5da9df0b1c"],["/page/5/index.html","169849bc13243333173683736c07e139"],["/page/6/index.html","765321544e822306544fbd6031491f77"],["/sw-register.js","90bbb86c4136f27a7e7ea6d8f323bd3e"],["/tags/CUDA/index.html","d9e20c0dff695337a837e6478d64fdd2"],["/tags/C语言/index.html","14ec86d747c8c9a3e2b649fc37cb1d86"],["/tags/DL/index.html","9e6156def96b5d3622aba27dde6afffe"],["/tags/ML/index.html","0013f54f02c1b07accf28df5b8957f54"],["/tags/Markdown/index.html","aeeb9cf691cac4eaadca1d7d9a426c20"],["/tags/Matplotlib/index.html","245d64ccd312ac9fe997af9cc8a96753"],["/tags/NLP/index.html","b8e4b1a3f4adba4e335bdd6fe8610022"],["/tags/NumPy/index.html","38fe324f3fb0fcb4623a8098fa0cc856"],["/tags/PyTorch/index.html","0e7b63cfae84f810b198acd98650669a"],["/tags/Typora/index.html","4bd83d22e63d97c69543cc36e9f8c4cd"],["/tags/cpp/index.html","a5bb02c6964834d5c80dc3fc42c2b5cf"],["/tags/cv/index.html","cb61e748261497f46e09bac0d134cef1"],["/tags/fastai/index.html","cba943ed930952ca283b297a82380fdc"],["/tags/fastiai/index.html","7a8b3e63c9a707c0868dbd745927a245"],["/tags/index.html","73c32f96f6f35163dd2cb7763ae294b2"],["/tags/lambda函数/index.html","e09f98925b4cbe52924b315cd45fcf0f"],["/tags/python/index.html","8f2e13588a702929f0d40a0303af60f0"],["/tags/函数参数/index.html","067582ff4c0f8400b29c7f0ecbcb4581"],["/tags/函数式编程/index.html","3694a2e4e6a831aabca5c0282b340d2b"],["/tags/协同过滤/index.html","755ab2bfcbf04875e6c0b938f9195373"],["/tags/回归/index.html","52158ebaeb842125ca032533594345dd"],["/tags/多标签分类/index.html","85e50f18e7a3a4d9e895db2e5f4bafd5"],["/tags/指针/index.html","de6d199c9e92cec0092829f9835bbdc1"],["/tags/数学/index.html","5dbb07f8715fef05e8cdfd1c627ff6b1"],["/tags/数据结构/index.html","9f30cc87023bccf68b50808d5fec9a5c"],["/tags/模型/index.html","97e8bde85c2e1f5871e4ca15a90ab2d1"],["/tags/测试与异常/index.html","9f9944b369c6ffccb6fa3f7aa4d183a8"],["/tags/深度学习/index.html","7f3bdeec4c9c039018a0fc041c8510fe"],["/tags/生成器/index.html","524aae5c179af49f4f8b6d7ddfbb57fa"],["/tags/神经网络/index.html","da00aee3c5e43900d0ebe770a00d7d16"],["/tags/算法/index.html","41b96dcbe4de0d1bf83da6c5eb3902c2"],["/tags/表格建模/index.html","f62a21785985cbb4ba63b9b19d8a6d28"],["/tags/计算机专业课/index.html","060a25372fbc517359e5c2a00b8f1246"],["/tags/训练技术/index.html","f35094a5cf9629e8b9ebcb9b8535fb6e"],["/tags/迭代器/index.html","9da4abaec0fd2d78aef45a6e271f9abc"],["/tags/面向对象编程/index.html","0f1d4ac728d14934dc0a0cb4844c0c0d"],["/tags/面试/index.html","1423502229eca32ca0bce300263c1873"],["/tags/预训练/index.html","7db217897bcff163974f66775daf4892"],["/tags/高阶函数/index.html","2b043042c034ee0938fc09dd29b853c5"]];
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
