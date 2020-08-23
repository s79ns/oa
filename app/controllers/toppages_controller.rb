class ToppagesController < ApplicationController
  def index
    @posts = Post.includes(:user)
  end

  def new_guest
  end
end