const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://notes-serverless-app.com',
   
    
  },

  "env": {
    "email": "lewaje9606@avidapro.com",
    "password": "dVLh8Ge66GdiYZv@"
  }
});