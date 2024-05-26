/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","15b64115443db32d6c176db43880b0e8"],["/2019/03/16/c-cheng-xu-she-ji/index.html","f0917205c61d231d05e5dfa869e0992e"],["/2019/03/29/c-zhi-zhen/index.html","583051dd4a7c3de254b893ee668c47fe"],["/2020/10/15/ds-algorithm-md/index.html","7d74b6e060b5ecc9e4eef8968ed3ab88"],["/2021/05/18/algorithm-md/index.html","ebacfbfb6e8b126ff157807b714378b7"],["/2022/01/12/python/index.html","4606b41fcc0adf7dc31fb9a8ef040095"],["/2022/01/16/python2/index.html","ee5a64ba372e6a850df157ac3d66caaa"],["/2022/01/19/python3/index.html","19e1b5dab0f3244488f024f72b8af766"],["/2022/02/28/c-biao-zhun-ku/index.html","bc1d34645a24c8433af88ee993c7af7c"],["/2022/03/06/cpp/index.html","c0ccc9f14ed44ed7700273ecf3a43cdf"],["/2022/03/19/python4/index.html","2a55491b421a5f7843adfc281014da1a"],["/2022/03/25/lambda-han-shu/index.html","263e3b2db81536ab94b90af81608208a"],["/2022/03/26/python5/index.html","af6a154b79ba615ab305386c8c1e3a3f"],["/2022/06/02/python6/index.html","64e54090b6cebae5a3f6fc567a5725e0"],["/2023/01/06/python7/index.html","262d14669517415ef359dc5596888fe0"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","b381df911d78a13da45ab6c653453e69"],["/2023/04/16/machinelearning1/index.html","e39ad9317e20bba3198eb7c4bfa04d45"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","cc3ea6a1ac59e6cd6b4c8fe6c472375f"],["/2023/08/08/python8/index.html","7d5331307449c9c8ff43b3d329cffd62"],["/2023/09/05/deeplearning01/index.html","728cac3aeeecad11ade43fc06a14ec4f"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","24818221deefe9f2709daa276b9b0b24"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","a975110fbc143d108b39a07c204cc9f6"],["/2023/10/13/cuda/index.html","45f46fef5f4468673d0d8d5898c4a172"],["/2023/10/14/cuda-python/index.html","57dd298439e77fdfe539aeba0ebe9fdd"],["/2023/12/21/dl1/index.html","63d61d44938fbe2196fc8e117bed4cfe"],["/2023/12/22/dsandad1/index.html","2fa585743cc3c3f72d41a30f2e324e65"],["/2024/01/22/dl2/index.html","076b756f67d4c0b147f901e7f08f9b26"],["/2024/01/25/mnist/index.html","72da2c250ca113156cd6c8da1ed87df1"],["/2024/02/26/ner/index.html","9c3215b0477238299096a83afdac0502"],["/404/index.html","7e154802200de6f31a755996cdacb530"],["/about/index.html","e966c8754e193009750e293827580ae1"],["/archives/2018/09/index.html","ddec5287c4278065a3817c4158466164"],["/archives/2018/index.html","d5495c1149541ec337e8e7bbb198a67d"],["/archives/2019/03/index.html","bc582f15ec28fc0cd96ee97f60920367"],["/archives/2019/index.html","09840c9abd65184a57d6d726fd0d647a"],["/archives/2020/10/index.html","e48a741a1bb9390651ef2287c9dc3df1"],["/archives/2020/index.html","7d55d62a955da080fe5432eff2004fdf"],["/archives/2021/05/index.html","d38d1fea8c20d753932b2a84c9a608eb"],["/archives/2021/index.html","379a3ab5a599584febc61a05eb8106a9"],["/archives/2022/01/index.html","f7699d8f74b75eac59e5153ba4e7c6fb"],["/archives/2022/02/index.html","720f816e1393fb5e5239858e223a9844"],["/archives/2022/03/index.html","f2e08429e3392a2c0ed7254bb24da411"],["/archives/2022/06/index.html","6a4ac150825dc99b017f562e6d42aebf"],["/archives/2022/index.html","61fad5c251ffdce3650b47e200b81ec0"],["/archives/2023/01/index.html","e167750f29eee1be549f5ecfa30a3dc8"],["/archives/2023/04/index.html","40964505fe606ac6fcb250a81027048d"],["/archives/2023/08/index.html","a3a58b3e3347abf4363c4285a65f7709"],["/archives/2023/09/index.html","b03cf61b7ec44e3819665a63a28243eb"],["/archives/2023/10/index.html","3b5d436f1b5152449b54199631b82319"],["/archives/2023/12/index.html","002859e62b0052c127703af3dac12d8d"],["/archives/2023/index.html","974fe22d9606e91f554ad1f223f8145a"],["/archives/2023/page/2/index.html","13fe3cf661201d9d9649f4d0661a16b8"],["/archives/2024/01/index.html","ded16c30099433859cf5a94e769ed0ca"],["/archives/2024/02/index.html","ad7e943c72691697c2aae7ed3c19b414"],["/archives/2024/index.html","660e270898e09e7ed534e503e7e4ca12"],["/archives/index.html","ff8ed5869ac12a8d2f38721a611e5a45"],["/archives/page/2/index.html","552aa63f7da4eec407d8342c41d252a0"],["/archives/page/3/index.html","b042310f1d07ef929bcbb88b706977ac"],["/categories/C/index.html","a449f79ec21c7f28c9e781875129ee6d"],["/categories/CUDA/index.html","3fcf23c9a72ddebdca2399a07f897921"],["/categories/C语言/index.html","025fce5e87dbe0c200710b55ae664caa"],["/categories/Markdown/index.html","93673c754baf70d55575939d7211b217"],["/categories/NLP/index.html","498ac5355f1beb28c5f83ff76691a28e"],["/categories/Python/index.html","0fb761defc40236dcd5afcfeb059b52d"],["/categories/index.html","951868ce7a4d6351dcb1de601c72d1ff"],["/categories/数学/index.html","95b80be9985ec4d61b4a37a4f174f57b"],["/categories/数据结构/index.html","7c03fa97560306cc43fab210067d7af6"],["/categories/深度学习/index.html","7aecd489281df18f968d2d55009aa1b4"],["/categories/神经网络与深度学习/index.html","afe1cb284e0e38b0e6bf7a1c4a3dbb99"],["/categories/算法/index.html","54f2fd953f6133c6d24b207f96b76216"],["/categories/面试题/index.html","6ac4f0fa47ce4fafddcea1c1cc18c03a"],["/contact/index.html","877d1e7cb46b7abcc84871f3d448d6a5"],["/css/barrager.css","2e3f2e36eeb50727cd0f81d2befe0bd8"],["/css/bb.css","5d86e387be52f2207f09fd926968d9d5"],["/css/dark.css","98949cfd51835ec4ccc4205c74e76b29"],["/css/gallery.css","678d54a96d480cf806c19814c22438ec"],["/css/gitment.css","17c1bb9f613fe0574a5cf448aa9ca2f3"],["/css/indexcover.css","c7dfdb633b76b51bbbf2cb1c872b1711"],["/css/matery.css","4defc3f4052ececa590909240c3a4a47"],["/css/my-gitalk.css","4be7021abb4a28b9d5b980e07512de5e"],["/css/my.css","8ab580b6ae0dc16914027e1f2e74d610"],["/css/post.css","6ef5e5564ce69104978c29fcf479fcd9"],["/css/reward.css","bee25ed7cec2668a43144584ea563b50"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","9c4427728a5dc81b7137b4147960b212"],["/index.html","24cbe66d30a255950f3b41df1641350a"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","b52939205f439f3758b8378d0623e9dd"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","3d81ce1bd530ffaa3780d5dc5fcc222d"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","b901e909b6330bec13d40e915e6a7bf9"],["/libs/gitalk/gitalk.css","442afafc618faf5ee2b06351a76e8810"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","ea53a60778f6ad23a72532b0351c8600"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","e62674fe1ddb36ccbb316914753e1033"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","d39b20c21617b01267e5d61f56d151b1"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","e827a934e5e3339d506d2c9e4dd9f38c"],["/page/3/index.html","f79020847ba5a5e47ccd3161c8849f63"],["/page/4/index.html","830ea397285fa7f256ab833b68dc6b3e"],["/page/5/index.html","35a5371480e5bdab893119fc2ac8e1c2"],["/sw-register.js","86daae3d629b310d406b5214c8e1946e"],["/tags/CUDA/index.html","c701d290ec93ce6f766352808e6bceb2"],["/tags/C语言/index.html","18b19b163e3008c815348259c4a107ad"],["/tags/DL/index.html","a318a0b1670894fa4dcbbc4bd1852a28"],["/tags/ML/index.html","36ed63399482025424b29f9f15dd0322"],["/tags/Markdown/index.html","1a7f7280bb92a29fb8fe4c445ddc2f70"],["/tags/Matplotlib/index.html","c19d91f00a40b23619db7fc1ca3cb147"],["/tags/NLP/index.html","45baa783dcbb6f0e846e29fd086be214"],["/tags/NumPy/index.html","401d9b8510ea331d7adfdc8c552cfc7c"],["/tags/PyTorch/index.html","208eb7a4a1781a450d2aa67d83f06b20"],["/tags/Typora/index.html","94b8af384bff665adc538629ca75ccb3"],["/tags/cpp/index.html","f07e95c734e1a843870510a8569e1e05"],["/tags/fastiai/index.html","422cd56cbf82df3832a556d4531a4e7c"],["/tags/index.html","6310457f0aa089223f468141de2c2d96"],["/tags/lambda函数/index.html","390ddd4f8a4f081ba18d7a8437d83d30"],["/tags/python/index.html","a8b77182ca558b4544ee6d8bb4aea648"],["/tags/函数参数/index.html","c544f1e892328174637ab2187123a78d"],["/tags/函数式编程/index.html","d596d148786589922d6243288472687e"],["/tags/指针/index.html","8911f9eae46501d7519340268c01e15a"],["/tags/数学/index.html","8f445c179342dffc4461cef0d390c82b"],["/tags/数据结构/index.html","bde70105fb008da0514eacd3658f5497"],["/tags/测试与异常/index.html","35dedf87d3de39a8f61f56fc4ef7f65d"],["/tags/深度学习/index.html","013038671669b6e959c0c09d85f4f914"],["/tags/生成器/index.html","616889548ac91a4b14d6ce9c2cb0f92d"],["/tags/神经网络/index.html","ff48dc4a79a623c1fcd3979852ebbc9c"],["/tags/算法/index.html","f35e869e5496bc88cecffacaa8e3bd89"],["/tags/计算机专业课/index.html","e1888c2afa96bebe4d31bb67b305b6f2"],["/tags/迭代器/index.html","705465bd410a63870f86c8a265d78500"],["/tags/面向对象编程/index.html","ec540b828b6879f037a4a9b7638844fc"],["/tags/面试/index.html","68e201dbde3d5effe00a04c6c5c676d2"],["/tags/高阶函数/index.html","27428de5c5631d459fc7d29c066dd2ee"]];
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
