all:hts.js suvakworker.js
hts.js:HTS_audio.c HTS_engine.c HTS_label.c HTS_model.c HTS_sstream.c hts_engine.c HTS_gstream.c HTS_misc.c HTS_pstream.c HTS_vocoder.c pre.js
	emcc -Wcast-align -Wover-aligned -O2 HTS_audio.c HTS_engine.c HTS_label.c HTS_model.c HTS_sstream.c hts_engine.c HTS_gstream.c HTS_misc.c HTS_pstream.c HTS_vocoder.c -s EXPORTED_FUNCTIONS='["_main","_hts_armbh","_hts_vacnm","_hts_vrnanvh","_hts_anukalh","_hts_vrnsnkya","_pro_vacnarmbh","_pro_sbdh"]' -s EXPORTED_RUNTIME_METHODS='["ccall"]' -o hts.js -s SAFE_HEAP=1 -s WARN_UNALIGNED=1 --post-js pre.js --preload-file assets -s ASSERTIONS=1 -s ALLOW_MEMORY_GROWTH=1 -s ALLOW_TABLE_GROWTH=1
	
suvakworker.js:HTS_audio.c HTS_engine.c HTS_label.c HTS_model.c HTS_sstream.c hts_engine.c HTS_gstream.c HTS_misc.c HTS_pstream.c HTS_vocoder.c pre.js worker.js
	cat pre.js worker.js > suvakpost.js && \
	emcc -Wcast-align -Wover-aligned -O2 HTS_audio.c HTS_engine.c HTS_label.c HTS_model.c HTS_sstream.c hts_engine.c HTS_gstream.c HTS_misc.c HTS_pstream.c HTS_vocoder.c -s EXPORTED_FUNCTIONS='["_main","_hts_armbh","_hts_vacnm","_hts_vrnanvh","_hts_anukalh","_hts_vrnsnkya"]' -s EXPORTED_RUNTIME_METHODS='["ccall"]' -o suvakworker.js -s SAFE_HEAP=1 -s WARN_UNALIGNED=1 --post-js suvakpost.js --preload-file assets -s ASSERTIONS=1 -s ALLOW_MEMORY_GROWTH=1 -s ALLOW_TABLE_GROWTH=1
