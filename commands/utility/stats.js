const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stats')
		.setDescription('Replies with the stats of the provided player'),
	async execute(interaction) {
		await interaction.reply('Apagnan');
	},
};
