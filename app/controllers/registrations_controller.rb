class RegistrationsController < ApplicationController
  before_action :check_guest, only: :destroy
end
