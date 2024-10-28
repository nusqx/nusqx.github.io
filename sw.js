/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","1586ab71b252cae5665eaadde87e9d88"],["/2019/03/16/c-cheng-xu-she-ji/index.html","3aaec218e49b6ec1e85dec00886e65b5"],["/2019/03/29/c-zhi-zhen/index.html","ed032db0994081a077a6164a0788a0d9"],["/2020/10/15/ds-algorithm-md/index.html","c9ff15fb60bc74d69be43a8ae7f0f62c"],["/2021/05/18/algorithm-md/index.html","c8c2644b2a298503a0b0f698adc8707f"],["/2022/01/12/python/index.html","aa745f3dc0bb6328ff7e853664f6ddac"],["/2022/01/16/python2/index.html","ca589ab33f0a49b405c6ff7506a7827f"],["/2022/01/19/python3/index.html","769cf25f466a873676d2bed6c1e8d166"],["/2022/02/28/c-biao-zhun-ku/index.html","b268609b0821f99cf296102a764feac8"],["/2022/03/06/cpp/index.html","4bb59909bf5493d907070ead13dbe76a"],["/2022/03/19/python4/index.html","69fe7ab80b0967d2d7860a392bdd4e82"],["/2022/03/25/lambda-han-shu/index.html","338c4d23d0796ab01d8920f4653ed3e1"],["/2022/03/26/python5/index.html","a28b501b6052dce9675d11bbad701677"],["/2022/06/02/python6/index.html","4211cce1838cfc5c79a235564f000835"],["/2023/01/06/python7/index.html","d7c6b5c67842a2d1d935d060599d927c"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","e093a8bb1c4b8c04d17d84ee36373a8f"],["/2023/04/16/machinelearning1/index.html","ccf4c0be2eb94372a15dd1f6fbd441dc"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","960241bc95d609dc1b2f578a8fe2d3e7"],["/2023/08/08/python8/index.html","d71d77ccf42ef7caeef3c9383c34c4e8"],["/2023/09/05/deeplearning01/index.html","4d82f1ffc60cc964d1c9baee8537e55c"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","1c775abeca71cf1e988a6f11c96903da"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","3629de95bc0954a593ef259600d34cf2"],["/2023/09/26/springboot-0/index.html","2e72bcbaef012ff375001427e3282ad3"],["/2023/10/13/cuda/index.html","58b6fdfcabf63c73a6962a42df979995"],["/2023/10/14/cuda-python/index.html","3d232d8417323c76b33e3f59ddad3fa0"],["/2023/12/21/dl1/index.html","001fa123d56244de753ce3ad61259ac1"],["/2023/12/22/dsandad1/index.html","8045acdbf1105488909966f86ee8c212"],["/2024/01/22/dl2/index.html","efcafb2079e57f78a6417a654d96d8b1"],["/2024/01/28/production/index.html","b4f9e7df3d365a04697a0b1b5b3e8330"],["/2024/02/25/mnist/index.html","ca75c27aed927329feabc45007068b1d"],["/2024/02/26/ner/index.html","952fad2dfcd5a54bee1cc4c47b4011db"],["/2024/05/18/springboot-1/index.html","6e9677428e30e4da99619454c578bcba"],["/2024/05/26/multicategory/index.html","1928cbde6e86f30ee8aac8a691f3c7ac"],["/2024/05/28/springboot-2/index.html","c104c06472fbb157c1a805928d370ea5"],["/2024/06/02/regression/index.html","9baec4d292e164f800762edf7decdbd7"],["/2024/06/03/imageclassifer/index.html","417b8da527902288275b641657b5b10c"],["/2024/06/03/nlp/index.html","f50a8218d708d0c27a639cfe6a9012a9"],["/2024/06/05/springboot-3/index.html","a0f9964ea5414dff554444054ad769dd"],["/2024/06/10/trainsoatmodel/index.html","944acb92e4d1d60816c17b425b0149b9"],["/2024/06/15/collab/index.html","fe14a1afac154736fd627e864ac81a63"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","a32e16477ba23b3d980493186963c934"],["/2024/07/04/vue-qian-duan-an-li/index.html","7486f2aa3063bfa0f0f02bbdcaee871c"],["/2024/07/05/element-plus/index.html","a2b612a27e88174c77d08da6d43b6501"],["/2024/08/10/vue-kai-fa-an-li/index.html","ca9f6e432e9e1c7c2237a8849874503b"],["/2024/08/26/ddpm/index.html","f86edb3468cdeaf3f0ec237e93e17793"],["/2024/10/15/redis/index.html","3df642e65d9241aa5e771ac0e894f1f7"],["/404/index.html","dd421c45d79a56d5dd6c66e47f3b5d5d"],["/about/index.html","04f188de985b1affefee58522e8c55e7"],["/archives/2018/09/index.html","73e9d2fb670adc3e2ad0e54006ef1549"],["/archives/2018/index.html","66b5ea97bdeb3dd00421369f53dcbba3"],["/archives/2019/03/index.html","6712b0a18ee403dbf3592fd8319d131a"],["/archives/2019/index.html","d2f73ae9e12ea6df9f3ee9b11706f3d7"],["/archives/2020/10/index.html","b5283e050604274a079bd097d13ad84b"],["/archives/2020/index.html","0a71eec8e416e640943eefcf1274c22b"],["/archives/2021/05/index.html","581272f5ff8bc0112e76706cfce1a783"],["/archives/2021/index.html","9ce67e251a65affa41cee7afdda98137"],["/archives/2022/01/index.html","382a116c07b1be34053bd07f07bc17e9"],["/archives/2022/02/index.html","40f3772d409a99cc3b648ca215b82706"],["/archives/2022/03/index.html","d5bf5798ef83a68139ed2ea4391b6934"],["/archives/2022/06/index.html","3e16689edd4373867bdb6cbdcfccf6c3"],["/archives/2022/index.html","d3075ba273b66cc3ceb5ae88895c1239"],["/archives/2023/01/index.html","8821ec20e2127032125b49b6447e60b3"],["/archives/2023/04/index.html","df86939cb3c91a017722054bba7dad58"],["/archives/2023/08/index.html","1058ebdb2cf687e54a88b2ba34caeb6b"],["/archives/2023/09/index.html","58e766265da8da8716f5b960756f84cd"],["/archives/2023/10/index.html","12b6a140a17492cfc4a8c8400d812f7b"],["/archives/2023/12/index.html","85e12e9c7fc04f4da128b3f3d68cc497"],["/archives/2023/index.html","77e4189b100d214f6d7d0ffb0ba2b969"],["/archives/2023/page/2/index.html","057cbf531552d0a8fd2ae79a46de8e4b"],["/archives/2024/01/index.html","f96e154a2b307f9e3697457393874065"],["/archives/2024/02/index.html","7bc31547e565254ba9e03b89b643179c"],["/archives/2024/05/index.html","33641e00fed680da1beea6b200e35413"],["/archives/2024/06/index.html","741fd910cf37415fd479ebb4793cda49"],["/archives/2024/07/index.html","ff8e7515e40f8468a641818f552f581b"],["/archives/2024/08/index.html","250ef9a34f8dfa825b53324f82c94600"],["/archives/2024/10/index.html","a873aca7780e33c2d61a1f03477ac56a"],["/archives/2024/index.html","e68c74542828feac5ca2bbd3c3bf290a"],["/archives/2024/page/2/index.html","3e31cec123a25e42c1b0edbc0af89ad2"],["/archives/index.html","385a450e6d83f49216e1d5e7b58d65a0"],["/archives/page/2/index.html","2060dcf2c5a99a9ad40465bcc21b3261"],["/archives/page/3/index.html","57584f97fb65918e9e6d18ab6c8bbf86"],["/archives/page/4/index.html","029b2d5746965d78f09d23d4b25fd9ab"],["/archives/page/5/index.html","e497053a00918c4819d12e62108bc745"],["/categories/C/index.html","3a63f2fbcfb02fd0499cc3d98c77467b"],["/categories/CUDA/index.html","51f53ad4d4c640f5f41d4c17379222ae"],["/categories/CV/index.html","9f41cfe3f0619faa9dff095b2a9e8c3d"],["/categories/C语言/index.html","b30ba607f68439e56660dc3ece9fa56e"],["/categories/Java/index.html","4632bd77ae25950a41741600da1b47b4"],["/categories/Markdown/index.html","551c3f2ffeb556e74ed80e701d4490f8"],["/categories/NLP/index.html","bd0a7258f40e6fe558f2e62f3fc90211"],["/categories/Python/index.html","493812e6502f7a18b06557a0822a4a85"],["/categories/SpringBoot/index.html","7d44705c53decc69616b0edfd08528e1"],["/categories/index.html","27cdc2a14b06d46f758bec2d92acd631"],["/categories/前端/index.html","57c8096c37fe08fea7998d1c7f335981"],["/categories/协同过滤/index.html","2b1458f1f7e3c92d91f449f3c36060d1"],["/categories/数学/index.html","bf42d3577b4d6d7bccac25a4f6ec4821"],["/categories/数据结构/index.html","69a06b570a3b00835213ce3ae7a562c1"],["/categories/深度学习/index.html","774e30c889fbb61823a412ff9d07252f"],["/categories/生成模型/index.html","4768295091d1f4c079826e59f2a9d228"],["/categories/神经网络与深度学习/index.html","62a7d56339d957cdb5925a8a4ca98736"],["/categories/算法/index.html","dba1a35fcf5c19696e1e9c4c3185a2a9"],["/categories/训练模型/index.html","4b18c26713337b66ef4ddfa6502e827a"],["/categories/面试题/index.html","9b559569999e90bc9ee28af63cf5de53"],["/contact/index.html","7f1c30e061f4b9237b8b2dd9352ec838"],["/css/barrager.css","b5846eaaf8d84e2d846391ab83665a87"],["/css/bb.css","792b3afa2fcf8d983f8b41b751a22a00"],["/css/dark.css","993b4c39c7bbe84160ed173fa5582974"],["/css/gallery.css","2e3f128c4ac5cd475720b0bca539a696"],["/css/gitment.css","ee070fccf321193f099c0ac1c65bc704"],["/css/indexcover.css","504df491b3d9c5bc6747b57410b260ae"],["/css/matery.css","269fc84488540f57182d64db565da5ad"],["/css/my-gitalk.css","8d1faf8dbdd98632535ffe034cb6fa4c"],["/css/my.css","1bb4d7ccd3726f69a98b539c98d95734"],["/css/post.css","8aee528d06bee01a733de0b0f2d34556"],["/css/reward.css","613cfc04995e1b90e4d7181946acb6c3"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","8070772805b6fe4082982f35437857b5"],["/index.html","9e4d9a7d29c595a4caa1dcd5596bef3d"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","a3f00bba4363145191612eb2aca5c204"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","2d84280369de9993119212e8a13f5ae3"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","2f64ac3c9126db30963b4c6fec83c4eb"],["/libs/gitalk/gitalk.css","ec976d727205d5440c6ea61ed4f04a94"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","0dec3db3a3f05b43eb0632645565658b"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","7d38f3f0ddac379b97c2ac83c56a237d"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","b5a2d241f06671e5fe0ae7c578820335"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","574467aeb29ff5a1dc212404866c1558"],["/page/3/index.html","d2b8562f6aaf9cb87b65d2c7f4ca9618"],["/page/4/index.html","f8eae30c768f78d2e0d2ea6b1a233850"],["/page/5/index.html","997cff7f083e96ca2f0e4044660bde5d"],["/page/6/index.html","6964cccaf415c30d4295283babab8f2d"],["/page/7/index.html","629b6b670ecd3c10a5c582fc45cc3ffb"],["/page/8/index.html","76c38583a16000702c6ca422354b0698"],["/sw-register.js","0cd88ec63b41a568b84a4e5d6a62b8ed"],["/tags/CUDA/index.html","c2f94f9910a685e17463bd86e7c96057"],["/tags/C语言/index.html","8b1c58750e388c809c662b4e7a5c7249"],["/tags/DDPM/index.html","857bbb8148f8bec126270d41140e180c"],["/tags/DL/index.html","47687b51c8c9366f4bdd4b2d51d4eeb2"],["/tags/Element-Plus/index.html","f06522787c22965541f5893d5d833bdd"],["/tags/Java/index.html","36742b852bc73a0d444b3ec7d274fdf1"],["/tags/ML/index.html","9a1a0c8d21e502a7b9412d00f4704d6b"],["/tags/Markdown/index.html","abdc5c9e5be7159e89f1723b146059c0"],["/tags/Matplotlib/index.html","b4f708e828c4e95edec6fa6216ed9dc0"],["/tags/NLP/index.html","a93862fca3820a7b3f6893ef58a3c909"],["/tags/NumPy/index.html","4e65e93d8fddfe8c822e8088eb6c15bf"],["/tags/PyTorch/index.html","77ecb99c9623aa2a2e7ecbd087a1bac9"],["/tags/Redis/index.html","c86859e22aeeeb09d83bb686e90c31e7"],["/tags/SpringBoot/index.html","c23bca03b6fbafc46fe773aa839d27eb"],["/tags/Typora/index.html","19b6677f28e47b26e101530b7fcecfd9"],["/tags/Vue/index.html","c57e1241d3caea930a35fd1fd3474412"],["/tags/Vue3/index.html","d7f1abebe7d542e75e1b8591cd34cbfb"],["/tags/cpp/index.html","b453f25aa06ceb09819821a38598e157"],["/tags/cv/index.html","adc671ef68259fcd4852aabe2ac4c025"],["/tags/fastai/index.html","898a3040d1dc16830d7fa7a304333996"],["/tags/fastiai/index.html","d523dc1c1650d0303f0efa48334e1573"],["/tags/index.html","83a8aad8a290793fe157894c0e3f2dca"],["/tags/lambda函数/index.html","a54e3d7fe119199689ca64717a920643"],["/tags/python/index.html","29c8d49d443d8e3ed59ee62e3092c82f"],["/tags/函数参数/index.html","d3cb76efc93c7ecc10c0edf3bb678609"],["/tags/函数式编程/index.html","d34cbf462a462d4ed6c24a671376036f"],["/tags/前端/index.html","ef9212b2d3421803de58e0c14b69f76f"],["/tags/前端开发/index.html","4f9f7ea486d0800b3b47d804ca264a0c"],["/tags/协同过滤/index.html","e19c569346f46033ac177ceb74437f84"],["/tags/回归/index.html","68a8bbf0a93b0aa179f749c203b7530a"],["/tags/多标签分类/index.html","694665b6fa3866f40bd6e8513de7f196"],["/tags/指针/index.html","87b67580baefa118a88cdb48294f2b7e"],["/tags/数学/index.html","327c76b316c1e417f4929a7740a04939"],["/tags/数据结构/index.html","f5936f95a7646e083ffe71827cb44d26"],["/tags/模型/index.html","6e1d93f06bb1831c3975e7ade539ea2d"],["/tags/测试与异常/index.html","6d4e237f9eb4064825b0cdf67806854f"],["/tags/深度学习/index.html","9609719986b7cca25c9d6f730c154ff2"],["/tags/生成器/index.html","2784987544299f1f1df32b29fe468ae5"],["/tags/生成模型/index.html","a482dddbfb77457aae244e8fc6139794"],["/tags/神经网络/index.html","59f04d953e584eb04ae05d99681edaba"],["/tags/算法/index.html","87c880522a1870a1260463f97e579bc8"],["/tags/表格建模/index.html","13abb5ae9459ed58d3e20e3f9c54dd7f"],["/tags/计算机专业课/index.html","96ec16b52ee1617da6c9466d0d7dc95b"],["/tags/训练技术/index.html","c20ea8ee8945fe9d8b5a9776bdd77715"],["/tags/迭代器/index.html","b6ad2ee6164e82e93d4dd6307347128a"],["/tags/面向对象编程/index.html","1d1d10813c6eac6c7b1b0cbcd25094fe"],["/tags/面试/index.html","5e6f325450fcb81c7d050055e244db45"],["/tags/预训练/index.html","99122128499b8fcabe7175450bb09abd"],["/tags/高阶函数/index.html","cc856ef7ac8ca7023427df9e9d28517a"]];
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
