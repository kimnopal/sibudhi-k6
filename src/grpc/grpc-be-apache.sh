#!/bin/bash

k6 run src/grpc/grpc-be-apache.js --summary-export src/grpc/output/grpc-be-apache.json