# GitHub Profile Explorer

A React-based web application that allows users to search for GitHub profiles and view detailed profile information using the GitHub API.

## Features

* Search GitHub users
* View GitHub profile details
* Dynamic profile pages using React Router
* Display profile avatar
* Display name and username
* Display bio
* Display followers and following
* Display public repository count
* Fetch GitHub profile data using the GitHub API
* Loading state
* Error handling

## Tech Stack

* React
* JavaScript
* React Router
* GitHub REST API
* HTML
* CSS

## How It Works

1. Search for a GitHub username.
2. Select **View Profile**.
3. The username is passed through the URL.
4. React Router loads the profile page.
5. `useParams()` gets the username from the URL.
6. The GitHub API is used to fetch the user's profile information.
7. The profile information is displayed dynamically.

## Project Structure

```text
src/
├── components/
├── pages/
│   └── Profile.jsx
├── App.jsx
└── main.jsx
```

## GitHub API

This project uses the GitHub REST API to retrieve public GitHub user information.

```text
https://api.github.com/users/{username}
```

## Current Status

🚧 In development

The profile exploration functionality is currently implemented. Repository exploration and additional features will be added later.

## Future Improvements

* Display user repositories
* Repository cards
* Repository statistics
* Repository sorting and filtering
* Links to individual repositories
* Improved loading states
* Improved error messages
* Responsive design improvements

## Author

Ankit
