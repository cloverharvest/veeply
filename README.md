# README

This is a practice Rangular App to manage customer information.

* Ruby version: ruby 2.3.1p112

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions


Remember:  
1. During development: will only accept @example.com emails as valid  
2. Restart server when changing the initializer  
3. At least as of Sept. 2016, bootstrap-sass-official is now called bootstrap-sass. Need to change this when declaring as asset in Gemfile.  
4. To see visual rep of db: rails dbconsole => \x on => select * from users; => \q  
5. check_constraint for postgresql => acts as an extra layer of protection to check email column of invalid values aside from frontend validation of email  
6. update_attribute of Rails- SW  
7. After informing Rails to use SQL to store the schema, delete app/assets/javascripts/cable.js to prevent devise error(which thinks that action cable is required) and update config/application.rb.  
8. Rails validation => customer experience, check_constraint => security => code duplication which is ot good but => use test for each part of the stack to fight inconsistency in app.  
9. Faker gem handy for seeding data.  
10. sr-only => screen reader only for acessibility, content or feature shows only when screen reader function is available and utilized by end-user  
11. thead, tr => th, td  
12. Postgres performs decently for case_insensitive_search and like.  
13. Pagination using index, Postgres 'order by', and Bootstrap components  
14. browser-based request(Rails) vs AJAX request(Angular-). use respond_to method of Rails and then use json to specify the JSON data that we want to be returned (e.g. @ customers)  
15. `bundle exec rspec spec/models./user_spec.rb works` BUT `rspec spec/models./user_spec.rb` throws a loading error  
