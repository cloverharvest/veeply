require 'rails_helper'

feature "angular test" do

  let(:email) {"bob@example.com"}
  let(:password) {"password123"}

  before do
    User.create!(email: email,
          password: password,
          password_confirmation: password)
  end

  scenario "Our Angular Test App is Working" do
    visit "/angular_test"

    #log in
    fill_in "Email", with: "bob@example.com"
    fill_in "Password", with: "password123"

    # check that we have the right page
    expect(page).to have_content("Email")

    # test the page
    fill_in "email", with: "Bob"
    within "header h1" do
      expect(page).to have_content("Hello,Bob")
    end
  end
end
