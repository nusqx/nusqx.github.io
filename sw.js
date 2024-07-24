/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","1360beebd6cd795e428c61594b2daa44"],["/2019/03/16/c-cheng-xu-she-ji/index.html","fe2144f263194ce943016c27667cc50f"],["/2019/03/29/c-zhi-zhen/index.html","b1c456c07c19f5d5d82abd17f57bdbba"],["/2020/10/15/ds-algorithm-md/index.html","00f447e1b7d2e9630ce027dc9b781045"],["/2021/05/18/algorithm-md/index.html","fee9c2d18d946c13cf74a39c2de8c342"],["/2022/01/12/python/index.html","fbe37f6f142ea27ae87de41c620e6393"],["/2022/01/16/python2/index.html","3f3f58cf49e2c11273fb364b5f54e057"],["/2022/01/19/python3/index.html","a4853e68f63aac609c9fa05fe58d723a"],["/2022/02/28/c-biao-zhun-ku/index.html","c3903574f2308b8174b67725b1f55cc8"],["/2022/03/06/cpp/index.html","04ff004a027e128b7353f47dc0a7a4ce"],["/2022/03/19/python4/index.html","bf77e76dbf9e829baf00af65f03b393a"],["/2022/03/25/lambda-han-shu/index.html","8f53ba77eeffa40765eca853c630e1d1"],["/2022/03/26/python5/index.html","31e5ba47be47d17c72940aaa30ed1ba7"],["/2022/06/02/python6/index.html","0c3c9d2773d68c9fb7777eee71967428"],["/2023/01/06/python7/index.html","96cd51709d6a9bedefddc63a733df1ff"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","5fec9cc7dfdaccdd9128b101e6d0ae39"],["/2023/04/16/machinelearning1/index.html","b024119a22b869e4b96429f73913f39c"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","aefc096c095a88bf621038ee5f52a10f"],["/2023/08/08/python8/index.html","c071c9130df7143d15f07680e48f9eed"],["/2023/09/05/deeplearning01/index.html","ff2fa65355657144e002e37155833c46"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","626949956b496e002d79eeffe20b9e22"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","ac1fe8b84774f91fcda760a0f4c4bbf8"],["/2023/09/26/springboot-0/index.html","93a289fb7ba4a670e256f4002a5cd722"],["/2023/10/13/cuda/index.html","0ae367b00b92eb89e32c84d352fb4d57"],["/2023/10/14/cuda-python/index.html","a3562d4df84f5aa640ee35026b424d94"],["/2023/12/21/dl1/index.html","ebc36bca4a4e52b4a578b1d94509224c"],["/2023/12/22/dsandad1/index.html","1e99fb4cdc389d88a3248be95f209d38"],["/2024/01/22/dl2/index.html","6cac80a86c16de4e641ec2c73a6e9009"],["/2024/01/28/production/index.html","8aee2f629a9f6ca15a1e6957ad814ba0"],["/2024/02/25/mnist/index.html","f520368edccb5522d14941ab2a78a917"],["/2024/02/26/ner/index.html","ba312720a8283af803736941c72cc738"],["/2024/05/18/springboot-1/index.html","84bf2dec107840ee5e802c7cefc963d6"],["/2024/05/26/multicategory/index.html","e140ddd8f732c670eaedf7d161576a21"],["/2024/05/28/springboot-2/index.html","e803e2ddbecf2629002d45fc248f4165"],["/2024/06/02/regression/index.html","b7cc57a80ad46b93219a5b63de7fa8a8"],["/2024/06/03/imageclassifer/index.html","dbfe4e74e9f2bb5e79a28a8a39cd4118"],["/2024/06/03/nlp/index.html","707f5a83a79f623f4f15ee7b1791bdfc"],["/2024/06/05/springboot-3/index.html","824a71a735e41cc3e1064492535e464b"],["/2024/06/10/trainsoatmodel/index.html","43809c2cd04399c64b2ef22bcaf93925"],["/2024/06/15/collab/index.html","4cbf7b08d86ca1b2acb4b47295fe2ae4"],["/404/index.html","25842dc1a15995453d48511c584cfd89"],["/about/index.html","178f9af20a25bc1889620bb300704399"],["/archives/2018/09/index.html","96fcc124e2ae4aee9839872ddaf4e0d1"],["/archives/2018/index.html","908126057ee1fe5923ca964e440dbb76"],["/archives/2019/03/index.html","435d54d7096e3d508080361eeb42f5fa"],["/archives/2019/index.html","13609e6e4a7ccf375577e200041c2620"],["/archives/2020/10/index.html","a10333b6edff0372d2793673d3ea8a24"],["/archives/2020/index.html","b7a9bd946d2ebddbbbce373455a02b37"],["/archives/2021/05/index.html","4675942b60f734ada91358b0ee6d6b3d"],["/archives/2021/index.html","fb78746571cfb3a6af3ce06ca37ea451"],["/archives/2022/01/index.html","9a461575415e4512ff4449096470aaaf"],["/archives/2022/02/index.html","90b792394ad725fc93ffcce4719d9de5"],["/archives/2022/03/index.html","4b0402a685e9483ae1aa1608d1e2743b"],["/archives/2022/06/index.html","96e6821a82f2d67a4504d8afd4224481"],["/archives/2022/index.html","706e1f65c0bb314f52eebf7baab37000"],["/archives/2023/01/index.html","48ddb0318d8f82e8a3c0d4322f2ed6e9"],["/archives/2023/04/index.html","c029807b69bdf836ce4f363589f3d501"],["/archives/2023/08/index.html","94e5cac372818e57eb6ce9e7c3cf765d"],["/archives/2023/09/index.html","5e0b371bb4ec855e2de5b830784017cb"],["/archives/2023/10/index.html","5dedecfd38e3b8b253a9046f136b0150"],["/archives/2023/12/index.html","a61e651032b09f091d8e82d762ac0639"],["/archives/2023/index.html","97773995eee0213155af7e6db13f0d53"],["/archives/2023/page/2/index.html","2b11df71778ffef661bb7de6dc45a395"],["/archives/2024/01/index.html","79b1ea441dd139f1af0ac29fa77f6a41"],["/archives/2024/02/index.html","faaaea1ce5d1e73e0768b4c9875bd548"],["/archives/2024/05/index.html","7fdd29a27fe5154e90b4c21375a5361a"],["/archives/2024/06/index.html","ede2d86ec318da649a88ceabddcdd651"],["/archives/2024/index.html","fa98a60a807e6702ef34bde76e264d86"],["/archives/2024/page/2/index.html","a5f778053f604ed62c5f51c4975c3dae"],["/archives/index.html","afbf04bbee7ae48de3ec333de8714ece"],["/archives/page/2/index.html","26c511f9e026be0e11f73f56121bc1f2"],["/archives/page/3/index.html","8b88c050cdb30b7d6e24d090c905bac7"],["/archives/page/4/index.html","3a14c59f85710c6024a704d5a38231ee"],["/categories/C/index.html","21dde576054a450f91f0a01bcc43e55f"],["/categories/CUDA/index.html","82b53194b401ceab6bb50e348adef55c"],["/categories/CV/index.html","21bd909d7567c8324bcf530aad8877fa"],["/categories/C语言/index.html","a0af270efb1c0f56dbda36f467f5ae22"],["/categories/Markdown/index.html","375d07dd0f0cbc4b957cb066da8dad28"],["/categories/NLP/index.html","3a3a7dca890c02de31d9a7910191bff4"],["/categories/Python/index.html","aa68788a2ea6bf1cdb11166d70b6a464"],["/categories/SpringBoot/index.html","95605178cf122bc2a7f0ac67d3f95c90"],["/categories/index.html","913abd0556afd3fafe5e6a007bfc4509"],["/categories/协同过滤/index.html","0fceb0458df447b7a8ff38f535f236dd"],["/categories/数学/index.html","841d65dc105f1ea9476999997e906e43"],["/categories/数据结构/index.html","ed2b6a4111136472106dc4258f70cd61"],["/categories/深度学习/index.html","abfc34d006a13fcc16da582294bc985c"],["/categories/神经网络与深度学习/index.html","8fb43495ab108ddbd5396402db7d41b7"],["/categories/算法/index.html","afb1fd9f408c69927d76df1d8145d555"],["/categories/训练模型/index.html","c161ea503f50991219d956c29be5512a"],["/categories/面试题/index.html","1e48bb1088227c13f14f42759f0dcd01"],["/contact/index.html","039af0c013c2b46b740410d73231c763"],["/css/barrager.css","4648928194fb9e526dc32a2d2ee117fd"],["/css/bb.css","f5e5e1b5359b8880d2774d3e7e049e5e"],["/css/dark.css","a99cc6cf7c3c8bf6fe54c1293447982f"],["/css/gallery.css","4158d507214d55799b78a4c2f50e83b8"],["/css/gitment.css","82561eef5928ad67e4a9f83778d9e12a"],["/css/indexcover.css","62e30d872385a041ad21bfa0abe71a77"],["/css/matery.css","1bfe0d5fdc4116368bfb89de40a193b6"],["/css/my-gitalk.css","e1f4af67f7bbbebbdbb4d1243d6ba9c4"],["/css/my.css","8c11d3767a9fd59696bced0125d66cfe"],["/css/post.css","8c6fe833cb0affda311ad892c74510d8"],["/css/reward.css","b822b6bd25a7f212d5df5f8b3e999514"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","9be02cc130f67341e1b65ef4b66101c6"],["/index.html","f9aee4b979986b56643076bb319d5481"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","7df2f5064d1b474c6b6e2f69138ab2fb"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","5687115a6fe7f3da99e1f4e830c0adb2"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","99a3d208c19fafdd70c87803aa9aafac"],["/libs/gitalk/gitalk.css","4a08d654e855d8f86f72b0a89f392f47"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","9e8ea04f2d15341b64d0e1d221c9d512"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","362002acc9137a4f769b2a90d74f435e"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","1762b9c57d81f1a71db9bfc7b979349c"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","7ac90b13e98b97ba100eaee6641e9505"],["/page/3/index.html","2c754690623e7e77227103fbb43df101"],["/page/4/index.html","15b7d14aa5868e4900e1453a6ef5b90d"],["/page/5/index.html","92e1a95f565ce814661b7e361638e6a1"],["/page/6/index.html","4fbe5aad30fc52175eb307d62a5487ff"],["/page/7/index.html","ddb48538a321e6a8361ec342804241a4"],["/sw-register.js","966eb91937b77beb6167a3a4950e4d2e"],["/tags/CUDA/index.html","a6c7139f5052840f12626506c6440848"],["/tags/CV/index.html","6a4202e275e7a95d85db988d4face588"],["/tags/C语言/index.html","844592db51963744696a4fbfed06be94"],["/tags/DL/index.html","05ad763092eefde41a09f42efa3227a1"],["/tags/Java/index.html","a398ece45bc395311c993020a32e12e9"],["/tags/ML/index.html","7ffc27dc35150b5216ab59e67887c450"],["/tags/Markdown/index.html","17e8f3431ccfccd3712893062a24dc4b"],["/tags/Matplotlib/index.html","01a9f674205b61fe3c466490d0047ed2"],["/tags/NLP/index.html","a795b34de0802c2d32ef1e2f805854c6"],["/tags/NumPy/index.html","f84eeb081ba28bf54d932b790699bd2b"],["/tags/PyTorch/index.html","477332bbcf1ff523fbe0ec720e01c84f"],["/tags/SpringBoot/index.html","e33d849f7233a2e4029ab51ddbda9a49"],["/tags/Typora/index.html","123cc4e0795cea24457350554cc7a189"],["/tags/cpp/index.html","77e273e7520d4823c701af4ad9945bdd"],["/tags/fastai/index.html","c9c30b955cfc6f2028acb2d6e1a22188"],["/tags/fastiai/index.html","93a1fa17dda29875b5838061b7bd2b61"],["/tags/index.html","5884c999c533c34152a9787a1b17c1c0"],["/tags/lambda函数/index.html","7cb76415055d8336ed23978e3136275e"],["/tags/python/index.html","a529a132f4ec76a72f8b84d098cce1a8"],["/tags/函数参数/index.html","e3f49aaa9a8778cc2945c2c9445e296d"],["/tags/函数式编程/index.html","d154da70b9825a341f364f96c20e836c"],["/tags/协同过滤/index.html","8874147b2f472ed63e21d1660522a29e"],["/tags/回归/index.html","aa709a2c644a76638c7df34c498885de"],["/tags/多标签分类/index.html","e45acd5ed6f007cfaa10aa2824eefae9"],["/tags/指针/index.html","3c19e68b853a61308a6f830108d32637"],["/tags/数学/index.html","bf1a9ede3d9706608822d9c4bf8cc0e9"],["/tags/数据结构/index.html","195a3bfb4abdc926d82ed4f748f05265"],["/tags/模型/index.html","30ff17774791e985e453fde2c1c4b16b"],["/tags/测试与异常/index.html","b345dfb3423793bcb361c33a0d23ec51"],["/tags/深度学习/index.html","31985fb87c2378d23046708b829c9559"],["/tags/生成器/index.html","e6cb3640c10beab4185e657e165f99d7"],["/tags/神经网络/index.html","023aa933b5d77ef7f737cff5f5180837"],["/tags/算法/index.html","eae108c5b8ad92d2fb6fc0ca64d01bb0"],["/tags/表格建模/index.html","f830b93bc2447878eca416584afb5a58"],["/tags/计算机专业课/index.html","6ebc12e1fc1dfeb04b0cb303abadf357"],["/tags/训练技术/index.html","1932881f9fefda94943e43deccdfb3a8"],["/tags/迭代器/index.html","13852f5dc9621b382d84bc5b20b48f36"],["/tags/面向对象编程/index.html","9db3acb83e4fbd6b44c0d9a0253ca2c3"],["/tags/面试/index.html","84e246042d360c2ae4649745aad3242a"],["/tags/预训练/index.html","747292fa09bc009954d2c2e555f7d89f"],["/tags/高阶函数/index.html","5aa37ab94dca33ed9c2b7130218a2479"]];
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
