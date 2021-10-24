Tiny sample demonstrating Google Cloud Functions with TypeScript.

## Deploying

Before deploying, need to authorize with `gcloud` and select the project:

```sh
gcloud auth login
gcloud config set project PROJECTNAME
```

Then you can deploy with:

```sh
npm run deploy
```
