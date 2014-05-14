OUTPUT=$(ROOT_PATH)/noco-non-vu.crx

.PHONY: common clean

all: $(OUTPUT)

common: chrome/js/$(NOCO_JS)

chrome/js/$(NOCO_JS):
	cp $(COMMON_PATH)/$(NOCO_JS) chrome/js/$(NOCO_JS)

$(OUTPUT): common
	chromium --pack-extension=chrome --pack-extension-key=chrome.pem
	mv chrome.crx noco-non-vu.crx

clean:
	rm chrome/js/$(NOCO_JS)
	rm $(OUTPUT)
