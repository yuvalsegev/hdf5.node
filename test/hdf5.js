
// import module
var hdf5 = require('../build/Release/hdf5');

console.log(hdf5);

// instantiate h5file
var h5file = new hdf5.File('/home/ryan/data/MillionSongSubset/data/A/A/A/TRAAAAW128F429D538.h5');

console.log(h5file);

// close the file
h5file.close();