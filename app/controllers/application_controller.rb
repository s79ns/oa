class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  def check_guest
    email = resource&.email || params[:user][:email].downcase
    if email == 'guest@example.com'
      redirect_to toppages_index_path, alert: 'ゲストユーザーの変更・削除はできません'
    end
  end

  # deviseアカウント登録後・ログイン後のパスを変更
  def after_sign_in_path_for(resource)
    toppages_index_path
  end

  # deviseアカウント編集後のパスを変更
  # def after_update_path(resource)
  #   toppages_index_path
  # end

  # deviseログアウト後のパスを変更
  def after_sign_out_path_for(resource)
    toppages_index_path
  end

  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
  end
end