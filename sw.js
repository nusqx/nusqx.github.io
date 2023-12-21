/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","29014d5e07b29af2ea4c4db3814cd91c"],["/2019/03/16/c-cheng-xu-she-ji/index.html","e85e5ba7e66e5f380c12cc7d53e9ff29"],["/2019/03/29/c-zhi-zhen/index.html","89e76046ae4c0aa0befc81aa1abfaa11"],["/2020/10/15/ds-algorithm-md/index.html","ffde7dd5175fa562d9910d5fc347ce43"],["/2021/05/18/algorithm-md/index.html","c511fa02e21364c0b5ecd503a799d420"],["/2022/01/12/python/index.html","9921af063962520d5e7407514e7af2e8"],["/2022/01/16/python2/index.html","2523a6e7a6f862532060286dec332b5d"],["/2022/01/19/python3/index.html","b7c40410536848d1b302e3522af6c3d7"],["/2022/02/28/c-biao-zhun-ku/index.html","58ce75af33118cf9da8c6a3e3913a0b9"],["/2022/03/06/cpp/index.html","bcf2f6352bfb1443da478e17b4cadfca"],["/2022/03/19/python4/index.html","60c6b530d6d6cbcf1909ed877479c346"],["/2022/03/25/lambda-han-shu/index.html","9e51ba393bbdb7a9908610cef160229f"],["/2022/03/26/python5/index.html","35e934937105aceb8dffd67e4ee69c26"],["/2022/06/02/python6/index.html","d0a5062a9f0418ae7c3939fa58291952"],["/2023/01/06/python7/index.html","694c55f3ecee3d46bc8d233633b02b10"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","fd708bf16ffd5300e28dfaf1c9c20ac0"],["/2023/04/16/machinelearning1/index.html","004c2abb5283a5a9a6ffcd1b4f653ad3"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","93e752694e386347da61396247f23584"],["/2023/08/08/python8/index.html","3f59f6f319e19c2abf5d2a6920c4e208"],["/2023/09/05/deeplearning01/index.html","0e62a0170d675088a95d02254c70c1e7"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","4ca3e6a24d937bed4b1985fff960b790"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","02f4a26fbb7f2a6bc86c74006f1c36ef"],["/2023/10/13/cuda/index.html","322b3cd1b4dbbc99ebae065737ac4e58"],["/2023/10/14/cuda-python/index.html","b882ca70ace643bc2774429f5900c657"],["/404/index.html","5a759e0e82e82ccae6f10802845a514e"],["/about/index.html","fc4c2c889d00f600f7ab14b735351b1f"],["/archives/2018/09/index.html","5a2dc1797114ca557fe92ff6f0a74367"],["/archives/2018/index.html","6417607bb117826e8bb841d580d6c8f1"],["/archives/2019/03/index.html","c7a41957dbd00f42fda0fd2338c6744c"],["/archives/2019/index.html","e576896e1debf750e40ea2baa8628f8d"],["/archives/2020/10/index.html","498495e9d51f809b6aeb1b2a4ca1863b"],["/archives/2020/index.html","898c5ea576ccdb78ebca9834a228d9da"],["/archives/2021/05/index.html","22da4d35821db7b2d9f7e0870b0ed3d5"],["/archives/2021/index.html","755e893e134c72a3db1655c7f39435cb"],["/archives/2022/01/index.html","69908e1ba35f512c3484ad71dce3fab2"],["/archives/2022/02/index.html","7c8ad95d53d281d6a15f8102fce992fc"],["/archives/2022/03/index.html","5e920a67e7608d40658962ab6f3f4a12"],["/archives/2022/06/index.html","2e174875ad02db3abf70a5f342e9e316"],["/archives/2022/index.html","55581fb1d4050665378bb3d7c818b0d5"],["/archives/2023/01/index.html","9bcc72a533a1dfa9cf9ad7b0e63df0ee"],["/archives/2023/04/index.html","f349dd35f55f3e9ff9a36dbc6f9850fb"],["/archives/2023/08/index.html","958d10bc6f6166a57c0f9326bb1ba3ed"],["/archives/2023/09/index.html","3b3b40a8d33a18e4c40712bae1d8b014"],["/archives/2023/10/index.html","8af5812a31a3e9a21b7f51f1cf0d3913"],["/archives/2023/index.html","996e360735c657df9a4950d68e701d77"],["/archives/index.html","3d12ef076c7b2e98e9a1eb8dd63ad420"],["/archives/page/2/index.html","dbab86632f4c6973c280bc9dcdbd5e51"],["/archives/page/3/index.html","56714b33eb5aff1e06e8c200e1fbf39b"],["/categories/C/index.html","1566d8f6b06835197e3ab770802359d5"],["/categories/C语言/index.html","f2b4c2590c11855c92369a10e3295a54"],["/categories/Markdown/index.html","4e737e0ebfb5e5ea8c7470ac856c437d"],["/categories/Python/index.html","270b91d1cbd10c6907d4bfd6468173e2"],["/categories/index.html","f6e2ca54176518631454a096e0d1aee0"],["/categories/数学/index.html","b165936ca9244716bf6eb94489514dbf"],["/categories/数据结构/index.html","682b588d0fbd29622afd1874f2b2a2e7"],["/categories/深度学习/index.html","193dec4a31b6cb2fa983db2deca2ad0d"],["/categories/算法/index.html","129304d5c9bfe6cec68f795902b3c2e3"],["/categories/面试题/index.html","193186db41240f3cd096db2f3d4534e3"],["/contact/index.html","1a6f04794dfbfe5a48ac04efc9a4941d"],["/css/barrager.css","b2edb9a5863d25b777ff46f632b1659a"],["/css/bb.css","d3eadf57519486b33d16cf9c18e5efa7"],["/css/dark.css","7d1d88d8d978647f103d24f450df1989"],["/css/gallery.css","bfe1ba72dc875c95a260bb6080940441"],["/css/gitment.css","927ae1f9cd94c9e98823d777743d4bc3"],["/css/indexcover.css","f27677c72fef4a94e749f6c7dcc5abe3"],["/css/matery.css","21690a31c9f4dd5a8d8c77fb38b13cb8"],["/css/my-gitalk.css","15b4b75943b5a1b7883ab7ae9d944e08"],["/css/my.css","fae2eb327d874fee7bfc584104161902"],["/css/post.css","f86ef4136c78a2effe1fd321a79646e6"],["/css/reward.css","76f190858c08d939f7f4864b8db81515"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","9ab13af3451b232957a28cd88b0e847b"],["/index.html","ae9d9d835390cf3fd40b8ba06af7ece5"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","1005e34da0b9b83fb490faf20805a86a"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","497ae69d163241071d060f44eb17aae2"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","85362ce424c6d805e2df650948c8d4cd"],["/libs/gitalk/gitalk.css","ac41d31155d6aac4ffbd61858ea2b72f"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","be779e292b8b807e7d2bb7d53ce798ff"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","dbbb95e175336cb90e644700c365589d"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","f8ad2bbd83a85469889214fe1fd1aac2"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","7af12277c110346431c41e14347c3463"],["/page/3/index.html","d7c1e2befa5ab5e09bd9a411c3923b64"],["/page/4/index.html","17db04b0ebeca3814d0e0b3dd88746fc"],["/sw-register.js","ad73088bc72506af51f84652b5488678"],["/tags/C语言/index.html","50fd02c28033ca2f09a989865e194c09"],["/tags/DL/index.html","e19f5b35f98a2b5898c5d227e596d5a8"],["/tags/ML/index.html","0c6c16e7d37e0b4d7509256091945de9"],["/tags/Markdown/index.html","ad0d269d035fc2a6fc7c62f74fb432b5"],["/tags/Matplotlib/index.html","3a9f5556ff96cee26b968a3631a89dd2"],["/tags/NumPy/index.html","df1d6aaec4d06b31afc47d3a5c5c85c7"],["/tags/PyTorch/index.html","a9fccec4c53352ca36f06f95fded3742"],["/tags/Typora/index.html","6a53104272abb97c8cc50e9201f78143"],["/tags/cpp/index.html","cf47eb477cacf9364f565295e3764843"],["/tags/index.html","123460159f7776936e9ad7a3e90b307c"],["/tags/lambda函数/index.html","854020d4f631fb2f9ddec28488d753d5"],["/tags/python/index.html","2958f845444053fc24bfb3313dc31137"],["/tags/函数参数/index.html","fd90da723e2992ff49e542e589adf523"],["/tags/函数式编程/index.html","db1b8a266f41ca67cf242fb49482dab1"],["/tags/指针/index.html","e238db9cd73476333d84e73e99547ecf"],["/tags/数学/index.html","681a8760d2420b9c142ddd6095aaa7de"],["/tags/数据结构/index.html","307269e7d328ab5cf5ac726ff36d28b0"],["/tags/测试与异常/index.html","90ad281d698083867765200e40d24afc"],["/tags/深度学习/index.html","196982eaf9efd831c38138dc378827c7"],["/tags/生成器/index.html","6e16046d99cf0c7ce111119c63f74c66"],["/tags/算法/index.html","70dbf5f2e1702e25d589466161f0db5b"],["/tags/计算机专业课/index.html","b3fb65e2e53f966282d0a2590da28cf8"],["/tags/迭代器/index.html","59d80fdd13b46e80f8c23ef695e90ec1"],["/tags/面向对象编程/index.html","5402702886da7aeff03a7a8d0b424714"],["/tags/面试/index.html","fde875d792a574ed67e799168c6f6da6"],["/tags/高阶函数/index.html","23ace0942ea0a342b6153ecb4cb1f98d"]];
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
