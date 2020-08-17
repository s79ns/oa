class PostsController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    Post.create(post_params)
  end

  private
  def post_params
    params.require(:post).permit(:name, :image, :text)
  end
end