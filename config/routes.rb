Rails.application.routes.draw do
	get ':id' => 'home#display'
	post 'process' => 'home#action'
  root 'home#index'
end
