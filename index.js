const snekfetch = require('snekfetch');

class djsDataAPI {
    /**
     * @param {string} token Botumuzdan aldığınız, botunuzun tokeni.
     * @param {string} id Botunuzun idsi.
     */
    constructor(token, id) {
        this.token = token;
        this.BotID = id;
    }

    /**
     * @param {string} id Bot verisi alınacak ID.
     */
    async getInfo(id) {
        try {
            var request = await snekfetch
                .post('http://discordjsyardim.glitch.me/bots/' + id)
                .set("Authorization", this.token)
                .set("BotID", this.BotID);

                return request;

        } catch (err) {
            throw 'Error: ' + err.message;
        }
    }
}

module.exports = djsDataAPI;
