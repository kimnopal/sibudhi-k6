#!/bin/bash

k6 run src/rest/rest-be-nginx.js --summary-export src/rest/output/rest-be-nginx.json