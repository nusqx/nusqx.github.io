/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","8ff9ba83a5aa5f3b8b2fb1d9b697e336"],["/2019/03/16/c-cheng-xu-she-ji/index.html","40acdfa1007937ba2d30bc0c3d7a316d"],["/2019/03/29/c-zhi-zhen/index.html","3fddd3ba6404965b1901375a59bb9f61"],["/2020/10/15/ds-algorithm-md/index.html","cf346df9729525491026bc727628cac0"],["/2021/05/18/algorithm-md/index.html","85d5e0ff3193b247bcba24b86e946ac8"],["/2022/01/12/python/index.html","603758ffbf6467018e5f15c445a39441"],["/2022/01/16/python2/index.html","7144d3ba1bc249f203185122fd74fd62"],["/2022/01/19/python3/index.html","270ee74d4f2dcab33038ad0a46457cc2"],["/2022/02/28/c-biao-zhun-ku/index.html","5d908af72aa9151a7e17caecc9f7f999"],["/2022/03/06/cpp/index.html","45b8f5b213719919fafc2e8d0e528449"],["/2022/03/19/python4/index.html","8c458fffaf4539e8186f9d1b5da55686"],["/2022/03/25/lambda-han-shu/index.html","90854cb3cf3d1e0d30a04a9617d60584"],["/2022/03/26/python5/index.html","130b5bcd344cbf0df34052813880b553"],["/2022/06/02/python6/index.html","a516cbf439f13bc019de3c607f2f6d31"],["/2023/01/06/python7/index.html","4e0b0120ee63dac87c9a127d42849dcf"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","8f2f048f9502f8cfb846e40a9c7f02c5"],["/2023/04/16/machinelearning1/index.html","caee6889a67b277b6ed92740091e4c1d"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","c63def5c8d37a9659c32324b0e8874cd"],["/2023/08/08/python8/index.html","d6bddafc99cc0f90279693b881d25788"],["/2023/09/05/deeplearning01/index.html","e3cf72326081eceba33214caf9b25c3a"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","2b1fa64e60a3e3e16a39ad9e751787af"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","cc62f6241283d8e7f427dcc7353fdebb"],["/2023/09/26/springboot-0/index.html","c996e27369b3aead801f68a0a323a40a"],["/2023/10/13/cuda/index.html","92a2fa899123c88d728a115d72b61199"],["/2023/10/14/cuda-python/index.html","4c4a50cfec478226050568b2c2727ea1"],["/2023/12/21/dl1/index.html","16eb9dcd27705d31a9fe6f5324924eef"],["/2023/12/22/dsandad1/index.html","ed769277dd394f0cb61fce29972e5feb"],["/2024/01/22/dl2/index.html","ead7cefb64c9eefc0d7953f6ecee1b7d"],["/2024/01/28/production/index.html","28e04a2a40c7dc683c41e848d9898f97"],["/2024/02/25/mnist/index.html","571f63feaf2ba60fe0294988ee9452e7"],["/2024/02/26/ner/index.html","8951773a871edc6af3872421b5c89aa2"],["/2024/05/18/springboot-1/index.html","e7ebd595dc28eb20da89ca209e9915b0"],["/2024/05/26/multicategory/index.html","1aec55128ca736f4edd10c522ae29af9"],["/2024/05/28/springboot-2/index.html","ad98ff3fb1d130cd619272fd28568cf7"],["/2024/06/02/regression/index.html","7475aff1cf159f923740c966a95c9943"],["/2024/06/03/imageclassifer/index.html","34d710c040116e1966965939ae0edc24"],["/2024/06/03/nlp/index.html","047255bfea96817471c181d1181c7021"],["/2024/06/05/springboot-3/index.html","7ae0821b8674953b3c7310645913ab72"],["/2024/06/10/trainsoatmodel/index.html","ac1c0d6f367cf3a7e26503fd74fbd8e6"],["/2024/06/15/collab/index.html","6766a88d02fc688b9777e78a4de3a782"],["/404/index.html","1eb66b0a5e54a87ed0b1eb03553d8d36"],["/about/index.html","44f4839125cea22aba92decb27c10609"],["/archives/2018/09/index.html","a2affb4de7d1f92599073075a29066e0"],["/archives/2018/index.html","eeaf9366dd914eba26ac534f0f74ab67"],["/archives/2019/03/index.html","b609f43fcd4cc80f7118aeb323b28deb"],["/archives/2019/index.html","4579aac34d14500e25b31d6a4a852649"],["/archives/2020/10/index.html","d541bc80f64ed2d2b2a6b1618992f1ec"],["/archives/2020/index.html","c3b9cd08738724b4ceb60e569c262f01"],["/archives/2021/05/index.html","7913b4919fb6e395029ff7044fb6b553"],["/archives/2021/index.html","217a3673d8c398d4916f322aaf703b9a"],["/archives/2022/01/index.html","99ad0ab8362e12c2f35c6d082525ef06"],["/archives/2022/02/index.html","82d931d4256e91a4be0b5813b0f90b46"],["/archives/2022/03/index.html","3df30908bf499554f57efc4f54d259f1"],["/archives/2022/06/index.html","03ae7304e8052fcda0509321392b31f0"],["/archives/2022/index.html","88f51f9354cee2a47b3f3a0b6a0ffbac"],["/archives/2023/01/index.html","dbda9c89db6221f81b3d5a1365d2af2e"],["/archives/2023/04/index.html","cb55a5372a106488e6dce637eb1c2bc6"],["/archives/2023/08/index.html","7bffc813b56754019e39c3bfc05d60a4"],["/archives/2023/09/index.html","8c3075b351af475e33116137631f0837"],["/archives/2023/10/index.html","94d7442002ef7fdcfbd83046419da60c"],["/archives/2023/12/index.html","08e0fe7fd7186bc267f1f2557b883f93"],["/archives/2023/index.html","3379f5aee0ea0f95d7b74417478dc643"],["/archives/2023/page/2/index.html","0a5cae6f8f64116e32cd7bca511212a1"],["/archives/2024/01/index.html","59d3ee0f7bc6ef0df4e349253475df42"],["/archives/2024/02/index.html","f615ee11bffd517e82fa737ec6f84ab8"],["/archives/2024/05/index.html","7f0b146b8b37b6e5d370d79fa464f7f4"],["/archives/2024/06/index.html","29353004acd7c576d8e6a272e88cdc93"],["/archives/2024/index.html","4ba152ebd41d2ea5ff4f4157b856b404"],["/archives/2024/page/2/index.html","ad54d056aa5e7f7f3c07a882d46be490"],["/archives/index.html","3e63b308930ce7b98ffe0476b994735f"],["/archives/page/2/index.html","d2fdd0d36138cf2d33de2e5b1e814ac2"],["/archives/page/3/index.html","080e1646427de03ca7a9c4df271413f6"],["/archives/page/4/index.html","c0585d4de2efa2107e06727fa13ed28f"],["/categories/C/index.html","3c7b966382e3383e75d0b485225c24c0"],["/categories/CUDA/index.html","e2b43a3469edd01578692261bcf42d35"],["/categories/CV/index.html","c14f0ae9b070caa7da58a159ffcf35f1"],["/categories/C语言/index.html","6fc41387d70a202753d5db6fc4f08498"],["/categories/Markdown/index.html","244085706069494f9bf438b1c8c1172b"],["/categories/NLP/index.html","badf325a72526162554edb2f89f9bc8e"],["/categories/Python/index.html","db157bd350a9883c44746cf62cc50bd8"],["/categories/SpringBoot/index.html","c9dec1b7bc2cfac31925ea6cb17d4c44"],["/categories/index.html","1ce739c964bbd8587780d2041e7e8fcd"],["/categories/协同过滤/index.html","f8031cca26151725ba377c166514ede8"],["/categories/数学/index.html","8308598211b474d8abb3cedcce1bc39d"],["/categories/数据结构/index.html","63cd1f0d5f375e5b2ad3bae82e566dfa"],["/categories/深度学习/index.html","19cbeeb30b662afb2c819814bc6d9a60"],["/categories/神经网络与深度学习/index.html","c9dd9a22d4a459838c61888ae539d359"],["/categories/算法/index.html","f34ba8253037305e33de8583803b7838"],["/categories/训练模型/index.html","d3156c8505503d26dbd1090438ea9b64"],["/categories/面试题/index.html","d7cd40facda7b2ebe44e58ab9e3e7aa3"],["/contact/index.html","eeebf412e838f884fac37a5277459f67"],["/css/barrager.css","ccae9cdec254c0c5a59af098b32223c7"],["/css/bb.css","3820d658cff0d86928a84b6be2289557"],["/css/dark.css","4556844698b3a37aa05de91436b6166a"],["/css/gallery.css","fa729f1a23f2b0366bbb1bc1cf831c5a"],["/css/gitment.css","571ada2f58be26edf078b42a1603a7e8"],["/css/indexcover.css","51d91ff99307d6f1eb2716ce808ad286"],["/css/matery.css","91f917ab57042638f86fe6b133c3dcf9"],["/css/my-gitalk.css","d29818a0854365d4742621c7b7a73ed8"],["/css/my.css","a0c85b3fef9c8fe64fd55253e5564a63"],["/css/post.css","4fe27ea527dcb61a58f28cb3f5ee9262"],["/css/reward.css","d5b57d52260cbdb972aa204b8c4e066d"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","514d134ec3f0891d02aa957a0986e3b4"],["/index.html","2567577376c915e6817c6336da677e9d"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","9f9241047b40857613a72f53c79d00e6"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","7b568f2814ac8336624cb606addb89e9"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","c0b594dfb2c5383ff4430de51e58b264"],["/libs/gitalk/gitalk.css","d7db2857081a9330cb65c98d4c251d49"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","0c41fbc9cd42809fd0301516bfc100d8"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","b11829335214a13280e5f66b9a7c95f6"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","f2abeb695adbcae928c8851cbdfa262a"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","585b3114a7c39af1261632bfdd1d1c3c"],["/page/3/index.html","584a3a25f622c2a727d0e8347212302e"],["/page/4/index.html","9fb81ca40257ecaca44bf4e49b252bd9"],["/page/5/index.html","1c0a13edc46a6229f0dda615a786efce"],["/page/6/index.html","7a9bddb3bfd55e272569d4f492e439fd"],["/page/7/index.html","5013fff622448bb4230e8af479b28330"],["/sw-register.js","9c21324f5134ef2f71070a57a0ab30ac"],["/tags/CUDA/index.html","9854a06f9c5987616d256886dcd8107c"],["/tags/CV/index.html","f9598b19de381625e006e90813cbefc4"],["/tags/C语言/index.html","b0756bd7d3085770584ff5e74ea973c4"],["/tags/DL/index.html","533981a08075eed56c7efe0ab2664eee"],["/tags/Java/index.html","aa63bfb2237855ac3c2762b34cb46685"],["/tags/ML/index.html","4999badb5f63cb5e47cd22591e83ef75"],["/tags/Markdown/index.html","a6d11d07e1a18e86d4c1bf54e47fbc81"],["/tags/Matplotlib/index.html","ac6e6f90fd7bae7909463a16c4420ff5"],["/tags/NLP/index.html","5a51cad44ce2ffcf99c46cfd53091d38"],["/tags/NumPy/index.html","f7c8e689f2e8d0962dc8c8179b014606"],["/tags/PyTorch/index.html","aea450d8db63a0c345a5179b655a567d"],["/tags/SpringBoot/index.html","71d2fff78e725ae77e2db7313cfe35dc"],["/tags/Typora/index.html","1ff14116bd0eaba1ca31c104dd98ee35"],["/tags/cpp/index.html","d1e5ee46b83804d5e106e40e3b9f2641"],["/tags/fastai/index.html","9aa70b53987515d995fea6910e90af8c"],["/tags/fastiai/index.html","3b855f492ec1112221181ae6ad1cf536"],["/tags/index.html","b36892b137677e975a1a051e2f375755"],["/tags/lambda函数/index.html","0e79e98e59172c51a4c4be2562543248"],["/tags/python/index.html","d88c0a961ef4adefd769f4623b4e1155"],["/tags/函数参数/index.html","7e59aeccead316528f35a2df2e4f7c73"],["/tags/函数式编程/index.html","a51e70d76a794e320b709d3c866d4b8f"],["/tags/协同过滤/index.html","63bcd9886052325770469fe692554fca"],["/tags/回归/index.html","a092fbd7d0984a7322d2904adee8e2e8"],["/tags/多标签分类/index.html","6458338637de7fc16a81a63492b4ce92"],["/tags/指针/index.html","b3a198fdba9f44fdb6ed9e6d57a2a2dd"],["/tags/数学/index.html","07b53c521d8e510a9c22d98d9ea6e067"],["/tags/数据结构/index.html","39ccb69f89bc699b2ea55d352665652a"],["/tags/模型/index.html","e8510f4edf4e818509d0d6bb89bbe783"],["/tags/测试与异常/index.html","1249c1a49f2faf7c8499f143ad5b68b6"],["/tags/深度学习/index.html","ab331062685d752e2a1a2c4cb8f09e7d"],["/tags/生成器/index.html","aa694fd37747e5a25486d66c362131d3"],["/tags/神经网络/index.html","a334d2752662a930cb20667557933284"],["/tags/算法/index.html","919bc069563508c1710f66a3f9c6a49f"],["/tags/表格建模/index.html","bf7f4a080cc4a0879b614bf63bf10539"],["/tags/计算机专业课/index.html","ff328d1bf2166be5373a959e888375b4"],["/tags/训练技术/index.html","7804b068162c860b33392cc3f300c8c4"],["/tags/迭代器/index.html","f07c2efa4437609f6b01c474614695ff"],["/tags/面向对象编程/index.html","693838d03616f1b208b251ca6e21fdc4"],["/tags/面试/index.html","cc300d3b2e661d9e214f30fd8d507d49"],["/tags/预训练/index.html","99003092e23cf2f7322a7f5a1f239679"],["/tags/高阶函数/index.html","f6e5f7e8e45fac72f10a3c91a3706560"]];
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
