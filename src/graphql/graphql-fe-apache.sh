#!/bin/bash

k6 run src/graphql/graphql-fe-apache.js --summary-export src/graphql/output/graphql-fe-apache.json