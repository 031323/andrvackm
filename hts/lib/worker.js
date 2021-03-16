
class SuvakProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  	var hts_prtikrm=function()
		{
			Module.ccall('hts_armbh',null,['string'],['assets/suvak.htsvoice']);
			this.port.postMessage('arbdh');
		}
		if(hts==='1')
		{
			hts_prtikrm()
		}
  }

  process(inputs, outputs, parameters) {
    // audio processing code here.
  }
}

registerProcessor('suvak-processor', SuvakProcessor);
