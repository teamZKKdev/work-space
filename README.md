# work-space
開発用のリポジトリ

# teamZKK - Sneakers -  コーディング規約

### 書式ルール
***
#### HTML
1. **インデント**
  * 半角スペース2つ分もしくは**Tabキー**でインデントする。
  * コードの階層が下がるたびにインデントを入れる
※可読性を高めるためにインデントは必要。
```html
<!-- OK -->
<ul>
  <li>test</li>
  <li>test</li>
</ul>

<!-- NG -->
<ul>
　　　<li>test</li>
  <li>test</li>
</ul>
```
<br>
<br>

2. **HTMLクオテーションマーク**
  * 属性値にはダブルクオテーションを使うこと。
```html
<!-- NG -->
<a class='maia-button maia-button-secondary'>Sign in</a>

<!-- OK -->
<a class="maia-button maia-button-secondary">Sign in</a>
```
<br>
<br>

3. **imgタグ**
  * imgタグ単体で使うのではなく、必ずdivタグやpタグで囲うこと。
  * ※imgタグはインライン要素のため、スタイル調整の都合上、別のタグで囲う方が良いそう。
[imgタグ（画像）を別タグで囲む理由とタグの使い分け](https://indoor-days.blogspot.com/2020/03/imgtag.Surround.html)
```html
<!-- NG -->
<img src="#" alt="ロゴ画像">

<!-- OK -->
<div class="header-logo">
  <img class="header-logoImg" src="#" alt="ロゴ画像">
</div>
```
<br>
<br>

***

#### CSS
1. **レスポンシブにおけるブレイクポイント**
  * 以下の通りとする。
    * **768px**以下：sp用
    * **769px**以上：pc用

<br>
<br>

2. **CSSセレクタ**
  * CSSに、h div p等のタグをセレクタに指定しないで、必要に応じてクラスを割り振る。
  * 親セレクタも同様にタグ指定はしない。
```css
/* NG */
p {
  ...
}

a {
  ...
}

div {
  ...
}

.contents p{
  font-size:1.5px;
}

/* OK */
.contents-text{
  font-size:1.5px;
}
```
<br>
<br>

3. **色の指定**
  * colorやbackground-color等における色の指定は、デザインの反映をより正確に行うため**16進数**で指定してください。
```css
.content-text {
  /* NG */
  color: white;

  /* OK */
  color: #fff;
}
```
<br>
<br>

4. **marginとpadding**
  * **親子関係はpadding**、**兄弟要素はmargin**で余白を取ること
    * marginは要素の外側、つまり要素とは関係のない余白ですが、paddingは要素の内側、つまり要素に関係のある余白を意味しています。
    なので、要素を内包する（親子関係）余白はpaddingで、内包しない（兄弟要素）余白はmarginが妥当ということになっています。

  * 余白は、なるべく**左方向、上方向**でとること
    * htmlは要素を消すと基本的に垂直方向では上方向、水平方向の場合は左方向に詰まります。
そのため、下や左方向にマージンをつけると要素を消した際に不要な余白を消す必要が出くる可能性があるのでメンテナンス性が欠けてしまう原因となります。おすすめは上方向と左方向です。

<br>
<br>

5. **CSSの書き方**
  * 1行1プロパティとし、プロパティにはインデントを付ける
  * プロパティ後の「:」（コロン）の後には半角スペースを付ける
```css
/* □ = 半角スペース */

/* NG */
.l-header{
display:100%;
width:100%;
□□height:100%;
}

/* OK */
.l-header□{
□□display:□100%;
□□width:□100%;
□□height:□100%;
}
```
<br>
<br>

6. **クラスの命名**
  * クラス名には意味のある名前を使うこと。
  * 表示名や不可解な名前ではなく、具体的な名前を付ける。
  * ※書き方は、**aaaa-aaa** や **aaa-aaaAaa** のようにする。

```css
/* NG: 意味が分からない */
.yee-1901 {}

/* OK: HTMLの構造に沿っている */
.header {}
.header-logo {}
.header-logoImg {}
.pickUp-title {}
.contact-text
```
<br>
<br>


