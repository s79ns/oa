# :pushpin: アプリ紹介

<img src="https://github.com/s79ns/oa/blob/master/app/assets/images/readme%E7%B4%B9%E4%BB%8B.gif">

## :computer: 主な使用言語・ソフトウェア

<img src="https://github.com/s79ns/oa/blob/master/app/assets/images/ruby-logo.png" width="20%"><img src="https://github.com/s79ns/oa/blob/master/app/assets/images/rails_logo.png" width="20%"><img src="https://github.com/s79ns/oa/blob/master/app/assets/images/haml.png" width="20%"><img src="https://github.com/s79ns/oa/blob/master/app/assets/images/sass.png" width="20%"><img src="https://github.com/s79ns/oa/blob/master/app/assets/images/mysql.png" width="20%">

## :speech_balloon: アプリケーション名

easy chat

## :eyes: 機能紹介

簡易チャットアプリです。ユーザー新規登録・新規投稿・投稿内容編集・削除ができます。<br>
未ログイン時、新規投稿画面にアクセスするとトップページへリダイレクトします。<br>
<br>👉 その他機能<br>
・ゲストログイン：新規登録をせずログインができます。（登録情報の編集・削除は不可）<br>
・ダークモード：黒を基調とした背景でページを閲覧することができます。[こちら](https://github.com/s79ns/oa/blob/master/app/assets/images/%E3%83%80%E3%83%BC%E3%82%AF%E3%83%A2%E3%83%BC%E3%83%89%E7%B4%B9%E4%BB%8B.gif "レスポンシブWebデザイン")からご覧下さい。
・レスポンシブ Web デザイン：ブレイクポイント 768px で設定しています。[こちら](https://github.com/s79ns/oa/blob/master/app/assets/images/%E3%83%AC%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B7%E3%83%96%E3%82%A6%E3%82%A7%E3%83%96%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E7%B4%B9%E4%BB%8B.gif "レスポンシブWebデザイン")からご覧下さい。

## :green_book: 使い方

ユーザー新規登録後、ユーザー情報編集・新規投稿・投稿内容の編集・削除機能を使用する事ができます。

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

# :clipboard: OA DB 設計

## users テーブル

| Column   | Type   | Options     |
| -------- | ------ | ----------- |
| name     | string | null: false |
| email    | string | null: false |
| password | string | null: false |

### Association

- has_many :posts
- has_many :comments

## posts テーブル

| Column  | Type    | Options                        |
| ------- | ------- | ------------------------------ |
| text    | text    |                                |
| image   | text    |                                |
| user_id | integer | null: false, foreign_key: true |

### Association

- belongs_to :user
- has_many :comments

## comments テーブル

| Column  | Type    | Options                        |
| ------- | ------- | ------------------------------ |
| text    | text    | null: false                    |
| user_id | integer | null: false, foreign_key       |
| post_id | integer | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :comment
