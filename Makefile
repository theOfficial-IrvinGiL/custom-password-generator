# start:
#		ng serve --port 1234
start:
		docker rmi -f custom-password-app:1.0
		docker build -t custom-password-app:1.0 .
		docker run -p 4200:4200 custom-password-app:1.0

install_dependencies:
		npm install

deploy_project:
		ng build --prod
