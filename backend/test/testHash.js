const bcrypt = require('bcrypt');

async function testHashPassword() {
  const password = 'student123';
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('Original Password:', password);
  console.log('Hashed Password:', hashedPassword);
}

testHashPassword();