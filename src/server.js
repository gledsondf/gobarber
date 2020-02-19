import app from './app';
// número máximo de chamadas import para escutar
app.setMaxListeners(20);
app.listen(2000);
