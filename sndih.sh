l0=30000
l2=7156
tail -c +$((l0+1)) tl1 | head -c -$l2 > tl1_1
head -c $l0 tl1 > tl1_0
tail -c $l2 tl1 > tl1_2
sox -traw -r16k -e signed -b 16 -c1 tl1_1 -traw -b 8 tl1_1.ulaw
opusenc --bitrate 9 --framesize 60 --raw --raw-bits 8 --raw-rate 16000 --raw-chan 1 tl1_1.ulaw tl1_1.opus
