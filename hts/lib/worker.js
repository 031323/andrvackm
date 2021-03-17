Module.ccall('hts_armbh',null,['string'],['assets/suvak.htsvoice']);
class SuvakProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.port.onmessage = (event) => {
      // Handling data from the node.
      console.log(event.data);
      vakstapnm(event.data);
			Module.ccall('pro_vacnarmbh',null,['string','number'],['assets/0.lab',fp])
    };
  }

  process(inputs, outputs, parameters) {
  	const output=outputs[0][0];
  	for (let i = 0; i < output.length; ++i)
  	{
  		let agtih=pro_sbdh()
      if(agtih>2.0)
      {
      	for(;i<output.length;i++)
	 		     output[i]=0.0;
 		    this.port.postMessage(null)
 		    return false;
      }
      else output[i]=agtih
  	}
    // audio processing code here.
    return true;
  }
}

registerProcessor('suvak-processor', SuvakProcessor);
