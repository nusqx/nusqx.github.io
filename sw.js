/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/24/hello-world/index.html","c87df643824df6406e37152bd6259762"],["/2019/03/16/c-cheng-xu-she-ji/index.html","6c97ec9fe820f7e7e8922932091bbea0"],["/2019/03/29/c-zhi-zhen/index.html","b1faa70751ba8f51aa2618bf5f81cd1c"],["/2020/10/15/ds-algorithm-md/index.html","4f9be18fa2119de47e0887a3aa8b5fcd"],["/2021/05/18/algorithm-md/index.html","e6d2bc436b7e9ed82a688e543f9fe8ad"],["/2022/01/12/python/index.html","f8ea4e6239e10d2d59dc8e1fc62485f5"],["/2022/01/16/python2/index.html","4d8e3f0cc30e99ab78df06a7343fc3c8"],["/2022/01/19/python3/index.html","57a743ca4e3a426db3a2e16b05e681f3"],["/2022/02/28/c-biao-zhun-ku/index.html","97cf517b0184b771b82d5c7581cb7b0d"],["/2022/03/06/cpp/index.html","67eebda4519cc0d3fe5af406c97d5824"],["/2022/03/19/python4/index.html","4c8aa739034bd93277a2369adf1da5d0"],["/2022/03/25/lambda-han-shu/index.html","5e912eff3ebb49f46cf8733f81615040"],["/2022/03/26/python5/index.html","197218ad9ecfee764c309aa9535eae41"],["/2022/06/02/python6/index.html","fcb281891edb1578ddcb0e218b7206e3"],["/2023/01/06/python7/index.html","82fe76515b449bc8bf5a441b6df677b4"],["/2023/04/01/ji-suan-ji-zhuan-ye-ke-wen-da/index.html","6cc15e3f98e4c153c576a526e568854c"],["/2023/04/16/machinelearning1/index.html","8827aeca36d2309951f6865d262a4c5a"],["/2023/04/24/unity-jiao-ben-she-ji/index.html","2d031b32316657beb0c9b7df6e169a8d"],["/2023/08/08/python8/index.html","b8f85fec1315c4bc26b6670debeb5fd3"],["/2023/09/05/deeplearning01/index.html","d8302f9e123e20904ce31846b8d5f904"],["/2023/09/06/mathematical-foundations-in-deep-learning/index.html","a656d35d450b10bcc7f681b20cce73d3"],["/2023/09/07/shen-du-xue-xi-kuang-jia-pytorch/index.html","52603ae24309886a7ac083122e9b96a1"],["/2023/09/26/springboot-0/index.html","46b71a83286a1b364351b3ae0f1138f0"],["/2023/10/13/cuda/index.html","56689103e4da92c606206a9d1eef9eef"],["/2023/10/14/cuda-python/index.html","c5eeaf28cada32305157670eacaf5f87"],["/2023/12/21/dl1/index.html","dc5876395a694418dbcdfb9f73488c82"],["/2023/12/22/dsandad1/index.html","30fe13959bafe130e0cc22f5baa1f50b"],["/2024/01/22/dl2/index.html","5d8b353f05269e54b2b101cf3d7f7bb3"],["/2024/01/28/production/index.html","201fd64f1c1607f39bfb50909e676167"],["/2024/02/25/mnist/index.html","fcfe1cffc0758518d6f2d728c06c143a"],["/2024/02/26/ner/index.html","99ed3b87eca00efc068d781beceb4d13"],["/2024/05/18/springboot-1/index.html","95ba38ce7705633466cb096d93c55c5b"],["/2024/05/26/multicategory/index.html","2208b69bb7aed286cd637e001fd3cd7b"],["/2024/05/28/springboot-2/index.html","25ab8ac69eee1a25befcca203e5550d6"],["/2024/06/02/regression/index.html","abb43b5c8ddc39a3f5b4e3b44d4ed223"],["/2024/06/03/imageclassifer/index.html","d83a336e558a6ed5abff2e2ee814ac18"],["/2024/06/03/nlp/index.html","c69c3520916c52d22327e249cc2e5dd6"],["/2024/06/05/springboot-3/index.html","c7e1aa05c1931876b80d077fc3d21705"],["/2024/06/10/trainsoatmodel/index.html","395d63313b815e417d09386636f668db"],["/2024/06/15/collab/index.html","8fee5e902c66e66e4155264bebfe1406"],["/2024/07/03/qian-duan-kai-fa-vue3/index.html","31f2297af92855c4847a7ea4934ed124"],["/2024/07/04/vue-qian-duan-an-li/index.html","8fb6c169319e3fcc329f3384e744c366"],["/2024/07/05/element-plus/index.html","4562e3edff452b1c2bf54433b840e834"],["/2024/08/10/vue-kai-fa-an-li/index.html","abdb6289a92b0faffc3f30331d9eabe2"],["/2024/08/26/ddpm/index.html","eaef6225b79cddd28ac3d1016deb1086"],["/2024/10/15/redis/index.html","c40d64780c3f920907110093c3b4a6e0"],["/2024/11/30/leetcode11/index.html","5e7e5d34127b57795a7a70336eec4bec"],["/2024/12/21/tabusearch/index.html","94a616ecd19c4f0b79acf22cf19aa3bf"],["/404/index.html","fa0e13a745e507f4d060cdfda8f1e140"],["/about/index.html","a3d1cff48325539192ed9cb8000db91a"],["/archives/2018/09/index.html","c082e887898e63b1a9a948c266043a15"],["/archives/2018/index.html","1432e6bb40b2b42604ed2d0f9414358c"],["/archives/2019/03/index.html","e6b8a0a059d4c780b4a3c4bf65c48070"],["/archives/2019/index.html","956624f7f3cf64d1bcba4f35e339a936"],["/archives/2020/10/index.html","106fbfcbbc9e89b603f22fddefdd2e18"],["/archives/2020/index.html","431c40a920d637b686b3546375f78789"],["/archives/2021/05/index.html","3216e74937b350f2f589611ba6429178"],["/archives/2021/index.html","08d5e3bf982ddc3b983b251984fba776"],["/archives/2022/01/index.html","02e58dfbf7cee34a860f2fabe80ff1da"],["/archives/2022/02/index.html","b643ab5612adbd8c0e554c0d5a6c945b"],["/archives/2022/03/index.html","615e04234b9bf923d81cd183e9c3fe09"],["/archives/2022/06/index.html","f08c5211428a64c59c99bc4e5dfc58ac"],["/archives/2022/index.html","eccd8cc857ecad3ccadcf8134e268f2c"],["/archives/2023/01/index.html","2d89f837491d1abe33240ab5c857502e"],["/archives/2023/04/index.html","215d23e1fe11bc166a6cea5fa94c7b04"],["/archives/2023/08/index.html","63810d7e3c9b6cdeb4f8a7a0b75b5b56"],["/archives/2023/09/index.html","c1e6a3a38ddcb97bd14a41125b3a7866"],["/archives/2023/10/index.html","bb1e437885e05956cc815f42648def9b"],["/archives/2023/12/index.html","5549c374c6ab4dcb9204b19c57062cf4"],["/archives/2023/index.html","83c5bb75967d4f857b5a0de4853636fb"],["/archives/2023/page/2/index.html","82024d81190df4c461636e5d38e05e31"],["/archives/2024/01/index.html","b14fd54fa1b6f6cd838d356864cc2a0e"],["/archives/2024/02/index.html","78e455d4bcaff58e69a2b27e5579112f"],["/archives/2024/05/index.html","93d8c489e8691d5abda6387d1153a29d"],["/archives/2024/06/index.html","680c6946b706571b4bda9839cf3a6da3"],["/archives/2024/07/index.html","53c66a075b536cb43ca6b7f0f1299595"],["/archives/2024/08/index.html","c26f8efaf425ca206b01c6e841967af8"],["/archives/2024/10/index.html","13e3509594431f5280b9e6d03fff361a"],["/archives/2024/11/index.html","87155cc95475962cbbbfe11a9e063f55"],["/archives/2024/12/index.html","e75d6067fd603e816fdd1cafe27450f5"],["/archives/2024/index.html","1050cf6d9690398a1a1dbc68c20d7406"],["/archives/2024/page/2/index.html","655bab583704a1f6cb9215e7dedf0f28"],["/archives/2024/page/3/index.html","29a417dc70ebac4cded9c08271f71c5f"],["/archives/index.html","4b23c203d85bc36f2cd057425261b8aa"],["/archives/page/2/index.html","506b94286607c06caf1980cea781a4f6"],["/archives/page/3/index.html","fa6c4ace537281442733979d3c91ef87"],["/archives/page/4/index.html","cc0823bf47ce28cba202a5e6d9043438"],["/archives/page/5/index.html","c9c6ab2e8fa374e73a68a2c3609f0bcc"],["/categories/C/index.html","b4ea73412f3cc478d99772b32e704a71"],["/categories/CUDA/index.html","3fee2cba337b9e0b7dc8f5316aeba123"],["/categories/CV/index.html","fe0409007a3337994c8c3a8c4242a55f"],["/categories/C语言/index.html","6e8d64f7225f37ce6c9aa4caae473cd4"],["/categories/LeetCode刷题日常/index.html","127c6feb1dcaade521f42ab16b02cbf6"],["/categories/Markdown/index.html","1fa13f1ad4070ce1d557c1e7d2f81fd6"],["/categories/NLP/index.html","3a8e26ae01ec3e733519648019df2f6c"],["/categories/Python/index.html","e99c2ac4a8d2be8e0caa151f44e74c1a"],["/categories/SpringBoot/index.html","a27373a2453e3f63c0886a1d47416729"],["/categories/index.html","22fa8267e6df20c6af99d19c64ecf410"],["/categories/前端/index.html","8fe212bb424c20d1a1a8a454e8d1eed5"],["/categories/协同过滤/index.html","a44720ff1af0b7ca77d339092d9d915a"],["/categories/启发式算法/index.html","83a6e9d5cef7c07251b0c5138bb83a20"],["/categories/数学/index.html","b33bec7023ffef42aabcd0fd79980a4f"],["/categories/数据库/index.html","e9e84459464f6bc3209b46bc4cc62e28"],["/categories/数据结构/index.html","e1cbd26b6310cacfec7d58e5a077fdf5"],["/categories/深度学习/index.html","58c7d05a914dd9f8e166a0e03750e6ef"],["/categories/生成模型/index.html","da05cd8fadd422a369cd924eb826c569"],["/categories/神经网络与深度学习/index.html","138555ad3a86dc7082f82f3419abb64b"],["/categories/算法/index.html","7be9adfbbeb8f2d6450d812db48c9032"],["/categories/训练模型/index.html","57953a12ed5e1b52d591179b1311e3e8"],["/categories/面试题/index.html","a12f71a17f8069a1fbbcafaf80638d81"],["/contact/index.html","dcea53c9bac6c8c8ebfd9a713fba8b50"],["/css/barrager.css","8f5a0fc82459326fdcc64f5929bfaa7b"],["/css/bb.css","b19a6d255d445d7f9ad53a965f0365ea"],["/css/dark.css","a1ed97302aa037cc5487326654bf6413"],["/css/gallery.css","05d0f9d546aa0d029558538b92b13854"],["/css/gitment.css","8dea4b02ce6e0cf42eb518fe4d82c255"],["/css/indexcover.css","b14fdbee85da843f2ce2852b993065ad"],["/css/matery.css","08869ade66fba91a634b55c208dbaca9"],["/css/my-gitalk.css","7adb3f0baff0d47613e7a3949c9ec486"],["/css/my.css","62cb27cd1068f4846326d2e9d6b539ef"],["/css/post.css","bcc5b89eaec306d59ca2f1fed7377466"],["/css/reward.css","4c85b79ec200d2e698be84a55ad8d775"],["/favicon.png","da1ed4b229f010f3396d7d4731abf7a2"],["/friends/index.html","9bf8f38beeb50868bcfc025bad704e32"],["/index.html","616aa885dacaa4d629be96eebf8f9f3a"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","2b4f23eab0e8d856119da36635d7d16b"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","cf787a37a826b4196238bded73a80ce8"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","aea4e1810bbc3810486c9dd1622adf01"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","bd378a624928da948ced84728cd1d32a"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","2d22fcfa77970ebef52b0c68513993a9"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","6848649d0c3d8ca79dd1f6748876650b"],["/libs/gitalk/gitalk.css","70ded8554881bcd37e6f30b9e01d2bed"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","ba1dbde4ad703b9fb01ffc49a74cf162"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","0a3db083554a3fd13b3f41bae61a6b5e"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","01bf434380139692bce7a8f4a20f7073"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","c2b76cda47ea22fdfadf8209943d5ff6"],["/medias/banner/0.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/banner/1.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/banner/2.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/banner/3.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/banner/4.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/banner/5.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/banner/6.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/bilibye.png","0fc1595a12976858a5b86704097796b6"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","91ea8fb5250cbac9d3aa34c5205dbfdf"],["/medias/featureimages/1.jpg","ff97bf3994db112b4a2a94046e967a0f"],["/medias/featureimages/10.jpg","5fa507d58d61d97af98b2218cfb4035e"],["/medias/featureimages/11.jpg","0fb74190629b6e3447d289e05e3f9a30"],["/medias/featureimages/12.jpg","95e793ad66d48f2dad9f19fc7e96ee31"],["/medias/featureimages/13.jpg","0003d74a1b438a0b71c8021d50cb67d6"],["/medias/featureimages/14.jpg","01e599f8bd769ab716e4a402f95d4a67"],["/medias/featureimages/15.jpg","2b95f0faaa5e5ef0ada2809af02a85ce"],["/medias/featureimages/16.jpg","73f993ad14f6c268684dcb7effb88e85"],["/medias/featureimages/17.jpg","d0161b3786bd891e4e1a64ba01826ae2"],["/medias/featureimages/18.jpg","f8550c3f28741758127f20af9faa46da"],["/medias/featureimages/19.jpg","cef3b5cc7afa2eb3a80f57e8f5a42fdc"],["/medias/featureimages/20.jpg","714ef680ea3280f8b970692914e1dbad"],["/medias/featureimages/21.jpg","38532dc437b5ba5cd0df8aa9f2b8bcc2"],["/medias/featureimages/22.jpg","b27ad328b221f6df4c83bd0702b7bb53"],["/medias/featureimages/23.jpg","2fec9df9472f5cd039e1ec8e5b14ac37"],["/medias/featureimages/24.jpg","63f0e4033764f0fb3d6d67fbbd3f7b10"],["/medias/featureimages/25.jpg","dbed79b402c1d3985132238d0926e8f3"],["/medias/featureimages/26.jpg","6ef25ba8ac52f1b92f1e91038379f632"],["/medias/featureimages/27.jpg","0200e13560af512e360a95c67ba98e28"],["/medias/featureimages/28.jpg","aef3399e258584a1498db7193a97a0a7"],["/medias/featureimages/29.jpg","993a8f9b16f96af054a1d0ab26cd1d62"],["/medias/featureimages/3.jpg","0ebe77411c9d9269179d6c2658e32172"],["/medias/featureimages/30.jpg","4be38297b91a95a82b0c0955d97c4553"],["/medias/featureimages/31.jpg","c97be9e12e32384b9dde48a0a985b75d"],["/medias/featureimages/32.jpg","3d96d5225d73b6031d0c95e5c3181891"],["/medias/featureimages/33.jpg","9838dd88fe15553cc56b18d34b50868d"],["/medias/featureimages/4.jpg","bba42652359e35fad5ab47f63dd1bb84"],["/medias/featureimages/5.jpg","58e139a03f4b2be7e677888263dac072"],["/medias/featureimages/6.jpg","6ffd222a0ddbb5f46ae176ea87720eaa"],["/medias/featureimages/7.jpg","5c24cb288b710fc138d27317da1b2f2a"],["/medias/featureimages/8.jpg","89108aecb919688cca530149d1b94ec3"],["/medias/featureimages/9.jpg","d8dddc034a2598a20019cfd19d9ef9e9"],["/medias/featureimages/picture_1.jpg","7caead2755150d648344bc2fb9bf5b2c"],["/medias/featureimages/picture_1.png","31328e488857b633cc1e7b404d18bc92"],["/medias/featureimages/picture_2.jpg","bb2f94ce287d5b93ab08a1222cce6cdb"],["/medias/featureimages/picture_20.jpg","4308cdff2f48f1072f2a8cdb79a5e11d"],["/medias/featureimages/picture_21.jpg","2111c22eb3793a0174040acf98cbcc7d"],["/medias/featureimages/picture_22.jpg","9d1e34c412bc4e8431e28c6a1bb62ae7"],["/medias/featureimages/picture_23.jpg","c889cb7dc11e6a19983f7cbac1339916"],["/medias/featureimages/picture_24.jpg","d56e7bd6595201ac70ae23ec1dc9da7d"],["/medias/featureimages/picture_25.jpg","5b9734daf21d57b4daf1bef21145de4e"],["/medias/featureimages/picture_26.jpg","6728a604a4b983de4ea6be1da2537c7e"],["/medias/featureimages/picture_27.jpg","201ad34199e10c50c232ac6c51a21b6d"],["/medias/featureimages/picture_28.jpg","83bc24323b3351cf959f277f61dfbb51"],["/medias/featureimages/picture_29.jpg","bc7eee54364c47cee339c474416dad74"],["/medias/featureimages/picture_30.jpg","30928b88b4a4ef870d32a0ddfca5155c"],["/medias/featureimages/picture_31.jpg","06f1493e9369f0b24e05bc66b227067b"],["/medias/featureimages/picture_4.png","c42db795723f66f59961ddd707af427b"],["/medias/featureimages/picture_40.jpg","84e6c9b7c5cd126065331654394e6292"],["/medias/featureimages/picture_41.jpg","02815964ece644aba5a9b77e83c7f329"],["/medias/featureimages/picture_42.jpg","fc6e8a06440d2f937351fc44c3e6dbbb"],["/medias/featureimages/picture_43.jpg","4c7ed484af6217e6a3d9b8e29afbdf33"],["/medias/featureimages/picture_44.jpg","5ecaf6281b80e0a5c612f06e6adc6fad"],["/medias/featureimages/picture_45.jpg","4a3d245f3b8db41e5458ddbc0d1d7370"],["/medias/featureimages/picture_46.jpg","e8a9b70ba2b8abcc70c68736e65178b2"],["/medias/featureimages/picture_47.jpg","01ed11adeb397af4550b0ba8e389f720"],["/medias/featureimages/picture_48.jpg","566b0ba8db023e160f71d521b67a5af7"],["/medias/featureimages/picture_49.jpg","a44b9a41bc60b6ca3db35f25628e7298"],["/medias/featureimages/picture_50.jpg","19eded079c8fa0e9ef7cd28c061dfb68"],["/medias/featureimages/picture_51.jpg","88564c6007f99405e67c8e91dbafd183"],["/medias/featureimages/picture_52.jpg","c0edacf8c76537658038e8adb8bee3e1"],["/medias/featureimages/picture_53.jpg","594f60eee13686b03f47fd78db6994a0"],["/medias/featureimages/picture_54.jpg","88de6d65f78de8c0831e2ea94b3fdb61"],["/medias/featureimages/picture_55.jpg","03f73e891ffc36d8296ad276e28ab279"],["/medias/featureimages/picture_56.jpg","16ac9a9648edd95d187be338e9340a85"],["/medias/featureimages/picture_57.jpg","1fe75edb12106082b208e2eb538492ff"],["/medias/featureimages/picture_58.jpg","f235397c9418dcf3423eccba9ef4c926"],["/medias/featureimages/picture_59.jpg","c2225c4da4dc4ee689f10db875b6254e"],["/medias/featureimages/picture_6.png","1c35560ef4f34a04d2f739bb85c1c1da"],["/medias/featureimages/picture_60.jpg","0bc7e620cb8d18a8be831f04aedebd58"],["/medias/featureimages/picture_61.jpg","4ccea3ffc630926a8596c51b371daa64"],["/medias/featureimages/picture_62.jpg","e8fdd5ed5d391a961fa9da8062949c06"],["/medias/featureimages/picture_63.jpg","5199d5686cc9a02315892013a66551c1"],["/medias/featureimages/picture_64.jpg","90b16d3d0fc8bb1f339edad5a8b1494b"],["/medias/featureimages/picture_65.jpg","af3f90ba42680d62e21f95f0477f3b67"],["/medias/featureimages/picture_66.jpg","b055fc28de482f08a2c2bfa883e24c83"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/loading.gif","dce3a953bd08eb1a5337ee4ac0112f9f"],["/medias/logo.jpg","d02a826157389bb05a02a6cf8993a179"],["/medias/logo.png","da1ed4b229f010f3396d7d4731abf7a2"],["/medias/reward/alipay.jpg","e3752abe1ae1d1e73048e3f3e7f45a14"],["/medias/reward/wechat.png","0477a03d8686d96d87f4641d9c9eb649"],["/page/2/index.html","a6fc868609661c2f0f5e9593b0bea710"],["/page/3/index.html","46526694d7498d4c453939ff693ae4c8"],["/page/4/index.html","61158795cfe8315ecedaac9a6ab4e168"],["/page/5/index.html","2c8068098adf23e06f39c0e487db8d5b"],["/page/6/index.html","67ddc649f2935e037422335ff36af9f8"],["/page/7/index.html","420a0de8f007cd5be03a630f30dd905d"],["/page/8/index.html","84f18288e6a04c974f69ff51ebd6f9a9"],["/sw-register.js","f1e80930f21b2c2650338e805e12bc0f"],["/tags/CUDA/index.html","4a7ba80b274ee65775ee558f3d9d329b"],["/tags/C语言/index.html","b5be123dcc3ac8e9eaa50e75b9ecff48"],["/tags/DDPM/index.html","cd823718fa5cc85e69343fdfa0a0701f"],["/tags/DL/index.html","b35aca188e18a072cb86f9aca4110976"],["/tags/Element-Plus/index.html","448efafb7b6c167f1901d91f4a1b413f"],["/tags/Java/index.html","120d693ace97a16eae62c72fbca834f6"],["/tags/ML/index.html","947c9abb0c7ad096f1198ad929cf553f"],["/tags/Markdown/index.html","e9cfd1a510a3bb13ac41744c481da487"],["/tags/Matplotlib/index.html","2d299a9b847813f81a4d71da290ec617"],["/tags/NLP/index.html","2a72717316c3aa102d0806922b4f99e2"],["/tags/NumPy/index.html","333186e139d48eaae0267709ba76e2c6"],["/tags/PyTorch/index.html","fdc8d56e96c546e25447fed9329911ec"],["/tags/Redis/index.html","305e069bc3d17fa3336507abbf2113aa"],["/tags/SpringBoot/index.html","ec8b975d12fff50b7bb55dab6c81e966"],["/tags/Typora/index.html","4fd6abc31fb04ed551ef8fa58c09cd8a"],["/tags/Vue/index.html","1e8dcf3a20d189496aefb451f98c367a"],["/tags/Vue3/index.html","87f8bc71dddcfe21e3148e83b05abd0c"],["/tags/array/index.html","aeeb04de142506ec6d311fd350111c7d"],["/tags/cpp/index.html","22f7b4449f8366d53e444fc413a04135"],["/tags/cv/index.html","a57e3bb7418504a46ecf9c23d3fbff05"],["/tags/fastai/index.html","d6bee676908775706409b07d8f5a4d90"],["/tags/fastiai/index.html","bd1e7e21eab5ad2dd16a4249dd638dd2"],["/tags/index.html","3f8816aab086ab653c59ae9b62544763"],["/tags/lambda函数/index.html","1751a0aea34da0c74046cc2818a312c3"],["/tags/python/index.html","3f5a735924d51590c26b12d65e8d359e"],["/tags/two-pointers/index.html","71e3085544585375ce496155275e79a8"],["/tags/优化算法/index.html","d884f5367d139cba6c8b3919cd61a147"],["/tags/函数参数/index.html","4f3feaaf4ae569d60905d73a56268a17"],["/tags/函数式编程/index.html","d9ffd967223e76f2f3a8a69c33492630"],["/tags/前端/index.html","1941b52ff7a996f17ffa2d0adbba5556"],["/tags/前端开发/index.html","6b3a4e074b64e5affa4f6840a45dd4c7"],["/tags/协同过滤/index.html","24f46e32b5cf1d553513d20db9ff5857"],["/tags/启发式算法/index.html","8fe9727cafdd7452b2bb7de622725a01"],["/tags/回归/index.html","a25b296e41f9488157467f7b351aee6d"],["/tags/多标签分类/index.html","25b26981c189f6cb557387b34aef17e3"],["/tags/指针/index.html","4d93e1e5f963fbfc0f107f3078feddf0"],["/tags/数学/index.html","ed6e24e9c409c7c7848ef23251b0ce0e"],["/tags/数据结构/index.html","5ed4b036bd508f46124534beed5037a9"],["/tags/模型/index.html","0b0f63507bb75c015897798bc8115248"],["/tags/测试与异常/index.html","9633ec533a86474245a0dc84f4fcf520"],["/tags/深度学习/index.html","55349c6934fe59baeb036d76c8dab4e1"],["/tags/生成器/index.html","8021768ef1151f928efe58d45eaf15ab"],["/tags/生成模型/index.html","2b3ab33c16cd6ed7a51f2581419aeb15"],["/tags/神经网络/index.html","255e7b347bdf0abf6b4aa6ac7c6a0c2d"],["/tags/算法/index.html","c13cac9124afef19b3057d1d85da414e"],["/tags/表格建模/index.html","e6c88aa7e6d7d0840f5141ba939fb384"],["/tags/计算机专业课/index.html","d5af99cc998e17b431ab353e11e16dc0"],["/tags/训练技术/index.html","99c10587154ada78dda06e25a4dc38df"],["/tags/迭代器/index.html","367a4c1f3b819ab0c110bf73b8fbc35f"],["/tags/面向对象编程/index.html","097b16386a4f8faaacf2d0f14d3587b6"],["/tags/面试/index.html","fd7623e49701f5fd9c9481adf6202550"],["/tags/预训练/index.html","96ff510913e286d924be0d9c4f541a9b"],["/tags/高阶函数/index.html","1a298dc68e34e323f546df1677a5717c"]];
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
