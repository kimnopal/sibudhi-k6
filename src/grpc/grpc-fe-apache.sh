#!/bin/bash

k6 run src/grpc/grpc-fe-apache.js --summary-export src/grpc/output/grpc-fe-apache.json