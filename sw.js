/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","eaf1d737799e50d20b85790be34de3fc"],["/2019/03/16/c-cheng-xu-she-ji/index.html","486ef1b4c6703e022744df50cc5b90bb"],["/2019/03/29/c-zhi-zhen/index.html","e6143b98d8ec07c139d8091604e84293"],["/2020/10/15/ds-algorithm-md/index.html","64897a1e278fc8389109adbe200d97d4"],["/2021/05/18/algorithm-md/index.html","6a31378f6ae505503ef9d9ce5aa71851"],["/2022/01/12/python/index.html","8d95a50e41cd95606d32fd49eb5a286e"],["/2022/01/16/python2/index.html","9887be7d646e9a86d70d7c8de94dff93"],["/2022/01/19/python3/index.html","92eab7ed5d825d6b6b1d43998f786ebb"],["/2022/02/28/c-biao-zhun-ku/index.html","36d6e765df1891910935d32b220d3e54"],["/2022/03/06/cpp/index.html","a971de0d0de288e3efb84188f1c60e00"],["/2022/03/19/python4/index.html","5e7e3d13d31af5284ca6928f81399160"],["/2022/03/25/lambda-han-shu/index.html","a3b3c895ab3d7fe0c39e8ea7131e5314"],["/2022/03/26/python5/index.html","1d75d150db7628d016443a36b96d421a"],["/2022/06/02/python6/index.html","1fd299c57ee67d7c65a7aef69f5c622b"],["/2023/01/06/python7/index.html","187b66c48b62bd9bb81af9e4ec7d9b36"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","4d5ed2fd87114b1f487360f4229c439e"],["/2023/04/16/machinelearning1/index.html","46635023a1175e568b66bf5bba1efbcd"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","48a737066475c702f6be3e94e19d4704"],["/2023/08/08/python8/index.html","07a9042fc2bf5b9b0e6e55112991ddb6"],["/2023/09/05/deeplearning01/index.html","5ddd0ac7288222e01d49094d8ae4a6b9"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","7e4dc2e7af374d4dbe6b534a4e678a41"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","721d8c3fdcea4f23fbbdd74ab18fabfa"],["/2023/09/26/springboot-0/index.html","54bb9cdea1d3a54bfc71f55683439032"],["/2023/10/13/cuda/index.html","3e7bbe3a9eb290cce012e7cec13d3776"],["/2023/10/14/cuda-python/index.html","a4984b374c8136f49e62301fac8e80fe"],["/2023/12/21/dl1/index.html","b5acece030495d83150514233a6ad92d"],["/2023/12/22/dsandad1/index.html","bb90c1c45eab6e9db885360464af9952"],["/2024/01/22/dl2/index.html","1ec80da5673a15bb5caf4630a9c19693"],["/2024/01/28/production/index.html","3d16772f0f082e7b8bb2c777d8b5c918"],["/2024/02/25/mnist/index.html","7763f1b47399c669e53cceab3dfccaa7"],["/2024/02/26/ner/index.html","baf0383d8c320212320a10d404bfc896"],["/2024/05/18/springboot-1/index.html","24f6643976eedcf9bb9bdd2cd5d593f0"],["/2024/05/26/multicategory/index.html","5f86a43ebe6289d070e010bda7086df1"],["/2024/05/28/springboot-2/index.html","dcc9e784ba0ea190941c470bf022a3a1"],["/2024/06/02/regression/index.html","6126b7852a4ab899da49d77a6b9adb8c"],["/2024/06/03/imageclassifer/index.html","e40c58b4e54317e4869f8840c9274721"],["/2024/06/03/nlp/index.html","3eed0123daf9085653d19a03f74d3579"],["/2024/06/05/springboot-3/index.html","d62b672925c515166323263aa9d1f98e"],["/2024/06/10/trainsoatmodel/index.html","c554c8cf33dcb82016b775d70c8d2d10"],["/2024/06/15/collab/index.html","3cea17790265483947b98bcb89538fc0"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","98779be46b36c1b2cedbc26f0ab76bf2"],["/2024/07/04/vue-qian-duan-an-li/index.html","9056bfd4d6eb8807462b3a721882e417"],["/2024/07/05/element-plus/index.html","e596f9560db58cb74ee6dfe175ae7576"],["/2024/08/10/vue-kai-fa-an-li/index.html","efac8a00a902bb4099173e19069e75c8"],["/2024/08/26/ddpm/index.html","03b9c02d8fca1ee8e9aea7ec889d939e"],["/2024/10/15/redis/index.html","b848febc0eb3313d4f2daf2f5b34f0e1"],["/2024/11/30/leetcode11/index.html","4c7e228c3fae943d49f63b8d443614b8"],["/2024/12/21/tabusearch/index.html","53b9b3ae98de67f9a429ec369c4777f6"],["/2025/04/01/hexo-bu-shu-dao-hua-wei-yun-fu-wu-qi/index.html","b2a62207a854b76e9f2c6d8fb1ee2fb2"],["/404/index.html","afd2fa047330dd2e6b1eb2249a281e90"],["/about/index.html","0b9f0f2c749b5b585a9f4bcbd689404f"],["/archives/2018/09/index.html","8eacfdf62d39ee4c8e36c4f047c1da0b"],["/archives/2018/index.html","bee6cb9581d1c1c18b3e3a3376219285"],["/archives/2019/03/index.html","4843b2420df2abd711101a9e06975acd"],["/archives/2019/index.html","048075a8707691aaada1813414eaa514"],["/archives/2020/10/index.html","a140be84a954a2763ebb761465e5aa33"],["/archives/2020/index.html","01e45faeea22542ed350291554b133bf"],["/archives/2021/05/index.html","458de37787fe612ce198a99fd347510d"],["/archives/2021/index.html","707695035e4c9a777c098ce77ca66e29"],["/archives/2022/01/index.html","a4f715ef7cc495804fe75c56d141dc29"],["/archives/2022/02/index.html","2c0e24d9e459499d8d4625cb6d87cbb1"],["/archives/2022/03/index.html","ee79fa08f232be45ec1c55bea5a13676"],["/archives/2022/06/index.html","96a83914af91435c0e30c6b9f48041ff"],["/archives/2022/index.html","0d7e4939e56d290b9514eb8f21c14def"],["/archives/2023/01/index.html","5ef635c87916e5b2208e9b738ed589dc"],["/archives/2023/04/index.html","b79f4162eda873005f9d31b8017e92d9"],["/archives/2023/08/index.html","699581fa666affb73d5ba90d66eeadf3"],["/archives/2023/09/index.html","12a32405bb326c2ed0541c751a849755"],["/archives/2023/10/index.html","17e0f4a327855974b6e8da61656af40b"],["/archives/2023/12/index.html","7eb56e0ba619a546d9f2fcdefe7d6b88"],["/archives/2023/index.html","32464c9dc0ec0ab012fa23a05fa4abe4"],["/archives/2023/page/2/index.html","3f110c2bc21ff742e97e6020f1abcc01"],["/archives/2024/01/index.html","cf1bc067eb31257f248eef37494e10e1"],["/archives/2024/02/index.html","d72bbf30a37d6b09fd1d36c9262f6312"],["/archives/2024/05/index.html","c4417031483fc46a9ef18fd72243c3fe"],["/archives/2024/06/index.html","1426ec243210f27223ab350ae88ec16e"],["/archives/2024/07/index.html","227d33a6ae9ec78611c36f0cf1fbe769"],["/archives/2024/08/index.html","6f0e0b9d6195b1834dc1fa3800422e43"],["/archives/2024/10/index.html","05d4ecb9572e3279369ed1a3eecb3b16"],["/archives/2024/11/index.html","e6e1c860627ebc2a7c5c26d6e943d8c1"],["/archives/2024/12/index.html","025fbda37b71c210f73b88eae37400d2"],["/archives/2024/index.html","213856ad9266bc9e4de0d14ba472a914"],["/archives/2024/page/2/index.html","e707742ad7f89ee364f9f5cc9c577636"],["/archives/2024/page/3/index.html","a94378e8c6f2c3bbd07daaa0ce0fc20e"],["/archives/2025/04/index.html","86cf7d124ded4175dd413559befdbc8c"],["/archives/2025/index.html","711b16ed36833ebd908d6a738e75acff"],["/archives/index.html","b788f8de318cbaf7e058311e49039fae"],["/archives/page/2/index.html","affd2ef9b4bbcb371d4a5b923ce4321d"],["/archives/page/3/index.html","9b142c583d10d5652eef6757c53ad205"],["/archives/page/4/index.html","a4545a203e30f225547c40a618b7d69f"],["/archives/page/5/index.html","afe20d7d455f8d27c549fabdb9b8d1e3"],["/categories/C/index.html","125edce17ada81350ac22f2c61b54359"],["/categories/CUDA/index.html","91dd95c14f15e2c541a0de110c40bc0f"],["/categories/CV/index.html","47d75b27facc60aecba60016a06329e6"],["/categories/C语言/index.html","1c90365228b893b6b479fa6d52ca6739"],["/categories/LeetCode刷题日常/index.html","d3c8531942f5f0b84b5fffd173761966"],["/categories/Markdown/index.html","fbb506a77f2b4aee20dee92da170cdab"],["/categories/NLP/index.html","98d91f2de43216cd2304562e2588cbfd"],["/categories/Python/index.html","cfa90b2f23a036c894a4ca7bc50dd984"],["/categories/SpringBoot/index.html","05ff2c7bf1f5db77f8217c840ce38a3a"],["/categories/index.html","abafe77f3ae3d0d7eed46f11c75c9fcd"],["/categories/前端/index.html","34558a4b94f4694bee0faa0778be0c5a"],["/categories/协同过滤/index.html","a36d234e6cce408abb5b42c705e79de6"],["/categories/博客/index.html","c27518d55cf56fcb180f16043adbb0db"],["/categories/启发式算法/index.html","e39a086c9c7ccc60018d67d05c23fcce"],["/categories/数学/index.html","650c1886dcebfe9b89136e63364697fe"],["/categories/数据库/index.html","c5f998ed03cb384b43e9e8720b3e1352"],["/categories/数据结构/index.html","3687ff36760aab3b18a2875f804cf2ad"],["/categories/深度学习/index.html","63b6084673bb376d1c04af4286c1dd20"],["/categories/生成模型/index.html","d901c88d2fe6cd10d0dccbb065d4ca70"],["/categories/神经网络与深度学习/index.html","86621391c30a7a18a90d3c752c87d9ad"],["/categories/算法/index.html","016796ce412a029f4a66375e599d533e"],["/categories/训练模型/index.html","19c9a46953bbfc4e345008ca46b3362c"],["/categories/面试题/index.html","3f21730bea0506aa120d5f2336ab15b6"],["/contact/index.html","6c1d80b6aedd321212a09ac1fcd442dd"],["/css/barrager.css","5b6b716af1f79636cea33cdd1c509085"],["/css/bb.css","95ef854ba52213005d79c84e9316502d"],["/css/dark.css","2e5adea39108cf5ff1bd84a519468edc"],["/css/gallery.css","a0d59d31ce2314e4a7a2ebdffd12e17f"],["/css/gitment.css","23e6f0c48a13715b288627efbee5b6ad"],["/css/indexcover.css","08a448d237a1e22c7c8835b4f348201d"],["/css/matery.css","6f4fd5545cec625ceffe70e9e35e2109"],["/css/my-gitalk.css","751eddb062023d2b0d98e0eb88d4ec9d"],["/css/my.css","ab3d1df777f5dd6baf29941c1b4eb096"],["/css/post.css","c32f03283d922fd1007a3403938d14a6"],["/css/reward.css","957f4c2c9e08602c385123f741f78af4"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","237544aff97e4e363ca1ac789b0152d2"],["/index.html","f8f09e016b96dc7efe41abb2b60e958e"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","145d901bbcbb2a80a3c639f43e26abd5"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","7190ef36a3036741a645518094c826e9"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","f570203e5d9b7f5f8eb9820def2cd3c8"],["/libs/gitalk/gitalk.css","935ea91b021d99c49eb0e93dfe1b2d58"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","e9fedc186f47ba9ec233fe6cf0c47344"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","d6c6daadbc7ab75f8e6ef5ba1fe44e4b"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","9e7e9e3ed27d758193b72bffd8c5bc56"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","eb9a32bce80b4b0be6b81a30d5fea13d"],["/page/3/index.html","ff5caa456255de7d69c957c611bb7d8f"],["/page/4/index.html","07fe0d8ed51f599a5a92defb08b71ba1"],["/page/5/index.html","e3fc6e821d66574f9c0692c6f4912ae0"],["/page/6/index.html","150e8636d065ca9338d6ece14800ac49"],["/page/7/index.html","2f41638f50312481331c4b11234b5fca"],["/page/8/index.html","c94c274cd740432cd69a05960114922e"],["/page/9/index.html","a488c1d2b1dff7229d9c50e3c3c984ef"],["/sw-register.js","9affa53942f93f19d3fc0ec982438d91"],["/tags/CUDA/index.html","ff8b5a61c53f329a21ae58b702bd3fd5"],["/tags/C语言/index.html","bb64796229d65968f59d3b676d70991f"],["/tags/DDPM/index.html","f197b60c929d2b7827e1a1d867b9a6bf"],["/tags/DL/index.html","76f7ef9976b30d2d6149a421252c5975"],["/tags/Element-Plus/index.html","529a35e07c26eeaebee7d245171b1c93"],["/tags/Java/index.html","30f04c55536cb3bdeb4e274973bd50b9"],["/tags/ML/index.html","a486a5c3ecb91aa34bc575baff2a5277"],["/tags/Markdown/index.html","775f62a70ab1494a6aaf0076aff8bfde"],["/tags/Matplotlib/index.html","717da09dc5af5110ca229d3ab9e08568"],["/tags/NLP/index.html","68c61e4d4e36d59754e120b139a78ca2"],["/tags/NumPy/index.html","60308ebf300ee74681d5fff8452d4d7e"],["/tags/PyTorch/index.html","3a76e4f30672efbe17e0f1b9ba0cd102"],["/tags/Redis/index.html","ba9e371eb9ca2b22420a1544b866ec9b"],["/tags/SpringBoot/index.html","9e9a5748182a763f0fbf8b3f6ca721bc"],["/tags/Typora/index.html","a1997a43316f8c2a48d4ecf37bb4b866"],["/tags/Vue/index.html","4e64a458e0d9c72096d062036f28b081"],["/tags/Vue3/index.html","0abc6fbb22ae10bc6379b6664c6237fe"],["/tags/array/index.html","bc4aeaf86aec36567aa17c107534d517"],["/tags/cpp/index.html","9678b7a39373c308c62062e2dda4486a"],["/tags/cv/index.html","bed4bdb58c369cfd4e35ee319cabbbbf"],["/tags/fastai/index.html","83b50ac2ee9538d5178a844aebc56c45"],["/tags/fastiai/index.html","7b30aa29014df5326c03270aed41d1d9"],["/tags/index.html","ae0711138cd9247396d29fd3d0542c6d"],["/tags/lambda函数/index.html","9ff7787fe95f2925f0b08f9b4ad68dd4"],["/tags/python/index.html","6b14b883829c709bfb747dc2de69461c"],["/tags/two-pointers/index.html","ba74c69f68b02c6ab408443380719d9d"],["/tags/优化算法/index.html","250cd107a8119f2cd8b73614ed6d5f13"],["/tags/函数参数/index.html","03f8a18e8918c57f50c8fbff1b87443d"],["/tags/函数式编程/index.html","766516cdef612db7ada6e7efb38d179b"],["/tags/前端/index.html","4df77fecfc54280ffa713e6053be84aa"],["/tags/前端开发/index.html","6df7cf15db012382eb42c67813b4c5d5"],["/tags/协同过滤/index.html","4b9cf67c6a31f6ca7de4aa8917b6d547"],["/tags/博客部署/index.html","07718d925c253a5dbb15ffac9c954e9a"],["/tags/启发式算法/index.html","00100368dd389664fe8284f649a741a2"],["/tags/回归/index.html","b01cf4edc3aa9f15b9556bfd6c3ea93b"],["/tags/域名迁移/index.html","ca57a5190fb792880f2d5855b7f71534"],["/tags/多标签分类/index.html","8b78be00b2c6143eaff54334fa246288"],["/tags/指针/index.html","29bbba4b1373f9018d7e4e7779724953"],["/tags/数学/index.html","f37e6e4010aae92dcbfb13b390e9986c"],["/tags/数据结构/index.html","d2dc2e0d2895cc28b296e08190d8942f"],["/tags/模型/index.html","a67bf9983b0bd2938086799a03cdb672"],["/tags/测试与异常/index.html","b2edaf7a1d1709f499051b842b41b5e3"],["/tags/深度学习/index.html","a0cb57e8747430dc8dd9f500a381f05d"],["/tags/生成器/index.html","6857a621ab2a725b5cedb48b9ecb660f"],["/tags/生成模型/index.html","1c61bdaf078a7d690fd1df1b13548909"],["/tags/神经网络/index.html","5231518efee9f7c18b1f7ac9b1b7cc20"],["/tags/算法/index.html","3eb5c0cd14e49a35c20e552b68052e6e"],["/tags/表格建模/index.html","163b0a084589e77c1910c08844feec1f"],["/tags/计算机专业课/index.html","d42166e8ac1e3f7d326d6cb33296d718"],["/tags/训练技术/index.html","ed43bde4363bc1d5c00947fcab7e6cfc"],["/tags/迭代器/index.html","4a633487af06704fbb1564bee64c697b"],["/tags/面向对象编程/index.html","fa421c805fb13a65b4aebfc022bada0d"],["/tags/面试/index.html","ebc8c68e188e4222b6a8c5616a170c4b"],["/tags/预训练/index.html","ab21efeafbf2c10f3d3a518b20cbe3db"],["/tags/高阶函数/index.html","34922c508dd87b316cdba84cfba3ed26"]];
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
