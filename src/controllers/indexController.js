// ============================================================
//  USHUAIA MUSICSTORE — controllers/indexController.js
// ============================================================

const controller = {

  // GET / — Home
  index: (req, res) => {
    res.render('index', {
      title: 'Ushuaia MusicStore — Instrumentos Musicales'
    });
  }

};

module.exports = controller;