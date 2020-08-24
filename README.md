# :pushpin: アプリ紹介

<img src="https://github.com/s79ns/oa/blob/read-me%E6%A9%9F%E8%83%BD%E8%BF%BD%E5%8A%A0%E3%81%AE%E7%82%BA%E3%80%81%E7%B7%A8%E9%9B%86/app/assets/images/readme%E7%B4%B9%E4%BB%8B.png">

## :computer: 主な使用言語・ソフトウェア

<img src="https://github.com/s79ns/oa/blob/master/app/assets/images/ruby-logo.png" width="20%"><img src="https://github.com/s79ns/oa/blob/master/app/assets/images/rails_logo.png" width="20%"><img src="https://github.com/s79ns/oa/blob/master/app/assets/images/haml.png" width="20%"><img src="https://github.com/s79ns/oa/blob/master/app/assets/images/sass.png" width="20%"><img src="https://github.com/s79ns/oa/blob/master/app/assets/images/mysql.png" width="20%">

## :speech_balloon: アプリケーション名

easy chat

## :eyes: 機能紹介

簡易チャットアプリです。ユーザー新規登録・新規投稿・投稿内容編集・削除ができます。<br>
<br>👉 その他機能
<br>・ゲストログイン：新規登録をせずログインすることができます。（セキュリティ上、ユーザー登録情報編集不可）
<br>・リダイレクト：未ログイン時、新規投稿画面にアクセスするとトップページへリダイレクトします。
<br>・ダークモード：黒を基調とした背景でページを閲覧することができます。

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
