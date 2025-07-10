/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","4b85aa9012bc28f1d0bf125a77ccdccf"],["/2019/03/16/c-cheng-xu-she-ji/index.html","638f5a76b5e84966b534a6d2974c3192"],["/2019/03/29/c-zhi-zhen/index.html","fad7f43564ef95c895845fcfc96dc119"],["/2020/10/15/ds-algorithm-md/index.html","1421ff91525cae51080f773005fad201"],["/2021/05/18/algorithm-md/index.html","a11ef84ff7ba2f4241025f3dca54164d"],["/2022/01/12/python/index.html","26847f1979e86eb73b8bdd70ac2dac01"],["/2022/01/16/python2/index.html","44d288229908419d65a5532c553a1930"],["/2022/01/19/python3/index.html","443eb473e8bec01cc3262891d2d95d32"],["/2022/02/28/c-biao-zhun-ku/index.html","785643a454f457b1ba02e6b5395311bf"],["/2022/03/06/cpp/index.html","2c94afed5943c76ecae1dcb774a50773"],["/2022/03/19/python4/index.html","564eafb83768982ff937719dd477557a"],["/2022/03/25/lambda-han-shu/index.html","f6c52c64333890c9c01532b6474d7b29"],["/2022/03/26/python5/index.html","36f2e7c8a632ca486a0dd477888588e0"],["/2022/06/02/python6/index.html","e638e78a8d95bc04bbac40f5392d8d5e"],["/2023/01/06/python7/index.html","4ca6f9885c682568355457109862634b"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","9014a880be8f3a27821e24afff660448"],["/2023/04/16/machinelearning1/index.html","9e871d44aec87d512452f6a25e276333"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","b8003d785fee9a2b9ed43e10f971e2b6"],["/2023/05/26/db1/index.html","4e03b0493503eaf352d9038b4269acd7"],["/2023/05/26/db2/index.html","6e6f80465c962ce1497167b4cae695fe"],["/2023/05/26/db3/index.html","ab2324b7c1fcc45e076bfcf162e3c644"],["/2023/07/01/db4/index.html","a765f0bf7c6bc94b10319bad38e86a43"],["/2023/07/10/db5/index.html","f52da72c99f52d228de00922029dc97d"],["/2023/07/18/db6/index.html","77d9208dcc9f93f31127389f29fe6ffe"],["/2023/07/20/db7/index.html","04c4355cc096422100a31c8a192cc907"],["/2023/08/08/python8/index.html","37c115ee6e779c3be2f7ee8d099e7678"],["/2023/09/05/deeplearning01/index.html","73d92c508fb380430bf48be920009804"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","fa9bee310c6f93b687a8a91807021298"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","fcd005631f6ffe88da89ce097d68612a"],["/2023/09/26/springboot-0/index.html","c7262a0c0f0c4ee38459cac83b7a3bd7"],["/2023/10/13/cuda/index.html","ce0d4ea964f80de1459ecc5dd1e8e58b"],["/2023/10/14/cuda-python/index.html","f5faa7b037ec1edee836937c5c471c52"],["/2023/12/21/dl1/index.html","20753b003e7759cb9587c931fb1d0d3d"],["/2023/12/22/dsandad1/index.html","d169d007cc4eb7e95ee395e05d0c5c60"],["/2024/01/22/dl2/index.html","eb6301593fce57632afb044e7b80e3e6"],["/2024/01/28/production/index.html","19569354e8e8b7f43e6b9e26bcdf266e"],["/2024/02/25/mnist/index.html","399c59aee84b2e0e672945696a9084a2"],["/2024/02/26/ner/index.html","cbfbdaf0878cf0ad80594c6cd85c6ea1"],["/2024/05/18/springboot-1/index.html","c53e64858efd5b1c493980218813fc12"],["/2024/05/26/multicategory/index.html","05898a5fd39507de62594de40a5fb5f8"],["/2024/05/28/springboot-2/index.html","a517144ca9292e552d7194965ecb151b"],["/2024/06/02/regression/index.html","bc8d80ab62b9163ffa1f50dffc724b21"],["/2024/06/03/imageclassifer/index.html","a2ffd93a9ba7f1ac02b75556efe94aa5"],["/2024/06/03/nlp/index.html","8cb9546a8a92f3005dec64c9bdc1a3e7"],["/2024/06/05/springboot-3/index.html","8b72b9bc776bfdbf781cefb962904c8e"],["/2024/06/10/trainsoatmodel/index.html","d2960ed8897ce3d4017ebc81a801112e"],["/2024/06/15/collab/index.html","1dc055f2a1f023972f146f0929b9eab0"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","03752c2b00b0b7a3dadc3b82f5362435"],["/2024/07/04/vue-qian-duan-an-li/index.html","c22eeaa11ec003503e93506537f3bb30"],["/2024/07/05/element-plus/index.html","b027395a1f7e825de9046fa772e25ac3"],["/2024/08/10/vue-kai-fa-an-li/index.html","15d559b3b8daecbd88c136d96f33aceb"],["/2024/08/26/ddpm/index.html","57b37b2ebaa4ef82e87e95933f152d94"],["/2024/10/15/redis/index.html","80711aa4ce4104a5f6c25f9c6b01f32a"],["/2024/11/30/leetcode11/index.html","abc287ebe0f13e12bccc10f5a2d76e7d"],["/2024/12/21/tabusearch/index.html","e79e3cfe12d2259cb4ba14295aa81b74"],["/2025/04/01/hexo-bu-shu-dao-hua-wei-yun-fu-wu-qi/index.html","2872bc684d43a84e28193a17cf23a87d"],["/404/index.html","bbe74197656cf26a41f3054396e34b15"],["/about/index.html","c97a33caaccf1171e04bd123b40df305"],["/archives/2018/09/index.html","577a77f68ca9bfc86c39f467c28cec43"],["/archives/2018/index.html","d114d2c501016578f7bc14f2844e99e5"],["/archives/2019/03/index.html","2f32b5d9c6ff69bf380e2d7dbbaa8a84"],["/archives/2019/index.html","53d0db86ab46866c223ba74f392a1aab"],["/archives/2020/10/index.html","d5a48f3dc6a8572654da653e92ef6224"],["/archives/2020/index.html","15467fdd8d8f63590cc65bf9eb4ea4f0"],["/archives/2021/05/index.html","a3fdc43f0b1f171ae7e15c09b1bdaae3"],["/archives/2021/index.html","fdf25b792276ad92b1c7bb73a81ea7b1"],["/archives/2022/01/index.html","a8323feab5c7c52a60498b85c88d616b"],["/archives/2022/02/index.html","5ced75ae5c6844111ac9ccbc49ec835b"],["/archives/2022/03/index.html","541fb9af6367f09c8ab4058438d6b977"],["/archives/2022/06/index.html","69840c9659f3a48fccd413e4f0432541"],["/archives/2022/index.html","7a379e0e565e784d5c060b8ada5f45e6"],["/archives/2023/01/index.html","7f0eb335aa8dcd187edc186dd4b7a73f"],["/archives/2023/04/index.html","4e223be4d52e532a34ea4d5710525266"],["/archives/2023/05/index.html","e781965e064793580fc7ba19918966e7"],["/archives/2023/07/index.html","2ea9b467b959a6018c3526bfe9155f3c"],["/archives/2023/08/index.html","546d04aefbb18dc5b2692026219b9416"],["/archives/2023/09/index.html","f1385667bbd8f81476d500534ebdfc80"],["/archives/2023/10/index.html","62d0a4ea60746d2f1db97a72c67c9de9"],["/archives/2023/12/index.html","5c9c115667e5047f0f5b2f936111ebfc"],["/archives/2023/index.html","21b052eb8847534148b16b2db0491497"],["/archives/2023/page/2/index.html","54959ac09794e024f93c1eb4792216a6"],["/archives/2024/01/index.html","28a9c59ba327baa46521680691b9d805"],["/archives/2024/02/index.html","a72ae5f9d33fef7bdebf5c8e58456a50"],["/archives/2024/05/index.html","a9c63c4020c83609ed2428214d633567"],["/archives/2024/06/index.html","e7d334ccd9ce6ba1172f9a42735ad2e2"],["/archives/2024/07/index.html","0126b50079312fb3e415ed551cb95368"],["/archives/2024/08/index.html","19a68bee03c45404bb07cf8806fc1215"],["/archives/2024/10/index.html","70e856177f6165536ecad55a2069941d"],["/archives/2024/11/index.html","8ecf4097f59d4427f68444493c2c76f8"],["/archives/2024/12/index.html","3a7ea8af131b815e4c13e54c3e72a8e8"],["/archives/2024/index.html","6389290bae23305c78f5b0ba097ac99e"],["/archives/2024/page/2/index.html","f46fe9d934bd5feaf24e65fccd70fe16"],["/archives/2024/page/3/index.html","bdf249a2b044451bdde68b3315d1b9fa"],["/archives/2025/04/index.html","264fe0dddf4d55781331cc681bf585a6"],["/archives/2025/index.html","2a5e37d60baf5c2040a231cd4d83ea60"],["/archives/index.html","747909bd67608638a1f18ea60311eabd"],["/archives/page/2/index.html","feca0a67811ce2ae6d1e5c518d02b191"],["/archives/page/3/index.html","e4a2eea522d3e23b32a0ff0e3ba0b75a"],["/archives/page/4/index.html","5e265dd473eea175ce193d5a533ac3bb"],["/archives/page/5/index.html","0eaea6108a7ea1b9d913af80af371ea3"],["/archives/page/6/index.html","f2fa93a16c3439ea1c716e997cbeea0e"],["/categories/C/index.html","1bdf1306057215030d7cfd67938e964d"],["/categories/CUDA/index.html","ff9d56873cc46911b3c4f67913ba9b11"],["/categories/CV/index.html","debb3240f46ecb2b5754ff78e8d59ae1"],["/categories/C语言/index.html","eb33a91f42b0bca96725b76744fa3f12"],["/categories/LeetCode刷题日常/index.html","9b10d0f66f969dfe8eecc87635d07b18"],["/categories/Markdown/index.html","e5fda43f9ea986b9f1f03f5b124ecf0b"],["/categories/NLP/index.html","7a922ab636e0018d0539e91f3f7e6b6a"],["/categories/Python/index.html","eeb80825ae454659e72e12a3fece509d"],["/categories/SpringBoot/index.html","0c8578b883e0582b5e18629298c0c088"],["/categories/index.html","13e27cd619ca44a0c9e2dc747d00d1a3"],["/categories/前端/index.html","8a2375f9a45f84eae009ef41264e09a7"],["/categories/协同过滤/index.html","3162b13118d7596026a7b21b611bf6c7"],["/categories/博客/index.html","eba52a2a6dc178f79539ceae6a5a4275"],["/categories/启发式算法/index.html","2caa03253fb95829803e332028f964cb"],["/categories/数学/index.html","4005faffdbf96df068acd0e16a36bc58"],["/categories/数据库/index.html","1811a28b2b609cc5c3e96fd38a62f5b3"],["/categories/数据库系统/index.html","c2713d55293dd9fc458b0e890aee048a"],["/categories/数据结构/index.html","bdfad10946c89c49c532ce68d70b0823"],["/categories/深度学习/index.html","c57465bf8d591c7a219829db4aef8ae4"],["/categories/生成模型/index.html","b9143788f6d491c04a9fc63136ead1de"],["/categories/神经网络与深度学习/index.html","d138a8a74cfbc7d06a9d122bd50e5312"],["/categories/算法/index.html","f14848f6610496ed003dd4ef4882de58"],["/categories/训练模型/index.html","009d6cdac0919ea8ee3873a04462c819"],["/categories/面试题/index.html","2ef929890f4fb82c318d309090278aa7"],["/contact/index.html","bc075b9f734b64be093cb9b80d8f8891"],["/css/barrager.css","2e3d714ad2862b7bb885804d02b55941"],["/css/bb.css","b47e02de31b9544fab0174a27d94e795"],["/css/dark.css","15a6826fa3dbcaffc3601b86ba16b885"],["/css/gallery.css","b4927974e8ed5090d68d4aedbf8fe82d"],["/css/gitment.css","8dae6897962d2843f219dd4799f33636"],["/css/indexcover.css","43b204eadaebed589065fb581e4d4700"],["/css/matery.css","3f52fe51e16f0b322c492edacafd8a15"],["/css/my-gitalk.css","f5d530f627309890d8af2641e4abe6e7"],["/css/my.css","2599bacd448324b93a1964d27cfdcb30"],["/css/post.css","5d340153d02dd6b82fab0a4642178721"],["/css/reward.css","158feb1cc240c5282b20e3b499c869c3"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","f43fb377e5dacae34184d9fb1cf036f8"],["/index.html","ac698e3f03b57286eff2275e4e0519d7"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","37fdef6fea55beb930624094c9659274"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","b6d01675882670e790669e1d2ad834d6"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","41255fe5409003a48df67fb05079afa7"],["/libs/gitalk/gitalk.css","2d7492bdc67bac19cdeec6f421d20947"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","51051c15667b435a3c8adc2fb721c508"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","244bb3b3c07ec8e0976518851346c850"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","8e03e446eac5463f1615f03f723724a3"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/10/index.html","abef5b0560f3e70fc31c40b7421debcf"],["/page/2/index.html","81c6a1faae949ddb0e4b53e7e571b84c"],["/page/3/index.html","4af8fc46e441d6c520a3cb411d46a8f7"],["/page/4/index.html","92dbd33ddb54e748b7669d22242f332c"],["/page/5/index.html","31f869bc2dc0e9c95bf7b143d33d06a6"],["/page/6/index.html","9e6c8c74e708eabe3ff890d73dda6be9"],["/page/7/index.html","a741d469feda03e21737178536aaef6f"],["/page/8/index.html","248cbd6a088ce9b726661920c5445257"],["/page/9/index.html","9ea4bc27ff56086640ad47281c0f5168"],["/sw-register.js","e932277453d2e146d52d95f6e861045f"],["/tags/CUDA/index.html","a7f0d30aea7a282f46b0034c1b406c85"],["/tags/C语言/index.html","4eba745c3c15976c7ad75b78cc03d3df"],["/tags/DDPM/index.html","963fd25a47503afa6a7bd6a33e622f49"],["/tags/DL/index.html","2477b76cbe45fb5e57ae4b3ba86b6d1d"],["/tags/Element-Plus/index.html","671b491539f37497d1b3e5e1cb28334c"],["/tags/Java/index.html","1c61701d168c58121d1dfcadad5fb277"],["/tags/ML/index.html","242eae70fcd517f05653a282b1579d0a"],["/tags/Markdown/index.html","657c95da461b009007a372320db0ae0e"],["/tags/Matplotlib/index.html","80b069a41b2398387af3737d241d3d93"],["/tags/NLP/index.html","2332a77d433bbf41ce06311ce196af14"],["/tags/NumPy/index.html","b2a7df44d74889b45238bc939903c945"],["/tags/PyTorch/index.html","858bfd1e7721bba078f76f5225d6f473"],["/tags/Redis/index.html","ac607f1e8dd3b7a1490b695b14e76716"],["/tags/SpringBoot/index.html","6b592820a176e413efd3f9c5c1cccf5d"],["/tags/Typora/index.html","d0ffb94497ea521c48d5168623c63fe9"],["/tags/Vue/index.html","30956f37fd879e7df3ff30a8cdddcb41"],["/tags/Vue3/index.html","7bef337191dc0cd008f834b5f2688c7a"],["/tags/array/index.html","f0ee8693aa75f8b3e85d409dcbfee965"],["/tags/cpp/index.html","835fbc6cd3ae4c479adef052e0ad4eab"],["/tags/cv/index.html","d2af5a84c0f883eb392bdfc71d015bb7"],["/tags/fastai/index.html","1044315612767c5e75a89b38586333c4"],["/tags/fastiai/index.html","eb5ff03b25197d0791e2d622c7617d7b"],["/tags/index.html","45634532759c62555a689626bc00ecac"],["/tags/lambda函数/index.html","07485f89d58f4d29d344d09c3bc1063b"],["/tags/python/index.html","b6518e7d719f8d0af92d0168fa405576"],["/tags/two-pointers/index.html","b80d7c9ed5d964ef9f6c699715bbdc09"],["/tags/事务处理/index.html","0c71cac11e48bf82b0912360b5cfaf3f"],["/tags/优化算法/index.html","a76f9cbff0461f8d28e45625b507e517"],["/tags/关系模型/index.html","82f5490918d721500c6c905fb91769c0"],["/tags/关系模式/index.html","51a352d9e4995b653771ec8a81d6cca2"],["/tags/函数依赖/index.html","79de0aba15b7bf18d3b7fe3cc5d26cda"],["/tags/函数参数/index.html","8738b99129978785e2c47d35e30215a4"],["/tags/函数式编程/index.html","3a0aec0b854264d3cc91b9f6df1b7adf"],["/tags/前端/index.html","ce101048e7d8f2867ab8f9ce8d116c33"],["/tags/前端开发/index.html","b2d6a7d3ce362d4c26e85414bf93dbb9"],["/tags/协同过滤/index.html","f4220328e80fac44d31b57980f066c87"],["/tags/博客部署/index.html","d64a67b97ca421cae3371fd5278d36f4"],["/tags/启发式算法/index.html","ba357872f96e4fda664bbb11bc53bbe3"],["/tags/回归/index.html","a1e91fe3458ea3d68e6c99cd4e8817ba"],["/tags/域名迁移/index.html","7822047fe8f82113a712e9d22dcb7251"],["/tags/多标签分类/index.html","bdcb2533a27c7bb01541c7741cb45a66"],["/tags/并发控制/index.html","ad17e6ded9ce324a606866a591c45b58"],["/tags/指针/index.html","ea5f7464d27b1a7de50cb89acdee6099"],["/tags/故障恢复/index.html","961a27f43eaa0305e1de8bba2d88e1de"],["/tags/数学/index.html","4af1c9829325b8763e769c5072c3296d"],["/tags/数据库/index.html","fe415d49fdaf6d2cc8a483a072c0db62"],["/tags/数据库内核/index.html","56cefbd5f014ea5875a7c30becc84fcb"],["/tags/数据库安全性/index.html","904f636bd9d9d8b7150a0017ba8f481b"],["/tags/数据库完整性/index.html","fb4b904370c2d0b291cb7dc15a5f9729"],["/tags/数据库语言/index.html","786d190ceb28373ac690143dade90877"],["/tags/数据结构/index.html","a51cc14d8fb51f842f1de9685e1aba87"],["/tags/查询优化/index.html","99f02a01b6f670996d251236f4087d2d"],["/tags/模型/index.html","12ea8bf0dc9b6946b1e3e234f51746da"],["/tags/模式分解/index.html","b7f97cea9ba1abb7fdb489b923756450"],["/tags/测试与异常/index.html","b903ab3f93acaed6e4bb7aee975fe469"],["/tags/深度学习/index.html","73c4ca5de15e27ab3dae33358d7a9e5e"],["/tags/生成器/index.html","05cae9f8b39667ac122a82f0f1758f17"],["/tags/生成模型/index.html","77dc565d24ffbe94985965691b910244"],["/tags/神经网络/index.html","b00171accd3422f86dec17f0bd6932b3"],["/tags/算法/index.html","494d670a8d33f079ad9e1689d9599238"],["/tags/范式/index.html","6d32d552e95b21c58d07301bf7946e5a"],["/tags/表格建模/index.html","cb9f0e7472ff91455e028e9c3cfced3e"],["/tags/计算机专业课/index.html","38271beee2392a92566c7fbc422241b5"],["/tags/训练技术/index.html","3d06cbd50b1aaa653f005cdab0ea85e4"],["/tags/迭代器/index.html","8b2b62e15105f06453af9c823a875806"],["/tags/面向对象编程/index.html","27fead7d762f9554c591db5c09545e6f"],["/tags/面试/index.html","b6ed279c068e096e693ce9040e1b20f0"],["/tags/预训练/index.html","ad9873b825697a392ab794be33b52f10"],["/tags/高阶函数/index.html","66c037ba9362542e7c9a3423fa83cabc"]];
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
