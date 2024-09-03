1. Create an app.js file 
2. Import required library (express) and make routes.
3. Setup related view engine , json , url-encoded , serving static files -> install ejs  
4. Create View folder 
5. Create Public folder for images , js & css folder/files .
6. Create .ejs file in view as we are doing Server Side rendering (Example: index.ejx etc )
7. Create index.js file in View folder and make a form with input of name , 
email & imageUrl and create user button  

-We are making a page where user enter this details and they are stored in backend .
8. Create a read.ejs file in view folder where we display the data of created users , this data comes from backend 
9. Also create routes for them [/create & /read ] in app.js file 
10. Remember to add name to every inputs .
11. Create a folder name Models and in that create a file named User.js - for creating user models - install mongoose for that 
12. import that usermodel into app.js file -- require 
13. Add logic on routes 