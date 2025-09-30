docker build . --platform linux/amd64 -t gcr.io/nr-software/yunuen
docker push gcr.io/nr-software/yunuen
gcloud auth configure-docker
gcloud run deploy yunuen001 --image gcr.io/nr-software/yunuen --region us-east1 --allow-unauthenticated 