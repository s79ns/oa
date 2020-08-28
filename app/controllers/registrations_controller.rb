class RegistrationsController < Devise::RegistrationsController
  before_action :check_guest, only: %i[update destroy]

end