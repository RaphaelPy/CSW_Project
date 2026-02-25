(function(){
  function byId(id){return document.getElementById(id)}
  function readJSON(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}}

  const study = readJSON('studyhub_data');
  const stats = readJSON('studyhub_stats');
  const prog = readJSON('studyhub_progress');

  let sessions = 0; let accuracy = 0; let level = '—';

  if (study && study.modules && study.modules.flashcards){
    const k = study.modules.flashcards.kpi || {};
    sessions = k.totalAttempts || 0;
    accuracy = Math.round(k.accuracy || k.masteryScore || 0);
    level = k.level || 'Anfänger';
  } else if (stats || prog){
    sessions = (stats && stats.totalAttempts) || (prog && prog.totalAttempts) || 0;
    accuracy = Math.round((prog && prog.accuracy) || (stats && stats.bestAccuracy) || 0);
    level = (prog && prog.level) || '—';
  } else {
    sessions = 2; accuracy = 78; level = 'Anfänger';
  }

  const sEl = byId('heroSessions'); if (sEl) sEl.textContent = sessions;
  const aEl = byId('heroAccuracy'); if (aEl) aEl.textContent = (accuracy? (accuracy + '%') : '-');
  const lEl = byId('heroLevel'); if (lEl) lEl.textContent = level;
})();
