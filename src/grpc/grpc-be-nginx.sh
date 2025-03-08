#!/bin/bash

k6 run src/grpc/grpc-be-nginx.js --summary-export src/grpc/output/grpc-be-nginx.json