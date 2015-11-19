# node-diffmk

差分ファイルを作るライブラリ

## 概要

- 既存のファイル群から必要なファイルだけを取り出して、新しいファイル群を生成します
- 必要なファイルは、自動抽出ではなくファイルリストで指定します
- ファイルリストは、単純にファイルパスを列挙したテキストファイルです
- ファイルリストには、パスを1行に1つ実行するディレクトリからの相対パスを記述します
- すでに存在するファイルをコピーすることを前提とするため、ファイルリストに間違いが
あった場合は処理されず、例外を出力します


__ディレクトリレイアウト__

```
@current
 ├ ← public
 ↓   ├── html
 |   |   ├── index.html
 ↓   |   ├── about.html
 |   |   └── access.html
 ↓   ├── css
 |   |   └── style.css
 ↓   └── doc
 |       └── README.txt
 ↓
 ---✂︎---------------------
 ├── [filelist].txt
 ↓    # ファイルリストで指定されたファイルのみコピーしてくる
 |    # 新規のフォルダ名は、[filelist]の名前に基づいて生成する
 ↓
 └ → diff@[filelist]
     └── public
         ├── html
         |   └── index.html
         └── doc
             └── README.txt
```

__[filelist].txt__

```txt
public/html/index.html
public/css/style.css
public/doc/README.txt
```

__JavaScript__

```js
var diffmk = require('node-diffmk');
diffmk('release-20150101');
```


## 今後の課題

- [x] 差分ファイルのリストからファイル群を生成する
- [ ] ツリーテキストから差分ファイルリストを作ってファイル群を生成する
- [x] ルートディレクトリを作成する際、既存のファイルがあったら先に削除する
- [ ] オプションから任意の環境を指定する
    - `basedir`: 基準となるフォルダ (デフォルト: カレントディレクトリ)
    - `prefix`: 新規フォルダのフォルダ名の接頭辞(デフォルト: `diff@`)
