function kana2manyougana(inpstr) {

    txt=inpstr;
    txt=txt.replaceAll("ア", "阿")
    txt=txt.replaceAll("ァ", "阿")
    txt=txt.replaceAll("イ", "伊")
    txt=txt.replaceAll("ィ", "伊")
    txt=txt.replaceAll("ウ", "宇")
    txt=txt.replaceAll("ゥ", "宇")
    txt=txt.replaceAll("ヴ", "武")
    txt=txt.replaceAll("エ", "江")
    txt=txt.replaceAll("ェ", "江")
    txt=txt.replaceAll("オ", "於")
    txt=txt.replaceAll("ォ", "於")

    txt=txt.replaceAll("カ", "加")
    txt=txt.replaceAll("キ", "幾")
    txt=txt.replaceAll("ク", "久")
    txt=txt.replaceAll("ケ", "介")
    txt=txt.replaceAll("コ", "己")

    txt=txt.replaceAll("ガ", "賀")
    txt=txt.replaceAll("ギ", "義")
    txt=txt.replaceAll("グ", "遇")
    txt=txt.replaceAll("ゲ", "牙")
    txt=txt.replaceAll("ゴ", "娯")

    txt=txt.replaceAll("サ", "散")
    txt=txt.replaceAll("シ", "之")
    txt=txt.replaceAll("ス", "須")
    txt=txt.replaceAll("セ", "世")
    txt=txt.replaceAll("ソ", "曽")

    txt=txt.replaceAll("ザ", "奢")
    txt=txt.replaceAll("ジ", "餌")
    txt=txt.replaceAll("ズ", "殊")
    txt=txt.replaceAll("ゼ", "是")
    txt=txt.replaceAll("ゾ", "賊")

    txt=txt.replaceAll("タ", "多")
    txt=txt.replaceAll("チ", "千")
    txt=txt.replaceAll("ツ", "州")
    txt=txt.replaceAll("ッ", "")
    txt=txt.replaceAll("テ", "天")
    txt=txt.replaceAll("ト", "止")

    txt=txt.replaceAll("ダ", "駄")
    txt=txt.replaceAll("ヂ", "恥")
    txt=txt.replaceAll("ヅ", "豆")
    txt=txt.replaceAll("デ", "泥")
    txt=txt.replaceAll("ド", "度")

    txt=txt.replaceAll("ナ", "奈")
    txt=txt.replaceAll("ニ", "仁")
    txt=txt.replaceAll("ヌ", "奴")
    txt=txt.replaceAll("ネ", "祢")
    txt=txt.replaceAll("ノ", "乃")
    txt=txt.replaceAll("ン", "尓")

    txt=txt.replaceAll("ハ", "八")
    txt=txt.replaceAll("ヒ", "比")
    txt=txt.replaceAll("フ", "不")
    txt=txt.replaceAll("ヘ", "部")
    txt=txt.replaceAll("ホ", "保")

    txt=txt.replaceAll("バ", "婆")
    txt=txt.replaceAll("ビ", "避")
    txt=txt.replaceAll("ブ", "否")
    txt=txt.replaceAll("ベ", "陪")
    txt=txt.replaceAll("ボ", "帆")

    txt=txt.replaceAll("パ", "巴")
    txt=txt.replaceAll("ピ", "畢")
    txt=txt.replaceAll("プ", "蒲")
    txt=txt.replaceAll("ペ", "秘")
    txt=txt.replaceAll("ポ", "波")

    txt=txt.replaceAll("マ", "末")
    txt=txt.replaceAll("ミ", "三")
    txt=txt.replaceAll("ム", "牟")
    txt=txt.replaceAll("メ", "女")
    txt=txt.replaceAll("モ", "毛")

    txt=txt.replaceAll("ヤ", "也")
    txt=txt.replaceAll("ャ", "也")
    txt=txt.replaceAll("ユ", "由")
    txt=txt.replaceAll("ュ", "由")
    txt=txt.replaceAll("ヨ", "與")
    txt=txt.replaceAll("ョ", "與")

    txt=txt.replaceAll("ラ", "良")
    txt=txt.replaceAll("リ", "利")
    txt=txt.replaceAll("ル", "流")
    txt=txt.replaceAll("レ", "礼")
    txt=txt.replaceAll("ロ", "呂")

    txt=txt.replaceAll("ワ", "和")
    txt=txt.replaceAll("ヰ", "井")
    txt=txt.replaceAll("ヱ", "恵")
    txt=txt.replaceAll("ヲ", "乎")

    txt=txt.replaceAll("あ", "安")
    txt=txt.replaceAll("ぁ", "安")
    txt=txt.replaceAll("い", "以")
    txt=txt.replaceAll("ぃ", "以")
    txt=txt.replaceAll("う", "宇")
    txt=txt.replaceAll("ぅ", "宇")
    txt=txt.replaceAll("ゔ", "武")
    txt=txt.replaceAll("え", "衣")
    txt=txt.replaceAll("ぇ", "衣")
    txt=txt.replaceAll("お", "於")
    txt=txt.replaceAll("ぉ", "於")

    txt=txt.replaceAll("か", "加")
    txt=txt.replaceAll("き", "機")
    txt=txt.replaceAll("く", "久")
    txt=txt.replaceAll("け", "計")
    txt=txt.replaceAll("こ", "己")

    txt=txt.replaceAll("が", "賀")
    txt=txt.replaceAll("ぎ", "義")
    txt=txt.replaceAll("ぐ", "遇")
    txt=txt.replaceAll("げ", "牙")
    txt=txt.replaceAll("ご", "娯")

    txt=txt.replaceAll("さ", "左")
    txt=txt.replaceAll("し", "之")
    txt=txt.replaceAll("す", "寸")
    txt=txt.replaceAll("せ", "世")
    txt=txt.replaceAll("そ", "曽")

    txt=txt.replaceAll("ざ", "奢")
    txt=txt.replaceAll("じ", "餌")
    txt=txt.replaceAll("ず", "殊")
    txt=txt.replaceAll("ぜ", "是")
    txt=txt.replaceAll("ぞ", "賊")

    txt=txt.replaceAll("た", "太")
    txt=txt.replaceAll("ち", "知")
    txt=txt.replaceAll("つ", "川")
    txt=txt.replaceAll("っ", "")
    txt=txt.replaceAll("て", "天")
    txt=txt.replaceAll("と", "止")

    txt=txt.replaceAll("だ", "駄")
    txt=txt.replaceAll("ぢ", "恥")
    txt=txt.replaceAll("づ", "豆")
    txt=txt.replaceAll("で", "泥")
    txt=txt.replaceAll("ど", "度")

    txt=txt.replaceAll("な", "奈")
    txt=txt.replaceAll("に", "仁")
    txt=txt.replaceAll("ぬ", "奴")
    txt=txt.replaceAll("ね", "祢")
    txt=txt.replaceAll("の", "乃")
    txt=txt.replaceAll("ん", "无")

    txt=txt.replaceAll("は", "波")
    txt=txt.replaceAll("ひ", "比")
    txt=txt.replaceAll("ふ", "不")
    txt=txt.replaceAll("へ", "部")
    txt=txt.replaceAll("ほ", "保")

    txt=txt.replaceAll("ば", "婆")
    txt=txt.replaceAll("び", "避")
    txt=txt.replaceAll("ぶ", "否")
    txt=txt.replaceAll("べ", "陪")
    txt=txt.replaceAll("ぼ", "帆")

    txt=txt.replaceAll("ぱ", "巴")
    txt=txt.replaceAll("ぴ", "畢")
    txt=txt.replaceAll("ぷ", "蒲")
    txt=txt.replaceAll("ぺ", "秘")
    txt=txt.replaceAll("ぽ", "波")

    txt=txt.replaceAll("ま", "末")
    txt=txt.replaceAll("み", "美")
    txt=txt.replaceAll("む", "武")
    txt=txt.replaceAll("め", "女")
    txt=txt.replaceAll("も", "毛")

    txt=txt.replaceAll("や", "也")
    txt=txt.replaceAll("ゃ", "也")
    txt=txt.replaceAll("ゆ", "由")
    txt=txt.replaceAll("ゅ", "由")
    txt=txt.replaceAll("よ", "与")
    txt=txt.replaceAll("ょ", "与")

    txt=txt.replaceAll("ら", "良")
    txt=txt.replaceAll("り", "利")
    txt=txt.replaceAll("る", "留")
    txt=txt.replaceAll("れ", "礼")
    txt=txt.replaceAll("ろ", "呂")

    txt=txt.replaceAll("わ", "和")
    txt=txt.replaceAll("ゐ", "爲")
    txt=txt.replaceAll("ゑ", "恵")
    txt=txt.replaceAll("を", "遠")

    document.getElementById('outputix').innerHTML=txt;
    console.log(txt);
}
