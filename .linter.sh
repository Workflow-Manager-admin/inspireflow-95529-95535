#!/bin/bash
cd /home/kavia/workspace/code-generation/inspireflow-95529-95535/main_container_for_inspireflow
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

