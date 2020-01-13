echo "\033[32mMagicMirror installation successful!"
cd modules
git clone https://github.com/jclarke0000/MMM-MyScoreboard
git clone https://github.com/Jopyth/MMM-Remote-Control.git
git clone https://github.com/KirAsh4/calendar_monthly
cd MMM-MyScoreboard && npm install
cd ..
cd MMM-Remote-Control && npm install
exit 0
