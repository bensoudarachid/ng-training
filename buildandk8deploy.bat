ng build --prod
minikube docker-env | Invoke-Expression
docker build -t royasoftware/trainingngfrontend:v1.0.0 .
kubectl delete deployment,pod,service,serviceaccount schoolngfe
kubectl create -f D:\RP\Tests\SpringBoot_Training\k8\schoolngfe.yaml
