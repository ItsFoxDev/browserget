/* Last updated: Oct 13, 2023 */
/* Tor Browser */ var vtor='13.0';
/* Vivaldi     */ var vviv='6.2.3105.58';
/* Librewolf   */ var vliw='118.0.2-1';
/* Chromium    */ var vcrm='1197552';
/* Maxthon     */ var vmax='7.1.6.1000';

browser('r','Google Chrome','chrome','wml','https://dl.google.com/tag/s/chrome/update2/installers/ChromeSetup.exe','https://dl.google.com/chrome/mac/universal/stable/GGRO/googlechrome.dmg','https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb');
browser('r','Microsoft Edge','edge','wml','https://c2rsetup.officeapps.live.com/c2r/downloadEdge.aspx?platform=Default&source=EdgeStablePage&Channel=Stable&language=en','https://go.microsoft.com/fwlink/?linkid=2093504&platform=Mac&Consent=0&channel=Stable','https://go.microsoft.com/fwlink?linkid=2149051&brand=M102');
browser('r','Arc','arc','m','','https://releases.arc.net/release/Arc-latest.dmg');
browser('r','Firefox','firefox','wml','https://download.mozilla.org/?product=firefox-latest-ssl&os=win64','https://download.mozilla.org/?product=firefox-latest-ssl&os=osx','https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64');
browser('r','Opera','opera','wml','https://net.geo.opera.com/opera/stable/windows','https://net.geo.opera.com/opera/stable/mac','https://download.opera.com/download/get/?partner=www&opsys=Linux');
browser('r','Opera GX','operagx','wm','https://net.geo.opera.com/opera_gx/stable/windows','https://net.geo.opera.com/opera_gx/stable/mac');
browser('r','Opera Neon','operaneon','wml','https://get.geo.opera.com/.private/OperaNeonSetup.exe','https://get.geo.opera.com/.private/OperaNeon.dmg','https://download.opera.com/download/get/?partner=www&opsys=Linux');
browser('r','Brave','brave','wml','https://referrals.brave.com/latest/BraveBrowserSetup-BRV030.exe','https://referrals.brave.com/latest/Brave-Browser-BRV030.pkg','https://brave.com/linux/');
browser('r','Tor','tor','wml','https://www.torproject.org/dist/torbrowser/'+vtor+'/torbrowser-install-win64-'+vtor+'_ALL.exe','https://www.torproject.org/dist/torbrowser/'+vtor+'/tor-browser-macos-'+vtor+'.dmg','https://www.torproject.org/dist/torbrowser/'+vtor+'/tor-browser-linux64-'+vtor+'_ALL.tar.xz');
browser('r','Vivaldi','vivaldi','wml','https://downloads.vivaldi.com/stable/Vivaldi.'+vviv+'.x64.exe','https://downloads.vivaldi.com/stable/Vivaldi.'+vviv+'.universal.dmg','https://downloads.vivaldi.com/stable/vivaldi-stable_'+vviv+'-1_amd64.deb');
browser('r','Waterfox','waterfox','wml','https://cdn1.waterfox.net/waterfox/releases/latest/windows','https://cdn1.waterfox.net/waterfox/releases/latest/macos','https://cdn1.waterfox.net/waterfox/releases/latest/linux');
browser('r','Librewolf','librewolf','wml','https://gitlab.com/api/v4/projects/44042130/packages/generic/librewolf/'+vliw+'/librewolf-'+vliw+'-windows-x86_64-setup.exe','https://gitlab.com/api/v4/projects/44042130/packages/generic/librewolf/'+vliw+'/librewolf-'+vliw+'-macos-x86_64-package.dmg','https://librewolf.net/installation/debian/')
browser('r','Naver Whale','naverwhale','wm','https://installer-whale.pstatic.net/downloads/installers/WhaleSetup.exe','https://installer-whale.pstatic.net/downloads/installers/NaverWhale.dmg')
browser('r','Avast Secure','avastsecure','wm','https://cdn-download.avastbrowser.com/avast/avast_secure_browser_setup.exe','https://cdn-download.avastbrowser.com/AvastSecureBrowserSetupARM.pkg?direct=1')
browser('r','AVG Secure','avgsecure','wm','https://cdn-download.avgbrowser.com/avg/avg_secure_browser_setup.exe','https://cdn-download.avgbrowser.com/AVGSecureBrowserSetupARM.pkg','https://storage.googleapis.com/chromium-browser-snapshots/Mac_Arm/'+vcrm+'/chrome-mac.zip');
browser('r','Maxthon','maxthon','wm','https://github.com/maxthon/Maxthon/releases/download/'+vmax+'/maxthon_'+vmax+'_x64.exe','https://github.com/maxthon/Maxthon_mac/releases/download/'+vmax+'/Maxthon_mac_'+vmax+'.dmg');

browser('b','Chrome Beta','chromebeta','wml')
browser('b','Chrome Canary','chromecanary','wml')
browser('b','Edge Canary','edgecanary','wm','https://go.microsoft.com/fwlink/?linkid=2084706&Channel=Canary&language=en&brand=M103','https://go.microsoft.com/fwlink/?linkid=2093293&platform=Mac&Consent=0&channel=Canary')
browser('b','Edge Developer','edgedev','wml','https://go.microsoft.com/fwlink/?linkid=2084648&Channel=Dev&language=en','https://go.microsoft.com/fwlink/?linkid=2099619&platform=Mac&Consent=0&channel=Dev','https://go.microsoft.com/fwlink/?linkid=2124602')
browser('b','Edge Beta','edgebeta','wml','https://go.microsoft.com/fwlink/?linkid=2100017&Channel=Beta&language=en','https://go.microsoft.com/fwlink/?linkid=2099618&platform=Mac&Consent=0&channel=Beta','https://go.microsoft.com/fwlink/?linkid=2149139')
browser('b','Firefox Beta','firefoxbeta','wml','https://download.mozilla.org/?product=firefox-beta-latest-ssl&os=win&lang=en-US','https://download.mozilla.org/?product=firefox-beta-latest-ssl&os=osx&lang=en-US','https://download.mozilla.org/?product=firefox-beta-latest-ssl&os=linux64&lang=en-US')
browser('b','Firefox Developer','firefoxdev','wml','https://download.mozilla.org/?product=firefox-devedition-latest-ssl&os=win&lang=en-US','https://download.mozilla.org/?product=firefox-devedition-latest-ssl&os=osx&lang=en-US','https://download.mozilla.org/?product=firefox-devedition-latest-ssl&os=linux64&lang=en-US')
browser('b','Firefox Nightly','firefoxnightly','wml','https://download.mozilla.org/?product=firefox-nightly-latest-ssl&os=win&lang=en-US','https://download.mozilla.org/?product=firefox-nightly-latest-ssl&os=osx&lang=en-US','https://download.mozilla.org/?product=firefox-nightly-latest-ssl&os=linux64&lang=en-US')
browser('b','Opera Beta','operabeta','wml','https://net.geo.opera.com/opera/beta/windows','https://net.geo.opera.com/opera/beta/mac','https://download.opera.com/download/get/?partner=www&opsys=Linux&product=Opera+beta')
browser('b','Brave Beta','bravebeta','wml','https://laptop-updates.brave.com/latest/winx64/beta','https://laptop-updates.brave.com/latest/osx/beta','https://brave.com/linux/#beta-channel-installation')
browser('b','Brave Nightly','bravenightly','wml','https://laptop-updates.brave.com/latest/winx64/nightly','https://laptop-updates.brave.com/latest/osx/nightly','https://brave.com/linux/#nightly-channel-installation')
