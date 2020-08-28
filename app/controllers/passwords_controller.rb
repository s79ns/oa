class PasswordsController < Devise::ApplicationController
before_action :check_guest, only: :create
end