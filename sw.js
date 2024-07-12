/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","791b281316e4a7c1eb2e40d9dc1d62bc"],["/2019/03/16/c-cheng-xu-she-ji/index.html","a29154a01bf130cfc76d7c87a564be71"],["/2019/03/29/c-zhi-zhen/index.html","ca4d3f26eed512103781d8c4b773e8c5"],["/2020/10/15/ds-algorithm-md/index.html","ac58509561f71c054196ea432c635b23"],["/2021/05/18/algorithm-md/index.html","67112da5ebe635fae3204e71d5627e92"],["/2022/01/12/python/index.html","77bd40ebaa81b7bfe9e8ab8e8b6d5d86"],["/2022/01/16/python2/index.html","10b82a18648aa1862937f154d2f4c159"],["/2022/01/19/python3/index.html","40248d73010a66667e2694f3bdb9eeab"],["/2022/02/28/c-biao-zhun-ku/index.html","3ce91fce27a94d6f304c3b7cb67939fb"],["/2022/03/06/cpp/index.html","d5f528d10dd0b45fed27fd56c93cccec"],["/2022/03/19/python4/index.html","972c60a0d6aff0756c4c856b63990c84"],["/2022/03/25/lambda-han-shu/index.html","80d8facc3855479d465333b326ebdc06"],["/2022/03/26/python5/index.html","82bc36e2824694594f1daf8f051a3d8d"],["/2022/06/02/python6/index.html","67fbf8144cf07dc7e02355ed6c15f966"],["/2022/07/12/springboot-0/index.html","7e94701e66783998fb68af3256773dc6"],["/2023/01/06/python7/index.html","11db96107915526ecd9e51659df601eb"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","0f4dada260cbe9f54b296e686a5cc742"],["/2023/04/16/machinelearning1/index.html","28590b4ac80c2df12040a782b1ccdac0"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","42d0595fdfe0544cb706326799eda0d4"],["/2023/08/08/python8/index.html","fe47dd31791ba03a24e47b84932b7904"],["/2023/09/05/deeplearning01/index.html","b983aa7a06394524e58d9e051888eeac"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","75af8b4b326354c30f982ee8b97fd9f9"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","02e7c095c07fdfa142cd21cb93990aab"],["/2023/10/13/cuda/index.html","b2fe410d4504f7119d0900ccce7ed65e"],["/2023/10/14/cuda-python/index.html","e1b326c32221e49f3294766f853600f2"],["/2023/12/21/dl1/index.html","f477a46cf23762f83f45f30381dad590"],["/2023/12/22/dsandad1/index.html","9a7d62c2f3331441472460e097b9d161"],["/2024/01/22/dl2/index.html","2f3ed27a2ef6a512d13abd30a441f281"],["/2024/01/28/production/index.html","719e6e8ff1cf2139d8dbe03a41acfdc6"],["/2024/02/25/mnist/index.html","cd110114792767d74c1d37a3e4af1859"],["/2024/02/26/ner/index.html","7a0c3b50b9fb9939b3b71c298bb43fc9"],["/2024/05/26/multicategory/index.html","718b91367d548f7b9a07c698d26bd350"],["/2024/06/02/regression/index.html","2295fabfd5d296ece7ae5db790456eea"],["/2024/06/03/imageclassifer/index.html","af22396e81a855a49f7e37cf5bafcd7d"],["/2024/06/03/nlp/index.html","cefb6dd72e83ca140219c45282584956"],["/2024/06/10/trainsoatmodel/index.html","402a536dbc1430c429d7cb3cbda29d64"],["/2024/06/15/collab/index.html","975f68a06b8027c9e67ebc057c3e2ede"],["/404/index.html","aa0dc43ccf7f064acad9622542a7ef39"],["/about/index.html","5d6e001017bc14cd90ffe047a49eecea"],["/archives/2018/09/index.html","058fca96ee89cf3d5fce49f41edaf8d7"],["/archives/2018/index.html","e3f2561abf2ae129745daf8c4e46c285"],["/archives/2019/03/index.html","5dd9c0b1491c4c3ca7dd8385bb26591f"],["/archives/2019/index.html","c85cb839b7abad06e2db9b150605ff37"],["/archives/2020/10/index.html","c33f41b6bb7bd834e353c4989573c49d"],["/archives/2020/index.html","0e93bf4d76493522b2656945f832df21"],["/archives/2021/05/index.html","92377fcf3a0b250a31b96496649f0562"],["/archives/2021/index.html","64410bba9bfa6f9a64556c69b0e9f8c2"],["/archives/2022/01/index.html","dd2bcf8abee9dcd5dbc424b7e8995c41"],["/archives/2022/02/index.html","6142a1c95f83c4c52e391c03e139b0ae"],["/archives/2022/03/index.html","17842dc9243eb18600d060dfa5bc8379"],["/archives/2022/06/index.html","94266f5d6ee8d5154a75064f4b7ca284"],["/archives/2022/07/index.html","75eebbfc74d1e53fa15f43846c98bbe3"],["/archives/2022/index.html","ac7eb0739fe83b226c2b178ec7193429"],["/archives/2023/01/index.html","64289b2ddaa3414db623b303924a5844"],["/archives/2023/04/index.html","e1d6dd35eaba91efb228f54b0f99f634"],["/archives/2023/08/index.html","ac186125c0dbe841cef851db3402ea56"],["/archives/2023/09/index.html","2c89dce8aa8c786d4a73785279c64bfe"],["/archives/2023/10/index.html","e85abdc2589aa2357076e74142abfdb2"],["/archives/2023/12/index.html","6b55a185697d1005cafa0362acb08441"],["/archives/2023/index.html","10b4f0039fbfea1a8d87a2599ca24a97"],["/archives/2023/page/2/index.html","c8b871d768badbe0f91efc88dc1acbe8"],["/archives/2024/01/index.html","2879a527341df65313083a92e79a86e2"],["/archives/2024/02/index.html","d61341618ed05e2f1cde6a397f294395"],["/archives/2024/05/index.html","ebd29003b7c1d03b1e2149079a2c8c66"],["/archives/2024/06/index.html","7532b2f4df1b81c63b8955903d20dce6"],["/archives/2024/index.html","661bce5fe2a0c66350fe7c516c359784"],["/archives/index.html","38e7245a0dc384849b1c9cbf904b4f8a"],["/archives/page/2/index.html","9cf7c5e38c3f47c452975046594b5d62"],["/archives/page/3/index.html","56b48074bd3f888866188ecf0a59ead5"],["/archives/page/4/index.html","91ad4eb581996a6f8d772ab051a39311"],["/categories/C/index.html","802d15e9f807ffab03398d120ef8bfa8"],["/categories/CUDA/index.html","2badc5400ae4f3c8249e3d458b032e31"],["/categories/CV/index.html","4396b91a6f3aa9dbe91a3b2de1cec0b1"],["/categories/C语言/index.html","f0718a0f4c177788db90b9f5f0c34119"],["/categories/Markdown/index.html","6cd47d330e65e299adaefb61d593194e"],["/categories/NLP/index.html","d7631d0461d096e7580fa0c1114ef387"],["/categories/Python/index.html","2630bcb851b49c89abbfc84f51376113"],["/categories/SpringBoot/index.html","c070fa25e873e3a1393d7400b06ced7c"],["/categories/index.html","e491f3b1e22191bda2c21767e72eb8a6"],["/categories/协同过滤/index.html","66220774059744967d739052cec0da0b"],["/categories/数学/index.html","eeb21a302bd63490f8010881a037d381"],["/categories/数据结构/index.html","3eda31ab987cfbf905a6fdc5ff3b711d"],["/categories/深度学习/index.html","185ba8fbb4ed11fbdaad30d1cd305bbb"],["/categories/神经网络与深度学习/index.html","2dd8fa43efa611f6759b3a01bd1aa1ff"],["/categories/算法/index.html","82c8e8047b0032d73cb235c0d1af144b"],["/categories/训练模型/index.html","bc9ed3c1b806a5e528cc5ae6c6f408d2"],["/categories/面试题/index.html","37ef153e4fbd9f2e6b193b0563aff9e7"],["/contact/index.html","80450d48b7004d672e36788f6d2e4ce3"],["/css/barrager.css","6c2c59015ec20aa1676107fdaa30d2a0"],["/css/bb.css","d8f17027333f838eae37e9fe933b11f1"],["/css/dark.css","25a9a011505cd5f0446ac9757c5056ce"],["/css/gallery.css","6e912d8e52afbe83928f8365e752f17d"],["/css/gitment.css","916b2947f5bc547b170b1210900ccc45"],["/css/indexcover.css","c3b30fac98e10a04a0d7f045b406ef56"],["/css/matery.css","7fa86198f92ee13d0a4f965735af0862"],["/css/my-gitalk.css","9437692495ce498fae6e2b1a305861e7"],["/css/my.css","a0271907259c992b7d781cc6497117d0"],["/css/post.css","33137ad696ce6e73bc7ffd0d4e1d1ea6"],["/css/reward.css","70800f5dbf2448ca9963a776890b5bb3"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","04240d0a9125dc19584a84d1c46abb17"],["/index.html","67c484505ce38241d5052a05a2c17941"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","bb7dbf281e12fc08933bb67a63c3b540"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","bcf8c080d170dbbf92149222e0415d70"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","5fb73dea5470f0cd76f2338ffcdb2fd2"],["/libs/gitalk/gitalk.css","e57c7749131eed955f193ebba3c7db1d"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","033c14952ee382e24ea60cf5a421a877"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","4ebc14401e3e3a9152739acd4f8974dc"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","911cbbd1ec3832cb5a6292fd73c44f7e"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","367a11f18f139c3d75ee7bf0973e452e"],["/page/3/index.html","98ad6f65a0e224dd923c5eab0f1fe11c"],["/page/4/index.html","449d62c4f199b53bc8b67e7803bab89e"],["/page/5/index.html","7a773f2069fc11bcf318d93310f47e9f"],["/page/6/index.html","969f2bdb33a3ef3b56acacc8efb58b18"],["/page/7/index.html","fff1c2b6f7684d17771e974cb207eed3"],["/sw-register.js","2de86ed9275e7b7992a2b5548627fe2c"],["/tags/CUDA/index.html","eaeb3953b44bd3210d62c4dfbdeaa27c"],["/tags/C语言/index.html","f29282c76a5aa08de1ac2bc586ab41aa"],["/tags/DL/index.html","8d0d2ac5eb4ae29255f3c0f45a06cfb2"],["/tags/Java/index.html","b982898210e8f3164d425de60618c25e"],["/tags/ML/index.html","e17a657e8c6206fb503c65677acc4309"],["/tags/Markdown/index.html","1112f0cab0e6bc1bae89696902d2bc85"],["/tags/Matplotlib/index.html","6960d18820ef27c756c64fc7a626dd07"],["/tags/NLP/index.html","7a5b50c0dab09ce819d7806393ba49e9"],["/tags/NumPy/index.html","69278743f4bea139628de7b8de6a5412"],["/tags/PyTorch/index.html","0f7c346b079d5c801d398c14fd964110"],["/tags/SpringBoot/index.html","b91971b5e859ad495ce7af6f6bf42948"],["/tags/Typora/index.html","916059000af46089c1d84d66f2e66402"],["/tags/cpp/index.html","aefe3619cae79dabbb8f076e5c2ba503"],["/tags/cv/index.html","7c5c002f8536b375c7a265e33a93df05"],["/tags/fastai/index.html","993abdea7a5345250dcd59d743c03120"],["/tags/fastiai/index.html","6355ef6702dd1a9423657231e3ad5a79"],["/tags/index.html","7089208cf146d14ab17e222932bd0d89"],["/tags/lambda函数/index.html","f06a6c4bc44646e324d3fc2734e27f9a"],["/tags/python/index.html","9ae6563d89d228fa9a2d0f0a7a4f8700"],["/tags/函数参数/index.html","a1c30a9152d57d28cfc7df50428631cc"],["/tags/函数式编程/index.html","52f9077e87126e797385603f1a99fb37"],["/tags/协同过滤/index.html","c8a101f3760256d92c8155df82f4dcfb"],["/tags/回归/index.html","e05a995f267fd65f388e86c3d0bc459b"],["/tags/多标签分类/index.html","3b0b7a25054e42e4860049e854be15fb"],["/tags/指针/index.html","c4c4453f51b74a620fcaf11fd969de69"],["/tags/数学/index.html","2c8748d77a6dc557c0a7cc82d7956ade"],["/tags/数据结构/index.html","2099401a6efa6a82038953c2337a6981"],["/tags/模型/index.html","d18dd552283294cb4f67f4e193a7444e"],["/tags/测试与异常/index.html","d0c21f873cac974912a4aa7076c1c38a"],["/tags/深度学习/index.html","eead33057d7be4376d691d705a5d365c"],["/tags/生成器/index.html","a9359ee764aad8cf63e8efec530394a6"],["/tags/神经网络/index.html","972b9a8a95fb74cf7c07c970011faed1"],["/tags/算法/index.html","a9632aca8062b4890f5d5f88b31d61de"],["/tags/表格建模/index.html","0ff429c68f65b12aad45f58fbe549997"],["/tags/计算机专业课/index.html","8967eda7ec2411a49ffa51c878633c0a"],["/tags/训练技术/index.html","09021b47c3ed58c3684a27aa48ff81c1"],["/tags/迭代器/index.html","448d90c5de53f0288dd06a748dd179b2"],["/tags/面向对象编程/index.html","f96fca3fb7d5400afd296c2b45454ea1"],["/tags/面试/index.html","66562b267f11191fb1f5f19755f2d26c"],["/tags/预训练/index.html","6eb8ba3235447195360b21e912bb3176"],["/tags/高阶函数/index.html","38c276498be03df49f337537db92efa2"]];
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
