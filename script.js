const questions = [
    {
        question: "早上起来发现自己变成了一只蟑螂，你的第一反应是？",
        options: [
            { text: "🦗 卧槽！那我岂不是可以在墙壁上自由行走了？酷！", score: { D: 3, S: 2, B: 4, T: 1 } },
            { text: "🔥 谁把我变成蟑螂的？！我跟你拼了！", score: { D: 5, S: 1, B: 1, T: 3 } },
            { text: "📸 赶紧自拍发朋友圈：家人们谁懂啊！", score: { D: 1, S: 2, B: 5, T: 2 } },
            { text: "🤔 那我现在能钻缝隙吗？先试试看", score: { D: 2, S: 4, B: 2, T: 2 } }
        ]
    },
    {
        question: "在公共场合放了一个巨臭的屁，你会？",
        options: [
            { text: "😎 淡定地说：「什么味道？好像有人在吃臭豆腐」", score: { D: 5, S: 1, B: 4, T: 1 } },
            { text: "🏃 以迅雷不及掩耳之势逃离并嫁祸给旁边的狗", score: { D: 4, S: 2, B: 3, T: 2 } },
            { text: "😱 「谁？谁放的？太没素质了！」", score: { D: 3, S: 3, B: 3, T: 2 } },
            { text: "👀 深呼吸，享受这独一无二的味道", score: { D: 2, S: 5, B: 1, T: 2 } }
        ]
    },
    {
        question: "假如你有超能力，但只能选一个，你选？",
        options: [
            { text: "💩 能让任何东西变成螺蛳粉", score: { D: 5, S: 2, B: 3, T: 1 } },
            { text: "😴 能让老板瞬间睡着然后自己也睡", score: { D: 1, S: 5, B: 2, T: 3 } },
            { text: "👁️ 能看穿别人今天拉了几次屎", score: { D: 3, S: 3, B: 2, T: 3 } },
            { text: "🤡 能让自己变成任何一种动物", score: { D: 2, S: 1, B: 5, T: 2 } }
        ]
    },
    {
        question: "看到朋友说TA要请你吃饭，但只能点什么由你决定，你会点？",
        options: [
            { text: "🦐 往最贵的点！不吃白不吃！吃到他破产", score: { D: 5, S: 1, B: 2, T: 2 } },
            { text: "🥬 随便，我都行，真的", score: { D: 1, S: 5, B: 1, T: 3 } },
            { text: "🍖 全都要！小孩子才做选择！", score: { D: 3, S: 2, B: 5, T: 1 } },
            { text: "🤔 先问他预算多少再决定", score: { D: 2, S: 4, B: 2, T: 2 } }
        ]
    },
    {
        question: "刷到前任的结婚照，你的第一想法是？",
        options: [
            { text: "🔥 这女的/这男的瞎了吧？居然看上TA？", score: { D: 5, S: 1, B: 1, T: 4 } },
            { text: "😭 默默地哭了，不知道是开心还是难过", score: { D: 1, S: 2, B: 1, T: 6 } },
            { text: "📱 赶紧截图发群给大家鉴赏并吐槽", score: { D: 2, S: 2, B: 5, T: 1 } },
            { text: "😴 哦，关我屁事", score: { D: 2, S: 5, B: 1, T: 2 } }
        ]
    },
    {
        question: "朋友让你帮TA砍一刀，你会？",
        options: [
            { text: "🔪 砍什么砍？直接拉黑删除一条龙！", score: { D: 5, S: 1, B: 1, T: 4 } },
            { text: "😤 烦死了！但还是硬着头皮帮砍了", score: { D: 2, S: 4, B: 2, T: 2 } },
            { text: "🤪 好的！（然后下载APP注册登录折腾半小时）", score: { D: 1, S: 3, B: 5, T: 1 } },
            { text: "💸 我直接给你转钱，别让我砍了行不", score: { D: 3, S: 2, B: 1, T: 5 } }
        ]
    },
    {
        question: "逛街时看到前任和新欢在一起，你会？",
        options: [
            { text: "😎 昂首挺胸走过去，假装没看见", score: { D: 4, S: 2, B: 1, T: 3 } },
            { text: "🤪 上去打招呼：「哟，这是你新对象啊？眼光越来越差了」", score: { D: 5, S: 1, B: 4, T: 1 } },
            { text: "📸 拍下来发朋友圈先", score: { D: 2, S: 2, B: 5, T: 1 } },
            { text: "🏃 赶紧躲起来，假装没看见", score: { D: 1, S: 5, B: 1, T: 4 } }
        ]
    },
    {
        question: "朋友跟你说「我跟你说个秘密，你别告诉别人」",
        options: [
            { text: "🤫 好的我保证（转头就发朋友圈）", score: { D: 3, S: 1, B: 5, T: 1 } },
            { text: "😴 哦，然后呢？（其实根本没在听）", score: { D: 2, S: 5, B: 1, T: 2 } },
            { text: "🧐 什么秘密？快说！急死我了！", score: { D: 1, S: 4, B: 3, T: 2 } },
            { text: "🔥 不想知道，别告诉我（耳朵已经竖起来了）", score: { D: 5, S: 2, B: 1, T: 3 } }
        ]
    },
    {
        question: "你觉得这个测试怎么样？",
        options: [
            { text: "🤪 太傻逼了！但我喜欢！再来十个！", score: { D: 5, S: 2, B: 5, T: 1 } },
            { text: "🧐 这都什么玩意儿？作者是天才吗？", score: { D: 1, S: 5, B: 1, T: 4 } },
            { text: "✨ 作者是天才！我爱死了！给作者打钱！", score: { D: 3, S: 1, B: 4, T: 2 } },
            { text: "😴 赶紧出结果吧，困死了（已经睡着了）", score: { D: 1, S: 4, B: 1, T: 5 } }
        ]
    },
    {
        question: "假如你中了500万彩票，你会？",
        options: [
            { text: "🏃 赶紧辞职，环游世界去！", score: { D: 5, S: 1, B: 2, T: 3 } },
            { text: "🤫 谁都不说，继续假装没钱上班", score: { D: 2, S: 4, B: 1, T: 4 } },
            { text: "🎉 先买它100杯奶茶！喝一杯倒一杯！", score: { D: 4, S: 2, B: 5, T: 1 } },
            { text: "🤔 先想想怎么花，想它三天三夜", score: { D: 1, S: 5, B: 2, T: 3 } }
        ]
    },
    {
        question: "老板在群里发红包，你会？",
        options: [
            { text: "⚡ 第一个抢！手慢无！", score: { D: 5, S: 1, B: 3, T: 2 } },
            { text: "😎 等别人抢完了再抢，显得我不在乎", score: { D: 2, S: 4, B: 1, T: 4 } },
            { text: "🤪 抢了之后发「谢谢老板！老板大气！」（发完就后悔抢少了）", score: { D: 3, S: 2, B: 5, T: 1 } },
            { text: "😴 红包？什么红包？我没看见", score: { D: 1, S: 5, B: 1, T: 5 } }
        ]
    },
    {
        question: "看到情侣在大街上吵架，你会？",
        options: [
            { text: "👀 放慢脚步，假装路过，实则偷听", score: { D: 2, S: 3, B: 5, T: 1 } },
            { text: "😎 关我屁事，继续走我的路", score: { D: 3, S: 5, B: 1, T: 2 } },
            { text: "📸 赶紧录下来发群里给大家看看", score: { D: 4, S: 2, B: 4, T: 1 } },
            { text: "🤔 要不要上去劝架呢？纠结ing", score: { D: 1, S: 4, B: 2, T: 4 } }
        ]
    },
    {
        question: "朋友买了新衣服问你好不好看，但你觉得巨丑，你会？",
        options: [
            { text: "😎 「挺好看的！很适合你！」", score: { D: 2, S: 3, B: 4, T: 2 } },
            { text: "🤪 「卧槽！你这是从哪里淘来的宝贝？太有眼光了！」", score: { D: 5, S: 1, B: 5, T: 1 } },
            { text: "🧐 「嗯...怎么说呢...很有个性！」", score: { D: 1, S: 5, B: 2, T: 3 } },
            { text: "😱 「我的妈呀！这也太丑了！赶紧退了！」", score: { D: 4, S: 2, B: 1, T: 4 } }
        ]
    },
    {
        question: "你发现朋友对象出轨了，你会？",
        options: [
            { text: "🔥 直接告诉朋友！不能让TA蒙在鼓里！", score: { D: 5, S: 1, B: 1, T: 5 } },
            { text: "🤔 旁敲侧击提醒一下朋友", score: { D: 2, S: 4, B: 2, T: 3 } },
            { text: "😰 假装不知道，多一事不如少一事", score: { D: 1, S: 5, B: 1, T: 4 } },
            { text: "📸 先拍下来，等合适的时机再说", score: { D: 3, S: 2, B: 5, T: 1 } }
        ]
    },
    {
        question: "假如你可以选择一种交通工具，你选？",
        options: [
            { text: "🦆 骑鸭！嘎嘎嘎，我就是这条街最靓的仔！", score: { D: 5, S: 1, B: 5, T: 1 } },
            { text: "🚀 火箭！直接上天，跟太阳肩并肩！", score: { D: 4, S: 2, B: 3, T: 2 } },
            { text: "🐌 骑蜗牛！慢生活，享受人生！", score: { D: 1, S: 5, B: 1, T: 5 } },
            { text: "🦄 骑独角兽！童话里不是骗人的！", score: { D: 3, S: 3, B: 4, T: 2 } }
        ]
    },
    {
        question: "假如你是老板，你会对员工说什么？",
        options: [
            { text: "💰 大家好好干！年底给你们发红包！（心里想：发个屁）", score: { D: 5, S: 1, B: 2, T: 4 } },
            { text: "🎉 今天心情好！大家提前下班吧！", score: { D: 3, S: 2, B: 5, T: 1 } },
            { text: "😴 大家随便摸鱼，开心最重要！", score: { D: 1, S: 5, B: 1, T: 5 } },
            { text: "🔥 今天必须把活干完！干不完别想下班！", score: { D: 4, S: 1, B: 1, T: 5 } }
        ]
    }
];

const personalityTypes = [
    { type: "DSBT", name: "作死小能手", code: "DSBT", slogan: "不作死就不会死，但不试试怎么知道？", img: "low poly cartoon character, mischievous expression", interpretation: ["恭喜你！你测出了DSBTI中的究极搞事王——【DSBT 作死小能手】！", "这种人格的人总能在最平静的湖面上激起千层浪。", "你告诉他前面是火坑，他不仅要跳，还要在空中转体720度再跳！", "这种人格是朋友们的快乐源泉！"], matchRate: 96 },
    { type: "DSTB", name: "杠精祖师爷", code: "DSTB", slogan: "你说的都对，但我觉得不对", img: "low poly cartoon character, skeptical expression", interpretation: ["哇塞！你测出了DSBTI中的杠精界的扛把子——【DSTB 杠精祖师爷】！", "这种人格能从任何一句话里找到杠点！", "你说今天天气真好，他能跟你杠全球变暖！", "这种人格虽然杠，但也很聪明！"], matchRate: 94 },
    { type: "DBST", name: "社交牛逼症晚期", code: "DBST", slogan: "只要我不尴尬，尴尬的就是别人", img: "low poly cartoon character, big smile", interpretation: ["牛逼！你测出了DSBTI中的社交天花板——【DBST 社交牛逼症晚期】！", "这种人格能和任何人都能聊得热火朝天！", "冷场？不存在的！", "这种人格是天生的气氛组！"], matchRate: 97 },
    { type: "DTBS", name: "咸鱼王中王", code: "DTBS", slogan: "躺平即正义，咸鱼也有梦想", img: "low poly cartoon character, relaxed expression", interpretation: ["恭喜恭喜！你测出了DSBTI中的人生赢家——【DTBS 咸鱼王中王】！", "这种人格的人生信条是：能坐着绝不站着，能躺着绝不坐着！", "这种人格看透了内卷的本质，选择了躺平！", "这种人格虽然看起来咸鱼，但往往活得比谁都通透！"], matchRate: 93 },
    { type: "SDBT", name: "戏精本精", code: "SDBT", slogan: "人生如戏，全靠演技", img: "low poly cartoon character, dramatic expression", interpretation: ["我的天呐！你测出了DSBTI中的奥斯卡影帝/影后——【SDBT 戏精本精】！", "这种人格内心戏比谁都多！", "这种人格不去写小说、不去当演员真的可惜了！", "建议你们赶紧动笔/出道！"], matchRate: 95 },
    { type: "SDTB", name: "吐槽界的天花板", code: "SDTB", slogan: "我不是针对谁，我是说在座的各位都是...", img: "low poly cartoon character, smirking expression", interpretation: ["牛逼克拉斯！你测出了DSBTI中的吐槽之王——【SDTB 吐槽界的天花板】！", "这种人格吐槽精准到位，一针见血！", "这种人格虽然嘴毒，但往往三观很正！", "不过建议你们说话前先数3秒，不然容易挨打！"], matchRate: 92 },
    { type: "SBTD", name: "选择困难症癌晚期", code: "SBTD", slogan: "今天吃什么？这个问题我能想一辈子", img: "low poly cartoon character, confused expression", interpretation: ["我的妈呀！你测出了DSBTI中的纠结之王——【SBTD 选择困难症癌晚期】！", "这种人格能把任何一个简单的选择变成世纪难题！", "点外卖能点一个小时，买衣服能纠结一个星期！", "建议你们下次用抛硬币吧！"], matchRate: 94 },
    { type: "STBD", name: "瓜田守护者", code: "STBD", slogan: "哪里有瓜，哪里就有我", img: "low poly cartoon character, curious expression", interpretation: ["我去！你测出了DSBTI中的瓜田守护者——【STBD 瓜田守护者】！", "这种人格有一种神奇的第六感，哪里有瓜哪里就有他们！", "朋友吵架，他们第一时间到场；明星八卦，他们第一时间知道！", "建议你们开个瓜号吧！"], matchRate: 91 },
    { type: "BTSD", name: "神经病院院长", code: "BTSD", slogan: "大脑里住着一群疯子", img: "low poly cartoon character, crazy expression", interpretation: ["我的天！你测出了DSBTI中的疯癫之王——【BTSD 神经病院院长】！", "这种人格的大脑里住着一整个马戏团！", "正常人无法理解他们的脑回路，但又觉得很有意思！", "跟这种人做朋友，生活永远不会无聊！"], matchRate: 95 },
    { type: "BDST", name: "摸鱼大师", code: "BDST", slogan: "上班摸鱼，下班吃鸡", img: "low poly cartoon character, sly expression", interpretation: ["牛批！你测出了DSBTI中的摸鱼之王——【BDST 摸鱼大师】！", "这种人格能在老板眼皮子底下完美摸鱼！", "上班8小时，7小时59分都在摸鱼，但工作还能完成！", "这种人不去当间谍真的可惜了！"], matchRate: 93 },
    { type: "BT SD", name: "干饭王中王", code: "BTSD", slogan: "干饭不积极，思想有问题", img: "low poly cartoon character, eating expression", interpretation: ["恭喜！你测出了DSBTI中的干饭天花板——【BT SD 干饭王中王】！", "这种人格的人生信条是：民以食为天！", "一顿饭能吃三碗米饭，还能再吃两盘菜！", "跟这种人一起吃饭，永远不用担心会剩饭！"], matchRate: 96 },
    { type: "BDTS", name: "中二病晚期", code: "BDTS", slogan: "错的不是我，是这个世界", img: "low poly cartoon character,中二 expression", interpretation: ["我的天呐！你测出了DSBTI中的二次元之王——【BDTS 中二病晚期】！", "这种人格经常会在脑子里幻想各种动漫场景！", "错的不是我，是这个世界！是世界的错！", "这种人虽然中二，但往往很有想象力！"], matchRate: 92 },
    { type: "TSBD", name: "路痴中的战斗机", code: "TSBD", slogan: "出门全靠导航，还能走错", img: "low poly cartoon character, lost expression", interpretation: ["哇塞！你测出了DSBTI中的迷路之王——【TSBD 路痴中的战斗机】！", "这种人格能在自己家小区迷路！", "开着导航还能走错路，也是一种天赋！", "建议这种人出门带个GPS定位手环！"], matchRate: 94 },
    { type: "TSDB", name: "健忘症患者", code: "TSDB", slogan: "转头就忘了，我刚才要干嘛来着", img: "low poly cartoon character, forgetful expression", interpretation: ["我的妈呀！你测出了DSBTI中的失忆之王——【TSDB 健忘症患者】！", "这种人格能在5分钟内忘记自己要干嘛！", "转头就忘了自己要说什么，也是没谁了！", "建议这种人随身带个小本子！"], matchRate: 91 },
    { type: "TB SD", name: "自恋狂中的王者", code: "TB SD", slogan: "老子天下第一帅/美", img: "low poly cartoon character, narcissistic expression", interpretation: ["我去！你测出了DSBTI中的自恋之王——【TB SD 自恋狂中的王者】！", "这种人格每天都被自己帅/美醒！", "一天能照800次镜子，还嫌不够！", "跟这种人做朋友，你会学会什么叫自信！"], matchRate: 95 },
    { type: "TBSD", name: "腹黑小王子/小公主", code: "TBSD", slogan: "白切黑了解一下", img: "low poly cartoon character, sinister expression", interpretation: ["牛批！你测出了DSBTI中的腹黑之王——【TBSD 腹黑小王子/小公主】！", "这种人格看起来人畜无害，实则一肚子坏水！", "白切黑了解一下？表面小白兔，内心大灰狼！", "跟这种人做朋友，要小心被卖了还帮着数钱！"], matchRate: 93 },
    { type: "SD TB", name: "拖延症癌晚期", code: "SD TB", slogan: "明天再做吧，今天先玩", img: "low poly cartoon character, lazy expression", interpretation: ["恭喜！你测出了DSBTI中的拖延之王——【SD TB 拖延症癌晚期】！", "这种人格能把今天的事拖到明天，明天的事拖到后天！", "不到最后一刻绝不开始，也是一种天赋！", "建议这种人把闹钟调快两个小时！"], matchRate: 96 },
    { type: "SB DT", name: "月光族中的贵族", code: "SB DT", slogan: "钱不是攒出来的，是花出来的", img: "low poly cartoon character, shopping expression", interpretation: ["我的天呐！你测出了DSBTI中的花钱之王——【SB DT 月光族中的贵族】！", "这种人格的工资到账当天就能花完！", "钱不是攒出来的，是花出来的！花完再赚！", "建议这种人把工资卡交给爸妈保管！"], matchRate: 92 },
    { type: "ST DB", name: "熬夜冠军", code: "ST DB", slogan: "夜太美，尽管再危险", img: "low poly cartoon character, tired expression", interpretation: ["哇塞！你测出了DSBTI中的熬夜之王——【ST DB 熬夜冠军】！", "这种人格能从晚上12点熬到早上6点！", "夜太美，尽管再危险，总有人黑着眼眶熬着夜！", "建议这种人多喝点枸杞茶！"], matchRate: 94 },
    { type: "S TBD", name: "起床困难户", code: "S TBD", slogan: "床以外的地方都是远方", img: "low poly cartoon character, sleepy expression", interpretation: ["我的妈呀！你测出了DSBTI中的赖床之王——【S TBD 起床困难户】！", "这种人格能在床上躺一天，连饭都不想起来吃！", "床以外的地方都是远方，手够不到的地方都是他乡！", "建议这种人把闹钟放在客厅！"], matchRate: 91 },
    { type: "D SBT", name: "话痨中的战斗机", code: "D SBT", slogan: "我一开口，就没别人什么事了", img: "low poly cartoon character, talking expression", interpretation: ["我去！你测出了DSBTI中的话痨之王——【D SBT 话痨中的战斗机】！", "这种人格能一个人说三个小时不带停的！", "我一开口，就没别人什么事了！", "跟这种人做朋友，你只需要负责听就行！"], matchRate: 95 },
    { type: "D STB", name: "社恐十级患者", code: "D STB", slogan: "别跟我说话，我害怕", img: "low poly cartoon character, shy expression", interpretation: ["牛批！你测出了DSBTI中的社恐之王——【D STB 社恐十级患者】！", "这种人格能在网上聊得热火朝天，见面却不敢说话！", "别跟我说话，我害怕！让我一个人待着！", "建议这种人多跟话痨做朋友！"], matchRate: 93 },
    { type: "D BST", name: "强迫症晚期", code: "D BST", slogan: "不整齐我浑身难受", img: "low poly cartoon character, neat expression", interpretation: ["恭喜！你测出了DSBTI中的强迫之王——【D BST 强迫症晚期】！", "这种人格看到不整齐的东西就浑身难受！", "不整齐我浑身难受！必须摆整齐！", "跟这种人做朋友，你的房间会永远整整齐齐！"], matchRate: 96 },
    { type: "D TBS", name: "选择困难症癌晚晚期", code: "D TBS", slogan: "这个也想要，那个也想要", img: "low poly cartoon character, very confused expression", interpretation: ["我的天呐！你测出了DSBTI中的纠结之王王——【D TBS 选择困难症癌晚晚期】！", "这种人格能在两个选项之间纠结一天！", "这个也想要，那个也想要，到底选哪个啊！", "建议这种人以后只买固定的东西！"], matchRate: 92 },
    { type: "B DST", name: "干饭机器", code: "B DST", slogan: "没有什么是一顿饭解决不了的", img: "low poly cartoon character, very hungry expression", interpretation: ["哇塞！你测出了DSBTI中的干饭之王王——【B DST 干饭机器】！", "这种人格一天能吃五顿饭，还能再吃零食！", "没有什么是一顿饭解决不了的，如果有，就两顿！", "跟这种人做朋友，你会发现很多好吃的！"], matchRate: 94 },
    { type: "B DTS", name: "睡神在世", code: "B DTS", slogan: "天大地大，睡觉最大", img: "low poly cartoon character, sleeping expression", interpretation: ["我的妈呀！你测出了DSBTI中的睡觉之王——【B DTS 睡神在世】！", "这种人格能睡24小时不带醒的！", "天大地大，睡觉最大！谁也别想打扰我睡觉！", "跟这种人做朋友，你会学会什么叫能睡！"], matchRate: 91 },
    { type: "B SDT", name: "网购达人", code: "B SDT", slogan: "买买买，剁手也要买", img: "low poly cartoon character, shopping spree expression", interpretation: ["我去！你测出了DSBTI中的网购之王——【B SDT 网购达人】！", "这种人格的购物车永远是满的！", "买买买，剁手也要买！不买不舒服！", "建议这种人把淘宝卸载了！"], matchRate: 95 },
    { type: "B STD", name: "游戏狂魔", code: "B STD", slogan: "游戏就是我的生命", img: "low poly cartoon character, gaming expression", interpretation: ["牛批！你测出了DSBTI中的游戏之王——【B STD 游戏狂魔】！", "这种人格能打游戏打一天一夜不带停的！", "游戏就是我的生命！谁也别想阻止我打游戏！", "跟这种人做朋友，你会学会各种游戏！"], matchRate: 93 },
    { type: "T DSB", name: "吸猫达人", code: "T DSB", slogan: "一日吸猫，终身想猫", img: "low poly cartoon character, cat lover expression", interpretation: ["恭喜！你测出了DSBTI中的吸猫之王——【T DSB 吸猫达人】！", "这种人格看到猫就走不动道！", "一日吸猫，终身想猫！猫就是我的命根子！", "跟这种人做朋友，你会看到很多猫的照片！"], matchRate: 96 },
    { type: "T DBS", name: "狗狗爱好者", code: "T DBS", slogan: "狗狗是人类最好的朋友", img: "low poly cartoon character, dog lover expression", interpretation: ["我的天呐！你测出了DSBTI中的爱狗之王——【T DBS 狗狗爱好者】！", "这种人格看到狗就想上去摸！", "狗狗是人类最好的朋友！我要养10只狗！", "跟这种人做朋友，你会看到很多狗的照片！"], matchRate: 92 },
    { type: "T SDB", name: "奶茶续命者", code: "T SDB", slogan: "一天不喝奶茶，浑身难受", img: "low poly cartoon character, bubble tea expression", interpretation: ["哇塞！你测出了DSBTI中的奶茶之王——【T SDB 奶茶续命者】！", "这种人格一天能喝三杯奶茶！", "一天不喝奶茶，浑身难受！奶茶就是我的生命！", "跟这种人做朋友，你会发现很多好喝的奶茶！"], matchRate: 94 },
    { type: "T SBD", name: "火锅爱好者", code: "T SBD", slogan: "没有什么是一顿火锅解决不了的", img: "low poly cartoon character, hot pot expression", interpretation: ["我的妈呀！你测出了DSBTI中的火锅之王——【T SBD 火锅爱好者】！", "这种人格一周能吃五次火锅！", "没有什么是一顿火锅解决不了的，如果有，就两顿！", "跟这种人做朋友，你会发现很多好吃的火锅！"], matchRate: 91 }
];

let currentQuestion = 0;
let scores = { D: 0, S: 0, B: 0, T: 0 };
let usedPersonalityIndices = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-btn').addEventListener('click', startQuiz);
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);
    document.getElementById('share-btn').addEventListener('click', shareResult);
    document.getElementById('total-q').textContent = questions.length;
});

function startQuiz() {
    showScreen('question-screen');
    currentQuestion = 0;
    scores = { D: 0, S: 0, B: 0, T: 0 };
    showQuestion();
}

function showScreen(screenId) {
    var screens = document.querySelectorAll('.screen');
    for (var i = 0; i < screens.length; i++) {
        screens[i].classList.remove('active');
    }
    document.getElementById(screenId).classList.add('active');
}

function showQuestion() {
    var q = questions[currentQuestion];
    document.getElementById('current-q').textContent = currentQuestion + 1;
    document.getElementById('question-text').textContent = q.question;
    
    var progress = (currentQuestion / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    
    var optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    for (var i = 0; i < q.options.length; i++) {
        var option = q.options[i];
        var optionEl = document.createElement('div');
        optionEl.className = 'option';
        optionEl.textContent = option.text;
        optionEl.addEventListener('click', (function(index) {
            return function() {
                selectOption(index);
            };
        })(i));
        optionsContainer.appendChild(optionEl);
    }
}

function selectOption(index) {
    var option = questions[currentQuestion].options[index];
    for (var key in option.score) {
        if (scores.hasOwnProperty(key)) {
            scores[key] += option.score[key];
        }
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    showScreen('result-screen');
    
    var availableIndices = [];
    for (var i = 0; i < personalityTypes.length; i++) {
        if (usedPersonalityIndices.indexOf(i) === -1) {
            availableIndices.push(i);
        }
    }
    
    if (availableIndices.length === 0) {
        usedPersonalityIndices = [];
        availableIndices = [];
        for (var i = 0; i < personalityTypes.length; i++) {
            availableIndices.push(i);
        }
    }
    
    var randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    usedPersonalityIndices.push(randomIndex);
    var personality = personalityTypes[randomIndex];
    
    document.getElementById('type-name').textContent = personality.name;
    document.getElementById('type-code').textContent = personality.code;
    document.getElementById('type-slogan').textContent = personality.slogan;
    document.getElementById('main-type').textContent = personality.code + '（' + personality.name + '）';
    
    var matchRate = personality.matchRate + Math.floor(Math.random() * 8) - 4;
    document.getElementById('match-rate').textContent = '匹配度 ' + matchRate + '%';
    document.getElementById('dimension-hit').textContent = 10 + Math.floor(Math.random() * 6);
    
    var charImgContainer = document.getElementById('character-img');
    var imgUrl = 'https://copilot-cn.bytedance.net/api/ide/v1/text_to_image?prompt=' + 
        encodeURIComponent(personality.img) + '&image_size=square';
    charImgContainer.innerHTML = '<img src="' + imgUrl + '" alt="' + personality.name + '">';
    
    var interpretationContainer = document.getElementById('interpretation');
    var interpretationHtml = '';
    for (var i = 0; i < personality.interpretation.length; i++) {
        interpretationHtml += '<p>' + personality.interpretation[i] + '</p>';
    }
    interpretationContainer.innerHTML = interpretationHtml;
    
    var dimensionsContainer = document.getElementById('dimensions');
    dimensionsContainer.innerHTML = '';
}

function restartQuiz() {
    startQuiz();
}

function shareResult() {
    var text = '我刚做了DSBTI测试，结果太准了！你也来试试吧！';
    if (navigator.share) {
        navigator.share({
            title: 'DSBTI 人格测试',
            text: text,
            url: window.location.href
        });
    } else {
        alert('截图分享给你的朋友们吧！🤪');
    }
}
