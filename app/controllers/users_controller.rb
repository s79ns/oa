class UsersController < ApplicationController
  def new_guest
    user = User.guest
    sign_in user
    redirect_to toppages_index_path, notice: 'ゲストユーザーとしてログインしました'
  end
end