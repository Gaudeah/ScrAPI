FROM mongo:latest
MAINTAINER Nicolas Law Yim Wan (lawyim_n@etna-alternance.net)
RUN mkdir /mongo
COPY . /mongo
WORKDIR /mongo
RUN systemctl mongod status
RUN mongoimport --db scrapi --collection raw_datas --file scrapi.json