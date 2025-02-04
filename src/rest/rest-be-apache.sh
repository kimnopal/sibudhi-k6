#!/bin/bash

k6 run src/rest/rest-be-apache.js --summary-export src/rest/output/rest-be-apache.json