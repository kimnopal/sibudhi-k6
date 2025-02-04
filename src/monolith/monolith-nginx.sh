#!/bin/bash

k6 run src/monolith/monolith-nginx.js --summary-export src/monolith/output/monolith-nginx.json