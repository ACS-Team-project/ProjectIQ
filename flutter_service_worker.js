'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d20a9d42e9819701045a4ab3c9ad6bb3",
".git/config": "7acaea0b92056e6adbd97ef583fd8558",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "05907041ca41ef1322e1313722a37190",
".git/HEAD": "5c83f4b47c50c4f6ac136dce6c1a6f51",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "66d4cc1437353a214607f443229b52be",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d7d0a9c1f127ae895de0da0881bccb8",
".git/logs/refs/heads/br-ProjectIQ": "eac92e6210ab16c07541b9f7a3e4ae92",
".git/logs/refs/heads/br-project_login": "6ade9285d29a81ae113d54b13fb6c552",
".git/logs/refs/heads/master": "7936bca2cc33eeaa3d05931912754cc8",
".git/logs/refs/heads/ProjectIQ": "e191a264b896d249a25dc6eeca3d74b3",
".git/logs/refs/remotes/origin/br-ProjectIQ": "e62c1b635fe3bd289ca4210e1f06af12",
".git/logs/refs/remotes/origin/br-Project_login": "78bf1eb1f3a53504e6ddba61455ea094",
".git/logs/refs/remotes/origin/br-QuickQuiz": "953ff0c9cd418a6d7bfa0af0e0accee1",
".git/logs/refs/remotes/origin/HEAD": "36c0f5f1a2db35d97206eda947fa9e75",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/5a1a413dad0e64687ea0aa19d64a3f30cb15e7": "986941fe5d17c180a3fef365c30c40ef",
".git/objects/04/9c7e65f697f12e76a45f274df3a36040bc1502": "da3489855eef19a45ac96f5b078b04f7",
".git/objects/07/dab54bc6f8390c63690fd917491297044677cd": "532d0a6f663a1f175a73c058971590b5",
".git/objects/08/32db628d9c23da0a737dcf28d6fc882d03677f": "e115203ce1d74b2f2759b1e1b2dd54da",
".git/objects/08/9100d6601c36201d7e5b931f4e45f073165801": "39c67e14e8cde33fb429de35b5f8eda5",
".git/objects/09/4247680e8b58470224c1dd6dfdf258749a97f4": "86c40a224478c385c1c78cf0efaf6509",
".git/objects/0c/e60f8fd531faf7756b4f01e8d02139aefa236b": "702db28b0fb3ae3a98d27ee8bb24d8d9",
".git/objects/0f/288afbeafe247b5365c57c92eb4fe627c2f803": "4f09195a169c5e5a6caf52aede988296",
".git/objects/0f/a0bbe39aba12fde9338b968009856a6dba8ffa": "81eb4920f5f0d98d8426af574a541d7e",
".git/objects/13/f4b450d9efbcda81698f03f192c68d54d518dc": "1cd955b41f7e20ca83e14767ea62c33f",
".git/objects/15/0f9384f70c770bd281f0452569adc4da3bf071": "252fbdc4b197814c95d91a26a597612e",
".git/objects/16/b93cd9ba931bf7ecf0a8c40092046ef4ffb0ce": "c4b75bb902c1d7428f3c53b7a2f90e86",
".git/objects/19/efe27925a7d2f1b3fc9147fdee7a5c51c64d96": "f83624b5220b12db3759571e8eebb47b",
".git/objects/1b/c5b25b5bfbe9520059e5e8704c928bc9165bf8": "a67fe5f41307bdc94d7f3622c70dc39a",
".git/objects/1c/69adb08d2f4e2b6b5c1e43ac853edf25debfd2": "e1903616551d3e70751591399f27f30f",
".git/objects/1d/79e77c955461efb386f5d9c5b7f374784f7860": "3c22c5e3ecd22972bf7b0e33b68f55ab",
".git/objects/20/3c7ca2080ea7d0983adca8bb62c4eb8c53cea8": "e3c1515dca839a1ab896ee8d04a274f2",
".git/objects/20/84a652bf51147c38aca9acc892ff82f3e4548a": "5693016e06db33bbb9abdf98c3c50b85",
".git/objects/21/e9d798e97fa668c9292edbe5142c296849fd03": "0261e2f27be42996602631a983b02e29",
".git/objects/23/8121efd6fbba6bc26495a203e726d96581ea2b": "71f6229a33669b3d2d777beabda0cb37",
".git/objects/24/9207732f857b50b69eb8fb78b7a9e5c70a1aeb": "a2c9b601f3c1a7c29d3ccf12b814ffb3",
".git/objects/24/b298fb480788314375dc87b9bf542c54e3215e": "f640932f43dbfb3e1cd0a09e3b0ba7d2",
".git/objects/25/15c98aa8d072c225371fc59bac42da9adf4fb9": "588203fe013e8a126aef6dcf0893a487",
".git/objects/25/f03e6ab93fd8778e807f388bab77b8944b2c46": "84b610c765b33c2ac9cf904e1690e84d",
".git/objects/27/974ee953771bc63f1455a938bd090f8b0042f4": "9a222f2148dab279fec8d60248c25f6d",
".git/objects/27/9ebce63df92c7face9c85fc8958fb23881e541": "fc47898786743246731ad6f94e2c218a",
".git/objects/29/032e8f469e2d61c102b29b1e5983d9b659f358": "d6f97db93913dbfe06a760d5978020c0",
".git/objects/2a/54ad5b6a5969eb88a03b6668d136aabf41d174": "2d66c61cf25842878af14116ee0987e5",
".git/objects/2b/53c75d2346b89fa3e5b74517e22be795120e2f": "8ee66717ee3f982475d8fa9b89123d19",
".git/objects/2c/6edc8a5943ace60061bfedb7f5b02f8fde37fc": "c2c9f4fbb8ec73a8959f3cb926c28daf",
".git/objects/2d/47e471ea61c8e8369c7225910fd0fa3595fd15": "dec9c1414a4dfe5aac07a2bc1ed9f3ce",
".git/objects/2e/89927aaf532304fc783ba3bc5c1f9cd85062a5": "74a6eea12df70c14ffff77b59ab7295d",
".git/objects/2e/aafb50c10ffae9094f910e75b07b776971bf0a": "f2912c454847d3209f5c874758f5f4fa",
".git/objects/32/60b22982edbeb58876f48955da57e43c247e08": "f7d739d5427fc5af914c493f7a4f6d86",
".git/objects/32/f7dd5fbda2922e835729c9d5f995aefd5a9f02": "b929b11bbdeb912869557a8e47dab55f",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/e1d7a44e5a121f5ca5d0966305985828e7006a": "39f8d43a216e8efb0494996498f397bf",
".git/objects/3a/f40713e1a595761307968577927e927e49833d": "ddd79a75d94c74fda8fe1a4e0ee92838",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/3f/78fdf902bf6ee3eea8a70e160864bc31cf6823": "162500917ba57afbab01695c3a74dcca",
".git/objects/3f/f1143d52b5a7b0e9afd27c1af8927f30ecd64a": "dcce194860c1c42fb5dc84d3c8ab333c",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/45/9949a4cd3fb0330b25088b7a21946e9372ad2f": "822fb7c10e1c0c534ee883b8e66297a5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/5cf72364dbeb8c8406f1ad29e997aba7764b77": "c3fde9c29941e04f94f133eac8ce2a3c",
".git/objects/47/876cf208a16cc069fe551e0d44894f0dfb424f": "0c2508d23edd1100a9d9a2cee96fede2",
".git/objects/48/175f2753a670de19c100c25a03128bf39e0335": "ca9a154659f2d958a28ff0f6c1cf338f",
".git/objects/4b/f2e14407e5c530e8ecefaf6239a83ea30cce38": "2e34337d3ac2d7f1383c1154446e0cac",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/4e1309c1a7851c4e80ba480c18a6ecd38453c8": "dbb60f6dfb15bc285c5dfe1b51d2e094",
".git/objects/50/a7bc3630323b75b408bd3f9ed279fcbd3eb594": "1d52a55c3c1f16789afc4f4e13c685ab",
".git/objects/51/d02833c1be51329819abb0600f8a071b44b14e": "30bde5fc2c6c84a6247bf3e28fdafdaf",
".git/objects/52/dcfb1c6f36b2cf4115633442fd1abca2bf0469": "9b5e6b3b60131a55dbe034411d033db8",
".git/objects/53/5a8efb05f9bce4e71da2f222a1e5554df904f2": "37800960ca16af82eee935fb3f76ba63",
".git/objects/54/92035f2c7cf9828c86bba6160e670248b5c8a1": "1dd04bff7c2106bfc23d3a406b52d4e3",
".git/objects/54/958315e7ba92a8e435e0fa294bbc859eb4fdea": "5f572cfba12f841b8642c6f5588474d3",
".git/objects/55/ed42c734abea0dbebd0b7875bbde02d26b1d8d": "60c6597db2bced98fbe01437c809cd9b",
".git/objects/56/bbfbb96a233c2116168575866ae1a783de92b7": "dbcac97830ef7b94acf6e0d1634d794c",
".git/objects/57/46e51d1748a5b9543921ccfc3ad51663583397": "27a4c68fab6e25475ec9a0a23a521e96",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/abc86e0c74adc00d4e2b704dcb089b9dd7128b": "ca2bb14f45b7c6881e9853055551a1e2",
".git/objects/57/d60a84bec25389a398ec875bb2877940abd7ff": "d6e8a5114ee01e1716872a2e52e8bd3f",
".git/objects/58/788f312202e5b0d5dab805e1df0f8ccbc3c998": "25a156d889c1bfa78ea796b737f2aefb",
".git/objects/59/759f8a2dcd22db6689ed273fcbd6fd4a518b79": "339648e2074d3f9298444b051505df3e",
".git/objects/59/a6b361397a371c201693eb62a7b14973265e81": "837e0f860354ec2bd126aac97095d0b1",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5a/9550f44ec169aa1c23714f7c54b1f054024469": "3e732067fd275f64488b1a0cb4e25a35",
".git/objects/5b/09d6b4b2db88bf8bef2059932c30ca30c71c17": "509d8eba80abde39468eff4b9b7f7756",
".git/objects/5c/a59c30ea2ff6196d438e9d8204ef5e210a5924": "9978e9991020b7ac8274d935068de52e",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/ac94f143d2dea65d9a24abc1a4e43a0acc9f4e": "9b42fbb7b81bf528eeb303598f795b4e",
".git/objects/63/74de9c615f133e79705263bdae1322a41bf728": "aac28d3ae68c4f0aeb1906b3f9f5e7f1",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/66/bcbeca0c21f29a609855eaa6ef3b101f754952": "2798c66c36e55e22d2cbb54ecd343fb7",
".git/objects/6a/9c0f4f9339ee9dc2aa11de88a54a97aafa0cd1": "eb06910272c1bb768476f1a24d9a2a4b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/9fdbe8791d07da6792c38e174166ce802585ed": "bd22fa980b940c76c4371d264a8211a3",
".git/objects/6c/246057dadf6b02192e421391509cd90557d61f": "b1d371beb66a42a3e51357bb094e8804",
".git/objects/6d/e4ad4395d7c6e2cccea8b8601775a1acae1fcc": "ab895fac8deb35e71970a5cba01325de",
".git/objects/6e/46245dbfef70640c720e626f0c5857d57537d4": "e83718bd90debb2b61d68a614d281068",
".git/objects/6f/0f7dfc46cdd2768c55cf282dcbdb4608d182d0": "132944a436897347feabb70ab5227960",
".git/objects/6f/5046e8183d1cbb1e359bac20fbcd0e93b2edaf": "28782c5c6edd2e0c27fcbe51c1da8598",
".git/objects/70/04e34288025cf08b63401731b78a2110a54f62": "a4d37d10c034cabccf1e9b5310047255",
".git/objects/73/2f9c5ae4c60695067e5ffdbffe10cb62f10a1c": "d3d2ecf3bf760bf97e8de508fc5bbe4e",
".git/objects/74/db0732049a7e194d5efeb2d5b712b422cfd012": "4bbe8bbb725a6c2ed3854e26a6c4d14c",
".git/objects/76/ed0d638733b7be71ac377b777f8e38b788560a": "c5966cf96988f399b55d23eb90a01354",
".git/objects/78/1bec2d25d2112b1e4210e99f8e8f206f346c3a": "4f308c6a770ea8bce7c7a7d95605566a",
".git/objects/78/dcac9a1a9edb4f4df515e25618937e3188c928": "87f9604ea0470c5a5a84878fcb54463e",
".git/objects/7f/f33aef05d82c340cbcc652d3f9a33384856ec5": "1dc2fb80d06fc5d353bbb2cbe000d043",
".git/objects/80/18058c4560122f89b3c048b383940dad018c02": "cd350b28eda4d2a8339b62265d622568",
".git/objects/82/b581953103e9b3eb18014b7e38f084420e7db5": "fc92bb342a1990a3c7495b74ae20489e",
".git/objects/84/8faa1a7567f5a47ff9a037eb0a87c75e018ff0": "3ee5f4cfdbf1173193499a9d3f0052d9",
".git/objects/85/ab54a96b70fde1b8de3e0639488f518e5ae6d6": "9494f800228e7b3112380b0121882d43",
".git/objects/85/dc3f42b863b18fb88278a74fb8c86f879e6032": "6c1d7bcbae2efecf8a05f8a531c1d4d3",
".git/objects/88/c04ebc9fb56992a5ce6faedc359d91ad52d49d": "e48d874ff0e6359049eb085b0171edf4",
".git/objects/89/b23a1c5958ef0deb8ae089f1f8b634e137a8d3": "131c30a93fdeeb6a0a85800864d1f662",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8b/7be854b7e4b094cbccae44596aeb309f4aa03f": "d0ac18b7249073df5f42e94e6e1a9656",
".git/objects/8d/68ba49c6df7d9a90a41bc91c052418c1a23d49": "542da25b977790bb13e1123550c3bd13",
".git/objects/90/a356db5d430266ff8877d94e5cc805ae0de0a7": "3e43e87a9a91eca3913bf06ce695d3b9",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/25fbb63a18c89a1868d77df879f213dada0f60": "2fa0b028bf0d667bb25f17a65d4c0fca",
".git/objects/93/a36887812e5ec9bbf25ba675ad1232129b8e98": "f0ac5093b1ca3beadca8226ccc79b43f",
".git/objects/94/108d4e90915ef2a9a434e10ce9c8ea9f04b084": "e60ddbfd7ddbe35024ad308d81599fbb",
".git/objects/9b/aced1c94565fd9895784559398f3d851d072a0": "24ec1a277a8c745a4dfcb939dd3b6972",
".git/objects/9b/b0b5638ccaff46cd18c5743f64c7f294260ba4": "f459ccb8581d591af2bb6a9e7e48a8e3",
".git/objects/9e/059fe473a3cfab9e8b227148460d61d3eb3714": "cbc6247129bf5558f7d5530dbc3cd307",
".git/objects/9f/74b73a8afbf8350eb3a2bee5c1cd28abf8c4c3": "f6cc96d5fd37fff72693c4fca24c0e0c",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a5/e432038bc76b23e76ce90175ea9aca601e0633": "216c8ce09b17d000ca41e2b31379e54c",
".git/objects/a6/a39552b375a1f5e1a3040189302661505d7dae": "0c7a51c6d8da99a740e9d25549862ef1",
".git/objects/a7/1e34dd0f385f12f13e5989ff82ea58d3c04de9": "4f51f3e757cbf14ae5862f5c1c7cf35b",
".git/objects/a7/55a23e195941b6fe9058a7a8d09fd69fa9e56e": "59a82a4c746952e94a4dcbb445a7dbd6",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/593f9a9db63b09bcc22ed547a1e6f95973a4b6": "d897dad88158614fb4e402eb85589d33",
".git/objects/a9/8abba8b07175b199044ad8c717d928e9501157": "b22aa5c80e33481e4786423f37b57393",
".git/objects/aa/fb4f3932f1247be3da6f59ccf58d41a8d804cf": "ffbadc649b1d40dba2ae17a721b7ebb0",
".git/objects/ab/7f31180c92f1a11897b43c6d6f79e82d6309a4": "d1f98caca36879840c6513bff68383a3",
".git/objects/ad/68baa28b1b8384b52c57578be90aa2115320ac": "d308f6b386522b3fbd208ef914282128",
".git/objects/ae/d0d42614ad9fba4e5b1863b487873333c29cc5": "e4d7cbbcfaf66d95c81ce4515fe74885",
".git/objects/af/6e23ce496ed6c3f694c86f848639d451227abf": "3d95027db1ced2f28d9fa168f7aba1a8",
".git/objects/af/7b1060110890b9f3623b94f807feae537d6487": "9a4e941d2de03e877940072f80ac9628",
".git/objects/af/f005778391d81cbd9860de3504ea1fe473d5c2": "edba8243c0a7a9e861aefdcf1fa586d0",
".git/objects/b6/3b4f895228ad38c418a7be4868729c01d2fbf0": "3ba71592d0428bc1973b39df405ffaf6",
".git/objects/b6/668ad9abaa8697644c64f98444f7149d4672f7": "47d5ac594ebf73d703de6755a7a2c3e7",
".git/objects/b8/41f5af76b19f06a8d8300e570f100721ff3754": "ce8fe4d66da3ddbd60cf8c1fe3be1a4b",
".git/objects/b9/414f79ddaecb959d446fd73fcd8e200504615f": "b009208f1f5a5935d3b6e62ad3b716d2",
".git/objects/ba/a8c22208ee5d8f4847f740fbdd3877d5d80b16": "2e84a52cec4c4981bbbb0aaf7d5c791b",
".git/objects/bb/2a210b58c469d94cfbaaf79084b871cf842fe5": "e9d0d5f8ba452602875a52f17f20d2d2",
".git/objects/bb/b53536263a3bcb39b9f7249c74020108614921": "a6cc5fd0d8f5bcd6e3f8fec071216b88",
".git/objects/bd/0b1bbe642d6e21f6897d5e4e67b1dc4e4139c6": "e50ff06ff0c0aed9861776a5a754e273",
".git/objects/c3/ff85686c4878785bf5624c462481f53989978e": "7b69fd67cb7accf19f8ea9a9f76af324",
".git/objects/c5/7faf40e4c3dbfd59dd1a26926ef421346af0b1": "15e3af34e47513894ddf0892d43fca21",
".git/objects/c6/87fbbccb39b5e6e02a57502b08bdaaf76c7468": "37477bb83c18e342ee08747fefd7f622",
".git/objects/c7/de3b1fc9e6e07ce3888e910b66969a20a74191": "7e906c0fca79e4965e2f18056975b78e",
".git/objects/cb/643f8f3419edfcf2544dbe9cf8d88ce27fe52e": "94c45bfc2f09926166c69ef07c182d1e",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/a2bd3f39590455ae5d0b87e85d53ef991b582f": "8917f7f77c2d7236f93a2faa0a0c33f7",
".git/objects/d0/0f66dd6414045265eea21c0a85b71c6ffa2b67": "8f0235198ece145e6f8b7ecf97b34eee",
".git/objects/d2/82150d3a4574efe81deddc0217637ce1b6a3f4": "a64d20744d70870f9a1202a3b69a4cb7",
".git/objects/d3/13c07f5b1752d4517f7a26d41197053dd6a3ba": "5d8fb57107414a6e950b2ef405f827dc",
".git/objects/d3/1b88a4e4003aa6addc925a6f1a7c47be3778a2": "b9bf45f0883b586aaa497b0ff0a12b90",
".git/objects/d3/8ae7d0aad9d4238f40c555defbdf2505ccd8a2": "82684cfd09db80f03692000e354fa41a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/8ae1a4a13fdfe2feaee9feac3d3a93fa4616c9": "f72a512d6a55185f4ca66ecdb35be1e7",
".git/objects/d4/a156a20eefb0404e88c2cd5726897fb5dec1fc": "7b4a18b04de73213d0d25b3e6d4207f5",
".git/objects/d5/994ff26a0cc0c632c9b660e3b1e36e8db2b195": "8837514395972c899d1cd8fd437a66a4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/94a0958b71c2c5bd4e8f919ef97bdacec0c1a4": "7bd776eee5569a9b4f6c4d95f622206e",
".git/objects/db/7a5a7d57447729339a4db888a2b3a550b73234": "0369eaf3ccdfb551177588de023d732f",
".git/objects/df/ce36a886dc12e9b8eab07731e17764c4496445": "9ea168726502d16e306387b12158a5c1",
".git/objects/e0/36bd393bf116b39fb901db7b072211d3efb2c3": "aca1c9109923c77b98683f3225be3ec2",
".git/objects/e0/69415d3e03588f68fd384fc0ad100424ec0d3b": "d7e60d8190d0883945dc0c3a2d44e8ac",
".git/objects/e0/b3c30c5a3eb3707dbbc26c6d9158bfacd7b7c8": "517a72aaff9333f0e987389a4e219c96",
".git/objects/e2/4dd9c9aecac67c79fd4e96c4c7cd4575345b48": "d234cae24f24ddf9716d0a20b2b93c0f",
".git/objects/e2/dada1de98406cf1fc643971959bdd5bcd31b86": "c66308eebc107c6b8257712c70b9cb32",
".git/objects/e3/b6bc8096711249b21837b1ea60c887118adf5b": "c302b0eb773649698d6b968f050c2f92",
".git/objects/e5/bbd2394ad7a01cb1633872c37cfdee71c79ccc": "4d0050b2c3a9915ac506bc8e8967506b",
".git/objects/e6/677c46881761e840b2f1c20cf53fc234e1dd21": "a3bae0b08e00e6530b716356cc3f7e8d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/17964e4e124a14e53ed2a316120f38090cfd53": "6da6cb113e6a52e1ed14275304c26613",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/83b5d6c9f028b1a9ffbab93e39ae0e883f8220": "cfd7c7564c213b98ec747df937e49d27",
".git/objects/ea/deb078e6b4c6665b6fa736c8d25f8ba804573c": "cde08ea9feef6008314b1c6b44008aac",
".git/objects/eb/3d7d01108c79091b51b1f9c7ca65eeeea07cfd": "afae70275c2224f62d21649b191e589a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a3fd6dfc7a423a80f64ba43cb939130bf64f4f": "1f94bc7e6ca5e74b4bcab5c01b55f627",
".git/objects/ec/aef8280a44ef7560cbda3c7433005502710c22": "e7ba8c1e41996fbb52712869e442fa41",
".git/objects/ee/9d6f6fa5ba1109d76df46e6bba52ae40655e04": "0d1e25afaa29ea6d6a995b2894cb3afa",
".git/objects/ef/0e8b52af3d19d5f2179ef723d4cbf83a4e46fc": "2920cc8869beb199c4a5afd25a81f980",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/48e13f09fa31b7307b5dc9095b1c85ec5fb6b5": "030bb13f98bca98f3dd9c96efe3d4771",
".git/objects/f2/880c1933c5636160913b12c5e8d1b0f8f02944": "749ee278ce2904c0647cd0d8d692a243",
".git/objects/f2/ebe86217b7dd5fb92c47ed086215a260b10eff": "45d61e6a247e288306b08c7e9252d97c",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/858f2b106c9e2a225a8afb30aa920361090e72": "1bae15624358f8987177c5345ac13c9d",
".git/objects/f4/01756a3475fb81e81906247b88e3e5b11574fa": "f72d0ea72a024b5bf5785047994d9a38",
".git/objects/f4/201869a07156a57ec04e8961cc46f1f0657686": "2c2ea2e76a63851ff55f35350c69ad0c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/7a4f9cc1ed183fe14b5c57dd8d95259ea3ae36": "f033997e40db64743b864aaf118200fe",
".git/objects/f7/290eb098d947bbd6378dc50b057a4b8e9e5be2": "44d4af3eb5af343b4232309556061aef",
".git/objects/f7/b179b4eddb5284cd9250f991a993977901f321": "6944d7a3119e39dc18a9c5b06c3b89b5",
".git/objects/f8/3283019ba6a3aba6b808f3bede403f6cb5346e": "2a3d193e4833f030de2c2c3cdf6fd357",
".git/objects/f8/7dde673ce29d8090df372d0600bd1d8a4a4c0f": "18497551397e5ad72b3fb9ae9ecd2f49",
".git/objects/fa/656ad8ea27fb8b7764ced86cc44f06f7232542": "ef9387b9f870ec11250f2331595e8547",
".git/objects/fc/3b6b4f8075a9632f9e9528847fb6996c48af21": "c544e43f794595a1ce62706204060b32",
".git/objects/fe/b876c7f801495e2a087d5c9716142bce014f90": "6b2e2a8a0cd0a95d181a169421e849f8",
".git/objects/ff/756e7dc0358f4d87abcc5360999f53c479362d": "87f5b76665589672ba1a1edc25ea7ac9",
".git/refs/heads/br-ProjectIQ": "9b54192734ab453dff263a7be66f2cee",
".git/refs/heads/br-project_login": "a58a14f4dd216c2c8795773e7882bd94",
".git/refs/heads/master": "157d3984bc39cdffddc00de938a48938",
".git/refs/heads/ProjectIQ": "a2c60e26c6d39728a4be2998baf4c238",
".git/refs/remotes/origin/br-ProjectIQ": "9b54192734ab453dff263a7be66f2cee",
".git/refs/remotes/origin/br-Project_login": "a58a14f4dd216c2c8795773e7882bd94",
".git/refs/remotes/origin/br-QuickQuiz": "24a363449b6a1b8b57a39f44cb617a8f",
".git/refs/remotes/origin/HEAD": "6edb069e09423eff3e671f84b2c25b79",
"assets/AssetManifest.bin": "736329610fa2f67a25f4d7f26e79c730",
"assets/AssetManifest.bin.json": "63738d4f222fc368b1e0f0b800e534cb",
"assets/AssetManifest.json": "6bf72aaeeebb440387b19f83b5f35b3a",
"assets/assets/CTSlogo.png": "70c6332ca7d55520944ea81a66269641",
"assets/assets/images/CTSlogo.png": "70c6332ca7d55520944ea81a66269641",
"assets/assets/images/microsoft-logo.png": "e79861fbf89da2c389d8888f7326e31f",
"assets/assets/images/mslogo.png": "de7ba8212a945d2fee3c006fe54e4be5",
"assets/assets/microsoft-logo.png": "e79861fbf89da2c389d8888f7326e31f",
"assets/assets/mslogo.png": "de7ba8212a945d2fee3c006fe54e4be5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "f81b1e275d4708db2fd6f013035e02ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "96918ec82b3585ec59e7e18a883e5820",
"favicon.png": "f3a8a028e4dedeb1120d6945b2805ff1",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8db6fab4957b34a51ae4b5c4dd57434d",
"icons/apple-touch-icon.png": "0b5b73a2141a57343cc341a32662faca",
"icons/favicon.ico": "96918ec82b3585ec59e7e18a883e5820",
"icons/icon-192-maskable.png": "c3ceec94d30946d6874fa179d32d1d7c",
"icons/Icon-192.png": "0ace8c11504733afea2e46876c67072a",
"icons/icon-512-maskable.png": "912f5c37b24ce60e14e5cf35d9150527",
"icons/Icon-512.png": "f3a8a028e4dedeb1120d6945b2805ff1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "27b4481c0d43edeaf180e6c8ac7103e8",
"/": "27b4481c0d43edeaf180e6c8ac7103e8",
"main.dart.js": "e1c61d73361bc5106b7766758c975abd",
"manifest.json": "8aa623095a9e8a9178427613873983bd",
"version.json": "bcd62f86338919bc87a7117f5c87fcc0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
