/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","97424da14b1e313cf71ea3509d8348ce"],["/2019/03/16/c-cheng-xu-she-ji/index.html","eceb283d8e6f6842375487dff80c34df"],["/2019/03/29/c-zhi-zhen/index.html","2d8bd94689d2cacc99316dcf791d87e2"],["/2020/10/15/ds-algorithm-md/index.html","c849a537cba8c46e699c8d473e0e00cf"],["/2021/05/18/algorithm-md/index.html","d1403d3a58dabf8708fa31be05b53bc5"],["/2022/01/12/python/index.html","8d98f368ae94e3742750731d58addbd9"],["/2022/01/16/python2/index.html","841da2ea40c04cf3907fe02b3e5f460c"],["/2022/01/19/python3/index.html","bb945fc9ec85dc42b188a09fd2f79eea"],["/2022/02/28/c-biao-zhun-ku/index.html","ec4c17086e6d5d9a7b6b6cdefe899a06"],["/2022/03/06/cpp/index.html","47053b0404e3f27c4f1b761aca0401f3"],["/2022/03/19/python4/index.html","5a2abecb7db1c346de41598a8faa5c62"],["/2022/03/25/lambda-han-shu/index.html","cd36ae1116ba606b802e365647a7fcb0"],["/2022/03/26/python5/index.html","57acd6cc36980bec225b52ce80a8fdc6"],["/2022/06/02/python6/index.html","eb371daa94349afe1cf007bf3e0300a0"],["/2023/01/06/python7/index.html","8df3e11e16574a11dc45f908943751cb"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","b04660d70112a3e63623fd151678d01a"],["/2023/04/16/machinelearning1/index.html","8d50604b220f922f5584eb846fa63978"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","9a26c8779d815b221f32ce211fc566a4"],["/2023/05/26/db1/index.html","046a0888e24e69730aa631261b0f0834"],["/2023/05/26/db2/index.html","e0585ce47ed230d7560a3d985c9bad94"],["/2023/05/26/db3/index.html","f2f4327b64f2964d0d38c497224cd98b"],["/2023/08/08/python8/index.html","bb92d3329325095e15eac9278b44716b"],["/2023/09/05/deeplearning01/index.html","375efdee716b2edc2271ffb72ed86d17"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","d092357861a9a4ed5f53e615e60bac8b"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","63449a7c9a06e70af615206119a693eb"],["/2023/09/26/springboot-0/index.html","f4cfa97664989f97af5b85d9bbf79a23"],["/2023/10/13/cuda/index.html","609144dd70b3450205e890649938a3d9"],["/2023/10/14/cuda-python/index.html","d136699526ed1b1717ac9c454163abbd"],["/2023/12/21/dl1/index.html","9964571e5ed6fbecb2bca05bae64c6b0"],["/2023/12/22/dsandad1/index.html","7b88030c9c7325ac8496bff84baaad67"],["/2024/01/22/dl2/index.html","32f06f0a466e4e89ff870f95f46b7786"],["/2024/01/28/production/index.html","0b1bfc261c09736403d7445ecf251a39"],["/2024/02/25/mnist/index.html","2b033b5155d7ef0dd9000534aaa19968"],["/2024/02/26/ner/index.html","fe0a6ccd7415893371fb86314075c9ed"],["/2024/05/18/springboot-1/index.html","7d03e138b98275def543c5bc6db152db"],["/2024/05/26/multicategory/index.html","7d462eabbf886a14df97e6aa364b6475"],["/2024/05/28/springboot-2/index.html","34b5666b19c48e63ce79388a82a6752f"],["/2024/06/02/regression/index.html","7832e97363a76aca80e3fc1038eef6ac"],["/2024/06/03/imageclassifer/index.html","2e03f6ce49a504c5738acec06c87c7bb"],["/2024/06/03/nlp/index.html","7d3aa3df9d7f87418ba0067e8df8382b"],["/2024/06/05/springboot-3/index.html","95c5aa9d74c45b6e36529d7e38282b7b"],["/2024/06/10/trainsoatmodel/index.html","4a3fddc6a1ed1af9218e554ec9a3c848"],["/2024/06/15/collab/index.html","ba0e2943e333c14674a54c4635c3bb25"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","d1ec588aeb5fe58db5ece338fc7e294a"],["/2024/07/04/vue-qian-duan-an-li/index.html","30dcabee555a13d6331297f4ef13c788"],["/2024/07/05/element-plus/index.html","c26e2ed720116794f82de5e6f2d79a42"],["/2024/08/10/vue-kai-fa-an-li/index.html","cc04adfc3da9055193eb9b2544e68fa4"],["/2024/08/26/ddpm/index.html","aaf5eefe4d64ebea67068217f00e3dbc"],["/2024/10/15/redis/index.html","dee8517d1a22441295733f214170114e"],["/2024/11/30/leetcode11/index.html","0d0c038e2c33ec79a822cf5682f56501"],["/2024/12/21/tabusearch/index.html","c34eb809bd0a6674353eb6e0f53ab23b"],["/2025/04/01/hexo-bu-shu-dao-hua-wei-yun-fu-wu-qi/index.html","65349e9f486647bdb71da9a3dd5a0689"],["/404/index.html","0e2ad8e230f07c2fb2ec66f440c434d5"],["/about/index.html","8bf9126869f4a2b927023f9241a764c0"],["/archives/2018/09/index.html","37a103a0ecaa44bc8b6975d88aa25f93"],["/archives/2018/index.html","8ebfbba0f6f097a5f4c941aa6d8728b8"],["/archives/2019/03/index.html","eae46b32e0b2dfe5798119e85cabb0e1"],["/archives/2019/index.html","3f77871b9d6cfeb43c57518cc0e6bdc3"],["/archives/2020/10/index.html","a909d8d612c1228b8c764e0c585e6147"],["/archives/2020/index.html","b274b093ad57d6e7c727c2cbf7ef3be6"],["/archives/2021/05/index.html","4b72086864397788e13b5c73a4ba98d6"],["/archives/2021/index.html","8a8f55f2d589c77c6cdfd98cf87132c6"],["/archives/2022/01/index.html","af46a45e322bbbdcfe13d0e2e7e16c66"],["/archives/2022/02/index.html","4eabadbaa2014a10973fa63ac0c8cb61"],["/archives/2022/03/index.html","b52f90886da0191daa1fab483a2539c4"],["/archives/2022/06/index.html","c1f33c85e8413e8fa717ff8e1ced3bdf"],["/archives/2022/index.html","798ce2a2305a57431df89404126f07b2"],["/archives/2023/01/index.html","6c176c648cee5841e52ee0034745fa3f"],["/archives/2023/04/index.html","0f0ee7644bf0578539e88afde68b361a"],["/archives/2023/05/index.html","9bd0fa4bc55a7ff844ccf1a029b7edb2"],["/archives/2023/08/index.html","438865b01d442da3dc3bd48d33a2d8c3"],["/archives/2023/09/index.html","1c1f2212c2a93f07488e0e2e6f7407ee"],["/archives/2023/10/index.html","419bdf462ddf40f653d395dccc532f44"],["/archives/2023/12/index.html","67763cf50ae9d55ad3523e5773aa3e71"],["/archives/2023/index.html","0aa5bbc4868eb49dd03ca5f52f5083e6"],["/archives/2023/page/2/index.html","edb9e12d241fadd5e5aff75939225911"],["/archives/2024/01/index.html","af05abea5df2b54929da5c257c276fae"],["/archives/2024/02/index.html","0f2dcc5f64f4cc2368083d275db31ba5"],["/archives/2024/05/index.html","ea486ec3bad9b1d64576870440fc3c16"],["/archives/2024/06/index.html","7070f748afdd9068725abd3ea7087fd8"],["/archives/2024/07/index.html","adb5932c5b8943d68379541e77064a10"],["/archives/2024/08/index.html","37985610c5463d44fe8ec88aa0679441"],["/archives/2024/10/index.html","a9bd1a335707e68553899c7042ee7589"],["/archives/2024/11/index.html","da63793c3359625f64e5d1ff754966cd"],["/archives/2024/12/index.html","edcddb06a109b6622f4bd6eff7bd535a"],["/archives/2024/index.html","55000087cea4e3b5c8a87134cd3e13ec"],["/archives/2024/page/2/index.html","4e551f948e32f9d2652d72d704c137ed"],["/archives/2024/page/3/index.html","ca82d74c3db470b72ea04054fd82db2d"],["/archives/2025/04/index.html","84233493ee708af252afaa01456cbc65"],["/archives/2025/index.html","6c5a09ddd8d5c11d675c9aca415b3dcc"],["/archives/index.html","d15d2d50bfdefce2a0a1b590251edf0e"],["/archives/page/2/index.html","2fb28c2715b3fd1730b0a3530c15f08d"],["/archives/page/3/index.html","df17538044f2d733655209b3e7ceecc5"],["/archives/page/4/index.html","bba804339929a2ee5b9404a6bae572cd"],["/archives/page/5/index.html","b1bf790e298642b1989c6984b60e0a15"],["/archives/page/6/index.html","0aaab6d13feb1ff89ba2cb8ba143d557"],["/categories/C/index.html","8f6be6585575f0f0eee45b15010bc788"],["/categories/CUDA/index.html","40140a2f3a10837a99d4e078515eb2c3"],["/categories/CV/index.html","050e8db0b0736921d72afbb040337a38"],["/categories/C语言/index.html","e69b4453d31c5b1379361e70ac35a5a7"],["/categories/LeetCode刷题日常/index.html","9edb7bc0e47686231598760cc63f37af"],["/categories/Markdown/index.html","4379fad3676335856cd7f02d180a2c81"],["/categories/NLP/index.html","cd14841c72ac47ef4e4b0420292f1dcd"],["/categories/Python/index.html","9ffbf221ab675fdb710c83abb7898c94"],["/categories/SpringBoot/index.html","dddedc79dc3c09c3e15f55ab8421c5eb"],["/categories/index.html","2190d14f0c64ced30572595a78379504"],["/categories/前端/index.html","0ff6b960af91ad26b85f0669dfddbbb3"],["/categories/协同过滤/index.html","d823da0df1fa81415d6eb4a4e0c3969b"],["/categories/博客/index.html","bd0e1e01d46dfdf2d0afc0ef4a36e1a4"],["/categories/启发式算法/index.html","0f5b563eda7277b667bf988497f8822e"],["/categories/数学/index.html","e9e45019a156d761ce8a33b72951acb1"],["/categories/数据库/index.html","3d95078ce49311c4b5add666a3fbf3d0"],["/categories/数据库系统/index.html","9cb76d390dfc59f5246f3bc12a00f032"],["/categories/数据结构/index.html","5f3c459000e9d76536d89fdceb4c0e87"],["/categories/深度学习/index.html","ba6b407ea61c4d214eb7c86d1d1a09ad"],["/categories/生成模型/index.html","8a52157bac67c3f53113a76924f1daba"],["/categories/神经网络与深度学习/index.html","b0c5cd39482ee449c92d2efc85d15a7e"],["/categories/算法/index.html","03356cff49d05a8de0771fc3f271d0c6"],["/categories/训练模型/index.html","5346f9677e9c6dec9745315c8e943820"],["/categories/面试题/index.html","ddf6a533e76d6cea64eb2300f61b027b"],["/contact/index.html","5087a326ebd76b86406d9a825da60121"],["/css/barrager.css","18c6a9d51b45d88e5a8ae0f5fa6ec593"],["/css/bb.css","f46b7af94bcc7c95d09f6c0f854c40b1"],["/css/dark.css","9d88497521b31fe2986964ba904d6d78"],["/css/gallery.css","6574a72ae3d12880d98944ef00b17bc5"],["/css/gitment.css","afc83b64d4cb292f3870e8e032889497"],["/css/indexcover.css","00c851ca2b8d95662f37ecac25e4fb06"],["/css/matery.css","022fade69ee283ae0c8a0b89801f8389"],["/css/my-gitalk.css","666ede54d734a21ef9ca468e2204ddca"],["/css/my.css","3dcd3098bb1935967789cc7e5518aae7"],["/css/post.css","2ce60467511ae2db4c001d57ba75ac8b"],["/css/reward.css","179bad25b2129ad3b82f90f0092c2ced"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","f1bd13081322582518ca2c770da303db"],["/index.html","634881739d91dfda71c84a6212328b90"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","efea59e5039ccd7a05cc4642e2872e60"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","d9fb94c25cfaf0c8da2d4801e1100009"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","c9d82664b7b26bbfdef0e28239e6abf5"],["/libs/gitalk/gitalk.css","334709c91beaf69e830cd7ccc7fa14d6"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","5b95b93629c1c52f179e9d7a7222117f"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","9cee59d79536beea07a926b93b653708"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","a6e999d4f28c535715e7b930f8416792"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","d0039bd400d00312f1beb93de7357fc5"],["/page/3/index.html","0f49697cb296e96b4344eb7486f8fb3e"],["/page/4/index.html","e4c7deca5972292c50e5bfcb88ec5a6b"],["/page/5/index.html","bcc324a3c0aa5470cce549333532fa0b"],["/page/6/index.html","5c1ecf6efaa5b5973502d5e7ba4db389"],["/page/7/index.html","9ece1030d4afe583c076128474e0f7b6"],["/page/8/index.html","1fe0697f2616359e9649e76f19a2bd1b"],["/page/9/index.html","09efae8808fcbef762e3c0eb86673379"],["/sw-register.js","1e5b9a866fdd5c1f52288ee43e162b2e"],["/tags/CUDA/index.html","cbb90c73f7ba0bcbb568a6a84dc3a3d2"],["/tags/C语言/index.html","df65d130c34feda8d37287aa16a1ed20"],["/tags/DDPM/index.html","5585175decfe84c076513105da8073ad"],["/tags/DL/index.html","8643f0fa9eb47dd62429e1b49dd527de"],["/tags/Element-Plus/index.html","1138dc57f8040d95199b168d8ce4d7d3"],["/tags/Java/index.html","6a695321fdbcc8db071cf501a7016689"],["/tags/ML/index.html","939d15aba2a610335b580e90c1842ac6"],["/tags/Markdown/index.html","c197ebbba622fbde950ad45ecd8d9d10"],["/tags/Matplotlib/index.html","b0b57792ebccf29881a142544926e83f"],["/tags/NLP/index.html","78f133d956a78a8500c7b81fb0871ebf"],["/tags/NumPy/index.html","98a1a8111d6e1f2411e0cd97ba64f17f"],["/tags/PyTorch/index.html","6477babc3c057211bb0b3641cd4c570b"],["/tags/Redis/index.html","d2dca9b7926e1eca503a6509eb9f06a9"],["/tags/SpringBoot/index.html","6ad0ee947acd4260517943d4dd98e1ec"],["/tags/Typora/index.html","894d8fcb89e4537b750e039c1702d591"],["/tags/Vue/index.html","645360e2f92a7ae40e2632b5c35593e1"],["/tags/Vue3/index.html","313e2d7177dae8075e18089b9b955f01"],["/tags/array/index.html","7c9a39258ea3aa9d0f9fe94b18679bcd"],["/tags/cpp/index.html","77fe8976ca81c605ac68ae10b2784f92"],["/tags/cv/index.html","8a74d88fc392a97a382e357360be2d8a"],["/tags/fastai/index.html","cc57f2e21933d8bb87fcc51383eda9fd"],["/tags/fastiai/index.html","1d3690a1367a9a609dc9f9dce81ce4ff"],["/tags/index.html","68ba808ac4f42d768ab1c9e8a3196f9d"],["/tags/lambda函数/index.html","c088610e5b052e798f551596d89aa057"],["/tags/python/index.html","69eddee8e68caa70d9ee0f4c6a574727"],["/tags/two-pointers/index.html","db701f1fff3a766dcdd25f8ca180fd91"],["/tags/优化算法/index.html","c8ac86dbda88e5fa8982de16fcb5651b"],["/tags/关系模型/index.html","0c38d8cbceb224b4c7d37723f71771d7"],["/tags/函数依赖/index.html","ab5cb0a0e20846e55e5bea1ddaf9382e"],["/tags/函数参数/index.html","0633b74d0cbe98350723c677caf7eec4"],["/tags/函数式编程/index.html","84a61bb81f835d71fa5cd7ed0bc28b60"],["/tags/前端/index.html","cc6465c4577ecad9aa24f1b3c3c35385"],["/tags/前端开发/index.html","f277826469e5fb9f3774f33a8b89c831"],["/tags/协同过滤/index.html","1c2a477cc2dbe9600139b558b0525ebf"],["/tags/博客部署/index.html","7a607cd67727b9b0560d0527eb27b48b"],["/tags/启发式算法/index.html","ba36e05bced6ba23480107f0d62b027c"],["/tags/回归/index.html","e261e51ba66f00bbd6b8bbe1f332c969"],["/tags/域名迁移/index.html","5dad8b825ea3d6fe74a3817563f9d228"],["/tags/多标签分类/index.html","e8c036c0bc0b0773e7979b412fbeceff"],["/tags/指针/index.html","b5d0975cb82e5acab9b7432df72bf1d3"],["/tags/数学/index.html","04b5fa71d010d0186edf397f0cfb830e"],["/tags/数据库/index.html","9567e74d9763f13b5623f9bc0a1a202d"],["/tags/数据库安全性/index.html","e80ebd2d39f26074ffd9e61b2eeaa204"],["/tags/数据库完整性/index.html","ccf8aebfe516f80a54ecc6b9feada710"],["/tags/数据库语言/index.html","7ba8c89ef6ca74f6002b62216669af51"],["/tags/数据结构/index.html","c0db247670f1062723a4358e0861aa3a"],["/tags/模型/index.html","f6ed7f59ef02d4f965c386b6359dce04"],["/tags/测试与异常/index.html","224deb716deb986b22c96f6877dd22e4"],["/tags/深度学习/index.html","02f7e4f60b6493ff430741aa50cc006a"],["/tags/生成器/index.html","8abc2b849ddeab01f4b4a49446a35826"],["/tags/生成模型/index.html","70ca88bc636f37177c9c083b6dd56290"],["/tags/神经网络/index.html","954abca532d7632b7765a92212c2673e"],["/tags/算法/index.html","d469f7490d8e747eb2fb2149f12f7ad9"],["/tags/范式/index.html","e60521f0bafcf026700e4522c480f196"],["/tags/表格建模/index.html","d0d756c256f317c479d5981c30362d56"],["/tags/计算机专业课/index.html","20d6a264ec651e5cedae34242394b4eb"],["/tags/训练技术/index.html","d7f0de053ccadfcca565799273572f04"],["/tags/迭代器/index.html","6a30b5f4ed30fc86e5258b4919c26ec0"],["/tags/面向对象编程/index.html","429839a3fd5855dab0047badeb1053a3"],["/tags/面试/index.html","948e9661c529f427220c125e4aae8824"],["/tags/预训练/index.html","78341572d998b1be1aa2fb2f23a21dfb"],["/tags/高阶函数/index.html","1f293f01af14b536caacb9e9d1eef294"]];
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
