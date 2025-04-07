const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/documents', require('./routes/documents'));

const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const Document = require('./models/Document');

io.on('connection', (socket) => {
  socket.on('get-document', async (docId) => {
    let document = await Document.findById(docId);
    if (!document) {
      document = await Document.create({ _id: docId, title: 'Untitled', content: '' });
    }
    socket.join(docId);
    socket.emit('load-document', document.content);

    socket.on('send-changes', delta => {
      socket.broadcast.to(docId).emit('receive-changes', delta);
    });

    socket.on('save-document', async content => {
      await Document.findByIdAndUpdate(docId, { content });
    });
  });
});

server.listen(PORT, () => console.log(`Server with WebSocket running on port ${PORT}`));
