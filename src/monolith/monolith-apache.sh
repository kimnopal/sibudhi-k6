#!/bin/bash

k6 run src/monolith/monolith-apache.js --summary-export src/monolith/output/monolith-apache.json