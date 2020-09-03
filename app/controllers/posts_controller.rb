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
      # redirect_to root_path, notice: 'メッセージが送信されました'
    else
      # @post = @post.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください'
      redirect_to root_path
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