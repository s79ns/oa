class ToppagesController < ApplicationController
  def index
    @posts = Post.includes(:user)
    @posts = Post.all.page(params[:page]).per(5)
    # ページネーションが1ページに表示するレコード数はデフォルトで25件
    # 変更する場合は、.per()の数字を変更して下さい
  end
end