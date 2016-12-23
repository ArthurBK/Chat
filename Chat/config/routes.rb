Rails.application.routes.draw do
  resources :chatrooms
	root to: "pages#home"
  resources :posts
  devise_for :users, controllers: { sessions: "users/sessions", registrations: "users/registrations" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
mount ActionCable.server, at: '/cable'
end
