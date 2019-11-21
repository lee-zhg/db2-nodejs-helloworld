//------------------------------------------------------------------------------
// Copyright 2016 IBM Corp. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//------------------------------------------------------------------------------

var ibmdb = require('ibm_db');
 
ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-03.services.dal.bluemix.net;UID=hhl74579;PWD=kjdk4gh29h3kzp+f;PORT=50000;PROTOCOL=TCPIP", function (err,conn) {
  if (err) return console.log(err);
  
  conn.query('SELECT FIRST_NAME, LAST_NAME, EMAIL, WORK_PHONE from HHL74579.employee FETCH FIRST 10 ROWS ONLY', function (err, data) {
    if (err) console.log(err);
    else console.log(data);
 
    conn.close(function () {
      console.log('done');
    });
  });
});

