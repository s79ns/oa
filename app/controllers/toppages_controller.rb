class ToppagesController < ApplicationController
  def index
    @posts = Post.includes(:user)
    @posts = Post.all.page(params[:page])
  end
end