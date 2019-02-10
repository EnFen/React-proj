
export default (email) => {
 const validEmailExpression = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

 if(!email) return false;
 if(email.length > 254) return false;
 if(!validEmailExpression.test(String(email).toLowerCase())) return false;
  
 //Checking other parts that cannot be checked by regular expression
 const nameParts = email.split('@');  
 if(nameParts[0].length > 64) return false;

 const domainParts = nameParts[1].split(".");
 if(domainParts.some(part => part.length > 63)) return false;
  
 return true;
}