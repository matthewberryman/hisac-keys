const SWIFT = 'oHSm3Vhwjz0L+LyMssgQNEwBrwxVS8dD/AmLQw165LaFYpdidXDnllSWGetFs5hAGkoDtimW36hy7tgbWmDGsJ5OZ9GIHR+AbxSfdFPOd7EWo6gAjU7f9WrLDzKghXUcRhN0EXj4MKgdCh9P8M/3pq5/o13eYrXqoTwNrV5BG88=';

const ciphertext = Buffer.from(SWIFT, 'base64').toString()

const crypto = require('crypto'),
    algorithm = 'aes-128-ecb'; // ECB hint from ls


const decrypt = (text,password) => {
  var decipher = crypto.createDecipheriv(algorithm,password,null); // ECB has no iv so set to null
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
console.log(ciphertext.length); // should be multiple of 16
 
console.log(decrypt(ciphertext,'Fe2O3')); // key should also be 16 bytes - currently generates error