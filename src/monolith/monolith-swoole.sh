#!/bin/bash

k6 run src/monolith/monolith-swoole.js --summary-export src/monolith/output/monolith-swoole.json