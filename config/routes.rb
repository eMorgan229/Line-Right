Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
#users/auth
  get "/users", to: "users#index"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
#waitlists
  get "/waitlists", to: "waitlists#index"
#user_waitlist
  post "/my-waitlists", to: "user_waitlists#create"
  ##****view a list of a user's waitlists based on the current session (similar to "/me" route with a custom serializer)
  get "/my-waitlists", to: "user_waitlists#show"

end
