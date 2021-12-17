// import logo from './logo.svg';
import Form from './component/form/Form.component';
import './App.css';
// import { log } from 'console';

// const path = require('path');
// const fs = require('fs');

// const { google } = require('googleapis');
// const client_ID = '1079310813213-ru594vds4g6dg295jeht89c5mhbe002r.apps.googleusercontent.com';
// const client_secret = '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';
// const redirect_uri = 'https://developers.google.com/oauthplayground';
// const refresh_token = '1//04yYQwilTqtHXCgYIARAAGAQSNgF-L9IritmP9Q_RNV8AOiIEcI8J1Hdm1GgeI-YPRZpXUkV3m5yhfPyOcIbkCUxGyu5GZQYIOA';

// const oauth2Client = new google.auth.OAuth2(
//   client_ID,
//   client_secret,
//   redirect_uri
// );

// oauth2Client.setCredentials({refresh_token:refresh_token});

// const drive = google.drive({
//   version: 'v3',
//   auth: oauth2Client
// })
// const filePath = path.join(__dirname, 'test.jpeg')

function App() {
//   async function uploadFile() {
//     try {
//       const res = await drive.files.create({
//         requestBody: {
//           name: 'test.jpeg',
//           mimeType: 'image/jpeg'
//         },
//         media: {
//           mimeType: 'image/jpeg',
//           body: fs.createReadStream(filePath)
//         }
//       })
//       console.log(res.data)
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   uploadFile();
  return (
    <div className="App">
    <Form />
    </div>
  );
}

export default App;
