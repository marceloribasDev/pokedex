const LegendaryModel = require('../models/LegendaryModel')

const controller = {
    getOneLegendary: (req, res) => {
        const model = new LegendaryModel(123, 'Pineco', 'Bagworm', 'Bug');
        return res.json(model)
    },
    getAllLegendaries: (req, res) => {
        const legendary1 = new LegendaryModel(123, 'Pineco', 'Bagworm', 'Bug');
        const legendary2 = new LegendaryModel(124, 'Pineco2', 'Bagworm', 'Bug');
        const legendary3 = new LegendaryModel(125, 'Pineco3', 'Bagworm', 'Bug');
        const legendary4 = new LegendaryModel(126, 'Pineco4', 'Bagworm', 'Bug');

        return res.json([
            legendary1, legendary2, legendary3, legendary4
        ])
    }
}

module.exports = controller;