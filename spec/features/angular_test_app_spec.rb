require 'rails_helper'

feature "angular test" do

  let(:email)    {"bob@example.com"}
  let(:password) {"password123"}

  before do
    User.create!(email: email,
                 password: password,
                 password_confirmation: password)
  end

  scenario "Our Angular Test App is Working" do
    visit "/angular_test"

    #go to user login page
    fill_in "Email", with: "bob@example.com"
    fill_in "Password", with: "password123"
    click_button "Log in"

    # check that we have the right page which is app/views/angular_test/index.html.erb
    # using have_content matcher checks for the text "Name" within a given DOM element
    expect(page).to have_content("Name")

    # test the page
    fill_in "name", with: "Bob"
    within "header h1" do
      expect(page).to have_content("Hello, Bob")
    end
  end
end
