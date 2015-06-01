Rails.application.routes.draw do
	post 'process' => 'home#action'
  root 'home#index'
end
