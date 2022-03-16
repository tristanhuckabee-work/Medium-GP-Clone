'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Records', [
        {title:'small title',description:'...',userId:'1', createdAt: new Date(), updatedAt: new Date()},
        {title:'Basic Title',description:'...',userId:'1', createdAt: new Date(), updatedAt: new Date()},
        {title:'small desc',description:'hey whats going on',userId:'1', createdAt: new Date(), updatedAt: new Date()},
        {title:'big description',description:'Lorem ipsum dolor sit amet, ea vix elitr instructior. Ex tamquam molestie ius. Euismod eleifend disputando id mei, libris omittam legendos vix an, dolore scaevola in cum. Et mea regione adolescens, nominavi probatus at sit. Ad eum insolens gloriatur, ei pri imperdiet gloriatur.No eos natum graeci interpretaris, facer comprehensam in cum. Nec causae expetenda cu, denique officiis abhorreant mei in. Ut case assueverit pri, qui tritani expetendis cu, eu vel soluta debitis accusam. Pri id assum facilis delicata, solet forensibus in duo.Mazim decore menandri ne vix, mel epicurei accusata senserit an. Pri modus volumus insolens cu, ea ius vidit sanctus feugait. Per inermis recusabo concludaturque eu, omnium recusabo adolescens ius in. Ei prompta blandit intellegam sea. No duo omnesque patrioque assentior.Nam ut laoreet periculis accusamus. Wisi doming duo et. An nam justo posse consequuntur, et nam deleniti appellantur. Ne error euismod intellegam nam. Cu ullum noluisse antiopam cum, in hinc admodum minimum quo. Cu modo novum duo.Sit ei efficiantur complectitur, ad quo ludus elaboraret, tantas perpetua vis ut. Per ex percipit similique sententiae. Percipit pertinax ius et, ea ludus accusam salutatus pri. Legimus voluptua hendrerit at usu. Eos et offendit incorrupte, no vis stet mediocrem maluisset. Facer imperdiet cum ad, utroque debitis vim ex, ex esse duis duo.',userId:'1', createdAt: new Date(), updatedAt: new Date()},
        {title:'VENGEANCE',description:'I DO IT FOR GOTHAM CITY AND I BE LISTENING TO SKRILLEX',userId:'8', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Records', null, {});
  }
};
