hts.js:HTS_audio.c HTS_engine.c HTS_label.c HTS_model.c HTS_sstream.c hts_engine.c HTS_gstream.c HTS_misc.c HTS_pstream.c HTS_vocoder.c
	emcc -Wcast-align -Wover-aligned -O2 HTS_audio.c HTS_engine.c HTS_label.c HTS_model.c HTS_sstream.c hts_engine.c HTS_gstream.c HTS_misc.c HTS_pstream.c HTS_vocoder.c -s EXPORTED_FUNCTIONS='["_main"]' -s EXPORTED_RUNTIME_METHODS='["ccall"]' -o hts.js -s SAFE_HEAP=1 -s WARN_UNALIGNED=1
	
