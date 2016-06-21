cur-dir   := $(shell pwd)
build:
	docker build -t app-node .
run_alone:
	docker run --name codersa -p 5000:5000 -v $(cur-dir)/app:/app -d app-node
run_one:
	docker run --name codersa -v $(cur-dir)/app:/app -d app-node
run_two:
	docker run --name codersb -v $(cur-dir)/app:/app -d app-node
run_both:
	docker run --name codersa -h codersa -v $(cur-dir)/app:/app -d app-node
	docker run --name codersb -h codersb -v $(cur-dir)/app:/app -d app-node
remove:
	docker rm -f `docker ps -a -q`
