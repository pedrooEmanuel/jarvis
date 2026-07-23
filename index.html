
Pedr0o _ <pedrooemanuelddd190@gmail.com>
16:13 (há 6 minutos)
para Emanuel

<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>JARVIS DIGITAL VOICE CORE</title>
<style>
body{background:#050914;color:#00d4ff;font-family:Orbitron, sans-serif;text-align:center;margin:0;padding:20px}
h1{text-shadow:0 0 10px #00d4ff;font-size:48px;margin:0}
#radar{width:300px;height:300px;border:3px solid #00d4ff;border-radius:50%;margin:40px auto;display:flex;align-items:center;justify-content:center;font-size:60px;box-shadow:0 0 30px #00d4ff;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{box-shadow:0 0 30px #00d4ff}50%{box-shadow:0 0 60px #00d4ff}}
button{background:#00d4ff;border:none;padding:15px 40px;font-size:18px;border-radius:50px;cursor:pointer;color:#000;font-weight:bold}
#texto{background:#0a0a0f;padding:20px;border-radius:10px;margin:20px auto;max-width:600px;border:1px solid #00d4ff;min-height:50px}
</style>
</head>
<body>
<h1>JARVIS</h1>
<p>DIGITAL VOICE CORE V1.0</p>
<div id="radar">🎤</div>
<button onclick="falar()">TOQUE PARA FALAR</button>
<div id="texto">Você: Aguardando comando de voz...</div>
<audio id="player"></audio>

<script>
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';

function falar() {
  recognition.start();
  document.getElementById('texto').innerText = "Ouvindo...";
}

recognition.onresult = async (e) => {
  const texto = e.results[0][0].transcript;
  document.getElementById('texto').innerText = "Você: " + texto;
  
  const res = await fetch('/api/jarvis', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({text: texto})
  });
  const blob = await res.blob();
  document.getElementById('player').src = URL.createObjectURL(blob);
  document.getElementById('player').play();
}
</script>
</body>
</html>
