/**
 * Get all databases
 */

 const { CloudantV1 } = require("@ibm-cloud/cloudant");
 const { IamAuthenticator } = require("ibm-cloud-sdk-core");
 
 function main(params) {
   const authenticator = new IamAuthenticator({ apikey: "u8v-rk2sni64qWz9lvYJLcbSw6NqgS27ijwCR4oVHhXu" });
   const cloudant = CloudantV1.newInstance({
     authenticator: authenticator,
   });
   cloudant.setServiceUrl("https://e5c1f382-d6e3-4c53-b67f-a2e45ce95497-bluemix.cloudantnosqldb.appdomain.cloud/");
 
   let dbList = getDbs(cloudant);
   return { dbs: dbList };
 }
 
 function getDbs(cloudant) {
   cloudant
     .getAllDbs()
     .then((body) => {
       body.forEach((db) => {
         dbList.push(db);
       });
     })
     .catch((err) => {
       console.log(err);
     });
 }