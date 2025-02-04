#!/bin/bash

k6 run src/rest/rest-fe-nginx.js --summary-export src/rest/output/rest-fe-nginx.json