const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('joke')
		.setDescription('Sends a joke'),
	async execute(interaction, args, client, prefix) {
        if(!interaction.guild) return
		if(interaction.content==undefined){
            fetch('https://some-random-api.com/joke')
    		.then(res => res.json())
    		.then(async json => {
                await interaction.editReply({ content: `${json.joke}`, ephemeral: false });
                return
    		});		
		}
	},
};