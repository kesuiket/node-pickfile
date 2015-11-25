'use strict';

module.exports = {
  addExt: addExt
};



/*
 * Add Ext
 * 引数に指定された文字列に拡張子の有無を確認
 * @param {String} str
 * @return {String} str.txt
 */
function addExt(str, ext) {
  if (!str) throw ('ファイルが指定されていません');
  if (!ext) throw ('拡張子が指定されていません');

  if (/\.[\w]+$/.test(str)) {
    return str;
  } else {
    return str + ext;
  }
}