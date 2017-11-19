Kensal Rise Backgammon
-

This application is developed using Typescript for both the React frontend site and the AWS Lambda backend code. Deployed using AWS CodeStar.

It took me a while to figure out how to get everything working nicely using SAM local for development and to get the build & deployment working with AWS CodeStar. There are a few loose ends / things that could be improved, but this project encapsulates my learning and might be of use to others with the same goal!

SAM local is hugely useful: https://github.com/awslabs/aws-sam-local.

Note that the build files are checked in because AWS CodeStar will deploy them from Github. There is probably a way to get CodeStar to run the build too, but I didn't look into it (yet).
 
```
Project structure
|- build // site static files (generated)
|- build-api // lambdas (generated)
|- events // events for testing with SAM
|- public // source for the site static assets
|- src
   |- index.ts // React entry point
   |- common // shared code between frontend and backend (yay!)
   |- lambda // lambda sources
      |- index.ts // lambdas entry point
   |- site // React app
|- buildspec.yml (see below)
|- debug-vars.yml (SAM local environment overrides)
|- package.json
|- README.md
|- tsconfig.json
|- tsconfig.test.json
|- tslint.json (I don't follow all these!)
|- webpack.config.js (webpack config for the lambdas)
```

The app uses DynamoDB and SES. You need to create a policy for both of these and attach the CodeStar generated Lambda role to the policy.

It took me a little while to realise how CodeStar site serving works and that the CodeStar buildspec.yml is processing the static files to replace server-relative URL references with absolute references to your S3 bucket. There is a GET lambda for the site root `/` which simply reads and serves the site HTML directly. I had to modify `buildspec.yml` to work with the output from create-react-app. All other static file links are fixed up to point at your S3 public bucket -- they're not served from your site domain. I added another lambda to serve `manifest.json` because it wasn't working for me from S3.

I added some helper scripts to `package.json`...

`npm run start-api` will start SAM local on port 3000. Make sure you've done `docker-machine-start` and `docker-machine env`.

`npm run start` will start React app on port 3001 and proxy requests for `/api` to port 3000.

`npm run watch-api` will auto-recompile the lambdas from Typescript as you work.

`npm run build` will run the build, including React app and lambdas ready to commit.

It's important you run the build before committing as it's these files that CodeStar will deploy.

It's an annoyance but the build will generate Javascript and CSS files with a hash, so Git will treat this as a delete plus an add, and CodeStar will accumulate these in your S3 bucket. I suppress the sourcemaps to keep the size down.

Note that when running SAM local the app hits the production DynamoDB table - I'll probably need to fix this at some point soon.

I removed the call to registerServiceWorker.ts. No particular reason.