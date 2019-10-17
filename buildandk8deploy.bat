rem minikube docker-env|Invoke-Expression
minikube docker-env
rem @FOR /f "tokens=*" %i IN ('minikube docker-env') DO @%i
call ng build --prod
call docker build -t royasoftware/trainingngfrontend:v1.0.0 .
call kubectl delete deployment,pod,service,serviceaccount schoolngfe
call kubectl apply -f D:\RP\Tests\SpringBoot_Training\k8\schoolngfe.yaml

