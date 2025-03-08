#!/bin/bash

k6 run src/grpc/grpc-be-franken.js --summary-export src/grpc/output/grpc-be-franken.json