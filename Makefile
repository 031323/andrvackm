all: vackm vackm2
vackm:वाचकम्.cpp ../MBROLA/Bin/LibOneChannel/lib1.o
	$(CXX) वाचकम्.cpp -o vackm
#	$(CXX) वाचकम्.cpp -I../MBROLA/LibOneChannel/onechannel.h ../MBROLA/Bin/LibOneChannel/lib1.o -o vackm
vackm2:वाचकम्2.cpp
	$(CXX) वाचकम्2.cpp -o vackm2
