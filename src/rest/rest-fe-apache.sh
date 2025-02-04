#!/bin/bash

k6 run src/rest/rest-fe-apache.js --summary-export src/rest/output/rest-fe-apache.json