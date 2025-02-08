#!/bin/bash

k6 run src/graphql/graphql-be-swoole.js --summary-export src/graphql/output/graphql-be-swoole.json