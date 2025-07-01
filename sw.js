/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","aba724cc839984a811b0976b66957755"],["/2019/03/16/c-cheng-xu-she-ji/index.html","81d7a3e212eb5f93fba2ca4d0e03d2d0"],["/2019/03/29/c-zhi-zhen/index.html","a608b6425373da5b50a566b39850c7c7"],["/2020/10/15/ds-algorithm-md/index.html","89800869505c359f047fe4143c6b3ac0"],["/2021/05/18/algorithm-md/index.html","58c26c7b2ea4c4cb5b92ae59fb4ad953"],["/2022/01/12/python/index.html","afb62ab33277c5338211be2de8fb2f64"],["/2022/01/16/python2/index.html","3b7fc74048f1af5d489b5bb0604eb5ab"],["/2022/01/19/python3/index.html","89c2f2071f3b2845f08f10155b4a7d18"],["/2022/02/28/c-biao-zhun-ku/index.html","ac1684a986fbec1f0a3dded7291d301f"],["/2022/03/06/cpp/index.html","2dfc687682c0c97520c0bd3e18549969"],["/2022/03/19/python4/index.html","65b43db9a2c02000f3a05ac4ab59bd46"],["/2022/03/25/lambda-han-shu/index.html","49d334009431e4eb1b1e92243177efdc"],["/2022/03/26/python5/index.html","e8f65cb1557a7a9be7c2e7153287cb88"],["/2022/06/02/python6/index.html","d9de9410de352f80eef4ac87dd5b9159"],["/2023/01/06/python7/index.html","e5fbc4bf8c73d3449bc6336601d3586b"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","74c0ec991480ce9d80460608116aca3b"],["/2023/04/16/machinelearning1/index.html","7947d9025e8e4c1177d39b97b0fc1f47"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","d59e607e6638a721697ad025b5e8481a"],["/2023/05/26/db1/index.html","ee32a0bf1bb8ea9340f0a6da8ff1b359"],["/2023/05/26/db2/index.html","4bddef96166fe95f71d63951245e70ed"],["/2023/05/26/db3/index.html","bda9ce08d57d731e334447f507004efb"],["/2023/08/08/python8/index.html","6505ea768a8da24caf1e78726e6822a6"],["/2023/09/05/deeplearning01/index.html","1fa7ed069ca87c0fe0359f115ed8caa7"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","c0c19a5e43b6aa4d3ed5361ef611afe3"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","405b4888dcb8f92bcfb60957eea85e8a"],["/2023/09/26/springboot-0/index.html","91dea28f9464c00d1d0c236a44351c73"],["/2023/10/13/cuda/index.html","485f01950ece86bf378ab72e773bebca"],["/2023/10/14/cuda-python/index.html","5a022ddf5bde1017a58bf98b81175a0e"],["/2023/12/21/dl1/index.html","afb610e55eb3b8c301c8197b91394cdb"],["/2023/12/22/dsandad1/index.html","ef65cce073b504c1eaa20aa36bd75374"],["/2024/01/22/dl2/index.html","a5ce6e91c361c74d5ab2b8a09a2c5aae"],["/2024/01/28/production/index.html","42ac6fa975056aa82e3ea3aaac6c58d5"],["/2024/02/25/mnist/index.html","6ac8f1b50344d5e527ed6e5537ffc5e0"],["/2024/02/26/ner/index.html","cdd54fd602a7bc5841a8b1dc5404f0be"],["/2024/05/18/springboot-1/index.html","624f1901476a0d1a8cbdf85e2d2d747a"],["/2024/05/26/multicategory/index.html","d54ade05bd3224d3980fef19ccf57f9c"],["/2024/05/28/springboot-2/index.html","ed23c530ee1e87ee1cf40faa187b9351"],["/2024/06/02/regression/index.html","053fd387c26da580d47d5cb79e2cc3d7"],["/2024/06/03/imageclassifer/index.html","9219e0294ab92a940947f1aec1be9d59"],["/2024/06/03/nlp/index.html","6150926413ee6670b6f8d9dc3d7f7bbd"],["/2024/06/05/springboot-3/index.html","0db48728bab77e313114d5212b09f8cc"],["/2024/06/10/trainsoatmodel/index.html","4787bd888b9ef9e6e81d6b12f72bfb67"],["/2024/06/15/collab/index.html","87d6970e6e9d1a3f0273a96d635faff0"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","c5c3b608ee518bf2c7e7d25752262aca"],["/2024/07/04/vue-qian-duan-an-li/index.html","ad28f3049e880154497c53a68799deba"],["/2024/07/05/element-plus/index.html","7e263852c09aac89084b545f1eeb93cb"],["/2024/08/10/vue-kai-fa-an-li/index.html","050d15d89a62172ee151f913fb14f650"],["/2024/08/26/ddpm/index.html","e54d1bdc5301da1e504da7b367e0f3d4"],["/2024/10/15/redis/index.html","0b6c9e681a2f6c1cbfb8c786e10f13bc"],["/2024/11/30/leetcode11/index.html","75a535c6eb6526ac198c6e81dab25c3b"],["/2024/12/21/tabusearch/index.html","7c305992e648193e877190d888149609"],["/2025/04/01/hexo-bu-shu-dao-hua-wei-yun-fu-wu-qi/index.html","c88d9f7835d7a5e533985bc76673d9f4"],["/404/index.html","c40764e0cdff8eb0cec9d3f8a27e8ead"],["/about/index.html","a19aa935a35d1a8fd8fe0e3aed6604ca"],["/archives/2018/09/index.html","c13c0c438bf0f4a1b1662b85369c23fc"],["/archives/2018/index.html","cc7f5dd79cfdee609c509d341fb8dd7e"],["/archives/2019/03/index.html","1bc0563424413e1e6f9d24eaeac27da9"],["/archives/2019/index.html","260f7e1a7658c47f579ab4881f75b14d"],["/archives/2020/10/index.html","ec5cca0afb73e2a1da3f222036966ac1"],["/archives/2020/index.html","4aa6512a677586f5fca1dd09aacd2494"],["/archives/2021/05/index.html","289159ed61a874f65a471aed64321d9c"],["/archives/2021/index.html","d88cbd1c6a5197d6b39307d0a4bb53e7"],["/archives/2022/01/index.html","8c0abee197bf900f23eb29507d1eb68b"],["/archives/2022/02/index.html","7d047185c52cdafd17d624334f0f45cc"],["/archives/2022/03/index.html","3a32582462437ffea700da7bc4ff2020"],["/archives/2022/06/index.html","97393cc98b5f7d97cbcb3a9a67dbd04f"],["/archives/2022/index.html","dd1887cc909798309813fdc3455ec160"],["/archives/2023/01/index.html","a7e93221bd449a630d244c5d09250690"],["/archives/2023/04/index.html","b1b45c3448be6ba860b33e7d551db1fd"],["/archives/2023/05/index.html","a53fab01a1389cfdf424489de75aade8"],["/archives/2023/08/index.html","1e153b0c9e04368a131ecb9a36bb965c"],["/archives/2023/09/index.html","550f8fd94d4567cd518466fdfb5c3305"],["/archives/2023/10/index.html","85aa4a17ce5f5b9235fddaff7601c5a3"],["/archives/2023/12/index.html","3f06740334a5bf37b59403c6f4722746"],["/archives/2023/index.html","2cf19dc91137a45187188641c4234d15"],["/archives/2023/page/2/index.html","b0ceb82ade5e9ab02d7898a4f7af1f82"],["/archives/2024/01/index.html","9e8f478b1351c2f0e1dc83e3e8fbe0a0"],["/archives/2024/02/index.html","8f281ea2f45e62c1d88548bbf5e4a798"],["/archives/2024/05/index.html","294b7318cd42297b982fda9ec620bbf4"],["/archives/2024/06/index.html","0d0528be2e573572d0a4a7e015a0f601"],["/archives/2024/07/index.html","0eca6abf64cbe9e5e8e6f7de2e9c6525"],["/archives/2024/08/index.html","0e46df5bb5b55ac09fa3315916cefdea"],["/archives/2024/10/index.html","6639102a34d710add036b692bcc6485b"],["/archives/2024/11/index.html","c223361463c0122c0f87066112a8161d"],["/archives/2024/12/index.html","b639e0462da2f832ab6b1ae38d898ca1"],["/archives/2024/index.html","347e1f82977a8b72c0ca9afc59d14611"],["/archives/2024/page/2/index.html","f0aec0188bb6d84b9e6305938ba20024"],["/archives/2024/page/3/index.html","345aa7ce29da8beaeb7fbf3ce85bec01"],["/archives/2025/04/index.html","bbb9b0a8f4160f017ea98858ca1a392f"],["/archives/2025/index.html","833cebe25ac43aae3aff5b58292365c9"],["/archives/index.html","f64cf166f89c50e15c6d371966ecc547"],["/archives/page/2/index.html","4b101fd32fbea50af2656c416b643f10"],["/archives/page/3/index.html","5d4512f8ccca4ff6e3316f5723d42806"],["/archives/page/4/index.html","e1fb2e3e1ea0ca4b06cfbb4b45f5f19d"],["/archives/page/5/index.html","79877d4f4e2231b38a37be70e4727e64"],["/archives/page/6/index.html","c648f43fd7b0d449ab62d7c49d5cd25e"],["/categories/C/index.html","118bea21541f5c6e80423f3077c8c9f5"],["/categories/CUDA/index.html","7ba7aee79560bc8c9a3af934c154f50b"],["/categories/CV/index.html","f1f3ec0647ec85abd600f0b0040fa33d"],["/categories/C语言/index.html","dee2eaccddcb0742532a110cc6e33696"],["/categories/LeetCode刷题日常/index.html","af2a122c46598fc1473bfe80e846cff0"],["/categories/Markdown/index.html","6a30866963174da92edb0a75302c8114"],["/categories/NLP/index.html","64d9b9ca93b6b1a3816c59efd2fe344a"],["/categories/Python/index.html","f938276051b76d4e2af00321839351ad"],["/categories/SpringBoot/index.html","27e27210c0cd7073c0aa68c93f4b6a62"],["/categories/index.html","77c40b0c6a6cf155627f40ebe12b3bff"],["/categories/前端/index.html","2d5ac92c11c73eb08fa5289fce5530b7"],["/categories/协同过滤/index.html","f9dcd47e268dfb55015cc8c8c0dc2b4f"],["/categories/博客/index.html","7345ee2ff703142e539fc69960b93d08"],["/categories/启发式算法/index.html","53bbd6304075df720fe146103a11c5ec"],["/categories/数学/index.html","dce14dd5ff9ca14246e2c6a73aaf263b"],["/categories/数据库/index.html","2a038b33187d79949e49e7d29e225e28"],["/categories/数据库系统/index.html","a8ea8284a5f8cb9c1e4a079baa5bc7e2"],["/categories/数据结构/index.html","e334aef5f44e457f1e8361e21b968680"],["/categories/深度学习/index.html","122ace4dbfd92924d31b9e2a6717eb63"],["/categories/生成模型/index.html","44f897aea1fe6daf147d5f8b8e55e802"],["/categories/神经网络与深度学习/index.html","070bf64f1c2baa5e17d6f3fc475711c1"],["/categories/算法/index.html","133d9563bb5341a002abdb3314217c41"],["/categories/训练模型/index.html","84bb063439d0b31dd745c658bcda1cb3"],["/categories/面试题/index.html","10a7cdd881d3707efc90393a2d535776"],["/contact/index.html","9b94dc3d46a01aac2016c89e1bd1c423"],["/css/barrager.css","ac4275960a2e18dd4ce66fa49262c25b"],["/css/bb.css","ab9fc438f8d6a7f015586f3b8c7143fb"],["/css/dark.css","c5cdd14bf0c5647578ee1d48b7245a9c"],["/css/gallery.css","9ff7fb9def0f8d76fa24c87d96197164"],["/css/gitment.css","6cbf95b1cdc517912c745bee80fc5abf"],["/css/indexcover.css","be789b7f4da78c6e719a4d37568b9242"],["/css/matery.css","15357931b0419d1ff57ac43ae2660110"],["/css/my-gitalk.css","52f6854c545ea514dfdbaeb33ea5d10c"],["/css/my.css","e23add63561019b40e959d0bd92a258b"],["/css/post.css","a4f41b21d30798659f7d7c153996326f"],["/css/reward.css","e4cd6bfc8f21034ea1c909ba0c9027ca"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","4517e91f75099e916184326f53f21bf5"],["/index.html","92eaf62c280110e5e2ed2633d8cbd3df"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","0d2600e0609968009d03da75ef3b0ec7"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","d8f2c5a39a9bc482ac837c6da835f87c"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","942a943a53e413f320d6ac18a66bf232"],["/libs/gitalk/gitalk.css","fc0cc9362bff2a13114e427268fcc4d0"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","9ef6b175699558ecd8d431960f4e55ff"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","bacbace441505f7272f07a7b726b7189"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","c20b66fcdfb5c155922e88f999f99c9f"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","1652a812dce8d6062a5f967ac1750c1c"],["/page/3/index.html","d17cbda843672a9963f8ea7e3233ea1a"],["/page/4/index.html","e81aed2bc5b2dd7916d9a68c45fdf63d"],["/page/5/index.html","dd8fdf0330084e7efbfc75da53522470"],["/page/6/index.html","58c761f61cde60865baaeece40cb53b5"],["/page/7/index.html","a3ca732ddd2cce8b6557a57d2acb95ce"],["/page/8/index.html","5886c02d62541d256b94f9fa28b4f1df"],["/page/9/index.html","97ccdd813317ea29037db36f0b367ee2"],["/sw-register.js","34e1c23308b3d127868a2386a847452b"],["/tags/CUDA/index.html","f7e12a37ab8ab0188dd18148b639eb5b"],["/tags/CV/index.html","3d049d45de2b98423942d4d5532565af"],["/tags/C语言/index.html","8247542e8a065db082ba233ad3b8401a"],["/tags/DDPM/index.html","356c3d7475b01cfa454a10a308b3fff5"],["/tags/DL/index.html","c12cdc3cef118051dcb26334df6bcea4"],["/tags/Element-Plus/index.html","32a8adb40f6e7d7c724cd903235c8f59"],["/tags/Java/index.html","394261e222081503ec8f1da139652e29"],["/tags/ML/index.html","99ca42fd7e00e06fd0aad8051c1e25ea"],["/tags/Markdown/index.html","be84cb0bd8bba5ab331e6c87d41d8a2e"],["/tags/Matplotlib/index.html","95adf67b99c9f40de8b80d55899b34c5"],["/tags/NumPy/index.html","d2ee2b079016708df51c5643ceb6f96f"],["/tags/PyTorch/index.html","66e63a50e8fb7297be610c51c0657ef5"],["/tags/Redis/index.html","f208cb755a1f79321c6554fa8f8e825f"],["/tags/SpringBoot/index.html","9c94c06cf7d1df777dee336a4bc5a365"],["/tags/Typora/index.html","4c485d0d253543ca7f8a971c7c20c726"],["/tags/Vue/index.html","7de17573f1d38c2bc76e53c9ee6323aa"],["/tags/Vue3/index.html","964f59ad7b05a2cfdcc6d30ecd2fea79"],["/tags/array/index.html","576d76595b7a687ab214e0cc12a63b5b"],["/tags/cpp/index.html","08ae47858e051b142b30f29500178737"],["/tags/fastai/index.html","6594d35ebde81e07419af1ea2f1b696f"],["/tags/fastiai/index.html","7187f6f376d5e51bb5588c902253466f"],["/tags/index.html","1ef0c048c857db9f032f230b16ea9601"],["/tags/lambda函数/index.html","712b00a04cb5c2116611f4cf8341e016"],["/tags/nlp/index.html","b00c96937ad32db542a67e987e0863fa"],["/tags/python/index.html","254ff1d4fdb4cb725b450e7d453ac7b1"],["/tags/two-pointers/index.html","f852c2ecd36a6b69174144c1cfd217d1"],["/tags/优化算法/index.html","7e862dce423df42175359f9d0b87b0de"],["/tags/关系模型/index.html","d6927f3f5df363c2473af693f8b0d950"],["/tags/函数依赖/index.html","c5fe5e4297dabb89835793a781cf6aa1"],["/tags/函数参数/index.html","087411df53a4da0df5c2807b0b79427f"],["/tags/函数式编程/index.html","25031117875fbb9e75403ac72965865c"],["/tags/前端/index.html","94f3f0949fede44f181fc74824ba49c7"],["/tags/前端开发/index.html","8c33c898b46d9d06941c3d10a10db8db"],["/tags/协同过滤/index.html","3658ec27f7f9de47fb0a6d36b2b823f6"],["/tags/博客部署/index.html","335f87cbde799a290dc3b7805cb601f4"],["/tags/启发式算法/index.html","c683d5dbbb03923cf87595b261b7403e"],["/tags/回归/index.html","be66e158aed996f845d4e8c876c53c98"],["/tags/域名迁移/index.html","ab2c54b5241e10f5a4b9bf6a3e87deed"],["/tags/多标签分类/index.html","d8c0650b1164178928ade6bc19d33706"],["/tags/指针/index.html","70f3528858e5f6d98fe010c3ee722419"],["/tags/数学/index.html","6996353afdc927dd573aea97c5fdc76d"],["/tags/数据库/index.html","3c27d38e150444e0244519bd798ae990"],["/tags/数据库安全性/index.html","55bf771e57855f7bc9dc1f7fba4fe341"],["/tags/数据库完整性/index.html","f935016a317d6194a8cf1755649ac954"],["/tags/数据库语言/index.html","23e0f58519a0dcf96dec92e511e7d427"],["/tags/数据结构/index.html","6272e8b05e6e8e7d1b22ab91eff14831"],["/tags/模型/index.html","326d010ce1dcae8b6b721b9e337f564e"],["/tags/测试与异常/index.html","fdca94c14563b9393bfc1d7f719cb0f3"],["/tags/深度学习/index.html","a0309d879096c3525d32c425b951dd1e"],["/tags/生成器/index.html","1c3cb3ed229e82f6d578166c6cd137cb"],["/tags/生成模型/index.html","cf2c711c8dad115b989d008af2d48bf2"],["/tags/神经网络/index.html","c17ba1750661b31e34190801c4af0f08"],["/tags/算法/index.html","095ad61456aa8dcfe4bbff3dace772de"],["/tags/范式/index.html","e817f4f3cd032680d217296f1bccd125"],["/tags/表格建模/index.html","3ba5f14dd61e942909c9a85ce0ca7bd1"],["/tags/计算机专业课/index.html","64774ce677e31b632892bb796381b7a2"],["/tags/训练技术/index.html","8ad570086e7142bdc49b9e5531554ce7"],["/tags/迭代器/index.html","f42f44d244836768ee277578adc05ce7"],["/tags/面向对象编程/index.html","e2952d72d49827de1b07fc077a024737"],["/tags/面试/index.html","a9300966092e8cde3a3c6ca76f22b002"],["/tags/预训练/index.html","c52155cad661daefd3d5c28f9451a705"],["/tags/高阶函数/index.html","f3b19ccdcaec77b803363c5fc1816c31"]];
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
