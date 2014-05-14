OUTPUT=$(ROOT_PATH)/noco-non-vu.xpi

.PHONY: common clean

all: $(OUTPUT)

common: data/$(NOCO_JS)

# Get the common js file
data/$(NOCO_JS):
	cp $(COMMON_PATH)/$(NOCO_JS) data/$(NOCO_JS)

# build the xpi
$(OUTPUT): common
	cfx xpi  --output-file=$(OUTPUT)

# Clean
clean:
	rm data/$(NOCO_JS)
	rm $(OUTPUT)
