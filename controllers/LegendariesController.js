const LegendariesService = require('../services/LegendariesServices');

const controller = {
    index: (req, res) => {
        const { id } = req.params;
        const { name } = req.query;

        const legendary = LegendariesService.ListPokemonData(name);

        return res.json(legendary)
    },
    create: (req, res) => {
        const { name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense } = req.body;

        const legendary = LegendariesService.createLegendary(
            name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense);

        return res.json(legendary);
    }
}

module.exports = controller;