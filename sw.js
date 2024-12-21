/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","04850e2c5006b3ad1f2e95bba4a7321b"],["/2019/03/16/c-cheng-xu-she-ji/index.html","761b5ce72608ab33d8b50dd379294750"],["/2019/03/29/c-zhi-zhen/index.html","07719f643e0cf612725e35e4b2b21ac3"],["/2020/10/15/ds-algorithm-md/index.html","a5808f9dc78e6d08feb1e7b7b2bfe9c2"],["/2021/05/18/algorithm-md/index.html","165ece97bb1adba41b32938b90238a88"],["/2022/01/12/python/index.html","d686d79bb331484db21b74b5446f0520"],["/2022/01/16/python2/index.html","2daa30f51722539cdaca267650446f47"],["/2022/01/19/python3/index.html","7c49e52dbfa32412b91dff55c8b607bf"],["/2022/02/28/c-biao-zhun-ku/index.html","43953ccec716965402d72f925a3cd530"],["/2022/03/06/cpp/index.html","77121674b0eee632d214e9ea58e927d3"],["/2022/03/19/python4/index.html","00eee65bf5413b75e755206c25e971e8"],["/2022/03/25/lambda-han-shu/index.html","d2aef827c9dc78f732d6d8be06d34797"],["/2022/03/26/python5/index.html","73642628061a57bbdc8b9e160c334a5f"],["/2022/06/02/python6/index.html","9b0710f0030acbbbaf453661bd689b22"],["/2023/01/06/python7/index.html","6c486c0e9803f3ce13b0d5ffa03ac8a4"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","bc3cddc9a42e18210aecea2d222949aa"],["/2023/04/16/machinelearning1/index.html","dcb4c5197aa088e9dac22780d24585ae"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","b130e078d8e5dcfdda8dc2334a2ba4ed"],["/2023/08/08/python8/index.html","f0db71af11b6815c064e54077729810e"],["/2023/09/05/deeplearning01/index.html","728826a03e97f83d5fe2b37b5a0234aa"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","f28f5d06d51ecd041b48b80ffcd216b3"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","0168e3cbf4efcb2bb58cef3e44bf94a5"],["/2023/09/26/springboot-0/index.html","4b1ea4ac2f555e786083d052ba633e49"],["/2023/10/13/cuda/index.html","38d076a53584cf14cca02d0fb5812bad"],["/2023/10/14/cuda-python/index.html","ff6ed5facb9a3ff7693715d2294fa8a2"],["/2023/12/21/dl1/index.html","4f84230fff00061e42b4eca810e7e360"],["/2023/12/22/dsandad1/index.html","39157ea279647c2d947ed59d3232b8d8"],["/2024/01/22/dl2/index.html","ee9701c498f223e8357ddcb203f01b85"],["/2024/01/28/production/index.html","d4c98c779c01f0aa5391c7e8be3b1e3d"],["/2024/02/25/mnist/index.html","aa4f204a6c2e11e2b4a9dd0400210d22"],["/2024/02/26/ner/index.html","751801ac78f6cb8c7fec97063fad5be6"],["/2024/05/18/springboot-1/index.html","6fd8a10a695312c5f5fc1041aa89f756"],["/2024/05/26/multicategory/index.html","0a92e71f704ec444ae7c7997cdf0f908"],["/2024/05/28/springboot-2/index.html","f7242f41d4093f034f2a7afcc51e441a"],["/2024/06/02/regression/index.html","4d9ac9621fea73be89a9f72fbb8be38d"],["/2024/06/03/imageclassifer/index.html","afd7019ca13b3e80a4cdea7264fc4912"],["/2024/06/03/nlp/index.html","aaad4bfd5760aff58c2e6ef84ad637b8"],["/2024/06/05/springboot-3/index.html","a8f40d90408a8918c58a75ceee5c3ff0"],["/2024/06/10/trainsoatmodel/index.html","ae2881427ae5a4339f58c20973aacbb5"],["/2024/06/15/collab/index.html","701af2ea270fc645049cf82973bf3b1e"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","e1104d46c5f38209c8b7d5687ead9644"],["/2024/07/04/vue-qian-duan-an-li/index.html","6fec23b98d57806693ce5bb119fb44f9"],["/2024/07/05/element-plus/index.html","65bcdd9e995be0ed252363406b5e1068"],["/2024/08/10/vue-kai-fa-an-li/index.html","f95644cbd73cd2168393682562684a4a"],["/2024/08/26/ddpm/index.html","960c2a21e24452229cefa91fe5e20213"],["/2024/10/15/redis/index.html","e67c2fd120a68ee5eb957fdeb1392359"],["/2024/11/30/leetcode11/index.html","462571cc5f94daa35fa7a774bbb5077e"],["/2024/12/21/tabusearch/index.html","f5962a62551663a7da2ffb58372e506a"],["/404/index.html","bcd581d5004b95cc2538d72202b4cc47"],["/about/index.html","23c03acaf57a46af96b420a617ceeafb"],["/archives/2018/09/index.html","b5da5b4332e45ce33b917f62e383c42e"],["/archives/2018/index.html","e71f594fed7f1d56035e959d426693be"],["/archives/2019/03/index.html","383ae9200098fb1ea4764ce45a029934"],["/archives/2019/index.html","3151beeebdd0fe87ce84d874a86b57a8"],["/archives/2020/10/index.html","c007ae3bdc0e92cafa0eac849c141551"],["/archives/2020/index.html","f2b80c9ac77ccc2f5b41c9a2171b8ace"],["/archives/2021/05/index.html","56ec978f55132587f4e36ebb1fc6cf5c"],["/archives/2021/index.html","06f44ac911e7f103519bf711abeaeeaa"],["/archives/2022/01/index.html","a6c3a79e81bfe999592a9b98f6630822"],["/archives/2022/02/index.html","89e69b99d40ba24ad8aaea3fa3b00b0b"],["/archives/2022/03/index.html","cc157c4fa648585bab11a8d05e76ecf6"],["/archives/2022/06/index.html","5161d93862f603b439a30c69efe5779c"],["/archives/2022/index.html","979a863055b18f7f835dbdb032c8a505"],["/archives/2023/01/index.html","99eb68e72353f3afe29bb84ae737457c"],["/archives/2023/04/index.html","da88b397c3f45d8456a5c159a6eb2d4f"],["/archives/2023/08/index.html","89722a8112856ff3137591f90d856bb6"],["/archives/2023/09/index.html","508dab9751105083a55e1e2005e66373"],["/archives/2023/10/index.html","21cc414dc9c81463d42be73c9f5b9c2c"],["/archives/2023/12/index.html","50e5cdd6369f4bc740bf976311b3fda5"],["/archives/2023/index.html","70caa197d1428ddee3b5330f594ce779"],["/archives/2023/page/2/index.html","a24eb67512d38bab2fdd74631b4de2aa"],["/archives/2024/01/index.html","3e703afa3724e834e9aafcb245a266de"],["/archives/2024/02/index.html","796e9a2755fa016bedb746df10812940"],["/archives/2024/05/index.html","1a11cd56e0e4451c4989ef4fafd59952"],["/archives/2024/06/index.html","6e70a3803ad44681202f75a769512263"],["/archives/2024/07/index.html","8d97464b99de9f210b589c55d8a7b4e0"],["/archives/2024/08/index.html","5e05fce7efef45d59c4086dc1ef6664e"],["/archives/2024/10/index.html","4e11255e980a0e194be52192db59ea7f"],["/archives/2024/11/index.html","c3fdae9ab0acc93f33f19a16ccc7d1fb"],["/archives/2024/12/index.html","47f44c667109517bd8ccecb25f70a614"],["/archives/2024/index.html","2ea88b579d7a8de943515f48688207e0"],["/archives/2024/page/2/index.html","0ac133d92a257ca971eaf35351cee23e"],["/archives/2024/page/3/index.html","ac7ed9d526758d730e09777a7642be8d"],["/archives/index.html","362f49c089913fd9a7cb7e7f50712370"],["/archives/page/2/index.html","4e0b157f49af1efae6e33cd256946458"],["/archives/page/3/index.html","3b5b88cd02ddce1bdd323d98e1c5d88a"],["/archives/page/4/index.html","d04a7e988634e7ac2308472d0c41b94c"],["/archives/page/5/index.html","14724a1d79abce47144a4fedb14f7ea6"],["/categories/C/index.html","7411db4309d8663451b8112cd97c6f32"],["/categories/CUDA/index.html","abf0d52fe2fedcdf7cbc76573a4841c1"],["/categories/CV/index.html","c5ce5389f60ebbda8f05981c52596a8f"],["/categories/C语言/index.html","060aba5b2fcb2d127d9709edce92c0db"],["/categories/LeetCode刷题日常/index.html","8f2460376eafda0e9ebb42c7d23454d2"],["/categories/Markdown/index.html","077884ce6afb370350fa998f71ff413a"],["/categories/NLP/index.html","0ab76e21ae35fbb86444ee85db75fbd6"],["/categories/Python/index.html","a0b4b2ad81d278598428e50f2339540d"],["/categories/SpringBoot/index.html","0c8a0c3cd6ca99167d1261d13a683970"],["/categories/index.html","f81b197ea10c4bb68184dfeba0af8f40"],["/categories/前端/index.html","a6f1ca1d7178465c597b3713030c6ab8"],["/categories/协同过滤/index.html","23aa0813d31cf37e0e2470ee946b2406"],["/categories/启发式算法/index.html","6ff78670c7565b8c77f6841c29ad5182"],["/categories/数学/index.html","865d08cd965c90f1545c57614ad498d4"],["/categories/数据库/index.html","455abd7a7a2cc724cf24576609e8c568"],["/categories/数据结构/index.html","da58cb31068d97634c003acaa8657a60"],["/categories/深度学习/index.html","e3ad227b84f21f6136644a277d874786"],["/categories/生成模型/index.html","4847cb9534f0e891acb0d2be07a9d3e9"],["/categories/神经网络与深度学习/index.html","99302c9717e4bd7f61d22761f68bade5"],["/categories/算法/index.html","20a053f211554939a39979ba2f851f5b"],["/categories/训练模型/index.html","8555dea2e5c7bef86a1353c668e8aa8f"],["/categories/面试题/index.html","8de218fa1304f52ad35152b91578d36d"],["/contact/index.html","78037d25acec9c2c28fad37500945c82"],["/css/barrager.css","f312f6c026fbcc5ed13e0f2228a903b7"],["/css/bb.css","7460c1704c1a7a7e2e5c128d9607af5a"],["/css/dark.css","26bcece99c87eb0d309435572ced1e09"],["/css/gallery.css","7b42cb9c4f50b9601bf8b1c848d30592"],["/css/gitment.css","8950917fe2bf0e3c9953422d08f47734"],["/css/indexcover.css","beb75a92efc40e048b12a6bdc111d9b5"],["/css/matery.css","7b8c35971805dfb6b13762aa59a12482"],["/css/my-gitalk.css","522b23bfabf54bc24b8e33d0006675fc"],["/css/my.css","841c3936440231332b85979af169318f"],["/css/post.css","7f5f48de00cf5fbe46bc4bf7cbf03d15"],["/css/reward.css","63817d1d75d38b78a73a6ecef3fdab86"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","9d5e85a5f861e7f025c82eb2c88f4e3a"],["/index.html","3035b8ad380645789dc3032fa96921c2"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","e69509fa170478ff4cacdee0dddd4ee1"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","76d89b00dccccc7d51e82709494e0079"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","c3e9eb9d7be20038c740bad323bbad9b"],["/libs/gitalk/gitalk.css","51598150dea4dd6891e5c4348edf871b"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","e0e6f75a68604b9a658a14e57d95ee48"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","4bbfda6f6943387fb893bfb8fadc898b"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","3c476fbc8843f83f0adcf254298cdb8d"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","d27ede9793b5cd66da757d45f6b974f6"],["/page/3/index.html","0399c1a19bb96c06325ff99e222359d7"],["/page/4/index.html","3cb821bf3e3ba7d6715729ff2d3cabe0"],["/page/5/index.html","0b91cdc1e0285049a030a82c259b0f10"],["/page/6/index.html","5aff7e1b8dcebb6c93b4ae727843b00e"],["/page/7/index.html","a44a06e4fc278dc2201ebffbbdae0a00"],["/page/8/index.html","d4a2ada44e0f70eb6f2449c94b5fd515"],["/sw-register.js","0908a3459c1fe963664636571f313422"],["/tags/CUDA/index.html","3be4fd6b1727ec00f95c96e2c46d6a17"],["/tags/C语言/index.html","eeb8a9d09917b94195cb9bf0a8ed8926"],["/tags/DDPM/index.html","4062c991adb16abb7df8208ea4d0bb19"],["/tags/DL/index.html","dc2d4d218969a29838f20887bac3cc19"],["/tags/Element-Plus/index.html","8f42448d0950eab9e531809abf67f5c9"],["/tags/Java/index.html","75f10a641754f3ce9e11b701d6c1ebe7"],["/tags/ML/index.html","16435138f273a473ab6d281697c2d404"],["/tags/Markdown/index.html","e5b82598c0d176b467dfa1b013aa0957"],["/tags/Matplotlib/index.html","f1a34ee0fad5f414d89a12346cf012f6"],["/tags/NLP/index.html","c306b5e44ccb5cdbb5aebd6bbb0704e7"],["/tags/NumPy/index.html","d0b6cf96df278bfd51e94da329461148"],["/tags/PyTorch/index.html","352e96328b6ca1026111946188827186"],["/tags/Redis/index.html","5133ca5da129f6341516f0a861e25330"],["/tags/SpringBoot/index.html","f83102f1972100d570aaf224cf9af332"],["/tags/Typora/index.html","57911b37360e95a98234e916dac8d7ff"],["/tags/Vue/index.html","93048f6fd8dc04c222c9eacb82dbb6a9"],["/tags/Vue3/index.html","7d9daa691875e70e4313c224ee672f69"],["/tags/array/index.html","9ccbf31a4f516ee360811acb8a3423c0"],["/tags/cpp/index.html","8aa4f27ffbbaf67b063070ea613f9dcd"],["/tags/cv/index.html","c53a7234046ca94e86bf0360f9b81f71"],["/tags/fastai/index.html","6a4678cd919f176cc634092c8ecc86ac"],["/tags/fastiai/index.html","93393c59b6c0167ef59d8bd898c98b32"],["/tags/index.html","518ae5b91d01ee3217d7a803f05447df"],["/tags/lambda函数/index.html","93aaa34dc3c7736c39c9d7e3ba5d97c3"],["/tags/python/index.html","1b64cb83c7b806c08d041c02eea61e85"],["/tags/two-pointers/index.html","562599c82638a3e694c0908863c0e64e"],["/tags/优化算法/index.html","0c4b3b0f03a5da12a365e237212bb83c"],["/tags/函数参数/index.html","1b704d684ba5f684fa337fc5e0e01de6"],["/tags/函数式编程/index.html","efef28612bedc69115572de33d8c64e7"],["/tags/前端/index.html","756a83713f6b37598150c53a66c2c6ed"],["/tags/前端开发/index.html","da371daa3b7203ad38ff95e4fcc5756c"],["/tags/协同过滤/index.html","cf0886b19c192b750c35efd0e99b3624"],["/tags/启发式算法/index.html","7393bcbd68c83a9302c76d9c99566b8a"],["/tags/回归/index.html","922a6d8fd857c1e6c3ebe7f482a4cf07"],["/tags/多标签分类/index.html","659b0b3084af9e929a988efe25dd0765"],["/tags/指针/index.html","3981fb9c3c495ecc13a6de67b3f50642"],["/tags/数学/index.html","b7a55d3caf3273579813a9a76fb4ac1a"],["/tags/数据结构/index.html","5e1acc7528bd63e631921c14286de922"],["/tags/模型/index.html","a6146c01faf74c29e528dd9c5349908a"],["/tags/测试与异常/index.html","ae01bc39c91419aa2d27721770b2cd2e"],["/tags/深度学习/index.html","82090a7540fdb40513559624f85c7a2b"],["/tags/生成器/index.html","c2178cc39ae947f4914de41fcb13edd6"],["/tags/生成模型/index.html","ad0aadcb9bd49efff6a93c68c9db57c2"],["/tags/神经网络/index.html","203b863c06453487c942857ad9c27404"],["/tags/算法/index.html","7870ac20e891b552a7c2452a223d5291"],["/tags/表格建模/index.html","99b7301e4ff74126b98597a24fc2d8e8"],["/tags/计算机专业课/index.html","763e946e8d0711aa6e2d828400d33c65"],["/tags/训练技术/index.html","c60fbbcbd58a86b334d0134295c32b1b"],["/tags/迭代器/index.html","f9574524a45e7257636bb5f7cf4bc8dc"],["/tags/面向对象编程/index.html","c84c4470b9927dcce778a396ebafce1b"],["/tags/面试/index.html","b2a300a9dd912b2d30c5021e2cde14ea"],["/tags/预训练/index.html","7d549850bb30d1fd52b909bd1511047c"],["/tags/高阶函数/index.html","10c0f418b1977e3332f2122b57a4558c"]];
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
