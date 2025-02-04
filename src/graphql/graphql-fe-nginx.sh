#!/bin/bash

k6 run src/graphql/graphql-fe-nginx.js --summary-export src/graphql/output/graphql-fe-nginx.json