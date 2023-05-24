const fs =require("fs/promises");
const express =require("express");
const cors =require("cors");
const _ =require("lodash");
const bodyParser = require('body-parser');

const {v4: uuid} = require("uuid");

const app = express();
app.use(express.json());

app.post("/notification",async (req,res)=> {
    const { title, body, deviceToken } = req.body;
    const data=req.body;

    // Set the request headers
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'key=' + serverKey
};
// Set the FCM server key and endpoint URL
const serverKey = 'AAAAYrin3Po:APA91bHDMf5pi74siIdctMCF-fqeCwm_Knqvq_XQqopWnr_rY6C9xe6eNcZHY_8rXoy88m38UCT5P_2DIsASjMi-TlwogpaGgrT--Xguuwzn3DU5cd3o1PYURijBkj7J-1HOCGMdfn3L';
const url = 'https://fcm.googleapis.com/fcm/send';
     // Validate input (you can add your own validation logic here)
  if (!title || !body || !deviceToken) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const response = await axios.post(url, req.body, { headers: headers });
    console.log('Response:', response.data);
} catch (error) {
    console.error('Error:', error);
}



});
app.listen(3000, () => console.log("API server is running"));