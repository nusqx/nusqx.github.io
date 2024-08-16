/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","ab001bd631b95ed3470b5fef5367eb5b"],["/2019/03/16/c-cheng-xu-she-ji/index.html","72ae64273432d4710c351c3634c90c60"],["/2019/03/29/c-zhi-zhen/index.html","64c7c8ad6da89f8b502455a8e2361500"],["/2020/10/15/ds-algorithm-md/index.html","1dc1ac52d72e04fa550d08aa62aae0f9"],["/2021/05/18/algorithm-md/index.html","34bc2021813aec73f7ef4ce4c4ecce18"],["/2022/01/12/python/index.html","f7c3246b8a7a1dc9abed41a9943cf3db"],["/2022/01/16/python2/index.html","f72e12b7d1e5e80fa3e987c4c69d617a"],["/2022/01/19/python3/index.html","5490c6ab5d8cf6389c2fdccc6985773d"],["/2022/02/28/c-biao-zhun-ku/index.html","ce86e39c7df5efc486849c4ccbdf3cf3"],["/2022/03/06/cpp/index.html","8524cc837a111fdf7bbff275868abb9f"],["/2022/03/19/python4/index.html","23d904610f952fcbfd6c26b010a4f98e"],["/2022/03/25/lambda-han-shu/index.html","4b908ac1bd36f10f5eb1cc2e830aa27d"],["/2022/03/26/python5/index.html","7cfd33282138c4da26d306a38a43962f"],["/2022/06/02/python6/index.html","5360e9eab6db00f62470f5a32eb2fd6c"],["/2023/01/06/python7/index.html","a40dd03c6ecd7b0ede4187b33a68c99d"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","f983791811d8b207a09c9be100774c74"],["/2023/04/16/machinelearning1/index.html","fef5acc7388cb58ac6f56f7cd1fc1d69"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","65b0eb3229fd6add1301c9813008550f"],["/2023/08/08/python8/index.html","c1bebbf76ef31833d651340dd2d4866b"],["/2023/09/05/deeplearning01/index.html","120236915df02addcd82506fac266651"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","48fb9ecc3b079fb5bc43ad979f67f71f"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","39f7da3f2515af4b46e20531eb4cba52"],["/2023/09/26/springboot-0/index.html","122831db93720422596131d0960030c1"],["/2023/10/13/cuda/index.html","a4fbe487098557f6afb33ae56cb77a13"],["/2023/10/14/cuda-python/index.html","3d902eef546e44b6dd553f0324ff6876"],["/2023/12/21/dl1/index.html","3d0e9feca9adf8916806e5a152e88a13"],["/2023/12/22/dsandad1/index.html","8bd2a168121debf13c75a34b48cdaa80"],["/2024/01/22/dl2/index.html","5b520a60ce3a7f4fa139dff117d06e87"],["/2024/01/28/production/index.html","4cdae53e558d282aaf8a2ccd1b5d434d"],["/2024/02/25/mnist/index.html","8daace0d91db4b24382444ce59d04502"],["/2024/02/26/ner/index.html","581ec81542870d09299db64717cc62b0"],["/2024/05/18/springboot-1/index.html","92ac6d0db91978430b8b8224391ac406"],["/2024/05/26/multicategory/index.html","74c05c33d4154e4b5f24814924f22698"],["/2024/05/28/springboot-2/index.html","412c0c4fab0f6bc8a92ebd2966762b66"],["/2024/06/02/regression/index.html","baeb4ee4d332e0713186e8b4c53e0a71"],["/2024/06/03/imageclassifer/index.html","e69ddaa2aad01df59c67b8e4fd2ac557"],["/2024/06/03/nlp/index.html","5772110f41c8ee0aef05f772642ee72e"],["/2024/06/05/springboot-3/index.html","ddd653e29f1e8714e124c7199e532ef0"],["/2024/06/10/trainsoatmodel/index.html","17eae7516ecd65563bf62426cc349187"],["/2024/06/15/collab/index.html","356efe678d3d169b462cbfcbc7ca13b2"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","3cdd4f88590499387bc7950def2a713d"],["/2024/07/04/vue-qian-duan-an-li/index.html","1faef17e01810e76f15a32fbcdbd2764"],["/2024/07/05/element-plus/index.html","a2bb658bebcd0f596aa4d16dea52acd2"],["/404/index.html","b6ee50010df8627f46dc046b35cdff65"],["/about/index.html","35fa4c8729ff61129433de86505703e6"],["/archives/2018/09/index.html","bb7475a98e040bdd2c0ae7af6e464904"],["/archives/2018/index.html","b1713d95a9c8579286b516f8c80ef6f1"],["/archives/2019/03/index.html","3362dba8a7cc23bf367e210d87bdf240"],["/archives/2019/index.html","e64dad4f569c0acedc5f2242175fb084"],["/archives/2020/10/index.html","4f7064794999533e9bd5df0f1f4de445"],["/archives/2020/index.html","c23943f7abd35d6845d789827ea3c72f"],["/archives/2021/05/index.html","df8e76ac725007b9191a0a046254737b"],["/archives/2021/index.html","0aedd11b747a626a8220504b740c2f6b"],["/archives/2022/01/index.html","498347c91274f12ff3aa9905c6accaf9"],["/archives/2022/02/index.html","68727ea74f514eaaf98b7e8fd528a76d"],["/archives/2022/03/index.html","30d23ec3d4ec0865eeec6b07dba8bb26"],["/archives/2022/06/index.html","af03ee152bf977b7312d996fa7d40d85"],["/archives/2022/index.html","0221c44970e2ca1963642b09f43eee8b"],["/archives/2023/01/index.html","c7a4324e424311142c122e2d977bf058"],["/archives/2023/04/index.html","365e4f9615cea09d3db1b3c8e66cab3b"],["/archives/2023/08/index.html","c8bdbbe2ab0cd882709b1e1ff26fe383"],["/archives/2023/09/index.html","7465386ba0a95ece39c505f8786d0e00"],["/archives/2023/10/index.html","46d10f38bfa2cee22520d113481f5878"],["/archives/2023/12/index.html","0e11c32066fb2c2e16afe8fe9dfa89a9"],["/archives/2023/index.html","c016616548574b6963f8d721a64a71ce"],["/archives/2023/page/2/index.html","4286c639a9654b44a6866b4957571564"],["/archives/2024/01/index.html","d1ca78f133cee8da46662c1ea38b2d70"],["/archives/2024/02/index.html","27cb3e57524b9467e4175bd990622e82"],["/archives/2024/05/index.html","a88c2163832c9e91695fa5a549991f08"],["/archives/2024/06/index.html","de7c6f42be0d565d6cbca0820bdb4bfa"],["/archives/2024/07/index.html","426f1c06832f78c9bf5d13c3f1dcf20f"],["/archives/2024/index.html","da64517fe9898275de3f96cea4b8f4ae"],["/archives/2024/page/2/index.html","b8b492f3701e7151ccff4003bf71f216"],["/archives/index.html","048558109edbf035fc557a9b75d464c7"],["/archives/page/2/index.html","93d5814d6b2e6d8792936a2b07a00555"],["/archives/page/3/index.html","b575872706273a6df75936af0d5e7ce6"],["/archives/page/4/index.html","6148d6ba2eb0933d3c5053cb4bc2b221"],["/archives/page/5/index.html","6db708775509c9ef1acc431d7d036f88"],["/categories/C/index.html","1f477d7fa651328fecb07d735e697add"],["/categories/CUDA/index.html","e561ec4c8ec83c3f648288af23aa2ddc"],["/categories/CV/index.html","21233ae12d3c153ca05949ea96e91ce9"],["/categories/C语言/index.html","bfa6dbe84a51052c274c9383c60a849a"],["/categories/Markdown/index.html","e51858c6ee48cb9f432c68ba3199c1ef"],["/categories/NLP/index.html","325076d411bbb293e9d8a8c6059f52a7"],["/categories/Python/index.html","6449583667c8520260f2faef0c288c68"],["/categories/SpringBoot/index.html","4672fa8b1d87f772415477553422ec74"],["/categories/index.html","bdd2a7b474e71e42eed42873cd4b6979"],["/categories/前端/index.html","702d0012fb7627a30d6b83c266ab31bf"],["/categories/协同过滤/index.html","13cc174695fe06a13835768dfd13205e"],["/categories/数学/index.html","e404ff2faf6d614535fcab12f1e4cf94"],["/categories/数据结构/index.html","b491f8b0b7bc95d8aa38b613bc9284bc"],["/categories/深度学习/index.html","7e3b6ba8b9a8b48a9e7f737c1ed224a3"],["/categories/神经网络与深度学习/index.html","6265f920775654c623a21ce9d13a29a4"],["/categories/算法/index.html","3eaaaae031457038206793ec81d947e3"],["/categories/训练模型/index.html","d3c8e8ab46f66efdaa7c5e8d654ed649"],["/categories/面试题/index.html","b91260e0e003c3fe24e13431b5266b7c"],["/contact/index.html","ad6bb45e9ce07bb6d3146c691955a166"],["/css/barrager.css","2b17c369702b4146a0a4869d9e4c65be"],["/css/bb.css","87880b30580f7838a325517c55a21264"],["/css/dark.css","1daf5cb9eeb2ca7bbdd39a0cfa543393"],["/css/gallery.css","1bb5c6db335764895c4bab3fe7f4cab3"],["/css/gitment.css","a23ec30835e124db46f96052cc0bd2c7"],["/css/indexcover.css","b7e68f80280b62f417e492479046f70e"],["/css/matery.css","181d981e519b1dc32af6b6ec351b201e"],["/css/my-gitalk.css","14fb41956f6fb3609a7d0ac1b53ecd27"],["/css/my.css","eb4557d2f497e3d94756648c54263ebb"],["/css/post.css","9561aed9cbc4357426b0c067e7c28776"],["/css/reward.css","187e1891b9d19c81fd7f33cf32b6d372"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","ee9a6ca2b8e79f39fce232819f151205"],["/index.html","704b96f77de463d647dccd8bcc44b5ce"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","2963c63bd9320874aad4f231a5fd3d7d"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","e5220fe2bdc6491a630491de96c776f7"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","a2e6265e9c082a1fa9233f150df92158"],["/libs/gitalk/gitalk.css","bf9b552cff39c44a3426b98d0829b005"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","16d21aab4d827078240fa8be145deca7"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","9ece863b93185451927bb8075e5d721c"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","db7988036b191b5fbb415ca9783d096d"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","bd455aa4ae23a86afdb983583cae133d"],["/page/3/index.html","73582c6dd94931da68c3f37f03b6e28d"],["/page/4/index.html","3c338ed98c6b928dd24e8c0b3c5ab047"],["/page/5/index.html","ff252521dd1809760e63f288f4849b2f"],["/page/6/index.html","da940e117e06520580b9f8b687b96c6d"],["/page/7/index.html","2ed77cae26422f7abbd773ba5889446e"],["/page/8/index.html","63662588618408f3d604e61535eb1b21"],["/sw-register.js","225fc40e7f1027bdc524c1def6e6ce2c"],["/tags/CUDA/index.html","cf9cc372b349bbf30e6c6ed172fbc94b"],["/tags/CV/index.html","b02a1d1eb72798482fbf9e04a6dc9eb7"],["/tags/C语言/index.html","2584a6eac2033213b1d0582979da8e81"],["/tags/DL/index.html","c60da1e7fd86c55520741a9a8f8c9675"],["/tags/Element-Plus/index.html","49de265de9772d49305cc95f4f318388"],["/tags/Java/index.html","28ba283c7d869c10d68a205b91adb739"],["/tags/ML/index.html","6d6c8c7aa1140abcc53be5542cfe7b29"],["/tags/Markdown/index.html","50cfbd53898d816b3a7c3f0c9b85fe1a"],["/tags/Matplotlib/index.html","8943d5bca462f0553d12079a40a3b1d0"],["/tags/NLP/index.html","10bb5c2413bac77df12b73f97185f2f4"],["/tags/NumPy/index.html","380f3d7b2e0e551d23d8569d1f20903a"],["/tags/PyTorch/index.html","4572c5887a384469c0b93c497d37ce95"],["/tags/SpringBoot/index.html","ab3afbd646e3602107a1c24d0694471b"],["/tags/Typora/index.html","a7f2df0bd26bb0faf9e5e3cab6025cd9"],["/tags/Vue/index.html","b55cb7f6eaebd28c1ae12427cef21a4c"],["/tags/Vue3/index.html","af703be1c2ac7b55889669d30a5a297d"],["/tags/cpp/index.html","01698c3d0f8e1fa1ba7cdc6f567bfc59"],["/tags/fastai/index.html","419e502edc72f59a447f15e416110f91"],["/tags/fastiai/index.html","cf5adbf0bf96e9ba3dc4789ce13d1fe3"],["/tags/index.html","9bdd35bf26160f3e3efd1c3e51896e8a"],["/tags/lambda函数/index.html","5dd379987217e8e1fe2a6d9e4986c489"],["/tags/python/index.html","3a7f754b8bec91ab925b4b8bceec1ec3"],["/tags/函数参数/index.html","7eb6c77cefcc8a63d2eedb7dd43cb057"],["/tags/函数式编程/index.html","3d10c0ffe0e7171ae4e547667ea57b39"],["/tags/前端/index.html","617a566a539b954b655ce128c9a0ae00"],["/tags/前端开发/index.html","aa7db9648bbe08fef095dfdddb5c4bb1"],["/tags/协同过滤/index.html","297f1ad0b7586bb389e47b8dcd16eef5"],["/tags/回归/index.html","0f4ea1bafd80504f5e1a60aa0fee9de9"],["/tags/多标签分类/index.html","600ce9c8bf903b89b88e937bc855f7ef"],["/tags/指针/index.html","72666b0015e48425d0e51cfd37729b12"],["/tags/数学/index.html","20fe624fba515b6b3ef5faf4b74fa401"],["/tags/数据结构/index.html","4977e52dedeed9af8b6a7fbbbb17852d"],["/tags/模型/index.html","54b22491efff45f02ef0b5bc1e4cdb58"],["/tags/测试与异常/index.html","420d6fdf6b0f6dbf03c45a8f297b457b"],["/tags/深度学习/index.html","f0af57cbf1853d6a4f84e5ec6c6f1988"],["/tags/生成器/index.html","2af0f4863d2d67163e1082552201006d"],["/tags/神经网络/index.html","28dd96cbbde47255cd483d6639bf13a6"],["/tags/算法/index.html","2ebf6c9c3239dcc402bbcfaa527c0c7a"],["/tags/表格建模/index.html","4b1cd56eba43c2a7541c6538f1afb31a"],["/tags/计算机专业课/index.html","0844ae88a74e314ecf386176495b8783"],["/tags/训练技术/index.html","9b5518c3b052f2bcda052454d23e48aa"],["/tags/迭代器/index.html","fdc96b2e9de1417ef4d62308d97d0717"],["/tags/面向对象编程/index.html","d3b5c27eec28163b405e9951296b92cb"],["/tags/面试/index.html","2d16c49689f1c04725d38911c4c9280f"],["/tags/预训练/index.html","2d6a7d9ea9f1e5f18fadd465b7358338"],["/tags/高阶函数/index.html","25b5b20a4c3f04600404924bcd7e444d"]];
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
