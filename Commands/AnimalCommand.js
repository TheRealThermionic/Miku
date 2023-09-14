const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
 
module.exports = {
	data: new SlashCommandBuilder()
		.setName('animal')
		.setDescription('Sends a random animal image')
        .addStringOption(option =>
			option.setName('category')
				.setDescription('Type of animal')
				.setRequired(true)
				.addChoices(
					{ name: 'Bird', value: 'bird' },
					{ name: 'Cat', value: 'cat' },
					{ name: 'Dog', value: 'dog' },
					{ name: 'Fox', value: 'fox' },
					{ name: 'Kangaroo', value: 'kangaroo' },
					{ name: 'Koala', value: 'koala' },
					{ name: 'Panda', value: 'panda' },
					{ name: 'Raccoon', value: 'raccoon' },
					{ name: 'Red Panda', value: 'red_panda' },
				)),
	async execute(interaction) {
		await interaction.deferReply();
        const category = interaction.options.getString('category');
		fetch(`https://some-random-api.com/animal/${category}`)
		.then(res => res.json())
		.then(async json => {
			let animalemb = new EmbedBuilder()
			.setImage(json.image)
			.setFooter({text:`Requested by ${interaction.member.user.username}`})
			.setTimestamp()
			await interaction.editReply({ embeds: [animalemb], allowedMentions: { repliedUser: false }});
		});		
	},
};