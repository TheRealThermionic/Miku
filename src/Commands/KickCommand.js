const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kick a user')
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .addUserOption(option => 
            option.setName('user')
                  .setDescription('Select a user to kick')
                  .setRequired(true))
		.addStringOption(option =>
			option.setName('reason')
				  .setDescription('State the reasoning for this kick')
				  .setRequired(false)),
	async execute(interaction, db, server_data, client) {
		//Permissions Check
		if(!interaction.guild.members.me.permissions.has(PermissionFlagsBits.KickMembers)) return await interaction.reply({ content: `I'm sorry, I do not have enough permissions!\nI need the \`Kick Members\` permission for this command!`, ephemeral: true }).catch(() => {return});
		//Get Target User
		let targetUser = interaction.options.getMember('user');
		if(targetUser.id==client.user.id) return await interaction.reply({content:"You can't kick me silly~!", ephemeral: true })
		//Target User Permissions Check
		if(!targetUser.kickable) return await interaction.reply({ content:"I'm unable to kick this person as they either have the \`Kick Members\` permission or they have a higher role than me!", ephemeral: true });
		//Reason Check
		let reason = interaction.options.getString('reason');
		if(reason==null){
			//No Reason
			targetUser.kick();
			let Kicked = new EmbedBuilder()
			.setTitle(`**:leg: Moderation: User Kicked**`)
			.setColor("#ff6961")
			.setDescription(`${targetUser} has been kicked from ${interaction.guild.name}!`)
			.setFooter({text: 'This. Is. SPARTA!'})
			await interaction.reply({ embeds: [Kicked], allowedMentions: {repliedUser: false}})
		}else{
			//  w/ Reason
			targetUser.kick({ reason: `${reason}` });
			let Kicked = new EmbedBuilder()
			.setTitle(`:leg: **Moderation: User Kicked**`)
			.setColor("#ff6961")
			.setDescription(`${targetUser} has been kicked from ${interaction.guild.name}! \n\n **Reason** \n ${reason}`)
			.setFooter({text: 'This. Is. SPARTA!'})
			await interaction.reply({ embeds: [Kicked], allowedMentions: {repliedUser: false}})  
		}
	},
};