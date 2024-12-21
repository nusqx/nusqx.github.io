/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","1bfb901523488c34a3d5c30ac23f637a"],["/2019/03/16/c-cheng-xu-she-ji/index.html","1cd7608f67d64b399483d125671cecd7"],["/2019/03/29/c-zhi-zhen/index.html","546f38018bd0ac70ca6ee38138e100ef"],["/2020/10/15/ds-algorithm-md/index.html","965b59eabfbe01646f241c2981c5e0cd"],["/2021/05/18/algorithm-md/index.html","c4a4d21b27163d9868488a4edc639202"],["/2022/01/12/python/index.html","3d6c7ba3a519410480b59f17ed5b9148"],["/2022/01/16/python2/index.html","f5f1cdab6536bd8c1e4d9b4e33b7a6b5"],["/2022/01/19/python3/index.html","1a63a4bc9b4be94c2c9cbf0fe4c405dd"],["/2022/02/28/c-biao-zhun-ku/index.html","752f0ab39d87269606529cf8e3c166c6"],["/2022/03/06/cpp/index.html","80ea05dbe4c27c798b03168bc55c627d"],["/2022/03/19/python4/index.html","0d8952523d5bfdb382abaf0af55a4b04"],["/2022/03/25/lambda-han-shu/index.html","f01c04ba82e0a78a109f215033c76636"],["/2022/03/26/python5/index.html","9a44adb7f0b1e8bdc417fe3b087513e8"],["/2022/06/02/python6/index.html","271c372d41d4801328f7f5b905489e43"],["/2023/01/06/python7/index.html","268b786d37efc0f70ca02bf5381e6eca"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","0d040d082e272d161e959753d38ad547"],["/2023/04/16/machinelearning1/index.html","aeb67a47b0e30517317ff84cb6e3d595"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","f218b524d1c6dfa30d232e26e475b861"],["/2023/08/08/python8/index.html","135c677f8d6190be7e378a23981f39e0"],["/2023/09/05/deeplearning01/index.html","ab1e5df691ca6412b0d917ad2c6e7fed"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","63343b4281aa3f5a5fc531e1f766d9a7"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","1e67abeeaa311a3d9dad07a376bf5ce6"],["/2023/09/26/springboot-0/index.html","3dce12209a6540a33918db2c21b7f995"],["/2023/10/13/cuda/index.html","30d566cb0240016f5aed5350e3e2abe8"],["/2023/10/14/cuda-python/index.html","5d40f14c28a288e9fb76a631dfc12d77"],["/2023/12/21/dl1/index.html","236d9c7d26859d7b6c973a63fd4613b2"],["/2023/12/22/dsandad1/index.html","e6f854e181b215188d4bab63f357d9bb"],["/2024/01/22/dl2/index.html","3be9129f17f4b48e07273a98567472b7"],["/2024/01/28/production/index.html","db6d785d773eb45a8cc6afd06dc3aa6c"],["/2024/02/25/mnist/index.html","4e1ae4e88bcbacf4532244603200380a"],["/2024/02/26/ner/index.html","1d846e4f62ccf6405ef208699f6e7952"],["/2024/05/18/springboot-1/index.html","eb14eac9cfe61285a978621fefcae69b"],["/2024/05/26/multicategory/index.html","9befc0cff253d0d93ac5291af45a31be"],["/2024/05/28/springboot-2/index.html","aee757a4c9ad47e76024fafe5cc86d50"],["/2024/06/02/regression/index.html","052f8ed8d01de855e6c60ac393723f5b"],["/2024/06/03/imageclassifer/index.html","306281bd862490ed91bec88e5b295385"],["/2024/06/03/nlp/index.html","00123ba58b76a3c9012bb21ede3c2c65"],["/2024/06/05/springboot-3/index.html","7e9a6ef667f752289030a87211161513"],["/2024/06/10/trainsoatmodel/index.html","c341bb079a4f92f31b2a4f7e1e870363"],["/2024/06/15/collab/index.html","51a671b769846e311e05514525d01f43"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","bd8dce10d6f28e425fc4d33c23553998"],["/2024/07/04/vue-qian-duan-an-li/index.html","f3e1683107e5bc088e2378bf36a357fc"],["/2024/07/05/element-plus/index.html","56965dbf2cb9790c3d45705b56aca9e1"],["/2024/08/10/vue-kai-fa-an-li/index.html","9a39717e095af368b733737ab9b51051"],["/2024/08/26/ddpm/index.html","7e9e604207012f1865e7695a02c5ef75"],["/2024/10/15/redis/index.html","8f30879c63647498ce276d56cc20f166"],["/2024/11/30/leetcode11/index.html","cab0197432cade19807394ce7d15b482"],["/404/index.html","fd3ffba1ac2b272e1b473231dcbc38cc"],["/about/index.html","05a8e9bf3f20a0f1c1cf32b8851a1149"],["/archives/2018/09/index.html","ce0a75dd4a612be9c3cc060ab9fb917f"],["/archives/2018/index.html","254d5db1f6057f13db2d7f6565068871"],["/archives/2019/03/index.html","4ca863304ce0ca057a23245c718e129a"],["/archives/2019/index.html","f85c546fe01a9e91646191c13fe01dfb"],["/archives/2020/10/index.html","efbf77bd81791cb88e2b7b9d4fa209c0"],["/archives/2020/index.html","7161704664017b7ca62c8ca6d18fac2d"],["/archives/2021/05/index.html","223583f715435a2b4d2340de72d005e2"],["/archives/2021/index.html","0e890f352d1c9bff208299d3ef63f601"],["/archives/2022/01/index.html","29bf882fd244ea301e9ce36255af1d8b"],["/archives/2022/02/index.html","1197481958a54cff940bfe0937f63df0"],["/archives/2022/03/index.html","38b2fea784123a7fba4ed1a4120eb66f"],["/archives/2022/06/index.html","492883caf302fd79acd7b50696f230e0"],["/archives/2022/index.html","5a2030f1bd4f71500f70c2d14c8f0f1d"],["/archives/2023/01/index.html","64dcf9d7ce76734ada049155f7eba002"],["/archives/2023/04/index.html","efb6656db645e5ded9d6b524b909e771"],["/archives/2023/08/index.html","296b63af5f7a7d7d38ad73e60c46872d"],["/archives/2023/09/index.html","c0a489c170f9c747ec5030b49a427218"],["/archives/2023/10/index.html","d5b03964170aeab3875a0e00d1665e74"],["/archives/2023/12/index.html","e6d25e37eeed35470c2b1749d44e87e9"],["/archives/2023/index.html","ef00ba742301d6ff447a65ae470c7cc8"],["/archives/2023/page/2/index.html","a5af59671e797b9d2738ae31bdee770b"],["/archives/2024/01/index.html","b60e9cd5ead6401360d3652ef375c1c0"],["/archives/2024/02/index.html","666f892269870e1fb5698643efbe0044"],["/archives/2024/05/index.html","7569a16817700e40264f6210c09879e3"],["/archives/2024/06/index.html","4af48e6a89b622ae9895c52dd9ffb103"],["/archives/2024/07/index.html","11a5dfca7bce99d85b7c7fe3422d5a81"],["/archives/2024/08/index.html","ac5451974f8937184e83cb9a2ae32764"],["/archives/2024/10/index.html","ee1a2c92a8d34865b90bbd925172adb0"],["/archives/2024/11/index.html","32caf70e35dc11e66e01bb97c4531c47"],["/archives/2024/index.html","0993d3bb97cdf8ab020059e8dbd4bfea"],["/archives/2024/page/2/index.html","7b99d7d992863740efdd6400342420f0"],["/archives/index.html","567ef55162a34f6bb54c4e1962c9e235"],["/archives/page/2/index.html","ae00ee5ff9f20ff65a92aafe3dc0228b"],["/archives/page/3/index.html","87bb8e8af95cc0f61ccc11af9751acc1"],["/archives/page/4/index.html","ce38748c76e7b823cac456a44211d895"],["/archives/page/5/index.html","3d1df09d5350f58ee79c85e58029e981"],["/categories/C/index.html","7ee6cbe1ca356bdade59854d6ab2a370"],["/categories/CUDA/index.html","88d7c321a0d916be62f7a511aba671f4"],["/categories/CV/index.html","5959c5bc003c34ea6f396ebfd9db9bbd"],["/categories/C语言/index.html","8b71808d36fd74ba166dffb41b5d9842"],["/categories/LeetCode刷题日常/index.html","719ee22b393b1a63d19f3204702606fd"],["/categories/Markdown/index.html","583f3c809d6968f2b29ea50786fce1fb"],["/categories/NLP/index.html","e8c1329e2d26c9fab088dcd83c58d4ba"],["/categories/Python/index.html","8d1b6ef974628f018466920d58d4c36d"],["/categories/SpringBoot/index.html","0f115faae34926932373f13e1cad34a4"],["/categories/index.html","c32731e24a1d739767495d9935b02877"],["/categories/前端/index.html","60923622a8a313ab398650b42bcf4d75"],["/categories/协同过滤/index.html","20e8173a60ba27d881e685f7f942f19b"],["/categories/数学/index.html","8eb8ae70ecbf4f26b7180b04b3a5a82c"],["/categories/数据库/index.html","b8115dfd8f1f32740dbcfa913797a484"],["/categories/数据结构/index.html","7ae68b564e49a1107c7810d3dcdd969e"],["/categories/深度学习/index.html","2c3d9837cf8b35998ab9c689e2abce17"],["/categories/生成模型/index.html","0828e854cd0980b476cbf5be790b7ca6"],["/categories/神经网络与深度学习/index.html","750f8cb728c64b6a1e281e5045c0af5e"],["/categories/算法/index.html","849a6a22b60cda66984416ecb692dd82"],["/categories/训练模型/index.html","55515043246b2c670b3ec1632ca7fc63"],["/categories/面试题/index.html","2c36a0bb15b8481585dc9d279c128738"],["/contact/index.html","c2467a6a31e32ff75ac0bdbff568b87c"],["/css/barrager.css","8b99d95e63045407ac787a6ae0eeeb88"],["/css/bb.css","f38458040d1a374064a927e2e0c477aa"],["/css/dark.css","85757ddd4c9f0e03bcc970c082d87ad8"],["/css/gallery.css","fcac9e6c669e10a13bb9b0f7fca02642"],["/css/gitment.css","75a1a49434b1ad51bcd98938f1f92c1a"],["/css/indexcover.css","f59b5eb6442aa3ce2de3f35df72a3b6c"],["/css/matery.css","d159b132c0fedfebbc169d926f6fd6d8"],["/css/my-gitalk.css","97d1975d4d1c84686d6288b3d095afd8"],["/css/my.css","ca40c99fdcedc7e2fb2ad719e44916fb"],["/css/post.css","9ce7a9fd619c181db27311c01f7b9ad1"],["/css/reward.css","1e59fc75d93fe6de133661e21e02d79f"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","e8321bb8a0c9d4e073d05b62b1bd1673"],["/index.html","c3d45def6aac5fd04c65d64cd86f9203"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","75636fbbf2271b523e417a6d78214ec2"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","5bd6453b77159c89852fa8c8b6a61863"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","72ed62fc12573694898cc94380e09792"],["/libs/gitalk/gitalk.css","4c0438f99ffb8f8253bbb506a7abb692"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","c0b995ec01aad11172c5617cef3f791b"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","3d678a087027eb21f605a7c8604657a4"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","20ef140044b8058f2f73aac88eec96a9"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","6cb02aba5ba40179185e417f325d6897"],["/page/3/index.html","92a7cf86dbcee8328cb26b214068edc0"],["/page/4/index.html","f9f846cf4ad642b08757a35722d8deec"],["/page/5/index.html","4843059abf5033ea9e05c893df7dc77c"],["/page/6/index.html","293e668efdca2846e852b8737e5a1313"],["/page/7/index.html","604ae0ab8446c949deddbeeeb1dba6c8"],["/page/8/index.html","c9c87ad934105c55505b43cea8d2e4b5"],["/sw-register.js","f7052913763a87ac13f85c3191ba1bf0"],["/tags/CUDA/index.html","43842aaab07835e024cd555d3fa4af4b"],["/tags/C语言/index.html","276907c00ffa4a25e85fcf8dfca2dab1"],["/tags/DDPM/index.html","45b0059a66ec59c36d5f25622adca24d"],["/tags/DL/index.html","5e51f39bbbfaa6e6700721e4ac0ea39c"],["/tags/Element-Plus/index.html","2c8e367b66541f78c3b992be725dfc70"],["/tags/Java/index.html","1bca1f52afa82f866172de2ff8973193"],["/tags/ML/index.html","ea01acf0ff8a376374f71ef8ba0343e6"],["/tags/Markdown/index.html","9bd5fb92b666223b66bb366934ce7092"],["/tags/Matplotlib/index.html","45c2489708b90661f811b9b140c2b5fb"],["/tags/NLP/index.html","79bd617908f22bb66558383c8800f516"],["/tags/NumPy/index.html","fb76c7c63f49b71dab0407a2d7384f9e"],["/tags/PyTorch/index.html","a598a32050c0ae1d7a5b8bed65edff7a"],["/tags/Redis/index.html","6eba1ecac423edd9f0de527b8b5d06bc"],["/tags/SpringBoot/index.html","b43687d6d0dce81e0417e060a60b9889"],["/tags/Typora/index.html","5ecd8c9616785ee9990ef42c5fb59bfc"],["/tags/Vue/index.html","fb9bd22505981b40c7bda37389e482f4"],["/tags/Vue3/index.html","e73418dd2dbafa5dc6e7ffda7e710e0e"],["/tags/array/index.html","918a8176b3f3ca5e48dcdff8de15bc35"],["/tags/cpp/index.html","941b4997d14b5aba01edbed8c002fa7a"],["/tags/cv/index.html","7093e852220b615b26f7cf9d4c76f7b0"],["/tags/fastai/index.html","df6f6bf3ee5d9de047e6523e7ac350c9"],["/tags/fastiai/index.html","ef607c8909e87553b71ffb3474298b71"],["/tags/index.html","0ab2bafe61f5c378372896e955b4cdb1"],["/tags/lambda函数/index.html","20ea8799994251d1af6b6c791d80b29f"],["/tags/python/index.html","423c37b3a684956588dec1620abefa10"],["/tags/two-pointers/index.html","47f799da235b5181f8e36d0fca93f836"],["/tags/函数参数/index.html","bbe4d4c4710b0f724611203d35812846"],["/tags/函数式编程/index.html","2995be6f4b581a1299e520b687d8993e"],["/tags/前端/index.html","d1ad23754deb893809f4a0647666a4c6"],["/tags/前端开发/index.html","218821035ab111e9fc0c22295a1cd6cb"],["/tags/协同过滤/index.html","38629552425655dd545cad5446dd6938"],["/tags/回归/index.html","0c6daeb48c51909a72ee3ea1779ccb0f"],["/tags/多标签分类/index.html","81a0ff2e858749ffcba1ae334f3cbda7"],["/tags/指针/index.html","fb6d53d04f0a524ab8d686235196b569"],["/tags/数学/index.html","47ff9e48fd1c0b1a7279078c9147dc92"],["/tags/数据结构/index.html","980ed1626df799023c67e19ea1f9b673"],["/tags/模型/index.html","0c8748eff8da6c6d83d88372b600603c"],["/tags/测试与异常/index.html","763ba46f756f70233689e2fffe60dcb7"],["/tags/深度学习/index.html","3df5e8580ab82b29dffc1cdf2a496559"],["/tags/生成器/index.html","760585ab4a150f4ce467e8b54b7ee759"],["/tags/生成模型/index.html","f53229edc0c5914bdf50d3272635aa4f"],["/tags/神经网络/index.html","6faa0af17a0ead4039744ecd97d273be"],["/tags/算法/index.html","775245ffc1e88b5277192925f9996cb9"],["/tags/表格建模/index.html","1e0cf0a5bcd55787bc56c522289fbf33"],["/tags/计算机专业课/index.html","f4297e2d1b90a2d022a9b9816fbe6d16"],["/tags/训练技术/index.html","86b632cd4255226f6d681e7a94d137db"],["/tags/迭代器/index.html","61e987901447f11ff771c98774f36b7b"],["/tags/面向对象编程/index.html","744501ab8fa9946ebb68e7b67e5f27ca"],["/tags/面试/index.html","407217b7a588c1e9c9b3a1ea43e9567e"],["/tags/预训练/index.html","f1169e62a341c748e5d56b468eb22eb5"],["/tags/高阶函数/index.html","5ca116bf51f98eb8dbfc5d23dce26319"]];
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
