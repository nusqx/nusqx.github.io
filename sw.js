/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","e2b9ae40f64e48d0aed290e0f4255bb4"],["/2019/03/16/c-cheng-xu-she-ji/index.html","6c8c92ce0c5c6552550b5ec5d5a65033"],["/2019/03/29/c-zhi-zhen/index.html","ec7243603ff1e536b5b59efdcd1d2b6b"],["/2020/10/15/ds-algorithm-md/index.html","90ec00be753f698ddafbf9aedd8d7422"],["/2021/05/18/algorithm-md/index.html","5fe404123427a074950b8dd4900f0727"],["/2022/01/12/python/index.html","c8192509efd186436b1d81a481646392"],["/2022/01/16/python2/index.html","4b1acbac914ee91c5abbbbadfa10b15b"],["/2022/01/19/python3/index.html","db9bace278c3aec21b86730a2945bf93"],["/2022/02/28/c-biao-zhun-ku/index.html","3aa46853a113f89a889c61c8e5a4b62d"],["/2022/03/06/cpp/index.html","04450aa315a0c677bcc1fe5d5a044e27"],["/2022/03/19/python4/index.html","24de5eee0f78a739f869f31f08ad6e5b"],["/2022/03/25/lambda-han-shu/index.html","e370a329d228a9d5afde89119b40a98b"],["/2022/03/26/python5/index.html","dc106d84b220b853109a861baa69d527"],["/2022/06/02/python6/index.html","40d594af8b239eb25fd5100b75619596"],["/2023/01/06/python7/index.html","fd7ac6322dd81590828fd3135d9df551"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","0f810e5872e8f6d99d2840b223972909"],["/2023/04/16/machinelearning1/index.html","97833e20341f6bff4f1c132f58b1597a"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","5435b80a87abfc8c662f77d90222c570"],["/2023/08/08/python8/index.html","d73c739d88d01ddc12c423e8de534d5d"],["/2023/09/05/deeplearning01/index.html","e74ec340b856f832bf669a4ead8ee605"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","6bee222c9f9e03792962a9c5a2fd4ce4"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","4f2b9a88e25834fd331be6aee1365dd4"],["/2023/09/26/springboot-0/index.html","2ba2c26bbf4bbfecb522bf6bbb62d0ed"],["/2023/10/13/cuda/index.html","e9bdf5ac2ca28f187b3624a9e3cb84ef"],["/2023/10/14/cuda-python/index.html","ad6a90b8ec3ffb0d467446555bc7e085"],["/2023/12/21/dl1/index.html","e382b11d2c553df53fde9fbb20579043"],["/2023/12/22/dsandad1/index.html","2b2ce22512d92f6ee148b1991ecac6c4"],["/2024/01/22/dl2/index.html","3376313ef6e02d933b134e715a3aef02"],["/2024/01/28/production/index.html","11fc309ade372d6be52379137277d34b"],["/2024/02/25/mnist/index.html","7a678d878fb19338bd8fbcec42cc5cfe"],["/2024/02/26/ner/index.html","5d3dcb7af017d709507255531c018f8e"],["/2024/05/18/springboot-1/index.html","31567ed8ab42d496b68f7cfc9c1fde17"],["/2024/05/26/multicategory/index.html","3a0a7c525a7ca44a53ce415146ffdbe7"],["/2024/05/28/springboot-2/index.html","733c670faf53cce1039ed36561841483"],["/2024/06/02/regression/index.html","0256932793b5ba22a46b55db9bf9c9c9"],["/2024/06/03/imageclassifer/index.html","1e8f3d8f822474c92d976638ec839fd5"],["/2024/06/03/nlp/index.html","a8d501c9515870a70c02aa5fd140dee3"],["/2024/06/05/springboot-3/index.html","fc6b58fc93e0766d721506bbb266f8b7"],["/2024/06/10/trainsoatmodel/index.html","72159524e33c8d1c79e63d3c77d28af3"],["/2024/06/15/collab/index.html","47355b444a19ebdb19271a385fa5f3c3"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","0eae4ff7443bfa7ee7e5431930a4e3f2"],["/2024/07/04/vue-qian-duan-an-li/index.html","95d8020729121b9d4cb9b31fe81a4a1d"],["/2024/07/05/element-plus/index.html","fe9628ec392924a6d6e3f7f1371f5a29"],["/2024/08/10/vue-kai-fa-an-li/index.html","fceb304b6dfd97ab102927f42eba44c5"],["/2024/08/26/ddpm/index.html","ad3a79187f9ea87dbb221765c14612e3"],["/404/index.html","c1f28d8f4799236c76ab1b1b9c2d07ab"],["/about/index.html","238c2dc04482434362900d33fb503a7f"],["/archives/2018/09/index.html","bce28ebe91be2348f7c9e40b78c13402"],["/archives/2018/index.html","b8b8063a083523da2b670e63aba33d51"],["/archives/2019/03/index.html","fbed7e9f369c30c7e400db9570df94cc"],["/archives/2019/index.html","7cf4afcfad26c7526ebc9bd968fd587e"],["/archives/2020/10/index.html","6512d2d9c88147bfebbd71522a03aa17"],["/archives/2020/index.html","39074e4f72ab9e34b56d53f65b4e7734"],["/archives/2021/05/index.html","ce778c95c09097898905f46dd5e4b244"],["/archives/2021/index.html","9ec08d9edb7ba040d980ac6310804135"],["/archives/2022/01/index.html","97404e7eafb434c02a3b797eea394c2d"],["/archives/2022/02/index.html","fb6fce3061fb1b5614f6ade131ff45ed"],["/archives/2022/03/index.html","8ad8545386c9c4db94efee0b345e47e3"],["/archives/2022/06/index.html","2167c9036d1890efd0ca92d1b08ab4e4"],["/archives/2022/index.html","fabbc0b884340b0801d63b7fa3288911"],["/archives/2023/01/index.html","22d582305970ecc5a773354d2fefb52c"],["/archives/2023/04/index.html","1bfdc6352bb5b881b8f53a4cb237fb9c"],["/archives/2023/08/index.html","939106857f9310bc2d2d9abb879014bd"],["/archives/2023/09/index.html","a3ed3f4be8fec6e52cd153b4b46f080e"],["/archives/2023/10/index.html","1197d77d4c477eb850d25352d6c4e3e5"],["/archives/2023/12/index.html","23259d20365883fb05a08c2b97b87337"],["/archives/2023/index.html","6456de313adb6f395f35bbcf256f7329"],["/archives/2023/page/2/index.html","9b8e0a0183372cbdfebca044ca33511c"],["/archives/2024/01/index.html","9e605b7f8de69c54846e6dbd20ab6631"],["/archives/2024/02/index.html","972ad9b64f1f03060b9229b6bbac3dac"],["/archives/2024/05/index.html","a9f7de2b14655045e99441efece623a2"],["/archives/2024/06/index.html","7fd88058d98e9d468f8654ac8220ebed"],["/archives/2024/07/index.html","b08f96302b99d3d08e630a3fa8929340"],["/archives/2024/08/index.html","e22c3fbd5fbc1ff915f9adebb72270c0"],["/archives/2024/index.html","f737d194c6a0afc2e746681656143128"],["/archives/2024/page/2/index.html","a55f68c5a87578ad9bde4ff8e01cf528"],["/archives/index.html","93aa824b7c61a71950f978ca594241b4"],["/archives/page/2/index.html","337474a7f7bfc802e0f381efbde32a43"],["/archives/page/3/index.html","a53fee6bbd8b22513d349fc57262452d"],["/archives/page/4/index.html","35b7eb7c8fb16e98271a6099f5009490"],["/archives/page/5/index.html","8cbd19fd00e0df460f79d44dcd3efb47"],["/categories/C/index.html","559d34b9f2cefdd4a2290cafb996a956"],["/categories/CUDA/index.html","d4177423336a1465161ab1b03d06327d"],["/categories/CV/index.html","2472d50406dcf4b63c6147b443f784a3"],["/categories/C语言/index.html","d71251f578be5d35c745b832801a2194"],["/categories/Markdown/index.html","885a50562b5be8330c504057a2e57b79"],["/categories/NLP/index.html","046c3c07d4fc599074f3b765e777add9"],["/categories/Python/index.html","1a8a8a42e0e3f12dee84bd3a9ff8a0a3"],["/categories/SpringBoot/index.html","82885465a632a0d9d744778dc588c01d"],["/categories/index.html","fcaede7cdd5b6d020eed5f5c31b31c35"],["/categories/前端/index.html","f32a9def3866cfeaed5f4e0121ce9d88"],["/categories/协同过滤/index.html","2088c8d2046c2ffb2290cbcb753a1d7b"],["/categories/数学/index.html","0847bb03e3113be3e807fe8bb82bd658"],["/categories/数据结构/index.html","55a70aef5857f7419636b590db0eae72"],["/categories/深度学习/index.html","a7bddcf6929bea74bcb48f75cb3a7aec"],["/categories/生成模型/index.html","9c4ffeee716443036f8141431c693665"],["/categories/神经网络与深度学习/index.html","df0352aede01cf8bd0ccd167eec66866"],["/categories/算法/index.html","0453140e618539d7dc87fcecf98be02c"],["/categories/训练模型/index.html","cee6a27b772e4e2545e0ad69e1423ffd"],["/categories/面试题/index.html","23e2f771cf8b241ba8bed653d4981777"],["/contact/index.html","151ddd46a3f0f3886065f55b4af53ed6"],["/css/barrager.css","3968bae0a053ae0f736c29d649739041"],["/css/bb.css","472e9999a4da71b55f59e5d3779dea0d"],["/css/dark.css","b040dde463fd1ff203e3c2c502ce3994"],["/css/gallery.css","aaca62bc3d72ee3ec6621b4b544cb411"],["/css/gitment.css","e613e71353515144401527297a2c9f6d"],["/css/indexcover.css","ad1186cfe53b740704ef86ec037f82d1"],["/css/matery.css","db587699b57afb568b45af2482a3d460"],["/css/my-gitalk.css","0b1a697787719c604d59a40da94a47c8"],["/css/my.css","ba3489d1fcd052c052cf9726eb12f760"],["/css/post.css","62208a357c30fd35e9bd54ca063bda1d"],["/css/reward.css","404a41eacc6183a5aebe391ebaf54a41"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","922232727762686d427bd4c72b4cedf6"],["/index.html","8d2788183bcba4a16b4dbcee8b2cca3c"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fffc4d55c16ffdc4f3d8aa1de0a6a4ba"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","803587cd8a901cc029673e42aa5a6f32"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","33120008d7c554cdb57e981b94451186"],["/libs/gitalk/gitalk.css","5b4135caa8c750cd1eb533e54d48bd1c"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","b1154b9b1cc18e43e6dd1f0e8de788a9"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","f524cd4ca3674a7397733aa6f421e396"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","2bd868a5264cc7c7dbca89c453914385"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","5f0132f77e98caf8ab1916ea984b193f"],["/page/3/index.html","ea643e269b6efdc9325f745a247d4d6c"],["/page/4/index.html","eaf0e210c7f4572b0a227710eabc8c61"],["/page/5/index.html","c1ef0388d4a96f2133ae2f500ae59125"],["/page/6/index.html","4b3bc99563828edc09188a8087c3fe2f"],["/page/7/index.html","646cffe2bcd1e6c667d3c3139905d0ce"],["/page/8/index.html","6eeb4d41837ee09ec20d126662d0d284"],["/sw-register.js","5c07627a6ba610ad50f9184163c86a2d"],["/tags/CUDA/index.html","1c62f91db9682b98fe878ed83b625faf"],["/tags/C语言/index.html","097a8ebe56ecdc466803e1597c2ccd9d"],["/tags/DDPM/index.html","4ad781b23e56805ed0a4229aad1469e3"],["/tags/DL/index.html","7fb5aebd1094925ee87e83d96db73b09"],["/tags/Element-Plus/index.html","c7c00a9b596c50d8de7161a09f3abf32"],["/tags/Java/index.html","5e51ab7e8895a25e373f087f08a28343"],["/tags/ML/index.html","07846705b8f816df5f8e3772be268dd6"],["/tags/Markdown/index.html","ecdcf3c5de9848604c6745af393f0ef7"],["/tags/Matplotlib/index.html","4c7f650431df26086743f7cb47f972f3"],["/tags/NLP/index.html","4982b4e75ba69eda997098fb979fb12e"],["/tags/NumPy/index.html","227970d4247bafa29b739e7c682fc8d2"],["/tags/PyTorch/index.html","ad42d4f4e5f71d615369314b016d47ff"],["/tags/SpringBoot/index.html","cd198e5f4fb85ddf788ea60f326d7e50"],["/tags/Typora/index.html","0e9caf770fdcd59999663fa92908e7ea"],["/tags/Vue/index.html","1b07897101459cad9cb5819181d2c6b2"],["/tags/Vue3/index.html","a2b42a64c0a1853b23628d8dc02a2b23"],["/tags/cpp/index.html","a587f454dd1614c4cc9301522fff1620"],["/tags/cv/index.html","ca945d4da169345b96cb85fa68d26c55"],["/tags/fastai/index.html","b3091468c3f100766723712b6edeb2bb"],["/tags/fastiai/index.html","1411a005e945b6a8849408d0dd7f96bf"],["/tags/index.html","98ec9d46b6758f64db70b3139c72e130"],["/tags/lambda函数/index.html","6f30d1efe64fd374dfca05ac33c1c43b"],["/tags/python/index.html","f0a40c3041d854b8ed2e6d199415ee55"],["/tags/函数参数/index.html","9b4020cb19f3c86ddcfde213d6f0ee51"],["/tags/函数式编程/index.html","287f3f6252faa23ca0066cccd8d5b504"],["/tags/前端/index.html","71efa469fe3fca7da35d80c1caef4490"],["/tags/前端开发/index.html","b97da4f62a9eeb90d07770ed7ab90b76"],["/tags/协同过滤/index.html","989139ee6a3ba509c2268d0d95b5fa5f"],["/tags/回归/index.html","a834e9b97bddfd05e4403c9091d0ff08"],["/tags/多标签分类/index.html","a63c65ff8d8f09a9f9b85cec705b7dc4"],["/tags/指针/index.html","503d1e5a72e0ff4cf4e0ab8ab554314a"],["/tags/数学/index.html","83ce4ea2502c62de5feb793f9f1d958c"],["/tags/数据结构/index.html","9492c6ddca6fb54f6bb9958644083b84"],["/tags/模型/index.html","1a528089e1f6d7a3ec2478d0fa4f8027"],["/tags/测试与异常/index.html","4a21f049f6ebbbcf113c58d94ede1179"],["/tags/深度学习/index.html","36a4f7c4c17b94bcf83283085d1802de"],["/tags/生成器/index.html","8d443d67237104c0c4525d8e0eabc431"],["/tags/生成模型/index.html","30272099a684e19eeaedf5a3ed2b73af"],["/tags/神经网络/index.html","1e237d0d7d38983e42ca0f83e981c08e"],["/tags/算法/index.html","6e54d7965c9925c050b1988e9eacc97c"],["/tags/表格建模/index.html","722c45548e5e0e12ac40cb5e7b7e659d"],["/tags/计算机专业课/index.html","d413218b307a527cebe7801261a53c53"],["/tags/训练技术/index.html","9f5f2645dcd999658021b21dffa26f67"],["/tags/迭代器/index.html","060647c859fa0facb7971a2d97544edd"],["/tags/面向对象编程/index.html","04a736f5f19556000c263068ae937751"],["/tags/面试/index.html","01bfbe18c418e6b9465a824092906ff9"],["/tags/预训练/index.html","0ff2e11d2e783682cf1c51076a1165bb"],["/tags/高阶函数/index.html","c52c5e2848daa466e092ce19b4041a32"]];
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
