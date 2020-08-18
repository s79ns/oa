# アプリ紹介

# アプリケーション名

easy chat

# \:eyes:機能紹介

簡易チャットアプリです。
新規登録後、ユーザー情報編集・新規投稿・投稿内容の編集・削除機能を使う事ができます。

# 使い方

# インストール方法

git clone https://github.com/s79ns/oa.git
$
$ cd oa
$ bundle install
$ rails db:create
$ rails db:migrate
$ rails s
👉 http://localhost:3000

# ライセンス

# \:wink:作者

s79ns

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
