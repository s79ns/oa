# アプリ紹介

# アプリケーション名

・

# 機能紹介

・

# 使い方

・

# インストール方法

$ git clone git@github.com:s79ns/oa.git
$ cd oa
$ bundle install
$ rails db:create
$ rails db:migrate
$ rails s
👉 http://localhost:3000

# ライセンス

・

# 作者

・

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
