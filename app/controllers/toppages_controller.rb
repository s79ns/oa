class ToppagesController < ApplicationController
  def index
    @posts = Post.includes(:user)
    @posts = Post.all.page(params[:page]).per(5)
    # ページネーションが1ページに表示するレコード数はデフォルトで25件です
    # 変更する場合は、.per()の数字を編集して下さい
  end
end