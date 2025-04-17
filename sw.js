/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","f87437bac4eb477816a936e77b421137"],["/2019/03/16/c-cheng-xu-she-ji/index.html","e9e73b2cc0dbdca295aaf04467fe762a"],["/2019/03/29/c-zhi-zhen/index.html","394ccaa86fcd3c471abd9a6d413f959e"],["/2020/10/15/ds-algorithm-md/index.html","307a3080ee4fdd005969a3a9e3788a04"],["/2021/05/18/algorithm-md/index.html","bf0932f2ea07830f78faf61152b3e023"],["/2022/01/12/python/index.html","7d17d614ed1c38782ca3a8b2aecbf8e6"],["/2022/01/16/python2/index.html","9c4b9ddb0af1d32064887129ed985cd2"],["/2022/01/19/python3/index.html","31b143e41d7b140c18507da523c6983c"],["/2022/02/28/c-biao-zhun-ku/index.html","3a146143e314684a551283d442fbab84"],["/2022/03/06/cpp/index.html","8ecec07ab421dc362e25de516c5e9d44"],["/2022/03/19/python4/index.html","df7126c7778959f005910928119275b0"],["/2022/03/25/lambda-han-shu/index.html","f22f32014bf168876d15619979db6abd"],["/2022/03/26/python5/index.html","65e31c515aac517bcc6c7c329d8f73cc"],["/2022/06/02/python6/index.html","fc252d262700734b81dd2692caeb5cdc"],["/2023/01/06/python7/index.html","c3e22a686305694d42dbc7bedb0a503f"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","def5dd5dd3197dd2e2dcf511b0a14319"],["/2023/04/16/machinelearning1/index.html","adc8c9ae9d85a1f8fb24e1bb3dddf4b5"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","7b51dc30345a590643e9acb8943e5b42"],["/2023/08/08/python8/index.html","3f6e4b595b8483c176dee5a877fff20e"],["/2023/09/05/deeplearning01/index.html","0d353114cbcb09478c54b7af4ac6ebd2"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","2b33ad4431bfd088aecffc68596a04c8"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","0f864b09ca85c5d34cbd94b5bfd8e54b"],["/2023/09/26/springboot-0/index.html","2091425e7f3568e0e7db8d891b9453c3"],["/2023/10/13/cuda/index.html","9f72c5f4ca4ea4e6658831da7e2f16b0"],["/2023/10/14/cuda-python/index.html","109580ac1cf265626bef21d685948eb8"],["/2023/12/21/dl1/index.html","c3a96098dfe85050bfc41585f9d31c69"],["/2023/12/22/dsandad1/index.html","9565b5f5d7f6c41ddebf6805e67b5e5d"],["/2024/01/22/dl2/index.html","1735ddabe93a5e8cde86466eaa784739"],["/2024/01/28/production/index.html","16a7b0e75219329f886aa7f5f04104ff"],["/2024/02/25/mnist/index.html","55ace1723404dd984a8094f6f868ed33"],["/2024/02/26/ner/index.html","b9b323eca3ca07ebf72b768d0b6eab46"],["/2024/05/18/springboot-1/index.html","e8991d510c6e6956a24ff669e4980713"],["/2024/05/26/multicategory/index.html","efdf9c5e9906f17b9975057ee1448577"],["/2024/05/28/springboot-2/index.html","eef522c6e9091e444bedb3c2b7f50669"],["/2024/06/02/regression/index.html","4987941ab223c6639634ef278fc55f82"],["/2024/06/03/imageclassifer/index.html","1921cef7b865004f1e87dc439bc8bd83"],["/2024/06/03/nlp/index.html","6cedbc7b8867a3262d91dba6e46a3919"],["/2024/06/05/springboot-3/index.html","cea129816e57dcbf1c8ba835b157da99"],["/2024/06/10/trainsoatmodel/index.html","76848eea132180cf056ce92c57457206"],["/2024/06/15/collab/index.html","37cf5477b0789863e9e67005c2dccd5f"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","8ee3783e3ac42dd01861af31ed1437be"],["/2024/07/04/vue-qian-duan-an-li/index.html","edb7f14adb266d1bbb45589080e54163"],["/2024/07/05/element-plus/index.html","275c7dba962fb2408f4136f7f391f297"],["/2024/08/10/vue-kai-fa-an-li/index.html","6bea33fd455cce3650a2d3177776a5e6"],["/2024/08/26/ddpm/index.html","4bc32281467859e74899ff028278c8ab"],["/2024/10/15/redis/index.html","70cc32994b786fff457f61768ae6156c"],["/2024/11/30/leetcode11/index.html","11112fd02acb3525572f68ec7025ff35"],["/2024/12/21/tabusearch/index.html","6195f09d6d7e8c36c93695f442dac256"],["/2025/04/01/hexo-bu-shu-dao-hua-wei-yun-fu-wu-qi/index.html","35044363ceeb6c91661eecc288503f58"],["/404/index.html","c20d92cedc0246f13751b6f0bca2c168"],["/about/index.html","36f002b6e48c6ef3288742ad787831f9"],["/archives/2018/09/index.html","e217b1be29425bc074ea431f3c5cd55e"],["/archives/2018/index.html","4924206b68cac2a5280b653d755d0f55"],["/archives/2019/03/index.html","5d67718ad03778686b610612d005b6a9"],["/archives/2019/index.html","ee5960e118ce9695a2f71ed045471b94"],["/archives/2020/10/index.html","85f1b87e6b6bed7aff020ddcb1db4367"],["/archives/2020/index.html","32aa08fd4315dfe4c5f0bbd85b0ea1da"],["/archives/2021/05/index.html","5c712dbf0eddf39b18c8cb265f8d4fcb"],["/archives/2021/index.html","9c2e0e81f006e8ebdeb58f091e843f3d"],["/archives/2022/01/index.html","e5f62263600e9baec1a3b20d5a96e4ff"],["/archives/2022/02/index.html","80933d38f22b6e3da68331d45a223eb4"],["/archives/2022/03/index.html","bae013a918d0bbd48f196ef0b12c8013"],["/archives/2022/06/index.html","d11c69dfbeac582ab9f089c047677bda"],["/archives/2022/index.html","d9ee38ecd092196125431ab4b4abda00"],["/archives/2023/01/index.html","8d50d1ee5845cdae61abf69a32deaec4"],["/archives/2023/04/index.html","37f253832be10d55af16ef32125a05c5"],["/archives/2023/08/index.html","348330778daa9ec7003f8a8d0d976f78"],["/archives/2023/09/index.html","83833c197e0568e34c94a012c437da33"],["/archives/2023/10/index.html","adbd4bb06e728c2ca200144f5dc56b4c"],["/archives/2023/12/index.html","482d53748b3746ffad42de11c738d7d8"],["/archives/2023/index.html","752940641ceca429384a8c9f959677ed"],["/archives/2023/page/2/index.html","11a8ba62c73c2a240d34c5c773379a3f"],["/archives/2024/01/index.html","148d15d851a508db24a73bdbe5fbbc9a"],["/archives/2024/02/index.html","b000cef2bc41a44ad51627b47f26ef28"],["/archives/2024/05/index.html","562c9b75fff41298eb5aedf88248d62c"],["/archives/2024/06/index.html","a14cdb0712b6570cd7e5a92ff86ac3dd"],["/archives/2024/07/index.html","ce46870207cbceaa3f877e6343b4d602"],["/archives/2024/08/index.html","33c65c490de0dfeb503582bce8dcf3d0"],["/archives/2024/10/index.html","9bbeb23b664d628f81410c4010e35676"],["/archives/2024/11/index.html","9ddfce2d5379448e65ee7378e190b91c"],["/archives/2024/12/index.html","e5ba5d932af5bf1053fd416e54548ae9"],["/archives/2024/index.html","0c6724e28bed156240f3968582765698"],["/archives/2024/page/2/index.html","8f7583736f0bd109ee9ce4f9bf109870"],["/archives/2024/page/3/index.html","ff4cae0eafc1c81927283c2b280eb4fb"],["/archives/2025/04/index.html","e5556476b9e6f7b4168845dcbf8128cc"],["/archives/2025/index.html","16100e49d8fb9881ee7364ce57039d13"],["/archives/index.html","89c470d96c151e70173e293c90ec28a4"],["/archives/page/2/index.html","53c61b8dd0e4eec636fe9ade4c7cc645"],["/archives/page/3/index.html","52a510575d064e28e8326ff7f5eb6c6f"],["/archives/page/4/index.html","0633e34e1bbe33be1b36aedc380fa622"],["/archives/page/5/index.html","9e9e5849ea0299dbfab33422875d10b9"],["/categories/C/index.html","be1e1b8f2bb837e7e684281b50c2307c"],["/categories/CUDA/index.html","85d65bb282960c0466b001f86cfc420c"],["/categories/CV/index.html","17671cee100b3f9a58b2560e28b70a76"],["/categories/C语言/index.html","16f27abfeb73f2952a3b3ac98ce0aad0"],["/categories/LeetCode刷题日常/index.html","6484e5c45a0a0e7e260767668ed54ed2"],["/categories/Markdown/index.html","a1fd406953290dd9952470598e9d6db2"],["/categories/NLP/index.html","2c10621d2c5d91f7282f9b638abb2c3d"],["/categories/Python/index.html","7c054c108802be16e4c1fed07f937c12"],["/categories/SpringBoot/index.html","fa8c984d4075fecb51a96ec177781d79"],["/categories/index.html","dacb64876623b11fe28fafa5ac47f2e1"],["/categories/前端/index.html","b51029dde83c84413d4873857f35ad25"],["/categories/协同过滤/index.html","7c5a2dc8445c967d6ed2610577b6bb17"],["/categories/博客/index.html","d1868f22748690b0d7d95f0d7be05c1d"],["/categories/启发式算法/index.html","d679c652dfaa8a627d83c5b1c8441875"],["/categories/数学/index.html","81bcce0b7d16ea07eb1f432034aacdef"],["/categories/数据库/index.html","1649e8bc07590d89d6142a65c20d67b4"],["/categories/数据结构/index.html","012f1622bb2287dd25e1acca64f7df2b"],["/categories/深度学习/index.html","a904f9baa363d549db9708756a16aa16"],["/categories/生成模型/index.html","0d8f3bc10f748e84433b9caba369d85e"],["/categories/神经网络与深度学习/index.html","22e1d7684e3af101f8fa2932dae7199b"],["/categories/算法/index.html","60287a93abdffc35e92c1d44f4d2defe"],["/categories/训练模型/index.html","735265790775de767b91cd22d5bb1453"],["/categories/面试题/index.html","08536729790b37a3abd4f2f9822c8132"],["/contact/index.html","12e1c7c611ec7ce4784fd6ac70d563d4"],["/css/barrager.css","d96438979c441b69a3515f7b2fb8a29c"],["/css/bb.css","856908485a3eb3e3e71dcc18d5f35d4e"],["/css/dark.css","0af86ff8dab2d3d8a495d2fad8365867"],["/css/gallery.css","12c7fd507ba9bcb5580ec586337dc44b"],["/css/gitment.css","ad5d167c75ee4df9cbff2482e3e69436"],["/css/indexcover.css","9a27d1355b7b9341d397fdb48e821be4"],["/css/matery.css","b5eb885f5e310682b6efadbf71b16ae1"],["/css/my-gitalk.css","fb42f2cf504c88c884536558b584b76b"],["/css/my.css","606e9262b022e1d55e867e126134c4e0"],["/css/post.css","e9bf0ba45b6c3ef2471170132a33d9f1"],["/css/reward.css","3b5f54b261c970f6310365c737174ee5"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","c6cc44fe4eb843d341a32164ec3c0ac8"],["/index.html","b76f5f8ef9dcf59396d1e3c3a7ce0a39"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","69fc9965733e68e80ab1ada59056624b"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","14a5bc6d4a380ccb722ff7652610121f"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","42c3203093fe6ede17aba03b7eb3838e"],["/libs/gitalk/gitalk.css","5f0becbe78a0ddb94fc13ebf2bccfc28"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","240b37c0e08d69cce68b3c23a4e34bcd"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","21c613b210684f858de9388f644fa7ab"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","ebe3a15a95d45d25771dcf9ff161c8a4"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","5e3a14d985c342816d9cd6d56ba7e216"],["/page/3/index.html","bc4c2e0137ed268dd9e53cfd08e9b8a5"],["/page/4/index.html","8c0d97c2cf1189f5cf2c01089a48b280"],["/page/5/index.html","04dbf4fd45d373ca71bb60a1a229a423"],["/page/6/index.html","cb03ef64fd44090811607d8e528698fd"],["/page/7/index.html","f6b7d31edb6298dd8a5cc96d80cf3fc4"],["/page/8/index.html","bb545a072f56f82256469ce07941141f"],["/page/9/index.html","b366fdeb2fecfd3a3c619157d118d46a"],["/sw-register.js","454e5ab9e9ee35a088ebf7f8dd3581e5"],["/tags/CUDA/index.html","cea4560fa56bc2bd3df102b0deec65a3"],["/tags/C语言/index.html","bcf6a11ec99c4147aa774d4e007b8f16"],["/tags/DDPM/index.html","1345ab965a25f0a66403681a04df285a"],["/tags/DL/index.html","fd845aa0aba8d0bcb6e75cc5d15c4bee"],["/tags/Element-Plus/index.html","fc6f3b31590a2208c79e3a978e8d1bba"],["/tags/Java/index.html","9dcecf89a77df20ca0ab3ed9d038a0e8"],["/tags/ML/index.html","1ed435cff9d8e1e9ae655be8d9c02b3f"],["/tags/Markdown/index.html","45353fcde1ac9c87dc6831c623a54df5"],["/tags/Matplotlib/index.html","3845b44f1bde9347f53bd58040b4419e"],["/tags/NLP/index.html","46e989de6ef9911f8964e79a2b7dc17a"],["/tags/NumPy/index.html","afcc737c63f2ad44fe4c6cf06fcec851"],["/tags/PyTorch/index.html","29da2ad715845041653d918a2bd92c47"],["/tags/Redis/index.html","9c6834d28e28e4bc151c1a20d6b7a3fd"],["/tags/SpringBoot/index.html","53f7e6be671b139e1759315612bf2acd"],["/tags/Typora/index.html","c42dab91da7ca53b0960dfe5e21f1afa"],["/tags/Vue/index.html","4dccb18afbb153aeb2e2193497979dc7"],["/tags/Vue3/index.html","d5d0cdeeee3063ca83c0c635ea873e1c"],["/tags/array/index.html","ab200cc7d143dec9c16b336ef8a81139"],["/tags/cpp/index.html","004c146978e1d5d2f28e269e5e617f87"],["/tags/cv/index.html","72ac0478041303c7632a6d078aabb8eb"],["/tags/fastai/index.html","1f9522d944ec950ceb04554750262ff0"],["/tags/fastiai/index.html","ff556150dc730043e39d7b80d0635b38"],["/tags/index.html","9e1bbc5876a22e18abe527e3f7ab3138"],["/tags/lambda函数/index.html","534b2cbd296a5b7ec0e0d56e14eb46b6"],["/tags/python/index.html","049923fa869bf29571d5c0a693a4af71"],["/tags/two-pointers/index.html","dde2608df01847ceb6d23f4c90f7756d"],["/tags/优化算法/index.html","de8d8711ef4b045b082a2392dc85d637"],["/tags/函数参数/index.html","0848dce6bc57e4d31c9fa03edaa19723"],["/tags/函数式编程/index.html","1235e040203da237e7870b15a8c3debf"],["/tags/前端/index.html","23be74dfaa31f786591765b24979a08f"],["/tags/前端开发/index.html","58f80d05509c52cdbd65b05b2b8ddaed"],["/tags/协同过滤/index.html","ec603b7200789543d94dd0d1eb2f8288"],["/tags/博客部署/index.html","e7522b6c731a9a4b6c78e404e70038b3"],["/tags/启发式算法/index.html","12d3c1423874c851b722e565e1964581"],["/tags/回归/index.html","a473f8c2bce132c7b2a2bd7dad33d79c"],["/tags/域名迁移/index.html","62ead29f8e407be7857ba774615f50c2"],["/tags/多标签分类/index.html","be020f8b07278f25926288438d6ef6ef"],["/tags/指针/index.html","f2ae6e25cc3da256a2be2bc13f3c3191"],["/tags/数学/index.html","0c00ab41b0e6bb688a4b02151f1f3583"],["/tags/数据结构/index.html","620183598714dde555b4c2001afce75c"],["/tags/模型/index.html","844bba53b7640bfa1ec26e16a7328c47"],["/tags/测试与异常/index.html","7cb419e31936e8d6297f53284f3b401d"],["/tags/深度学习/index.html","e6b507903e2048e9af5e6510023ba3a9"],["/tags/生成器/index.html","4d1905154689fe55acde5aa80ae21ded"],["/tags/生成模型/index.html","0fff3c33dc0633ff985ee13c97c5cdd8"],["/tags/神经网络/index.html","cdc0743e8bff83d153daea593441799d"],["/tags/算法/index.html","e80e08322589e302358599a08e5690d3"],["/tags/表格建模/index.html","5b0cad854a83ddf2e07a2434c613a494"],["/tags/计算机专业课/index.html","b949c9d5377dfd445b46f7fda6dcab2d"],["/tags/训练技术/index.html","ba80c909398699fa10105f292b4411a3"],["/tags/迭代器/index.html","38a7cdf8f3b391852169914d8d8a1015"],["/tags/面向对象编程/index.html","ef4ed768ea66dbebcc93ffb7cf4ed31d"],["/tags/面试/index.html","6d27364c67f7271510d3a1b58f51c6ee"],["/tags/预训练/index.html","45fa9c15bb1635be2f3182c6dd8de987"],["/tags/高阶函数/index.html","13a74521ac86aab44768ffc1dc61e1da"]];
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
