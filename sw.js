/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","b82c324a437d2db4b82871704bfdc31b"],["/2019/03/16/c-cheng-xu-she-ji/index.html","d7d0f5299987bba3fad57cf7439bccfd"],["/2019/03/29/c-zhi-zhen/index.html","827541c0c0c8060028b301259fefefd0"],["/2020/10/15/ds-algorithm-md/index.html","92bd8e5c83e6077832f1a83ab25bd6c1"],["/2021/05/18/algorithm-md/index.html","e9b4f930f6e5bbf68098434a424995bb"],["/2022/01/12/python/index.html","25a7a003ea04d216ff58c38809502642"],["/2022/01/16/python2/index.html","61a2710287cfc467b62f3c82a5877770"],["/2022/01/19/python3/index.html","e9caa07ce19595ca52ab73594914b495"],["/2022/02/28/c-biao-zhun-ku/index.html","146619f1a5962a320c7c080165bba92b"],["/2022/03/06/cpp/index.html","a62edbbad7fc4aa5a36514bdd7fa41cf"],["/2022/03/19/python4/index.html","3198b822ca97135cbee5279d8ac46d5c"],["/2022/03/25/lambda-han-shu/index.html","5181ede5fb42926fa935b4e601faf371"],["/2022/03/26/python5/index.html","962ed67247e4232bfac79cbd1e84788a"],["/2022/06/02/python6/index.html","ac3b4c6a63334d352275dbd239e51def"],["/2023/01/06/python7/index.html","b5e49285e4b5fb220e64fbb23959e92f"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","e72b56d19e559ac0fe159429db0b3579"],["/2023/04/16/machinelearning1/index.html","f41e6037cc4d85b240467a7496a43e80"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","a142366b753b3af56be5d74e8b10cb77"],["/2023/08/08/python8/index.html","5719a58d5df6052114849f13b992f0f5"],["/2023/09/05/deeplearning01/index.html","b942b4c8cd6c3bbdebf988b8e55021cd"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","d310dab4401d38f0a3a28e044e1452c1"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","45129586d3a494c4923509a9be427f09"],["/2023/09/26/springboot-0/index.html","932b0b9b446456bae25a375ea2126ed5"],["/2023/10/13/cuda/index.html","d401d6270be6fe6de24dc3867b9ea39e"],["/2023/10/14/cuda-python/index.html","37ba1fec34053a5d5c082082e7e41ab9"],["/2023/12/21/dl1/index.html","0db9b9fe16cf22d11a065e432032c1d0"],["/2023/12/22/dsandad1/index.html","b5e6ca9d847971771a0d9d1e940d3800"],["/2024/01/22/dl2/index.html","038485d906c96047f60d8710e1ae0262"],["/2024/01/28/production/index.html","8579740f977e4d71bc94e8e290393a67"],["/2024/02/25/mnist/index.html","5d54e2f20913ce92920285b09e6ecd7d"],["/2024/02/26/ner/index.html","304a2a8d18ebd82d6e4351ed24735c34"],["/2024/05/18/springboot-1/index.html","f71b77363ca02e65ef6635626a44bda8"],["/2024/05/26/multicategory/index.html","3caf75df85144044987f7829a52b5740"],["/2024/05/28/springboot-2/index.html","c284f4ba4a757dc9eb0fc2153815b6a8"],["/2024/06/02/regression/index.html","c1c90cc04f8a065ca788d0689eecd11d"],["/2024/06/03/imageclassifer/index.html","5360d7b8c037e39cfecb836965160a59"],["/2024/06/03/nlp/index.html","826338515eb146646db0703f1cd4720f"],["/2024/06/05/springboot-3/index.html","1a84ce2752661e54d676144d16f09879"],["/2024/06/10/trainsoatmodel/index.html","df941acf52d40a093bfd5894cec2e94d"],["/2024/06/15/collab/index.html","76b84292c72f824f55a917c1e7c97ced"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","f9699b06343e743f9d2759e3021ef00a"],["/2024/07/04/vue-qian-duan-an-li/index.html","348ff47bd4391bc741bdbf64c84fcab6"],["/2024/07/05/element-plus/index.html","64194c5f98f7c7675ebdec6ee2781b4f"],["/2024/08/10/vue-kai-fa-an-li/index.html","f5b84e2c0d9d8ccd34bd4bbff159dff1"],["/2024/08/26/ddpm/index.html","1a85960248d880f7f8b5a26804bff668"],["/2024/10/15/redis/index.html","82930e0118d49fdc56fdd0778fdbeaaf"],["/404/index.html","dca36b4c95836c45227528e481adb69e"],["/about/index.html","3a355b9dfcf40cfa1bbb48ab383f4bc1"],["/archives/2018/09/index.html","7d2f821292fb50bbf9048aade83b2463"],["/archives/2018/index.html","3f9bea2ce92dfae258d9f54c4d9b4a0e"],["/archives/2019/03/index.html","533211e59f419b6b76ce0cdb97913a3e"],["/archives/2019/index.html","582e661af3654a56423425c68a3f808e"],["/archives/2020/10/index.html","2ea3659bd73d7481d0fbd305e42f93a6"],["/archives/2020/index.html","ee5bfa97bbfd438c225a832a23939ebb"],["/archives/2021/05/index.html","3113cb551c102e2d5e056e9a3b98201b"],["/archives/2021/index.html","950fe91239bc216b39616d83bf8b154c"],["/archives/2022/01/index.html","c737037ec4c7f9c525fa8b8b4d6eda2a"],["/archives/2022/02/index.html","ba42013f335a9824e9547034bfe9613b"],["/archives/2022/03/index.html","0c2c3504ec479e758cc738b0f7a92f5f"],["/archives/2022/06/index.html","ccf5cd52caa8108d41c02a17cc184ade"],["/archives/2022/index.html","14c133f5dd3ccb9eb329c112ccba0c96"],["/archives/2023/01/index.html","c76a72e110ceedad47748e2cf9ce1e8c"],["/archives/2023/04/index.html","53cd22e8f2ca77ece537e20399dfd2b0"],["/archives/2023/08/index.html","e12cd3d55fdb7c20d6b16f766469b063"],["/archives/2023/09/index.html","0fd17a5475df47aad1256f51ef8a18b6"],["/archives/2023/10/index.html","867ce8fe71d71ec30cb211de690d0868"],["/archives/2023/12/index.html","1edc8917701caf732d478726e2d40f75"],["/archives/2023/index.html","f934a80434d489dd043629895a9e4deb"],["/archives/2023/page/2/index.html","72702abd1500cc1630c20b70c10e2290"],["/archives/2024/01/index.html","7d41f1d0677b8bfe828eb4d889c6db73"],["/archives/2024/02/index.html","440283d2ebdc2435e5de71f0892a94e8"],["/archives/2024/05/index.html","c9b4f54edc7a24e9e366b5b1f0139c29"],["/archives/2024/06/index.html","7fb3ae042051903425b2f3123328f639"],["/archives/2024/07/index.html","f69f45c5a5f6a78dd00ec4e3949b9171"],["/archives/2024/08/index.html","7d81fda489d33c0a46f87ff8be74a1ad"],["/archives/2024/10/index.html","ee949abaa733376f2a45df88029aa639"],["/archives/2024/index.html","d9b5bff12a8b96a74b09ff50efe91e2b"],["/archives/2024/page/2/index.html","46cb7fe156a28a44f32f621e80c51365"],["/archives/index.html","5dab1dc5264641dd0f1902ce2292ea7b"],["/archives/page/2/index.html","d79722f1fb0c7a020b57fd361d1b6af7"],["/archives/page/3/index.html","c1aabf361087d33b255fd81d3f18e0e7"],["/archives/page/4/index.html","33523f7b8cb367ce5189184a53089ace"],["/archives/page/5/index.html","11d8d39b5163dac5cdc996d1934ecec3"],["/categories/C/index.html","6390322abb47959b9ac16fbef4e2dec2"],["/categories/CUDA/index.html","31b65fce18a17226186c84fa232d1f5b"],["/categories/CV/index.html","9473ac8ec21546fe72fafa2e0c02a041"],["/categories/C语言/index.html","fe248812639cf355d2cd8aa7cc29a308"],["/categories/Markdown/index.html","f2bd7d1195bff0262c2c0863d3b9060e"],["/categories/NLP/index.html","956f867257e93b6400b4cd03b80f79c9"],["/categories/Python/index.html","810ade44040904366064c8768001565f"],["/categories/SpringBoot/index.html","76f2ccc8d0ec1880c08f23fe7df8295d"],["/categories/index.html","e7d1954fee590232c299df2dcca63ec7"],["/categories/前端/index.html","dacc382a68a8bdb933a8f3b51d715907"],["/categories/协同过滤/index.html","9acd3745c5d333d1684195954cbb0847"],["/categories/数学/index.html","c30ad87a6704c85dc40cd9630a7641b9"],["/categories/数据库/index.html","72dda04d9a820c77c745c551f24dd9e9"],["/categories/数据结构/index.html","6914c6f1333932132ecb62ae84cff0c5"],["/categories/深度学习/index.html","fa2e9a7b0efb4564f42de30806b464bd"],["/categories/生成模型/index.html","531b340a6f0244085911881418c6e46c"],["/categories/神经网络与深度学习/index.html","b7f18d5e16d22278d7ac106285151d34"],["/categories/算法/index.html","b0163882240921cc6109882b725554b8"],["/categories/训练模型/index.html","90f7981c12eaa0199e43f72709f9aafb"],["/categories/面试题/index.html","0c1e08a339fe7ddfbfa62f888ea3e80f"],["/contact/index.html","70f12e50095c92e03a0410aafdf3b76e"],["/css/barrager.css","d1da36304408057915ae06d3c977c94b"],["/css/bb.css","656d0801509f06f4635800bee3aff81a"],["/css/dark.css","fbf716560aca44cb3c349022e012be5a"],["/css/gallery.css","3a2398adb91a5ed5c3d5aedd7bfcea45"],["/css/gitment.css","a4bd7190d4f82b58c56b656e35463acd"],["/css/indexcover.css","ef65f7657b39441dd09f3e73326716a1"],["/css/matery.css","ee81053225bf45e383b19c0a35188b34"],["/css/my-gitalk.css","718fa30970aa355db506b2bf8684dbb5"],["/css/my.css","528fd1168fecab98d590c9e696a97fad"],["/css/post.css","016ce78eb3455c381857ff17a3e301bb"],["/css/reward.css","54822804baff358ef8bd3a33317c9f68"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","40faa812aff2d919c4fee43f192404e8"],["/index.html","be640e964a7e98037609dff2edd6e6b9"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","d40a192ffd9d2ec0d3caa91ef9e467ed"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","cb63dc613b272607cf4e57c1de4bc2fd"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","66194c646fa28fba27fd401c845ec7fe"],["/libs/gitalk/gitalk.css","3426c0ba280b2a4e241b5ec9fda5ebe9"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","d3ec299210db17ac74a2f81748c64eb8"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","fe2047507402de9fbe3b006fc0ca677e"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","7c71efe5ba124c6e0b04310b01ae413e"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","52438a922ccbfe550818930b3e41c91c"],["/page/3/index.html","e886bc94cfe166ecae8e61a2db70351e"],["/page/4/index.html","1372b672c6e605b32d6176b3a3a48d58"],["/page/5/index.html","0253b35dec1547e07b8ac0196b246371"],["/page/6/index.html","32a3c827c2b8b633c7ddd06ab7d6ace9"],["/page/7/index.html","39f4016b8fb1c1da1f1ee85e5f90bbf1"],["/page/8/index.html","786fbb911699e3af75dbd06bc3f5d809"],["/sw-register.js","48e3b86a64344a18de016bda0b32d87e"],["/tags/CUDA/index.html","2f8c071ca591cb355e80c438c6bc657c"],["/tags/C语言/index.html","5e451026f5eead9493dd7f5fd4676ce8"],["/tags/DDPM/index.html","1858673eb582f180d808eaa2cb02ffd1"],["/tags/DL/index.html","488aa7f649e196f11f104661a82a2ab1"],["/tags/Element-Plus/index.html","90d849e236e3e45e96a8277337684c1a"],["/tags/Java/index.html","951fbcea2e9476cde4a026131667b543"],["/tags/ML/index.html","ccbd160884a4c5a84b83422d8839079a"],["/tags/Markdown/index.html","03c21ca330e61f059234867fe493cf2f"],["/tags/Matplotlib/index.html","97a706084e6a3d21bac20423481c5806"],["/tags/NLP/index.html","bca1ddef68c9ace67df2625d277c1966"],["/tags/NumPy/index.html","dbaac8a91ec1eb819756a10e7dc81e86"],["/tags/PyTorch/index.html","24d3aa0dbb9cb5952a33632be28fc33a"],["/tags/Redis/index.html","48fc56cf7bbf98d648418bc837fe853a"],["/tags/SpringBoot/index.html","cfade79707291918acaf3367fdeab7cc"],["/tags/Typora/index.html","42941093cfb7c06dd9a9d404563914d6"],["/tags/Vue/index.html","e2a2b86a1b503f4d61a2e5c77051953a"],["/tags/Vue3/index.html","df73bfb469da6ed5cb2968eabef0ddfc"],["/tags/cpp/index.html","556399e25f6223c14b6fdf3c9fe686df"],["/tags/cv/index.html","f5bd9dec7da5f5d74fea2825fb38c7ec"],["/tags/fastai/index.html","ee9339c710ebd2318d9ec75b993c1720"],["/tags/fastiai/index.html","634c50581509641dea69b2778a6bc032"],["/tags/index.html","0b9b810443f67f9199794137ef4abd4b"],["/tags/lambda函数/index.html","991e561515da878d2846dda68cbb363a"],["/tags/python/index.html","6de587d5f2d12053d805407c6d84a163"],["/tags/函数参数/index.html","fbfd40228b2cc7b228031b9f4fa480b4"],["/tags/函数式编程/index.html","5867d6e36eb4d96792d28aebf9e08fb3"],["/tags/前端/index.html","aec1d17176cb449969fe036cc3eded55"],["/tags/前端开发/index.html","1535f874f855a48e9b4ae6b96e1f7239"],["/tags/协同过滤/index.html","88a18cbc7ed095694f62caeb5c18394b"],["/tags/回归/index.html","bfeb4294275773892af19916cb5d702e"],["/tags/多标签分类/index.html","e93551646322934d78de54d3de353233"],["/tags/指针/index.html","8f84715773de2a5b666e56ba550561dc"],["/tags/数学/index.html","15ad90435710dd09e4770ffa99cc94d0"],["/tags/数据结构/index.html","c92cd893371e6d33274cc1e40b664441"],["/tags/模型/index.html","d043c0438a244d78bd38bcce9af0fd0f"],["/tags/测试与异常/index.html","3bf9c8f4e49f35492a98d9433506f7a1"],["/tags/深度学习/index.html","2fb38e0575db95f459c99ab36cc016df"],["/tags/生成器/index.html","d8483b10456d97cf70064bed4d6df3a3"],["/tags/生成模型/index.html","542625dcc3c7b02e62f37f9eb7345779"],["/tags/神经网络/index.html","951390eee69963aabef562f6d29b2b0c"],["/tags/算法/index.html","908e76704c88dcead72973395f97ce16"],["/tags/表格建模/index.html","f81dc444b6eb367106449dbef51aa07c"],["/tags/计算机专业课/index.html","ead3802bf9a7f557c3ca3dfe8184407c"],["/tags/训练技术/index.html","514d24a6631df7455d0d892ce7d329eb"],["/tags/迭代器/index.html","419995f53766497570c7094be797f441"],["/tags/面向对象编程/index.html","7e8138842d22a42b5b25bb0b9193c411"],["/tags/面试/index.html","970c443b1c24de8bb436e8872f3d86de"],["/tags/预训练/index.html","8c385c64137156621e3b86dd1169a64c"],["/tags/高阶函数/index.html","a64451160086db6694b91f682b1e9904"]];
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
