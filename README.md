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
15. Test database constraints => `bundle exec rspec spec/models/user_spec.rb` or `rspec spec/models/user_spec.rb`  
16. Acceptance tests =>  PhantomJS <= Poltergeist <= Capybara  
a.) used homebrew to install PhantomJS, using this via ruby curl automatically sets it into PATH vs. downloading direct from PhantomJS web site.
    =>http://macappstore.org/phantomjs-2/  
    =>Install the App  
        Press Command+Space and type Terminal and press enter/return key.  
        Run in Terminal app:  
        `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" < /dev/null 2> /dev/null`  
        and press enter/return key. Wait for the command to finish.  
        Run:  
        `brew install phantomjs`
        Check if in path:
        `which phantomjs`
        => /usr/local/bin/phantomjs
        Done! You can now use phantomjs.
b.) use the method `feature` instead of `describe` to indicate that this is an acceptance test  
c.) `rspec​​ ​​spec/features/angular_test_app_spec.rb​` for testing page `/angular_test`  
d.) refer to `angular_test_app_spec.rb` login simulated, then angular_test page was checked and its DOM for exact content  
17. Test Angular code => `bundle exec rake teaspoon`; PhantomJS was installed as a gem  
