
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "achievement"; ALTER SEQUENCE achievement_id_seq RESTART WITH 5')
  .then(function(){
    const achievements = [{
      id: 1,
      name: "Garbage Volcano",
      value: 5,
      experience: 10,
      trophy_url: 'https://i.ytimg.com/vi/6M-YX-r0Ll4/maxresdefault.jpg'
    }, {
      id: 2,
      name: "Contender",
      value: 30,
      experience: 25,
      trophy_url: 'http://static.rogerebert.com/redactor_assets/pictures/far-flung-correspondents/he-coulda-been-a-contender/on-the-waterfront-brando-charley-car2.jpg'
    }, {
      id: 3,
      name: 'Bully',
      value: 5,
      experience: 5,
      trophy_url: 'https://chuwechuwe.files.wordpress.com/2014/01/bully.gif'
    }, {
      id: 4,
      name: 'Lounge Lizard',
      value: 80,
      experience: 35,
      trophy_url: 'http://2.bp.blogspot.com/-0ak-4dZUUHM/UmDSsa6Y2LI/AAAAAAAAQZs/XD0mLpIDLcg/s1600/2013-09-21+042.png'
    }];
    return knex('achievement').insert(achievements);
  });
};
