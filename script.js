const byteSize = (str) => {
  // write your code here
	var blob = new Blob([str], { type: 'text/plain;charset=utf-8' });

  // Get the size of the Blob (in bytes)
  var sizeInBytes = blob.size;

  return sizeInBytes;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));

