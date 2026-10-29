(function(){try{if(localStorage.getItem('cc_consent'))return}catch(e){}
var b=document.getElementById('cookie');if(!b)return;b.style.display='flex';
function set(v){try{localStorage.setItem('cc_consent',v)}catch(e){}b.style.display='none'}
document.getElementById('ck-ok').onclick=function(){set('all')};
document.getElementById('ck-no').onclick=function(){set('essential')};})();
