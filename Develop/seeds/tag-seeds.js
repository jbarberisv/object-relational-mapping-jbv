const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = async () => {
  try {
    await Tag.sync({ force: true });
    await Tag.bulkCreate(tagData);
    console.log('tag seeded successfully.');
  } catch (error) {
    console.error('Error seeding tag:', error);
  } finally {
    // Close the database connection if necessary
    // sequelize.close();
  } 
};

module.exports = seedTags;
