#!/bin/bash

k6 run src/rest/rest-be-swoole.js --summary-export src/rest/output/rest-be-swoole.json