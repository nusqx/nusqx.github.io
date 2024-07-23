/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","8136ae389a01c556cf4202f3817db9e4"],["/2019/03/16/c-cheng-xu-she-ji/index.html","f335211bf9a55d4539b6a7500df92f69"],["/2019/03/29/c-zhi-zhen/index.html","bbb95eab56a0e79bfa1578c72f3184bd"],["/2020/10/15/ds-algorithm-md/index.html","8b5c8072513a2d2804538be5e76ad80a"],["/2021/05/18/algorithm-md/index.html","f8c59ea93ec53f4e72e1126d8ac81c24"],["/2022/01/12/python/index.html","603758ffbf6467018e5f15c445a39441"],["/2022/01/16/python2/index.html","7144d3ba1bc249f203185122fd74fd62"],["/2022/01/19/python3/index.html","270ee74d4f2dcab33038ad0a46457cc2"],["/2022/02/28/c-biao-zhun-ku/index.html","5d908af72aa9151a7e17caecc9f7f999"],["/2022/03/06/cpp/index.html","45b8f5b213719919fafc2e8d0e528449"],["/2022/03/19/python4/index.html","8c458fffaf4539e8186f9d1b5da55686"],["/2022/03/25/lambda-han-shu/index.html","90854cb3cf3d1e0d30a04a9617d60584"],["/2022/03/26/python5/index.html","130b5bcd344cbf0df34052813880b553"],["/2022/06/02/python6/index.html","a516cbf439f13bc019de3c607f2f6d31"],["/2023/01/06/python7/index.html","4e0b0120ee63dac87c9a127d42849dcf"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","8f2f048f9502f8cfb846e40a9c7f02c5"],["/2023/04/16/machinelearning1/index.html","caee6889a67b277b6ed92740091e4c1d"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","c63def5c8d37a9659c32324b0e8874cd"],["/2023/08/08/python8/index.html","d6bddafc99cc0f90279693b881d25788"],["/2023/09/05/deeplearning01/index.html","e3cf72326081eceba33214caf9b25c3a"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","2b1fa64e60a3e3e16a39ad9e751787af"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","cc62f6241283d8e7f427dcc7353fdebb"],["/2023/09/26/springboot-0/index.html","c996e27369b3aead801f68a0a323a40a"],["/2023/10/13/cuda/index.html","92a2fa899123c88d728a115d72b61199"],["/2023/10/14/cuda-python/index.html","4c4a50cfec478226050568b2c2727ea1"],["/2023/12/21/dl1/index.html","0a8ba7d6a76a81e3661caebd3a7e390a"],["/2023/12/22/dsandad1/index.html","2921b03cc20de0a28bb423a0384569af"],["/2024/01/22/dl2/index.html","7e06768c5aa645305f7b8b31748e2acb"],["/2024/01/28/production/index.html","28e04a2a40c7dc683c41e848d9898f97"],["/2024/02/25/mnist/index.html","571f63feaf2ba60fe0294988ee9452e7"],["/2024/02/26/ner/index.html","8951773a871edc6af3872421b5c89aa2"],["/2024/05/18/springboot-1/index.html","e7ebd595dc28eb20da89ca209e9915b0"],["/2024/05/26/multicategory/index.html","1aec55128ca736f4edd10c522ae29af9"],["/2024/05/28/springboot-2/index.html","ad98ff3fb1d130cd619272fd28568cf7"],["/2024/06/02/regression/index.html","7475aff1cf159f923740c966a95c9943"],["/2024/06/03/imageclassifer/index.html","34d710c040116e1966965939ae0edc24"],["/2024/06/03/nlp/index.html","6335aafed5f24e939754dab9c5657dab"],["/2024/06/05/springboot-3/index.html","a1848190489f7dfdfd60e884bb56127c"],["/2024/06/10/trainsoatmodel/index.html","675d9823c9c2e76c375ad8d1e30bd1a5"],["/2024/06/15/collab/index.html","6766a88d02fc688b9777e78a4de3a782"],["/404/index.html","1eb66b0a5e54a87ed0b1eb03553d8d36"],["/about/index.html","ad18345fcd1f51980a3a7012525fa09a"],["/archives/2018/09/index.html","a2affb4de7d1f92599073075a29066e0"],["/archives/2018/index.html","eeaf9366dd914eba26ac534f0f74ab67"],["/archives/2019/03/index.html","cc64fc69dbcd77c886561930e756b1fc"],["/archives/2019/index.html","1c88bf63411296b8793c03bc25619b5e"],["/archives/2020/10/index.html","70ff0314bda9ebbe2284fc06c71f3a36"],["/archives/2020/index.html","1d67937067453a50d2845591bc399ecb"],["/archives/2021/05/index.html","7913b4919fb6e395029ff7044fb6b553"],["/archives/2021/index.html","217a3673d8c398d4916f322aaf703b9a"],["/archives/2022/01/index.html","99ad0ab8362e12c2f35c6d082525ef06"],["/archives/2022/02/index.html","82d931d4256e91a4be0b5813b0f90b46"],["/archives/2022/03/index.html","3df30908bf499554f57efc4f54d259f1"],["/archives/2022/06/index.html","03ae7304e8052fcda0509321392b31f0"],["/archives/2022/index.html","88f51f9354cee2a47b3f3a0b6a0ffbac"],["/archives/2023/01/index.html","dbda9c89db6221f81b3d5a1365d2af2e"],["/archives/2023/04/index.html","cb55a5372a106488e6dce637eb1c2bc6"],["/archives/2023/08/index.html","7bffc813b56754019e39c3bfc05d60a4"],["/archives/2023/09/index.html","8c3075b351af475e33116137631f0837"],["/archives/2023/10/index.html","94d7442002ef7fdcfbd83046419da60c"],["/archives/2023/12/index.html","d27f2de6756ba5dbdf12a1453ef3e350"],["/archives/2023/index.html","51d274020abf0c7bb851103c227640a7"],["/archives/2023/page/2/index.html","0a5cae6f8f64116e32cd7bca511212a1"],["/archives/2024/01/index.html","59d3ee0f7bc6ef0df4e349253475df42"],["/archives/2024/02/index.html","f615ee11bffd517e82fa737ec6f84ab8"],["/archives/2024/05/index.html","7f0b146b8b37b6e5d370d79fa464f7f4"],["/archives/2024/06/index.html","7dbfc1d54f76aca3748164fb45dfe8d4"],["/archives/2024/index.html","68a0487a42b01615132a4e18bc4461d8"],["/archives/2024/page/2/index.html","ad54d056aa5e7f7f3c07a882d46be490"],["/archives/index.html","0469c1ca71a5b4e23e8a3c633223777a"],["/archives/page/2/index.html","cc0bdfcc4ff49d5956f4585532038939"],["/archives/page/3/index.html","080e1646427de03ca7a9c4df271413f6"],["/archives/page/4/index.html","b8e7a54156f2378e57fdfaa8d6d479de"],["/categories/C/index.html","c3f85d4abdeb02e9e403ded808d4abde"],["/categories/CUDA/index.html","4c4d07564c28a7a5e3170c31789c9489"],["/categories/CV/index.html","60776eac2e93b3c503eee6e856dc6552"],["/categories/C语言/index.html","9d9cb336eb7d47dcadfe74d3b95c77c2"],["/categories/Markdown/index.html","260c19f719753d62b8e684e5f277dbb3"],["/categories/NLP/index.html","7a6d32b2c7e6059beb56279d23103b0b"],["/categories/Python/index.html","5bdba4938417611e71e6caed18a157d4"],["/categories/SpringBoot/index.html","4640fd57349030bbff83bab15e1231d5"],["/categories/index.html","a2a351d7f9020e42683db5daf0f89881"],["/categories/协同过滤/index.html","cb05da9c41bd613971e8f12f27fb057c"],["/categories/数学/index.html","25ff69ab3b1221fd7410760f7b700d31"],["/categories/数据结构/index.html","23431fc9a9f7c6e87fb581e082c35269"],["/categories/深度学习/index.html","686ec588ad988cee766323c49217a560"],["/categories/神经网络与深度学习/index.html","6c92cb8abf71cab46d9bc52ab08e6810"],["/categories/算法/index.html","e718885bee42259243f389e1cbe0ea5f"],["/categories/训练模型/index.html","cfeeef253c4ff62b831024a0db63c6d2"],["/categories/面试题/index.html","3f4d506be8b4dbb1c33b4a87172f2687"],["/contact/index.html","eeebf412e838f884fac37a5277459f67"],["/css/barrager.css","b1dbc328d089452f2d1e87396214f4d4"],["/css/bb.css","943f809ae161d0174fe6fff037888682"],["/css/dark.css","22f00b99c3210518a4507adb2e355eab"],["/css/gallery.css","a00e82470010f833f34849f974da6624"],["/css/gitment.css","db79fe0e6336ab5832ec07d4587f5580"],["/css/indexcover.css","9d90ca873b9878dc4248f7c7f48680e2"],["/css/matery.css","2f8f31578f744b91f5cb8d6ea57fd697"],["/css/my-gitalk.css","161a5f7d81c79c6ed728ac40b70c8152"],["/css/my.css","68e0fc88f542a1267754b37e008c40f4"],["/css/post.css","f8a27339e5d921400a65301f5ce85253"],["/css/reward.css","f70a300b137fb80069c2c3ec7924b84f"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","514d134ec3f0891d02aa957a0986e3b4"],["/index.html","a8ac1a591417ecaea56eaf86af9f5467"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","9d10a1e9cb3631d7f411de1f2408dd2e"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","0285982693467e25695e86c29f80b97c"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","0500304cca68c56412b3b871c80de5a0"],["/libs/gitalk/gitalk.css","5e41d9e81bed58fd3193dc1b6cb84575"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","3703edd6d7c13999adf34f54a57765a1"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","e76b90b017b11b09f5fff3d671972be2"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","8698cbbe43c4ffcd0b26b12edfbe7fda"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","585b3114a7c39af1261632bfdd1d1c3c"],["/page/3/index.html","f9cf53c35c49a5ec2055b0c4bfd93cfd"],["/page/4/index.html","9fb81ca40257ecaca44bf4e49b252bd9"],["/page/5/index.html","1c0a13edc46a6229f0dda615a786efce"],["/page/6/index.html","7a9bddb3bfd55e272569d4f492e439fd"],["/page/7/index.html","52f08a0b1fe9c522f6290128120e4deb"],["/sw-register.js","7e8c535702648ba07ff0dfd6b8109f48"],["/tags/CUDA/index.html","3de227851042d7ec3482bfd524666d41"],["/tags/C语言/index.html","94dea8aeb9fd3b72ac9b0d4f4888e8d0"],["/tags/DL/index.html","baf3f492d006c2b182e05aabe7846031"],["/tags/Java/index.html","961f51eddec988c9466129d01647bf95"],["/tags/ML/index.html","63b505186acea3b4953a96a3252dfc6c"],["/tags/Markdown/index.html","2d5f575b1389eaff70aece460504b7c9"],["/tags/Matplotlib/index.html","6632d730b39d0be86985be53c640dfd7"],["/tags/NLP/index.html","f49db52a875d07263b6fa1bf3264ba36"],["/tags/NumPy/index.html","ab2e0858703578c88789a195e743a82e"],["/tags/PyTorch/index.html","42cd5936aae2658d167dfed40c1e4762"],["/tags/SpringBoot/index.html","35696f8cf54cfb2860af70eacefb2556"],["/tags/Typora/index.html","69f1a259ef07f887230301d3ca1623d4"],["/tags/cpp/index.html","225359a7238f3331db71f82a4be01f0d"],["/tags/cv/index.html","af83ce497f8ee242ea3cd21f0d965402"],["/tags/fastai/index.html","103741877fe419fa61b2b8edbf607828"],["/tags/fastiai/index.html","880edcb7fbccaaaf20f638767516c12d"],["/tags/index.html","74a6e2fbb500bb0f4a0961f3797a59a1"],["/tags/lambda函数/index.html","36489e1aa611efb73160d4fb8b7cb7a1"],["/tags/python/index.html","9ea61ae79964ea07544cb5165ff43af2"],["/tags/函数参数/index.html","a575552167834722c682749632a805aa"],["/tags/函数式编程/index.html","fb4bf2cef9779b2ec6f94b6a99a5112a"],["/tags/协同过滤/index.html","947f801727832eeca081e7e79fb2f100"],["/tags/回归/index.html","dfb7250cac3d4f5f76729b12f31ca0cd"],["/tags/多标签分类/index.html","fce402d4f1a7eb1d6ac444f555815060"],["/tags/指针/index.html","016ea2a29063415f97e3aa4153bae50e"],["/tags/数学/index.html","e8c3f9e58fde75291cef14f6de5c25ed"],["/tags/数据结构/index.html","b5f548dba0ab597c2d1992fcd1029cd9"],["/tags/模型/index.html","d3fc9156bdd8b27e55b97fe0d19113ab"],["/tags/测试与异常/index.html","a2d57e4d57547662829666d10238fa93"],["/tags/深度学习/index.html","bea72b301366473441c4d23dfd1ca2f4"],["/tags/生成器/index.html","2f8163793860ff787c564bb751913cd3"],["/tags/神经网络/index.html","e9717d49ec9c487c10596b19c6b1c905"],["/tags/算法/index.html","8d08a49ef3e61787715d454eb262ac9b"],["/tags/表格建模/index.html","2dea6dfe879c046b049e1083c904f182"],["/tags/计算机专业课/index.html","2066b103aa98a39151d6645757c90778"],["/tags/训练技术/index.html","95f281e63681f74f7d8fe4e228d86e78"],["/tags/迭代器/index.html","d50e88e03f18da36b0a796f00ffedd90"],["/tags/面向对象编程/index.html","f878f5b8a0ed192ea5be14cb4ed517a3"],["/tags/面试/index.html","f68093f0e4b028134189b56a9ee2fe56"],["/tags/预训练/index.html","716aca89efce6c0f9a02bbbffb449e9d"],["/tags/高阶函数/index.html","a784dae5f943772dce73e79cd6af683f"]];
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
