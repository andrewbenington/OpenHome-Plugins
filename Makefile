
venv: python/requirements.txt python/dev-requirements.txt ## create/recreate venv
ifneq (,$(wildcard venv))
	@source ./venv/bin/activate && pip freeze > venv_before.txt
	@echo "recreating python virtual environment..."
	@rm -r venv
else
	@echo "creating python virtual environment..."
	@touch venv_before.txt
endif
	@python3 -m venv ./venv
	@echo "installing dependencies..."
	@source ./venv/bin/activate && python3 -m pip install --quiet -Ur python/requirements.txt && python3 -m pip install --quiet -Ur python/dev-requirements.txt
	@source ./venv/bin/activate && pip freeze > venv_after.txt
	@diff --color=always venv_before.txt venv_after.txt || true
	@touch venv
	@rm venv_before.txt venv_after.txt
	@echo "venv is ready"
