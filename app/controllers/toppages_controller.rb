class ToppagesController < ApplicationController
  def index
    @posts = Post.includes(:user)
    @posts = Post.all.page(params[:page]).per(5)
  end
end