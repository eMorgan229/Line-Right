Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
#users
  get "/users", to: "users#index"
  post "/users", to: "users#create"
  
#waitlists

#user_waitlist

end
