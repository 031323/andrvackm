all: vackm
lib1web.o:../MBROLA/LibOneChannel/lib1.c
	emcc -DLITTLE_ENDIAN -O2 -I../MBROLA/Parser -I../MBROLA/Standalone -I../MBROLA/Misc -I../MBROLA/Engine -I../MBROLA/Database -DROMDATABASE_STORE -DROMDATABASE_INIT -DSIGNAL -I../MBROLA/LibOneChannel/ ../MBROLA/LibOneChannel/lib1.c -o lib1web.o
web:वाचकम्.cpp lib1web.o
	em++ -DLITTLE_ENDIAN -O2 -I../MBROLA/Parser -I../MBROLA/Standalone -I../MBROLA/Misc -I../MBROLA/Engine -I../MBROLA/Database -DROMDATABASE_STORE -DROMDATABASE_INIT -DSIGNAL -I../MBROLA/LibOneChannel/ lib1web.o वाचकम्.cpp -o vackm.js  --preload-file tl1 -s EXPORTED_FUNCTIONS='["_शब्दनम्","_main"]' -s EXTRA_EXPORTED_RUNTIME_METHODS=["ccall"]
vackm:वाचकम्.cpp
	$(CXX) वाचकम्.cpp -o vackm
suvackm:suvackm.cpp
	$(CXX) suvackm.cpp -o suvackm
vjs:suvackm.cpp
	em++ -O2 suvackm.cpp -s EXPORTED_FUNCTIONS='["_anulekh","_main"]' -s EXPORTED_RUNTIME_METHODS='["ccall"]' -o suvackm.js
1:1.cpp
	$(CXX) 1.cpp -g -DLITTLE_ENDIAN -O6 -I../MBROLA/Parser -I../MBROLA/Standalone -I../MBROLA/Misc -I../MBROLA/Engine -I../MBROLA/Database -Wall -DROMDATABASE_STORE -DROMDATABASE_INIT -DSIGNAL -I../MBROLA/LibOneChannel/ ../MBROLA/Bin/LibOneChannel/lib1.o -o 1
