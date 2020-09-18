# :pushpin: アプリ紹介

<img src="https://github.com/s79ns/oa/blob/master/app/assets/images/readme%E7%B4%B9%E4%BB%8B.gif">

## :computer: 主な使用言語・ソフトウェア

<img src="https://github.com/s79ns/oa/blob/master/app/assets/images/ruby-logo.png" width="20%"><img src="https://github.com/s79ns/oa/blob/master/app/assets/images/rails_logo.png" width="20%"><img src="https://github.com/s79ns/oa/blob/master/app/assets/images/haml.png" width="20%"><img src="https://github.com/s79ns/oa/blob/master/app/assets/images/sass.png" width="20%"><img src="https://github.com/s79ns/oa/blob/master/app/assets/images/mysql.png" width="20%">

## :speech_balloon: アプリケーション名

performance × easy chat

## :eyes: 機能紹介

ご覧頂きありがとうございます。大きく分けて機能が二つあります。

■performance<br>
学習したものを表示する機能です。<br>
上部：easy chat（掲示板）へのリンクがあります。<br>
中央：スライドを 5 枚、一定のタイミングで表示させています。<br>
下部：学習したものをアイコン化しました。テキストをクリックすると詳細が表示されます。<br>

■easy chat
チャットアプリケーションです。ユーザー新規登録・投稿・編集・削除・いいね！機能や<br>
リダイレクト・ページネーションなど実装しています。<br>
<br>👉 その他機能<br>
・[ゲストログイン](https://github.com/s79ns/oa/blob/master/app/assets/images/%E3%82%B2%E3%82%B9%E3%83%88%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E7%B4%B9%E4%BB%8B.gif "ゲストログイン")：新規登録をせずログインができます。（登録情報の編集・削除は不可）<br>
・[ダークモード](https://github.com/s79ns/oa/blob/master/app/assets/images/%E3%83%80%E3%83%BC%E3%82%AF%E3%83%A2%E3%83%BC%E3%83%89%E7%B4%B9%E4%BB%8B.gif "ダークモード")：黒を基調とした背景でページを閲覧することができます。<br>
・[レスポンシブ Web デザイン](https://github.com/s79ns/oa/blob/master/app/assets/images/%E3%83%AC%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B7%E3%83%96%E3%82%A6%E3%82%A7%E3%83%96%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E7%B4%B9%E4%BB%8B.gif "レスポンシブWebデザイン")：ブレイクポイント 768px で設定しています。

## :memo: インストール方法

`git clone https://github.com/s79ns/oa.git`<br>
\$ `cd oa`<br>
\$ `bundle install`<br>
\$ `rails db:create`<br>
\$ `rails db:migrate`<br>
\$ `rails s`<br>
👉 `http://localhost:3000`

## :credit_card: ライセンス

[MIT](https://raw.githubusercontent.com/s79ns/oa/master/LICENSE "MIT")

## :wink: 作者

s79ns

## :relaxed: 作者より

ご覧いただきありがとうございます。<br>他にも作成したアプリがございますので、宜しければご覧下さい。

# :clipboard: easy chat DB 設計

## :paperclip: ER 図

<img src="https://github.com/s79ns/oa/blob/DB%C3%97ER%C3%97cacoo/app/assets/images/OA%20ER%E5%9B%B3.png">

## :pencil2: DB 設計

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| nickname | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_many :posts, dependent: :destroy
- has_many :likes, dependent: :destroy

## posts テーブル

| Column     | Type       | Options                        |
| ---------- | ---------- | ------------------------------ |
| name       | string     |                                |
| text       | text       |                                |
| like_count | integer    |                                |
| user_id    | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- has_many :likes, dependent: :destroy

## likes テーブル

| Column  | Type       | Options                        |
| ------- | ---------- | ------------------------------ |
| user_id | references | null: false, foreign_key: true |
| post_id | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :post
