class PostsController < ApplicationController
  before_action :find_action, only: [:destroy, :edit, :update]
  before_action :move_to_index, except: [:index, :show]

  def index
    redirect_to root_path
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
    else
      @post = Post.includes(:user)
      redirect_to root_path, alert: '新規投稿に失敗しました'
    end
  end

  def destroy
    @post.destroy
  end

  def edit
  end

  def update
    @post.update(post_params)
  end

  private
  def post_params
    params.require(:post).permit(:name, :image, :text).merge(user_id: current_user.id)
  end

  def find_action
    @post = Post.find(params[:id])
  end

  def move_to_index
    unless user_signed_in?
      redirect_to action: :index
    end
  end
end