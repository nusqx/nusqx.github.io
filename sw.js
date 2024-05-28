/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","a225b2d8dc95eba30d9314509240088e"],["/2019/03/16/c-cheng-xu-she-ji/index.html","0f7db5ead0353fd8e616636961284459"],["/2019/03/29/c-zhi-zhen/index.html","3a6ccc46d9c59a2e49dcb19245b3df41"],["/2020/10/15/ds-algorithm-md/index.html","dbf02d1a9f8ec187fa34bdb38ee066b0"],["/2021/05/18/algorithm-md/index.html","251bc8667257ec584452cca04ef05a5d"],["/2022/01/12/python/index.html","985bf7925ac19e7dabfacfd6f62c934e"],["/2022/01/16/python2/index.html","b239db6dc17f9eec78c434fd1da2f83b"],["/2022/01/19/python3/index.html","35fadb4e190c33770a4f6405a428bf50"],["/2022/02/28/c-biao-zhun-ku/index.html","f81959f84e5f99959524431a72945a8e"],["/2022/03/06/cpp/index.html","dab185d05836977f43e981ad9bf7003e"],["/2022/03/19/python4/index.html","293173eebeb9126a056736e7780a0b58"],["/2022/03/25/lambda-han-shu/index.html","e0079f73fc67c263c096a7cd903f5147"],["/2022/03/26/python5/index.html","77c622b7b09d13d82a8bd7a0ddba5237"],["/2022/06/02/python6/index.html","38511ca8f5fde840215f4da6a4ef944e"],["/2023/01/06/python7/index.html","c61dd65067568ccb0a09338b5e23530d"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","dd5b102d0dfc60c8fec29edd4f8b0c96"],["/2023/04/16/machinelearning1/index.html","340b68bb0cfc279009a12944d1b81da4"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","79f178bfdb68dbdd27349aabbaf4a38b"],["/2023/08/08/python8/index.html","951c3581c7b145ba0ade367b19d2124f"],["/2023/09/05/deeplearning01/index.html","f2d73b2c86b58e61041984b49b7de97a"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","f8301bf299f1eee28b163db8ad729c17"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","a62ac8a965cb2bdb6a588bf5741f18df"],["/2023/10/13/cuda/index.html","20e6e88523ddb0e9a42547c3ea31117f"],["/2023/10/14/cuda-python/index.html","43950b02e7166c663ba81527cef4fa3a"],["/2023/12/21/dl1/index.html","c55dd434021d68b604fb5cee2b3f983b"],["/2023/12/22/dsandad1/index.html","111d595aeb2b96633c8488f58673797c"],["/2024/01/22/dl2/index.html","c906440112cda9bcd114d6c20dac8c98"],["/2024/01/28/production/index.html","07b320dcdea05a309e396c1455b297a9"],["/2024/02/25/mnist/index.html","a8ec96d8b395905b9316c16bf5d1def9"],["/2024/02/26/ner/index.html","704329e599165ec4c2c1267c1f8fb2c1"],["/404/index.html","d3fdeb231144dc1805fdeab0fb322643"],["/about/index.html","1536d8d7fea85a20001bd90ae0ade882"],["/archives/2018/09/index.html","5e98de6839e93c66c052fa138c127b42"],["/archives/2018/index.html","f13fb4970e028ca311359f3904a422b9"],["/archives/2019/03/index.html","78a3e13b214b5a10283a638a4506d1aa"],["/archives/2019/index.html","63add8bd0be3206eddf6e193f8b8c737"],["/archives/2020/10/index.html","958ec99e76fd2d2a2f5375da3a472d1b"],["/archives/2020/index.html","618b18f9953907ebaeeb8bdd614a67d9"],["/archives/2021/05/index.html","3af5963faf794597a3c6b3701d622662"],["/archives/2021/index.html","b679f1b7ac408743fd12bedd3a360c5c"],["/archives/2022/01/index.html","c980c159f73c498ffb72276f500f84d1"],["/archives/2022/02/index.html","d5779603dda306656998a6e520f13ead"],["/archives/2022/03/index.html","5849ab34bcca1fd801905805f474d270"],["/archives/2022/06/index.html","2c4161ec474b8036e59c6f773e5e1f79"],["/archives/2022/index.html","4750f0d6643eb18b78972676b03cf558"],["/archives/2023/01/index.html","3e9dc704018a78f35c6ac8460615179d"],["/archives/2023/04/index.html","3709aa75d2bd42a35a5fa3b310ab0566"],["/archives/2023/08/index.html","71d70751555e0790c86e476e763a8f52"],["/archives/2023/09/index.html","9644c19bc8ae908aa93838037e6f32dd"],["/archives/2023/10/index.html","befc07cd333d45840dc92371d0efa08c"],["/archives/2023/12/index.html","baa0b065c4264f585c16e2d7d60c84c8"],["/archives/2023/index.html","7eb50be98bdf1abbb2cf842852db6a56"],["/archives/2023/page/2/index.html","ea1a0a33246f2b3edeaca692bd3ff330"],["/archives/2024/01/index.html","be1b8421427596a31f6c057607e5bc0c"],["/archives/2024/02/index.html","27d885dcbd9ca1f5a34c8a9ac63567cb"],["/archives/2024/index.html","0dbf1d4e13c51e46d84e8c604f4f0513"],["/archives/index.html","3eda1a72dd17a0e9c0922ddb18e6df59"],["/archives/page/2/index.html","dba9de54daaf712fb1a562d25e181e5e"],["/archives/page/3/index.html","9b15613b1f9cb6562f415def3fb54b7f"],["/categories/C/index.html","ddd59a9f1e51cf02eb3c70d6df86109c"],["/categories/CUDA/index.html","9d99f5799657c90ab82f27fd5eb6772c"],["/categories/C语言/index.html","aca0d8cef1dca93d0ee25742749f2bb6"],["/categories/Markdown/index.html","f5813334b0073e38db5caeb3919e0cc5"],["/categories/NLP/index.html","a0037569ede245652ad5c8e0150c5d36"],["/categories/Python/index.html","d46c5cb2af95d9b9b194def5c16f6dca"],["/categories/index.html","0f469bf507c443d140ec5f7f1947db7f"],["/categories/数学/index.html","f65d432191e05ca80c297712eda81fc1"],["/categories/数据结构/index.html","05e3569574a0dd2c8a1a22cdab0bbd26"],["/categories/深度学习/index.html","8c282ee0a40f73244727d3d2c2cc619c"],["/categories/神经网络与深度学习/index.html","2e74f99a602f6015d627fb8e8a474280"],["/categories/算法/index.html","4121e27d0a066db9a487c40f4549e6e7"],["/categories/面试题/index.html","3d5226200f316a47235a91776a3bc396"],["/contact/index.html","c857118208f15971658e65f236982b64"],["/css/barrager.css","b5718b6b2c21efc80712d73d550e0b58"],["/css/bb.css","e899d759bd59fa1ec7861c39aa9147eb"],["/css/dark.css","d59dbde118f39f3e1ae7cd26cc2757c5"],["/css/gallery.css","8f3c0cf01d17bfd45df45c651e18a16a"],["/css/gitment.css","c56249063d9a8fa1c9a068f7fcf19dfd"],["/css/indexcover.css","ef97c61ced0e95c8b9a9337b9772e0b2"],["/css/matery.css","a949f6a0446f0509f57c4d24ef42b713"],["/css/my-gitalk.css","357a2619e5605d4efeece89088dd78f5"],["/css/my.css","7284107cd4a2feb5092273dfc3244696"],["/css/post.css","0486d465d6cd766f0feffcb968505907"],["/css/reward.css","044e93072d22a6acbd7870ea59f7c40f"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","3ea572844196f5aed33a0ff08f3ce907"],["/index.html","9032381bb35b66dee08686edf80939b2"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","f159616e12274123adf449601f46b148"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","364505f65cae8d43ef614444e69ee6f7"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","f2a7473cd157b8a17b235da2925875e8"],["/libs/gitalk/gitalk.css","b4b4b62d99e9277a7731be1c5baad6e3"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","ddc4d01e56cdbeaa7e7426eaf9c7ff25"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","56a391b9e94909d6ea75c68c093cf0d5"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","3fee77e51aa48907b9d27a88d4e2ae7b"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","ef9c5d0958f515042fd13e2d60536958"],["/page/3/index.html","f385684a39cbc66ccc070e28ebb0d281"],["/page/4/index.html","dad627f2d04bf4988125a563f612d9b8"],["/page/5/index.html","7c18373a777548f21112d259cd52913b"],["/sw-register.js","2f43a15c72baeb4850d4fedb4ac2651d"],["/tags/CUDA/index.html","14942bf7bf07fa1df42aaaf9943b8509"],["/tags/C语言/index.html","754cdef0a90ab4b628995593704c1501"],["/tags/DL/index.html","0d9f103aec2d84c7a3c196d8dd26b4b5"],["/tags/ML/index.html","d0236415a3e62eb771f344d672bd01cb"],["/tags/Markdown/index.html","5dab46c4566f7b8ea5fb9907deef49b1"],["/tags/Matplotlib/index.html","538d9178c848aa3112d1a65e4fb50801"],["/tags/NLP/index.html","2a6afbab2a93dd55d40b42b6f3ae0d23"],["/tags/NumPy/index.html","4287a151b945c6454fe9c47b252d6cdb"],["/tags/PyTorch/index.html","7433df67b1d4d61195def02927222e25"],["/tags/Typora/index.html","896e871ed6943ef69fe19259bb60ed69"],["/tags/cpp/index.html","d705e8fe419cc39aa9cb99a5b805fe95"],["/tags/fastai/index.html","40da5a11d1a277aac283180a3d912807"],["/tags/fastiai/index.html","c617188db9799d4fb74b57f099f75279"],["/tags/index.html","1bb3d54a47cc0124286885771fde7129"],["/tags/lambda函数/index.html","d7bf40a14ecf5868ad862f0c75396835"],["/tags/python/index.html","3f89188398e5c9a66d94393e0cc6531a"],["/tags/函数参数/index.html","db93181f18493b791c632d76623b9f60"],["/tags/函数式编程/index.html","a792c941c74c693ac1345c5e2dfe6256"],["/tags/指针/index.html","085c281260b3ccb2342c1311d6bcedea"],["/tags/数学/index.html","eac1019eb25f6f09f338ac74fbd05758"],["/tags/数据结构/index.html","04f2e626710a2dda8f2d335f49ae11dd"],["/tags/测试与异常/index.html","d4f5c9a414f7201eedf1baeb96c09e1f"],["/tags/深度学习/index.html","d9622c0c27f738f169dc58578f79f4a7"],["/tags/生成器/index.html","622abe2521cc511329c3706de5b10c51"],["/tags/神经网络/index.html","c83259adc93f660141a043b4072e39cf"],["/tags/算法/index.html","5a4db0fe4b181e17af8a5fa5ee570646"],["/tags/计算机专业课/index.html","961ecf4a46e336781d605c796bc2dce4"],["/tags/迭代器/index.html","a001a1da3c9c9eaad7ea95183fdee9fe"],["/tags/面向对象编程/index.html","bbd6d2590a48b1c0875d7149c94979fa"],["/tags/面试/index.html","9b9bb78cb33ce05c8e5464c25b3f167f"],["/tags/高阶函数/index.html","856aa467e297cf066f1a7b930dd72891"]];
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
