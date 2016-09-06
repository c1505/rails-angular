Details:

Skeleton application with rails backend, angular frontend, and devise for authentication.

Angular code and templates reside in 

* Rubygems added
gem 'angular-rails-templates'

gem 'responders'

gem 'angular_rails_csrf', '1.0.3' (newer versions are broken with this setup as of September 2016)

gem 'devise'

gem 'faker'

* Frontend dependencies(managed by bower)
    "angular": "^1.5.8",
    "angular-ui-router": "^0.3.1",
    "bootstrap": "^3.3.7",
    "AngularDevise": "angular-devise#^1.3.0"

Setup:
Run these commands in the terminal:

bundle install
bower install
rails s 

* Ruby version 2.2.1

* Rails version 4.2.6


Keep updated with the best practices and most recent stable versions of Rails, Angular, and assocated gems.

TODO
-Add frontend testing
-Add rspec?
-verify deployment on heroku