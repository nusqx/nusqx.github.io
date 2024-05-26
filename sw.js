/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","8771dd115de74f4faf0b138a3eeea004"],["/2019/03/16/c-cheng-xu-she-ji/index.html","e83929c0761220c34978adc8eb04a225"],["/2019/03/29/c-zhi-zhen/index.html","2b64499e8e1a5b7bfcec208c103ccbf9"],["/2020/10/15/ds-algorithm-md/index.html","ae50a5373ebfa813e07a64ff5473e68b"],["/2021/05/18/algorithm-md/index.html","031dc9ddafd294af9f4ca5fe7ae7cb4e"],["/2022/01/12/python/index.html","9838809faa8233a359eea5fc680110e8"],["/2022/01/16/python2/index.html","77c5cd9fd6be359daccadbc19320832b"],["/2022/01/19/python3/index.html","0881b3ff6b55a26006eafd873e366299"],["/2022/02/28/c-biao-zhun-ku/index.html","758fde3086d91fb746399b868ed5c618"],["/2022/03/06/cpp/index.html","1387618116b5b5a01909d0dc15e32680"],["/2022/03/19/python4/index.html","ea8fa4225978aac8b096bf160fd5c728"],["/2022/03/25/lambda-han-shu/index.html","ecd76768a6f1c427d1364a8684041766"],["/2022/03/26/python5/index.html","2418fd5be57426bd5f4d8850d8e189a2"],["/2022/06/02/python6/index.html","280fa4fad2a5489763cdfa7b66085408"],["/2023/01/06/python7/index.html","edd12068c7ed740631a6eac1915a1427"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","702d984a3f827eeeaec739dfb1c12b19"],["/2023/04/16/machinelearning1/index.html","d3a7361548c3d5b0af92ecae277010f7"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","b5b97f3c6983109e6f3bc6240335c19d"],["/2023/08/08/python8/index.html","824a3d4a8206885a29ece140a12468cb"],["/2023/09/05/deeplearning01/index.html","bf501a5311151ae006022a864aea83ae"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","9dedbec8ccaf6a22fa1cf8f8f8966a72"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","0f0cfce70e7543685f50b4c1e42d70e5"],["/2023/10/13/cuda/index.html","959210a616eaa6ef41fce22ffa3eef42"],["/2023/10/14/cuda-python/index.html","a79fd898abedc145fc103d2343acbd88"],["/2023/12/21/dl1/index.html","a7024651b7e9d4aa50d3b0966bc08e2f"],["/2023/12/22/dsandad1/index.html","3b3e42e91d225c548eb19c05c8a42274"],["/2024/01/22/dl2/index.html","ffe93251ea8cff073c0600e8ecd392c2"],["/2024/01/25/mnist/index.html","56f9cabffe46179d614f060403b7299f"],["/2024/02/26/ner/index.html","3c53d39b477025abe076545ff65bcac8"],["/404/index.html","7d220d7cc975b15ee8d12c590d503caa"],["/about/index.html","ab40d743c08fea90c26638f8ba602509"],["/archives/2018/09/index.html","cedb092b7292a8e3b5cb646dff91c194"],["/archives/2018/index.html","f256bdfd56b7aa1b32e21fb0c0639534"],["/archives/2019/03/index.html","26975ff4fc9b311e882ea4b5590727eb"],["/archives/2019/index.html","656b739bb4eac451ea63d2ff61144961"],["/archives/2020/10/index.html","c7a0d60d62d0d1ad01ea5add9d79e1d6"],["/archives/2020/index.html","e07312662e8258f8a28ff59e756e17c8"],["/archives/2021/05/index.html","b3dd606b479cd99ed0ee5df90b2aae41"],["/archives/2021/index.html","54432ccef30e925def5400318fa81852"],["/archives/2022/01/index.html","78e84c648f843ae7accc39a59a8849d9"],["/archives/2022/02/index.html","4aeb2fbe8022a043e910b35cc2247bd8"],["/archives/2022/03/index.html","a91b7c86f9a58e8fd29b27b9783b3cb8"],["/archives/2022/06/index.html","4073506a9a4a3dd81cfad48901f2a15a"],["/archives/2022/index.html","d5ff9cc76ab0a66876b9b2e5cc044c97"],["/archives/2023/01/index.html","2da11b47052cd52662ed8a948944ff6f"],["/archives/2023/04/index.html","cff5aae7f5b4c9e14a073bba7422c70d"],["/archives/2023/08/index.html","a5ce22ad2c348b7cc17c6fad7cd5e24d"],["/archives/2023/09/index.html","b588b327a2e6d9a37c24609525bc8e9d"],["/archives/2023/10/index.html","9b86994e29622a9f3b4f9b3f3843fd43"],["/archives/2023/12/index.html","e1ad003f93fe57af82abf67b2d93f875"],["/archives/2023/index.html","4af2ebd5cc8a5a2142b63fc8d7555419"],["/archives/2023/page/2/index.html","48a25b6ce811a2e69a1d08f03ded6bc0"],["/archives/2024/01/index.html","2b83dfb5f2ae48dca3b1f8261fb0e493"],["/archives/2024/02/index.html","02f990d40a4e410bf69d8fd65bc1bbe3"],["/archives/2024/index.html","2110f7053797da1fb36c38f4bcd31672"],["/archives/index.html","512d89a895545d106fafb5f7b7c3aa99"],["/archives/page/2/index.html","a0bfa86f47bd4b4a3e53dfc2db8f00ad"],["/archives/page/3/index.html","134a9c348b900edd0f742628460bdffe"],["/categories/C/index.html","3c722d5860131fd459013643efa58797"],["/categories/CUDA/index.html","0b2c4c2446d48a9cc6ef816435a35ade"],["/categories/C语言/index.html","aa18e80da11c182c89bcfa334ca4d50d"],["/categories/Markdown/index.html","f0b1cf575703dadef8612bd67c5108b4"],["/categories/NLP/index.html","6b8146b9b672cafc62ebcfeac5c4a203"],["/categories/Python/index.html","71a3fe1a76d88a0bbb7413fc591ccabd"],["/categories/index.html","a42b63bdab741053d7af36776c36cbc3"],["/categories/数学/index.html","626e7fb029a96805012957f07e0b76da"],["/categories/数据结构/index.html","aaea2e093c84b3facb291068a74f49cc"],["/categories/深度学习/index.html","752990867a8db7dea6e860450101edbf"],["/categories/神经网络与深度学习/index.html","2c14aa15879f4dca86aacf76111bcd14"],["/categories/算法/index.html","e028194a52a7ccd3d0917c3254edacc6"],["/categories/面试题/index.html","dd0903dd5d36eaeb0e0a4f356135d7fa"],["/contact/index.html","57111212f7d30357206d1109f9c8d17c"],["/css/barrager.css","a2a383f58d356d9564ca35306b6fb907"],["/css/bb.css","d5b4c1f59041100e1091522955cf0a7c"],["/css/dark.css","49e5d1d3d1b23d212735514dc0a6025c"],["/css/gallery.css","e904b39abb257d58762ac669642e188c"],["/css/gitment.css","89d8d001517986ff854a92c1596968f5"],["/css/indexcover.css","c1c3cb0ea139b9e537ac61b92747975c"],["/css/matery.css","e99a41aead80acd103cfa92f47f23334"],["/css/my-gitalk.css","48779395456274e1cf8dc91093c935ec"],["/css/my.css","0414e8efaf7f4f7353a4487db7e97646"],["/css/post.css","fe3628f6cc10639e50963da9294f09ba"],["/css/reward.css","45bf969c1508a6416b2692850ad6d1c0"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","d546e124d86c3db8f10ac9fa76ce3c35"],["/index.html","560c5273881511798b1cd71a1a427940"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","bf5fde72f51b66822292aeb1b6151344"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","ab6308321dee4ce45673463f515c84ff"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","915b22206cde2a9a577d5ff3fbcf5b62"],["/libs/gitalk/gitalk.css","9244243e681c0968c19baabea7c06d8d"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","62f9cb25b754ee13a5327e02b76a5eac"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","ae72ce2702ae389e9bbd5d929e1043af"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","ef5b4232d3d1769a1fa87c86273f08f1"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","0c2e692314040979ea03d75c82eab401"],["/page/3/index.html","e0021a8b7a754881b014753889998fc6"],["/page/4/index.html","7bf7bbf07e582ca5b45db2e6c57e39b1"],["/page/5/index.html","bd711c7837f7b77bbd84e66199baf302"],["/sw-register.js","c311c141cef0c1b8c97cb7c3625b5eb4"],["/tags/CUDA/index.html","ef111a53ad772eefedd4022b9c22a13a"],["/tags/C语言/index.html","c89abfa0502e109e580d26875d659dd0"],["/tags/DL/index.html","4168f85429913c81c3eb1779edccfaca"],["/tags/ML/index.html","7e6eb3ae5665da907e72b2e7afb2ef8a"],["/tags/Markdown/index.html","b8ba45ffaa3f619aaa711438d458fe6e"],["/tags/Matplotlib/index.html","e50643652c6e93fcf657d0375bdd32f5"],["/tags/NLP/index.html","4ad362db2eaa23db2b6f922676af0f3e"],["/tags/NumPy/index.html","18848e7aa66b1fe0e5c138719d8b8ae2"],["/tags/PyTorch/index.html","06ff462a591ad47507785a2961310dbf"],["/tags/Typora/index.html","4de9a5e55bdd608f925b833189880b66"],["/tags/cpp/index.html","50baaafdc39e0ca5902993e177ce83a3"],["/tags/fastiai/index.html","31ae0cbda2265117d148e4acbdb29f37"],["/tags/index.html","336db5ee128d9c2de2fea8ee51431a72"],["/tags/lambda函数/index.html","24e0bae61f6fafa289ae92dd95c67d52"],["/tags/python/index.html","65551966ec9b943a30e484b6d6a5e1ee"],["/tags/函数参数/index.html","307f1c5df03144f610351349fffba61d"],["/tags/函数式编程/index.html","a44d5de17632043797936d4a3d45a8bd"],["/tags/指针/index.html","7aaf6f1e42eef8696f1ffa5faf1590c3"],["/tags/数学/index.html","48fcd0cf5d7e64256800fbaff1d96db4"],["/tags/数据结构/index.html","d9e7208b7f1e311e11f4c340acf6d489"],["/tags/测试与异常/index.html","5cf6ba9c0c5f7887d636e493978370b6"],["/tags/深度学习/index.html","44ddf96b1b5c63d28f21b47baf91eb81"],["/tags/生成器/index.html","7d6fdc86110945c3f1e4569f8bd2ba53"],["/tags/神经网络/index.html","1da37ee844f40db9ab712aa2bfc040cf"],["/tags/算法/index.html","fd57bc2d3c00eee7f8fdd10afd2116e1"],["/tags/计算机专业课/index.html","aa24a1fb8b35d5f4b9af0a004d0f0969"],["/tags/迭代器/index.html","0388f12cdc2b99c9eab08455b37c4e92"],["/tags/面向对象编程/index.html","0a9f6af3518a45a5a6e191fa936f3495"],["/tags/面试/index.html","ba3405c6a3b670dd4935dad65926f2bd"],["/tags/高阶函数/index.html","5a5783ee4b596824237d7a38b5c26163"]];
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
