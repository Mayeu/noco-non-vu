# PATH vars
ADDON_PATH=/opt/addon-sdk
FF_PATH=firefox
CHR_PATH=chrome
COMMON_JS=js

# Exported vars
export ROOT_PATH=$(CURDIR)
export COMMON_PATH=$(ROOT_PATH)/common
export NOCO_JS=noco-non-vu.js

.PHONY: clean firefox chrome

all: firefox chrome

firefox:
	+$(MAKE) -C $(FF_PATH)

chrome:
	+$(MAKE) -f chrome.mk

clean:
	$(MAKE) -C $(FF_PATH) clean
	$(MAKE) -f chrome.mk clean
