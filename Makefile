docker-ip   := $(shell dlite ip)
test_local:
	ab -n 10000 -c 10 http://localhost:5000/
test_docker:
	ab -n 10000 -c 10 http://$(docker-ip):5000/

