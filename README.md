# node-pickfile

選んだファイルをコピーして新しいパッケージを作成する  
(pick files and make new package)

## 概要

- 既存のパッケージから選んだファイルだけを取り出して、新しいパッケージを作成します
- 取り出すファイルは、自動抽出ではなくファイルリストで指定します
- ファイルリストは、実行するフォルダからの相対パスを列挙したテキストファイルです
- 既に存在するファイルをコピーすることが前提のため、ファイルリストに間違い（ファイルが
存在しないなど）があった場合は処理をせず例外を出力します


__インストール__

```sh
$ npm install node-pickfile
```

## Parameters
|Name|Format|Default|
|:-|:-|:-:|
|prefix|_String_|`pkg@`|
|savedir|_String_||
|filename_max|_Integer_|100|
|exclude_extensions|_Array_|[]|

## Example

__TEXTFILE__

```txt
public/html/index.html
public/css/style.css
public/doc/README.txt
```

__JavaScript__

```js
var pick = require('node-pickfile'); // import module
pick('1.0.0.txt', {     // <
  prefix: 'release@',
  savedir: 'pkg'        // > pkg/release@1.0.0/~
});
```


__DIRECTORY LAYOUT__

```
.
├──  public // <- コピー元のファイル群の例
↓   ├── html
│   │   ├── index.html
↓   │   ├── about.html
│   │   └── access.html
↓   ├── css
│   │   └── style.css
↓   ├── doc
│   └── README.txt
↓
---︎---------------------
│
├── [FILELIST].txt // <- 必要なファイル群を指定するテキストファイル
│
---︎---------------------
↓
└──  [SAVE_FOLDER][FILELIST] // <- 新規フォルダ名は、[FILELIST]の名前に基づいて生成する
    └── public
        ├── html
        │   └── index.html
        ├── doc
        └── README.txt
```


## 今後の課題

- [x] ファイルリストを基に既存のパッケージからファイルをコピーする
- [ ] ツリーテキストからファイルリストを作成する
- [x] 保存先ルートディレクトリを作成する際、既に存在する場合は一旦削除する
- [ ] オプションから任意の環境を指定する
    - [ ] `basedir`: 基準となるフォルダ (デフォルト: カレントディレクトリ)
    - [x] `savedir`: 保存するフォルダの指定（デフォルト: カレントディレクトリ）
    - [x] `prefix`: 新規フォルダのフォルダ名の接頭辞(デフォルト: `pkg@`)
- [x] 処理後に確認のためコピー後のファイルサイズを取得しログに出力する `> README`
