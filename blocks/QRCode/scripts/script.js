//QRCode for SparkAR by @Juanmv94

const Materials = require('Materials');
const Patches = require('Patches');
const qr = require('./qr');

Materials.findFirst("material0").then(mat=>{
	function updateQR(str) {
		str=str.substr(0,32).padEnd(8);
		const errcorrlev= str.length>26 ? qr.ErrorCorrectLevel.L : str.length>20 ? qr.ErrorCorrectLevel.M : str.length>14 ? qr.ErrorCorrectLevel.Q : qr.ErrorCorrectLevel.H;
		const qrdata = qr(str,{errorCorrectLevel: errcorrlev}).modules;
		for (let y=0 ; y<25 ; y++) {
			var v=0;
			for (let x=0 ; x<24 ; x++) v+=qrdata[y][x]<<x;
			if (qrdata[y][24]) v=-v;
			mat.setParameter("r"+y,v);
		}
	}
	Patches.outputs.getString("text").then(text=>{
		updateQR(text.pinLastValue());
		text.monitor().subscribe(e=>updateQR(e.newValue));
	});
});

