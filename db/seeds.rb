#User Seeds
User.create(username: "fanny123", password: "12345678", name: "Fanny", phone_number: "555-334-1947")
User.create(username: "bob123", password: "12345678", name: "Bob", phone_number: "555-575-1425")
User.create(username: "bonnie123", password: "12345678", name: "Bonnie", phone_number: "555-555-55555")
User.create(username: "tina123", password: "12345678", name: "Tina", phone_number: "555-867-1256")
User.create(username: "norah123", password: "12345678", name: "Norah", phone_number: "555-433-7491")
User.create(username: "robert123", password: "12345678", name: "Robert", phone_number: "555-567-2435")
User.create(username: "sarah123", password: "12345678", name: "Sarah", phone_number: "555-765-9383")
User.create(username: "olivia123", password: "12345678", name: "Olivia", phone_number: "555-324-1877")
User.create(username: "george123", password: "12345678", name: "George", phone_number: "555-331-1986")

#Theatre Seeds
## wait_time params will be in "seconds" and parsed into minutes in the front end
Theatre.create(show_name: "Aladdin", theatre_name: "New Amsterdam Theatre",image: "https://images.fineartamerica.com/images-medium-large-5/comedy-and-tragedy-sandra-gale.jpg", wait_time: 5700, theatre_latitude: 40.75626304888068, theatre_longitude: -73.98780616441766)
Theatre.create(show_name: "American Buffalo", theatre_name: "Circle in the Square",image: "https://images.fineartamerica.com/images-medium-large-5/comedy-and-tragedy-sandra-gale.jpg", wait_time: 2700, theatre_latitude: 40.76226, theatre_longitude: -73.98502)
Theatre.create(show_name: "A Strange Loop", theatre_name: "Lyceum Theatre",image: "https://images.fineartamerica.com/images-medium-large-5/comedy-and-tragedy-sandra-gale.jpg", wait_time: 1800, theatre_latitude: 40.75792, theatre_longitude: -73.98445)
Theatre.create(show_name: "Beetlejuice", theatre_name: "Marquis Theatre",image: "https://images.fineartamerica.com/images-medium-large-5/comedy-and-tragedy-sandra-gale.jpg", wait_time: 1200, theatre_latitude: 40.75956, theatre_longitude: -73.98635)
Theatre.create(show_name: "The Book of Mormon", theatre_name: "Eugene O'Neill Theatre",image: "https://images.fineartamerica.com/images-medium-large-5/comedy-and-tragedy-sandra-gale.jpg", wait_time: 600, theatre_latitude: 40.76126, theatre_longitude: -73.98571)
Theatre.create(show_name: "Chicago", theatre_name: "Ambassador Theatre",image: "https://images.fineartamerica.com/images-medium-large-5/comedy-and-tragedy-sandra-gale.jpg", wait_time: 7200, theatre_latitude: 40.76150, theatre_longitude: -73.98502)
Theatre.create(show_name: "Come From Away", theatre_name: "Schoenfeld Theatre",image: "https://images.fineartamerica.com/images-medium-large-5/comedy-and-tragedy-sandra-gale.jpg", wait_time: 0, theatre_latitude: 40.75872, theatre_longitude: -73.98734)
Theatre.create(show_name: "Company", theatre_name: "Bernard B Jacobs Theatre",image: "https://images.fineartamerica.com/images-medium-large-5/comedy-and-tragedy-sandra-gale.jpg", wait_time: 5400, theatre_latitude: 40.75885, theatre_longitude: -73.98771)
Theatre.create(show_name: "Dear Evan Hansen", theatre_name: "Music Box Theatre",image: "https://images.fineartamerica.com/images-medium-large-5/comedy-and-tragedy-sandra-gale.jpg", wait_time: 9600, theatre_latitude: 40.75908, theatre_longitude: -73.98707)
Theatre.create(show_name: "For Colored Girls...", theatre_name: "Booth Theatre",image: "https://images.fineartamerica.com/images-medium-large-5/comedy-and-tragedy-sandra-gale.jpg", wait_time: 10200, theatre_latitude: 40.75863, theatre_longitude: -73.98686)
Theatre.create(show_name: "Funny Girl", theatre_name: "August Wilson Theatre",image: "https://images.fineartamerica.com/images-medium-large-5/comedy-and-tragedy-sandra-gale.jpg", wait_time: 5700, theatre_latitude: 40.76362, theatre_longitude: -73.98411)
Theatre.create(show_name: "Girl From the North Country", theatre_name: "Belasco Theatre",image: "https://images.fineartamerica.com/images-medium-large-5/comedy-and-tragedy-sandra-gale.jpg", wait_time: 5400, theatre_latitude: 40.75681, theatre_longitude: -73.98386)

#User_Waitlist Seeds
##I think these will be created

puts "done seeding!"
