const { Plugin } = require('enmity');

class SmileyNotifications extends Plugin {
    constructor() {
        super();
        this.name = 'Smiley Notifications';
        this.description = 'Adds a smiley face to the beginning of Discord notification titles';
    }

    async start() {
        this.unpatch = this.patch('Notification', 'show', (args, originalFunction) => {
            args[0].title = `😊 ${args[0].title}`;
            return originalFunction(...args);
        });
    }

    stop() {
        this.unpatch();
    }
}

module.exports = SmileyNotifications;
