#!/bin/bash

k6 run src/grpc/grpc-fe-nginx.js --summary-export src/grpc/output/grpc-fe-nginx.json