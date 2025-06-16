/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","9e3a18f32eed67b7c566e98bc2b341a2"],["/2019/03/16/c-cheng-xu-she-ji/index.html","92b47a915b8b00e2bb0a5096e8fbb954"],["/2019/03/29/c-zhi-zhen/index.html","f48de6136557a3d5a3c48756a92410c4"],["/2020/10/15/ds-algorithm-md/index.html","11dbfa7fce2551e1b30a1b66c652a938"],["/2021/05/18/algorithm-md/index.html","4261007729f3cc8ab58c58c9b34b9132"],["/2022/01/12/python/index.html","7d17d614ed1c38782ca3a8b2aecbf8e6"],["/2022/01/16/python2/index.html","9c4b9ddb0af1d32064887129ed985cd2"],["/2022/01/19/python3/index.html","31b143e41d7b140c18507da523c6983c"],["/2022/02/28/c-biao-zhun-ku/index.html","3a146143e314684a551283d442fbab84"],["/2022/03/06/cpp/index.html","8ecec07ab421dc362e25de516c5e9d44"],["/2022/03/19/python4/index.html","df7126c7778959f005910928119275b0"],["/2022/03/25/lambda-han-shu/index.html","f22f32014bf168876d15619979db6abd"],["/2022/03/26/python5/index.html","65e31c515aac517bcc6c7c329d8f73cc"],["/2022/06/02/python6/index.html","fc252d262700734b81dd2692caeb5cdc"],["/2023/01/06/python7/index.html","c3e22a686305694d42dbc7bedb0a503f"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","def5dd5dd3197dd2e2dcf511b0a14319"],["/2023/04/16/machinelearning1/index.html","adc8c9ae9d85a1f8fb24e1bb3dddf4b5"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","887a1f09a526681663074faa12be64ca"],["/2023/08/08/python8/index.html","cad696de1f9d806d0aad33d6e71779bd"],["/2023/09/05/deeplearning01/index.html","5016bb8d38f2a0c164258e3fba973668"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","2b33ad4431bfd088aecffc68596a04c8"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","0f864b09ca85c5d34cbd94b5bfd8e54b"],["/2023/09/26/springboot-0/index.html","2091425e7f3568e0e7db8d891b9453c3"],["/2023/10/13/cuda/index.html","9f72c5f4ca4ea4e6658831da7e2f16b0"],["/2023/10/14/cuda-python/index.html","109580ac1cf265626bef21d685948eb8"],["/2023/12/21/dl1/index.html","659d0cb669d5b31e039391010aed610b"],["/2023/12/22/dsandad1/index.html","a20ef7fa552167558903297e1887d4e3"],["/2024/01/22/dl2/index.html","3a4c23a5793709dd4433b7f2502b0f44"],["/2024/01/28/production/index.html","16a7b0e75219329f886aa7f5f04104ff"],["/2024/02/25/mnist/index.html","55ace1723404dd984a8094f6f868ed33"],["/2024/02/26/ner/index.html","b9b323eca3ca07ebf72b768d0b6eab46"],["/2024/05/18/springboot-1/index.html","e8991d510c6e6956a24ff669e4980713"],["/2024/05/26/multicategory/index.html","b362df55ad74e2db84639c00d3676090"],["/2024/05/28/springboot-2/index.html","af99682e06005c96c107f75f90f7e5b3"],["/2024/06/02/regression/index.html","0b5eddf0a46cd118f52a161a088c879b"],["/2024/06/03/imageclassifer/index.html","1921cef7b865004f1e87dc439bc8bd83"],["/2024/06/03/nlp/index.html","97a74bb31c43a5ecf6a7f3b7263fa288"],["/2024/06/05/springboot-3/index.html","ad314ebe13f826ee2147eea69da7de63"],["/2024/06/10/trainsoatmodel/index.html","e582871dca9b28e9e4e74b2a2eb423cd"],["/2024/06/15/collab/index.html","37cf5477b0789863e9e67005c2dccd5f"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","5e1e5d0ecc43540b37f6d1d1b1d4a1fa"],["/2024/07/04/vue-qian-duan-an-li/index.html","17144e5ec63a5da909e91a146bb79d47"],["/2024/07/05/element-plus/index.html","02f28f3e3fc15062752ef8de94ff655e"],["/2024/08/10/vue-kai-fa-an-li/index.html","3bb9bf82d708d70e00aaf7d557ee30da"],["/2024/08/26/ddpm/index.html","8381f79a991dfdd24c864c35a2530f87"],["/2024/10/15/redis/index.html","70cc32994b786fff457f61768ae6156c"],["/2024/11/30/leetcode11/index.html","11112fd02acb3525572f68ec7025ff35"],["/2024/12/21/tabusearch/index.html","6195f09d6d7e8c36c93695f442dac256"],["/2025/04/01/hexo-bu-shu-dao-hua-wei-yun-fu-wu-qi/index.html","35044363ceeb6c91661eecc288503f58"],["/404/index.html","c20d92cedc0246f13751b6f0bca2c168"],["/about/index.html","9927c1cb1018f23e2282355311fcb18e"],["/archives/2018/09/index.html","169ed645c34e35452353599546924624"],["/archives/2018/index.html","f7d2491e06f8d2fe53f5f2ede5e216c5"],["/archives/2019/03/index.html","03b0ea55cf6a56ff74c0dc2e7d6264de"],["/archives/2019/index.html","67a112a6fbf2ca76b1aba4bf4e9248a4"],["/archives/2020/10/index.html","18974ebe31a0b2eefb53c244a3ac6215"],["/archives/2020/index.html","c51f441e991f32de4658d5878fb40fe7"],["/archives/2021/05/index.html","1ae7e5d698f4b25b002d7062b46039c0"],["/archives/2021/index.html","de001819738bcb76ccf62cba0dcb92fc"],["/archives/2022/01/index.html","44e8d8afe5438af794b897680ecb213e"],["/archives/2022/02/index.html","d2337718348d59fb9bfdd02ef8101a51"],["/archives/2022/03/index.html","659f75a990650bf3b170a561bad78a32"],["/archives/2022/06/index.html","20d99a345ffb87710f1e1df77dd1c0f2"],["/archives/2022/index.html","e9e862979487c0be342af6fddbc9a130"],["/archives/2023/01/index.html","82bba02a05845a670c34eace17f64b4e"],["/archives/2023/04/index.html","8858a04e7095b2baa9fe059babd2395d"],["/archives/2023/08/index.html","91fb809a8560e03fa0f3fb742691c4b9"],["/archives/2023/09/index.html","2841a8f4d04a0b0194e1f9d5dcbba638"],["/archives/2023/10/index.html","cfbcaf24b94134923ad9a1a0bc3d547d"],["/archives/2023/12/index.html","d338d8a481c8745948602cdb5defaa0d"],["/archives/2023/index.html","7e61a430c705daa52ff7803eb96f90e2"],["/archives/2023/page/2/index.html","064a539b1d76de5be20dfb811ee1f8bb"],["/archives/2024/01/index.html","4a08e29a6150844d7d6cdeac0e584dc7"],["/archives/2024/02/index.html","87aea3a8d9dd924d5f02fcf3d481cf51"],["/archives/2024/05/index.html","e9e14f7700ff614ca26ab3655f885879"],["/archives/2024/06/index.html","0fb234a0535a2ed353cc5b9ef1c68b13"],["/archives/2024/07/index.html","bd49fde482025284f81a0ff360ca1733"],["/archives/2024/08/index.html","547d88e80a05caf156e23dc12a89be91"],["/archives/2024/10/index.html","9283461cd8b6d12dc61369475c6806a8"],["/archives/2024/11/index.html","65edbddab7729f7c5a0248fa8378e981"],["/archives/2024/12/index.html","4a96209f2f4510f0b2c0d1972e85e289"],["/archives/2024/index.html","1c415170594c678641752a9d1ab0d762"],["/archives/2024/page/2/index.html","6ea5e4d2140f5fd61d05ab0866b8eecd"],["/archives/2024/page/3/index.html","bfd99c6d31ff65eefaa64438c4775ab6"],["/archives/2025/04/index.html","ff8b18606faaea817f6d6f827050cb1d"],["/archives/2025/index.html","506c12faf5923160457a2c1fdce33642"],["/archives/index.html","dda8a2cd640b1427b1606d71bc4d7549"],["/archives/page/2/index.html","c0aea44c0a1a0b535b64bb0c67ec84d0"],["/archives/page/3/index.html","06ff553d53209c92e2c781a72372ffba"],["/archives/page/4/index.html","e6d5bb2366c293ef10b3715e0218fb83"],["/archives/page/5/index.html","7b364659e35126ab16092ceee6ec2d28"],["/categories/C/index.html","572a6006c3270b3b84677c5ea5d2b1c1"],["/categories/CUDA/index.html","b2977ff96ba9bd39c37301f44dc405be"],["/categories/CV/index.html","1442702baef52c984bcf16b9a87b23e6"],["/categories/C语言/index.html","ce7f70d0bfd7560d1996925d2fb00657"],["/categories/LeetCode刷题日常/index.html","47ee2a795681f71ecce7a3b2b70fc111"],["/categories/Markdown/index.html","bbf5e80fa02754bc151e48e1ec5f40bf"],["/categories/NLP/index.html","a53e392630e42d34cd8c10d02da42952"],["/categories/Python/index.html","ef413e64f4cb479233558b486096595a"],["/categories/SpringBoot/index.html","f64e1361136dda5e43f2666cefa4f331"],["/categories/index.html","6d9a0a764e5bac3bb19cbdf76452cfa8"],["/categories/前端/index.html","1000474ad424a9877ff0c310dbe8e9b9"],["/categories/协同过滤/index.html","e50717f20a59f8c74853389d26d00dc0"],["/categories/博客/index.html","a589dd633c479f576f1ae3c7e59620b8"],["/categories/启发式算法/index.html","b1366d563a89a41e88794e8e914dfb5b"],["/categories/数学/index.html","4f75a1f5cb543974ee21f288789b786d"],["/categories/数据库/index.html","8adb7ff703cf08c73f1b42fa448d3fca"],["/categories/数据结构/index.html","f647e1c835130d99294f0e66b725f64b"],["/categories/深度学习/index.html","0b2a5acf2555b4874aac33bf42685053"],["/categories/生成模型/index.html","ecdcb2d750f5cce29afd4a029e0a3259"],["/categories/神经网络与深度学习/index.html","e09b25d52bb0cb214f8f4ed298062855"],["/categories/算法/index.html","7ad81b168bb3c7526bac5fd4620ab514"],["/categories/训练模型/index.html","6ce82482d1c472b341df511ec5991b10"],["/categories/面试题/index.html","2490f3b6a789488c2a2a57fff180cac2"],["/contact/index.html","12e1c7c611ec7ce4784fd6ac70d563d4"],["/css/barrager.css","2bcf8fdbbdd99812e98a8cde1afea5c8"],["/css/bb.css","01d05cbbd50870ddcf952ac721870920"],["/css/dark.css","ec3302bfd01566a8584c44e763f6b1a0"],["/css/gallery.css","3e42876a1e78801f6a22bcf82da9cc41"],["/css/gitment.css","d32a5dc67c5276f7f15fc8b3594142ad"],["/css/indexcover.css","40161b4d3eef74245323a2c7ce678318"],["/css/matery.css","b17fbe2df788f2c1ee710063b93f3469"],["/css/my-gitalk.css","55525a2cd6b9b6ee4f2f8fa25c0d0fa7"],["/css/my.css","2297fcca9cc65f70b561c20f694b2c49"],["/css/post.css","0d2c7edf444473ceaafca8c4eebe1abe"],["/css/reward.css","8e989e1d3264cf3753c77c395148166b"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","c6cc44fe4eb843d341a32164ec3c0ac8"],["/index.html","31eea120a57fcc17dca51fdd83156778"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","e48cbd1ff4e6f13f4b5559738f5633f0"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","eba1d757262665d8a6daccffb97678f4"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","0d45a3a81bb99096d4a063239bda518b"],["/libs/gitalk/gitalk.css","2c3c5d15dea4938a79e3b0c34b45a1f5"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","ee0b62c3a70e81829f7c5e6ef843bcfb"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","18dd9fc89524e91f9b651479d2b7f51d"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","a6bd9b571230984ec73925b4f30347c1"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","fa2c6610c2861ea39686f3ae8247fb59"],["/page/3/index.html","e5cd67b865f18bfaf314ed90ef922770"],["/page/4/index.html","4873d5af6939f2002492052e2e6b70dd"],["/page/5/index.html","04dbf4fd45d373ca71bb60a1a229a423"],["/page/6/index.html","686c9a769e3632eddc138c916f040cd6"],["/page/7/index.html","f6b7d31edb6298dd8a5cc96d80cf3fc4"],["/page/8/index.html","400c4ef0601a267872d04c1ea201a99a"],["/page/9/index.html","b366fdeb2fecfd3a3c619157d118d46a"],["/sw-register.js","c7f47fedab17c5b69a33dd4312955c56"],["/tags/CUDA/index.html","20c9dfbb1adee88c2ec56572d511e19e"],["/tags/C语言/index.html","bb647afe6241907b9057bbc6ec3e0956"],["/tags/DDPM/index.html","d3bf8578a8956b2090033a38652a2a44"],["/tags/DL/index.html","db2d21b76be3dc26426bbd0378678374"],["/tags/Element-Plus/index.html","4cefbabc422ad0e960b41371f038fc2c"],["/tags/Java/index.html","1f1291c131ecf869d21ee573189eab14"],["/tags/ML/index.html","7464eb0a8026a876576151f51749cc49"],["/tags/Markdown/index.html","e112724d98132b6242f43ea5652c014a"],["/tags/Matplotlib/index.html","1e1fd6fe90070d3e2c156a7ca4cd06b6"],["/tags/NLP/index.html","453b66c4d86f935bef91bd3ce813315b"],["/tags/NumPy/index.html","1e6803f960e11ccd14d97dadadc24ba3"],["/tags/PyTorch/index.html","075237c720be3f3948fc0b90f86a3371"],["/tags/Redis/index.html","9ba5dfd8d12bdb1e48b01e996b16d173"],["/tags/SpringBoot/index.html","69abfeedf4f9078ccc2a5582de2582d1"],["/tags/Typora/index.html","593becd10302073ed655f41c21ba3e99"],["/tags/Vue/index.html","206c17dd59991c2368e25865b63fc8c1"],["/tags/Vue3/index.html","630699df9f174edd094d3ab45ff541e1"],["/tags/array/index.html","c1a978c601501d29eff926d99ba1a6dd"],["/tags/cpp/index.html","56d9b98cea6b085c472328571e0e0970"],["/tags/cv/index.html","33b16bd0545fe41e270437c535dc51a1"],["/tags/fastai/index.html","595998e27861ecd56720c3e843ce64e8"],["/tags/fastiai/index.html","b009e82002404280c6dbf99591b3a89c"],["/tags/index.html","18d220bdb749a7f3215dc6bb45b8b829"],["/tags/lambda函数/index.html","8a12e08900cca2d2c8f9a7ee251b2e6e"],["/tags/python/index.html","d43846b882242b66a14a8c4d16e9da35"],["/tags/two-pointers/index.html","aa38338f046f88fe39dcc81aad4b1e4a"],["/tags/优化算法/index.html","5694eb1e0cec6ab7c01dd221a34fade6"],["/tags/函数参数/index.html","4c70e9ed216f61c3175ddeddd256d96c"],["/tags/函数式编程/index.html","110aa4e2c828cde76dc21302914b8427"],["/tags/前端/index.html","bcc95c88ad20bc387bc5fc3a5a0959e9"],["/tags/前端开发/index.html","b75a9e3c30c5f792d4cd93beead0d0bf"],["/tags/协同过滤/index.html","12db2a9fdd79e6b6c8c11b2ada8598d7"],["/tags/博客部署/index.html","c195ec1cc256ff87500f1214fbd4b094"],["/tags/启发式算法/index.html","bbc29f7f0eccec8f313eed6d82baeda8"],["/tags/回归/index.html","af01c3b2af8d60d4902700bf3116976e"],["/tags/域名迁移/index.html","70822cf4315908e682737e34630f987b"],["/tags/多标签分类/index.html","baf2801ebed2bc0350d5ff45a4d605b0"],["/tags/指针/index.html","72ff9c254841950c13fcd7173dfc963a"],["/tags/数学/index.html","9350c36b6bc5fc867fb862f9cf315f96"],["/tags/数据结构/index.html","c184fc059754c6b51caff99890d9b256"],["/tags/模型/index.html","6c7375f73f79b4c202333d400ef6ffb2"],["/tags/测试与异常/index.html","7130bbc317ee15e59aa3262539ef6172"],["/tags/深度学习/index.html","ae262429270b14ee941905f6c1eff269"],["/tags/生成器/index.html","07cae05e398ece0d7a2f1d7e386abf01"],["/tags/生成模型/index.html","dd811c43c37274d73ce9c1536c92ebe2"],["/tags/神经网络/index.html","d5edfed39f11fe33359eef2c33e2f7c0"],["/tags/算法/index.html","7c39575ed1a3ad7d12a70da278e0ae6e"],["/tags/表格建模/index.html","99526ccb90bbb435d1994356b927044d"],["/tags/计算机专业课/index.html","4ae48a769a5a423f159a3cecd6f93eee"],["/tags/训练技术/index.html","3b592adf61db415c08fc5feee580a0b6"],["/tags/迭代器/index.html","1fa6ab8e8552b42c8e3d814453df24a8"],["/tags/面向对象编程/index.html","62830d260cb0491dc97534c1cd1a27c6"],["/tags/面试/index.html","8b191a6c51662c0e9596b3b68f6cd977"],["/tags/预训练/index.html","a93388cf7255c40e7025aea6fd748227"],["/tags/高阶函数/index.html","1e81666ad1d90d7fb69193506d4f7394"]];
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
