# :pushpin: アプリ紹介

## :speech_balloon: アプリケーション名

easy chat

## :eyes: 機能紹介

簡易チャットアプリです。ユーザー新規登録・新規投稿・投稿内容編集・削除ができます。<br>未ログイン時、新規投稿画面へ移動するとトップページへリダイレクトします。

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

# OA DB 設計

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
