'use strict';

const Homey = require('homey');

class MyApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('MyApp has been initialized');

    const card = this.homey.flow.getActionCard('Pause');

    card.registerRunListener(async (args) => {
      let delay = ms => new Promise(res => setTimeout(res, ms));
      const { Seconds } = args;
      await delay(Seconds*1000);
    })
  }

}

module.exports = MyApp;
