# NerdNook
NerdNook is a full-stack web application built using React and Ruby on Rails. It is a social media platform for discussing all things related to nerd culture. Users can create an account, customize their profile, and share their thoughts on various topics by creating posts and commenting on other users' posts. Users can also like posts and follow other users to stay up-to-date on their latest activity.

# Getting Started
To get started with NerdNook, you'll need to have Node.js, Yarn, Ruby, and Rails installed on your system. You can then clone this repository and install the required dependencies by running the following commands:
```
git clone https://github.com/sebas5950/nerdnook-project.git
cd nerdnook-project
bundle install
npm install
```
Once you have installed the dependencies, you can start the application by running the following commands in separate terminal windows:
```
rails s
npm start
```
This will start a local development server at http://localhost:3000/.
# Screenshots
### Home Page(`/` route)
Main screen where the you are greeted with a short message and a link that sends you to sign-up page:

![Home-Page](https://user-images.githubusercontent.com/68822252/232612423-72332ff4-a147-4f24-b481-f18288533532.PNG)
### Posts Page(`/posts` route)
A collaborative page where users can share, post and comment on other users reviews along with search capablities:

![Posts-1](https://user-images.githubusercontent.com/68822252/232612777-3dd79607-a757-4282-90d4-b8f578a153b1.PNG)
### Profile Page(`/user` route)
Profile page where the user can update personal information and also see favorited posts:

![Profile-favorites](https://user-images.githubusercontent.com/68822252/232612425-15587fe2-2e1e-43e6-b6d6-841520b1baf0.PNG)
### Sign-up Page(`/signup` route)
New users are able to sign-up and allowed to not just look at posts but create them:

![Sign-up](https://user-images.githubusercontent.com/68822252/232612427-70c14a3c-904e-4b73-a186-768f761bc975.PNG)


# Features
NerdNook is built using the following technologies:
### Front-end
* React - front-end JavaScript library for building user interfaces
* React Router - routing library for React
* Async - HTTP client for making API requests
* Material.UI - front-end framework for styling and layout
###Back-End
* Ruby on Rails - web application framework for Ruby
* PostgreSQL - open source relational database
* Active Record - Object-Relational Mapping (ORM) for interacting with the database
## Contributing
If you would like to contribute to NerdNook, feel free to submit a pull request with your changes. Please make sure to follow the existing code style and include tests for any new features or bug fixes.
