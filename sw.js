/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","e5ab9faed1d8969e201365ff590fa179"],["/2019/03/16/c-cheng-xu-she-ji/index.html","2ba760155a4129716546f4244c7eb1a7"],["/2019/03/29/c-zhi-zhen/index.html","c191c7b69670a2eef0b448ecbbb36fc8"],["/2020/10/15/ds-algorithm-md/index.html","73397f20450a0940264a24db1e465c9f"],["/2021/05/18/algorithm-md/index.html","cec1f29ca7ef43176c41d385d9d11ab1"],["/2022/01/12/python/index.html","668dac26faf0cc72c7beef37da7bda44"],["/2022/01/16/python2/index.html","380e58e237c00432a8c2399c2258d1c4"],["/2022/01/19/python3/index.html","51b8eeee0caad49ca7943d07a67ece4c"],["/2022/02/28/c-biao-zhun-ku/index.html","a5d73f7bd3b85b08fba9a865ca8af945"],["/2022/03/06/cpp/index.html","49f211c968e10508e69bc585348bd399"],["/2022/03/19/python4/index.html","1fd5d10192c562d836261e1967446548"],["/2022/03/25/lambda-han-shu/index.html","26d20fa48146d4dd8aba1407a23281ba"],["/2022/03/26/python5/index.html","139370effb1ae71763dd097467aba85e"],["/2022/06/02/python6/index.html","8ca1ade8481bbfa53d1ff18348f941cb"],["/2023/01/06/python7/index.html","d25a67a36aad1f49baaeef1026b890f7"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","f71028ecfeeeb1217f783c26af8028b9"],["/2023/04/16/machinelearning1/index.html","e7091f10790a4e31fbd9742c0b6c56f5"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","a6f448db778408fd4310648462e4857b"],["/2023/08/08/python8/index.html","967a8ff8a72d9a8837ae3fc106f00acb"],["/2023/09/05/deeplearning01/index.html","86efb666604a9bfe00c50f7cb306f928"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","1828433f359c1cda952625fa4ac68440"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","c8dea935996020fd19084d33414d6a5d"],["/2023/10/13/cuda/index.html","55603f53c94e835b3415086402b0692c"],["/2023/10/14/cuda-python/index.html","bcd8e650c3955bda7eb87e39af3164d0"],["/2023/12/21/dl1/index.html","905fca6a3a072fdb47f8837a0bab72d9"],["/2023/12/22/dsandad1/index.html","ea84d4a7f4e741a5e38ddaab13ab22aa"],["/2024/01/22/dl2/index.html","377b36ff38d7c9dc6f3402ad2d8ad3fc"],["/2024/01/28/production/index.html","ead2f20b0475115f886f845504c68336"],["/2024/02/25/mnist/index.html","3a44eab5fa3e828e25627e905a31422d"],["/2024/02/26/ner/index.html","7608decd819d1e1d6393538c41ab7f41"],["/2024/05/26/multicategory/index.html","fa712db2ce87a2efd0b0fe9c1ac1be35"],["/2024/06/03/imageclassifer/index.html","70fdc3035cbada6e294763d4fdbaa814"],["/2024/06/03/nlp/index.html","abc5d464ac0b1efdfb983ed4b1bb6db3"],["/2024/06/10/trainsoatmodel/index.html","a83e997e3f7d10bddf4565e70ad7b7c7"],["/2024/06/15/collab/index.html","c691ffbf206e1c1eaf824ce77a10c938"],["/404/index.html","b1b5d677b68a548368c79f8ca19e001e"],["/about/index.html","0abdd586935abbc8647822a04e55d3a8"],["/archives/2018/09/index.html","5ccbfef552a24fc7c3570add4a1e6d45"],["/archives/2018/index.html","06337e75b1ba46fc73303e4eb740842f"],["/archives/2019/03/index.html","f6f8cbcb834561519a33402f3b17aee4"],["/archives/2019/index.html","dbea27366a6b5f72e96f9494ca9c2231"],["/archives/2020/10/index.html","3a569abca7b3b1a69b240392a098ae15"],["/archives/2020/index.html","4707dd2170f8875de6b4a4bfe7f098af"],["/archives/2021/05/index.html","e93d974b0ba0fa001497362ea3a2df35"],["/archives/2021/index.html","93d0f954835e829cc4b9b3a8acf0dd83"],["/archives/2022/01/index.html","3e9944f02a431819df0a72595759ccb3"],["/archives/2022/02/index.html","d5278e36cba204e43896fb80c08b27c9"],["/archives/2022/03/index.html","12a6529de421409741e4f728f01274b0"],["/archives/2022/06/index.html","a9d4cb2c44320bf4ad4f2c01e83e007d"],["/archives/2022/index.html","0dcd7fe8e1074d7985f00cba0df99f9d"],["/archives/2023/01/index.html","103e484ce1b21f6f794d5225ffd31e86"],["/archives/2023/04/index.html","de8b94b085e0f38dc6277c23b2be6a9c"],["/archives/2023/08/index.html","500da7fd34441d872e30d95455701d99"],["/archives/2023/09/index.html","251a0745cdf8fc5762a2083fed76602e"],["/archives/2023/10/index.html","6d8a80df71bf70fbbfbf5624ff1a1d07"],["/archives/2023/12/index.html","a2af0f7037e102256fd74876500e818f"],["/archives/2023/index.html","88531c7b15dc492352848c6ef3179a44"],["/archives/2023/page/2/index.html","d94e9be353cf0ab0b73fdbc7b43aaa27"],["/archives/2024/01/index.html","5a9fc953e6aee86c6c7db535e513768f"],["/archives/2024/02/index.html","11fb11fce25d813cbe00dd5be228598a"],["/archives/2024/05/index.html","0eb4a69afea35a442b811655672a5671"],["/archives/2024/06/index.html","e5da091114df1bad6c772da44ac66155"],["/archives/2024/index.html","aec2385c94b399607e15aa45719b4751"],["/archives/index.html","e3ed714795ef55d443b91df433996de8"],["/archives/page/2/index.html","d2000fe3a5bb46e59e7471bfe74f22b5"],["/archives/page/3/index.html","29c7aeb476f807ba36f26aaa1340ef0a"],["/archives/page/4/index.html","430de922a1b179e1a01638a2e10df41f"],["/categories/C/index.html","cfbf53abcecef263c5baf3c5b1da52f5"],["/categories/CUDA/index.html","f2a845c8cdf8e0fb01a1d6c305e51996"],["/categories/CV/index.html","6a3971294b00faa32bb9615876de6898"],["/categories/C语言/index.html","0677027e9909e832d0b8a800c66277de"],["/categories/Markdown/index.html","bf9018a5778dc3ffad99056f1f20c42d"],["/categories/NLP/index.html","af7170104bc08ad90007e48864c7ff2d"],["/categories/Python/index.html","10ebc8dd7b23afd6ac90264013858125"],["/categories/index.html","8ca17f5f44c725bded7168bd39f65f57"],["/categories/协同过滤/index.html","8b946ae0cca2a0f72a8cf9534b284932"],["/categories/数学/index.html","e1c897acba96e7511e2c75b6c198acf6"],["/categories/数据结构/index.html","4aaa16ecd7fbd1440515e81f40e84eac"],["/categories/深度学习/index.html","449a747ed6a6059f807e0bab97038070"],["/categories/神经网络与深度学习/index.html","0e056566a0d25bf970fc1999432603a3"],["/categories/算法/index.html","72164e48797fd0079bf534a64b9688cb"],["/categories/训练模型/index.html","373c2405b2c5690541dc0d9e676402e3"],["/categories/面试题/index.html","6f94631e65938e6f98d0c004e5b51016"],["/contact/index.html","b874301afad279b9661adf821c1b6337"],["/css/barrager.css","8b1cd10b07e1b517ca9f9a7f57a68341"],["/css/bb.css","fc9addf381920e9affa171668bf70970"],["/css/dark.css","4b90892926aaf10b93ee60098aacc0f2"],["/css/gallery.css","e912ca724e637b8758e39a8dba4e9d63"],["/css/gitment.css","8daeea8759ffbeea3e3d33c0f129592a"],["/css/indexcover.css","bf53e87b166a2836e2011f908348fe7e"],["/css/matery.css","1829926b950412ec89d054880df28429"],["/css/my-gitalk.css","e2614b3f45d7258f6d857e2ca62cb798"],["/css/my.css","2c568fb19837cc831b8e28c623157eff"],["/css/post.css","afabdd51d68869b02f614a0b364e1dfa"],["/css/reward.css","d34167c9261a20ed0e3ef09c29fc0a14"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","6e8b9cc88e4811299ece7ea3bc6fae31"],["/index.html","28a3d6e05d5b1f42cce96ca52c34bd99"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","f72191df0efd8eefa97d5479611302cb"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","03fcd96060d256f43edbd987a024bdd3"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","68197698b76bd279432a5320eaf8856d"],["/libs/gitalk/gitalk.css","18c4a59bf2d9c48ef0b6633305e7e341"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","4cbe8305e2abe7a3cc858384d3b1ae1b"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","7ada2d81ed187dd59d8a42136f04da81"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","1ddadf5122f6c1568f0d163799c83720"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","f8e588d0867ef89fb7aaaccbbe21361d"],["/page/3/index.html","834cc34c3d4679b9f36b0674b1b6892e"],["/page/4/index.html","4a1daca8cb68046774d2e5466470d33a"],["/page/5/index.html","cf64730a8f815e8647479b60059c9638"],["/page/6/index.html","8b6cf0f44bac68ec34f0d60ebbc09449"],["/sw-register.js","88853f1169c1d241903c7e7d8da67d61"],["/tags/CUDA/index.html","f44e45b39b7b6fa534566ba751e2e6d3"],["/tags/C语言/index.html","d37a058a94ff1e57db817826798863b5"],["/tags/DL/index.html","1117cd0d35b556e8c657ac8ecd87ce41"],["/tags/ML/index.html","277236492ba2abb97f317088681bc2ff"],["/tags/Markdown/index.html","1bdbd5f90cc2677460f12b8df7fdfce6"],["/tags/Matplotlib/index.html","66af59c07310c8f73b47b7f6324116b2"],["/tags/NLP/index.html","8414c0288ace6123d5222d6ec8f6511f"],["/tags/NumPy/index.html","f5fb3dd616e5d74f82cbb0f5e1da7ea0"],["/tags/PyTorch/index.html","838449b25f6a2023fa9ba2c0214d5d58"],["/tags/Typora/index.html","a993f98ddb0828afb366006426753bab"],["/tags/cpp/index.html","15d64c0afa806f2fda2069d90f8b1669"],["/tags/cv/index.html","50c8bc765941a82dc84688ed9ee8ee08"],["/tags/fastai/index.html","19bd08cb00e679328455b1a786abadaa"],["/tags/fastiai/index.html","96847c9941d82b4abd06599941305b5c"],["/tags/index.html","77eb162b10423dd7aa1057f6d539d133"],["/tags/lambda函数/index.html","260ff62380a398a922d56334aaffc744"],["/tags/python/index.html","9e190694a7d2208f66445a8eced28d06"],["/tags/函数参数/index.html","34e1fcf6262143cadb8faa7051e7a84a"],["/tags/函数式编程/index.html","13fc922fda4df60ba6d6fa8f8539f4a9"],["/tags/协同过滤/index.html","9e145216c803062c743ccc46c4c6e7e7"],["/tags/多标签分类/index.html","76d5ec3c74a83ff46936c5ef0998daa1"],["/tags/指针/index.html","e5cf1b6b6297b0551f8c6481da42fdf1"],["/tags/数学/index.html","0fbee4ce6620ace18045205191e14aa2"],["/tags/数据结构/index.html","5ba4e825fbfef97fa09bc5a6c3564227"],["/tags/模型/index.html","1257c36eef36ee8281424cf241c0a67e"],["/tags/测试与异常/index.html","cb7cafa42181fe647fb0630d60569c75"],["/tags/深度学习/index.html","ce9002d9354ccc9ac9d3daa73b83b415"],["/tags/生成器/index.html","b5ad81df81f262878dcf1a2e0c448fcc"],["/tags/神经网络/index.html","cb08127449162187b7a0eba0fea032e6"],["/tags/算法/index.html","a42b7247998f4c712fc30c6cef374dd4"],["/tags/表格建模/index.html","216f241b81caa5cce487287a400f29b6"],["/tags/计算机专业课/index.html","b941daf39ec648ddfeb0a291c0a82a11"],["/tags/训练技术/index.html","337cc055847bacb8ab5ee357487b4e65"],["/tags/迭代器/index.html","f2a45a2fc24aa4698426b5fb803ca48e"],["/tags/面向对象编程/index.html","186e9101b5178e30f2a333bef64218c4"],["/tags/面试/index.html","f9a7f421526a9e5c8392b6809a3731bc"],["/tags/预训练/index.html","dee4e58b3b25f3c0fd5c84a48c966419"],["/tags/高阶函数/index.html","61d0d6fbbf4eabc8dd67bb95b83b78ad"]];
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
