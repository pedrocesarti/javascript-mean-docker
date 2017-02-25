build:
	docker build -t loadbalancer .
run:
	docker run -d -p 6000:70 -p 5000:80 --link codersb:codersb --link codersa:codersa loadbalancer
