# kakse.li
This repository is the source code for my personal website running at https://kakse.li.

## Tech
- React (https://reactjs.org/)
- Material-Ui (https://material-ui.com/)
- GitHub Actions for automatic deployment to Kapsi (https://www.kapsi.fi/) servers via SSH

## Running in local env
    npm install
    npm start

## GitHub Actions
GitHub Actions are used for automatic deployment of the site. It will build the site and then
deploy it to server using SSH (https://github.com/marketplace/actions/remote-ssh-commands).

Deployment action is only run, when the tag "latest" is used with commit.