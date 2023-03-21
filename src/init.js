import "./db"; // using mongoose
import "./models/Video"; // using for my videoSchema
import app from "./server"; // using my app

const PORT = 4000; // My port

const handleListening = () =>
  console.log(`✅ Server Listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening); //지정된 호스트 or 포트에서 연결을 바인드하고 listen 한다.
