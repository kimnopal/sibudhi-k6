#!/bin/bash

k6 run src/grpc/grpc-be-swoole.js --summary-export src/grpc/output/grpc-be-swoole.json