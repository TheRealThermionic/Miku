const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js')
const { api } = require('some-random-api');
 
const got = require('got');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('animal')
		.setDescription('Sends a random animal image')
        .addStringOption(option =>
			option.setName('category')
				.setDescription('Type of animal')
				.setRequired(true)
				.addChoices(
					{ name: 'Bird', value: 'animal_bird' },
					{ name: 'Cat', value: 'animal_cat' },
					{ name: 'Dog', value: 'animal_dog' },
					{ name: 'Fox', value: 'animal_fox' },
					{ name: 'Kangaroo', value: 'animal_kangaroo' },
					{ name: 'Koala', value: 'animal_koala' },
					{ name: 'Panda', value: 'animal_panda' },
					{ name: 'Raccoon', value: 'animal_racoon' },
					{ name: 'Red Panda', value: 'animal_red_panda' },
				)),
	async execute(interaction, args, client, prefix) {
		if(!interaction.guild) return
		if(interaction.content==undefined){
        const category = interaction.options.getString('category');
		var currentDateAndTime = new Date().toLocaleString();
		//Bird
		//Using Web API
		if(category=='animal_bird'){
			fetch('https://some-random-api.ml/animal/bird')
    		.then(res => res.json())
    		.then(json => {
				let animalemb = new EmbedBuilder()
				 .setImage(json.image)
				 .setFooter({text:`Requested by ${interaction.member.user.tag}   •   ${currentDateAndTime}`})
				 interaction.reply({ embeds: [animalemb], allowedMentions: { repliedUser: false }})
    			});		
		}
		//Cat
		if(category=='animal_cat'){
			api.img.cat().then(res => {
				let content = res.link;
				let ContentFilter1 = content.replace(/{ link: '/gi, "")
				let FinalImage = ContentFilter1.replace(/' }/gi, "")
				let animalemb = new EmbedBuilder()
				.setImage(FinalImage)
				.setFooter({text:`Requested by ${interaction.member.user.tag}   •   ${currentDateAndTime}`})
				interaction.reply({ embeds: [animalemb], allowedMentions: { repliedUser: false }})
			});	
		}
		//Dog
		if(category=='animal_dog'){
			api.img.dog().then(res => {
				let content = res.link;
				let ContentFilter1 = content.replace(/{ link: '/gi, "")
				let FinalImage = ContentFilter1.replace(/' }/gi, "")
				let animalemb = new EmbedBuilder()
				.setImage(FinalImage)
				.setFooter({text:`Requested by ${interaction.member.user.tag}   •   ${currentDateAndTime}`})
				interaction.reply({ embeds: [animalemb], allowedMentions: { repliedUser: false }})
			});	
		}
		//Fox
		if(category=='animal_fox'){
			api.img.fox().then(res => {
				let content = res.link;
				let ContentFilter1 = content.replace(/{ link: '/gi, "")
				let FinalImage = ContentFilter1.replace(/' }/gi, "")
				let animalemb = new EmbedBuilder()
				.setImage(FinalImage)
				.setFooter({text:`Requested by ${interaction.member.user.tag}   •   ${currentDateAndTime}`})
				interaction.reply({ embeds: [animalemb], allowedMentions: { repliedUser: false }})
			});	
		}
		//Kangaroo
		//Using Web API
		if(category=='animal_kangaroo'){
		fetch('https://some-random-api.ml/animal/kangaroo')
    		.then(res => res.json())
    		.then(json => {
				let animalemb = new EmbedBuilder()
				 .setImage(json.image)
				 .setFooter({text:`Requested by ${interaction.member.user.tag}   •   ${currentDateAndTime}`})
				 interaction.reply({ embeds: [animalemb], allowedMentions: { repliedUser: false }})
    			});
		}
		//Kola
		if(category=='animal_koala'){
			api.img.koala().then(res => {
				let content = res.link;
				let ContentFilter1 = content.replace(/{ link: '/gi, "")
				let FinalImage = ContentFilter1.replace(/' }/gi, "")
				let animalemb = new EmbedBuilder()
				.setImage(FinalImage)
				.setFooter({text:`Requested by ${interaction.member.user.tag}   •   ${currentDateAndTime}`})
				interaction.reply({ embeds: [animalemb], allowedMentions: { repliedUser: false }})
			});	
		}
		//Panda
		if(category=='animal_panda'){
			api.img.panda().then(res => {
				let content = res.link;
				let ContentFilter1 = content.replace(/{ link: '/gi, "")
				let FinalImage = ContentFilter1.replace(/' }/gi, "")
				let animalemb = new EmbedBuilder()
				.setImage(FinalImage)
				.setFooter({text:`Requested by ${interaction.member.user.tag}   •   ${currentDateAndTime}`})
				interaction.reply({ embeds: [animalemb], allowedMentions: { repliedUser: false }})
			});		
		}
		//Raccoon
		//Using Web API 
		if(category=='animal_racoon'){
			fetch('https://some-random-api.ml/animal/raccoon')
    		.then(res => res.json())
    		.then(json => {
				let animalemb = new EmbedBuilder()
				 .setImage(json.image)
				 .setFooter({text:`Requested by ${interaction.member.user.tag}   •   ${currentDateAndTime}`})
				 interaction.reply({ embeds: [animalemb], allowedMentions: { repliedUser: false }})
    			});		
		}
		//Red Panda
		if(category=='animal_red_panda'){
			api.img.redpanda().then(res => {
				let content = res.link;
				let ContentFilter1 = content.replace(/{ link: '/gi, "")
				let FinalImage = ContentFilter1.replace(/' }/gi, "")
				let animalemb = new EmbedBuilder()
				.setImage(FinalImage)
				.setFooter({text:`Requested by ${interaction.member.user.tag}   •   ${currentDateAndTime}`})
				interaction.reply({ embeds: [animalemb], allowedMentions: { repliedUser: false }})
			});	
		}
		}
	},
};