import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';

import path from 'path';

const app: express.Express = express();

//CORSの許可
app.use((req, res, next) => {
  res.header('Access-Control-Allow-origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

let clientPath = __dirname.replace('/server', '');
app.use('/', express.static(clientPath));

//app.get('/*', function(req, res) {
//  res.sendFile(path.join(clientPath, 'index.html'));
//  //  res.sendFile('dist/index.html');
//});

//body-parserに基づいた着信リクエストの解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//GetとPostのルーティング
const router: express.Router = express.Router();
router.get('/api/getTest', (req: express.Request, res: express.Response) => {
  res.send(req.query);
});

// POST
router.post('/api/post', (req: express.Request, res: express.Response) => {
  //body
  console.log(req.body);

  console.log(req.body.hoge);


  res.send('Received POST Data!');
});

// GET
router.get(
  '/api/test/',
  async (req: express.Request, res: express.Response) => {
    try {

      console.log('---------- req start ----------');

      //baseUrl
      console.dir('baseUrl:' + req.baseUrl);
      //body
      console.dir('body:' + req.body);
      //method
      console.dir('method:' + req.method);
      //params
      console.dir('prams:' + req.params);
      //protocol
      console.dir('protocol:' + req.protocol);

      //GETパラメータ
      console.dir('[param]hoge :' + req.query.hoge);

      console.log('---------- req end   ----------');

      res.send(
        new (class {
          test: string = 'test';
        })(),
      );
    } catch (e) {
      throw e;
    } finally {
      //
    }
  },
);

//router.get('*', function(req, res) {
//  res.sendFile(path.join(clientPath, 'index.html'));
//});

// multer middleware
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);    //オリジナルのファイルと同一名
  }
});

//const upload = multer({ dest: 'uploads/' })   //アップロードファイルの保存先
const upload = multer({ storage: storage });   //アップロードファイルの保存先

router.post('/foo', upload.array('files', 3), (req, res) => {    //input要素の名前と最大アップロード数
  console.log('--- post() /foo called ---')
  console.log('--- req.body --')
  console.log(req.body)
  console.log('--- req.files ---')
  console.log(req.files)
  res.send('Done')
});

app.use(router);

//3000番ポートでAPIサーバ起動
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
