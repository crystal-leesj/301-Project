'use strict';

const renderHome = (req , res ) => {
  res.render('../public/views/pages/index.ejs');
}

module.exports = renderHome;
