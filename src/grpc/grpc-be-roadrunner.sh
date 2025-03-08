#!/bin/bash

k6 run src/grpc/grpc-be-roadrunner.js --summary-export src/grpc/output/grpc-be-roadrunner.json