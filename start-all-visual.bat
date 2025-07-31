@echo off
echo Iniciando o servidor backend...
cd backend_pg_tasks
start cmd /k "npm start"
cd ..

timeout /t 3 > nul

echo Iniciando Cypress no modo visual...
cd cypress_tasks_test
start cmd /k "npx cypress open"
cd ..