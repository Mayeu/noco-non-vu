# PATH vars
ADDON_PATH=/opt/addon-sdk
FF_PATH=firefox
CHR_PATH=chrome
COMMON_JS=js

# Exported vars
export OUTPUT_PATH=$(CURDIR)

.PHONY: clean firefox chrome

all: firefox chrome

firefox:
	+$(MAKE) -C $(FF_PATH)

chrome:
	chromium --pack-extension=chrome --pack-extension-key=chrome.pem
	mv chrome.crx noco-non-vu.crx

clean:
	rm noco-non-vu.{xpi,crx}
