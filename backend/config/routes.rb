Rails.application.routes.draw do
  resources :cares, except: [:new, :edit]
  resources :plants, except: [:new, :edit]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
