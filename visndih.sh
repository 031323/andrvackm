opusdec tl1_1.opus tl1_1s.ulaw
sox -traw -r16k -e signed -b 8 -c1 tl1_1s.ulaw -traw -b 16 tl1_1s
cat tl1_0 tl1_1s tl1_2 > tl1_o
