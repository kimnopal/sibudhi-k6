#!/bin/bash

k6 run src/graphql/graphql-be-nginx.js --summary-export src/graphql/output/graphql-be-nginx.json