// sign, verify, => data + secret (sign) = token; token + secret (verify) = data;
// PUBLIC: token = header.payload.signature
// sign co callback la ham async, co the set expiresins
// moi token co han song rieng, khi tao token chta ko the huy duoc
const jwt = require('jsonwebtoken');
const data = {
    _id: 10,
    username: 'didan'
};
// jwt.sign(data, '123456', {
//     expiresIn: 30
// }, (err, data) => {
//     console.log('data', data);
// })

const kq = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEwLCJ1c2VybmFtZSI6ImRpZGFuIiwiaWF0IjoxNjYzNjQ0ODQ0LCJleHAiOjE2NjM2NDQ4NzR9.KWJCFDGlzrIup6cjIf0TA-zM_M2-66ZnxeGt_vpfBXg', '123456');

console.log(kq);