/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","891e21814b0849ebae8316ace089865c"],["/2019/03/16/c-cheng-xu-she-ji/index.html","fec4f14ddfad29b349ac41a44c71c243"],["/2019/03/29/c-zhi-zhen/index.html","23ce13ae6085bee4d3ff0a108ba457dd"],["/2020/10/15/ds-algorithm-md/index.html","1dd7152931e9c0ed1d79ee4bf4f9a32d"],["/2021/05/18/algorithm-md/index.html","ae7beacd862ef08c4e40ca7b55edfe98"],["/2022/01/12/python/index.html","ae480eb5e4712fda0098b8b1bcf46e73"],["/2022/01/16/python2/index.html","c5025b953a50c33d44ebf3eb29a55a86"],["/2022/01/19/python3/index.html","f7c4763da893869ea8dc5ebb6fbe947e"],["/2022/02/28/c-biao-zhun-ku/index.html","8d0a9fab3b3f3a207e4c4617a3e8db64"],["/2022/03/06/cpp/index.html","33aa04503ecbdf40a35c1749e5cc1095"],["/2022/03/19/python4/index.html","caf891e1893e609675793dcc0042f703"],["/2022/03/25/lambda-han-shu/index.html","53d7f1fa4fc8d942956768228db8f052"],["/2022/03/26/python5/index.html","cfdf2eff481956d750d6b1e7c0d8d088"],["/2022/06/02/python6/index.html","bed12d590ca7c1858caa52c97ad94d71"],["/2023/01/06/python7/index.html","bf07765837b21b0beb1900eb0693602e"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","03668656eff08161222821ce875e490e"],["/2023/04/16/machinelearning1/index.html","43cb8dd2a236edc9325a06023915b01e"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","25195ed05e1423e15289e03db0dc7009"],["/2023/05/26/db1/index.html","d1cf99f3f225d1988b958b9b0f39478d"],["/2023/05/26/db2/index.html","b342b71b09cfe8a2925371c88d85d2c2"],["/2023/05/26/db3/index.html","348f34719954f773759f759ce2d3a309"],["/2023/08/08/python8/index.html","0e2a5c9880a591b113487864746f8b23"],["/2023/09/05/deeplearning01/index.html","e05f2f7fb03321c09db5d23eb059caef"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","f2b6423645c86b8fd60aac06cbee5888"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","bd16255f98e35fce3d5d075fa55567d1"],["/2023/09/26/springboot-0/index.html","7902dd53d6435b6ad17aa0a39c9ec66b"],["/2023/10/13/cuda/index.html","ab143714415ff0200aba14030329ded0"],["/2023/10/14/cuda-python/index.html","7b970a01524d0b05872668e76c2e3754"],["/2023/12/21/dl1/index.html","217a1673e3af438e5dbaa5044f0fc2f7"],["/2023/12/22/dsandad1/index.html","827ee3950c26e738543bfba5d571e1a3"],["/2024/01/22/dl2/index.html","a6c6dad4dcc384d140f81a73d99a6e60"],["/2024/01/28/production/index.html","c803197df6fa1214323ebf97b633c557"],["/2024/02/25/mnist/index.html","6952a90c15ca449b487f4d17dd38d754"],["/2024/02/26/ner/index.html","6f4ef875447e009415bf9b8dac71e8fd"],["/2024/05/18/springboot-1/index.html","9a5679ea1a596a9a3b35f110f20c682d"],["/2024/05/26/multicategory/index.html","fc1a8a039bb5b04f91b729ce90673195"],["/2024/05/28/springboot-2/index.html","5c5018c6ca2a8858a3bc1ad6fc8b56ea"],["/2024/06/02/regression/index.html","1caed8369d4a9c22391e9c62ccae65df"],["/2024/06/03/imageclassifer/index.html","b3fea09c92d52726c6b36f922ef5eeeb"],["/2024/06/03/nlp/index.html","ddb36fd666e64362bc9fb9610fcda9b3"],["/2024/06/05/springboot-3/index.html","53f49ee3dbe53f09fd9f221305c720c1"],["/2024/06/10/trainsoatmodel/index.html","d03dc8f7328216cfc4fa21c7b4324a24"],["/2024/06/15/collab/index.html","590549595ae26150bc0d91472be39bda"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","f108cb4cff7a3c8cd59f4c6db2d98fe5"],["/2024/07/04/vue-qian-duan-an-li/index.html","98c21302fe5987e9960ea1c8681794ea"],["/2024/07/05/element-plus/index.html","4c8816a17b989c02060f022dc3e6519c"],["/2024/08/10/vue-kai-fa-an-li/index.html","b2a895266cf702583973482958917649"],["/2024/08/26/ddpm/index.html","3b423aebcdc53bcd5f54c56a12dafa0d"],["/2024/10/15/redis/index.html","e7f8d26aaf762ecab11ac894c37dc80d"],["/2024/11/30/leetcode11/index.html","677196abe71878f4d4076991c15eb66e"],["/2024/12/21/tabusearch/index.html","0006f6b9104db8df3d21708498341a15"],["/2025/04/01/hexo-bu-shu-dao-hua-wei-yun-fu-wu-qi/index.html","0fb12145ba1c42fcd32da27c24774812"],["/404/index.html","986ca4ba9450907c8228de6a21284884"],["/about/index.html","176624a9301a79ffa309f28b8b2f83c8"],["/archives/2018/09/index.html","14c8eeaadd36bc3ff03f8bb369781a3c"],["/archives/2018/index.html","6823d50ec3200b4e634a2a01d14692ef"],["/archives/2019/03/index.html","25931dc26e5084c1f4fa2235e7c4f09d"],["/archives/2019/index.html","560998f34c381733c7f0b3940006ad34"],["/archives/2020/10/index.html","389c1c8332a3217d3fa00c5b3ac95242"],["/archives/2020/index.html","479141bd695dce85b662753f201e268c"],["/archives/2021/05/index.html","b22a08f912422de875b6e84aec99ca1d"],["/archives/2021/index.html","3c3d6c75a2002a0b7aeec6a424deaef4"],["/archives/2022/01/index.html","f06af0d7aa6fa0f8d1749b269770f448"],["/archives/2022/02/index.html","41ef9805620350c6042d1b6881fc68c8"],["/archives/2022/03/index.html","a06b7c868533e431aff57c3b317a8e4b"],["/archives/2022/06/index.html","4e0d50a8361b1b5227c40572b897e112"],["/archives/2022/index.html","1180af126288b4b8d42bfcf4fbfebb2e"],["/archives/2023/01/index.html","5c29acdcc4c9407fab3a38e6bb9fb44a"],["/archives/2023/04/index.html","9d6d2b23a1ce3ae1e3f14f03cb4d1ea3"],["/archives/2023/05/index.html","5d028775bd57fb63aabafec001726217"],["/archives/2023/08/index.html","3a5c744116c891186ab88108b8ad6243"],["/archives/2023/09/index.html","411aaa0e5480e331f470cfcaff6403da"],["/archives/2023/10/index.html","f0b0c06a2d08038ec3e682e7aad1bc0d"],["/archives/2023/12/index.html","0871cf0eeddff3f53df409e226af9d24"],["/archives/2023/index.html","4e95f2d556c77179c8889247ef6c8eec"],["/archives/2023/page/2/index.html","7a3a67f97ef7db7d542fb5e689e2136e"],["/archives/2024/01/index.html","f66494de82d01b269a6e91a4d5ff8738"],["/archives/2024/02/index.html","f4cb2ca2cf883be491101604566f1b0b"],["/archives/2024/05/index.html","9f034e55b9701c9a0f1886950eda769f"],["/archives/2024/06/index.html","d7836a770e26d0f9d6d7fb27fe63a285"],["/archives/2024/07/index.html","ef60f7de669b0f46400f1a72e86b75e1"],["/archives/2024/08/index.html","14547f816df8d2a1d29014d75d7b8341"],["/archives/2024/10/index.html","97f45fee5b7ad6c0355bd7fc43299a02"],["/archives/2024/11/index.html","3ddfeb54d98fa73076c8f75a59b27fe5"],["/archives/2024/12/index.html","010893f7a9756b8ba999c03bc3699131"],["/archives/2024/index.html","23f34db069d819182e934c1fed01c695"],["/archives/2024/page/2/index.html","19ed9ab3aee9552a78328f8f373685fd"],["/archives/2024/page/3/index.html","46ccb515cfea0d0a6d9c4a76e854cee5"],["/archives/2025/04/index.html","5ea3534a422b964ab0a9c03c6a73f383"],["/archives/2025/index.html","d1713b79fc287a5d2019f439391f5b1e"],["/archives/index.html","76b58fc9d31ff7ffc010accb322ba760"],["/archives/page/2/index.html","7744e5a3258b5ccdba0648fcfc6bb2d8"],["/archives/page/3/index.html","3feb33bb4625479e69e146d78c464dd9"],["/archives/page/4/index.html","91a99dc8c0d49389ee55172e72419036"],["/archives/page/5/index.html","e0c0d19734516b95f9e2b3b5968b3396"],["/archives/page/6/index.html","5854caacf436c502e3051830e87fdfbe"],["/categories/C/index.html","0009bf78cfef152d963dd7b678167887"],["/categories/CUDA/index.html","42fd7053aa39be1cde233fa504d915b3"],["/categories/CV/index.html","463828901cd8625cc6df7f19c29680ff"],["/categories/C语言/index.html","bc7917cbca7020fa696bf317b03551f8"],["/categories/LeetCode刷题日常/index.html","387ba42f533fade4a134c3575f868979"],["/categories/Markdown/index.html","74644e21a21ac1d7ed1352181d0513ba"],["/categories/NLP/index.html","0bd48a7736b83a010c73cb2ba6222949"],["/categories/Python/index.html","24481d8eedb5851d785489f958a9d696"],["/categories/SpringBoot/index.html","59c5aadf3daea456e218af4c25fdf5ea"],["/categories/index.html","4c448de68d046b0495b0f04312f51f3b"],["/categories/前端/index.html","acea9da6b6c2017582a3109eb69ea286"],["/categories/协同过滤/index.html","a4bcd0745025f1fdf6286c2e6a0166c3"],["/categories/博客/index.html","840ae4a811e82b7cc3f3e14015d65d1f"],["/categories/启发式算法/index.html","a4bd758c78b474594f7de613bf36fe71"],["/categories/数学/index.html","aa346a584a635709a60c52ab9000b50f"],["/categories/数据库/index.html","85936ed10eecf225b1974a418821a622"],["/categories/数据库系统/index.html","9064a1687296d717305400c41c26c5c5"],["/categories/数据结构/index.html","ab097ba9c84338bb928273153cd61dc7"],["/categories/深度学习/index.html","1d2f557b244190f59ed7592a3faa10da"],["/categories/生成模型/index.html","e97bae81fd1a6c9f733aee7dec15a72a"],["/categories/神经网络与深度学习/index.html","3e543567c67e59c0d0cdb3c08537ed8f"],["/categories/算法/index.html","3d2fcf2ae5a1e1dd4dff8407b2dcf756"],["/categories/训练模型/index.html","ed492f4e3e1fc40e1dc922438d87519c"],["/categories/面试题/index.html","daafe8700e0b6472dd7d0713e440f9a1"],["/contact/index.html","6e1f6dd348f1fd3c7063d6c96eb3e145"],["/css/barrager.css","18c6a9d51b45d88e5a8ae0f5fa6ec593"],["/css/bb.css","f46b7af94bcc7c95d09f6c0f854c40b1"],["/css/dark.css","9d88497521b31fe2986964ba904d6d78"],["/css/gallery.css","6574a72ae3d12880d98944ef00b17bc5"],["/css/gitment.css","afc83b64d4cb292f3870e8e032889497"],["/css/indexcover.css","00c851ca2b8d95662f37ecac25e4fb06"],["/css/matery.css","022fade69ee283ae0c8a0b89801f8389"],["/css/my-gitalk.css","666ede54d734a21ef9ca468e2204ddca"],["/css/my.css","3dcd3098bb1935967789cc7e5518aae7"],["/css/post.css","2ce60467511ae2db4c001d57ba75ac8b"],["/css/reward.css","179bad25b2129ad3b82f90f0092c2ced"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","e1697b5928f2a2eaa5e146c5d507251b"],["/index.html","ec847a09abb0428b817b3490beecb6a7"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","efea59e5039ccd7a05cc4642e2872e60"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","d9fb94c25cfaf0c8da2d4801e1100009"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","c9d82664b7b26bbfdef0e28239e6abf5"],["/libs/gitalk/gitalk.css","334709c91beaf69e830cd7ccc7fa14d6"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","5b95b93629c1c52f179e9d7a7222117f"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","9cee59d79536beea07a926b93b653708"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","a6e999d4f28c535715e7b930f8416792"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","927ef56b76f4c60c5dcb41dcf3480a19"],["/page/3/index.html","f5fc37c37aa127e7db97c233b6714bf1"],["/page/4/index.html","6b6ad1e5968ad64309fbc99277f8464d"],["/page/5/index.html","8abb720b958fc1277fd3fd7f592a5fb9"],["/page/6/index.html","26e44e1e691b5b502ed4e6e5e02ded8a"],["/page/7/index.html","1debc16b8c6b6a3dc50ce0309a7ec938"],["/page/8/index.html","215b41ba52dc4225352ca398272a6447"],["/page/9/index.html","bbf940735b41e96965f50b5f238492a2"],["/sw-register.js","eb382cec04b1423befb5a6e5ca6f7096"],["/tags/CUDA/index.html","bfb68dd88baac2aa130357bfc3ed724d"],["/tags/C语言/index.html","bfcfc7eaf9f4c2320cbf8f49afa764a3"],["/tags/DDPM/index.html","d4903929bbb45de063eb4d3b94e1ee49"],["/tags/DL/index.html","350adfdb4c032b79067243ddcb98fa05"],["/tags/Element-Plus/index.html","7a9aa40af7f23c1d76e566639830b8fd"],["/tags/Java/index.html","f98f37296e812784cd92295de32564b7"],["/tags/ML/index.html","4c70cd34b652459cc43028e3a02b243e"],["/tags/Markdown/index.html","a3a1345442cf1c081c808493e653d5dc"],["/tags/Matplotlib/index.html","0adfa45d0c58a2900255b718f5c89d0e"],["/tags/NLP/index.html","5a423a115e4839bbd889d5a9e5fa8306"],["/tags/NumPy/index.html","c6caea55bb2b97c07ef21eb3181a96f4"],["/tags/PyTorch/index.html","ea0b5994da3731e6794dc0ea486953ef"],["/tags/Redis/index.html","bbe57dbe134feaeee98e5b034b8b099b"],["/tags/SpringBoot/index.html","69719a3b0fe22fa7e1c1a23e64f8f5fc"],["/tags/Typora/index.html","acc5033ba32c12dbd2c5fba270b6307c"],["/tags/Vue/index.html","df5501d2f43b0737e9ce9dcd759b8072"],["/tags/Vue3/index.html","a8c3d0f435bed449b5d9f112d11baac5"],["/tags/array/index.html","d9bedf027ac85393456960678b375897"],["/tags/cpp/index.html","6745c48bf4634c6de533a754d2de3aee"],["/tags/cv/index.html","bb546e634c54738400e9715bbb7d0b26"],["/tags/fastai/index.html","7bd81aac75c470499796b834c28f61b1"],["/tags/fastiai/index.html","9001beb47b9bc7737eb6ca5b2767f4bb"],["/tags/index.html","9a2827d231e610b3abf8abf3cbb3e61f"],["/tags/lambda函数/index.html","29a1e9ccfc439bf8fa9fe11c23b28c97"],["/tags/python/index.html","496d8d2c96da9decc53f2ce807f0beda"],["/tags/two-pointers/index.html","4d61c9163186e5af399052f3655ee8e3"],["/tags/优化算法/index.html","f0feee4b847fe48d22fd9f5319bd6d82"],["/tags/关系模型/index.html","df4aa4e8403694db6d60d24c136c02f7"],["/tags/函数依赖/index.html","b16ebca78ac4d525231c69975766b0df"],["/tags/函数参数/index.html","f0b68a338b73b4f69f1301b0f22e722f"],["/tags/函数式编程/index.html","e283d5b9afed49af27268faba023655e"],["/tags/前端/index.html","11d792ca7796ccca99212a91a61d2e7e"],["/tags/前端开发/index.html","29a3f9a072d6f5924074222f9f63f9ba"],["/tags/协同过滤/index.html","f05636b0efd336b84d7c3f17ea055194"],["/tags/博客部署/index.html","8e079cc03b111ae5c7599f0fd1236927"],["/tags/启发式算法/index.html","b718c358b1b088c6533a947509909044"],["/tags/回归/index.html","13c4c81886fd3c1a5cccc8de12ecaefc"],["/tags/域名迁移/index.html","2da7fbb53c5593d5b975d8e611524d8d"],["/tags/多标签分类/index.html","ba6cc8773ba9794e6373802cba2983b9"],["/tags/指针/index.html","4b51123212d0c823b8bca7adb1e4bdb0"],["/tags/数学/index.html","bdc75a352ab362a73160bf1b51775015"],["/tags/数据库/index.html","9ba7109d1119839fd04231948695e781"],["/tags/数据库安全性/index.html","c21044764cc5f3a4d677e4358b7aaf23"],["/tags/数据库完整性/index.html","7526c75fb811b5ab9b9758e2620361e3"],["/tags/数据库语言/index.html","821ccebb8fc2669aa0fb84e463d5b0b5"],["/tags/数据结构/index.html","93aaf71f00e2324508aa9f2164cdc5d5"],["/tags/模型/index.html","4338470d2503f6426c03379e36f7689c"],["/tags/测试与异常/index.html","ade96b3baf26e89a6240ff4ad61b7486"],["/tags/深度学习/index.html","44283c6045da2ea0ae7cf6880432b3c2"],["/tags/生成器/index.html","1edbc38cca9411fd630767cf546b91d7"],["/tags/生成模型/index.html","1d78032119e544a4f9974b4cf699f74b"],["/tags/神经网络/index.html","e08187a57fdb92fc108ad423c13c3bc3"],["/tags/算法/index.html","875a69a87dcd33014da9f463e3994985"],["/tags/范式/index.html","bedfe2119f4e63a152a5e3f7233adb98"],["/tags/表格建模/index.html","fb84de8daf1e56076a65332d5c54f0ab"],["/tags/计算机专业课/index.html","08ed33dafaf77a6347a61f22513c22f2"],["/tags/训练技术/index.html","7b5cc36e990d7fc45e2f403916589fa7"],["/tags/迭代器/index.html","5b5a9f88fd7571463c213fbe11377145"],["/tags/面向对象编程/index.html","f7a54d690de598605e3ce10452d91164"],["/tags/面试/index.html","3cd732a74833973bc9e609732fb7decb"],["/tags/预训练/index.html","770c34ad6019a2161761434c75e5f71e"],["/tags/高阶函数/index.html","464849a8dfd39a95dbb79e73435f1e38"]];
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
