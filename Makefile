# non-local paths (may need to change for each system)
inkscape = /Applications/Inkscape.app/Contents/Resources/bin/inkscape

sizes = 512 128 48 38 32 19 16
images = $(patsubst %, images/library_colored%.png, $(sizes))

all : $(images)

.PHONY : all clean

images/library_colored%.png : images/library_colored.svg
	$(inkscape) -z -e $@ --export-width=$* --export-height=$*  $<

clean :
	rm -f $(images)
