const a0_0x1232a5=a0_0x3bd5;(function(_0x36defe,_0x18fbac){const _0x58f4c9=a0_0x3bd5,_0x4e30bb=_0x36defe();while(!![]){try{const _0x4ba639=-parseInt(_0x58f4c9(0x1c6))/0x1*(parseInt(_0x58f4c9(0x20e))/0x2)+-parseInt(_0x58f4c9(0x1f4))/0x3+-parseInt(_0x58f4c9(0x1e2))/0x4*(-parseInt(_0x58f4c9(0x1e3))/0x5)+-parseInt(_0x58f4c9(0x1fd))/0x6+-parseInt(_0x58f4c9(0x1ca))/0x7+-parseInt(_0x58f4c9(0x1ec))/0x8*(-parseInt(_0x58f4c9(0x1c4))/0x9)+parseInt(_0x58f4c9(0x1dd))/0xa;if(_0x4ba639===_0x18fbac)break;else _0x4e30bb['push'](_0x4e30bb['shift']());}catch(_0x1d0b8e){_0x4e30bb['push'](_0x4e30bb['shift']());}}}(a0_0x55ac,0x614f1));const {Client,MessageMedia}=require(a0_0x1232a5(0x1e5)),ffmpeg=require(a0_0x1232a5(0x1d9)),fs=require('fs'),path=require(a0_0x1232a5(0x1cc)),debug=config[a0_0x1232a5(0x1d2)],TEMP_DIR=path['join'](__dirname,a0_0x1232a5(0x1d6)),MP4_FILE_PATH=path[a0_0x1232a5(0x1dc)](TEMP_DIR,a0_0x1232a5(0x1e0)),WEBP_FILE_PATH=path[a0_0x1232a5(0x1dc)](TEMP_DIR,a0_0x1232a5(0x20c)),JPEG_FILE_PATH=path[a0_0x1232a5(0x1dc)](TEMP_DIR,'image.jpeg'),encodedString=a0_0x1232a5(0x1c7),decodedString=Buffer[a0_0x1232a5(0x1fa)](encodedString,a0_0x1232a5(0x1d0))[a0_0x1232a5(0x1cf)](a0_0x1232a5(0x209)),encodedString2=a0_0x1232a5(0x205),decodedString2=Buffer['from'](encodedString2,a0_0x1232a5(0x1d0))['toString'](a0_0x1232a5(0x209)),convertMp4ToWebp=(_0x22c2ff,_0x5300b1)=>{return new Promise((_0x1595e7,_0x1d1722)=>{const _0x53b935=a0_0x3bd5;ffmpeg(_0x22c2ff)[_0x53b935(0x20a)](_0x5300b1)[_0x53b935(0x1c2)](_0x53b935(0x206),_0x53b935(0x1d3))[_0x53b935(0x1c2)](_0x53b935(0x1de),'0')[_0x53b935(0x1c2)](_0x53b935(0x201),_0x53b935(0x1ee))['outputOptions']('-preset',_0x53b935(0x1c5))[_0x53b935(0x1c2)]('-an')[_0x53b935(0x1c2)]('-vsync','0')['on'](_0x53b935(0x1d8),()=>_0x1595e7())['on'](_0x53b935(0x202),_0x240cad=>_0x1d1722(_0x240cad))[_0x53b935(0x1c3)]();});},convertWebpToMp4=(_0x18ab42,_0x18bb71)=>{return new Promise((_0x1ff469,_0x2d315b)=>{const _0x15c22a=a0_0x3bd5;ffmpeg(_0x18ab42)[_0x15c22a(0x20a)](_0x18bb71)['on'](_0x15c22a(0x1d8),()=>_0x1ff469())['on'](_0x15c22a(0x202),_0xef9994=>_0x2d315b(_0xef9994))['run']();});},convertWebpToJpeg=(_0x587198,_0x4177b3)=>{return new Promise((_0x23fb0c,_0x2fba70)=>{const _0x2fb1a1=a0_0x3bd5;ffmpeg(_0x587198)[_0x2fb1a1(0x20a)](_0x4177b3)['on'](_0x2fb1a1(0x1d8),()=>_0x23fb0c())['on'](_0x2fb1a1(0x202),_0x883b9b=>_0x2fba70(_0x883b9b))['run']();});},isAnimatedWebp=_0x492902=>{return new Promise((_0x185337,_0x1de0a3)=>{ffmpeg(_0x492902)['ffprobe']((_0x4825b7,_0x5eb902)=>{const _0x144fbd=a0_0x3bd5;if(_0x4825b7)_0x1de0a3(_0x4825b7);else{const _0x2e9f40=_0x5eb902[_0x144fbd(0x207)][_0x144fbd(0x1ed)](_0x2dd1ee=>_0x2dd1ee['codec_type']===_0x144fbd(0x1f5)&&_0x2dd1ee[_0x144fbd(0x1d4)]>0x1);_0x185337(_0x2e9f40);}});});},handleFileDeletion=_0x102860=>{const _0x42c6df=a0_0x1232a5;try{fs[_0x42c6df(0x1e8)](_0x102860)?(fs['unlinkSync'](_0x102860),console[_0x42c6df(0x204)](_0x42c6df(0x1f8)+_0x102860)):console[_0x42c6df(0x204)]('File\x20does\x20not\x20exist:\x20'+_0x102860);}catch(_0x215392){console['error'](_0x42c6df(0x20d)+_0x102860,_0x215392);}};module['exports']={'logs':logs,'name':a0_0x1232a5(0x1e6),'description':'Medya\x20dosyasını\x20sticker\x20olarak\x20gönderir.',async 'onMessage'(_0x2e4b1d){const _0x38b824=a0_0x1232a5,_0xaf427b=await _0x2e4b1d[_0x38b824(0x208)](),_0x3cbe77=await _0x2e4b1d[_0x38b824(0x1f7)]();if(_0x2e4b1d[_0x38b824(0x1e1)]['trim']()===config[_0x38b824(0x200)]+'sticker'&&_0x2e4b1d[_0x38b824(0x1d1)]){if(worktype===_0x38b824(0x1fb)){const _0x5e83a1=_0xaf427b['id'][_0x38b824(0x1d5)];_0x2e4b1d[_0x38b824(0x1e9)][_0x38b824(0x1d7)](_0x5e83a1,_0x38b824(0x1ea));try{const _0x21bec8=await _0x2e4b1d[_0x38b824(0x1f7)]();if(_0x21bec8['hasMedia']){const _0x3faa56=await _0x21bec8[_0x38b824(0x1fe)]();debug&&console[_0x38b824(0x204)](_0x38b824(0x1e7),_0x3faa56[_0x38b824(0x1ce)]);const _0x568ac5=_0x3faa56['mimetype'];let _0x904f3c;if(_0x568ac5===_0x38b824(0x20f))_0x904f3c=_0x38b824(0x1f1);else{if(_0x568ac5===_0x38b824(0x1fc))_0x904f3c='jpeg';else{if(_0x568ac5==='image/png')_0x904f3c=_0x38b824(0x20b);else throw new Error(_0x38b824(0x1f2));}}const _0x4dcc6f=_0x38b824(0x1c9)+Date[_0x38b824(0x1cb)]()+'.'+_0x904f3c,_0x13425a=path['join'](TEMP_DIR,_0x4dcc6f);fs[_0x38b824(0x1cd)](_0x13425a,_0x3faa56['data'],'base64');if(_0x904f3c===_0x38b824(0x1f1)){await convertMp4ToWebp(_0x13425a,WEBP_FILE_PATH);const _0xe74e83=MessageMedia[_0x38b824(0x1db)](WEBP_FILE_PATH);await _0x2e4b1d[_0x38b824(0x1e9)][_0x38b824(0x1d7)](_0x5e83a1,_0xe74e83,{'sendMediaAsSticker':!![],'stickerAuthor':''+decodedString,'stickerName':''+decodedString2}),handleFileDeletion(WEBP_FILE_PATH);}else{if(_0x904f3c===_0x38b824(0x20b)||_0x904f3c==='jpeg'){const _0x523468=MessageMedia['fromFilePath'](_0x13425a);await _0x2e4b1d['client'][_0x38b824(0x1d7)](_0x5e83a1,_0x523468,{'sendMediaAsSticker':!![],'stickerAuthor':''+decodedString,'stickerName':''+decodedString2}),handleFileDeletion(_0x13425a);}}}}catch(_0xe0897c){console[_0x38b824(0x202)](_0x38b824(0x1e4),_0xe0897c);}}else{if(worktype==='private'){let _0x108440=_0x2e4b1d[_0x38b824(0x1e9)]['info'][_0x38b824(0x1c8)][_0x38b824(0x1d5)];const _0x2af2a4=_0x2e4b1d[_0x38b824(0x1e9)][_0x38b824(0x1da)][_0x38b824(0x1c8)][_0x38b824(0x1d5)];var _0x582aed=undefined;const _0x7b2d0c=await _0x2e4b1d[_0x38b824(0x208)](),_0x32c69d=_0x7b2d0c['id'][_0x38b824(0x1d5)];if(_0x7b2d0c['isGroup'])var _0x582aed=_0x2e4b1d['id'][_0x38b824(0x210)];else var _0x582aed=_0x2e4b1d[_0x38b824(0x1fa)];debug&&console[_0x38b824(0x204)](_0x582aed);let _0x52feed=![],_0x1e19b1=![];for(const _0x46e3c7 of sudoUsers){if(_0x46e3c7===_0x582aed){_0x52feed=!![],_0x1e19b1=!![];break;}}!_0x1e19b1&&_0x582aed===_0x2af2a4&&(_0x1e19b1=!![]);debug&&console[_0x38b824(0x204)](_0x1e19b1);if(_0x1e19b1){_0x2e4b1d[_0x38b824(0x1e9)][_0x38b824(0x1d7)](_0x32c69d,'dönüştürme\x20işlemi\x20başladı...');try{const _0x6995e0=await _0x2e4b1d[_0x38b824(0x1f7)]();if(_0x6995e0['hasMedia']){const _0x25d602=await _0x6995e0['downloadMedia']();debug&&console['log'](_0x38b824(0x1e7),_0x25d602[_0x38b824(0x1ce)]);const _0x2e6f82=_0x25d602[_0x38b824(0x1ce)];let _0x51f042;if(_0x2e6f82===_0x38b824(0x20f))_0x51f042=_0x38b824(0x1f1);else{if(_0x2e6f82===_0x38b824(0x1fc))_0x51f042='jpeg';else{if(_0x2e6f82===_0x38b824(0x1f6))_0x51f042='png';else throw new Error(_0x38b824(0x1f2));}}const _0xbb126b=_0x38b824(0x1c9)+Date[_0x38b824(0x1cb)]()+'.'+_0x51f042,_0x5d1be8=path[_0x38b824(0x1dc)](TEMP_DIR,_0xbb126b);fs['writeFileSync'](_0x5d1be8,_0x25d602[_0x38b824(0x211)],'base64');if(_0x51f042===_0x38b824(0x1f1)){await convertMp4ToWebp(_0x5d1be8,WEBP_FILE_PATH);const _0x419063=MessageMedia[_0x38b824(0x1db)](WEBP_FILE_PATH);await _0x2e4b1d[_0x38b824(0x1e9)][_0x38b824(0x1d7)](_0x32c69d,_0x419063,{'sendMediaAsSticker':!![],'stickerAuthor':''+decodedString,'stickerName':''+decodedString2}),handleFileDeletion(WEBP_FILE_PATH);}else{if(_0x51f042===_0x38b824(0x20b)||_0x51f042===_0x38b824(0x1eb)){const _0x105c55=MessageMedia[_0x38b824(0x1db)](_0x5d1be8);await _0x2e4b1d[_0x38b824(0x1e9)][_0x38b824(0x1d7)](_0x32c69d,_0x105c55,{'sendMediaAsSticker':!![],'stickerAuthor':''+decodedString,'stickerName':''+decodedString2}),handleFileDeletion(_0x5d1be8);}}}}catch(_0x410f2e){console[_0x38b824(0x202)]('Error\x20handling\x20media:',_0x410f2e);}}}}}}};async function handleStickerToImageCommand(_0x536685,_0x42c3d5){const _0xc4efa=a0_0x1232a5;try{if(_0x536685['hasMedia']){const _0x148759=await _0x536685[_0xc4efa(0x1fe)](),_0x5120e9=saveMediaFile(_0x148759);await convertWebpToJpeg(_0x5120e9,JPEG_FILE_PATH);const _0x380440=MessageMedia['fromFilePath'](JPEG_FILE_PATH);await _0x42c3d5[_0xc4efa(0x1d7)](_0x380440,{'caption':_0xc4efa(0x1f0)}),handleFileDeletion(JPEG_FILE_PATH),handleFileDeletion(_0x5120e9);}}catch(_0x57e7c6){console[_0xc4efa(0x202)](_0xc4efa(0x1ef),_0x57e7c6);}}function a0_0x3bd5(_0x63efcb,_0x3af550){const _0x55ac1c=a0_0x55ac();return a0_0x3bd5=function(_0x3bd57b,_0x11afb8){_0x3bd57b=_0x3bd57b-0x1c2;let _0x227aff=_0x55ac1c[_0x3bd57b];return _0x227aff;},a0_0x3bd5(_0x63efcb,_0x3af550);}async function handleStickerToVideoCommand(_0x18bb6b,_0x8bcab0){const _0x1c8082=a0_0x1232a5;try{if(_0x18bb6b[_0x1c8082(0x1f9)]){const _0x5ccacf=await _0x18bb6b[_0x1c8082(0x1fe)](),_0x61f232=saveMediaFile(_0x5ccacf),_0x1725dc=await isAnimatedWebp(_0x61f232);if(!_0x1725dc){await _0x8bcab0[_0x1c8082(0x1d7)](_0x1c8082(0x203)),handleFileDeletion(_0x61f232);return;}await convertWebpToMp4(_0x61f232,MP4_FILE_PATH);const _0x40e8ad=MessageMedia[_0x1c8082(0x1db)](MP4_FILE_PATH);await _0x8bcab0[_0x1c8082(0x1d7)](_0x40e8ad,{'caption':_0x1c8082(0x1df)}),handleFileDeletion(MP4_FILE_PATH),handleFileDeletion(_0x61f232);}}catch(_0x5ecaa8){console[_0x1c8082(0x202)](_0x1c8082(0x1f3),_0x5ecaa8);}}function a0_0x55ac(){const _0x5d4f05=['mediaToStickerPlugin','MIME\x20Type:','existsSync','client','dönüştürme\x20işlemi\x20başladı...','jpeg','40pVljqG','some','libwebp','Error\x20handling\x20sticker\x20to\x20image:','Sticker\x20to\x20Image','mp4','Unsupported\x20media\x20type','Error\x20handling\x20sticker\x20to\x20video:','2136723cqKaFu','video','image/png','getQuotedMessage','Successfully\x20deleted:\x20','hasMedia','from','public','image/jpeg','2138382wYRVWH','downloadMedia','split','prefix','-vcodec','error','Bu\x20sticker\x20hareketsiz,\x20videoya\x20dönüştürülemez.','log','SUMzWlkgQVJDSMSwVkVT','-vf','streams','getChat','utf8','output','png','sticker.webp','Error\x20deleting\x20file:\x20','1802QCOZXM','video/mp4','participant','data','outputOptions','run','1121544BjxxzM','picture','433iSGJVI','TWFkZSBieTogV2hhdHNBc2VuYSBDb2RlZCBieTogSWMzenk=','wid','media_','334425pStazy','now','path','writeFileSync','mimetype','toString','base64','hasQuotedMsg','debug','fps=10,scale=512:512:force_original_aspect_ratio=decrease,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=black@0,format=rgba','nb_frames','_serialized','temp','sendMessage','end','fluent-ffmpeg','info','fromFilePath','join','12570190zXIjZX','-loop','Sticker\x20to\x20Video','video.mp4','body','1472WUwJbs','340RShJKd','Error\x20handling\x20media:','whatsapp-web.js'];a0_0x55ac=function(){return _0x5d4f05;};return a0_0x55ac();}function saveMediaFile(_0x56f1c6){const _0x1abc2a=a0_0x1232a5,_0x58bdf1=_0x56f1c6[_0x1abc2a(0x1ce)][_0x1abc2a(0x1ff)]('/')[0x1],_0x2056e9=_0x1abc2a(0x1c9)+Date[_0x1abc2a(0x1cb)]()+'.'+_0x58bdf1,_0x140f2b=path['join'](TEMP_DIR,_0x2056e9);return fs[_0x1abc2a(0x1cd)](_0x140f2b,_0x56f1c6[_0x1abc2a(0x211)],_0x1abc2a(0x1d0)),_0x140f2b;}async function logs(_0x1ea44c){const _0x56faa7=a0_0x1232a5;console[_0x56faa7(0x204)](_0x1ea44c);}