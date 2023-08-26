# start:
#		ng serve --port 1234
start:
		# remove existing images
		docker rmi -f custom-password-app:1.0
		# building docker image
		docker build -t custom-password-app:1.0 .
		# mounting /usr/src/app/node_modules forces Docker to use its own copy of node_modules instead of the host's copy.
		docker run \
			-v $(PWD):/app/ \
			-v /app/node_modules \
			-p 4200:4200 custom-password-app:1.0

install_dependencies:
		npm install

deploy_project:
		ng build --prod
