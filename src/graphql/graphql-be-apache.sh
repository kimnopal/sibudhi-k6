#!/bin/bash

k6 run src/graphql/graphql-be-apache.js --summary-export src/graphql/output/graphql-be-apache.json