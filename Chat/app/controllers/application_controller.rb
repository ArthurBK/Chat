class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  def after_sign_in_path_for(resource)
    new_chatroom_path
    # request.env['omniauth.origin'] || stored_location_for(resource) 
  end
end
