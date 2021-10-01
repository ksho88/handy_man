class ApplicationController < ActionController::API
  proteect_from_forgery with: :null_session
end
