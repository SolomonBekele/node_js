const fs = require('fs');

const readableStream = fs.createReadStream("./text2.txt", { encoding: 'utf-8' });
const writableStream = fs.createWriteStream("./stream.txt");

// readableStream.on("data", (chunks) => {
//     console.log(chunks);
//     writableStream.write(chunks);
// });


// ******another method

readableStream.pipe(writableStream)
