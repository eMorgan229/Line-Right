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
  
#theatres
  get "/theatres", to: "theatres#index"
#waitlist
  post "/my-waitlists", to: "waitlists#create"
  ##****view a list of a user's waitlists based on the current session (similar to "/me" route with a custom serializer)
  get "/my-waitlists", to: "waitlists#show"
  get "/waitlists", to: "waitlists#update_line_count"
  patch "/remove-from-line/:id", to: "waitlists#remove_from_line"
  get "/shortest_wait_time", to: "waitlists#shortest_wait_time"
  get "/line_count", to: "waitlists#get_line_count"
  get "/place_in_line", to: "waitlists#show_place_in_line"

end
