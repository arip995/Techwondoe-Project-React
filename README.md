### Checklist(All the below requirements are done)
1. Each section of the homepage must be a separate react component.
2. Must develop using Typescript 
3. Must use tailwindcss
4. No hardcoding of text in react app. All the content (text and images) must be coming from a Headless CMS through its API 
5. Enable theming with just 2 colors i.e primary and secondary and font family
6. Create Typography components for H1, H2, and Paragraph
7. Use Storybook for 3 UI components 
8. Button - Primary and secondary
9. Typography - H1, H2, Paragraph
10. Sub-component of the Why Choose us section with icon, title and paragraph.
11. Prettier and Linter configuration
12. Host the page on Netlify, Vercel or another provider.
13. Readme file on how to deploy and run the service.
### Additional 
1. Implemented caching
2. Used api and sanitize service for maintainability.
3. Used only pure components
4. Customized tailwind for media queries
5. Created custom hook for fetching api
### Link to the hosted page
https://techwondoeproject.herokuapp.com/

### Run the application in local
1. Clone the repository.
2. open the terminal inside the directory.
3. Run command `npm install` to install all the dependencies.
5. Install prettier and eslint in the code editor
4. Run `yarn storybook` to  run storybook in the development mode.
Open [http://localhost:6006/] to view it in the browser.
5. Run `npm start` to  run the app in the development mode.
Open [http://localhost:3000] to view it in the browser.

### Host with heroku
1. Create an account on heroku 
2. Create a new project in heroku 
3. Install and login with heroku CLI 
4. Connect with heroku repository 
5. Push the changes to heroku

### Commands
1. `heroku create -a <project name>`
2. `git init`
3. `heroku git:remote -a <project name>`
4. `heroku buildpacks:set mars/create-react-app` 
5. `git commit -m "my commit" `
6. `git push heroku main`
